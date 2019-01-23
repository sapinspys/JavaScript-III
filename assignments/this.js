/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. The value of 'this' will default to the global window Object when it cannot find it in the function

* 2. When a function is called, 'this' points to the object where the function exists in

* 3. When a constructor function is used, the Object instance created will be 'this'

* 4. 'this' can be set explicitly to a value using call, apply, or bind

*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
function globalThis() {
     console.log(`"this" = ${this}`);
}
globalThis();


// Principle 2

// code example for Implicit Binding
let myObjectX = {
    location: `"this" now refers to OBJECT X!`,
    whereIsThis: function () {
        console.log(this.location);
    }
}
myObjectX.whereIsThis();

// Principle 3

// code example for New Binding
function constructor(greeting) {
    this.greeting = greeting;
}

let newObject = new constructor(`Hello! 'this' now refers to newObject!`);

console.log(newObject.greeting);

// Principle 4

// code example for Explicit Binding
function whereIsThis() {
    console.log(this.location);
}

let myObjectZ = {
    location: `"this" now refers to OBJECT Z!`
}

whereIsThis.call(myObjectZ);

