# Sei-project-4-HandMeOver



# Overview

This was my final project during the General Assembly, Software Engineering Immersive Course. 
To ensure that I had truly cemented all the learning over the past few months, I decided to make this a solo project. 
HandMeOver is a luxury ecommerce site, where users are able to purchase handbags, read reviews and sell their own handbag.


# Brief
We were given 8 days to build a full stack application that was built using a Django & Python back-end with a React front-end.

# Site Preview

![Screenshot 2022-01-31 at 20-51-42 HandMeOver](https://user-images.githubusercontent.com/77459312/151871215-768f00f6-6c84-40a4-b00c-fa40a8d8aba5.png)


# Deployment

HandMeOver can be found here. To gain full access to the site and to be able to add products into the cart - 
please use the login details :
username: ala@email.com 
pass: nader123

## Link

- Live Site URL: (https://handmeover.herokuapp.com/)

# My process

## Built with

#### Front-End:
- JavaScript(ES6)
- React.js 
- HTML5
- CSS3 + SASS

#### Back-End:
- Django 
- Python
- PostgreSQL
- Node.js

#### Dependencies:
- Cloudinary

#### Dev Tools:
- GitHub
- Figma
- Notion
- Photoshop
- Firefox Developer Edition
- Insomnia



# Getting Started
Planning has always been one of the main foundations for all my projects. To fully understand and envision the relationships between my models I used an ERD diagram:
![ERD](https://user-images.githubusercontent.com/77459312/151815897-e4d5157b-ec96-4790-a9d9-7c25e471473b.jpg)

Below is the wireframe for the design of the application. This was done using Figma and Photoshop. The detailed wireframe ensured that I stayed focused on the design.
![Wireframe](https://user-images.githubusercontent.com/77459312/151816381-e509b8c0-2692-4d64-9372-76c2ba8f0991.jpg)

# Development

## Back-End
Using Django and Python, I spent the next few days creating my models and establishing the different relationships between them including one-to-many and many-to-many. I created 4 models, the Product model as seen below, User model, Review model, and the Checkout model. 
```
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
   Jacquemus = 'Jacquemus'
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
       (Jacquemus, 'Jacquemus'),
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
```

Once each model had been finalized, I then went on to create the serializers, before finally moving on to create the Rest framework and the different GET, POST, PUT, DELETE requests for each entity. 

```
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

```

I was now able to test all the request methods and was able to see whether the correct relationships between each model had been rightly established. 

![insomnia](https://user-images.githubusercontent.com/77459312/151817123-9b378c3f-6032-4fd1-9676-c25e9faab976.jpg)


## Front-End
The remaining four days of the week was spent on developing my front-end, which had been created using React. 
As this was my third project using React, I wanted to incorporate different features and make use of its many components.

Below is the Product component. Users are able to search for a bag based on a brand name search. This is a live search feature, it updates the products visible based on each matching character. 

![Screen Recording 2022-01-31 at 20 54 30](https://user-images.githubusercontent.com/77459312/151871770-dfc8f83a-b3fd-4616-9616-ba9340d3c2e7.gif)
```
import React, { useEffect, useState } from 'react'
import { getProducts } from '../helpers/api'
import ProductCard from './ProductsCard'
 
const ProductsList = () => {
 const [products, setProductsDefault] = useState([])
 const [query, setSearchQuery] = useState('')
 
 useEffect(() => {
   getProducts().then(setProductsDefault)
 }, [])
 
 return (
   <div className='products-wrapper'>
     <div className='search-wrapper'>
       <input
         className='search-bar'
         placeholder='Search Brand'
         onChange={(event) => setSearchQuery(event.target.value)}
       />
     </div>
     <div className='product-wrapper'>
       {products
         .filter((product) => {
           if (query === '') {
             return product
           } else if (
             product.brand.toLowerCase().includes(query.toLowerCase())
           ) {
             return product
           }
         })
         .map((product) => (
           <div key={product.id} className='product-container'>
             <ProductCard {...product} />
           </div>
         ))}
     </div>
   </div>
 )
}
export default ProductsList
```
During my project, I wanted to ensure that as per many ecommerce sites - there are two types of users. Those who are logged in and those who are not. 
For Instance a logged in user is able to leave a review, whereas someone who is not logged in is only able to read a review.

isLoggedIn? - checks for user authentication. Whether or not a token is present. That token is then split and returns the second part, known as the payload. 

https://user-images.githubusercontent.com/77459312/151873614-6afc87fe-08d1-4cbc-9093-c36abc5cad29.mov
```
export const getPayload = () => {
 const token = getToken()
 if (!token) return false
 const split = token.split('.')
 console.log('spliitt--->', split)
 return JSON.parse(atob(split[1]))
 }
 
export function isAuthenticated() {
 const payload = getPayload()
 console.log('payload--->', payload)
 if (!payload) return false
 return true
}
 
	
const isLoggedIn = isAuthenticated()
{isLoggedIn ? (
             <>
               <form onSubmit={handleAddReview}>
                 <div>
                   <label className='review-header'>
                     Review: {product.name}
                   </label>
                 </div>
                 <div>
                   <textarea
                     onChange={handleChange}
                     name='text'
                     value={formData.text}
                     placeholder='Leave A Review'
                   ></textarea>
                 </div>
                 <div>
                               Rate the bag:
                   <input
                     type='number'
                     onChange={handleChange}
                     name='rating'
                     min='1'
                     max='5'
                     value={formData.rating}
                   />
                 </div>
                 <input
                   className='home-cta'
                   type='submit'
                   value='Add My Review'
                 />
               </form>
             </>
           ) : (
             <p>Please Log in to leave a review</p>
           )}

```


https://user-images.githubusercontent.com/77459312/151874034-15d9714a-3836-4774-a3e3-1a21017d91ef.mov

https://user-images.githubusercontent.com/77459312/151874291-ba8ee59c-67dc-4dcd-ab01-2abf2aa05e8c.mov

# Challenges
  • Incorporating SwiperJs into the project was rather difficult at first. Especially on the individual items page, this was due to the design I had in mind. This meant I had to overwrite some of the pre-built styling. However, I am glad that I took the time out to do so, as the end result looked great.  
  • I found the deployment of this project rather challenging, I had some issues with nested folders causing compatibility conflicts. This has since been resolved with some folders rearrangements. 

# Wins & Key Learnings:
  • As we had only spent two weeks learning Django and Python, I was really able to cement that learning with this project. I was able to more so understand JavaScript syntax and really put it to use.   
  • Incorporating features such as Swiper and the React bootstrap offCavans component, gave my project the ultra modern touch. Taking the time out to understand and learn these features means that I will now be able to use them on any future projects.   
The site is fully responsive, this is something I wanted to ensure I made enough time for during this project. 

# Future Improvments
  • I would like to incorporate a payment method during the checkout process. In particular, the use of Stripe would have worked perfectly with this project.

