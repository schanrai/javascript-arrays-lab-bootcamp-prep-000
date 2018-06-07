
var kittens =["Milo", "Otis", "Garfield"];
//const app = "I don't do much.";
const initKittens =["Milo", "Otis", "Garfield"];


//function initKittens(){
//var kittens =["Milo", "Otis", "Garfield"];
//}

function destructivelyAppendKitten(name){
  kittens.push(name);
  return kittens;
}


/*function destructivelyPrependKitten(name){
  kittens.unshift(name);
  return kittens;
}*/

kittens =[];
var kittens =["Milo", "Otis", "Garfield"];

function destructivelyRemoveLastKitten(kittens){
  kittens.pop();
  return kittens;
}