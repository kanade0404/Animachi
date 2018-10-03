from django.contrib.auth.models import User, Group
from rest_framework import viewsets, status
from rest_framework.authentication import TokenAuthentication, SessionAuthentication
from rest_framework.authtoken.views import ObtainAuthToken
from rest_framework.permissions import IsAuthenticated
from rest_framework.authtoken.models import Token
from rest_framework.response import Response
from rest_framework.decorators import list_route
from animachi.api.serializers import UserSerializer, GroupSerializer, AnimeSerializer, RatingSerializer
from animachi.api.models import Anime, Rating


class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all().order_by('-date_joined')
    serializer_class = UserSerializer


class AnimeViewSet(viewsets.ModelViewSet):
    queryset = Anime.objects.all()
    serializer_class = AnimeSerializer
    authentication_classes = (TokenAuthentication, SessionAuthentication)
    permission_classes = (IsAuthenticated,)


class RatingViewSet(viewsets.ModelViewSet):
    queryset = Rating.objects.all()
    serializer_class = RatingSerializer
    authentication_classes = (TokenAuthentication, SessionAuthentication)
    permission_classes = (IsAuthenticated,)

    @list_route(methods=['post'])
    def rate_anime(self, request):
        if 'anime' in request.data and 'user' in request.data and 'stars' in request.data:
            try:
                anime = Anime.objects.get(id=request.data['anime'])
                user = User.objects.get(id=request.data['user'])
                stars = request.data['stars']
                try:
                    my_rating = Rating.objects.get(anime=anime.id, user=user.id)
                    my_rating.stars = stars
                    my_rating.save()
                    serializer = AnimeSerializer(anime, many=False)
                    response = {'message': 'Rating updated', 'result': serializer.data}
                    return Response(response, status=status.HTTP_200_OK)
                except:
                    Rating.objects.create(anime=anime, user=user, stars=stars)
                    serializer = AnimeSerializer(anime, many=False)
                    response = {'message': 'Rating created', 'result': serializer.data}
                    return Response(response, status=status.HTTP_200_OK)
            except Anime.DoesNotExist:
                pass
            except User.DoesNotExist:
                pass

        else:
            response = {'message': 'You need to pass all params'}
            return Response(response, status=status.HTTP_403_FORBIDDEN)


class CustomObtainAuthToken(ObtainAuthToken):
    def post(self, request, *args, **kwargs):
        response = super(CustomObtainAuthToken, self).post(request, *args, **kwargs)
        token = Token.objects.get(key=response.data['token'])
        user = User.objects.get(id=token.user_id)
        serializer = UserSerializer(user, many=False)
        return Response({'token': token.key, 'user': serializer.data})


class GroupViewSet(viewsets.ModelViewSet):
    queryset = Group.objects.all()
    serializer_class = GroupSerializer
