//  4//11/2023      Griffin P
// I am planning on making an Advanced Dungeons & Dragons character creator
// The steps I need to code out are
/*
   To begin, the user will need to choose their stat rolling method when beginning to create their character.
   Either roll 3d6, or 4d6 minus the lowest roll six times to determine their stats.
   Either have them "rolled-down" or have the player choose which stats get which rolls
   When the stats are determined, the player will choose from the classes/multiclasses that their character can be (based on their stats)
        > If a character can chose a class, but only play as a certain race (they need a racial stat buff), they can choose that class but only those races
            > Vice-versa for classes that lose the stats required due to racial stat decreases
   They will then choose the race that their character is (based on their class)
   Their stats will be adjusted based on their race
*/

import {saveStatsToLocalStorage, getLocalStorage, removeFromLocalStorage} from './localStorage.js';


let rollButton = document.getElementById("rollButton");
let rollDownButton = document.getElementById("rollDownButton");
let statChoiceButton = document.getElementById("statChoiceButton");
let threeDiceButton = document.getElementById("threeDiceButton");
let fourDiceButton = document.getElementById("fourDiceButton");
let continueButton = document.getElementById("continueButton");

let statDisplay = document.getElementById("statDisplay");

let strengthText = document.getElementById("strengthText");
let dexterityText = document.getElementById("dexterityText");
let constitutionText = document.getElementById("constitutionText");
let intelligenceText = document.getElementById("intelligenceText");
let wisdomText = document.getElementById("wisdomText");
let charismaText = document.getElementById("charismaText");

let strengthStat = document.getElementById("strengthStat");
let dexterityStat = document.getElementById("dexterityStat");
let constitutionStat = document.getElementById("constitutionStat");
let intelligenceStat = document.getElementById("intelligenceStat");
let wisdomStat = document.getElementById("wisdomStat");
let charismaStat = document.getElementById("charismaStat");

let tempStat = [];
let chooseStats = [];
let finishedStats = new Array(6);
let arrayPosition = 0;
let strength = 0;
let dexterity = 0;
let constitution = 0;
let intelligence = 0;
let wisdom = 0;
let charisma = 0;
let selectedClass = "";
let rollDown = true;
let threeDice = true;
let continueCheck = false;



rollDownButton.addEventListener('click', function(){
    rollDown = true;
    rollDownButton.className = "btn btn-primary";
    statChoiceButton.className = "btn btn-dark";
})

statChoiceButton.addEventListener('click', function(){
    rollDown = false;
    statChoiceButton.className = "btn btn-success";
    rollDownButton.className = "btn btn-dark";
})

threeDiceButton.addEventListener('click', function(){
    threeDice = true;
    threeDiceButton.className = "btn btn-danger";
    fourDiceButton.className = "btn btn-dark";
})

fourDiceButton.addEventListener('click', function(){
    threeDice = false;
    fourDiceButton.className = "btn btn-warning";
    threeDiceButton.className = "btn btn-dark";   
})

rollButton.addEventListener('click', function(){
    strength = 0;
    dexterity = 0;
    constitution = 0;
    intelligence = 0;
    wisdom = 0;
    charisma = 0;
    statDisplay.innerText = "";
    strengthStat.innerText = "";
    dexterityStat.innerText = "";
    constitutionStat.innerText = "";
    intelligenceStat.innerText = "";
    wisdomStat.innerText = "";
    charismaStat.innerText = "";
    StatTotal();
    rollButton.textContent = "Reroll Stats";
})

strengthText.addEventListener('click', function(){
    if (strength == 0){
        strengthStat.innerText = chooseStats[arrayPosition];
        strength = chooseStats[0];
        finishedStats[0] = strengthStat.textContent;
        continueCheck = true;
        FinishCheck()
    }
})


dexterityText.addEventListener('click', function(){
    if (dexterity == 0){
        dexterityStat.innerText = chooseStats[arrayPosition];
        dexterity = chooseStats[0];
        FinishCheck()
    }
})

constitutionText.addEventListener('click', function(){
    if (constitution == 0){
        constitutionStat.innerText = chooseStats[arrayPosition];
        constitution = chooseStats[0];
        FinishCheck()
    }
})

intelligenceText.addEventListener('click', function(){
    if (intelligence == 0){
        intelligenceStat.innerText = chooseStats[arrayPosition];
        intelligence = chooseStats[0];
        FinishCheck()
    }
})

wisdomText.addEventListener('click', function(){
    if (wisdom == 0){
        wisdomStat.innerText = chooseStats[arrayPosition];
        wisdom = chooseStats[0];
        FinishCheck()
    }
})

charismaText.addEventListener('click', function(){
    if (charisma == 0){
        charismaStat.innerText = chooseStats[arrayPosition];
        charisma = chooseStats[0];
        console.log(arrayPosition);
        console.log(chooseStats[arrayPosition])
        FinishCheck()
    }
})

continueButton.addEventListener('click', function(){
    if (continueCheck){
        finishedStats[0] = strength;
        finishedStats[1] = dexterity;
        finishedStats[2] = constitution;
        finishedStats[3] = intelligence;
        finishedStats[4] = wisdom;
        finishedStats[5] = charisma;
        console.log(finishedStats);
        saveStatsToLocalStorage(finishedStats);
        window.location = '/Pages/classChoice.html';
    } 
})

function FinishCheck(){
        chooseStats.shift();
        console.log (chooseStats);
        statDisplay.innerText = chooseStats;
        if(strength != 0 && dexterity != 0 && constitution != 0 && intelligence != 0 && wisdom != 0 && charisma != 0){
            continueButton.className = "btn btn-success";
            continueCheck = true;
        } 
}

function StatRoller(){
    tempStat = [];
    let statCounter = 0;
    if (threeDice){
        statCounter = (Math.ceil(Math.random(5) * 6)) + (Math.ceil(Math.random(5) * 6)) + (Math.ceil(Math.random(5) * 6))
    }else{
        let statArray = [(Math.ceil(Math.random(5) * 6)), (Math.ceil(Math.random(5) * 6)), (Math.ceil(Math.random(5) * 6)) ,(Math.ceil(Math.random(5) * 6))]
        console.log(statArray);
        statArray.sort();
        statArray.shift();
        statCounter = statArray[0] + statArray[1] + statArray[2];
        console.log(statArray);
    }
    console.log(statCounter);
   return statCounter;
}


function StatTotal(){
    let i = 0;
    let tempStat = [];
    statDisplay.innerText = "";
    if (rollDown){
        strengthStat.innerText = StatRoller();
        dexterityStat.innerText = StatRoller();
        constitutionStat.innerText = StatRoller();
        intelligenceStat.innerText = StatRoller();
        wisdomStat.innerText = StatRoller();
        charismaStat.innerText = StatRoller();
        continueButton.className = "btn btn-success";
        strength = strengthStat.textContent;
        dexterity = dexterityStat.textContent;
        constitution = constitutionStat.textContent;
        intelligence = intelligenceStat.textContent;
        wisdom = wisdomStat.textContent;
        charisma = charismaStat.textContent;
        continueCheck = true;
    }else{
        while (i < 6){
            tempStat.push(StatRoller());
            i++;
        }
        continueButton.className = "btn btn-dark"
        continueCheck = false;
        statDisplay.innerText = tempStat;
        chooseStats = tempStat;
        console.log(chooseStats);
    }
}