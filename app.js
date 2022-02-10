const h2 = document.querySelector("h2");
const increase = document.querySelector(".btn.add");
const decrease = document.querySelector(".btn.minus");
const reset = document.querySelector(".btn.initial");

let i = 0;

const numColor = () => {
    if (i < 0) {
        h2.style.color = "red";
    } else if (i > 0) {
        h2.style.color = "green";
    } else { h2.style.color = "#2c2b2b" }
}
function add() {
    i += 1;
    h2.innerText = i;
    numColor();
}

function minus() {
    i -= 1;
    h2.innerText = i;
    numColor();
}
function initial() {
    i = 0;
    h2.innerText = i;
    numColor();
}


increase.addEventListener("click", add);
decrease.addEventListener("click", minus);
reset.addEventListener("click", initial);