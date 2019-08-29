import { LightningElement, api, track } from 'lwc';

export default class formBuilder extends LightningElement {
    @api recordId;
    @api objectApiName;
    @api fieldsToDisplay = '';
    @api title;
    @api icon;
    @api mode;
    @api object;
    @api record;
    @api layout;
    @api columns;
    @track init;
    @track message;
    @track fields = [];

    connectedCallback() {
    }

    renderedCallback() {
        if (!this.object) {
            this.message = "Please provide an object to begin.";
            return;
        }

        let form = this.template.querySelector('lightning-record-form');

        if (this.layout === 'None' && this.fieldsToDisplay === '') {
            this.message = "Please select a layout and/or provide a list of fields."
        }

        if (this.layout !== 'None') {
            form.layoutType = this.layout;
        }

        if (this.fieldsToDisplay !== '') {
            this.fields = this.fieldsToDisplay.split(",");
            form.fields = this.fields;
        }

        if (this.record === 'this') {
            form.recordId = this.recordId;
        } else if (this.record !== '') {
            form.recordId = this.record;
        }

    }
}
