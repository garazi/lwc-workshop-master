({
	editRecord: function(component, event, helper) {
		helper.showHide(component);
	},
	fireToast: function(component,event,helper) {
		var toastEvent = $A.get("e.force:showToast");
		toastEvent.setParams({
			"title": "Success!",
			"message": "The broker's info has been updated.",
			"type": "success"
		});
		toastEvent.fire();
		helper.showHide(component);
	},
	changeEdit : function (component) {
		alert ("foo")
	}
})