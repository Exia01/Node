/*
 When we are requiring a inbuilt core, we only need the module name .
This is a core module from node and we import it by its name 
*/
const events = require('events');

/* This allows inheritance from objects in node js and other objects */
const util = require('util');

/*
We then create a new instance of the event.
Also can be described as a contructor.
*/
const myEmitter = new events.EventEmitter();
/* When we emit we want to write to the console a message.
The msg -> 'Message' is a callback function.
*/
myEmitter.on('someEvent', msg => {
    console.log(msg)
})
/* We emit the 'someEvent' and pass along the callback in this case a string */
myEmitter.emit('someEvent', 'The event was emitted')
////////////////////////////////////////////////////////////////
/* We declare a variable that is a function which takes in a name and sets it as the property.
We can use the Util module to enable any person to be able to use the event emitter.

var Person = function(name){
// this allows, the function with any object created(James) to utilise this function
    this.name = name;
}
*/

class Person {
    constructor(name) {
        this.name = name;
    }
}
/* First we pass in the object constructor that we want to inherit something. 
In this case it is a person.
Now every person is going to be able to have custom events
*/
util.inherits(Person, events.EventEmitter);

let James = new Person('James')
// console.log(James)
let Mary = new Person('Mary')
let Ryu = new Person('Ryu')
/* Created 3 people and now we stored them in an array */
let People = [James, Mary, Ryu];
/* we then do a forloop and for each person we will attach an event or a 'listener' */
People.forEach(Person => {
    Person.on('speak', mssg => {
        console.log(Person.name + ' said: ' + mssg)
    })
})

James.emit('speak', 'hey dudes')
Ryu.emit('speak', 'Training!!')