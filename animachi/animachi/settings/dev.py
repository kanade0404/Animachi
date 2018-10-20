from .common import *

DEBUG = True
SECRET_KEY = 'gry!c2ffwt31@rn1llpv18om!w2f+d$e8tmczk%w4+ivwr6h(0'

ALLOWED_HOSTS = [
    '127.0.0.1'
]

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.mysql',
        'NAME': 'animachi',
        'USER': 'animachi_admin',
        'PASSWORD': 'kanadeanimachi44',
        'HOST': '127.0.0.1',
        'POST': ''
    }
}