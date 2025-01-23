import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { UserService } from 'src/app/user/services/user.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-mixed-transactions-bar',
  templateUrl: './mixed-transactions-bar.component.html',
  styleUrls: ['./mixed-transactions-bar.component.sass']
})
export class MixedTransactionsBarComponent implements OnInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  displayedColumns: string[] = ['id', 'name', 'email', 'status', 'actions'];
  dataSource = new MatTableDataSource<any>([]);

  constructor(private userService: UserService, private snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.fetchFarmers();
  }

  fetchFarmers(): void {
    this.userService.fetchUsers().subscribe(
      (response: any) => {
        this.dataSource.data = response;
        this.dataSource.paginator = this.paginator;
      },
      (error) => {
        console.error('Error fetching farmers:', error);

        // Extract error message safely
        let errorMessage = 'Error fetching farmers';
        if (error && error.error && error.error.message) {
          errorMessage = error.error.message;
        } else if (error && error.message) {
          errorMessage = error.message;
        }

        this.snackBar.open(errorMessage, 'Close', {
          duration: 3000,
          panelClass: ['error-snackbar']
        });
      }
    );
  }


  // fetchFarmers(): void {
  //   this.userService.fetchUsers().subscribe(
  //     (response: any) => {
  //       this.dataSource.data = response;
  //       this.dataSource.paginator = this.paginator;
  //     },
  //     (error) => {
  //       console.error('Error fetching farmers:', error);
  //       this.snackBar.open('Error fetching farmers', 'Close', {
  //         duration: 3000,
  //         panelClass: ['error-snackbar']
  //       });
  //     }
  //   );
  // }

  onEdit(element: any): void {
    console.log('Edit action clicked for:', element);
  }

  onView(element: any): void {
    console.log('View action clicked for:', element);
  }

  onVerify(element: any): void {
    console.log('Verify action clicked for:', element);
  }

  onMoreOptions(element: any): void {
    console.log('More options clicked for:', element);
  }
}
