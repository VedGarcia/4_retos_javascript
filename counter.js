const plus = () => {
  count++;
  createCount.innerHTML = count;
};
const minus = () => {
  count--;
  createCount.innerHTML = count;
};
const resetCount = () => {
  count = 0;
  createCount.innerHTML = count;
};

const divCount = document.getElementById("counter");
let count = 0;

const title = document.createElement('h2');
title.textContent = 'Counter';
title.classList.add("title");
const createCount = document.createElement("p");
createCount.classList.add('counter');
createCount.innerHTML = count;

const buttonContain = document.createElement('div');
buttonContain.classList.add('buttonContain');

const buttonPlus = document.createElement("button");
buttonPlus.classList.add("button");
buttonPlus.textContent = "+";
buttonPlus.addEventListener("click", () => {
  plus();
});

const buttonReset = document.createElement("button");
buttonReset.classList.add("button");
buttonReset.textContent = "Reset";
buttonReset.addEventListener("click", () => {
  resetCount();
});

const buttonMinus = document.createElement("button");
buttonMinus.classList.add("button");
buttonMinus.textContent = "-";
buttonMinus.addEventListener("click", () => {
  minus();
});
buttonContain.append(buttonMinus, buttonReset, buttonPlus);
divCount.append(title, createCount, buttonContain);
