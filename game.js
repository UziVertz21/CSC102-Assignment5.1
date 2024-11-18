function playRR()
{
   var player = Math.ceil(Math.random()*6);
   var weapon = Math.ceil(Math.random()*6);
   var bangImage = "bang-Image.jpg";
   var safeImage = "safe-Image.jpg";
   var emptyImage = "empty-Image.jpg";
   document.getElementById("finalResult").innerHTML = "updates";

   if (player == weapon) /* Player loses condition*/
   {
        document.getElementById("playerImg").src = bangImage; 
        document.getElementById("bangImg").src = bangImage; 
   }
   /*Player winning conditions*/
   else if((player == 1 && weapon ==6) || (player == 2 && weapon ==5) || (player == 3 && weapon ==4) 
        || (player == 4 && weapon ==3) || (player == 5 && weapon ==2) || (player == 6 && weapon ==1))
   {
        document.getElementById("playerImg").src = safeImage;
        document.getElementById("bangImg").src = emptyImage;
   }
   
   else 
   {
        document.getElementById("playerImg").src = safeImage;
        document.getElementById("bangImg").src = emptyImage;
   }
   

     if (player == weapon) /* Player loses condition*/
     {
          document.getElementById("finalResult").innerHTML = "DEAD";
     } 
     /*Player winning conditions*/
     else if((player == 1 && weapon ==6) || (player == 2 && weapon ==5) || (player == 3 && weapon ==4) 
          || (player == 4 && weapon ==3) || (player == 5 && weapon ==2) || (player == 6 && weapon ==1))
     {
          document.getElementById("finalResult").innerHTML = "Player is SAFE";
     }
     else 
     {
          document.getElementById("finalResult").innerHTML = "Player is SAFE";
     }
}

