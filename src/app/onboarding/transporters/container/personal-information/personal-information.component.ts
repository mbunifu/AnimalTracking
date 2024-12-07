import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-personal-information',
  templateUrl: './personal-information.component.html',
  styleUrls: ['./personal-information.component.css']
})
export class PersonalInformationComponent implements OnInit {
submitForm() {
throw new Error('Method not implemented.');
}


  constructor(private router:Router) { }

  navigateToNext() {
    this.router.navigate (['/onboarding/transporters/vehicle-details']);
  }
  ngOnInit(): void {
  }

}
