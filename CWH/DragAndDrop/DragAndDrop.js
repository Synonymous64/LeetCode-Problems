console.log("This is about DRAG-N-DROP");
const imgBox = document.querySelector(".imgBox");
const whiteBoxes = document.getElementsByClassName("whiteBox");
//! Event listeners for draggable elements in imgBox
imgBox.addEventListener("dragstart", (e) => {
  console.log("Triggered Dragstart");
  e.target.className += " hold";
  setTimeout(() => {
    e.target.className = "hide";
  }, 0);
});
imgBox.addEventListener("dragend", (e) => {
  console.log("Triggered Dragend");
  e.target.className = "imgBox";
});
for (let whiteBox of whiteBoxes) {
  whiteBox.addEventListener("dragover", (e) => {
    e.preventDefault();
    console.log("Triggered dragover");
  });
  whiteBox.addEventListener("dragenter", (e) => {
    console.log("Triggered dragenter");
    e.target.className += " dashed";
  });
  whiteBox.addEventListener("dragleave", (e) => {
    console.log("Triggered dragleave");
    e.target.className = "whiteBox";
  });
  whiteBox.addEventListener("drop", (e) => {
    console.log("Triggered drop");
    e.target.append(imgBox);
  });
}
