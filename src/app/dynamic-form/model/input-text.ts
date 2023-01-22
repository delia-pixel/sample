import { FormInputBase } from "./input-base";

export class FormInputText extends FormInputBase<string>{
    override controlType= 'textbox';
}