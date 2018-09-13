({
	recordUpdated : function(component, event, helper) {
		var changeType = event.getParams().changeType;
        if (changeType === "LOADED" || changeType === "CHANGED") {
			helper.showDaysOnMarket(component);
        }
	}
})