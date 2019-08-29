// Thanks to my colleague, Rodrigo Reboucas, for the help in creating this class.
// All code is provided "as is", with no expectation of support from Salesforce.

global with sharing class DescribeObjects extends VisualEditor.DynamicPickList {

    global override VisualEditor.DataRow getDefaultValue(){
        VisualEditor.DataRow defaultValue = new VisualEditor.DataRow('Property__c', 'Property__c');
        return defaultValue;
    }
    global override VisualEditor.DynamicPickListRows getValues() {
        VisualEditor.DynamicPickListRows  myValues = new VisualEditor.DynamicPickListRows();
        
        map<string, SObjectType> objs = schema.getGlobalDescribe();
        List<String> lstObjNames = new List<String>();
        for(string key: objs.keySet()){
            String val = objs.get(key).getDescribe().getName();
            Schema.DescribeSObjectResult objResult = objs.get(key).getDescribe();
            String objLabel =  objResult.getLabel();
            Boolean isSearchable = objResult.isSearchable();
            Boolean isQueryable = objResult.isQueryable();
            System.Debug('objLabel: ' + objLabel +  '  - value: ' + val + 'isSearchable: ' + isSearchable);
            if (isQueryable && isSearchable && !val.containsignorecase('history') && !val.containsignorecase('tag')&& !val.containsignorecase('share') && !val.containsignorecase('feed')) {
                lstObjNames.add(val);
            }
        }

        if (lstObjNames.size() > 0)
        {
            lstObjNames.sort();
            for (string name: lstObjNames)
            {
                VisualEditor.DataRow value = new VisualEditor.DataRow(name,name);
                myValues.addRow(value);
            }
        }
        return myValues;
    }
}