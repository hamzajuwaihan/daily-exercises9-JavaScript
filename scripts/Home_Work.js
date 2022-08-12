/*
1
Correct the syntax error
 [ 1,7 , 9 , 45 ]

 ["Str" "alex","moh"]

 ['the','fox' 'over' lazy, 'dog'  ]

*/


/*
2
What the index of "Banana","Tomato"
var fruits=["Tomato","Banana","Watermelon"]
"Banana" = 1 ,
"Tomato"= 0
*/


/*
3
Create an array represents your:
1- Favorite Food (5)
2- Favorite Sport (3)
3- Favorite Movie (4)
*/
const favoriteFood = ["kabseh", "magloobeh", "Mansaf", "Dawalii", "Qedreh"];
const favoriteSport = ["football", "basketball", "formulaOne"];
const favoriteMovie = ["fast and furious", "mission impossible", "john wick", "Passengers"];

/*
4
Create a function called firstOfArray
that take an array as a parameter
and return the first element in an array

Ex: firstOfArray([1,4,5]) => 1
Ex: firstOfArray(["t","u","g","x"]) => "t"
*/
function firstOfArray(arr) {
    return arr[0];
}
console.log(firstOfArray([1, 4, 5]));
console.log(firstOfArray(["t", "u", "g", "x"]));
/*
5
Create a function called lastOfArray
that take an array as a parameter
and return the last element in an array

Ex: lastOfArray([1,4,5]) => 5
Ex: lastOfArray(["t","u","g","x"]) => "x"
*/
function lastOfArray(arr) {
    return arr[arr.length - 1];
}
console.log(lastOfArray([1, 4, 5]));
console.log(lastOfArray(["t", "u", "g", "x"]));
/*
6
Using console make this array to be like this one (push, unshift, shift, pop)

var array = [0,5,7,9]
=> [1,3,4,6,8,9,10]
*/
var array = [0, 5, 7, 9];
array.shift();
array.shift();
array.shift();
array.unshift(1, 3, 4, 6, 8);
array.push(10);
console.log(array);
/*
7
Using the console try to figure out what the thing thats (push, unshift, shift, pop) return to you

var array2 = [5,9,-7,3.5]
*/
var array2 = [0, 5, 7, 9];
array2.shift(); //[5,7,9]
array2.pop();//[5,7]
array2.pop();//[5]
array2.push(9, -7, 3.5);
console.log(array2);
/*
/*
* Exercise 1: 
* Write a function called doubleValues which accepts an array and returns a new array with all the values in the array passed to the function doubled
*
* Test Case:
*    Test Case 1: doubleValues([1,2,3]) 
*    Test Case 2: doubleValues([5,1,2,3,10])  
*
* Result: 
* Test Case 1:  [2,4,6]
* Test Case 2: [10,2,4,6,20]
*
*
*/

function doubleValues(arr) {
    for (let i = 0; i < arr.length; i++) {
        arr[i] = arr[i] * 2;
    }

    return arr;
}
console.log(doubleValues([1, 2, 3]));
console.log(doubleValues([5, 1, 2, 3, 10]));
/*
* Exercise:
* Write a function called onlyEvenValues which accepts an array and returns a new array with only the even values in the array passed to the function
*
* Test Cases:
*   onlyEvenValues([1,2,3]) 
*   onlyEvenValues([5,1,2,3,10]) 
* 
* Result:
*  Test Case 1:  [2]
*  Test Case 2: [2,10]
*/
function onlyEvenValues(arr) {
    //Your Code Here
    let evenArray = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            evenArray.push(arr[i])
        }
    }
    return evenArray;
}

console.log(onlyEvenValues([1, 2, 3]))
console.log(onlyEvenValues([5, 1, 2, 3, 10]))

