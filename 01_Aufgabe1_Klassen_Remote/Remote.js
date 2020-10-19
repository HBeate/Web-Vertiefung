import Battery from './Battery.js';
import Tv from './Tv.js';


export default class Remote {

    constructor() {
        this.isOn = false;
        this.batteries = [];
        this.statusTotal = 0;
        this.Tv = new Tv();
    }

    addBattery(battery) {
        this.batteries.push(battery);
    }

    turnOn() {
        // for loop über batterien - inUser()
        this.batteries.forEach(battery => {
            battery.inUse();
        });

    }

    hasPower() {

        var status = this.getStatusTotal();
        if (status >= 50) {
            return true;
        } else {
            return false;
        }

    }

    turnOff() {
        this.isOn = false;
        System.out.println("Remote is off.");
        return this.isOn;
    }

    getStatusTotal() {

        this.statusTotal = (this.batteries[0].getStatus() + this.batteries[1].getStatus()) / 2;

        console.log("Battery status total: " + this.statusTotal + "%");
        return this.statusTotal;
    }
    turnOnTv() {
        this.Tv.turnOn();
    }
}
