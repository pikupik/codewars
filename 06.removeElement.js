//Coding Challenge 2024
//06/50
//https://www.codewars.com/kata/5769b3802ae6f8e4890009d2


function removeEveryOther(arr){
  return arr.filter((_, index) => index % 2 === 0)
}

console.log(removeEveryOther([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]))
