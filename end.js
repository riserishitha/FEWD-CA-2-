// giving on click function to playagain btn
let playagainbutton = document.querySelector(".playagain-button");
playagainbutton.addEventListener("click", function () {
  window.location.href = "./index.html";
});
// giving background music using new Audio function
let endsound = new Audio("./Explorer.mp3");
endsound.play();
endsound.loop = true;
// get the name stored in localStorage by using getItem
document.getElementById("name").innerHTML = localStorage.getItem("name");
// giving a set of arrays and generating them randomly
document.addEventListener("DOMContentLoaded", function () {
  const lostMessages = [
    "😢 Tough luck! Keep your head up!",
    "🤷‍♂️ It happens to the best of us. Don't give up!",
    "👎 Oh no! You'll bounce back stronger!",
    "😔 Better luck next time! You've got this!",
    "🙁 Don't be disheartened. The journey continues!",
    "😞 It's just a setback. Keep pushing forward!",
    "🌧️ Rainy days make the sunny ones even brighter. Cheer up!",
    "💔 Chin up! You're still a winner in our book.",
    "🌦️ Storms don't last forever. You'll see the sun again!",
    "🤔 Every defeat is a lesson. Learn and grow!",
  ];
  const showScoreElement = document.getElementById("show-score");
  const randomLostMessage =
    lostMessages[Math.floor(Math.random() * lostMessages.length)];
  showScoreElement.innerHTML =
    randomLostMessage + " " + document.getElementById("name").innerHTML;
});
