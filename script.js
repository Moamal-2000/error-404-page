"use strict";

const backHome = document.querySelector(".home-button");

backHome.addEventListener("click", () => {
  history.back();
});
