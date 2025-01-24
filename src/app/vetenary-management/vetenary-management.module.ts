import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VetenaryManagementRoutingModule } from './vetenary-management-routing.module';
import { VetenaryComponent } from './vetenary/vetenary.component';
import { FormsModule } from '@angular/forms';
import { ComponentsModule } from "../shared/components/components.module";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

import { MatDialogModule } from '@angular/material/dialog';
import { MatTooltipModule } from '@angular/material/tooltip';
import{MatSnackBarModule} from '@angular/material/snack-bar';


@NgModule({
  declarations: [
    VetenaryComponent
  ],
  imports:[
    CommonModule,
    VetenaryManagementRoutingModule,
    FormsModule,
    MatDialogModule,
    MatIconModule,
    MatSelectModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    ComponentsModule,
    CommonModule,
    MatTableModule,
    MatPaginatorModule,
    MatSlideToggleModule,
    FormsModule,
    MatTooltipModule,
    MatSnackBarModule
  ]
})
export class VetenaryManagementModule { }
