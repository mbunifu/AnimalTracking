import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
// import { VetResourcesComponent } from '../vet-resources/vet-resources.component';


export interface VeterinaryNeed {
  id: number;
  species: string;
  location: string;
  healthConcern: string;
  lastCheckup: string;
}

@Component({
  selector: 'app-veterinary-needs',
  templateUrl: './veterinary-needs.component.html',
  styleUrls: ['./veterinary-needs.component.css']
})
export class VeterinaryNeedsComponent implements OnInit {

  filterOptions = ['All species', 'Health concern', 'Last Checkup'];
  selectedFilter = 'All species';
  displayedColumns: string[] = ['id', 'species', 'location', 'healthConcern', 'lastCheckup', 'status'];

  
  dataSource = new MatTableDataSource<VeterinaryNeed>([
    { id: 1, species: 'Cattle', location: 'Nairobi', healthConcern: 'Foot and Mouth Disease', lastCheckup: '2024-08-01' },
    { id: 2, species: 'Goat', location: 'Busia', healthConcern: 'Worm Infestation', lastCheckup: '2024-07-25' },
    { id: 3, species: 'Sheep', location: 'Eldoret', healthConcern: 'Mange', lastCheckup: '2024-08-05' },
    { id: 4, species: 'Chicken', location: 'Nakuru', healthConcern: 'Newcastle Disease', lastCheckup: '2024-07-30' },
    { id: 5, species: 'Pig', location: 'Kisumu', healthConcern: 'Swine Fever', lastCheckup: '2024-08-02' },
    { id: 6, species: 'Horse', location: 'Mombasa', healthConcern: 'Colic', lastCheckup: '2024-07-28' },
    { id: 7, species: 'Rabbit', location: 'Thika', healthConcern: 'Ear Mites', lastCheckup: '2024-08-04' },
    { id: 8, species: 'Dog', location: 'Kakamega', healthConcern: 'Rabies', lastCheckup: '2024-07-27' },
    { id: 9, species: 'Cat', location: 'Nyeri', healthConcern: 'Feline Flu', lastCheckup: '2024-08-01' },
    { id: 10, species: 'Donkey', location: 'Narok', healthConcern: 'Hoof Rot', lastCheckup: '2024-07-29' }
  ]);

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  // openVetResourcesDialog(): void {
  //   const dialogRef = this.dialog.open(VetResourcesComponent, {
  //     width: '500px',
  //     height: 'auto',
  //     data: {}
  //   });

  //   dialogRef.afterClosed().subscribe((result) => {
  //     console.log('The dialog was closed', result);
  //   });
  // }


}
