import { FormInputBase } from "./input-base";

export class FormInputCheckBox extends FormInputBase<string>{
    override controlType = 'checkbox';
}