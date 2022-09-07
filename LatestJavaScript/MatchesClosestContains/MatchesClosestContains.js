const id1 = document.getElementById("id1");
// console.log(id1);
//* Matches the selectors .(selector name) && #(selector name)
console.log(id1.matches(".class"));
console.log(id1.matches(".box"));
const sp1 = document.getElementById('sp1');
// console.log(sp1);
//* closest -> Returns the lowest/rearest ancestors as mentioned either a class or ids
console.log(sp1.closest("#id1"));
//* contains -> Returns true if the lowest/rearest descedants as mentioned are present either a class or ids
console.log(id1.contains(sp1));
