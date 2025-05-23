import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
let randomCard = () => {
// let classCard =["Corazones", "Picas", "Tréboles" ,"Diamantes"];
// let randomClassCard = classCard [Math.floor(Math.random()*4)];
let number = [2,3,4,5,6,7,8,9,10,"Rey","Reina","jota","Az"];
let randomNumber = number [Math.floor(Math.random()*13)];

// let randomFinal = `${randomClassCard} ${randomNumber}`;
// return randomFinal
return randomNumber
}

document.getElementById("aleatorio").innerHTML = randomCard ()

let hola = () => {

let classCard =["Corazones", "Picas", "Tréboles" ,"Diamantes"];
let randomClassCard = classCard [Math.floor(Math.random()*4)];

return randomClassCard
}

document.getElementById("card-palo").innerHTML = hola ()

};