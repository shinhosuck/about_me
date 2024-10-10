from django.core.mail import EmailMultiAlternatives
from django.template.loader import render_to_string 
from django.conf import settings

from_email = settings.EMAIL_HOST_USER



def send_email(request, **kwargs):
    
    context = {
        'name': kwargs['name'],
        'email': kwargs['email']
    }

    html_body = render_to_string('about_me/send_email.html', context=context)

    message = EmailMultiAlternatives(
        subject = 'Message Received',
        body = '',
        from_email = from_email,
        to = [kwargs['email'],]
    )

    message.attach_alternative(html_body, 'text/html')
    message.send(fail_silently=False)

    return 'Message sent!'
