({
    callMe : function(component, event, helper) {

        $A.createComponent(
                    "lightning:button",
                    {
                        "label":"submit",
                        "onclick":component.getReference("c.show")
                    },
                    function(cmp,status,errorMessage){
                        if(status === 'SUCCESS'){
                            var body=component.get("v.body");
                            body.push(cmp);
                            component.set("v.body",body);
                        }
                    }


        );

    },
   show : function(component,event,helper){
        alert("I am Invoked");

    }
})
