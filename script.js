let computer_choise;
let human_choise;
let human_score=0;
let computer_score=0;
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
    let ans=prompt("enter either rock , paper or scissor:");
    return ans;
}
function playRound(human_src,computer_src)
{
    computer_choise=getComputerChoise()
    human_choise=getHumanChoise()
    human_choise.toLowerCase()
    if(human_choise==="rock" && computer_choise==="scissor")
    {
        human_src++;
        console.log("YOU WIN!rock beats scissor")
    }
    else if(human_choise==="paper" && computer_choise==="rock")
    {
        human_src++;
        console.log("YOU WIN!paper beats rock")
    }
    else if(human_choise==="scissor" && computer_choise==="paper")
    {   
        human_src++;
        console.log("YOU WIN!scissor beats paper")         
    }
    else if(computer_choise==="rock" && human_choise==="scissor")
    {
        computer_src++
        console.log("YOU LOSE!rock beats scissor")
    }
    else if(computer_choise==="paper" && human_choise==="rock")
    {
        computer_src++;
        console.log("YOU LOSE!paper beats rock")
    }
    else if(computer_choise==="scissor" && human_choise==="paper")
    {
        computer_src++;
        console.log("YOU LOSE!scissor beats paper")
    }
    else
    {
        console.log("TIE!")
        
    }
}