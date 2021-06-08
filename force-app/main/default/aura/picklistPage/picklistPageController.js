({
    show : function(component, event, helper) {
           var selectedObject=component.get("v.selectedObject");
           var selectedField=component.get("v.selectedField"); 

           //calling apex class
           var action=component.get("c.invoke");
           action.setParams({"objName":selectedObject});
            action.setCallback(this,function(response){
                var state=response.getState();
                if(state=='SUCCESS'){
                    var result = response.getReturnvalue();
                    component.set("v.fields",result);
                    console.log(result[1]);

                }


            })


           $A.enqueueAction(action);
    }
})
