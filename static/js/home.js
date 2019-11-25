// Challenge 1: age in days.

function ageInDays(){
    let age = prompt('what year were you born?');
    let days = (2019 - age) * 365;
    let h1 = document.createElement('h1');
    let textArea = document.createTextNode('You are '+days+' days old');
    h1.setAttribute('id', 'ageInDays');
    h1.appendChild(textArea);
    document.getElementById('flex-box-result').appendChild(h1);
}

function reset(){
    document.getElementById('ageInDays').remove();
}

function generateCat(){
let image = document.createElement('img');
let div = document.getElementById('flex-cat-gen');
image.src ='https://cataas.com//cat/gif';
div.appendChild(image);
}

function rpsGame(playerChoice){

}