import { createNewProjectTaskBtn } from "./dom-El-2";

let menuController = document.querySelector(".menuController");
let closeButton  =  document.querySelector(".close");
let asideEl  = document.querySelector('main aside');
let toggleMenuIcon = document.querySelector('#toggleMenuIcon');
let sideBar = document.querySelector("aside#menu");
// const userListDisplay = document.querySelector("#userlist")
console.log(asideEl)

function toggelMenu() {
    console.log('toggle element is clicked')
    toggleMenuIcon.classList.toggle('active');
    sideBar.classList.toggle("active");

}
toggleMenuIcon.addEventListener("click", toggelMenu);


function removeSideBar(e) {
    if (e.target !== toggleMenuIcon && e.target !== sideBar) {

    toggleMenuIcon.classList.remove("active");
    sideBar.classList.remove("active");
    }
        
}
document.addEventListener("click", removeSideBar);

// userListDisplay.append(createNewProjectTaskBtn)

// //Display side on page
// function displaySideBar() {


//             asideEl.display = 'block'
//         console.log('Display side bar')

    

// }
// menuController.addEventListener('touchstart', displaySideBar)