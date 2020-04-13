const choices = document.querySelectorAll('.choice');
const score = document.getElementById('score');
const result = document.getElementById('result');
const restart = document.getElementById('restart');
const modal = document.querySelector('.modal');
const foot = document.getElementById('foot');
const scoreboard = {
    player: 0,
    computer: 0
}

// play game
function play(e) {
    restart.style.display = 'inline-block';
    foot.style.display = 'block';
    const playerChoice = e.target.id;
    const computerChoice = getComputerChoice();
    const winner = getWinner(playerChoice, computerChoice);
    showWinner(winner, computerChoice);
}

function getComputerChoice(){
    const rand = Math.random();

    if(rand < 0.34) {
        return 'rock';
    } else if(rand <= 0.64) {
        return 'scissors';
    } else {
        return 'paper';
    }
}

function getWinner(p, c) {
    if(p == c){
        return 'draw';
    } else if (p != c) {
        if((p == 'scissors' && c == 'paper') || (p == 'rock'&& c == 'scissors') || (p == 'paper' && c == 'rock')){
            return 'player';
        } else 
            if((c == 'scissors' && p == 'paper') || (c == 'rock'&& p == 'scissors') || (c == 'paper' && p == 'rock')){
                return 'computer';
        }
    }
}


function showWinner(winner, computerChoice) {
    if(winner == 'player') {
        scoreboard.player++;
        result.innerHTML = `
            <h1 class="text-win">You Win</h1>
            <i class="fas fa-hand-${computerChoice} fa-10x"></i>
            <p>Computer Chose <strong>${computerChoice.charAt(0).toUpperCase() +
                computerChoice.slice(1)}</strong></p>
        `;
    }
    else if(winner == 'computer') {
        scoreboard.computer++;
        result.innerHTML = `
            <h1 class="text-lose">You Lose</h1>
            <i class="fas fa-hand-${computerChoice} fa-10x"></i>
            <p>Computer Chose <strong>${computerChoice.charAt(0).toUpperCase() +
                computerChoice.slice(1)}</strong></p>
        `;
    } 
    else {
        result.innerHTML = `
            <h1>It's A Draw</h1>
            <i class="fas fa-hand-${computerChoice} fa-10x"></i>
            <p>Computer Chose <strong>${computerChoice.charAt(0).toUpperCase() +
                computerChoice.slice(1)}</strong></p>
        `;
    }

    score.innerHTML = `
        <p>Player: ${scoreboard.player}</p>
        <p>Computer: ${scoreboard.computer}</p>
    `;
    modal.style.display = 'block';
}
function clearModal(e) {
    if(e.target == modal) {
        modal.style.display = 'none';
    }
}

//restart game
function restartGame() {
    scoreboard.player = 0;
    scoreboard.computer = 0;
    score.innerHTML = `
    <p>Player: 0</p>
    <p>Computer:0</p>
    `;
    restart.style.display = 'none';
    foot.style.display = 'none';

}

// Event listener
choices.forEach(choice => choice.addEventListener('click', play));
window.addEventListener('click', clearModal);
restart.addEventListener('click', restartGame);