function Call(caller,receiver,duration ){
    this.priceForAMinute=0.2;
    this.caller=caller;
    this.receiver=receiver;
    this.duration=duration;

}

function GSM(model){
    this.model=model;
    this.hasSimCard=false;
    this.mobileNumber="";
    this.outGoingCallsDuration=0;
    this.lastIncomingCall=null;
    this.lastOutGoingCall=null;
}

GSM.prototype.insertSimCard=function(mobileNumber){
    if((typeof mobileNumber==="string")&&
    (!isNaN(mobileNumber)) && (mobileNumber.substr(0,2)==="08")
    &&(mobileNumber.length==10)){
        this.mobileNumber=mobileNumber;
        this.hasSimCard=true;
    } else {
        console.log('Kuv e toq telefonen nomer be prostak?');
    }
}

GSM.prototype.removeSimCard=function(){
    this.hasSimCard=false;
    this.mobileNumber="";
}

GSM.prototype.call=function(receiver,duration){
    if(this.hasSimCard && receiver.hasSimCard  &&
    this!=receiver && this.mobileNumber!=receiver.mobileNumber &&
    this.duration>=0 && this.duration<60 &&
    typeof duration=="number" &&  receiver instanceof GSM ){
            
            var newCall=new Call(this , receiver, duration);
            this.lastOutGoingCall=newCall;
            receiver.lastIncomingCall=newCall;
            this.outGoingCallsDuration+=duration;

    } else {
        console.log("Greshka!!!");
    }
}
GSM.prototype.getSumForCall=function(){
    if(this.lastOutGoingCall!==null){
        return this.outGoingCallsDuration * this.lastOutGoingCall.priceForAMinute;
    }
    return 0;
}

var nokia=new GSM('nokia');
var motorola=new GSM('motorola');
nokia.insertSimCard('0899999999');
motorola.insertSimCard('0812312312');
nokia.call(motorola, 15);
console.log(motorola.lastIncomingCall);

