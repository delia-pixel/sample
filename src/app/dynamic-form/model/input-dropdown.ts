import { FormInputBase } from "./input-base";

export class FormInputDropdown extends FormInputBase<string> {
  override controlType = 'dropdown';
}