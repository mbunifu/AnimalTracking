import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VeterinaryNeedsComponent } from './veterinary-needs.component';

describe('VeterinaryNeedsComponent', () => {
  let component: VeterinaryNeedsComponent;
  let fixture: ComponentFixture<VeterinaryNeedsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VeterinaryNeedsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VeterinaryNeedsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
