import {Field, FieldType} from './fields';

class InputField implements Field {
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
        this.type = FieldType.textInput;
        this.element.name = this.name;
        this.element.id = this.name;
        this.element.type = this.type;
        this.labelelement.htmlFor = this.name;
        this.labelelement.innerText = this.label+': ';
        this.container.id = this.name + 'container';
        this.container.className = 'formInput';
        this.container.appendChild(this.labelelement);
        this.container.appendChild(this.element);
        
        
    }
    render(): HTMLElement {
        return this.container;
        
    }
    getValue(): any {
        return this.element.value
    }
}
class TextAreaField implements Field {
    name: string;
    label: string;
    type: FieldType;
    element: HTMLTextAreaElement;
    labelelement: HTMLLabelElement;
    container: HTMLElement;
    constructor(name: string, label: string) {
        this.container =
            <HTMLElement>document.createElement('div');
        this.labelelement =
            <HTMLLabelElement>document.createElement('label');
        this.type = FieldType.textAreaInput
        this.element =
            <HTMLTextAreaElement>document.createElement(this.type);
        this.name = name;
        this.label = label;
        this.element.name = this.name;
        this.element.id = this.name;
        this.labelelement.htmlFor = this.name;
        this.labelelement.innerText = this.label+': ';
        this.container.id = this.name + 'container';
        this.container.className = 'formInput';
        this.container.appendChild(this.labelelement);
        this.container.appendChild(this.element);
    }
    render(): HTMLElement {
        return this.container;
    }
    getValue(): any {
        return this.element.value
    }
}
class DateField implements Field {
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
        this.type = FieldType.dateInput;
        this.element.name = this.name;
        this.element.id = this.name;
        this.element.type = this.type;
        this.labelelement.htmlFor = this.name;
        this.labelelement.innerText = this.label+': ';
        this.container.id = this.name + 'container';
        this.container.className = 'formInput';
        this.container.appendChild(this.labelelement);
        this.container.appendChild(this.element);
        
        
    }
    render(): HTMLElement {
        return this.container;
        
    }
    getValue(): any {
        return this.element.value
    }
}
class EmailField implements Field {
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
        this.type = FieldType.emailInput;
        this.element.name = this.name;
        this.element.id = this.name;
        this.element.type = this.type;
        this.labelelement.htmlFor = this.name;
        this.labelelement.innerText = this.label+': ';
        this.container.id = this.name + 'container';
        this.container.className = 'formInput';
        this.container.appendChild(this.labelelement);
        this.container.appendChild(this.element);
        
        
    }
    render(): HTMLElement {
        return this.container;
        
    }
    getValue(): any {
        return this.element.value
    }
}
class RadioField implements Field {
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
        this.type = FieldType.radioInput;
        this.element.name = this.name;
        this.element.id = this.name;
        this.element.type = this.type;
        this.labelelement.htmlFor = this.name;
        this.labelelement.innerText = this.label+': ';
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
        this.labelelement.innerText = this.label+': ';
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
export {CheckboxField, RadioField, EmailField, DateField, TextAreaField, InputField};