# this will store the endpoints of the current directory
from django.urls import path
from .views import register, login

urlpatterns = [
    path('register/', register),
    path('login/', login)
]
