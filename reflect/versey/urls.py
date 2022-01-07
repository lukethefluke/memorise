from django.urls import path
from . import views

urlpatterns = [
    path('', views.ListChapter.as_view()),
    path('<int:pk>/', views.DetailChapter.as_view()),
]
