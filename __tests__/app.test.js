import {
  // methods,
  // methods,
  sortArtistByName,
  findObjByName,
  numberOfLikes,
  justArtistMoreThan100Likes,
  moreThan100Likes,
  doubleLikes,
  sortArray,
  findItem,
  evensOnlyAndDoubleArray,
  someNumbersAreOdd,
  allNumbersGreaterThanZero,
  arraySum,
  evensOnlyArray,
  doubleArray,
  originalArray
} from '../app'

// hint of look in before_each before_all
describe('originalArray Test', ()=> {
  test('originalArray should return it self', ()=>{
    expect(originalArray([1,2,3,4])).toEqual([1,2,3,4])
  });
});

describe('double array',() => {
test('numbers should be doubled', ()=>{
  expect(doubleArray([1,2,3,4])).toEqual([2,4,6,8]);
  });
});

describe('evens only array', ()=> {
  test('filters out odd numbers', ()=>{
    expect(evensOnlyArray([1,2,3,4])).toEqual([2,4])
  });
  test('correctly handles negative numbers', ()=>{
    expect(evensOnlyArray([-1,-2,-3,-4])).toEqual([-2,-4])
  });
});

describe('sum array', () =>{
  test('return the sum of the array', ()=>{
    expect(arraySum([1,2,3,4])).toBe(10);
  });
  test('return a sum of an array with negative numbers', ()=>{
    expect(arraySum([-1,2,3,4])).toBe(8);
  });
  test('return a sum of an array with decimals', ()=>{
    expect(arraySum([1.1,2,3.1,4])).toBe(10.2);
  });
});

describe('numbers greater than zero', ()=>{
  test('returns true if all numbers are greater than zero', function(){
    expect(allNumbersGreaterThanZero([1,2,3,4])).toBe(true);
  });
  test('returns false if a number is less than 0', ()=>{
    expect(allNumbersGreaterThanZero([1,2,-3,4])).toBe(false);
  });
});

describe('checks if odd numbers are present', () => {
  test('returns true if an odd value is present', () => {
    expect (someNumbersAreOdd([1,2,3,4])).toBe(true);
  });
  test('returns false if only even values are present', () => {
    expect(someNumbersAreOdd([2,4,6,8])).toBe(false);
  });
});

describe('doubles numbers and returns the even ones', () => {
  test('doubles numbers and returns the even ones', ()=> {
    expect(evensOnlyAndDoubleArray([1,2,3,4])).toEqual([4,8]);
  });
  test('returns negative even numbers doubled', () => {
    expect(evensOnlyAndDoubleArray([-2,-4,-6])).toEqual([-4,-8,-12])
  })
});

describe('returns the value of the requested item if contained in array', () =>{
  test('returns the value of 2 when array contains 2', () => {
    expect(findItem([1,2,3,4],2)).toBe(2);
  });
  test('returns "not found" when 1 is not found', () => {
    expect(findItem([2,4,6,8],1)).toEqual('not found');
  });
});

describe('sorts an array in descending order', () => {
  test('returns array in descending order', () => {
    expect(sortArray([1,2,3,4])).toEqual([4,3,2,1]);
  });
  test('returns an array with negative numbers in descending order', () => {
    expect(sortArray([-10,-1,-100, -1000])).toEqual([-1,-10,-100,-1000]);
  });
  test('returns an array of decimals in descending order', () => {
    expect (sortArray([1.1, 1.13, 1.4, 1.009])).toEqual([1.4,1.13,1.1,1.009])
  })
});

let artists = [
  {name: 'a', likes:100},
  {name: 'b', likes:99},
  {name: 'c', likes:101}, 
]

describe("doubles the artist's likes", () => {
  test('likes * 2', () => {
    expect(doubleLikes(artists)).toEqual([
      {name: 'a', likes:200},
      {name: 'b', likes:198},
      {name: 'c', likes:202}, 
    ]);
  });
});

let artists1 = [
  {name: 'a', likes:100},
  {name: 'b', likes:99},
  {name: 'c', likes:101}, 
]

describe('function returns entire artist hash for artist with over 100 likes', () => {
  test('artist with more than 100 likes', () => {
    expect(moreThan100Likes(artists1)).toEqual([{name: 'c', likes: 101}]);
  });
});

describe('returns name of artists with over 100 likes', () => {
  test('artist name with 100+ likes', () => {
    expect(justArtistMoreThan100Likes(artists1)).toEqual(['c']);
  });
 });

 describe('total number of likes', () => {
   test('total likes equal 300', () => {
     expect(numberOfLikes(artists1)).toBe(300);
   });
 });

 describe('finds objects in an array by name', () => {
   test('finding artist b in array', () => {
     expect(findObjByName(artists1, 'b')).toEqual({name: 'b', likes:99})
   })
   test('finding artist d in an array', () => {
     expect(findObjByName(artists1, 'd')).toBe('not found')
   })
 })

 describe('sorts array objects by number of likes', () => {
   test('highest to lowest', () => {
     expect(sortArtistByName(artists1)).toEqual([ { name: 'c', likes: 101 },
     { name: 'a', likes: 100 },
     { name: 'b', likes: 99 } ])
   })
 })