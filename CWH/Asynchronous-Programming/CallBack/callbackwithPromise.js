const students = [
  { name: "Praj", subject: "JavaScript" },
  { name: "Rohan", subject: "Machine Learning" },
];

function enrollStudent(student, callback) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (student !== undefined) {
        students.push(student);
        console.log("Student successfully enrolled");
        resolve("Process Done :)");
      } else {
        console.log("Student can't be enrolled");
        reject("Process Terminated");
      }
      callback();
    }, 3000);
  });
}

function getStudent() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (students !== undefined) {
        students.forEach((student) => {
          console.log(student.name);
        });
        resolve("Students Got :)");
      } else {
        console.log("Not Found :/");
        reject("NOT GOT :/");
      }
    }, 5000);
  });
}

let newStudent = { name: "Prajwal", subject: "Devops" };
// let newStudent; 

// console.log(enrollStudent(newStudent, getStudent));
enrollStudent(newStudent, getStudent)
  .then(function () {
    console.log("THEN : Enrolled was Successfull");
  })
  .catch(function () {
    console.log("CATCH : Enrolled was not Successfull");
  });
