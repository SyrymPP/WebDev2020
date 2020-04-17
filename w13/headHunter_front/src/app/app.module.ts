import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { NewsPageComponent } from './news-page/news-page.component';
import { NewsListComponent } from './news-list/news-list.component';
import { AuthInterceptor } from "../auth.interceptor";
import { FormsModule } from "@angular/forms";
import { VacanciesComponent } from './vacancies/vacancies.component';

@NgModule({
  declarations: [
    AppComponent,
    NewsPageComponent,
    NewsListComponent,
    VacanciesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
