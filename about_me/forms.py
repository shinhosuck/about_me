from django import forms
from about_me.models import Contact



class ContactForm(forms.ModelForm):
    
    class Meta:
        model = Contact
        fields = ["name", "email", "message"]
