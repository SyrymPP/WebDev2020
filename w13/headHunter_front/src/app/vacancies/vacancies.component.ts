import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import{VacancyService} from '../vacancy.service'
import { CompanyService } from "../company.service";
import { Company, Vacancy } from "../models"
@Component({
  selector: 'app-vacancies',
  templateUrl: './vacancies.component.html',
  styleUrls: ['./vacancies.component.css']
})
export class VacanciesComponent implements OnInit {
   vacancy:Vacancy
  constructor(private companyService: CompanyService,private vacancyService: VacancyService, private route: ActivatedRoute) { }
  ngOnInit(): void {
   this.getVacancy()
  }
   getVacancy() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.vacancyService.getVacancy(id).subscribe(vacancy => this.vacancy = vacancy);
  }
}
