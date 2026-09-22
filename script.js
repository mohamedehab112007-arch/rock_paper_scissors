let computer_choise=null;
function getComputerChoise()
{
  let random_num=Math.random();
  if(random_num<0.3333 && random_num>=0)
  {
    computer_choise="paper"
  }
  else if(random_num>0.3333 && random_num<0.6666)
  {
   computer_choise="rock" 
  }
  else 
  {
   computer_choise="scissor"     
  }
}
getComputerChoise();
console.log(computer_choise);