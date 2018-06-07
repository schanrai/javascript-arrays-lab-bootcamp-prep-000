
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

kittens =[];
kittens =["Milo", "Otis", "Garfield"];

function destructivelyPrependKitten(name){
  kittens.unshift(name);
  return kittens;
}

kittens =[];
kittens =["Milo", "Otis", "Garfield"];

/*function destructivelyRemoveLastKitten(kittens){
  kittens.pop();
  return kittens;
}*/

array=[1,2,3];
function destructivelyRemoveElementFromEndOfArray(array){
  array.pop();
  return array;
}
