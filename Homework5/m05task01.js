// Task01 - Create a simple function that will be used as event handler.
// function should cancel event bubbling
window.addEventListener("load", task01, false);

function task01() {
    button.addEventListener("click", action, false);
}
function action() {
    var cancel = false,
        answer = confirm("Current phase bubbling. Do you want continue?");
    if (answer === cancel){
        button.stopPropagation();
    }
}



