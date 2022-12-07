//using anonymous function

// anonymous function -- normal declaration

//Print odd numbers in an array
// Convert all the strings to title caps in a string array
// Sum of all numbers in an array
// Return all the prime numbers in an array
// Return all the palindromes in an array
// Return median of two sorted arrays of the same size.
// Remove duplicates from an array
// Rotate an array by k times

// Print odd numbers in an array
// Convert all the strings to title caps in a string array
// Sum of all numbers in an array
// Return all the prime numbers in an array
// Return all the palindromes in an array

let arr = [
  1, 2, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 25, 49,
];

let l = arr.length;

let medianarr1 = [2, 3, 4, 5, 6, 7, 8, 8, 9, 10, 23].sort();
let medianarr2 = [1, 2, 3, 5, 6, 7, 8, 8, 9, 19, 20].sort();
let ml1 = medianarr1.length;
let ml2 = medianarr2.length;
let mel1 = Math.floor(medianarr1.length / 2);
let mel2 = Math.floor(medianarr2.length / 2);
let median1 = "arr length not same";
let median2 = "no smae langht";

let arrOfDuplicates = [
  1,
  3,
  4,
  4,
  3,
  3,
  1,
  "hello",
  "olleh",
  "give",
  "take",
  "give",
  "give",
];

let arrtorotate = ["one", "two", "three", "four", "five", "six"];

//return odd array

let oddarr = arr.filter((e) => e % 2 !== 0);
console.log(oddarr);

let strs = ["one", "level", "each", "kik", "give", "Us", "goog"];

//return title case

let newstrs = strs.map((e) => {
  const [first, ...rest] = e;
  let newfirst = first.toUpperCase();
  let newe = [newfirst, ...rest].join("");
  return newe;
});

console.log(newstrs);

//return palindrome

let palistrs = strs.filter((e) => {
  let compare = e === [...e].reverse().join("");
  if (compare) {
    return e;
  }
});

console.log(palistrs);

//return median

let sumarr = arr.reduce((e, i) => (e += i));
console.log(sumarr);

if (ml1 === ml2 && ml1 % 2 == 0) {
  median1 = (medianarr1[mel1] + medianarr1[mel1 + 1]) / 2;
  median2 = (medianarr2[mel1] + medianarr2[mel1 + 1]) / 2;
} else if (ml1 == ml2) {
  median1 = medianarr1[mel1];
  median2 = medianarr2[mel2];
}

console.log(mel1, mel2, median1, median2);

// return de-duplicated array

let cleanarr = [...new Set(arrOfDuplicates)];

console.log(cleanarr);


//rotate array k times

function RotateK(k) {
  let revarrtorotate = [...arrtorotate].reverse();

  let l = arrtorotate.length;

  let newarr = arrtorotate.concat(arrtorotate);

  console.log(newarr)

  if (k % l !== 0) {
    let i = k % l;
    console.log(i);
    console.log(newarr.splice(0 + i, l-1 + i));
  } else {
    
    console.log(arrtorotate);
  }
}

RotateK(2);

//return prime numbers

const isPrime = n => {
  if (n===1){
  return false;
  }else if(n === 2){
     return true;
  }else{
     for(let x = 2; x < n; x++){
        if(n % x === 0){
           return false;
        }
     }
     return true;
  };
};
const filterPrime = arr => {
  const filtered = arr.filter(el => !isPrime(el));
  return filtered;
};
console.log(filterPrime(arr));