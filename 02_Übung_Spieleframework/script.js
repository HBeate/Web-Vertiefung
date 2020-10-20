

import ControllableRectangle from './actors/ControllableRectangle.js';
import Rectangle from './actors/Rectangle.js';
const actors = [];

actors.push(new Rectangle(10, 10));
actors.push(new Rectangle(50, 50));
actors.push(new ControllableRectangle());

const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");

setInterval(function () {
    context.clearRect(0,0,400,400);
    actors.forEach(actor => {
        actor.update();
        actor.render(context);


    });


}, 10);



