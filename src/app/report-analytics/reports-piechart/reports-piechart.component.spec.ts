import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportsPiechartComponent } from './reports-piechart.component';

describe('ReportsPiechartComponent', () => {
  let component: ReportsPiechartComponent;
  let fixture: ComponentFixture<ReportsPiechartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReportsPiechartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportsPiechartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
