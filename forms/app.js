"use strict";
var FieldType;
(function (FieldType) {
    FieldType["textInput"] = "text";
    FieldType["dateInput"] = "date";
    FieldType["emailInput"] = "email";
    FieldType["radioInput"] = "radio";
    FieldType["checkboxInput"] = "checkbox";
    FieldType["textAreaInput"] = "textarea";
})(FieldType || (FieldType = {}));
var App = /** @class */ (function () {
    function App() {
        this.form = new Form('formtest');
    }
    App.prototype.createPresetForm = function () {
        var name = new InputField('textfieldname', 'Imię');
        var surname = new InputField('textfieldsurname', 'Nazwisko');
        var checkbox = new CheckboxField('checboxfield', 'Czy lubisz masło?');
        var date = new DateField('datefield', 'Data urodzenia');
        var textfiedlo = new TextAreaField('textareafield', 'Napisz coś o sobie');
        var mail = new EmailField('mailo', 'Email');
        this.form.fields.push(name);
        this.form.fields.push(surname);
        this.form.fields.push(checkbox);
        this.form.fields.push(date);
        this.form.fields.push(textfiedlo);
        this.form.fields.push(mail);
        this.form.render();
    };
    App.prototype.createSubmiter = function () {
        var _this = this;
        var _a;
        var button = document.createElement('button');
        button.addEventListener('click', function (e) {
            _this.form.getValue();
        });
        button.innerText = "Zatwierdź";
        //document.body.appendChild(button);
        (_a = document.querySelector('#formContainer')) === null || _a === void 0 ? void 0 : _a.appendChild(button);
    };
    return App;
}());
var Form = /** @class */ (function () {
    function Form(id) {
        this.fields = new Array();
        this.formElement = document.getElementById(id);
    }
    Form.prototype.render = function () {
        var formContainer = document.createElement('div');
        var forma = document.createElement('form');
        this.fields.forEach(function (field) {
            forma.appendChild(field.render());
        });
        formContainer.id = 'formContainer';
        formContainer.appendChild(forma);
        document.body.appendChild(formContainer);
    };
    Form.prototype.getValue = function () {
        var _this = this;
        var valueContainer = document.createElement('div');
        valueContainer.id = "valueContainer";
        this.fields.forEach(function (field, index) {
            var d = document.createElement('div');
            var a = document.createElement('a');
            var b = document.createElement('button');
            b.addEventListener('click', function (e) {
                _this.fields.splice(index, 1);
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
    };
    return Form;
}());
var InputField = /** @class */ (function () {
    function InputField(name, label) {
        this.container =
            document.createElement('div');
        this.element =
            document.createElement('input');
        this.labelelement =
            document.createElement('label');
        this.name = name;
        this.label = label;
        this.type = FieldType.textInput;
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
    InputField.prototype.render = function () {
        return this.container;
    };
    InputField.prototype.getValue = function () {
        return this.element.value;
    };
    return InputField;
}());
var TextAreaField = /** @class */ (function () {
    function TextAreaField(name, label) {
        this.container =
            document.createElement('div');
        this.labelelement =
            document.createElement('label');
        this.type = FieldType.textAreaInput;
        this.element =
            document.createElement(this.type);
        this.name = name;
        this.label = label;
        this.element.name = this.name;
        this.element.id = this.name;
        this.labelelement.htmlFor = this.name;
        this.labelelement.innerText = this.label + ': ';
        this.container.id = this.name + 'container';
        this.container.className = 'formInput';
        this.container.appendChild(this.labelelement);
        this.container.appendChild(this.element);
    }
    TextAreaField.prototype.render = function () {
        return this.container;
    };
    TextAreaField.prototype.getValue = function () {
        return this.element.value;
    };
    return TextAreaField;
}());
var DateField = /** @class */ (function () {
    function DateField(name, label) {
        this.container =
            document.createElement('div');
        this.element =
            document.createElement('input');
        this.labelelement =
            document.createElement('label');
        this.name = name;
        this.label = label;
        this.type = FieldType.dateInput;
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
    DateField.prototype.render = function () {
        return this.container;
    };
    DateField.prototype.getValue = function () {
        return this.element.value;
    };
    return DateField;
}());
var EmailField = /** @class */ (function () {
    function EmailField(name, label) {
        this.container =
            document.createElement('div');
        this.element =
            document.createElement('input');
        this.labelelement =
            document.createElement('label');
        this.name = name;
        this.label = label;
        this.type = FieldType.emailInput;
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
    EmailField.prototype.render = function () {
        return this.container;
    };
    EmailField.prototype.getValue = function () {
        return this.element.value;
    };
    return EmailField;
}());
var RadioField = /** @class */ (function () {
    function RadioField(name, label) {
        this.container =
            document.createElement('div');
        this.element =
            document.createElement('input');
        this.labelelement =
            document.createElement('label');
        this.name = name;
        this.label = label;
        this.type = FieldType.radioInput;
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
    RadioField.prototype.render = function () {
        return this.container;
    };
    RadioField.prototype.getValue = function () {
        return this.element.checked;
    };
    return RadioField;
}());
var CheckboxField = /** @class */ (function () {
    function CheckboxField(name, label) {
        this.container =
            document.createElement('div');
        this.element =
            document.createElement('input');
        this.labelelement =
            document.createElement('label');
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
    CheckboxField.prototype.render = function () {
        return this.container;
    };
    CheckboxField.prototype.getValue = function () {
        return this.element.checked;
    };
    return CheckboxField;
}());
var app = new App();
app.createPresetForm();
app.createSubmiter();
