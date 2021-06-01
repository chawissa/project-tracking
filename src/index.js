"use strict";

const menuButton = document.querySelector(".menu--mobile");
const stickyNav = document.querySelector(".user-nav");

menuButton.addEventListener("click", () => {
  stickyNav.addClass("nav--mobile");
});
