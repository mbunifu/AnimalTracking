import { Injectable } from '@angular/core';
import { MatSnackBar } from "@angular/material/snack-bar";


@Injectable({
  providedIn: 'root'
})
export class SnackbarService {
  open: any;

  constructor(private snackBar: MatSnackBar) { }

  showNotification(colorName: any, text: string) {
    this.snackBar.open(text, "", {
      duration: 4000,
      verticalPosition: "bottom",
      horizontalPosition: "center",
      panelClass: colorName,
    });
  }
}
