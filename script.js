let arr = ["Rock", "Paper", "Scissors"];

function getComputerChoice(){
   let choice = arr[(Math.floor(Math.random() * arr.length))];
   return choice.toLowerCase();
}

function playGame(){
    console.log("Let's play Rock-Paper-Scissors!")
    let userscore=0;
    let computerscore=0;
    for (let i=0; i<=4; i++){
        console.log("Round "+(i+1));
        let userchoice = prompt("Please write Rock, Paper or Scissors: ").toLowerCase();
        if (userchoice==="rock"||userchoice==="paper"||userchoice==="scissors"){
            let computerchoice = getComputerChoice();
            console.log(computerchoice);
            if ((userchoice==="rock")&&(computerchoice==="scissors")){
                console.log("User wins this round!");
                userscore++;
            } else if((userchoice==="rock")&&(computerchoice==="paper")){
                console.log("Computer wins this round!");
                computerscore++;
            } else if((userchoice==="scissors")&&(computerchoice==="rock")){
                console.log("Computer wins this round!");
                computerscore++;
            } else if((userchoice==="scissors")&&(computerchoice==="paper")){
                console.log("Player wins this round!");
                userscore++;
            } else if((userchoice==="paper")&&(computerchoice==="rock")){
                console.log("Player wins this round!");
                userscore++;
            } else if((userchoice==="paper")&&(computerchoice==="scissors")){
                console.log("Computer wins this round!");
                computerscore++;
            } else{
                console.log("It's a tie! Try again!");
                i--;
            }
        } else {
            console.log("Wrong input. Please write Rock, Paper or Scissors!")
            i--;
        }
    }

    if (userscore>computerscore){
        console.log("User wins this game with score: "+userscore+"-"+computerscore);

    }else{
        console.log("Computer wins this game with score: "+computerscore+"-"+userscore)
    }
}
playGame();
