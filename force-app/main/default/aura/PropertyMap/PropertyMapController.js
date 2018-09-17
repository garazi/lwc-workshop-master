({
	doInit: function(component,event,helper) {
		console.log("doing init");
		component.set("v.mapMarkers", [{
			location: {
				Street: component.get('v.property.Address__c'),
				City: component.get('v.property.City__c'),
				State: component.get('v.property.State__c')
			},
			title: component.get('v.property.Name'),
			description: component.get('v.property.Title__c')
			}]);
		// helper.makeMap(component);
	},
	getProperties: function(component, event, helper) {
		helper.getProps(component);
	},
	buildList: function(component) {
		console.log("fff: ", component.get("v.similarProperties"))
		// component.set("v.mapMarker", [{
		// 	location: {
		// 		Street: component.get('v.property.Address__c'),
		// 		City: component.get('v.property.City__c'),
		// 		State: component.get('v.property.State__c')
		// 	},
		// 	title: component.get('v.property.Name'),
		// 	description: component.get('v.property.Title__c')
		// 	}]);
		var similarProperties = component.get("v.similarProperties");
		var propertiesArray = [];
		var singleProperty = {
			location: {
				Street: component.get('v.property.Address__c'),
				City: component.get('v.property.City__c'),
				State: component.get('v.property.State__c')
			},
			title: component.get('v.property.Name'),
			description: component.get('v.property.Title__c')
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
				description: similarProperties[i].Title__c
			}
			propertiesArray.push(singleProperty);
		}
		component.set("v.mapMarkers", propertiesArray);
		console.log("list: ", propertiesArray)
		helper.makeMap(component);
	}
})