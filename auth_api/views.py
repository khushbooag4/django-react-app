from django.shortcuts import render
from django.http import HttpResponse
from django.contrib.auth import authenticate
from django.contrib.auth.models import User
from django.contrib.auth.forms import UserCreationForm
from .forms import CreateUserForm
from django.views.decorators.csrf import ensure_csrf_cookie

# Create your views here.


def register(request):
    print(request.POST)
    form = CreateUserForm(request.POST)
    if (form.is_valid()):
        form.save()
    else:
        print("Registration Failed")
    return HttpResponse("register")


def login(request):
    print(request.POST.get)
    data = request.POST
    user = authenticate(username=data.username, password=data.password)
    login(request, user)
    if user is not None:
        return HttpResponse("login success")
    else:
        return HttpResponse("login failed")
