let playagainbutton = document.querySelector('.playagain-button');
playagainbutton.addEventListener('click', function () {
  window.location.href = './index.html';
});
let endsound = new Audio('./Explorer.mp3');
endsound.play();
endsound.loop = true;

