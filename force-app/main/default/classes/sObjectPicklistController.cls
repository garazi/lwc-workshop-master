public class sObjectPicklistController extends VisualEditor.DynamicPickList{

    public override VisualEditor.DataRow getDefaultValue(){
        //Sets Property__c as default for demo
        VisualEditor.DataRow defaultValue = new VisualEditor.DataRow('Property', 'Property__c',true);
        return defaultValue;
    }

    public override VisualEditor.DynamicPickListRows getValues() {
       
        VisualEditor.DynamicPickListRows  allPicklistValus = new VisualEditor.DynamicPickListRows();
        // get all sObjectNames and Labels
            Map<String, Schema.SObjectType> allObjects = Schema.getGlobalDescribe();
            for(String objectName : allObjects.keyset()){
                Schema.DescribeSObjectResult objectTypeDescribe = allObjects.get(objectName).getDescribe(); 
                VisualEditor.DataRow value = new VisualEditor.DataRow((String)objectTypeDescribe.getLabel(),(String)objectTypeDescribe.getName());
                allPicklistValus.addRow(value);
            }
        return allPicklistValus;
    }

}
