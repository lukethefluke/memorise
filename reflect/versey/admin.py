from django.contrib import admin
from .models import Book, Chapter


class ChapterA(admin.ModelAdmin):
    list_display = ('book', 'chapter')


# Register your models here.
admin.site.register(Book)
admin.site.register(Chapter, ChapterA)
