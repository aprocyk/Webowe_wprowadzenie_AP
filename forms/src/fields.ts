enum FieldType {
    textInput = 'text',
    dateInput = 'date',
    emailInput = 'email',
    radioInput = 'radio',
    checkboxInput = 'checkbox',
    textAreaInput = 'textarea',
    selectInput = 'select'
}
interface Field {
    name: string;
    label: string;
    type: FieldType;
    render(): HTMLElement;
    getValue(): any;
}
export {Field, FieldType};