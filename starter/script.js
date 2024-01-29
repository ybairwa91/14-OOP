/*'use strict';
/////////////////////////////
//oops=objects oriented programming

//we can use function declaration and function expression both
// to create a constructor function but cant use arrow function since
//it doesnot have its own this keyword
const Person = function (firstName, birthYear) {
  //Instance properties
  this.firstName = firstName;
  this.birthYear = birthYear;
  //add methods(a bad practice(never do this))
  //cause this is blueprint and suppose if thousands of instance creating where no need of
  //this function then it will create performance issue
  //   this.calcAge = function () {
  //     console.log(2037 - this.birthYear);
  //   };
};

const jonas = new Person('jonas', 1991);
console.log(jonas);

//1.a new empty object {} is created
//2.function is called and this keyword is set to
//this newly created object(this={})
//3.newly created object linked to prototype
//4.function automatically return {}

//instances
const matila = new Person('matila', 2017);
const jack = new Person('jack', 2017);
console.log(matila, jack);
console.log(jonas instanceof Person); //true
const jay = 'jay';
console.log(jay instanceof Person); //false

////////////////
///////////////
//each and every function in javascript has a property called prototype
//now evry object created by constructor function has access to its prototype property

//
//Prototypes games[to add method]
//see here Person is the constructor function
//now we access the prototype property of Person constructor function and added a new method
//called calcAge
//now instance created by using Person constructor function  adds this
//prototype property of objects(instances) and u can now access them
//so instead of defining any method in the constructor function itself we
//added in the prototype of the Constructor function then you can access it
//according to the demand of the instance

Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};

jonas.calcAge(); //gives 2037-1991=46[here jonas is instance and access the prototype method called calcAge]
matila.calcAge(); //20
//prototype of jonas looks like this
console.log(jonas.__proto__);
console.log(jonas.__proto__ === Person.prototype); //true==>it means that Person.prototype
//doesnot mean the prototype of person constructor function but prototype of all the instances
//created using this constructor fnc
//lets test in another way
console.log(Person.prototype.isPrototypeOf(jonas)); //gives true
console.log(Person.prototype.isPrototypeOf(matila)); //gives true
console.log(Person.prototype.isPrototypeOf(Person)); //gives false(means what we trying to understand)
//.prototypeOfLinkedObjects

//add properties on instance prototype and not only methods
Person.prototype.species = 'Homo Sapiens';
console.log(jonas.species, matila.species);

//lets test something
console.log(jonas.hasOwnProperty('firstName')); //true
console.log(jonas.hasOwnProperty('species')); //false

//__proto__ always points to the prototype of the the object on which we are calling
//prototype chain
console.log(jonas.__proto__);
//Object.prototype(top of prototype chain)
console.log(jonas.__proto__.__proto__);
console.log(jonas.__proto__.__proto__.__proto__);

//constructor property of the prototype object point backs to the constructor function
//which is our blueprint
console.log(Person.prototype.constructor);
//lets inspect it
console.dir(Person.prototype.constructor);
//lets do same in array as well[since evrything is object in js except primitve data types]
const arr = [2, 3, 1, 7, 1, 2, 3]; //new Array===[]
console.log(arr.__proto__); //it means that arr has a prototype object and we can see that property
//by using proto property of arr which points to the prototype of arr
//so basically in js array doesnot have any property or method but they inherit from its prototype
console.log(arr.__proto__ === Array.prototype); //gives true as always
//
console.log(arr.__proto__.__proto__);

//lets understand more deeper what is Array constructor function is
//its a bad practice but here just for learning practice only.
Array.prototype.unique = function () {
  return [...new Set(this)];
};
console.log(arr.unique());

//
const h1 = document.querySelector('h1');
console.log(h1);
console.dir(h1);
console.dir(x => x + 1);

// Coding Challenge #1

/* 
1. Use a constructor function to implement a Car. A car has a make and a speed property. The speed property is the current speed of the car in km/h;
2. Implement an 'accelerate' method that will increase the car's speed by 10, and log the new speed to the console;
3. Implement a 'brake' method that will decrease the car's speed by 5, and log the new speed to the console;
4. Create 2 car objects and experiment with calling 'accelerate' and 'brake' multiple times on each of them.

DATA CAR 1: 'BMW' going at 120 km/h
DATA CAR 2: 'Mercedes' going at 95 km/h

GOOD LUCK 😀
const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};

Car.prototype.accelerate = function () {
  this.speed = this.speed + 10;
  console.log(this.speed);
};

Car.prototype.brake = function () {
  this.speed = this.speed - 5;
  console.log(this.speed);
};

const BMW = new Car('BMW', 120);
const Mercedes = new Car('Mercedes', 95);
console.log(BMW, Mercedes);

BMW.accelerate();
BMW.brake();
Mercedes.accelerate();
Mercedes.brake();
*/

//ES6 classes
//es6 classes in js are syntactic sugar
//class expression
const PersonClExp = class {};
//this is class declaration
class PersonCl {
  constructor(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  }
  //these Methods will be added to prototype property
  calcAge() {
    console.log(2037 - this.birthYear);
  }
  greet() {
    console.log(`Hey ${this.firstName}`);
  }
}

const jessica = new PersonCl('Jessica', 1996);
console.log(jessica);
jessica.calcAge(); //value
console.log(jessica.__proto__ === PersonCl.prototype); //true
PersonCl.prototype.greetTo = function () {
  console.log(`welcome ${this.firstName}`);
};
jessica.greet();

//1.classes are not hoisted
//[even if classes declaration-->recall function declaration are hoisted]
//2.Classes are also first class citizens[pass them as a value,expression,parameters]
//3.classes are executed in strict mode







