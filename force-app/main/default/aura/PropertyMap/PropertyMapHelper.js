({
	getProps: function(component) {
		var action = component.get("c.getMapMarkers");
		action.setParams({
			recordId: component.get("v.recordId"),
			beds: component.get("v.property.Beds__c"),
			price: component.get("v.property.Price__c")
		});
		action.setCallback(this, function(response) {
			var similarProperties = response.getReturnValue();
			console.log("Props: ", similarProperties);
			component.set("v.similarProperties", similarProperties);
		});
		$A.enqueueAction(action);
	},
	makeMap: function(component) {
		// var foo = component.find("googleMap");
		// if (foo) {
		// 	foo.destroy();
		// }
		$A.createComponent(
			"lightning:map", {
				"mapMarkers": component.get("v.mapMarkers"),
				"zoomLevel": "13",
                "aura:id": "googleMap"
			},
			function(newCmp) {
				var body = component.get("v.body");
				body.push(newCmp);
				component.set("v.body", body);
			}
		)
	}
})