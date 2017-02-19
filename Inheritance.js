function Person(name,age,isMale){
    this.name=name;
    this.age=age;
    this.isMale=isMale;
}
Person.prototype.showPersonInfo=function(){
    console.log("name: "+this.name+ "  age:"+this.age+" Is male: "+this.isMale);
}
function Student(name,age,isMale,score){
    Person.call(this, name, age, isMale);
    this.score=score;
}
Student.prototype=Object.create(Person.prototype);
Student.prototype.constructor=Student;
Student.prototype.showStudentInfo=function(){
    console.log("name:"+this.name+ "  age:"+this.age+"  Is male:"+this.isMale+ "  score: "+this.score);
}
function Employee(name,age,isMale,daySalary){
    Person.call(this, name, age, isMale);
    this.daySalary=daySalary;
}
Employee.prototype=Object.create(Person.prototype);
Employee.prototype.constructor=Employee;
Employee.prototype.calculateOvertime=function(hours){
    if(this.age<18){
        return 0;
    }
    if(typeof hours==="number" && hours>0){
        var overtime=this.daySalary/8;//8 chasov raboten den
        return overtime*=1.5;
    } else {
        console.log('Incorect hours');
    }
}
Employee.prototype.showEmployeeInfo=function(){
    console.log("name:"+this.name+ "  age:"+this.age+"  Is male:"+this.isMale+ "  daySalary: "+this.daySalary);
}
var arr=[];
for(var index=0;index<10;index++){
    arr[index]=new Person("Pesho"+index,index*2,true);
}
var person1=new Person("Kiro",22,false);
var person2=new Person("Mario",12,false);
var student1=new Student("Nafarforii",34,true,5.4);
var student2=new Student("Kirkor",12,true,5.1);
var employee1=new Employee("Milena",29,false,120);
var employee2=new Employee("Milen",39,true,100);
arr.push(person1);
arr.push(person2);
arr.push(employee1);
arr.push(employee2);
arr.push(student1);
arr.push(student2);
for(var index=0;index<arr.length;index++){
    if(arr[index] instanceof Student){
        arr[index].showStudentInfo();
    } else if(arr[index] instanceof Employee){
        arr[index].showEmployeeInfo;
    } else if(arr[index] instanceof Person) {
        arr[index].showPersonInfo();
    }
}
for(var index=0;index<arr.length;index++){
    if(arr[index] instanceof Employee){
        console.log(arr[index].calculateOvertime(2));
    }
}