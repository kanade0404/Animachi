#!/usr/bin/env python
import os
import sys
import pymysql

pymysql.install_as_MySQLdb()

if __name__ == '__main__':
    os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'animachi.settings.dev')
    try:
        from django.core.management import execute_from_command_line
    except ImportError as exc:
        raise ImportError(
            "Couldn't import Django. Are you sure it's installed and "
            "available on your PYTHONPATH environment variable? Did you "
            "forget to activate a virtual environment?"
        ) from exc
    execute_from_command_line(sys.argv)
# postgres://ytpnetosimpqzb:8fc9224b5d8656fc3f67d1fe058741eb1acd743165cf2643306f919fc0218afa@ec2-107-22-189-136.compute-1.amazonaws.com:5432/dcqg10u7205iiq
