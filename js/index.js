
const Game = require("./Game")
let play = new Game();

for (let i = 1; i <= 10 + play.extraRoll; i++) {
    play.frame = i;
    let pins = Math.floor(Math.random() * 10) + 1;
    play.roll(pins);
}

// 3h study jest and testing basics function  -> ok
// 1.5h for implement all js functions