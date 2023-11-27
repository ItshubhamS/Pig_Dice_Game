"use strict";
const player0el = document.querySelector(".player--0");
const player1el = document.querySelector(".player--1");
const scoreE0 = document.getElementById("score--0");
const scoreE1 = document.getElementById("score--1");
const currentE0 = document.getElementById("current--0");
const currentE1 = document.getElementById("current--0");

const diceEl = document.querySelector(".dice");
const btnNew = document.querySelector(".btn--new");
const btnRoll = document.querySelector(".btn--roll");
const btnHold = document.querySelector(".btn--hold");
const score = [0, 0];
let currentscore = 0;
let ActivePlayer = 0;
scoreE0.textContent = 0;
scoreE1.textContent = 0;
diceEl.classList.add("hidden");

btnRoll.addEventListener("click", function () {
  const diceNo = Math.trunc(Math.random() * 6 + 1);
  diceEl.classList.remove("hidden");
  diceEl.src = `dice-${diceNo}.png`;

  if (diceNo !== 1) {
    currentscore += diceNo;
    document.getElementById(`current--${ActivePlayer}`).textContent =
      currentscore;
  } else {
    document.getElementById(`current--${ActivePlayer}`).textContent = 0;
    ActivePlayer = ActivePlayer === 0 ? 1 : 0;
    currentscore = 0;
    player0el.classList.toggle("player--active");
    player1el.classList.toggle("player--active");
  }
});
