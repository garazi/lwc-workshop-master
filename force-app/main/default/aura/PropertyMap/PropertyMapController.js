({
	doInit: function(component, event, helper) {
		console.log("doing init");
		component.set("v.mapMarkers", [{
			location: {
				Longitude: component.get('v.property.Location__Longitude__s'),
				Latitude: component.get('v.property.Location__Latitude__s')
			},
			title: component.get('v.property.Name'),
			description: component.get('v.property.Title__c')
			}]);
	},
	getProperties: function(component, event, helper) {
		helper.getProps(component);
	},
	buildList: function(component) {
		console.log("fff: ", component.get("v.similarProperties"))
		var similarProperties = component.get("v.similarProperties");
		var propertiesArray = [];
		var singleProperty = {
			location: {
				Longitude: component.get('v.property.Location__Longitude__s'),
				Latitude: component.get('v.property.Location__Latitude__s')
			},
			title: component.get('v.property.Name'),
			description: component.get('v.property.Title__c')
		};
		propertiesArray.push(singleProperty);
		for (var i = 0; i < similarProperties.length; i++) {
			singleProperty = {
				location: {
					Longitude: similarProperties[i].Location__Longitude__s,
					Latitude: similarProperties[i].Location__Latitude__s
				},
				title: similarProperties[i].Name,
				description: similarProperties[i].Title__c
			}
			propertiesArray.push(singleProperty);
		}
		component.set("v.mapMarkers", propertiesArray);
		console.log("list: ", propertiesArray)
	}
})