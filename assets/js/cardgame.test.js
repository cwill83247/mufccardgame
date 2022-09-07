/**
 * @jest-environment jsdom
 */

/**boilerPlate script as part of JEST  */
let jestTest;
let startNewGame;
let createGameArea;
let playerScore;



/**used Mocking to create an simulated environment to test DOM */
 beforeAll(() => {
    let fs = require("fs");
    let fileContents = fs.readFileSync("index.html", "utf-8");
    document.open();
    document.write(fileContents);
    document.close();

    jestTest = require("./cardgame.js").jestTest;   //advised by student support
    startNewGame = require("./cardgame.js").startNewGame; 
    createGameArea = require("./cardgame.js").createGameArea; 
    playerScore = require("./cardgame.js").playerScore; 
    
});


    /**I want to test cards that are created */
    describe("Cards Tests", () => {
        describe("check number of cards created", () => {
            test("should return 12", () => {
                expect(jestTest()).toBe(12);
            });
        });
    });

  /**I want to test when a new game starts */
  describe("new Game", () => {
    describe("check score is reset to 0", () => {
        test("should return 0", () => {
            expect(startNewGame(score)).toBe(0);
        });
    });
    describe("check number of cards", () => {
        test("should return 12", () => {
            const i =0;
            createGameArea();
            expect(i()).toBe(12);
        });
    });
});
 
//testing number of matched cards getting displayed

beforeEach(() => {
    document.getElementById.innerHTML = "<div id=score-area></div>" ;
 });

describe("testing DOM", () => {
    test("expect number of cards matched to equal 1", () => {
        const newScore = 1;
        playerScore();
        expect(document.getElementById("score-area").innerHTML).toEqual("Cards Matched:1");
    });
});
//end of section number of matched cards getting displayed