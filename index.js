

let allCards=[]
let sum=0;
let messege=""
let islive=false
let Blackjack=false;

let player={
  name:"Nilesh: ",
  chips:0

}
let displayName=document.getElementById("player-el")
displayName.textContent=player.name+" $"+player.chips


let sumEl=document.getElementById("sum-el")
let display=document.getElementById("message-el")
let cards=document.getElementById("card-el")

let outOfGame=false;

function randomCard()
{
  let randomNumber=Math.floor(Math.random()*13)+1
  if(randomNumber==1)
  {
     return 11;
  }
  else if(randomNumber>10)
  {
    return 10;

  }
  else{
    return randomNumber
  }
}



function newRander(){
  

  sumEl.textContent="sum: "+sum
  cards.textContent="Cards: "
  
  for(let i=0; i<allCards.length; i++)
  {
    cards.textContent+= allCards[i]+" "
  }

    if(sum<21)
    {
      messege="Do you want to draw a new card?"
      Blackjack=false
    }
    else if( sum===21)
    {
      messege="You've got Blackjack!"
      player.chips++;
      displayName.textContent=player.name+" $"+player.chips
      Blackjack=true;
    }
    else
    {
      messege ="You're out of the game!"
      islive=false
      
    
        
    }

    display.innerText=messege  

}

function newCard()
{
    if(islive==true && Blackjack==false)
    {
      let card=randomCard()
    sum=sum+card
    allCards.push(card)
    newRander()
    }
}

function startGame()
{
  islive=true
  let firstCard=randomCard()
  let secondCard=randomCard()
  allCards=[firstCard, secondCard] 
  sum=firstCard+secondCard


  newRander()
}




