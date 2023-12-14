let whackmonkey;
let whackfox;
let lastMonkeyPot;
let lastFoxPot;
let score = 0;
let finished = false;
// onload the functions should run

document.addEventListener("DOMContentLoaded", () => {
  startgame();
  playBackgroundSound();
});

function playBackgroundSound() {
  const backgroundsound = new Audio("./Dora.mp3");
  backgroundsound.play()
    .then(() => {
      backgroundsound.loop = true;
      backgroundsound.volume = 0.2;
    })
    .catch(error => console.error('Error playing sound:', error));
}


function startgame() {
  for (let k = 0; k < 9; k++) {
    var pots = document.createElement("div");
    pots.id = k.toString();
    pots.addEventListener("click", choosethepot);
    document.getElementById("background").appendChild(pots);
  }
  setInterval(setfox, 1500);
  setInterval(setmonkey, 3000);
}

function getrandompot(lastPot) {
  let random;
  do {
    random = Math.floor(Math.random() * 9);
  } while (random === lastPot);
  return random.toString();
}

function setfox() {
  if (finished) {
    return;
  }
  if (whackfox) {
    whackfox.innerHTML = "";
  }
  let fox = document.createElement("img");
  fox.src = "./fox.png";

  let random = getrandompot(lastFoxPot);
  if (whackmonkey && whackmonkey.id === random) {
    return;
  }
  lastFoxPot = random;
  whackfox = document.getElementById(random);
  whackfox.appendChild(fox);
}

function setmonkey() {
  if (finished) {
    return;
  }
  if (whackmonkey) {
    whackmonkey.innerHTML = "";
  }
  let monkey = document.createElement("img");
  monkey.src = "./monkey.png";

  let random = getrandompot(lastMonkeyPot);
  if (whackfox && whackfox.id === random) {
    return;
  }
  lastMonkeyPot = random;
  whackmonkey = document.getElementById(random);
  whackmonkey.appendChild(monkey);
}

function choosethepot() {
  if (finished) {
    return;
  }

  if (this == whackfox) {
    score += 10;
    if (score >= 100) {
      score = 100;
      finished = true;
      document.getElementById("score").innerText =
        "YOU WON!! " + score.toString();
      // Redirect to end.html when the user wins
    window.location.href = "./end(won).html";
    } else {
      document.getElementById("score").innerText = score.toString();
      setfox();
    }
  } else if (this == whackmonkey) {
    document.getElementById("score").innerText =
      "GAME OVER: " + score.toString();
    finished = true;
    // Redirect to end.html when the game is over
    window.location.href = "./end(lost).html";
  }
}


