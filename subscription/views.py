# from django.shortcuts import render
from django.http import HttpResponse

from rest_framework import viewsets
from .serializers import SubscriptionSerializer
from .models import Subscription 

# Create your views here.
def say_hello(request):
    return HttpResponse('Hello!')
    
# The viewsets base class provides the implementation for CRUD operations by default.
# This code specifies the serializer_class and the queryset.
class SubscriptionView(viewsets.ModelViewSet):
    serializer_class = SubscriptionSerializer
    queryset = Subscription.objects.all()
