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
        var texto = new InputField('textfield', 'babol');
        var radio = new RadioField('radiofield', 'doot');
        var checkbox = new CheckboxField('checboxfield', 'oof');
        var date = new DateField('datefield', 'bop');
        var textfiedlo = new TextAreaField('textareafield', 'pisz');
        var mail = new EmailField('mailo', 'starto');
        this.form.fields.push(texto);
        this.form.fields.push(radio);
        this.form.fields.push(checkbox);
        this.form.fields.push(date);
        this.form.fields.push(textfiedlo);
        this.form.fields.push(mail);
        this.form.render();
    };
    App.prototype.createSubmiter = function () {
        var _this = this;
        var button = document.createElement('button');
        button.addEventListener('click', function (e) {
            _this.form.getValue();
        });
        button.innerText = "OOOO";
        document.body.appendChild(button);
    };
    return App;
}());
var Form = /** @class */ (function () {
    function Form(id) {
        this.fields = new Array();
        this.formElement = document.getElementById(id);
    }
    Form.prototype.render = function () {
        var forma = document.createElement('form');
        this.fields.forEach(function (field) {
            forma.appendChild(field.render());
        });
        document.body.appendChild(forma);
    };
    Form.prototype.getValue = function () {
        this.fields.forEach(function (field) {
            console.log(field.getValue());
        });
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
        this.labelelement.innerText = this.label;
        this.container.id = this.name + 'container';
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
        this.labelelement.innerText = this.label;
        this.container.id = this.name + 'container';
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
        this.labelelement.innerText = this.label;
        this.container.id = this.name + 'container';
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
        this.labelelement.innerText = this.label;
        this.container.id = this.name + 'container';
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
        this.labelelement.innerText = this.label;
        this.container.id = this.name + 'container';
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
        this.labelelement.innerText = this.label;
        this.container.id = this.name + 'container';
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
// let ufd = new InputField('kupa', 'dupa');
// let body = document.body;
// body.appendChild(ufd.render());
