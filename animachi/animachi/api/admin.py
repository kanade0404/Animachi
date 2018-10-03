from django.contrib import admin
from animachi.api.models import Anime, Rating


@admin.register(Anime)
class AnimeAdmin(admin.ModelAdmin):
    fields = ('title', 'description')
    list_display = ('title', 'description')
    search_fields = ('title',)


@admin.register(Rating)
class RatingAdmin(admin.ModelAdmin):
    fields = ('stars', 'anime', 'user')
    list_display = ('stars', 'anime', 'user')
    search_fields = ('anime', 'user')
