

var randomNumber1 = Math.floor((Math.random() * 6) + 1);
var randomNumber2 = Math.floor((Math.random() * 6) + 1);
var randomImage1 = ("images/dice" + randomNumber1 + ".png");
var randomImage2 = ("images/dice" + randomNumber2 + ".png");

document.querySelector(".img1").setAttribute("src", randomImage1);
document.querySelector(".img2").setAttribute("src", randomImage2);

   if (randomNumber1 == randomNumber2) {
     document.getElementsByTagName("H1")[0].innerHTML = "Draw!";
   } else if (randomNumber1 > randomNumber2) {
     document.getElementsByTagName("H1")[0].innerHTML = "🏆 Player 1 Winns!";
   } else {
     document.getElementsByTagName("H1")[0].innerHTML = "Player 2 Winns! 🏆";
   };

