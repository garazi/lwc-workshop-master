({
	getRecord : function(component) {
        var tempRec = component.find("editRecord");
        tempRec.set("v.recordId", component.get("v.remoteRecordId"));
        tempRec.reloadRecord();
        console.log('foo: ', component.get("v.picklistValues"))
    },
    toggleDialog : function(component, event, helper) {
        helper.showHideModal(component);
    },
    saveRecord : function(component,event,helper) {
        var propBeds = parseInt(component.find('propBeds').get("v.value"), 10);
        var propBaths = parseInt(component.find('propBaths').get("v.value"), 10);
        var propPrice = parseInt(component.find('propPrice').get("v.value"), 10);
        
        component.set("v.selectedProperty.fields.Beds__c.value", propBeds);
        component.set("v.selectedProperty.fields.Baths__c.value", propBaths);
        component.set("v.selectedProperty.fields.Price__c.value", propPrice);

        var tempRec = component.find("editRecord");
        tempRec.saveRecord($A.getCallback(function(result){
            console.log(result.state);
            if (result.state === "SUCCESS" || result.state === "DRAFT") {
                var event = $A.get("e.c:recordUpdated");
                event.fire();
            } else if (result.state === "ERROR") {
                console.log('Error: ' + JSON.stringify(result.error));
            } else {
                console.log('Unknown problem, state: ' + result.state + ', error: ' + JSON.stringify(result.error));
            }
        }));       
        helper.showHideModal(component);
    }
})