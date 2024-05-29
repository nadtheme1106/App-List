from django.contrib import admin
from .models import Task, Project

admin.site.register(Task)
admin.site.register(Project)  # Register the Project model in the Django admin panel
