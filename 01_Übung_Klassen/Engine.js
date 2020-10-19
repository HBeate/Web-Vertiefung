export default class Engine {
    constructor(serialnumber) {
        this.serialnumber = serialnumber;
    }
    go() {
        console.log("Iam runnung " + this.serialnumber);
    }
}