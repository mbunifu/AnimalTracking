import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { UserService } from "src/app/user/services/user.service";
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { SnackbarService } from 'src/app/shared/services/snackbar.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.sass']
})
export class TransactionsComponent implements OnInit {
  member: any;
  memberId: number;

  constructor(
    private userService: UserService,
    private snackbar: SnackbarService,
    private dialogRef: MatDialogRef<TransactionsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  ngOnInit(): void {
    console.log('Received data:', this.data);
  }

  fetchFarmerDetails(farmerId: number): void {
    this.userService.getFarmersById(farmerId).subscribe(
      (response: any) => {
        console.log('Farmer Data:', response.entity);

      },
      (error) => {
        console.error('Error fetching farmer details:', error);
        this.snackbar.open('Error fetching farmer details', 'Close', {
          duration: 3000,
          panelClass: ['error-snackbar']
        });
      }
    );
  }

  onView(element: any): void {
    console.log('View action clicked for:', element);
    this.fetchFarmerDetails(element.id);
  }

  // openViewDialog(farmerData: any): void {
  //   this.dialog.open(ViewFarmerDialogComponent, {
  //     width: '450px',
  //     data: { member: farmerData }
  //   });
  // }
}
