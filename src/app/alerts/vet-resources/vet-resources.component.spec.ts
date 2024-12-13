import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VetResourcesComponent } from './vet-resources.component';

describe('VetResourcesComponent', () => {
  let component: VetResourcesComponent;
  let fixture: ComponentFixture<VetResourcesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VetResourcesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VetResourcesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
