export default class Fueltank {

    constructor(fuelStatus) {
        this.fuelStatus = fuelStatus;
    }

    use(amount){
        this.fuelStatus -= amount;
    }

    getStatus() {
        return this.fuelStatus;
    }
}