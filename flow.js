function getcomputerchoice() {
    return Math.floor(Math.random() * 3) + 1;
};
function playround(ps,cs)
{
    if(ps=="rock")
    {
        if(cs==1) // cs==1 mean rock
        {
           console.log("it's a tie");
           return 0;
        }
        if(cs==2) // cs=2 mean paper
        {
          console.log("You Lose! Paper beats Rock");
          return -1;
        }
        if(cs==3) // cs=3 mean scissors
        {
           console.log("You won! Rock beats Scissors");
           return 1;
        }
    }
    else if(ps=="paper")
    {
        if(cs==1) // cs==1 mean rock
        {
            console.log("You Won! Paper beats Rock");
            return 1;
         }
        if(cs==2) // cs=2 mean paper
        {
           console.log("it's a tie");
           return 0;
        }
        if(cs==3) // cs=3 mean scissors
        {
           console.log("You Lose! Scissors beats paper");
           return -1;
        }
    }
    else if(ps=="scissors")
    {
        if(cs==1) // cs==1 mean rock
        {
           console.log("You Lose! Rock beats Scissors");
           return -1;
        }
        if(cs==2) // cs=2 mean paper
        {
           console.log("You Won! Scissors beats paper");
           return 1;
        }
        if(cs==3) // cs=3 mean scissors
        {
           console.log("it's a tie");
           return 0;
        }
    }
    else
    {
        return "invalid selection";
    }
}
function game()
{
    let player_count=0;
    let computer_count=0;
    for(let i=0;i<5;i++)
    {
    let playerselection=prompt("choose ur selection from rock,paper,scissors").toLowerCase();
    let computerselection=getcomputerchoice();
    let winner=playround(playerselection,computerselection);
    if(winner==-1)
    {
        computer_count++;
    }
    if(winner==1)
    {
        player_count++;
    }
    }
    return player_count>=computer_count?(player_count==computer_count?"it's a tie":"you won!"):"you lose!";
}
console.log("Finally,"+game());