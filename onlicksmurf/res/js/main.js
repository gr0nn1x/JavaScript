const userInput1 = document.getElementById("userInput1");
const userInput2 = document.getElementById("userInput2");
const userInput3 = document.getElementById("userInput3");
const userInputColor = document.getElementById("userInputColor");
const changeColorBtn = document.getElementById("changeColorBtn");
const send = document.getElementById("send");
const content = document.getElementById("content");

const changeColor = () => {const userInputColorValue = userInputColor.value;
    content.style.backgroundColor = userInputColorValue;}


send.onclick = () => {
  const x = userInput1.value;
  const y = userInput2.value;
  const z = userInput3.value;
  content.style.left = x + "px";
  content.style.top = y + "px"; 
  content.style.borderRadius = z + "px";
 
};

changeColorBtn.onclick = () => {

changeColor();

};  

content.onmouseover = () => {

    changeColor();

}

window.onload = () => {

changeColor();

};