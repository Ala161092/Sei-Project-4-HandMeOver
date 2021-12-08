from django.db import models
from django.contrib.auth import get_user_model

User = get_user_model()

# Create your models here.
class Review(models.Model):
    text = models.TextField(max_length=500)
    rating = models.PositiveIntegerField()
    product = models.ForeignKey("product.Product", related_name="reviews", on_delete=models.CASCADE)
    owner = models.ForeignKey("jwt_auth.User", related_name="reviews", on_delete=models.CASCADE )
  

    def __str__(self):
        return f"Review: {self.text} I would rate this {self.product} {self.rating}/5."