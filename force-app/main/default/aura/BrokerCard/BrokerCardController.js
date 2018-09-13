({
	doInit: function(component, event, helper) {
		var action = component.get("c.getBroker");
		action.setParams({
			recordId: component.get("v.recordId")
		})
		action.setCallback(this, function(response) {
			var brokerInfo = response.getReturnValue();
			component.set("v.Broker", brokerInfo);
		})
		$A.enqueueAction(action);
	},
	updateBroker: function(component, event, helper) {
		var tempRec = component.find("brokerRecord");
		tempRec.set("v.recordId", component.get("v.Property.Broker__c"));
		tempRec.reloadRecord();
	},
	navToRecord: function(component, event, helper) {
		var navEvt = $A.get("e.force:navigateToSObject");
		navEvt.setParams({
			"recordId": component.get("v.Broker.Id")
		});
		navEvt.fire();
	},
	toggle: function(component,event,helper) {
		var event = $A.get("e.c:toggleColumn");
		event.fire();
	}
})