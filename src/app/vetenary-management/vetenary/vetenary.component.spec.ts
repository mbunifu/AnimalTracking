import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VetenaryComponent } from './vetenary.component';

describe('VetenaryComponent', () => {
  let component: VetenaryComponent;
  let fixture: ComponentFixture<VetenaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VetenaryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VetenaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
