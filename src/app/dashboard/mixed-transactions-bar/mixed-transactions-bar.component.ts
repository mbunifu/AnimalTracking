import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { UserService } from 'src/app/user/services/user.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { TransactionsComponent } from '../transactions/transactions.component';

@Component({
  selector: 'app-mixed-transactions-bar',
  templateUrl: './mixed-transactions-bar.component.html',
  styleUrls: ['./mixed-transactions-bar.component.sass']
})
export class MixedTransactionsBarComponent implements OnInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  displayedColumns: string[] = ['id', 'name', 'email', 'isVerified', 'actions'];
  dataSource = new MatTableDataSource<any>([]);

  constructor(private userService: UserService, private snackBar: MatSnackBar,
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.fetchFarmers();
  }

  // fetchFarmers(): void {
  //   this.userService.fetchUsers().subscribe(
  //     (response: any) => {
  //       this.dataSource.data = response.entity;
  //       this.dataSource.paginator = this.paginator;
  //       console.log('Fetched Farmers:', response.message)
  //     },
  //     (error) => {
  //       console.error('Error fetching farmers:', error);

  //       // Extract error message safely
  //       let errorMessage = 'Error fetching farmers';
  //       if (error && error.error && error.error.message) {
  //         errorMessage = error.error.message;
  //       } else if (error && error.message) {
  //         errorMessage = error.message;
  //       }

  //       this.snackBar.open(errorMessage, 'Close', {
  //         duration: 3000,
  //         panelClass: ['error-snackbar']
  //       });
  //     }
  //   );
  // }

  fetchFarmers(): void {
    this.userService.fetchUsers().subscribe(
      (response: any) => {
        this.dataSource.data = response.entity;
        this.dataSource.paginator = this.paginator;
        console.log('Fetched Farmers:', this.dataSource.data)
      },
      (error) => {
        console.error('Error fetching farmers:', error);
        this.snackBar.open('Error fetching farmers', 'Close', {
          duration: 3000,
          panelClass: ['error-snackbar']
        });
      }
    );
  }

  onEdit(element: any): void {
    console.log('Edit action clicked for:', element);
    this.userService.updateFarmersById(element.id,).subscribe(
      (response) => {
        console.log('Update successful:', response);
        this.snackBar.open('Farmer updated successfully!', 'Close', {
          duration: 3000,
          panelClass: ['success-snackbar']
        });
      },
      (error) => {
        console.error('Error updating farmer:', error);
        this.snackBar.open('Failed to update farmer', 'Close', {
          duration: 3000,
          panelClass: ['error-snackbar']
        });
      }
    );
  }


  onView(element: any): void {
    console.log('View action clicked for:', element);

    this.dialog.open(TransactionsComponent, {
      width: '600px',
      height: '90%',
      data: { user: element } // Pass data if needed
    });
  }

  onVerify(element: any): void {
    console.log('Verify action clicked for:', element);
  }

  onMoreOptions(element: any): void {
    console.log('More options clicked for:', element);
  }
}