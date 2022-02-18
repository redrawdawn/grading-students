const createstudent = (studentName) => {
    return {
        name: studentName,
        grade:{
            // math:{},
            // history:{},
            // science:{}
        }
    }
}

const mathGrade = (student) => {
    student.grade.math = 'B'
    return student 
}
const historyGrade = (student) => {
    student.grade.history = 'C'
    return student 
}
const scienceGrade = (student) => {
    student.grade.science = 'A'
    return student
}
const allGrades = (student) => {
    let studentGrades = mathGrade(student); historyGrade(student); scienceGrade(student)
    console.log(studentGrades)
}
let studentFred = createstudent('Fred')
allGrades(studentFred)