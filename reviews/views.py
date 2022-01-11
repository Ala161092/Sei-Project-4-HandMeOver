from django.shortcuts import render

# Create your views here.
from django.http.response import HttpResponse
from django.shortcuts import render
from rest_framework import permissions
from rest_framework.exceptions import NotFound, PermissionDenied
from .models import Review
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework.exceptions import PermissionDenied
from rest_framework.exceptions import NotFound
from .serializers import ReviewSerializer, PopulatedReviewSerializer
from rest_framework.permissions import IsAuthenticatedOrReadOnly
from .models import Review


class ReviewListView(APIView):

    permission_classes = (IsAuthenticatedOrReadOnly, )
    # get all reviews
    def get(self, _request):
        reviews = Review.objects.all()
        serialized_reviews = PopulatedReviewSerializer(reviews, many=True)
        return Response(serialized_reviews.data, status=status.HTTP_200_OK)

    #create a review 
    def post(self, request):
        request.data["owner"] = request.user.id # when a request comes in add to the request body a key of owner
        review = ReviewSerializer(data=request.data)
        if review.is_valid():
            review.save()
            return Response(review.data, status=status.HTTP_201_CREATED)
        else:
            return Response(review.errors, status=status.HTTP_422_UNPROCESSABLE_ENTITY)

class ReviewDetailView(APIView):
    permission_classes = (IsAuthenticatedOrReadOnly)
    def get(self, _request, pk):
        review = Review.objects.get(id=pk)
        serialized_review = ReviewSerializer(review)
        return Response(serialized_review.data, status=status.HTTP_200_OK)

    def delete(self, request, pk):
        try: 
            review = Review.objects.get(id=pk)
        except Review.DoesNotExist:
            raise NotFound()
        if review.owner != request.user:
            raise PermissionDenied()
        review.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)


       



    