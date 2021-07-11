import { AdminloginService } from './../../service/admin/adminlogin.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(private logoutservice:AdminloginService) { }

  ngOnInit(): void {
  }
  logout(){
    (this.logoutservice.logOut());
    window.location.reload();
  }
}
