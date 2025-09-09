from rest_framework import generics
from .models import Link
from .serializers import LinkListSerializer

class LinkList(generics.ListAPIView):
    queryset = Link.objects.all()
    serializer_class = LinkListSerializer