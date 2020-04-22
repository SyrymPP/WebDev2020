import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewsListComponent } from './news-list/news-list.component';
import { NewsPageComponent } from './news-page/news-page.component';
import { VacanciesComponent } from './vacancies/vacancies.component';


const routes: Routes = [
  { path: '', component: NewsListComponent },
  { path: 'company/:id', component: NewsPageComponent },
  { path: 'company/:id/vacancies/:id', component: VacanciesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
