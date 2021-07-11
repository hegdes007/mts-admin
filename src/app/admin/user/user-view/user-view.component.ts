import { AdminDataService } from './../../../service/admin/admin-data.service';
import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/app/entities/Customer';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-user-view',
  templateUrl: './user-view.component.html',
  styleUrls: ['./user-view.component.css']
})
export class UserViewComponent implements OnInit {
  customers:Customer[]=[];
  Original:Customer[]=[];
  searchText:String='';
  constructor(private dataService: AdminDataService) { }

  ngOnInit(): void {
    let observable: Observable<any> = this.dataService.getAllUsers();
    observable.subscribe((data) => {
      this.customers= this.Original = data.Customers;
      this.customers.splice(this.customers.findIndex(e => e.customerName === "mts-Admin"),1);
    });
  }

  filterUsers():void{
    this.customers = this.Original.filter(t=>t.customerName.toLowerCase().indexOf(this.searchText.toLowerCase())>=0
    || t.customerName.toLowerCase().indexOf(this.searchText.toLowerCase())>=0 || t.email.toLowerCase().indexOf(this.searchText.toLowerCase())>=0 || t.email.toLowerCase().indexOf(this.searchText.toLowerCase())>=0 || t.address.toLowerCase().indexOf(this.searchText.toLowerCase())>=0 || t.address.toLowerCase().indexOf(this.searchText.toLowerCase())>=0);
  }
}
