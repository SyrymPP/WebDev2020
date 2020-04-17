# Generated by Django 3.0.4 on 2020-04-01 07:41

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Company',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=300)),
                ('description', models.TextField(default='')),
                ('city', models.CharField(max_length=30)),
                ('address', models.TextField(default='')),
            ],
        ),
        migrations.CreateModel(
            name='Vacancy',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=300)),
                ('salary', models.FloatField()),
                ('description', models.TextField(default='')),
                ('company', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='api.Company')),
            ],
        ),
    ]
