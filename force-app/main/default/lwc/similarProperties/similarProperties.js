import { LightningElement, api, track, wire } from 'lwc';
import findProperties from '@salesforce/apex/SimilarPropertyController.getSimilarProperties';
import { getRecord } from 'lightning/uiRecordApi';
import { registerListener, unregisterAllListeners } from 'c/pubsub';
import { CurrentPageReference } from 'lightning/navigation';
import { refreshApex } from '@salesforce/apex';

const fields = [
    'Property__c.Name',
    'Property__c.Price__c',
    'Property__c.Status__c',
    'Property__c.Beds__c',
    'Property__c.Broker__c'
]


export default class SimilarProperties extends LightningElement {
    @api recordId;
    @track props;
    @track errorMsg;
    @track property;
    @track price;
    @track beds;
    @api searchCriteria = 'Price';
    @api priceRange = '100000';
    @track cardTitle;
    @track noData;

    @wire(findProperties, {
        recordId: '$recordId',
        priceRange: '$priceRange',
        price: '$price',
        searchCriteria: '$searchCriteria',
        beds: '$beds'
    })
    wiredProps(value) {
        this.wiredRecords = value;
        if (value.error) {
            this.errorMsg = value.error;
            console.log("ERROR: ", this.errorMsg);
        } else if (value.data) {
            this.props = value.data;
            if (this.props && this.props.length == 0) {
                this.noData = true;
            } else {
                this.noData = false;
            }
        }
    }

    @wire(getRecord, { recordId: '$recordId', fields })
    wiredProperty(value) {
        if (value.data) {
            this.property = value.data;
            this.price = this.property.fields.Price__c.value;
            this.beds = this.property.fields.Beds__c.value;
        } else if (value.error) {
            console.log("OOOPS: ", value.error)
        }
    }


    @wire(CurrentPageReference) pageRef;

    connectedCallback() {
        registerListener('propertyUpdated', this.refreshSelection, this);
    }

    disconnectedCallback() {
        unregisterAllListeners(this);
    }
    refreshSelection() {
        refreshApex(this.wiredRecords);
    }
    renderedCallback() {
        this.cardTitle = 'Similar Properties by ' + this.searchCriteria;
    }
}