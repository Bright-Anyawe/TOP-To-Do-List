import { createNewProjectTaskBtn } from "./dom-El-2";
let asideEl = document.querySelector("main aside");
let toggleMenuIcon = document.querySelector("#toggleMenuIcon");
let sideBar = document.querySelector("aside#menu");
let projectDropDown = document.querySelector("#project-dropdown");
let addNewProjectEl = document.querySelector("#adNewProjectEl");

console.log(projectDropDown);

console.log(asideEl);

function toggelMenu() {
  console.log("toggle element is clicked");
  toggleMenuIcon.classList.toggle("active");
  sideBar.classList.toggle("active");
}
toggleMenuIcon.addEventListener("click", toggelMenu);

function removeSideBar(e) {
  if (e.target.tagName === "OPTION") {
    toggleMenuIcon.classList.remove("active");
    sideBar.classList.remove("active");
  } else if (
    e.target !== toggleMenuIcon &&
    e.target !== sideBar &&
    e.target !== projectDropDown
  ) {
    toggleMenuIcon.classList.remove("active");
    sideBar.classList.remove("active");
  }
}

function optionSelected() {
  toggleMenuIcon.classList.remove("active");
  sideBar.classList.remove("active");
}

projectDropDown.addEventListener("change", optionSelected);
document.addEventListener("click", removeSideBar);
