// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9


// My solution
function reverseInt(n) {

    const revStr = n.toString().split('').reverse().join('');
    const revInt = parseInt(revStr) * Math.sign(n);
    return revInt;
}

// Solution #1
// function reverseInt(n) {
// }

// Solution #2
// function reverseInt(n) {
// }

module.exports = reverseInt;
