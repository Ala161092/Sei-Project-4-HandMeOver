from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework.permissions import IsAuthenticatedOrReadOnly

# Add the following import
from django.http import HttpResponse

from .models import Product
from .serializers import ProductSerializer, PopulatedProductSerializer



# Define the home view
def home(request):
    list_of_products = Product.objects.all()
    print(list_of_products)
    return HttpResponse('<h1>Hello /ᐠ｡‸｡ᐟ\ﾉ</h1>')

class ProductListView(APIView):
    permission_classes = (IsAuthenticatedOrReadOnly,)

    def get(self, _request):
        products = Product.objects.all()
        serialized_products = ProductSerializer(products, many=True)
        return Response(serialized_products.data, status=status.HTTP_200_OK)

    def post(self, request):
        product = ProductSerializer(data=request.data, partial=True)
        if product.is_valid():
            product.save(owners=[request.user])
            return Response(product.data, status=status.HTTP_201_CREATED)
        else:
            return Response(product.errors, status=status.HTTP_422_UNPROCESSABLE_ENTITY)


class ProductDetailView(APIView):
    permission_classes = (IsAuthenticatedOrReadOnly,)

    def get(self, _request, pk):
        product = Product.objects.get(id=pk)
        serialized_products = PopulatedProductSerializer(product)
        return Response(serialized_products.data, status=status.HTTP_200_OK)

    def delete(self, request, pk):
        product = Product.objects.get(id=pk)
        product.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)

    def put(self, request, pk):
        product = Product.objects.get(id=pk)
        updated_product = ProductSerializer(product, data=request.data, partial=True)
        if updated_product.is_valid():
            updated_product.save()
            return Response(updated_product.data, status=status.HTTP_202_ACCEPTED)
        else:
            return Response(updated_product.errors, status=status.HTTP_422_UNPROCESSABLE_ENTITY)