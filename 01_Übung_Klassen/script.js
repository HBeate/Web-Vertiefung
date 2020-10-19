
import Car from './Car.js';
import Engine from './Engine.js';
import SuperCar from './SuperCar.js';


let c1 = new Car("F1", "Ferrari", 150);
let c2 = new Car("3er", "BMW","100");
let c3 = new SuperCar("SuperCar1", "Mega", 200)

let e1 = new Engine("123");
let e2 = new Engine("987");

c1.setEngine(e1);
c2.setEngine(e2);
c3.setEngine(e1);

c1.drive();
c2.drive();
c3.doSomethingSuperDuper();




