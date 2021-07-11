import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { Route, RouterModule } from '@angular/router';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomerHomeComponent } from './customer/customer-home/customer-home.component';
import { CustomerRegisterComponent } from './customer/customer-register/customer-register.component';

import { AdminHomeComponent } from './admin/admin-home/admin-home.component';
import { AdminRoutingModule } from './admin/admin-routing.module';
import { CustomerRoutingModule } from './customer/customer-routing.module';
import { ScreenViewComponent } from './admin/screen/screen-view/screen-view.component';
import { TheatreViewComponent } from './admin/theatre/theatre-view/theatre-view.component';
import { TheatreFormComponent } from './admin/theatre/theatre-form/theatre-form.component';
import { MovieViewComponent } from './admin/movie/movie-view/movie-view.component';
import { AdminLoginComponent } from './admin/admin-login/admin-login.component';
import { CustomerLoginComponent } from './customer/customer-login/customer-login.component';
import { AdminComponent } from './admin/admin/admin.component';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { JwtAuthenticationInterceptor } from './interceptor/admin/jwt-authentication.interceptor';
import { ScreenFormComponent } from './admin/screen/screen-form/screen-form.component';
import { MovieFormComponent } from './admin/movie/movie-form/movie-form.component';
import { AllMovieViewComponent } from './admin/movie/all-movie-view/all-movie-view.component';
import { UserViewComponent } from './admin/user/user-view/user-view.component';



@NgModule({
  declarations: [
    AppComponent,
    CustomerHomeComponent,
    CustomerRegisterComponent,
    AdminHomeComponent,
    ScreenViewComponent,
    TheatreViewComponent,
    TheatreFormComponent,
    MovieViewComponent,
    AdminLoginComponent,
    CustomerLoginComponent,
    AdminComponent,
    ScreenFormComponent,
    MovieFormComponent,
    AllMovieViewComponent,
    UserViewComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AdminRoutingModule,
    CustomerRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass:JwtAuthenticationInterceptor, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
