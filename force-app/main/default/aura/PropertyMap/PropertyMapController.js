({
	doInit: function(component) {
		component.set("v.mapMarkers", [{
			location: {
				Street: component.get('v.property.Address__c'),
				City: component.get('v.property.City__c'),
				State: component.get('v.property.State__c')
			},
			title: component.get('v.property.Name'),
			description: component.get('v.property.Description__c')
            }]);
	},
	getProperties: function(component) {
		var action = component.get("c.getSimilarProperties");
		action.setParams({
			recordId: component.get("v.recordId"),
			beds: component.get("v.property.Beds__c"),
			price: component.get("v.property.Price__c")
		});
		action.setCallback(this, function(response) {
			var similarProperties = response.getReturnValue();
			var propertiesArray = [];
			var singleProperty = {
				location: {
					Street: component.get('v.property.Address__c'),
					City: component.get('v.property.City__c'),
					State: component.get('v.property.State__c')
				},
				title: component.get('v.property.Name'),
				description: component.get('v.property.Description__c')
			};
			propertiesArray.push(singleProperty);

			for (var i = 0; i < similarProperties.length; i++) {
				singleProperty = {
					location: {
						Street: similarProperties[i].Address__c,
						City: similarProperties[i].City__c,
						State: similarProperties[i].State__c
					},
					title: similarProperties[i].Name,
					description: similarProperties[i].Description__c
				}
				propertiesArray.push(singleProperty);
			}
			component.set("v.mapMarkers", propertiesArray);
			console.log("list: ", propertiesArray)
		});
		$A.enqueueAction(action);
	}
})