console.log("ABOUT IF - ELSE STATEMENT | SWITCH CONDITIONAL BASED STATEMENTS")
const age = '65';
if(age == 19) console.log("Age is not 19");
else if(age == 65) console.log("Age is 65");
else console.log("Age is 19");


const age1 = '65';
if(age1 == 19) console.log("Age is not 19");
else if(age1 === 65) console.log("Age is 65"); //* === will also check the type and value
else console.log("Age is "+age1);


const age2 = '65';
if(age2 == 19) console.log("Age is not 19");
else if(age2 !== 65) console.log("Age is 65"); //* === will also check the type and value
else console.log("no matching");

const var1 = 34;
//* to check if the value in present in the variable or not
if(typeof(var1) !== 'undefined'){
    console.log("Variable is Defined");
}
else{
    console.log("Variable is not Defined");
}

let doesDrive = true;
if(doesDrive) console.log("He Drives");
else console.log("He cannot drive");

let car = 1000;
if(car == 500 || car == 100 || car == 1000){
    console.log("NOICE CAR");
}
else console.log("NICE CAR");

if(car > 500 && car > 100 && car >999){
    console.log("NOICE CAR");
}
else console.log("NICE CAR");
let man = 'male';
console.log(man == 'female' ? 'He is female' : 'He is Male' );

let age4 = 800; 
switch (age4) {
    case 18:
        console.log('You are about to become adult')
        break;
    case 10:
        console.log('Aww Baby Baby')
        break;
    case 80:
        console.log('Afternoon Grandpa')
        break;

    default:
        console.log('No one Cares');
        break;
}