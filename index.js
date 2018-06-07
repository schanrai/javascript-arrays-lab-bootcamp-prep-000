const kittens =["Milo", "Otis", "Garfield"];
//const app = "I don't do much.";

function initKittens(){
var kittens =["Milo", "Otis", "Garfield"];

}

function destructivelyAppendKitten(name){
  kittens.push(name);
  return kittens;
}

function destructivelyPrependKitten(name){
  kittens.unshift(name);
  return kittens;
}


function destructivelyRemoveLastKitten(kittens){
  kittens.pop();
  return kittens;
}