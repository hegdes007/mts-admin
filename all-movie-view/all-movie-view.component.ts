import { MovieShows } from 'src/app/entities/Movie';
import { AdminDataService } from './../../../service/admin/admin-data.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-all-movie-view',
  templateUrl: './all-movie-view.component.html',
  styleUrls: ['./all-movie-view.component.css']
})
export class AllMovieViewComponent implements OnInit {
  movies:MovieShows[]=[];
  Original:MovieShows[]=[];
  searchText:string='';
  searchDate:string='';

  constructor(private dataService: AdminDataService) {}

  ngOnInit(): void {
    let observable: Observable<any> = this.dataService.getAllMovies();
    observable.subscribe((data) => {
      this.movies = this.Original = data.MovieShows;
    });
  }
  filterMovies(): void { 
    this.movies = this.Original.filter(m =>m.movieName.toLowerCase().indexOf(this.searchText.toLowerCase())>=0
    || m.movieName.toLowerCase().indexOf(this.searchText.toLowerCase())>=0);
  }
  filterMoviesByDate(): void { 
    this.movies = this.Original.filter(m =>m.movieStartTime.toLowerCase().indexOf(this.searchDate.toLowerCase())>=0
    || m.movieStartTime.toLowerCase().indexOf(this.searchDate.toLowerCase())>=0);
  }

}
