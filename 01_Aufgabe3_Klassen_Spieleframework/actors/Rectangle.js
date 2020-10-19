import Actor from "./Actor.js";

export default class Rectangle extends Actor {

    constructor(x=50, y=50) {
        super();
        this.x = x;
        this.y = y;
    }

    render(context) {
        context.fillRect(this.x, this.y, 10, 10);
    }

    update() {
this.x += 10;

// if (x>100){}
    }

}