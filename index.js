function writeCards(names = [], eventName){
    const thankYouNotes = [];

    for (let i = 0; i < names.length; i++){
        thankYouNotes.push(`Thank you, ${names[i]}, for the wonderful ${eventName} gift!`);
    }
    return thankYouNotes;
}

function countDown(i){
    while (i >= 0){
        console.log(i)
        i--;
    }
}


