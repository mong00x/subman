from django.shortcuts import render
from django.http import HttpResponse

from rest_framework import viewsets
from .serializers import PlaygroundSerializer
from .models import Playground

# Create your views here.
# request -> response


def say_hello(request):
    return render(request, 'hello.html', {'name': 'Team'})

# The viewsets base class provides the implementation for CRUD operations by default.
# This code specifies the serializer_class and the queryset.


class PlaygroundView(viewsets.ModelViewSet):
    serializer_class = PlaygroundSerializer
    queryset = Playground.objects.all()
