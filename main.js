var getContainer = document.querySelector(".container");
var buttonBtn = document.getElementById("button-btn");
const getText = document.querySelector(".info-color");
buttonBtn.addEventListener("click", myFunction);

const colorPallet = ["#6983aa", "#8ec6c5", "#900c3f", "#ff6363", "#ffbd69", "#679b9b", "#10375c", "#ffb385", "#2b580c"];
function myFunction() {
   var color = Math.floor(Math.random()*10);
   var getColor = colorPallet[color];
   getContainer.style.backgroundColor = getColor;
   buttonBtn.style.color = getColor;
   getText.innerHTML = getColor;
}