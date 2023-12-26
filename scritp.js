var count = 0;
const colors = [
  "rgb(0, 187, 249)",
  "rgb(0, 245, 112)",
  "rgb(252, 254, 255)",
  "#fde68a",
  "#f9a8d4",
];
const animations = ["fall-1", "fall-2", "fall-3"];

function del(element, top, left) {
  element.remove();
  setTimeout(confetti, 50, top - 100, left);
}

function checkOff() {
  var div = document.getElementById(this.id).parentElement;
  var rect = div.getBoundingClientRect();
  div.style.animation = "pop .5s";
  console.log("animate");
  setTimeout(del, 500, div, rect.top, rect.left);
  console.log("timer set");
}

function px(num, add) {
  return num + add + "px";
}

function getRand(list) {
  randomidx = Math.floor(Math.random() * list.length);
  console.log(list[randomidx]);
  return list[randomidx];
}

function confetti(x, y) {
  for (var i = 0; i < 30; i++) {
    var dot = document.createElement("div");
    dot.className = "dot";
    dot.style.left = px(y, Math.random() * 300);
    dot.style.top = px(x, Math.random() * 300);
    dot.style.backgroundColor = getRand(colors);
    dot.style.animationName = getRand(animations);
    document.body.appendChild(dot);
  }

  console.log(document.getElementsByClassName("dot"));
  setTimeout(
    function (dots) {
      console.log(dots);
      dots.forEach((element) => {
        element.remove();
      });
    },
    5000,

    Array.from(document.getElementsByClassName("dot"))
  );
}

function addItem() {
  var task = document.getElementById("text-box").value;
  if (task != "") {
    var div = document.createElement("div");
    var p = document.createElement("p");
    var button = document.createElement("input");
    button.type = "button";
    button.value = "✓";
    button.className = "listButton";
    button.id = count + "button";
    button.onclick = checkOff;
    p.textContent = task;
    p.className = "listText";
    div.className = "listItem";
    div.id = count.toString();
    div.appendChild(p);
    div.appendChild(button);
    document.getElementById("container").appendChild(div);
    document.getElementById("text-box").value = "";
    count++;
  }
}

var textbox = document.getElementById("text-box");

textbox.addEventListener("keydown", function (e) {
  if (e.code == "Enter") {
    addItem();
  }
});

var submitButton = document.getElementById("submit-button");

submitButton.onclick = addItem;
