import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: [] // Inline styling used
})
export class UsersComponent implements OnInit {
  filterOptions = ['All Users', 'Active Users', 'Deactivated Users'];
  selectedFilter = 'All Users';
  totalUsers = 100; 
  systemUsersIcon = 'group'; 

  displyedColumns: string[] = ['id', 'name', 'email', 'contactNumber', 'status'];
  dataSource = [
    { id: 1, name: 'John Doe', email: 'john.doe@example.com', contactNumber: '123-456-7890', status: true },
    { id: 2, name: 'Jane Smith', email: 'jane.smith@example.com', contactNumber: '098-765-4321', status: false },
    { id: 3, name: 'Alice Johnson', email: 'alice.johnson@example.com', contactNumber: '555-123-4567', status: true },
    { id: 4, name: 'Bob Brown', email: 'bob.brown@example.com', contactNumber: '333-222-4444', status: false },
    { id: 5, name: 'Charlie Williams', email: 'charlie.williams@example.com', contactNumber: '777-888-9999', status: true },
    { id: 6, name: 'David Lee', email: 'david.lee@example.com', contactNumber: '111-222-3333', status: false },
    { id: 7, name: 'Emma Davis', email: 'emma.davis@example.com', contactNumber: '444-555-6666', status: true },
    { id: 8, name: 'Frank Miller', email: 'frank.miller@example.com', contactNumber: '999-000-1111', status: true },
    { id: 9, name: 'Grace Wilson', email: 'grace.wilson@example.com', contactNumber: '222-333-4444', status: false },
    { id: 10, name: 'Henry Moore', email: 'henry.moore@example.com', contactNumber: '555-666-7777', status: true }
  ];
  responseMessage: any;

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor() {}

  ngOnInit(): void {
    this.dataSource = this.dataSource;  
  }

  verifyUser(id: number): void {
    console.log(`Verifying user with ID: ${id}`);
    
  }

  editUser(id: number): void {
    console.log(`Editing user with ID: ${id}`);
   
  }

  lockUser(id: number): void {
    console.log(`Locking user with ID: ${id}`);
    
  }

  deleteUser(id: number): void {
    console.log(`Deleting user with ID: ${id}`);
   
  }
}
