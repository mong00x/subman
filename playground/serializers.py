from rest_framework import serializers
from .models import Playground 

# pass data in to frontend JSON form

class PlaygroundSerializer(serializers.ModelSerializer):
    class Meta:
        model = Playground 
        fields = ('id', 'title', 'description')
