from django.contrib.auth.models import User
from django.db import models
from django.db.models.deletion import PROTECT
from eventtools.models import BaseEvent, BaseOccurrence
from datetime import datetime

# Create your models here.
class Subscription(BaseEvent):
    CATEGORY_HEALTH = 'health'
    CATEGORY_ENTERTAINMENT = 'entertainment'
    CATEGORY_UTILITIES = 'utilities'
    CATEGORY_WORK = 'work'
    CATEGORY_INSURANCE = 'insurance'
    CATEGORY_OTHER = 'other'
    
    CATEGORY_CHOICES = [
        (CATEGORY_HEALTH, 'health'),
        (CATEGORY_ENTERTAINMENT, 'entertainment'),
        (CATEGORY_UTILITIES, 'utilities'),
        (CATEGORY_WORK, 'work'),
        (CATEGORY_INSURANCE, 'insurance'),
        (CATEGORY_OTHER, 'other')
    ]

    SUBSCRIPTION_MONTHLY = 'M'
    SUBSCRIPTION_YEARLY = 'Y'
    
    SUBSCRIPTION_FREQUENCIES = [
        (SUBSCRIPTION_MONTHLY, 'monthly'),
        (SUBSCRIPTION_YEARLY, 'yearly'),
    ]
    subscription_id = models.UUIDField
    subscription_name = models.CharField(max_length=30)
    subscription_user = models.ForeignKey(User, on_delete=PROTECT)
    subscription_logo_path = models.CharField(max_length=128, default='placeholder.svg')
    subscription_category = models.CharField(max_length=13, choices=CATEGORY_CHOICES, default=CATEGORY_ENTERTAINMENT)
    subscription_cost = models.DecimalField(max_digits=10, decimal_places=4)
    subscription_start = models.DateField()
    subscription_frequency = models.CharField(max_length=1, choices=SUBSCRIPTION_FREQUENCIES, default=SUBSCRIPTION_MONTHLY)

    def __str__(self):
        return self.subscription_name

class SubscriptionOccurence(BaseOccurrence):
    event = models.ForeignKey(Subscription, on_delete=PROTECT)

class Transaction(models.Model):
    transaction_id = models.UUIDField
    transaction_subscription = models.ForeignKey(Subscription, on_delete=PROTECT)
    transaction_date = models.DateTimeField(auto_now=True)
    transaction_cost = models.DecimalField(max_digits=10, decimal_places=4)

    def __str__(self):
        return self.transaction_id
      