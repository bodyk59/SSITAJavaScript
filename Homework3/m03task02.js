// Task02 - create a function with name task02
// function pass array and replace each negative number on 0 and other numbers on 1
// for example: 
// if function take array [-1, 8, -3, 0, 7] it should return [0, 1, 0, 1, 1]

function task02(array) {
    for (var i = 0; i < array.length; i++) {
        if (array[i] < 0) {
            array[i] = 0;
        } else {
            array[i] = 1;
        }
    }
    console.log(array);
}