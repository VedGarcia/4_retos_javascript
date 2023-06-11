const plus = () => {count++; createCount.innerHTML = count;};
const minus = () => {count--; createCount.innerHTML = count;}
const resetCount = () => {
count = 0; createCount.innerHTML = count;}


const divCount = document.getElementById("counter");

let count = 0;

const createCount = document.createElement("p");
createCount.innerHTML = count;

const buttonPlus = document.createElement("button");
buttonPlus.textContent = "Agregar";
buttonPlus.addEventListener("click", () => {
  plus();
});


const buttonReset = document.createElement("button");
buttonReset.textContent = "Resetear";
buttonReset.addEventListener("click",() => {
resetCount()
})

const buttonMinus = document.createElement("button");
buttonMinus.textContent = "Disminuir";
buttonMinus.addEventListener("click", ()=>{
    minus();
});

divCount.append(createCount, buttonPlus, buttonReset, buttonMinus);
