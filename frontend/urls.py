# this will store the endpoints of the current directory
from django.urls import path
from .views import index

urlpatterns = [
    path('home/', index, name="home"),
    path('', index),
    path('login/', index, name="login"),
    path('register/', index,  name='register')
]
