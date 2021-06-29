from django.urls import path
from about_me.views import index, my_projects, contact, about

app_name = "about_me"



urlpatterns = [
    path("", index, name="index"),
    path("my_projects/", my_projects, name="my_projects"),
    path("contact/", contact, name="contact"),
    path("about/", about, name="about")
]
