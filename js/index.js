
const Game = require("./Game")
let play = new Game();

for (let i = 1; i <= 10 + play.extraRoll; i++) {
    play.frame = i;
    let pins = Math.floor(Math.random() * 10) + 1;
    play.roll(pins);
}

// 3h per studiare jest e testare il funzionamento sulla classe base  -> ok
// 2h per implementare le funzioni con i test