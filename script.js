let arr = ["Rock", "Paper", "Scissors"];

function getComputerChoice(){
   let choice = arr[(Math.floor(Math.random() * arr.length))];
   return choice.toLowerCase();
}

const rock = document.getElementById('rock');
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");
const tryagain = document.getElementById("tryagain");
const userdis = document.getElementById('userdis');
const pcdis = document.getElementById('pcdis');

let userscore=0;
let computerscore=0;
pcdis.textContent = '0';
userdis.textContent = '0';
const userwins="User wins this round!"
const pcwins="Computer wins this round!"
const tie="It's a tie! Try again!"



rock.addEventListener('click',()=>{
    let computerchoice = getComputerChoice();
    if(computerchoice==="scissors"){
        userscore++;
        const log = document.getElementById('result-an');
        log.textContent = userwins;
    }else if(computerchoice==="paper"){
        computerscore++;
        const log = document.getElementById('result-an');
        log.textContent = pcwins;
    } else {
        const log = document.getElementById('result-an');
        log.textContent = tie;
    }
    
    userdis.textContent = userscore;
    pcdis.textContent = computerscore;
});

paper.addEventListener('click',()=>{
    let computerchoice = getComputerChoice();
    if(computerchoice==="rock"){
        userscore++;
        const log = document.getElementById('result-an');
        log.textContent = userwins;
    }else if(computerchoice==="scissors"){
        computerscore++;
        const log = document.getElementById('result-an');
        log.textContent = pcwins;
    } else {
        const log = document.getElementById('result-an');
        log.textContent = tie;
    }
    
    userdis.textContent = userscore;
    pcdis.textContent = computerscore;
});

scissors.addEventListener('click',()=>{
    let computerchoice = getComputerChoice();
    if(computerchoice==="paper"){
        userscore++;
        const log = document.getElementById('result-an');
        log.textContent = userwins;
    }else if(computerchoice==="rock"){
        computerscore++;
        const log = document.getElementById('result-an');
        log.textContent = pcwins;
    } else {
        const log = document.getElementById('result-an');
        log.textContent = tie;
    }
    
    userdis.textContent = userscore;
    pcdis.textContent = computerscore;
});

tryagain.addEventListener('click',()=>{
    userscore = 0;
    computerscore = 0;
    const log = document.getElementById('result-an');
    log.textContent = "New game!";
    userdis.textContent = userscore;
    pcdis.textContent = computerscore;
});

// function playGame(){
    
//     for (let i=0; i<=4; i++){
//         console.log("Round "+(i+1));
//         /*let userchoice = prompt("Please write Rock, Paper or Scissors: ").toLowerCase();*/
//         if (userchoice==="rock"||userchoice==="paper"||userchoice==="scissors"){
//             let computerchoice = getComputerChoice();
            
//             if ((userchoice==="rock")&&(computerchoice==="scissors")){
//                 console.log("User wins this round!");
//                 userscore++;
//             } else if((userchoice==="rock")&&(computerchoice==="paper")){
//                 console.log("Computer wins this round!");
//                 computerscore++;
//             } else if((userchoice==="scissors")&&(computerchoice==="rock")){
//                 console.log("Computer wins this round!");
//                 computerscore++;
//             } else if((userchoice==="scissors")&&(computerchoice==="paper")){
//                 console.log("Player wins this round!");
//                 userscore++;
//             } else if((userchoice==="paper")&&(computerchoice==="rock")){
//                 console.log("Player wins this round!");
//                 userscore++;
//             } else if((userchoice==="paper")&&(computerchoice==="scissors")){
//                 console.log("Computer wins this round!");
//                 computerscore++;
//             } else{
//                 console.log("It's a tie! Try again!");
//                 i--;
//             }
//         } else {
//             console.log("Wrong input. Please write Rock, Paper or Scissors!")
//             i--;
//         }
//     }

//     if (userscore>computerscore){
//         console.log("User wins this game with score: "+userscore+"-"+computerscore);

//     }else{
//         console.log("Computer wins this game with score: "+computerscore+"-"+userscore)
//     }
// }
// playGame();
