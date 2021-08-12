import { CareersComponent } from './careers/careers.component';
import { ProductComponent } from './product/product.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'product', component: ProductComponent},
  {path:'careers', component: CareersComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
