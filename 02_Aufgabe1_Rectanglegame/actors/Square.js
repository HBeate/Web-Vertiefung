
import Actor from './Actor.js';
export default class Square extends Actor {

    constructor(x = 180, y = 180) {
        super();
        this.x = x;
        this.y = y;
        let that = this;

        document.addEventListener("keypress", function (key) {
            console.log(key);
            if ((key.key === "i") && (that.y> 0)) {
                that.y -= 5;
            } else if ((key.key === "m") && (that.y<370)) {
                that.y += 5;
            } else if ((key.key === "j")&&(that.x >0)) {
                that.x -= 5;
            } else if ((key.key === "l")&&(that.x <370)) {
                that.x += 5;
            }
        })
    }

    render(context) {
        context.strokeRect(this.x, this.y, 30, 30)

    }
    update() {

    }


}