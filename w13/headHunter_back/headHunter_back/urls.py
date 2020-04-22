"""headHunter_back URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/3.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include
from api.views.views_cbv import CompanyDetailsAPIView, CompanyListAPIView, CompanyVacanciesAPIView, VacancyDetailsAPIView, VacancyListAPIView
# from api.views.views_fbv import company_detail, companies_list, company_vacancies, vacancy_detail, vacancy_list
from rest_framework_jwt.views import obtain_jwt_token

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/login', obtain_jwt_token),
    path('api/companies/', CompanyListAPIView.as_view()),
    path('api/companies/<int:pk>/', CompanyDetailsAPIView.as_view()),
    path('api/companies/<int:company_id>/vacancies/', CompanyVacanciesAPIView.as_view()),
    path('api/vacancies/', VacancyListAPIView.as_view()),
    path('api/vacancies/<int:pk>/', VacancyDetailsAPIView.as_view()),


]
