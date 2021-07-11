import { Theatre } from '../../entities/Theatre';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TheatreDataService {
  constructor(private http: HttpClient) {}

  //CRUD functionality methods ....
  theatresUrl: string = 'http://localhost:8082/mts/api/admin/theatre';

  getAllTheatres(): Observable<Theatre[]> {
    let observable: Observable<Theatre[]> = this.http.get<Theatre[]>(
      this.theatresUrl
    );
    return observable;
  }
  removeTheatre(theatreId: String): Observable<void> {
    let observable: Observable<void> = this.http.delete<void>(
      `${this.theatresUrl}/${theatreId}` //theatreId
    );
    // console.log(theatreId + 'Deleted');

    return observable;
  }
  getTheatre(theatreId: string): Observable<Theatre> {
    return this.http.get<Theatre>(`${this.theatresUrl}/${theatreId}`);
  }

  updateTheatre(theatre: Theatre): Observable<any> {
    return this.http.put(`${this.theatresUrl}/${theatre.theatreId}`, theatre);
  }

  addTheatre(theatre: Theatre): Observable<any> {
    return this.http.post(`${this.theatresUrl}`, theatre);
  }
}
