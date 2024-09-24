//Coding Challenge 2024
//04/50
//https://www.codewars.com/kata/5a00e05cc374cb34d100000d


const reverseSeq = n => {
  return Array.from({length : n}, (_, i) => n - i )
};


console.log(reverseSeq(8))