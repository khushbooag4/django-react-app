# this will store the endpoints of the current directory
from django.urls import path
from .views import BudgetView

urlpatterns = [
    path('', BudgetView.as_view()),
]
