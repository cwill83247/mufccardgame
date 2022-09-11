/**
 * @jest-environment jsdom
 */

let jestTest;
let startNewGame;
let createGameArea;
let playerScore;
let score;

/**used Mocking to create an simulated environment to test DOM */
 beforeAll(() => {
    let fs = require("fs");
    let fileContents = fs.readFileSync("index.html", "utf-8");
    document.open();
    document.write(fileContents);
    document.close();

    jestTest = require("./cardgame.js").jestTest;   
    startNewGame = require("./cardgame.js").startNewGame; 
    createGameArea = require("./cardgame.js").createGameArea; 
    playerScore = require("./cardgame.js").playerScore; 
    score = require("./cardgame.js").score; 
    
});

    /**test jest is working */
    describe("Cards Tests", () => {
        describe("check number of cards created", () => {
            test("should return 12", () => {
                expect(jestTest()).toBe(12);
            });
        });
    });

  
  describe("testing a new Game being started", () => {
    describe("check score is reset to 0", () => {
        test("should return 0", () => {
            expect(startNewGame()).toBe(0);
        });
    });
    
});
 
beforeEach(() => {
    document.getElementById.innerHTML = "<div id=score-area></div>" ;
    document.getElementById.innerHTML = "<p id=countdown-timer></div>" ;
 });

describe("testing DOM makng sure elements set as expected", () => {
    test("expect number of cards matched to equal 1", () => {
        playerScore();
        expect(document.getElementById("score-area").innerHTML).toEqual("Cards Matched:1");
    });

    test("expect countdown timer to equal 60", () => {
        startNewGame();
        expect(document.getElementById("countdown-timer").innerHTML).toEqual("Countdown Timer: 60");
    });
});


//testing number of cards = 12 
beforeAll(() => {
    document.getElementById.innerHTML = "<div id=score-area></div>" ;
 });

 