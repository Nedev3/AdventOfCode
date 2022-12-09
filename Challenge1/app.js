const fs = require("fs");
let elfCal = [];
let fileString = "";

fs.readFile("input.txt", (err, input) => {
  if (err) throw err;
  fileString = input.toString().split("\n");
  //console.log(fileString);
  elfCal = addGroup(fileString);
  console.log(addArr(getTopThree(elfCal)));
});

//adds grouped number strings and returns a array with the sums of the groups ( groups are seperated by an empyt string)
function addGroup(arr) {
  let sum = 0;
  let sumArr = [];
  for (let i = 0; i < fileString.length; i++) {
    if (fileString[i].trim().length === 0) {
      sumArr.push(sum);
      sum = 0;
      //console.log(sumArr);
    } else {
      sum = sum + parseInt(fileString[i]);
    }
  }
  return sumArr;
}

//function that returns that largest number in an array
function getLargest(arr) {
  let largest = arr[0];
  let counter = 0;
  while (counter !== arr.length - 1) {
    if (largest < arr[counter + 1]) {
      largest = arr[counter + 1];
    }
    counter++;
  }
  return largest;
}

function getTopThree(arr) {
  let newArr = arr;
  let currentLargest = 0;
  let top3 = [];
  for (let i = 0; i < 3; i++) {
    currentLargest = getLargest(newArr);
    top3.push(currentLargest);
    newArr = removeValue(newArr, currentLargest);
  }
  return top3;
}

function removeValue(arr, value) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === value) {
      arr.splice(i, 1);
    }
  }
  return arr;
}

function addArr(arr) {
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    total = arr[i] + total;
  }
  return total;
}
