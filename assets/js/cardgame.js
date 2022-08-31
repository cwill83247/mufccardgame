let score = 0;         /**let as needs to be changeable  */
const scoreCount = document.querySelector("#score-area");
const gameArea = document.querySelector("#card-game-area");
let timer; //had to declare timer here to stop negative numbers when it running as part of the start game as couldnt see timer as declared.
let countdownTimer = 10;  /**initial value - changed to 10 seconds for testing */
let cards;
const elGameFinishedText = document.getElementById("game-finished-text"); /**NOT WORKING AHHHHHHHHH */

function decreaseCounter(){
       /**!!!!!!!!!ONLY want this to run when game starts */                  /**had to set this as a variable so can use the clearInteval to stop negative numbers */

    const countdownElement =document.getElementById("countdown-timer")
    console.log(countdownTimer)
    countdownElement.textContent = ("Countdown Timer: " + countdownTimer)
    countdownTimer = countdownTimer -1;
    

    // this part is affecting my new game function when gets to 0 timer has been cleared do i just reset as aprt of new game ??  
    if (countdownTimer < 0) { //stop the setInterval when at 0
     console.log ("you have run out of time")   //need to stop user being able to play the game .. so remove event listener maybe and then a message start new game...
     clearInterval(timer)
     countdownElement.textContent = ("Sorry you have run out of time")  /**POSSIBLE DO THIS in Timer Area dependant on formatting */
     elGameFinishedText.setAttribute("overlay-text","visible");      /**NOT WORKING AHHHHHHHHH */
     //cards[playerCards].removeEventListener("click",turnCard)   DOESNT WORK  
     /**createPlayerCard.removeEventListener("click", turnCard)   DOESNT WORK ? **/  


    }

}

scoreCount.textContent = score;

//cards Array
const playerCards = [                  /**Array of all the Cards only 6 unique cards needed as will be having 12 in total too match */
    {
        playerName:"Cantona",
        playerImage: "assets/images/cantona-card.fw.png",
    },
    {
        playerName:"Rooney",
        playerImage: "assets/images/rooney-card.fw.png",
    },
    {
        playerName:"Scholes",
        playerImage: "assets/images/scholes-card.fw.png",
    },
    {
        playerName:"Cantona",
        playerImage: "assets/images/test-card.png",
    },
    {
        playerName:"Cantona",
        playerImage: "assets/images/test-card.png",
    },
    {
        playerName:"Cantona",
        playerImage: "assets/images/test-card.png",
    },
    {
        playerName:"Cantona",
        playerImage: "assets/images/cantona-card.fw.png",
    },
    {
        playerName:"Rooney",
        playerImage: "assets/images/rooney-card.fw.png",
    },
    {
        playerName:"Scholes",
        playerImage: "assets/images/scholes-card.fw.png",
    },
    {
        playerName:"Cantona",
        playerImage: "assets/images/test-card.png",
    },
    {
        playerName:"Cantona",
        playerImage: "assets/images/test-card.png",
    },
    {
        playerName:"Cantona",
        playerImage: "assets/images/test-card.png",
    }

] /**end of playerCards Array  */

//shuffle Cards
playerCards.sort (()=> 0.5 - Math.random())        /**this is randomising the order in which the cards display by putting them at different index points in the array **/

let selectedCards = []    /**empty array to hold the cards player has clicked so can compare */ 
let selectedCardsId = [] /*** creating empty array to hold the actual ID of !!!!!!! */
const cardGameArea = document.querySelector("#card-game-area")

//keep the score and update index page
function playerScore() {

    score = score +1
    const newScore = score
    console.log("new score:"+ newScore)
    document.getElementById("score-area").innerHTML = ("Cards Matched:" +newScore);

    
}

//create the inital game and add cards to the game area 
function createGameArea() {
    for (let i =0; i <12; i++) {     /*Start of for loop   i is the index number of the array **/
        const createPlayerCard = document.createElement("img")
        createPlayerCard.classList.add("player-card")                          /**adding CSS Class so we can style card  ****/
        createPlayerCard.setAttribute("src", "assets/images/front-card-face.fw.png")  
        createPlayerCard.setAttribute("card-id", i)                             /**adding a data-id attribute so we can call on it later  **/
        createPlayerCard.addEventListener("click", turnCard)            /**event listener for click, and the call back function turnCard is processed on "click"*/
        
        cardGameArea.appendChild(createPlayerCard)             /**adding each card to my player area */
        
        /*** document.getElementById("new-game").addEventListener("click",createGameArea())  - every time iterates adds more cards ***/ 
                
    }

}

