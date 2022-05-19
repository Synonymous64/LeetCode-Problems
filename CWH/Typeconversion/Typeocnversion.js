console.log("Welome Again Prajwal");
let myVar;

// myVar = 34; // this is integer
myVar = String(34); // this is integer
console.log(myVar, typeof(myVar));

let booleanVal = String(true);
console.log(booleanVal, typeof(booleanVal));

let date =  String( new Date());
console.log(date, typeof(date));

let arr =  String([1,2,3,4]);
console.log(arr, typeof(arr));

let i = 9;
console.log(i.toString()); // alternate way to convert into string

let str = Number("3456.9"); // to convert in number
console.log(str,typeof(str));

str = Number("3456p"); // will return NaN means Not a Number
console.log(str,typeof(str));

let number = parseInt('34.90898'); //parseInt parser into int
console.log(number, typeof(number));

number = parseFloat('78.94656');
console.log(number,typeof(number)); 
console.log(number.toFixed(2),typeof(number));  // to fixed will show up the numbers after decimal point


//* Type Coercion
let myStr = "989"; // it will get concatinated as string 
let myNum = 89;
console.log(myStr + myNum, typeof(myStr + myNum));


myStr = Number("989"); // it will get added as a number
myNum = 89;
console.log(myStr + myNum, typeof(myStr + myNum));

