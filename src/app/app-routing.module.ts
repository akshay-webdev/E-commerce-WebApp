import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './componets/cart/cart.component';
import { HomeComponent } from './componets/home/home.component';
import { LoginComponent } from './componets/login/login.component';
import { SellerAuthComponent } from './componets/seller-auth/seller-auth.component';

const routes: Routes = [
  {
    component: HomeComponent,
    path:'',
    pathMatch:'prefix'
  },
  {
    component:LoginComponent,
    path:'login',
  },
  {
    component:CartComponent,
    path:'cart',
  },
  {
    component:SellerAuthComponent,
    path:'seller-auth',
    pathMatch:'prefix'
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
