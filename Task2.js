function Computer(year, price,isNotebook, hardDiskMemory,freeMemory, operatingSystem){
    this.year=year;
    this.price=price;
    this.isNotebook=isNotebook;
    this.hardDiskMemory=hardDiskMemory;
    this.freeMemory=freeMemory;
    this.operatingSystem=operatingSystem;
}
Computer.prototype.comparePrice=function(computer2){
        if(this.price>computer2.price){
            console.log("Purviq komputer e po-skup ot vtoriq");
            return -1;
        } else if (this.price<computer2.price){
            console.log("Vtoriq komputer e po-skup ot purviq");
            return 1;
        } else {
            console.log("Cenite na dvata komputara sa ravni!");
            return 0;
        }
}
var computer1=new Computer(1996,1100,true,20,10, "windows");
var computer2=new Computer(1999,1000,false,40 ,12, "Mac");
computer1.comparePrice(computer2);