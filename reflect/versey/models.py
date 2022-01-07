from django.db import models
from django.db.models.deletion import CASCADE

# Create your models here.


class Book(models.Model):
    name = models.CharField(max_length=100)
    description = models.TextField(blank=True)
    position = models.IntegerField()

    class Meta:
        ordering = ['position']

    def __str__(self):
        return self.name


class Chapter(models.Model):
    name = models.TextField()
    book = models.CharField(max_length=100)
    chapter = models.IntegerField()

    class Meta:
        ordering = ['book', 'chapter']

    def __str__(self):
        return self.name
