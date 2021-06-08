public with sharing class schemaPicklist {
    @AuraEnabled
    public static List<String> invoke(String objName){
        Map<String,Schema.SobjectType> objMap = Schema.getGlobalDescribe();

        Schema.SobjectType obj = objMap.get(objName);

        Schema.DescribeSobjectResult result = obj.getDescribe();

        Map<String,Schema.SobjectField> fldMap=result.fields.getMap();

        Set<String> fieldNames = fldMap.keySet();

        List<String> myValues = new List<String>(fieldNames);
        return myValues;
    }

    
}
