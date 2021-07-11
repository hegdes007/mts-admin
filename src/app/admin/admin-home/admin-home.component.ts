import { Booking } from './../../entities/Booking';
import { MovieShows } from 'src/app/entities/Movie';
import { Theatre } from './../../entities/Theatre';
import { Observable } from 'rxjs';
import { AdminDataService } from './../../service/admin/admin-data.service';
import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/app/entities/Customer';

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.css']
})
export class AdminHomeComponent implements OnInit {
  customers:Customer[]=[];
  totalUsers:any=0;
  totalTheatres:any=0;
  totalMovies:any=0;
  movie:MovieShows[]=[];
  runningMovies:any=0;
  totalBooking:any=0;
  bookings:Booking[]=[];
  bookingsToday:any=0;

  constructor(private dataService: AdminDataService) {}

  ngOnInit(): void {
    let observable1: Observable<any> = this.dataService.getAllTheatres();
    observable1.subscribe((data) => {
      this.totalTheatres = data.Theatres.length;
    });
    let observable2: Observable<any> = this.dataService.getAllMovies();
    observable2.subscribe((data) => {
      this.totalMovies = data.MovieShows.length;
      this.movie = data.MovieShows;
      let date = new Date;
      this.runningMovies = (this.movie.filter(m=>m.movieStartTime.toLowerCase().indexOf(date.getDate())>=0
      || m.movieStartTime.toLowerCase().indexOf(date.getDate())>=0 )).length;
    });
    let observable3: Observable<any> = this.dataService.getAllUsers();
    observable3.subscribe((data) => {
      this.customers = data.Customers;
      this.customers.splice(this.customers.findIndex(e => e.customerName === "mts-Admin"),1);
      this.totalUsers = this.customers.length;
    });
    let observable4: Observable<any> = this.dataService.getAllBookings();
    observable4.subscribe((data) => {
      this.totalBooking = data.Bookings.length;
      this.bookings = data.Bookings;
      let date = new Date;
      this.bookingsToday = (this.bookings.filter(m=>m.bookingDate.toLowerCase().indexOf(date.getDate())>=0
      || m.bookingDate.toLowerCase().indexOf(date.getDate())>=0 )).length;
    });
  }
}
