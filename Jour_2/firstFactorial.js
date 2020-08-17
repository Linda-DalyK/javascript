

function firstFactorial(num) {
    var result = 1

    for (var i = 1; i <= num; i = i + 1) {
        
        result = result*(i+1)
        
        console.log(result)
    }

    return result
}

console.log(firstFactorial(4))

//i++
//i = i + 1