
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

function appendKitten(name){
  return[...kittens,name];
}


function prependKitten(name){
  return[name,...kittens];
}

function removeLastKitten(){
  return kittens.slice(0, kittens.length-1);
}

function removeLastKitten(){
  return kittens.slice(1);
}
