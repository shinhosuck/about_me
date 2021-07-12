from django import forms
from about_me.models import Contact



class ContactForm(forms.ModelForm):
    email = forms.EmailField()
    
    class Meta:
        model = Contact
        fields = ["email", "message",]