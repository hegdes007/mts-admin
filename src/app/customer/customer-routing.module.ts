import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerHomeComponent } from './customer-home/customer-home.component';
import { CustomerLoginComponent } from './customer-login/customer-login.component';
import { CustomerRegisterComponent } from './customer-register/customer-register.component';

const routes: Routes = [

  {
    path:'customer',
    component: CustomerHomeComponent,
    children: [
        {
            path:'register',component:CustomerRegisterComponent
        },
      
    ]
  },
  {
    path:'customer/login',
    component:CustomerLoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class CustomerRoutingModule { }
