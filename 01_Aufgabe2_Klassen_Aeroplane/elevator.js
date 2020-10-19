export default class Elevator {
    constructor(degrees = 180) {
        this.degrees = degrees;
    }
    move(amount) {
        this.degrees += amount;
    }
    getStatus(){
        return this.degrees;
    }
}