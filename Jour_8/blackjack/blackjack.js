function randomNumber(max) {
    return Math.floor(Math.random() * (21 - 16) + 16);
}
console.log(randomNumber(21))


var scoreBank = randomNumber(21)

var prompt = require("prompt")

prompt.start();

function displayPrompt() {

    var scorePlayer = 0
    var scoreBank = randomNumber(21)
    var card = function randomNumber(max) {
        return Math.floor(Math.random() * (11 - 1) + 1)
    }

    prompt.get({ name: "q", description: "Card?" }, function (
        err,
        result
    ) {

        if (result.q = 'y') {
            if (scorePlayer > 16) {
                console.log("End of the game");
            } else if (card > 1 && card < 11) {
                scorePlayer = scorePlayer + card
                console.log("Your score is" + ' ' + scorePlayer);
            } else if (scorePlayer > 21) {
                console.log("the bank has" + ' ' + scoreBank + ' ' + "You loose");
            } else if (scorePlayer > 21) {
                console.log("You lost");
                displayPrompt()
            } else if (scorePlayer === 21) {
                console.log("BlackJack! you win!")
                displayPrompt()
            } else if (scorePlayer > scoreBank) {
                console.log("The Bank had" + ' ' + scoreBank + ! +' ' + "You beat the Bank!You win!")
                displayPrompt()
            } else if (scorePlayer < scoreBank) {
                console.log("The Bank had" + ' ' + scoreBank + ' ' + "You lost")
                displayPrompt()
            } else (scorePlayer === scoreBank)
            console.log("The Bank had" + ' ' + scoreBank + ' ' + "You lost")


        };
    })
}
displayPrompt()





















