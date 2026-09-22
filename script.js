let computer_choise;
let human_choise;
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
human_choise=getHumanChoise()
console.log(human_choise)