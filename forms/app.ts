enum FieldType {
    textInput = 'text',
    dateInput = 'date',
    emailInput = 'email',
    radioInput = 'radio',
    checkboxInput = 'checkbox',
    textAreaInput = 'textarea'
}
interface Field {
    name: string;
    label: string;
    type: FieldType;
    render(): HTMLElement;
    getValue(): any;
}

class App{
    form: any;
    constructor(){
        this.form = new Form('formtest');
    }

    createPresetForm(): void{
        let texto = new InputField('textfield','babol');
        let radio = new RadioField('radiofield','doot');
        let checkbox = new CheckboxField('checboxfield','oof');
        let date = new DateField('datefield','bop');
        let textfiedlo = new TextAreaField('textareafield','pisz');
        let mail = new EmailField('mailo','starto');

        this.form.fields.push(texto);
        this.form.fields.push(radio);
        this.form.fields.push(checkbox);
        this.form.fields.push(date);
        this.form.fields.push(textfiedlo);
        this.form.fields.push(mail);
        this.form.render();
        
        

    }
    createSubmiter(): void{
        let button = document.createElement('button');
        button.addEventListener('click',(e) =>{
            this.form.getValue();
        });
        button.innerText = "OOOO";
        document.body.appendChild(button);
        
        
    }
}


class Form{
    fields: Field[];
    formElement: HTMLElement | null;

    constructor(id:string){
        this.fields = new Array();
        this.formElement = document.getElementById(id);
    }

    render(): void{
        let forma = document.createElement('form');
        this.fields.forEach(field => {
            forma.appendChild(field.render());
        });
        document.body.appendChild(forma);
    }
    getValue(): void{
        this.fields.forEach(field => {
            console.log(field.getValue());
        });
    }
}


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
        this.labelelement.innerText = this.label;
        this.container.id = this.name + 'container';
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
        this.labelelement.innerText = this.label;
        this.container.id = this.name + 'container';
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
        this.labelelement.innerText = this.label;
        this.container.id = this.name + 'container';
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
        this.labelelement.innerText = this.label;
        this.container.id = this.name + 'container';
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
        this.labelelement.innerText = this.label;
        this.container.id = this.name + 'container';
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
        this.labelelement.innerText = this.label;
        this.container.id = this.name + 'container';
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
let app = new App();
app.createPresetForm();
app.createSubmiter();
// let ufd = new InputField('kupa', 'dupa');
// let body = document.body;
// body.appendChild(ufd.render());
