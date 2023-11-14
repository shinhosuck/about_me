from django.urls import path
from about_me.views import (
     landing_page_view, 
     my_projects, 
     contact, 
     about
)

app_name = "about_me"



urlpatterns = [
    path("", landing_page_view, name="landing-page"),
    path("my_projects/", my_projects, name="my_projects"),
    path("contact/", contact, name="contact"),
    path("about/", about, name="about"),
]
