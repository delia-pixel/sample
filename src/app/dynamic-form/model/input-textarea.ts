import { FormInputBase } from "./input-base";

export class FormInputTextarea extends FormInputBase<string> {
  override controlType = 'textarea';
}