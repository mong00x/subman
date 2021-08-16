from rest_framework import serializers
<<<<<<< HEAD
from .models import *

# pass data in to frontend JSON form


class PlaygroundSerializer(serializers.ModelSerializer):
    class Meta:
        model = Playground
=======
from .models import Playground 

# pass data in to frontend JSON form

class PlaygroundSerializer(serializers.ModelSerializer):
    class Meta:
        model = Playground 
>>>>>>> 68dc638e820c3298ff7b3e36f111e728bbd47edd
        fields = ('id', 'title', 'description')
