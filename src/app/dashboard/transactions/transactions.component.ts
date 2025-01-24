import { Component, Inject, OnInit } from '@angular/core';
import { UserService } from 'src/app/user/services/user.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SnackbarService } from 'src/app/shared/services/snackbar.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.sass']
})
export class TransactionsComponent implements OnInit {
  member: any;

  constructor(
    private userService: UserService,
    private snackbar: SnackbarService,
    private dialogRef: MatDialogRef<TransactionsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  ngOnInit(): void {
    console.log('Received data:', this.data);

    // Check if data is already passed when opening the dialog
    if (this.data?.user) {
      this.member = {
        id: this.data.farmerCode, // Farmer ID
        user: {

          firstName: this.data.user.user.firstName,
          lastName: this.data.user.user.lastName,
          phoneNo: this.data.user.user.phoneNo,
          email: this.data.user.user.email,
          farmerCode: this.data.user.farmerCode,
          location: {
            latitude: this.data.user.latitude,
            longitude: this.data.user.longitude
          },
          idNumber: this.data.user.idNumber,
          role: this.data.user.user.role,
          createdAt: this.data.user.createdAt,
          active: this.data.user.active
        }
      };
    }
  }

  fetchFarmerDetails(farmerId: number): void {
    this.userService.getFarmersById(farmerId).subscribe(
      (response: any) => {
        console.log('Farmer Data:', response.entity);

        if (response.entity) {
          this.member = {
            id: response.entity.farmerCode,
            user: {
              firstName: response.entity.user.firstName,
              lastName: response.entity.user.lastName,
              phoneNo: response.entity.user.phoneNo,
              email: response.entity.user.email,
              role: response.entity.user.role,
              active: response.entity.user.active
            }
          };
        }
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

  closeDialog(): void {
    this.dialogRef.close();
  }
}
