from django.shortcuts import render
from api.models import Company, Vacancy
from django.http.response import JsonResponse
# Create your views here.
def all_companies(request):
    companies = Company.objects.all()
    companies_json = [category.short() for category in companies]
    return JsonResponse(companies_json, safe=False)

def company_detail(request, id):
    try:
        company = Company.objects.get(id=id)
    except Company.DoesNotEist as e:
        return JsonResponse({'error': str(e)})
    return JsonResponse(company.full())

def all_vacancies(request):
    vacancies = Vacancy.objects.all()
    vacancies_json = [vacancy.short() for vacancy in vacancies]
    return JsonResponse(vacancies_json, safe=False)

def vacancy_detail(request, id):
    try:
        vacany = Vacancy.objects.get(id=id)
    except Vacancy.DoesNotEist as e:
        return JsonResponse({'error': str(e)})
    return JsonResponse(vacany.full())

def company_vacancies(request, id):
    try:
        company = Company.objects.get(id=id)
    except Company.DoesNotExist as e:
        return JsonResponse({'error': str(e)})
    vacancies = company.vacancy_set.all()
    # vacancies = company.products.all()

    vacancy_json = [vacancy.full() for vacancy in vacancies]
    return JsonResponse(vacancy_json, safe=False)

def top_ten(request):
    # vacancies = Vacancy.objects.order_by('-salary')
    vacancies = Vacancy.objects.filter(salary__gte=100000)
    top = [vacancy.full() for vacancy in vacancies[:10]]
    return JsonResponse(top, safe=False)


