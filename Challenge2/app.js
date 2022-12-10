/*
Left Column
A: rock
B: paper
C: Scissors

Right Column
X: rock
Y: paper
Z: scissors

Points
Rock: 1
Paper: 2
Scissors: 3
Win: 6
Draw: 3
Lose: 0
*/
const fs = require("fs");
const { openStdin } = require("process");

fs.readFile("input.txt", (err, data) => {
  if (err) throw err;
  //console.log(calcScore(data.toString().split("\n")));
});

//Function that calculates the score of the rounds
function calcScore(arr) {
  let newArr = [...arr];
  //convert the elements in the array into scores
  newArr = newArr.map((set) => {
    let opnt = set.charAt(0);
    let plyr = set.charAt(2);
    let score = 0;
    switch (opnt) {
      case "A":
        if (plyr === "X") {
          score = 4;
        } else if (plyr === "Y") {
          score = 8;
        } else if (plyr === "Z") {
          score = 3;
        }
        break;
      case "B":
        if (plyr === "X") {
          score = 1;
        } else if (plyr === "Y") {
          score = 5;
        } else if (plyr === "Z") {
          score = 9;
        }
        break;
      case "C":
        if (plyr === "X") {
          score = 7;
        } else if (plyr === "Y") {
          score = 2;
        } else if (plyr === "Z") {
          score = 6;
        }
        break;
    }
    console.log(score);
    return score;
  });
  //add all the scores in the array
  return newArr;
}
