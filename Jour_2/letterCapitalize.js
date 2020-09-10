function letterCapitalizeRegex(str) {
    var arrSentence = str.split(' ');
    var result = [];
    var fisrtLetter = '';
    var restOfWord = ''; 

    for (i = 0; i < arrSentence.length; i++) {

        firstLetter= arrSentence[i].substr(0,1).toUpperCase();
        restOfWord = arrSentence[i].substr(1,arrSentence[i].length);

        result.push (firstLetter + restOfWord);


    }
    return result.join(' ');
}
console.log(letterCapitalizeRegex('what a wonderful world'))
// console.log(firstLetter)


