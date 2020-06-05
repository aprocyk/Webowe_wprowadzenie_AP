import { Field, FieldType } from './fields';

class SelectField implements Field {
    name: string;
    label: string;
    array: string[];
    type: FieldType;
    element: HTMLSelectElement;
    labelelement: HTMLLabelElement;
    container: HTMLElement;
    constructor(name: string, label: string, array: string[]) {
        this.type = FieldType.selectInput;
        this.container =
            <HTMLElement>document.createElement('div');
        this.element =
            <HTMLSelectElement>document.createElement(this.type);
        this.labelelement =
            <HTMLLabelElement>document.createElement('label');
        this.name = name;
        this.label = label;
        this.array = array;


        this.element.name = this.name;
        this.element.id = this.name;
        this.labelelement.htmlFor = this.name;
        this.labelelement.innerText = this.label + ': ';
        this.container.id = this.name + 'container';
        this.container.className = 'formInput';
        this.container.appendChild(this.labelelement);
        this.container.appendChild(this.element);


        for (let el of array) {
            let regOption = <HTMLOptionElement>document.createElement("option");
            regOption.text = el;
            regOption.value = el;
            this.element.options.add(regOption);
        }


    }

    render(): HTMLElement {
        return this.container;

    }
    getValue(): any {
        return this.element.value;
    }
}

export { SelectField };