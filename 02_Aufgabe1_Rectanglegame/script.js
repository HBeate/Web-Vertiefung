


import Actor from './actors/Actor.js';
import Circle from './actors/circle.js';
import Rectangle from './actors/Rectangle.js';
import Square from './actors/Square.js';

const actors = [];
actors.push(new Rectangle(370, 30));
actors.push(new Circle());
actors.push(new Square());

const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");

setInterval(function () {   // bessere Methode wäre requestAnimationFrame
    context.clearRect(0, 0, 400, 400);
    actors.forEach(actor => {
        actor.update();
        actor.render(context);
    });

}, 1);



