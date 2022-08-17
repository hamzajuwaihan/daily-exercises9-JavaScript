function sum(n) {

    if (n != 0)
        return n + sum(n - 1);
    else
        return n;

}
console.log(sum(5))
console.log(sum(2))

//second exercise
console.log('************************************************')



function factorial(n) {
    if (n != 1)
        return n * factorial(n - 1);
    else
        return 1;
}

console.log(factorial(3))
console.log(factorial(4))


console.log('************************************************');

function repeatStr(str, repeatNumber) {

    if (repeatNumber === 0) {
        return '';
    }
    else {
        return repeatStr(str, repeatNumber - 1) + ' ' + str
    }
}
console.log(repeatStr("to", 2));
console.log(repeatStr("to", 4));

console.log('************************************************');


function sum2(num1, num2) {
    if(num1 <= num2){
        return num1 + sum2(num1+1,num2);
    }else{
        return 0;
    }


}
console.log(sum2(4, 5))
console.log(sum2(3, 6))
// Ex: sum2(4, 5); => 4 + 5 => 9
// Ex: sum2(3, 6); => 3 + 4 + 5 + 6 => 18