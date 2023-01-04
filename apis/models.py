from django.db import models


TYPE = (
    ("grocery", "grocery"),
    ("houserent", "houserent"),
    ("outing", "outing"),
    ("travel", "travel"),
    ("service", "service")
)
# Create your models here.


class Budget(models.Model):
    name = models.CharField(max_length=100)
    user_id = models.IntegerField(default=None)
    budget_amount = models.IntegerField(default=1000)
    no_of_persons = models.IntegerField(default=2)
    category = models.CharField(
        max_length=100, choices=TYPE, default="service")
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.name
