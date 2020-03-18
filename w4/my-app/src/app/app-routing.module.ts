import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriesComponent } from './categories/categories.component';
import { ProductItemComponent } from './product-item/product-item.component';
import { ProductListComponent } from './product-list/product-list.component';


const routes: Routes = [
  { path: 'categories', component: CategoriesComponent },
  {path: '', redirectTo: '/categories', pathMatch: 'full' },
  
  { path: 'categories/:id/products', component: ProductListComponent},
  { path: 'productId/:id', component: ProductItemComponent},
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }