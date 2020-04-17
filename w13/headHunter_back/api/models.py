from django.db import models

# Create your models here.
class Company(models.Model):
    name = models.CharField(max_length=300)
    description = models.TextField(default='')
    city = models.CharField(max_length=30)
    address = models.TextField(default='')

    class Meta:
        verbose_name = 'Company'
        verbose_name_plural = 'Company'

    def short(self):
        return {
            'id': self.id,
            'name': self.name,
            'city': self.city

        }

    def full(self):
        return {
            'id': self.id,
            'name': self.name,
            'city': self.city,
            'address': self.address,
            'description': self.description,
        }


class Vacancy(models.Model):
    name = models.CharField(max_length=300)
    salary = models.FloatField()
    description = models.TextField(default='')
    company = models.ForeignKey(Company, on_delete=models.CASCADE)
    # related_name = 'products'

    def __str__(self):
        return f'Vacancy id={self.id}, name={self.name}'


    def short(self):
        return {
            'id': self.id,
            'name': self.name,
            'salary': self.salary,
        }

    def full(self):
        return {
            'id': self.id,
            'name': self.name,
            'salary': self.salary,
            'description': self.description,
        }
