function Student(name,subject,grade,yearInCollege,age,hasDegree,money){
    this.name=name;
    this.subject=subject;
    this.grade=grade;
    this.yearInCollege=yearInCollege;
    this.age=age;
    this.hasDegree=hasDegree;
    this.money=money;
}
    Student.prototype.upYear=function(){
        if(this.yearInCollege<4 && this.hasDegree==false){
            this.yearInCollege++;
        }
        if(this.yearInCollege==4 && !this.hasDegree){
            this.hasDegree=true;
            console.log("You got your degree in somethingology");
        }
      
    }
    Student.prototype.receiveScholarship=function(min, amount){
        if(this.grade>=min && this.age<30){
            this.money+=amount;
        }
        return this.money;
    }

function StudentGroup(groupSubject){
    this.groupSubject=groupSubject;
    this.students=[];
    this.freePlaces=5;
}
    StudentGroup.prototype.addStudent=function(student){
        if(student.subject===this.groupSubject && this.freePlaces>0 && student instanceof Student){
            this.students.push(student);
            this.freePlaces--;
        }
    }
    StudentGroup.prototype.emptyGroup=function(){
        this.students=[];
        this.freePlaces=5;
    }
    StudentGroup.prototype.theBestStudentName=function(){
        var maxGrade=-Infinity
        var bestStudent="";
        for(var index=0;index<this.students.length;index++){
            if(this.students[index].grade>maxGrade){
                maxGrade=this.students[index].grade;
                bestStudent=this.students[index].name;
            }
        }
        return bestStudent;
    }
    StudentGroup.prototype.printStudentsInGroup=function(){
        for(var index=0;index<this.students.length;index++){
            console.log("Name: "+this.students[index].name);
            console.log("Grade: "+this.students[index].grade);
            console.log("Subject: "+this.students[index].subject);
            console.log("Year in college: "+this.students[index].yearInCollege);
            console.log("Age: "+this.students[index].age);
            console.log();
        }
    }
var student1=new Student("Alen","geography",4.4,3,21,false,3000);
var student2=new Student("Ban Ki Moon","geography",5.5,3,34,false,2000);
var student3=new Student("Orli","geography",5,2,39,true,10.5);
var stdGroup=new StudentGroup("geography");
stdGroup.addStudent(student1);
stdGroup.addStudent(student2);
stdGroup.addStudent(student3);
student1.upYear();
student1.upYear();

console.log(student1.yearInCollege);
console.log(student1.hasDegree);
console.log(stdGroup.theBestStudentName());


