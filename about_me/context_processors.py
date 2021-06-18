from about_me.forms import ContactForm
from django.shortcuts import render, redirect

def contact_form(request):
    form = ContactForm()
    return  {"form": form}
