"""
WSGI config for animachi project.

It exposes the WSGI callable as a module-level variable named ``application``.

For more information on this file, see
https://docs.djangoproject.com/en/2.1/howto/deployment/wsgi/
"""

import os
import threading
import requests
import time
from dj_static import Cling
from django.core.wsgi import get_wsgi_application

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'animachi.settings')


application = Cling(get_wsgi_application())

#
# def awake():
#     while True:
#         try:
#             print('Start Awaking')
#             requests.get('http://animachi.herokuapp.com/')
#             print('End')
#         except:
#             print('error')
#         time.sleep(300)
#
#
# t = threading.Thread(target=awake)
# t.start()
