import { Screens } from './../../entities/Screens';
import { MovieShows } from './../../entities/Movie';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class MovieDataService {
  constructor(private http: HttpClient) {}
  movieUrl: string = 'http://localhost:8082/mts/api/admin/theatre';
  
  removeMovie(screen:Screens,movieId: string): Observable<void> {
    let observable: Observable<void> = this.http.delete<void>(
      `${this.movieUrl}/${screen.theatre.theatreId}/screen/${screen.screenId}/movie/${movieId}`
    );
    return observable;
  }

  getMovie(movie: MovieShows): Observable<MovieShows> {
    return this.http.get<MovieShows>(
      `${this.movieUrl}/${movie.screens.theatre.theatreId}/screen/${movie.screens.screenId}/movie/${movie.movieId}`
    );
  }

  updateMovie(movie: MovieShows): Observable<any> {
    return this.http.put(`${this.movieUrl}/${movie.screens.theatre.theatreId}/screen/${movie.screens.screenId}/movie/${movie.movieId}`, movie);
  }

  addMovie(movie: MovieShows): Observable<any> {
    console.log(`${this.movieUrl}/${movie.screens?.theatre.theatreId}/screen/${movie.screens.screenId}/movie`);
    return this.http.post(`${this.movieUrl}/${movie.screens.theatre.theatreId}/screen/${movie.screens.screenId}/movie`, movie);
  }
}