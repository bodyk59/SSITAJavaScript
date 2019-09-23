// Task03 - Update your constructor Cat from task 2
// Constructor should add to objects method action()
// After calling method action return string with next format:
// color + " cat " + name + " run!"

// For example if cat created with parameters "white" and "Lucky"
// it action() should be "white cat Lucky run!"

// P.S
// Remember about this

function task03(color, name) {
    return new Cat(color, name); // don't change this code
}

function Cat(name, color, age) {
    this.name = name;
    this.color = color;
    this.age = age;
    this.action = function () {
        console.log("%s cat %s run!", this.color, this.name);
    };
    return this;
}