
var countX = 0;
var countO = 0;

function exOh(str) {
    for (i = 0; i < str.length; i++) {

        if (str.charAt(i) == 'x') {
            countX = countX + 1;
        } else if (str.charAt(i) == 'o') {
            countO = countO + 1;
        }
    }

    if (countX === countO) {
        return true;
    } else {
        return false;
    }
}

console.log(exOh('xoxoxoxoxoxoxo'))





