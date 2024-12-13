import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComplianceAlertsComponent } from './compliance-alerts.component';

describe('ComplianceAlertsComponent', () => {
  let component: ComplianceAlertsComponent;
  let fixture: ComponentFixture<ComplianceAlertsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComplianceAlertsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComplianceAlertsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
