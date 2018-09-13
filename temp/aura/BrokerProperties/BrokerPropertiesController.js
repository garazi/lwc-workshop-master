({
    doInit: function(component, event, helper) {
      var rowLevelActions = [
        { label: 'Edit Details', name: 'edit_details' },
        { label: 'Delete', name: 'delete' }
          ];
      component.set("v.columns", [
        {
          label: "Property",
          fieldName: "url", //there is no url field on the record, we are using this for the purpose of navigation
          type: "url",
          sortable: "true",
          typeAttributes: { label: { fieldName: "Name" } }
        },
        {
          label: "Status",
          fieldName: "Status__c",
          sortable: "true"
        },
        {
          type: 'action',
          typeAttributes: { rowActions: rowLevelActions }
        }
          ]);
      var action = component.get("c.getPropertiesByBroker");
      action.setParams({
        BrokerId: component.get("v.recordId")
      });
      action.setCallback(this, function(response) {
        var propertyList = response.getReturnValue();
        propertyList.forEach(function(element){
          // url is a temporary field that we will use for the purpose of navigation
          element.url = "/one/one.app#/sObject/" + element.Id;
        });
        component.set("v.propertyRecords", propertyList);
      })
      $A.enqueueAction(action);
    },
    handleRowAction: function (cmp, event, helper) {
        var action = event.getParam('action');
        var row = event.getParam('row');
        switch (action.name) {
            case 'edit_details':
                cmp.set("v.showDialog", "true");
                cmp.set("v.selectedRow", row.Id);
                break;
            case 'delete':
                var rows = cmp.get('v.propertyRecords');
                var rowIndex = rows.indexOf(row);
                rows.splice(rowIndex, 1);
                cmp.set('v.propertyRecords', rows);
                break;
        }
    },
	doSelect: function(component, event, helper) {
		var selectedRows = event.getParam('selectedRows');
		for (var i = 0; i < selectedRows.length; i++) {
			alert("You selected: " + selectedRows[i].Name);
		}
	},
    updateColumnSorting: function(component, event, helper) {
		var fieldName = event.getParam('fieldName');
		var sortDirection = event.getParam('sortDirection');
        console.log("sort: ", sortDirection)
        if (fieldName == "url") {
            fieldName = "Name";
        }
		component.set("v.sortedBy", fieldName);
		component.set("v.sortedDirection", sortDirection);
		helper.sortData(component, fieldName, sortDirection);
	}
  })