
const Game = require("./Game")

describe('Game', () => {
    const game = new Game();
    test('score ok', () => {
        expect(game.getScore()).toBeLessThanOrEqual(100);
    })        
})

it('works', () => {
    const game = new Game();
    game.roll(1);
    expect(game.extraRoll).toBeLessThanOrEqual(3);
});

it('works', () => {
    const game = new Game();
    game.roll(10);
    expect(game.extraRoll).toBeLessThanOrEqual(3);
});

it('works', () => {
    const game = new Game();
    game.roll(4);
    expect(game.pins).toBeLessThanOrEqual(10);
});