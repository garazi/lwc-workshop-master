public class MyPropertyController {
     @AuraEnabled
     public static List<Property__c> getSimilarProperties (Id recordId, String searchCriteria, Decimal beds, Decimal price, Decimal priceRange ) {
         if (searchCriteria == 'Bedrooms') {
             return [
                 SELECT Id, Name, Beds__c, Baths__c, Price__c, Broker__c, Status__c, Thumbnail__c, Address__c, City__c, State__c, Description__c, Title__c
                 FROM Property__c WHERE Id != :recordId AND Beds__c = :beds
             ];
         } else {
             Decimal range;
             if (priceRange == null) {
                 range = 100000;
             } else {
                 range = priceRange;
             }
             return [
                 SELECT Id, Name, Beds__c, Baths__c, Price__c, Broker__c, Status__c, Thumbnail__c, Address__c, City__c, State__c, Description__c, Title__c
                 FROM Property__c WHERE Id != :recordId AND Price__c > :price - range AND Price__c < :price + range
             ];
         }
     }

    public class Marker {
        public string icon {get; set;}
        public string title {get; set;}
        public object location {get; set;}
    }

     @AuraEnabled
     public static List<Property__c> getMapMarkers (Id recordId, String searchCriteria, Decimal beds, Decimal price, Decimal priceRange) {
         List<Property__c> foo = getSimilarProperties(recordId,searchCriteria,beds,price,priceRange);


         return foo;
     }
}