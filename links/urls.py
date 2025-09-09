from django.urls import path
from .views import LinkList

urlpatterns = [
    path('links/', LinkList.as_view(), name='link_list'),
]