
import {Form} from './form';

import './styles/styles.scss';
import {InputField} from './inputField';
import {RadioField} from './radioField';
import {CheckboxField} from './checkboxField';
import {EmailField} from './emailField';
import {DateField} from './dateField';
import {TextAreaField} from './textAreaField';
import {SelectCountryField} from './selectCountryField';
import {SelectField} from './selectField';
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
        let selectCountry = new SelectCountryField('selectCountry', 'Kraj pochodzenia');
        let select = new SelectField('select','Kierunek studiów',['Informatyka i ekonometria', 'Zarządzanie', 'Finanse i rachunkowość']);

        this.form.fields.push(name);
        this.form.fields.push(surname);
        this.form.fields.push(select);
        this.form.fields.push(checkbox);
        this.form.fields.push(date);
        this.form.fields.push(textfiedlo);
        this.form.fields.push(mail);
        this.form.fields.push(selectCountry);
        this.form.render();
        
        

    }
    createSubmiter(): void{
        
        let button = document.createElement('button');
        button.addEventListener('click',(e) =>{
            this.form.getValue();
            this.form.renderValue();
            button.disabled = true;
            this.form.values.forEach((element: string) => {
                socket.send(element);
            });

        });
        button.innerText = "Zatwierdź";
        //document.body.appendChild(button);
        if(localStorage.length>0){
            button.disabled = true;
        }
        document.querySelector('#formContainer')?.appendChild(button);

        
        
        
    }
}
let app = new App();
let socket = new WebSocket("ws://localhost:8080");
app.createPresetForm();
app.createSubmiter();
socket.onopen = function(e) {
    console.log("Connecting to sever.");
    socket.send("Client is connecting to the server.");
}
socket.onmessage = function(e) {
    console.log('Server: ' + e.data);
  };
if(localStorage.length>0){ 
    app.form.renderValue();
}

