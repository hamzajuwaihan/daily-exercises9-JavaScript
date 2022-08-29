//ex1

function doubleNumbers(arr) {
    return arr.map(val => val * 2);
}

console.log(doubleNumbers([2, 5, 100]));


//ex2

function stringItUp(arr) {
    let strArr = arr.map(String);
    return strArr;
}

console.log(stringItUp([2, 5, 100]));

//ex3
function capitalizeNames(arr) {
    let uppClassArr = arr.map(function (string) {
        return string.substr(0, 1).toUpperCase() + string.substr(1).toLowerCase();
    })
    return uppClassArr
}

console.log(capitalizeNames(["john", "JACOB", "jinGleHeimer", "schmidt"]));





//ex4
function namesOnly(arr) {
    let onlyNameArr = arr.map(x => x.name);
    return onlyNameArr;
}

console.log(namesOnly([
    {
        name: "Angelina Jolie",
        age: 80
    },
    {
        name: "Eric Jones",
        age: 2
    },
    {
        name: "Paris Hilton",
        age: 5
    },
    {
        name: "Kayne West",
        age: 16
    },
    {
        name: "Bob Ziroll",
        age: 100
    }
]));


//ex5


function makeStrings(arr) {
    let reFormArr = arr.map(arr => {
        if (arr.age >= 18) {
            console.log(arr.name + ' can go to The Matrix')
        } else {
            console.log(arr.name + " is under age!!");
        }
    })
}


console.log(makeStrings([
    {
        name: "Angelina Jolie",
        age: 80
    },
    {
        name: "Eric Jones",
        age: 2
    },
    {
        name: "Paris Hilton",
        age: 5
    },
    {
        name: "Kayne West",
        age: 16
    },
    {
        name: "Bob Ziroll",
        age: 100
    }
]));

//ex6


function readyToPutInTheDOM(arr) {
    let reFormArr = arr.map(arr => {
        console.log('<h1>' + arr.name + '</h1>' + "<h2>" + arr.age + '</h2>')
    })
}
console.log(readyToPutInTheDOM([
    {
        name: "Angelina Jolie",
        age: 80
    },
    {
        name: "Eric Jones",
        age: 2
    },
    {
        name: "Paris Hilton",
        age: 5
    },
    {
        name: "Kayne West",
        age: 16
    },
    {
        name: "Bob Ziroll",
        age: 100
    }
]));



//ex7

function doubleValues(arr) {
    return arr.map(val => val * 2);
}
console.log(doubleValues([1, 2, 3]))
console.log(doubleValues([1, -2, -3]))



//ex8

function valTimesIndex(arr) {
    return arr.map((val, i) => val * i);
}

console.log(valTimesIndex([1, 2, 3]))
console.log(valTimesIndex([1, -2, -3]))


//ex9
function extractKey(arr, key) {
    return arr.map(val => val[key]);
}

console.log(extractKey([{ name: 'Elie' }, { name: 'Tim' }, { name: 'Matt' }, { name: 'Colt' }], 'name'))

//ex10
function extractFullName(arr) {
    return arr.map(val => val.first + ' ' + val.last);
}

console.log(extractFullName([{ first: 'Elie', last: "Schoppik" }, { first: 'Tim', last: "Garcia" }, { first: 'Matt', last: "Lane" }, { first: 'Colt', last: "Steele" }]))

//Filter 11 - 15 you should use Array.prototype.filter
/*
11
Create a function called evenOnly
that accept an array
and return an array of even number only

Ex: evenOnly([1,8,6,4]) => [8,6,4]
*/

let r = [1, 8, 6, 4, 5];
let r1 = r.filter(evenOnly);
function evenOnly(n) {
    return n % 2 == 0
}
console.log(r1)


/*
12
Create a function called multiFour
that accept an array
and return an array of these number that is a mutiply by 4

Ex: multiFour([1,8,6,4]) => [8,4]
*/

let f = [1, 8, 6, 4, 10, 18];
let f1 = f.filter(multiFour);
function multiFour(n) {
    return n % 4 == 0
}
console.log(f1)


/*
13
**this question not that easy mybe you will need to use two function inside each other

Create a function called containChar
that accept an array of string
and return an array of these string that contain this char

Ex: containChar(["hello","world"],w) => ["world"]
Ex: containChar(["hello","world"],l) => ["hello","world"]
*/
function containChar(arr2, q) {

    let arr1 = arr2.filter(multiFour);
    function multiFour(n) {
        return n.includes(q) ? true : false
    } return arr1
}
console.log(containChar(["hello", "world"], "l"))
console.log(containChar(["hello", "world"], "e"))



/*
14
Create a function called evenIndexOddLength
that accept an array of strings
and return an array that have the string with odd length in even index

var strings= ["alex","mercer","madrasa","rashed2","emad","hala"]
Ex: evenIndexOddLength(strings) => ["madrasa"]
*/

function evenIndexOddLength(arr4) {

    let arr3 = arr4.filter(multiFour);
    function multiFour(n, index) {
        if (n.length % 2 !== 0 && n.indexOf(n[index]) % 2 == 0) {
            return n
        }
    }
    return arr3
} console.log(evenIndexOddLength(["alex", "mercer", "madrasa", "rashdd", "emad", "hdala"]))


/*
15
Using the varabile persons
Create a function called olderThan
that accept an array and number
and return the person that have age older than this number

Ex: olderThan(persons,56) => [{ name: { first: 'Soso', last: 'Al-Amora' }, age: 67 }]
*/

let number = [1,8,6,4,5];
let newNum = number.filter(evenOnly);
function evenOnly(n){
    return n%2==0
}
console.log(newNum)


/*
16
Create a function called shorterThan
that accept an array of strings and a number
and return the shorter string than the number

var strings= ["alex","mercer","madrasa","rashed2","emad","hala"]
Ex: shorterThan(strings,5) => ["alex","emad","hala"]
*/

function shorterThan(w, r) {

    let w1 = w.filter(multiFour);
    function multiFour(n) {
        if (n.length < r) {
            return n
        }
    }
    return w1
}
console.log(shorterThan(["alex", "mercer", "madrasa", "rashdd", "emad", "hdala"], 6))