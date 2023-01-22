import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FormInputBase } from './model/input-base';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.css'],
})
export class DynamicFormComponent {
  @Input() formFields: FormInputBase<string | boolean>[] = [];
  @Output() formValueEmitter = new EventEmitter<any>;

  form!: FormGroup;

  ngOnInit(): void {
    this.toFormGroup();
  }

  // Returns whether the form exists and has been modified or not as a helper for the confirmation dialog
  hasFormUnsavedChanges(): boolean {
    return this.form && this.form.dirty;
  }

  onSubmit(): void {
    this.form.markAllAsTouched();
    this.formValueEmitter.emit(this.form.value);
    if (this.form.invalid) return;
    
  }

  private toFormGroup(): void {
    const group: any = {};

    this.formFields.forEach((field) => {
      group[field.key] = field.required
        ? new FormControl(field.value || '', [
            Validators.required,
          ])
        : new FormControl(field.value || '', field.validators);
    });
    this.form = new FormGroup(group);
  }
}