/*
* Exercise:
* Write a function called showFirstAndLast which accepts an array of strings and returns a new array with only the first and last character of each string.
*
* Test Case:
*   Test Case 1: showFirstAndLast(['colt','matt', 'tim', 'udemy'])  
*   Test Case 2 :showFirstAndLast(['hi', 'goodbye', 'smile'])  
*  
* Result:
* Test Case 1: ["ct", "mt", "tm", "uy"]
* Test Case 2: ['hi', 'ge', 'se']
*
*/
function showFirstAndLast(arr) {
    //Your Code Here
    let firstAndLast = [];
    for (let i = 0; i < arr.length; i++)
        firstAndLast.push(arr[i][0] + arr[i][arr[i].length - 1]);

    return firstAndLast;
}
console.log(showFirstAndLast(['colt', 'matt', 'tim', 'udemy']))
console.log(showFirstAndLast(['hi', 'goodbye', 'smile']))
/*8
Create a function called middleOfArray
that take an array as a parameter
and return the middle element in an array if it is have an odd elemnets
and return the two middle elemnt in an array if it is have an even elemnets

Ex: middleOfArray([1,4,5]) => 4
Ex: middleOfArray(["t","u","g","x"]) =>"u and g"
*/
function middleOfArray(arr) {
    if (arr.length % 2 == 1) {
        return arr[Math.floor(arr.length / 2)];
    } else {
        return [arr[Math.floor(arr.length / 2) - 1], arr[Math.floor(arr.length / 2)]];
    }
}
console.log(middleOfArray([1, 4, 5]));
console.log(middleOfArray(["t", "u", "g", "x"]));
/*
9
Using assignment operator (=)
make the animals array have these animals
var animals = ['cat', 'ele', 'bird']
animals; => ['zebra', 'elephant']
** hint: animals[0]=something


var nums= [1,2,3,8,9]
nums => [5,-22,3.5,44,98,44]
*/
var animals = ['cat', 'ele', 'bird'];
animals = ['zebra', 'elephant'];
var nums = [1, 2, 3, 8, 9];
nums = [5, -22, 3.5, 44, 98, 44];
/*
10
Create a function called indexOfArray
that accept an array and index
and return what this array have in this index

var nums= [1,2,3,8,9]
Ex: indexOfArray(nums,3) => 8
Ex: indexOfArray(nums,1) => 2
Ex: indexOfArray(nums,4) => 9

**try more cases by your self
*/
function indexOfArray(arr, index) {
    return arr[index];
}
var nums = [1, 2, 3, 8, 9]
console.log(indexOfArray(nums, 3))
console.log(indexOfArray(nums, 1))
console.log(indexOfArray(nums, 4))



/*
11
Create a function called arrayExceptLast
that accept an array
and return the entire array except the last elemnt
** hint: search abou the function that will cut the array on MDN
var nums= [1,2,3,8,9]
Ex: arrayExceptLast(nums) =>  [1,2,3,8]

**try more cases by your self
*/
function arrayExceptLast(arr) {
    return arr.slice(0, arr.length - 1);
}
var nums = [1, 2, 3, 8, 9]
console.log(arrayExceptLast(nums));
nums = [1, 2, 3, 8]
console.log(arrayExceptLast(nums));
nums = [54, 56, 6, 8, 76, 46, 16, 18]
console.log(arrayExceptLast(nums));

/*
12
Create a function called addToEnd
that accept an array and value
and return the entire array with add this value to the end of this array

var nums= [1,2,3,8,9]
Ex: addToEnd(nums,55) =>  [1,2,3,8,55]

**try more cases by your self
*/
function addToEnd(arr, value) {
    arr.push(value)
    return arr;
}
var nums = [1, 2, 3, 8, 9]
console.log(addToEnd(nums, 5));
nums = [1, 2, 3, 8]
console.log(addToEnd(nums, 5));
nums = [54, 56, 6, 8, 76, 46, 16, 18]
console.log(addToEnd(nums, 5));

// all the exercises below should solved 2 times: 1- for loop 2- while lopp
/*
13
Create a function called sumArray
that accept an array
and return the summation of all elemnt in this array

var nums= [1,2,3,8,9]
Ex: sumArray(nums) => 23

** solve it one time using for loop and another using while loop
**try more cases by your self
*/
function sumArray(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}
console.log('************ EXERCISE sumArray ************************')
var nums = [1, 2, 3, 8, 9]
console.log(sumArray(nums))
/*
14
Create a function called minInArray
that accept an array
and return the minimum value inside this array

var nums= [1,2,3,8,9]
Ex: minInArray(nums) => 1

** solve it one time using for loop and another using while loop
**try more cases by your self
*/
console.log('************ EXERCISE minInArray ************************')
function minInArrayForLoop(arr) {
    let min = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (min >= arr[i]) {
            min = arr[i];
        }
    }
    return min;
}
console.log(minInArrayForLoop(nums))

