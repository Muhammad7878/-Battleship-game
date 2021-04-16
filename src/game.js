"use strict"

// Multiplying Math.random with 5 to get a random Number between 0 and 4.99.
//Math.floor to round it.
let randomLoc = Math.floor(Math.random()*5);
let location1=randomLoc;
let location2=location1 + 1;
let location3=location2 + 1;

let guess;
let hits=0;
let guesses=0;
let hitLocations = [];

let isSunk = false;

let view = {
  // Displaying a message

  displayMessage : function(message){
    let msgArea = document.getElementById("messageArea");
    msgArea.innerHTML = message;
  },

  displayHit : function(location){

    let cell = document.getElementById(location);
    cell.setAttribute("class","hit");

  },

  displayMiss : function(location){
    let cell = document.getElementById(location);
    cell.setAttribute("class","miss");
  }
}


// ----------SHIPS----------

let ship1={locations:["10","20","30"],hits:["","",""]}
let ship2={locations:["32","33","34"],hits:["","",""]}
let ship3={locations:["63","64","65"],hits:["","","hit"]}

// document.addEventListener("DOMContentLoaded", ()=>{
//   while(isSunk == false){
//     guess = prompt("FEUER!!! (Gib eine Zahl zwischen 0-6): ")
//
//     if(guess < 0 || guess > 6){
//       alert("Bitte gib eine gültige Zahl an!")
//     }else{
//       guesses ++;
//       hitLocations.push(guess);
//     }
//
//     if(guess == location1 || guess == location2 || guess == location3){
//        hits = hits + 1;
//        alert("TREFFER");
//
//          if(hits == 3){
//              isSunk = true;
//              alert ("Der Schiff wurde vernichtet!");
//            }
//     } else{
//        alert("LOL... Versuchs noch Mal!!!")
//     }
//
// }
//   let stats = "Du hast "+ guesses +" Versuche gebraucht, um das Schiff zu vernichten. Die Genauikgeit beträgt " + (3/guesses);
//   alert(stats);
// })
