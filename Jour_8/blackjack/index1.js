// je crée une fonction pour définir le score de départ de la banque qui est entre 16 et 21, 
// score qui reste caché


function randomNumber(max) {
    return Math.floor(Math.random() * (21 - 16) + 16);
}

console.log(randomNumber(21))

var scoreBank = randomNumber(21)

// 1. si le joueur tire une carte entre 1 et 11, on ajoute la valeur à son score.
// si après cet ajout, son score > 21, il reçoit un msg qui lui indique qu'il a perdu
// et on lui dévoile le score de la banque

// 2. il peut passer son tour si son score actuel est > 16 ===> fin de la partie

var prompt = require("prompt")


prompt.start();

function displayPrompt() {

    var scorePlayer = 0
    var scoreBank = randomNumber(21)

    prompt.get({ name: "q", description: "Card ?" }, function (
        err,
        result
    ) {

        if (result.q = 'y') {
            function randomNumber(max) {
                return Math.floor(Math.random() * (11 - 1) + 1);
            }

            var card = randomNumber(11)

            if (scorePlayer > 16) {
                console.log("End of the game");
            } else if (card > 1 && card < 11); {
                scorePlayer = scorePlayer + card
                console.log("Your score is" + ' ' + scorePlayer)
            } else if (scorePlayer > 21) {
                console.log("the bank has" + ' ' + scoreBank + ' ' + 'you loose')
            }
            // displayPrompt()

            else if (scorePlayer > 21) {
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
