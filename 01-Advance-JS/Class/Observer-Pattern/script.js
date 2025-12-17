class ExamBoard{
    constructor(){
        this.students=[];
    }

    addStudent(student){
        this.students.push(student)
    }
    removeStudent(student){

    }
    declearResult(result){
        this.students.forEach(val=>{
            val.receveResult(result)
        })
    }
}


class Student{
    constructor(name){
        this.name=name;
    }
    receveResult(result){
        console.log(`${this.name} is ${result}`);
    }
}

let board= new ExamBoard ();

let student1 = new Student("Sujoy")
let student2 = new Student("Sneha")

board.addStudent(student1)
board.addStudent(student2)

board.declearResult('pass')

