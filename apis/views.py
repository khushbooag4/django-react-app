from django.shortcuts import render
from django.http import HttpResponse
from .serializer import BudgetSerializer
from rest_framework import generics
from .models import Budget

# Create your views here.


def main(request, *args, **kwargs):
    return HttpResponse("Hello World")


class BudgetView(generics.CreateAPIView):
    queryset = Budget.objects.all()
    serializer_class = BudgetSerializer
