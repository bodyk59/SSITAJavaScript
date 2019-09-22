// Task03 - create a function with name task03
// function pass array and retun hash with min amd max values from array
// for example: 
// if function take [-1, 8, -3, 0, 7] it should return {min: -3, max: 8}

function task03(array) {
    var hash_table = {
        min: "",
        max: ""
    };

    var max = array[0];

    for (var i = 1; i < array.length; i++) {
        if (array[i] > max){
            max = array[i];
        }
    }

    var min = array[0];

    for (i = 1; i < array.length; i++) {
        if (array[i] < min){
            min = array[i];
        }
    }

    hash_table["max"] += max;
    hash_table["min"] += min;

    console.log(hash_table);
}
