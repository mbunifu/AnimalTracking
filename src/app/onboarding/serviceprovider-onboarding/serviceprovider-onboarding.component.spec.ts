import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceproviderOnboardingComponent } from './serviceprovider-onboarding.component';

describe('ServiceproviderOnboardingComponent', () => {
  let component: ServiceproviderOnboardingComponent;
  let fixture: ComponentFixture<ServiceproviderOnboardingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServiceproviderOnboardingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceproviderOnboardingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
