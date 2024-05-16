const students = {
  Prajwal: 90,
  Ayush: 91,
  Vilas: 90,
  Sunita: 99,
};
// for(let marks in students){
//     console.log("The Student " + marks +  " has the marks of "  + students[marks]);
// }
// console.table(students)
//* Alternate Way
for(let i = 0; i < Object.keys(students).length; ++i){
    console.log("The Student " + Object.keys(students)[i] +  " has the marks of "  + Object.values(students)[i]);
} 
