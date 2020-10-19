export default class Battery {

    constructor(chargingStatus= 100) {
        this.chargingStatus = chargingStatus;
    }

    inUse() {
        if (this.chargingStatus >= 10) {
            this.chargingStatus -= 10;
        }
    }

    getStatus() {
        return this.chargingStatus;
    }
}