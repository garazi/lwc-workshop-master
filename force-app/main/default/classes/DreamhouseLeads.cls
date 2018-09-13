public with sharing class DreamhouseLeads {
    public String sortOrder {set; get;}
    
    public Boolean getIsClassic() { 
        return (UserInfo.getUiThemeDisplayed() == 'Theme3' && ApexPages.currentPage().getParameters().get('beLightning') == null);
    }
    @AuraEnabled
    public static List<Lead> getLeads() {
        return Database.query('SELECT Description,Email,FirstName,Id,LastName,Phone FROM Lead WHERE Company=\'Dreamhouse\' ORDER BY LastName');
    }
    
    public pageReference sortList() {
        getLeads();
        return null;
    }
}