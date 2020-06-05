import { Field, FieldType } from './fields';

class SelectCountryField implements Field {
    name: string;
    label: string;
    type: FieldType;
    element: HTMLSelectElement;
    labelelement: HTMLLabelElement;
    container: HTMLElement;
    constructor(name: string, label: string) {
        this.type = FieldType.selectInput;
        this.container =
            <HTMLElement>document.createElement('div');
        this.element =
            <HTMLSelectElement>document.createElement(this.type);
        this.labelelement =
            <HTMLLabelElement>document.createElement('label');
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

        this.fetchOptions<{ name: string, region: string }>("https://restcountries.eu/rest/v2/all").then((data) => {
            data.filter(x => x.region === 'Europe').map(x => x.name).forEach(e => {
                let option = <HTMLOptionElement>document.createElement("option");
                option.id = 'countries';
                option.text = e;
                option.value = e;
                this.element.options.add(option);
            })
        });

    }
    fetchOptions<T>(url: string): Promise<T[]> {
        return fetch(url)
            .then(res => res.json())
            .then(res => {
                return res;
            })
            .catch((e) => {
                console.log("API errore fetching ");
            });
    }
    render(): HTMLElement {
        return this.container;

    }
    getValue(): any {
        return this.element.value;
    }
}

export { SelectCountryField };