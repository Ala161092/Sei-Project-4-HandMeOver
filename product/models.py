from django.db import models
from django.contrib.auth import get_user_model

User = get_user_model()


# Create your models here.
class Product(models.Model):
    name = models.CharField(max_length=100)
    AS = 'Acne Studios'
    AM = 'Alexander McQueen'
    Balenciaga = 'Balenciaga'
    Balmain = 'Balmain'
    BV = 'Bottega Veneta'
    Celine ='Celine'
    Chanel = 'Chanel'
    Coach = 'Coach'
    Dior = 'Dior'
    Fendi = 'Fendi'
    Givenchy = 'Givenchy'
    Gucci = 'Gucci'
    Hermes = 'Hermes'
    Jacquemes = 'Jacquemes'
    LV = 'Louis Vuitton'
    Prada = 'Prada'
    SL = 'Saint Laurent'
    TF = 'Tom Ford'
    Valentino = 'Valentino'
    Versace = 'Versace'
    brand_Choices = [
        (AS, 'Acne Studios'),
        (AM, 'Alexander McQueen'),
        (Balenciaga, 'Balenciaga'),
        (Balmain, 'Balmain'),
        (BV, 'Bottega Veneta'),
        (Celine, 'Celine'),
        (Chanel, 'Chanel'),
        (Coach, 'Coach'),
        (Dior, 'Dior'),
        (Fendi, 'Fendi'),
        (Givenchy, 'Givenchy'),
        (Gucci, 'Gucci'),
        (Hermes, 'Hermes'),
        (Jacquemes, 'Jacquemes'),
        (LV, 'Louis Vuitton'),
        (Prada, 'Prada'),
        (SL, 'Saint Laurent'),
        (TF, 'Tom Ford'),
        (Valentino, 'Valentino'),
        (Versace, 'Versace'),

    ]
    brand = models.CharField(
        max_length=20,
        choices=brand_Choices,
        default=AS,
    )

    description = models.TextField(max_length=550)
    New = 'New'
    Fair = 'Fair'
    Tlc = 'Tlc'
    condition_Choices = [
        (New , 'New'),
        (Fair, 'Fair Wear and Tear'),
        (Tlc, 'Major Tlc Needed'),

    ]
    condition = models.CharField(
        max_length=4,
        choices=condition_Choices,
        default=New,
    )
    price = models.DecimalField(decimal_places=2, max_digits=7)
    image = models.CharField(max_length=300)
    image2 = models.CharField(max_length=300)
    image3 = models.CharField(max_length=300)
    owner = models.ForeignKey("jwt_auth.User", related_name="product", on_delete=models.CASCADE )


    def __str__(self):
        return "Product " + self.name