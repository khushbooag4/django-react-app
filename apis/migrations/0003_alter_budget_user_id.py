# Generated by Django 4.1.5 on 2023-01-04 08:51

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('apis', '0002_budget_category_budget_no_of_persons_budget_user_id'),
    ]

    operations = [
        migrations.AlterField(
            model_name='budget',
            name='user_id',
            field=models.IntegerField(default=None),
        ),
    ]
