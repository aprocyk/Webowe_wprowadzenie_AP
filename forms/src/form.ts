import {Field} from './fields';

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
}export {Form};