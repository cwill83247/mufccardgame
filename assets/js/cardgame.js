/*jshint esversion: 6 */

let score = 0;         
const scoreCount = document.querySelector("#score-area");
const gameArea = document.querySelector("#card-game-area");
let timer; 
let countdownTimer = 60;  
const elGameFinishedText = document.getElementById("game-finished-text"); 
const modalText = document.getElementById("modal-text");

function jestTest() {
    return 12;
}

function decreaseCounter(){
      
    const countdownElement =document.getElementById("countdown-timer");
    countdownElement.textContent = ("Countdown Timer: " + countdownTimer);
    countdownTimer = countdownTimer -1;    
   
    if (countdownTimer < 0) {         
        clearInterval(timer); 
        countdownElement.textContent = ("Sorry you have run out of time");  
        modal.style.display = "block";  
        modalText.textContent = ("Sorry you have run out of time, you matched " + score + " pair(s).");
     
     }     
}

scoreCount.textContent = score;

//cards Array 6 unique cards
const playerCards = [             
    {
        playerName:"Casemiro",
        playerImage: "assets/images/casemiro-b.jpg",
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
        playerName:"Sancho",
        playerImage: "assets/images/jadon-sancho-mufc-ucl.jpg",
    },
    {
        playerName:"Ronaldo",
        playerImage: "assets/images/ronaldo2.jpeg",
    },
    {
        playerName:"Fernandes",
        playerImage: "assets/images/fernades.jpg",
    },
    {
        playerName:"Casemiro",
        playerImage: "assets/images/casemiro-b.jpg",
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
        playerName:"Sancho",
        playerImage: "assets/images/jadon-sancho-mufc-ucl.jpg",
    },
    {
        playerName:"Ronaldo",
        playerImage: "assets/images/ronaldo2.jpeg",
    },
    {
        playerName:"Fernandes",
        playerImage: "assets/images/fernades.jpg",
    }
]; 

//shuffle Cards
playerCards.sort (()=> 0.5 - Math.random());       

let selectedCards = [];    
let selectedCardsId = []; /**empty array to hold ID of card */
const cardGameArea = document.querySelector("#card-game-area");

//keep the score and update 
function playerScore() {
    score = score +1;
    const newScore = score;
    console.log("new score:"+ newScore);
    document.getElementById("score-area").innerHTML = ("Cards Matched:" +newScore);    
}

//create the inital game and add cards to the game area 
function createGameArea() {
    for (let i =0; i <12; i++) {     
        const createPlayerCard = document.createElement("img");
        createPlayerCard.classList.add("player-card");                          
        createPlayerCard.setAttribute("src", "assets/images/front-card-face.fw.png") ; 
        createPlayerCard.setAttribute("card-id", i);                            
        createPlayerCard.addEventListener("click", turnCard);           
        cardGameArea.appendChild(createPlayerCard) ;                   
    }
}

decreaseCounter(); 

function turnCard() {
    const selectedCardId = this.getAttribute("card-id");           
    console.log (playerCards[selectedCardId].playerName);    
    selectedCards.push(playerCards[selectedCardId].playerName);           
    selectedCardsId.push(selectedCardId);            
    this.setAttribute("src",playerCards[selectedCardId].playerImage);   
       
    if (selectedCards.length ==2){          
        setTimeout(checkIfMatch, 600);              
    } 
}
                                                      
 //checking for a Match
function checkIfMatch () {     
    const cards = document.querySelectorAll("#card-game-area img");  
             
    if((selectedCards[0] == selectedCards[1]) && (selectedCardsId[0] !== selectedCardsId[1])) {  //making sure cant double click to get a score.... 
        console.log("its a match");
        playerScore();
        cards[selectedCardsId[0]].removeEventListener("click",turnCard); 
        cards[selectedCardsId[1]].removeEventListener("click",turnCard);  
        
        }else 
        {
        setTimeout(flipCardsBack,2000);         
        cards[selectedCardsId[0]].setAttribute("src", "assets/images/front-card-face.fw.png");  
        cards[selectedCardsId[1]].setAttribute("src", "assets/images/front-card-face.fw.png");           
        }

        selectedCards =[];                      
        selectedCardsId =[];  
        console.log (selectedCards);

    // checking if all cards have been matched
  
        if (score === playerCards.length/2) {    
        console.log("All Cards Matched");   
        modal.style.display = "block"; 
        modalText.textContent = ("Congratulations -  ALL " + score + " pairs matched ");
        clearInterval(timer);
        
    }
}
    
function flipCardsBack() {       
   console.log("delayingflippingCardsBack");
   } 

function startNewGame () {  
    playerCards.sort (()=> 0.5 - Math.random());  
    gameArea.innerHTML = "";  
    score = 0;
    scoreCount.innerHTML ="";  
    countdownTimer = 60;    
    timer = setInterval(decreaseCounter, 1000); 
    createGameArea();
    return score;
}

//w3 schools modal JavaScript

var modal = document.getElementById("myModal");
var btn = document.getElementById("myBtn");
var span = document.getElementsByClassName("close")[0];
btn.onclick = function() {
  modal.style.display = "block";
};

span.onclick = function() {
  modal.style.display = "none";
};

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

module.exports = {jestTest,startNewGame,createGameArea,playerScore};

