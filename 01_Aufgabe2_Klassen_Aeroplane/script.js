import Turbine from './turbine.js';
import Aeroplane from './aeroplane.js';
import Fueltank from './fueltank.js';


var ft = new Fueltank(10000);

var t1 = new Turbine(ft);
var t2 = new Turbine(ft);
var t3 = new Turbine(ft);
var t4 = new Turbine(ft);

var a1 = new Aeroplane(ft);
console.log(a1.getFuelStatus());

a1.addTurbine(t1);
a1.addTurbine(t2);
a1.addTurbine(t3);
a1.addTurbine(t4);

a1.accelerate(900);
console.log(a1.getFuelStatus());
a1.up(5);
a1.down(7);
a1.right(5);

a1.printFlightPosition();
a1.left(59);
a1.printFlightPosition();