from django.contrib import admin
from about_me.models import Contact, CollectTraffic

# admin.site.register(Contact)

class ContactAdmin(admin.ModelAdmin):
    list_display = ['name', 'email', 'date', 'id']

admin.site.register(Contact, ContactAdmin)

@admin.register(CollectTraffic)
class CollectTrafficAdmin(admin.ModelAdmin):
    list_display = ['ip', 'created', 'id']
