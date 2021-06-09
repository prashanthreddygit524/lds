({
    show: function(component, event, helper) {
        $A.createComponent(
                "c:inputExm",
                {
                    "name":"prasad",
                    "age":50
                },
                function(cmp,status,errorMessage){
                    if(status === 'SUCCESS'){
                        var body = component.get("v.body");
                        body.push(cmp);
                        component.set("v.body",body);

                    }
                }



        );

    }
})
