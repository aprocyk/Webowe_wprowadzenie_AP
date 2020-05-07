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
        let name = new InputField('textfieldname','Imię');
        let surname = new InputField('textfieldsurname','Nazwisko');
        let checkbox = new CheckboxField('checboxfield','Czy lubisz masło?');
        let date = new DateField('datefield','Data urodzenia');
        let textfiedlo = new TextAreaField('textareafield','Napisz coś o sobie');
        let mail = new EmailField('mailo','Email');

        this.form.fields.push(name);
        this.form.fields.push(surname);
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
        button.innerText = "Zatwierdź";
        //document.body.appendChild(button);
        document.querySelector('#formContainer')?.appendChild(button);

        
        
        
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
        let formContainer = document.createElement('div');
        let forma = document.createElement('form');
        this.fields.forEach(field => {
            
            forma.appendChild(field.render());
        });
        formContainer.id = 'formContainer';
        formContainer.appendChild(forma);
        document.body.appendChild(formContainer);
    }
    getValue(): void{
        let valueContainer = document.createElement('div');
        valueContainer.id = "valueContainer";
        this.fields.forEach((field,index) => {
            let d = document.createElement('div');
            let a = document.createElement('a');
            let b = document.createElement('button');
            b.addEventListener('click',(e)=>{
                this.fields.splice(index,1);
                valueContainer.removeChild(d);
            });
            
            b.className = "deleteValue";
            d.className = 'formObject';
            a.innerText = field.getValue();
            a.contentEditable = 'true';
            d.appendChild(a);
            d.appendChild(b);
            
            valueContainer.appendChild(d);

        });
        document.body.appendChild(valueContainer);
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
let app = new App();
app.createPresetForm();
app.createSubmiter();

