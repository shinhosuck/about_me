from django.urls import path
from about_me.views import home, contact

app_name = "about_me"



urlpatterns = [
    path("", home, name="home"),
    path("contact/", contact, name="contact")
]
