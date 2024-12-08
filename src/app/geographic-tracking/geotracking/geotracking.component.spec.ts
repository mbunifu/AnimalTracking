import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeotrackingComponent } from './geotracking.component';

describe('GeotrackingComponent', () => {
  let component: GeotrackingComponent;
  let fixture: ComponentFixture<GeotrackingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GeotrackingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GeotrackingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
