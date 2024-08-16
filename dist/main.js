/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./images/Todo-1.jpg */ "./src/images/Todo-1.jpg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `body {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

:root {
  --hover-color: #fda4af;
  --background-color: #6f9e9e;
}

* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;

  font-family: "Roboto", sans-serif;
  font-weight: 400;
  font-style: normal;
}

@media (max-width: 550px) {
  body main {
    display: flex;
    flex-direction: column;
    justify-content: center;
    z-index: 1;
  }

  main header {
    background-color: #fda4af;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
  }

  #toggleMenuIcon {
    position: fixed;
    top: 20px;
    right: 20px;
    width: 60px;
    height: 60px;
    background-color: #6b8888;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 8px;
    transition: top 0.3s;

    z-index: 1000;
  }

  #toggleMenuIcon::before {
    content: "";
    position: absolute;
    width: 28px;
    height: 2px;
    background-color: #fff;
    transform: translateY(-5px);
    transition: 0.2s;
  }

  #toggleMenuIcon::after {
    content: "";
    position: absolute;
    width: 28px;
    height: 2px;
    background-color: #fff;
    transform: translateY(5px);
    transition: 0.2s;
  }

  #toggleMenuIcon.active::before {
    transform: translateY(0px) rotate(45deg);
  }

  #toggleMenuIcon.active::after {
    transform: translateY(0px) rotate(-45deg);
  }

  aside#menu {
    display: block;
    position: fixed;
    top: 0;
    left: -220px;
    width: 220px;
    height: 100vh;
    color: white;
    filter: white;
    background-color: #7989a1;
    transition: 0.3s;
    z-index: 1000;
    fill: white;
  }

  aside#menu.active {
    left: 0;
  }

  main aside {
    display: none;
    border-radius: 5px;
    background-color: #e2e8f0;
  }

  main #Container {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    border-radius: 5px;
  }

  header .menuController {
    display: block;
    width: 40px;
    height: 40px;
  }

  header .menuController svg {
    display: block;
    width: 40px;
    height: 40px;
    fill: white;
    background-color: black;
    border-radius: 10px;
  }

  #userlist {
    display: flex;
    flex-direction: column;
    max-width: 550px;
  }

  div.listContainer {
    display: flex;
    gap: 5px;
    max-width: 515px;
    border-radius: 10px;
    box-shadow: 1px 0px 3px 0px;
    margin: 14px 14px 0 19px;

    padding: 10px;
  }

  #userlist .intialTextDisplay {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
  }

  .intialTextDisplay img {
    max-width: 100%;
    height: auto;
    padding: 18px;
    border-radius: 30px;
    object-fit: contain;
  }

  .popUpContainer {
    display: flex;
    max-width: 200px;
    padding: 30px;
    background-color: #07c4dd;
    border: 1px solid black;
  }

  #userlist #addTodoBtnContainer {
    display: flex;
    align-items: center;
    gap: 5px;
    margin: 27px 0 11px 26px;
  }

  #task {
    display: flex;
    align-items: center;
    gap: 5px;
    margin: 27px 0 11px 26px;
  }

  #userlist #addTodoBtnContainer svg {
    background-color: #dc2626;
    border-radius: 50%;
    fill: white;
  }

  #userlist #addTodoBtnContainer :hover {
    cursor: pointer;
    -webkit-transform: scale(1.09);
  }

  #userlist #addTodoBtnContainer button {
    border: 0;
    font-size: 16px;
    color: #b91c1c;
    background-color: inherit;
    transition: 0.3s;
  }

  #userlist #addTodoBtnContainer button:hover {
    cursor: pointer;
    -webkit-transform: scale(1.09);
  }

  .inner_container #form {
    background-color: #64748b;
    border-radius: 10px;
    max-height: 135px;
    max-width: 515px !important;
    height: 140px;
    padding-left: 1rem;
    display: none;
    max-width: 480px;
    margin: 10px 10px 0 10px;
  }

  div.inputNewprojectFormName {
    display: none;
    background-color: #cee3e3;
    max-width: 300px;
    max-height: 300px;
    border-radius: 10px;
    padding: 25px;
    text-align: center;
    margin: 60px 0 0 0;
    box-shadow: 0px 9px 3px 0px;
  }

  .inputNewprojectFormName h2 {
    margin: 0 0 10px 0;
  }

  .inputNewprojectFormName .inputNewProjectName {
    max-width: 300px;
    max-height: 35px;
    padding: 14px;
    border: none;
    border-radius: 7px;
  }

  input.SaveProjectName {
    padding: 9px;
    border: none;
    border-radius: 8px;
    max-width: 100px;
    height: 40px;
    font-size: 19px;
  }

  .projectNameSaverBtnContainer {
    margin: 10px 0;
  }

  .projectNameSaverBtnContainer button {
    padding: 9px;
    border: none;
    border-radius: 8px;
    width: 100px;
    height: 40px;
    font-size: 19px;
  }

  .inner_container #ProjectForm {
    background-color: #64748b;
    border-radius: 10px;
    max-height: 134px;
    max-width: 515px;
    display: none;
    max-width: 500px;
    margin: 9px 10px 0 23px;
  }

  .projectFormDetails {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    height: 80px;
  }

  div.priorityDateOnLargeScreen {
    display: flex;
    position: relative;
    top: 0;
    max-width: 200px;
    flex-direction: column;
  }

  .projectInputContainer {
    max-width: 200px;
  }

  .projectInputContainer p input {
    max-width: 200px;
  }

  .innerTaskContainer .edit {
    max-width: 140px;
  }

  .projectInputContainer .PdescriptionInputContainer {
    margin: 10px 0 0 0;
  }

  div#configPriorityDateOnMobile {
    display: flex;
    flex-direction: column;
    max-width: 200px;
    position: static;
  }

  #configPriorityDateOnMobile #priority,
  #datePicker {
    padding: 2px;
    border-radius: 6px;
    max-width: 104px;
    min-width: 80px;
  }

  #ProjectForm .footer {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 0 10px;
    gap: 0;
  }

  #ProjectForm .projectButtonsContainer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 10px;
    gap: 0;
  }

  #form .formDetails {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    margin: 0;
  }

  #formFooterOnMobile {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 0 10px;
  }

  #formFooterOnMobile .buttons {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 10px;
    margin: 0;
    gap: 0;
  }

  .priorityDateLargeScreen {
    display: flex;
    flex-direction: column;
  }

  #form .inputs {
    display: flex;
    flex-direction: column;
    max-width: 150px;
  }

  #form .first-inputContainer input,
  .PtitleInputContainer input {
    max-width: 165px;
    max-height: 15px;
    border: none;
    outline: none;
    color: white;
    margin: 10px 0;
    background-color: inherit;
  }

  #form .second-inputContainer input,
  .PdescriptionInputContainer input {
    max-width: 178px;
    max-height: 15px;
    border: none;
    outline: none;
    color: white;
    background-color: inherit;
    margin: 0;
  }

  #form .other-options-on-forms button,
  #configPriorityDateOnMobile #priority,
  #datePicker {
    padding: 4px;
    border-radius: 6px;
    max-width: 104px;
    min-width: 80px;
  }
}

@media (min-width: 551px) and (max-width: 768px) {
  body main {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  main header {
    background-color: #fda4af;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
  }

  main aside {
    display: none;
    border-radius: 5px;
    background-color: #e2e8f0;
    z-index: 2;
  }

  aside ul,
  ul select {
    display: flex;
    flex-direction: column;
    color: white;
    fill: white;
  }

  select#project-dropdown {
    background-color: rgb(42, 40, 49);
  }

  main #Container {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    border-radius: 5px;
    z-index: 1;
  }

  header .menuController {
    display: block;
    width: 40px;
    height: 40px;
  }

  #toggleMenuIcon {
    position: fixed;
    top: 20px;
    right: 20px;
    width: 50px;
    height: 50px;
    background-color: #6f9e9e;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 8px;
    transition: top 0.3s;
    z-index: 1000;

    z-index: 1000;
  }

  #toggleMenuIcon::before {
    content: "";
    position: absolute;
    width: 28px;
    height: 2px;
    background-color: #fff;
    transform: translateY(-5px);
    transition: 0.2s;
  }

  #toggleMenuIcon::after {
    content: "";
    position: absolute;
    width: 28px;
    height: 2px;
    background-color: #fff;
    transform: translateY(5px);
    transition: 0.2s;
  }

  #toggleMenuIcon.active::before {
    transform: translateY(0px) rotate(45deg);
  }

  #toggleMenuIcon.active::after {
    transform: translateY(0px) rotate(-45deg);
  }

  aside#menu {
    display: block;
    position: fixed;
    top: 0;
    left: -220px;
    width: 220px;
    height: 100vh;
    background-color: var(--background-color);
    transition: 0.3s;
  }

  aside#menu.active {
    left: 0;
  }

  aside ul {
    display: flex;
    flex-direction: column;
    color: white;
    fill: white;
  }

  header .menuController svg {
    display: block;
    width: 40px;
    height: 40px;
    fill: white;
    background-color: black;
    border-radius: 10px;
  }

  #userlist #addTodoBtnContainer {
    display: flex;
    align-items: center;
    gap: 5px;
    margin: 27px 0 11px 26px;
  }

  #task {
    display: flex;
    align-items: center;
    gap: 5px;
    margin: 27px 0 11px 26px;
  }

  #userlist #addTodoBtnContainer svg {
    background-color: #dc2626;
    border-radius: 50%;
    fill: white;
  }

  #userlist #addTodoBtnContainer :hover {
    cursor: pointer;
    -webkit-transform: scale(1.09);
  }

  #userlist #addTodoBtnContainer button {
    border: 0;
    font-size: 16px;
    color: #b91c1c;
    background-color: inherit;
  }

  #userlist #addTodoBtnContainer button:hover {
    cursor: pointer;
    -webkit-transform: scale(1.09);
  }

  div.listContainer {
    display: flex;
    gap: 5px;
    max-width: 714px;

    border-radius: 10px;
    box-shadow: 1px 0px 3px 0px;
    margin: 18px 60px;
    padding: 15px;
  }

  #userlist .intialTextDisplay {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
  }

  .intialTextDisplay p {
    max-width: 500px;
    display: flex;
    max-width: 500px;
    flex-direction: column;
    flex-wrap: wrap;
  }

  .intialTextDisplay img {
    width: 100%;
    height: auto;
    padding: 20px;
    border-radius: 41px;
    object-fit: contain;
  }

  .inner_container #form {
    background-color: #64748b;
    border-radius: 10px;
    height: 150px;
    display: none;
    max-width: 600px;

    margin: 17px;
  }

  #form div.formDetails {
    display: flex;
    justify-content: space-between;
    align-items: center;

    padding: 10px;
    margin: 0;
  }

  .priorityDateLargeScreen {
    display: none;
  }

  #form .inputs {
    max-width: 150px;
  }

  #form .first-inputContainer input,
  .PtitleInputContainer input,
  #form .second-inputContainer input,
  .PdescriptionInputContainer input {
    max-width: 600px;
    height: 25px;
    border: none;
    outline: none;
    color: white;
    margin: 10px 0 0 0;
    background-color: inherit;
  }

  p.second-inputContainer {
    margin: 0;
  }

  #form .buttons {
    display: flex;
    margin: 1px 23px;
  }

  #configPriorityDateOnMobile {
    display: flex;
    flex-direction: column;
    position: static;
  }

  #form .other-options-on-forms button,
  #priority,
  #datePicker {
    padding: 7px;
    border-radius: 9px;
  }

  form#ProjectForm {
    background-color: #64748b;
    border-radius: 10px;
    height: 150px;
    display: none;
    max-width: 693px;
    padding-left: 1rem;
    margin: 9px 61px;
  }

  div.projectFormDetails {
    display: flex;
    align-items: center;
    justify-content: space-between;
    top: 0;
  }
}

*/ .projectButtonsContainer {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

select#priority {
  padding: 4px;
  border-radius: 9px;
}

input#datePicker {
  padding: 3px;
  border-radius: 9px;
}

@media (min-width: 769px) and (max-width: 1000px) {
  body main {
    display: grid;
  }

  main header {
    grid-area: 1 / 2 / 2 / 6;

    background-color: #fda4af;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
  }

  main aside {
    border-radius: 5px;
    background-color: #e2e8f0;
  }

  main #Container {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    border-radius: 5px;
    z-index: 1;
  }

  header .menuController {
    display: block;
    width: 40px;
    height: 40px;
  }

  header .menuController svg {
    display: block;
    width: 40px;
    height: 40px;
    fill: white;
    background-color: black;
    border-radius: 10px;
  }

  #userlist .intialTextDisplay {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
  }

  #userlist .intialTextDisplay p {
    font-size: 1.2rem;
    text-align: center;
    font-weight: 500;
    margin: 10px 0 0 0;
    max-width: 600px;
  }

  #userlist #addTodoBtnContainer {
    display: none;
    align-items: center;
    gap: 5px;
    margin: 27px 0 11px 26px;
  }

  #task {
    display: flex;
    align-items: center;
    gap: 5px;
    margin: 27px 0 11px 26px;
  }

  #userlist #addTodoBtnContainer svg {
    background-color: #dc2626;
    border-radius: 50%;
    fill: white;
  }

  #userlist #addTodoBtnContainer :hover {
    cursor: pointer;
    -webkit-transform: scale(1.09);
  }

  #userlist #addTodoBtnContainer button {
    border: 0;
    font-size: 16px;
    color: #b91c1c;
    background-color: inherit;
  }

  #userlist #addTodoBtnContainer button:hover {
    cursor: pointer;
    -webkit-transform: scale(1.09);
  }

  div.listContainer {
    display: flex;
    gap: 5px;
    max-width: 714px;

    border-radius: 10px;
    box-shadow: 1px 0px 3px 0px;
    margin: 18px 60px;
    padding: 15px;
  }

  .inner_container #form {
    background-color: #64748b;
    border-radius: 10px;
    height: 150px;
    display: none;
    max-width: 750px;

    margin: 17px;
  }

  #form div.formDetails {
    display: flex;
    justify-content: space-between;
    align-items: center;

    padding: 9px 20px;
    margin: 0;
  }

  .priorityDateLargeScreen {
    display: none;
  }

  #form .inputs {
    max-width: 150px;
  }

  #form .first-inputContainer input,
  .PtitleInputContainer input {
    max-width: 420px;
    max-height: 60px;
    border: none;
    outline: none;
    color: white;
    background-color: inherit;
    margin: 0;
  }

  #form .second-inputContainer input,
  .PdescriptionInputContainer input {
    max-width: 420px;
    max-height: 60px;
    border: none;
    outline: none;
    color: rgb(90, 77, 77);
    background-color: inherit;
    margin: 0;
  }

  #form .buttons {
    display: flex;
    justify-content: space-between;
    margin: 1px 33px;
  }

  form#ProjectForm {
    background-color: #64748b;
    border-radius: 10px;
    height: 150px;
    display: none;
    max-width: 693px;
    padding-left: 1rem;
    margin: 9px 61px;
  }

  div.projectFormDetails {
    display: flex;
    align-items: center;
    justify-content: space-between;
    top: 0;
  }

  div.priorityDateOnLargeScreen {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    top: 0;
  }

  .projectButtonsContainer {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  #configPriorityDateOnMobile {
    display: flex;
    flex-direction: column;
    position: static;
  }

  #form .other-options-on-forms button,
  #priority,
  #datePicker {
    padding: 8px;
    border-radius: 6px;
    border: none;
  }
}

main {
  display: grid;
  grid-template-columns: 190px 1fr;
  grid-template-rows: 70px 570px;
}

header {
  grid-area: 1 / 2 / 2 / 6;
  background-color: #fda4af;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
}

aside {
  grid-area: 1/ 1/ 4/ 2;
  border-radius: 5px;
  background-color: #e2e8f0;
}

#Container {
  grid-area: 2 / 2 / 3 / 4;

  display: grid;
  grid-template-columns: 100px 650px minmax(250px, 350px);
  border-radius: 5px;
}

.inner_container {
  grid-area: 1 / 2 / 3 / 3;
}

.intialTextDisplay {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px;
}

.intialTextDisplay p {
  font-size: 1.2rem;
  text-align: center;
  font-weight: 500;
  margin: 10px 0 0 0;
}

.intialTextDisplay img {
  width: 100%;
  height: auto;
  border-radius: 30px;
  padding: 20px;
}

#addTodoBtnContainer {
  display: none;
}

.empty {
  grid-area: 1 / 3 / 5 / 4;
  background-color: #f8f8f8;
  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_0___});
  background-size: cover;
  background-position: center;
}

.menuController {
  display: none;
  width: 40px;
  height: 40px;
}

.checkBox {
  -webkit-appearance: none;
  -moz-appearance: none;
  width: 20px;
  height: 20px;
  border: 1px solid #ccc;
  border-radius: 3px;
  outline: none;
  cursor: pointer;
  position: relative;
}

.checkBox::before {
  content: "";
  display: block;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 16px;
  color: rgb(22, 252, 22);
  opacity: 0;
  transition: opacity 0.3s ease;
}

.checkBox:hover::before {
  content: "✓";
  opacity: 0.5;
}

svg {
  width: 25px;
  height: 25px;
}

#task {
  display: flex;
  align-items: center;
  gap: 5px;
  margin: 27px 0 11px 26px;
}

#task svg {
  background-color: #dc2626;
  border-radius: 50%;
  fill: white;
}

#task :hover {
  cursor: pointer;
  -webkit-transform: scale(1.09);
}

#task button {
  border: 0;
  font-size: 16px;
  color: #b91c1c;
  background-color: inherit;
}

#task button:hover {
  cursor: pointer;
  -webkit-transform: scale(1.09);
}

button.deleteTask {
  padding: 10px;
  border: none;
  border-radius: 7px;
  font-size: 1.1rem;
  background-color: #e0487c;
  color: white;
  transition: transform 0.2s ease-out;
}

button.deleteTask:hover {
  transform: scale(1.05);
  background-color: #4b0707;

}

button.deleteTask:active {
  transform: scale(0.9);
}

.listContainer {
  display: flex;
  gap: 5px;
  max-width: 714px;

  border-radius: 10px;
  box-shadow: 1px 0px 3px 0px;
  margin: 18px 18px;
  padding: 15px;
}

.priorityDateOnLargeScreen {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 200px;
}

.projectButtonsContainer {
  display: flex;
  justify-content: space-between;
  padding-inline: 18px
}

.projectButtonsContainer button {
  border: none;
  border-radius: 7px;
  padding: 9px;
}

.excluded {
  color: red;
}

.taskContainer {
  display: flex;
  flex: 1;
  justify-content: space-between;
}

.taskTitle,
.newProject-task-title,
.editableSaveTaskEl {
  margin: 0;
  font-size: 18px;
  text-decoration: none;
  text-decoration-color: red;
}

.taskDescription,
.newProject-description {
  margin: 0;
  font-size: 14px;
}

.taskPriority {
  font-size: 19px;
  border-radius: 6px;
  background-color: #573d3d;
  padding: 6px;
  margin: 0 0 7px;
  color: white;
}

.taskPriority:hover {
  transform: scale(1.05);
  background-color: #9c1515;
}


.innerTaskHandler {
  display: flex;
  flex-direction: column;
  justify-items: center;
  justify-content: center;
  align-items: center;
  margin: 0px 15px 0 40px;
}

aside ul li {
  list-style: none;
  display: inline-block;
  width: 100%;
  padding: 10px 20px;
}

.inbox-container {
  display: flex;
  align-items: center;
  gap: 5px;
}


.inbox {
  font-size: 20px;
}

.inboxListContainer {
  display: flex;
  gap: 5px;
}

.inboxTaskContainer {
  display: flex;
  flex: 1;
  justify-content: space-between;
}

.inboxTaskTitle {
  margin: 0;
  font-size: 18px;
}

.inboxTaskDescription {
  margin: 0;
  font-size: 14px;
}

.inboxTaskPriority {
  margin: 0 20px 0 0;
  font-size: 20px;
}

.dueDate {
  margin: 0;
}

.edit {
  border: none;
  outline: none;
  font-size: 17px;
  max-width: 110px;
  margin: 0 0;
}

#projects h3 {
  margin: 0 0 0 10px;
}

#form {
  background-color: #64748b;
  border-radius: 10px;
  height: 140px;
  display: none;
  padding-left: 1rem;
  margin: 10px 10px 0 0;
}

.formDetails {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 12px 15px;
}

input#datePicker {
  max-width: 118px;
}

.buttons {
  display: flex;
  justify-content: space-between;
  margin: 1px 33px;
}

.buttons button {
  border: none;
  border-radius: 7px;
  padding: 7px;
  transition: transform 0.2s ease-out;
}

.buttons button:hover {
  transform: scale(1.05);
}

#ProjectForm {
  background-color: #64748b;
  border-radius: 10px;
  height: 150px;
  display: none;
  padding: 10px;
  margin: 15px 15px 0 17px;
}

.projectFormDetails {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-left: 1rem;
  top: 0;
}

.first-inputContainer input,
.PtitleInputContainer input {
  max-width: 600px;
  height: 37px;
  border: none;
  outline: none;
  color: white;
  margin: 10px 0 0 0;
  background-color: inherit;
}

.task-title,
.description {
  width: 350px;
}

.first-inputContainer input::placeholder,
.PtitleInputContainer input::placeholder {
  color: white;
  padding: 0 10px;
  opacity: 1;
}

.second-inputContainer input,
.PdescriptionInputContainer input {
  max-width: 600px;
  height: 37px;
  border: none;
  outline: none;
  color: white;
  background-color: inherit;
  margin: 0;
}

.pTitle, .pDescription {
  width: 350px;
  font-size: 1.07rem;
}

.second-inputContainer input::placeholder,
.PdescriptionInputContainer input::placeholder {
  padding: 0 10px;
  color: white;
  opacity: 1;
}

.first-inputContainer,
.second-inputContainer {
  margin: 10px 0 0 0;
  font-size: 1rem;
}

.submitBtn:active {
  transform: active scale(1.1);
}

.other-options-on-forms button,
#priority,
input#datePicker {
  transition: transform 0.3s ease-in;
  padding: 7px;
  border-radius: 7px;
  border: none;
  background-color: #07c4dd;
  color: white;
  font-size: 15px;
  font-weight: 600;
}

#priority {
  margin: 10px 0 8px 0;
}

#projectPriority,
.footer {
  padding: 7px;
  border-radius: 5px;
  margin: 0 4px 5px 0;
}

.addProjectsContainer {
  display: flex;

  align-items: center;
  gap: 10px;
}

.inbox-container:hover, .addProjectsContainer:hover, .project_text:hover, #project-dropdown:hover {
  cursor: pointer;
  -webkit-transform: scale(1.05);
  text-decoration: underline;
}


.addProjectsContainer svg {
  width: 25px;
  height: 25px;
}

#addNewProjectEl {
  margin: 0;
  font-size: 19px;
}

.project_text {
  margin: 0 0 10px 17px;
  display: flex;
  align-self: center;
  justify-self: center;
  padding: 9px;
  border-radius: 5px 0px 0px 5px;
}


#project-dropdown {
  border: 0;
  background-color: inherit;
  font-size: 18px;
  font-weight: 550;
  max-width: 160px;
}


#project-dropdown:focus {
  border: none;
  outline: none;
}

#newProjectsFormContainerEl {
  display: flex;
  justify-content: center;
  align-items: center;
  justify-items: center;
}

#ProjectsFormNameContainerEl {
  display: flex;
  justify-content: center;
  align-items: center;
  justify-items: center;
}

.inputNewprojectFormName {
  display: none;
  background-color: #cee3e3;
  max-width: 400px;
  max-height: 300px;
  border-radius: 10px;
  padding: 46px;
  text-align: center;
  margin: 60px 0 0 0;
  box-shadow: 0px 9px 3px 0px;
}

.inputNewprojectFormName h2 {
  margin: 0 0 10px 0;
}

.inputNewProjectName {
  max-width: 350px;
  max-height: 35px;
  padding: 17px;
  border: none;
  border-radius: 7px;
  font-size: 19px;
}

input.SaveProjectName {
  padding: 9px;
  border: none;
  border-radius: 8px;
  max-width: 100px;
  height: 40px;
  font-size: 19px;
  background-color: rgb(240, 59, 134);
  color: white;
}

.projectNameSaverBtnContainer {
  margin: 10px 0;
}

.projectNameSaverBtnContainer button {
  padding: 9px;
  border: none;
  border-radius: 8px;
  width: 100px;
  height: 40px;
  font-size: 19px;
}

#ProjectsFormNameContainerEl .Cancel {
  background-color: grey;
  color: white;
}

#newProjectTasksContainer {
  display: flex;
  justify-content: center;
  align-items: center;
}

#newProjectTasksInnerContainer {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
  margin: 10px;
  box-shadow: #5c5555 1px 3px 3px 1px;
  border-radius: 10px;
  padding: 10px;
  width: 95px;
  position: relative;
  left: 250px;
}

svg.addTask {
  border-radius: 50%;
  fill: wheat;
  background-color: red;
}

.newProjectAddBtn {
  border: 0;
  background-color: inherit;
  font-weight: 500;
}

#ProjectdatePicker {
  padding: 2px;
  border-radius: 5px;
  border: none;
  height: 32px;
}

#submitBtnForProject {
  padding: 7px;
  border-radius: 9px;
}

#submitBtnForProject:active {
  transform: scale(1.1);
}

