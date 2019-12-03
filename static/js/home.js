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
// Challenge 2 Cat Generator

function generateCat(){
let image = document.createElement('img');
let div = document.getElementById('flex-cat-gen');
image.src ='https://cataas.com//cat/gif';
div.appendChild(image);
}

//Challenge 3 Rock, Paper, Scissors

function rpsGame(yourChoice){
console.log(yourChoice);
let humanChoice, botChoice;
humanChoice = yourChoice.id;
botChoice = numTberoChoice(ranToRpsInt());
console.log('Computer choice:' + botChoice);
results = desideWinner(humanChoice, botChoice);
console.log(results);
message = finalMessage(results);
console.log(message);
rspFrontEnd(yourChoice.id, botChoice, message);
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
if(yourScore === 0){
    return {'message': 'You win', 'color': 'green'};
}else if(yourScore === 0.5){
        return {'message': 'You draw', 'color': 'yellow'};
}else{
    return {'message': 'You lose', 'color': 'red'};
}
}

function rspFrontEnd(humanChoiceImg, BotChoiceImg, finalMessage){
     imgDataBase = {
         'rock': document.getElementById('rock').src,
         'paper': document.getElementById('paper').src,
         'scissors': document.getElementById('scissors').src
     }

     document.getElementById('rock').remove();
     document.getElementById('paper').remove();
     document.getElementById('scissors').remove();

     var humanDiv = document.createElement('div');
     var botDiv = document.createElement('div');
     var messageDiv = document.createElement('div');

     humanDiv.innerHTML = "<img src='" + imgDataBase[humanChoiceImg]  + "' height=150 width=300 style='box-shadow: -2px 0px 15px 28px rgba(56,42,163,0.69);'>"
     botDiv.innerHTML = "<img src='" + imgDataBase[BotChoiceImg]  + "' height=150 width=300 style='box-shadow: -2px 0px 15px 28px rgba(234,38,24,1);'>"

     document.getElementById('flex-box-rps').appendChild(humanDiv);
     document.getElementById('flex-box-rps').appendChild(botDiv);
}

//Challenge 4 Change the colors of all buttons

let allButtons = document.getElementsByTagName('button');
console.log(allButtons);
let copyAllButtons = [];
for(let i = 0; i < allButtons.length; i++ ){
    copyAllButtons.push(allButtons[i].classList[1]);
}
console.log(copyAllButtons);

function buttonColorChange(buttonThingy){
     if(buttonThingy.value === 'red'){
         buttonRed();
     } else if(buttonThingy.value === 'green'){
         buttonGreen();
     }else if(buttonThingy.value === 'yellow'){
         buttonYellow();
     }else if(buttonThingy.value === 'random'){
         buttonRandom();
     }
     else{
         buttonReset();
     }
}

function buttonRed(){
    for(let i=0; i<allButtons.length; i++){
       allButtons[i].classList.remove(allButtons[i].classList[1]);
       allButtons[i].classList.add('btn-danger');
    }
}
function buttonGreen(){
    for(let i=0; i<allButtons.length; i++){
       allButtons[i].classList.remove(allButtons[i].classList[1]);
       allButtons[i].classList.add('btn-success');
    }
}


