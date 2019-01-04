import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputComponent } from './input/input.component';
import { TableComponent } from './table/table.component';
import { TableRowComponent } from './table-row/table-row.component';
import { TextMaskModule } from 'angular2-text-mask';

@NgModule({
  declarations: [InputComponent, TableComponent, TableRowComponent],
  imports: [
    CommonModule,
    TextMaskModule,
  ]
})
export class ComponentsModule { }
