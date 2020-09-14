var arr = [{
    firstName: 'Daniel',
    surname: 'Beckham'
}, {
    firstName: 'David',
    surname: 'Craig'
}]

    var arr2 = arr.map( function (elem) {
    
        // var arr2 = array.map(function(currElement, index, arrayInitial) {
        //     currElement['fullname'] = currElement['firstName'] + ' ' + currElement['surname']
        //     return currElement
        // })
        // console.log("fullName :"  + " " + full)
        elem.fullname = elem.firstName + ' '+ elem.surname
        return elem;
        
    }
    )
    
    console.log(arr2);


    

    // var arr2 = array.map(function(currElement, index, arrayInitial) {
        //     var nvxObj = {
        //         firstName: 'Daniel',
        //         surName: currElement.surname,
        //         fullname: currElement.firstName + ' ' + currElement.surname
        //     }
        //     return nvxObj
        // })
        // console.log(arr2)
        // ------ deuxième exemple -------------
        // var arr2 = array.map(function(currElement, index, arrayInitial) {
        //     currElement['fullname'] = currElement['firstName'] + ' ' + currElement['surname']
        //     return currElement
        // })
        // console.log(arr2)
        