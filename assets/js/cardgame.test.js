/**
 * @jest-environment jsdom
 */

/**boilerPlate script as part of JEST  */
let jestTest;

let startNewGame;



 beforeAll(() => {
    let fs = require("fs");
    let fileContents = fs.readFileSync("index.html", "utf-8");
    document.open();
    document.write(fileContents);
    document.close();

    jestTest = require("./cardgame.js").jestTest; 
    startNewGame = require("./cardgame.js").startNewGame; 
    
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
            expect(startNewGame()).toBe(0);
        });
    });
});
   
    