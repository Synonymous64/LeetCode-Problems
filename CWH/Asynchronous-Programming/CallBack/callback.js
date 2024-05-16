console.log("This is about Callback function");
const students = [
    {name : "Praj", subject : "JavaScript" },
    {name : "Rohan", subject : "Machine Learning" },
]

//* it will take 3 seconds for enrollment, it will be keep processing for 3 seconds 
//* Until the enroll student is processed entirely the callback there won't be executed it will be executed after the enrollstudent is processed and then it will show us the latest enrolled student's name .
function enrollStudent(student, callback){
    setTimeout(function(){
        students.push(student);
        console.log("Student has been enrolled");
        callback();
    }, 3000);
}
//* it will be slow thus be called atlast

//* it will take 1 seconds for enrollment it will be keep processing for 1 seconds
function getStudent(){
    setTimeout(function(){
        let str = "";
        students.forEach((student)=>{
            str += `<li>${student.name}</li>`
        });
        document.getElementById('students').innerHTML = str;
        console.log("Student has been fetched");
    }, 1000);
//* it will be fast will be executed first
} 

let newStudent = {name : "Sunny", subject : "Python"};
enrollStudent(newStudent, getStudent)
getStudent();

//! https://youtu.be/zrvpCtlsRpk