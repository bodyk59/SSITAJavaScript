// Task03 - create 2 functions: task03a and task03b
// First function should pass parameter and divide it on 2
// result function should return.
// Second function should call first function and 
// return it result concat with string "result - "
//
// For example: you get in second function a number 6
// Result of call both function should be like "result - 3"

var a = 10;

task03b();

function task03a(a) {
    return a / 2;
}

function task03b() {
    return "result - " + task03a(a);
}