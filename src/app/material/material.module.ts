import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar'
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSortModule } from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator';
import { DragDropModule } from '@angular/cdk/drag-drop';

const material = [
  MatButtonModule,
  MatToolbarModule,
  MatCardModule,
  MatTableModule,
  MatInputModule,
  MatFormFieldModule,
  MatIconModule,
  MatDividerModule,
  MatDialogModule,
  MatSortModule,
  MatPaginatorModule,
  DragDropModule
]

@NgModule({
  imports: [material],
  exports: [material]
})
export class MaterialModule { }
