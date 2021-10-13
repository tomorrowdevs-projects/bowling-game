
module.exports = class Game {
    constructor(){
        this.pins = 0;          // count pins for the current play
        this.score = 0;         // total score
        this.frame = 0;         // max 10 frames
        this.extraRoll = 0;     // max +3 extra rolls
    }

    roll(pins){
        let precPins = this.pins;
        this.pins = pins;
        this.score += this.pins;
        
        if(this.pins == 10){
            console.log("strike (actual pins ",pins," - prec pins ",precPins," )")
            this.extraRoll += ((this.extraRoll <= 3) ? 2 : 0);
        }
        if(this.pins + precPins == 10){
            console.log("spares (actual pins ",pins," - prec pins ",precPins," )")
            this.extraRoll += ((this.extraRoll <= 3) ? 1 : 0);
        }

        console.log("frame ",this.frame," - pins = ",this.pins, "score = ",this.score);
    }

    getScore(){
        return this.score;
    }
}