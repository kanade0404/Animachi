from django.urls import path, include
from rest_framework import routers
from animachi.api import views

router = routers.DefaultRouter()
router.register('users', views.UserViewSet)
router.register('groups', views.GroupViewSet)
router.register('anime', views.AnimeViewSet)
router.register('ratings', views.RatingViewSet)

urlpatterns = [
    path('', include(router.urls)),
    path('authenticate/', views.CustomObtainAuthToken.as_view()),
]
