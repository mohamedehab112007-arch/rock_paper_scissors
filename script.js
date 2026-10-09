let computer_choise;
let human_choise;
let human_score=0;
let computer_score=0;
 const rock_btn=document.createElement("button");
    const paper_btn=document.createElement("button");
    const scissor_btn=document.createElement("button");
    const choises=document.createElement("div");
    choises.appendChild(rock_btn);
    choises.appendChild(paper_btn);
    choises.appendChild(scissor_btn);
    const bod=document.querySelector(".bod");
    bod.appendChild(choises);
    rock_btn.textContent="rock";
    paper_btn.textContent="paper";
    scissor_btn.textContent="scissor";
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

    rock_btn.addEventListener("click",(event)=>{
        human_choise=event.target.textContent;
        playRound();
    })
    scissor_btn.addEventListener("click",(event)=>{
        human_choise=event.target.textContent;
        playRound();
    })
    paper_btn.addEventListener("click",(e)=>{
        human_choise=e.target.textContent
        console.log(human_choise);
        playRound();
    });
    return human_choise;
}

  function playRound(human_choise,computer_choise)
  {
    const results=document.createElement("div");
    const title=document.createElement("h4");
    const textBasedHumanScore=document.createElement("p")//=`Your score = ${human_score}`;
    const textBasedComputerScore=document.createElement("p")//=`Computer score=${computer_score}`;
    title.textContent="results:";

    results.appendChild(title);
    
    bod.appendChild(results);

    if(human_choise==="rock" && computer_choise==="scissor")
    {
        human_score++;
        //console.log("YOU WIN!rock beats scissor")
        textBasedHumanScore.textContent=`Your score = ${human_score}`;
        textBasedComputerScore.textContent=`Computer score=${computer_score}`;
        results.appendChild(textBasedHumanScore);
        results.appendChild(textBasedComputerScore);
    }
    else if(human_choise==="paper" && computer_choise==="rock")
    {
        human_score++;
        textBasedHumanScore.textContent=`Your score = ${human_score}`;
        textBasedComputerScore.textContent=`Computer score=${computer_score}`;
        results.appendChild(textBasedHumanScore);
        results.appendChild(textBasedComputerScore);
    }
    else if(human_choise==="scissor" && computer_choise==="paper")
    {   
        human_score++;
       textBasedHumanScore.textContent=`Your score = ${human_score}`;
        textBasedComputerScore.textContent=`Computer score=${computer_score}`;  
        results.appendChild(textBasedHumanScore);
        results.appendChild(textBasedComputerScore);
    }
    else if(computer_choise==="rock" && human_choise==="scissor")
    {
        computer_score++
        textBasedHumanScore.textContent=`Your score = ${human_score}`;
        textBasedComputerScore.textContent=`Computer score=${computer_score}`;
        results.appendChild(textBasedHumanScore);
        results.appendChild(textBasedComputerScore);
    }
    else if(computer_choise==="paper" && human_choise==="rock")
    {
        computer_score++;
        textBasedHumanScore.textContent=`Your score = ${human_score}`;
        textBasedComputerScore.textContent=`Computer score=${computer_score}`;
        results.appendChild(textBasedHumanScore);
        results.appendChild(textBasedComputerScore);
    }
    else if(computer_choise==="scissor" && human_choise==="paper")
    {
        computer_score++;
        textBasedHumanScore.textContent=`Your score = ${human_score}`;
        textBasedComputerScore.textContent=`Computer score=${computer_score}`;
        results.appendChild(textBasedHumanScore);
        results.appendChild(textBasedComputerScore);
    }
    else if (computer_choise===human_choise)
    {

        textBasedHumanScore.textContent=`Your score = ${human_score}`;
        textBasedComputerScore.textContent=`Computer score=${computer_score}`;
        results.appendChild(textBasedHumanScore);
        results.appendChild(textBasedComputerScore);
    }
    // console.log(textBasedComputerScore);
    // results.appendChild(textBasedHumanScore);
    // results.appendChild(textBasedComputerScore);
}
function playGame()
{ 
   
    computer_choise=getComputerChoise()
    getHumanChoise();
    console.log(human_choise);
  
  
let i = 0
//   while(i<5)
//     {
//         playRound(human_choise,computer_choise)
//         computer_choise=getComputerChoise()
//         human_choise=getHumanChoise()
//        // console.log(human_score)
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
//  }
    if(human_score>computer_choise)
    {
        console.log("YOU WIN THE GAME!");
    }
    else{
        console.log("YOU LOSE THE GAME!");
    }
}
playGame()