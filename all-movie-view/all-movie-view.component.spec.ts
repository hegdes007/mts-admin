import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllMovieViewComponent } from './all-movie-view.component';

describe('AllMovieViewComponent', () => {
  let component: AllMovieViewComponent;
  let fixture: ComponentFixture<AllMovieViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllMovieViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllMovieViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
