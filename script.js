 let userscore=0;
 let compuscore= 0;
 
 // select all html element with class choic and store them in choices variable
 const choices= document.querySelectorAll(".choice");
 const msg = document.querySelector(".msg");

 // select html element with id user-score and computer-score and store them in userscorepara and computerscorepara variable
 const userscorepara = document.querySelector("#user-score");
  const compuscorepara = document.querySelector("#computer-score");

// fuction to draw the game
 const drawgame = () => {
   // dispaly message to console
    console.log("game was draw");

    // display message to user on webpage
    msg.innerHTML ="game was draw ! play again";

    // style the message
        msg.style.backgroundColor = "orange";
         msg.style.display ="inline";
            msg.style.fontSize = "4rem";

            
 }
  // userwin will be either true or false 
 const showwinner = (userwin) => {
   if (userwin)
   {
      // incewment user score by 1
      userscore++;
      // update user score on webpage
      userscorepara.innerText = userscore;
      console.log("user won");
      msg.innerHTML ="you win";
      msg.style.backgroundColor = "green";
      msg.style.display ="inline";
      msg.style.fontSize = "4rem";
        
   }
   else
   {
      compuscore++;
      compuscorepara.innerText = compuscore;
      console.log("computer won");
      msg.innerHTML ="you lose";
      msg.style.backgroundColor = "red";
      msg.style.display ="inline";
    }
   }
 
   // function to generate computer choice
 const generatecompchoice = () => {
    const option= ["rock", "paper", "scissors"];
    // generate random between 0 and 2
    // multiply by 3 to get random no between 0 to 3
    // use math.floor to round down no to nearest integer
    const index = Math.floor(Math.random() * 3);
    return option[index];
 }


 // function that takes user choice and start the game
 const playgame = (userchoice) => {
    console.log("user choice = ", userchoice);
    // generate computer choice by calling another function
    const compchoice = generatecompchoice();
    console.log("computer choice = ", compchoice);

    if(userchoice === compchoice)
    {
        drawgame();
    }
    else
    {
       let userwin = true;
       if(userchoice === "rock")
       {
       userwin= compchoice === "paper" ? false : true ;
       }
       else if (userchoice === "paper")
       {
        userwin = compchoice === "scissor" ?  false : true;
       }
       else
       {
       userwin = compchoice === "rock" ? false : true;
       }
       showwinner(userwin);
    }
 };  

 choices.forEach((choice) => {
    choice.addEventListener("click", () => {
    const userchoice= choice.getAttribute("id");
    playgame(userchoice);
    });
   });   