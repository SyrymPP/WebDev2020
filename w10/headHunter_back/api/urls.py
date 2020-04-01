from api.views import all_companies, company_detail, company_vacancies, all_vacancies, vacancy_detail, top_ten
from django.urls import path
urlpatterns = [
    path('companies/', all_companies ),
    path('companies/<int:id>/', company_detail),
    path('companies/<int:id>/vacancies', company_vacancies),
    path('vacancies/', all_vacancies),
    path('vacancies/<int:id>/', vacancy_detail),
    path('vacancies/top_ten/',  top_ten)
]