import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TransactionsComponent } from './transactions.component';
import { MaterialModule } from 'src/app/shared/material/material.module';
import { DataTableComponent } from 'src/app/data-table/data-table.component';
import { CustomersTableComponent } from 'src/app/data-table/customers-table/customers-table.component';
import { DataPropertyGetterPipe } from 'src/app/data-table/data-property-getter.pipe';
import { OrdersComponent } from 'src/app/data-table/orders/orders.component';
import {
  DialogBoxComponent,
  ModalDialogComponent,
} from 'src/app/dialog-box/dialog-box.component';
import { DynamicFormInputComponent } from 'src/app/dynamic-form/dynamic-form-input/dynamic-form-input.component';
import { DynamicFormComponent } from 'src/app/dynamic-form/dynamic-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    TransactionsComponent,
    DataTableComponent,
    CustomersTableComponent,
    DataPropertyGetterPipe,
    OrdersComponent,
    DialogBoxComponent,
    ModalDialogComponent,
    DynamicFormInputComponent,
    DynamicFormComponent,
  ],
  imports: [CommonModule, MaterialModule, FormsModule, ReactiveFormsModule],
  providers: [],
})
export class TransactionsModule {}
