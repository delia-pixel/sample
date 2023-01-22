import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { FormInputBase } from 'src/app/dynamic-form/model/input-base';
import { FormInputCheckBox } from 'src/app/dynamic-form/model/input-checkbox';
import { FormInputDropdown } from 'src/app/dynamic-form/model/input-dropdown';
import { FormInputNumber } from 'src/app/dynamic-form/model/input-number';
import { FormInputText } from 'src/app/dynamic-form/model/input-text';
import { FormInputTextarea } from 'src/app/dynamic-form/model/input-textarea';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.css'],
})
export class TransactionsComponent {
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
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

  emittedData($event:any) {
    console.log($event);
    
  }

}

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
  { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
  { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
  { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
  { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
  { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
  { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
  { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
  { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
  { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
  { position: 11, name: 'Sodium', weight: 22.9897, symbol: 'Na' },
  { position: 12, name: 'Magnesium', weight: 24.305, symbol: 'Mg' },
  { position: 13, name: 'Aluminum', weight: 26.9815, symbol: 'Al' },
  { position: 14, name: 'Silicon', weight: 28.0855, symbol: 'Si' },
  { position: 15, name: 'Phosphorus', weight: 30.9738, symbol: 'P' },
  { position: 16, name: 'Sulfur', weight: 32.065, symbol: 'S' },
  { position: 17, name: 'Chlorine', weight: 35.453, symbol: 'Cl' },
  { position: 18, name: 'Argon', weight: 39.948, symbol: 'Ar' },
  { position: 19, name: 'Potassium', weight: 39.0983, symbol: 'K' },
  { position: 20, name: 'Calcium', weight: 40.078, symbol: 'Ca' },
];
