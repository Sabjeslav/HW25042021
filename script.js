"use strict";

const btn1 = document.querySelector("#task1");
btn1.innerHTML = btn1.dataset.counter;

const counterDecr = ({
  target,
  target: {
    dataset: { counter },
  },
}) => {
  counter--;
  console.log(counter);
  target.setAttribute("data-counter", counter);
  target.innerHTML = counter;
  if (Number(counter) === 0) {
    btn1.removeEventListener("click", counterDecr);
    btn1.setAttribute("disabled", true);
  }
};

btn1.addEventListener("click", counterDecr);

/* =========================================================================== */

const btn2 = document.querySelector("#task2");
const getRandomNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const getRandomColor = ({ target }) => {
  const R = getRandomNumber(0, 255);
  const G = getRandomNumber(0, 255);
  const B = getRandomNumber(0, 255);
  target.setAttribute("style", `background-color: rgb(${R}, ${G}, ${B})`);
};

btn2.addEventListener("click", getRandomColor);

/* =========================================================================== */

const btn3 = document.querySelector("#task3");
const img = document.querySelector("#image");

function changeImage(counter = 1) {
  debugger;
  const testFunc = () => {
    img.setAttribute('src', `https://picsum.photos/1280/720?random=${counter}`);
    counter++;
  };
  return testFunc;
}

btn3.addEventListener("click", changeImage(1));
