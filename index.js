// JS-test-4
// Question 1:

// Write a JavaScript for loop that iterates from 0 to 20 and prints only the even numbers, but skips the number 10.


// for(var i=0; i<20; i++){
 
//     if(i %2 ===0 && i!=10){
//         console.log(i)
//     }
// }



// Question 2:

// Write a JavaScript while loop that calculates the factorial of a given number and also counts how many iterations were needed.



// Question 3:

// Create a JavaScript function that takes an array of numbers as input and returns the sum of all the even numbers using a for loop.

// const array=[1,2,3,4,5,6,7,8,9,10];

// function findEvendigit(numb){
//     var add=0;
//  for(i=0; i < numb.length; i++){
//     // console.log(numb[i])
//     if(numb[i]%2===0){
//         // console.log(numb[i])
//         add=add+numb[i]
        

//      }
//  }
//  console.log(add)

// }
// findEvendigit(array);

// Question 4:

// Write a JavaScript program that generates the first n numbers in the Fibonacci sequence, using a while loop, and stores them in an array;



// Question 5:

// Create a JavaScript function that takes an array of strings as input and returns a new array with only the strings that have a length greater than 7 characters.

// const players=["butler","archer","benstokes"]

// function checkLenght(playerName){
//   for(i=0; i<playerName.length; i++){
//     // console.log(playerName[i]);
//     if(playerName[i].length >= 7 ){
//         console.log(playerName[i])
//     }
//   }
// }
// checkLenght(players);

// Question 6:

// Write a JavaScript function that takes a number as input and returns true if it is a prime number, otherwise false. Additionally, the function should also print all the factors of the number.
// const num=[1,2,3,4,5,6,7,8,9,10]
// function checkPrimeNumber(prime){
//     for(i=0; i< Math.sqrt(prime.length); i++){
//         // console.log(prime[i])
//         if(prime[i] % 2 ===0){
//             console.log("true")
//             console.log(prime[i])
            
//         }else{
//             console.log("false")
//         }
//     }
// }
// checkPrimeNumber(num)

// function isprime(n){

//     if(n %2===0){
//     return false;
//   }else{
//    return true;
//   }
// }
  
 
// console.log(isprime(2));
let num=29;
for(let i = 1; i <= Math.sqrt(num); i++){
   console.log(i)
}

// Question 7:

// Create a JavaScript program that calculates the sum of all numbers from 1 to 1000 that are divisible by 3, 5, or 7.

// function calculateNum(){
//     var count=0;
// for(i=0; i<=1000; i++){
//     // console.log(i)
//     if(i%3 && i%5 && i%7){
//         // console.log(i)
//         count= count +i;
//     }
    
// }
// console.log(count)
// }
// calculateNum();


// Question 8:

// Write a JavaScript function that takes a string as input and returns the reverse of the string without using a built-in reverse method, using a for loop.




// function reversString(strng){
//    // console.log(strng);
//    let empty=[];
//    for(var i = strng.length-1; i >= 0; i--){
//      console.log(strng[i])
//      empty.push(strng[i])

//    }
//    return empty
// }
// console.log(reversString("javascipt"));
// // Question 9:

// Create a JavaScript program that generates a random password of a specified length, consisting of letters (both uppercase and lowercase), numbers, and special characters.

// Question 10:

// Write a JavaScript function that takes an array of numbers as input and returns the maximum difference between any two consecutive numbers in the array.
