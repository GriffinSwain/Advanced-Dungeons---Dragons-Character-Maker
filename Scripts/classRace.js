import { saveCharacterToLocalStorage, getLocalStorage, removeFromLocalStorage } from './localStorage.js';

let data;
data = getLocalStorage();
console.log(data);
let choice = data.length - 1;

let backButton = document.getElementById("backButton");

let injectHere = document.getElementById("injectHere");
let injectHere2 = document.getElementById("injectHere2");

let selectedClass = document.getElementById("selectedClass");
let selectedRace = document.getElementById("selectedRace");
let strengthStat = document.getElementById("strengthStat");
let dexterityStat = document.getElementById("dexterityStat");
let constitutionStat = document.getElementById("constitutionStat");
let intelligenceStat = document.getElementById("intelligenceStat");
let wisdomStat = document.getElementById("wisdomStat");
let charismaStat = document.getElementById("charismaStat");

let characterClass = "";
let characterRace = "";

let strength = 0;
let dexterity = 0;
let constitution = 0;
let intelligence = 0;
let wisdom = 0;
let charisma = 0;

let lastRace = "";

let fighter = false;
let paladin = false;
let ranger = false;
let mage = false;
let specalist = false;
let cleric = false;
let druid = false;
let thief = false;
let bard = false;

let dwarf = false;
let elf = false;
let gnome = false;
let halfelf = false;
let halfling = false;

StatGetter();
ClassDisplay();

backButton.addEventListener('click', function () {
    window.location = '../index.html';
})

function StatGetter() {
    strength = data[0];
    dexterity = data[1];
    constitution = data[2];
    intelligence = data[3];
    wisdom = data[4];
    charisma = data[5];
    strengthStat.textContent = strength;
    dexterityStat.textContent = dexterity;
    constitutionStat.textContent = constitution;
    intelligenceStat.textContent = intelligence;
    wisdomStat.textContent = wisdom;
    charismaStat.textContent = charisma;
}

function ClassDisplay() {
    if (strength >= 9) fighter = true;
    if (strength >= 12 && constitution >= 9 && wisdom >= 13 && charisma >= 17) paladin = true;
    if (strength >= 9 && dexterity >= 13 && constitution >= 14 && wisdom >= 14) ranger = true;
    if (intelligence >= 9) mage = true;
    if (wisdom >= 9) cleric = true;
    if (wisdom >= 12 && charisma >= 15) druid = true;
    if (dexterity >= 9) thief = true;
    if (dexterity >= 12 && intelligence >= 13 && charisma >= 15) bard = true;

    let fighterBtn = document.createElement("Button");
    fighterBtn.innerText = "Fighter";
    fighterBtn.className = "btn btn-danger mt-1";
    fighterBtn.addEventListener("click", function () {
        characterClass = "fighter";
        selectedClass.innerText = "Fighter";
        AppendClass();
        RaceDisplay();
    })
    let paladinBtn = document.createElement("Button");
    paladinBtn.innerText = "Paladin";
    paladinBtn.className = "btn btn-danger mt-1";
    paladinBtn.addEventListener("click", function () {
        characterClass = "paladin";
        selectedClass.innerText = "Paladin";
        AppendClass();
        RaceDisplay();
    })
    let rangerBtn = document.createElement("Button");
    rangerBtn.innerText = "Ranger";
    rangerBtn.className = "btn btn-danger mt-1";
    rangerBtn.addEventListener("click", function () {
        characterClass = "ranger";
        selectedClass.innerText = "Ranger";
        AppendClass();
        RaceDisplay();
    })
    let mageBtn = document.createElement("Button");
    mageBtn.innerText = "Mage";
    mageBtn.className = "btn btn-primary mt-1";
    mageBtn.addEventListener("click", function () {
        characterClass = "mage";
        selectedClass.innerText = "Mage";
        AppendClass();
        RaceDisplay();
    })
    let clericBtn = document.createElement("Button");
    clericBtn.innerText = "Cleric";
    clericBtn.className = "btn btn-success mt-1";
    clericBtn.addEventListener("click", function () {
        characterClass = "cleric";
        selectedClass.innerText = "Cleric";
        AppendClass();
        RaceDisplay();
    })
    let druidBtn = document.createElement("Button");
    druidBtn.innerText = "Druid";
    druidBtn.className = "btn btn-success mt-1";
    druidBtn.addEventListener("click", function () {
        characterClass = "druid";
        selectedClass.innerText = "Druid";
        AppendClass();
        RaceDisplay();
    })
    let thiefBtn = document.createElement("Button");
    thiefBtn.innerText = "Thief";
    thiefBtn.className = "btn btn-secondary mt-1";
    thiefBtn.addEventListener("click", function () {
        characterClass = "thief";
        selectedClass.innerText = "Thief";
        AppendClass();
        RaceDisplay();
    })
    let bardBtn = document.createElement("Button");
    bardBtn.innerText = "Bard";
    bardBtn.className = "btn btn-secondary mt-1";
    bardBtn.addEventListener("click", function () {

        characterClass = "bard";
        selectedClass.innerText = "Bard";
        AppendClass();
        RaceDisplay();
    })

    AppendClass();

    function AppendClass() {

        injectHere.innerHTML = "";
        characterRace = "";
        selectedRace.innerText = "";
        lastRace = "";

        if (fighter) injectHere.appendChild(fighterBtn);
        if (paladin) injectHere.appendChild(paladinBtn);
        if (ranger) injectHere.appendChild(rangerBtn);
        if (mage) injectHere.appendChild(mageBtn);
        if (cleric) injectHere.appendChild(clericBtn);
        if (druid) injectHere.appendChild(druidBtn);
        if (thief) injectHere.appendChild(thiefBtn);
        if (bard) injectHere.appendChild(bardBtn);

    }
}


