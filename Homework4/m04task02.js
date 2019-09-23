// Task02 - Create constructor Cat reproducing it objects
// constructor should set 2 parameters - name and color
// and and use it as a object attributes 

function task02(color, name) {
    return new Cat(color, name); // don't change this code
}

function Cat(name, color, age) {
    this.name = name;
    this.color = color;
    this.age = age;
    return this;
}