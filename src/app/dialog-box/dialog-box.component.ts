import {
  ChangeDetectorRef,
  Component,
  Inject,
  Input,
  TemplateRef,
  ViewChild,
} from '@angular/core';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';

export interface DialogData {
  title: string;
  text: string;
  template: TemplateRef<any>;
}

@Component({
  selector: 'app-dialog-box',
  templateUrl: './dialog-box.component.html',
  styleUrls: ['./dialog-box.component.css'],
})
export class DialogBoxComponent {
  @Input() btnText!: string;
  @Input() id!: string;
  @Input() modalTitle!: string;
  @Input() okText!: string;
  @Input() name!: string;
  @ViewChild('template') template!: TemplateRef<any>;

  constructor(public dialog: MatDialog, public cdr: ChangeDetectorRef) {}

  ngAfterViewInit() {
    this.cdr.detectChanges();
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(ModalDialogComponent, {
      data: {
        id: this.id,
        title: this.modalTitle,
        text: this.okText,
        name: this.name,
        template: this.template,
      },
    });
  }
}

@Component({
  selector: 'modal-dialog',
  templateUrl: './modal-dialog.component.html',
})
export class ModalDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<ModalDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) {}

  ngOnInit(): void {
    console.log(this.data);
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
