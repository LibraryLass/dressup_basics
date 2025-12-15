const headColors =[
    "#8d5524",
    "#e0ac69",
    "#4b3932",
    "#3c2e28",
    "#ecbcb4",
    "#c58c85",
    "#a1665e",
    "#503335",
    "#592f2a",
    "#fff"
]

const hairStyles = [
    "a",
    "b",
    "c"
]

const hairColors = [
    "#23120b",
    "#5a3825",
    "#7c0a02",
    "#b6652a",
    "#fbe7a1",
    "#5311ca",
    "#9dc667",
    "#c88693",
    "#edede0ff",
    "#888785",
    "#fff"
]

const clothesColors = [
    "pink",
    "red",
    "orange",
    "beige",
    "yellow",
    "lightgreen",
    "green",
    "darkgreen",
    "lightblue",
    "blue",
    "darkblue",
    "purple",
    "brown",
    "grey",
    "#fff"
]

let headIndex = 0;
let hairIndex = 0;
let hairCIndex = 0;
let clothesIndex = 0;

const headDisplay = document.querySelector(".headSlot");
const bodyA = document.querySelector(".bodyA");
const bodyB = document.querySelector(".bodyB");


const headBack = document.querySelector(".head .backBtn");
const headNext = document.querySelector(".head .nextBtn");

const hairBack = document.querySelector(".type .backBtn");
const hairNext = document.querySelector(".type .nextBtn");
const hairCBack = document.querySelector(".color .backBtn");
const hairCNext = document.querySelector(".color .nextBtn");

const clothesBack = document.querySelector(".clothes .backBtn");
const clothesNext = document.querySelector(".clothes .nextBtn");


headBack.addEventListener("click", prevHead);
headNext.addEventListener("click", nextHead);

hairBack.addEventListener("click", prevHair);
hairNext.addEventListener("click", nextHair);
hairCBack.addEventListener("click", prevHairC);
hairCNext.addEventListener("click", nextHairC);

clothesBack.addEventListener("click", prevClothes);
clothesNext.addEventListener("click", nextClothes);

function cycle(array, index, direction) {
    return (index + direction + array.length) % array.length;
}

function updateHair(){
    headDisplay.classList.remove(...hairStyles);
    headDisplay.classList.add(hairStyles[hairIndex]);
}

function prevHead(){
    headIndex = cycle(headColors, headIndex, -1);
    headDisplay.style.backgroundColor = headColors[headIndex];    
}

function nextHead(){
    headIndex = cycle(headColors, headIndex, 1)
    headDisplay.style.backgroundColor = headColors[headIndex];
}

function prevHair(){
    hairIndex = cycle(hairStyles, hairIndex, -1);
    updateHair();
}

function nextHair(){
    hairIndex = cycle(hairStyles, hairIndex, 1);
    updateHair();
}

function prevHairC(){
    hairCIndex = cycle(hairColors, hairCIndex, -1);
    headDisplay.style.setProperty("--hair-color", hairColors[hairCIndex]);
    headDisplay.style.setProperty("--skin-tone", headColors[headIndex])
}

function nextHairC(){
    hairCIndex = cycle(hairColors, hairCIndex, 1);
    headDisplay.style.setProperty("--hair-color", hairColors[hairCIndex]);
    headDisplay.style.setProperty("--skin-tone", headColors[headIndex])

}

function prevClothes(){
    clothesIndex = cycle(clothesColors, clothesIndex, -1);
    bodyA.style.backgroundColor = clothesColors[clothesIndex];
    bodyB.style.backgroundColor = clothesColors[clothesIndex];
}

function nextClothes(){
    clothesIndex = cycle(clothesColors, clothesIndex, 1);
    bodyA.style.backgroundColor = clothesColors[clothesIndex];
    bodyB.style.backgroundColor = clothesColors[clothesIndex];
}
