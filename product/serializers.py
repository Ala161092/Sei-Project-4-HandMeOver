from django.db import models
from rest_framework import serializers
from reviews.serializers import PopulatedReviewSerializer
from .models import Product

class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = '__all__'
    
class PopulatedProductSerializer(ProductSerializer):
    reviews = PopulatedReviewSerializer(many=True)
 