import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomersTableComponent } from './data-table/customers-table/customers-table.component';
import { DataTableComponent } from './data-table/data-table.component';
import { TransactionsComponent } from './transactions/transactions/transactions.component';

const routes: Routes = [
  { path: 'transactions', component: TransactionsComponent },
  { path: 'customer-table', component: CustomersTableComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
