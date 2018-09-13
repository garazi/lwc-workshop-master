({
    navToRecord: function(component, event, helper) {
        var context = component.get("v.userContext");
        var recId = component.get("v.propertyId");
        var navEvt = $A.get("e.force:navigateToSObject");
        navEvt.setParams({
            recordId: recId
        });
        navEvt.fire();
    },
    editRecord: function(component, event, helper) {
        var recId = component.get("v.propertyId");
        
        // These two lines should be commented out if using the standard Edit Record modal below
        component.set("v.remoteRecordId", recId);
        component.set("v.showDialog", "true");
        
        // To use the standard Edit Record modal uncomment the following six lines
        //var recordId = event.getSource().get("v.value");
        // var editRecordEvent = $A.get("e.force:editRecord");
        // editRecordEvent.setParams({
        //     "recordId": recId
        // });
        // editRecordEvent.fire();
    }
})