
// * Exercise 1:
// * Write a function called doubleValues which accepts an array and returns
// * a new array with all the values in the array passed to the function doubled
// *
// * Test Case:
// *    Test Case 1: doubleValues([1,2,3])
// *    Test Case 2: doubleValues([5,1,2,3,10])
// *
// * Result:
// * Test Case 1:  [2,4,6]
// * Test Case 2: [10,2,4,6,20]

const num = [1, 2, 3, 4, 5];
let sum = [];
num.forEach((item) => {
  sum.push(item * 2);
});
console.log(sum);

{/* //         * Exercise 2:
        // * Write a function called onlyEvenValues which accepts an array and returns a new array with only the even values in the array passed to the function
        // *
        // * Test Cases:
        // *   onlyEvenValues([1,2,3])
        // *   onlyEvenValues([5,1,2,3,10])
        // *
        // * Result:
        // *  Test Case 1:  [2]
        // *  Test Case 2: [2,10]
        // */ }

function even(num) {
  let sum = [];
  num.forEach(only);
  function only(item) {
    if (item % 2 == 0) {
      sum.push(item);
    }
  }
  return sum;
}
console.log(even([1, 2, 3, 4, 5]));
console.log(even([8, 10, 3, 7, 6, 18]));

{/* // * Exercise 3:
      // * Write a function called showFirstAndLast which accepts an array of strings and
      // * returns a new array with only the first and last character of each string.
      // *
      // * Test Case:
      // *   Test Case 1: showFirstAndLast(['colt','matt', 'tim', 'udemy'])
      // *   Test Case 2 :showFirstAndLast(['hi', 'goodbye', 'smile'])
      // *
      // * Result:
      // * Test Case 1: ["ct", "mt", "tm", "uy"]
      // * Test Case 2: ['hi', 'ge', 'se']
      // *
      // */ }
{/* function showFirstAndLast(arr){
          //    //Your Code Here
          // } */}

function showFirstAndLast(str) {
  let sum = [];
  str.forEach(only);
  function only(item) {
    sum.push(item[0] + item[item.length - 1]);
  }
  return sum;
}
console.log(showFirstAndLast(["colt", "matt", "tim", "udemy"]));
console.log(showFirstAndLast(["hi", "goodbye", "smile"]));

{/* // /*
      // * Exercise 4:
      // * Write a function called addKeyAndValue which accepts an array of objects, a key, and a value and returns the array passed
      // * to the function with the new key and value added for each object
      // *
      // * Test Cases:
      // *   Test Case :addKeyAndValue([{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}], 'title', 'instructor')
      // *
      // * Result:
      // *   [{name: 'Elie', title:'instructor'}, {name: 'Tim', title:'instructor'}, {name: 'Matt', title:'instructor'}, {name: 'Colt', title:'instructor'}]
      // *
      // */ }

function addKeyAndValue(str, x, y) {
  tot = [];
  str.forEach(only);
  function only(item) {
    obj = item;
    obj[x] = y;
    tot.push(obj);
  }
  return tot;
}
console.log(
  addKeyAndValue(
    [
      { name: "Elie" },
      { name: "Tim" },
      { name: "Matt" },
      { name: "Colt" },
    ],
    "title",
    "instructor"
  )
);

/*
 * Exercise 5:
 * Write a function called vowelCount which accepts a string and
 * returns an object with the keys as the vowel and the
 * values as the number of times the vowel appears in the string.
 * This function should be case insensitive so a lowercase letter and uppercase letter should count
 *
 * Test Cases 1: vowelCount('Elie') // {e:2,i:1};
  * Test Cases 2:  vowelCount('Tim') // {i:1};
  * Test Cases 3:  vowelCount('Matt') // {a:1})
  * Test Cases 4:  vowelCount('hmmm') // { };
  * Test Cases 5:  vowelCount('I Am awesome and so are you') // {i: 1, a: 4, e: 3, o: 3, u: 1};
  *
  *
  * Result:
  * Test Cases 1: {e:2,i:1};
  * Test Cases 2: {i:1};
  * Test Cases 3: {a:1})
  * Test Cases 4: { };
  * Test Cases 5: {i: 1, a: 4, e: 3, o: 3, u: 1};
  *
  */

function vowelCount(arr) {
  obj = {};
  let x = 0;
  let x1 = 0;
  let x2 = 0;
  let x3 = 0;
  let x4 = 0;
  key = "";
  let splittedArray = arr.split("");
  splittedArray.forEach((item, index) => {
    if (arr[index] == "e" || arr[index] == "E") {
      x += 1;
      key = "e";
      obj[key] = x;
    }
    else if (arr[index] == "i" || arr[index] == "I") {
      x1 += 1;
      key = "i";
      obj[key] = x1;
    }
    else if (arr[index] == "a" || arr[index] == "A") {
      x2 += 1;
      key = "a";
      obj[key] = x2;
    }
    else if (arr[index] == "o" || arr[index] == "O") {
      x3 += 1;
      key = "o";
      obj[key] = x3;
    }
    else if (arr[index] == "u" || arr[index] == "U") {
      x4 += 1;
      key = "u";
      obj[key] = x4;
    }
  });
  return obj;
}
console.log(vowelCount("Elie"));
console.log(vowelCount("Tim"));
console.log(vowelCount("I Am awesome and so are you"));
console.log(vowelCount("mohammad aldbee"));
