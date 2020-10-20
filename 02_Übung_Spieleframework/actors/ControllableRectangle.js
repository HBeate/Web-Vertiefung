import Actor from './Actor.js';
export default class ControllableRectangle extends Actor {

    constructor() {
        super();
        this.x = 20;
        this.y = 20;
        let that = this;
        document.addEventListener("keypress", function (key) {
            console.log(key);
            if (key.key === "w") {
                that.y -= 30;
            } else if (key.key === "s") {
                that.y += 30;
            } else if (key.key === "a") {
                that.x -= 30;
            } else if (key.key === "d") {
                that.x +=30;
             }
        })

    }
    render(context) {
        context.strokeRect(this.x, this.y, 30, 30);
    }
    update() {

    }
}