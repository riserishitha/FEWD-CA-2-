let playagainbutton = document.querySelector('.playagain-button');
playagainbutton.addEventListener('click', function () {
  window.location.href = './index.html';
});
let endsound = new Audio('./Explorer.mp3');
endsound.play();
endsound.loop = true;
document.getElementById("name").innerHTML=localStorage.getItem("name")

document.addEventListener("DOMContentLoaded", function() {
const lostMessages = ["YOU LOST 😓!!!", "GAME OVER 😞!", "TRY AGAIN 😢!", "BETTER LUCK NEXT TIME 🍀"];
const showScoreElement = document.getElementById("show-score");
const randomLostMessage = lostMessages[Math.floor(Math.random() * lostMessages.length)];
showScoreElement.innerHTML = randomLostMessage + " " + document.getElementById("name").innerHTML;
});

 

