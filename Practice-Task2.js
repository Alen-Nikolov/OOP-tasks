var gsm={
    model:"",
    hasSimCard:false,
    simMobileNumber:"",
    outgoingCallsDuration:0,
    lastIncomingCall:"",
    lastOutgoingCall:"",
    insertSimCard:function(simMobileNumber){
        if(simMobileNumber.charAt(0)=="0" && simMobileNumber.charAt(1)=="8" && simMobileNumber.length==10){
            this.simMobileNumber=simMobileNumber;
            this.hasSimCard=true;
        }
    },
    removeSimCard:function(){
        this.hasSimCard=false;
    }
};

var call={
    priceForAMinute:0,
    caller:"",
    receiver:"",
    duration:0,
        
};