function minInArrayWhileLoop(arr) {
    var i = 0;
    while (i < arr.length) {
        let min = arr[i];
        if (min >= arr[i]) {
            min = arr[i];
        }
        i++;
        return min;
    }
}
console.log(minInArrayWhileLoop(nums))
/*
15
Create a function called removeFromArray
that accept an array and elemnt to remove
and return the array after remove this elemnt from it

var nums= [1,2,3,8,9]
Ex: minInArray(nums,8) => [1,2,3,9]

** solve it one time using for loop and another using while loop
**try more cases by your self
*/
function removeFromArrayForLoop(arr, element) {

    for (let i = 0; i < arr.length; i++) {
        if (element == arr[i]) {
            arr.splice(i, 1);
        }
    }
    return arr;
}
nums = [1, 2, 3, 8, 9]
console.log('************ EXERCISE removeFromArray ************************')
console.log(removeFromArrayForLoop(nums, 8));
nums = [1, 2, 3, 8, 9]
function removeFromArrayWhileLoop(arr, element) {
    let i = 0;
    while (i < arr.length) {
        if (element == arr[i]) {
            arr.splice(i, 1);
        }
        i++;
    }


}
console.log(removeFromArrayWhileLoop(nums, 8));

/*
16
Create a function called oddArray
that accept an array
and return an array have only the odd elemnts

var nums= [1,2,3,8,9]
Ex: oddArray(nums) => [1,3,9]

** solve it one time using for loop and another using while loop
**try more cases by your self
*/
console.log('************ EXERCISE oddArray ************************')
nums = [1, 2, 3, 8, 9]
function oddArray(arr) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 == 1) {
            result.push(arr[i]);
        }
    }
    return result;
}
console.log(oddArray(nums));
function oddArrayWhile(arr) {
    let result = [];
    let i = 0;
    while (i < arr.length) {
        if (arr[i] % 2 == 1) {
            result.push(arr[i]);
        }
        i++;
    }
    return result;
}
console.log(oddArrayWhile(nums));

/*
17
Create a function called aveArray
that accept an array
and return the average of the numbers inside this array

var nums= [1,2,3,8,9]
Ex: aveArray(nums) => 4.6

var nums2= [1,2,3,8,9,77]
Ex: aveArray(nums) => 16.6

** solve it one time using for loop and another using while loop
**try more cases by your self
*/
function aveArray(arr) {
    let sum = 0;

    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum / arr.length;
}
console.log('************ EXERCISE aveArray ************************')
var nums2 = [1, 2, 3, 8, 9, 77]
console.log(aveArray(nums))
console.log(aveArray(nums2))

/*
18
Create a function called shorterInArray
that accept an array of strings
and return the shortest string inside this array (first)

var strings= ["alex","mercer","madrasa","rashed2","emad","hala"]
Ex: shorterInArray(strings) => "alex"

** solve it one time using for loop and another using while loop
**try more cases by your self
*/
console.log('************ EXERCISE shorterInArray ************************')
function shorterInArray(arr) {
    let shortest = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (shortest.length > arr[i].length) {
            shortest = arr[i];
        }

    }
    return shortest;
}
var strings = ["alex", "mercer", "madrasa", "rashed2", "emad", "hala"]
console.log(shorterInArray(strings))
strings = ["ads", "asds", "fdsFD", "vvv", "adsdsD"]
console.log(shorterInArray(strings))

