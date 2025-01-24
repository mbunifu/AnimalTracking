
import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { _MatTableDataSource, MatTableDataSource } from '@angular/material/table';
import { UserService } from 'src/app/user/services/user.service';
import { AddUsersComponent } from 'src/app/user-management/add-users/add-users.component';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-vetenary',
  templateUrl: './vetenary.component.html',
  styleUrls: ['./vetenary.component.css']
})
export class VetenaryComponent implements OnInit {
  filterOptions = ['All Veterinarians', 'Active Veterinarians', 'Deactivated Veterinarians'];
  selectedFilter = 'All Veterinarians';

  totalUsers!: number;

  systemUsersIcon = 'group';

  dataSource = new MatTableDataSource<any>([]);

  displayedColumns: string[] = ['id', 'name', 'phone', 'email', 'status'];

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(
    private snackBar: MatSnackBar,
    private dialog: MatDialog,
    private userService: UserService
  ) { }

  ngOnInit(): void {
    this.loadProviders();
  }

  loadProviders(): void {
    this.userService.getServiceProviders().subscribe(
      (response: any) => {
        this.dataSource.data = response.entity;
        this.dataSource.paginator = this.paginator;
        this.totalUsers = response.entity.length;
        console.log('Fetched vetenaries:', this.dataSource.data)
      },
      (error) => {
        console.error('Error fetching vetenaries:', error);
        this.snackBar.open('Error fetching vetenaries', 'Close', {
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
