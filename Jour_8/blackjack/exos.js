var voiture = {
    marque: 'Mercedes',
    modele: {
        a: 'v-8',
        b: 'Class A',
        c: 'trop cher'},
    annee: new Date('2015-08-08'),
    pneu : [ 1,2,3,4],
}


// Challenge 5 
// Ajouter un nouvelle attribut drive à l'objet 'voiture' de type fonction qui renvoie un string disant 
// 'Je conduit une voiture de marque' + le nom de la marque de la voiture


var arr2 = arr.map( function (elem) {
    elem.iDrive = elem.firstName + ' '+ elem.surname
        return elem;
        
    }
    )
    
    console.log(arr2);