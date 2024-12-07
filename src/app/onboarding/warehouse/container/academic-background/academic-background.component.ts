import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-academic-background',
  templateUrl: './academic-background.component.html',
  styleUrls: ['./academic-background.component.css']
})
export class AcademicBackgroundComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  navigateToNext() {
    this.router.navigate (['/onboarding/warehouse/business-information'])
  }
}

