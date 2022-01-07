from rest_framework import generics

from .models import Chapter
from versey.serializers import ChapterSerializer


class ListChapter(generics.ListAPIView):
    queryset = Chapter.objects.all()
    serializer_class = ChapterSerializer
    name = 'chapter-list'

    filter_fields = (
        'book',
        'chapter'
    )


class DetailChapter(generics.RetrieveAPIView):
    queryset = Chapter.objects.all()
    serializer_class = ChapterSerializer
