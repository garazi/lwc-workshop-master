({
    getData: function(component, currentRecord, objectType, searchTerm) {
        this.showSpinner(component);
        switch (objectType) {
            case 'Contact':
                var recordAddress = currentRecord.fields.MailingStreet.value + ',' + currentRecord.fields.MailingCity.value + ',' + currentRecord.fields.MailingState.value;
                component.set("v.address", currentRecord.fields.MailingStreet.value);
                break;
            case 'Account':
                var recordAddress = currentRecord.fields.BillingStreet.value + ',' + currentRecord.fields.BillingCity.value + ',' + currentRecord.fields.BillingState.value;
                component.set("v.address", currentRecord.fields.BillingStreet.value);
                break;
            case 'Property__c':
                var recordAddress = currentRecord.fields.Address__c.value + ',' + currentRecord.fields.City__c.value + ',' + currentRecord.fields.State__c.value;
                component.set("v.address", currentRecord.fields.Address__c.value);
                break;
            default:
                return '{"error": "This component cannot be used on this page type."}';
        }

        console.log('getting data for: ', recordAddress)
        var action = component.get("c.getListByAddress");
        action.setParams({
            "address": recordAddress,
            "searchTerm": searchTerm
        });
        action.setCallback(this, function(response) {
            var data = JSON.parse(response.getReturnValue());
            console.log("data: ", data);
            console.log("location: ", data.location);
            this.populateList(component, data);
        });
        action.setStorable();
        $A.enqueueAction(action);
    },
    populateList: function(component, data) {
        console.log("populating list");
        var loc = component.get("v.location");
        if (loc && loc.latitude == data.location.latitude) {
            console.log('same location')
            component.set("v.resultList", data.bizArray);
        } else {
            console.log('new location')
            component.set("v.location", data.location);
            component.set("v.resultList", data.bizArray);
        }

    },
    hideSpinner: function(component) {
        console.log("hiding the spinner");
        var spinner = component.find('spinner');
        $A.util.addClass(spinner, "slds-hide");
    },
    showSpinner: function(component) {
        console.log("showing the spinner");
        var spinner = component.find('spinner');
        $A.util.removeClass(spinner, "slds-hide");
    }
})