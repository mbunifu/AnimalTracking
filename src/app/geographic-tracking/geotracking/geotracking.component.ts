import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ThemePalette } from '@angular/material/core';
import { NgbProgressbarModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-geotracking',
  templateUrl: './geotracking.component.html',
  styleUrls: ['./geotracking.component.css']
})
export class GeotrackingComponent implements OnInit {

  searchForm: FormGroup;

  color: ThemePalette = 'primary';
  mode: NgbProgressbarModule = 'determinate';
  value = 95;
  bufferValue = 95;

  constructor(
    private formBoilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.searchForm = this.formBoilder.group({
      search: ['', Validators.required] // Define the form control here
    });
  }

}
