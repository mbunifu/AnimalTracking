import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportsLinegrapghComponent } from './reports-linegrapgh.component';

describe('ReportsLinegrapghComponent', () => {
  let component: ReportsLinegrapghComponent;
  let fixture: ComponentFixture<ReportsLinegrapghComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReportsLinegrapghComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportsLinegrapghComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
