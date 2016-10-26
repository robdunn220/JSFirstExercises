// Exercise #1
// var prompt = require('prompt');
//
// prompt.start();
//
// prompt.get(['username'], function (err, result) {
//
//   var hello = result.username;
//   function sayHello(hello) {
//     if (hello) {
//       console.log('Hello, ' + result.username);
//     }
//
//     else {
//       console.log('Hello, world');
//     }
//
//   }
//
//   sayHello(hello);
//
// });

// Exercise #2
// function madLib(name, subject) {
//   return name + '\'s favorite subject is ' + subject;
// }
//
// console.log(madLib('Rob', 'math'));

// Tip Calculator 1-3
// function tipAmount(billValue, serviceRating) {
//   var tip;
//
//   if (serviceRating == 'Good') {
//     tip = billValue * 0.20;
//   }
//
//   else if (serviceRating == 'Fair') {
//     tip = billValue * 0.15;
//   }
//
//   else if (serviceRating == 'Bad') {
//     tip = billValue * 0.10;
//   }
//
//   return tip;
// }
//
// function totalBill(tipAmount, bill) {
//   var total = tipAmount + bill;
//   return total;
// }
//
// function splitBill(bill, splitBy) {
//   var splitAmount = bill / splitBy;
//   return '$' + splitAmount;
// }
//
//
// var billWithoutTip = 100;
// var bill = totalBill(tipAmount(billWithoutTip, 'Bad'), billWithoutTip);
//
// console.log(splitBill(bill, 3));

// Exercise # 4
// function printNumbers(numOne, numTwo) {
//   for (numOne; numOne <= numTwo; numOne ++) {
//     console.log(numOne);
//   }
// }
//
// printNumbers(1, 10);

// Exercise #5
// function printBox(timesToPrint) {
//
//   for (var i = timesToPrint; i > 0; i--) {
//     console.log(Array(timesToPrint + 1).join('*'));
//   }
// }
//
// printBox(5);

// Exercise #6
// function printBoxTwoDs(xVal, yVal) {
//   console.log(Array(xVal + 1).join('*'));
//   for (var i = yVal - 2; i > 0; i--) {
//     console.log('*' + Array(xVal - 1).join(' ') + '*');
//   }
//   console.log(Array(xVal + 1).join('*'));
// }
//
// printBoxTwoDs(10, 20);

// Exercise #7
// function printBanner(bannerText) {
//   textLength = bannerText.length;
//   var spaceCount = (bannerText.split(' ').length - 1);
//   console.log(Array(textLength + spaceCount).join('*'));
//   console.log('*' + bannerText + '*');
//   console.log(Array(textLength + spaceCount).join('*'));
// }
//
// printBanner('Welcome to Digital Crafts!');

//Exercise #8
// function factors(factorNum) {
//   var array = {};
//   for (var i = 1; i <= factorNum; i++) {
//     factor = factorNum % i;
//     if (factor === 0) {
//       array[i] = i;
//       console.log(array[i]);
//     }
//   }
// }
//
// factors(120);

// Exercise #9
// function cipher(string) {
//   var cipherArray = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k'];
//   for (var i = 0; i < string.length; i++) {
//     var stringArray = Array(i).join(string[i]);
//     console.log(string[i]);
//     for (var x = 0; x < cipherArray.length; x++) {
//       if (stringArray[i] == cipherArray[x]) {
//         stringArray.splice(i, 1, cipherArray[x+1]);
//         console.log(string[i]);
//       }
//     }
//   }
// }
//
// var string = 'hello there';
// console.log(cipher(string));

// Exercise Sum the Numbers
// function sumArray(array) {
//   var arraySum = 0;
//   for (var i = 0; i < array.length; i++) {
//     arraySum = array[i] + arraySum;
//   }
//   return arraySum;
// }
//
// numArray = [1,2,3,6,8, -12];
// console.log(sumArray(numArray));

