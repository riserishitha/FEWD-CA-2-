let gotoabout = document.getElementById('about-us');
gotoabout.addEventListener('click', function(){
  window.location.href = './about.html';
})

let login = document.getElementById("login");
login.addEventListener("click",function(){
  if(document.getElementById("nick").value!="" || document.getElementById("nameisprinted").value!=''){
  window.location.href = "./instructions.html"}
  else{
    alert("Fill the details")
  }
})

let backgroundsound = new Audio("./background music.mp3");
    backgroundsound.volume = 0.2;
    backgroundsound.play();
    backgroundsound.loop = true;

let nameintake = document.getElementById("nameisprinted");
function savethename(){
  localStorage.setItem("name",nameintake.value)
}
login.addEventListener("click",savethename);
     
