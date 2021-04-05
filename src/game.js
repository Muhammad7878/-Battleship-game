"use strict"
let location1=3;
let location2=4;
let location3=5;

let guess;
let hits=0;
let guesses=0;

let isSunk = false;

document.addEventListener("DOMContentLoaded", ()=>{
  while(isSunk == false){
    guess = prompt("FEUER!!! (Gib eine Zahl zwischen 0-6): ")

    if(guess < 0 || guess > 6){
      alert("Bitte gib eine gültige Zahl an!")
    }else{
      guesses ++;
    }

    if(guess == location1 || guess == location2 || guess == location3){
      hits = hits + 1;
      alert("TREFFER");

            if(hits == 3){
              isSunk = true;
              alert ("Der Schiff wurde vernichtet!");
            }
  } else{
    alert("LOL... Versuchs noch Mal!!!")
  }
}
  let stats = "Du hast "+ guesses +" Versuche gebraucht, um das Schiff zu vernichten. Die Genauikgeit beträgt " + (3/guesses);
  alert(stats);
})
