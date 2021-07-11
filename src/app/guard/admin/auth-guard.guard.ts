import { AdminloginService } from './../../service/admin/adminlogin.service';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardGuard implements CanActivate {
  constructor(private router:Router, private login:AdminloginService){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot){
      if(this.login.isUserLoggedIn()){
        return true;
      }else{
        this.router.navigate(['admin/login'],{
          queryParams:{
            return: state.url
          }
        });
        return false;
      }
    } 
}