function shorterInArrayWhile(arr) {
    let shortest = arr[0];
    let i = 0;
    while (i < arr.length) {
        if (shortest.length > arr[i].length) {
            shortest = arr[i];
        }


        i++;
    }
    return shortest;
}
strings = ["alex", "mercer", "madrasa", "rashed2", "emad", "hala"]
console.log(shorterInArray(strings))
strings = ["ads", "asds", "fdsFD", "vvv", "adsdsD"]
console.log(shorterInArray(strings))
/*
19
Create a function called repeatChar
that accept a string and char
and return the times that this char repeat inside this string

var string= "alex mercer madrasa rashed2 emad hala"
Ex: repeatChar(string,"a") => 6
Ex: repeatChar(string,"z") => 0

** solve it one time using for loop and another using while loop
**try more cases by your self
*/
function repeatChar(string, char) {
    let repeats = 0;
    for (let i = 0; i < string.length; i++) {
        if (string[i] == char) {
            repeats++;
        }
    }
    return repeats;
}
console.log('************ EXERCISE repeatChar ************************')
var string = "alex mercer madrasa rashed2 emad hala"
console.log(repeatChar(string, "a"))
console.log(repeatChar(string, "z"))
/*
20
Create a function called evenIndexOddLength
that accept an array of strings
and return a new array that have the string with odd length in even index

var strings= ["alex","mercer","madrasa","rashed2","emad","hala"]
Ex: evenIndexOddLength(strings) => ["madrasa"]

** solve it one time using for loop and another using while loop
**try more cases by your self
*/
console.log('************ EXERCISE evenIndexOddLength ************************');
strings = ["alex", "mercer", "madrasa", "rashed2", "emad", "hala"];
function evenIndexOddLength(arr) {
    let result = []
    for (let i = 0; i < arr.length; i++) {
        if (i % 2 == 0 && arr[i].length % 2 == 1) {
            result.push(arr[i]);
        }

    }
    return result;
}
console.log(evenIndexOddLength(strings));
function evenIndexOddLengthWhile(arr) {
    let result = []
    let i = 0;
    while (i < arr.length) {
        if (i % 2 == 0 && arr[i].length % 2 == 1) {
            result.push(arr[i]);
        }


        i++;
    }
    return result;
}
console.log(evenIndexOddLengthWhile(strings));
/*
21
Create a function called powerElementIndex
that accept an array of number
and return a new array that have the elemnt power by the index of it self

var nums= [44, 5, 4, 3, 2, 10]
Ex: powerElementIndex(nums) => [0, 5, 16, 27, 16, 100000]

** solve it one time using for loop and another using while loop
**try more cases by your self
*/
console.log('************ EXERCISE powerElementIndex ************************');
nums = [44, 5, 4, 3, 2, 10]
function powerElementIndex(arr) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        result.push(arr[i] ** i);

    }
    return result;
}
console.log(powerElementIndex(nums))
/*
22
Create a function called evenNumberEvenIndex
that accept an array of nums
and return a new array that have the even number in even index

var nums= [5,2,2,1,8,66,55,77,34,9,55,1]
Ex: evenNumberEvenIndex(nums) => [2,8,34]

** solve it one time using for loop and another using while loop
**try more cases by your self
*/
console.log('************ EXERCISE evenNumberEvenIndex ************************');
nums = [5, 2, 2, 1, 8, 66, 55, 77, 34, 9, 55, 1];
function evenNumberEvenIndex(arr) {
    let result = []
    for (let i = 0; i < arr.length; i++) {
        if (i % 2 == 0 && arr[i] % 2 == 0) {
            result.push(arr[i]);
        }

    }
    return result;
}
console.log(evenNumberEvenIndex(nums));
function evenNumberEvenIndexWhile(arr) {
    let result = []
    let i = 0;
    while (i < arr.length) {
        if (i % 2 == 0 && arr[i] % 2 == 0) {
            result.push(arr[i]);
        }


        i++;
    }
    return result;
}
console.log(evenNumberEvenIndexWhile(nums));

/*

While Exercises
1
Create a function called subtract
that takes a single parameter n,
and return the subtraction of all
starting from n to 0
Ex: subtract(2); => 2 - 1 - 0 => 1
Ex: subtract(5); => 5 - 4 - 3 - 2 - 1 - 0 => -5
Ex: subtract(9); => 9 - 8 - 7 - 6 - 5 - 4 - 3 - 2 - 1 - 0 => -27
*/
console.log('************ EXERCISE subtract ************************');
function subtract(num) {
    let result = num;
    for (let i = num - 1; i >= 0; i--) {
        result -= i;
    }

    return result;
}
console.log(subtract(2))
console.log(subtract(5))
console.log(subtract(9))
function subtractWhile(num) {
    let result = num;
    let i = num - 1;
    while (i >= 0) {
        result -= i;
        i--;
    }

    return result;
}
console.log(subtractWhile(2))
console.log(subtractWhile(5))
console.log(subtractWhile(9))

