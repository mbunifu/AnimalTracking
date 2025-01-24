import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ThemePalette } from '@angular/material/core';
import { NgbProgressbarModule } from '@ng-bootstrap/ng-bootstrap';
import { GeotrackingService } from '../services/geotracking.service';

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
  bufferValue = 0.00;
  species: any;
  breeds: any;
  counties: string[] = ['Laikipia', 'Baringo', 'Kajiado', 'Turkana', 'West Pokot', 'Samburu'];

  constructor(
    private formBoilder: FormBuilder,
    private animalService: GeotrackingService
  ) { }

  ngOnInit(): void {
    this.searchForm = this.formBoilder.group({
      county: [''],
      species: [''],
      breed: [''],
      search: [''] // Example of another field
    });

    this.getAnimalSpecies(); // Fetch species on component load
  }

  // Get animal species
  getAnimalSpecies() {
    this.animalService.getAllAnimalSpecies().subscribe(
      (resp: any) => {
        console.log("Animal Species : ", resp);
        this.species = resp.entity;
      },
      (error) => {
        console.error("Error fetching animal species:", error);
      }
    );
  }

  // Fetch breeds based on selected species
  onSpeciesChange(speciesId: number): void {
    if (speciesId) {
      this.getSubSpecies(speciesId); // Fetch breeds for the selected species
    } else {
      this.breeds = []; // Clear breeds if no species is selected
    }
  }

  // Get animal breeds based on species ID
  getSubSpecies(speciesId: number): void {
    this.animalService.getAnimalBreeds(speciesId).subscribe(
      (resp: any) => {
        console.log("Breeds: ", resp);
        this.breeds = resp.entity || [];
      },
      (error) => {
        console.error("Error fetching breeds:", error);
        this.breeds = [];
      }
    );
  }
}
