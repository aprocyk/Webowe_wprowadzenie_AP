
import {Form} from './form';
import {CheckboxField, RadioField, EmailField, DateField, TextAreaField, InputField} from './inputFields';

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
let app = new App();
app.createPresetForm();
app.createSubmiter();

