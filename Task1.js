function Task(name, workingHours){
    this.name=name;
    this.workingHours=workingHours;

}
function Employee(name, currentTask,hoursLeft){
    this.name=name;
    this.currentTask=currentTask;
    this.hoursLeft=hoursLeft;
    this.work=function(){
        if(currentTask.workingHours>=this.hoursLeft){
            currentTask.workingHours-=this.hoursLeft;
            this.hoursLeft=0;
        } else{
            this.hoursLeft-=currentTask.workingHours;
            currentTask.workingHours=0;
        }
    },
    this.showReport=function(){
        console.log("Ime: "+this.name);
        console.log("Zadacha: "+currentTask.name);
        console.log("Ostavashti chasove na rabotnika: "+this.hoursLeft);
        console.log("Ostavashti chasove ot zadachata: "+currentTask.workingHours)
    }
}
var task=new Task("miene",7);
var p=new Employee("Taskomir",task,8 );
p.work();
p.showReport();
