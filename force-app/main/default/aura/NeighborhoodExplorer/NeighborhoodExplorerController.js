({
    doInit: function(component, event, helper) {
        var date = new Date();
        date = date.getTime();
        console.log("Start: ", date);
        component.set("v.defaultSearch", component.get('v.tab1'));
    },
    recordUpdated: function(component, event, helper) {
        var date = new Date();
        date = date.getTime();
        console.log("End: ", date)
        var objectType = component.get("v.sObjectName");
        var currentRecord = component.get("v.currentRecord");
        $A.util.addClass(component.find('searchField'), 'slds-hide');
        $A.util.removeClass(component.find('searchField'), 'search');
        var searchTerm = component.get("v.defaultSearch");
        helper.getData(component, currentRecord, objectType, searchTerm);
    },
    updateSearch: function(component, event, helper) {
        var objectType = component.get("v.sObjectName");
        var currentRecord = component.get("v.currentRecord");
        var searchTerm = component.find("searchTerm").get("v.value");
        helper.getData(component, currentRecord, objectType, searchTerm);
    },
    selectedTab: function(component, event, helper) {
        console.log('here: ', event.getParam('id'))
        helper.doShopping(component, event)
    },
    showDetails: function(component, event, helper) {
        var closeItem = component.get('v.openItem');
        if (closeItem) {
            closeItem = closeItem.querySelector('[data-details]');
            $A.util.addClass(closeItem, 'slds-hide');
        }
        var selectedItem = event.currentTarget;
        component.set('v.openItem', selectedItem);
        var itemDetails = selectedItem.querySelector('[data-details]');
        $A.util.removeClass(itemDetails, 'slds-hide');
        
        var data = component.get('v.resultList');
        var recID = selectedItem.dataset.record;
        component.set("v.mapCenter", data[recID].location);
        var tmp = component.get("v.mapCenter")
        },
    hideSpinner: function(component, event, helper) {
        helper.hideSpinner(component);
    },
    sortNear: function(component, event, helper) {
        var tmp = component.get("v.resultList");
        tmp.sort(function(a, b) {
            if (a.distance > b.distance) {
                return 1;
            }
            if (a.distance < b.distance) {
                return -1;
            }
            // a isequal to b
            return 0;
        });
        component.set("v.resultList", tmp);
    },
    sortFar: function(component, event, helper) {
        var tmp = component.get("v.resultList");
        tmp.sort(function(a, b) {
            if (a.distance < b.distance) {
                return 1;
            }
            if (a.distance > b.distance) {
                return -1;
            }
            // a must be equal to b
            return 0;
        });
        component.set("v.resultList", tmp);
    }
})