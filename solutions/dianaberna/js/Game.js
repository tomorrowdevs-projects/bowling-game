
module.exports = class Game {
    constructor(){
        this.pins = 0;          // count pins for the current play
        this.score = 0;         // total score
        this.frame = 0;         // max 10 frames
        this.extraRoll = 0;     // max +3 extra rolls
        this.precPins = 0;
    }

    roll(pins){
        this.precPins = this.pins;
        this.pins = pins;
        this.score += this.pins;

        console.log("frame ",this.frame," pins = ",this.pins," precpins = ",this.precPins, "score = ",this.score, " extraroll = ",this.extraRoll);

        if(this.extraRoll <= 1 && this.extraRoll >= 0){
            //strike
            if(this.pins == 10 ) {
                this.extraRoll += 2;
                console.log("strike (actual pins ",pins," - prec pins ",this.precPins," ) extraroll = ",this.extraRoll)
                return
            }
            //spare
            if(this.pins + this.precPins == 10){
                this.extraRoll += 1;
                console.log("spares (actual pins ",pins," - prec pins ",this.precPins," ) extraroll = ",this.extraRoll)
            }      
        }
        
    }

    getScore(){
        return this.score;
    }
}