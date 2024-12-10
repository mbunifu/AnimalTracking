import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

import { AddUsersComponent } from '../add-users/add-users.component'; 

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: [] // Inline styling used
})
export class UsersComponent implements OnInit, AfterViewInit {
  filterOptions = ['All Users', 'Active Users', 'Deactivated Users'];
  selectedFilter = 'All Users';
  totalUsers = 100; 
  systemUsersIcon = 'group'; 

  displayedColumns: string[] = ['id', 'name', 'email', 'status'];
  dataSource = new MatTableDataSource([
    { id: 1, name: 'Ekwang Etabo Logela', email: 'Davidkipchumbaruto@gmail.com', contactNumber: '123-456-7890', status: true },
    { id: 2, name: 'Halima Gufu Waqo', email: 'emily@chomatech.co.ke', contactNumber: '098-765-4321', status: false },
    { id: 3, name: 'Samuel Mutua Ndambuki', email: 'samuelutundambuki@gmail.co.ke', contactNumber: '555-123-4567', status: true },
    { id: 4, name: 'Esther Chebet Kiplagat', email: 'esther@safaricredi.co.ke', contactNumber: '333-222-4444', status: false },
    { id: 5, name: 'Lemaiyan Ole Nkaru', email: 'hello@kilimanjaroinnovation.co.ke', contactNumber: '777-888-9999', status: true },
    { id: 6, name: 'Ekitela Ekidor Lokidor', email: 'support@masaifinance.co.ke', contactNumber: '111-222-3333', status: false },
    { id: 7, name: 'Emma Davis', email: 'emma.davis@gmail.com', contactNumber: '444-555-6666', status: true },
    { id: 8, name: 'Leah Lengolos Lesanjo', email: 'contact@jambobiz.co.ke', contactNumber: '999-000-1111', status: true },
    { id: 9, name: 'Grace Wanyore', email: 'grace.wanyore@gmail.com', contactNumber: '222-333-4444', status: false },
    { id: 10, name: 'Henry Ekadukoit', email: 'ekadukoite@gmail.com', contactNumber: '555-666-7777', status: true }
  ]);

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private dialog: MatDialog) {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
  }

  openAddUserDialog(): void {
    const dialogRef = this.dialog.open(AddUsersComponent, {
      width: '500px',
      height: 'auto',
      data: {}
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed', result);
    });
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
