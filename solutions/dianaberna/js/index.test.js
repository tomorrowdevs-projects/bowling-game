
const Game = require("./Game")

describe('the game score should be less than 100', () => {
    const game = new Game();
    test('score ok', () => {
        expect(game.getScore()).toBeLessThanOrEqual(100);
    }) 

    test('the number of pins should be less than 10', () => {
        game.roll(4);
        expect(game.pins).toBeLessThanOrEqual(10);
    });

    test('if I do not strike or spare I should not have extra rolls', () => {
        expect(game.extraRoll).toBe(0);
        game.roll(5);
        expect(game.extraRoll).toBe(0);
    });
    
    test('if I strike I should have 2 extra rolls', () => {
        game.extraRoll = 0;
        game.roll(10);
        expect(game.extraRoll).toBe(2);
    });
    
    test('if I strike I should have a number of extra rolls less than or equal to 3', () => {
        game.roll(10);
        expect(game.pins).toBe(10);
        expect(game.extraRoll).toBeLessThanOrEqual(3);
    });
    
    test('if I do spare I should have an extra roll', () => {
        game.extraRoll = 0;
        game.roll(4);
        expect(game.extraRoll).toBe(0);
        game.roll(6);
        expect(game.extraRoll).toBe(1);
        expect(game.pins + game.precPins).toBe(10);
    });
    
})


