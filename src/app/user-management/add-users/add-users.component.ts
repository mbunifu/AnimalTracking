import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';


@Component({
  selector: 'app-add-users',
  templateUrl: './add-users.component.html',
  styleUrls: ['./add-users.component.css']
})
export class AddUsersComponent implements OnInit {
  user = {
    firstName: '',
    lastName: '',
    email: '',
    country: '',
    role: ''
  };

  constructor(public dialogRef: MatDialogRef<AddUsersComponent>) {}

  ngOnInit(): void {}

  saveUser(): void {
    console.log('User data:', this.user);
   
    this.dialogRef.close(); 
  }
}
