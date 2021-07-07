/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window/Global Object Binding is the top scope when you are not yet in another object.
* 2. Implicit Binding is when 'this' is used within and object. The name before the dot is the scope of this.
* 3. New Binding is when we have constructed a new instance of the object with the 'new' key word.
* 4. Explicit Binding is when the scope of 'this' is implied by the use of rhe 'call' or 'apply' key words. 
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
function hi(name) {
    console.log(this);
    return name;
  }
  hi("Joe");
  
// Principle 2

// code example for Implicit Binding
const hiObj = {
    greeting: 'Hello',
    hi: function(name) {
      console.log(`${this.greeting} my name is ${name}`);
      console.log(this);
    }
  };
  hiObj.hi('wonderful');
  
// Principle 3

// code example for New Binding
function CordialPerson(greeter) {
    this.greeting = 'Hello ';
    this.greeter = greeter;
    this.speak = function() {
      console.log(this.greeting + this.greeter);
      console.log(this);
    };
  }
  
  const jerry = new CordialPerson('Newman');
  const newman = new CordialPerson('Jerry');
  
  jerry.speak();
  newman.speak();
    
// Principle 4

// code example for Explicit Binding
function tellUsAboutYourself(thing1, thing2, thing3){
    console.log( `Hi! My name is ${this.name}, I live in ${this.city}, and I enjoy ${thing1}, ${thing2}, and ${thing3}. I love to eat ${this.favoriteFood}.`)
    console.log(this);
    //   return `Hi! My name is ${this.name}, I live in ${this.city}, and I enjoy ${thing1}, ${thing2}, and ${thing3}. I love to eat ${this.favoriteFood}.`
  }
   function ConstructObj(name, city, food) {
   this.name = name;
   this.city = city;
   this.favoriteFood = food;
   this.tellus = tellUsAboutYourself;
   }
  
   const scott = new ConstructObj('Scott', 'Raleigh', 'veggies');
  
   tellUsAboutYourself.call(scott,'acting','singing','riding');
 