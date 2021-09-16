
// this keyword
// - a pronoun to use in place of an object
// - points to an object with specific context



/*
  EXAMPLE TASK:
    - Write an Airplane constructor that initializes `name` from an argument.
    - All airplanes built with Airplane should initialize with an `isFlying` of false.
    - Give airplanes the ability to `.takeOff()` and `.land()`:
        + If a plane takes off, its `isFlying` property is set to true.
        + If a plane lands, its `isFlying` property is set to false.
*/

// EXAMPLE SOLUTION CODE:
function Airplane(name) {
  this.name = name;
  this.isFlying = false;
}
Airplane.prototype.takeOff = function () {
  this.isFlying = true;
};
Airplane.prototype.land = function () {
  this.isFlying = false;
};


// /**** */
// // 👇 COMPLETE YOUR WORK BELOW 👇
// // 👇 COMPLETE YOUR WORK BELOW 👇
// // 👇 COMPLETE YOUR WORK BELOW 👇
// **** */


//---------------------------------------------------------------------
//----- NOTES IN MY OWN WORDS TO HELP BETTER UNDERSTAND CONCEPTS ------
//---------------------------------------------------------------------



/*
  TASK 1
    - Write a Person Constructor that initializes `name` and `age` from arguments.
    - All instances of Person should initialize with an empty `stomach` array.
    - Give instances of Person the ability to `.eat("someFood")`:
        + When eating an edible, it should be pushed into the `stomach`.
        + The `eat` method should have no effect if there are 10 items in the `stomach`.
    - Give instances of Person the ability to `.poop()`:
        + When an instance poops, its `stomach` should empty.
    - Give instances of Person a method `.toString()`:
        + It should return a string with `name` and `age`. Example: "Mary, 50"
*/



function Person(name, age) {
  this.name = name;                     // This is the function that all actions (prototype) will use. Provides data to be used. 
  this.age = age;            
  this.stomach = [];
}

Person.prototype.eat = function(someFood){      //prototype provides an ACTION for the data to act upon. .eat is the name of that action. someFood is the parameter that will help push into a new array.
  if(this.stomach.length < 10){                 //this is saying - if stomach (array) has less than 10 "food items" then the "food items" will be entered into the array.      
    this.stomach.push(someFood)
  }
}

Person.prototype.poop = function(){             //this clears the array with the action of .poop. 
  this.stomach = []
}

Person.prototype.toString = function(){         //this uses name and age in the object to puch through a name and age when invoked.
  return `${this.name}, ${this.age}`;
}

// const newPerson = new Person("Mary", 50);       // plugs in user data to the original Person function
// console.log(newPerson.toString());              // logs user input and uses prototype .toString() action, displays Mary, 50
// newPerson.eat("pizza");                         // plugs in user data with newPerson and uses .eat prototype, inputs user's .eat data in place of someFood parameter
// console.log(newPerson.stomach);                 // logs what newPerson has in stomach
// newPerson.poop();                               // this uses the action of .poop, creating an empty stomach (array) for newPerson
// console.log(newPerson.stomach);                 // logs an empty array symbolizing an empty stomach






/*
  TASK 2
    - Write a Car constructor that initializes `model` and `milesPerGallon` from arguments.
    - All instances built with Car:
        + should initialize with an `tank` at 0
        + should initialize with an `odometer` at 0
    - Give cars the ability to get fueled with a `.fill(gallons)` method. Add the gallons to `tank`.
    - STRETCH: Give cars ability to `.drive(distance)`. The distance driven:
        + Should cause the `odometer` to go up.
        + Should cause the the `tank` to go down taking `milesPerGallon` into account.
    - STRETCH: A car which runs out of `fuel` while driving can't drive any more distance:
        + The `drive` method should return a string "I ran out of fuel at x miles!" x being `odometer`.
*/

function Car(model, milesPerGallon) {
  this.model = model;
  this.milesPerGallon = milesPerGallon;
  this.tank = 0;       //sets initial value to 0
  this.odometer = 0;   //sets initial value to 0
}

Car.prototype.fill = function(gallons){    //provides a fill action which adds gallons in the tank
  this.tank = this.tank + gallons;
}

Car.prototype.drive = function(distance){
  const driveMiles = this.tank * this.milesPerGallon;          //need to establish the driveable miles
  if(distance <= driveMiles){
    this.odometer = this.odometer + distance;
    this.tank = this.tank - (distance / this.milesPerGallon)
  }else{
    this.odometer = this.odometer + driveMiles;
    this.tank = 0
    return `Your vehicle is out of gas at ${this.odometer} and can't drive!`;
    // console.log(`Your vehicle is out of gas at ${this.odometer} and can't drive!`);
  }
}

// const newCar = new Car("Rogue", 25)
// console.log(newCar)
// newCar.fill(5)
// newCar.drive(20)
// console.log(newCar)
// newCar.drive(150)
// console.log(newCar)

// Car.prototype.fill = function(gallons){
//   if(gallons > 1){
//     return this.tank + gallons;         //incorrect, overcomplication
//   }
// }



/*
  TASK 3
    - Write a Baby constructor subclassing Person.
    - Besides `name` and `age`, Baby takes a third argument to initialize `favoriteToy`.
    - Besides the methods on Person.prototype, babies have the ability to `.play()`:
        + Should return a string "Playing with x", x being the favorite toy.
*/
function Baby(name, age, favoriteToy) {
   Person.call(this, name, age);             //inherits Person class, this is how 
   this.favoriteToy = favoriteToy;
}

Baby.prototype = Object.create(Person.prototype);    // allows Baby to inherit Person's methods
Baby.prototype.play = function(){
  return `Playing with ${this.favoriteToy}`;
}


/* 
  TASK 4
  In your own words explain the four principles for the "this" keyword below:
  1. Window Binding - when none of the other rules apply, this will return the window or the global object in node or undefined in strict mode.
  2. Implicit Binding - when the function is invoked look to the left of the dot, that's what this referrs to. 
  3. Explicit Binding - use .call, .apply, or .bind to explicitly 
  4. New binding - when a function is created as a constructor this points to the newly created object.
*/


///////// END OF CHALLENGE /////////

/* 🛑🛑🛑🛑🛑🛑🛑🛑🛑🛑 Please do not modify anything below this line 🛑🛑🛑🛑🛑🛑🛑🛑🛑🛑 */
function foo(){
  console.log('its working!');
  return 'bar';
}
foo();
module.exports = {
  foo,
  Person, 
  Car,
  Baby
}