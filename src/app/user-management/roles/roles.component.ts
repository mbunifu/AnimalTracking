import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { SystemRolesComponent } from '../system-roles/system-roles.component';

@Component({
  selector: 'app-roles',
  templateUrl: './roles.component.html',
  styleUrls: ['./roles.component.css']
})
export class RolesComponent implements OnInit {

  displyedColumns: string[] = ['name','system Admin',  'Veterinary Board'];
  dataSource = [
    { id: 1, name: 'John Doe', email: 'john.doe@gmail.com', contactNumber: '123-456-7890', status: true },
    { id: 2, name: 'Jane Smith', email: 'jane.smith@gmail.com', contactNumber: '098-765-4321', status: false },
    { id: 3, name: 'Alice Johnson', email: 'alice.johnso@gmail.com.com', contactNumber: '555-123-4567', status: true },
    { id: 4, name: 'Bob Brown', email: 'bob.brown@gmail.com', contactNumber: '333-222-4444', status: false },
    
  ];

  constructor(
    private dialog : MatDialog
  ) { }

  ngOnInit(): void {
    this.dataSource = this.dataSource; 
  }


  openAddUserDialog(): void {
    const dialogRef = this.dialog.open(SystemRolesComponent, {
      width: '500px', // Adjust width as needed
      height: 'auto', // Adjust height as needed
      data: {} // Optional: Pass data if required
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed', result);
      // Handle any logic after closing the dialog (e.g., refreshing the table)
    });
  }

}
