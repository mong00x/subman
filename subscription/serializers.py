from rest_framework import serializers
from .models import Subscription

# pass data in to frontend JSON form


class SubscriptionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Subscription
        fields = ('id', 'title', 'description')