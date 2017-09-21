class Pet {
	constructor(name){
	this.name = name;
}
	setOwner(owner){
	this.owner = owner;
}
}

class Dog extends Pet{
	constructor(price, name){
	super(name);
	this.price = price;
	}
	bark(){
		console.log('bark')
	}
	chaseTail(){
		console.log('oh boy oh boy oh boy')
	}
	getPrice(){
		console.log(this.price)
	}
}

const sparky = new Dog(200, "Sparky")
// console.log(sparky.setOwner('Jim'))
// console.log(sparky)
// sparky.bark()
// sparky.chaseTail()
console.log(sparky.getPrice())

class Cat extends Pet{
	constructor(price, name){
		super(name);
		this.price = price;
	}
	purr(){
		console.log('purrrr')
	}
	clean(){
		console.log('cleaning')
	}
	getPrice(){
		console.log(this.price)
	}
}

const sprinkles = new Cat(400, "Sprinkles")
console.log(sprinkles.setOwner('Jim'))
console.log(sprinkles)
sprinkles.purr()
sprinkles.clean()
sprinkles.getPrice

class Person {
	constructor(name){
	this.name = name;
	this.age = 0;
	this.weight = 0;
	this.mood = 0;
	this.pets = [];
	this.bankAccount = 0
}
	getName(){
			return this.name
	}
	getAge(){
			return this.age
	}
	getWeight(weight){
			return this.weight
		}
	greet(other_person){
		console.log('HI ' + other_person)

	}
	eat(){
			this.weight++;
			this.mood++;
		
	}
	exercise(){
			this.weight--;
		
	}
	agePlus(){
		this.age++;
		this.weight++;
		this.mood--;
		this.bankAccount +=10;
	}	

	buyPet(pet){
		this.pets.push(pet);
		this.mood += 10;
		this.bankAccount -= pet.getPrice();	
	}

}	
const jill = new Person('Jill')
// console.log(jill.getName())
// console.log(jill.getAge())
// console.log(jill.getWeight())
// console.log(jill.greet("Tommy"))
console.log(jill.eat())
console.log(jill.agePlus())
jill.buyPet(sparky)
console.log(jill)











