from django.db import models
from django.db.models.deletion import PROTECT

# Create your models here.
class Category(models.Model):
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
    category_id = models.UUIDField
    category_type = models.CharField(max_length=13, choices=CATEGORY_CHOICES, default=CATEGORY_ENTERTAINMENT)

    def __str__(self):
        return self.category_type


class Subscription(models.Model):
    SUBSCRIPTION_MONTHLY = 'M'
    SUBSCRIPTION_YEARLY = 'Y'
    
    SUBSCRIPTION_FREQUENCIES = [
        (SUBSCRIPTION_MONTHLY, 'monthly'),
        (SUBSCRIPTION_YEARLY, 'yearly'),
    ]
    subscription_id = models.UUIDField
    subscription_name = models.CharField(max_length=30)
    subscription_cost = models.DecimalField(max_digits=10, decimal_places=4)
    subscription_start = models.DateField()
    subscription_frequency = models.CharField(max_length=1, choices=SUBSCRIPTION_FREQUENCIES, default=SUBSCRIPTION_MONTHLY)
    # subscription_category = models.ForeignKey(Category, on_delete=PROTECT)

    def __str__(self):
        return self.subscription_name

class Transaction(models.Model):
    transaction_id = models.UUIDField
    transaction_subscription = models.ForeignKey(Subscription, on_delete=PROTECT)
    # transaction_user = models.ForeignKey()
    transaction_date = models.DateTimeField(auto_now=True)
    transaction_cost = models.DecimalField(max_digits=10, decimal_places=4)

    def __str__(self):
        return self.transaction_id
      