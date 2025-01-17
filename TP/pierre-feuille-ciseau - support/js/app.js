const choices = ["rock","paper","scissors"];
const choiceGamer = document.querySelectorAll(".choice");
const playerScores =document.querySelector("#score");
const resultMessage = document.querySelector("#message") ;
const playerResult = document.querySelector("#playerResult");
const compueurResult = document.querySelector("#computerResult");

let playerScore = 0 ;
let computeurScore = 0;



function choiceComputeur () {

    let choiceComputeur = Math.floor(Math.random()*choices.length);
     computeur = choices[choiceComputeur]
     compueurResult.innerHTML = `<i class="fas fa-hand-${computeur}"></i>`;
    
   
};




function winner (){

    console.log(" le choix du joueur  " + gamer)
   console.log("le choix de l'ordinateur  " +computeur)
    if (gamer == computeur)
    { resultMessage.innerHTML = "egalité"}
     else if( 
        gamer == "rock" && computeur=="scissors" ||
        gamer == "paper" && computeur =="rock" ||
        gamer == "scissors" && computeur == "paper"
    ) {
        resultMessage.innerHTML= "vous aver gagné";
        console.log("gagner")
        playerScore++
        
        

    } else{  resultMessage.innerHTML = "vous aver perdu";
        console.log("perdu")
           computeurScore++          
}
playerResult.innerHTML = `<i class="fas fa-hand-${gamer}"></i>`;
playerScores.textContent= `Score : Joueur ${playerScore} -${computeurScore}  Ordinateur`;
}



choiceGamer.forEach((choiceGamer) => {
    choiceGamer.addEventListener("click" , function(){
         gamer =choiceGamer.getAttribute("data-choice")
        
        choiceComputeur();
         winner();
    })
})

