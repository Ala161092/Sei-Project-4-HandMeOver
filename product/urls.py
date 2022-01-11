from django.urls import path
from .views import ProductListView, ProductDetailView

urlpatterns = [
    path('<int:pk>/', ProductDetailView.as_view()),
    path('', ProductListView.as_view()),

]