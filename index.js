
var kittens =["Milo", "Otis", "Garfield"];
//const app = "I don't do much.";
const initKittens =["Milo", "Otis", "Garfield"];


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

function destructivelyRemoveLastKitten(){
  kittens.pop();
  return kittens;
}


kittens =[];
kittens =["Milo", "Otis", "Garfield"];

function destructivelyRemoveFirstKitten(){
  kittens.shift();
  return kittens;
}

function appendKitten(kittens,name){
  return[...kittens,name];
}

