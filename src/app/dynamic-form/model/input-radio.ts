import { FormInputBase } from "./input-base";

export class FormInputRadio extends FormInputBase<string>{
    override controlType = 'radio';
}