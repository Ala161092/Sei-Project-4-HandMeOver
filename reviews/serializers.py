from rest_framework import serializers

from jwt_auth.userserializer import UsersOnlySerializer
from .models import Review


class ReviewSerializer(serializers.ModelSerializer):
    class Meta:
        model = Review
        fields = '__all__'

class PopulatedReviewSerializer(ReviewSerializer):
    owner = UsersOnlySerializer()
