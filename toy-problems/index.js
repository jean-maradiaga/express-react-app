const data = require("../server/data");

const isPrime = function (input) {
    // added validation for negative numbers as well
    if (input === 1 || input <= 0) {
        return false;
    } else if (input === 2) {
        return true;
    } else {
        for (var x = 2; x < input; x++) {
            if (input % x === 0) {
                return false;
            }
        }
        return true;
    }
    // This function accepts a positive integer 'input' and should return true if the integer
    // is prime and false if it is not (for simplicity, do not consider 0 or 1 as prime)
};

const nameVowels = function () {
    const vowels = new Set("aeiou");
    let count = 0;

    data.forEach(animal => {
        var match = animal.name.match(/[aeiou]/gi);
        if(match.length > 3){
            count++;
        }
      })
      return count;

    // your code here:  using 'data', this function should return the number of animals 
    // who's name contains more than 3 vowels (for simplicity, do not consider "y" a vowel)
};

const addProperty = function () {
    data.forEach(animal => {
        if(isPrime(animal.id)) {
            animal.gender = 'F';
        } else if(!isPrime(animal.id) && animal.id % 2 == 0) {
            animal.gender = 'N/A';
        }else{
            animal.gender = 'M';
        }
      })

      return data;
    // your code here:  using 'data', this function should return (without changing the order) 
    // a list of animals with a property named 'gender' added to each animal. 
    // The value of this new property should be 'F' if the id is prime (highest priority), 
    // 'M' if the id is odd, and 'N/A' if the id is even (lowest priority)
};

const palindromes = function (input) {
    const palindrome = input.toLowerCase() === input.toLowerCase().split("").reverse().join(""); 
    if(palindrome){
        return true
    }
    return false;
    // your code here:  this function accepts one string 'input' and should return true if the string is a palindrome and false if it is not
};

const anagrams = function (input1, input2) {
    const first = input1.toLowerCase().split('').sort().join('');
    const second = input2.toLowerCase().split('').sort().join('');

    return first === second; 

    // your code here:  this function accepts two strings 'input1', 'input2' 
    // and should return true if the strings are anagrams and false if they are not
};

const ageSum = function () {
    return data.reduce((total, animal) => total + animal.age, 0);
    // your code here:  using 'data', this function should return the sum of all animals ages
};


module.exports = {
    isPrime,
    nameVowels,
    addProperty,
    palindromes,
    anagrams,
    ageSum,
};
