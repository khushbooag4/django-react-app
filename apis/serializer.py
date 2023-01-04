from rest_framework import serializers
from .models import Budget


class BudgetSerializer(serializers.ModelSerializer):
    class Meta:
        model = Budget
        fields = ('id', 'user_id', 'name', 'budget_amount',
                  'persons', 'category', 'created_at')


# class CreateBudget(serializers.ModelSerializer):
#     class Meta:
#         model
