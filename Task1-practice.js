var computer = {
    year:1995,
    price:2000,
    isNotebook:true,
    hardDiskMemory:20,
    freeMemory:10,
    operationSystem:"Windows",
    changeOperationSystem:function(newOperationSystem){
        this.operationSystem=newOperationSystem;
    },
    useMemory:function(memory){
        if(memory>this.freeMemory){
            console.log("Not Enough free memory");
        } else {
            this.freeMemory-=memory;
        }
    }
};
computer.changeOperationSystem("IOS");
console.log(computer.operationSystem);
computer.useMemory(11);
console.log(computer.freeMemory);