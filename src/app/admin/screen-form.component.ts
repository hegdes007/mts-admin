import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Screens } from 'src/app/entities/Screens';
import { ScreenDataService } from 'src/app/service/admin/screen-data.service';
 
@Component({
  selector: 'app-screen-form',
  templateUrl: './screen-form.component.html',
  styleUrls: ['./screen-form.component.css'],
})
export class ScreenFormComponent implements OnInit {
  screen: Screens = {
    screenId: '',
    screenName: '',
    seat: 0,
    theatre:{theatreId:'',theatreName:'',theatreCity:'',managerContact:'',managerName:'',screens:[],admin:{adminId:1}},
    movieShows: [],
  };
 
  isAdd: boolean = false;
  toDo = 'Submit';
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private screenService: ScreenDataService
  ) {}
  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      let tId = params['tId']
      let sId = params['sId'];
      if (sId <= 0) {
        this.isAdd = true;
        this.toDo = 'Add';
        this.setDefaultScreenData(tId);
      } else this.getScreen(tId,sId);
    });
  }
  setDefaultScreenData(tId:String): void {
    this.screen.screenId = '';
    this.screen.screenName = '';
    this.screen.seat = 0;
    this.screen.theatre.theatreId = tId;
  }
  getScreen(theatreId: string, screenId: string): void {
    this.screenService
      .getScreen(theatreId,screenId)
      .subscribe((screen: Screens) => (this.screen = screen)),
      (error: any) => console.log('Error : ' + error);
  }
  submit(): void {;
    this.route.params.subscribe((params: Params) => {
      let tId = params['tId']
      if (this.isAdd) {
        this.screenService.addScreen(tId,this.screen).subscribe();
      } else
        this.screenService.updateScreen(tId,this.screen).subscribe();
      this.router.navigate(['admin/theatre']);
    });
  }
  cancel(): void {
    this.router.navigate(['admin/theatre']);
  }
  delete():void{
    this.route.params.subscribe((params: Params) => {
      let tId = params['tId']
      let sId = params['sId']
    this.screenService.removeScreen(tId,sId).subscribe();
    this.router.navigate(['admin/theatre']);
  });
}
}
