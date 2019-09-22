// Task01 - create a function with name task01
// function pass three numbers and multiples those that less than zero
// if all numbers are positive function should return undefined
// for example: 
// if function take 3, -2 and -5 it should return 10

function task01(number1, number2, number3) {
    if ((number1 > 0) && (number2 > 0) && (number3 > 0)){
        return undefined;
    }

    var result = 1;

    if (number1 < 0){
        result *= number1;
    }
    if (number2 < 0){
        result *= number2;
    }
    if (number3 < 0){
        result *= number3;
    }
    console.log(result);
}