/*createGameArea()  */   - /** this loads the game on start up   not sure want to do it like that may work better if have a start button  **/
decreaseCounter() /**WHY DOES REMOVING THIS GIVE ME a turnCard Undefined error --?  invoke timer is it really as time starts without it  ??? **/

function turnCard() {
    const selectedCardId = this.getAttribute("card-id")           /**get the id of the card that has been clicked using "card-id" */
    console.log (playerCards[selectedCardId].playerName)     /**passing in selectedcardid into the array and logging the playerName so can compare later */
    console.log ("I have clicked ",selectedCardId)
    selectedCards.push(playerCards[selectedCardId].playerName)           /**pushing whatever card(s) we select and adding the playername into our selectedCards array  need to do compare after 2 clicks  */
    selectedCardsId.push(selectedCardId)            /**pushing into the array the card-id  */
    console.log(selectedCards)
    console.log(selectedCardsId)
    this.setAttribute("src",playerCards[selectedCardId].playerImage)   /**set src image attribute , by using the selected card id, putting that into our array which then finds the image url */
         
        if (selectedCards.length ==2){    /*running checkmatch function if we have 2 cards  */
        //setTimeout(flipCardsBack(),3000) //or do I add the delay before the check match ???
        setTimeout(checkIfMatch, 800);               /**calling my check match function and adding a delay so can see both cards briefly  */    
        } //other wise carry on...back round... 
}
                                                         
 //checking for a Match

function checkIfMatch () {        /**moved to a function as need to call it multiple times  */
    /***   dont need this as added to turncard if (selectedCards.length ===2) {   /**do we have 2 cards in our selectedCards Array */
        
    const cards = document.querySelectorAll("#card-game-area img")  /** getting every image and storing in cards variable!!!!!!! */
    console.log(cards)
    console.log ("is this part working")
        /** if(selectedCards[0].playerName == selectedCards[1].playerName) {    - dont need to specify playerName as pushing the name into the SelectedCards Array and only info in the array is an id and the playersname **/        
        if(selectedCards[0] == selectedCards[1]) {
        console.log("its a match")
        playerScore()
        console.log(score)
        cards[selectedCardsId[0]].removeEventListener("click",turnCard)  
        cards[selectedCardsId[1]].removeEventListener("click",turnCard)  
        //*cards[selectedCards[1]].removeEventListener("click",turnCard)   needs to be the ID of the card --- for remove.event listener to work..**/

        }else 
        {
            console.log ("no match will now flip cards back after 3 second delay")
            console.log(this)              /**handy to see what is being logged when using this ***/
            console.log(selectedCards)   
            setTimeout(flipCardsBack,3000)   /**NOT WORKING need a delay before flipping cards back ideally adjustable so can add LEVELS **/               
           cards[selectedCardsId[0]].setAttribute("src", "assets/images/front-card-face.fw.png")  /**doesnt work saying its not a function had to change to cardsId */
           //POSSIBLY DELAY HERE AS WELL
           cards[selectedCardsId[1]].setAttribute("src", "assets/images/front-card-face.fw.png")  /**doesnt work saying its not a function had to change to cardsId  */
        
           console.log("I am here in the script")
            
        }
        selectedCards =[]                       //**setting Selected Cards back to blank NOT WORKING  **/
        selectedCardsId =[]  
        console.log (selectedCards)

    // checking if all cards have been matched
  
        if (score == playerCards.length/2)     /** maybe change score to cardsMatched or something more meaningful */
        console.log("All Cards Matched")    /**use textContent or innerhtml to write this back to html **/  
        elGameFinishedText.setAttribute("overlay-text","visible"); /**NOT WORKING AHHHHHHHHH */

        //DISPLAY A MESSAGE 
       

    }
    
   function flipCardsBack() {   //had to create so could use setTimeout
    
   console.log("I am here in the script")
   } 

   function startNewGame () {  
    playerCards.sort (()=> 0.5 - Math.random())  //every new game it needs to randomize.... 
    gameArea.innerHTML = "";  //clear existing game area  
    score = 0;
    scoreCount.innerHTML ="";  
    countdownTimer = 5;    //used 5 so i know this part is working POSSIBLY VARIABLE FOR LEVELS 30, 60, 90 Seconds 
    timer = setInterval(decreaseCounter, 1000); /*put it inside the decrease counter but doh it was calling itself  HOWEVER NOW RUNNING AT START UP moved inside new game so only starts when game starts */
    //now get negative numbers because timer is not defined ---- think the function decrease counter cant see it...
    //decreaseCounter() /***NOT WORKING IF TIME RUNS OUT  */
    console.log ("start button clicked") // works however not creating a new game...  do I need to refresh canvas or turn all cards back, ideally want to do a shuffle as well..  ??
    createGameArea();
}

