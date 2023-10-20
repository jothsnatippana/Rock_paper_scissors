function getcomputerchoice() {
    return Math.floor(Math.random() * 3) + 1;
};
function playround(ps,cs)
{
    const m=document.querySelector('.change');
    if(ps=="rock")
    {
        if(cs==1) // cs==1 mean rock
        {
           m.textContent="it's a tie";
           return 0;
        }
        if(cs==2) // cs=2 mean paper
        {
          m.textContent="You Lose! Paper beats Rock";
          return -1;
        }
        if(cs==3) // cs=3 mean scissors
        {
           m.textContent="You won! Rock beats Scissors";
           return 1;
        }
    }
    else if(ps=="paper")
    {
        if(cs==1) // cs==1 mean rock
        {
            m.textContent="You Won! Paper beats Rock";
            return 1;
        }
        if(cs==2) // cs=2 mean paper
        {
            m.textContent="it's a tie";
           return 0;
        }
        if(cs==3) // cs=3 mean scissors
        {
           m.textContent="You Lose! Scissors beats paper";
           return -1;
        }
    }
    else if(ps=="scissors")
    {
        if(cs==1) // cs==1 mean rock
        {
            m.textContent="You Lose! Rock beats Scissors";
           return -1;
        }
        if(cs==2) // cs=2 mean paper
        {
            m.textContent="You Won! Scissors beats paper";
           return 1;
        }
        if(cs==3) // cs=3 mean scissors
        {
            m.textContent="it's a tie";
           return 0;
        }
    }
}
function game()
{
    let player_count=0;
    let computer_count=0;
    
    /* retriving the buttons r-p-s*/
    const rock_button=document.querySelector("#rock");
    const paper_button=document.querySelector("#paper");
    const sci_button=document.querySelector("#scissors");
   
    /*
    creating and adding divs to the result div for tracking the count 
    */
    const result=document.querySelector('.result'); 
    const tracking_count1=document.createElement('div');
    const tracking_count2=document.createElement('div');
    tracking_count1.textContent="player count : "+player_count;
    tracking_count1.className="playercount";
    tracking_count2.textContent="computer count : "+computer_count;
    tracking_count2.className="computercount";
    result.appendChild(tracking_count1);
    result.appendChild(tracking_count2);

    /* creating a div for final result
        adding text content
    */
   const finalResult=document.querySelector('.finalresult');
   const final_result_1=document.createElement('div'); 
   final_result_1.textContent="";  
   final_result_1.className="change";
   finalResult.appendChild(final_result_1);
      

    rock_button.addEventListener('click',
                                    ()=>{
                                        let winner=playround("rock",getcomputerchoice());
                                        if(winner==-1)
                                             computer_count++;
                                        if(winner==1)
                                             player_count++;    
                                        
                                        if(player_count==5)
                                        {
                                            final_result_1.textContent="A Big Applaude... You WON!!"
                                            player_count=0;
                                            computer_count=0;
                                        }
                                        else if(computer_count==5)
                                        {
                                            final_result_1.textContent="NO Worries Try Again... You LOSE!!"
                                            player_count=0;
                                            computer_count=0;
                                        }  
                                        tracking_count1.textContent="player count : "+player_count;
                                        tracking_count2.textContent="computer count : "+computer_count;
                                        }
 );
paper_button.addEventListener('click',
                                ()  =>  {
                                        let winner=playround("paper",getcomputerchoice());
                                        if(winner==-1)
                                             computer_count++;
                                        if(winner==1)
                                             player_count++;
                                        
                                        if(player_count==5)
                                        {
                                            final_result_1.textContent="A Big Applaude... You WON!!";
                                            computer_count=0;
                                            player_count=0;
                                        }
                                        else if(computer_count==5)
                                        {
                                            final_result_1.textContent="NO Worries Try Again... You LOSE!!";
                                            player_count=0;
                                            computer_count=0;
                                        }  
                                        tracking_count1.textContent="player count : "+player_count;
                                        tracking_count2.textContent="computer count : "+computer_count;
                                        }
 );
sci_button.addEventListener('click',
                                () =>  {
                                        let winner =playround("scissors",getcomputerchoice());
                                        if(winner==-1)
                                        computer_count++;
                                        if(winner==1)
                                            player_count++;
                                      
                                        if(player_count==5)
                                        {
                                            final_result_1.textContent="A Big Applaude... You WON!!";
                                            player_count=0;
                                            computer_count=0;
                                        }
                                        else if(computer_count==5)
                                        {
                                            final_result_1.textContent="NO Worries Try Again... You LOSE!!";
                                            player_count=0;
                                            computer_count=0;
                                        }  
                                        tracking_count1.textContent="player count : "+player_count;
                                        tracking_count2.textContent="computer count : "+computer_count;
                                        });
}

game();
   