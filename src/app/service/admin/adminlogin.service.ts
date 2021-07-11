import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { map } from "rxjs/operators";


@Injectable({
  providedIn: 'root'
})
export class AdminloginService  {
  constructor(private httpClient: HttpClient) {}
  // Provide username and password for authentication, and once authentication is successful, 
  //store JWT token in session
    authenticate(username:string, password:string) {
      return this.httpClient
        .post<any>("http://localhost:8082/admin/login", { username, password })
        .pipe(
          map(userData => {
            sessionStorage.setItem("username", username);
            let tokenStr = "Bearer " + userData.token;
            sessionStorage.setItem("token", tokenStr);
            return userData;
          })
        );
    }
    // return(){
    //   console.log(this.route.queryParams.subscribe(params => this.return= params['return'] || '/admin'))
    // }
  
    isUserLoggedIn() {
      let user = sessionStorage.getItem("username");
      return !(user === null);
    }
  
    logOut() {
      sessionStorage.removeItem("username");
      sessionStorage.removeItem("token");
    }
}