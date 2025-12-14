const headColors =[
    "#8d5524",
    "#e0ac69",
    "#4b3932",
    "#3c2e28",
    "#e95764",
    "#ecbcb4",
    "#c58c85",
    "#a1665e",
    "#503335",
    "#592f2a"
]

const hairStyles = [
    "a",
    "b",
    "c"
]

const clothesColors = [
    "#9b5de5",
    "#f15bb5",
    "#fee440",
    "#00bbf9",
    "#00f5d4"
]

let headIndex = 0;
let hairIndex = 0;
let clothesIndex = 0;

const headDisplay = document.querySelector(".headSlot");
const clothesDisplay = document.querySelector(".clothesSlot");

const headBack = document.querySelector(".head .backBtn");
const headNext = document.querySelector(".head .nextBtn");
const hairBack = document.querySelector(".hair .backBtn");
const hairNext = document.querySelector(".hair .nextBtn")
const clothesBack = document.querySelector(".clothes .backBtn");
const clothesNext = document.querySelector(".clothes .nextBtn");


headBack.addEventListener("click", prevHead);
headNext.addEventListener("click", nextHead);
hairBack.addEventListener("click", prevHair);
hairNext.addEventListener("click", nextHair);
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

function prevClothes(){
    clothesIndex = cycle(clothesColors, clothesIndex, -1);
    clothesDisplay.style.backgroundColor = clothesColors[clothesIndex];
}

function nextClothes(){
    clothesIndex = cycle(clothesColors, clothesIndex, 1);
    clothesDisplay.style.backgroundColor = clothesColors[clothesIndex];
}
