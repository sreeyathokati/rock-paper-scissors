let userscore = 0;
let comscore = 0;

const options = document.querySelectorAll(".option");
const mess = document.querySelector("#msg");

const userscoreval = document.querySelector("#user");
const compscoreval = document.querySelector("#computer");

const drawgame = ()=>{
  // console.log("game was draw");
  mess.innerText="game was draw";
  mess.style.backgroundColor = "black";
  mess.style.Color = "white";
}

const showwinner = (userwin , userOption , compResult) => {
if (userwin) {
    userscore++;
    // console.log("you won the game") ;
    userscoreval.innerText = userscore;
  mess.innerText=`you won! your ${userOption} beats ${compResult}`;
  mess.style.backgroundColor = "green";
} else {
  comscore++;
  compscoreval.innerText = comscore;
  // console.log("you lost the game") ;
  mess.innerText=`you lost! ${compResult} beats your ${userOption}`;
  mess.style.backgroundColor = "red";
}
};
const gencompchoice =() =>{
const mychoices = ["rock","paper","scissors"];
const ranidx = Math.floor(Math.random() *3);
return mychoices[ranidx];
}

const playGame = (userOption) => {
  const compResult = gencompchoice();

if (userOption === compResult) {
    drawgame();
  } else {
    let userWin = true;
    if (userOption === "rock") {
      userWin = compResult === "paper" ? false : true;
    } else if (userOption === "paper") {
      userWin = compResult === "scissors" ? false : true;
    } else {
      userWin = compResult === "rock" ? false : true;
    }
    showwinner(userWin, userOption, compResult);
  }
};
options.forEach((option) => {
  option.addEventListener("click", () => {    
    const userOption = option.getAttribute("id");
    playGame(userOption);
  });
});