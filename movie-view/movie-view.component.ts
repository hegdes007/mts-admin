import { Screens } from './../../../entities/Screens';
import { TheatreDataService } from 'src/app/service/admin/theatre-data.service';
import { MovieDataService } from './../../../service/admin/movie-data.service';
import { Theatre } from 'src/app/entities/Theatre';
import { MovieShows } from 'src/app/entities/Movie';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-movie-view',
  templateUrl: './movie-view.component.html',
  styleUrls: ['./movie-view.component.css'],
})
export class MovieViewComponent implements OnInit {
  movieShows: MovieShows = {
    movieId: '',
    movieStartTime: new Date,
    movieEndTime: new Date,
    movieGenre: '',
    language: '',
    description: '',
    movieName: '',
    imageLink:'',
    trailer:'',
    price: 0,
    movieHours: '',
    screens:{
      screenId: '',
      screenName: '',
      seat: 0,
      theatre:{theatreId:'',theatreName:'',theatreCity:'',managerContact:'',managerName:'',screens:[],admin:{adminId:1}},
      movieShows: [],
    }
  };
  theatres: Theatre[] = [];
  screens: Screens[] = [];
  movies: MovieShows[] = [];
  Original: Theatre[] = [];
  theatreList: Theatre[] = [];
  searchText: string = '';
  filterTheatre: string ='';
  filterScreen: string ='';
  filterMovie: string = '';
  getMovie: string ='';
  searchCity:string = '';
  movieslist: MovieShows[] = [];

  constructor(private dataService: TheatreDataService) {
    this.movies = [];
    this.theatres = [];
    this.Original = this.theatres;
  }


  ngOnInit(): void {
    let observable: Observable<any> = this.dataService.getAllTheatres();
    observable.subscribe((data) => {
      this.theatres = this.Original = data.Theatres;
    });
  }
  deletemovie(movieId: string): void {
  }
  filter():void{
    switch(this.filterTheatre) {  
      case "All": {
        this.theatres = this.Original;
         break;
      }
      case "Bengaluru": { 
        this.searchCity= "Bengaluru";
        this.theatres = this.Original.filter(t=>t.theatreCity.toLowerCase().indexOf(this.searchCity.toLowerCase())>=0 || t.theatreCity.toLowerCase().indexOf(this.searchCity.toLowerCase())>=0);
         break;
      }
      case "Mysuru": { 
        this.searchCity= "Mysuru";
        this.theatres = this.Original.filter(t=>t.theatreCity.toLowerCase().indexOf(this.searchCity.toLowerCase())>=0 || t.theatreCity.toLowerCase().indexOf(this.searchCity.toLowerCase())>=0);
         break;
      }
      case "Mumbai": { 
        this.searchCity= "Mumbai";
        this.theatres = this.Original.filter(t=>t.theatreCity.toLowerCase().indexOf(this.searchCity.toLowerCase())>=0 || t.theatreCity.toLowerCase().indexOf(this.searchCity.toLowerCase())>=0);
         break;
      }
      case "Hyderabad": { 
        this.searchCity= "Hyderabad";
        this.theatres = this.Original.filter(t=>t.theatreCity.toLowerCase().indexOf(this.searchCity.toLowerCase())>=0 || t.theatreCity.toLowerCase().indexOf(this.searchCity.toLowerCase())>=0);
         break;
      }
      case "Chennai": { 
        this.searchCity= "Chennai";
        this.theatres = this.Original.filter(t=>t.theatreCity.toLowerCase().indexOf(this.searchCity.toLowerCase())>=0 || t.theatreCity.toLowerCase().indexOf(this.searchCity.toLowerCase())>=0);
         break;
      }
   }
  }
 
  filterScreens(): void { 
    let t = this.Original.filter(t =>t.theatreName.toLowerCase().indexOf(this.filterScreen.toLowerCase())>=0
    || t.theatreName.toLowerCase().indexOf(this.filterScreen.toLowerCase())>=0);
    ;
    t.forEach(t => this.screens = t.screens);
  }

  filterMovies():void{
    let s = this.screens.filter(s => s.screenName.toLowerCase().indexOf(this.filterMovie.toLowerCase())>=0
    || s.screenName.toLowerCase().indexOf(this.filterMovie.toLowerCase())>=0);
    s.forEach(s=>this.movies=s.movieShows);
  }
}
