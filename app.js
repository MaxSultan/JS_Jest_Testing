export const originalArray = (arr) =>{
  return arr
}

export const doubleArray = arr => {
  return arr.map(number => {
    return number * 2;
  });
};

export const evensOnlyArray = arr => {
  return arr.filter(num => num % 2 == 0);
};

export function arraySum(numArr){
  let sum = numArr.reduce((acc, num) => {
    return acc + num;
  });
  return sum;
};

export function allNumbersGreaterThanZero(numArr){
  return numArr.every(num => num > 0);
};

export const someNumbersAreOdd = numArr => {
  return numArr.some(num => num % 2 === 1);
};

export function evensOnlyAndDoubleArray(numArr){
  return numArr.filter(num => num % 2 == 0).map(num => num * 2);
};

export const findItem = (numArr, num) => {
  if(numArr.find(number => num == number) === undefined){
    return 'not found'
  } else{
  return numArr.find(number => num == number);
  }
};

export function sortArray(numArr){
  return numArr.sort(function(a, b){return b - a});
};

// artists = [
//   {name: 'a', likes:100},
//   {name: 'b', likes:99},
//   {name: 'c', likes:101}, 
// ]
// // doubles likes of artist
export function doubleLikes(ArtistsArr){
  let newArr = ArtistsArr.map((item) => {item.likes *= 2;
  return item});
  return newArr;
 };

 export const moreThan100Likes = artists => {
  return artists.filter(artist => artist.likes > 100)
 };

 export function justArtistMoreThan100Likes(arrObj){
  let famous = [];
  let over100 = arrObj.filter(artist => artist.likes>100);
  console.log(over100);
  over100.forEach(artist => famous.push(artist.name));
  return famous;
}

export const numberOfLikes = (artArr) => {
  return artArr.reduce((a,b) => ({likes: a.likes + b.likes})).likes
};

export function findObjByName(arr, search){
  let finder = arr.filter(item => item.name === search);
    if(finder.length == 1){
      return finder[0];
    } else {
   return 'not found';
    } 
  }

  export const sortArtistByName = (artArr) => {
    return artArr.sort(function(a,b){return b.likes - a.likes})
  };


// EXPORT ALL AS FUNCTIONS AND KEEP THE NAMES THE SAME

// ways to export

// export const methodName = (param) => {
// }

// ----or---------

// export methodName function(param){
// }


// // ARRAY ITERATOR METHODS
// numberArray = [1,2,3,4]

// // return array with double values in array
//doubleArray(numberArray) // => [2,4,6,8];  hint use map 

// // return array with all even numbers
// evensOnlyArray(numberArray) // => [2,4,6,8];  hint use filter 

// // return array with sum of numbers
// arraySum(numberArray) // => 10;  hint use reduce

// // return true if every item greater than 0
// allNumbersGreaterThanZero(numberArray) // => true; use every

// // return true if one or more items in array are odd
// someNumbersAreOdd(numberArray) // => true; use some

// // return array double and even
// evensOnlyAndDoubleArray(numberArray) // => [4,8]; // use map and filter

// // find an item method return 'not found' if not found
// findItem(numberArray, 1) //=> 1

// // sort array desc order
// sortArray(numberArray) //=> [4,3,2,1] *desc*


// // -----BONUS------
// // ARRAY ITERATOR METHODS ON Objects with name age 

// artists = [
//   {name: 'a', likes:100},
//   {name: 'c', likes:99},
//   {name: 'c', likes:101}, 
// ]
// // doubles likes of artist
// doubleLikes(artists)
// // => [
// //   {name: 'a', likes:200},
// //   {name: 'c', likes:198},
// //   {name: 'c', likes:202},  
// // ]; 
// moreThan100Likes(artists)// =>[ {name: 'c', likes:101} ]; // use filter

// //  return an array of strings of artist name
// justArtistMoreThan100Likes(artists) //=> ['c']; // use filter

// // get total number of likes fo all artists
// numberOfLikes(artists) //=> 300; // get all likes

// // find an item method. Returns 'not found' if not found
// findObjByName(artists, 'a') // => {name: 'a', likes:200}

// // returns array of artist sorted by likes
// sortArtistByName(artists)
