import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { Theatre } from 'src/app/entities/Theatre';
import { TheatreDataService } from 'src/app/service/admin/theatre-data.service';
 
@Component({
  selector: 'app-theatre-view',
  templateUrl: './theatre-view.component.html',
  styleUrls: ['./theatre-view.component.css'],
})
export class TheatreViewComponent implements OnInit {
  // @Input()
  theatreList: Theatre[] = [];
 
  // @Output()
  // delEvent: EventEmitter<string> = new EventEmitter<string>();
 
  theatres: Theatre[] = [];
  Original: Theatre[] = [];
  searchText: string = '';
  filterText: string ='';
  searchCity:string = '';
 
  constructor(private dataService: TheatreDataService) {
    this.theatres = [];
    this.Original = this.theatres;
  }
 
  ngOnInit(): void {
    let observable: Observable<any> = this.dataService.getAllTheatres();
    observable.subscribe((data) => {
      this.theatres = this.Original = data.Theatres;
    });
 
    // observable.subscribe((data) => console.log(data));
  }
  filter():void{
    switch(this.filterText) {  
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
 
  filterTheatres(): void {
    this.theatres = this.Original.filter(t=>t.theatreName.toLowerCase().indexOf(this.searchText.toLowerCase())>=0
    || t.theatreName.toLowerCase().indexOf(this.searchText.toLowerCase())>=0 || t.theatreCity.toLowerCase().indexOf(this.searchText.toLowerCase())>=0 || t.theatreCity.toLowerCase().indexOf(this.searchText.toLowerCase())>=0);
  }
  deleteData(theatreId: String): void {
    this.dataService
      .removeTheatre(theatreId)
      .subscribe();
  }
  deleteTheatre(theatreId: String): void {
    this.deleteData(theatreId);
    this.theatres = this.Original = this.Original.filter(
      (t) => t.theatreId != theatreId
    );
  }
}