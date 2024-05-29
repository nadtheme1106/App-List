# api/models.py

from django.db import models
from django.utils import timezone

class Task(models.Model):
    PRIORITY_CHOICES = (
        ('Low', 'Low'),
        ('Medium', 'Medium'),
        ('High', 'High'),
    )
    CATEGORY_CHOICES = (
        ('Work', 'Work'),
        ('Personal', 'Personal'),
        ('Hobby', 'Hobby'),
    )
    title = models.CharField(max_length=255)
    priority = models.CharField(max_length=10, choices=PRIORITY_CHOICES, default='Low')
    category = models.CharField(max_length=20, choices=CATEGORY_CHOICES, default='Personal')
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.title

class Project(models.Model):
    name = models.CharField(max_length=255)
    description = models.TextField(default='')  # Provide a default value here
    created_at = models.DateTimeField(default=timezone.now)

    def __str__(self):
        return self.name
