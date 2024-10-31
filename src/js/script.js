'use strict';

import Student from './Student.js';


Student.prototype.present = function(){
    const index = this.attendance.indexOf(null);
    if (index !== -1){
        this.attendance[index] = true
    } else {
        throw new Error("full arr")
    }
};

Student.prototype.absent = function(){
    const index = this.attendance.indexOf(null);
    if (index !== -1){
        this.attendance[index] = false
    } else {
        throw new Error("full arr")
    }
};

Student.prototype.mark = function(grade){
    if (grade < 0 || grade > 10){
        throw new Error("must be 0 > grade < 10")
    }
    const index = this.grades.indexOf(null);
    if (index !== -1){
        this.grades[index] = grade;
    } else {
        throw new Error("full arr")
    }
};

Student.prototype.summary = function() {
    const totalGrades = this.grades.reduce((sum, grade) => {
        return sum + (grade !== null ? grade : 0);
    }, 0);
    const averageGrade = totalGrades / this.grades.filter(grade => grade !== null).length;

    const totalAttendance = this.attendance.filter(att => att !== null).length;
    const presentCount = this.attendance.filter(att => att === true).length;
    const averageAttendance = presentCount / totalAttendance;

    if (averageGrade > 9 && averageAttendance > 0.9) {
        return "Ух ти, який молодчинка!";
    } else if (averageGrade <= 9 && averageAttendance <= 0.9) {
        return "Редька!";
    } else {
        return "Нормально, але можна краще";
    }
};





const student = new Student("kolya", "pom", 2002, [85, 90, 78, 92, 92]);
student.present()
student.present()
student.present()
student.present()
student.present()
student.present()
student.present()
student.present()
student.present()
student.absent()
student.mark(9)
student.mark(9)
student.mark(9)
student.mark(9)
student.mark(9)
student.mark(9)
student.mark(9)
student.mark(9)
student.mark(9)
student.mark(10)

const result = student.summary()
console.log(result)

console.log(student.grades)
console.log(student.firstName)
console.log(student.lastName)
console.log(student.dateOfBirth)
console.log(student.getAge())
console.log(student.getAverageGrades())










