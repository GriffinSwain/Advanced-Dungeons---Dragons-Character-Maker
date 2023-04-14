function saveStatsToLocalStorage(stats){
    //get current values that are saved into local storage
    //create an array of values to store into local storage
    let stat = getLocalStorage();

    //add new name to our favorites array
    stat.push(stats);

    //save updated array to local storage
    localStorage.setItem('Stats', JSON.stringify(stats));
}

function saveCharacterToLocalStorage(info){
    //get current values that are saved into local storage
    //create an array of values to store into local storage
    let characters = getLocalStorage();

    //add new name to our favorites array
    characters.push(info);

    //save updated array to local storage
    localStorage.setItem('Character', JSON.stringify(info));
}

function getLocalStorage(){
    //get all of the values that are stored in favorties and local storage
    let localStorageData = localStorage.getItem('Stats');

    if(localStorageData == null){
        return [];
    }

    return JSON.parse(localStorageData);
}

function removeFromLocalStorage(name){
    let statBlock = getLocalStorage();

    //Find the index of the name in local storage
    let statIndex = statBlock.indexOf(name);

    //Remove the name from the array using the splice method
    characters.splice(statIndex, 1);

    //Save our updated array to local storage
    localStorage.setItem('Stats', JSON.stringify(characters));
}

export {saveStatsToLocalStorage, saveCharacterToLocalStorage, getLocalStorage, removeFromLocalStorage};