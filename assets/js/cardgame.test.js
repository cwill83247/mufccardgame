/**
 * @jest-environment jsdom
 */
/**boilerPlate script as part of JEST  */
 beforeAll(() => {
    let fs = require("fs");
    let fileContents = fs.readFileSync("index.html", "utf-8");
    document.open();
    document.write(fileContents);
    document.close();
});
const jestTest = require("./cardgame.js"); 

    /**I want to test cards that are created */
    describe("Cards Tests", () => {
        describe("check number of cards created", () => {
            test("should return 12", () => {
                expect(jestTest.length.toBe(12));
            });
        });
    });
    