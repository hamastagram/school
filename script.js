class School{

    constructor(){
        this.teachers = [];
        this.students = [];
    }

    addTeacher(teacher){
        this.teachers.push(teacher); // pushing an (object instance of Teacher) inside array of teachers
    }
    fireTeacher(index){
        this.teachers.splice(index, 1);
    }
    addStudent(student){
        this.students.push(student);
    }
    fireStudent(index){
        this.students.splice(index, 1);
    }

    
}

class Teacher{

    constructor(FirstName, lastName, major){
        this.firstName = FirstName;
        this.lastName = lastName;
        this.major = major;
    }

}

class Student{

    constructor(FirstName, lastName, grade){
        this.firstName = FirstName;
        this.lastName = lastName;
        this.grade = grade;
    }

}


const school = new School();

school.addStudent(new Student("Muhammad", "Najat", "forth grade"));// passing instance of Student

school.addTeacher(new Teacher("Ahmad", "mutasam", "forth grade")); // passing instance of Teacher



console.log(school.students);

school.fireStudent(0,1);


console.log("removed");
console.log(school.students);