/*
2
Create a function called factorial
that takes a single parameter n,
and return the product of all integers up to n starting from 1
Ex: factorial(2); => 2 * 1 => 2
Ex: factorial(4); => 4 * 3 * 2 * 1 => 24
*/
console.log('************ EXERCISE factorial ************************');
function factorial(n){
    let i= n;
    while(i>2){
        i =i-1;
        i--;
    }
    return i;
}
console.log(factorial(2))
console.log(factorial(4))

/*
3
Create a function called repeatStr
that takes 2 parameters string and number,
and return the string number time with space
Important: the continue condition should be [somthing !== 0]
** Think how we can return nothing ???
** Important: You should dint have extra space at the end
Ex: repeatStr("to",2); => "to to"
Ex: repeatStr("to",4); => "to to to to"
*/
console.log('************ EXERCISE repeatStr ************************');
// function repeatStr(str1,str2){

//     let i=0;
//     while()
// }

/*
4
Create a function called sum2
that take two parameter
and will return the sumation from the first number to the second number
Ex: sum2(4, 5); => 4 + 5 => 9
Ex: sum2(3, 6); => 3 + 4 + 5 + 6 => 18
*/
console.log('************ EXERCISE sum2 ************************');

function sum2(val1, val2) {
    let sum = 0;
    while (val1 <= val2) {
        sum += val1++;

    }
    return sum;
}

console.log(sum2(4, 5))
console.log(sum2(3, 6))
/*
5
Create a function called multiOf
that takes 3 parameters,
and return the first number mutiple by
(the second one ^ the third number)
** Important: dont use **
Ex: multiOf(4,10,3); => 4000
Ex: multiOf(6,3,2); => 54
Ex: multiOf(6,2,3); => 48
*/
console.log('************ EXERCISE multiOf ************************');
function multiOf(multi, number, raised) {
    let i = 0;
    let numberRaised = 1
    while (i < raised) {
        numberRaised *= number;
        i++;
    }
    return multi * numberRaised
}
console.log(multiOf(4, 10, 3))
console.log(multiOf(6, 3, 2))
console.log(multiOf(6, 2, 3))
/*
6
Create a function called muti2
that take two parameter
and will return the multiplication
from the first number to the second number
Ex: muti2(4, 5); => 4 * 5 => 20
Ex: muti2(3, 6); => 3 * 4 * 5 * 6 => 360
*/
console.log('************ EXERCISE muti2 ************************');
function muti2(val1, val2) {
    let multi = 1;
    while (val1 <= val2) {
        multi *= val1++;

    }
    console.log(multi);
}
muti2(4, 5);
muti2(3, 6);

/*

7
Create a function called numberBetweenUs
that take 2 parameters
and return the number between them
** Important: You should't have extra space at the end and comma
** Important: the stop condition should [num1!==num2-1]
** hint: maybe you will have 2 if statment
numberBetweenUs(2,8) => "3, 4, 5, 6, 7"
numberBetweenUs(1,3) => "2"
*/
console.log('************ EXERCISE numberBetweenUs ************************');


/*
8
Write a function called countDown
that takes one parameter
and return a string represent the count down from the number
that insert to 0
instead of 0 you shoulf have "done"
between each number a comma and space
** you need to use recursion
** Important: You should't have extra space at the end and comma
countDown(5)
=> "5, 4, 3, 2, 1, done"
countDown(2)
=> "2, 1, done"
countDown(7)
=> "7, 6, 5, 4, 3, 2, 1, done"
*/
console.log('************ EXERCISE countDown ************************');
function countDown(num){
    let i=num;
    let txt='';
    while(i>=0){
        if(i!==0){
            txt+=i+', ';
        }else{
            txt+='done';
        }

        i--;
    }
    console.log(txt)
}
countDown(5)
countDown(2)
countDown(7)
//For Exercises 

