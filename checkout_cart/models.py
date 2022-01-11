from django.db import models

# Create your models here.
class Checkout_Cart(models.Model):
    product = models.ForeignKey("product.Product", related_name="checkout_cart", on_delete=models.CASCADE)
    owner = models.ForeignKey("jwt_auth.User", related_name="checkout_cart", on_delete=models.CASCADE)
    items_in_cart = models.PositiveIntegerField()


    def __str__(self):
        return f"Basket: {self.product} is in your bag"