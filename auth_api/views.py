from django.shortcuts import render, redirect
from django.http import HttpResponse
from django.contrib.auth import authenticate, login
from django.contrib.auth.models import User
from django.contrib.auth.forms import UserCreationForm
from django.contrib import messages
from .forms import CreateUserForm
from django.views.decorators.csrf import ensure_csrf_cookie

# Create your views here.


def register(request):
    if request.user.is_authenticated:
        return redirect('home')
    else:
        if (request.method == 'POST'):
            print(request.POST)
            form = CreateUserForm(request.POST)
            if form.is_valid():
                form.save()
                print('Registration succcessful')
                messages.success(request, "Register Successfully")
                return redirect('login')
            else:
                print('registration failed, Enter correct details')

    return redirect("register")


def loginPage(request):
    print(request.POST)
    if request.user.is_authenticated:
        return redirect('home')
    else:
        if request.method == 'POST':
            username = request.POST['username']
            password = request.POST['password']
            user = authenticate(request, username=username, password=password)
            if user is not None:
                login(request, user)
                messages.success(request, f' welcome {username} !!')
                return redirect('home')
            else:
                messages.info(request, "Username and password are incorrect")
                return redirect('home')
    return HttpResponse('Enter your username and password correctly')