function RaceDisplay() {

    injectHere2.innerHTML = "";

    switch (characterClass) {
        case "fighter":
            dwarf = true;
            elf = true;
            gnome = true;
            halfelf = true;
            halfling = true;
            break;
        case "paladin":
            dwarf = false;
            elf = false;
            gnome = false;
            halfelf = false;
            halfling = false;
            break;
        case "ranger":
            dwarf = false;
            elf = true;
            gnome = false;
            halfelf = true;
            halfling = false;
            break;
        case "mage":
            dwarf = false;
            elf = true;
            gnome = false;
            halfelf = true;
            halfling = false;
            break;
        case "cleric":
            dwarf = true;
            elf = true;
            gnome = true;
            halfelf = true;
            halfling = true;
            break;
        case "druid":
            dwarf = false;
            elf = false;
            gnome = false;
            halfelf = true;
            halfling = false;
            break;
        case "thief":
            dwarf = true;
            elf = true;
            gnome = true;
            halfelf = true;
            halfling = true;
            break;
        case "bard":
            dwarf = false;
            elf = false;
            gnome = false;
            halfelf = true;
            halfling = false;
            break;
    }
    
    if (strength < 8 || constitution < 11) dwarf = false;
    if (dexterity < 6 || constitution < 7 || intelligence < 8 || charisma < 8) elf = false;
    if (strength < 6 ||  constitution < 8 || intelligence < 6) gnome = false;
    if (dexterity < 6 ||  constitution < 6 || intelligence < 4) halfelf = false;
    if (strength < 7 || dexterity < 7 || constitution < 10 || intelligence < 6) halfling = false;

    let dwarfBtn = document.createElement("Button");
    dwarfBtn.innerText = "Dwarf";
    dwarfBtn.className = "btn btn-secondary mt-1";
    dwarfBtn.addEventListener("click", function () {
        selectedRace.innerText = "Dwarf"
        RacialStats("dwarf");
    })
    let elfBtn = document.createElement("Button");
    elfBtn.innerText = "Elf";
    elfBtn.className = "btn btn-success mt-1";
    elfBtn.addEventListener("click", function () {
        selectedRace.innerText = "Elf"
        RacialStats("elf");
    })
    let gnomeBtn = document.createElement("Button");
    gnomeBtn.innerText = "Gnome";
    gnomeBtn.className = "btn btn-info mt-1";
    gnomeBtn.addEventListener("click", function () {
        selectedRace.innerText = "Gnome"
        RacialStats("gnome");
    })
    let halfelfBtn = document.createElement("Button");
    halfelfBtn.innerText = "Half-elf";
    halfelfBtn.className = "btn btn-primary mt-1";
    halfelfBtn.addEventListener("click", function () {
        selectedRace.innerText = "Half-Elf";
        RacialStats("halfelf");
    })
    let halflingBtn = document.createElement("Button");
    halflingBtn.innerText = "Halfling";
    halflingBtn.className = "btn btn-warning mt-1";
    halflingBtn.addEventListener("click", function () {
        selectedRace.innerText = "Halfling";
        RacialStats();
    })
    let humanBtn = document.createElement("Button");
    humanBtn.innerText = "Human";
    humanBtn.className = "btn btn-danger mt-1";
    humanBtn.addEventListener("click", function () {
        selectedRace.innerText = "Human";
        RacialStats("human");
    })

    if (dwarf) injectHere2.appendChild(dwarfBtn);
    if (elf) injectHere2.appendChild(elfBtn);
    if (gnome) injectHere2.appendChild(gnomeBtn);
    if (halfelf) injectHere2.appendChild(halfelfBtn);
    if (halfling) injectHere2.appendChild(halflingBtn);
    injectHere2.appendChild(humanBtn);

}

function RacialStats(race) {

    switch (race) {
        case "dwarf":
            constitution++;
            charisma--;
            break;
        case "elf":
            dexterity++;
            constitution--;
            break;
        case "gnome":
            intelligence++;
            wisdom--;
            break;
        case "halfling":
            dexterity++;
            strength--;
            break;
        default:
            break;
    }

    switch (lastRace) {
        case "dwarf":
            constitution--;
            charisma++;
            break;
        case "elf":
            dexterity--;
            constitution++;
            break;
        case "gnome":
            intelligence--;
            wisdom++;
            break;
        case "halfling":
            dexterity--;
            strength++;
            break;
        default:
            break;
        }

            characterRace = race;
            lastRace = race;

    strengthStat.textContent = strength;
    dexterityStat.textContent = dexterity;
    constitutionStat.textContent = constitution;
    intelligenceStat.textContent = intelligence;
    wisdomStat.textContent = wisdom;
    charismaStat.textContent = charisma;
}