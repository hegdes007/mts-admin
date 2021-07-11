import { AdminloginService } from './../../service/admin/adminlogin.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {

  uname = ''
  password = ''
  
  invalidLogin = false
  
  //@Input() 
  error:string=""

  return:string="";

  constructor(private router: Router,
    private loginservice: AdminloginService, private route: ActivatedRoute) { }


  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.return = params['return'] || 'admin';
    });
  }

  checkLogin() {
    (this.loginservice.authenticate(this.uname, this.password).subscribe(
      data => {
        this.router.navigate([this.return]).then(() => {
          window.location.reload();
        });
        this.invalidLogin = false
      },
      error => {
        this.invalidLogin = true
        
        this.error = "Invalid credentials Login Failed!";

      }
    )
    );

  }
}
