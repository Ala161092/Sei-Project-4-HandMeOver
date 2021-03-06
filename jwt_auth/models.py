from django.db import models
from django.contrib.auth.models import AbstractUser



# Create your models here.
class User(AbstractUser):
    email = models.CharField(max_length=50, unique=True)
    first_name = models.CharField(max_length=75)
    last_name = models.CharField(max_length=75)
    profile_image = models.CharField(max_length=300)
    wishlist = models.ManyToManyField("product.Product", related_name='users', blank=True)
   


