import { Component } from '@angular/core';
import { FormInputBase } from 'src/app/dynamic-form/model/input-base';
import { FormInputCheckBox } from 'src/app/dynamic-form/model/input-checkbox';
import { FormInputDropdown } from 'src/app/dynamic-form/model/input-dropdown';
import { FormInputNumber } from 'src/app/dynamic-form/model/input-number';
import { FormInputText } from 'src/app/dynamic-form/model/input-text';
import { FormInputTextarea } from 'src/app/dynamic-form/model/input-textarea';
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

  myForm: FormInputBase<string | boolean>[] = [
    new FormInputText({
      key: 'title',
      label: 'Title',
      type: 'text',
      required: true,
    }),

    new FormInputText({
      key: 'name',
      label: 'Name',
      type: 'text',
      required: true,
    }),

    new FormInputTextarea({
      key: 'txt',
      label: 'Paragraph',
      type: 'textarea',
      required: true,
      value:
        'At w3schools.com you will learn how to make a website. They offer free tutorials in all web development technologies.',
    }),

    new FormInputDropdown({
      key: 'animal',
      label: 'Favorite animal',
      options: [
        { key: 'cat', value: 'Cat' },
        { key: 'dog', value: 'Dog' },
      ],
    }),

    new FormInputCheckBox({
      key: 'readAgreement',
      label: 'Read agreement?',
      required: true,
    }),

    new FormInputNumber({
      key: 'qty',
      label: 'Number of attemps',
      required: false,
    }),
  ];

  emittedData($event: any) {
    console.log($event);
  }
}

export interface Customer {
  name: string;
  age: number;
}
