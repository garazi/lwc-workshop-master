@isTest
public class TestNeighborhoodServiceController {
    static testMethod void testByLatLong() {
        Test.setMock(HttpCalloutMock.class, new MockHttpResponseGenerator());
        
        String searchTerm = 'restaurant';
        
        Decimal lat = 37.7935226;
        Decimal lon = -122.3966302;
        String latlon = lat + ',' + lon;
        NeighborhoodServiceController.getListByLatLon(latlon, searchTerm);

    }
    
    static testMethod void testByAddress() {
        Test.setMock(HttpCalloutMock.class, new MockHttpResponseByAddressGenerator());
        
        String searchTerm = 'restaurant';        
        String address = 'San Francisco';
        NeighborhoodServiceController.getListByAddress(address, searchTerm);

    }    
}