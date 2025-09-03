/*

we are foing to mkake a custom emitter class nedded if tou want to custom extend from classes other than main class or any custom feature you would like added. this class will handle the emitting and handles events that create and instance of this class

*/

const eventEmitter = require('events')
const { EventEmitter } = require('stream')

const customEmitter = new eventEmitter

/*

the on and  emit methods are to keep track of the order. you can also use additional arg/param and the built in funct/module can utilize it

*/

class TemperatureSensore extends EventEmitter
{

    constructor()
    {

        // A super class is parent class that the other classes can extend from(inherit from). It defines the properties and methods that can be reused by child classess(call subclasses). This avoids rewriting code
        super()
        this.temp = 95

    }

}

/*

in JS a class is like a blueprint for creating objects. It defines the properties(data) and the methods(function) that the object created from it will have

thiml of it like the design for a car: the class is the design and the cars you build from it aee the actual objects.

*/

// class Car{

//     // the constructor is a special method that runs when you make a new object
//     constructor(make, model, year)
//     {

//         this.make = make
//         this.model = model
//         this.year = year

//     }

//     // methods
//     startEngine()
//     {

//         console.log(`${this.make} ${this.model} engine started`)
        
//     }

//     drive()
//     {

//         console.log(`${this.make} ${this.model} car is in drive`)

//     }

//     reverse()
//     {

//         console.log(`${this.make} ${this.model} car is in reverse`)

//     }

//     nuetral()
//     {

//         console.log(`${this.make} ${this.model} car is in nuetral`)

//     }

// }

// the properties are: make, model, year
// the Methods: startEngine(), drive(), reverse(), nuetral() 

// const montes_car = new Car("Jeep", "Renegade", 2016)
// const ryders_car = new Car('Ford','Bronco', 1996)

// montes_car.startEngine()
// montes_car.drive()

/*

class = Blueprint or template.

instance = Actual object created from the class.

you can make many instances from one class, each with unique propetyy values.

Methodes in a class are shared across the instance
*/