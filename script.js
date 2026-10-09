let computer_choise;
let human_choise;
 const rock_btn=document.createElement("button");
    const paper_btn=document.createElement("button");
    const scissor_btn=document.createElement("button");
    const choises=document.createElement("div");
    choises.appendChild(rock_btn);
    choises.appendChild(paper_btn);
    choises.appendChild(scissor_btn);
    const bod=document.querySelector(".bod");
    bod.appendChild(choises);
    rock_btn.value="rock";
    paper_btn.value="paper";
    scissor_btn.value="scissor";
function getComputerChoise()
{
  let random_num=Math.random();
  if(random_num<0.3333 && random_num>=0)
  {
    return "paper";
  }
  else if(random_num>0.3333 && random_num<0.6666)
  {
   return "rock"; 
  }
  else 
  {
   return"scissor";     
  }
}
function getHumanChoise()
{
   // let ans=prompt("enter either rock , paper or scissor:");
    //return ans;
}

function playGame()
{ 
    let human_score=0;
    let computer_score=0;
    computer_choise=getComputerChoise()
    human_choise=getHumanChoise()
   
    function playRound(human_choise,computer_choise)
  {
    human_choise.toLowerCase()
    if(human_choise==="rock" && computer_choise==="scissor")
    {
        human_score++;
        console.log("YOU WIN!rock beats scissor")
    }
    else if(human_choise==="paper" && computer_choise==="rock")
    {
        human_score++;
        console.log("YOU WIN!paper beats rock")
    }
    else if(human_choise==="scissor" && computer_choise==="paper")
    {   
        human_score++;
        console.log("YOU WIN!scissor beats paper")         
    }
    else if(computer_choise==="rock" && human_choise==="scissor")
    {
        computer_score++
        console.log("YOU LOSE!rock beats scissor")
    }
    else if(computer_choise==="paper" && human_choise==="rock")
    {
        computer_score++;
        console.log("YOU LOSE!paper beats rock")
    }
    else if(computer_choise==="scissor" && human_choise==="paper")
    {
        computer_score++;
        console.log("YOU LOSE!scissor beats paper")
    }
    else if (computer_choise===human_choise)
    {
        console.log("TIE!")
    }
    
}
let i = 0
//   while(i<5)
//     {
//         playRound(human_choise,computer_choise)
//         computer_choise=getComputerChoise()
//         human_choise=getHumanChoise()
//         console.log(human_score)
//         // if(human_score>=5)
//         // {
//         //     console.log("YOU WIN THE GAME!")
//         //     break;
//         // }
//         // if(computer_score>=5)
//         // {
//         //     console.log("YOU LOSE THE GAME!")
//         //     break;
//         // }
//        i++;
//     }
    if(human_score>computer_choise)
    {
        console.log("YOU WIN THE GAME!");
    }
    else{
        console.log("YOU LOSE THE GAME!");
    }
}
playGame()