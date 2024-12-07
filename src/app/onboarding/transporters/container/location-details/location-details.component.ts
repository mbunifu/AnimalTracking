import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-location-details',
  templateUrl: './location-details.component.html',
  styleUrls: ['./location-details.component.css']
})
export class LocationDetailsComponent implements OnInit {

  transporterName: string;
  country: string;
  city: string;
  address: string;

  constructor(private router:Router) { }

  navigateToNext() {
    this.router.navigate(['/onboarding/transporters/bank-details']);
    }
    ngOnInit(): void {
    }
  
  submitForm() {
    // Perform form submission logic here
    const formData = {
      transporterName: this.transporterName,
      country: this.country,
      city: this.city,
      address: this.address
    };

    // For demonstration purposes, log the form data to the console
    console.log(formData);





  }
}
