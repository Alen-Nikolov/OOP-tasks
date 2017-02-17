function Task(name, workingHours){
    this.name=name;
    this.workingHours=workingHours;

}
function Employee(name, currentTask,hoursLeft){
    this.name=name;
    this.currentTask=currentTask;
    this.hoursLeft=hoursLeft;
}
Employee.prototype.work=function(){
    if(this.currentTask instanceof Task && this.currentTask!=null && !isNaN(this.hoursLeft) && this.hoursLeft>=0){
        if(this.currentTask.workingHours>this.hoursLeft){
            this.currentTask.workingHours-=this.hoursLeft;
            this.hoursLeft=0;
            this.showReport();
        } else {
            this.hoursLeft-=this.currentTask.workingHours;
            this.currentTask.workingHours=0;
            this.showReport();
        }
    }
} 
Employee.prototype.showReport=function(){
    console.log('Name: '+this.name);
    console.log('Current Task: '+this.currentTask.name);
    console.log('Hours left to work: '+this.hoursLeft);
    console.log('Hours left to complete task: '+this.currentTask.workingHours);
}
var task=new Task("miene",8);
var p=new Employee("Ceko kirkata",task,4 );
p.work();

