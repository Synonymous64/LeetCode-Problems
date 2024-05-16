// let random = Math.floor(Math.random() * (2 - 0)) + 0;
const SnakeWaterGunGame = (chances) => {
    let gameModes = {
    0: "snake",
    1: "water",
    2: "gun",
    };
    console.log(
    "Note-> if both the players gets the equal turns or plays any invalid move the points will be decremented by -1"
    );
    console.log(
        "Here-> The modes are based on following inputs\n0-Snake\n1-Water\n2-Gun"
    );
    let playerScore = 0,
    osScore = 0,
    playerChart = new Array(),
    osChart = new Array();
    while (chances--) {
    let osMove = Math.floor(Math.random() * (3 - 0)) + 0;
    let playerMove = prompt("Enter your move");
    if (!gameModes[osMove]){
        --osScore, osChart.push(osScore);
        console.error("invalid move by OS");
    } 
    else if (!gameModes[playerMove]){
        --playerScore, playerChart.push(playerScore);
        console.error("invalid move by Player");
    }
    else if (gameModes[osMove] === gameModes[playerMove]){
        --playerScore,
        --osScore,
        playerChart.push(playerScore),
        osChart.push(osScore);
        console.log(`OS chose ${gameModes[osMove]} and Player chose ${gameModes[playerMove]}`);
        console.error("Decremented for both");
    }
    else if (gameModes[osMove] === "snake" && gameModes[playerMove] === "gun"){
        --osScore,
        ++playerScore,
        playerChart.push(playerScore),
        osChart.push(osScore);
        console.log(`OS chose ${gameModes[osMove]} and Player chose ${gameModes[playerMove]}`);
        console.log("Player++");

    }
    else if (gameModes[osMove] === "snake" && gameModes[playerMove] === "water"){

        ++osScore,
        --playerScore,
        playerChart.push(playerScore),
        osChart.push(osScore);
        console.log(`OS chose ${gameModes[osMove]} and Player chose ${gameModes[playerMove]}`);
        console.log("OS++");
    }
    else if (gameModes[osMove] === "water" && gameModes[playerMove] === "snake"){
        --osScore,
        ++playerScore,
        playerChart.push(playerScore),
        osChart.push(osScore);
        console.log(`OS chose ${gameModes[osMove]} and Player chose ${gameModes[playerMove]}`);
        console.log("Player++");
    }
    else if (gameModes[osMove] === "water" && gameModes[playerMove] === "gun"){
        ++osScore,
        --playerScore,
        playerChart.push(playerScore),
        osChart.push(osScore);
        console.log(`OS chose ${gameModes[osMove]} and Player chose ${gameModes[playerMove]}`);
        console.log("OS++");
    }
    else if (gameModes[osMove] === "gun" && gameModes[playerMove] === "snake"){
        ++osScore,
          --playerScore,
          playerChart.push(playerScore),
          osChart.push(osScore);
        console.log(`OS chose ${gameModes[osMove]} and Player chose ${gameModes[playerMove]}`);
        console.log("OS++")
    }
    else if (gameModes[osMove] === "gun" && gameModes[playerMove] === "water"){
        --osScore,
          ++playerScore,
          playerChart.push(playerScore),
          osChart.push(osScore);
          console.log(`OS chose ${gameModes[osMove]} and Player chose ${gameModes[playerMove]}`);
          console.log("Player++")
    }
  }
  let totalPlayerScore = 0,
    totalOsScore = 0;
  playerChart.forEach((ele) => {
    totalPlayerScore += ele;
  });
  osChart.forEach((ele) => {
    totalOsScore += ele;
  });
  if (totalPlayerScore < totalOsScore) console.log("OS WON :)");
  else if (totalPlayerScore > totalOsScore) console.log("Player WON :)");
  else console.log("Match Tied :/");

  console.log("Displaying scoreboard of OS");
  console.table(osChart);
  console.log("The OS score was " + osScore);
  console.log("Displaying scoreboard of Player");
  console.table(playerChart);
  console.log("The player score was " + playerScore);

  console.log("GOOD DAY AHEAD :)");
};
console.log(
  "This is a snake--Water--Gun Game\nWhere you are playing with the OS :/"
);
let chances = prompt("Enter total number of turns in the game");
chances = Number.parseInt(chances);
console.log("Best of luck ;)");
SnakeWaterGunGame(chances);
