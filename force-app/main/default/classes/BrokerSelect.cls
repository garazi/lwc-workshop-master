public class BrokerSelect {
	@AuraEnabled
	public static Broker__c getBroker (Id recordId) {
		List<Property__c> property = [SELECT Broker__c FROM Property__c WHERE Id=:recordId];
        Id brokerId = property[0].Broker__c;
        Broker__c brokerInfo = getBrokerInfo(brokerId);
		return brokerInfo;
	}

	private static Broker__c getBrokerInfo (String brokerId) {
		Broker__c broker = [
			SELECT Name, Email__c, Phone__c, Mobile_Phone__c, Picture_IMG__c, Picture__c FROM Broker__c WHERE Id=:brokerId
		];
		return broker;
	}
}