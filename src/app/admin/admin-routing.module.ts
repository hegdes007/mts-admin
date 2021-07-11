import { UserViewComponent } from './user/user-view/user-view.component';
import { MovieFormComponent } from './movie/movie-form/movie-form.component';
import { TheatreFormComponent } from './theatre/theatre-form/theatre-form.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { MovieViewComponent } from './movie/movie-view/movie-view.component';
import { ScreenFormComponent } from './screen/screen-form/screen-form.component';
import { TheatreViewComponent } from './theatre/theatre-view/theatre-view.component';
import { AuthGuardGuard } from '../guard/admin/auth-guard.guard';
import { AllMovieViewComponent } from './movie/all-movie-view/all-movie-view.component';



const routes: Routes = [
{
    path:'admin',
    component: AdminComponent,
    canActivate: [AuthGuardGuard],
    children: [
        {
            path:'',component:AdminHomeComponent
        },
        {
            path:'users',component:UserViewComponent
        },
        {
             path:'theatre',component:TheatreViewComponent
        },
        {
            path:'theatre/edit/:id',component:TheatreFormComponent
        },
        {
            path:'theatre/screen/edit/:tId/:sId',
            component: ScreenFormComponent
        },
        {
            path:'movie',
            component: MovieViewComponent
        },
        {
            path:'movie/edit/:id',
            component: MovieFormComponent
        },
        {
            path:'allmovie',
            component: AllMovieViewComponent
        }
    ]
},

{
    path:'admin/login',
    component: AdminLoginComponent
},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  
})
export class AdminRoutingModule { }
