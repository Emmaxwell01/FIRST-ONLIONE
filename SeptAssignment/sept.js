// function rollDice() {

//     let diceNumber = Math.floor(Math.random() * 6) + 1;

//     document.getElementById("dice").setAttribute(
//         "src",
//         "images/dice" + diceNumber + ".png"
//     );
// }

// rollDice();

// document.getElementById("roll").addEventListener("click", rollDice);

let showButton = document.getElementById("showButton");
let hideButton = document.getElementById("hideButton");

let box = document.getElementById("myBox");

showButton.onclick = function() {
    box.style.display = "block";
};

hideButton.onclick = function() {
    box.style.display = "none";
};
