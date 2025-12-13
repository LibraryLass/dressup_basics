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

const clothesColors = [
    "#9b5de5",
    "#f15bb5",
    "#fee440",
    "#00bbf9",
    "#00f5d4"
]

let headIndex = 3;
let clothesIndex = 1;
const headDisplay = document.querySelector(".headSlot");
const clothesDisplay = document.querySelector(".clothesSlot");

const headBack = document.querySelector(".head .backBtn");
const headNext = document.querySelector(".head .nextBtn");
const clothesBack = document.querySelector(".clothes .backBtn");
const clothesNext = document.querySelector(".clothes .nextBtn");


headBack.addEventListener("click", prevHead);
headNext.addEventListener("click", nextHead);
clothesBack.addEventListener("click", prevClothes);
clothesNext.addEventListener("click", nextClothes);


function prevHead(){
    headIndex = (headIndex - 1 + headColors.length) % headColors.length;
    headDisplay.style.backgroundColor = headColors[headIndex];    
}

function nextHead(){
    headIndex = (headIndex + 1) % headColors.length;
    headDisplay.style.backgroundColor = headColors[headIndex];
}

function prevClothes(){
    clothesIndex = (clothesIndex - 1 + clothesColors.length) % clothesColors.length;
    clothesDisplay.style.backgroundColor = clothesColors[clothesIndex];
}

function nextClothes(){
    clothesIndex = (clothesIndex + 1) % clothesColors.length;
    clothesDisplay.style.backgroundColor = clothesColors[clothesIndex];
}
