import { Component } from '@angular/core';
import { TableColumn } from '../table-column';

@Component({
  selector: 'app-customers-table',
  templateUrl: './customers-table.component.html',
  styleUrls: ['./customers-table.component.css'],
})
export class CustomersTableComponent {
  customers!: Customer[];
  customerTableColumns!: TableColumn[];
  title = 'Example text';
  text = 'Envoyer';

  ngOnInit(): void {
    this.customers = this.getCustomers();
    this.initColumns();
  }

  getCustomers(): Customer[] {
    return [
      {
        name: 'John',
        age: 30,
      },
      {
        name: 'Joelle',
        age: 25,
      },
      {
        name: 'Patricia',
        age: 23,
      },
      {
        name: 'John',
        age: 30,
      },
      {
        name: 'Joelle',
        age: 25,
      },
      {
        name: 'Patricia',
        age: 23,
      },
      {
        name: 'John',
        age: 30,
      },
      {
        name: 'Joelle',
        age: 25,
      },
      {
        name: 'Patricia',
        age: 23,
      },
      {
        name: 'John',
        age: 30,
      },
      {
        name: 'Joelle',
        age: 25,
      },
      {
        name: 'Patricia',
        age: 23,
      },
    ];
  }

  initColumns(): void {
    this.customerTableColumns = [
      {
        name: 'customers name',
        dataKey: 'name',
      },
      {
        name: 'customers age',
        dataKey: 'age',
      },
    ];
  }
}

export interface Customer {
  name: string;
  age: number;
}
