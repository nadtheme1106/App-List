# Generated by Django 5.0.1 on 2024-02-13 11:21

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0006_remove_task_due_date_delete_customuser'),
    ]

    operations = [
        migrations.AlterField(
            model_name='task',
            name='category',
            field=models.CharField(choices=[('Work', 'Work'), ('Personal', 'Personal'), ('Hobby', 'Hobby')], default='Personal', max_length=20),
        ),
    ]
