function scuberGreetingForFeet(Value){
  // Write your code here!
  if(Value <= 400){
   return "This one is on me!";
  }else if(Value > 2000 && Value <= 2500){
    return "I will gladly take your thirty bucks."
  }else{
    return 'No can do.'
  }
  }
   


function ternaryCheckCity(City){
  // Write your code here!
  return City === 'NYC'?'Ok, sounds good.':'No go.';
  
}

function switchOnCharmFromTip(Tip){
  // Write your code here!
  switch(Tip){
    case 'generous':
    return  'Thank you so much.'
    case 'not as generous':
      return 'Thank you.'
    case 'thanks for everything':
      return 'Bye.'
  }
}