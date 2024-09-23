// Coding Challenge 2024
// 01/999
// https://www.codewars.com/kata/570bcd9715944a2c8e000009


// function sc(floor) {
//     if (floor <= 1) {
//         return "";
//     } else if (floor <= 6) {
//         return "Aa~ ".repeat(floor - 1) + "Pa! " + "Aa!";
//     } else {
//         return "Aa~ ".repeat(floor - 1) + "Pa!";
//     }
// }

function sc(floor) {
    return floor <= 1 ? "" : "Aa~ ".repeat(floor - 1).trim() + (floor <= 6 ? " Pa! Aa!" : " Pa!");
}

console.log(sc(2));
