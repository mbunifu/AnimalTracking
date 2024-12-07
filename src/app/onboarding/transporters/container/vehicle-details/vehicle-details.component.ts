import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-vehicle-details',
  templateUrl: './vehicle-details.component.html',
  styleUrls: ['./vehicle-details.component.css']
})
export class VehicleDetailsComponent implements OnInit {


  constructor(private router:Router) { }
  navigateToNext() {
    this.router.navigate(['/onboarding/transporters/location-details']);
    }
    
  ngOnInit(): void {
  }

}
