import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TransactionsComponent } from './transactions.component';
import { MaterialModule } from 'src/app/shared/material/material.module';
import { DataTableComponent } from 'src/app/data-table/data-table.component';
import { CustomersTableComponent } from 'src/app/data-table/customers-table/customers-table.component';
import { DataPropertyGetterPipe } from 'src/app/data-table/data-property-getter.pipe';
import { OrdersComponent } from 'src/app/data-table/orders/orders.component';
import { DialogBoxComponent, ModalDialogComponent } from 'src/app/dialog-box/dialog-box.component';

@NgModule({
  declarations: [
    TransactionsComponent,
    DataTableComponent,
    CustomersTableComponent,
    DataPropertyGetterPipe,
    OrdersComponent,
    DialogBoxComponent,
    ModalDialogComponent
  ],
  imports: [CommonModule, MaterialModule],
  providers: [],
})
export class TransactionsModule {}
