({
    callMe : function(component, event, helper) {
        component.find("rec").saveRecord($A.getCallback(function(saveResult){
            if(saveResult.state === 'SUCCESS'){
                alert('Success');
            }
            else {
                alert('Error');
            }


        }));
    }
})
