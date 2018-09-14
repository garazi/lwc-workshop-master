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
	getProperties: function(component,event,helper) {
		helper.getProps(component);
	},
	buildList : function (component) {
		component.set('v.mapMarkers', [
            {
                location: {
                    City: 'Cap-d\'Ail',
                    Country: 'France',
                },

                icon: 'custom:custom26',
                title: 'Cap-d\'Ail'
            },
            {
                location: {
                    City: 'Beaulieu-sur-Mer',
                    Country: 'France',
                },

                icon: 'custom:custom96',
                title: 'Beaulieu-sur-Mer'
            },
            {
                location: {
                    City: 'Saint-Jean-Cap-Ferrat',
                    Country: 'France',
                },

                title: 'Saint-Jean-Cap-Ferrat'
            },
            {
                location: {
                    City: 'Villefranche-sur-Mer',
                    Country: 'France',
                },

                icon: 'custom:custom92',
                title: 'Villefranche-sur-Mer'
            },
            {
                location: {
                    City: 'Antibes',
                    Country: 'France',
                },

                icon: 'custom:custom61',
                title: 'Antibes'
            },
            {
                location: {
                    City: 'Juan-les-Pins',
                    Country: 'France',
                },

                icon: 'custom:custom74',
                title: 'Juan-les-Pins'
            },
            {
                location: {
                    City: 'Cannes',
                    Country: 'France',
                },

                icon: 'custom:custom3',
                title: 'Cannes'
            },
            {
                location: {
                    City: 'Saint-Raphaël',
                    Country: 'France',
                },

                icon: 'custom:custom54',
                title: 'Saint-Raphaël'
            },
            {
                location: {
                    City: 'Fréjus',
                    Country: 'France',
                },

                icon: 'custom:custom88',
                title: 'Fréjus'
            },
            {
                location: {
                    City: 'Sainte-Maxime',
                    Country: 'France',
                },

                icon: 'custom:custom92',
                title: 'Sainte-Maxime'
            },
            {
                location: {
                    City: 'Saint-Tropez',
                    Country: 'France',
                },

                icon: 'custom:custom26',
                title: 'Saint-Tropez'
            },
        ]);
    }
})