class Car{
    constructor(name,Price,isDiskBrake){
        this.name = name;
        this.Price = Price;
        this.isDiskBrake = isDiskBrake;

    }
    // Method
    startCar(){
        console.log(`Car is started ${this.name}`);
    }

    // getter
    get getName(){
        return this.name;
    }

    // setter
    set setPrice(updatedPrice){
        this.price = updatedPrice;
    }

    // static - directly call by class name
    static applyBrake(){
        console.log("Brake is applied");
    }
}
const c1 = new Car('BMW',1000,true);
console.log(c1);
console.log(c1.startCar());
console.log(c1.getName);
console.log(c1.setPrice = 2000);
console.log(Car.applyBrake());

class RacingCar extends Car{
    constructor(name,Price,isDiskBrake,maxSpeed,color){
        super(name,Price,isDiskBrake); //call the constructor of Car class
        this.maxSpeed = maxSpeed;
        this.color = color;
}

get maximumSpeed(){
    return this.maxSpeed;
}

get getColor(){
    return this.color;
}
}

const r1 = new RacingCar('Audi',100,true,300,'black');

console.log(r1);
console.log(r1.getName);
