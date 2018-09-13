({
	handleSelect: function(component, event, helper) {
		var stepName = event.getParam("detail").value;
		component.set("v.property.Status__c", stepName);
		component.find("propertyService")
			.saveRecord($A.getCallback(function(result) {
				// alert(result.state);
				if (result.state === "SUCCESS" || result.state === "DRAFT") {
					var toastEvent = $A.get("e.force:showToast");
					toastEvent.setParams({
						"title": "Success!",
						"message": "The property's status has been updated.",
						"type": "success"
					});
					toastEvent.fire();
				}
			}));
	}
})