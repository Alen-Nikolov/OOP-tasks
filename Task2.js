function Computer(year, price,isNotebook, hardDiskMemory,freeMemory, operatingSystem){
    this.year=year;
    this.price=price;
    this.isNotebook=isNotebook;
    this.hardDiskMemory=hardDiskMemory;
    this.freeMemory=freeMemory;
    this.operatingSystem=operatingSystem;
    this.comparePrice=function(computer){
        if(this.price>computer.price){
            return -1;
        } else if (this.price<computer.price){
            return 1;
        } else {
            return 0;
        }
    }
}
var computer1=new Computer(1996,1000,true,20,10, "windows");
var computer2=new Computer(1999,1000,false,40 ,12, "Mac");
if(computer1.comparePrice(computer2)==-1){
    console.log("Purviq komputer e po-skup");
} else if(computer1.comparePrice(computer2)==1){
    console.log("Vtoriq komputer e po-skup");
} else {
    console.log("Cenite na dvata komputara sa ravni!");
}