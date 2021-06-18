# from django.core.checks import messages
from about_me.models import Contact
from django.shortcuts import render, redirect
from about_me.forms import ContactForm
from django.contrib import messages


def home(request):
    contacts = Contact.objects.all()
    for contact in contacts:
        print(f"Email:{contact.email}\nMessage:{contact.message}")
    return render(request, "about_me/home.html", {})


def contact(request):
    if request.method == "POST":
        form = ContactForm(request.POST or None)
        if form.is_valid():
            form.save()
            messages.success(request, f"Message sent successfully")
            # return render(request, "about_me/home.html")
            return redirect("about_me:home")
        else:
            messages.warning(request, f"Message did not sent. Please try again")
        return redirect("about_me:home")
           