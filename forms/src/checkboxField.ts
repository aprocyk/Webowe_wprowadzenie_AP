import { Field, FieldType } from './fields';

class CheckboxField implements Field {
    name: string;
    label: string;
    type: FieldType
    element: HTMLInputElement;
    labelelement: HTMLLabelElement;
    container: HTMLElement;
    constructor(name: string, label: string) {
        this.container =
            <HTMLElement>document.createElement('div');
        this.element =
            <HTMLInputElement>document.createElement('input');
        this.labelelement =
            <HTMLLabelElement>document.createElement('label');
        this.name = name;
        this.label = label;
        this.type = FieldType.checkboxInput;
        this.element.name = this.name;
        this.element.id = this.name;
        this.element.type = this.type;
        this.labelelement.htmlFor = this.name;
        this.labelelement.innerText = this.label + ': ';
        this.container.id = this.name + 'container';
        this.container.className = 'formInput';
        this.container.appendChild(this.labelelement);
        this.container.appendChild(this.element);


    }
    render(): HTMLElement {
        return this.container;

    }
    getValue(): any {
        return this.element.checked;
    }
}

export {CheckboxField};