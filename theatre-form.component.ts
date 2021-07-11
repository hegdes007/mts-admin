import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Theatre } from 'src/app/entities/Theatre';
import { TheatreDataService } from 'src/app/service/admin/theatre-data.service';

@Component({
  selector: 'app-theatre-form',
  templateUrl: './theatre-form.component.html',
  styleUrls: ['./theatre-form.component.css'],
})
export class TheatreFormComponent implements OnInit {
  theatre: Theatre = {
    theatreId: '',
    theatreName: '',
    theatreCity: '',
    managerName: '',
    managerContact: '',
    screens:[],
    admin:{adminId:1}
  };
  isAdd: boolean = false;
  toDo = 'Submit';

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private theatreService: TheatreDataService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      let id = params['id'];

      if (id <= 0) {
        this.isAdd = true;
        this.toDo = 'Add';
        this.setDefaultTheatreData();
      } else this.getTheatre(id);
    });
  }
  setDefaultTheatreData(): void {
    this.theatre.theatreId = '';
    this.theatre.theatreName = '';
    this.theatre.theatreCity = '';
    this.theatre.managerName = '';
    this.theatre.managerContact = '';
    this.theatre.admin.adminId;
  }
  getTheatre(theatreId: string): void {
    this.theatreService
      .getTheatre(theatreId)
      .subscribe((theatre: Theatre) => (this.theatre = theatre));
  }

  submit(): void {
    if (this.isAdd) {
      this.theatreService.addTheatre(this.theatre).subscribe();
    } else
      this.theatreService.updateTheatre(this.theatre).subscribe();
    this.router.navigate(['admin/theatre']);
  }
  cancel(): void {
    this.router.navigate(['admin/theatre']);
  }
}