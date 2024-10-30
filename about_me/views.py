from django.shortcuts import render, redirect
from about_me.forms import ContactForm
from django.contrib import messages
from utils.send_email import send_email
from django.http import JsonResponse
from .models import Contact, CollectTraffic
import json



def my_projects(request):
    remote_addr = request.META.get('REMOTE_ADDR')
    x_forwarded_for = request.META.get('HTTP_X_FORWARDED_FOR')
    
    excluded_id = ['127.0.0.1', '35.173.69.207', '192.168.1.155']
    
    ip = ''

    if remote_addr not in excluded_id or \
        x_forwarded_for not in excluded_id:
        
        if x_forwarded_for:
            ip = x_forwarded_for.split(',')[0].strip()
        else:
            ip = remote_addr

    CollectTraffic.objects.create(ip=ip)
    
    return render(request, "about_me/my_projects.html")


def contact(request):
    data = json.loads(request.body.decode('utf-8'))
    
    if request.method == "POST":
        if data['name'] and data['email'] and data['message']:

            Contact.objects.create(
                    name=data['name'],
                    email=data['email'],
                    message=data['message']
                )
            message = """
                    Thank you very much for the message. 
                    I will contact you as soon as possible. 
                    Once again, thank you very much. Sincerly, Eric Anderson
                """
            send_email(
                request, 
                email = data['email'],
                name = data['name']
            )
            return JsonResponse(data={'message': message}, status=200)
        else:
            error_message = "Sorry, your message did not send. Please try again!"
        return JsonResponse(data={'error':error_message}, status=400)
    
    return redirect('about_me:my_projects')

    

