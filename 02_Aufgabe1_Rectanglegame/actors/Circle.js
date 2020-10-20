import Actor from './Actor.js';

export default class Circle extends Actor {

    constructor(x = 190, y = 50) {
        super();
        this.x = x;
        this.y = y;
    }

    render(context) {
        context.beginPath();
        context.arc(this.x, this.y, 20, 0 * Math.PI, 2 * Math.PI);
        context.stroke();//stroke ist ohne FÜllung - fill mit
    }

    update() {
        console.log("circle update");
        if (this.y < 410){
            this.y ++;
        }
        else {
            this.y=10;
        }



        

    }
}
