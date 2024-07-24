let userscore=0;
let compscore=0;

const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const gamecompchoice =()=> {
    const option = ["paper", "rock", "scissors"];
    const indx = Math.floor(Math.random()*3);
    return option [indx];
}

const drawgame=()=>{
    msg.innerText="Game was Draw. Play again";
}

const gameplay=(userChoice)=>{
    const compChoice=gamecompchoice();
    if(userChoice===compChoice){
        drawgame();
    }else{
        let userwinner=true;
        if(userChoice==="rock"){
            userwinner=compChoice==="paper" ? false : true
        }else if (userChoice==="paper"){
             userwinner=compChoice==="scissors" ? false : true
        }else{userwinner = compChoice === "rock" ? false : true;}
        showwinner(userwinner, userChoice, compChoice);
    } 
}
const showwinner=(userwinner, userChoice, compChoice)=>{
        if (userwinner){
            userscore++;
            userScorePara.innerText = userscore; 
             msg.innerText = `You won. ${userChoice} beats ${compChoice}`;

        }else {
            compscore++;
            compScorePara.innerText = compscore;
             msg.innerText = `You lost. ${compChoice} beats ${userChoice}`;;


        }
}
choices.forEach((choice)=>{
        choice.addEventListener("click",()=>{
            const userChoice=choice.getAttribute("id")
            gameplay(userChoice);
        })
})