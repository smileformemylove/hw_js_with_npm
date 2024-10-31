'use strict';

function Student (firstName, lastName, dateOfBirth) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.dateOfBirth = dateOfBirth;
    this.attendance = new Array(10).fill(null);
    this.grades = new Array(10).fill(null);

    this.getAge = function() {
        const currentYear = new Date().getFullYear();
        return currentYear - this.dateOfBirth;
    };

    this.getAverageGrades = function() {
        if (this.grades.length === 0) {
            return 0;
        }
        const sum = this.grades.reduce((acc, grade) => acc + grade, 0);
        return sum / this.grades.length;
    }
}

export default Student;













