import Fueltank from './fueltank.js';

export default class Turbine {
    constructor(fuelTank) {
        this.intensity = 0;
        this.fuelTank = fuelTank;
    }

    accelerate(intensity) {
        this.intensity = intensity;
        this.fuelTank.use(1 * intensity);
    }
}