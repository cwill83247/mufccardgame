const playerCards = [                  /**Array of all the Cards only 6 unique cards needed as will be having 12 in total too match */
    {
        playerName:"Cantona",
        playerImage: "/assets/images/cantona-card.fw.png",
    },
    {
        playerName:"Rooney",
        playerImage: "/assets/images/rooney-card-fw.png",
    },
    {
        playerName:"Scholes",
        playerImage: "/assets/images/scholes-card.fw.png",
    },
    {
        playerName:"Cantona",
        playerImage: "/assets/images/test-card.png",
    },
    {
        playerName:"Cantona",
        playerImage: "/assets/images/test-card.png",
    },
    {
        playerName:"Cantona",
        playerImage: "/assets/images/test-card.png",
    },
    {
        playerName:"Cantona",
        playerImage: "/assets/images/cantona-card.fw.png",
    },
    {
        playerName:"Rooney",
        playerImage: "/assets/images/rooney-card-fw.png",
    },
    {
        playerName:"Scholes",
        playerImage: "/assets/images/scholes-card.fw.png",
    },
    {
        playerName:"Cantona",
        playerImage: "/assets/images/test-card.png",
    },
    {
        playerName:"Cantona",
        playerImage: "/assets/images/test-card.png",
    },
    {
        playerName:"Cantona",
        playerImage: "/assets/images/test-card.png",
    }

] /**end of playerCards Array  */
playerCards.sort (()=> 0.5 - Math.random())        /**this is randomising the order in which the cards display by putting them at different index points in the array **/

const cardGameArea = document.querySelector("#card-game-area")

function createGameArea() {
    for (let i =0; i <12; i++) {     /*Start of for loop    **/
        const createPlayerCard = document.createElement("img")
        createPlayerCard.setAttribute("src", "assets/images/front-card-face.fw.png")  
        createPlayerCard.setAttribute("data-id", i)                             /**adding a data-id attribute so we can call on it later  **/
        cardGameArea.appendChild(createPlayerCard)
        
    }

}

createGameArea();
