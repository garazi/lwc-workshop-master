public class PropertiesByBroker {
    @AuraEnabled
    public static List<Property__c> getPropertiesByBroker (Id BrokerId) {             
        List<Property__c> properties = [
            SELECT Id, Name, Beds__c, Baths__c, Price__c, Broker__c, Status__c FROM Property__c WHERE Broker__c = :BrokerId
        ];
        return properties;
    }
}