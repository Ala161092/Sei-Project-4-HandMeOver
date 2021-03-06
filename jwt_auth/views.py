from django.shortcuts import render

# Create your views here.
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.exceptions import PermissionDenied
from django.contrib.auth import get_user_model
from django.conf import settings
import jwt

from .userserializer import UsersOnlySerializer
from .serializers import PopulatedUserSerializer, UserSerializer
from rest_framework.permissions import IsAuthenticated
from rest_framework import status
User = get_user_model()

class RegisterView(APIView):

    def post(self, request):
        serializer = UserSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response({'message': 'Registration successful'})

        return Response(serializer.errors, status=422)


class LoginView(APIView):

    def get_user(self, email):
        try:
            return User.objects.get(email=email)
        except User.DoesNotExist:
            raise PermissionDenied({'message': 'Invalid credentials'})

    def post(self, request):

        email = request.data.get('email')
        password = request.data.get('password')

        user = self.get_user(email)
        if not user.check_password(password):
            raise PermissionDenied({'message': 'Invalid credentials'})

        token = jwt.encode({'sub': user.id}, settings.SECRET_KEY, algorithm='HS256')
        return Response({'token': token, 'message': f'Welcome back {user.username}!'})

class ProfileView(APIView):
    permission_classes = (IsAuthenticated,)

    def get(self, request):
        profile = User.objects.get(pk=request.user.id)
        serialized_profile = PopulatedUserSerializer(profile)
        return Response(serialized_profile.data, status=status.HTTP_200_OK)
    

    def put(self, request):
        profile = User.objects.get(pk=request.user.id)
        updated_profile = UsersOnlySerializer(profile, data=request.data, partial=True)
        if updated_profile.is_valid():
            updated_profile.save()
            return Response(updated_profile.data, status=status.HTTP_202_ACCEPTED)
        else:
            return Response(updated_profile.errors, status=status.HTTP_422_UNPROCESSABLE_ENTITY)
