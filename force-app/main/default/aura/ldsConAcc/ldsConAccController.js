({
    invoke : function(component, event, helper) {
        component.find("rec").getNewRecord(
            "Contact",
            null,
            false,
            $A.getCallback(function(){
                var acc = component.get("v.newCon");
                if(acc === null){
                    console.log('Contact creation failed');
                    alert('Contact Failed');
                }
                    else{
                        //acc.AccountId=component.get("v.recordId");
                        //component.set("v.con",acc);
                        console.log('COntact created Success');
                        alert('Contact Success');
                    }

                


            })

        );
    },
    callMe : function(component,event,helper){
        component.find("rec").saveRecord(function(saveResult){
            var state=saveResult.state;
            if(state === "SUCCESS" || state === "DRAFT"){
                alert('Contact CreatedSuucess');
                  // record is saved successfully
                  var resultsToast = $A.get("e.force:showToast");
                  resultsToast.setParams({
                      "title": "Saved",
                      "message": "The record was saved."
                  });
                  resultsToast.fire()
            }else if(state === "ERROR"){
                alert('contact failed');
                var resultsToast=$A.get("e.force:showToast");
                resultsToast.setParams({
                    "title":"Failed to Save",
                    "message":"Recorf not saved"
                });
                resultsToast.fire();
            }

        });
    }
})
