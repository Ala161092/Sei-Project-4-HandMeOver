from django.urls import path
from .views import CartDetailView, CartListView

urlpatterns = [
    path('', CartListView.as_view()),
    path('<int:pk>/', CartDetailView.as_view()),
]