import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { _MatTableDataSource, MatTableDataSource } from '@angular/material/table';
import { AddUsersComponent } from '../add-users/add-users.component';
import { UserService } from 'src/app/user/services/user.service';
import { MatSnackBar } from '@angular/material/snack-bar';
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: [] // Inline styling used
})
export class UsersComponent implements OnInit {
  filterOptions = ['All Users', 'Active Users', 'Deactivated Users'];
  selectedFilter = 'All Users';
  //totalUsers = 100;
  totalUsers!: number;

  systemUsersIcon = 'group';

  dataSource = new MatTableDataSource<any>([]);

  displayedColumns: string[] = ['id', 'name', 'phone', 'email', 'status'];

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(
    private snackBar: MatSnackBar,
    private dialog: MatDialog,
    private userService: UserService
  ) {

  }

  ngOnInit(): void {
    this.loadUsers();
  }

  loadUsers(): void {
    this.userService.getAdminUsers().subscribe(
      (response: any) => {
        this.dataSource.data = response.entity;
        this.dataSource.paginator = this.paginator;
        this.totalUsers = response.entity.length;
        console.log('Fetched admins:', this.dataSource.data)
      },
      (error) => {
        console.error('Error fetching farmers:', error);
        this.snackBar.open('Error fetching admins', 'Close', {
          duration: 3000,
          panelClass: ['error-snackbar']
        });
      }
    );
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
