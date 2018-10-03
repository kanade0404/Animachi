from django.db import models
from django.contrib.auth.models import User
from django.core.validators import MaxValueValidator, MinValueValidator


class Anime(models.Model):
    """
    アニメモデル
    """
    title = models.CharField(max_length=32)
    description = models.CharField(max_length=300)

    def avg_rating(self):
        sum = 0
        all_ratings = Rating.objects.filter(anime=self)
        for rating in all_ratings:
            sum += rating.stars
        if len(all_ratings) > 0:
            return sum / len(all_ratings)
        else:
            return 0

    def no_of_ratings(self):
        all_ratings = Rating.objects.filter(anime=self)
        return len(all_ratings)


class Rating(models.Model):
    """
    レーティングモデル
    """
    stars = models.IntegerField(validators=[MinValueValidator(1), MaxValueValidator(5)])
    anime = models.ForeignKey(Anime, on_delete=models.CASCADE)
    user = models.ForeignKey(User, on_delete=models.CASCADE)

    class Meta:
        unique_together = (('user', 'anime'),)
        index_together = (('user', 'anime'),)