// Exercise Just the positives
// function posNums(arrayOfNums) {
//   var newArray = {};
//   for (var i = 0; i < arrayOfNums.length; i++) {
//     if (arrayOfNums[i] >= 0) {
//       newArray[i] = arrayOfNums[i];
//     }
//   }
//   return newArray;
// }
//
// var numArray = [1,2,-3,6,8,-12];
// console.log(posNums(numArray));

// Exercise Matrix addition
// function matrixAdd(matrixOne, matrixTwo) {
//   var sumArray = [[],[]];
//   var sum, numOne, numTwo = 0;
//   for (var x = 0; x < matrixOne.length; x++) {
//     for (var i = 0; i < matrixTwo.length; i++) {
//       numOne = matrixOne[x][i];
//       numTwo = matrixTwo[x][i];
//       sum = numTwo + numOne;
//       sumArray[x][i] = sum;
//     }
//   }
//   return sumArray;
// }
//
// var matrixOne = [[1,3], [2,4]];
// var matrixTwo = [[5,2], [1,0]];
// console.log(matrixAdd(matrixOne, matrixTwo));

// Exercise Matrix multiplication
// function matrixMultiplication(matrixOne, matrixTwo) {
//     var productArray = [[],[]];
//     var product, numTwo = 0;
//     var numOne = 0;
//     var sum = 0;
//     for (var x = 1; x < matrixOne.length; x++) {
//       for (var i = 0; i < matrixTwo.length; i++) {
//         productArray[i] = [(matrixOne[i][i] * matrixTwo[i][i])+(matrixOne[i][x] * matrixTwo[x][i])];
//       }
//     }
//     return productArray;
//   }
//
//   var matrixOne = [[2,4], [3,4]];
//   var matrixTwo = [[5,2], [3,1]];
//   console.log(matrixMultiplication(matrixOne, matrixTwo));

// Exercise Rock, Paper, Scissors
// function rockPaperScissors(pOneThrow, pTwoThrow) {
//   if (pOneThrow == 'rock') {
//     if (pTwoThrow == 'scissors') {
//       return 'player 1 wins';
//     }
//     else if (pTwoThrow == 'paper') {
//       return 'player 2 wins';
//     }
//     else {
//       return 'draw';
//     }
//   }
//
//   else if (pOneThrow == 'paper') {
//     if (pTwoThrow == 'rock') {
//       return 'player 1 wins';
//       }
//       else if (pTwoThrow == 'scissors') {
//         return 'player 2 wins';
//       }
//     else {
//       return 'draw';
//     }
//   }
//
//   else if (pOneThrow == 'scissors') {
//     if (pTwoThrow == 'paper') {
//       return 'player 1 wins';
//     }
//     else if (pTwoThrow == 'rock') {
//       return 'player 2 wins';
//     }
//     else {
//       return 'draw';
//     }
//   }
// }
//
// console.log(rockPaperScissors('rock', 'scissors'));
// console.log(rockPaperScissors('scissors', 'rock'));
// console.log(rockPaperScissors('scissors', 'scissors'));

// Exercise TicTacToe
function ticTacToe (tttArray) {
  for (var i = 0; i < tttArray.length; i++) {

    if (tttArray[i][0] == 'O') {
      if (tttArray[i][1] == 'O') {
        if (tttArray[i][2] == 'O') {
          return 'O';
        }
      }
      else if (tttArray[1][i + 1] == 'O') {
        if (tttArray[2][i + 2] == 'O') {
          return 'O';
        }
      }
    }

    else if (tttArray[i][0] == 'X') {
      if (tttArray[i][1] == 'X') {
        if (tttArray[i][2] == 'X') {
          return 'X';
        }
      }
    }

    else {
      return null;
    }
  }
}

console.log(ticTacToe([['O', 'X', 'O'], ['X', 'O', 'O'], ['O', null, null]]));
