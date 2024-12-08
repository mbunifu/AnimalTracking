import { Component, OnInit } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { NgbProgressbarModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-population',
  templateUrl: './population.component.html',
  styleUrls: ['./population.component.css']
})
export class PopulationComponent implements OnInit {

  color: ThemePalette = 'primary';
  mode: NgbProgressbarModule = 'determinate';
  value = 85;
  bufferValue = 95;

  constructor() { }

  ngOnInit(): void {
  }

}