/*
* Exercise 1: 
* Write a function called doubleValues which accepts an array and returns a new array with all the values in the array passed to the function doubled
*
* Test Case:
*    Test Case 1: doubleValues([1,2,3]) 
*    Test Case 2: doubleValues([5,1,2,3,10])  
*
* Result: 
* Test Case 1:  [2,4,6]
* Test Case 2: [10,2,4,6,20]
*
*
*/
console.log('************ EXERCISE doubleValues ************************');
function doubleValues(arr){
    let doubled =[];
    for (let i = 0; i < arr.length; i++) {
        doubled.push(arr[i]*2);
        
    }
    console.log(doubled)
}
doubleValues([1,2,3])
doubleValues([5,1,2,3,10])
/*
* Exercise 2:
* Write a function called onlyEvenValues which accepts an array and returns a new array
// with only the even values in the array passed to the function
*
* Test Cases:
*   onlyEvenValues([1,2,3]) 
*   onlyEvenValues([5,1,2,3,10]) 
* 
* Result:
*  Test Case 1:  [2]
*  Test Case 2: [2,10]
*/
console.log('************ EXERCISE onlyEvenValues ************************');
function onlyEvenValues(array){
    elements = []
    for (let index = 0; index < array.length; index++) {
        if (array[index]%2 == 0) {
            elements.push(array[index]) ;
        } 

        
    }
    console.log(elements)
}
onlyEvenValues([1,2,3]) 
onlyEvenValues([5,1,2,3,10]) 




/*
* Exercise 4:
* Write a function called addKeyAndValue which accepts an array of objects, a key, and a value and returns the array passed 
* to the function with the new key and value added for each object 
* 
* Test Cases:
*   Test Case :addKeyAndValue([{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}], 'title', 'instructor') 
*   
* Result:
*   [{name: 'Elie', title:'instructor'}, {name: 'Tim', title:'instructor'}, {name: 'Matt', title:'instructor'}, {name: 'Colt', title:'instructor'}]
*
*/
console.log('************ EXERCISE addKeyAndValue ************************');
function addKeyAndValue(arrayOfObjects,title,value){
    for (let index = 0; index < arrayOfObjects.length; index++) {
        arrayOfObjects[index].title = value;
        
    }
    console.log(arrayOfObjects);
}
addKeyAndValue([{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}], 'title', 'instructor') 
/*
* Exercise 5:
* Write a function called vowelCount which accepts a string and returns an object with the keys as the vowel and the 
* values as the number of times the vowel appears in the string. This function should be case insensitive so a lowercase letter and uppercase letter should count
* 
* Test Cases 1: vowelCount('Elie') // {e:2,i:1};
* Test Cases 2:  vowelCount('Tim') // {i:1};
* Test Cases 3:  vowelCount('Matt') // {a:1})
* Test Cases 4:  vowelCount('hmmm') // {};
* Test Cases 5:  vowelCount('I Am awesome and so are you') // {i: 1, a: 4, e: 3, o: 3, u: 1};
*
*   
* Result:
* Test Cases 1: {e:2,i:1};
* Test Cases 2: {i:1};
* Test Cases 3: {a:1})
* Test Cases 4: {};
* Test Cases 5: {i: 1, a: 4, e: 3, o: 3, u: 1};
*
*/

console.log('************ EXERCISE vowelCount ************************');
function vowelCount(str){
    let vowels =['a','e','i','o','u'];
    let obj = {};
    for (let index = 0; index < str.length; index++) {
        switch(true){

            case str[index] == 'a' || str[index] =='A':
            obj.a= obj.a?obj.a++:1;
            break;
            case str[index] == 'e' || str[index] =='E':
            obj.e= obj.e?obj.e++:1;
            break;
            case str[index] == 'i' || str[index] =='I':
            obj.i= obj.i?obj.i++:1;
            break;
            case str[index] == 'o' || str[index] =='O':
            obj.o= obj.o?obj.o++:1;
            break;
            case str[index] == 'u' || str[index] =='U':
            obj.u= obj.u?obj.u++:1;
            break;
        }
        
    }
    console.log(obj)
    
}
vowelCount('Elie') // {e:2,i:1};
vowelCount('Tim') // {i:1};
vowelCount('Matt') // {a:1})
vowelCount('hmmm') // {};
vowelCount('I Am awesome and so are you') // {i: 1, a: 4, e: 3, o: 3, u: 1}