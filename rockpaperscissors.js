//random selector function

// const randomSelector = (fruits) => {
// const randomNum = Math.floor(Math.random() * fruits.length)
// return fruits[randomNum]
// } 

// let fruits = ['banana','apple','orange','pear']
// console.log(randomSelector(fruits));
let computer = {
    currentChoice : null
};

let player = {
    currentChoice: null
};

const gameChoices = ['ROCK','PAPER', 'SCISSORS']

let rockDiv = document.getElementById('Rock')
let paperDiv = document.getElementById('Paper')
let scissorsDiv = document.getElementById('Scissors')


rockDiv.onclick = () => {
playerRock()
rockClick()}

paperDiv.onclick = () =>{ 
playerPaper()
paperClick()}

scissorsDiv.onclick = () =>{
playerScissors()
scissorClick()}

function playerRock() {
    player.currentChoice = gameChoices[0];
    console.log(player.currentChoice);
    compareChoices()
}

function playerPaper() {
    player.currentChoice = gameChoices[1];
    console.log(player.currentChoice);
    compareChoices()
}

function playerScissors() {
    player.currentChoice = gameChoices[2];
    console.log(player.currentChoice);
    compareChoices()
}


// rockDiv.onclick = setTimeout(function(){
//     computerChoices();
// }, 3000)

function computerChoices() {
        const randomChoice = Math.floor(Math.random() * gameChoices.length);
        computer.currentChoice = gameChoices[randomChoice]
        console.log(computer.currentChoice);
    }

function compareChoices() {
    computerChoices();
    if (computer.currentChoice === player.currentChoice) {
        console.log(`It's a tie! The player and computer both chose ${computer.currentChoice}`);
        tieScore();
    } else if (player.currentChoice === gameChoices[1]) {
        if (computer.currentChoice === gameChoices[0]) {
            console.log(`Player wins! Player chose ${player.currentChoice} and the computer chose ${computer.currentChoice}`);
            playerScore();
           
        } else {
            console.log(`Computer wins! Player chose ${player.currentChoice} and the computer chose ${computer.currentChoice}`);
            computerScore();
        }
    } else if (player.currentChoice === gameChoices[0]) {
        if(computer.currentChoice === gameChoices[2]) {
            console.log(`Player wins! Player chose ${player.currentChoice} and the computer chose ${computer.currentChoice}`);
            playerScore();
        } else {
            console.log(`Computer wins! Player chose ${player.currentChoice} and the computer chose ${computer.currentChoice}`);
            computerScore();
        }
    } else if (player.currentChoice === gameChoices[2]){
        if(computer.currentChoice === gameChoices[1]){
            console.log(`Player wins! Player chose ${player.currentChoice} and the computer chose ${computer.currentChoice}`);
            playerScore();
        } else {
            console.log(`Computer wins! Player chose ${player.currentChoice} and the computer chose ${computer.currentChoice}`);
            computerScore();
    }
    }
}



const tieScore = () =>{
    let tie = document.getElementById('tieScores');
    let text = tie.textContent;
    let num4 = parseInt(text) +1;
    tieScores.innerHTML = num4
}

const playerScore = () =>{
    let player = document.getElementById('playerScores');
    let text = player.textContent;
    let num1 = parseInt(text) +1;
    playerScores.innerHTML = num1
}

const computerScore = () =>{
    let computer = document.getElementById('computerScores');
    let text = computer.textContent;
    let num3 = parseInt(text) +1;
    computerScores.innerHTML = num3
}

const rockClick = () =>{
    let countBox1 = document.getElementById('counter1');
    let text = countBox1.textContent;
    let num = parseInt(text) +1;
    counter1.innerHTML = num;
}

const paperClick = () =>{
    let countBox2 = document.getElementById('counter2');
    let text = countBox2.textContent;
    let num1 = parseInt(text) +1;
    counter2.innerHTML = num1;
}

const scissorClick = () =>{
    let countBox3 = document.getElementById('counter3');
    let text = countBox3.textContent;
    let num = parseInt(text) +1;
    counter3.innerHTML = num;
}



document.getElementById('clearScore').onclick = () =>{
    document.getElementById('counter1').innerText='0';
    document.getElementById('counter2').innerText='0';
    document.getElementById('counter3').innerText='0';
    document.getElementById('playerScores').innerText='0';
    document.getElementById('computerScores').innerText='0';
    document.getElementById('tieScores').innerText='0';
    console.clear();
}
