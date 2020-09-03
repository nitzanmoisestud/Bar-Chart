"use strict";

const bars = document.querySelectorAll(".bar");
const queueSize = getNumberOfCutemers();

function getNumberOfCutemers() {
  return Math.floor(Math.random() * 32);
}

const heightValues = [];
function genrateArrayVlues() {
  bars.forEach((bar, i) => {
    heightValues.push(Math.floor(Math.random() * 100));
  });
  setBarsHight();
  console.log(heightValues);
}

genrateArrayVlues();

function setBarsHight() {
  bars.forEach((bar, i) => {
    bar.style.height = heightValues[i + 1] + "px";
    changeQueue(i);
  });
}

function changeQueue(i) {
  setTimeout(() => {
    console.log(heightValues);
    heightValues.push(heightValues.shift());
    bars.forEach((bar, i) => {
      bar.style.height = heightValues[i + 1] + "px";
      bar.style.background = "lightgreen";
    });
  }, i * 1000);
}
