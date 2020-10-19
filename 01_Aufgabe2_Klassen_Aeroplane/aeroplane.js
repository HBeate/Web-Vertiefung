import Turbine from './turbine.js';
import Fueltank from './fueltank.js';
import Elevator from './elevator.js';
import Siderudder from './siderudder.js';

export default class Aeroplane {


    constructor(fueltank) {
        this.turbines = [];
        this.fueltank = fueltank;
        this.elevator = new Elevator();
        this.siderudder = new Siderudder();
    }

    accelerate(speed) {
        this.turbines.forEach(turbine => {
            turbine.accelerate(speed / 80);
        });
    }
    addTurbine(turbine) {
        this.turbines.push(turbine)
    }

    getFuelStatus() {
        return this.fueltank.getStatus();
    }

    up(degree) {
        
        if (!this.isPositive(degree)){
            return;
        }
        this.elevator.move(degree);
    }

    down(degree) {
        this.elevator.move(degree * (-1));
    }

    left(degree) {
        this.siderudder.move(degree);
    }
    right(degree) {
        this.siderudder.move(degree * (-1));
    }

    isPositive(value) {
        if (value >= 0) {
            return true;
        }
        else {
            return false;
        }

    }
    printFlightPosition() {
        console.log("Höhenruder:" + this.elevator.getStatus());
        console.log("Seitenruder:" + this.siderudder.getStatus());
    }
}