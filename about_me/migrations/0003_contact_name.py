# Generated by Django 3.2.4 on 2023-11-16 06:54

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('about_me', '0002_contact_date'),
    ]

    operations = [
        migrations.AddField(
            model_name='contact',
            name='name',
            field=models.CharField(default=1, max_length=50),
            preserve_default=False,
        ),
    ]