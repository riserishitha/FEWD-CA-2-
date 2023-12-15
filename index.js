// creating a onclick function so that onclicking we will be redirected to the wanted page.
let gotoabout = document.getElementById("about-us");
gotoabout.addEventListener("click", function () {
  window.location.href = "./about.html";
});
// creating a onclick function and giving certain condition to make it work using if and else statements.
let login = document.getElementById("login");
login.addEventListener("click", function () {
  if (
    document.getElementById("nick").value != "" ||
    document.getElementById("nameisprinted").value != ""
  ) {
    window.location.href = "./instructions.html";
  } else {
    alert("Fill the details");
  }
});
// adding music to the page
let backgroundsound = new Audio("./background music.mp3");
backgroundsound.volume = 0.2;
backgroundsound.play();
backgroundsound.loop = true;

// getting the username  from login page and storing in localStorage
let nameintake = document.getElementById("nameisprinted");
function savethename() {
  localStorage.setItem("name", nameintake.value);
}
login.addEventListener("click", savethename);
