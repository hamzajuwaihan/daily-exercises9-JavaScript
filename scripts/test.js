// function myfunc(array) {
//     let max = array[0];
//     let secMax = array[array.length - 1]
//     for (let index = 0; index < array.length; index++) {

//         if (max < array[index]) {
//             max = array[index];
//         } else if (secMax < array[index] && max > secMax) {
//             secMax = array[index];
//         }

//     }
//     let maxes = [secMax, max];
//     return maxes;
// }

// let arr = [123, 1351, 151, 648, 1561, 320, 0, 16, 165, 4894, 1561];

// let maxes = myfunc(arr);

// console.log(maxes[0], maxes[1])




function similar(arr) {
   
    let match = true;
   
    for (let index = 0; index < arr.length; index++) {
        if (arr[index] != arr[arr.length - 1 - index]) {
            match = false;
        }
    }
    return match;
  
    
}

let arr = [1,5,9,7,9,5,1]


console.log(similar(arr))
arr = [1,1,12,1,]
console.log(similar(arr))