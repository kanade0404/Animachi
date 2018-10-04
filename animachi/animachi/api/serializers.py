from django.contrib.auth.models import User, Group
from rest_framework import serializers
from animachi.api.models import Anime, Rating


class UserSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'username', 'email', 'password')
        extra_kwargs = {'password': {'write_only': True, 'required': True}}

    def create(self, validated_data):
        user = User.objects.create_user(**validated_data)
        return user


class AnimeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Anime
        fields = ('id', 'title', 'description', 'avg_rating', 'no_of_ratings')


class FastAnimeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Anime
        fields = ('id', 'title')


class RatingSerializer(serializers.ModelSerializer):
    class Meta:
        model = Rating
        fields = ('id', 'stars', 'user', 'anime')


class GroupSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Group
        fields = ('url', 'name')
