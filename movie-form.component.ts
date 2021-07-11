import { MovieDataService } from './../../../service/admin/movie-data.service';
import { TheatreDataService } from './../../../service/admin/theatre-data.service';
import { Screens } from './../../../entities/Screens';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { MovieShows } from 'src/app/entities/Movie';
import { Theatre } from 'src/app/entities/Theatre';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-movie-form',
  templateUrl: './movie-form.component.html',
  styleUrls: ['./movie-form.component.css'],
})
export class MovieFormComponent implements OnInit {
  movie: MovieShows = {
    movieId: '',
    movieName: '',
    movieStartTime: '',
    movieEndTime: '',
    description: '',
    language: '',
    imageLink:'',
    trailer:'',
    price: 0,
    movieGenre: '',
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
  Original: Theatre[] = [];
  searchCity:string = '';
  filterTheatre: string ='';
  filterScreen: string ='';
  movieDate: string = '';
  show:string='';
  showStart: string='';
  showEnd: string ='';
  isAdd: boolean = false;
  toDo = 'Submit';
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private dataService: TheatreDataService,
    private movieService: MovieDataService
  ) {
    this.theatres = [];
    this.Original = this.theatres;
  }

  ngOnInit(): void {
    let observable: Observable<any> = this.dataService.getAllTheatres();
    observable.subscribe((data) => {
      this.theatres = this.Original = data.Theatres;
    });
    this.route.params.subscribe((params: Params) => {
      let id = params['id'];
      if (id <= 0) {
        this.isAdd = true;
        this.toDo = 'Add';
        this.setDefaultMovieData();
      } else this.getMovie(id);
    });
  }
  setDefaultMovieData(): void {
    this.movie.movieId = '';
    this.movie.movieName = '';
    this.movie.movieStartTime = '';
    this.movie.movieEndTime = '';
    this.movie.description = '';
    this.movie.imageLink ='';
    this.movie.trailer ='';
    this.movie.language = '';
    this.movie.movieHours = '';
    this.movie.price = 150;
    this.movie.movieGenre = '';
  }
  getMovie(movieId: string): void {
    // this.movieService
    //   .getMovie(this.screens,movieId)
    //   .subscribe((movie: MovieShows) => (this.movie = movie)),
    //   (error: any) => console.log('Error :' + error);
  }
  submit(): void {
    if (this.isAdd) {
      this.movie.screens.theatre.theatreId = this.filterScreen;
      this.movie.movieStartTime = this.movieDate.concat(this.showStart);
      this.movie.movieEndTime = this.movieDate.concat(this.showEnd);
      console.log( this.movie.movieStartTime, this.movie.movieEndTime)
      this.movieService.addMovie(this.movie).subscribe();
    }else
    this.movieService.updateMovie(this.movie).subscribe(
      (res) => console.log('updated'),
      (err) => console.log('Error while updating', err)
    );
    this.router.navigate(['admin/movie']);
  }
  cancel(): void {
    this.router.navigate(['admin/movie']);
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
    let t = this.Original.filter(t =>t.theatreId.toLowerCase().indexOf(this.filterScreen.toLowerCase())>=0
    || t.theatreId.toLowerCase().indexOf(this.filterScreen.toLowerCase())>=0);
    ;
    t.forEach(t => this.screens = t.screens);
  }

  shows():void{
    switch(this.show){
      case "1":{
        this.showStart = "T10:00:00";
        this.showEnd   = "T01:00:00";
        break;
      }
      case "2":{
        this.showStart = "T01:30:00";
        this.showEnd   = "T03:30:00";
        break;
      }
      case "3":{
        this.showStart = "T04:00:00";
        this.showEnd   = "T07:00:00";
        break;
      }
      case "4":{
        this.showStart = "T07:30:00";
        this.showEnd   = "T10:30:00";
        break;
      }
    }
  }

  delete():void{
  //   this.route.params.subscribe((params: Params) => {
  //     let tId = params['tId']
  //     let sId = params['sId']
  //   this.screenService.removeScreen(tId,sId).subscribe();
  //   this.router.navigate(['admin/theatre']);
  // });
}
}
