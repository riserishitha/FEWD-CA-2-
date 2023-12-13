let playbutton = document.querySelector('.playbutton');
playbutton.addEventListener('click', function () {
  window.location.href = './game.html';
});
let frontpagesound = new Audio("./welcome-back-sound.mp3");
frontpagesound.play();
frontpagesound.loop = true;
frontpagesound.volume = 0.2;