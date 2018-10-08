import os

BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
STATIC_ROOT = os.path.join(BASE_DIR, 'staticfiles')

SECRET_KEY = 'mbvd6u_3g=%o@&l9#_nf(0(ou)(z_&@-tpwys7s@!ob@23sc49'

DEBUG = True

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.postgresql_psycopg2',
        'NAME': 'animachi',
        'USER': 'p_seiya',
        'PASSWORD': 'psql_seiya',
        'HOST': '127.0.0.1',
        'POST': ''
    }
}
