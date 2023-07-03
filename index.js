const bodyel = document.querySelector("body");
const green = document.querySelector(".green");
const red = document.querySelector(".red");
const yellow = document.querySelector(".yellow");
const blue = document.querySelector(".blue");
const head = document.querySelector("h1");
const wrong = document.querySelector(".wrong");
green.addEventListener("click", () => {
  head.textContent = "Game Over,Press Any Key to Restart";
  const aud = document.querySelector(".play_green");

  aud.play();
  wrong.play();
  setTimeout(() => {
    bodyel.style.background = "blue";
  }, 70);

  bodyel.style.background = "red";
});

red.addEventListener("click", () => {
  head.textContent = "Game Over,Press Any Key to Restart";
  const aud = document.querySelector(".play_red");

  aud.play();
  wrong.play();
  setTimeout(() => {
    bodyel.style.background = "blue";
  }, 70);

  bodyel.style.background = "red";
});

yellow.addEventListener("click", () => {
  head.textContent = "Game Over,Press Any Key to Restart";
  const aud = document.querySelector(".play_yellow");

  aud.play();
  wrong.play();
  setTimeout(() => {
    bodyel.style.background = "blue";
  }, 70);

  bodyel.style.background = "red";
});

blue.addEventListener("click", () => {
  head.textContent = "Game Over,Press Any Key to Restart";
  const aud = document.querySelector(".play_blue");

  aud.play();
  wrong.play();
  setTimeout(() => {
    bodyel.style.background = "blue";
  }, 70);

  bodyel.style.background = "red";
});
