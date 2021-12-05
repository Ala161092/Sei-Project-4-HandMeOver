from django.shortcuts import render

# Create your views here.
from django.contrib.auth import get_user_model
from django.shortcuts import render
from rest_framework import permissions
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework.exceptions import PermissionDenied
from rest_framework.exceptions import NotFound
from .serializers import BasketSerializer, PopulatedBasketSerializer
from rest_framework.permissions import IsAuthenticated, IsAuthenticatedOrReadOnly

from .models import Checkout_Cart

# User = get_user_model

# Create your views here.
class CartListView(APIView):
    
    permission_classes = (IsAuthenticated, )
    #get all carts
    def get(self, request):
        checkout_carts = Checkout_Cart.objects.filter(owner=self.request.user)
        serialized_carts = PopulatedBasketSerializer(checkout_carts, many=True)
        return Response(serialized_carts.data, status=status.HTTP_200_OK)

    #create a cart
    def post(self, request):
        request.data["owner"] = request.user.id
        cart = BasketSerializer(data=request.data)
        if cart.is_valid():
            cart.save()
            return Response(cart.data, status=status.HTTP_201_CREATED)
        else:
            return Response(cart.errors, status=status.HTTP_422_UNPROCESSABLE_ENTITY)


class CartDetailView(APIView):

    permission_classes = (IsAuthenticated, )

    def delete(self, request, pk):
        try: 
            cart_delete = Checkout_Cart.objects.get(id=pk)
        except Checkout_Cart.DoesNotExist:
            raise NotFound()
        if cart_delete.owner != request.user:
            raise PermissionDenied()
        cart_delete.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)

    def put(self, request, pk):
        cart_update = Checkout_Cart.objects.get(id=pk)
        updated_cart = BasketSerializer(cart_update, data=request.data, partial=True)
        if updated_cart.is_valid():
            updated_cart.save()
            return Response(updated_cart.data, status=status.HTTP_202_ACCEPTED)
        else:
            return Response(updated_cart.errors, status=status.HTTP_422_UNPROCESSABLE_ENTITY)
