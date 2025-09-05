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

    constructor(phylum, sciClass, order, family, genus, species, name)
    {

        this.kingdom = 'animalia'
        this.phylum = phylum
        this.sciClass = sciClass
        this.order = order
        this.family = family
        this.genus = genus
        this.species = species
        this.name = name

    }

    eat()
    {

        console.log(`mmmh ${this.name} is not longer hungry`)

    }

}

class Mammals extends Animals
{

    constructor(family,order,genus,species, name)
    {

        super('chordata','Mammalia',order, family, genus, species, name)

    }

}

class Platypus extends Mammals
{

    constructor(age=0, gender='', name='')
    {
        
        super('Monotremata','Ornithorhynchidae','Ornithorhynchus','O. anatinus',name)

        this.age = age
        this.gender = gender
        this.spawn = []

    }

    // for when the platypus needs food 
    electroreception()
    {

        let pronoun;
        
        // generate the correct pronoun
        this.gender == 'male'||this.gender == 'boy' || this.gender == 'man'?pronoun='his':pronoun='her'

        console.log(this.name, 'used', pronoun, 'bill to sense the electromagnetic field of prey')

    }

    // create a new platypus and add it to the spawn array
    // it also returns the new platypus
    layEgg(name=''|4)
    {

        // only female platypus lays eggs
        if(this.gender == 'boy'|| this.gender == 'male'|| this.gender == 'man')
        {

            // returns early 
            return `${this.name} can\'t lay eggs`

        }

        console.log(this.name, 'layed a new Platypus named', name)

        let gender

        // randomly asign gender
        if(Math.floor(Math.random() * 2 + 1) == 1)
        {

            gender = 'boy'

        }
        else
        {

            gender = 'girl'

        }

        name==4&&gender=='boy'?name='john doe':name=name
        
        name==4&&gender=='girl'?name='jane doe':name=name
        
        this.spawn.push(

            new Platypus(0,gender,name)

        )

        return this.spawn[this.spawn.length - 1]

    }

}

console.log('\n\n\n\n---Platypus---\n')

const perry = new Platypus(34, 'boy', 'Perry')
const garlockTheDistroyer = new Platypus(34, 'girl', 'garlockTheDistroyer')

perry.electroreception()
perry.eat()

console.log('\n')

const perryJR = perry.layEgg()

console.log(perryJR)

console.log('\n')

garlockTheDistroyer.electroreception()
garlockTheDistroyer.eat

console.log('\n')

const garlockTheDistroyerJR = garlockTheDistroyer.layEgg('garlockTheDistroyerJR')

console.log(garlockTheDistroyerJR.name, 'is a', garlockTheDistroyerJR.gender)


// short-nosed Indian fruit bat
class Bat extends Mammals
{

    constructor(age=0, gender='', name='')
    {
        
        super('Chiroptera', 'Pteropodidae','Cynopterus','C. sphinx', name)

        this.age = age
        this.gender = gender
        this.spawn = []

    }

    // for when the bat needs food
    echolocation()
    {

        let pronoun;
        
        this.gender == 'male'||this.gender == 'boy' || this.gender == 'man'?pronoun='his':pronoun='her'

        console.log(this.name, 'uses ', pronoun, ' own sound waves to find prey')

    }

    // create a new bat and add it to the spawn array
    // it also returns the new bat
    giveBirth(name=''|'Doe')
    {

        // only female bats give birth
        if(this.gender == 'boy'|| this.gender == 'male'|| this.gender == 'man')
        {

            // returns early 
            return 'you can\'t give birth'

        }

        console.log(this.name, 'gave birth to a new bat named', name)

        let gender

        // randomly asign gender
        if(Math.floor(Math.random() * 2 + 1) == 1)
        {

            gender = 'boy'

        }
        else
        {

            gender = 'girl'

        }

        this.spawn.push(

            new Bat(0,gender,name)

        )

        return this.spawn[this.spawn.length - 1]

    }

}

console.log('\n\n\n\n---Bats---\n')

const bat1 = new Bat(34, 'boy', 'JustACityBat')
const bat2 = new Bat(34, 'girl', 'justASmallTownBat')

bat1.echolocation()
bat1.eat()

console.log('\n')

const bat1JR = bat1.giveBirth()

console.log(bat1JR)

console.log('\n')

bat2.echolocation()
bat2.eat()

console.log('\n')

const bat2JR = bat2.giveBirth('Don\'t Stop Believin\'')

console.log(bat2JR.name, 'is a', bat2JR.gender)