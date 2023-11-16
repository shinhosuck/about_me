from django.urls import path
from about_me.views import (
     my_projects, 
     contact, 
)

app_name = "about_me"



urlpatterns = [
    path("", my_projects, name="my_projects"),
    path("contact/", contact, name="contact"),
]