.cancelForProjectBtn {
  padding: 7px;
  border-radius: 9px;
}`, "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"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","sourcesContent":["body {\n  padding: 0;\n  margin: 0;\n  box-sizing: border-box;\n}\n\n:root {\n  --hover-color: #fda4af;\n  --background-color: #6f9e9e;\n}\n\n* {\n  padding: 0;\n  margin: 0;\n  box-sizing: border-box;\n\n  font-family: \"Roboto\", sans-serif;\n  font-weight: 400;\n  font-style: normal;\n}\n\n@media (max-width: 550px) {\n  body main {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    z-index: 1;\n  }\n\n  main header {\n    background-color: #fda4af;\n    text-align: center;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    gap: 10px;\n  }\n\n  #toggleMenuIcon {\n    position: fixed;\n    top: 20px;\n    right: 20px;\n    width: 60px;\n    height: 60px;\n    background-color: #6b8888;\n    cursor: pointer;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    border-radius: 8px;\n    transition: top 0.3s;\n\n    z-index: 1000;\n  }\n\n  #toggleMenuIcon::before {\n    content: \"\";\n    position: absolute;\n    width: 28px;\n    height: 2px;\n    background-color: #fff;\n    transform: translateY(-5px);\n    transition: 0.2s;\n  }\n\n  #toggleMenuIcon::after {\n    content: \"\";\n    position: absolute;\n    width: 28px;\n    height: 2px;\n    background-color: #fff;\n    transform: translateY(5px);\n    transition: 0.2s;\n  }\n\n  #toggleMenuIcon.active::before {\n    transform: translateY(0px) rotate(45deg);\n  }\n\n  #toggleMenuIcon.active::after {\n    transform: translateY(0px) rotate(-45deg);\n  }\n\n  aside#menu {\n    display: block;\n    position: fixed;\n    top: 0;\n    left: -220px;\n    width: 220px;\n    height: 100vh;\n    color: white;\n    filter: white;\n    background-color: #7989a1;\n    transition: 0.3s;\n    z-index: 1000;\n    fill: white;\n  }\n\n  aside#menu.active {\n    left: 0;\n  }\n\n  main aside {\n    display: none;\n    border-radius: 5px;\n    background-color: #e2e8f0;\n  }\n\n  main #Container {\n    display: flex;\n    flex-direction: column;\n    flex-wrap: wrap;\n    border-radius: 5px;\n  }\n\n  header .menuController {\n    display: block;\n    width: 40px;\n    height: 40px;\n  }\n\n  header .menuController svg {\n    display: block;\n    width: 40px;\n    height: 40px;\n    fill: white;\n    background-color: black;\n    border-radius: 10px;\n  }\n\n  #userlist {\n    display: flex;\n    flex-direction: column;\n    max-width: 550px;\n  }\n\n  div.listContainer {\n    display: flex;\n    gap: 5px;\n    max-width: 515px;\n    border-radius: 10px;\n    box-shadow: 1px 0px 3px 0px;\n    margin: 14px 14px 0 19px;\n\n    padding: 10px;\n  }\n\n  #userlist .intialTextDisplay {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    text-align: center;\n  }\n\n  .intialTextDisplay img {\n    max-width: 100%;\n    height: auto;\n    padding: 18px;\n    border-radius: 30px;\n    object-fit: contain;\n  }\n\n  .popUpContainer {\n    display: flex;\n    max-width: 200px;\n    padding: 30px;\n    background-color: #07c4dd;\n    border: 1px solid black;\n  }\n\n  #userlist #addTodoBtnContainer {\n    display: flex;\n    align-items: center;\n    gap: 5px;\n    margin: 27px 0 11px 26px;\n  }\n\n  #task {\n    display: flex;\n    align-items: center;\n    gap: 5px;\n    margin: 27px 0 11px 26px;\n  }\n\n  #userlist #addTodoBtnContainer svg {\n    background-color: #dc2626;\n    border-radius: 50%;\n    fill: white;\n  }\n\n  #userlist #addTodoBtnContainer :hover {\n    cursor: pointer;\n    -webkit-transform: scale(1.09);\n  }\n\n  #userlist #addTodoBtnContainer button {\n    border: 0;\n    font-size: 16px;\n    color: #b91c1c;\n    background-color: inherit;\n    transition: 0.3s;\n  }\n\n  #userlist #addTodoBtnContainer button:hover {\n    cursor: pointer;\n    -webkit-transform: scale(1.09);\n  }\n\n  .inner_container #form {\n    background-color: #64748b;\n    border-radius: 10px;\n    max-height: 135px;\n    max-width: 515px !important;\n    height: 140px;\n    padding-left: 1rem;\n    display: none;\n    max-width: 480px;\n    margin: 10px 10px 0 10px;\n  }\n\n  div.inputNewprojectFormName {\n    display: none;\n    background-color: #cee3e3;\n    max-width: 300px;\n    max-height: 300px;\n    border-radius: 10px;\n    padding: 25px;\n    text-align: center;\n    margin: 60px 0 0 0;\n    box-shadow: 0px 9px 3px 0px;\n  }\n\n  .inputNewprojectFormName h2 {\n    margin: 0 0 10px 0;\n  }\n\n  .inputNewprojectFormName .inputNewProjectName {\n    max-width: 300px;\n    max-height: 35px;\n    padding: 14px;\n    border: none;\n    border-radius: 7px;\n  }\n\n  input.SaveProjectName {\n    padding: 9px;\n    border: none;\n    border-radius: 8px;\n    max-width: 100px;\n    height: 40px;\n    font-size: 19px;\n  }\n\n  .projectNameSaverBtnContainer {\n    margin: 10px 0;\n  }\n\n  .projectNameSaverBtnContainer button {\n    padding: 9px;\n    border: none;\n    border-radius: 8px;\n    width: 100px;\n    height: 40px;\n    font-size: 19px;\n  }\n\n  .inner_container #ProjectForm {\n    background-color: #64748b;\n    border-radius: 10px;\n    max-height: 134px;\n    max-width: 515px;\n    display: none;\n    max-width: 500px;\n    margin: 9px 10px 0 23px;\n  }\n\n  .projectFormDetails {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    padding: 10px;\n    height: 80px;\n  }\n\n  div.priorityDateOnLargeScreen {\n    display: flex;\n    position: relative;\n    top: 0;\n    max-width: 200px;\n    flex-direction: column;\n  }\n\n  .projectInputContainer {\n    max-width: 200px;\n  }\n\n  .projectInputContainer p input {\n    max-width: 200px;\n  }\n\n  .innerTaskContainer .edit {\n    max-width: 140px;\n  }\n\n  .projectInputContainer .PdescriptionInputContainer {\n    margin: 10px 0 0 0;\n  }\n\n  div#configPriorityDateOnMobile {\n    display: flex;\n    flex-direction: column;\n    max-width: 200px;\n    position: static;\n  }\n\n  #configPriorityDateOnMobile #priority,\n  #datePicker {\n    padding: 2px;\n    border-radius: 6px;\n    max-width: 104px;\n    min-width: 80px;\n  }\n\n  #ProjectForm .footer {\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n    padding: 0 10px;\n    gap: 0;\n  }\n\n  #ProjectForm .projectButtonsContainer {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    padding: 0 10px;\n    gap: 0;\n  }\n\n  #form .formDetails {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    padding: 10px;\n    margin: 0;\n  }\n\n  #formFooterOnMobile {\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n    padding: 0 10px;\n  }\n\n  #formFooterOnMobile .buttons {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    padding: 0 10px;\n    margin: 0;\n    gap: 0;\n  }\n\n  .priorityDateLargeScreen {\n    display: flex;\n    flex-direction: column;\n  }\n\n  #form .inputs {\n    display: flex;\n    flex-direction: column;\n    max-width: 150px;\n  }\n\n  #form .first-inputContainer input,\n  .PtitleInputContainer input {\n    max-width: 165px;\n    max-height: 15px;\n    border: none;\n    outline: none;\n    color: white;\n    margin: 10px 0;\n    background-color: inherit;\n  }\n\n  #form .second-inputContainer input,\n  .PdescriptionInputContainer input {\n    max-width: 178px;\n    max-height: 15px;\n    border: none;\n    outline: none;\n    color: white;\n    background-color: inherit;\n    margin: 0;\n  }\n\n  #form .other-options-on-forms button,\n  #configPriorityDateOnMobile #priority,\n  #datePicker {\n    padding: 4px;\n    border-radius: 6px;\n    max-width: 104px;\n    min-width: 80px;\n  }\n}\n\n@media (min-width: 551px) and (max-width: 768px) {\n  body main {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n  }\n\n  main header {\n    background-color: #fda4af;\n    text-align: center;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    gap: 10px;\n  }\n\n  main aside {\n    display: none;\n    border-radius: 5px;\n    background-color: #e2e8f0;\n    z-index: 2;\n  }\n\n  aside ul,\n  ul select {\n    display: flex;\n    flex-direction: column;\n    color: white;\n    fill: white;\n  }\n\n  select#project-dropdown {\n    background-color: rgb(42, 40, 49);\n  }\n\n  main #Container {\n    display: flex;\n    flex-direction: column;\n    flex-wrap: wrap;\n    border-radius: 5px;\n    z-index: 1;\n  }\n\n  header .menuController {\n    display: block;\n    width: 40px;\n    height: 40px;\n  }\n\n  #toggleMenuIcon {\n    position: fixed;\n    top: 20px;\n    right: 20px;\n    width: 50px;\n    height: 50px;\n    background-color: #6f9e9e;\n    cursor: pointer;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    border-radius: 8px;\n    transition: top 0.3s;\n    z-index: 1000;\n\n    z-index: 1000;\n  }\n\n  #toggleMenuIcon::before {\n    content: \"\";\n    position: absolute;\n    width: 28px;\n    height: 2px;\n    background-color: #fff;\n    transform: translateY(-5px);\n    transition: 0.2s;\n  }\n\n  #toggleMenuIcon::after {\n    content: \"\";\n    position: absolute;\n    width: 28px;\n    height: 2px;\n    background-color: #fff;\n    transform: translateY(5px);\n    transition: 0.2s;\n  }\n\n  #toggleMenuIcon.active::before {\n    transform: translateY(0px) rotate(45deg);\n  }\n\n  #toggleMenuIcon.active::after {\n    transform: translateY(0px) rotate(-45deg);\n  }\n\n  aside#menu {\n    display: block;\n    position: fixed;\n    top: 0;\n    left: -220px;\n    width: 220px;\n    height: 100vh;\n    background-color: var(--background-color);\n    transition: 0.3s;\n  }\n\n  aside#menu.active {\n    left: 0;\n  }\n\n  aside ul {\n    display: flex;\n    flex-direction: column;\n    color: white;\n    fill: white;\n  }\n\n  header .menuController svg {\n    display: block;\n    width: 40px;\n    height: 40px;\n    fill: white;\n    background-color: black;\n    border-radius: 10px;\n  }\n\n  #userlist #addTodoBtnContainer {\n    display: flex;\n    align-items: center;\n    gap: 5px;\n    margin: 27px 0 11px 26px;\n  }\n\n  #task {\n    display: flex;\n    align-items: center;\n    gap: 5px;\n    margin: 27px 0 11px 26px;\n  }\n\n  #userlist #addTodoBtnContainer svg {\n    background-color: #dc2626;\n    border-radius: 50%;\n    fill: white;\n  }\n\n  #userlist #addTodoBtnContainer :hover {\n    cursor: pointer;\n    -webkit-transform: scale(1.09);\n  }\n\n  #userlist #addTodoBtnContainer button {\n    border: 0;\n    font-size: 16px;\n    color: #b91c1c;\n    background-color: inherit;\n  }\n\n  #userlist #addTodoBtnContainer button:hover {\n    cursor: pointer;\n    -webkit-transform: scale(1.09);\n  }\n\n  div.listContainer {\n    display: flex;\n    gap: 5px;\n    max-width: 714px;\n\n    border-radius: 10px;\n    box-shadow: 1px 0px 3px 0px;\n    margin: 18px 60px;\n    padding: 15px;\n  }\n\n  #userlist .intialTextDisplay {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    text-align: center;\n  }\n\n  .intialTextDisplay p {\n    max-width: 500px;\n    display: flex;\n    max-width: 500px;\n    flex-direction: column;\n    flex-wrap: wrap;\n  }\n\n  .intialTextDisplay img {\n    width: 100%;\n    height: auto;\n    padding: 20px;\n    border-radius: 41px;\n    object-fit: contain;\n  }\n\n  .inner_container #form {\n    background-color: #64748b;\n    border-radius: 10px;\n    height: 150px;\n    display: none;\n    max-width: 600px;\n\n    margin: 17px;\n  }\n\n  #form div.formDetails {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n\n    padding: 10px;\n    margin: 0;\n  }\n\n  .priorityDateLargeScreen {\n    display: none;\n  }\n\n  #form .inputs {\n    max-width: 150px;\n  }\n\n  #form .first-inputContainer input,\n  .PtitleInputContainer input,\n  #form .second-inputContainer input,\n  .PdescriptionInputContainer input {\n    max-width: 600px;\n    height: 25px;\n    border: none;\n    outline: none;\n    color: white;\n    margin: 10px 0 0 0;\n    background-color: inherit;\n  }\n\n  p.second-inputContainer {\n    margin: 0;\n  }\n\n  #form .buttons {\n    display: flex;\n    margin: 1px 23px;\n  }\n\n  #configPriorityDateOnMobile {\n    display: flex;\n    flex-direction: column;\n    position: static;\n  }\n\n  #form .other-options-on-forms button,\n  #priority,\n  #datePicker {\n    padding: 7px;\n    border-radius: 9px;\n  }\n\n  form#ProjectForm {\n    background-color: #64748b;\n    border-radius: 10px;\n    height: 150px;\n    display: none;\n    max-width: 693px;\n    padding-left: 1rem;\n    margin: 9px 61px;\n  }\n\n  div.projectFormDetails {\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    top: 0;\n  }\n}\n\n*/ .projectButtonsContainer {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n\nselect#priority {\n  padding: 4px;\n  border-radius: 9px;\n}\n\ninput#datePicker {\n  padding: 3px;\n  border-radius: 9px;\n}\n\n@media (min-width: 769px) and (max-width: 1000px) {\n  body main {\n    display: grid;\n  }\n\n  main header {\n    grid-area: 1 / 2 / 2 / 6;\n\n    background-color: #fda4af;\n    text-align: center;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    gap: 10px;\n  }\n\n  main aside {\n    border-radius: 5px;\n    background-color: #e2e8f0;\n  }\n\n  main #Container {\n    display: flex;\n    flex-direction: column;\n    flex-wrap: wrap;\n    border-radius: 5px;\n    z-index: 1;\n  }\n\n  header .menuController {\n    display: block;\n    width: 40px;\n    height: 40px;\n  }\n\n  header .menuController svg {\n    display: block;\n    width: 40px;\n    height: 40px;\n    fill: white;\n    background-color: black;\n    border-radius: 10px;\n  }\n\n  #userlist .intialTextDisplay {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    text-align: center;\n  }\n\n  #userlist .intialTextDisplay p {\n    font-size: 1.2rem;\n    text-align: center;\n    font-weight: 500;\n    margin: 10px 0 0 0;\n    max-width: 600px;\n  }\n\n  #userlist #addTodoBtnContainer {\n    display: none;\n    align-items: center;\n    gap: 5px;\n    margin: 27px 0 11px 26px;\n  }\n\n  #task {\n    display: flex;\n    align-items: center;\n    gap: 5px;\n    margin: 27px 0 11px 26px;\n  }\n\n  #userlist #addTodoBtnContainer svg {\n    background-color: #dc2626;\n    border-radius: 50%;\n    fill: white;\n  }\n\n  #userlist #addTodoBtnContainer :hover {\n    cursor: pointer;\n    -webkit-transform: scale(1.09);\n  }\n\n  #userlist #addTodoBtnContainer button {\n    border: 0;\n    font-size: 16px;\n    color: #b91c1c;\n    background-color: inherit;\n  }\n\n  #userlist #addTodoBtnContainer button:hover {\n    cursor: pointer;\n    -webkit-transform: scale(1.09);\n  }\n\n  div.listContainer {\n    display: flex;\n    gap: 5px;\n    max-width: 714px;\n\n    border-radius: 10px;\n    box-shadow: 1px 0px 3px 0px;\n    margin: 18px 60px;\n    padding: 15px;\n  }\n\n  .inner_container #form {\n    background-color: #64748b;\n    border-radius: 10px;\n    height: 150px;\n    display: none;\n    max-width: 750px;\n\n    margin: 17px;\n  }\n\n  #form div.formDetails {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n\n    padding: 9px 20px;\n    margin: 0;\n  }\n\n  .priorityDateLargeScreen {\n    display: none;\n  }\n\n  #form .inputs {\n    max-width: 150px;\n  }\n\n  #form .first-inputContainer input,\n  .PtitleInputContainer input {\n    max-width: 420px;\n    max-height: 60px;\n    border: none;\n    outline: none;\n    color: white;\n    background-color: inherit;\n    margin: 0;\n  }\n\n  #form .second-inputContainer input,\n  .PdescriptionInputContainer input {\n    max-width: 420px;\n    max-height: 60px;\n    border: none;\n    outline: none;\n    color: rgb(90, 77, 77);\n    background-color: inherit;\n    margin: 0;\n  }\n\n  #form .buttons {\n    display: flex;\n    justify-content: space-between;\n    margin: 1px 33px;\n  }\n\n  form#ProjectForm {\n    background-color: #64748b;\n    border-radius: 10px;\n    height: 150px;\n    display: none;\n    max-width: 693px;\n    padding-left: 1rem;\n    margin: 9px 61px;\n  }\n\n  div.projectFormDetails {\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    top: 0;\n  }\n\n  div.priorityDateOnLargeScreen {\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n    align-items: center;\n    top: 0;\n  }\n\n  .projectButtonsContainer {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n  }\n\n  #configPriorityDateOnMobile {\n    display: flex;\n    flex-direction: column;\n    position: static;\n  }\n\n  #form .other-options-on-forms button,\n  #priority,\n  #datePicker {\n    padding: 8px;\n    border-radius: 6px;\n    border: none;\n  }\n}\n\nmain {\n  display: grid;\n  grid-template-columns: 190px 1fr;\n  grid-template-rows: 70px 570px;\n}\n\nheader {\n  grid-area: 1 / 2 / 2 / 6;\n  background-color: #fda4af;\n  text-align: center;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\naside {\n  grid-area: 1/ 1/ 4/ 2;\n  border-radius: 5px;\n  background-color: #e2e8f0;\n}\n\n#Container {\n  grid-area: 2 / 2 / 3 / 4;\n\n  display: grid;\n  grid-template-columns: 100px 650px minmax(250px, 350px);\n  border-radius: 5px;\n}\n\n.inner_container {\n  grid-area: 1 / 2 / 3 / 3;\n}\n\n.intialTextDisplay {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  padding: 10px;\n}\n\n.intialTextDisplay p {\n  font-size: 1.2rem;\n  text-align: center;\n  font-weight: 500;\n  margin: 10px 0 0 0;\n}\n\n.intialTextDisplay img {\n  width: 100%;\n  height: auto;\n  border-radius: 30px;\n  padding: 20px;\n}\n\n#addTodoBtnContainer {\n  display: none;\n}\n\n.empty {\n  grid-area: 1 / 3 / 5 / 4;\n  background-color: #f8f8f8;\n  background-image: url(\"./images/Todo-1.jpg\");\n  background-size: cover;\n  background-position: center;\n}\n\n.menuController {\n  display: none;\n  width: 40px;\n  height: 40px;\n}\n\n.checkBox {\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  width: 20px;\n  height: 20px;\n  border: 1px solid #ccc;\n  border-radius: 3px;\n  outline: none;\n  cursor: pointer;\n  position: relative;\n}\n\n.checkBox::before {\n  content: \"\";\n  display: block;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  font-size: 16px;\n  color: rgb(22, 252, 22);\n  opacity: 0;\n  transition: opacity 0.3s ease;\n}\n\n.checkBox:hover::before {\n  content: \"✓\";\n  opacity: 0.5;\n}\n\nsvg {\n  width: 25px;\n  height: 25px;\n}\n\n#task {\n  display: flex;\n  align-items: center;\n  gap: 5px;\n  margin: 27px 0 11px 26px;\n}\n\n#task svg {\n  background-color: #dc2626;\n  border-radius: 50%;\n  fill: white;\n}\n\n#task :hover {\n  cursor: pointer;\n  -webkit-transform: scale(1.09);\n}\n\n#task button {\n  border: 0;\n  font-size: 16px;\n  color: #b91c1c;\n  background-color: inherit;\n}\n\n#task button:hover {\n  cursor: pointer;\n  -webkit-transform: scale(1.09);\n}\n\nbutton.deleteTask {\n  padding: 10px;\n  border: none;\n  border-radius: 7px;\n  font-size: 1.1rem;\n  background-color: #e0487c;\n  color: white;\n  transition: transform 0.2s ease-out;\n}\n\nbutton.deleteTask:hover {\n  transform: scale(1.05);\n  background-color: #4b0707;\n\n}\n\nbutton.deleteTask:active {\n  transform: scale(0.9);\n}\n\n.listContainer {\n  display: flex;\n  gap: 5px;\n  max-width: 714px;\n\n  border-radius: 10px;\n  box-shadow: 1px 0px 3px 0px;\n  margin: 18px 18px;\n  padding: 15px;\n}\n\n.priorityDateOnLargeScreen {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  max-width: 200px;\n}\n\n.projectButtonsContainer {\n  display: flex;\n  justify-content: space-between;\n  padding-inline: 18px\n}\n\n.projectButtonsContainer button {\n  border: none;\n  border-radius: 7px;\n  padding: 9px;\n}\n\n.excluded {\n  color: red;\n}\n\n.taskContainer {\n  display: flex;\n  flex: 1;\n  justify-content: space-between;\n}\n\n.taskTitle,\n.newProject-task-title,\n.editableSaveTaskEl {\n  margin: 0;\n  font-size: 18px;\n  text-decoration: none;\n  text-decoration-color: red;\n}\n\n.taskDescription,\n.newProject-description {\n  margin: 0;\n  font-size: 14px;\n}\n\n.taskPriority {\n  font-size: 19px;\n  border-radius: 6px;\n  background-color: #573d3d;\n  padding: 6px;\n  margin: 0 0 7px;\n  color: white;\n}\n\n.taskPriority:hover {\n  transform: scale(1.05);\n  background-color: #9c1515;\n}\n\n\n.innerTaskHandler {\n  display: flex;\n  flex-direction: column;\n  justify-items: center;\n  justify-content: center;\n  align-items: center;\n  margin: 0px 15px 0 40px;\n}\n\naside ul li {\n  list-style: none;\n  display: inline-block;\n  width: 100%;\n  padding: 10px 20px;\n}\n\n.inbox-container {\n  display: flex;\n  align-items: center;\n  gap: 5px;\n}\n\n\n.inbox {\n  font-size: 20px;\n}\n\n.inboxListContainer {\n  display: flex;\n  gap: 5px;\n}\n\n.inboxTaskContainer {\n  display: flex;\n  flex: 1;\n  justify-content: space-between;\n}\n\n.inboxTaskTitle {\n  margin: 0;\n  font-size: 18px;\n}\n\n.inboxTaskDescription {\n  margin: 0;\n  font-size: 14px;\n}\n\n.inboxTaskPriority {\n  margin: 0 20px 0 0;\n  font-size: 20px;\n}\n\n.dueDate {\n  margin: 0;\n}\n\n.edit {\n  border: none;\n  outline: none;\n  font-size: 17px;\n  max-width: 110px;\n  margin: 0 0;\n}\n\n#projects h3 {\n  margin: 0 0 0 10px;\n}\n\n#form {\n  background-color: #64748b;\n  border-radius: 10px;\n  height: 140px;\n  display: none;\n  padding-left: 1rem;\n  margin: 10px 10px 0 0;\n}\n\n.formDetails {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin: 12px 15px;\n}\n\ninput#datePicker {\n  max-width: 118px;\n}\n\n.buttons {\n  display: flex;\n  justify-content: space-between;\n  margin: 1px 33px;\n}\n\n.buttons button {\n  border: none;\n  border-radius: 7px;\n  padding: 7px;\n  transition: transform 0.2s ease-out;\n}\n\n.buttons button:hover {\n  transform: scale(1.05);\n}\n\n#ProjectForm {\n  background-color: #64748b;\n  border-radius: 10px;\n  height: 150px;\n  display: none;\n  padding: 10px;\n  margin: 15px 15px 0 17px;\n}\n\n.projectFormDetails {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding-left: 1rem;\n  top: 0;\n}\n\n.first-inputContainer input,\n.PtitleInputContainer input {\n  max-width: 600px;\n  height: 37px;\n  border: none;\n  outline: none;\n  color: white;\n  margin: 10px 0 0 0;\n  background-color: inherit;\n}\n\n.task-title,\n.description {\n  width: 350px;\n}\n\n.first-inputContainer input::placeholder,\n.PtitleInputContainer input::placeholder {\n  color: white;\n  padding: 0 10px;\n  opacity: 1;\n}\n\n.second-inputContainer input,\n.PdescriptionInputContainer input {\n  max-width: 600px;\n  height: 37px;\n  border: none;\n  outline: none;\n  color: white;\n  background-color: inherit;\n  margin: 0;\n}\n\n.pTitle, .pDescription {\n  width: 350px;\n  font-size: 1.07rem;\n}\n\n.second-inputContainer input::placeholder,\n.PdescriptionInputContainer input::placeholder {\n  padding: 0 10px;\n  color: white;\n  opacity: 1;\n}\n\n.first-inputContainer,\n.second-inputContainer {\n  margin: 10px 0 0 0;\n  font-size: 1rem;\n}\n\n.submitBtn:active {\n  transform: active scale(1.1);\n}\n\n.other-options-on-forms button,\n#priority,\ninput#datePicker {\n  transition: transform 0.3s ease-in;\n  padding: 7px;\n  border-radius: 7px;\n  border: none;\n  background-color: #07c4dd;\n  color: white;\n  font-size: 15px;\n  font-weight: 600;\n}\n\n#priority {\n  margin: 10px 0 8px 0;\n}\n\n#projectPriority,\n.footer {\n  padding: 7px;\n  border-radius: 5px;\n  margin: 0 4px 5px 0;\n}\n\n.addProjectsContainer {\n  display: flex;\n\n  align-items: center;\n  gap: 10px;\n}\n\n.inbox-container:hover, .addProjectsContainer:hover, .project_text:hover, #project-dropdown:hover {\n  cursor: pointer;\n  -webkit-transform: scale(1.05);\n  text-decoration: underline;\n}\n\n\n.addProjectsContainer svg {\n  width: 25px;\n  height: 25px;\n}\n\n#addNewProjectEl {\n  margin: 0;\n  font-size: 19px;\n}\n\n.project_text {\n  margin: 0 0 10px 17px;\n  display: flex;\n  align-self: center;\n  justify-self: center;\n  padding: 9px;\n  border-radius: 5px 0px 0px 5px;\n}\n\n\n#project-dropdown {\n  border: 0;\n  background-color: inherit;\n  font-size: 18px;\n  font-weight: 550;\n  max-width: 160px;\n}\n\n\n#project-dropdown:focus {\n  border: none;\n  outline: none;\n}\n\n#newProjectsFormContainerEl {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  justify-items: center;\n}\n\n#ProjectsFormNameContainerEl {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  justify-items: center;\n}\n\n.inputNewprojectFormName {\n  display: none;\n  background-color: #cee3e3;\n  max-width: 400px;\n  max-height: 300px;\n  border-radius: 10px;\n  padding: 46px;\n  text-align: center;\n  margin: 60px 0 0 0;\n  box-shadow: 0px 9px 3px 0px;\n}\n\n.inputNewprojectFormName h2 {\n  margin: 0 0 10px 0;\n}\n\n.inputNewProjectName {\n  max-width: 350px;\n  max-height: 35px;\n  padding: 17px;\n  border: none;\n  border-radius: 7px;\n  font-size: 19px;\n}\n\ninput.SaveProjectName {\n  padding: 9px;\n  border: none;\n  border-radius: 8px;\n  max-width: 100px;\n  height: 40px;\n  font-size: 19px;\n  background-color: rgb(240, 59, 134);\n  color: white;\n}\n\n.projectNameSaverBtnContainer {\n  margin: 10px 0;\n}\n\n.projectNameSaverBtnContainer button {\n  padding: 9px;\n  border: none;\n  border-radius: 8px;\n  width: 100px;\n  height: 40px;\n  font-size: 19px;\n}\n\n#ProjectsFormNameContainerEl .Cancel {\n  background-color: grey;\n  color: white;\n}\n\n#newProjectTasksContainer {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n#newProjectTasksInnerContainer {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 5px;\n  margin: 10px;\n  box-shadow: #5c5555 1px 3px 3px 1px;\n  border-radius: 10px;\n  padding: 10px;\n  width: 95px;\n  position: relative;\n  left: 250px;\n}\n\nsvg.addTask {\n  border-radius: 50%;\n  fill: wheat;\n  background-color: red;\n}\n\n.newProjectAddBtn {\n  border: 0;\n  background-color: inherit;\n  font-weight: 500;\n}\n\n#ProjectdatePicker {\n  padding: 2px;\n  border-radius: 5px;\n  border: none;\n  height: 32px;\n}\n\n#submitBtnForProject {\n  padding: 7px;\n  border-radius: 9px;\n}\n\n#submitBtnForProject:active {\n  transform: scale(1.1);\n}\n\n.cancelForProjectBtn {\n  padding: 7px;\n  border-radius: 9px;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/dom-El-2.js":
/*!*************************!*\
  !*** ./src/dom-El-2.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createNewProjectTaskBtn: () => (/* binding */ createNewProjectTaskBtn),
/* harmony export */   displayTask: () => (/* binding */ displayTask),
/* harmony export */   editTask: () => (/* binding */ editTask),
/* harmony export */   getUserTodo: () => (/* binding */ getUserTodo),
/* harmony export */   getnewProjectInputName: () => (/* binding */ getnewProjectInputName),
/* harmony export */   inputNewprojectFormName: () => (/* binding */ inputNewprojectFormName),
/* harmony export */   saveEditedTask: () => (/* binding */ saveEditedTask)
/* harmony export */ });
/* harmony import */ var _dom_El__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom-El */ "./src/dom-El.js");
// import { myProjects } from './dom-El'

// import { editTask } from "./logics";

const myProjects = document.querySelector("#projects h3");
const screenContainer = document.querySelector("#Container");
const userList = document.querySelector("#userlist");
const addProjectsContainer = document.querySelector(".addProjectsContainer");
const newProjectsFormContainerEl = document.querySelector(
  "#newProjectsFormContainerEl",
);
const inputNewprojectFormName = document.querySelector(
  ".inputNewprojectFormName",
);
const newProjectNameRequest = document.querySelector(".newProjectNameRequest");
const newProjectNameTitle = document.querySelector(".headerTextContent");
const SaveProjectName = document.querySelector(".SaveProjectName");
const newProjectTask = document.querySelector(".newProjectTask");
const newProjectTasksContainer = document.createElement("div");
const newProjectTasksInnerContainer = document.createElement("div");

const newProjectAddBtn = document.createElement("button");
const submitTaskBtn = document.querySelector("#submitBtnForProject");
const cancelTaskBtn = document.querySelector(".cancelForProjectBtn");
const displayProjectTodos = document.querySelector("#displayProjectTodos");

let projectForm = document.querySelector("#ProjectForm");
let form = document.querySelector("#form");
let inputFieldEl = document.querySelector(".pTitle");
let descriptionFieldEl = document.querySelector(".pDescription");
let selectPriorityEl = document.querySelector("#projectPriority");
let dueDate = document.querySelector("#ProjectdatePicker");
const projectDropDown = document.querySelector("#project-dropdown");
let selectedProject = projectDropDown.value;

const newProjectFormNameBtnEl = document.querySelector(
  ".newProjectFormNameBtnEl",
);

class getList {
  constructor(title, description, priority, date) {
    this.title = title;
    this.description = description;
    this.priority = priority;
    this.date = date;
  }
}

function displayRequestNewProjectFormName() {
   const intialTextDisplayContainer = document.querySelector(
    ".intialTextDisplayContainer",
  );

  intialTextDisplayContainer.style.display = 'none';
  if (userList.textContent) {
    userList.textContent = "";
  }

  if (form.style.display === "block") {
    form.style.display = "none";
  }
  if (projectForm.style.display === "block") {
    projectForm.style.display = "none";
  }

  inputNewprojectFormName.style.display = "block";
  return { inputNewprojectFormName };
}
addProjectsContainer.addEventListener(
  "click",
  displayRequestNewProjectFormName,
);

//Get New Project Name Function.
function getnewProjectInputName() {
  const inputNewProjectName = document.querySelector(".inputNewProjectName");
  const inputNewProjectNameValue = inputNewProjectName.value;
  newProjectNameTitle.textContent = inputNewProjectNameValue;

  // projects.push(inputNewProjectNameValue)

  inputNewProjectName.value = "";

  addProjectName(inputNewProjectNameValue);

  if (inputNewprojectFormName) {
    inputNewprojectFormName.style.display = "none";
  } else {
    inputNewprojectFormName.style.display = "block";
  }

  return { inputNewProjectNameValue };
}

//Cancel project form name request
newProjectFormNameBtnEl.addEventListener(
  "click",
  () => (inputNewprojectFormName.style.display = "none"),
);

let svgElement = null;
function createNewProjectTaskBtn() {
  newProjectTasksContainer.setAttribute("id", "newProjectTasksContainer");
  newProjectTasksInnerContainer.setAttribute(
    "id",
    "newProjectTasksInnerContainer",
  );
  
 if (newProjectTasksInnerContainer.contains(svgElement)) {
    newProjectTasksInnerContainer.removeChild(svgElement);
  }

  newProjectAddBtn.textContent = "Add task";

  // Create the SVG element
  const svgNamespace = "http://www.w3.org/2000/svg";
    svgElement = document.createElementNS(svgNamespace, "svg");

  // Set the class and viewBox attributes
  svgElement.setAttribute("class", "addTask");
  svgElement.setAttribute("viewBox", "0 0 24 24");

  // Create the title element
  const titleElement = document.createElementNS(svgNamespace, "title");
  titleElement.textContent = "plus";
  svgElement.appendChild(titleElement);

  // Create the path element
  const pathElement = document.createElementNS(svgNamespace, "path");
  pathElement.setAttribute("d", "M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z");
  svgElement.appendChild(pathElement);

  newProjectAddBtn.classList.add("newProjectAddBtn");

 

  newProjectTasksInnerContainer.appendChild(svgElement);
  newProjectTasksInnerContainer.appendChild(newProjectAddBtn);
  newProjectTasksContainer.appendChild(newProjectTasksInnerContainer);

  newProjectsFormContainerEl.appendChild(newProjectTasksContainer);

  return newProjectsFormContainerEl;
}

function displayNewProjectForm() {
  projectForm.style.display = "block";
}

// Add project name to local storage and  populate project drop down
function addProjectName(projectName) {
  let projects = JSON.parse(localStorage.getItem("projects")) || [];
  projects.push(projectName);
  localStorage.setItem("projects", JSON.stringify(projects));
  fillProjectDropDown();
  return { projectName };
}

// Populate project drop-down
function fillProjectDropDown() {
  projectDropDown.textContent = "";
  let projects = JSON.parse(localStorage.getItem("projects")) || [];

  if (projects) {
    const option = document.createElement("option");
    option.value = "";
    option.textContent = "Select project";
    projectDropDown.appendChild(option);

    projects?.forEach((project) => {
      const option = document.createElement("option");
      option.value = project;
      option.textContent = project;
      projectDropDown.appendChild(option);
    });
  }
}
fillProjectDropDown();

// Display each project's to-dos when selected
projectDropDown.addEventListener("change", () => {
  userList.textContent = "";
  const intialTextDisplayContainer = document.querySelector(
    ".intialTextDisplayContainer",
  );
  intialTextDisplayContainer.style.display = "none";

  displayProjectTodos.textContent = "";
  newProjectTasksContainer.style.display = "none";

  //Clear the add task button container each time user select a project
  newProjectTasksContainer.textContent = "";

  //Display no form if any form is in block
  if (form.style.display === "block") {
    form.style.display = "none";
  }

  selectedProject = projectDropDown.value;
  const header = document.querySelector("header h1");
  header.textContent = selectedProject;
  // getSelectedTodos(selectedProject);
  displayToDosForCurrentProject(selectedProject);
  // displaySelectedToDos(selectedProject);
  displayNewProjectForm();
});

function getUserTodo() {
  let taskInputValue = inputFieldEl.value;
  let descriptionInputValue = descriptionFieldEl.value;
  let priorityValueEl = selectPriorityEl.value;
  let dueDateValueEl = dueDate.value;

  if (taskInputValue.length > 35) {
    return alert(
      `Input should be less or equal to the 35 characters, you have entered ${taskInputValue.length} characters`,
    );
  } else if (descriptionInputValue.length > 40) {
    return alert(
      `Description should be less or equal to the 40 characters, you have entered ${descriptionInputValue.length} characters`,
    );
  }

  const date = new Date(dueDateValueEl);

  const options = {
    weekday: "long",
    year: "numeric",
    month: "short",
    day: "numeric",
  };

  const dayOfWeek = date.toLocaleDateString("en-Us", options);

  let userTodo = new getList(
    taskInputValue,
    descriptionInputValue,
    priorityValueEl,
    dayOfWeek,
  );

  return userTodo;
}

// Clear form input
function clearInputForm() {
  inputFieldEl.value = "";
  descriptionFieldEl.value = "";
  selectPriorityEl.value = "Select Priority";
  dueDate.value = "";
}

let currentProjectName = [];
let toDo = [];
function addNewProjectTodos() {
  currentProjectName = JSON.parse(localStorage.getItem("projects")) || [];
  const currentProject = currentProjectName[currentProjectName.length - 1];
  console.log(currentProjectName);

  // if (projectForm.style.display === "block") {
  // selectedProject = currentProject;

  const selectedProject = projectDropDown.value;

  if (selectedProject) {
    toDo = JSON.parse(localStorage.getItem(selectedProject)) || [];

    const newToDo = getUserTodo();
    toDo.push(newToDo);

    localStorage.setItem(selectedProject, JSON.stringify(toDo));
    console.log(toDo);

    console.log(toDo);
    clearInputForm();
    displayToDosForCurrentProject(selectedProject);
  } else {
    console.log(currentProject);
    //If there is an existing project get it from the local storage
    const toDo = JSON.parse(localStorage.getItem(currentProject)) || [];

    const newToDo = getUserTodo();

    toDo.push(newToDo);

    localStorage.setItem(currentProject, JSON.stringify(toDo));

    console.log(toDo);
    clearInputForm();
    displayToDosForCurrentProject(currentProject);
  }
  // }
}

function displayToDosForCurrentProject(projectName) {
  currentProjectName = projectName;
  // console.log(currentProjectName);

  // saveTask(projectName);
  let projectTodos = JSON.parse(localStorage.getItem(projectName)) || [];

  toDo = projectTodos;
  console.log(toDo);
  // console.log(currentTodos);

  projectTodos.forEach((todo, index) => {
    displayTask(
      todo.title,
      todo.description,
      todo.priority,
      todo.date,
      index,
      projectName,
    );
  });
}

function displayTask(
  saveTitleData,
  saveDescriptionData,
  savePriorityData,
  saveDueDateData,
  index,
  projectName,
) {
  const listContainer = document.createElement("div");
  const taskContainer = document.createElement("p");
  const innerTaskContainer = document.createElement("div");
  const innerTaskHandler = document.createElement("div");

  innerTaskHandler.classList.add("innerTaskHandler");
  innerTaskContainer.classList.add("innerTaskContainer");
  taskContainer.classList.add("taskContainer");
  listContainer.classList.add("listContainer");

  const checkBoxContainer = document.createElement("p");
  checkBoxContainer.classList.add("checkBoxContainer");
  const checkBox = document.createElement("input");
  checkBox.classList.add("checkBox");
  checkBox.setAttribute("type", "checkbox");

  const taskTitle = document.createElement("h4");
  const taskDescription = document.createElement("p");
  const dueDate = document.createElement("p");
  const taskPriority = document.createElement("p");
  const deleteTask = document.createElement("button");

  taskTitle.classList.add("taskTitle");
  taskDescription.classList.add("taskDescription");
  dueDate.classList.add("dueDate");
  deleteTask.classList.add("deleteTask");
  taskPriority.classList.add("taskPriority");

  taskTitle.textContent = ` ${saveTitleData}`;
  taskDescription.textContent = `${saveDescriptionData}`;
  taskPriority.textContent = `${savePriorityData}`;
  dueDate.textContent = `${saveDueDateData}`;
  deleteTask.textContent = "Delete task";

  deleteTask.dataset.index = index;
  deleteTask.dataset.project = projectName;
  checkBox.dataset.index = index;
  checkBox.dataset.project = projectName;

  taskTitle.dataset.fieldType = "title";
  taskDescription.dataset.fieldType = "description";
  taskPriority.dataset.fieldType = "taskPriority";
  dueDate.dataset.fieldType = "dueDate";

  taskTitle.dataset.index = index;
  taskDescription.dataset.index = index;
  taskPriority.dataset.index = index;
  dueDate.dataset.index = index;

  innerTaskContainer.appendChild(taskTitle);
  innerTaskContainer.appendChild(taskDescription);
  innerTaskContainer.appendChild(dueDate);

  innerTaskHandler.appendChild(taskPriority);
  innerTaskHandler.appendChild(deleteTask);

  taskContainer.appendChild(innerTaskContainer);
  taskContainer.appendChild(innerTaskHandler);

  checkBoxContainer.appendChild(checkBox);
  listContainer.appendChild(checkBoxContainer);

  listContainer.appendChild(taskContainer);
  userList.appendChild(listContainer);

  taskTitle.addEventListener("dblclick", editTask);
  taskDescription.addEventListener("dblclick", editTask);
  taskPriority.addEventListener("dblclick", editTask);
  dueDate.addEventListener("dblclick", editTask);

  deleteTask.addEventListener("click", deleteToDo);
  deleteTask.addEventListener("touchstart", deleteToDo);

  handleCheckBox(checkBox, taskTitle, taskDescription);
}

function editTask(event) {
  const target = event.target;

  const fieldType = target.dataset.fieldType; // Identify the field type(title,description,priority,date)
  const index = target.dataset.index;
  const taskPriority = ["Urgent", "Important", "Low priority"];

  let taskInput;
  if (fieldType === "title" || fieldType === "description") {
    taskInput = document.createElement("input");
    taskInput.type = "text";
    taskInput.value = target.textContent;
  } else if (fieldType === "dueDate") {
    taskInput = document.createElement("input");
    taskInput.type = "date";
    taskInput.value = target.textContent;
  } else if (fieldType === "taskPriority") {
    taskInput = document.createElement("select");

    taskPriority.forEach((priority) => {
      const option = document.createElement("option");
      option.value = priority;
      option.textContent = priority;

      if (priority === target.textContent) {
        option.selected = true;
      }
      taskInput.appendChild(option);
    });
  }

  //Store the fieldType in the input dataset
  taskInput.dataset.fieldType = fieldType;
  taskInput.dataset.index = index;

  target.style.display = "none";
  target.parentNode.insertBefore(taskInput, target.nextSibling); // Insert the input field next to target element

  taskInput.classList.add("edit");
  //   const selectedValue = taskInput.value;
  // console.log(selectedValue);

  if (taskInput.type === "text") {
    taskInput.select(); // Automatically select the content of the input field
  }

  taskInput.addEventListener("blur", saveEditedTask); // Save task when task lose focus on input element.
  taskInput.addEventListener("keypress", saveEditedTask); // Save task on pressing Enter
}

function saveEditedTask(event) {
  console.log(toDo);

  if (event.type === "blur" || event.key === "Enter") {
    const input = event.target;

    let fieldType = input.dataset.fieldType;
    let index = input.dataset.index; // Get the index from the input dataset

    let newValue;
    //If select element, get it value else get input value
    if (input.tagName === "SELECT") {
      newValue = input.options[input.selectedIndex].value;
      toDo[index].priority = newValue;
      console.log(toDo[index].priority);
    } else {
      newValue = input.value;
    }
    // const currentProject = currentProjectName[currentProjectName.length - 1];

    //Get the task from the local storage
    // let toDo = JSON.parse(localStorage.getItem(currentProjectName)) || [];
    console.log(toDo);

    //Check if the index is not out of bounds in the array
    if (index < toDo.length) {
      if (fieldType === "title") {
        toDo[index].title = newValue;
        console.log(toDo[index].title);
      } else if (fieldType === "description") {
        toDo[index].description = newValue;
      } else if (fieldType === "dueDate") {
        let dueDate = newValue;
        const date = new Date(dueDate);

        const options = {
          weekday: "long",
          year: "numeric",
          month: "short",
          day: "numeric",
        };

        toDo[index].date = date.toLocaleDateString("en-Us", options);
      }
    }

    // Save the updated tasks to local storage
    localStorage.setItem(currentProjectName, JSON.stringify(toDo));

    // Update the original element's text content and show it again
    let originalElement = input.previousSibling;

    originalElement.textContent = newValue;

    originalElement.style.display = "block";

    // Remove the input field if it is still part of the DOM

    input.remove();

    userList.textContent = "";

    // Re-render the todo list if necessary
    displayToDosForCurrentProject(currentProjectName);
  }
}

function handleCheckBox(checkBox, taskTitle, taskDescription) {
  checkBox.addEventListener("change", (event) => {
    if (checkBox.checked === true) {
      const checkBox = event.target;
      console.log(checkBox);
      const index = checkBox.dataset.index;
      const projectName = checkBox.dataset.project;

      toDo = JSON.parse(localStorage.getItem(projectName)) || [];

      if (index !== -1) {
        checkBox.remove(checkBox);
        toDo.splice(index, 1);
        //update To-do item in local storage
        localStorage.setItem(projectName, JSON.stringify(toDo));
        console.log(toDo);
        userList.textContent = "";
        displayToDosForCurrentProject(projectName);
        alert("Task completed!");
      }
      console.log("true");
    } else {
      taskTitle.style.textDecoration = "none";
      taskDescription.style.textDecoration = "none";
      console.log("false");
    }
  });
}

//Delete the todo that get clicked
function deleteToDo(event) {
  const button = event.target;
  const index = button.dataset.index;
  const currentProject = button.dataset.project;
  console.log(currentProject);

  // const currentProject = currentProjectName[currentProjectName.length - 1];
  toDo = JSON.parse(localStorage.getItem(currentProject)) || [];

  console.log(toDo);

  if (index !== -1) {
    toDo.splice(index, 1);
    //update To-do item in local storage
    localStorage.setItem(currentProject, JSON.stringify(toDo));
    console.log(toDo);
    userList.textContent = "";
    displayToDosForCurrentProject(currentProject);
  }
}

//Cancel project form from displaying.
function cancelFormDisplay() {
  inputFieldEl.value = "";
  descriptionFieldEl.value = "";
  selectPriorityEl.value = "Select Priority";
  dueDate.value = "";
  projectForm.style.display = "none";
  console.log("cancel form!");
  newProjectsFormContainerEl.style.display = "block";
  if (newProjectTasksContainer.style.display === "none") {
    newProjectTasksContainer.style.display = "block";
  }
  createNewProjectTaskBtn();
  // displayToDosForCurrentProject(currentProjectName.slice().pop());
}
cancelTaskBtn.addEventListener("click", cancelFormDisplay);

//Prevent form Default when submiting project name
const submitNewProjectFormName = (event) => {
  event.preventDefault();
  getnewProjectInputName();
  displayNewProjectForm();
  // createNewProjectTaskBtn();
};
SaveProjectName.addEventListener("click", submitNewProjectFormName);
newProjectNameRequest.addEventListener("submit", (event) =>
  event.preventDefault(),
);

newProjectTasksContainer.addEventListener("click", () => {
  displayNewProjectForm();
  newProjectTasksContainer.style.display = "none";
  newProjectTasksContainer.textContent = "";
});

function submitForm(event) {
  event.preventDefault();
  userList.textContent = "";

  addNewProjectTodos();
  // displayToDosForCurrentProject(projectName);
  // addTodoToselectedProject();
}
submitTaskBtn.addEventListener("click", submitForm);
projectForm.addEventListener("submit", (event) => event.preventDefault());


/***/ }),

/***/ "./src/dom-El.js":
/*!***********************!*\
  !*** ./src/dom-El.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   myProjects: () => (/* binding */ myProjects)
/* harmony export */ });
/* harmony import */ var _dom_El_2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom-El-2 */ "./src/dom-El-2.js");






const mainContainer = document.querySelector("main");
const header = document.querySelector(".headerTextContent");
const userList = document.querySelector("#userlist");
const inboxTaskDisplay = document.querySelector(".displayInboxTask");
const form = document.querySelector("#form");
let projectForm = document.querySelector("#ProjectForm");
const cancelForm = document.querySelector(".cancel");
const submitBtn = document.querySelector("#submitBtn");
const addTaskbtn = document.querySelector("#task");
const addTaskMobileBtn = document.querySelector("#addTodoBtnContainer");

let inbox = document.querySelector(".inbox");
const toDoContainer = document.createElement("section");
toDoContainer.classList.add("toDoContainerInbox");
const inboxForm = document.createElement("form");
inboxForm.classList.add("inboxForm");
const inboxTask = document.createElement("div");
inboxTask.classList.add("inboxTask");

let taskTitle = document.querySelector(".task-title");
let taskDescription = document.querySelector(".description");
let taskPriority = document.querySelector("#priority");
let dueDate = document.querySelector("#datePicker");

class getList {
  constructor(title, description, priority, date) {
    this.title = title;
    this.description = description;
    this.priority = priority;
    this.date = date;
  }
}

const myProjects = document.querySelector("#projects h3");
const defaultProjects = document.querySelector("#projects");

function displayForm(event) {
  const header = document.querySelector("header h1");

  header.textContent = "Add your To do";
  userList.textContent = "";
  const intialTextDisplayContainer = document.querySelector(
    ".intialTextDisplayContainer",
  );
  intialTextDisplayContainer.style.display = "none";

  let newProjectBtn = (0,_dom_El_2__WEBPACK_IMPORTED_MODULE_0__.createNewProjectTaskBtn)();
  newProjectBtn.style.display = "none";
  form.style.display = "block";
  if ((projectForm.style.display = "block")) {
    projectForm.style.display = "none";
  }
}
addTaskbtn.addEventListener("click", displayForm);
addTaskMobileBtn.addEventListener("click", displayForm);

document.addEventListener("DOMContentLoaded", () => {
  displayToDos();
});

let toDos = JSON.parse(localStorage.getItem("toDos")) || [];

function acceptInput() {
  let taskInputValue = taskTitle.value;
  let descriptionInputValue = taskDescription.value;
  let priorityValueEl = taskPriority.value;
  let dueDateValueEl = dueDate.value;

  console.log(taskInputValue.length);
  if (taskInputValue.length > 30) {
    return alert(
      `Input should be less or equal to the 35 characters, you have entered ${taskInputValue.length} characters`,
    );
  } else if (descriptionInputValue.length > 35) {
    return alert(
      `Description should be less or equal to the 40 characters, you have entered ${descriptionInputValue.length} characters`,
    );
  }

  const date = new Date(dueDateValueEl);

  const options = {
    weekday: "long",
    year: "numeric",
    month: "short",
    day: "numeric",
  };

  const dayOfWeek = date.toLocaleDateString("en-Us", options);

  let userToDo = new getList(
    taskInputValue,
    descriptionInputValue,
    priorityValueEl,
    dayOfWeek,
  );

  toDos.push(userToDo);

  localStorage.setItem("toDos", JSON.stringify(toDos));

  clearForm();
}

function clearForm() {
  taskTitle.value = "";
  taskDescription.value = "";
  dueDate.value = "";
  taskPriority.value = "Select Priority";
}

function displayToDos() {
  let userTodos = JSON.parse(localStorage.getItem("toDos")) || [];

  userTodos?.forEach((todoObj, index) => {
    getElementForTaskDisplay(
      todoObj.title,
      todoObj.description,
      todoObj.priority,
      todoObj.date,
      index,
    );
  });
}

function getElementForTaskDisplay(
  saveTitleData,
  saveDescriptionData,
  savePriorityData,
  saveDueDateData,
  index,
) {
  header.textContent = "Create Your To-Do List.";
  const listContainer = document.createElement("div");
  const taskContainer = document.createElement("p");
  const innerTaskContainer = document.createElement("div");
  const innerTaskHandler = document.createElement("div");
  innerTaskHandler.classList.add("innerTaskHandler");
  innerTaskContainer.classList.add("innerTaskContainer");
  taskContainer.classList.add("taskContainer");
  listContainer.classList.add("listContainer");

  const checkBoxContainer = document.createElement("p");
  checkBoxContainer.classList.add("checkBoxContainer");
  const checkBox = document.createElement("input");
  checkBox.classList.add("checkBox");
  checkBox.setAttribute("type", "checkbox");

  const taskTitle = document.createElement("h4");
  const taskDescription = document.createElement("p");
  const dueDate = document.createElement("p");
  const taskPriority = document.createElement("p");
  const deleteTask = document.createElement("button");

  taskTitle.classList.add("taskTitle");
  taskDescription.classList.add("taskDescription");

  dueDate.classList.add("dueDate");
  deleteTask.classList.add("deleteTask");
  taskPriority.classList.add("taskPriority");

  taskTitle.textContent = ` ${saveTitleData}`;
  taskDescription.textContent = `${saveDescriptionData}`;
  taskPriority.textContent = `${savePriorityData}`;
  dueDate.textContent = `${saveDueDateData}`;
  deleteTask.textContent = "Delete task";

  taskTitle.dataset.fieldType = "title";
  taskDescription.dataset.fieldType = "description";
  taskPriority.dataset.fieldType = "taskPriority";
  dueDate.dataset.fieldType = "dueDate";

  taskTitle.dataset.index = index;
  taskDescription.dataset.index = index;
  taskPriority.dataset.index = index;
  dueDate.dataset.index = index;
  checkBox.dataset.index = index;

  innerTaskContainer.appendChild(taskTitle);
  innerTaskContainer.appendChild(taskDescription);
  innerTaskContainer.appendChild(dueDate);

  innerTaskHandler.appendChild(taskPriority);
  innerTaskHandler.appendChild(deleteTask);

  taskContainer.appendChild(innerTaskContainer);
  taskContainer.appendChild(innerTaskHandler);

  checkBoxContainer.appendChild(checkBox);
  listContainer.appendChild(checkBoxContainer);

  listContainer.appendChild(taskContainer);
  userList.appendChild(listContainer);

  taskTitle.addEventListener("dblclick", editTask);
  taskTitle.addEventListener("touchstart", editTask);

  taskDescription.addEventListener("dblclick", editTask);
  taskDescription.addEventListener("touchstart", editTask);

  taskPriority.addEventListener("dblclick", editTask);
  taskPriority.addEventListener("touchstart", editTask);

  dueDate.addEventListener("dblclick", editTask);
  dueDate.addEventListener("touchstart", editTask);

  deleteTask.addEventListener("click", deleteToDo);
  deleteTask.addEventListener("touchstart", deleteToDo);

  handleCheckBox(checkBox, taskTitle, taskDescription);
}

function editTask(event) {
  const target = event.target;
  console.log(target);
  const fieldType = target.dataset.fieldType;
  const index = target.dataset.index;
  console.log(index);
  const taskPriority = ["Urgent", "Important", "Low priority"];

  let taskInput;

  if (fieldType === "title" || fieldType === "description") {
    taskInput = document.createElement("input");
    taskInput.type = "text";
    taskInput.value = target.textContent;
  } else if (fieldType === "dueDate") {
    taskInput = document.createElement("input");
    taskInput.type = "date";
    taskInput.value = target.textContent;
  } else if (fieldType === "taskPriority") {
    taskInput = document.createElement("select");

    taskPriority.forEach((priority) => {
      const option = document.createElement("option");
      option.value = priority;
      option.textContent = priority;

      if (priority === target.textContent) {
        option.selected = true;
      }
      taskInput.appendChild(option);
    });
  }

  taskInput.dataset.fieldType = fieldType;
  taskInput.dataset.index = index;

  target.style.display = "none";
  target.parentNode.insertBefore(taskInput, target.nextSibling);

  taskInput.classList.add("edit");

  if (taskInput.type === "text") {
    taskInput.select();
  }

  taskInput.addEventListener("blur", saveEditedTask);
  taskInput.addEventListener("keypress", saveEditedTask);
}

function saveEditedTask(event) {
  if (event.type === "blur" || event.key === "Enter") {
    let input = event.target;
    console.log(input);
    let fieldType = input.dataset.fieldType;
    let index = input.dataset.index;

    console.log(toDos);

    let newValue;
    if (input.tagName === "SELECT") {
      newValue = input.options[input.selectedIndex].value;
      toDos[index].priority = newValue;
      console.log(toDos[index].priority);
    } else {
      newValue = input.value;
    }

    if (index < toDos.length) {
      if (fieldType === "title") {
        toDos[index].title = newValue;
        console.log(toDos[index].title);
        console.log(newValue);
      } else if (fieldType === "description") {
        toDos[index].description = newValue;
        console.log(index);
        console.log(toDos[description]);
      } else if (fieldType === "dueDate") {
        let dueDate = newValue;
        const date = new Date(dueDate);

        const options = {
          weekday: "long",
          year: "numeric",
          month: "short",
          day: "numeric",
        };
        console.log(toDos);

        toDos[index].date = date.toLocaleDateString("en-Us", options);
      }
    }

    localStorage.setItem("toDos", JSON.stringify(toDos));

    let originalElement = input.previousSibling;

    originalElement.textContent = newValue;

    originalElement.style.display = "block";

    input.remove();

    userList.textContent = "";

    displayToDos();
  }
}

function handleCheckBox(checkBox, taskTitle, taskDescription) {
  checkBox.addEventListener("click", (event) => {
    if (checkBox.checked === true) {
      localStorage.setItem("toDos", JSON.stringify(toDos));
      console.log(toDos);

      const listContainerEl = event.target;
      console.log(listContainerEl);
      const index = listContainerEl.dataset.index;

      if (index !== -1) {
        listContainerEl.remove(listContainerEl);
        toDos.splice(index, 1);

        localStorage.setItem("toDos", JSON.stringify(toDos));
        console.log(toDos);
        userList.textContent = "";
        displayToDos();
        alert("Task completed!");
      }

      console.log("true");
    } else {
      taskTitle.style.textDecoration = "none";
      taskDescription.style.textDecoration = "none";
      console.log("false");
    }
  });
}

function deleteToDo() {
  const listContainerEl = this.closest(".listContainer");
  const buttons = document.querySelectorAll(".deleteTask");
  const index = Array.from(buttons).indexOf(this);

  if (index !== -1) {
    listContainerEl.remove(listContainerEl);
    toDos.splice(index, 1);

    localStorage.setItem("toDos", JSON.stringify(toDos));
    console.log(toDos);
  }
}

function cancelFormDisplay() {
    let  addTodoBtnOnMobile= document.querySelector('#addTodoBtnContainer')

  let mediaQuery = window.matchMedia('(max-width: 500px)')
  if (mediaQuery.matches) {
     addTodoBtnOnMobile.style.display = "block";
    console.log('true')
  } else {
    console.log('false')

  }
  const intialTextDisplayContainer = document.querySelector(
    ".intialTextDisplayContainer",
  );
  taskTitle.value = "";
  taskDescription.value = "";
  dueDate.value = "";
  taskPriority.value = "Select Priority";
  form.style.display = "none";
  intialTextDisplayContainer.style.display = "block";
 

}
cancelForm.addEventListener("click", cancelFormDisplay);

function submitForm() {
  userlist.textContent = "";

  acceptInput();
  displayToDos();
}
form.addEventListener("submit", (event) => event.preventDefault());
submitBtn.addEventListener("click", submitForm);

function displayInboxForm() {
  const header = document.querySelector("header h1");
  userlist.textContent = "";
  header.textContent = "Inbox";

  displayToDos();
  form.style.display = "block";

  if (_dom_El_2__WEBPACK_IMPORTED_MODULE_0__.inputNewprojectFormName.style.display === "block") {
    _dom_El_2__WEBPACK_IMPORTED_MODULE_0__.inputNewprojectFormName.style.display = "none";
  }
  projectForm.style.display = "none";
}
inbox.addEventListener("click", displayInboxForm);


/***/ }),

/***/ "./src/responsive.js":
/*!***************************!*\
  !*** ./src/responsive.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _dom_El_2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom-El-2 */ "./src/dom-El-2.js");

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


/***/ }),

/***/ "./src/images/Todo-1.jpg":
/*!*******************************!*\
  !*** ./src/images/Todo-1.jpg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "3916b1eee65e53d7f1df.jpg";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _src_styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../src/styles.css */ "./src/styles.css");
/* harmony import */ var _dom_El__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dom-El */ "./src/dom-El.js");
/* harmony import */ var _dom_El_2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dom-El-2 */ "./src/dom-El-2.js");
/* harmony import */ var _responsive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./responsive */ "./src/responsive.js");





/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzBHO0FBQ2pCO0FBQ087QUFDaEcsNENBQTRDLG1IQUFzQztBQUNsRiw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GLHlDQUF5QyxzRkFBK0I7QUFDeEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSwwQkFBMEIsbUNBQW1DO0FBQzdEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxPQUFPLGlGQUFpRixVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLGNBQWMsV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsY0FBYyxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxXQUFXLFVBQVUsVUFBVSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxNQUFNLFVBQVUsWUFBWSxhQUFhLFdBQVcsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sTUFBTSxZQUFZLGFBQWEsV0FBVyxVQUFVLFVBQVUsVUFBVSxZQUFZLE9BQU8sTUFBTSxZQUFZLGFBQWEsV0FBVyxVQUFVLFVBQVUsWUFBWSxXQUFXLE1BQU0sT0FBTyxVQUFVLFlBQVksYUFBYSxXQUFXLE1BQU0sTUFBTSxLQUFLLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLE1BQU0sTUFBTSxVQUFVLFlBQVksV0FBVyxVQUFVLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxZQUFZLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLFdBQVcsT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsVUFBVSxhQUFhLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxjQUFjLFdBQVcsVUFBVSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxPQUFPLFFBQVEsWUFBWSxXQUFXLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLE9BQU8sVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLEtBQUssTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssS0FBSyxVQUFVLE1BQU0sS0FBSyxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxNQUFNLEtBQUssWUFBWSxhQUFhLFdBQVcsVUFBVSxhQUFhLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxjQUFjLGFBQWEsV0FBVyxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxPQUFPLE1BQU0sWUFBWSxhQUFhLFdBQVcsVUFBVSxVQUFVLFlBQVksV0FBVyxNQUFNLE1BQU0sWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sT0FBTyxVQUFVLFlBQVksV0FBVyxLQUFLLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxhQUFhLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsTUFBTSxLQUFLLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxXQUFXLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLGNBQWMsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLE1BQU0sTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxPQUFPLE9BQU8sVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLE1BQU0sVUFBVSxVQUFVLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsVUFBVSxNQUFNLEtBQUssWUFBWSxhQUFhLFFBQVEsS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxPQUFPLEtBQUssVUFBVSxVQUFVLE9BQU8sS0FBSyxZQUFZLFdBQVcsT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLE1BQU0sTUFBTSxZQUFZLFdBQVcsVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sTUFBTSxVQUFVLE1BQU0sTUFBTSxVQUFVLFVBQVUsVUFBVSxNQUFNLE1BQU0sWUFBWSxXQUFXLFVBQVUsVUFBVSxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLE9BQU8sTUFBTSxVQUFVLFVBQVUsVUFBVSxNQUFNLE1BQU0sWUFBWSxXQUFXLE9BQU8sS0FBSyxZQUFZLE9BQU8sT0FBTyxZQUFZLFdBQVcsWUFBWSxXQUFXLFlBQVksV0FBVyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxNQUFNLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxXQUFXLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsUUFBUSxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLFdBQVcsWUFBWSxRQUFRLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLFFBQVEsS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FB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QUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUNybUJ5QztBQUNhO0FBQ0Q7QUFDQTtBQUNBOztBQUVyRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVPO0FBQ1A7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsc0JBQXNCLGtFQUF1QjtBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxDQUFDOztBQUVEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsOEVBQThFLHVCQUF1QjtBQUNyRztBQUNBLElBQUk7QUFDSjtBQUNBLG9GQUFvRiw4QkFBOEI7QUFDbEg7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsOEJBQThCLGNBQWM7QUFDNUMsbUNBQW1DLG9CQUFvQjtBQUN2RCxnQ0FBZ0MsaUJBQWlCO0FBQ2pELDJCQUEyQixnQkFBZ0I7QUFDM0M7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsTUFBTSw4REFBdUI7QUFDN0IsSUFBSSw4REFBdUI7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNqYXFEO0FBQ3JEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7VUN0Q0E7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOzs7OztXQ3pCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0NsQkE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOzs7OztXQ3JCQTs7Ozs7Ozs7Ozs7OztBQ0EyQjtBQUNFO0FBQ0c7QUFDTSIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9zdHlsZXMuY3NzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzLmNzcz80NGIyIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RvbS1FbC0yLmpzIiwid2VicGFjazovLy8uL3NyYy9kb20tRWwuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Jlc3BvbnNpdmUuanMiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4vaW1hZ2VzL1RvZG8tMS5qcGdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYGJvZHkge1xuICBwYWRkaW5nOiAwO1xuICBtYXJnaW46IDA7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbjpyb290IHtcbiAgLS1ob3Zlci1jb2xvcjogI2ZkYTRhZjtcbiAgLS1iYWNrZ3JvdW5kLWNvbG9yOiAjNmY5ZTllO1xufVxuXG4qIHtcbiAgcGFkZGluZzogMDtcbiAgbWFyZ2luOiAwO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuXG4gIGZvbnQtZmFtaWx5OiBcIlJvYm90b1wiLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogNDAwO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA1NTBweCkge1xuICBib2R5IG1haW4ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICB6LWluZGV4OiAxO1xuICB9XG5cbiAgbWFpbiBoZWFkZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZGE0YWY7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBnYXA6IDEwcHg7XG4gIH1cblxuICAjdG9nZ2xlTWVudUljb24ge1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICB0b3A6IDIwcHg7XG4gICAgcmlnaHQ6IDIwcHg7XG4gICAgd2lkdGg6IDYwcHg7XG4gICAgaGVpZ2h0OiA2MHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM2Yjg4ODg7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XG4gICAgdHJhbnNpdGlvbjogdG9wIDAuM3M7XG5cbiAgICB6LWluZGV4OiAxMDAwO1xuICB9XG5cbiAgI3RvZ2dsZU1lbnVJY29uOjpiZWZvcmUge1xuICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHdpZHRoOiAyOHB4O1xuICAgIGhlaWdodDogMnB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01cHgpO1xuICAgIHRyYW5zaXRpb246IDAuMnM7XG4gIH1cblxuICAjdG9nZ2xlTWVudUljb246OmFmdGVyIHtcbiAgICBjb250ZW50OiBcIlwiO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB3aWR0aDogMjhweDtcbiAgICBoZWlnaHQ6IDJweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSg1cHgpO1xuICAgIHRyYW5zaXRpb246IDAuMnM7XG4gIH1cblxuICAjdG9nZ2xlTWVudUljb24uYWN0aXZlOjpiZWZvcmUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwcHgpIHJvdGF0ZSg0NWRlZyk7XG4gIH1cblxuICAjdG9nZ2xlTWVudUljb24uYWN0aXZlOjphZnRlciB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDBweCkgcm90YXRlKC00NWRlZyk7XG4gIH1cblxuICBhc2lkZSNtZW51IHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IC0yMjBweDtcbiAgICB3aWR0aDogMjIwcHg7XG4gICAgaGVpZ2h0OiAxMDB2aDtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgZmlsdGVyOiB3aGl0ZTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNzk4OWExO1xuICAgIHRyYW5zaXRpb246IDAuM3M7XG4gICAgei1pbmRleDogMTAwMDtcbiAgICBmaWxsOiB3aGl0ZTtcbiAgfVxuXG4gIGFzaWRlI21lbnUuYWN0aXZlIHtcbiAgICBsZWZ0OiAwO1xuICB9XG5cbiAgbWFpbiBhc2lkZSB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2UyZThmMDtcbiAgfVxuXG4gIG1haW4gI0NvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIH1cblxuICBoZWFkZXIgLm1lbnVDb250cm9sbGVyIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICB3aWR0aDogNDBweDtcbiAgICBoZWlnaHQ6IDQwcHg7XG4gIH1cblxuICBoZWFkZXIgLm1lbnVDb250cm9sbGVyIHN2ZyB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgd2lkdGg6IDQwcHg7XG4gICAgaGVpZ2h0OiA0MHB4O1xuICAgIGZpbGw6IHdoaXRlO1xuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIH1cblxuICAjdXNlcmxpc3Qge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBtYXgtd2lkdGg6IDU1MHB4O1xuICB9XG5cbiAgZGl2Lmxpc3RDb250YWluZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZ2FwOiA1cHg7XG4gICAgbWF4LXdpZHRoOiA1MTVweDtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIGJveC1zaGFkb3c6IDFweCAwcHggM3B4IDBweDtcbiAgICBtYXJnaW46IDE0cHggMTRweCAwIDE5cHg7XG5cbiAgICBwYWRkaW5nOiAxMHB4O1xuICB9XG5cbiAgI3VzZXJsaXN0IC5pbnRpYWxUZXh0RGlzcGxheSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG5cbiAgLmludGlhbFRleHREaXNwbGF5IGltZyB7XG4gICAgbWF4LXdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogYXV0bztcbiAgICBwYWRkaW5nOiAxOHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDMwcHg7XG4gICAgb2JqZWN0LWZpdDogY29udGFpbjtcbiAgfVxuXG4gIC5wb3BVcENvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBtYXgtd2lkdGg6IDIwMHB4O1xuICAgIHBhZGRpbmc6IDMwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzA3YzRkZDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcbiAgfVxuXG4gICN1c2VybGlzdCAjYWRkVG9kb0J0bkNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGdhcDogNXB4O1xuICAgIG1hcmdpbjogMjdweCAwIDExcHggMjZweDtcbiAgfVxuXG4gICN0YXNrIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZ2FwOiA1cHg7XG4gICAgbWFyZ2luOiAyN3B4IDAgMTFweCAyNnB4O1xuICB9XG5cbiAgI3VzZXJsaXN0ICNhZGRUb2RvQnRuQ29udGFpbmVyIHN2ZyB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2RjMjYyNjtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgZmlsbDogd2hpdGU7XG4gIH1cblxuICAjdXNlcmxpc3QgI2FkZFRvZG9CdG5Db250YWluZXIgOmhvdmVyIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEuMDkpO1xuICB9XG5cbiAgI3VzZXJsaXN0ICNhZGRUb2RvQnRuQ29udGFpbmVyIGJ1dHRvbiB7XG4gICAgYm9yZGVyOiAwO1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBjb2xvcjogI2I5MWMxYztcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmhlcml0O1xuICAgIHRyYW5zaXRpb246IDAuM3M7XG4gIH1cblxuICAjdXNlcmxpc3QgI2FkZFRvZG9CdG5Db250YWluZXIgYnV0dG9uOmhvdmVyIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEuMDkpO1xuICB9XG5cbiAgLmlubmVyX2NvbnRhaW5lciAjZm9ybSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzY0NzQ4YjtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIG1heC1oZWlnaHQ6IDEzNXB4O1xuICAgIG1heC13aWR0aDogNTE1cHggIWltcG9ydGFudDtcbiAgICBoZWlnaHQ6IDE0MHB4O1xuICAgIHBhZGRpbmctbGVmdDogMXJlbTtcbiAgICBkaXNwbGF5OiBub25lO1xuICAgIG1heC13aWR0aDogNDgwcHg7XG4gICAgbWFyZ2luOiAxMHB4IDEwcHggMCAxMHB4O1xuICB9XG5cbiAgZGl2LmlucHV0TmV3cHJvamVjdEZvcm1OYW1lIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNjZWUzZTM7XG4gICAgbWF4LXdpZHRoOiAzMDBweDtcbiAgICBtYXgtaGVpZ2h0OiAzMDBweDtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIHBhZGRpbmc6IDI1cHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIG1hcmdpbjogNjBweCAwIDAgMDtcbiAgICBib3gtc2hhZG93OiAwcHggOXB4IDNweCAwcHg7XG4gIH1cblxuICAuaW5wdXROZXdwcm9qZWN0Rm9ybU5hbWUgaDIge1xuICAgIG1hcmdpbjogMCAwIDEwcHggMDtcbiAgfVxuXG4gIC5pbnB1dE5ld3Byb2plY3RGb3JtTmFtZSAuaW5wdXROZXdQcm9qZWN0TmFtZSB7XG4gICAgbWF4LXdpZHRoOiAzMDBweDtcbiAgICBtYXgtaGVpZ2h0OiAzNXB4O1xuICAgIHBhZGRpbmc6IDE0cHg7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGJvcmRlci1yYWRpdXM6IDdweDtcbiAgfVxuXG4gIGlucHV0LlNhdmVQcm9qZWN0TmFtZSB7XG4gICAgcGFkZGluZzogOXB4O1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XG4gICAgbWF4LXdpZHRoOiAxMDBweDtcbiAgICBoZWlnaHQ6IDQwcHg7XG4gICAgZm9udC1zaXplOiAxOXB4O1xuICB9XG5cbiAgLnByb2plY3ROYW1lU2F2ZXJCdG5Db250YWluZXIge1xuICAgIG1hcmdpbjogMTBweCAwO1xuICB9XG5cbiAgLnByb2plY3ROYW1lU2F2ZXJCdG5Db250YWluZXIgYnV0dG9uIHtcbiAgICBwYWRkaW5nOiA5cHg7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgICB3aWR0aDogMTAwcHg7XG4gICAgaGVpZ2h0OiA0MHB4O1xuICAgIGZvbnQtc2l6ZTogMTlweDtcbiAgfVxuXG4gIC5pbm5lcl9jb250YWluZXIgI1Byb2plY3RGb3JtIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjQ3NDhiO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgbWF4LWhlaWdodDogMTM0cHg7XG4gICAgbWF4LXdpZHRoOiA1MTVweDtcbiAgICBkaXNwbGF5OiBub25lO1xuICAgIG1heC13aWR0aDogNTAwcHg7XG4gICAgbWFyZ2luOiA5cHggMTBweCAwIDIzcHg7XG4gIH1cblxuICAucHJvamVjdEZvcm1EZXRhaWxzIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgaGVpZ2h0OiA4MHB4O1xuICB9XG5cbiAgZGl2LnByaW9yaXR5RGF0ZU9uTGFyZ2VTY3JlZW4ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHRvcDogMDtcbiAgICBtYXgtd2lkdGg6IDIwMHB4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIH1cblxuICAucHJvamVjdElucHV0Q29udGFpbmVyIHtcbiAgICBtYXgtd2lkdGg6IDIwMHB4O1xuICB9XG5cbiAgLnByb2plY3RJbnB1dENvbnRhaW5lciBwIGlucHV0IHtcbiAgICBtYXgtd2lkdGg6IDIwMHB4O1xuICB9XG5cbiAgLmlubmVyVGFza0NvbnRhaW5lciAuZWRpdCB7XG4gICAgbWF4LXdpZHRoOiAxNDBweDtcbiAgfVxuXG4gIC5wcm9qZWN0SW5wdXRDb250YWluZXIgLlBkZXNjcmlwdGlvbklucHV0Q29udGFpbmVyIHtcbiAgICBtYXJnaW46IDEwcHggMCAwIDA7XG4gIH1cblxuICBkaXYjY29uZmlnUHJpb3JpdHlEYXRlT25Nb2JpbGUge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBtYXgtd2lkdGg6IDIwMHB4O1xuICAgIHBvc2l0aW9uOiBzdGF0aWM7XG4gIH1cblxuICAjY29uZmlnUHJpb3JpdHlEYXRlT25Nb2JpbGUgI3ByaW9yaXR5LFxuICAjZGF0ZVBpY2tlciB7XG4gICAgcGFkZGluZzogMnB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgICBtYXgtd2lkdGg6IDEwNHB4O1xuICAgIG1pbi13aWR0aDogODBweDtcbiAgfVxuXG4gICNQcm9qZWN0Rm9ybSAuZm9vdGVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIHBhZGRpbmc6IDAgMTBweDtcbiAgICBnYXA6IDA7XG4gIH1cblxuICAjUHJvamVjdEZvcm0gLnByb2plY3RCdXR0b25zQ29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHBhZGRpbmc6IDAgMTBweDtcbiAgICBnYXA6IDA7XG4gIH1cblxuICAjZm9ybSAuZm9ybURldGFpbHMge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICBtYXJnaW46IDA7XG4gIH1cblxuICAjZm9ybUZvb3Rlck9uTW9iaWxlIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIHBhZGRpbmc6IDAgMTBweDtcbiAgfVxuXG4gICNmb3JtRm9vdGVyT25Nb2JpbGUgLmJ1dHRvbnMge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgcGFkZGluZzogMCAxMHB4O1xuICAgIG1hcmdpbjogMDtcbiAgICBnYXA6IDA7XG4gIH1cblxuICAucHJpb3JpdHlEYXRlTGFyZ2VTY3JlZW4ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgfVxuXG4gICNmb3JtIC5pbnB1dHMge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBtYXgtd2lkdGg6IDE1MHB4O1xuICB9XG5cbiAgI2Zvcm0gLmZpcnN0LWlucHV0Q29udGFpbmVyIGlucHV0LFxuICAuUHRpdGxlSW5wdXRDb250YWluZXIgaW5wdXQge1xuICAgIG1heC13aWR0aDogMTY1cHg7XG4gICAgbWF4LWhlaWdodDogMTVweDtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgb3V0bGluZTogbm9uZTtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgbWFyZ2luOiAxMHB4IDA7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogaW5oZXJpdDtcbiAgfVxuXG4gICNmb3JtIC5zZWNvbmQtaW5wdXRDb250YWluZXIgaW5wdXQsXG4gIC5QZGVzY3JpcHRpb25JbnB1dENvbnRhaW5lciBpbnB1dCB7XG4gICAgbWF4LXdpZHRoOiAxNzhweDtcbiAgICBtYXgtaGVpZ2h0OiAxNXB4O1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBvdXRsaW5lOiBub25lO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmhlcml0O1xuICAgIG1hcmdpbjogMDtcbiAgfVxuXG4gICNmb3JtIC5vdGhlci1vcHRpb25zLW9uLWZvcm1zIGJ1dHRvbixcbiAgI2NvbmZpZ1ByaW9yaXR5RGF0ZU9uTW9iaWxlICNwcmlvcml0eSxcbiAgI2RhdGVQaWNrZXIge1xuICAgIHBhZGRpbmc6IDRweDtcbiAgICBib3JkZXItcmFkaXVzOiA2cHg7XG4gICAgbWF4LXdpZHRoOiAxMDRweDtcbiAgICBtaW4td2lkdGg6IDgwcHg7XG4gIH1cbn1cblxuQG1lZGlhIChtaW4td2lkdGg6IDU1MXB4KSBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgYm9keSBtYWluIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIH1cblxuICBtYWluIGhlYWRlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZkYTRhZjtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGdhcDogMTBweDtcbiAgfVxuXG4gIG1haW4gYXNpZGUge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNlMmU4ZjA7XG4gICAgei1pbmRleDogMjtcbiAgfVxuXG4gIGFzaWRlIHVsLFxuICB1bCBzZWxlY3Qge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgZmlsbDogd2hpdGU7XG4gIH1cblxuICBzZWxlY3QjcHJvamVjdC1kcm9wZG93biB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDQyLCA0MCwgNDkpO1xuICB9XG5cbiAgbWFpbiAjQ29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgZmxleC13cmFwOiB3cmFwO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICB6LWluZGV4OiAxO1xuICB9XG5cbiAgaGVhZGVyIC5tZW51Q29udHJvbGxlciB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgd2lkdGg6IDQwcHg7XG4gICAgaGVpZ2h0OiA0MHB4O1xuICB9XG5cbiAgI3RvZ2dsZU1lbnVJY29uIHtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgdG9wOiAyMHB4O1xuICAgIHJpZ2h0OiAyMHB4O1xuICAgIHdpZHRoOiA1MHB4O1xuICAgIGhlaWdodDogNTBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNmY5ZTllO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xuICAgIHRyYW5zaXRpb246IHRvcCAwLjNzO1xuICAgIHotaW5kZXg6IDEwMDA7XG5cbiAgICB6LWluZGV4OiAxMDAwO1xuICB9XG5cbiAgI3RvZ2dsZU1lbnVJY29uOjpiZWZvcmUge1xuICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHdpZHRoOiAyOHB4O1xuICAgIGhlaWdodDogMnB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01cHgpO1xuICAgIHRyYW5zaXRpb246IDAuMnM7XG4gIH1cblxuICAjdG9nZ2xlTWVudUljb246OmFmdGVyIHtcbiAgICBjb250ZW50OiBcIlwiO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB3aWR0aDogMjhweDtcbiAgICBoZWlnaHQ6IDJweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSg1cHgpO1xuICAgIHRyYW5zaXRpb246IDAuMnM7XG4gIH1cblxuICAjdG9nZ2xlTWVudUljb24uYWN0aXZlOjpiZWZvcmUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwcHgpIHJvdGF0ZSg0NWRlZyk7XG4gIH1cblxuICAjdG9nZ2xlTWVudUljb24uYWN0aXZlOjphZnRlciB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDBweCkgcm90YXRlKC00NWRlZyk7XG4gIH1cblxuICBhc2lkZSNtZW51IHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IC0yMjBweDtcbiAgICB3aWR0aDogMjIwcHg7XG4gICAgaGVpZ2h0OiAxMDB2aDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kLWNvbG9yKTtcbiAgICB0cmFuc2l0aW9uOiAwLjNzO1xuICB9XG5cbiAgYXNpZGUjbWVudS5hY3RpdmUge1xuICAgIGxlZnQ6IDA7XG4gIH1cblxuICBhc2lkZSB1bCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBmaWxsOiB3aGl0ZTtcbiAgfVxuXG4gIGhlYWRlciAubWVudUNvbnRyb2xsZXIgc3ZnIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICB3aWR0aDogNDBweDtcbiAgICBoZWlnaHQ6IDQwcHg7XG4gICAgZmlsbDogd2hpdGU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgfVxuXG4gICN1c2VybGlzdCAjYWRkVG9kb0J0bkNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGdhcDogNXB4O1xuICAgIG1hcmdpbjogMjdweCAwIDExcHggMjZweDtcbiAgfVxuXG4gICN0YXNrIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZ2FwOiA1cHg7XG4gICAgbWFyZ2luOiAyN3B4IDAgMTFweCAyNnB4O1xuICB9XG5cbiAgI3VzZXJsaXN0ICNhZGRUb2RvQnRuQ29udGFpbmVyIHN2ZyB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2RjMjYyNjtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgZmlsbDogd2hpdGU7XG4gIH1cblxuICAjdXNlcmxpc3QgI2FkZFRvZG9CdG5Db250YWluZXIgOmhvdmVyIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEuMDkpO1xuICB9XG5cbiAgI3VzZXJsaXN0ICNhZGRUb2RvQnRuQ29udGFpbmVyIGJ1dHRvbiB7XG4gICAgYm9yZGVyOiAwO1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBjb2xvcjogI2I5MWMxYztcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmhlcml0O1xuICB9XG5cbiAgI3VzZXJsaXN0ICNhZGRUb2RvQnRuQ29udGFpbmVyIGJ1dHRvbjpob3ZlciB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxLjA5KTtcbiAgfVxuXG4gIGRpdi5saXN0Q29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGdhcDogNXB4O1xuICAgIG1heC13aWR0aDogNzE0cHg7XG5cbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIGJveC1zaGFkb3c6IDFweCAwcHggM3B4IDBweDtcbiAgICBtYXJnaW46IDE4cHggNjBweDtcbiAgICBwYWRkaW5nOiAxNXB4O1xuICB9XG5cbiAgI3VzZXJsaXN0IC5pbnRpYWxUZXh0RGlzcGxheSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG5cbiAgLmludGlhbFRleHREaXNwbGF5IHAge1xuICAgIG1heC13aWR0aDogNTAwcHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBtYXgtd2lkdGg6IDUwMHB4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgZmxleC13cmFwOiB3cmFwO1xuICB9XG5cbiAgLmludGlhbFRleHREaXNwbGF5IGltZyB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiBhdXRvO1xuICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogNDFweDtcbiAgICBvYmplY3QtZml0OiBjb250YWluO1xuICB9XG5cbiAgLmlubmVyX2NvbnRhaW5lciAjZm9ybSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzY0NzQ4YjtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIGhlaWdodDogMTUwcHg7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgICBtYXgtd2lkdGg6IDYwMHB4O1xuXG4gICAgbWFyZ2luOiAxN3B4O1xuICB9XG5cbiAgI2Zvcm0gZGl2LmZvcm1EZXRhaWxzIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gICAgcGFkZGluZzogMTBweDtcbiAgICBtYXJnaW46IDA7XG4gIH1cblxuICAucHJpb3JpdHlEYXRlTGFyZ2VTY3JlZW4ge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cblxuICAjZm9ybSAuaW5wdXRzIHtcbiAgICBtYXgtd2lkdGg6IDE1MHB4O1xuICB9XG5cbiAgI2Zvcm0gLmZpcnN0LWlucHV0Q29udGFpbmVyIGlucHV0LFxuICAuUHRpdGxlSW5wdXRDb250YWluZXIgaW5wdXQsXG4gICNmb3JtIC5zZWNvbmQtaW5wdXRDb250YWluZXIgaW5wdXQsXG4gIC5QZGVzY3JpcHRpb25JbnB1dENvbnRhaW5lciBpbnB1dCB7XG4gICAgbWF4LXdpZHRoOiA2MDBweDtcbiAgICBoZWlnaHQ6IDI1cHg7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIG91dGxpbmU6IG5vbmU7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIG1hcmdpbjogMTBweCAwIDAgMDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmhlcml0O1xuICB9XG5cbiAgcC5zZWNvbmQtaW5wdXRDb250YWluZXIge1xuICAgIG1hcmdpbjogMDtcbiAgfVxuXG4gICNmb3JtIC5idXR0b25zIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIG1hcmdpbjogMXB4IDIzcHg7XG4gIH1cblxuICAjY29uZmlnUHJpb3JpdHlEYXRlT25Nb2JpbGUge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBwb3NpdGlvbjogc3RhdGljO1xuICB9XG5cbiAgI2Zvcm0gLm90aGVyLW9wdGlvbnMtb24tZm9ybXMgYnV0dG9uLFxuICAjcHJpb3JpdHksXG4gICNkYXRlUGlja2VyIHtcbiAgICBwYWRkaW5nOiA3cHg7XG4gICAgYm9yZGVyLXJhZGl1czogOXB4O1xuICB9XG5cbiAgZm9ybSNQcm9qZWN0Rm9ybSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzY0NzQ4YjtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIGhlaWdodDogMTUwcHg7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgICBtYXgtd2lkdGg6IDY5M3B4O1xuICAgIHBhZGRpbmctbGVmdDogMXJlbTtcbiAgICBtYXJnaW46IDlweCA2MXB4O1xuICB9XG5cbiAgZGl2LnByb2plY3RGb3JtRGV0YWlscyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICB0b3A6IDA7XG4gIH1cbn1cblxuKi8gLnByb2plY3RCdXR0b25zQ29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG5zZWxlY3QjcHJpb3JpdHkge1xuICBwYWRkaW5nOiA0cHg7XG4gIGJvcmRlci1yYWRpdXM6IDlweDtcbn1cblxuaW5wdXQjZGF0ZVBpY2tlciB7XG4gIHBhZGRpbmc6IDNweDtcbiAgYm9yZGVyLXJhZGl1czogOXB4O1xufVxuXG5AbWVkaWEgKG1pbi13aWR0aDogNzY5cHgpIGFuZCAobWF4LXdpZHRoOiAxMDAwcHgpIHtcbiAgYm9keSBtYWluIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICB9XG5cbiAgbWFpbiBoZWFkZXIge1xuICAgIGdyaWQtYXJlYTogMSAvIDIgLyAyIC8gNjtcblxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZGE0YWY7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBnYXA6IDEwcHg7XG4gIH1cblxuICBtYWluIGFzaWRlIHtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2UyZThmMDtcbiAgfVxuXG4gIG1haW4gI0NvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgei1pbmRleDogMTtcbiAgfVxuXG4gIGhlYWRlciAubWVudUNvbnRyb2xsZXIge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHdpZHRoOiA0MHB4O1xuICAgIGhlaWdodDogNDBweDtcbiAgfVxuXG4gIGhlYWRlciAubWVudUNvbnRyb2xsZXIgc3ZnIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICB3aWR0aDogNDBweDtcbiAgICBoZWlnaHQ6IDQwcHg7XG4gICAgZmlsbDogd2hpdGU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgfVxuXG4gICN1c2VybGlzdCAuaW50aWFsVGV4dERpc3BsYXkge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH1cblxuICAjdXNlcmxpc3QgLmludGlhbFRleHREaXNwbGF5IHAge1xuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgIG1hcmdpbjogMTBweCAwIDAgMDtcbiAgICBtYXgtd2lkdGg6IDYwMHB4O1xuICB9XG5cbiAgI3VzZXJsaXN0ICNhZGRUb2RvQnRuQ29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZ2FwOiA1cHg7XG4gICAgbWFyZ2luOiAyN3B4IDAgMTFweCAyNnB4O1xuICB9XG5cbiAgI3Rhc2sge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBnYXA6IDVweDtcbiAgICBtYXJnaW46IDI3cHggMCAxMXB4IDI2cHg7XG4gIH1cblxuICAjdXNlcmxpc3QgI2FkZFRvZG9CdG5Db250YWluZXIgc3ZnIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGMyNjI2O1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBmaWxsOiB3aGl0ZTtcbiAgfVxuXG4gICN1c2VybGlzdCAjYWRkVG9kb0J0bkNvbnRhaW5lciA6aG92ZXIge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMS4wOSk7XG4gIH1cblxuICAjdXNlcmxpc3QgI2FkZFRvZG9CdG5Db250YWluZXIgYnV0dG9uIHtcbiAgICBib3JkZXI6IDA7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIGNvbG9yOiAjYjkxYzFjO1xuICAgIGJhY2tncm91bmQtY29sb3I6IGluaGVyaXQ7XG4gIH1cblxuICAjdXNlcmxpc3QgI2FkZFRvZG9CdG5Db250YWluZXIgYnV0dG9uOmhvdmVyIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEuMDkpO1xuICB9XG5cbiAgZGl2Lmxpc3RDb250YWluZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZ2FwOiA1cHg7XG4gICAgbWF4LXdpZHRoOiA3MTRweDtcblxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgYm94LXNoYWRvdzogMXB4IDBweCAzcHggMHB4O1xuICAgIG1hcmdpbjogMThweCA2MHB4O1xuICAgIHBhZGRpbmc6IDE1cHg7XG4gIH1cblxuICAuaW5uZXJfY29udGFpbmVyICNmb3JtIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjQ3NDhiO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgaGVpZ2h0OiAxNTBweDtcbiAgICBkaXNwbGF5OiBub25lO1xuICAgIG1heC13aWR0aDogNzUwcHg7XG5cbiAgICBtYXJnaW46IDE3cHg7XG4gIH1cblxuICAjZm9ybSBkaXYuZm9ybURldGFpbHMge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbiAgICBwYWRkaW5nOiA5cHggMjBweDtcbiAgICBtYXJnaW46IDA7XG4gIH1cblxuICAucHJpb3JpdHlEYXRlTGFyZ2VTY3JlZW4ge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cblxuICAjZm9ybSAuaW5wdXRzIHtcbiAgICBtYXgtd2lkdGg6IDE1MHB4O1xuICB9XG5cbiAgI2Zvcm0gLmZpcnN0LWlucHV0Q29udGFpbmVyIGlucHV0LFxuICAuUHRpdGxlSW5wdXRDb250YWluZXIgaW5wdXQge1xuICAgIG1heC13aWR0aDogNDIwcHg7XG4gICAgbWF4LWhlaWdodDogNjBweDtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgb3V0bGluZTogbm9uZTtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogaW5oZXJpdDtcbiAgICBtYXJnaW46IDA7XG4gIH1cblxuICAjZm9ybSAuc2Vjb25kLWlucHV0Q29udGFpbmVyIGlucHV0LFxuICAuUGRlc2NyaXB0aW9uSW5wdXRDb250YWluZXIgaW5wdXQge1xuICAgIG1heC13aWR0aDogNDIwcHg7XG4gICAgbWF4LWhlaWdodDogNjBweDtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgb3V0bGluZTogbm9uZTtcbiAgICBjb2xvcjogcmdiKDkwLCA3NywgNzcpO1xuICAgIGJhY2tncm91bmQtY29sb3I6IGluaGVyaXQ7XG4gICAgbWFyZ2luOiAwO1xuICB9XG5cbiAgI2Zvcm0gLmJ1dHRvbnMge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIG1hcmdpbjogMXB4IDMzcHg7XG4gIH1cblxuICBmb3JtI1Byb2plY3RGb3JtIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjQ3NDhiO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgaGVpZ2h0OiAxNTBweDtcbiAgICBkaXNwbGF5OiBub25lO1xuICAgIG1heC13aWR0aDogNjkzcHg7XG4gICAgcGFkZGluZy1sZWZ0OiAxcmVtO1xuICAgIG1hcmdpbjogOXB4IDYxcHg7XG4gIH1cblxuICBkaXYucHJvamVjdEZvcm1EZXRhaWxzIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIHRvcDogMDtcbiAgfVxuXG4gIGRpdi5wcmlvcml0eURhdGVPbkxhcmdlU2NyZWVuIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgdG9wOiAwO1xuICB9XG5cbiAgLnByb2plY3RCdXR0b25zQ29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB9XG5cbiAgI2NvbmZpZ1ByaW9yaXR5RGF0ZU9uTW9iaWxlIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgcG9zaXRpb246IHN0YXRpYztcbiAgfVxuXG4gICNmb3JtIC5vdGhlci1vcHRpb25zLW9uLWZvcm1zIGJ1dHRvbixcbiAgI3ByaW9yaXR5LFxuICAjZGF0ZVBpY2tlciB7XG4gICAgcGFkZGluZzogOHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgICBib3JkZXI6IG5vbmU7XG4gIH1cbn1cblxubWFpbiB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMTkwcHggMWZyO1xuICBncmlkLXRlbXBsYXRlLXJvd3M6IDcwcHggNTcwcHg7XG59XG5cbmhlYWRlciB7XG4gIGdyaWQtYXJlYTogMSAvIDIgLyAyIC8gNjtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZkYTRhZjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuYXNpZGUge1xuICBncmlkLWFyZWE6IDEvIDEvIDQvIDI7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2UyZThmMDtcbn1cblxuI0NvbnRhaW5lciB7XG4gIGdyaWQtYXJlYTogMiAvIDIgLyAzIC8gNDtcblxuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDEwMHB4IDY1MHB4IG1pbm1heCgyNTBweCwgMzUwcHgpO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG5cbi5pbm5lcl9jb250YWluZXIge1xuICBncmlkLWFyZWE6IDEgLyAyIC8gMyAvIDM7XG59XG5cbi5pbnRpYWxUZXh0RGlzcGxheSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nOiAxMHB4O1xufVxuXG4uaW50aWFsVGV4dERpc3BsYXkgcCB7XG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIG1hcmdpbjogMTBweCAwIDAgMDtcbn1cblxuLmludGlhbFRleHREaXNwbGF5IGltZyB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IGF1dG87XG4gIGJvcmRlci1yYWRpdXM6IDMwcHg7XG4gIHBhZGRpbmc6IDIwcHg7XG59XG5cbiNhZGRUb2RvQnRuQ29udGFpbmVyIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuLmVtcHR5IHtcbiAgZ3JpZC1hcmVhOiAxIC8gMyAvIDUgLyA0O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjhmOGY4O1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19ffSk7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbn1cblxuLm1lbnVDb250cm9sbGVyIHtcbiAgZGlzcGxheTogbm9uZTtcbiAgd2lkdGg6IDQwcHg7XG4gIGhlaWdodDogNDBweDtcbn1cblxuLmNoZWNrQm94IHtcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xuICAtbW96LWFwcGVhcmFuY2U6IG5vbmU7XG4gIHdpZHRoOiAyMHB4O1xuICBoZWlnaHQ6IDIwcHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgb3V0bGluZTogbm9uZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5jaGVja0JveDo6YmVmb3JlIHtcbiAgY29udGVudDogXCJcIjtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA1MCU7XG4gIGxlZnQ6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgY29sb3I6IHJnYigyMiwgMjUyLCAyMik7XG4gIG9wYWNpdHk6IDA7XG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMC4zcyBlYXNlO1xufVxuXG4uY2hlY2tCb3g6aG92ZXI6OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwi4pyTXCI7XG4gIG9wYWNpdHk6IDAuNTtcbn1cblxuc3ZnIHtcbiAgd2lkdGg6IDI1cHg7XG4gIGhlaWdodDogMjVweDtcbn1cblxuI3Rhc2sge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDVweDtcbiAgbWFyZ2luOiAyN3B4IDAgMTFweCAyNnB4O1xufVxuXG4jdGFzayBzdmcge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGMyNjI2O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGZpbGw6IHdoaXRlO1xufVxuXG4jdGFzayA6aG92ZXIge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxLjA5KTtcbn1cblxuI3Rhc2sgYnV0dG9uIHtcbiAgYm9yZGVyOiAwO1xuICBmb250LXNpemU6IDE2cHg7XG4gIGNvbG9yOiAjYjkxYzFjO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmhlcml0O1xufVxuXG4jdGFzayBidXR0b246aG92ZXIge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxLjA5KTtcbn1cblxuYnV0dG9uLmRlbGV0ZVRhc2sge1xuICBwYWRkaW5nOiAxMHB4O1xuICBib3JkZXI6IG5vbmU7XG4gIGJvcmRlci1yYWRpdXM6IDdweDtcbiAgZm9udC1zaXplOiAxLjFyZW07XG4gIGJhY2tncm91bmQtY29sb3I6ICNlMDQ4N2M7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMnMgZWFzZS1vdXQ7XG59XG5cbmJ1dHRvbi5kZWxldGVUYXNrOmhvdmVyIHtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjA1KTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzRiMDcwNztcblxufVxuXG5idXR0b24uZGVsZXRlVGFzazphY3RpdmUge1xuICB0cmFuc2Zvcm06IHNjYWxlKDAuOSk7XG59XG5cbi5saXN0Q29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZ2FwOiA1cHg7XG4gIG1heC13aWR0aDogNzE0cHg7XG5cbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgYm94LXNoYWRvdzogMXB4IDBweCAzcHggMHB4O1xuICBtYXJnaW46IDE4cHggMThweDtcbiAgcGFkZGluZzogMTVweDtcbn1cblxuLnByaW9yaXR5RGF0ZU9uTGFyZ2VTY3JlZW4ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgbWF4LXdpZHRoOiAyMDBweDtcbn1cblxuLnByb2plY3RCdXR0b25zQ29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBwYWRkaW5nLWlubGluZTogMThweFxufVxuXG4ucHJvamVjdEJ1dHRvbnNDb250YWluZXIgYnV0dG9uIHtcbiAgYm9yZGVyOiBub25lO1xuICBib3JkZXItcmFkaXVzOiA3cHg7XG4gIHBhZGRpbmc6IDlweDtcbn1cblxuLmV4Y2x1ZGVkIHtcbiAgY29sb3I6IHJlZDtcbn1cblxuLnRhc2tDb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4OiAxO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG5cbi50YXNrVGl0bGUsXG4ubmV3UHJvamVjdC10YXNrLXRpdGxlLFxuLmVkaXRhYmxlU2F2ZVRhc2tFbCB7XG4gIG1hcmdpbjogMDtcbiAgZm9udC1zaXplOiAxOHB4O1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIHRleHQtZGVjb3JhdGlvbi1jb2xvcjogcmVkO1xufVxuXG4udGFza0Rlc2NyaXB0aW9uLFxuLm5ld1Byb2plY3QtZGVzY3JpcHRpb24ge1xuICBtYXJnaW46IDA7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cblxuLnRhc2tQcmlvcml0eSB7XG4gIGZvbnQtc2l6ZTogMTlweDtcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTczZDNkO1xuICBwYWRkaW5nOiA2cHg7XG4gIG1hcmdpbjogMCAwIDdweDtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4udGFza1ByaW9yaXR5OmhvdmVyIHtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjA1KTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzljMTUxNTtcbn1cblxuXG4uaW5uZXJUYXNrSGFuZGxlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIG1hcmdpbjogMHB4IDE1cHggMCA0MHB4O1xufVxuXG5hc2lkZSB1bCBsaSB7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDEwcHggMjBweDtcbn1cblxuLmluYm94LWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogNXB4O1xufVxuXG5cbi5pbmJveCB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbn1cblxuLmluYm94TGlzdENvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGdhcDogNXB4O1xufVxuXG4uaW5ib3hUYXNrQ29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleDogMTtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuXG4uaW5ib3hUYXNrVGl0bGUge1xuICBtYXJnaW46IDA7XG4gIGZvbnQtc2l6ZTogMThweDtcbn1cblxuLmluYm94VGFza0Rlc2NyaXB0aW9uIHtcbiAgbWFyZ2luOiAwO1xuICBmb250LXNpemU6IDE0cHg7XG59XG5cbi5pbmJveFRhc2tQcmlvcml0eSB7XG4gIG1hcmdpbjogMCAyMHB4IDAgMDtcbiAgZm9udC1zaXplOiAyMHB4O1xufVxuXG4uZHVlRGF0ZSB7XG4gIG1hcmdpbjogMDtcbn1cblxuLmVkaXQge1xuICBib3JkZXI6IG5vbmU7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGZvbnQtc2l6ZTogMTdweDtcbiAgbWF4LXdpZHRoOiAxMTBweDtcbiAgbWFyZ2luOiAwIDA7XG59XG5cbiNwcm9qZWN0cyBoMyB7XG4gIG1hcmdpbjogMCAwIDAgMTBweDtcbn1cblxuI2Zvcm0ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjQ3NDhiO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBoZWlnaHQ6IDE0MHB4O1xuICBkaXNwbGF5OiBub25lO1xuICBwYWRkaW5nLWxlZnQ6IDFyZW07XG4gIG1hcmdpbjogMTBweCAxMHB4IDAgMDtcbn1cblxuLmZvcm1EZXRhaWxzIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBtYXJnaW46IDEycHggMTVweDtcbn1cblxuaW5wdXQjZGF0ZVBpY2tlciB7XG4gIG1heC13aWR0aDogMTE4cHg7XG59XG5cbi5idXR0b25zIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBtYXJnaW46IDFweCAzM3B4O1xufVxuXG4uYnV0dG9ucyBidXR0b24ge1xuICBib3JkZXI6IG5vbmU7XG4gIGJvcmRlci1yYWRpdXM6IDdweDtcbiAgcGFkZGluZzogN3B4O1xuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4ycyBlYXNlLW91dDtcbn1cblxuLmJ1dHRvbnMgYnV0dG9uOmhvdmVyIHtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjA1KTtcbn1cblxuI1Byb2plY3RGb3JtIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzY0NzQ4YjtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgaGVpZ2h0OiAxNTBweDtcbiAgZGlzcGxheTogbm9uZTtcbiAgcGFkZGluZzogMTBweDtcbiAgbWFyZ2luOiAxNXB4IDE1cHggMCAxN3B4O1xufVxuXG4ucHJvamVjdEZvcm1EZXRhaWxzIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBwYWRkaW5nLWxlZnQ6IDFyZW07XG4gIHRvcDogMDtcbn1cblxuLmZpcnN0LWlucHV0Q29udGFpbmVyIGlucHV0LFxuLlB0aXRsZUlucHV0Q29udGFpbmVyIGlucHV0IHtcbiAgbWF4LXdpZHRoOiA2MDBweDtcbiAgaGVpZ2h0OiAzN3B4O1xuICBib3JkZXI6IG5vbmU7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgbWFyZ2luOiAxMHB4IDAgMCAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmhlcml0O1xufVxuXG4udGFzay10aXRsZSxcbi5kZXNjcmlwdGlvbiB7XG4gIHdpZHRoOiAzNTBweDtcbn1cblxuLmZpcnN0LWlucHV0Q29udGFpbmVyIGlucHV0OjpwbGFjZWhvbGRlcixcbi5QdGl0bGVJbnB1dENvbnRhaW5lciBpbnB1dDo6cGxhY2Vob2xkZXIge1xuICBjb2xvcjogd2hpdGU7XG4gIHBhZGRpbmc6IDAgMTBweDtcbiAgb3BhY2l0eTogMTtcbn1cblxuLnNlY29uZC1pbnB1dENvbnRhaW5lciBpbnB1dCxcbi5QZGVzY3JpcHRpb25JbnB1dENvbnRhaW5lciBpbnB1dCB7XG4gIG1heC13aWR0aDogNjAwcHg7XG4gIGhlaWdodDogMzdweDtcbiAgYm9yZGVyOiBub25lO1xuICBvdXRsaW5lOiBub25lO1xuICBjb2xvcjogd2hpdGU7XG4gIGJhY2tncm91bmQtY29sb3I6IGluaGVyaXQ7XG4gIG1hcmdpbjogMDtcbn1cblxuLnBUaXRsZSwgLnBEZXNjcmlwdGlvbiB7XG4gIHdpZHRoOiAzNTBweDtcbiAgZm9udC1zaXplOiAxLjA3cmVtO1xufVxuXG4uc2Vjb25kLWlucHV0Q29udGFpbmVyIGlucHV0OjpwbGFjZWhvbGRlcixcbi5QZGVzY3JpcHRpb25JbnB1dENvbnRhaW5lciBpbnB1dDo6cGxhY2Vob2xkZXIge1xuICBwYWRkaW5nOiAwIDEwcHg7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgb3BhY2l0eTogMTtcbn1cblxuLmZpcnN0LWlucHV0Q29udGFpbmVyLFxuLnNlY29uZC1pbnB1dENvbnRhaW5lciB7XG4gIG1hcmdpbjogMTBweCAwIDAgMDtcbiAgZm9udC1zaXplOiAxcmVtO1xufVxuXG4uc3VibWl0QnRuOmFjdGl2ZSB7XG4gIHRyYW5zZm9ybTogYWN0aXZlIHNjYWxlKDEuMSk7XG59XG5cbi5vdGhlci1vcHRpb25zLW9uLWZvcm1zIGJ1dHRvbixcbiNwcmlvcml0eSxcbmlucHV0I2RhdGVQaWNrZXIge1xuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4zcyBlYXNlLWluO1xuICBwYWRkaW5nOiA3cHg7XG4gIGJvcmRlci1yYWRpdXM6IDdweDtcbiAgYm9yZGVyOiBub25lO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDdjNGRkO1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cblxuI3ByaW9yaXR5IHtcbiAgbWFyZ2luOiAxMHB4IDAgOHB4IDA7XG59XG5cbiNwcm9qZWN0UHJpb3JpdHksXG4uZm9vdGVyIHtcbiAgcGFkZGluZzogN3B4O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIG1hcmdpbjogMCA0cHggNXB4IDA7XG59XG5cbi5hZGRQcm9qZWN0c0NvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG5cbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiAxMHB4O1xufVxuXG4uaW5ib3gtY29udGFpbmVyOmhvdmVyLCAuYWRkUHJvamVjdHNDb250YWluZXI6aG92ZXIsIC5wcm9qZWN0X3RleHQ6aG92ZXIsICNwcm9qZWN0LWRyb3Bkb3duOmhvdmVyIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMS4wNSk7XG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xufVxuXG5cbi5hZGRQcm9qZWN0c0NvbnRhaW5lciBzdmcge1xuICB3aWR0aDogMjVweDtcbiAgaGVpZ2h0OiAyNXB4O1xufVxuXG4jYWRkTmV3UHJvamVjdEVsIHtcbiAgbWFyZ2luOiAwO1xuICBmb250LXNpemU6IDE5cHg7XG59XG5cbi5wcm9qZWN0X3RleHQge1xuICBtYXJnaW46IDAgMCAxMHB4IDE3cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAganVzdGlmeS1zZWxmOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDlweDtcbiAgYm9yZGVyLXJhZGl1czogNXB4IDBweCAwcHggNXB4O1xufVxuXG5cbiNwcm9qZWN0LWRyb3Bkb3duIHtcbiAgYm9yZGVyOiAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmhlcml0O1xuICBmb250LXNpemU6IDE4cHg7XG4gIGZvbnQtd2VpZ2h0OiA1NTA7XG4gIG1heC13aWR0aDogMTYwcHg7XG59XG5cblxuI3Byb2plY3QtZHJvcGRvd246Zm9jdXMge1xuICBib3JkZXI6IG5vbmU7XG4gIG91dGxpbmU6IG5vbmU7XG59XG5cbiNuZXdQcm9qZWN0c0Zvcm1Db250YWluZXJFbCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XG59XG5cbiNQcm9qZWN0c0Zvcm1OYW1lQ29udGFpbmVyRWwge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1pdGVtczogY2VudGVyO1xufVxuXG4uaW5wdXROZXdwcm9qZWN0Rm9ybU5hbWUge1xuICBkaXNwbGF5OiBub25lO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2VlM2UzO1xuICBtYXgtd2lkdGg6IDQwMHB4O1xuICBtYXgtaGVpZ2h0OiAzMDBweDtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgcGFkZGluZzogNDZweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW46IDYwcHggMCAwIDA7XG4gIGJveC1zaGFkb3c6IDBweCA5cHggM3B4IDBweDtcbn1cblxuLmlucHV0TmV3cHJvamVjdEZvcm1OYW1lIGgyIHtcbiAgbWFyZ2luOiAwIDAgMTBweCAwO1xufVxuXG4uaW5wdXROZXdQcm9qZWN0TmFtZSB7XG4gIG1heC13aWR0aDogMzUwcHg7XG4gIG1heC1oZWlnaHQ6IDM1cHg7XG4gIHBhZGRpbmc6IDE3cHg7XG4gIGJvcmRlcjogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogN3B4O1xuICBmb250LXNpemU6IDE5cHg7XG59XG5cbmlucHV0LlNhdmVQcm9qZWN0TmFtZSB7XG4gIHBhZGRpbmc6IDlweDtcbiAgYm9yZGVyOiBub25lO1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIG1heC13aWR0aDogMTAwcHg7XG4gIGhlaWdodDogNDBweDtcbiAgZm9udC1zaXplOiAxOXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQwLCA1OSwgMTM0KTtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4ucHJvamVjdE5hbWVTYXZlckJ0bkNvbnRhaW5lciB7XG4gIG1hcmdpbjogMTBweCAwO1xufVxuXG4ucHJvamVjdE5hbWVTYXZlckJ0bkNvbnRhaW5lciBidXR0b24ge1xuICBwYWRkaW5nOiA5cHg7XG4gIGJvcmRlcjogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xuICB3aWR0aDogMTAwcHg7XG4gIGhlaWdodDogNDBweDtcbiAgZm9udC1zaXplOiAxOXB4O1xufVxuXG4jUHJvamVjdHNGb3JtTmFtZUNvbnRhaW5lckVsIC5DYW5jZWwge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmV5O1xuICBjb2xvcjogd2hpdGU7XG59XG5cbiNuZXdQcm9qZWN0VGFza3NDb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuI25ld1Byb2plY3RUYXNrc0lubmVyQ29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogNXB4O1xuICBtYXJnaW46IDEwcHg7XG4gIGJveC1zaGFkb3c6ICM1YzU1NTUgMXB4IDNweCAzcHggMXB4O1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBwYWRkaW5nOiAxMHB4O1xuICB3aWR0aDogOTVweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBsZWZ0OiAyNTBweDtcbn1cblxuc3ZnLmFkZFRhc2sge1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGZpbGw6IHdoZWF0O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XG59XG5cbi5uZXdQcm9qZWN0QWRkQnRuIHtcbiAgYm9yZGVyOiAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmhlcml0O1xuICBmb250LXdlaWdodDogNTAwO1xufVxuXG4jUHJvamVjdGRhdGVQaWNrZXIge1xuICBwYWRkaW5nOiAycHg7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgYm9yZGVyOiBub25lO1xuICBoZWlnaHQ6IDMycHg7XG59XG5cbiNzdWJtaXRCdG5Gb3JQcm9qZWN0IHtcbiAgcGFkZGluZzogN3B4O1xuICBib3JkZXItcmFkaXVzOiA5cHg7XG59XG5cbiNzdWJtaXRCdG5Gb3JQcm9qZWN0OmFjdGl2ZSB7XG4gIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcbn1cblxuLmNhbmNlbEZvclByb2plY3RCdG4ge1xuICBwYWRkaW5nOiA3cHg7XG4gIGJvcmRlci1yYWRpdXM6IDlweDtcbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsVUFBVTtFQUNWLFNBQVM7RUFDVCxzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxzQkFBc0I7RUFDdEIsMkJBQTJCO0FBQzdCOztBQUVBO0VBQ0UsVUFBVTtFQUNWLFNBQVM7RUFDVCxzQkFBc0I7O0VBRXRCLGlDQUFpQztFQUNqQyxnQkFBZ0I7RUFDaEIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0U7SUFDRSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLHVCQUF1QjtJQUN2QixVQUFVO0VBQ1o7O0VBRUE7SUFDRSx5QkFBeUI7SUFD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WixrQkFBa0I7QUFDcEJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiYm9keSB7XFxuICBwYWRkaW5nOiAwO1xcbiAgbWFyZ2luOiAwO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuOnJvb3Qge1xcbiAgLS1ob3Zlci1jb2xvcjogI2ZkYTRhZjtcXG4gIC0tYmFja2dyb3VuZC1jb2xvcjogIzZmOWU5ZTtcXG59XFxuXFxuKiB7XFxuICBwYWRkaW5nOiAwO1xcbiAgbWFyZ2luOiAwO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG5cXG4gIGZvbnQtZmFtaWx5OiBcXFwiUm9ib3RvXFxcIiwgc2Fucy1zZXJpZjtcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxufVxcblxcbkBtZWRpYSAobWF4LXdpZHRoOiA1NTBweCkge1xcbiAgYm9keSBtYWluIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIHotaW5kZXg6IDE7XFxuICB9XFxuXFxuICBtYWluIGhlYWRlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZGE0YWY7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGdhcDogMTBweDtcXG4gIH1cXG5cXG4gICN0b2dnbGVNZW51SWNvbiB7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgdG9wOiAyMHB4O1xcbiAgICByaWdodDogMjBweDtcXG4gICAgd2lkdGg6IDYwcHg7XFxuICAgIGhlaWdodDogNjBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzZiODg4ODtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xcbiAgICB0cmFuc2l0aW9uOiB0b3AgMC4zcztcXG5cXG4gICAgei1pbmRleDogMTAwMDtcXG4gIH1cXG5cXG4gICN0b2dnbGVNZW51SWNvbjo6YmVmb3JlIHtcXG4gICAgY29udGVudDogXFxcIlxcXCI7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgd2lkdGg6IDI4cHg7XFxuICAgIGhlaWdodDogMnB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTVweCk7XFxuICAgIHRyYW5zaXRpb246IDAuMnM7XFxuICB9XFxuXFxuICAjdG9nZ2xlTWVudUljb246OmFmdGVyIHtcXG4gICAgY29udGVudDogXFxcIlxcXCI7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgd2lkdGg6IDI4cHg7XFxuICAgIGhlaWdodDogMnB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoNXB4KTtcXG4gICAgdHJhbnNpdGlvbjogMC4ycztcXG4gIH1cXG5cXG4gICN0b2dnbGVNZW51SWNvbi5hY3RpdmU6OmJlZm9yZSB7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwcHgpIHJvdGF0ZSg0NWRlZyk7XFxuICB9XFxuXFxuICAjdG9nZ2xlTWVudUljb24uYWN0aXZlOjphZnRlciB7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwcHgpIHJvdGF0ZSgtNDVkZWcpO1xcbiAgfVxcblxcbiAgYXNpZGUjbWVudSB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIHRvcDogMDtcXG4gICAgbGVmdDogLTIyMHB4O1xcbiAgICB3aWR0aDogMjIwcHg7XFxuICAgIGhlaWdodDogMTAwdmg7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgZmlsdGVyOiB3aGl0ZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzc5ODlhMTtcXG4gICAgdHJhbnNpdGlvbjogMC4zcztcXG4gICAgei1pbmRleDogMTAwMDtcXG4gICAgZmlsbDogd2hpdGU7XFxuICB9XFxuXFxuICBhc2lkZSNtZW51LmFjdGl2ZSB7XFxuICAgIGxlZnQ6IDA7XFxuICB9XFxuXFxuICBtYWluIGFzaWRlIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTJlOGYwO1xcbiAgfVxcblxcbiAgbWFpbiAjQ29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZmxleC13cmFwOiB3cmFwO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICB9XFxuXFxuICBoZWFkZXIgLm1lbnVDb250cm9sbGVyIHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIHdpZHRoOiA0MHB4O1xcbiAgICBoZWlnaHQ6IDQwcHg7XFxuICB9XFxuXFxuICBoZWFkZXIgLm1lbnVDb250cm9sbGVyIHN2ZyB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICB3aWR0aDogNDBweDtcXG4gICAgaGVpZ2h0OiA0MHB4O1xcbiAgICBmaWxsOiB3aGl0ZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICB9XFxuXFxuICAjdXNlcmxpc3Qge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBtYXgtd2lkdGg6IDU1MHB4O1xcbiAgfVxcblxcbiAgZGl2Lmxpc3RDb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBnYXA6IDVweDtcXG4gICAgbWF4LXdpZHRoOiA1MTVweDtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgYm94LXNoYWRvdzogMXB4IDBweCAzcHggMHB4O1xcbiAgICBtYXJnaW46IDE0cHggMTRweCAwIDE5cHg7XFxuXFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICB9XFxuXFxuICAjdXNlcmxpc3QgLmludGlhbFRleHREaXNwbGF5IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIH1cXG5cXG4gIC5pbnRpYWxUZXh0RGlzcGxheSBpbWcge1xcbiAgICBtYXgtd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogYXV0bztcXG4gICAgcGFkZGluZzogMThweDtcXG4gICAgYm9yZGVyLXJhZGl1czogMzBweDtcXG4gICAgb2JqZWN0LWZpdDogY29udGFpbjtcXG4gIH1cXG5cXG4gIC5wb3BVcENvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIG1heC13aWR0aDogMjAwcHg7XFxuICAgIHBhZGRpbmc6IDMwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwN2M0ZGQ7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbiAgfVxcblxcbiAgI3VzZXJsaXN0ICNhZGRUb2RvQnRuQ29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiA1cHg7XFxuICAgIG1hcmdpbjogMjdweCAwIDExcHggMjZweDtcXG4gIH1cXG5cXG4gICN0YXNrIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiA1cHg7XFxuICAgIG1hcmdpbjogMjdweCAwIDExcHggMjZweDtcXG4gIH1cXG5cXG4gICN1c2VybGlzdCAjYWRkVG9kb0J0bkNvbnRhaW5lciBzdmcge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGMyNjI2O1xcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICAgIGZpbGw6IHdoaXRlO1xcbiAgfVxcblxcbiAgI3VzZXJsaXN0ICNhZGRUb2RvQnRuQ29udGFpbmVyIDpob3ZlciB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEuMDkpO1xcbiAgfVxcblxcbiAgI3VzZXJsaXN0ICNhZGRUb2RvQnRuQ29udGFpbmVyIGJ1dHRvbiB7XFxuICAgIGJvcmRlcjogMDtcXG4gICAgZm9udC1zaXplOiAxNnB4O1xcbiAgICBjb2xvcjogI2I5MWMxYztcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogaW5oZXJpdDtcXG4gICAgdHJhbnNpdGlvbjogMC4zcztcXG4gIH1cXG5cXG4gICN1c2VybGlzdCAjYWRkVG9kb0J0bkNvbnRhaW5lciBidXR0b246aG92ZXIge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxLjA5KTtcXG4gIH1cXG5cXG4gIC5pbm5lcl9jb250YWluZXIgI2Zvcm0ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjQ3NDhiO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICBtYXgtaGVpZ2h0OiAxMzVweDtcXG4gICAgbWF4LXdpZHRoOiA1MTVweCAhaW1wb3J0YW50O1xcbiAgICBoZWlnaHQ6IDE0MHB4O1xcbiAgICBwYWRkaW5nLWxlZnQ6IDFyZW07XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIG1heC13aWR0aDogNDgwcHg7XFxuICAgIG1hcmdpbjogMTBweCAxMHB4IDAgMTBweDtcXG4gIH1cXG5cXG4gIGRpdi5pbnB1dE5ld3Byb2plY3RGb3JtTmFtZSB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNjZWUzZTM7XFxuICAgIG1heC13aWR0aDogMzAwcHg7XFxuICAgIG1heC1oZWlnaHQ6IDMwMHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICBwYWRkaW5nOiAyNXB4O1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIG1hcmdpbjogNjBweCAwIDAgMDtcXG4gICAgYm94LXNoYWRvdzogMHB4IDlweCAzcHggMHB4O1xcbiAgfVxcblxcbiAgLmlucHV0TmV3cHJvamVjdEZvcm1OYW1lIGgyIHtcXG4gICAgbWFyZ2luOiAwIDAgMTBweCAwO1xcbiAgfVxcblxcbiAgLmlucHV0TmV3cHJvamVjdEZvcm1OYW1lIC5pbnB1dE5ld1Byb2plY3ROYW1lIHtcXG4gICAgbWF4LXdpZHRoOiAzMDBweDtcXG4gICAgbWF4LWhlaWdodDogMzVweDtcXG4gICAgcGFkZGluZzogMTRweDtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBib3JkZXItcmFkaXVzOiA3cHg7XFxuICB9XFxuXFxuICBpbnB1dC5TYXZlUHJvamVjdE5hbWUge1xcbiAgICBwYWRkaW5nOiA5cHg7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xcbiAgICBtYXgtd2lkdGg6IDEwMHB4O1xcbiAgICBoZWlnaHQ6IDQwcHg7XFxuICAgIGZvbnQtc2l6ZTogMTlweDtcXG4gIH1cXG5cXG4gIC5wcm9qZWN0TmFtZVNhdmVyQnRuQ29udGFpbmVyIHtcXG4gICAgbWFyZ2luOiAxMHB4IDA7XFxuICB9XFxuXFxuICAucHJvamVjdE5hbWVTYXZlckJ0bkNvbnRhaW5lciBidXR0b24ge1xcbiAgICBwYWRkaW5nOiA5cHg7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xcbiAgICB3aWR0aDogMTAwcHg7XFxuICAgIGhlaWdodDogNDBweDtcXG4gICAgZm9udC1zaXplOiAxOXB4O1xcbiAgfVxcblxcbiAgLmlubmVyX2NvbnRhaW5lciAjUHJvamVjdEZvcm0ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjQ3NDhiO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICBtYXgtaGVpZ2h0OiAxMzRweDtcXG4gICAgbWF4LXdpZHRoOiA1MTVweDtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gICAgbWF4LXdpZHRoOiA1MDBweDtcXG4gICAgbWFyZ2luOiA5cHggMTBweCAwIDIzcHg7XFxuICB9XFxuXFxuICAucHJvamVjdEZvcm1EZXRhaWxzIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICBoZWlnaHQ6IDgwcHg7XFxuICB9XFxuXFxuICBkaXYucHJpb3JpdHlEYXRlT25MYXJnZVNjcmVlbiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgdG9wOiAwO1xcbiAgICBtYXgtd2lkdGg6IDIwMHB4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgfVxcblxcbiAgLnByb2plY3RJbnB1dENvbnRhaW5lciB7XFxuICAgIG1heC13aWR0aDogMjAwcHg7XFxuICB9XFxuXFxuICAucHJvamVjdElucHV0Q29udGFpbmVyIHAgaW5wdXQge1xcbiAgICBtYXgtd2lkdGg6IDIwMHB4O1xcbiAgfVxcblxcbiAgLmlubmVyVGFza0NvbnRhaW5lciAuZWRpdCB7XFxuICAgIG1heC13aWR0aDogMTQwcHg7XFxuICB9XFxuXFxuICAucHJvamVjdElucHV0Q29udGFpbmVyIC5QZGVzY3JpcHRpb25JbnB1dENvbnRhaW5lciB7XFxuICAgIG1hcmdpbjogMTBweCAwIDAgMDtcXG4gIH1cXG5cXG4gIGRpdiNjb25maWdQcmlvcml0eURhdGVPbk1vYmlsZSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIG1heC13aWR0aDogMjAwcHg7XFxuICAgIHBvc2l0aW9uOiBzdGF0aWM7XFxuICB9XFxuXFxuICAjY29uZmlnUHJpb3JpdHlEYXRlT25Nb2JpbGUgI3ByaW9yaXR5LFxcbiAgI2RhdGVQaWNrZXIge1xcbiAgICBwYWRkaW5nOiAycHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcXG4gICAgbWF4LXdpZHRoOiAxMDRweDtcXG4gICAgbWluLXdpZHRoOiA4MHB4O1xcbiAgfVxcblxcbiAgI1Byb2plY3RGb3JtIC5mb290ZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIHBhZGRpbmc6IDAgMTBweDtcXG4gICAgZ2FwOiAwO1xcbiAgfVxcblxcbiAgI1Byb2plY3RGb3JtIC5wcm9qZWN0QnV0dG9uc0NvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgcGFkZGluZzogMCAxMHB4O1xcbiAgICBnYXA6IDA7XFxuICB9XFxuXFxuICAjZm9ybSAuZm9ybURldGFpbHMge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIG1hcmdpbjogMDtcXG4gIH1cXG5cXG4gICNmb3JtRm9vdGVyT25Nb2JpbGUge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIHBhZGRpbmc6IDAgMTBweDtcXG4gIH1cXG5cXG4gICNmb3JtRm9vdGVyT25Nb2JpbGUgLmJ1dHRvbnMge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHBhZGRpbmc6IDAgMTBweDtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBnYXA6IDA7XFxuICB9XFxuXFxuICAucHJpb3JpdHlEYXRlTGFyZ2VTY3JlZW4ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgfVxcblxcbiAgI2Zvcm0gLmlucHV0cyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIG1heC13aWR0aDogMTUwcHg7XFxuICB9XFxuXFxuICAjZm9ybSAuZmlyc3QtaW5wdXRDb250YWluZXIgaW5wdXQsXFxuICAuUHRpdGxlSW5wdXRDb250YWluZXIgaW5wdXQge1xcbiAgICBtYXgtd2lkdGg6IDE2NXB4O1xcbiAgICBtYXgtaGVpZ2h0OiAxNXB4O1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIG91dGxpbmU6IG5vbmU7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgbWFyZ2luOiAxMHB4IDA7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGluaGVyaXQ7XFxuICB9XFxuXFxuICAjZm9ybSAuc2Vjb25kLWlucHV0Q29udGFpbmVyIGlucHV0LFxcbiAgLlBkZXNjcmlwdGlvbklucHV0Q29udGFpbmVyIGlucHV0IHtcXG4gICAgbWF4LXdpZHRoOiAxNzhweDtcXG4gICAgbWF4LWhlaWdodDogMTVweDtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBvdXRsaW5lOiBub25lO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGluaGVyaXQ7XFxuICAgIG1hcmdpbjogMDtcXG4gIH1cXG5cXG4gICNmb3JtIC5vdGhlci1vcHRpb25zLW9uLWZvcm1zIGJ1dHRvbixcXG4gICNjb25maWdQcmlvcml0eURhdGVPbk1vYmlsZSAjcHJpb3JpdHksXFxuICAjZGF0ZVBpY2tlciB7XFxuICAgIHBhZGRpbmc6IDRweDtcXG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xcbiAgICBtYXgtd2lkdGg6IDEwNHB4O1xcbiAgICBtaW4td2lkdGg6IDgwcHg7XFxuICB9XFxufVxcblxcbkBtZWRpYSAobWluLXdpZHRoOiA1NTFweCkgYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XFxuICBib2R5IG1haW4ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIH1cXG5cXG4gIG1haW4gaGVhZGVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZkYTRhZjtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgZ2FwOiAxMHB4O1xcbiAgfVxcblxcbiAgbWFpbiBhc2lkZSB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2UyZThmMDtcXG4gICAgei1pbmRleDogMjtcXG4gIH1cXG5cXG4gIGFzaWRlIHVsLFxcbiAgdWwgc2VsZWN0IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBmaWxsOiB3aGl0ZTtcXG4gIH1cXG5cXG4gIHNlbGVjdCNwcm9qZWN0LWRyb3Bkb3duIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDQyLCA0MCwgNDkpO1xcbiAgfVxcblxcbiAgbWFpbiAjQ29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZmxleC13cmFwOiB3cmFwO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIHotaW5kZXg6IDE7XFxuICB9XFxuXFxuICBoZWFkZXIgLm1lbnVDb250cm9sbGVyIHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIHdpZHRoOiA0MHB4O1xcbiAgICBoZWlnaHQ6IDQwcHg7XFxuICB9XFxuXFxuICAjdG9nZ2xlTWVudUljb24ge1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIHRvcDogMjBweDtcXG4gICAgcmlnaHQ6IDIwcHg7XFxuICAgIHdpZHRoOiA1MHB4O1xcbiAgICBoZWlnaHQ6IDUwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM2ZjllOWU7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcXG4gICAgdHJhbnNpdGlvbjogdG9wIDAuM3M7XFxuICAgIHotaW5kZXg6IDEwMDA7XFxuXFxuICAgIHotaW5kZXg6IDEwMDA7XFxuICB9XFxuXFxuICAjdG9nZ2xlTWVudUljb246OmJlZm9yZSB7XFxuICAgIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHdpZHRoOiAyOHB4O1xcbiAgICBoZWlnaHQ6IDJweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01cHgpO1xcbiAgICB0cmFuc2l0aW9uOiAwLjJzO1xcbiAgfVxcblxcbiAgI3RvZ2dsZU1lbnVJY29uOjphZnRlciB7XFxuICAgIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHdpZHRoOiAyOHB4O1xcbiAgICBoZWlnaHQ6IDJweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDVweCk7XFxuICAgIHRyYW5zaXRpb246IDAuMnM7XFxuICB9XFxuXFxuICAjdG9nZ2xlTWVudUljb24uYWN0aXZlOjpiZWZvcmUge1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMHB4KSByb3RhdGUoNDVkZWcpO1xcbiAgfVxcblxcbiAgI3RvZ2dsZU1lbnVJY29uLmFjdGl2ZTo6YWZ0ZXIge1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMHB4KSByb3RhdGUoLTQ1ZGVnKTtcXG4gIH1cXG5cXG4gIGFzaWRlI21lbnUge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICB0b3A6IDA7XFxuICAgIGxlZnQ6IC0yMjBweDtcXG4gICAgd2lkdGg6IDIyMHB4O1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kLWNvbG9yKTtcXG4gICAgdHJhbnNpdGlvbjogMC4zcztcXG4gIH1cXG5cXG4gIGFzaWRlI21lbnUuYWN0aXZlIHtcXG4gICAgbGVmdDogMDtcXG4gIH1cXG5cXG4gIGFzaWRlIHVsIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBmaWxsOiB3aGl0ZTtcXG4gIH1cXG5cXG4gIGhlYWRlciAubWVudUNvbnRyb2xsZXIgc3ZnIHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIHdpZHRoOiA0MHB4O1xcbiAgICBoZWlnaHQ6IDQwcHg7XFxuICAgIGZpbGw6IHdoaXRlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIH1cXG5cXG4gICN1c2VybGlzdCAjYWRkVG9kb0J0bkNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogNXB4O1xcbiAgICBtYXJnaW46IDI3cHggMCAxMXB4IDI2cHg7XFxuICB9XFxuXFxuICAjdGFzayB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogNXB4O1xcbiAgICBtYXJnaW46IDI3cHggMCAxMXB4IDI2cHg7XFxuICB9XFxuXFxuICAjdXNlcmxpc3QgI2FkZFRvZG9CdG5Db250YWluZXIgc3ZnIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2RjMjYyNjtcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgICBmaWxsOiB3aGl0ZTtcXG4gIH1cXG5cXG4gICN1c2VybGlzdCAjYWRkVG9kb0J0bkNvbnRhaW5lciA6aG92ZXIge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxLjA5KTtcXG4gIH1cXG5cXG4gICN1c2VybGlzdCAjYWRkVG9kb0J0bkNvbnRhaW5lciBidXR0b24ge1xcbiAgICBib3JkZXI6IDA7XFxuICAgIGZvbnQtc2l6ZTogMTZweDtcXG4gICAgY29sb3I6ICNiOTFjMWM7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGluaGVyaXQ7XFxuICB9XFxuXFxuICAjdXNlcmxpc3QgI2FkZFRvZG9CdG5Db250YWluZXIgYnV0dG9uOmhvdmVyIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMS4wOSk7XFxuICB9XFxuXFxuICBkaXYubGlzdENvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDogNXB4O1xcbiAgICBtYXgtd2lkdGg6IDcxNHB4O1xcblxcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICBib3gtc2hhZG93OiAxcHggMHB4IDNweCAwcHg7XFxuICAgIG1hcmdpbjogMThweCA2MHB4O1xcbiAgICBwYWRkaW5nOiAxNXB4O1xcbiAgfVxcblxcbiAgI3VzZXJsaXN0IC5pbnRpYWxUZXh0RGlzcGxheSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICB9XFxuXFxuICAuaW50aWFsVGV4dERpc3BsYXkgcCB7XFxuICAgIG1heC13aWR0aDogNTAwcHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIG1heC13aWR0aDogNTAwcHg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGZsZXgtd3JhcDogd3JhcDtcXG4gIH1cXG5cXG4gIC5pbnRpYWxUZXh0RGlzcGxheSBpbWcge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiBhdXRvO1xcbiAgICBwYWRkaW5nOiAyMHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA0MXB4O1xcbiAgICBvYmplY3QtZml0OiBjb250YWluO1xcbiAgfVxcblxcbiAgLmlubmVyX2NvbnRhaW5lciAjZm9ybSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM2NDc0OGI7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIGhlaWdodDogMTUwcHg7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIG1heC13aWR0aDogNjAwcHg7XFxuXFxuICAgIG1hcmdpbjogMTdweDtcXG4gIH1cXG5cXG4gICNmb3JtIGRpdi5mb3JtRGV0YWlscyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgbWFyZ2luOiAwO1xcbiAgfVxcblxcbiAgLnByaW9yaXR5RGF0ZUxhcmdlU2NyZWVuIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gIH1cXG5cXG4gICNmb3JtIC5pbnB1dHMge1xcbiAgICBtYXgtd2lkdGg6IDE1MHB4O1xcbiAgfVxcblxcbiAgI2Zvcm0gLmZpcnN0LWlucHV0Q29udGFpbmVyIGlucHV0LFxcbiAgLlB0aXRsZUlucHV0Q29udGFpbmVyIGlucHV0LFxcbiAgI2Zvcm0gLnNlY29uZC1pbnB1dENvbnRhaW5lciBpbnB1dCxcXG4gIC5QZGVzY3JpcHRpb25JbnB1dENvbnRhaW5lciBpbnB1dCB7XFxuICAgIG1heC13aWR0aDogNjAwcHg7XFxuICAgIGhlaWdodDogMjVweDtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBvdXRsaW5lOiBub25lO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIG1hcmdpbjogMTBweCAwIDAgMDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogaW5oZXJpdDtcXG4gIH1cXG5cXG4gIHAuc2Vjb25kLWlucHV0Q29udGFpbmVyIHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgfVxcblxcbiAgI2Zvcm0gLmJ1dHRvbnMge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBtYXJnaW46IDFweCAyM3B4O1xcbiAgfVxcblxcbiAgI2NvbmZpZ1ByaW9yaXR5RGF0ZU9uTW9iaWxlIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgcG9zaXRpb246IHN0YXRpYztcXG4gIH1cXG5cXG4gICNmb3JtIC5vdGhlci1vcHRpb25zLW9uLWZvcm1zIGJ1dHRvbixcXG4gICNwcmlvcml0eSxcXG4gICNkYXRlUGlja2VyIHtcXG4gICAgcGFkZGluZzogN3B4O1xcbiAgICBib3JkZXItcmFkaXVzOiA5cHg7XFxuICB9XFxuXFxuICBmb3JtI1Byb2plY3RGb3JtIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzY0NzQ4YjtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgaGVpZ2h0OiAxNTBweDtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gICAgbWF4LXdpZHRoOiA2OTNweDtcXG4gICAgcGFkZGluZy1sZWZ0OiAxcmVtO1xcbiAgICBtYXJnaW46IDlweCA2MXB4O1xcbiAgfVxcblxcbiAgZGl2LnByb2plY3RGb3JtRGV0YWlscyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgdG9wOiAwO1xcbiAgfVxcbn1cXG5cXG4qLyAucHJvamVjdEJ1dHRvbnNDb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbnNlbGVjdCNwcmlvcml0eSB7XFxuICBwYWRkaW5nOiA0cHg7XFxuICBib3JkZXItcmFkaXVzOiA5cHg7XFxufVxcblxcbmlucHV0I2RhdGVQaWNrZXIge1xcbiAgcGFkZGluZzogM3B4O1xcbiAgYm9yZGVyLXJhZGl1czogOXB4O1xcbn1cXG5cXG5AbWVkaWEgKG1pbi13aWR0aDogNzY5cHgpIGFuZCAobWF4LXdpZHRoOiAxMDAwcHgpIHtcXG4gIGJvZHkgbWFpbiB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICB9XFxuXFxuICBtYWluIGhlYWRlciB7XFxuICAgIGdyaWQtYXJlYTogMSAvIDIgLyAyIC8gNjtcXG5cXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZkYTRhZjtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgZ2FwOiAxMHB4O1xcbiAgfVxcblxcbiAgbWFpbiBhc2lkZSB7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2UyZThmMDtcXG4gIH1cXG5cXG4gIG1haW4gI0NvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGZsZXgtd3JhcDogd3JhcDtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICB6LWluZGV4OiAxO1xcbiAgfVxcblxcbiAgaGVhZGVyIC5tZW51Q29udHJvbGxlciB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICB3aWR0aDogNDBweDtcXG4gICAgaGVpZ2h0OiA0MHB4O1xcbiAgfVxcblxcbiAgaGVhZGVyIC5tZW51Q29udHJvbGxlciBzdmcge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgd2lkdGg6IDQwcHg7XFxuICAgIGhlaWdodDogNDBweDtcXG4gICAgZmlsbDogd2hpdGU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgfVxcblxcbiAgI3VzZXJsaXN0IC5pbnRpYWxUZXh0RGlzcGxheSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICB9XFxuXFxuICAjdXNlcmxpc3QgLmludGlhbFRleHREaXNwbGF5IHAge1xcbiAgICBmb250LXNpemU6IDEuMnJlbTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBmb250LXdlaWdodDogNTAwO1xcbiAgICBtYXJnaW46IDEwcHggMCAwIDA7XFxuICAgIG1heC13aWR0aDogNjAwcHg7XFxuICB9XFxuXFxuICAjdXNlcmxpc3QgI2FkZFRvZG9CdG5Db250YWluZXIge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDVweDtcXG4gICAgbWFyZ2luOiAyN3B4IDAgMTFweCAyNnB4O1xcbiAgfVxcblxcbiAgI3Rhc2sge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDVweDtcXG4gICAgbWFyZ2luOiAyN3B4IDAgMTFweCAyNnB4O1xcbiAgfVxcblxcbiAgI3VzZXJsaXN0ICNhZGRUb2RvQnRuQ29udGFpbmVyIHN2ZyB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNkYzI2MjY7XFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gICAgZmlsbDogd2hpdGU7XFxuICB9XFxuXFxuICAjdXNlcmxpc3QgI2FkZFRvZG9CdG5Db250YWluZXIgOmhvdmVyIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMS4wOSk7XFxuICB9XFxuXFxuICAjdXNlcmxpc3QgI2FkZFRvZG9CdG5Db250YWluZXIgYnV0dG9uIHtcXG4gICAgYm9yZGVyOiAwO1xcbiAgICBmb250LXNpemU6IDE2cHg7XFxuICAgIGNvbG9yOiAjYjkxYzFjO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmhlcml0O1xcbiAgfVxcblxcbiAgI3VzZXJsaXN0ICNhZGRUb2RvQnRuQ29udGFpbmVyIGJ1dHRvbjpob3ZlciB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEuMDkpO1xcbiAgfVxcblxcbiAgZGl2Lmxpc3RDb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBnYXA6IDVweDtcXG4gICAgbWF4LXdpZHRoOiA3MTRweDtcXG5cXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgYm94LXNoYWRvdzogMXB4IDBweCAzcHggMHB4O1xcbiAgICBtYXJnaW46IDE4cHggNjBweDtcXG4gICAgcGFkZGluZzogMTVweDtcXG4gIH1cXG5cXG4gIC5pbm5lcl9jb250YWluZXIgI2Zvcm0ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjQ3NDhiO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICBoZWlnaHQ6IDE1MHB4O1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgICBtYXgtd2lkdGg6IDc1MHB4O1xcblxcbiAgICBtYXJnaW46IDE3cHg7XFxuICB9XFxuXFxuICAjZm9ybSBkaXYuZm9ybURldGFpbHMge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFxuICAgIHBhZGRpbmc6IDlweCAyMHB4O1xcbiAgICBtYXJnaW46IDA7XFxuICB9XFxuXFxuICAucHJpb3JpdHlEYXRlTGFyZ2VTY3JlZW4ge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgfVxcblxcbiAgI2Zvcm0gLmlucHV0cyB7XFxuICAgIG1heC13aWR0aDogMTUwcHg7XFxuICB9XFxuXFxuICAjZm9ybSAuZmlyc3QtaW5wdXRDb250YWluZXIgaW5wdXQsXFxuICAuUHRpdGxlSW5wdXRDb250YWluZXIgaW5wdXQge1xcbiAgICBtYXgtd2lkdGg6IDQyMHB4O1xcbiAgICBtYXgtaGVpZ2h0OiA2MHB4O1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIG91dGxpbmU6IG5vbmU7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogaW5oZXJpdDtcXG4gICAgbWFyZ2luOiAwO1xcbiAgfVxcblxcbiAgI2Zvcm0gLnNlY29uZC1pbnB1dENvbnRhaW5lciBpbnB1dCxcXG4gIC5QZGVzY3JpcHRpb25JbnB1dENvbnRhaW5lciBpbnB1dCB7XFxuICAgIG1heC13aWR0aDogNDIwcHg7XFxuICAgIG1heC1oZWlnaHQ6IDYwcHg7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgb3V0bGluZTogbm9uZTtcXG4gICAgY29sb3I6IHJnYig5MCwgNzcsIDc3KTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogaW5oZXJpdDtcXG4gICAgbWFyZ2luOiAwO1xcbiAgfVxcblxcbiAgI2Zvcm0gLmJ1dHRvbnMge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIG1hcmdpbjogMXB4IDMzcHg7XFxuICB9XFxuXFxuICBmb3JtI1Byb2plY3RGb3JtIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzY0NzQ4YjtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgaGVpZ2h0OiAxNTBweDtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gICAgbWF4LXdpZHRoOiA2OTNweDtcXG4gICAgcGFkZGluZy1sZWZ0OiAxcmVtO1xcbiAgICBtYXJnaW46IDlweCA2MXB4O1xcbiAgfVxcblxcbiAgZGl2LnByb2plY3RGb3JtRGV0YWlscyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgdG9wOiAwO1xcbiAgfVxcblxcbiAgZGl2LnByaW9yaXR5RGF0ZU9uTGFyZ2VTY3JlZW4ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHRvcDogMDtcXG4gIH1cXG5cXG4gIC5wcm9qZWN0QnV0dG9uc0NvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIH1cXG5cXG4gICNjb25maWdQcmlvcml0eURhdGVPbk1vYmlsZSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIHBvc2l0aW9uOiBzdGF0aWM7XFxuICB9XFxuXFxuICAjZm9ybSAub3RoZXItb3B0aW9ucy1vbi1mb3JtcyBidXR0b24sXFxuICAjcHJpb3JpdHksXFxuICAjZGF0ZVBpY2tlciB7XFxuICAgIHBhZGRpbmc6IDhweDtcXG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICB9XFxufVxcblxcbm1haW4ge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMTkwcHggMWZyO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiA3MHB4IDU3MHB4O1xcbn1cXG5cXG5oZWFkZXIge1xcbiAgZ3JpZC1hcmVhOiAxIC8gMiAvIDIgLyA2O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZkYTRhZjtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbmFzaWRlIHtcXG4gIGdyaWQtYXJlYTogMS8gMS8gNC8gMjtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNlMmU4ZjA7XFxufVxcblxcbiNDb250YWluZXIge1xcbiAgZ3JpZC1hcmVhOiAyIC8gMiAvIDMgLyA0O1xcblxcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMTAwcHggNjUwcHggbWlubWF4KDI1MHB4LCAzNTBweCk7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxufVxcblxcbi5pbm5lcl9jb250YWluZXIge1xcbiAgZ3JpZC1hcmVhOiAxIC8gMiAvIDMgLyAzO1xcbn1cXG5cXG4uaW50aWFsVGV4dERpc3BsYXkge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBwYWRkaW5nOiAxMHB4O1xcbn1cXG5cXG4uaW50aWFsVGV4dERpc3BsYXkgcCB7XFxuICBmb250LXNpemU6IDEuMnJlbTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICBtYXJnaW46IDEwcHggMCAwIDA7XFxufVxcblxcbi5pbnRpYWxUZXh0RGlzcGxheSBpbWcge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IGF1dG87XFxuICBib3JkZXItcmFkaXVzOiAzMHB4O1xcbiAgcGFkZGluZzogMjBweDtcXG59XFxuXFxuI2FkZFRvZG9CdG5Db250YWluZXIge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLmVtcHR5IHtcXG4gIGdyaWQtYXJlYTogMSAvIDMgLyA1IC8gNDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmOGY4Zjg7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXFxcIi4vaW1hZ2VzL1RvZG8tMS5qcGdcXFwiKTtcXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxufVxcblxcbi5tZW51Q29udHJvbGxlciB7XFxuICBkaXNwbGF5OiBub25lO1xcbiAgd2lkdGg6IDQwcHg7XFxuICBoZWlnaHQ6IDQwcHg7XFxufVxcblxcbi5jaGVja0JveCB7XFxuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XFxuICAtbW96LWFwcGVhcmFuY2U6IG5vbmU7XFxuICB3aWR0aDogMjBweDtcXG4gIGhlaWdodDogMjBweDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XFxuICBib3JkZXItcmFkaXVzOiAzcHg7XFxuICBvdXRsaW5lOiBub25lO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG4uY2hlY2tCb3g6OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcIjtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiA1MCU7XFxuICBsZWZ0OiA1MCU7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcXG4gIGZvbnQtc2l6ZTogMTZweDtcXG4gIGNvbG9yOiByZ2IoMjIsIDI1MiwgMjIpO1xcbiAgb3BhY2l0eTogMDtcXG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMC4zcyBlYXNlO1xcbn1cXG5cXG4uY2hlY2tCb3g6aG92ZXI6OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwi4pyTXFxcIjtcXG4gIG9wYWNpdHk6IDAuNTtcXG59XFxuXFxuc3ZnIHtcXG4gIHdpZHRoOiAyNXB4O1xcbiAgaGVpZ2h0OiAyNXB4O1xcbn1cXG5cXG4jdGFzayB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogNXB4O1xcbiAgbWFyZ2luOiAyN3B4IDAgMTFweCAyNnB4O1xcbn1cXG5cXG4jdGFzayBzdmcge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2RjMjYyNjtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gIGZpbGw6IHdoaXRlO1xcbn1cXG5cXG4jdGFzayA6aG92ZXIge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEuMDkpO1xcbn1cXG5cXG4jdGFzayBidXR0b24ge1xcbiAgYm9yZGVyOiAwO1xcbiAgZm9udC1zaXplOiAxNnB4O1xcbiAgY29sb3I6ICNiOTFjMWM7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmhlcml0O1xcbn1cXG5cXG4jdGFzayBidXR0b246aG92ZXIge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEuMDkpO1xcbn1cXG5cXG5idXR0b24uZGVsZXRlVGFzayB7XFxuICBwYWRkaW5nOiAxMHB4O1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYm9yZGVyLXJhZGl1czogN3B4O1xcbiAgZm9udC1zaXplOiAxLjFyZW07XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTA0ODdjO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMnMgZWFzZS1vdXQ7XFxufVxcblxcbmJ1dHRvbi5kZWxldGVUYXNrOmhvdmVyIHtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4wNSk7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNGIwNzA3O1xcblxcbn1cXG5cXG5idXR0b24uZGVsZXRlVGFzazphY3RpdmUge1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgwLjkpO1xcbn1cXG5cXG4ubGlzdENvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiA1cHg7XFxuICBtYXgtd2lkdGg6IDcxNHB4O1xcblxcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIGJveC1zaGFkb3c6IDFweCAwcHggM3B4IDBweDtcXG4gIG1hcmdpbjogMThweCAxOHB4O1xcbiAgcGFkZGluZzogMTVweDtcXG59XFxuXFxuLnByaW9yaXR5RGF0ZU9uTGFyZ2VTY3JlZW4ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBtYXgtd2lkdGg6IDIwMHB4O1xcbn1cXG5cXG4ucHJvamVjdEJ1dHRvbnNDb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIHBhZGRpbmctaW5saW5lOiAxOHB4XFxufVxcblxcbi5wcm9qZWN0QnV0dG9uc0NvbnRhaW5lciBidXR0b24ge1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYm9yZGVyLXJhZGl1czogN3B4O1xcbiAgcGFkZGluZzogOXB4O1xcbn1cXG5cXG4uZXhjbHVkZWQge1xcbiAgY29sb3I6IHJlZDtcXG59XFxuXFxuLnRhc2tDb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXg6IDE7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcblxcbi50YXNrVGl0bGUsXFxuLm5ld1Byb2plY3QtdGFzay10aXRsZSxcXG4uZWRpdGFibGVTYXZlVGFza0VsIHtcXG4gIG1hcmdpbjogMDtcXG4gIGZvbnQtc2l6ZTogMThweDtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gIHRleHQtZGVjb3JhdGlvbi1jb2xvcjogcmVkO1xcbn1cXG5cXG4udGFza0Rlc2NyaXB0aW9uLFxcbi5uZXdQcm9qZWN0LWRlc2NyaXB0aW9uIHtcXG4gIG1hcmdpbjogMDtcXG4gIGZvbnQtc2l6ZTogMTRweDtcXG59XFxuXFxuLnRhc2tQcmlvcml0eSB7XFxuICBmb250LXNpemU6IDE5cHg7XFxuICBib3JkZXItcmFkaXVzOiA2cHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTczZDNkO1xcbiAgcGFkZGluZzogNnB4O1xcbiAgbWFyZ2luOiAwIDAgN3B4O1xcbiAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4udGFza1ByaW9yaXR5OmhvdmVyIHtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4wNSk7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjOWMxNTE1O1xcbn1cXG5cXG5cXG4uaW5uZXJUYXNrSGFuZGxlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIG1hcmdpbjogMHB4IDE1cHggMCA0MHB4O1xcbn1cXG5cXG5hc2lkZSB1bCBsaSB7XFxuICBsaXN0LXN0eWxlOiBub25lO1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBwYWRkaW5nOiAxMHB4IDIwcHg7XFxufVxcblxcbi5pbmJveC1jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDVweDtcXG59XFxuXFxuXFxuLmluYm94IHtcXG4gIGZvbnQtc2l6ZTogMjBweDtcXG59XFxuXFxuLmluYm94TGlzdENvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiA1cHg7XFxufVxcblxcbi5pbmJveFRhc2tDb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXg6IDE7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcblxcbi5pbmJveFRhc2tUaXRsZSB7XFxuICBtYXJnaW46IDA7XFxuICBmb250LXNpemU6IDE4cHg7XFxufVxcblxcbi5pbmJveFRhc2tEZXNjcmlwdGlvbiB7XFxuICBtYXJnaW46IDA7XFxuICBmb250LXNpemU6IDE0cHg7XFxufVxcblxcbi5pbmJveFRhc2tQcmlvcml0eSB7XFxuICBtYXJnaW46IDAgMjBweCAwIDA7XFxuICBmb250LXNpemU6IDIwcHg7XFxufVxcblxcbi5kdWVEYXRlIHtcXG4gIG1hcmdpbjogMDtcXG59XFxuXFxuLmVkaXQge1xcbiAgYm9yZGVyOiBub25lO1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIGZvbnQtc2l6ZTogMTdweDtcXG4gIG1heC13aWR0aDogMTEwcHg7XFxuICBtYXJnaW46IDAgMDtcXG59XFxuXFxuI3Byb2plY3RzIGgzIHtcXG4gIG1hcmdpbjogMCAwIDAgMTBweDtcXG59XFxuXFxuI2Zvcm0ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzY0NzQ4YjtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICBoZWlnaHQ6IDE0MHB4O1xcbiAgZGlzcGxheTogbm9uZTtcXG4gIHBhZGRpbmctbGVmdDogMXJlbTtcXG4gIG1hcmdpbjogMTBweCAxMHB4IDAgMDtcXG59XFxuXFxuLmZvcm1EZXRhaWxzIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgbWFyZ2luOiAxMnB4IDE1cHg7XFxufVxcblxcbmlucHV0I2RhdGVQaWNrZXIge1xcbiAgbWF4LXdpZHRoOiAxMThweDtcXG59XFxuXFxuLmJ1dHRvbnMge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIG1hcmdpbjogMXB4IDMzcHg7XFxufVxcblxcbi5idXR0b25zIGJ1dHRvbiB7XFxuICBib3JkZXI6IG5vbmU7XFxuICBib3JkZXItcmFkaXVzOiA3cHg7XFxuICBwYWRkaW5nOiA3cHg7XFxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4ycyBlYXNlLW91dDtcXG59XFxuXFxuLmJ1dHRvbnMgYnV0dG9uOmhvdmVyIHtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4wNSk7XFxufVxcblxcbiNQcm9qZWN0Rm9ybSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjQ3NDhiO1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIGhlaWdodDogMTUwcHg7XFxuICBkaXNwbGF5OiBub25lO1xcbiAgcGFkZGluZzogMTBweDtcXG4gIG1hcmdpbjogMTVweCAxNXB4IDAgMTdweDtcXG59XFxuXFxuLnByb2plY3RGb3JtRGV0YWlscyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIHBhZGRpbmctbGVmdDogMXJlbTtcXG4gIHRvcDogMDtcXG59XFxuXFxuLmZpcnN0LWlucHV0Q29udGFpbmVyIGlucHV0LFxcbi5QdGl0bGVJbnB1dENvbnRhaW5lciBpbnB1dCB7XFxuICBtYXgtd2lkdGg6IDYwMHB4O1xcbiAgaGVpZ2h0OiAzN3B4O1xcbiAgYm9yZGVyOiBub25lO1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIG1hcmdpbjogMTBweCAwIDAgMDtcXG4gIGJhY2tncm91bmQtY29sb3I6IGluaGVyaXQ7XFxufVxcblxcbi50YXNrLXRpdGxlLFxcbi5kZXNjcmlwdGlvbiB7XFxuICB3aWR0aDogMzUwcHg7XFxufVxcblxcbi5maXJzdC1pbnB1dENvbnRhaW5lciBpbnB1dDo6cGxhY2Vob2xkZXIsXFxuLlB0aXRsZUlucHV0Q29udGFpbmVyIGlucHV0OjpwbGFjZWhvbGRlciB7XFxuICBjb2xvcjogd2hpdGU7XFxuICBwYWRkaW5nOiAwIDEwcHg7XFxuICBvcGFjaXR5OiAxO1xcbn1cXG5cXG4uc2Vjb25kLWlucHV0Q29udGFpbmVyIGlucHV0LFxcbi5QZGVzY3JpcHRpb25JbnB1dENvbnRhaW5lciBpbnB1dCB7XFxuICBtYXgtd2lkdGg6IDYwMHB4O1xcbiAgaGVpZ2h0OiAzN3B4O1xcbiAgYm9yZGVyOiBub25lO1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGJhY2tncm91bmQtY29sb3I6IGluaGVyaXQ7XFxuICBtYXJnaW46IDA7XFxufVxcblxcbi5wVGl0bGUsIC5wRGVzY3JpcHRpb24ge1xcbiAgd2lkdGg6IDM1MHB4O1xcbiAgZm9udC1zaXplOiAxLjA3cmVtO1xcbn1cXG5cXG4uc2Vjb25kLWlucHV0Q29udGFpbmVyIGlucHV0OjpwbGFjZWhvbGRlcixcXG4uUGRlc2NyaXB0aW9uSW5wdXRDb250YWluZXIgaW5wdXQ6OnBsYWNlaG9sZGVyIHtcXG4gIHBhZGRpbmc6IDAgMTBweDtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIG9wYWNpdHk6IDE7XFxufVxcblxcbi5maXJzdC1pbnB1dENvbnRhaW5lcixcXG4uc2Vjb25kLWlucHV0Q29udGFpbmVyIHtcXG4gIG1hcmdpbjogMTBweCAwIDAgMDtcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXG59XFxuXFxuLnN1Ym1pdEJ0bjphY3RpdmUge1xcbiAgdHJhbnNmb3JtOiBhY3RpdmUgc2NhbGUoMS4xKTtcXG59XFxuXFxuLm90aGVyLW9wdGlvbnMtb24tZm9ybXMgYnV0dG9uLFxcbiNwcmlvcml0eSxcXG5pbnB1dCNkYXRlUGlja2VyIHtcXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjNzIGVhc2UtaW47XFxuICBwYWRkaW5nOiA3cHg7XFxuICBib3JkZXItcmFkaXVzOiA3cHg7XFxuICBib3JkZXI6IG5vbmU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDdjNGRkO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgZm9udC1zaXplOiAxNXB4O1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG59XFxuXFxuI3ByaW9yaXR5IHtcXG4gIG1hcmdpbjogMTBweCAwIDhweCAwO1xcbn1cXG5cXG4jcHJvamVjdFByaW9yaXR5LFxcbi5mb290ZXIge1xcbiAgcGFkZGluZzogN3B4O1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgbWFyZ2luOiAwIDRweCA1cHggMDtcXG59XFxuXFxuLmFkZFByb2plY3RzQ29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAxMHB4O1xcbn1cXG5cXG4uaW5ib3gtY29udGFpbmVyOmhvdmVyLCAuYWRkUHJvamVjdHNDb250YWluZXI6aG92ZXIsIC5wcm9qZWN0X3RleHQ6aG92ZXIsICNwcm9qZWN0LWRyb3Bkb3duOmhvdmVyIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxLjA1KTtcXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcbn1cXG5cXG5cXG4uYWRkUHJvamVjdHNDb250YWluZXIgc3ZnIHtcXG4gIHdpZHRoOiAyNXB4O1xcbiAgaGVpZ2h0OiAyNXB4O1xcbn1cXG5cXG4jYWRkTmV3UHJvamVjdEVsIHtcXG4gIG1hcmdpbjogMDtcXG4gIGZvbnQtc2l6ZTogMTlweDtcXG59XFxuXFxuLnByb2plY3RfdGV4dCB7XFxuICBtYXJnaW46IDAgMCAxMHB4IDE3cHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxuICBwYWRkaW5nOiA5cHg7XFxuICBib3JkZXItcmFkaXVzOiA1cHggMHB4IDBweCA1cHg7XFxufVxcblxcblxcbiNwcm9qZWN0LWRyb3Bkb3duIHtcXG4gIGJvcmRlcjogMDtcXG4gIGJhY2tncm91bmQtY29sb3I6IGluaGVyaXQ7XFxuICBmb250LXNpemU6IDE4cHg7XFxuICBmb250LXdlaWdodDogNTUwO1xcbiAgbWF4LXdpZHRoOiAxNjBweDtcXG59XFxuXFxuXFxuI3Byb2plY3QtZHJvcGRvd246Zm9jdXMge1xcbiAgYm9yZGVyOiBub25lO1xcbiAgb3V0bGluZTogbm9uZTtcXG59XFxuXFxuI25ld1Byb2plY3RzRm9ybUNvbnRhaW5lckVsIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbiNQcm9qZWN0c0Zvcm1OYW1lQ29udGFpbmVyRWwge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmlucHV0TmV3cHJvamVjdEZvcm1OYW1lIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2VlM2UzO1xcbiAgbWF4LXdpZHRoOiA0MDBweDtcXG4gIG1heC1oZWlnaHQ6IDMwMHB4O1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIHBhZGRpbmc6IDQ2cHg7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBtYXJnaW46IDYwcHggMCAwIDA7XFxuICBib3gtc2hhZG93OiAwcHggOXB4IDNweCAwcHg7XFxufVxcblxcbi5pbnB1dE5ld3Byb2plY3RGb3JtTmFtZSBoMiB7XFxuICBtYXJnaW46IDAgMCAxMHB4IDA7XFxufVxcblxcbi5pbnB1dE5ld1Byb2plY3ROYW1lIHtcXG4gIG1heC13aWR0aDogMzUwcHg7XFxuICBtYXgtaGVpZ2h0OiAzNXB4O1xcbiAgcGFkZGluZzogMTdweDtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJvcmRlci1yYWRpdXM6IDdweDtcXG4gIGZvbnQtc2l6ZTogMTlweDtcXG59XFxuXFxuaW5wdXQuU2F2ZVByb2plY3ROYW1lIHtcXG4gIHBhZGRpbmc6IDlweDtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcXG4gIG1heC13aWR0aDogMTAwcHg7XFxuICBoZWlnaHQ6IDQwcHg7XFxuICBmb250LXNpemU6IDE5cHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQwLCA1OSwgMTM0KTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLnByb2plY3ROYW1lU2F2ZXJCdG5Db250YWluZXIge1xcbiAgbWFyZ2luOiAxMHB4IDA7XFxufVxcblxcbi5wcm9qZWN0TmFtZVNhdmVyQnRuQ29udGFpbmVyIGJ1dHRvbiB7XFxuICBwYWRkaW5nOiA5cHg7XFxuICBib3JkZXI6IG5vbmU7XFxuICBib3JkZXItcmFkaXVzOiA4cHg7XFxuICB3aWR0aDogMTAwcHg7XFxuICBoZWlnaHQ6IDQwcHg7XFxuICBmb250LXNpemU6IDE5cHg7XFxufVxcblxcbiNQcm9qZWN0c0Zvcm1OYW1lQ29udGFpbmVyRWwgLkNhbmNlbCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmV5O1xcbiAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4jbmV3UHJvamVjdFRhc2tzQ29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbiNuZXdQcm9qZWN0VGFza3NJbm5lckNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiA1cHg7XFxuICBtYXJnaW46IDEwcHg7XFxuICBib3gtc2hhZG93OiAjNWM1NTU1IDFweCAzcHggM3B4IDFweDtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICBwYWRkaW5nOiAxMHB4O1xcbiAgd2lkdGg6IDk1cHg7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBsZWZ0OiAyNTBweDtcXG59XFxuXFxuc3ZnLmFkZFRhc2sge1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgZmlsbDogd2hlYXQ7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XFxufVxcblxcbi5uZXdQcm9qZWN0QWRkQnRuIHtcXG4gIGJvcmRlcjogMDtcXG4gIGJhY2tncm91bmQtY29sb3I6IGluaGVyaXQ7XFxuICBmb250LXdlaWdodDogNTAwO1xcbn1cXG5cXG4jUHJvamVjdGRhdGVQaWNrZXIge1xcbiAgcGFkZGluZzogMnB4O1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgYm9yZGVyOiBub25lO1xcbiAgaGVpZ2h0OiAzMnB4O1xcbn1cXG5cXG4jc3VibWl0QnRuRm9yUHJvamVjdCB7XFxuICBwYWRkaW5nOiA3cHg7XFxuICBib3JkZXItcmFkaXVzOiA5cHg7XFxufVxcblxcbiNzdWJtaXRCdG5Gb3JQcm9qZWN0OmFjdGl2ZSB7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XFxufVxcblxcbi5jYW5jZWxGb3JQcm9qZWN0QnRuIHtcXG4gIHBhZGRpbmc6IDdweDtcXG4gIGJvcmRlci1yYWRpdXM6IDlweDtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTtcblxuICAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfVxuXG4gIC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcbm9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCIvLyBpbXBvcnQgeyBteVByb2plY3RzIH0gZnJvbSAnLi9kb20tRWwnXG5pbXBvcnQgeyBkaXNwbGF5Rm9ybSB9IGZyb20gXCIuL2RvbS1FbFwiO1xuLy8gaW1wb3J0IHsgZWRpdFRhc2sgfSBmcm9tIFwiLi9sb2dpY3NcIjtcblxuY29uc3QgbXlQcm9qZWN0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcHJvamVjdHMgaDNcIik7XG5jb25zdCBzY3JlZW5Db250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI0NvbnRhaW5lclwiKTtcbmNvbnN0IHVzZXJMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN1c2VybGlzdFwiKTtcbmNvbnN0IGFkZFByb2plY3RzQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hZGRQcm9qZWN0c0NvbnRhaW5lclwiKTtcbmNvbnN0IG5ld1Byb2plY3RzRm9ybUNvbnRhaW5lckVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgXCIjbmV3UHJvamVjdHNGb3JtQ29udGFpbmVyRWxcIixcbik7XG5leHBvcnQgY29uc3QgaW5wdXROZXdwcm9qZWN0Rm9ybU5hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICBcIi5pbnB1dE5ld3Byb2plY3RGb3JtTmFtZVwiLFxuKTtcbmNvbnN0IG5ld1Byb2plY3ROYW1lUmVxdWVzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubmV3UHJvamVjdE5hbWVSZXF1ZXN0XCIpO1xuY29uc3QgbmV3UHJvamVjdE5hbWVUaXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaGVhZGVyVGV4dENvbnRlbnRcIik7XG5jb25zdCBTYXZlUHJvamVjdE5hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLlNhdmVQcm9qZWN0TmFtZVwiKTtcbmNvbnN0IG5ld1Byb2plY3RUYXNrID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5uZXdQcm9qZWN0VGFza1wiKTtcbmNvbnN0IG5ld1Byb2plY3RUYXNrc0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5jb25zdCBuZXdQcm9qZWN0VGFza3NJbm5lckNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cbmNvbnN0IG5ld1Byb2plY3RBZGRCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuY29uc3Qgc3VibWl0VGFza0J0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjc3VibWl0QnRuRm9yUHJvamVjdFwiKTtcbmNvbnN0IGNhbmNlbFRhc2tCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNhbmNlbEZvclByb2plY3RCdG5cIik7XG5jb25zdCBkaXNwbGF5UHJvamVjdFRvZG9zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNkaXNwbGF5UHJvamVjdFRvZG9zXCIpO1xuXG5sZXQgcHJvamVjdEZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI1Byb2plY3RGb3JtXCIpO1xubGV0IGZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2Zvcm1cIik7XG5sZXQgaW5wdXRGaWVsZEVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wVGl0bGVcIik7XG5sZXQgZGVzY3JpcHRpb25GaWVsZEVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wRGVzY3JpcHRpb25cIik7XG5sZXQgc2VsZWN0UHJpb3JpdHlFbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcHJvamVjdFByaW9yaXR5XCIpO1xubGV0IGR1ZURhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI1Byb2plY3RkYXRlUGlja2VyXCIpO1xuY29uc3QgcHJvamVjdERyb3BEb3duID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwcm9qZWN0LWRyb3Bkb3duXCIpO1xubGV0IHNlbGVjdGVkUHJvamVjdCA9IHByb2plY3REcm9wRG93bi52YWx1ZTtcblxuY29uc3QgbmV3UHJvamVjdEZvcm1OYW1lQnRuRWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICBcIi5uZXdQcm9qZWN0Rm9ybU5hbWVCdG5FbFwiLFxuKTtcblxuY2xhc3MgZ2V0TGlzdCB7XG4gIGNvbnN0cnVjdG9yKHRpdGxlLCBkZXNjcmlwdGlvbiwgcHJpb3JpdHksIGRhdGUpIHtcbiAgICB0aGlzLnRpdGxlID0gdGl0bGU7XG4gICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xuICAgIHRoaXMucHJpb3JpdHkgPSBwcmlvcml0eTtcbiAgICB0aGlzLmRhdGUgPSBkYXRlO1xuICB9XG59XG5cbmZ1bmN0aW9uIGRpc3BsYXlSZXF1ZXN0TmV3UHJvamVjdEZvcm1OYW1lKCkge1xuICAgY29uc3QgaW50aWFsVGV4dERpc3BsYXlDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgIFwiLmludGlhbFRleHREaXNwbGF5Q29udGFpbmVyXCIsXG4gICk7XG5cbiAgaW50aWFsVGV4dERpc3BsYXlDb250YWluZXIuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgaWYgKHVzZXJMaXN0LnRleHRDb250ZW50KSB7XG4gICAgdXNlckxpc3QudGV4dENvbnRlbnQgPSBcIlwiO1xuICB9XG5cbiAgaWYgKGZvcm0uc3R5bGUuZGlzcGxheSA9PT0gXCJibG9ja1wiKSB7XG4gICAgZm9ybS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gIH1cbiAgaWYgKHByb2plY3RGb3JtLnN0eWxlLmRpc3BsYXkgPT09IFwiYmxvY2tcIikge1xuICAgIHByb2plY3RGb3JtLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgfVxuXG4gIGlucHV0TmV3cHJvamVjdEZvcm1OYW1lLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG4gIHJldHVybiB7IGlucHV0TmV3cHJvamVjdEZvcm1OYW1lIH07XG59XG5hZGRQcm9qZWN0c0NvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKFxuICBcImNsaWNrXCIsXG4gIGRpc3BsYXlSZXF1ZXN0TmV3UHJvamVjdEZvcm1OYW1lLFxuKTtcblxuLy9HZXQgTmV3IFByb2plY3QgTmFtZSBGdW5jdGlvbi5cbmV4cG9ydCBmdW5jdGlvbiBnZXRuZXdQcm9qZWN0SW5wdXROYW1lKCkge1xuICBjb25zdCBpbnB1dE5ld1Byb2plY3ROYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5pbnB1dE5ld1Byb2plY3ROYW1lXCIpO1xuICBjb25zdCBpbnB1dE5ld1Byb2plY3ROYW1lVmFsdWUgPSBpbnB1dE5ld1Byb2plY3ROYW1lLnZhbHVlO1xuICBuZXdQcm9qZWN0TmFtZVRpdGxlLnRleHRDb250ZW50ID0gaW5wdXROZXdQcm9qZWN0TmFtZVZhbHVlO1xuXG4gIC8vIHByb2plY3RzLnB1c2goaW5wdXROZXdQcm9qZWN0TmFtZVZhbHVlKVxuXG4gIGlucHV0TmV3UHJvamVjdE5hbWUudmFsdWUgPSBcIlwiO1xuXG4gIGFkZFByb2plY3ROYW1lKGlucHV0TmV3UHJvamVjdE5hbWVWYWx1ZSk7XG5cbiAgaWYgKGlucHV0TmV3cHJvamVjdEZvcm1OYW1lKSB7XG4gICAgaW5wdXROZXdwcm9qZWN0Rm9ybU5hbWUuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICB9IGVsc2Uge1xuICAgIGlucHV0TmV3cHJvamVjdEZvcm1OYW1lLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG4gIH1cblxuICByZXR1cm4geyBpbnB1dE5ld1Byb2plY3ROYW1lVmFsdWUgfTtcbn1cblxuLy9DYW5jZWwgcHJvamVjdCBmb3JtIG5hbWUgcmVxdWVzdFxubmV3UHJvamVjdEZvcm1OYW1lQnRuRWwuYWRkRXZlbnRMaXN0ZW5lcihcbiAgXCJjbGlja1wiLFxuICAoKSA9PiAoaW5wdXROZXdwcm9qZWN0Rm9ybU5hbWUuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiKSxcbik7XG5cbmxldCBzdmdFbGVtZW50ID0gbnVsbDtcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVOZXdQcm9qZWN0VGFza0J0bigpIHtcbiAgbmV3UHJvamVjdFRhc2tzQ29udGFpbmVyLnNldEF0dHJpYnV0ZShcImlkXCIsIFwibmV3UHJvamVjdFRhc2tzQ29udGFpbmVyXCIpO1xuICBuZXdQcm9qZWN0VGFza3NJbm5lckNvbnRhaW5lci5zZXRBdHRyaWJ1dGUoXG4gICAgXCJpZFwiLFxuICAgIFwibmV3UHJvamVjdFRhc2tzSW5uZXJDb250YWluZXJcIixcbiAgKTtcbiAgXG4gaWYgKG5ld1Byb2plY3RUYXNrc0lubmVyQ29udGFpbmVyLmNvbnRhaW5zKHN2Z0VsZW1lbnQpKSB7XG4gICAgbmV3UHJvamVjdFRhc2tzSW5uZXJDb250YWluZXIucmVtb3ZlQ2hpbGQoc3ZnRWxlbWVudCk7XG4gIH1cblxuICBuZXdQcm9qZWN0QWRkQnRuLnRleHRDb250ZW50ID0gXCJBZGQgdGFza1wiO1xuXG4gIC8vIENyZWF0ZSB0aGUgU1ZHIGVsZW1lbnRcbiAgY29uc3Qgc3ZnTmFtZXNwYWNlID0gXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiO1xuICAgIHN2Z0VsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoc3ZnTmFtZXNwYWNlLCBcInN2Z1wiKTtcblxuICAvLyBTZXQgdGhlIGNsYXNzIGFuZCB2aWV3Qm94IGF0dHJpYnV0ZXNcbiAgc3ZnRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImFkZFRhc2tcIik7XG4gIHN2Z0VsZW1lbnQuc2V0QXR0cmlidXRlKFwidmlld0JveFwiLCBcIjAgMCAyNCAyNFwiKTtcblxuICAvLyBDcmVhdGUgdGhlIHRpdGxlIGVsZW1lbnRcbiAgY29uc3QgdGl0bGVFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKHN2Z05hbWVzcGFjZSwgXCJ0aXRsZVwiKTtcbiAgdGl0bGVFbGVtZW50LnRleHRDb250ZW50ID0gXCJwbHVzXCI7XG4gIHN2Z0VsZW1lbnQuYXBwZW5kQ2hpbGQodGl0bGVFbGVtZW50KTtcblxuICAvLyBDcmVhdGUgdGhlIHBhdGggZWxlbWVudFxuICBjb25zdCBwYXRoRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyhzdmdOYW1lc3BhY2UsIFwicGF0aFwiKTtcbiAgcGF0aEVsZW1lbnQuc2V0QXR0cmlidXRlKFwiZFwiLCBcIk0xOSwxM0gxM1YxOUgxMVYxM0g1VjExSDExVjVIMTNWMTFIMTlWMTNaXCIpO1xuICBzdmdFbGVtZW50LmFwcGVuZENoaWxkKHBhdGhFbGVtZW50KTtcblxuICBuZXdQcm9qZWN0QWRkQnRuLmNsYXNzTGlzdC5hZGQoXCJuZXdQcm9qZWN0QWRkQnRuXCIpO1xuXG4gXG5cbiAgbmV3UHJvamVjdFRhc2tzSW5uZXJDb250YWluZXIuYXBwZW5kQ2hpbGQoc3ZnRWxlbWVudCk7XG4gIG5ld1Byb2plY3RUYXNrc0lubmVyQ29udGFpbmVyLmFwcGVuZENoaWxkKG5ld1Byb2plY3RBZGRCdG4pO1xuICBuZXdQcm9qZWN0VGFza3NDb250YWluZXIuYXBwZW5kQ2hpbGQobmV3UHJvamVjdFRhc2tzSW5uZXJDb250YWluZXIpO1xuXG4gIG5ld1Byb2plY3RzRm9ybUNvbnRhaW5lckVsLmFwcGVuZENoaWxkKG5ld1Byb2plY3RUYXNrc0NvbnRhaW5lcik7XG5cbiAgcmV0dXJuIG5ld1Byb2plY3RzRm9ybUNvbnRhaW5lckVsO1xufVxuXG5mdW5jdGlvbiBkaXNwbGF5TmV3UHJvamVjdEZvcm0oKSB7XG4gIHByb2plY3RGb3JtLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG59XG5cbi8vIEFkZCBwcm9qZWN0IG5hbWUgdG8gbG9jYWwgc3RvcmFnZSBhbmQgIHBvcHVsYXRlIHByb2plY3QgZHJvcCBkb3duXG5mdW5jdGlvbiBhZGRQcm9qZWN0TmFtZShwcm9qZWN0TmFtZSkge1xuICBsZXQgcHJvamVjdHMgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwicHJvamVjdHNcIikpIHx8IFtdO1xuICBwcm9qZWN0cy5wdXNoKHByb2plY3ROYW1lKTtcbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJwcm9qZWN0c1wiLCBKU09OLnN0cmluZ2lmeShwcm9qZWN0cykpO1xuICBmaWxsUHJvamVjdERyb3BEb3duKCk7XG4gIHJldHVybiB7IHByb2plY3ROYW1lIH07XG59XG5cbi8vIFBvcHVsYXRlIHByb2plY3QgZHJvcC1kb3duXG5mdW5jdGlvbiBmaWxsUHJvamVjdERyb3BEb3duKCkge1xuICBwcm9qZWN0RHJvcERvd24udGV4dENvbnRlbnQgPSBcIlwiO1xuICBsZXQgcHJvamVjdHMgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwicHJvamVjdHNcIikpIHx8IFtdO1xuXG4gIGlmIChwcm9qZWN0cykge1xuICAgIGNvbnN0IG9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7XG4gICAgb3B0aW9uLnZhbHVlID0gXCJcIjtcbiAgICBvcHRpb24udGV4dENvbnRlbnQgPSBcIlNlbGVjdCBwcm9qZWN0XCI7XG4gICAgcHJvamVjdERyb3BEb3duLmFwcGVuZENoaWxkKG9wdGlvbik7XG5cbiAgICBwcm9qZWN0cz8uZm9yRWFjaCgocHJvamVjdCkgPT4ge1xuICAgICAgY29uc3Qgb3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTtcbiAgICAgIG9wdGlvbi52YWx1ZSA9IHByb2plY3Q7XG4gICAgICBvcHRpb24udGV4dENvbnRlbnQgPSBwcm9qZWN0O1xuICAgICAgcHJvamVjdERyb3BEb3duLmFwcGVuZENoaWxkKG9wdGlvbik7XG4gICAgfSk7XG4gIH1cbn1cbmZpbGxQcm9qZWN0RHJvcERvd24oKTtcblxuLy8gRGlzcGxheSBlYWNoIHByb2plY3QncyB0by1kb3Mgd2hlbiBzZWxlY3RlZFxucHJvamVjdERyb3BEb3duLmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgKCkgPT4ge1xuICB1c2VyTGlzdC50ZXh0Q29udGVudCA9IFwiXCI7XG4gIGNvbnN0IGludGlhbFRleHREaXNwbGF5Q29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICBcIi5pbnRpYWxUZXh0RGlzcGxheUNvbnRhaW5lclwiLFxuICApO1xuICBpbnRpYWxUZXh0RGlzcGxheUNvbnRhaW5lci5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG5cbiAgZGlzcGxheVByb2plY3RUb2Rvcy50ZXh0Q29udGVudCA9IFwiXCI7XG4gIG5ld1Byb2plY3RUYXNrc0NvbnRhaW5lci5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG5cbiAgLy9DbGVhciB0aGUgYWRkIHRhc2sgYnV0dG9uIGNvbnRhaW5lciBlYWNoIHRpbWUgdXNlciBzZWxlY3QgYSBwcm9qZWN0XG4gIG5ld1Byb2plY3RUYXNrc0NvbnRhaW5lci50ZXh0Q29udGVudCA9IFwiXCI7XG5cbiAgLy9EaXNwbGF5IG5vIGZvcm0gaWYgYW55IGZvcm0gaXMgaW4gYmxvY2tcbiAgaWYgKGZvcm0uc3R5bGUuZGlzcGxheSA9PT0gXCJibG9ja1wiKSB7XG4gICAgZm9ybS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gIH1cblxuICBzZWxlY3RlZFByb2plY3QgPSBwcm9qZWN0RHJvcERvd24udmFsdWU7XG4gIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJoZWFkZXIgaDFcIik7XG4gIGhlYWRlci50ZXh0Q29udGVudCA9IHNlbGVjdGVkUHJvamVjdDtcbiAgLy8gZ2V0U2VsZWN0ZWRUb2RvcyhzZWxlY3RlZFByb2plY3QpO1xuICBkaXNwbGF5VG9Eb3NGb3JDdXJyZW50UHJvamVjdChzZWxlY3RlZFByb2plY3QpO1xuICAvLyBkaXNwbGF5U2VsZWN0ZWRUb0RvcyhzZWxlY3RlZFByb2plY3QpO1xuICBkaXNwbGF5TmV3UHJvamVjdEZvcm0oKTtcbn0pO1xuXG5leHBvcnQgZnVuY3Rpb24gZ2V0VXNlclRvZG8oKSB7XG4gIGxldCB0YXNrSW5wdXRWYWx1ZSA9IGlucHV0RmllbGRFbC52YWx1ZTtcbiAgbGV0IGRlc2NyaXB0aW9uSW5wdXRWYWx1ZSA9IGRlc2NyaXB0aW9uRmllbGRFbC52YWx1ZTtcbiAgbGV0IHByaW9yaXR5VmFsdWVFbCA9IHNlbGVjdFByaW9yaXR5RWwudmFsdWU7XG4gIGxldCBkdWVEYXRlVmFsdWVFbCA9IGR1ZURhdGUudmFsdWU7XG5cbiAgaWYgKHRhc2tJbnB1dFZhbHVlLmxlbmd0aCA+IDM1KSB7XG4gICAgcmV0dXJuIGFsZXJ0KFxuICAgICAgYElucHV0IHNob3VsZCBiZSBsZXNzIG9yIGVxdWFsIHRvIHRoZSAzNSBjaGFyYWN0ZXJzLCB5b3UgaGF2ZSBlbnRlcmVkICR7dGFza0lucHV0VmFsdWUubGVuZ3RofSBjaGFyYWN0ZXJzYCxcbiAgICApO1xuICB9IGVsc2UgaWYgKGRlc2NyaXB0aW9uSW5wdXRWYWx1ZS5sZW5ndGggPiA0MCkge1xuICAgIHJldHVybiBhbGVydChcbiAgICAgIGBEZXNjcmlwdGlvbiBzaG91bGQgYmUgbGVzcyBvciBlcXVhbCB0byB0aGUgNDAgY2hhcmFjdGVycywgeW91IGhhdmUgZW50ZXJlZCAke2Rlc2NyaXB0aW9uSW5wdXRWYWx1ZS5sZW5ndGh9IGNoYXJhY3RlcnNgLFxuICAgICk7XG4gIH1cblxuICBjb25zdCBkYXRlID0gbmV3IERhdGUoZHVlRGF0ZVZhbHVlRWwpO1xuXG4gIGNvbnN0IG9wdGlvbnMgPSB7XG4gICAgd2Vla2RheTogXCJsb25nXCIsXG4gICAgeWVhcjogXCJudW1lcmljXCIsXG4gICAgbW9udGg6IFwic2hvcnRcIixcbiAgICBkYXk6IFwibnVtZXJpY1wiLFxuICB9O1xuXG4gIGNvbnN0IGRheU9mV2VlayA9IGRhdGUudG9Mb2NhbGVEYXRlU3RyaW5nKFwiZW4tVXNcIiwgb3B0aW9ucyk7XG5cbiAgbGV0IHVzZXJUb2RvID0gbmV3IGdldExpc3QoXG4gICAgdGFza0lucHV0VmFsdWUsXG4gICAgZGVzY3JpcHRpb25JbnB1dFZhbHVlLFxuICAgIHByaW9yaXR5VmFsdWVFbCxcbiAgICBkYXlPZldlZWssXG4gICk7XG5cbiAgcmV0dXJuIHVzZXJUb2RvO1xufVxuXG4vLyBDbGVhciBmb3JtIGlucHV0XG5mdW5jdGlvbiBjbGVhcklucHV0Rm9ybSgpIHtcbiAgaW5wdXRGaWVsZEVsLnZhbHVlID0gXCJcIjtcbiAgZGVzY3JpcHRpb25GaWVsZEVsLnZhbHVlID0gXCJcIjtcbiAgc2VsZWN0UHJpb3JpdHlFbC52YWx1ZSA9IFwiU2VsZWN0IFByaW9yaXR5XCI7XG4gIGR1ZURhdGUudmFsdWUgPSBcIlwiO1xufVxuXG5sZXQgY3VycmVudFByb2plY3ROYW1lID0gW107XG5sZXQgdG9EbyA9IFtdO1xuZnVuY3Rpb24gYWRkTmV3UHJvamVjdFRvZG9zKCkge1xuICBjdXJyZW50UHJvamVjdE5hbWUgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwicHJvamVjdHNcIikpIHx8IFtdO1xuICBjb25zdCBjdXJyZW50UHJvamVjdCA9IGN1cnJlbnRQcm9qZWN0TmFtZVtjdXJyZW50UHJvamVjdE5hbWUubGVuZ3RoIC0gMV07XG4gIGNvbnNvbGUubG9nKGN1cnJlbnRQcm9qZWN0TmFtZSk7XG5cbiAgLy8gaWYgKHByb2plY3RGb3JtLnN0eWxlLmRpc3BsYXkgPT09IFwiYmxvY2tcIikge1xuICAvLyBzZWxlY3RlZFByb2plY3QgPSBjdXJyZW50UHJvamVjdDtcblxuICBjb25zdCBzZWxlY3RlZFByb2plY3QgPSBwcm9qZWN0RHJvcERvd24udmFsdWU7XG5cbiAgaWYgKHNlbGVjdGVkUHJvamVjdCkge1xuICAgIHRvRG8gPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKHNlbGVjdGVkUHJvamVjdCkpIHx8IFtdO1xuXG4gICAgY29uc3QgbmV3VG9EbyA9IGdldFVzZXJUb2RvKCk7XG4gICAgdG9Eby5wdXNoKG5ld1RvRG8pO1xuXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oc2VsZWN0ZWRQcm9qZWN0LCBKU09OLnN0cmluZ2lmeSh0b0RvKSk7XG4gICAgY29uc29sZS5sb2codG9Ebyk7XG5cbiAgICBjb25zb2xlLmxvZyh0b0RvKTtcbiAgICBjbGVhcklucHV0Rm9ybSgpO1xuICAgIGRpc3BsYXlUb0Rvc0ZvckN1cnJlbnRQcm9qZWN0KHNlbGVjdGVkUHJvamVjdCk7XG4gIH0gZWxzZSB7XG4gICAgY29uc29sZS5sb2coY3VycmVudFByb2plY3QpO1xuICAgIC8vSWYgdGhlcmUgaXMgYW4gZXhpc3RpbmcgcHJvamVjdCBnZXQgaXQgZnJvbSB0aGUgbG9jYWwgc3RvcmFnZVxuICAgIGNvbnN0IHRvRG8gPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKGN1cnJlbnRQcm9qZWN0KSkgfHwgW107XG5cbiAgICBjb25zdCBuZXdUb0RvID0gZ2V0VXNlclRvZG8oKTtcblxuICAgIHRvRG8ucHVzaChuZXdUb0RvKTtcblxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKGN1cnJlbnRQcm9qZWN0LCBKU09OLnN0cmluZ2lmeSh0b0RvKSk7XG5cbiAgICBjb25zb2xlLmxvZyh0b0RvKTtcbiAgICBjbGVhcklucHV0Rm9ybSgpO1xuICAgIGRpc3BsYXlUb0Rvc0ZvckN1cnJlbnRQcm9qZWN0KGN1cnJlbnRQcm9qZWN0KTtcbiAgfVxuICAvLyB9XG59XG5cbmZ1bmN0aW9uIGRpc3BsYXlUb0Rvc0ZvckN1cnJlbnRQcm9qZWN0KHByb2plY3ROYW1lKSB7XG4gIGN1cnJlbnRQcm9qZWN0TmFtZSA9IHByb2plY3ROYW1lO1xuICAvLyBjb25zb2xlLmxvZyhjdXJyZW50UHJvamVjdE5hbWUpO1xuXG4gIC8vIHNhdmVUYXNrKHByb2plY3ROYW1lKTtcbiAgbGV0IHByb2plY3RUb2RvcyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0ocHJvamVjdE5hbWUpKSB8fCBbXTtcblxuICB0b0RvID0gcHJvamVjdFRvZG9zO1xuICBjb25zb2xlLmxvZyh0b0RvKTtcbiAgLy8gY29uc29sZS5sb2coY3VycmVudFRvZG9zKTtcblxuICBwcm9qZWN0VG9kb3MuZm9yRWFjaCgodG9kbywgaW5kZXgpID0+IHtcbiAgICBkaXNwbGF5VGFzayhcbiAgICAgIHRvZG8udGl0bGUsXG4gICAgICB0b2RvLmRlc2NyaXB0aW9uLFxuICAgICAgdG9kby5wcmlvcml0eSxcbiAgICAgIHRvZG8uZGF0ZSxcbiAgICAgIGluZGV4LFxuICAgICAgcHJvamVjdE5hbWUsXG4gICAgKTtcbiAgfSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkaXNwbGF5VGFzayhcbiAgc2F2ZVRpdGxlRGF0YSxcbiAgc2F2ZURlc2NyaXB0aW9uRGF0YSxcbiAgc2F2ZVByaW9yaXR5RGF0YSxcbiAgc2F2ZUR1ZURhdGVEYXRhLFxuICBpbmRleCxcbiAgcHJvamVjdE5hbWUsXG4pIHtcbiAgY29uc3QgbGlzdENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IHRhc2tDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgY29uc3QgaW5uZXJUYXNrQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgaW5uZXJUYXNrSGFuZGxlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cbiAgaW5uZXJUYXNrSGFuZGxlci5jbGFzc0xpc3QuYWRkKFwiaW5uZXJUYXNrSGFuZGxlclwiKTtcbiAgaW5uZXJUYXNrQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJpbm5lclRhc2tDb250YWluZXJcIik7XG4gIHRhc2tDb250YWluZXIuY2xhc3NMaXN0LmFkZChcInRhc2tDb250YWluZXJcIik7XG4gIGxpc3RDb250YWluZXIuY2xhc3NMaXN0LmFkZChcImxpc3RDb250YWluZXJcIik7XG5cbiAgY29uc3QgY2hlY2tCb3hDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgY2hlY2tCb3hDb250YWluZXIuY2xhc3NMaXN0LmFkZChcImNoZWNrQm94Q29udGFpbmVyXCIpO1xuICBjb25zdCBjaGVja0JveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgY2hlY2tCb3guY2xhc3NMaXN0LmFkZChcImNoZWNrQm94XCIpO1xuICBjaGVja0JveC5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwiY2hlY2tib3hcIik7XG5cbiAgY29uc3QgdGFza1RpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImg0XCIpO1xuICBjb25zdCB0YXNrRGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgY29uc3QgZHVlRGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICBjb25zdCB0YXNrUHJpb3JpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgY29uc3QgZGVsZXRlVGFzayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG5cbiAgdGFza1RpdGxlLmNsYXNzTGlzdC5hZGQoXCJ0YXNrVGl0bGVcIik7XG4gIHRhc2tEZXNjcmlwdGlvbi5jbGFzc0xpc3QuYWRkKFwidGFza0Rlc2NyaXB0aW9uXCIpO1xuICBkdWVEYXRlLmNsYXNzTGlzdC5hZGQoXCJkdWVEYXRlXCIpO1xuICBkZWxldGVUYXNrLmNsYXNzTGlzdC5hZGQoXCJkZWxldGVUYXNrXCIpO1xuICB0YXNrUHJpb3JpdHkuY2xhc3NMaXN0LmFkZChcInRhc2tQcmlvcml0eVwiKTtcblxuICB0YXNrVGl0bGUudGV4dENvbnRlbnQgPSBgICR7c2F2ZVRpdGxlRGF0YX1gO1xuICB0YXNrRGVzY3JpcHRpb24udGV4dENvbnRlbnQgPSBgJHtzYXZlRGVzY3JpcHRpb25EYXRhfWA7XG4gIHRhc2tQcmlvcml0eS50ZXh0Q29udGVudCA9IGAke3NhdmVQcmlvcml0eURhdGF9YDtcbiAgZHVlRGF0ZS50ZXh0Q29udGVudCA9IGAke3NhdmVEdWVEYXRlRGF0YX1gO1xuICBkZWxldGVUYXNrLnRleHRDb250ZW50ID0gXCJEZWxldGUgdGFza1wiO1xuXG4gIGRlbGV0ZVRhc2suZGF0YXNldC5pbmRleCA9IGluZGV4O1xuICBkZWxldGVUYXNrLmRhdGFzZXQucHJvamVjdCA9IHByb2plY3ROYW1lO1xuICBjaGVja0JveC5kYXRhc2V0LmluZGV4ID0gaW5kZXg7XG4gIGNoZWNrQm94LmRhdGFzZXQucHJvamVjdCA9IHByb2plY3ROYW1lO1xuXG4gIHRhc2tUaXRsZS5kYXRhc2V0LmZpZWxkVHlwZSA9IFwidGl0bGVcIjtcbiAgdGFza0Rlc2NyaXB0aW9uLmRhdGFzZXQuZmllbGRUeXBlID0gXCJkZXNjcmlwdGlvblwiO1xuICB0YXNrUHJpb3JpdHkuZGF0YXNldC5maWVsZFR5cGUgPSBcInRhc2tQcmlvcml0eVwiO1xuICBkdWVEYXRlLmRhdGFzZXQuZmllbGRUeXBlID0gXCJkdWVEYXRlXCI7XG5cbiAgdGFza1RpdGxlLmRhdGFzZXQuaW5kZXggPSBpbmRleDtcbiAgdGFza0Rlc2NyaXB0aW9uLmRhdGFzZXQuaW5kZXggPSBpbmRleDtcbiAgdGFza1ByaW9yaXR5LmRhdGFzZXQuaW5kZXggPSBpbmRleDtcbiAgZHVlRGF0ZS5kYXRhc2V0LmluZGV4ID0gaW5kZXg7XG5cbiAgaW5uZXJUYXNrQ29udGFpbmVyLmFwcGVuZENoaWxkKHRhc2tUaXRsZSk7XG4gIGlubmVyVGFza0NvbnRhaW5lci5hcHBlbmRDaGlsZCh0YXNrRGVzY3JpcHRpb24pO1xuICBpbm5lclRhc2tDb250YWluZXIuYXBwZW5kQ2hpbGQoZHVlRGF0ZSk7XG5cbiAgaW5uZXJUYXNrSGFuZGxlci5hcHBlbmRDaGlsZCh0YXNrUHJpb3JpdHkpO1xuICBpbm5lclRhc2tIYW5kbGVyLmFwcGVuZENoaWxkKGRlbGV0ZVRhc2spO1xuXG4gIHRhc2tDb250YWluZXIuYXBwZW5kQ2hpbGQoaW5uZXJUYXNrQ29udGFpbmVyKTtcbiAgdGFza0NvbnRhaW5lci5hcHBlbmRDaGlsZChpbm5lclRhc2tIYW5kbGVyKTtcblxuICBjaGVja0JveENvbnRhaW5lci5hcHBlbmRDaGlsZChjaGVja0JveCk7XG4gIGxpc3RDb250YWluZXIuYXBwZW5kQ2hpbGQoY2hlY2tCb3hDb250YWluZXIpO1xuXG4gIGxpc3RDb250YWluZXIuYXBwZW5kQ2hpbGQodGFza0NvbnRhaW5lcik7XG4gIHVzZXJMaXN0LmFwcGVuZENoaWxkKGxpc3RDb250YWluZXIpO1xuXG4gIHRhc2tUaXRsZS5hZGRFdmVudExpc3RlbmVyKFwiZGJsY2xpY2tcIiwgZWRpdFRhc2spO1xuICB0YXNrRGVzY3JpcHRpb24uYWRkRXZlbnRMaXN0ZW5lcihcImRibGNsaWNrXCIsIGVkaXRUYXNrKTtcbiAgdGFza1ByaW9yaXR5LmFkZEV2ZW50TGlzdGVuZXIoXCJkYmxjbGlja1wiLCBlZGl0VGFzayk7XG4gIGR1ZURhdGUuYWRkRXZlbnRMaXN0ZW5lcihcImRibGNsaWNrXCIsIGVkaXRUYXNrKTtcblxuICBkZWxldGVUYXNrLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBkZWxldGVUb0RvKTtcbiAgZGVsZXRlVGFzay5hZGRFdmVudExpc3RlbmVyKFwidG91Y2hzdGFydFwiLCBkZWxldGVUb0RvKTtcblxuICBoYW5kbGVDaGVja0JveChjaGVja0JveCwgdGFza1RpdGxlLCB0YXNrRGVzY3JpcHRpb24pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZWRpdFRhc2soZXZlbnQpIHtcbiAgY29uc3QgdGFyZ2V0ID0gZXZlbnQudGFyZ2V0O1xuXG4gIGNvbnN0IGZpZWxkVHlwZSA9IHRhcmdldC5kYXRhc2V0LmZpZWxkVHlwZTsgLy8gSWRlbnRpZnkgdGhlIGZpZWxkIHR5cGUodGl0bGUsZGVzY3JpcHRpb24scHJpb3JpdHksZGF0ZSlcbiAgY29uc3QgaW5kZXggPSB0YXJnZXQuZGF0YXNldC5pbmRleDtcbiAgY29uc3QgdGFza1ByaW9yaXR5ID0gW1wiVXJnZW50XCIsIFwiSW1wb3J0YW50XCIsIFwiTG93IHByaW9yaXR5XCJdO1xuXG4gIGxldCB0YXNrSW5wdXQ7XG4gIGlmIChmaWVsZFR5cGUgPT09IFwidGl0bGVcIiB8fCBmaWVsZFR5cGUgPT09IFwiZGVzY3JpcHRpb25cIikge1xuICAgIHRhc2tJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICB0YXNrSW5wdXQudHlwZSA9IFwidGV4dFwiO1xuICAgIHRhc2tJbnB1dC52YWx1ZSA9IHRhcmdldC50ZXh0Q29udGVudDtcbiAgfSBlbHNlIGlmIChmaWVsZFR5cGUgPT09IFwiZHVlRGF0ZVwiKSB7XG4gICAgdGFza0lucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgIHRhc2tJbnB1dC50eXBlID0gXCJkYXRlXCI7XG4gICAgdGFza0lucHV0LnZhbHVlID0gdGFyZ2V0LnRleHRDb250ZW50O1xuICB9IGVsc2UgaWYgKGZpZWxkVHlwZSA9PT0gXCJ0YXNrUHJpb3JpdHlcIikge1xuICAgIHRhc2tJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzZWxlY3RcIik7XG5cbiAgICB0YXNrUHJpb3JpdHkuZm9yRWFjaCgocHJpb3JpdHkpID0+IHtcbiAgICAgIGNvbnN0IG9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7XG4gICAgICBvcHRpb24udmFsdWUgPSBwcmlvcml0eTtcbiAgICAgIG9wdGlvbi50ZXh0Q29udGVudCA9IHByaW9yaXR5O1xuXG4gICAgICBpZiAocHJpb3JpdHkgPT09IHRhcmdldC50ZXh0Q29udGVudCkge1xuICAgICAgICBvcHRpb24uc2VsZWN0ZWQgPSB0cnVlO1xuICAgICAgfVxuICAgICAgdGFza0lucHV0LmFwcGVuZENoaWxkKG9wdGlvbik7XG4gICAgfSk7XG4gIH1cblxuICAvL1N0b3JlIHRoZSBmaWVsZFR5cGUgaW4gdGhlIGlucHV0IGRhdGFzZXRcbiAgdGFza0lucHV0LmRhdGFzZXQuZmllbGRUeXBlID0gZmllbGRUeXBlO1xuICB0YXNrSW5wdXQuZGF0YXNldC5pbmRleCA9IGluZGV4O1xuXG4gIHRhcmdldC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gIHRhcmdldC5wYXJlbnROb2RlLmluc2VydEJlZm9yZSh0YXNrSW5wdXQsIHRhcmdldC5uZXh0U2libGluZyk7IC8vIEluc2VydCB0aGUgaW5wdXQgZmllbGQgbmV4dCB0byB0YXJnZXQgZWxlbWVudFxuXG4gIHRhc2tJbnB1dC5jbGFzc0xpc3QuYWRkKFwiZWRpdFwiKTtcbiAgLy8gICBjb25zdCBzZWxlY3RlZFZhbHVlID0gdGFza0lucHV0LnZhbHVlO1xuICAvLyBjb25zb2xlLmxvZyhzZWxlY3RlZFZhbHVlKTtcblxuICBpZiAodGFza0lucHV0LnR5cGUgPT09IFwidGV4dFwiKSB7XG4gICAgdGFza0lucHV0LnNlbGVjdCgpOyAvLyBBdXRvbWF0aWNhbGx5IHNlbGVjdCB0aGUgY29udGVudCBvZiB0aGUgaW5wdXQgZmllbGRcbiAgfVxuXG4gIHRhc2tJbnB1dC5hZGRFdmVudExpc3RlbmVyKFwiYmx1clwiLCBzYXZlRWRpdGVkVGFzayk7IC8vIFNhdmUgdGFzayB3aGVuIHRhc2sgbG9zZSBmb2N1cyBvbiBpbnB1dCBlbGVtZW50LlxuICB0YXNrSW5wdXQuYWRkRXZlbnRMaXN0ZW5lcihcImtleXByZXNzXCIsIHNhdmVFZGl0ZWRUYXNrKTsgLy8gU2F2ZSB0YXNrIG9uIHByZXNzaW5nIEVudGVyXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzYXZlRWRpdGVkVGFzayhldmVudCkge1xuICBjb25zb2xlLmxvZyh0b0RvKTtcblxuICBpZiAoZXZlbnQudHlwZSA9PT0gXCJibHVyXCIgfHwgZXZlbnQua2V5ID09PSBcIkVudGVyXCIpIHtcbiAgICBjb25zdCBpbnB1dCA9IGV2ZW50LnRhcmdldDtcblxuICAgIGxldCBmaWVsZFR5cGUgPSBpbnB1dC5kYXRhc2V0LmZpZWxkVHlwZTtcbiAgICBsZXQgaW5kZXggPSBpbnB1dC5kYXRhc2V0LmluZGV4OyAvLyBHZXQgdGhlIGluZGV4IGZyb20gdGhlIGlucHV0IGRhdGFzZXRcblxuICAgIGxldCBuZXdWYWx1ZTtcbiAgICAvL0lmIHNlbGVjdCBlbGVtZW50LCBnZXQgaXQgdmFsdWUgZWxzZSBnZXQgaW5wdXQgdmFsdWVcbiAgICBpZiAoaW5wdXQudGFnTmFtZSA9PT0gXCJTRUxFQ1RcIikge1xuICAgICAgbmV3VmFsdWUgPSBpbnB1dC5vcHRpb25zW2lucHV0LnNlbGVjdGVkSW5kZXhdLnZhbHVlO1xuICAgICAgdG9Eb1tpbmRleF0ucHJpb3JpdHkgPSBuZXdWYWx1ZTtcbiAgICAgIGNvbnNvbGUubG9nKHRvRG9baW5kZXhdLnByaW9yaXR5KTtcbiAgICB9IGVsc2Uge1xuICAgICAgbmV3VmFsdWUgPSBpbnB1dC52YWx1ZTtcbiAgICB9XG4gICAgLy8gY29uc3QgY3VycmVudFByb2plY3QgPSBjdXJyZW50UHJvamVjdE5hbWVbY3VycmVudFByb2plY3ROYW1lLmxlbmd0aCAtIDFdO1xuXG4gICAgLy9HZXQgdGhlIHRhc2sgZnJvbSB0aGUgbG9jYWwgc3RvcmFnZVxuICAgIC8vIGxldCB0b0RvID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShjdXJyZW50UHJvamVjdE5hbWUpKSB8fCBbXTtcbiAgICBjb25zb2xlLmxvZyh0b0RvKTtcblxuICAgIC8vQ2hlY2sgaWYgdGhlIGluZGV4IGlzIG5vdCBvdXQgb2YgYm91bmRzIGluIHRoZSBhcnJheVxuICAgIGlmIChpbmRleCA8IHRvRG8ubGVuZ3RoKSB7XG4gICAgICBpZiAoZmllbGRUeXBlID09PSBcInRpdGxlXCIpIHtcbiAgICAgICAgdG9Eb1tpbmRleF0udGl0bGUgPSBuZXdWYWx1ZTtcbiAgICAgICAgY29uc29sZS5sb2codG9Eb1tpbmRleF0udGl0bGUpO1xuICAgICAgfSBlbHNlIGlmIChmaWVsZFR5cGUgPT09IFwiZGVzY3JpcHRpb25cIikge1xuICAgICAgICB0b0RvW2luZGV4XS5kZXNjcmlwdGlvbiA9IG5ld1ZhbHVlO1xuICAgICAgfSBlbHNlIGlmIChmaWVsZFR5cGUgPT09IFwiZHVlRGF0ZVwiKSB7XG4gICAgICAgIGxldCBkdWVEYXRlID0gbmV3VmFsdWU7XG4gICAgICAgIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZShkdWVEYXRlKTtcblxuICAgICAgICBjb25zdCBvcHRpb25zID0ge1xuICAgICAgICAgIHdlZWtkYXk6IFwibG9uZ1wiLFxuICAgICAgICAgIHllYXI6IFwibnVtZXJpY1wiLFxuICAgICAgICAgIG1vbnRoOiBcInNob3J0XCIsXG4gICAgICAgICAgZGF5OiBcIm51bWVyaWNcIixcbiAgICAgICAgfTtcblxuICAgICAgICB0b0RvW2luZGV4XS5kYXRlID0gZGF0ZS50b0xvY2FsZURhdGVTdHJpbmcoXCJlbi1Vc1wiLCBvcHRpb25zKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBTYXZlIHRoZSB1cGRhdGVkIHRhc2tzIHRvIGxvY2FsIHN0b3JhZ2VcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShjdXJyZW50UHJvamVjdE5hbWUsIEpTT04uc3RyaW5naWZ5KHRvRG8pKTtcblxuICAgIC8vIFVwZGF0ZSB0aGUgb3JpZ2luYWwgZWxlbWVudCdzIHRleHQgY29udGVudCBhbmQgc2hvdyBpdCBhZ2FpblxuICAgIGxldCBvcmlnaW5hbEVsZW1lbnQgPSBpbnB1dC5wcmV2aW91c1NpYmxpbmc7XG5cbiAgICBvcmlnaW5hbEVsZW1lbnQudGV4dENvbnRlbnQgPSBuZXdWYWx1ZTtcblxuICAgIG9yaWdpbmFsRWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuXG4gICAgLy8gUmVtb3ZlIHRoZSBpbnB1dCBmaWVsZCBpZiBpdCBpcyBzdGlsbCBwYXJ0IG9mIHRoZSBET01cblxuICAgIGlucHV0LnJlbW92ZSgpO1xuXG4gICAgdXNlckxpc3QudGV4dENvbnRlbnQgPSBcIlwiO1xuXG4gICAgLy8gUmUtcmVuZGVyIHRoZSB0b2RvIGxpc3QgaWYgbmVjZXNzYXJ5XG4gICAgZGlzcGxheVRvRG9zRm9yQ3VycmVudFByb2plY3QoY3VycmVudFByb2plY3ROYW1lKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBoYW5kbGVDaGVja0JveChjaGVja0JveCwgdGFza1RpdGxlLCB0YXNrRGVzY3JpcHRpb24pIHtcbiAgY2hlY2tCb3guYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCAoZXZlbnQpID0+IHtcbiAgICBpZiAoY2hlY2tCb3guY2hlY2tlZCA9PT0gdHJ1ZSkge1xuICAgICAgY29uc3QgY2hlY2tCb3ggPSBldmVudC50YXJnZXQ7XG4gICAgICBjb25zb2xlLmxvZyhjaGVja0JveCk7XG4gICAgICBjb25zdCBpbmRleCA9IGNoZWNrQm94LmRhdGFzZXQuaW5kZXg7XG4gICAgICBjb25zdCBwcm9qZWN0TmFtZSA9IGNoZWNrQm94LmRhdGFzZXQucHJvamVjdDtcblxuICAgICAgdG9EbyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0ocHJvamVjdE5hbWUpKSB8fCBbXTtcblxuICAgICAgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgICAgICBjaGVja0JveC5yZW1vdmUoY2hlY2tCb3gpO1xuICAgICAgICB0b0RvLnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgIC8vdXBkYXRlIFRvLWRvIGl0ZW0gaW4gbG9jYWwgc3RvcmFnZVxuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShwcm9qZWN0TmFtZSwgSlNPTi5zdHJpbmdpZnkodG9EbykpO1xuICAgICAgICBjb25zb2xlLmxvZyh0b0RvKTtcbiAgICAgICAgdXNlckxpc3QudGV4dENvbnRlbnQgPSBcIlwiO1xuICAgICAgICBkaXNwbGF5VG9Eb3NGb3JDdXJyZW50UHJvamVjdChwcm9qZWN0TmFtZSk7XG4gICAgICAgIGFsZXJ0KFwiVGFzayBjb21wbGV0ZWQhXCIpO1xuICAgICAgfVxuICAgICAgY29uc29sZS5sb2coXCJ0cnVlXCIpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0YXNrVGl0bGUuc3R5bGUudGV4dERlY29yYXRpb24gPSBcIm5vbmVcIjtcbiAgICAgIHRhc2tEZXNjcmlwdGlvbi5zdHlsZS50ZXh0RGVjb3JhdGlvbiA9IFwibm9uZVwiO1xuICAgICAgY29uc29sZS5sb2coXCJmYWxzZVwiKTtcbiAgICB9XG4gIH0pO1xufVxuXG4vL0RlbGV0ZSB0aGUgdG9kbyB0aGF0IGdldCBjbGlja2VkXG5mdW5jdGlvbiBkZWxldGVUb0RvKGV2ZW50KSB7XG4gIGNvbnN0IGJ1dHRvbiA9IGV2ZW50LnRhcmdldDtcbiAgY29uc3QgaW5kZXggPSBidXR0b24uZGF0YXNldC5pbmRleDtcbiAgY29uc3QgY3VycmVudFByb2plY3QgPSBidXR0b24uZGF0YXNldC5wcm9qZWN0O1xuICBjb25zb2xlLmxvZyhjdXJyZW50UHJvamVjdCk7XG5cbiAgLy8gY29uc3QgY3VycmVudFByb2plY3QgPSBjdXJyZW50UHJvamVjdE5hbWVbY3VycmVudFByb2plY3ROYW1lLmxlbmd0aCAtIDFdO1xuICB0b0RvID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShjdXJyZW50UHJvamVjdCkpIHx8IFtdO1xuXG4gIGNvbnNvbGUubG9nKHRvRG8pO1xuXG4gIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICB0b0RvLnNwbGljZShpbmRleCwgMSk7XG4gICAgLy91cGRhdGUgVG8tZG8gaXRlbSBpbiBsb2NhbCBzdG9yYWdlXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oY3VycmVudFByb2plY3QsIEpTT04uc3RyaW5naWZ5KHRvRG8pKTtcbiAgICBjb25zb2xlLmxvZyh0b0RvKTtcbiAgICB1c2VyTGlzdC50ZXh0Q29udGVudCA9IFwiXCI7XG4gICAgZGlzcGxheVRvRG9zRm9yQ3VycmVudFByb2plY3QoY3VycmVudFByb2plY3QpO1xuICB9XG59XG5cbi8vQ2FuY2VsIHByb2plY3QgZm9ybSBmcm9tIGRpc3BsYXlpbmcuXG5mdW5jdGlvbiBjYW5jZWxGb3JtRGlzcGxheSgpIHtcbiAgaW5wdXRGaWVsZEVsLnZhbHVlID0gXCJcIjtcbiAgZGVzY3JpcHRpb25GaWVsZEVsLnZhbHVlID0gXCJcIjtcbiAgc2VsZWN0UHJpb3JpdHlFbC52YWx1ZSA9IFwiU2VsZWN0IFByaW9yaXR5XCI7XG4gIGR1ZURhdGUudmFsdWUgPSBcIlwiO1xuICBwcm9qZWN0Rm9ybS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gIGNvbnNvbGUubG9nKFwiY2FuY2VsIGZvcm0hXCIpO1xuICBuZXdQcm9qZWN0c0Zvcm1Db250YWluZXJFbC5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuICBpZiAobmV3UHJvamVjdFRhc2tzQ29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPT09IFwibm9uZVwiKSB7XG4gICAgbmV3UHJvamVjdFRhc2tzQ29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG4gIH1cbiAgY3JlYXRlTmV3UHJvamVjdFRhc2tCdG4oKTtcbiAgLy8gZGlzcGxheVRvRG9zRm9yQ3VycmVudFByb2plY3QoY3VycmVudFByb2plY3ROYW1lLnNsaWNlKCkucG9wKCkpO1xufVxuY2FuY2VsVGFza0J0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgY2FuY2VsRm9ybURpc3BsYXkpO1xuXG4vL1ByZXZlbnQgZm9ybSBEZWZhdWx0IHdoZW4gc3VibWl0aW5nIHByb2plY3QgbmFtZVxuY29uc3Qgc3VibWl0TmV3UHJvamVjdEZvcm1OYW1lID0gKGV2ZW50KSA9PiB7XG4gIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gIGdldG5ld1Byb2plY3RJbnB1dE5hbWUoKTtcbiAgZGlzcGxheU5ld1Byb2plY3RGb3JtKCk7XG4gIC8vIGNyZWF0ZU5ld1Byb2plY3RUYXNrQnRuKCk7XG59O1xuU2F2ZVByb2plY3ROYW1lLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBzdWJtaXROZXdQcm9qZWN0Rm9ybU5hbWUpO1xubmV3UHJvamVjdE5hbWVSZXF1ZXN0LmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgKGV2ZW50KSA9PlxuICBldmVudC5wcmV2ZW50RGVmYXVsdCgpLFxuKTtcblxubmV3UHJvamVjdFRhc2tzQ29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gIGRpc3BsYXlOZXdQcm9qZWN0Rm9ybSgpO1xuICBuZXdQcm9qZWN0VGFza3NDb250YWluZXIuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICBuZXdQcm9qZWN0VGFza3NDb250YWluZXIudGV4dENvbnRlbnQgPSBcIlwiO1xufSk7XG5cbmZ1bmN0aW9uIHN1Ym1pdEZvcm0oZXZlbnQpIHtcbiAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgdXNlckxpc3QudGV4dENvbnRlbnQgPSBcIlwiO1xuXG4gIGFkZE5ld1Byb2plY3RUb2RvcygpO1xuICAvLyBkaXNwbGF5VG9Eb3NGb3JDdXJyZW50UHJvamVjdChwcm9qZWN0TmFtZSk7XG4gIC8vIGFkZFRvZG9Ub3NlbGVjdGVkUHJvamVjdCgpO1xufVxuc3VibWl0VGFza0J0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgc3VibWl0Rm9ybSk7XG5wcm9qZWN0Rm9ybS5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIChldmVudCkgPT4gZXZlbnQucHJldmVudERlZmF1bHQoKSk7XG4iLCJpbXBvcnQgeyBnZXRVc2VyVG9kbyB9IGZyb20gXCIuL2RvbS1FbC0yXCI7XG5pbXBvcnQgeyBuZXdQcm9qZWN0VGFza3NDb250YWluZXIgfSBmcm9tIFwiLi9kb20tRWwtMlwiO1xuaW1wb3J0IHsgZ2V0bmV3UHJvamVjdElucHV0VmFsdWUgfSBmcm9tIFwiLi9kb20tRWwtMlwiO1xuaW1wb3J0IHsgY3JlYXRlTmV3UHJvamVjdFRhc2tCdG4gfSBmcm9tIFwiLi9kb20tRWwtMlwiO1xuaW1wb3J0IHsgaW5wdXROZXdwcm9qZWN0Rm9ybU5hbWUgfSBmcm9tIFwiLi9kb20tRWwtMlwiO1xuXG5jb25zdCBtYWluQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIm1haW5cIik7XG5jb25zdCBoZWFkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmhlYWRlclRleHRDb250ZW50XCIpO1xuY29uc3QgdXNlckxpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3VzZXJsaXN0XCIpO1xuY29uc3QgaW5ib3hUYXNrRGlzcGxheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZGlzcGxheUluYm94VGFza1wiKTtcbmNvbnN0IGZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2Zvcm1cIik7XG5sZXQgcHJvamVjdEZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI1Byb2plY3RGb3JtXCIpO1xuY29uc3QgY2FuY2VsRm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY2FuY2VsXCIpO1xuY29uc3Qgc3VibWl0QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNzdWJtaXRCdG5cIik7XG5jb25zdCBhZGRUYXNrYnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0YXNrXCIpO1xuY29uc3QgYWRkVGFza01vYmlsZUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYWRkVG9kb0J0bkNvbnRhaW5lclwiKTtcblxubGV0IGluYm94ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5pbmJveFwiKTtcbmNvbnN0IHRvRG9Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VjdGlvblwiKTtcbnRvRG9Db250YWluZXIuY2xhc3NMaXN0LmFkZChcInRvRG9Db250YWluZXJJbmJveFwiKTtcbmNvbnN0IGluYm94Rm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJmb3JtXCIpO1xuaW5ib3hGb3JtLmNsYXNzTGlzdC5hZGQoXCJpbmJveEZvcm1cIik7XG5jb25zdCBpbmJveFRhc2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuaW5ib3hUYXNrLmNsYXNzTGlzdC5hZGQoXCJpbmJveFRhc2tcIik7XG5cbmxldCB0YXNrVGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRhc2stdGl0bGVcIik7XG5sZXQgdGFza0Rlc2NyaXB0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5kZXNjcmlwdGlvblwiKTtcbmxldCB0YXNrUHJpb3JpdHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3ByaW9yaXR5XCIpO1xubGV0IGR1ZURhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2RhdGVQaWNrZXJcIik7XG5cbmNsYXNzIGdldExpc3Qge1xuICBjb25zdHJ1Y3Rvcih0aXRsZSwgZGVzY3JpcHRpb24sIHByaW9yaXR5LCBkYXRlKSB7XG4gICAgdGhpcy50aXRsZSA9IHRpdGxlO1xuICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcbiAgICB0aGlzLnByaW9yaXR5ID0gcHJpb3JpdHk7XG4gICAgdGhpcy5kYXRlID0gZGF0ZTtcbiAgfVxufVxuXG5leHBvcnQgY29uc3QgbXlQcm9qZWN0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcHJvamVjdHMgaDNcIik7XG5jb25zdCBkZWZhdWx0UHJvamVjdHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Byb2plY3RzXCIpO1xuXG5mdW5jdGlvbiBkaXNwbGF5Rm9ybShldmVudCkge1xuICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiaGVhZGVyIGgxXCIpO1xuXG4gIGhlYWRlci50ZXh0Q29udGVudCA9IFwiQWRkIHlvdXIgVG8gZG9cIjtcbiAgdXNlckxpc3QudGV4dENvbnRlbnQgPSBcIlwiO1xuICBjb25zdCBpbnRpYWxUZXh0RGlzcGxheUNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgXCIuaW50aWFsVGV4dERpc3BsYXlDb250YWluZXJcIixcbiAgKTtcbiAgaW50aWFsVGV4dERpc3BsYXlDb250YWluZXIuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuXG4gIGxldCBuZXdQcm9qZWN0QnRuID0gY3JlYXRlTmV3UHJvamVjdFRhc2tCdG4oKTtcbiAgbmV3UHJvamVjdEJ0bi5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gIGZvcm0uc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcbiAgaWYgKChwcm9qZWN0Rm9ybS5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiKSkge1xuICAgIHByb2plY3RGb3JtLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgfVxufVxuYWRkVGFza2J0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZGlzcGxheUZvcm0pO1xuYWRkVGFza01vYmlsZUJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZGlzcGxheUZvcm0pO1xuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCAoKSA9PiB7XG4gIGRpc3BsYXlUb0RvcygpO1xufSk7XG5cbmxldCB0b0RvcyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ0b0Rvc1wiKSkgfHwgW107XG5cbmZ1bmN0aW9uIGFjY2VwdElucHV0KCkge1xuICBsZXQgdGFza0lucHV0VmFsdWUgPSB0YXNrVGl0bGUudmFsdWU7XG4gIGxldCBkZXNjcmlwdGlvbklucHV0VmFsdWUgPSB0YXNrRGVzY3JpcHRpb24udmFsdWU7XG4gIGxldCBwcmlvcml0eVZhbHVlRWwgPSB0YXNrUHJpb3JpdHkudmFsdWU7XG4gIGxldCBkdWVEYXRlVmFsdWVFbCA9IGR1ZURhdGUudmFsdWU7XG5cbiAgY29uc29sZS5sb2codGFza0lucHV0VmFsdWUubGVuZ3RoKTtcbiAgaWYgKHRhc2tJbnB1dFZhbHVlLmxlbmd0aCA+IDMwKSB7XG4gICAgcmV0dXJuIGFsZXJ0KFxuICAgICAgYElucHV0IHNob3VsZCBiZSBsZXNzIG9yIGVxdWFsIHRvIHRoZSAzNSBjaGFyYWN0ZXJzLCB5b3UgaGF2ZSBlbnRlcmVkICR7dGFza0lucHV0VmFsdWUubGVuZ3RofSBjaGFyYWN0ZXJzYCxcbiAgICApO1xuICB9IGVsc2UgaWYgKGRlc2NyaXB0aW9uSW5wdXRWYWx1ZS5sZW5ndGggPiAzNSkge1xuICAgIHJldHVybiBhbGVydChcbiAgICAgIGBEZXNjcmlwdGlvbiBzaG91bGQgYmUgbGVzcyBvciBlcXVhbCB0byB0aGUgNDAgY2hhcmFjdGVycywgeW91IGhhdmUgZW50ZXJlZCAke2Rlc2NyaXB0aW9uSW5wdXRWYWx1ZS5sZW5ndGh9IGNoYXJhY3RlcnNgLFxuICAgICk7XG4gIH1cblxuICBjb25zdCBkYXRlID0gbmV3IERhdGUoZHVlRGF0ZVZhbHVlRWwpO1xuXG4gIGNvbnN0IG9wdGlvbnMgPSB7XG4gICAgd2Vla2RheTogXCJsb25nXCIsXG4gICAgeWVhcjogXCJudW1lcmljXCIsXG4gICAgbW9udGg6IFwic2hvcnRcIixcbiAgICBkYXk6IFwibnVtZXJpY1wiLFxuICB9O1xuXG4gIGNvbnN0IGRheU9mV2VlayA9IGRhdGUudG9Mb2NhbGVEYXRlU3RyaW5nKFwiZW4tVXNcIiwgb3B0aW9ucyk7XG5cbiAgbGV0IHVzZXJUb0RvID0gbmV3IGdldExpc3QoXG4gICAgdGFza0lucHV0VmFsdWUsXG4gICAgZGVzY3JpcHRpb25JbnB1dFZhbHVlLFxuICAgIHByaW9yaXR5VmFsdWVFbCxcbiAgICBkYXlPZldlZWssXG4gICk7XG5cbiAgdG9Eb3MucHVzaCh1c2VyVG9Ebyk7XG5cbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJ0b0Rvc1wiLCBKU09OLnN0cmluZ2lmeSh0b0RvcykpO1xuXG4gIGNsZWFyRm9ybSgpO1xufVxuXG5mdW5jdGlvbiBjbGVhckZvcm0oKSB7XG4gIHRhc2tUaXRsZS52YWx1ZSA9IFwiXCI7XG4gIHRhc2tEZXNjcmlwdGlvbi52YWx1ZSA9IFwiXCI7XG4gIGR1ZURhdGUudmFsdWUgPSBcIlwiO1xuICB0YXNrUHJpb3JpdHkudmFsdWUgPSBcIlNlbGVjdCBQcmlvcml0eVwiO1xufVxuXG5mdW5jdGlvbiBkaXNwbGF5VG9Eb3MoKSB7XG4gIGxldCB1c2VyVG9kb3MgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidG9Eb3NcIikpIHx8IFtdO1xuXG4gIHVzZXJUb2Rvcz8uZm9yRWFjaCgodG9kb09iaiwgaW5kZXgpID0+IHtcbiAgICBnZXRFbGVtZW50Rm9yVGFza0Rpc3BsYXkoXG4gICAgICB0b2RvT2JqLnRpdGxlLFxuICAgICAgdG9kb09iai5kZXNjcmlwdGlvbixcbiAgICAgIHRvZG9PYmoucHJpb3JpdHksXG4gICAgICB0b2RvT2JqLmRhdGUsXG4gICAgICBpbmRleCxcbiAgICApO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gZ2V0RWxlbWVudEZvclRhc2tEaXNwbGF5KFxuICBzYXZlVGl0bGVEYXRhLFxuICBzYXZlRGVzY3JpcHRpb25EYXRhLFxuICBzYXZlUHJpb3JpdHlEYXRhLFxuICBzYXZlRHVlRGF0ZURhdGEsXG4gIGluZGV4LFxuKSB7XG4gIGhlYWRlci50ZXh0Q29udGVudCA9IFwiQ3JlYXRlIFlvdXIgVG8tRG8gTGlzdC5cIjtcbiAgY29uc3QgbGlzdENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IHRhc2tDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgY29uc3QgaW5uZXJUYXNrQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgaW5uZXJUYXNrSGFuZGxlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGlubmVyVGFza0hhbmRsZXIuY2xhc3NMaXN0LmFkZChcImlubmVyVGFza0hhbmRsZXJcIik7XG4gIGlubmVyVGFza0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiaW5uZXJUYXNrQ29udGFpbmVyXCIpO1xuICB0YXNrQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJ0YXNrQ29udGFpbmVyXCIpO1xuICBsaXN0Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJsaXN0Q29udGFpbmVyXCIpO1xuXG4gIGNvbnN0IGNoZWNrQm94Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIGNoZWNrQm94Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJjaGVja0JveENvbnRhaW5lclwiKTtcbiAgY29uc3QgY2hlY2tCb3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gIGNoZWNrQm94LmNsYXNzTGlzdC5hZGQoXCJjaGVja0JveFwiKTtcbiAgY2hlY2tCb3guc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcImNoZWNrYm94XCIpO1xuXG4gIGNvbnN0IHRhc2tUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoNFwiKTtcbiAgY29uc3QgdGFza0Rlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIGNvbnN0IGR1ZURhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgY29uc3QgdGFza1ByaW9yaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIGNvbnN0IGRlbGV0ZVRhc2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuXG4gIHRhc2tUaXRsZS5jbGFzc0xpc3QuYWRkKFwidGFza1RpdGxlXCIpO1xuICB0YXNrRGVzY3JpcHRpb24uY2xhc3NMaXN0LmFkZChcInRhc2tEZXNjcmlwdGlvblwiKTtcblxuICBkdWVEYXRlLmNsYXNzTGlzdC5hZGQoXCJkdWVEYXRlXCIpO1xuICBkZWxldGVUYXNrLmNsYXNzTGlzdC5hZGQoXCJkZWxldGVUYXNrXCIpO1xuICB0YXNrUHJpb3JpdHkuY2xhc3NMaXN0LmFkZChcInRhc2tQcmlvcml0eVwiKTtcblxuICB0YXNrVGl0bGUudGV4dENvbnRlbnQgPSBgICR7c2F2ZVRpdGxlRGF0YX1gO1xuICB0YXNrRGVzY3JpcHRpb24udGV4dENvbnRlbnQgPSBgJHtzYXZlRGVzY3JpcHRpb25EYXRhfWA7XG4gIHRhc2tQcmlvcml0eS50ZXh0Q29udGVudCA9IGAke3NhdmVQcmlvcml0eURhdGF9YDtcbiAgZHVlRGF0ZS50ZXh0Q29udGVudCA9IGAke3NhdmVEdWVEYXRlRGF0YX1gO1xuICBkZWxldGVUYXNrLnRleHRDb250ZW50ID0gXCJEZWxldGUgdGFza1wiO1xuXG4gIHRhc2tUaXRsZS5kYXRhc2V0LmZpZWxkVHlwZSA9IFwidGl0bGVcIjtcbiAgdGFza0Rlc2NyaXB0aW9uLmRhdGFzZXQuZmllbGRUeXBlID0gXCJkZXNjcmlwdGlvblwiO1xuICB0YXNrUHJpb3JpdHkuZGF0YXNldC5maWVsZFR5cGUgPSBcInRhc2tQcmlvcml0eVwiO1xuICBkdWVEYXRlLmRhdGFzZXQuZmllbGRUeXBlID0gXCJkdWVEYXRlXCI7XG5cbiAgdGFza1RpdGxlLmRhdGFzZXQuaW5kZXggPSBpbmRleDtcbiAgdGFza0Rlc2NyaXB0aW9uLmRhdGFzZXQuaW5kZXggPSBpbmRleDtcbiAgdGFza1ByaW9yaXR5LmRhdGFzZXQuaW5kZXggPSBpbmRleDtcbiAgZHVlRGF0ZS5kYXRhc2V0LmluZGV4ID0gaW5kZXg7XG4gIGNoZWNrQm94LmRhdGFzZXQuaW5kZXggPSBpbmRleDtcblxuICBpbm5lclRhc2tDb250YWluZXIuYXBwZW5kQ2hpbGQodGFza1RpdGxlKTtcbiAgaW5uZXJUYXNrQ29udGFpbmVyLmFwcGVuZENoaWxkKHRhc2tEZXNjcmlwdGlvbik7XG4gIGlubmVyVGFza0NvbnRhaW5lci5hcHBlbmRDaGlsZChkdWVEYXRlKTtcblxuICBpbm5lclRhc2tIYW5kbGVyLmFwcGVuZENoaWxkKHRhc2tQcmlvcml0eSk7XG4gIGlubmVyVGFza0hhbmRsZXIuYXBwZW5kQ2hpbGQoZGVsZXRlVGFzayk7XG5cbiAgdGFza0NvbnRhaW5lci5hcHBlbmRDaGlsZChpbm5lclRhc2tDb250YWluZXIpO1xuICB0YXNrQ29udGFpbmVyLmFwcGVuZENoaWxkKGlubmVyVGFza0hhbmRsZXIpO1xuXG4gIGNoZWNrQm94Q29udGFpbmVyLmFwcGVuZENoaWxkKGNoZWNrQm94KTtcbiAgbGlzdENvbnRhaW5lci5hcHBlbmRDaGlsZChjaGVja0JveENvbnRhaW5lcik7XG5cbiAgbGlzdENvbnRhaW5lci5hcHBlbmRDaGlsZCh0YXNrQ29udGFpbmVyKTtcbiAgdXNlckxpc3QuYXBwZW5kQ2hpbGQobGlzdENvbnRhaW5lcik7XG5cbiAgdGFza1RpdGxlLmFkZEV2ZW50TGlzdGVuZXIoXCJkYmxjbGlja1wiLCBlZGl0VGFzayk7XG4gIHRhc2tUaXRsZS5hZGRFdmVudExpc3RlbmVyKFwidG91Y2hzdGFydFwiLCBlZGl0VGFzayk7XG5cbiAgdGFza0Rlc2NyaXB0aW9uLmFkZEV2ZW50TGlzdGVuZXIoXCJkYmxjbGlja1wiLCBlZGl0VGFzayk7XG4gIHRhc2tEZXNjcmlwdGlvbi5hZGRFdmVudExpc3RlbmVyKFwidG91Y2hzdGFydFwiLCBlZGl0VGFzayk7XG5cbiAgdGFza1ByaW9yaXR5LmFkZEV2ZW50TGlzdGVuZXIoXCJkYmxjbGlja1wiLCBlZGl0VGFzayk7XG4gIHRhc2tQcmlvcml0eS5hZGRFdmVudExpc3RlbmVyKFwidG91Y2hzdGFydFwiLCBlZGl0VGFzayk7XG5cbiAgZHVlRGF0ZS5hZGRFdmVudExpc3RlbmVyKFwiZGJsY2xpY2tcIiwgZWRpdFRhc2spO1xuICBkdWVEYXRlLmFkZEV2ZW50TGlzdGVuZXIoXCJ0b3VjaHN0YXJ0XCIsIGVkaXRUYXNrKTtcblxuICBkZWxldGVUYXNrLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBkZWxldGVUb0RvKTtcbiAgZGVsZXRlVGFzay5hZGRFdmVudExpc3RlbmVyKFwidG91Y2hzdGFydFwiLCBkZWxldGVUb0RvKTtcblxuICBoYW5kbGVDaGVja0JveChjaGVja0JveCwgdGFza1RpdGxlLCB0YXNrRGVzY3JpcHRpb24pO1xufVxuXG5mdW5jdGlvbiBlZGl0VGFzayhldmVudCkge1xuICBjb25zdCB0YXJnZXQgPSBldmVudC50YXJnZXQ7XG4gIGNvbnNvbGUubG9nKHRhcmdldCk7XG4gIGNvbnN0IGZpZWxkVHlwZSA9IHRhcmdldC5kYXRhc2V0LmZpZWxkVHlwZTtcbiAgY29uc3QgaW5kZXggPSB0YXJnZXQuZGF0YXNldC5pbmRleDtcbiAgY29uc29sZS5sb2coaW5kZXgpO1xuICBjb25zdCB0YXNrUHJpb3JpdHkgPSBbXCJVcmdlbnRcIiwgXCJJbXBvcnRhbnRcIiwgXCJMb3cgcHJpb3JpdHlcIl07XG5cbiAgbGV0IHRhc2tJbnB1dDtcblxuICBpZiAoZmllbGRUeXBlID09PSBcInRpdGxlXCIgfHwgZmllbGRUeXBlID09PSBcImRlc2NyaXB0aW9uXCIpIHtcbiAgICB0YXNrSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgdGFza0lucHV0LnR5cGUgPSBcInRleHRcIjtcbiAgICB0YXNrSW5wdXQudmFsdWUgPSB0YXJnZXQudGV4dENvbnRlbnQ7XG4gIH0gZWxzZSBpZiAoZmllbGRUeXBlID09PSBcImR1ZURhdGVcIikge1xuICAgIHRhc2tJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICB0YXNrSW5wdXQudHlwZSA9IFwiZGF0ZVwiO1xuICAgIHRhc2tJbnB1dC52YWx1ZSA9IHRhcmdldC50ZXh0Q29udGVudDtcbiAgfSBlbHNlIGlmIChmaWVsZFR5cGUgPT09IFwidGFza1ByaW9yaXR5XCIpIHtcbiAgICB0YXNrSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VsZWN0XCIpO1xuXG4gICAgdGFza1ByaW9yaXR5LmZvckVhY2goKHByaW9yaXR5KSA9PiB7XG4gICAgICBjb25zdCBvcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xuICAgICAgb3B0aW9uLnZhbHVlID0gcHJpb3JpdHk7XG4gICAgICBvcHRpb24udGV4dENvbnRlbnQgPSBwcmlvcml0eTtcblxuICAgICAgaWYgKHByaW9yaXR5ID09PSB0YXJnZXQudGV4dENvbnRlbnQpIHtcbiAgICAgICAgb3B0aW9uLnNlbGVjdGVkID0gdHJ1ZTtcbiAgICAgIH1cbiAgICAgIHRhc2tJbnB1dC5hcHBlbmRDaGlsZChvcHRpb24pO1xuICAgIH0pO1xuICB9XG5cbiAgdGFza0lucHV0LmRhdGFzZXQuZmllbGRUeXBlID0gZmllbGRUeXBlO1xuICB0YXNrSW5wdXQuZGF0YXNldC5pbmRleCA9IGluZGV4O1xuXG4gIHRhcmdldC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gIHRhcmdldC5wYXJlbnROb2RlLmluc2VydEJlZm9yZSh0YXNrSW5wdXQsIHRhcmdldC5uZXh0U2libGluZyk7XG5cbiAgdGFza0lucHV0LmNsYXNzTGlzdC5hZGQoXCJlZGl0XCIpO1xuXG4gIGlmICh0YXNrSW5wdXQudHlwZSA9PT0gXCJ0ZXh0XCIpIHtcbiAgICB0YXNrSW5wdXQuc2VsZWN0KCk7XG4gIH1cblxuICB0YXNrSW5wdXQuYWRkRXZlbnRMaXN0ZW5lcihcImJsdXJcIiwgc2F2ZUVkaXRlZFRhc2spO1xuICB0YXNrSW5wdXQuYWRkRXZlbnRMaXN0ZW5lcihcImtleXByZXNzXCIsIHNhdmVFZGl0ZWRUYXNrKTtcbn1cblxuZnVuY3Rpb24gc2F2ZUVkaXRlZFRhc2soZXZlbnQpIHtcbiAgaWYgKGV2ZW50LnR5cGUgPT09IFwiYmx1clwiIHx8IGV2ZW50LmtleSA9PT0gXCJFbnRlclwiKSB7XG4gICAgbGV0IGlucHV0ID0gZXZlbnQudGFyZ2V0O1xuICAgIGNvbnNvbGUubG9nKGlucHV0KTtcbiAgICBsZXQgZmllbGRUeXBlID0gaW5wdXQuZGF0YXNldC5maWVsZFR5cGU7XG4gICAgbGV0IGluZGV4ID0gaW5wdXQuZGF0YXNldC5pbmRleDtcblxuICAgIGNvbnNvbGUubG9nKHRvRG9zKTtcblxuICAgIGxldCBuZXdWYWx1ZTtcbiAgICBpZiAoaW5wdXQudGFnTmFtZSA9PT0gXCJTRUxFQ1RcIikge1xuICAgICAgbmV3VmFsdWUgPSBpbnB1dC5vcHRpb25zW2lucHV0LnNlbGVjdGVkSW5kZXhdLnZhbHVlO1xuICAgICAgdG9Eb3NbaW5kZXhdLnByaW9yaXR5ID0gbmV3VmFsdWU7XG4gICAgICBjb25zb2xlLmxvZyh0b0Rvc1tpbmRleF0ucHJpb3JpdHkpO1xuICAgIH0gZWxzZSB7XG4gICAgICBuZXdWYWx1ZSA9IGlucHV0LnZhbHVlO1xuICAgIH1cblxuICAgIGlmIChpbmRleCA8IHRvRG9zLmxlbmd0aCkge1xuICAgICAgaWYgKGZpZWxkVHlwZSA9PT0gXCJ0aXRsZVwiKSB7XG4gICAgICAgIHRvRG9zW2luZGV4XS50aXRsZSA9IG5ld1ZhbHVlO1xuICAgICAgICBjb25zb2xlLmxvZyh0b0Rvc1tpbmRleF0udGl0bGUpO1xuICAgICAgICBjb25zb2xlLmxvZyhuZXdWYWx1ZSk7XG4gICAgICB9IGVsc2UgaWYgKGZpZWxkVHlwZSA9PT0gXCJkZXNjcmlwdGlvblwiKSB7XG4gICAgICAgIHRvRG9zW2luZGV4XS5kZXNjcmlwdGlvbiA9IG5ld1ZhbHVlO1xuICAgICAgICBjb25zb2xlLmxvZyhpbmRleCk7XG4gICAgICAgIGNvbnNvbGUubG9nKHRvRG9zW2Rlc2NyaXB0aW9uXSk7XG4gICAgICB9IGVsc2UgaWYgKGZpZWxkVHlwZSA9PT0gXCJkdWVEYXRlXCIpIHtcbiAgICAgICAgbGV0IGR1ZURhdGUgPSBuZXdWYWx1ZTtcbiAgICAgICAgY29uc3QgZGF0ZSA9IG5ldyBEYXRlKGR1ZURhdGUpO1xuXG4gICAgICAgIGNvbnN0IG9wdGlvbnMgPSB7XG4gICAgICAgICAgd2Vla2RheTogXCJsb25nXCIsXG4gICAgICAgICAgeWVhcjogXCJudW1lcmljXCIsXG4gICAgICAgICAgbW9udGg6IFwic2hvcnRcIixcbiAgICAgICAgICBkYXk6IFwibnVtZXJpY1wiLFxuICAgICAgICB9O1xuICAgICAgICBjb25zb2xlLmxvZyh0b0Rvcyk7XG5cbiAgICAgICAgdG9Eb3NbaW5kZXhdLmRhdGUgPSBkYXRlLnRvTG9jYWxlRGF0ZVN0cmluZyhcImVuLVVzXCIsIG9wdGlvbnMpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwidG9Eb3NcIiwgSlNPTi5zdHJpbmdpZnkodG9Eb3MpKTtcblxuICAgIGxldCBvcmlnaW5hbEVsZW1lbnQgPSBpbnB1dC5wcmV2aW91c1NpYmxpbmc7XG5cbiAgICBvcmlnaW5hbEVsZW1lbnQudGV4dENvbnRlbnQgPSBuZXdWYWx1ZTtcblxuICAgIG9yaWdpbmFsRWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuXG4gICAgaW5wdXQucmVtb3ZlKCk7XG5cbiAgICB1c2VyTGlzdC50ZXh0Q29udGVudCA9IFwiXCI7XG5cbiAgICBkaXNwbGF5VG9Eb3MoKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBoYW5kbGVDaGVja0JveChjaGVja0JveCwgdGFza1RpdGxlLCB0YXNrRGVzY3JpcHRpb24pIHtcbiAgY2hlY2tCb3guYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChldmVudCkgPT4ge1xuICAgIGlmIChjaGVja0JveC5jaGVja2VkID09PSB0cnVlKSB7XG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInRvRG9zXCIsIEpTT04uc3RyaW5naWZ5KHRvRG9zKSk7XG4gICAgICBjb25zb2xlLmxvZyh0b0Rvcyk7XG5cbiAgICAgIGNvbnN0IGxpc3RDb250YWluZXJFbCA9IGV2ZW50LnRhcmdldDtcbiAgICAgIGNvbnNvbGUubG9nKGxpc3RDb250YWluZXJFbCk7XG4gICAgICBjb25zdCBpbmRleCA9IGxpc3RDb250YWluZXJFbC5kYXRhc2V0LmluZGV4O1xuXG4gICAgICBpZiAoaW5kZXggIT09IC0xKSB7XG4gICAgICAgIGxpc3RDb250YWluZXJFbC5yZW1vdmUobGlzdENvbnRhaW5lckVsKTtcbiAgICAgICAgdG9Eb3Muc3BsaWNlKGluZGV4LCAxKTtcblxuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInRvRG9zXCIsIEpTT04uc3RyaW5naWZ5KHRvRG9zKSk7XG4gICAgICAgIGNvbnNvbGUubG9nKHRvRG9zKTtcbiAgICAgICAgdXNlckxpc3QudGV4dENvbnRlbnQgPSBcIlwiO1xuICAgICAgICBkaXNwbGF5VG9Eb3MoKTtcbiAgICAgICAgYWxlcnQoXCJUYXNrIGNvbXBsZXRlZCFcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnNvbGUubG9nKFwidHJ1ZVwiKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGFza1RpdGxlLnN0eWxlLnRleHREZWNvcmF0aW9uID0gXCJub25lXCI7XG4gICAgICB0YXNrRGVzY3JpcHRpb24uc3R5bGUudGV4dERlY29yYXRpb24gPSBcIm5vbmVcIjtcbiAgICAgIGNvbnNvbGUubG9nKFwiZmFsc2VcIik7XG4gICAgfVxuICB9KTtcbn1cblxuZnVuY3Rpb24gZGVsZXRlVG9EbygpIHtcbiAgY29uc3QgbGlzdENvbnRhaW5lckVsID0gdGhpcy5jbG9zZXN0KFwiLmxpc3RDb250YWluZXJcIik7XG4gIGNvbnN0IGJ1dHRvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmRlbGV0ZVRhc2tcIik7XG4gIGNvbnN0IGluZGV4ID0gQXJyYXkuZnJvbShidXR0b25zKS5pbmRleE9mKHRoaXMpO1xuXG4gIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICBsaXN0Q29udGFpbmVyRWwucmVtb3ZlKGxpc3RDb250YWluZXJFbCk7XG4gICAgdG9Eb3Muc3BsaWNlKGluZGV4LCAxKTtcblxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwidG9Eb3NcIiwgSlNPTi5zdHJpbmdpZnkodG9Eb3MpKTtcbiAgICBjb25zb2xlLmxvZyh0b0Rvcyk7XG4gIH1cbn1cblxuZnVuY3Rpb24gY2FuY2VsRm9ybURpc3BsYXkoKSB7XG4gICAgbGV0ICBhZGRUb2RvQnRuT25Nb2JpbGU9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNhZGRUb2RvQnRuQ29udGFpbmVyJylcblxuICBsZXQgbWVkaWFRdWVyeSA9IHdpbmRvdy5tYXRjaE1lZGlhKCcobWF4LXdpZHRoOiA1MDBweCknKVxuICBpZiAobWVkaWFRdWVyeS5tYXRjaGVzKSB7XG4gICAgIGFkZFRvZG9CdG5Pbk1vYmlsZS5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuICAgIGNvbnNvbGUubG9nKCd0cnVlJylcbiAgfSBlbHNlIHtcbiAgICBjb25zb2xlLmxvZygnZmFsc2UnKVxuXG4gIH1cbiAgY29uc3QgaW50aWFsVGV4dERpc3BsYXlDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgIFwiLmludGlhbFRleHREaXNwbGF5Q29udGFpbmVyXCIsXG4gICk7XG4gIHRhc2tUaXRsZS52YWx1ZSA9IFwiXCI7XG4gIHRhc2tEZXNjcmlwdGlvbi52YWx1ZSA9IFwiXCI7XG4gIGR1ZURhdGUudmFsdWUgPSBcIlwiO1xuICB0YXNrUHJpb3JpdHkudmFsdWUgPSBcIlNlbGVjdCBQcmlvcml0eVwiO1xuICBmb3JtLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgaW50aWFsVGV4dERpc3BsYXlDb250YWluZXIuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcbiBcblxufVxuY2FuY2VsRm9ybS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgY2FuY2VsRm9ybURpc3BsYXkpO1xuXG5mdW5jdGlvbiBzdWJtaXRGb3JtKCkge1xuICB1c2VybGlzdC50ZXh0Q29udGVudCA9IFwiXCI7XG5cbiAgYWNjZXB0SW5wdXQoKTtcbiAgZGlzcGxheVRvRG9zKCk7XG59XG5mb3JtLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgKGV2ZW50KSA9PiBldmVudC5wcmV2ZW50RGVmYXVsdCgpKTtcbnN1Ym1pdEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgc3VibWl0Rm9ybSk7XG5cbmZ1bmN0aW9uIGRpc3BsYXlJbmJveEZvcm0oKSB7XG4gIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJoZWFkZXIgaDFcIik7XG4gIHVzZXJsaXN0LnRleHRDb250ZW50ID0gXCJcIjtcbiAgaGVhZGVyLnRleHRDb250ZW50ID0gXCJJbmJveFwiO1xuXG4gIGRpc3BsYXlUb0RvcygpO1xuICBmb3JtLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG5cbiAgaWYgKGlucHV0TmV3cHJvamVjdEZvcm1OYW1lLnN0eWxlLmRpc3BsYXkgPT09IFwiYmxvY2tcIikge1xuICAgIGlucHV0TmV3cHJvamVjdEZvcm1OYW1lLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgfVxuICBwcm9qZWN0Rm9ybS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG59XG5pbmJveC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZGlzcGxheUluYm94Rm9ybSk7XG4iLCJpbXBvcnQgeyBjcmVhdGVOZXdQcm9qZWN0VGFza0J0biB9IGZyb20gXCIuL2RvbS1FbC0yXCI7XG5sZXQgYXNpZGVFbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJtYWluIGFzaWRlXCIpO1xubGV0IHRvZ2dsZU1lbnVJY29uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0b2dnbGVNZW51SWNvblwiKTtcbmxldCBzaWRlQmFyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImFzaWRlI21lbnVcIik7XG5sZXQgcHJvamVjdERyb3BEb3duID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwcm9qZWN0LWRyb3Bkb3duXCIpO1xubGV0IGFkZE5ld1Byb2plY3RFbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYWROZXdQcm9qZWN0RWxcIik7XG5cbmNvbnNvbGUubG9nKHByb2plY3REcm9wRG93bik7XG5cbmNvbnNvbGUubG9nKGFzaWRlRWwpO1xuXG5mdW5jdGlvbiB0b2dnZWxNZW51KCkge1xuICBjb25zb2xlLmxvZyhcInRvZ2dsZSBlbGVtZW50IGlzIGNsaWNrZWRcIik7XG4gIHRvZ2dsZU1lbnVJY29uLmNsYXNzTGlzdC50b2dnbGUoXCJhY3RpdmVcIik7XG4gIHNpZGVCYXIuY2xhc3NMaXN0LnRvZ2dsZShcImFjdGl2ZVwiKTtcbn1cbnRvZ2dsZU1lbnVJY29uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB0b2dnZWxNZW51KTtcblxuZnVuY3Rpb24gcmVtb3ZlU2lkZUJhcihlKSB7XG4gIGlmIChlLnRhcmdldC50YWdOYW1lID09PSBcIk9QVElPTlwiKSB7XG4gICAgdG9nZ2xlTWVudUljb24uY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcbiAgICBzaWRlQmFyLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XG4gIH0gZWxzZSBpZiAoXG4gICAgZS50YXJnZXQgIT09IHRvZ2dsZU1lbnVJY29uICYmXG4gICAgZS50YXJnZXQgIT09IHNpZGVCYXIgJiZcbiAgICBlLnRhcmdldCAhPT0gcHJvamVjdERyb3BEb3duXG4gICkge1xuICAgIHRvZ2dsZU1lbnVJY29uLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XG4gICAgc2lkZUJhci5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xuICB9XG59XG5cbmZ1bmN0aW9uIG9wdGlvblNlbGVjdGVkKCkge1xuICB0b2dnbGVNZW51SWNvbi5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xuICBzaWRlQmFyLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XG59XG5cbnByb2plY3REcm9wRG93bi5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsIG9wdGlvblNlbGVjdGVkKTtcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCByZW1vdmVTaWRlQmFyKTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmM7XG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkge1xuXHRcdFx0dmFyIGkgPSBzY3JpcHRzLmxlbmd0aCAtIDE7XG5cdFx0XHR3aGlsZSAoaSA+IC0xICYmICghc2NyaXB0VXJsIHx8ICEvXmh0dHAocz8pOi8udGVzdChzY3JpcHRVcmwpKSkgc2NyaXB0VXJsID0gc2NyaXB0c1tpLS1dLnNyYztcblx0XHR9XG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwibWFpblwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgXCIuLi9zcmMvc3R5bGVzLmNzc1wiO1xuaW1wb3J0IGRvbUVsIGZyb20gXCIuL2RvbS1FbFwiO1xuaW1wb3J0IGRvbUVsMiBmcm9tIFwiLi9kb20tRWwtMlwiO1xuaW1wb3J0IHJlc3BvbnNpdmUgZnJvbSBcIi4vcmVzcG9uc2l2ZVwiO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9