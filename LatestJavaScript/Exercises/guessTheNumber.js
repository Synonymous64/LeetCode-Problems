//* Math.random() * (max_number-min_number) + min_number;

let randNum = Math.floor(Math.random() * (100 - 0)) + 0;
// console.log(randNum);
const guessTheNum = (randNum) => {
  let guessNum;

  while (true) {
    guessNum = prompt("Enter the value");
    if (guessNum == randNum) {
      alert("GOT THE CORRECT ANSWER! CONGRATS :)");
      break;
    } else if (randNum <= 10) console.log("Guessing Number is lesser than 10");
    else if (randNum > 10 && randNum <= 30)
      console.log(
        "Guessing Number is greater than 10 and lesser than or equal to 30"
      );
    else if (randNum > 30 && randNum <= 60)
      console.log(
        "Guessing Number is greater than 30 and lesser than or equal to 60"
      );
    else if (randNum > 60 && randNum <= 90)
      console.log(
        "Guessing Number is greater than 60 and lesser than or equal to 90"
      );
    else if (randNum > 90) console.log("Guessing Number is greater than 90!");
  }
};
console.log(
  "CHOOSE THE CORRECT ANSWER THE GUESSING NUMBER RANGES BETWEEN 0-100!"
);
guessTheNum(randNum);
