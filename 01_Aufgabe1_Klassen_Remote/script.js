
import Remote from './Remote.js';
import Battery from './Battery.js';
import Tv from './Tv.js';

let r1 = new Remote(false, true);
let b1 = new Battery(90);
let b2 = new Battery(70);
let tv = new Tv();

r1.addBattery(b1);
r1.addBattery(b2);

r1.getStatusTotal();
r1.turnOnTv();

r1.turnOn();
r1.getStatusTotal();

console.log(r1.hasPower());
r1.turnOn();
r1.turnOn();
r1.turnOn();
r1.turnOn();
r1.turnOn();
r1.getStatusTotal();
console.log(r1.hasPower());
