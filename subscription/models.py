from django.db import models

# Create your models here.
class Subscription(models.Model):
    id = models.UUIDField
    title = models.CharField(max_length=30)
    description = models.CharField(max_length=50)

    def __str__(self):
        return self.title
