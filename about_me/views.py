from django.shortcuts import render, redirect
from about_me.forms import ContactForm
from django.contrib import messages




def index(request):
    return render(request, "about_me/index.html", {})


def my_projects(request):
    return render(request, "about_me/my_projects.html", {})


def about(request):
    return render(request, "about_me/about.html", {})


def contact(request):
    if request.method == "POST":
        form = ContactForm(request.POST or None)
        if form.is_valid():
            form.save()
            messages.success(request, f"Thank you very much for the message. I will get back to you as soon as possible.")
            return redirect("about_me:my_projects")
        else:
            messages.warning(request, f"Message did not sent. Please try again!")
        return redirect("about_me:my_projects")


# def view_img(request):
#     if request.GET.get("string"):
#         string = request.GET.get("string")
#         img_dir = string
#         print(img_dir)
#         print(type(img_dir))
#     return render(request, "about_me/view_img.html", {"img_dir": format_html(img_dir)})