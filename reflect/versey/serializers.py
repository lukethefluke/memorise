from rest_framework import serializers
from versey.models import Chapter


class ChapterSerializer(serializers.ModelSerializer):
    #book_name = serializers.CharField(source='book.name')

    class Meta:
        model = Chapter
        fields = ['id', 'name', 'book', 'chapter']
