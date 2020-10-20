import Actor from "./Actor.js";

export default class Rectangle extends Actor {
    direction = 0;
    constructor(x = 50, y = 50) {
        super();
        this.x = x;
        this.y = y;
    }
    render(context) {
        context.fillRect(this.x, this.y, 10, 10);
    }

    update() {

        if (this.direction === 0) {
            this.x++;
        } else {
            this.x--;
        }

        if (this.x > 390) {
            this.direction = 1;
            this.x = 389;

        }
        if (this.x < 0) {
            this.direction = 0;
            this.x = 1;
        }
    }
}