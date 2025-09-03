class Person
{

    constructor(name, age)
    {

        this.name = name
        this.age = age

    }

    introduce()
    {

        console.log(`"Hi, my name is ${this.name} and I am ${this.age} years old."`)
    
    }

}

const ryder = new Person('ryder', '108')
const john = new Person('john', 'died(so i guess it doesn\'t mean anything)')

ryder.introduce()
john.introduce()

class Vehicle
{

    constructor(brand, year)
    {

        this.brand = brand
        this.year = year

    }

    drive()
    {
        
        `the ${this.brand} is driving`

    }

}

class Car extends Vehicle
{

    constructor(brand, year, doors)
    {

        super(brand, year)

        this.doors = doors

    }

    honk()
    {

      console.log("Beep beep! The car honked.")  

    }

}

class Motorcycle extends Vehicle
{

    constructor(brand, year, type)
    {

        super(brand, year)

        this.type = type

    }

    revEngine()
    {

      console.log("Vroom! The motorcycle revs its engine.")  

    }

}

const bronco = new Car('ford', '1996', 2)
const bikecycle = new Motorcycle('Monguse','2001','bmx')

bronco.honk
bikecycle.revEngine

class Animals
{

    constructor(phylum, sciClass, order, genus, species)
    {

        this.kingdom = 'animalia'
        this.phylum = phylum
        this.sciClass = sciClass
        this.order = order
        this.genus = genus
        this.species = species

    }

    eat()
    {

        console.log(`mmmh ${this.comName} is not longer hungry`)

    }

}

class Mammals extends Animals
{

    constructor(order,genus,species)
    {

        super('chordata','Mammalia',order, genus, species)

    }

}

class Monotreme extends Mammals
{

    constructor(genus,species)
    {

        super('Monotremata',genus,species)

    }

} 

class Platypus extends Monotreme
{

    constructor(age, gender)
    {
        
        super('Ornithorhynchus','O. anatinus')

        this.age = age
        this.gender = gender

    }

    
}