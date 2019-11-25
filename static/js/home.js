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

function rpsGame(yourChoice){
console.log(yourChoice);
let humanChoice, botChoice;
humanChoice = yourChoice.id;
botChoice = numTberoChoice(ranToRpsInt());
console.log('Computer choice:' + botChoice);
results = desideWinner(humanChoice, botChoice);
console.log(results);
}

function ranToRpsInt(){
    return Math.floor(Math.random()*3);

   
    
}
function numTberoChoice(number){
    return ['rock', 'paper', 'scissors'][number];
}
function desideWinner(yourChoice, computerChoice){
    let rpsData = {
        'rock': {'scissors': 1, 'rock': 0.5, 'paper': 0},
        'paper': {'rock': 1, 'paper': 0.5, 'scissors': 0},
        'scissors': {'paper': 1, 'scissors': 0.5, 'rock': 0}
    }
    let yourScore = rpsData[yourChoice][computerChoice];
    let computerScore = rpsData[computerChoice][yourChoice];
    return yourScore, computerScore;
}

function finalMessage(yourScore, computerScore){

}
