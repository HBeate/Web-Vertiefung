//car has an Engine

import Engine from './Engine.js';

export default class Car{
    constructor(name, brand, horsepower= 70){
        this.name = name;
        this.brand = brand;
        this.horsepower = horsepower
    }

    setEngine(engine){
        this.engine = engine;
    }
    
    drive(){
        console.log("I am starting to drive")
        this.engine.go();
    }
    printSpecifications(){
        console.log("I have the color " + this.name + " and I'm a " + this.brand + " with " + this.horsepower + " horsepower");
    }
    printAmountOfWheels(){
        console.log(this.amountOfWheels);
    }
}