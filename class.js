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
console.log(sparky.setOwner('Jim'))
console.log(sparky)
sparky.bark()
sparky.chaseTail()
sparky.getPrice()

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
sprinkles.getPrice()















