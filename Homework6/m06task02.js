// Task02
// Your task is to create function that returns square number of an argument
// Function should check if argument is incorrect and return two different
// exceptions as instances of Error object:
// 'missing parameter' if argument is not initialized
// 'parameter is not a number' if argument is Nan

function m06task02(arg) {
    if (arg === undefined){
        throw (new Error('missing parameter'));
    } else if(isNaN(arg)){
        throw (new Error('parameter is not a number'));
        //One more variant:
        // console.assert(!isNaN(arg), 'parameter is not a number');
    } else{
        return arg * arg;
    }
}