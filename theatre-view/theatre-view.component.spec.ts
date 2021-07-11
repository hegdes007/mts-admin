import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TheatreViewComponent } from './theatre-view.component';

describe('TheatreViewComponent', () => {
  let component: TheatreViewComponent;
  let fixture: ComponentFixture<TheatreViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TheatreViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TheatreViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
