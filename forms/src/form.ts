import { Field } from './fields';

class Form {
    fields: Field[];
    values: string[];
    formElement: HTMLElement | null;

    constructor(id: string) {
        this.fields = new Array();
        this.values = new Array();
        this.formElement = document.getElementById(id);
    }

    render(): void {
        let formContainer = document.createElement('div');
        let forma = document.createElement('form');
        this.fields.forEach(field => {

            forma.appendChild(field.render());
        });
        formContainer.id = 'formContainer';
        formContainer.appendChild(forma);
        document.body.appendChild(formContainer);
    }
    getValue(): void {

        this.fields.forEach((field, index) => {
            this.values.push(field.getValue());
        });
        localStorage.setItem('form', JSON.stringify(this.values));
    }
    renderValue(): void {
        let valuesDS = new Array();
        valuesDS = JSON.parse(localStorage.getItem('form')!);

        let valueContainer = document.createElement('div');
        valueContainer.id = "valueContainer";

        valuesDS.forEach((field, index) => {
            let d = document.createElement('div');
            let a = document.createElement('a');
            let deleteSingleObject = document.createElement('button');


            deleteSingleObject.addEventListener('click', (e) => {
                valuesDS.splice(index, 1);
                localStorage.setItem('form', JSON.stringify(valuesDS));
                valueContainer.removeChild(d);
                location.reload()
                
            });

            deleteSingleObject.className = "deleteValue";
            d.className = 'formObject';
            a.innerText = valuesDS[index];
            a.contentEditable = 'true';
            d.appendChild(a);
            d.appendChild(deleteSingleObject);
            valueContainer.appendChild(d);
        });

        document.body.appendChild(valueContainer);
    }
} export { Form };