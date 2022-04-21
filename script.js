let containerDiv = document.querySelector(".container");
let btn = document.querySelector("button");

clearAndDraw();
btn.addEventListener("click", clearAndDraw);

function applyBoxSides(box, sideLength) {
  box.style.width = `${sideLength}%`;
  box.style.height = `${sideLength}%`;
}

function changeRandColor() {
  var randomColor = Math.floor(Math.random() * 16777215).toString(16); //Credit: https://css-tricks.com/snippets/javascript/random-hex-color/
  this.style.backgroundColor = `#${randomColor}`;
  let curOpacity = window.getComputedStyle(this).getPropertyValue("opacity");
  this.style.opacity = `${curOpacity - 0.1}`;
}

function clearAndDraw() {
  clearBoard();
  let sideLength = prompt("How many squares per side?");
  drawBoard(sideLength);
}

function clearBoard() {
  let divBoxes = Array.from(containerDiv.childNodes);
  divBoxes.forEach((box) => {
    box.remove();
  });
}

function drawBoard(sideNum) {
  if (sideNum > 100 || sideNum < 0) {
    alert("Please select a value between 1 and 100");
    clearAndDraw();
  }
  for (let i = 0; i < sideNum; i++) {
    let boxSideLength = 100 / sideNum;
    for (let k = 0; k < sideNum; k++) {
      let divBox = document.createElement("div");
      divBox.classList.add("divBox");
      divBox.addEventListener("mouseover", changeRandColor);
      applyBoxSides(divBox, boxSideLength);
      containerDiv.appendChild(divBox);
    }
  }
}
