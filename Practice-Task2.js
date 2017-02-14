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
    },
    call:function(receiver, duration){
        if(duration<0||this.simMobileNumber==receiver
        ||this.hasSimCard==false){
            return;
        }
        this.lastOutgoingCall=receiver.simMobileNumber;
        receiver.lastIncomingCall=this.simMobileNumber;
        this.outgoingCallsDuration+=duration;

    }
};

var call={
    priceForAMinute:0,
    caller:"",
    receiver:"",
    duration:0,
        
};
gsm.call("0896323423",3);
console.log(gsm.lastOutgoingCall);
console.log(gsm.outgoingCallsDuration);
