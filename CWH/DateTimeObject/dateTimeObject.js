console.log("This is about Date-time object");
let today = new Date(); //* To get the today's Date
// console.log(typeof today);
// console.log(today);
//* To assign a date
// let otherDate = new Date('8-4-2003 04:54:08');
let otherDate = new Date('05/26/2002');
console.log(otherDate);
//* To get the day
console.log(otherDate.getDay());
//* It does exactly what you think it does
console.log(otherDate.getDate());
console.log(otherDate.getMinutes());
//* It give the numbers of seconds from that date till now
console.log(otherDate.getTime());
console.log(otherDate.getMilliseconds());
console.log(otherDate.getMonth());
//* To set a date
otherDate.setDate(27);
otherDate.setMonth(4);
otherDate.setFullYear(2002);
console.log(otherDate);
