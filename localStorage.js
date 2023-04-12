function saveToLocalStorage(stats){
    //get current values that are saved into local storage
    //create an array of values to store into local storage
    let characters = getLocalStorage();

    //add new name to our favorites array
    characters.push(stats);

    //save updated array to local storage
    localStorage.setItem('Characters', JSON.stringify(characters));
}

function getLocalStorage(){
    //get all of the values that are stored in favorties and local storage
    let localStorageData = localStorage.getItem('Characters');

    if(localStorageData == null){
        return [];
    }

    return JSON.parse(localStorageData);
}

function removeFromLocalStorage(name){
    let characters = getLocalStorage();

    //Find the index of the name in local storage
    let nameIndex = characters.indexOf(name);

    //Remove the name from the array using the splice method
    characters.splice(nameIndex, 1);

    //Save our updated array to local storage
    localStorage.setItem('Characters', JSON.stringify(characters));
}

export {saveToLocalStorage, getLocalStorage, removeFromLocalStorage};