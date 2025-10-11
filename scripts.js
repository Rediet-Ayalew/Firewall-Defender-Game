const filepaths =["Amazon.png","FuneralCall.png", "spamcall.webp", "Scam.jpg","Paypal.png"];
// Function to get a random filepath from the array and not use the same file again in the same round. 

// instialization of variables
let Score = 0;
const totalRound = 5;
let round =1;
let usedThisRound =[];
let currentImage= "";
let timeLeft = 5;
let timeInterval;
let roundActive=false; 

// randomize the images and get a new images every time "Click" or "Trick" is clicked
function getRandomImage() {
    const randomIndex = Math.floor(Math.random() * filepaths.length);
    console.log(randomIndex, filepaths[randomIndex])

    if (usedThisRound.includes(filepaths[randomIndex])){
        return getRandomImage();
    }else {
        usedThisRound.push(filepaths[randomIndex]);
        return filepaths[randomIndex]
    }
}

// Fucntion to display random images
function displayImage(imageName){
    document.getElementById("gameImage").src=imageName;
    currentImage=imageName;
}

// start a new round
function startRound(){
    clearInterval(timeInterval);
    usedThisRound =[]
    const image= getRandomImage();
    displayImage(image);
    timeLeft =5;
    roundActive=true;
    timeInterval = setInterval(updateTimer, 1000)
}

// a function for ending a game
function endGame() {
    clearInterval(timeInterval);
    roundActive=false;
    console.log('Game ended');
    
    let message=""; // initialization of a message to display one of the following cases
    if(Score >= 18 && Score <= 25) {
        document.getElementById("messageText").innerText = `Keep up the good work`;
    } else if (Score >= 10 && Score < 18) {
        document.getElementById("messageText").innerText = `You have to get more practice`;
    } else {
        document.getElementById("messageText").innerText = `You are at risk of getting scammed`;
    }

    showEndGameModal(message);
}

// Show final score and let the player the game is over
function showEndGameModal(message) {
    const modal = document.getElementById("endGameModal");
    const modalMessage = document.getElementById("modalMessage");
    const finalScore = document.getElementById("finalScore");
    
    finalScore.innerText = `Final Score: ${Score}`;
    modalMessage.innerText = message;
    modal.style.display = "flex";
}

// To start a new game
function restartGame() {
    document.getElementById("endGameModal").style.display = "none";
    
    // Reset 
    Score = 0;
    round = 1;
    usedThisRound = [];
    currentImage = "";
    timeLeft = 5;
    roundActive = false; 
    document.getElementById("score").innerText = `Score: 0`;
    document.getElementById("messageText").innerText = "Game Started!";
    startRound();
}

// timer function

function updateTimer(){
    document.getElementById("timerDisplay").innerText = `Timer:00:${timeLeft<=0?"00":timeLeft<10?"0"+ timeLeft : timeLeft}`;
    timeLeft--;
    if(timeLeft < 0){
        clearInterval(timeInterval);
        if(!roundActive) return;
        round++;
        if(round > totalRound){ // if round > 5 then return the scores and display the respective messages
            if(Score>=18 && Score<=25 ){
              document.getElementById("messageText").innerText = `Keep up the good work`;
           }else if (Score>= 10 && Score< 18){
              document.getElementById("messageText").innerText = `You have to get more pratice`;
            }else {
               document.getElementById("messageText").innerText = `You are at risk of getting scammed`;
            }
        }else{
           startRound();
        }
    }
}



Scam = ["FuneralCall.png", "spamcall.webp", "Scam.jpg"]; 
Safe = ["Amazon.png","Paypal.png"];
function handleUserChoice(userChoice) {
    if (!roundActive) return; 
    roundActive = false;
    clearInterval(timeInterval); 
    
        if (userChoice === "Click") {
            if (Safe.includes(currentImage)) {
                Score += 5;
                document.getElementById("score").innerText = `Score: ${Score}`;
                document.getElementById("messageText").innerText = `Correct! It is legit.+5 point.`;
            } else {
                Score -= 2;
                document.getElementById("score").innerText = `Score: ${Score}`;
                document.getElementById("messageText").innerText = `Wrong! It is a scam.-2 point.`;
            }
        } else if (userChoice === "Trick") {
            if (Scam.includes(currentImage)) {
                Score += 5;
                document.getElementById("score").innerText = `Score: ${Score}`;
                document.getElementById("messageText").innerText = `Correct! It is a scam.+5 point.`;
            } else {
                Score -= 2;
                document.getElementById("score").innerText = `Score: ${Score}`;
                document.getElementById("messageText").innerText = `Wrong! It is legit.-2 point.`;
            }
        }
        round++;
        if(round >totalRound){
           endGame();
           return;
        }else{
        startRound();
        }
}
startRound(); // start the first round when the page loads


