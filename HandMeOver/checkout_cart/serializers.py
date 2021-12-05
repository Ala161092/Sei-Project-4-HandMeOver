from rest_framework import serializers
from product.serializers import PopulatedProductSerializer
from .models import Checkout_Cart
from jwt_auth.serializers import UserSerializer


class BasketSerializer(serializers.ModelSerializer):
    class Meta:
        model = Checkout_Cart
        fields = '__all__'


class PopulatedBasketSerializer(BasketSerializer):
    product = PopulatedProductSerializer()
    owner = UserSerializer()