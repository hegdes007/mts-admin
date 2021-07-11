import { Screens } from 'src/app/entities/Screens';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
 
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class ScreenDataService {
  constructor(private http: HttpClient) {}
 
  //CRUD functionality methods ....
  screensUrl: string = 'http://localhost:8082/mts/api/admin/theatre';
 
  getAllScreens(): Observable<Screens[]> {
    let observable: Observable<Screens[]> = this.http.get<Screens[]>(
      this.screensUrl
    );
    return observable;
  }
  removeScreen(theatreId:String, screenId: string): Observable<void> {
    let observable: Observable<void> = this.http.delete<void>(
      `${this.screensUrl}/${theatreId}/screen/${screenId}`
    );
    return observable;
  }
  getScreen(theatreId:String,screenId: string): Observable<Screens> {
    return this.http.get<Screens>(`${this.screensUrl}/${theatreId}/screen/${screenId}`);
  }
 
  updateScreen(theatreId:String,screen: Screens): Observable<any> {
    return this.http.put(`${this.screensUrl}/${theatreId}/screen/${screen.screenId}`, screen);
  }
 
  addScreen(theatreId:String, screen: Screens): Observable<any> {
    return this.http.post(`${this.screensUrl}/${theatreId}/screen`, screen);
  }
}
