/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. When an object is in the global context, i.e. not initiated within a function, it will be bound to the Window object. The Window object is basically the object that the browser uses to execute JavaScript. Everything happens here and lives here.
* 2. Implicit Binding means that "this" points to an object from which a method is being called. For example, I have myObj object, which has a method called greet, within which I log "this" to the console. Invoking myObj.greet(); would set "this" to point to myObj, so the console would log the myObj object.
* 3. With New Binding, when we use a constructor to create a new object, "this" refers to each individual object created. For example, if I have an Animal constructor, and two instances of that (cat and dog), if I use log "this" from within either of those objects, "this" will point to the individual from which it was called.
* 4. In Explicit Binding, when an object method is called using apply(), call() or bind(), it switches the what "this' points to from the defaul Implicit Bind, to being bound with the object passed to apply, call or bind. This makes the original object take on the properties of the object that was passed to apply, call or bind.
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
let myFunction = function(){
  console.log("This is my function");
  console.log(`This is bound to the object `, this);
}

myFunction();

// Principle 2

// code example for Implicit Binding

let myOtherFunction = {
  name: "my other function",
  nestedFunction: function(){
    console.log(`I am a nested function and I am bound to `,this);
  }
}

myOtherFunction.nestedFunction();

// Principle 3

// code example for New Binding

function Animal(name,sound){
  this.name = name;
  this.sound = sound;
  console.log(`${this.name} says ${this.sound} and is bound to `, this);
}

let dog = new Animal("dog","woof");
let cat = new Animal("cat","meow");


// Principle 4

// code example for Explicit Binding

function Shape(name,corners){
  this.name = name;
  this.corners = corners;
  this.details = function(){
    console.log(`I am a ${this.name} and I have ${this.corners} corners`);
  }
}

let box = new Shape("box",4);
let triangle = new Shape("triangle",3);

box.details();

box.details.call(triangle); //Takes triangle's properties... we know boxes don't have 3 corners!

