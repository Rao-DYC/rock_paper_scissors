function getComputerChoice() {
    const arr = ['Rock', 'Paper', 'Scissors'];
    const index = Math.floor(Math.random() * arr.length);
    return arr[index];
}

function getUserChoice() {
    return prompt('Please type Rock, Paper or Scissors.');
}

function playGame() {
    const computer = getComputerChoice().toLowerCase();
    const user = getUserChoice().toLowerCase();

    console.log([computer, user]);
    if (user === computer) {
        return `It's a tie.`
    } else if (
        (user === 'paper' && computer === 'rock') || 
        (user === 'scissors' && computer === 'paper') || 
        (user === 'rock' && computer === 'scissors')
    ) {
        return `${user.charAt(0).toUpperCase() + user.slice(1)} beats ${computer.charAt(0).toUpperCase() + computer.slice(1)}. You win!`;
    } else if (
        (computer === 'paper' && user === 'rock') || 
        (computer === 'scissors' && user === 'paper') || 
        (computer === 'rock' && user === 'scissors')
    ) {
        return `${computer.charAt(0).toUpperCase() + computer.slice(1)} beats ${user.charAt(0).toUpperCase() + user.slice(1)}. You win!`;
    } else {
        return `Wrong input given.`;
    }
}

console.log(playGame());