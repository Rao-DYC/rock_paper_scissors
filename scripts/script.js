function getComputerChoice() {
    const arr = ['Rock', 'Paper', 'Scissors'];
    const index = Math.floor(Math.random() * arr.length);
    return arr[index];
}

function getUserChoice() {
    return prompt('Please type Rock, Paper or Scissors.');
}

function playGame(roundWinner) {
    const computer = getComputerChoice().toLowerCase();
    const user = getUserChoice().toLowerCase();

    console.log([computer, user]);

    return getResult(computer, user, roundWinner);
}

function getResult(computer, user, roundWinner) {
    if (user === computer) {
        // return `It's a tie.`
    } else if (
        (user === 'paper' && computer === 'rock') ||
        (user === 'scissors' && computer === 'paper') ||
        (user === 'rock' && computer === 'scissors')
    ) {
        // return `${user.charAt(0).toUpperCase() + user.slice(1)} beats ${computer.charAt(0).toUpperCase() + computer.slice(1)}. You win!`;
        roundWinner.man++;
    } else if (
        (computer === 'paper' && user === 'rock') ||
        (computer === 'scissors' && user === 'paper') ||
        (computer === 'rock' && user === 'scissors')
    ) {
        // return `${computer.charAt(0).toUpperCase() + computer.slice(1)} beats ${user.charAt(0).toUpperCase() + user.slice(1)}. You loose!`;
        roundWinner.machine++;
    } else {
        // return `Wrong input given.`;
    }
    return roundWinner;
}

function roundGame(id) {
    const roundWinner = { machine: 0, man: 0 };
    for (let index = 0; index < 5; index++) {
        playGame(roundWinner);
    }
    if (roundWinner.machine > roundWinner.man) {
        // console.log(`You loose by ${roundWinner.man} : ${roundWinner.machine}`);
        let text = `You loose by ${roundWinner.man} : ${roundWinner.machine}`;
        id.innerText = text;
    } else if (roundWinner.man > roundWinner.machine) {
        // console.log(`You won by ${roundWinner.man} : ${roundWinner.machine}`);
        let text = `You won by ${roundWinner.man} : ${roundWinner.machine}`;
        id.innerText = text;
    }
}
document.addEventListener('DOMContentLoaded', (event) => {
    let id = document.querySelector('#announce-winner');
    roundGame(id);
});