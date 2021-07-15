from django.contrib.auth.models import User, Group
from django.db import models
from rest_framework import serializers
from .models import Subscription, Transaction

# pass data in to frontend JSON form
class SubscriptionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Subscription
        fields = ('id', 'subscription_name', 'subscription_category', 'subscription_frequency', 'subscription_logo_path', 'subscription_cost', 'subscription_start', 'subscription_user')

# class SubscriptionOccuranceSerializer(serializers):
#     class Meta:
#         model = Subscription
#         next_occurrence = Subscription.subscription_id.next_occurrence()

class TransactionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Transaction
        fields = ('')

class UserSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = User
        fields = ['url', 'username', 'email', 'groups']

class GroupSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Group
        fields = ['url', 'name']