let userInput = document.querySelector(".limit");
let p = document.querySelector(".f");


 function printSequence(){
   
let a = 0;
let b = 1;
let newSequence = [];

  let getValue = parseInt(userInput.value);
      
     for(i = 0; i< getValue; i++){
        if(i === 0){
       newSequence.push(0) 
       continue;
   }
   else if (i === 1){
       newSequence.push(1)
       continue;
   } else{
         let c = a+b;
         a = b;
         b = c;
         
         
         newSequence.push(c)
     }
     };
     p.innerHTML = (newSequence);


     } ;

     