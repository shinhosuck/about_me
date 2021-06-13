from django.urls import path
from about_me.views import home

app_name = "about_me"



urlpatterns = [
    path("", home, name="home")
]
