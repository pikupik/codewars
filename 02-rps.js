//Coding Challenge 2024
// 02/50
// https://www.codewars.com/kata/5672a98bdbdd995fad00000f

const rps = (p1, p2) => {
  if(p1 === p2){
    return 'Draw!'
  }
  
  if(
     (p1 === 'rock' && p2 === 'scissors') ||
     (p1 === 'paper' && p2 === 'rock') ||
     (p1 === 'scissors' && p2 === 'paper')
    ) {
      return 'Player 1 won!'
    } else {
      return 'Player 2 won!'
    }
  
};

console.log(rps('rock', 'rock'))