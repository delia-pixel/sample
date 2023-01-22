import { FormInputBase } from "./input-base";

export class FormInputNumber extends FormInputBase<string>{
    override controlType = 'number';
}