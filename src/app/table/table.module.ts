import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableService } from './table.service';
import { TableComponent } from './table.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    TableComponent,
  ],
  imports: [
    CommonModule,
    TableComponent,
    HttpClientModule,
  ],
  providers: [
    TableService
  ],
  bootstrap: [
    TableComponent,
  ]
})
export class TableModule { }
