# Generated by Django 3.2.4 on 2024-10-30 07:42

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('about_me', '0005_collecttraffic'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='collecttraffic',
            name='domain',
        ),
    ]
