// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

function palindrome(str) {
    let strArr = str.split('');
    const arrLength = strArr.length
    let isPal = false;
    for (i = 0; i < arrLength - 1; i++){
        if(strArr[i] === strArr[arrLength - i]){
            isPal = true
        }
        if( i >= arrLength - i){
            break
        }
        if(strArr[i] !== strArr[arrLength - i]){
            isPal = false
        }

    }
    return isPal;
}

module.exports = palindrome;
