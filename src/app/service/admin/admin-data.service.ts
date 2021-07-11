import { MovieShows } from 'src/app/entities/Movie';
import { Observable } from 'rxjs';
import { Theatre } from './../../entities/Theatre';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdminDataService {
  constructor(private http: HttpClient) {}
  url:String = 'http://localhost:8082/mts/api'
  getAllTheatres(): Observable<Theatre[]> {
    let observable: Observable<Theatre[]> = this.http.get<Theatre[]>(
      `${this.url}/admin/theatre`
    );
    return observable;
  }

  getAllMovies(): Observable<MovieShows[]>{
    let observable: Observable<MovieShows[]> = this.http.get<MovieShows[]>(
      `${this.url}/customer/movies`
    );
    return observable;
  }
  getAllUsers():Observable<any[]>{
    let observable: Observable<any[]> = this.http.get<any[]>(
      `${this.url}/customer`
    );
    return observable;
  }
  getAllBookings():Observable<any[]>{
    let observable: Observable<any[]> = this.http.get<any[]>(
      `${this.url}/admin/booking`
    );
    return observable;
  }
}
