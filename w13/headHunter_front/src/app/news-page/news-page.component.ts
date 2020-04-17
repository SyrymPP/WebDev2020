import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {CategoryService} from "../category.service";
import {Category} from "../models";

@Component({
  selector: 'app-news-page',
  templateUrl: './news-page.component.html',
  styleUrls: ['./news-page.component.css']
})
export class NewsPageComponent implements OnInit {
   company: Company
  vacancies: Vacancy[] = [];
  constructor(private companyService: CompanyService,private vacancyService: VacancyService, private route: ActivatedRoute) { }
  ngOnInit(): void {
    this.getCompany();
    this.getVacancyList();
  }
   getVacancyList() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.vacancyService.getVacancyList(id)
      .subscribe(vacancies => {
        this.vacancies = vacancies
      });
  }

}
