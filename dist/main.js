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
  color: #78350f;
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
    top: 100px;
    right: 10px;
    width: 50px;
    height: 50px;
    /* 
    top: 106px;
    right: 10px;
    width: 50px; */
    background-color: #6b8888;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 8px;
    transition: top 0.3s;

    z-index: 1000;
  }

  h1.headerTextContent {
    font-weight: 600;
    padding: 30px;
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

  p#addNewProjectEl, p.inbox, select#project-dropdown {
    color: white;
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
    word-wrap: break-word;
    word-break: break-all;
    white-space: normal;
    overflow-wrap: break-word;

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
    font-size: 1.3rem;
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
    max-height: 200px;
    max-width: 515px !important;
    height: 170px;
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
    margin: 0;
  }

  input#ProjectdatePicker {
    padding: 2px;
    border-radius: 5px;
    border: none;
    height: 32px;
    font-size: 0.9rem;
    font-weight: 700;
    background: #d4d4d8;
    text-align: center;
  }

  select#projectPriority {
    background-color: #44403c;
    color: #fafafa;
    font-size: 0.85rem;
    font-weight: 600;
    height: 35px;
  }


  div.projectButtonsContainer button {
    border: none;
    border-radius: 7px;
    padding: 9px;
    font-size: 1rem;
    font-weight: 600;
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
    max-width: 305px;
    max-height: 40px;
    border: none;
    outline: none;
    color: white;
    /* margin: 10px 0; */
    background-color: inherit;
  }

  #form .first-inputContainer input, .second-inputContainer input {
    max-width: 305px;
    max-height: 40px;
    margin: 0;
    font-size: 1.1rem;
  }

  #form .second-inputContainer input,
  .PdescriptionInputContainer input {
    max-width: 307px;
    max-height: 40px;
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
    height: 100px;
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
    /* color: white; */
    fill: #78350f;
  }

  li.inbox {
    font-size: 1.4rem;
    color: white;
  }

  li#addNewProjectEl {
    margin: 0;
    font-size: 1.3rem;
    color: white;
  }

  select#project-dropdown {
    background-color: inherit;
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
    background-color: #bfc6c6;
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

  p#addNewProjectEl, p.inbox, select#project-dropdown {
    /* color: white; */

    font-weight: 600;
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
    font-size: 1.4rem;

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
    word-wrap: break-word;
    word-break: break-all;
    white-space: normal;
    overflow-wrap: break-word;
    border-radius: 10px;
    box-shadow: 1px 0px 3px 0px;
    /* margin: 18px 60px; */
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

  */ .projectButtonsContainer {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  select#priority {
    padding: 8px;
    border-radius: 9px;
  }

  input#datePicker {
    padding: 3px;
    border-radius: 9px;
  }
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
  grid-template-columns: 250px 1fr;
  grid-template-rows: 100px 611px;
}

header {
  grid-area: 1 / 2 / 2 / 6;
  background-color: #fda4af;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
}

aside {
  grid-area: 1/ 1/ 4/ 2;
  border-radius: 5px;
  background-color: #e2e8f0;
}

.sideBarContentContainer {}

#Container {
  grid-area: 2 / 2 / 3 / 4;

  display: grid;
  grid-template-columns: 100px 650px minmax(100px, 350px);
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
  font-weight: 800;
  color: #78350f;
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
  width: 34px;
  height: 33px;
  pointer-events: none;

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
  font-size: 1.4rem;
  color: #b91c1c;
  background-color: inherit;
  font-weight: 700;
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
  font-size: 1.2rem;
  font-weight: 600;
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
  font-size: 1.3rem;
  text-decoration: none;
  text-decoration-color: red;
}

.taskDescription,
.newProject-description {
  margin: 0;
  font-size: 1.2rem;
}

.taskPriority {
  font-size: 19px;
  border-radius: 6px;
  background-color: #573d3d;
  padding: 6px;
  margin: 0 0 7px;
  color: white;
  text-align: center;
  width: 130px;
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
  font-size: 1.3rem;
}


.inbox {
  font-size: 1.4rem;
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
  font-size: 1.3rem;

}

.dueDate {
  margin: 0;
  font-size: 1.2rem;
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
  height: 170px;
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
  max-width: 133px;
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
  height: 166px;
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
  font-size: 1.1rem;

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
  background-color: #083344;
  color: white;
  font-size: 1.1rem;
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



#projectPriority, #projectPriority option {
  background-color: #44403c;
  color: #fafafa;
  font-size: 1.2rem;
  font-weight: 600;
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
  font-size: 1.3rem;
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
  font-size: 1.3rem;
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

#newProjectTaskBtnWrapper {
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
  padding: 2px;
  border-radius: 5px;
  border: none;
  height: 32px;
  font-size: 1.1rem;
  font-weight: 600;
  background: #d4d4d8;
  /* color: #f8fafc; */
  text-align: center;
}

#ProjectdatePicker input[type='date'] {
  fill: white;
}

#submitBtnForProject {
  padding: 7px;
  border-radius: 9px;
  /* font-size: 1.2rem;
  font-weight: 600; */
}

#submitBtnForProject:active {
  transform: scale(1.1);
}

.cancelForProjectBtn {
  padding: 7px;
  border-radius: 9px;
}`, "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"AAAA;EACE,UAAU;EACV,SAAS;EACT,sBAAsB;AACxB;;AAEA;EACE,sBAAsB;EACtB,2BAA2B;AAC7B;;AAEA;EACE,UAAU;EACV,SAAS;EACT,sBAAsB;EACtB,cAAc;EACd,iCAAiC;EACjC,gBAAgB;EAChB,kBAAkB;AACpB;;AAEA;EACE;IACE,aAAa;IACb,sBAAsB;IACtB,uBAAuB;IACvB,UAAU;EACZ;;EAEA;IACE,yBAAyB;IACzB,kBAAkB;IAClB,aAAa;IACb,mBAAmB;IACnB,uBAAuB;IACvB,SAAS;EACX;;EAEA;IACE,eAAe;IACf,UAAU;IACV,WAAW;IACX,WAAW;IACX,YAAY;IACZ;;;kBAGc;IACd,yBAAyB;IACzB,eAAe;IACf,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,kBAAkB;IAClB,oBAAoB;;IAEpB,aAAa;EACf;;EAEA;IACE,gBAAgB;IAChB,aAAa;EACf;;EAEA;IACE,WAAW;IACX,kBAAkB;IAClB,WAAW;IACX,WAAW;IACX,sBAAsB;IACtB,2BAA2B;IAC3B,gBAAgB;EAClB;;EAEA;IACE,WAAW;IACX,kBAAkB;IAClB,WAAW;IACX,WAAW;IACX,sBAAsB;IACtB,0BAA0B;IAC1B,gBAAgB;EAClB;;EAEA;IACE,wCAAwC;EAC1C;;EAEA;IACE,yCAAyC;EAC3C;;EAEA;IACE,cAAc;IACd,eAAe;IACf,MAAM;IACN,YAAY;IACZ,YAAY;IACZ,aAAa;IACb,YAAY;IACZ,aAAa;IACb,yBAAyB;IACzB,gBAAgB;IAChB,aAAa;IACb,WAAW;EACb;;EAEA;IACE,OAAO;EACT;;EAEA;IACE,aAAa;IACb,kBAAkB;IAClB,yBAAyB;EAC3B;;EAEA;IACE,YAAY;EACd;;EAEA;IACE,aAAa;IACb,sBAAsB;IACtB,eAAe;IACf,kBAAkB;EACpB;;EAEA;IACE,cAAc;IACd,WAAW;IACX,YAAY;EACd;;EAEA;IACE,cAAc;IACd,WAAW;IACX,YAAY;IACZ,WAAW;IACX,uBAAuB;IACvB,mBAAmB;EACrB;;EAEA;IACE,aAAa;IACb,sBAAsB;IACtB,gBAAgB;EAClB;;EAEA;IACE,aAAa;IACb,QAAQ;IACR,gBAAgB;IAChB,mBAAmB;IACnB,2BAA2B;IAC3B,wBAAwB;IACxB,qBAAqB;IACrB,qBAAqB;IACrB,mBAAmB;IACnB,yBAAyB;;IAEzB,aAAa;EACf;;EAEA;IACE,aAAa;IACb,sBAAsB;IACtB,uBAAuB;IACvB,mBAAmB;IACnB,kBAAkB;EACpB;;EAEA;IACE,eAAe;IACf,YAAY;IACZ,aAAa;IACb,mBAAmB;IACnB,mBAAmB;EACrB;;EAEA;IACE,aAAa;IACb,gBAAgB;IAChB,aAAa;IACb,yBAAyB;IACzB,uBAAuB;EACzB;;EAEA;IACE,aAAa;IACb,mBAAmB;IACnB,QAAQ;IACR,wBAAwB;EAC1B;;EAEA;IACE,aAAa;IACb,mBAAmB;IACnB,QAAQ;IACR,wBAAwB;EAC1B;;EAEA;IACE,yBAAyB;IACzB,kBAAkB;IAClB,WAAW;EACb;;EAEA;IACE,eAAe;IACf,8BAA8B;EAChC;;EAEA;IACE,SAAS;IACT,iBAAiB;IACjB,cAAc;IACd,yBAAyB;IACzB,gBAAgB;EAClB;;EAEA;IACE,eAAe;IACf,8BAA8B;EAChC;;EAEA;IACE,yBAAyB;IACzB,mBAAmB;IACnB,iBAAiB;IACjB,2BAA2B;IAC3B,aAAa;IACb,aAAa;IACb,gBAAgB;IAChB,wBAAwB;EAC1B;;EAEA;IACE,aAAa;IACb,yBAAyB;IACzB,gBAAgB;IAChB,iBAAiB;IACjB,mBAAmB;IACnB,aAAa;IACb,kBAAkB;IAClB,kBAAkB;IAClB,2BAA2B;EAC7B;;EAEA;IACE,kBAAkB;EACpB;;EAEA;IACE,gBAAgB;IAChB,gBAAgB;IAChB,aAAa;IACb,YAAY;IACZ,kBAAkB;EACpB;;EAEA;IACE,YAAY;IACZ,YAAY;IACZ,kBAAkB;IAClB,gBAAgB;IAChB,YAAY;IACZ,eAAe;EACjB;;EAEA;IACE,cAAc;EAChB;;EAEA;IACE,YAAY;IACZ,YAAY;IACZ,kBAAkB;IAClB,YAAY;IACZ,YAAY;IACZ,eAAe;EACjB;;EAEA;IACE,yBAAyB;IACzB,mBAAmB;IACnB,iBAAiB;IACjB,gBAAgB;IAChB,aAAa;IACb,gBAAgB;IAChB,uBAAuB;EACzB;;EAEA;IACE,aAAa;IACb,8BAA8B;IAC9B,mBAAmB;IACnB,aAAa;IACb,YAAY;EACd;;EAEA;IACE,aAAa;IACb,kBAAkB;IAClB,MAAM;IACN,gBAAgB;IAChB,sBAAsB;EACxB;;EAEA;IACE,gBAAgB;EAClB;;EAEA;IACE,gBAAgB;EAClB;;EAEA;IACE,gBAAgB;EAClB;;EAEA;IACE,SAAS;EACX;;EAEA;IACE,YAAY;IACZ,kBAAkB;IAClB,YAAY;IACZ,YAAY;IACZ,iBAAiB;IACjB,gBAAgB;IAChB,mBAAmB;IACnB,kBAAkB;EACpB;;EAEA;IACE,yBAAyB;IACzB,cAAc;IACd,kBAAkB;IAClB,gBAAgB;IAChB,YAAY;EACd;;;EAGA;IACE,YAAY;IACZ,kBAAkB;IAClB,YAAY;IACZ,eAAe;IACf,gBAAgB;EAClB;;;EAGA;IACE,aAAa;IACb,sBAAsB;IACtB,gBAAgB;IAChB,gBAAgB;EAClB;;EAEA;;IAEE,YAAY;IACZ,kBAAkB;IAClB,gBAAgB;IAChB,eAAe;EACjB;;EAEA;IACE,aAAa;IACb,sBAAsB;IACtB,8BAA8B;IAC9B,eAAe;IACf,MAAM;EACR;;EAEA;IACE,aAAa;IACb,8BAA8B;IAC9B,mBAAmB;IACnB,eAAe;IACf,MAAM;EACR;;EAEA;IACE,aAAa;IACb,8BAA8B;IAC9B,mBAAmB;IACnB,aAAa;IACb,SAAS;EACX;;EAEA;IACE,aAAa;IACb,sBAAsB;IACtB,8BAA8B;IAC9B,eAAe;EACjB;;EAEA;IACE,aAAa;IACb,8BAA8B;IAC9B,mBAAmB;IACnB,eAAe;IACf,SAAS;IACT,MAAM;EACR;;EAEA;IACE,aAAa;IACb,sBAAsB;EACxB;;EAEA;IACE,aAAa;IACb,sBAAsB;IACtB,gBAAgB;EAClB;;EAEA;;IAEE,gBAAgB;IAChB,gBAAgB;IAChB,YAAY;IACZ,aAAa;IACb,YAAY;IACZ,oBAAoB;IACpB,yBAAyB;EAC3B;;EAEA;IACE,gBAAgB;IAChB,gBAAgB;IAChB,SAAS;IACT,iBAAiB;EACnB;;EAEA;;IAEE,gBAAgB;IAChB,gBAAgB;IAChB,YAAY;IACZ,aAAa;IACb,YAAY;IACZ,yBAAyB;IACzB,SAAS;EACX;;EAEA;;;IAGE,YAAY;IACZ,kBAAkB;IAClB,gBAAgB;IAChB,eAAe;EACjB;AACF;;AAEA;EACE;IACE,aAAa;IACb,sBAAsB;IACtB,uBAAuB;EACzB;;EAEA;IACE,yBAAyB;IACzB,kBAAkB;IAClB,aAAa;IACb,mBAAmB;IACnB,uBAAuB;IACvB,SAAS;IACT,aAAa;EACf;;EAEA;IACE,aAAa;IACb,kBAAkB;IAClB,yBAAyB;IACzB,UAAU;EACZ;;EAEA;;IAEE,aAAa;IACb,sBAAsB;IACtB,kBAAkB;IAClB,aAAa;EACf;;EAEA;IACE,iBAAiB;IACjB,YAAY;EACd;;EAEA;IACE,SAAS;IACT,iBAAiB;IACjB,YAAY;EACd;;EAEA;IACE,yBAAyB;EAC3B;;EAEA;IACE,aAAa;IACb,sBAAsB;IACtB,eAAe;IACf,kBAAkB;IAClB,UAAU;EACZ;;EAEA;IACE,cAAc;IACd,WAAW;IACX,YAAY;EACd;;EAEA;IACE,eAAe;IACf,SAAS;IACT,WAAW;IACX,WAAW;IACX,YAAY;IACZ,yBAAyB;IACzB,eAAe;IACf,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,kBAAkB;IAClB,oBAAoB;IACpB,aAAa;;IAEb,aAAa;EACf;;EAEA;IACE,WAAW;IACX,kBAAkB;IAClB,WAAW;IACX,WAAW;IACX,sBAAsB;IACtB,2BAA2B;IAC3B,gBAAgB;EAClB;;EAEA;IACE,WAAW;IACX,kBAAkB;IAClB,WAAW;IACX,WAAW;IACX,sBAAsB;IACtB,0BAA0B;IAC1B,gBAAgB;EAClB;;EAEA;IACE,wCAAwC;EAC1C;;EAEA;IACE,yCAAyC;EAC3C;;EAEA;IACE,cAAc;IACd,eAAe;IACf,MAAM;IACN,YAAY;IACZ,YAAY;IACZ,aAAa;IACb,yBAAyB;IACzB,gBAAgB;EAClB;;EAEA;IACE,OAAO;EACT;;EAEA;IACE,aAAa;IACb,sBAAsB;IACtB,YAAY;IACZ,WAAW;EACb;;EAEA;IACE,kBAAkB;;IAElB,gBAAgB;EAClB;;EAEA;IACE,cAAc;IACd,WAAW;IACX,YAAY;IACZ,WAAW;IACX,uBAAuB;IACvB,mBAAmB;EACrB;;EAEA;IACE,aAAa;IACb,mBAAmB;IACnB,QAAQ;IACR,wBAAwB;EAC1B;;EAEA;IACE,aAAa;IACb,mBAAmB;IACnB,QAAQ;IACR,wBAAwB;EAC1B;;EAEA;IACE,yBAAyB;IACzB,kBAAkB;IAClB,WAAW;EACb;;EAEA;IACE,eAAe;IACf,8BAA8B;EAChC;;EAEA;IACE,SAAS;IACT,iBAAiB;;IAEjB,cAAc;IACd,yBAAyB;EAC3B;;EAEA;IACE,eAAe;IACf,8BAA8B;EAChC;;EAEA;IACE,aAAa;IACb,QAAQ;IACR,gBAAgB;IAChB,qBAAqB;IACrB,qBAAqB;IACrB,mBAAmB;IACnB,yBAAyB;IACzB,mBAAmB;IACnB,2BAA2B;IAC3B,uBAAuB;IACvB,aAAa;EACf;;EAEA;IACE,aAAa;IACb,sBAAsB;IACtB,uBAAuB;IACvB,mBAAmB;IACnB,kBAAkB;EACpB;;EAEA;IACE,gBAAgB;IAChB,aAAa;IACb,gBAAgB;IAChB,sBAAsB;IACtB,eAAe;EACjB;;EAEA;IACE,WAAW;IACX,YAAY;IACZ,aAAa;IACb,mBAAmB;IACnB,mBAAmB;EACrB;;EAEA;IACE,yBAAyB;IACzB,mBAAmB;IACnB,aAAa;IACb,aAAa;IACb,gBAAgB;;IAEhB,YAAY;EACd;;EAEA;IACE,aAAa;IACb,8BAA8B;IAC9B,mBAAmB;;IAEnB,aAAa;IACb,SAAS;EACX;;EAEA;IACE,aAAa;EACf;;EAEA;IACE,gBAAgB;EAClB;;EAEA;;;;IAIE,gBAAgB;IAChB,YAAY;IACZ,YAAY;IACZ,aAAa;IACb,YAAY;IACZ,kBAAkB;IAClB,yBAAyB;EAC3B;;EAEA;IACE,SAAS;EACX;;EAEA;IACE,aAAa;IACb,gBAAgB;EAClB;;EAEA;IACE,aAAa;IACb,sBAAsB;IACtB,gBAAgB;EAClB;;EAEA;;;IAGE,YAAY;IACZ,kBAAkB;EACpB;;EAEA;IACE,yBAAyB;IACzB,mBAAmB;IACnB,aAAa;IACb,aAAa;IACb,gBAAgB;IAChB,kBAAkB;IAClB,gBAAgB;EAClB;;EAEA;IACE,aAAa;IACb,mBAAmB;IACnB,8BAA8B;IAC9B,MAAM;EACR;;EAEA;IACE,aAAa;IACb,8BAA8B;IAC9B,mBAAmB;EACrB;;EAEA;IACE,YAAY;IACZ,kBAAkB;EACpB;;EAEA;IACE,YAAY;IACZ,kBAAkB;EACpB;AACF;;;AAGA;EACE;IACE,aAAa;EACf;;EAEA;IACE,wBAAwB;;IAExB,yBAAyB;IACzB,kBAAkB;IAClB,aAAa;IACb,mBAAmB;IACnB,uBAAuB;IACvB,SAAS;EACX;;EAEA;IACE,kBAAkB;IAClB,yBAAyB;EAC3B;;EAEA;IACE,aAAa;IACb,sBAAsB;IACtB,eAAe;IACf,kBAAkB;IAClB,UAAU;EACZ;;EAEA;IACE,cAAc;IACd,WAAW;IACX,YAAY;EACd;;EAEA;IACE,cAAc;IACd,WAAW;IACX,YAAY;IACZ,WAAW;IACX,uBAAuB;IACvB,mBAAmB;EACrB;;;;;EAKA;IACE,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,kBAAkB;EACpB;;EAEA;IACE,iBAAiB;IACjB,kBAAkB;IAClB,gBAAgB;IAChB,kBAAkB;IAClB,gBAAgB;EAClB;;EAEA;IACE,aAAa;IACb,mBAAmB;IACnB,QAAQ;IACR,wBAAwB;EAC1B;;EAEA;IACE,aAAa;IACb,mBAAmB;IACnB,QAAQ;IACR,wBAAwB;EAC1B;;EAEA;IACE,yBAAyB;IACzB,kBAAkB;IAClB,WAAW;EACb;;EAEA;IACE,eAAe;IACf,8BAA8B;EAChC;;EAEA;IACE,SAAS;IACT,eAAe;IACf,cAAc;IACd,yBAAyB;EAC3B;;EAEA;IACE,eAAe;IACf,8BAA8B;EAChC;;EAEA;IACE,aAAa;IACb,QAAQ;IACR,gBAAgB;;IAEhB,mBAAmB;IACnB,2BAA2B;IAC3B,iBAAiB;IACjB,aAAa;EACf;;EAEA;IACE,yBAAyB;IACzB,mBAAmB;IACnB,aAAa;IACb,aAAa;IACb,gBAAgB;;IAEhB,YAAY;EACd;;EAEA;IACE,aAAa;IACb,8BAA8B;IAC9B,mBAAmB;;IAEnB,iBAAiB;IACjB,SAAS;EACX;;EAEA;IACE,aAAa;EACf;;EAEA;IACE,gBAAgB;EAClB;;EAEA;;IAEE,gBAAgB;IAChB,gBAAgB;IAChB,YAAY;IACZ,aAAa;IACb,YAAY;IACZ,yBAAyB;IACzB,SAAS;EACX;;EAEA;;IAEE,gBAAgB;IAChB,gBAAgB;IAChB,YAAY;IACZ,aAAa;IACb,sBAAsB;IACtB,yBAAyB;IACzB,SAAS;EACX;;EAEA;IACE,aAAa;IACb,8BAA8B;IAC9B,gBAAgB;EAClB;;EAEA;IACE,yBAAyB;IACzB,mBAAmB;IACnB,aAAa;IACb,aAAa;IACb,gBAAgB;IAChB,kBAAkB;IAClB,gBAAgB;EAClB;;EAEA;IACE,aAAa;IACb,mBAAmB;IACnB,8BAA8B;IAC9B,MAAM;EACR;;EAEA;IACE,aAAa;IACb,sBAAsB;IACtB,8BAA8B;IAC9B,mBAAmB;IACnB,MAAM;EACR;;EAEA;IACE,aAAa;IACb,8BAA8B;IAC9B,mBAAmB;EACrB;;EAEA;IACE,aAAa;IACb,sBAAsB;IACtB,gBAAgB;EAClB;;EAEA;;;IAGE,YAAY;IACZ,kBAAkB;IAClB,YAAY;EACd;;;AAGF;;AAEA;EACE,aAAa;EACb,gCAAgC;EAChC,+BAA+B;AACjC;;AAEA;EACE,wBAAwB;EACxB,yBAAyB;EACzB,kBAAkB;EAClB,aAAa;EACb,mBAAmB;EACnB,uBAAuB;EACvB,gBAAgB;AAClB;;AAEA;EACE,qBAAqB;EACrB,kBAAkB;EAClB,yBAAyB;AAC3B;;AAEA,0BAA0B;;AAE1B;EACE,wBAAwB;;EAExB,aAAa;EACb,uDAAuD;EACvD,kBAAkB;AACpB;;AAEA;EACE,wBAAwB;AAC1B;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,uBAAuB;EACvB,mBAAmB;EACnB,aAAa;AACf;;AAEA;EACE,iBAAiB;EACjB,kBAAkB;EAClB,gBAAgB;EAChB,cAAc;EACd,kBAAkB;AACpB;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,mBAAmB;EACnB,aAAa;AACf;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,wBAAwB;EACxB,yBAAyB;EACzB,yDAA4C;EAC5C,sBAAsB;EACtB,2BAA2B;AAC7B;;AAEA;EACE,aAAa;EACb,WAAW;EACX,YAAY;AACd;;AAEA;EACE,wBAAwB;EACxB,qBAAqB;EACrB,WAAW;EACX,YAAY;EACZ,sBAAsB;EACtB,kBAAkB;EAClB,aAAa;EACb,eAAe;EACf,kBAAkB;AACpB;;AAEA;EACE,WAAW;EACX,cAAc;EACd,kBAAkB;EAClB,QAAQ;EACR,SAAS;EACT,gCAAgC;EAChC,eAAe;EACf,uBAAuB;EACvB,UAAU;EACV,6BAA6B;AAC/B;;AAEA;EACE,YAAY;EACZ,YAAY;AACd;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,oBAAoB;;AAEtB;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,QAAQ;EACR,wBAAwB;AAC1B;;AAEA;EACE,yBAAyB;EACzB,kBAAkB;EAClB,WAAW;AACb;;AAEA;EACE,eAAe;EACf,8BAA8B;AAChC;;AAEA;EACE,SAAS;EACT,iBAAiB;EACjB,cAAc;EACd,yBAAyB;EACzB,gBAAgB;AAClB;;AAEA;EACE,eAAe;EACf,8BAA8B;AAChC;;AAEA;EACE,aAAa;EACb,YAAY;EACZ,kBAAkB;EAClB,iBAAiB;EACjB,yBAAyB;EACzB,YAAY;EACZ,mCAAmC;AACrC;;AAEA;EACE,sBAAsB;EACtB,yBAAyB;;AAE3B;;AAEA;EACE,qBAAqB;AACvB;;AAEA;EACE,aAAa;EACb,QAAQ;EACR,gBAAgB;;EAEhB,mBAAmB;EACnB,2BAA2B;EAC3B,iBAAiB;EACjB,aAAa;AACf;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,uBAAuB;EACvB,mBAAmB;EACnB,gBAAgB;AAClB;;AAEA;EACE,aAAa;EACb,8BAA8B;EAC9B;AACF;;AAEA;EACE,YAAY;EACZ,kBAAkB;EAClB,YAAY;EACZ,iBAAiB;EACjB,gBAAgB;AAClB;;AAEA;EACE,UAAU;AACZ;;AAEA;EACE,aAAa;EACb,OAAO;EACP,8BAA8B;AAChC;;AAEA;;;EAGE,SAAS;EACT,iBAAiB;EACjB,qBAAqB;EACrB,0BAA0B;AAC5B;;AAEA;;EAEE,SAAS;EACT,iBAAiB;AACnB;;AAEA;EACE,eAAe;EACf,kBAAkB;EAClB,yBAAyB;EACzB,YAAY;EACZ,eAAe;EACf,YAAY;EACZ,kBAAkB;EAClB,YAAY;AACd;;AAEA;EACE,sBAAsB;EACtB,yBAAyB;AAC3B;;;AAGA;EACE,aAAa;EACb,sBAAsB;EACtB,qBAAqB;EACrB,uBAAuB;EACvB,mBAAmB;EACnB,uBAAuB;AACzB;;AAEA;EACE,gBAAgB;EAChB,qBAAqB;EACrB,WAAW;EACX,kBAAkB;AACpB;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,QAAQ;EACR,iBAAiB;AACnB;;;AAGA;EACE,iBAAiB;AACnB;;AAEA;EACE,aAAa;EACb,QAAQ;AACV;;AAEA;EACE,aAAa;EACb,OAAO;EACP,8BAA8B;AAChC;;AAEA;EACE,SAAS;EACT,eAAe;AACjB;;AAEA;EACE,SAAS;EACT,eAAe;AACjB;;AAEA;EACE,kBAAkB;EAClB,iBAAiB;;AAEnB;;AAEA;EACE,SAAS;EACT,iBAAiB;AACnB;;AAEA;EACE,YAAY;EACZ,aAAa;EACb,eAAe;EACf,gBAAgB;EAChB,WAAW;AACb;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,yBAAyB;EACzB,mBAAmB;EACnB,aAAa;EACb,aAAa;EACb,kBAAkB;EAClB,qBAAqB;AACvB;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,8BAA8B;EAC9B,iBAAiB;AACnB;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE,aAAa;EACb,8BAA8B;EAC9B,gBAAgB;AAClB;;AAEA;EACE,YAAY;EACZ,kBAAkB;EAClB,YAAY;EACZ,mCAAmC;AACrC;;AAEA;EACE,sBAAsB;AACxB;;AAEA;EACE,yBAAyB;EACzB,mBAAmB;EACnB,aAAa;EACb,aAAa;EACb,aAAa;EACb,wBAAwB;AAC1B;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,8BAA8B;EAC9B,kBAAkB;EAClB,MAAM;AACR;;AAEA;;EAEE,gBAAgB;EAChB,YAAY;EACZ,YAAY;EACZ,aAAa;EACb,YAAY;EACZ,kBAAkB;EAClB,yBAAyB;AAC3B;;AAEA;;EAEE,YAAY;EACZ,iBAAiB;;AAEnB;;AAEA;;EAEE,YAAY;EACZ,eAAe;EACf,UAAU;AACZ;;AAEA;;EAEE,gBAAgB;EAChB,YAAY;EACZ,YAAY;EACZ,aAAa;EACb,YAAY;EACZ,yBAAyB;EACzB,SAAS;AACX;;AAEA;EACE,YAAY;EACZ,kBAAkB;AACpB;;AAEA;;EAEE,eAAe;EACf,YAAY;EACZ,UAAU;AACZ;;AAEA;;EAEE,kBAAkB;EAClB,eAAe;AACjB;;AAEA;EACE,4BAA4B;AAC9B;;AAEA;;;EAGE,kCAAkC;EAClC,YAAY;EACZ,kBAAkB;EAClB,YAAY;EACZ,yBAAyB;EACzB,YAAY;EACZ,iBAAiB;EACjB,gBAAgB;AAClB;;AAEA;EACE,oBAAoB;AACtB;;AAEA;;EAEE,YAAY;EACZ,kBAAkB;EAClB,mBAAmB;;AAErB;;;;AAIA;EACE,yBAAyB;EACzB,cAAc;EACd,iBAAiB;EACjB,gBAAgB;AAClB;;;;AAIA;EACE,aAAa;;EAEb,mBAAmB;EACnB,SAAS;AACX;;AAEA;EACE,eAAe;EACf,8BAA8B;EAC9B,0BAA0B;AAC5B;;;AAGA;EACE,WAAW;EACX,YAAY;AACd;;AAEA;EACE,SAAS;EACT,iBAAiB;AACnB;;AAEA;EACE,qBAAqB;EACrB,aAAa;EACb,kBAAkB;EAClB,oBAAoB;EACpB,YAAY;EACZ,8BAA8B;AAChC;;;AAGA;EACE,SAAS;EACT,yBAAyB;EACzB,iBAAiB;EACjB,gBAAgB;EAChB,gBAAgB;AAClB;;;AAGA;EACE,YAAY;EACZ,aAAa;AACf;;AAEA;EACE,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,qBAAqB;AACvB;;AAEA;EACE,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,qBAAqB;AACvB;;AAEA;EACE,aAAa;EACb,yBAAyB;EACzB,gBAAgB;EAChB,iBAAiB;EACjB,mBAAmB;EACnB,aAAa;EACb,kBAAkB;EAClB,kBAAkB;EAClB,2BAA2B;AAC7B;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,gBAAgB;EAChB,gBAAgB;EAChB,aAAa;EACb,YAAY;EACZ,kBAAkB;EAClB,eAAe;AACjB;;AAEA;EACE,YAAY;EACZ,YAAY;EACZ,kBAAkB;EAClB,gBAAgB;EAChB,YAAY;EACZ,eAAe;EACf,mCAAmC;EACnC,YAAY;AACd;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,YAAY;EACZ,YAAY;EACZ,kBAAkB;EAClB,YAAY;EACZ,YAAY;EACZ,eAAe;AACjB;;AAEA;EACE,sBAAsB;EACtB,YAAY;AACd;;AAEA;EACE,aAAa;EACb,uBAAuB;EACvB,mBAAmB;AACrB;;AAEA;EACE,aAAa;EACb,uBAAuB;EACvB,mBAAmB;AACrB;;AAEA;EACE,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,QAAQ;EACR,YAAY;EACZ,mCAAmC;EACnC,mBAAmB;EACnB,aAAa;EACb,WAAW;;AAEb;;AAEA;EACE,kBAAkB;EAClB,WAAW;EACX,qBAAqB;AACvB;;AAEA;EACE,SAAS;EACT,yBAAyB;EACzB,gBAAgB;AAClB;;AAEA;EACE,YAAY;EACZ,kBAAkB;EAClB,YAAY;EACZ,YAAY;EACZ,YAAY;EACZ,kBAAkB;EAClB,YAAY;EACZ,YAAY;EACZ,iBAAiB;EACjB,gBAAgB;EAChB,mBAAmB;EACnB,oBAAoB;EACpB,kBAAkB;AACpB;;AAEA;EACE,WAAW;AACb;;AAEA;EACE,YAAY;EACZ,kBAAkB;EAClB;qBACmB;AACrB;;AAEA;EACE,qBAAqB;AACvB;;AAEA;EACE,YAAY;EACZ,kBAAkB;AACpB","sourcesContent":["body {\n  padding: 0;\n  margin: 0;\n  box-sizing: border-box;\n}\n\n:root {\n  --hover-color: #fda4af;\n  --background-color: #6f9e9e;\n}\n\n* {\n  padding: 0;\n  margin: 0;\n  box-sizing: border-box;\n  color: #78350f;\n  font-family: \"Roboto\", sans-serif;\n  font-weight: 400;\n  font-style: normal;\n}\n\n@media (max-width: 550px) {\n  body main {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    z-index: 1;\n  }\n\n  main header {\n    background-color: #fda4af;\n    text-align: center;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    gap: 10px;\n  }\n\n  #toggleMenuIcon {\n    position: fixed;\n    top: 100px;\n    right: 10px;\n    width: 50px;\n    height: 50px;\n    /* \n    top: 106px;\n    right: 10px;\n    width: 50px; */\n    background-color: #6b8888;\n    cursor: pointer;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    border-radius: 8px;\n    transition: top 0.3s;\n\n    z-index: 1000;\n  }\n\n  h1.headerTextContent {\n    font-weight: 600;\n    padding: 30px;\n  }\n\n  #toggleMenuIcon::before {\n    content: \"\";\n    position: absolute;\n    width: 28px;\n    height: 2px;\n    background-color: #fff;\n    transform: translateY(-5px);\n    transition: 0.2s;\n  }\n\n  #toggleMenuIcon::after {\n    content: \"\";\n    position: absolute;\n    width: 28px;\n    height: 2px;\n    background-color: #fff;\n    transform: translateY(5px);\n    transition: 0.2s;\n  }\n\n  #toggleMenuIcon.active::before {\n    transform: translateY(0px) rotate(45deg);\n  }\n\n  #toggleMenuIcon.active::after {\n    transform: translateY(0px) rotate(-45deg);\n  }\n\n  aside#menu {\n    display: block;\n    position: fixed;\n    top: 0;\n    left: -220px;\n    width: 220px;\n    height: 100vh;\n    color: white;\n    filter: white;\n    background-color: #7989a1;\n    transition: 0.3s;\n    z-index: 1000;\n    fill: white;\n  }\n\n  aside#menu.active {\n    left: 0;\n  }\n\n  main aside {\n    display: none;\n    border-radius: 5px;\n    background-color: #e2e8f0;\n  }\n\n  p#addNewProjectEl, p.inbox, select#project-dropdown {\n    color: white;\n  }\n\n  main #Container {\n    display: flex;\n    flex-direction: column;\n    flex-wrap: wrap;\n    border-radius: 5px;\n  }\n\n  header .menuController {\n    display: block;\n    width: 40px;\n    height: 40px;\n  }\n\n  header .menuController svg {\n    display: block;\n    width: 40px;\n    height: 40px;\n    fill: white;\n    background-color: black;\n    border-radius: 10px;\n  }\n\n  #userlist {\n    display: flex;\n    flex-direction: column;\n    max-width: 550px;\n  }\n\n  div.listContainer {\n    display: flex;\n    gap: 5px;\n    max-width: 515px;\n    border-radius: 10px;\n    box-shadow: 1px 0px 3px 0px;\n    margin: 14px 14px 0 19px;\n    word-wrap: break-word;\n    word-break: break-all;\n    white-space: normal;\n    overflow-wrap: break-word;\n\n    padding: 10px;\n  }\n\n  #userlist .intialTextDisplay {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    text-align: center;\n  }\n\n  .intialTextDisplay img {\n    max-width: 100%;\n    height: auto;\n    padding: 18px;\n    border-radius: 30px;\n    object-fit: contain;\n  }\n\n  .popUpContainer {\n    display: flex;\n    max-width: 200px;\n    padding: 30px;\n    background-color: #07c4dd;\n    border: 1px solid black;\n  }\n\n  #userlist #addTodoBtnContainer {\n    display: flex;\n    align-items: center;\n    gap: 5px;\n    margin: 27px 0 11px 26px;\n  }\n\n  #task {\n    display: flex;\n    align-items: center;\n    gap: 5px;\n    margin: 27px 0 11px 26px;\n  }\n\n  #userlist #addTodoBtnContainer svg {\n    background-color: #dc2626;\n    border-radius: 50%;\n    fill: white;\n  }\n\n  #userlist #addTodoBtnContainer :hover {\n    cursor: pointer;\n    -webkit-transform: scale(1.09);\n  }\n\n  #userlist #addTodoBtnContainer button {\n    border: 0;\n    font-size: 1.3rem;\n    color: #b91c1c;\n    background-color: inherit;\n    transition: 0.3s;\n  }\n\n  #userlist #addTodoBtnContainer button:hover {\n    cursor: pointer;\n    -webkit-transform: scale(1.09);\n  }\n\n  .inner_container #form {\n    background-color: #64748b;\n    border-radius: 10px;\n    max-height: 200px;\n    max-width: 515px !important;\n    height: 170px;\n    display: none;\n    max-width: 480px;\n    margin: 10px 10px 0 10px;\n  }\n\n  div.inputNewprojectFormName {\n    display: none;\n    background-color: #cee3e3;\n    max-width: 300px;\n    max-height: 300px;\n    border-radius: 10px;\n    padding: 25px;\n    text-align: center;\n    margin: 60px 0 0 0;\n    box-shadow: 0px 9px 3px 0px;\n  }\n\n  .inputNewprojectFormName h2 {\n    margin: 0 0 10px 0;\n  }\n\n  .inputNewprojectFormName .inputNewProjectName {\n    max-width: 300px;\n    max-height: 35px;\n    padding: 14px;\n    border: none;\n    border-radius: 7px;\n  }\n\n  input.SaveProjectName {\n    padding: 9px;\n    border: none;\n    border-radius: 8px;\n    max-width: 100px;\n    height: 40px;\n    font-size: 19px;\n  }\n\n  .projectNameSaverBtnContainer {\n    margin: 10px 0;\n  }\n\n  .projectNameSaverBtnContainer button {\n    padding: 9px;\n    border: none;\n    border-radius: 8px;\n    width: 100px;\n    height: 40px;\n    font-size: 19px;\n  }\n\n  .inner_container #ProjectForm {\n    background-color: #64748b;\n    border-radius: 10px;\n    max-height: 134px;\n    max-width: 515px;\n    display: none;\n    max-width: 500px;\n    margin: 9px 10px 0 23px;\n  }\n\n  .projectFormDetails {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    padding: 10px;\n    height: 80px;\n  }\n\n  div.priorityDateOnLargeScreen {\n    display: flex;\n    position: relative;\n    top: 0;\n    max-width: 200px;\n    flex-direction: column;\n  }\n\n  .projectInputContainer {\n    max-width: 200px;\n  }\n\n  .projectInputContainer p input {\n    max-width: 200px;\n  }\n\n  .innerTaskContainer .edit {\n    max-width: 140px;\n  }\n\n  .projectInputContainer .PdescriptionInputContainer {\n    margin: 0;\n  }\n\n  input#ProjectdatePicker {\n    padding: 2px;\n    border-radius: 5px;\n    border: none;\n    height: 32px;\n    font-size: 0.9rem;\n    font-weight: 700;\n    background: #d4d4d8;\n    text-align: center;\n  }\n\n  select#projectPriority {\n    background-color: #44403c;\n    color: #fafafa;\n    font-size: 0.85rem;\n    font-weight: 600;\n    height: 35px;\n  }\n\n\n  div.projectButtonsContainer button {\n    border: none;\n    border-radius: 7px;\n    padding: 9px;\n    font-size: 1rem;\n    font-weight: 600;\n  }\n\n\n  div#configPriorityDateOnMobile {\n    display: flex;\n    flex-direction: column;\n    max-width: 200px;\n    position: static;\n  }\n\n  #configPriorityDateOnMobile #priority,\n  #datePicker {\n    padding: 2px;\n    border-radius: 6px;\n    max-width: 104px;\n    min-width: 80px;\n  }\n\n  #ProjectForm .footer {\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n    padding: 0 10px;\n    gap: 0;\n  }\n\n  #ProjectForm .projectButtonsContainer {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    padding: 0 10px;\n    gap: 0;\n  }\n\n  #form .formDetails {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    padding: 10px;\n    margin: 0;\n  }\n\n  #formFooterOnMobile {\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n    padding: 0 10px;\n  }\n\n  #formFooterOnMobile .buttons {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    padding: 0 10px;\n    margin: 0;\n    gap: 0;\n  }\n\n  .priorityDateLargeScreen {\n    display: flex;\n    flex-direction: column;\n  }\n\n  #form .inputs {\n    display: flex;\n    flex-direction: column;\n    max-width: 150px;\n  }\n\n  #form .first-inputContainer input,\n  .PtitleInputContainer input {\n    max-width: 305px;\n    max-height: 40px;\n    border: none;\n    outline: none;\n    color: white;\n    /* margin: 10px 0; */\n    background-color: inherit;\n  }\n\n  #form .first-inputContainer input, .second-inputContainer input {\n    max-width: 305px;\n    max-height: 40px;\n    margin: 0;\n    font-size: 1.1rem;\n  }\n\n  #form .second-inputContainer input,\n  .PdescriptionInputContainer input {\n    max-width: 307px;\n    max-height: 40px;\n    border: none;\n    outline: none;\n    color: white;\n    background-color: inherit;\n    margin: 0;\n  }\n\n  #form .other-options-on-forms button,\n  #configPriorityDateOnMobile #priority,\n  #datePicker {\n    padding: 4px;\n    border-radius: 6px;\n    max-width: 104px;\n    min-width: 80px;\n  }\n}\n\n@media (min-width: 551px) and (max-width: 768px) {\n  body main {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n  }\n\n  main header {\n    background-color: #fda4af;\n    text-align: center;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    gap: 10px;\n    height: 100px;\n  }\n\n  main aside {\n    display: none;\n    border-radius: 5px;\n    background-color: #e2e8f0;\n    z-index: 2;\n  }\n\n  aside ul,\n  ul select {\n    display: flex;\n    flex-direction: column;\n    /* color: white; */\n    fill: #78350f;\n  }\n\n  li.inbox {\n    font-size: 1.4rem;\n    color: white;\n  }\n\n  li#addNewProjectEl {\n    margin: 0;\n    font-size: 1.3rem;\n    color: white;\n  }\n\n  select#project-dropdown {\n    background-color: inherit;\n  }\n\n  main #Container {\n    display: flex;\n    flex-direction: column;\n    flex-wrap: wrap;\n    border-radius: 5px;\n    z-index: 1;\n  }\n\n  header .menuController {\n    display: block;\n    width: 40px;\n    height: 40px;\n  }\n\n  #toggleMenuIcon {\n    position: fixed;\n    top: 20px;\n    right: 20px;\n    width: 50px;\n    height: 50px;\n    background-color: #6f9e9e;\n    cursor: pointer;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    border-radius: 8px;\n    transition: top 0.3s;\n    z-index: 1000;\n\n    z-index: 1000;\n  }\n\n  #toggleMenuIcon::before {\n    content: \"\";\n    position: absolute;\n    width: 28px;\n    height: 2px;\n    background-color: #fff;\n    transform: translateY(-5px);\n    transition: 0.2s;\n  }\n\n  #toggleMenuIcon::after {\n    content: \"\";\n    position: absolute;\n    width: 28px;\n    height: 2px;\n    background-color: #fff;\n    transform: translateY(5px);\n    transition: 0.2s;\n  }\n\n  #toggleMenuIcon.active::before {\n    transform: translateY(0px) rotate(45deg);\n  }\n\n  #toggleMenuIcon.active::after {\n    transform: translateY(0px) rotate(-45deg);\n  }\n\n  aside#menu {\n    display: block;\n    position: fixed;\n    top: 0;\n    left: -220px;\n    width: 220px;\n    height: 100vh;\n    background-color: #bfc6c6;\n    transition: 0.3s;\n  }\n\n  aside#menu.active {\n    left: 0;\n  }\n\n  aside ul {\n    display: flex;\n    flex-direction: column;\n    color: white;\n    fill: white;\n  }\n\n  p#addNewProjectEl, p.inbox, select#project-dropdown {\n    /* color: white; */\n\n    font-weight: 600;\n  }\n\n  header .menuController svg {\n    display: block;\n    width: 40px;\n    height: 40px;\n    fill: white;\n    background-color: black;\n    border-radius: 10px;\n  }\n\n  #userlist #addTodoBtnContainer {\n    display: flex;\n    align-items: center;\n    gap: 5px;\n    margin: 27px 0 11px 26px;\n  }\n\n  #task {\n    display: flex;\n    align-items: center;\n    gap: 5px;\n    margin: 27px 0 11px 26px;\n  }\n\n  #userlist #addTodoBtnContainer svg {\n    background-color: #dc2626;\n    border-radius: 50%;\n    fill: white;\n  }\n\n  #userlist #addTodoBtnContainer :hover {\n    cursor: pointer;\n    -webkit-transform: scale(1.09);\n  }\n\n  #userlist #addTodoBtnContainer button {\n    border: 0;\n    font-size: 1.4rem;\n\n    color: #b91c1c;\n    background-color: inherit;\n  }\n\n  #userlist #addTodoBtnContainer button:hover {\n    cursor: pointer;\n    -webkit-transform: scale(1.09);\n  }\n\n  div.listContainer {\n    display: flex;\n    gap: 5px;\n    max-width: 714px;\n    word-wrap: break-word;\n    word-break: break-all;\n    white-space: normal;\n    overflow-wrap: break-word;\n    border-radius: 10px;\n    box-shadow: 1px 0px 3px 0px;\n    /* margin: 18px 60px; */\n    padding: 15px;\n  }\n\n  #userlist .intialTextDisplay {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    text-align: center;\n  }\n\n  .intialTextDisplay p {\n    max-width: 500px;\n    display: flex;\n    max-width: 500px;\n    flex-direction: column;\n    flex-wrap: wrap;\n  }\n\n  .intialTextDisplay img {\n    width: 100%;\n    height: auto;\n    padding: 20px;\n    border-radius: 41px;\n    object-fit: contain;\n  }\n\n  .inner_container #form {\n    background-color: #64748b;\n    border-radius: 10px;\n    height: 150px;\n    display: none;\n    max-width: 600px;\n\n    margin: 17px;\n  }\n\n  #form div.formDetails {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n\n    padding: 10px;\n    margin: 0;\n  }\n\n  .priorityDateLargeScreen {\n    display: none;\n  }\n\n  #form .inputs {\n    max-width: 150px;\n  }\n\n  #form .first-inputContainer input,\n  .PtitleInputContainer input,\n  #form .second-inputContainer input,\n  .PdescriptionInputContainer input {\n    max-width: 600px;\n    height: 25px;\n    border: none;\n    outline: none;\n    color: white;\n    margin: 10px 0 0 0;\n    background-color: inherit;\n  }\n\n  p.second-inputContainer {\n    margin: 0;\n  }\n\n  #form .buttons {\n    display: flex;\n    margin: 1px 23px;\n  }\n\n  #configPriorityDateOnMobile {\n    display: flex;\n    flex-direction: column;\n    position: static;\n  }\n\n  #form .other-options-on-forms button,\n  #priority,\n  #datePicker {\n    padding: 7px;\n    border-radius: 9px;\n  }\n\n  form#ProjectForm {\n    background-color: #64748b;\n    border-radius: 10px;\n    height: 150px;\n    display: none;\n    max-width: 693px;\n    padding-left: 1rem;\n    margin: 9px 61px;\n  }\n\n  div.projectFormDetails {\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    top: 0;\n  }\n\n  */ .projectButtonsContainer {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n  }\n\n  select#priority {\n    padding: 8px;\n    border-radius: 9px;\n  }\n\n  input#datePicker {\n    padding: 3px;\n    border-radius: 9px;\n  }\n}\n\n\n@media (min-width: 769px) and (max-width: 1000px) {\n  body main {\n    display: grid;\n  }\n\n  main header {\n    grid-area: 1 / 2 / 2 / 6;\n\n    background-color: #fda4af;\n    text-align: center;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    gap: 10px;\n  }\n\n  main aside {\n    border-radius: 5px;\n    background-color: #e2e8f0;\n  }\n\n  main #Container {\n    display: flex;\n    flex-direction: column;\n    flex-wrap: wrap;\n    border-radius: 5px;\n    z-index: 1;\n  }\n\n  header .menuController {\n    display: block;\n    width: 40px;\n    height: 40px;\n  }\n\n  header .menuController svg {\n    display: block;\n    width: 40px;\n    height: 40px;\n    fill: white;\n    background-color: black;\n    border-radius: 10px;\n  }\n\n\n\n\n  #userlist .intialTextDisplay {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    text-align: center;\n  }\n\n  #userlist .intialTextDisplay p {\n    font-size: 1.2rem;\n    text-align: center;\n    font-weight: 500;\n    margin: 10px 0 0 0;\n    max-width: 600px;\n  }\n\n  #userlist #addTodoBtnContainer {\n    display: none;\n    align-items: center;\n    gap: 5px;\n    margin: 27px 0 11px 26px;\n  }\n\n  #task {\n    display: flex;\n    align-items: center;\n    gap: 5px;\n    margin: 27px 0 11px 26px;\n  }\n\n  #userlist #addTodoBtnContainer svg {\n    background-color: #dc2626;\n    border-radius: 50%;\n    fill: white;\n  }\n\n  #userlist #addTodoBtnContainer :hover {\n    cursor: pointer;\n    -webkit-transform: scale(1.09);\n  }\n\n  #userlist #addTodoBtnContainer button {\n    border: 0;\n    font-size: 16px;\n    color: #b91c1c;\n    background-color: inherit;\n  }\n\n  #userlist #addTodoBtnContainer button:hover {\n    cursor: pointer;\n    -webkit-transform: scale(1.09);\n  }\n\n  div.listContainer {\n    display: flex;\n    gap: 5px;\n    max-width: 714px;\n\n    border-radius: 10px;\n    box-shadow: 1px 0px 3px 0px;\n    margin: 18px 60px;\n    padding: 15px;\n  }\n\n  .inner_container #form {\n    background-color: #64748b;\n    border-radius: 10px;\n    height: 150px;\n    display: none;\n    max-width: 750px;\n\n    margin: 17px;\n  }\n\n  #form div.formDetails {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n\n    padding: 9px 20px;\n    margin: 0;\n  }\n\n  .priorityDateLargeScreen {\n    display: none;\n  }\n\n  #form .inputs {\n    max-width: 150px;\n  }\n\n  #form .first-inputContainer input,\n  .PtitleInputContainer input {\n    max-width: 420px;\n    max-height: 60px;\n    border: none;\n    outline: none;\n    color: white;\n    background-color: inherit;\n    margin: 0;\n  }\n\n  #form .second-inputContainer input,\n  .PdescriptionInputContainer input {\n    max-width: 420px;\n    max-height: 60px;\n    border: none;\n    outline: none;\n    color: rgb(90, 77, 77);\n    background-color: inherit;\n    margin: 0;\n  }\n\n  #form .buttons {\n    display: flex;\n    justify-content: space-between;\n    margin: 1px 33px;\n  }\n\n  form#ProjectForm {\n    background-color: #64748b;\n    border-radius: 10px;\n    height: 150px;\n    display: none;\n    max-width: 693px;\n    padding-left: 1rem;\n    margin: 9px 61px;\n  }\n\n  div.projectFormDetails {\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    top: 0;\n  }\n\n  div.priorityDateOnLargeScreen {\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n    align-items: center;\n    top: 0;\n  }\n\n  .projectButtonsContainer {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n  }\n\n  #configPriorityDateOnMobile {\n    display: flex;\n    flex-direction: column;\n    position: static;\n  }\n\n  #form .other-options-on-forms button,\n  #priority,\n  #datePicker {\n    padding: 8px;\n    border-radius: 6px;\n    border: none;\n  }\n\n\n}\n\nmain {\n  display: grid;\n  grid-template-columns: 250px 1fr;\n  grid-template-rows: 100px 611px;\n}\n\nheader {\n  grid-area: 1 / 2 / 2 / 6;\n  background-color: #fda4af;\n  text-align: center;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-weight: 700;\n}\n\naside {\n  grid-area: 1/ 1/ 4/ 2;\n  border-radius: 5px;\n  background-color: #e2e8f0;\n}\n\n.sideBarContentContainer {}\n\n#Container {\n  grid-area: 2 / 2 / 3 / 4;\n\n  display: grid;\n  grid-template-columns: 100px 650px minmax(100px, 350px);\n  border-radius: 5px;\n}\n\n.inner_container {\n  grid-area: 1 / 2 / 3 / 3;\n}\n\n.intialTextDisplay {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  padding: 10px;\n}\n\n.intialTextDisplay p {\n  font-size: 1.2rem;\n  text-align: center;\n  font-weight: 800;\n  color: #78350f;\n  margin: 10px 0 0 0;\n}\n\n.intialTextDisplay img {\n  width: 100%;\n  height: auto;\n  border-radius: 30px;\n  padding: 20px;\n}\n\n#addTodoBtnContainer {\n  display: none;\n}\n\n.empty {\n  grid-area: 1 / 3 / 5 / 4;\n  background-color: #f8f8f8;\n  background-image: url(\"./images/Todo-1.jpg\");\n  background-size: cover;\n  background-position: center;\n}\n\n.menuController {\n  display: none;\n  width: 40px;\n  height: 40px;\n}\n\n.checkBox {\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  width: 20px;\n  height: 20px;\n  border: 1px solid #ccc;\n  border-radius: 3px;\n  outline: none;\n  cursor: pointer;\n  position: relative;\n}\n\n.checkBox::before {\n  content: \"\";\n  display: block;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  font-size: 16px;\n  color: rgb(22, 252, 22);\n  opacity: 0;\n  transition: opacity 0.3s ease;\n}\n\n.checkBox:hover::before {\n  content: \"✓\";\n  opacity: 0.5;\n}\n\nsvg {\n  width: 34px;\n  height: 33px;\n  pointer-events: none;\n\n}\n\n#task {\n  display: flex;\n  align-items: center;\n  gap: 5px;\n  margin: 27px 0 11px 26px;\n}\n\n#task svg {\n  background-color: #dc2626;\n  border-radius: 50%;\n  fill: white;\n}\n\n#task :hover {\n  cursor: pointer;\n  -webkit-transform: scale(1.09);\n}\n\n#task button {\n  border: 0;\n  font-size: 1.4rem;\n  color: #b91c1c;\n  background-color: inherit;\n  font-weight: 700;\n}\n\n#task button:hover {\n  cursor: pointer;\n  -webkit-transform: scale(1.09);\n}\n\nbutton.deleteTask {\n  padding: 10px;\n  border: none;\n  border-radius: 7px;\n  font-size: 1.1rem;\n  background-color: #e0487c;\n  color: white;\n  transition: transform 0.2s ease-out;\n}\n\nbutton.deleteTask:hover {\n  transform: scale(1.05);\n  background-color: #4b0707;\n\n}\n\nbutton.deleteTask:active {\n  transform: scale(0.9);\n}\n\n.listContainer {\n  display: flex;\n  gap: 5px;\n  max-width: 714px;\n\n  border-radius: 10px;\n  box-shadow: 1px 0px 3px 0px;\n  margin: 18px 18px;\n  padding: 15px;\n}\n\n.priorityDateOnLargeScreen {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  max-width: 200px;\n}\n\n.projectButtonsContainer {\n  display: flex;\n  justify-content: space-between;\n  padding-inline: 18px\n}\n\n.projectButtonsContainer button {\n  border: none;\n  border-radius: 7px;\n  padding: 9px;\n  font-size: 1.2rem;\n  font-weight: 600;\n}\n\n.excluded {\n  color: red;\n}\n\n.taskContainer {\n  display: flex;\n  flex: 1;\n  justify-content: space-between;\n}\n\n.taskTitle,\n.newProject-task-title,\n.editableSaveTaskEl {\n  margin: 0;\n  font-size: 1.3rem;\n  text-decoration: none;\n  text-decoration-color: red;\n}\n\n.taskDescription,\n.newProject-description {\n  margin: 0;\n  font-size: 1.2rem;\n}\n\n.taskPriority {\n  font-size: 19px;\n  border-radius: 6px;\n  background-color: #573d3d;\n  padding: 6px;\n  margin: 0 0 7px;\n  color: white;\n  text-align: center;\n  width: 130px;\n}\n\n.taskPriority:hover {\n  transform: scale(1.05);\n  background-color: #9c1515;\n}\n\n\n.innerTaskHandler {\n  display: flex;\n  flex-direction: column;\n  justify-items: center;\n  justify-content: center;\n  align-items: center;\n  margin: 0px 15px 0 40px;\n}\n\naside ul li {\n  list-style: none;\n  display: inline-block;\n  width: 100%;\n  padding: 10px 20px;\n}\n\n.inbox-container {\n  display: flex;\n  align-items: center;\n  gap: 5px;\n  font-size: 1.3rem;\n}\n\n\n.inbox {\n  font-size: 1.4rem;\n}\n\n.inboxListContainer {\n  display: flex;\n  gap: 5px;\n}\n\n.inboxTaskContainer {\n  display: flex;\n  flex: 1;\n  justify-content: space-between;\n}\n\n.inboxTaskTitle {\n  margin: 0;\n  font-size: 18px;\n}\n\n.inboxTaskDescription {\n  margin: 0;\n  font-size: 14px;\n}\n\n.inboxTaskPriority {\n  margin: 0 20px 0 0;\n  font-size: 1.3rem;\n\n}\n\n.dueDate {\n  margin: 0;\n  font-size: 1.2rem;\n}\n\n.edit {\n  border: none;\n  outline: none;\n  font-size: 17px;\n  max-width: 110px;\n  margin: 0 0;\n}\n\n#projects h3 {\n  margin: 0 0 0 10px;\n}\n\n#form {\n  background-color: #64748b;\n  border-radius: 10px;\n  height: 170px;\n  display: none;\n  padding-left: 1rem;\n  margin: 10px 10px 0 0;\n}\n\n.formDetails {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin: 12px 15px;\n}\n\ninput#datePicker {\n  max-width: 133px;\n}\n\n.buttons {\n  display: flex;\n  justify-content: space-between;\n  margin: 1px 33px;\n}\n\n.buttons button {\n  border: none;\n  border-radius: 7px;\n  padding: 7px;\n  transition: transform 0.2s ease-out;\n}\n\n.buttons button:hover {\n  transform: scale(1.05);\n}\n\n#ProjectForm {\n  background-color: #64748b;\n  border-radius: 10px;\n  height: 166px;\n  display: none;\n  padding: 10px;\n  margin: 15px 15px 0 17px;\n}\n\n.projectFormDetails {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding-left: 1rem;\n  top: 0;\n}\n\n.first-inputContainer input,\n.PtitleInputContainer input {\n  max-width: 600px;\n  height: 37px;\n  border: none;\n  outline: none;\n  color: white;\n  margin: 10px 0 0 0;\n  background-color: inherit;\n}\n\n.task-title,\n.description {\n  width: 350px;\n  font-size: 1.1rem;\n\n}\n\n.first-inputContainer input::placeholder,\n.PtitleInputContainer input::placeholder {\n  color: white;\n  padding: 0 10px;\n  opacity: 1;\n}\n\n.second-inputContainer input,\n.PdescriptionInputContainer input {\n  max-width: 600px;\n  height: 37px;\n  border: none;\n  outline: none;\n  color: white;\n  background-color: inherit;\n  margin: 0;\n}\n\n.pTitle, .pDescription {\n  width: 350px;\n  font-size: 1.07rem;\n}\n\n.second-inputContainer input::placeholder,\n.PdescriptionInputContainer input::placeholder {\n  padding: 0 10px;\n  color: white;\n  opacity: 1;\n}\n\n.first-inputContainer,\n.second-inputContainer {\n  margin: 10px 0 0 0;\n  font-size: 1rem;\n}\n\n.submitBtn:active {\n  transform: active scale(1.1);\n}\n\n.other-options-on-forms button,\n#priority,\ninput#datePicker {\n  transition: transform 0.3s ease-in;\n  padding: 7px;\n  border-radius: 7px;\n  border: none;\n  background-color: #083344;\n  color: white;\n  font-size: 1.1rem;\n  font-weight: 600;\n}\n\n#priority {\n  margin: 10px 0 8px 0;\n}\n\n#projectPriority,\n.footer {\n  padding: 7px;\n  border-radius: 5px;\n  margin: 0 4px 5px 0;\n\n}\n\n\n\n#projectPriority, #projectPriority option {\n  background-color: #44403c;\n  color: #fafafa;\n  font-size: 1.2rem;\n  font-weight: 600;\n}\n\n\n\n.addProjectsContainer {\n  display: flex;\n\n  align-items: center;\n  gap: 10px;\n}\n\n.inbox-container:hover, .addProjectsContainer:hover, .project_text:hover, #project-dropdown:hover {\n  cursor: pointer;\n  -webkit-transform: scale(1.05);\n  text-decoration: underline;\n}\n\n\n.addProjectsContainer svg {\n  width: 25px;\n  height: 25px;\n}\n\n#addNewProjectEl {\n  margin: 0;\n  font-size: 1.3rem;\n}\n\n.project_text {\n  margin: 0 0 10px 17px;\n  display: flex;\n  align-self: center;\n  justify-self: center;\n  padding: 9px;\n  border-radius: 5px 0px 0px 5px;\n}\n\n\n#project-dropdown {\n  border: 0;\n  background-color: inherit;\n  font-size: 1.3rem;\n  font-weight: 550;\n  max-width: 160px;\n}\n\n\n#project-dropdown:focus {\n  border: none;\n  outline: none;\n}\n\n#newProjectsFormContainerEl {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  justify-items: center;\n}\n\n#ProjectsFormNameContainerEl {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  justify-items: center;\n}\n\n.inputNewprojectFormName {\n  display: none;\n  background-color: #cee3e3;\n  max-width: 400px;\n  max-height: 300px;\n  border-radius: 10px;\n  padding: 46px;\n  text-align: center;\n  margin: 60px 0 0 0;\n  box-shadow: 0px 9px 3px 0px;\n}\n\n.inputNewprojectFormName h2 {\n  margin: 0 0 10px 0;\n}\n\n.inputNewProjectName {\n  max-width: 350px;\n  max-height: 35px;\n  padding: 17px;\n  border: none;\n  border-radius: 7px;\n  font-size: 19px;\n}\n\ninput.SaveProjectName {\n  padding: 9px;\n  border: none;\n  border-radius: 8px;\n  max-width: 100px;\n  height: 40px;\n  font-size: 19px;\n  background-color: rgb(240, 59, 134);\n  color: white;\n}\n\n.projectNameSaverBtnContainer {\n  margin: 10px 0;\n}\n\n.projectNameSaverBtnContainer button {\n  padding: 9px;\n  border: none;\n  border-radius: 8px;\n  width: 100px;\n  height: 40px;\n  font-size: 19px;\n}\n\n#ProjectsFormNameContainerEl .Cancel {\n  background-color: grey;\n  color: white;\n}\n\n#newProjectTasksContainer {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n#newProjectTaskBtnWrapper {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n#newProjectTasksInnerContainer {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 5px;\n  margin: 10px;\n  box-shadow: #5c5555 1px 3px 3px 1px;\n  border-radius: 10px;\n  padding: 10px;\n  width: 95px;\n\n}\n\nsvg.addTask {\n  border-radius: 50%;\n  fill: wheat;\n  background-color: red;\n}\n\n.newProjectAddBtn {\n  border: 0;\n  background-color: inherit;\n  font-weight: 500;\n}\n\n#ProjectdatePicker {\n  padding: 2px;\n  border-radius: 5px;\n  border: none;\n  height: 32px;\n  padding: 2px;\n  border-radius: 5px;\n  border: none;\n  height: 32px;\n  font-size: 1.1rem;\n  font-weight: 600;\n  background: #d4d4d8;\n  /* color: #f8fafc; */\n  text-align: center;\n}\n\n#ProjectdatePicker input[type='date'] {\n  fill: white;\n}\n\n#submitBtnForProject {\n  padding: 7px;\n  border-radius: 9px;\n  /* font-size: 1.2rem;\n  font-weight: 600; */\n}\n\n#submitBtnForProject:active {\n  transform: scale(1.1);\n}\n\n.cancelForProjectBtn {\n  padding: 7px;\n  border-radius: 9px;\n}"],"sourceRoot":""}]);
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
const newProjectTaskBtnWrapper = document.createElement('div');
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
  const projectTaskBtn = createNewProjectTaskBtn();

  console.log(projectTaskBtn);
  

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
  
    projectTaskBtn.style.display = 'none';

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
  () => { 
inputNewprojectFormName.style.display = "none";
    const intialTextDisplayContainer = document.querySelector(
    ".intialTextDisplayContainer",
  );

    intialTextDisplayContainer.style.display = "block";

  }
);

let svgElement = null;
function createNewProjectTaskBtn() {
  newProjectTasksContainer.setAttribute("id", "newProjectTasksContainer");
  newProjectTaskBtnWrapper.setAttribute("id", "newProjectTaskBtnWrapper");
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
  newProjectTaskBtnWrapper.appendChild(newProjectTasksInnerContainer)
  newProjectTasksContainer.appendChild(newProjectTaskBtnWrapper);

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

  // let taskTitle = document.querySelector('.taskTitle');
  // let taskDescription = document.querySelector(".taskDescription");

  // if (taskTitle.textContent.length > 35) {
  //   taskTitle.style.overflow = 'hidden'
  //   // return alert(
  //   //   `Input should be less or equal to the 35 characters, you have entered ${taskInputValue.length} characters`,
  //   // );
  // } else if (taskDescription.textContent.length > 40) {
  //   taskDescription.style.overflow = 'hidden'

  //   return alert(
  //     `Description should be less or equal to the 40 characters, you have entered ${descriptionInputValue.length} characters`,
  //   );
  // }

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
  // if (taskInputValue.length >= 35) {
  //   return alert(
  //     `task title should be less or equal to 35  characters, you have entered ${taskInputValue.length} characters`,
  //   );
  // } else if (descriptionInputValue.length >= 40) {
  //   return alert(
  //     `Description should be less or equal to  40 characters, you have entered ${descriptionInputValue.length} characters`,
  //   );
  // }

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
  //   let addTodoBtnOnMobile = document.querySelector("#addTodoBtnContainer2");
  //   console.log(addTodoBtnOnMobile);

  // let mediaQuery = window.matchMedia('(max-width: 500px)')
  // if (mediaQuery.matches) {
  //    addTodoBtnOnMobile.style.display = "block";
  //   console.log('true')
  // } else {
  //   console.log('false')

  // }
  const intialTextDisplayContainer = document.querySelector(
    ".intialTextDisplayContainer",
  );
  intialTextDisplayContainer.style.display = "block";
  taskTitle.value = "";
  taskDescription.value = "";
  dueDate.value = "";
  taskPriority.value = "Select Priority";
  form.style.display = "none";
 

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
// let addNewProjectEl = document.querySelector("#adNewProjectEl");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzBHO0FBQ2pCO0FBQ087QUFDaEcsNENBQTRDLG1IQUFzQztBQUNsRiw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GLHlDQUF5QyxzRkFBK0I7QUFDeEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QjtBQUN2QjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHFCQUFxQjs7QUFFckI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCO0FBQzFCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7O0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCLG1DQUFtQztBQUM3RDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBSUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQjtBQUNwQjs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxPQUFPLGlGQUFpRixVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsT0FBTyxNQUFNLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLGNBQWMsV0FBVyxNQUFNLEtBQUssWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGNBQWMsV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLFdBQVcsVUFBVSxVQUFVLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLFdBQVcsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxRQUFRLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLE1BQU0sVUFBVSxZQUFZLGFBQWEsV0FBVyxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxNQUFNLFlBQVksYUFBYSxXQUFXLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksT0FBTyxNQUFNLFlBQVksYUFBYSxXQUFXLFVBQVUsVUFBVSxZQUFZLFdBQVcsTUFBTSxPQUFPLFVBQVUsWUFBWSxhQUFhLFdBQVcsTUFBTSxNQUFNLEtBQUssS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLFdBQVcsVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxNQUFNLE1BQU0sVUFBVSxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsWUFBWSxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsTUFBTSxLQUFLLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsV0FBVyxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxVQUFVLGFBQWEsV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLGNBQWMsV0FBVyxVQUFVLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLE9BQU8sUUFBUSxZQUFZLFdBQVcsVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sT0FBTyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxNQUFNLE9BQU8sS0FBSyxLQUFLLFVBQVUsTUFBTSxLQUFLLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsVUFBVSxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLE1BQU0sS0FBSyxZQUFZLGFBQWEsV0FBVyxVQUFVLGFBQWEsV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLGNBQWMsYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLE9BQU8sTUFBTSxZQUFZLGFBQWEsV0FBVyxVQUFVLFVBQVUsWUFBWSxXQUFXLE1BQU0sTUFBTSxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxPQUFPLFVBQVUsWUFBWSxXQUFXLE9BQU8sTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLGFBQWEsTUFBTSxhQUFhLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxNQUFNLEtBQUssWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLFdBQVcsVUFBVSxZQUFZLFdBQVcsWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLGNBQWMsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLE1BQU0sTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksT0FBTyxPQUFPLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxNQUFNLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLGFBQWEsUUFBUSxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLFFBQVEsS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsT0FBTyxLQUFLLFVBQVUsVUFBVSxPQUFPLEtBQUssWUFBWSxjQUFjLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLE1BQU0sTUFBTSxZQUFZLFdBQVcsVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sTUFBTSxVQUFVLGFBQWEsT0FBTyxNQUFNLFVBQVUsVUFBVSxVQUFVLE1BQU0sTUFBTSxZQUFZLFdBQVcsVUFBVSxVQUFVLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksT0FBTyxNQUFNLFVBQVUsVUFBVSxVQUFVLE1BQU0sTUFBTSxZQUFZLFdBQVcsT0FBTyxLQUFLLFlBQVksT0FBTyxPQUFPLFlBQVksV0FBVyxZQUFZLFdBQVcsWUFBWSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLE1BQU0sVUFBVSxZQUFZLGNBQWMsU0FBUyxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsU0FBUyxLQUFLLFdBQVcsWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxRQUFRLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsV0FBVyxZQUFZLFFBQVEsS0FBSyxVQUFVLFlB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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtDQUFrQztBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUM1RGE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2JBLFlBQVksYUFBYTtBQUNjO0FBQ3ZDLFlBQVksV0FBVzs7QUFFdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDTztBQUNQO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7O0FBRUEsV0FBVztBQUNYOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FB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QUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxNQUFNLDhEQUF1QjtBQUM3QixJQUFJLDhEQUF1QjtBQUMzQjtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ2xhcUQ7QUFDckQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztVQ3RDQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOztVQUVBO1VBQ0E7Ozs7O1dDekJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQ2xCQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7Ozs7O1dDckJBOzs7Ozs7Ozs7Ozs7O0FDQTJCO0FBQ0U7QUFDRztBQUNNIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlcy5jc3MiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovLy8uL3NyYy9zdHlsZXMuY3NzPzQ0YjIiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZG9tLUVsLTIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RvbS1FbC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVzcG9uc2l2ZS5qcyIsIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovLy8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi9pbWFnZXMvVG9kby0xLmpwZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgYm9keSB7XG4gIHBhZGRpbmc6IDA7XG4gIG1hcmdpbjogMDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxuOnJvb3Qge1xuICAtLWhvdmVyLWNvbG9yOiAjZmRhNGFmO1xuICAtLWJhY2tncm91bmQtY29sb3I6ICM2ZjllOWU7XG59XG5cbioge1xuICBwYWRkaW5nOiAwO1xuICBtYXJnaW46IDA7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGNvbG9yOiAjNzgzNTBmO1xuICBmb250LWZhbWlseTogXCJSb2JvdG9cIiwgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogNTUwcHgpIHtcbiAgYm9keSBtYWluIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgei1pbmRleDogMTtcbiAgfVxuXG4gIG1haW4gaGVhZGVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmRhNGFmO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgZ2FwOiAxMHB4O1xuICB9XG5cbiAgI3RvZ2dsZU1lbnVJY29uIHtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgdG9wOiAxMDBweDtcbiAgICByaWdodDogMTBweDtcbiAgICB3aWR0aDogNTBweDtcbiAgICBoZWlnaHQ6IDUwcHg7XG4gICAgLyogXG4gICAgdG9wOiAxMDZweDtcbiAgICByaWdodDogMTBweDtcbiAgICB3aWR0aDogNTBweDsgKi9cbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNmI4ODg4O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xuICAgIHRyYW5zaXRpb246IHRvcCAwLjNzO1xuXG4gICAgei1pbmRleDogMTAwMDtcbiAgfVxuXG4gIGgxLmhlYWRlclRleHRDb250ZW50IHtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIHBhZGRpbmc6IDMwcHg7XG4gIH1cblxuICAjdG9nZ2xlTWVudUljb246OmJlZm9yZSB7XG4gICAgY29udGVudDogXCJcIjtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgd2lkdGg6IDI4cHg7XG4gICAgaGVpZ2h0OiAycHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTVweCk7XG4gICAgdHJhbnNpdGlvbjogMC4ycztcbiAgfVxuXG4gICN0b2dnbGVNZW51SWNvbjo6YWZ0ZXIge1xuICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHdpZHRoOiAyOHB4O1xuICAgIGhlaWdodDogMnB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDVweCk7XG4gICAgdHJhbnNpdGlvbjogMC4ycztcbiAgfVxuXG4gICN0b2dnbGVNZW51SWNvbi5hY3RpdmU6OmJlZm9yZSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDBweCkgcm90YXRlKDQ1ZGVnKTtcbiAgfVxuXG4gICN0b2dnbGVNZW51SWNvbi5hY3RpdmU6OmFmdGVyIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMHB4KSByb3RhdGUoLTQ1ZGVnKTtcbiAgfVxuXG4gIGFzaWRlI21lbnUge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogLTIyMHB4O1xuICAgIHdpZHRoOiAyMjBweDtcbiAgICBoZWlnaHQ6IDEwMHZoO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBmaWx0ZXI6IHdoaXRlO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM3OTg5YTE7XG4gICAgdHJhbnNpdGlvbjogMC4zcztcbiAgICB6LWluZGV4OiAxMDAwO1xuICAgIGZpbGw6IHdoaXRlO1xuICB9XG5cbiAgYXNpZGUjbWVudS5hY3RpdmUge1xuICAgIGxlZnQ6IDA7XG4gIH1cblxuICBtYWluIGFzaWRlIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTJlOGYwO1xuICB9XG5cbiAgcCNhZGROZXdQcm9qZWN0RWwsIHAuaW5ib3gsIHNlbGVjdCNwcm9qZWN0LWRyb3Bkb3duIHtcbiAgICBjb2xvcjogd2hpdGU7XG4gIH1cblxuICBtYWluICNDb250YWluZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICB9XG5cbiAgaGVhZGVyIC5tZW51Q29udHJvbGxlciB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgd2lkdGg6IDQwcHg7XG4gICAgaGVpZ2h0OiA0MHB4O1xuICB9XG5cbiAgaGVhZGVyIC5tZW51Q29udHJvbGxlciBzdmcge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHdpZHRoOiA0MHB4O1xuICAgIGhlaWdodDogNDBweDtcbiAgICBmaWxsOiB3aGl0ZTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICB9XG5cbiAgI3VzZXJsaXN0IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgbWF4LXdpZHRoOiA1NTBweDtcbiAgfVxuXG4gIGRpdi5saXN0Q29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGdhcDogNXB4O1xuICAgIG1heC13aWR0aDogNTE1cHg7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICBib3gtc2hhZG93OiAxcHggMHB4IDNweCAwcHg7XG4gICAgbWFyZ2luOiAxNHB4IDE0cHggMCAxOXB4O1xuICAgIHdvcmQtd3JhcDogYnJlYWstd29yZDtcbiAgICB3b3JkLWJyZWFrOiBicmVhay1hbGw7XG4gICAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcbiAgICBvdmVyZmxvdy13cmFwOiBicmVhay13b3JkO1xuXG4gICAgcGFkZGluZzogMTBweDtcbiAgfVxuXG4gICN1c2VybGlzdCAuaW50aWFsVGV4dERpc3BsYXkge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxuXG4gIC5pbnRpYWxUZXh0RGlzcGxheSBpbWcge1xuICAgIG1heC13aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IGF1dG87XG4gICAgcGFkZGluZzogMThweDtcbiAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xuICAgIG9iamVjdC1maXQ6IGNvbnRhaW47XG4gIH1cblxuICAucG9wVXBDb250YWluZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgbWF4LXdpZHRoOiAyMDBweDtcbiAgICBwYWRkaW5nOiAzMHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMwN2M0ZGQ7XG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XG4gIH1cblxuICAjdXNlcmxpc3QgI2FkZFRvZG9CdG5Db250YWluZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBnYXA6IDVweDtcbiAgICBtYXJnaW46IDI3cHggMCAxMXB4IDI2cHg7XG4gIH1cblxuICAjdGFzayB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGdhcDogNXB4O1xuICAgIG1hcmdpbjogMjdweCAwIDExcHggMjZweDtcbiAgfVxuXG4gICN1c2VybGlzdCAjYWRkVG9kb0J0bkNvbnRhaW5lciBzdmcge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNkYzI2MjY7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIGZpbGw6IHdoaXRlO1xuICB9XG5cbiAgI3VzZXJsaXN0ICNhZGRUb2RvQnRuQ29udGFpbmVyIDpob3ZlciB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxLjA5KTtcbiAgfVxuXG4gICN1c2VybGlzdCAjYWRkVG9kb0J0bkNvbnRhaW5lciBidXR0b24ge1xuICAgIGJvcmRlcjogMDtcbiAgICBmb250LXNpemU6IDEuM3JlbTtcbiAgICBjb2xvcjogI2I5MWMxYztcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmhlcml0O1xuICAgIHRyYW5zaXRpb246IDAuM3M7XG4gIH1cblxuICAjdXNlcmxpc3QgI2FkZFRvZG9CdG5Db250YWluZXIgYnV0dG9uOmhvdmVyIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEuMDkpO1xuICB9XG5cbiAgLmlubmVyX2NvbnRhaW5lciAjZm9ybSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzY0NzQ4YjtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIG1heC1oZWlnaHQ6IDIwMHB4O1xuICAgIG1heC13aWR0aDogNTE1cHggIWltcG9ydGFudDtcbiAgICBoZWlnaHQ6IDE3MHB4O1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgbWF4LXdpZHRoOiA0ODBweDtcbiAgICBtYXJnaW46IDEwcHggMTBweCAwIDEwcHg7XG4gIH1cblxuICBkaXYuaW5wdXROZXdwcm9qZWN0Rm9ybU5hbWUge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2NlZTNlMztcbiAgICBtYXgtd2lkdGg6IDMwMHB4O1xuICAgIG1heC1oZWlnaHQ6IDMwMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgcGFkZGluZzogMjVweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbWFyZ2luOiA2MHB4IDAgMCAwO1xuICAgIGJveC1zaGFkb3c6IDBweCA5cHggM3B4IDBweDtcbiAgfVxuXG4gIC5pbnB1dE5ld3Byb2plY3RGb3JtTmFtZSBoMiB7XG4gICAgbWFyZ2luOiAwIDAgMTBweCAwO1xuICB9XG5cbiAgLmlucHV0TmV3cHJvamVjdEZvcm1OYW1lIC5pbnB1dE5ld1Byb2plY3ROYW1lIHtcbiAgICBtYXgtd2lkdGg6IDMwMHB4O1xuICAgIG1heC1oZWlnaHQ6IDM1cHg7XG4gICAgcGFkZGluZzogMTRweDtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgYm9yZGVyLXJhZGl1czogN3B4O1xuICB9XG5cbiAgaW5wdXQuU2F2ZVByb2plY3ROYW1lIHtcbiAgICBwYWRkaW5nOiA5cHg7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgICBtYXgtd2lkdGg6IDEwMHB4O1xuICAgIGhlaWdodDogNDBweDtcbiAgICBmb250LXNpemU6IDE5cHg7XG4gIH1cblxuICAucHJvamVjdE5hbWVTYXZlckJ0bkNvbnRhaW5lciB7XG4gICAgbWFyZ2luOiAxMHB4IDA7XG4gIH1cblxuICAucHJvamVjdE5hbWVTYXZlckJ0bkNvbnRhaW5lciBidXR0b24ge1xuICAgIHBhZGRpbmc6IDlweDtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xuICAgIHdpZHRoOiAxMDBweDtcbiAgICBoZWlnaHQ6IDQwcHg7XG4gICAgZm9udC1zaXplOiAxOXB4O1xuICB9XG5cbiAgLmlubmVyX2NvbnRhaW5lciAjUHJvamVjdEZvcm0ge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM2NDc0OGI7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICBtYXgtaGVpZ2h0OiAxMzRweDtcbiAgICBtYXgtd2lkdGg6IDUxNXB4O1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgbWF4LXdpZHRoOiA1MDBweDtcbiAgICBtYXJnaW46IDlweCAxMHB4IDAgMjNweDtcbiAgfVxuXG4gIC5wcm9qZWN0Rm9ybURldGFpbHMge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICBoZWlnaHQ6IDgwcHg7XG4gIH1cblxuICBkaXYucHJpb3JpdHlEYXRlT25MYXJnZVNjcmVlbiB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgdG9wOiAwO1xuICAgIG1heC13aWR0aDogMjAwcHg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgfVxuXG4gIC5wcm9qZWN0SW5wdXRDb250YWluZXIge1xuICAgIG1heC13aWR0aDogMjAwcHg7XG4gIH1cblxuICAucHJvamVjdElucHV0Q29udGFpbmVyIHAgaW5wdXQge1xuICAgIG1heC13aWR0aDogMjAwcHg7XG4gIH1cblxuICAuaW5uZXJUYXNrQ29udGFpbmVyIC5lZGl0IHtcbiAgICBtYXgtd2lkdGg6IDE0MHB4O1xuICB9XG5cbiAgLnByb2plY3RJbnB1dENvbnRhaW5lciAuUGRlc2NyaXB0aW9uSW5wdXRDb250YWluZXIge1xuICAgIG1hcmdpbjogMDtcbiAgfVxuXG4gIGlucHV0I1Byb2plY3RkYXRlUGlja2VyIHtcbiAgICBwYWRkaW5nOiAycHg7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBoZWlnaHQ6IDMycHg7XG4gICAgZm9udC1zaXplOiAwLjlyZW07XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICBiYWNrZ3JvdW5kOiAjZDRkNGQ4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxuXG4gIHNlbGVjdCNwcm9qZWN0UHJpb3JpdHkge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM0NDQwM2M7XG4gICAgY29sb3I6ICNmYWZhZmE7XG4gICAgZm9udC1zaXplOiAwLjg1cmVtO1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgaGVpZ2h0OiAzNXB4O1xuICB9XG5cblxuICBkaXYucHJvamVjdEJ1dHRvbnNDb250YWluZXIgYnV0dG9uIHtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgYm9yZGVyLXJhZGl1czogN3B4O1xuICAgIHBhZGRpbmc6IDlweDtcbiAgICBmb250LXNpemU6IDFyZW07XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgfVxuXG5cbiAgZGl2I2NvbmZpZ1ByaW9yaXR5RGF0ZU9uTW9iaWxlIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgbWF4LXdpZHRoOiAyMDBweDtcbiAgICBwb3NpdGlvbjogc3RhdGljO1xuICB9XG5cbiAgI2NvbmZpZ1ByaW9yaXR5RGF0ZU9uTW9iaWxlICNwcmlvcml0eSxcbiAgI2RhdGVQaWNrZXIge1xuICAgIHBhZGRpbmc6IDJweDtcbiAgICBib3JkZXItcmFkaXVzOiA2cHg7XG4gICAgbWF4LXdpZHRoOiAxMDRweDtcbiAgICBtaW4td2lkdGg6IDgwcHg7XG4gIH1cblxuICAjUHJvamVjdEZvcm0gLmZvb3RlciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBwYWRkaW5nOiAwIDEwcHg7XG4gICAgZ2FwOiAwO1xuICB9XG5cbiAgI1Byb2plY3RGb3JtIC5wcm9qZWN0QnV0dG9uc0NvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBwYWRkaW5nOiAwIDEwcHg7XG4gICAgZ2FwOiAwO1xuICB9XG5cbiAgI2Zvcm0gLmZvcm1EZXRhaWxzIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgbWFyZ2luOiAwO1xuICB9XG5cbiAgI2Zvcm1Gb290ZXJPbk1vYmlsZSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBwYWRkaW5nOiAwIDEwcHg7XG4gIH1cblxuICAjZm9ybUZvb3Rlck9uTW9iaWxlIC5idXR0b25zIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHBhZGRpbmc6IDAgMTBweDtcbiAgICBtYXJnaW46IDA7XG4gICAgZ2FwOiAwO1xuICB9XG5cbiAgLnByaW9yaXR5RGF0ZUxhcmdlU2NyZWVuIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIH1cblxuICAjZm9ybSAuaW5wdXRzIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgbWF4LXdpZHRoOiAxNTBweDtcbiAgfVxuXG4gICNmb3JtIC5maXJzdC1pbnB1dENvbnRhaW5lciBpbnB1dCxcbiAgLlB0aXRsZUlucHV0Q29udGFpbmVyIGlucHV0IHtcbiAgICBtYXgtd2lkdGg6IDMwNXB4O1xuICAgIG1heC1oZWlnaHQ6IDQwcHg7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIG91dGxpbmU6IG5vbmU7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIC8qIG1hcmdpbjogMTBweCAwOyAqL1xuICAgIGJhY2tncm91bmQtY29sb3I6IGluaGVyaXQ7XG4gIH1cblxuICAjZm9ybSAuZmlyc3QtaW5wdXRDb250YWluZXIgaW5wdXQsIC5zZWNvbmQtaW5wdXRDb250YWluZXIgaW5wdXQge1xuICAgIG1heC13aWR0aDogMzA1cHg7XG4gICAgbWF4LWhlaWdodDogNDBweDtcbiAgICBtYXJnaW46IDA7XG4gICAgZm9udC1zaXplOiAxLjFyZW07XG4gIH1cblxuICAjZm9ybSAuc2Vjb25kLWlucHV0Q29udGFpbmVyIGlucHV0LFxuICAuUGRlc2NyaXB0aW9uSW5wdXRDb250YWluZXIgaW5wdXQge1xuICAgIG1heC13aWR0aDogMzA3cHg7XG4gICAgbWF4LWhlaWdodDogNDBweDtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgb3V0bGluZTogbm9uZTtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogaW5oZXJpdDtcbiAgICBtYXJnaW46IDA7XG4gIH1cblxuICAjZm9ybSAub3RoZXItb3B0aW9ucy1vbi1mb3JtcyBidXR0b24sXG4gICNjb25maWdQcmlvcml0eURhdGVPbk1vYmlsZSAjcHJpb3JpdHksXG4gICNkYXRlUGlja2VyIHtcbiAgICBwYWRkaW5nOiA0cHg7XG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xuICAgIG1heC13aWR0aDogMTA0cHg7XG4gICAgbWluLXdpZHRoOiA4MHB4O1xuICB9XG59XG5cbkBtZWRpYSAobWluLXdpZHRoOiA1NTFweCkgYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIGJvZHkgbWFpbiB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB9XG5cbiAgbWFpbiBoZWFkZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZGE0YWY7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBnYXA6IDEwcHg7XG4gICAgaGVpZ2h0OiAxMDBweDtcbiAgfVxuXG4gIG1haW4gYXNpZGUge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNlMmU4ZjA7XG4gICAgei1pbmRleDogMjtcbiAgfVxuXG4gIGFzaWRlIHVsLFxuICB1bCBzZWxlY3Qge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAvKiBjb2xvcjogd2hpdGU7ICovXG4gICAgZmlsbDogIzc4MzUwZjtcbiAgfVxuXG4gIGxpLmluYm94IHtcbiAgICBmb250LXNpemU6IDEuNHJlbTtcbiAgICBjb2xvcjogd2hpdGU7XG4gIH1cblxuICBsaSNhZGROZXdQcm9qZWN0RWwge1xuICAgIG1hcmdpbjogMDtcbiAgICBmb250LXNpemU6IDEuM3JlbTtcbiAgICBjb2xvcjogd2hpdGU7XG4gIH1cblxuICBzZWxlY3QjcHJvamVjdC1kcm9wZG93biB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogaW5oZXJpdDtcbiAgfVxuXG4gIG1haW4gI0NvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgei1pbmRleDogMTtcbiAgfVxuXG4gIGhlYWRlciAubWVudUNvbnRyb2xsZXIge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHdpZHRoOiA0MHB4O1xuICAgIGhlaWdodDogNDBweDtcbiAgfVxuXG4gICN0b2dnbGVNZW51SWNvbiB7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIHRvcDogMjBweDtcbiAgICByaWdodDogMjBweDtcbiAgICB3aWR0aDogNTBweDtcbiAgICBoZWlnaHQ6IDUwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzZmOWU5ZTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgICB0cmFuc2l0aW9uOiB0b3AgMC4zcztcbiAgICB6LWluZGV4OiAxMDAwO1xuXG4gICAgei1pbmRleDogMTAwMDtcbiAgfVxuXG4gICN0b2dnbGVNZW51SWNvbjo6YmVmb3JlIHtcbiAgICBjb250ZW50OiBcIlwiO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB3aWR0aDogMjhweDtcbiAgICBoZWlnaHQ6IDJweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNXB4KTtcbiAgICB0cmFuc2l0aW9uOiAwLjJzO1xuICB9XG5cbiAgI3RvZ2dsZU1lbnVJY29uOjphZnRlciB7XG4gICAgY29udGVudDogXCJcIjtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgd2lkdGg6IDI4cHg7XG4gICAgaGVpZ2h0OiAycHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoNXB4KTtcbiAgICB0cmFuc2l0aW9uOiAwLjJzO1xuICB9XG5cbiAgI3RvZ2dsZU1lbnVJY29uLmFjdGl2ZTo6YmVmb3JlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMHB4KSByb3RhdGUoNDVkZWcpO1xuICB9XG5cbiAgI3RvZ2dsZU1lbnVJY29uLmFjdGl2ZTo6YWZ0ZXIge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwcHgpIHJvdGF0ZSgtNDVkZWcpO1xuICB9XG5cbiAgYXNpZGUjbWVudSB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAtMjIwcHg7XG4gICAgd2lkdGg6IDIyMHB4O1xuICAgIGhlaWdodDogMTAwdmg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2JmYzZjNjtcbiAgICB0cmFuc2l0aW9uOiAwLjNzO1xuICB9XG5cbiAgYXNpZGUjbWVudS5hY3RpdmUge1xuICAgIGxlZnQ6IDA7XG4gIH1cblxuICBhc2lkZSB1bCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBmaWxsOiB3aGl0ZTtcbiAgfVxuXG4gIHAjYWRkTmV3UHJvamVjdEVsLCBwLmluYm94LCBzZWxlY3QjcHJvamVjdC1kcm9wZG93biB7XG4gICAgLyogY29sb3I6IHdoaXRlOyAqL1xuXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgfVxuXG4gIGhlYWRlciAubWVudUNvbnRyb2xsZXIgc3ZnIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICB3aWR0aDogNDBweDtcbiAgICBoZWlnaHQ6IDQwcHg7XG4gICAgZmlsbDogd2hpdGU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgfVxuXG4gICN1c2VybGlzdCAjYWRkVG9kb0J0bkNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGdhcDogNXB4O1xuICAgIG1hcmdpbjogMjdweCAwIDExcHggMjZweDtcbiAgfVxuXG4gICN0YXNrIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZ2FwOiA1cHg7XG4gICAgbWFyZ2luOiAyN3B4IDAgMTFweCAyNnB4O1xuICB9XG5cbiAgI3VzZXJsaXN0ICNhZGRUb2RvQnRuQ29udGFpbmVyIHN2ZyB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2RjMjYyNjtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgZmlsbDogd2hpdGU7XG4gIH1cblxuICAjdXNlcmxpc3QgI2FkZFRvZG9CdG5Db250YWluZXIgOmhvdmVyIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEuMDkpO1xuICB9XG5cbiAgI3VzZXJsaXN0ICNhZGRUb2RvQnRuQ29udGFpbmVyIGJ1dHRvbiB7XG4gICAgYm9yZGVyOiAwO1xuICAgIGZvbnQtc2l6ZTogMS40cmVtO1xuXG4gICAgY29sb3I6ICNiOTFjMWM7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogaW5oZXJpdDtcbiAgfVxuXG4gICN1c2VybGlzdCAjYWRkVG9kb0J0bkNvbnRhaW5lciBidXR0b246aG92ZXIge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMS4wOSk7XG4gIH1cblxuICBkaXYubGlzdENvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBnYXA6IDVweDtcbiAgICBtYXgtd2lkdGg6IDcxNHB4O1xuICAgIHdvcmQtd3JhcDogYnJlYWstd29yZDtcbiAgICB3b3JkLWJyZWFrOiBicmVhay1hbGw7XG4gICAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcbiAgICBvdmVyZmxvdy13cmFwOiBicmVhay13b3JkO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgYm94LXNoYWRvdzogMXB4IDBweCAzcHggMHB4O1xuICAgIC8qIG1hcmdpbjogMThweCA2MHB4OyAqL1xuICAgIHBhZGRpbmc6IDE1cHg7XG4gIH1cblxuICAjdXNlcmxpc3QgLmludGlhbFRleHREaXNwbGF5IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH1cblxuICAuaW50aWFsVGV4dERpc3BsYXkgcCB7XG4gICAgbWF4LXdpZHRoOiA1MDBweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIG1heC13aWR0aDogNTAwcHg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBmbGV4LXdyYXA6IHdyYXA7XG4gIH1cblxuICAuaW50aWFsVGV4dERpc3BsYXkgaW1nIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IGF1dG87XG4gICAgcGFkZGluZzogMjBweDtcbiAgICBib3JkZXItcmFkaXVzOiA0MXB4O1xuICAgIG9iamVjdC1maXQ6IGNvbnRhaW47XG4gIH1cblxuICAuaW5uZXJfY29udGFpbmVyICNmb3JtIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjQ3NDhiO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgaGVpZ2h0OiAxNTBweDtcbiAgICBkaXNwbGF5OiBub25lO1xuICAgIG1heC13aWR0aDogNjAwcHg7XG5cbiAgICBtYXJnaW46IDE3cHg7XG4gIH1cblxuICAjZm9ybSBkaXYuZm9ybURldGFpbHMge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIG1hcmdpbjogMDtcbiAgfVxuXG4gIC5wcmlvcml0eURhdGVMYXJnZVNjcmVlbiB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuXG4gICNmb3JtIC5pbnB1dHMge1xuICAgIG1heC13aWR0aDogMTUwcHg7XG4gIH1cblxuICAjZm9ybSAuZmlyc3QtaW5wdXRDb250YWluZXIgaW5wdXQsXG4gIC5QdGl0bGVJbnB1dENvbnRhaW5lciBpbnB1dCxcbiAgI2Zvcm0gLnNlY29uZC1pbnB1dENvbnRhaW5lciBpbnB1dCxcbiAgLlBkZXNjcmlwdGlvbklucHV0Q29udGFpbmVyIGlucHV0IHtcbiAgICBtYXgtd2lkdGg6IDYwMHB4O1xuICAgIGhlaWdodDogMjVweDtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgb3V0bGluZTogbm9uZTtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgbWFyZ2luOiAxMHB4IDAgMCAwO1xuICAgIGJhY2tncm91bmQtY29sb3I6IGluaGVyaXQ7XG4gIH1cblxuICBwLnNlY29uZC1pbnB1dENvbnRhaW5lciB7XG4gICAgbWFyZ2luOiAwO1xuICB9XG5cbiAgI2Zvcm0gLmJ1dHRvbnMge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgbWFyZ2luOiAxcHggMjNweDtcbiAgfVxuXG4gICNjb25maWdQcmlvcml0eURhdGVPbk1vYmlsZSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIHBvc2l0aW9uOiBzdGF0aWM7XG4gIH1cblxuICAjZm9ybSAub3RoZXItb3B0aW9ucy1vbi1mb3JtcyBidXR0b24sXG4gICNwcmlvcml0eSxcbiAgI2RhdGVQaWNrZXIge1xuICAgIHBhZGRpbmc6IDdweDtcbiAgICBib3JkZXItcmFkaXVzOiA5cHg7XG4gIH1cblxuICBmb3JtI1Byb2plY3RGb3JtIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjQ3NDhiO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgaGVpZ2h0OiAxNTBweDtcbiAgICBkaXNwbGF5OiBub25lO1xuICAgIG1heC13aWR0aDogNjkzcHg7XG4gICAgcGFkZGluZy1sZWZ0OiAxcmVtO1xuICAgIG1hcmdpbjogOXB4IDYxcHg7XG4gIH1cblxuICBkaXYucHJvamVjdEZvcm1EZXRhaWxzIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIHRvcDogMDtcbiAgfVxuXG4gICovIC5wcm9qZWN0QnV0dG9uc0NvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgfVxuXG4gIHNlbGVjdCNwcmlvcml0eSB7XG4gICAgcGFkZGluZzogOHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDlweDtcbiAgfVxuXG4gIGlucHV0I2RhdGVQaWNrZXIge1xuICAgIHBhZGRpbmc6IDNweDtcbiAgICBib3JkZXItcmFkaXVzOiA5cHg7XG4gIH1cbn1cblxuXG5AbWVkaWEgKG1pbi13aWR0aDogNzY5cHgpIGFuZCAobWF4LXdpZHRoOiAxMDAwcHgpIHtcbiAgYm9keSBtYWluIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICB9XG5cbiAgbWFpbiBoZWFkZXIge1xuICAgIGdyaWQtYXJlYTogMSAvIDIgLyAyIC8gNjtcblxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZGE0YWY7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBnYXA6IDEwcHg7XG4gIH1cblxuICBtYWluIGFzaWRlIHtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2UyZThmMDtcbiAgfVxuXG4gIG1haW4gI0NvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgei1pbmRleDogMTtcbiAgfVxuXG4gIGhlYWRlciAubWVudUNvbnRyb2xsZXIge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHdpZHRoOiA0MHB4O1xuICAgIGhlaWdodDogNDBweDtcbiAgfVxuXG4gIGhlYWRlciAubWVudUNvbnRyb2xsZXIgc3ZnIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICB3aWR0aDogNDBweDtcbiAgICBoZWlnaHQ6IDQwcHg7XG4gICAgZmlsbDogd2hpdGU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgfVxuXG5cblxuXG4gICN1c2VybGlzdCAuaW50aWFsVGV4dERpc3BsYXkge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH1cblxuICAjdXNlcmxpc3QgLmludGlhbFRleHREaXNwbGF5IHAge1xuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgIG1hcmdpbjogMTBweCAwIDAgMDtcbiAgICBtYXgtd2lkdGg6IDYwMHB4O1xuICB9XG5cbiAgI3VzZXJsaXN0ICNhZGRUb2RvQnRuQ29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZ2FwOiA1cHg7XG4gICAgbWFyZ2luOiAyN3B4IDAgMTFweCAyNnB4O1xuICB9XG5cbiAgI3Rhc2sge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBnYXA6IDVweDtcbiAgICBtYXJnaW46IDI3cHggMCAxMXB4IDI2cHg7XG4gIH1cblxuICAjdXNlcmxpc3QgI2FkZFRvZG9CdG5Db250YWluZXIgc3ZnIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGMyNjI2O1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBmaWxsOiB3aGl0ZTtcbiAgfVxuXG4gICN1c2VybGlzdCAjYWRkVG9kb0J0bkNvbnRhaW5lciA6aG92ZXIge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMS4wOSk7XG4gIH1cblxuICAjdXNlcmxpc3QgI2FkZFRvZG9CdG5Db250YWluZXIgYnV0dG9uIHtcbiAgICBib3JkZXI6IDA7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIGNvbG9yOiAjYjkxYzFjO1xuICAgIGJhY2tncm91bmQtY29sb3I6IGluaGVyaXQ7XG4gIH1cblxuICAjdXNlcmxpc3QgI2FkZFRvZG9CdG5Db250YWluZXIgYnV0dG9uOmhvdmVyIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEuMDkpO1xuICB9XG5cbiAgZGl2Lmxpc3RDb250YWluZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZ2FwOiA1cHg7XG4gICAgbWF4LXdpZHRoOiA3MTRweDtcblxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgYm94LXNoYWRvdzogMXB4IDBweCAzcHggMHB4O1xuICAgIG1hcmdpbjogMThweCA2MHB4O1xuICAgIHBhZGRpbmc6IDE1cHg7XG4gIH1cblxuICAuaW5uZXJfY29udGFpbmVyICNmb3JtIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjQ3NDhiO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgaGVpZ2h0OiAxNTBweDtcbiAgICBkaXNwbGF5OiBub25lO1xuICAgIG1heC13aWR0aDogNzUwcHg7XG5cbiAgICBtYXJnaW46IDE3cHg7XG4gIH1cblxuICAjZm9ybSBkaXYuZm9ybURldGFpbHMge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbiAgICBwYWRkaW5nOiA5cHggMjBweDtcbiAgICBtYXJnaW46IDA7XG4gIH1cblxuICAucHJpb3JpdHlEYXRlTGFyZ2VTY3JlZW4ge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cblxuICAjZm9ybSAuaW5wdXRzIHtcbiAgICBtYXgtd2lkdGg6IDE1MHB4O1xuICB9XG5cbiAgI2Zvcm0gLmZpcnN0LWlucHV0Q29udGFpbmVyIGlucHV0LFxuICAuUHRpdGxlSW5wdXRDb250YWluZXIgaW5wdXQge1xuICAgIG1heC13aWR0aDogNDIwcHg7XG4gICAgbWF4LWhlaWdodDogNjBweDtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgb3V0bGluZTogbm9uZTtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogaW5oZXJpdDtcbiAgICBtYXJnaW46IDA7XG4gIH1cblxuICAjZm9ybSAuc2Vjb25kLWlucHV0Q29udGFpbmVyIGlucHV0LFxuICAuUGRlc2NyaXB0aW9uSW5wdXRDb250YWluZXIgaW5wdXQge1xuICAgIG1heC13aWR0aDogNDIwcHg7XG4gICAgbWF4LWhlaWdodDogNjBweDtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgb3V0bGluZTogbm9uZTtcbiAgICBjb2xvcjogcmdiKDkwLCA3NywgNzcpO1xuICAgIGJhY2tncm91bmQtY29sb3I6IGluaGVyaXQ7XG4gICAgbWFyZ2luOiAwO1xuICB9XG5cbiAgI2Zvcm0gLmJ1dHRvbnMge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIG1hcmdpbjogMXB4IDMzcHg7XG4gIH1cblxuICBmb3JtI1Byb2plY3RGb3JtIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjQ3NDhiO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgaGVpZ2h0OiAxNTBweDtcbiAgICBkaXNwbGF5OiBub25lO1xuICAgIG1heC13aWR0aDogNjkzcHg7XG4gICAgcGFkZGluZy1sZWZ0OiAxcmVtO1xuICAgIG1hcmdpbjogOXB4IDYxcHg7XG4gIH1cblxuICBkaXYucHJvamVjdEZvcm1EZXRhaWxzIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIHRvcDogMDtcbiAgfVxuXG4gIGRpdi5wcmlvcml0eURhdGVPbkxhcmdlU2NyZWVuIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgdG9wOiAwO1xuICB9XG5cbiAgLnByb2plY3RCdXR0b25zQ29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB9XG5cbiAgI2NvbmZpZ1ByaW9yaXR5RGF0ZU9uTW9iaWxlIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgcG9zaXRpb246IHN0YXRpYztcbiAgfVxuXG4gICNmb3JtIC5vdGhlci1vcHRpb25zLW9uLWZvcm1zIGJ1dHRvbixcbiAgI3ByaW9yaXR5LFxuICAjZGF0ZVBpY2tlciB7XG4gICAgcGFkZGluZzogOHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgICBib3JkZXI6IG5vbmU7XG4gIH1cblxuXG59XG5cbm1haW4ge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDI1MHB4IDFmcjtcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxMDBweCA2MTFweDtcbn1cblxuaGVhZGVyIHtcbiAgZ3JpZC1hcmVhOiAxIC8gMiAvIDIgLyA2O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmRhNGFmO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBmb250LXdlaWdodDogNzAwO1xufVxuXG5hc2lkZSB7XG4gIGdyaWQtYXJlYTogMS8gMS8gNC8gMjtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTJlOGYwO1xufVxuXG4uc2lkZUJhckNvbnRlbnRDb250YWluZXIge31cblxuI0NvbnRhaW5lciB7XG4gIGdyaWQtYXJlYTogMiAvIDIgLyAzIC8gNDtcblxuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDEwMHB4IDY1MHB4IG1pbm1heCgxMDBweCwgMzUwcHgpO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG5cbi5pbm5lcl9jb250YWluZXIge1xuICBncmlkLWFyZWE6IDEgLyAyIC8gMyAvIDM7XG59XG5cbi5pbnRpYWxUZXh0RGlzcGxheSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nOiAxMHB4O1xufVxuXG4uaW50aWFsVGV4dERpc3BsYXkgcCB7XG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtd2VpZ2h0OiA4MDA7XG4gIGNvbG9yOiAjNzgzNTBmO1xuICBtYXJnaW46IDEwcHggMCAwIDA7XG59XG5cbi5pbnRpYWxUZXh0RGlzcGxheSBpbWcge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiBhdXRvO1xuICBib3JkZXItcmFkaXVzOiAzMHB4O1xuICBwYWRkaW5nOiAyMHB4O1xufVxuXG4jYWRkVG9kb0J0bkNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5lbXB0eSB7XG4gIGdyaWQtYXJlYTogMSAvIDMgLyA1IC8gNDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y4ZjhmODtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fX30pO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG59XG5cbi5tZW51Q29udHJvbGxlciB7XG4gIGRpc3BsYXk6IG5vbmU7XG4gIHdpZHRoOiA0MHB4O1xuICBoZWlnaHQ6IDQwcHg7XG59XG5cbi5jaGVja0JveCB7XG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcbiAgLW1vei1hcHBlYXJhbmNlOiBub25lO1xuICB3aWR0aDogMjBweDtcbiAgaGVpZ2h0OiAyMHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4uY2hlY2tCb3g6OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNTAlO1xuICBsZWZ0OiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICBmb250LXNpemU6IDE2cHg7XG4gIGNvbG9yOiByZ2IoMjIsIDI1MiwgMjIpO1xuICBvcGFjaXR5OiAwO1xuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuM3MgZWFzZTtcbn1cblxuLmNoZWNrQm94OmhvdmVyOjpiZWZvcmUge1xuICBjb250ZW50OiBcIuKck1wiO1xuICBvcGFjaXR5OiAwLjU7XG59XG5cbnN2ZyB7XG4gIHdpZHRoOiAzNHB4O1xuICBoZWlnaHQ6IDMzcHg7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xuXG59XG5cbiN0YXNrIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiA1cHg7XG4gIG1hcmdpbjogMjdweCAwIDExcHggMjZweDtcbn1cblxuI3Rhc2sgc3ZnIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2RjMjYyNjtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBmaWxsOiB3aGl0ZTtcbn1cblxuI3Rhc2sgOmhvdmVyIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMS4wOSk7XG59XG5cbiN0YXNrIGJ1dHRvbiB7XG4gIGJvcmRlcjogMDtcbiAgZm9udC1zaXplOiAxLjRyZW07XG4gIGNvbG9yOiAjYjkxYzFjO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmhlcml0O1xuICBmb250LXdlaWdodDogNzAwO1xufVxuXG4jdGFzayBidXR0b246aG92ZXIge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxLjA5KTtcbn1cblxuYnV0dG9uLmRlbGV0ZVRhc2sge1xuICBwYWRkaW5nOiAxMHB4O1xuICBib3JkZXI6IG5vbmU7XG4gIGJvcmRlci1yYWRpdXM6IDdweDtcbiAgZm9udC1zaXplOiAxLjFyZW07XG4gIGJhY2tncm91bmQtY29sb3I6ICNlMDQ4N2M7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMnMgZWFzZS1vdXQ7XG59XG5cbmJ1dHRvbi5kZWxldGVUYXNrOmhvdmVyIHtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjA1KTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzRiMDcwNztcblxufVxuXG5idXR0b24uZGVsZXRlVGFzazphY3RpdmUge1xuICB0cmFuc2Zvcm06IHNjYWxlKDAuOSk7XG59XG5cbi5saXN0Q29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZ2FwOiA1cHg7XG4gIG1heC13aWR0aDogNzE0cHg7XG5cbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgYm94LXNoYWRvdzogMXB4IDBweCAzcHggMHB4O1xuICBtYXJnaW46IDE4cHggMThweDtcbiAgcGFkZGluZzogMTVweDtcbn1cblxuLnByaW9yaXR5RGF0ZU9uTGFyZ2VTY3JlZW4ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgbWF4LXdpZHRoOiAyMDBweDtcbn1cblxuLnByb2plY3RCdXR0b25zQ29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBwYWRkaW5nLWlubGluZTogMThweFxufVxuXG4ucHJvamVjdEJ1dHRvbnNDb250YWluZXIgYnV0dG9uIHtcbiAgYm9yZGVyOiBub25lO1xuICBib3JkZXItcmFkaXVzOiA3cHg7XG4gIHBhZGRpbmc6IDlweDtcbiAgZm9udC1zaXplOiAxLjJyZW07XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG5cbi5leGNsdWRlZCB7XG4gIGNvbG9yOiByZWQ7XG59XG5cbi50YXNrQ29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleDogMTtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuXG4udGFza1RpdGxlLFxuLm5ld1Byb2plY3QtdGFzay10aXRsZSxcbi5lZGl0YWJsZVNhdmVUYXNrRWwge1xuICBtYXJnaW46IDA7XG4gIGZvbnQtc2l6ZTogMS4zcmVtO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIHRleHQtZGVjb3JhdGlvbi1jb2xvcjogcmVkO1xufVxuXG4udGFza0Rlc2NyaXB0aW9uLFxuLm5ld1Byb2plY3QtZGVzY3JpcHRpb24ge1xuICBtYXJnaW46IDA7XG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xufVxuXG4udGFza1ByaW9yaXR5IHtcbiAgZm9udC1zaXplOiAxOXB4O1xuICBib3JkZXItcmFkaXVzOiA2cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICM1NzNkM2Q7XG4gIHBhZGRpbmc6IDZweDtcbiAgbWFyZ2luOiAwIDAgN3B4O1xuICBjb2xvcjogd2hpdGU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgd2lkdGg6IDEzMHB4O1xufVxuXG4udGFza1ByaW9yaXR5OmhvdmVyIHtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjA1KTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzljMTUxNTtcbn1cblxuXG4uaW5uZXJUYXNrSGFuZGxlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIG1hcmdpbjogMHB4IDE1cHggMCA0MHB4O1xufVxuXG5hc2lkZSB1bCBsaSB7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDEwcHggMjBweDtcbn1cblxuLmluYm94LWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogNXB4O1xuICBmb250LXNpemU6IDEuM3JlbTtcbn1cblxuXG4uaW5ib3gge1xuICBmb250LXNpemU6IDEuNHJlbTtcbn1cblxuLmluYm94TGlzdENvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGdhcDogNXB4O1xufVxuXG4uaW5ib3hUYXNrQ29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleDogMTtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuXG4uaW5ib3hUYXNrVGl0bGUge1xuICBtYXJnaW46IDA7XG4gIGZvbnQtc2l6ZTogMThweDtcbn1cblxuLmluYm94VGFza0Rlc2NyaXB0aW9uIHtcbiAgbWFyZ2luOiAwO1xuICBmb250LXNpemU6IDE0cHg7XG59XG5cbi5pbmJveFRhc2tQcmlvcml0eSB7XG4gIG1hcmdpbjogMCAyMHB4IDAgMDtcbiAgZm9udC1zaXplOiAxLjNyZW07XG5cbn1cblxuLmR1ZURhdGUge1xuICBtYXJnaW46IDA7XG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xufVxuXG4uZWRpdCB7XG4gIGJvcmRlcjogbm9uZTtcbiAgb3V0bGluZTogbm9uZTtcbiAgZm9udC1zaXplOiAxN3B4O1xuICBtYXgtd2lkdGg6IDExMHB4O1xuICBtYXJnaW46IDAgMDtcbn1cblxuI3Byb2plY3RzIGgzIHtcbiAgbWFyZ2luOiAwIDAgMCAxMHB4O1xufVxuXG4jZm9ybSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM2NDc0OGI7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGhlaWdodDogMTcwcHg7XG4gIGRpc3BsYXk6IG5vbmU7XG4gIHBhZGRpbmctbGVmdDogMXJlbTtcbiAgbWFyZ2luOiAxMHB4IDEwcHggMCAwO1xufVxuXG4uZm9ybURldGFpbHMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIG1hcmdpbjogMTJweCAxNXB4O1xufVxuXG5pbnB1dCNkYXRlUGlja2VyIHtcbiAgbWF4LXdpZHRoOiAxMzNweDtcbn1cblxuLmJ1dHRvbnMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIG1hcmdpbjogMXB4IDMzcHg7XG59XG5cbi5idXR0b25zIGJ1dHRvbiB7XG4gIGJvcmRlcjogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogN3B4O1xuICBwYWRkaW5nOiA3cHg7XG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjJzIGVhc2Utb3V0O1xufVxuXG4uYnV0dG9ucyBidXR0b246aG92ZXIge1xuICB0cmFuc2Zvcm06IHNjYWxlKDEuMDUpO1xufVxuXG4jUHJvamVjdEZvcm0ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjQ3NDhiO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBoZWlnaHQ6IDE2NnB4O1xuICBkaXNwbGF5OiBub25lO1xuICBwYWRkaW5nOiAxMHB4O1xuICBtYXJnaW46IDE1cHggMTVweCAwIDE3cHg7XG59XG5cbi5wcm9qZWN0Rm9ybURldGFpbHMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIHBhZGRpbmctbGVmdDogMXJlbTtcbiAgdG9wOiAwO1xufVxuXG4uZmlyc3QtaW5wdXRDb250YWluZXIgaW5wdXQsXG4uUHRpdGxlSW5wdXRDb250YWluZXIgaW5wdXQge1xuICBtYXgtd2lkdGg6IDYwMHB4O1xuICBoZWlnaHQ6IDM3cHg7XG4gIGJvcmRlcjogbm9uZTtcbiAgb3V0bGluZTogbm9uZTtcbiAgY29sb3I6IHdoaXRlO1xuICBtYXJnaW46IDEwcHggMCAwIDA7XG4gIGJhY2tncm91bmQtY29sb3I6IGluaGVyaXQ7XG59XG5cbi50YXNrLXRpdGxlLFxuLmRlc2NyaXB0aW9uIHtcbiAgd2lkdGg6IDM1MHB4O1xuICBmb250LXNpemU6IDEuMXJlbTtcblxufVxuXG4uZmlyc3QtaW5wdXRDb250YWluZXIgaW5wdXQ6OnBsYWNlaG9sZGVyLFxuLlB0aXRsZUlucHV0Q29udGFpbmVyIGlucHV0OjpwbGFjZWhvbGRlciB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgcGFkZGluZzogMCAxMHB4O1xuICBvcGFjaXR5OiAxO1xufVxuXG4uc2Vjb25kLWlucHV0Q29udGFpbmVyIGlucHV0LFxuLlBkZXNjcmlwdGlvbklucHV0Q29udGFpbmVyIGlucHV0IHtcbiAgbWF4LXdpZHRoOiA2MDBweDtcbiAgaGVpZ2h0OiAzN3B4O1xuICBib3JkZXI6IG5vbmU7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogaW5oZXJpdDtcbiAgbWFyZ2luOiAwO1xufVxuXG4ucFRpdGxlLCAucERlc2NyaXB0aW9uIHtcbiAgd2lkdGg6IDM1MHB4O1xuICBmb250LXNpemU6IDEuMDdyZW07XG59XG5cbi5zZWNvbmQtaW5wdXRDb250YWluZXIgaW5wdXQ6OnBsYWNlaG9sZGVyLFxuLlBkZXNjcmlwdGlvbklucHV0Q29udGFpbmVyIGlucHV0OjpwbGFjZWhvbGRlciB7XG4gIHBhZGRpbmc6IDAgMTBweDtcbiAgY29sb3I6IHdoaXRlO1xuICBvcGFjaXR5OiAxO1xufVxuXG4uZmlyc3QtaW5wdXRDb250YWluZXIsXG4uc2Vjb25kLWlucHV0Q29udGFpbmVyIHtcbiAgbWFyZ2luOiAxMHB4IDAgMCAwO1xuICBmb250LXNpemU6IDFyZW07XG59XG5cbi5zdWJtaXRCdG46YWN0aXZlIHtcbiAgdHJhbnNmb3JtOiBhY3RpdmUgc2NhbGUoMS4xKTtcbn1cblxuLm90aGVyLW9wdGlvbnMtb24tZm9ybXMgYnV0dG9uLFxuI3ByaW9yaXR5LFxuaW5wdXQjZGF0ZVBpY2tlciB7XG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjNzIGVhc2UtaW47XG4gIHBhZGRpbmc6IDdweDtcbiAgYm9yZGVyLXJhZGl1czogN3B4O1xuICBib3JkZXI6IG5vbmU7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwODMzNDQ7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC1zaXplOiAxLjFyZW07XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG5cbiNwcmlvcml0eSB7XG4gIG1hcmdpbjogMTBweCAwIDhweCAwO1xufVxuXG4jcHJvamVjdFByaW9yaXR5LFxuLmZvb3RlciB7XG4gIHBhZGRpbmc6IDdweDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBtYXJnaW46IDAgNHB4IDVweCAwO1xuXG59XG5cblxuXG4jcHJvamVjdFByaW9yaXR5LCAjcHJvamVjdFByaW9yaXR5IG9wdGlvbiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM0NDQwM2M7XG4gIGNvbG9yOiAjZmFmYWZhO1xuICBmb250LXNpemU6IDEuMnJlbTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cblxuXG5cbi5hZGRQcm9qZWN0c0NvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG5cbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiAxMHB4O1xufVxuXG4uaW5ib3gtY29udGFpbmVyOmhvdmVyLCAuYWRkUHJvamVjdHNDb250YWluZXI6aG92ZXIsIC5wcm9qZWN0X3RleHQ6aG92ZXIsICNwcm9qZWN0LWRyb3Bkb3duOmhvdmVyIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMS4wNSk7XG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xufVxuXG5cbi5hZGRQcm9qZWN0c0NvbnRhaW5lciBzdmcge1xuICB3aWR0aDogMjVweDtcbiAgaGVpZ2h0OiAyNXB4O1xufVxuXG4jYWRkTmV3UHJvamVjdEVsIHtcbiAgbWFyZ2luOiAwO1xuICBmb250LXNpemU6IDEuM3JlbTtcbn1cblxuLnByb2plY3RfdGV4dCB7XG4gIG1hcmdpbjogMCAwIDEwcHggMTdweDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xuICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcbiAgcGFkZGluZzogOXB4O1xuICBib3JkZXItcmFkaXVzOiA1cHggMHB4IDBweCA1cHg7XG59XG5cblxuI3Byb2plY3QtZHJvcGRvd24ge1xuICBib3JkZXI6IDA7XG4gIGJhY2tncm91bmQtY29sb3I6IGluaGVyaXQ7XG4gIGZvbnQtc2l6ZTogMS4zcmVtO1xuICBmb250LXdlaWdodDogNTUwO1xuICBtYXgtd2lkdGg6IDE2MHB4O1xufVxuXG5cbiNwcm9qZWN0LWRyb3Bkb3duOmZvY3VzIHtcbiAgYm9yZGVyOiBub25lO1xuICBvdXRsaW5lOiBub25lO1xufVxuXG4jbmV3UHJvamVjdHNGb3JtQ29udGFpbmVyRWwge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1pdGVtczogY2VudGVyO1xufVxuXG4jUHJvamVjdHNGb3JtTmFtZUNvbnRhaW5lckVsIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcbn1cblxuLmlucHV0TmV3cHJvamVjdEZvcm1OYW1lIHtcbiAgZGlzcGxheTogbm9uZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2NlZTNlMztcbiAgbWF4LXdpZHRoOiA0MDBweDtcbiAgbWF4LWhlaWdodDogMzAwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIHBhZGRpbmc6IDQ2cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luOiA2MHB4IDAgMCAwO1xuICBib3gtc2hhZG93OiAwcHggOXB4IDNweCAwcHg7XG59XG5cbi5pbnB1dE5ld3Byb2plY3RGb3JtTmFtZSBoMiB7XG4gIG1hcmdpbjogMCAwIDEwcHggMDtcbn1cblxuLmlucHV0TmV3UHJvamVjdE5hbWUge1xuICBtYXgtd2lkdGg6IDM1MHB4O1xuICBtYXgtaGVpZ2h0OiAzNXB4O1xuICBwYWRkaW5nOiAxN3B4O1xuICBib3JkZXI6IG5vbmU7XG4gIGJvcmRlci1yYWRpdXM6IDdweDtcbiAgZm9udC1zaXplOiAxOXB4O1xufVxuXG5pbnB1dC5TYXZlUHJvamVjdE5hbWUge1xuICBwYWRkaW5nOiA5cHg7XG4gIGJvcmRlcjogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xuICBtYXgtd2lkdGg6IDEwMHB4O1xuICBoZWlnaHQ6IDQwcHg7XG4gIGZvbnQtc2l6ZTogMTlweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0MCwgNTksIDEzNCk7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLnByb2plY3ROYW1lU2F2ZXJCdG5Db250YWluZXIge1xuICBtYXJnaW46IDEwcHggMDtcbn1cblxuLnByb2plY3ROYW1lU2F2ZXJCdG5Db250YWluZXIgYnV0dG9uIHtcbiAgcGFkZGluZzogOXB4O1xuICBib3JkZXI6IG5vbmU7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgd2lkdGg6IDEwMHB4O1xuICBoZWlnaHQ6IDQwcHg7XG4gIGZvbnQtc2l6ZTogMTlweDtcbn1cblxuI1Byb2plY3RzRm9ybU5hbWVDb250YWluZXJFbCAuQ2FuY2VsIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JleTtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4jbmV3UHJvamVjdFRhc2tzQ29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbiNuZXdQcm9qZWN0VGFza0J0bldyYXBwZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuI25ld1Byb2plY3RUYXNrc0lubmVyQ29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogNXB4O1xuICBtYXJnaW46IDEwcHg7XG4gIGJveC1zaGFkb3c6ICM1YzU1NTUgMXB4IDNweCAzcHggMXB4O1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBwYWRkaW5nOiAxMHB4O1xuICB3aWR0aDogOTVweDtcblxufVxuXG5zdmcuYWRkVGFzayB7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgZmlsbDogd2hlYXQ7XG4gIGJhY2tncm91bmQtY29sb3I6IHJlZDtcbn1cblxuLm5ld1Byb2plY3RBZGRCdG4ge1xuICBib3JkZXI6IDA7XG4gIGJhY2tncm91bmQtY29sb3I6IGluaGVyaXQ7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG5cbiNQcm9qZWN0ZGF0ZVBpY2tlciB7XG4gIHBhZGRpbmc6IDJweDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBib3JkZXI6IG5vbmU7XG4gIGhlaWdodDogMzJweDtcbiAgcGFkZGluZzogMnB4O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGJvcmRlcjogbm9uZTtcbiAgaGVpZ2h0OiAzMnB4O1xuICBmb250LXNpemU6IDEuMXJlbTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgYmFja2dyb3VuZDogI2Q0ZDRkODtcbiAgLyogY29sb3I6ICNmOGZhZmM7ICovXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuI1Byb2plY3RkYXRlUGlja2VyIGlucHV0W3R5cGU9J2RhdGUnXSB7XG4gIGZpbGw6IHdoaXRlO1xufVxuXG4jc3VibWl0QnRuRm9yUHJvamVjdCB7XG4gIHBhZGRpbmc6IDdweDtcbiAgYm9yZGVyLXJhZGl1czogOXB4O1xuICAvKiBmb250LXNpemU6IDEuMnJlbTtcbiAgZm9udC13ZWlnaHQ6IDYwMDsgKi9cbn1cblxuI3N1Ym1pdEJ0bkZvclByb2plY3Q6YWN0aXZlIHtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xufVxuXG4uY2FuY2VsRm9yUHJvamVjdEJ0biB7XG4gIHBhZGRpbmc6IDdweDtcbiAgYm9yZGVyLXJhZGl1czogOXB4O1xufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxVQUFVO0VBQ1YsU0FBUztFQUNULHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLHNCQUFzQjtFQUN0QiwyQkFBMkI7QUFDN0I7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsU0FBUztFQUNULHNCQUFzQjtFQUN0QixjQUFjO0VBQ2QsaUNBQWlDO0VBQ2pDLGdCQUFnQjtFQUNoQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRTtJQUNFLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsdUJBQXVCO0lBQ3ZCLFVBQVU7RUFDWjs7RUFFQTtJQUNFLHlCQUF5QjtJQUN6QixrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQix1QkFBdUI7SUFDdkIsU0FBUztFQUNYOztFQUVBO0lBQ0UsZUFBZTtJQUNmLFVBQVU7SUFDVixXQUFXO0lBQ1gsV0FBVztJQUNYLFlBQVk7SUFDWjs7O2tCQUdjO0lBQ2QseUJBQXlCO0lBQ3pCLGVBQWU7SUFDZixhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsb0JBQW9COztJQUVwQixhQUFhO0VBQ2Y7O0VBRUE7SUFDRSxnQkFBZ0I7SUFDaEIsYUFBYTtFQUNmOztFQUVBO0lBQ0UsV0FBVztJQUNYLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsV0FBVztJQUNYLHNCQUFzQjtJQUN0QiwyQkFBMkI7SUFDM0IsZ0JBQWdCO0VBQ2xCOztFQUVBO0lBQ0UsV0FBVztJQUNYLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsV0FBVztJQUNYLHNCQUFzQjtJQUN0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QixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsUUFBUTtFQUNSLFlBQVk7RUFDWixtQ0FBbUM7RUFDbkMsbUJBQW1CO0VBQ25CLGFBQWE7RUFDYixXQUFXOztBQUViOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxTQUFTO0VBQ1QseUJBQXlCO0VBQ3pCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLFlBQVk7RUFDWixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLGdCQUFnQjtFQUNoQixtQkFBbUI7RUFDbkIsb0JBQW9CO0VBQ3BCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLFdBQVc7QUFDYjs7QUFFQTtFQUNFLFlBQVk7RUFDWixrQkFBa0I7RUFDbEI7cUJBQ21CO0FBQ3JCOztBQUVBO0VBQ0UscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGtCQUFrQjtBQUNwQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJib2R5IHtcXG4gIHBhZGRpbmc6IDA7XFxuICBtYXJnaW46IDA7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG46cm9vdCB7XFxuICAtLWhvdmVyLWNvbG9yOiAjZmRhNGFmO1xcbiAgLS1iYWNrZ3JvdW5kLWNvbG9yOiAjNmY5ZTllO1xcbn1cXG5cXG4qIHtcXG4gIHBhZGRpbmc6IDA7XFxuICBtYXJnaW46IDA7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgY29sb3I6ICM3ODM1MGY7XFxuICBmb250LWZhbWlseTogXFxcIlJvYm90b1xcXCIsIHNhbnMtc2VyaWY7XFxuICBmb250LXdlaWdodDogNDAwO1xcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcbn1cXG5cXG5AbWVkaWEgKG1heC13aWR0aDogNTUwcHgpIHtcXG4gIGJvZHkgbWFpbiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICB6LWluZGV4OiAxO1xcbiAgfVxcblxcbiAgbWFpbiBoZWFkZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmRhNGFmO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBnYXA6IDEwcHg7XFxuICB9XFxuXFxuICAjdG9nZ2xlTWVudUljb24ge1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIHRvcDogMTAwcHg7XFxuICAgIHJpZ2h0OiAxMHB4O1xcbiAgICB3aWR0aDogNTBweDtcXG4gICAgaGVpZ2h0OiA1MHB4O1xcbiAgICAvKiBcXG4gICAgdG9wOiAxMDZweDtcXG4gICAgcmlnaHQ6IDEwcHg7XFxuICAgIHdpZHRoOiA1MHB4OyAqL1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNmI4ODg4O1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XFxuICAgIHRyYW5zaXRpb246IHRvcCAwLjNzO1xcblxcbiAgICB6LWluZGV4OiAxMDAwO1xcbiAgfVxcblxcbiAgaDEuaGVhZGVyVGV4dENvbnRlbnQge1xcbiAgICBmb250LXdlaWdodDogNjAwO1xcbiAgICBwYWRkaW5nOiAzMHB4O1xcbiAgfVxcblxcbiAgI3RvZ2dsZU1lbnVJY29uOjpiZWZvcmUge1xcbiAgICBjb250ZW50OiBcXFwiXFxcIjtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB3aWR0aDogMjhweDtcXG4gICAgaGVpZ2h0OiAycHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNXB4KTtcXG4gICAgdHJhbnNpdGlvbjogMC4ycztcXG4gIH1cXG5cXG4gICN0b2dnbGVNZW51SWNvbjo6YWZ0ZXIge1xcbiAgICBjb250ZW50OiBcXFwiXFxcIjtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB3aWR0aDogMjhweDtcXG4gICAgaGVpZ2h0OiAycHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSg1cHgpO1xcbiAgICB0cmFuc2l0aW9uOiAwLjJzO1xcbiAgfVxcblxcbiAgI3RvZ2dsZU1lbnVJY29uLmFjdGl2ZTo6YmVmb3JlIHtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDBweCkgcm90YXRlKDQ1ZGVnKTtcXG4gIH1cXG5cXG4gICN0b2dnbGVNZW51SWNvbi5hY3RpdmU6OmFmdGVyIHtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDBweCkgcm90YXRlKC00NWRlZyk7XFxuICB9XFxuXFxuICBhc2lkZSNtZW51IHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgdG9wOiAwO1xcbiAgICBsZWZ0OiAtMjIwcHg7XFxuICAgIHdpZHRoOiAyMjBweDtcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBmaWx0ZXI6IHdoaXRlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNzk4OWExO1xcbiAgICB0cmFuc2l0aW9uOiAwLjNzO1xcbiAgICB6LWluZGV4OiAxMDAwO1xcbiAgICBmaWxsOiB3aGl0ZTtcXG4gIH1cXG5cXG4gIGFzaWRlI21lbnUuYWN0aXZlIHtcXG4gICAgbGVmdDogMDtcXG4gIH1cXG5cXG4gIG1haW4gYXNpZGUge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlMmU4ZjA7XFxuICB9XFxuXFxuICBwI2FkZE5ld1Byb2plY3RFbCwgcC5pbmJveCwgc2VsZWN0I3Byb2plY3QtZHJvcGRvd24ge1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICB9XFxuXFxuICBtYWluICNDb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBmbGV4LXdyYXA6IHdyYXA7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIH1cXG5cXG4gIGhlYWRlciAubWVudUNvbnRyb2xsZXIge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgd2lkdGg6IDQwcHg7XFxuICAgIGhlaWdodDogNDBweDtcXG4gIH1cXG5cXG4gIGhlYWRlciAubWVudUNvbnRyb2xsZXIgc3ZnIHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIHdpZHRoOiA0MHB4O1xcbiAgICBoZWlnaHQ6IDQwcHg7XFxuICAgIGZpbGw6IHdoaXRlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIH1cXG5cXG4gICN1c2VybGlzdCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIG1heC13aWR0aDogNTUwcHg7XFxuICB9XFxuXFxuICBkaXYubGlzdENvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDogNXB4O1xcbiAgICBtYXgtd2lkdGg6IDUxNXB4O1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICBib3gtc2hhZG93OiAxcHggMHB4IDNweCAwcHg7XFxuICAgIG1hcmdpbjogMTRweCAxNHB4IDAgMTlweDtcXG4gICAgd29yZC13cmFwOiBicmVhay13b3JkO1xcbiAgICB3b3JkLWJyZWFrOiBicmVhay1hbGw7XFxuICAgIHdoaXRlLXNwYWNlOiBub3JtYWw7XFxuICAgIG92ZXJmbG93LXdyYXA6IGJyZWFrLXdvcmQ7XFxuXFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICB9XFxuXFxuICAjdXNlcmxpc3QgLmludGlhbFRleHREaXNwbGF5IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIH1cXG5cXG4gIC5pbnRpYWxUZXh0RGlzcGxheSBpbWcge1xcbiAgICBtYXgtd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogYXV0bztcXG4gICAgcGFkZGluZzogMThweDtcXG4gICAgYm9yZGVyLXJhZGl1czogMzBweDtcXG4gICAgb2JqZWN0LWZpdDogY29udGFpbjtcXG4gIH1cXG5cXG4gIC5wb3BVcENvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIG1heC13aWR0aDogMjAwcHg7XFxuICAgIHBhZGRpbmc6IDMwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwN2M0ZGQ7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbiAgfVxcblxcbiAgI3VzZXJsaXN0ICNhZGRUb2RvQnRuQ29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiA1cHg7XFxuICAgIG1hcmdpbjogMjdweCAwIDExcHggMjZweDtcXG4gIH1cXG5cXG4gICN0YXNrIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiA1cHg7XFxuICAgIG1hcmdpbjogMjdweCAwIDExcHggMjZweDtcXG4gIH1cXG5cXG4gICN1c2VybGlzdCAjYWRkVG9kb0J0bkNvbnRhaW5lciBzdmcge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGMyNjI2O1xcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICAgIGZpbGw6IHdoaXRlO1xcbiAgfVxcblxcbiAgI3VzZXJsaXN0ICNhZGRUb2RvQnRuQ29udGFpbmVyIDpob3ZlciB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEuMDkpO1xcbiAgfVxcblxcbiAgI3VzZXJsaXN0ICNhZGRUb2RvQnRuQ29udGFpbmVyIGJ1dHRvbiB7XFxuICAgIGJvcmRlcjogMDtcXG4gICAgZm9udC1zaXplOiAxLjNyZW07XFxuICAgIGNvbG9yOiAjYjkxYzFjO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmhlcml0O1xcbiAgICB0cmFuc2l0aW9uOiAwLjNzO1xcbiAgfVxcblxcbiAgI3VzZXJsaXN0ICNhZGRUb2RvQnRuQ29udGFpbmVyIGJ1dHRvbjpob3ZlciB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEuMDkpO1xcbiAgfVxcblxcbiAgLmlubmVyX2NvbnRhaW5lciAjZm9ybSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM2NDc0OGI7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIG1heC1oZWlnaHQ6IDIwMHB4O1xcbiAgICBtYXgtd2lkdGg6IDUxNXB4ICFpbXBvcnRhbnQ7XFxuICAgIGhlaWdodDogMTcwcHg7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIG1heC13aWR0aDogNDgwcHg7XFxuICAgIG1hcmdpbjogMTBweCAxMHB4IDAgMTBweDtcXG4gIH1cXG5cXG4gIGRpdi5pbnB1dE5ld3Byb2plY3RGb3JtTmFtZSB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNjZWUzZTM7XFxuICAgIG1heC13aWR0aDogMzAwcHg7XFxuICAgIG1heC1oZWlnaHQ6IDMwMHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICBwYWRkaW5nOiAyNXB4O1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIG1hcmdpbjogNjBweCAwIDAgMDtcXG4gICAgYm94LXNoYWRvdzogMHB4IDlweCAzcHggMHB4O1xcbiAgfVxcblxcbiAgLmlucHV0TmV3cHJvamVjdEZvcm1OYW1lIGgyIHtcXG4gICAgbWFyZ2luOiAwIDAgMTBweCAwO1xcbiAgfVxcblxcbiAgLmlucHV0TmV3cHJvamVjdEZvcm1OYW1lIC5pbnB1dE5ld1Byb2plY3ROYW1lIHtcXG4gICAgbWF4LXdpZHRoOiAzMDBweDtcXG4gICAgbWF4LWhlaWdodDogMzVweDtcXG4gICAgcGFkZGluZzogMTRweDtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBib3JkZXItcmFkaXVzOiA3cHg7XFxuICB9XFxuXFxuICBpbnB1dC5TYXZlUHJvamVjdE5hbWUge1xcbiAgICBwYWRkaW5nOiA5cHg7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xcbiAgICBtYXgtd2lkdGg6IDEwMHB4O1xcbiAgICBoZWlnaHQ6IDQwcHg7XFxuICAgIGZvbnQtc2l6ZTogMTlweDtcXG4gIH1cXG5cXG4gIC5wcm9qZWN0TmFtZVNhdmVyQnRuQ29udGFpbmVyIHtcXG4gICAgbWFyZ2luOiAxMHB4IDA7XFxuICB9XFxuXFxuICAucHJvamVjdE5hbWVTYXZlckJ0bkNvbnRhaW5lciBidXR0b24ge1xcbiAgICBwYWRkaW5nOiA5cHg7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xcbiAgICB3aWR0aDogMTAwcHg7XFxuICAgIGhlaWdodDogNDBweDtcXG4gICAgZm9udC1zaXplOiAxOXB4O1xcbiAgfVxcblxcbiAgLmlubmVyX2NvbnRhaW5lciAjUHJvamVjdEZvcm0ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjQ3NDhiO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICBtYXgtaGVpZ2h0OiAxMzRweDtcXG4gICAgbWF4LXdpZHRoOiA1MTVweDtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gICAgbWF4LXdpZHRoOiA1MDBweDtcXG4gICAgbWFyZ2luOiA5cHggMTBweCAwIDIzcHg7XFxuICB9XFxuXFxuICAucHJvamVjdEZvcm1EZXRhaWxzIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICBoZWlnaHQ6IDgwcHg7XFxuICB9XFxuXFxuICBkaXYucHJpb3JpdHlEYXRlT25MYXJnZVNjcmVlbiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgdG9wOiAwO1xcbiAgICBtYXgtd2lkdGg6IDIwMHB4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgfVxcblxcbiAgLnByb2plY3RJbnB1dENvbnRhaW5lciB7XFxuICAgIG1heC13aWR0aDogMjAwcHg7XFxuICB9XFxuXFxuICAucHJvamVjdElucHV0Q29udGFpbmVyIHAgaW5wdXQge1xcbiAgICBtYXgtd2lkdGg6IDIwMHB4O1xcbiAgfVxcblxcbiAgLmlubmVyVGFza0NvbnRhaW5lciAuZWRpdCB7XFxuICAgIG1heC13aWR0aDogMTQwcHg7XFxuICB9XFxuXFxuICAucHJvamVjdElucHV0Q29udGFpbmVyIC5QZGVzY3JpcHRpb25JbnB1dENvbnRhaW5lciB7XFxuICAgIG1hcmdpbjogMDtcXG4gIH1cXG5cXG4gIGlucHV0I1Byb2plY3RkYXRlUGlja2VyIHtcXG4gICAgcGFkZGluZzogMnB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgaGVpZ2h0OiAzMnB4O1xcbiAgICBmb250LXNpemU6IDAuOXJlbTtcXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gICAgYmFja2dyb3VuZDogI2Q0ZDRkODtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgfVxcblxcbiAgc2VsZWN0I3Byb2plY3RQcmlvcml0eSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM0NDQwM2M7XFxuICAgIGNvbG9yOiAjZmFmYWZhO1xcbiAgICBmb250LXNpemU6IDAuODVyZW07XFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICAgIGhlaWdodDogMzVweDtcXG4gIH1cXG5cXG5cXG4gIGRpdi5wcm9qZWN0QnV0dG9uc0NvbnRhaW5lciBidXR0b24ge1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDdweDtcXG4gICAgcGFkZGluZzogOXB4O1xcbiAgICBmb250LXNpemU6IDFyZW07XFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICB9XFxuXFxuXFxuICBkaXYjY29uZmlnUHJpb3JpdHlEYXRlT25Nb2JpbGUge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBtYXgtd2lkdGg6IDIwMHB4O1xcbiAgICBwb3NpdGlvbjogc3RhdGljO1xcbiAgfVxcblxcbiAgI2NvbmZpZ1ByaW9yaXR5RGF0ZU9uTW9iaWxlICNwcmlvcml0eSxcXG4gICNkYXRlUGlja2VyIHtcXG4gICAgcGFkZGluZzogMnB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA2cHg7XFxuICAgIG1heC13aWR0aDogMTA0cHg7XFxuICAgIG1pbi13aWR0aDogODBweDtcXG4gIH1cXG5cXG4gICNQcm9qZWN0Rm9ybSAuZm9vdGVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBwYWRkaW5nOiAwIDEwcHg7XFxuICAgIGdhcDogMDtcXG4gIH1cXG5cXG4gICNQcm9qZWN0Rm9ybSAucHJvamVjdEJ1dHRvbnNDb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHBhZGRpbmc6IDAgMTBweDtcXG4gICAgZ2FwOiAwO1xcbiAgfVxcblxcbiAgI2Zvcm0gLmZvcm1EZXRhaWxzIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICBtYXJnaW46IDA7XFxuICB9XFxuXFxuICAjZm9ybUZvb3Rlck9uTW9iaWxlIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBwYWRkaW5nOiAwIDEwcHg7XFxuICB9XFxuXFxuICAjZm9ybUZvb3Rlck9uTW9iaWxlIC5idXR0b25zIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBwYWRkaW5nOiAwIDEwcHg7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgZ2FwOiAwO1xcbiAgfVxcblxcbiAgLnByaW9yaXR5RGF0ZUxhcmdlU2NyZWVuIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIH1cXG5cXG4gICNmb3JtIC5pbnB1dHMge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBtYXgtd2lkdGg6IDE1MHB4O1xcbiAgfVxcblxcbiAgI2Zvcm0gLmZpcnN0LWlucHV0Q29udGFpbmVyIGlucHV0LFxcbiAgLlB0aXRsZUlucHV0Q29udGFpbmVyIGlucHV0IHtcXG4gICAgbWF4LXdpZHRoOiAzMDVweDtcXG4gICAgbWF4LWhlaWdodDogNDBweDtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBvdXRsaW5lOiBub25lO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIC8qIG1hcmdpbjogMTBweCAwOyAqL1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmhlcml0O1xcbiAgfVxcblxcbiAgI2Zvcm0gLmZpcnN0LWlucHV0Q29udGFpbmVyIGlucHV0LCAuc2Vjb25kLWlucHV0Q29udGFpbmVyIGlucHV0IHtcXG4gICAgbWF4LXdpZHRoOiAzMDVweDtcXG4gICAgbWF4LWhlaWdodDogNDBweDtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBmb250LXNpemU6IDEuMXJlbTtcXG4gIH1cXG5cXG4gICNmb3JtIC5zZWNvbmQtaW5wdXRDb250YWluZXIgaW5wdXQsXFxuICAuUGRlc2NyaXB0aW9uSW5wdXRDb250YWluZXIgaW5wdXQge1xcbiAgICBtYXgtd2lkdGg6IDMwN3B4O1xcbiAgICBtYXgtaGVpZ2h0OiA0MHB4O1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIG91dGxpbmU6IG5vbmU7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogaW5oZXJpdDtcXG4gICAgbWFyZ2luOiAwO1xcbiAgfVxcblxcbiAgI2Zvcm0gLm90aGVyLW9wdGlvbnMtb24tZm9ybXMgYnV0dG9uLFxcbiAgI2NvbmZpZ1ByaW9yaXR5RGF0ZU9uTW9iaWxlICNwcmlvcml0eSxcXG4gICNkYXRlUGlja2VyIHtcXG4gICAgcGFkZGluZzogNHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA2cHg7XFxuICAgIG1heC13aWR0aDogMTA0cHg7XFxuICAgIG1pbi13aWR0aDogODBweDtcXG4gIH1cXG59XFxuXFxuQG1lZGlhIChtaW4td2lkdGg6IDU1MXB4KSBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcXG4gIGJvZHkgbWFpbiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgfVxcblxcbiAgbWFpbiBoZWFkZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmRhNGFmO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBnYXA6IDEwcHg7XFxuICAgIGhlaWdodDogMTAwcHg7XFxuICB9XFxuXFxuICBtYWluIGFzaWRlIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTJlOGYwO1xcbiAgICB6LWluZGV4OiAyO1xcbiAgfVxcblxcbiAgYXNpZGUgdWwsXFxuICB1bCBzZWxlY3Qge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICAvKiBjb2xvcjogd2hpdGU7ICovXFxuICAgIGZpbGw6ICM3ODM1MGY7XFxuICB9XFxuXFxuICBsaS5pbmJveCB7XFxuICAgIGZvbnQtc2l6ZTogMS40cmVtO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICB9XFxuXFxuICBsaSNhZGROZXdQcm9qZWN0RWwge1xcbiAgICBtYXJnaW46IDA7XFxuICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICB9XFxuXFxuICBzZWxlY3QjcHJvamVjdC1kcm9wZG93biB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGluaGVyaXQ7XFxuICB9XFxuXFxuICBtYWluICNDb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBmbGV4LXdyYXA6IHdyYXA7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgei1pbmRleDogMTtcXG4gIH1cXG5cXG4gIGhlYWRlciAubWVudUNvbnRyb2xsZXIge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgd2lkdGg6IDQwcHg7XFxuICAgIGhlaWdodDogNDBweDtcXG4gIH1cXG5cXG4gICN0b2dnbGVNZW51SWNvbiB7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgdG9wOiAyMHB4O1xcbiAgICByaWdodDogMjBweDtcXG4gICAgd2lkdGg6IDUwcHg7XFxuICAgIGhlaWdodDogNTBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzZmOWU5ZTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xcbiAgICB0cmFuc2l0aW9uOiB0b3AgMC4zcztcXG4gICAgei1pbmRleDogMTAwMDtcXG5cXG4gICAgei1pbmRleDogMTAwMDtcXG4gIH1cXG5cXG4gICN0b2dnbGVNZW51SWNvbjo6YmVmb3JlIHtcXG4gICAgY29udGVudDogXFxcIlxcXCI7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgd2lkdGg6IDI4cHg7XFxuICAgIGhlaWdodDogMnB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTVweCk7XFxuICAgIHRyYW5zaXRpb246IDAuMnM7XFxuICB9XFxuXFxuICAjdG9nZ2xlTWVudUljb246OmFmdGVyIHtcXG4gICAgY29udGVudDogXFxcIlxcXCI7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgd2lkdGg6IDI4cHg7XFxuICAgIGhlaWdodDogMnB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoNXB4KTtcXG4gICAgdHJhbnNpdGlvbjogMC4ycztcXG4gIH1cXG5cXG4gICN0b2dnbGVNZW51SWNvbi5hY3RpdmU6OmJlZm9yZSB7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwcHgpIHJvdGF0ZSg0NWRlZyk7XFxuICB9XFxuXFxuICAjdG9nZ2xlTWVudUljb24uYWN0aXZlOjphZnRlciB7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwcHgpIHJvdGF0ZSgtNDVkZWcpO1xcbiAgfVxcblxcbiAgYXNpZGUjbWVudSB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIHRvcDogMDtcXG4gICAgbGVmdDogLTIyMHB4O1xcbiAgICB3aWR0aDogMjIwcHg7XFxuICAgIGhlaWdodDogMTAwdmg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNiZmM2YzY7XFxuICAgIHRyYW5zaXRpb246IDAuM3M7XFxuICB9XFxuXFxuICBhc2lkZSNtZW51LmFjdGl2ZSB7XFxuICAgIGxlZnQ6IDA7XFxuICB9XFxuXFxuICBhc2lkZSB1bCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgZmlsbDogd2hpdGU7XFxuICB9XFxuXFxuICBwI2FkZE5ld1Byb2plY3RFbCwgcC5pbmJveCwgc2VsZWN0I3Byb2plY3QtZHJvcGRvd24ge1xcbiAgICAvKiBjb2xvcjogd2hpdGU7ICovXFxuXFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICB9XFxuXFxuICBoZWFkZXIgLm1lbnVDb250cm9sbGVyIHN2ZyB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICB3aWR0aDogNDBweDtcXG4gICAgaGVpZ2h0OiA0MHB4O1xcbiAgICBmaWxsOiB3aGl0ZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICB9XFxuXFxuICAjdXNlcmxpc3QgI2FkZFRvZG9CdG5Db250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDVweDtcXG4gICAgbWFyZ2luOiAyN3B4IDAgMTFweCAyNnB4O1xcbiAgfVxcblxcbiAgI3Rhc2sge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDVweDtcXG4gICAgbWFyZ2luOiAyN3B4IDAgMTFweCAyNnB4O1xcbiAgfVxcblxcbiAgI3VzZXJsaXN0ICNhZGRUb2RvQnRuQ29udGFpbmVyIHN2ZyB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNkYzI2MjY7XFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gICAgZmlsbDogd2hpdGU7XFxuICB9XFxuXFxuICAjdXNlcmxpc3QgI2FkZFRvZG9CdG5Db250YWluZXIgOmhvdmVyIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMS4wOSk7XFxuICB9XFxuXFxuICAjdXNlcmxpc3QgI2FkZFRvZG9CdG5Db250YWluZXIgYnV0dG9uIHtcXG4gICAgYm9yZGVyOiAwO1xcbiAgICBmb250LXNpemU6IDEuNHJlbTtcXG5cXG4gICAgY29sb3I6ICNiOTFjMWM7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGluaGVyaXQ7XFxuICB9XFxuXFxuICAjdXNlcmxpc3QgI2FkZFRvZG9CdG5Db250YWluZXIgYnV0dG9uOmhvdmVyIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMS4wOSk7XFxuICB9XFxuXFxuICBkaXYubGlzdENvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDogNXB4O1xcbiAgICBtYXgtd2lkdGg6IDcxNHB4O1xcbiAgICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XFxuICAgIHdvcmQtYnJlYWs6IGJyZWFrLWFsbDtcXG4gICAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcXG4gICAgb3ZlcmZsb3ctd3JhcDogYnJlYWstd29yZDtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgYm94LXNoYWRvdzogMXB4IDBweCAzcHggMHB4O1xcbiAgICAvKiBtYXJnaW46IDE4cHggNjBweDsgKi9cXG4gICAgcGFkZGluZzogMTVweDtcXG4gIH1cXG5cXG4gICN1c2VybGlzdCAuaW50aWFsVGV4dERpc3BsYXkge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgfVxcblxcbiAgLmludGlhbFRleHREaXNwbGF5IHAge1xcbiAgICBtYXgtd2lkdGg6IDUwMHB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBtYXgtd2lkdGg6IDUwMHB4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBmbGV4LXdyYXA6IHdyYXA7XFxuICB9XFxuXFxuICAuaW50aWFsVGV4dERpc3BsYXkgaW1nIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogYXV0bztcXG4gICAgcGFkZGluZzogMjBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogNDFweDtcXG4gICAgb2JqZWN0LWZpdDogY29udGFpbjtcXG4gIH1cXG5cXG4gIC5pbm5lcl9jb250YWluZXIgI2Zvcm0ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjQ3NDhiO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICBoZWlnaHQ6IDE1MHB4O1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgICBtYXgtd2lkdGg6IDYwMHB4O1xcblxcbiAgICBtYXJnaW46IDE3cHg7XFxuICB9XFxuXFxuICAjZm9ybSBkaXYuZm9ybURldGFpbHMge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIG1hcmdpbjogMDtcXG4gIH1cXG5cXG4gIC5wcmlvcml0eURhdGVMYXJnZVNjcmVlbiB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICB9XFxuXFxuICAjZm9ybSAuaW5wdXRzIHtcXG4gICAgbWF4LXdpZHRoOiAxNTBweDtcXG4gIH1cXG5cXG4gICNmb3JtIC5maXJzdC1pbnB1dENvbnRhaW5lciBpbnB1dCxcXG4gIC5QdGl0bGVJbnB1dENvbnRhaW5lciBpbnB1dCxcXG4gICNmb3JtIC5zZWNvbmQtaW5wdXRDb250YWluZXIgaW5wdXQsXFxuICAuUGRlc2NyaXB0aW9uSW5wdXRDb250YWluZXIgaW5wdXQge1xcbiAgICBtYXgtd2lkdGg6IDYwMHB4O1xcbiAgICBoZWlnaHQ6IDI1cHg7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgb3V0bGluZTogbm9uZTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBtYXJnaW46IDEwcHggMCAwIDA7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGluaGVyaXQ7XFxuICB9XFxuXFxuICBwLnNlY29uZC1pbnB1dENvbnRhaW5lciB7XFxuICAgIG1hcmdpbjogMDtcXG4gIH1cXG5cXG4gICNmb3JtIC5idXR0b25zIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgbWFyZ2luOiAxcHggMjNweDtcXG4gIH1cXG5cXG4gICNjb25maWdQcmlvcml0eURhdGVPbk1vYmlsZSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIHBvc2l0aW9uOiBzdGF0aWM7XFxuICB9XFxuXFxuICAjZm9ybSAub3RoZXItb3B0aW9ucy1vbi1mb3JtcyBidXR0b24sXFxuICAjcHJpb3JpdHksXFxuICAjZGF0ZVBpY2tlciB7XFxuICAgIHBhZGRpbmc6IDdweDtcXG4gICAgYm9yZGVyLXJhZGl1czogOXB4O1xcbiAgfVxcblxcbiAgZm9ybSNQcm9qZWN0Rm9ybSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM2NDc0OGI7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIGhlaWdodDogMTUwcHg7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIG1heC13aWR0aDogNjkzcHg7XFxuICAgIHBhZGRpbmctbGVmdDogMXJlbTtcXG4gICAgbWFyZ2luOiA5cHggNjFweDtcXG4gIH1cXG5cXG4gIGRpdi5wcm9qZWN0Rm9ybURldGFpbHMge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIHRvcDogMDtcXG4gIH1cXG5cXG4gICovIC5wcm9qZWN0QnV0dG9uc0NvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIH1cXG5cXG4gIHNlbGVjdCNwcmlvcml0eSB7XFxuICAgIHBhZGRpbmc6IDhweDtcXG4gICAgYm9yZGVyLXJhZGl1czogOXB4O1xcbiAgfVxcblxcbiAgaW5wdXQjZGF0ZVBpY2tlciB7XFxuICAgIHBhZGRpbmc6IDNweDtcXG4gICAgYm9yZGVyLXJhZGl1czogOXB4O1xcbiAgfVxcbn1cXG5cXG5cXG5AbWVkaWEgKG1pbi13aWR0aDogNzY5cHgpIGFuZCAobWF4LXdpZHRoOiAxMDAwcHgpIHtcXG4gIGJvZHkgbWFpbiB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICB9XFxuXFxuICBtYWluIGhlYWRlciB7XFxuICAgIGdyaWQtYXJlYTogMSAvIDIgLyAyIC8gNjtcXG5cXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZkYTRhZjtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgZ2FwOiAxMHB4O1xcbiAgfVxcblxcbiAgbWFpbiBhc2lkZSB7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2UyZThmMDtcXG4gIH1cXG5cXG4gIG1haW4gI0NvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGZsZXgtd3JhcDogd3JhcDtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICB6LWluZGV4OiAxO1xcbiAgfVxcblxcbiAgaGVhZGVyIC5tZW51Q29udHJvbGxlciB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICB3aWR0aDogNDBweDtcXG4gICAgaGVpZ2h0OiA0MHB4O1xcbiAgfVxcblxcbiAgaGVhZGVyIC5tZW51Q29udHJvbGxlciBzdmcge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgd2lkdGg6IDQwcHg7XFxuICAgIGhlaWdodDogNDBweDtcXG4gICAgZmlsbDogd2hpdGU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgfVxcblxcblxcblxcblxcbiAgI3VzZXJsaXN0IC5pbnRpYWxUZXh0RGlzcGxheSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICB9XFxuXFxuICAjdXNlcmxpc3QgLmludGlhbFRleHREaXNwbGF5IHAge1xcbiAgICBmb250LXNpemU6IDEuMnJlbTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBmb250LXdlaWdodDogNTAwO1xcbiAgICBtYXJnaW46IDEwcHggMCAwIDA7XFxuICAgIG1heC13aWR0aDogNjAwcHg7XFxuICB9XFxuXFxuICAjdXNlcmxpc3QgI2FkZFRvZG9CdG5Db250YWluZXIge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDVweDtcXG4gICAgbWFyZ2luOiAyN3B4IDAgMTFweCAyNnB4O1xcbiAgfVxcblxcbiAgI3Rhc2sge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDVweDtcXG4gICAgbWFyZ2luOiAyN3B4IDAgMTFweCAyNnB4O1xcbiAgfVxcblxcbiAgI3VzZXJsaXN0ICNhZGRUb2RvQnRuQ29udGFpbmVyIHN2ZyB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNkYzI2MjY7XFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gICAgZmlsbDogd2hpdGU7XFxuICB9XFxuXFxuICAjdXNlcmxpc3QgI2FkZFRvZG9CdG5Db250YWluZXIgOmhvdmVyIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMS4wOSk7XFxuICB9XFxuXFxuICAjdXNlcmxpc3QgI2FkZFRvZG9CdG5Db250YWluZXIgYnV0dG9uIHtcXG4gICAgYm9yZGVyOiAwO1xcbiAgICBmb250LXNpemU6IDE2cHg7XFxuICAgIGNvbG9yOiAjYjkxYzFjO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmhlcml0O1xcbiAgfVxcblxcbiAgI3VzZXJsaXN0ICNhZGRUb2RvQnRuQ29udGFpbmVyIGJ1dHRvbjpob3ZlciB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEuMDkpO1xcbiAgfVxcblxcbiAgZGl2Lmxpc3RDb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBnYXA6IDVweDtcXG4gICAgbWF4LXdpZHRoOiA3MTRweDtcXG5cXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgYm94LXNoYWRvdzogMXB4IDBweCAzcHggMHB4O1xcbiAgICBtYXJnaW46IDE4cHggNjBweDtcXG4gICAgcGFkZGluZzogMTVweDtcXG4gIH1cXG5cXG4gIC5pbm5lcl9jb250YWluZXIgI2Zvcm0ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjQ3NDhiO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICBoZWlnaHQ6IDE1MHB4O1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgICBtYXgtd2lkdGg6IDc1MHB4O1xcblxcbiAgICBtYXJnaW46IDE3cHg7XFxuICB9XFxuXFxuICAjZm9ybSBkaXYuZm9ybURldGFpbHMge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFxuICAgIHBhZGRpbmc6IDlweCAyMHB4O1xcbiAgICBtYXJnaW46IDA7XFxuICB9XFxuXFxuICAucHJpb3JpdHlEYXRlTGFyZ2VTY3JlZW4ge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgfVxcblxcbiAgI2Zvcm0gLmlucHV0cyB7XFxuICAgIG1heC13aWR0aDogMTUwcHg7XFxuICB9XFxuXFxuICAjZm9ybSAuZmlyc3QtaW5wdXRDb250YWluZXIgaW5wdXQsXFxuICAuUHRpdGxlSW5wdXRDb250YWluZXIgaW5wdXQge1xcbiAgICBtYXgtd2lkdGg6IDQyMHB4O1xcbiAgICBtYXgtaGVpZ2h0OiA2MHB4O1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIG91dGxpbmU6IG5vbmU7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogaW5oZXJpdDtcXG4gICAgbWFyZ2luOiAwO1xcbiAgfVxcblxcbiAgI2Zvcm0gLnNlY29uZC1pbnB1dENvbnRhaW5lciBpbnB1dCxcXG4gIC5QZGVzY3JpcHRpb25JbnB1dENvbnRhaW5lciBpbnB1dCB7XFxuICAgIG1heC13aWR0aDogNDIwcHg7XFxuICAgIG1heC1oZWlnaHQ6IDYwcHg7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgb3V0bGluZTogbm9uZTtcXG4gICAgY29sb3I6IHJnYig5MCwgNzcsIDc3KTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogaW5oZXJpdDtcXG4gICAgbWFyZ2luOiAwO1xcbiAgfVxcblxcbiAgI2Zvcm0gLmJ1dHRvbnMge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIG1hcmdpbjogMXB4IDMzcHg7XFxuICB9XFxuXFxuICBmb3JtI1Byb2plY3RGb3JtIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzY0NzQ4YjtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgaGVpZ2h0OiAxNTBweDtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gICAgbWF4LXdpZHRoOiA2OTNweDtcXG4gICAgcGFkZGluZy1sZWZ0OiAxcmVtO1xcbiAgICBtYXJnaW46IDlweCA2MXB4O1xcbiAgfVxcblxcbiAgZGl2LnByb2plY3RGb3JtRGV0YWlscyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgdG9wOiAwO1xcbiAgfVxcblxcbiAgZGl2LnByaW9yaXR5RGF0ZU9uTGFyZ2VTY3JlZW4ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHRvcDogMDtcXG4gIH1cXG5cXG4gIC5wcm9qZWN0QnV0dG9uc0NvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIH1cXG5cXG4gICNjb25maWdQcmlvcml0eURhdGVPbk1vYmlsZSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIHBvc2l0aW9uOiBzdGF0aWM7XFxuICB9XFxuXFxuICAjZm9ybSAub3RoZXItb3B0aW9ucy1vbi1mb3JtcyBidXR0b24sXFxuICAjcHJpb3JpdHksXFxuICAjZGF0ZVBpY2tlciB7XFxuICAgIHBhZGRpbmc6IDhweDtcXG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICB9XFxuXFxuXFxufVxcblxcbm1haW4ge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMjUwcHggMWZyO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxMDBweCA2MTFweDtcXG59XFxuXFxuaGVhZGVyIHtcXG4gIGdyaWQtYXJlYTogMSAvIDIgLyAyIC8gNjtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZGE0YWY7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG59XFxuXFxuYXNpZGUge1xcbiAgZ3JpZC1hcmVhOiAxLyAxLyA0LyAyO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2UyZThmMDtcXG59XFxuXFxuLnNpZGVCYXJDb250ZW50Q29udGFpbmVyIHt9XFxuXFxuI0NvbnRhaW5lciB7XFxuICBncmlkLWFyZWE6IDIgLyAyIC8gMyAvIDQ7XFxuXFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxMDBweCA2NTBweCBtaW5tYXgoMTAwcHgsIDM1MHB4KTtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG59XFxuXFxuLmlubmVyX2NvbnRhaW5lciB7XFxuICBncmlkLWFyZWE6IDEgLyAyIC8gMyAvIDM7XFxufVxcblxcbi5pbnRpYWxUZXh0RGlzcGxheSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDEwcHg7XFxufVxcblxcbi5pbnRpYWxUZXh0RGlzcGxheSBwIHtcXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgZm9udC13ZWlnaHQ6IDgwMDtcXG4gIGNvbG9yOiAjNzgzNTBmO1xcbiAgbWFyZ2luOiAxMHB4IDAgMCAwO1xcbn1cXG5cXG4uaW50aWFsVGV4dERpc3BsYXkgaW1nIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiBhdXRvO1xcbiAgYm9yZGVyLXJhZGl1czogMzBweDtcXG4gIHBhZGRpbmc6IDIwcHg7XFxufVxcblxcbiNhZGRUb2RvQnRuQ29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi5lbXB0eSB7XFxuICBncmlkLWFyZWE6IDEgLyAzIC8gNSAvIDQ7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjhmOGY4O1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFxcXCIuL2ltYWdlcy9Ub2RvLTEuanBnXFxcIik7XFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcbn1cXG5cXG4ubWVudUNvbnRyb2xsZXIge1xcbiAgZGlzcGxheTogbm9uZTtcXG4gIHdpZHRoOiA0MHB4O1xcbiAgaGVpZ2h0OiA0MHB4O1xcbn1cXG5cXG4uY2hlY2tCb3gge1xcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xcbiAgLW1vei1hcHBlYXJhbmNlOiBub25lO1xcbiAgd2lkdGg6IDIwcHg7XFxuICBoZWlnaHQ6IDIwcHg7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuLmNoZWNrQm94OjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXCI7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogNTAlO1xcbiAgbGVmdDogNTAlO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxuICBmb250LXNpemU6IDE2cHg7XFxuICBjb2xvcjogcmdiKDIyLCAyNTIsIDIyKTtcXG4gIG9wYWNpdHk6IDA7XFxuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuM3MgZWFzZTtcXG59XFxuXFxuLmNoZWNrQm94OmhvdmVyOjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIuKck1xcXCI7XFxuICBvcGFjaXR5OiAwLjU7XFxufVxcblxcbnN2ZyB7XFxuICB3aWR0aDogMzRweDtcXG4gIGhlaWdodDogMzNweDtcXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xcblxcbn1cXG5cXG4jdGFzayB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogNXB4O1xcbiAgbWFyZ2luOiAyN3B4IDAgMTFweCAyNnB4O1xcbn1cXG5cXG4jdGFzayBzdmcge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2RjMjYyNjtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gIGZpbGw6IHdoaXRlO1xcbn1cXG5cXG4jdGFzayA6aG92ZXIge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEuMDkpO1xcbn1cXG5cXG4jdGFzayBidXR0b24ge1xcbiAgYm9yZGVyOiAwO1xcbiAgZm9udC1zaXplOiAxLjRyZW07XFxuICBjb2xvcjogI2I5MWMxYztcXG4gIGJhY2tncm91bmQtY29sb3I6IGluaGVyaXQ7XFxuICBmb250LXdlaWdodDogNzAwO1xcbn1cXG5cXG4jdGFzayBidXR0b246aG92ZXIge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEuMDkpO1xcbn1cXG5cXG5idXR0b24uZGVsZXRlVGFzayB7XFxuICBwYWRkaW5nOiAxMHB4O1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYm9yZGVyLXJhZGl1czogN3B4O1xcbiAgZm9udC1zaXplOiAxLjFyZW07XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTA0ODdjO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMnMgZWFzZS1vdXQ7XFxufVxcblxcbmJ1dHRvbi5kZWxldGVUYXNrOmhvdmVyIHtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4wNSk7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNGIwNzA3O1xcblxcbn1cXG5cXG5idXR0b24uZGVsZXRlVGFzazphY3RpdmUge1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgwLjkpO1xcbn1cXG5cXG4ubGlzdENvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiA1cHg7XFxuICBtYXgtd2lkdGg6IDcxNHB4O1xcblxcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIGJveC1zaGFkb3c6IDFweCAwcHggM3B4IDBweDtcXG4gIG1hcmdpbjogMThweCAxOHB4O1xcbiAgcGFkZGluZzogMTVweDtcXG59XFxuXFxuLnByaW9yaXR5RGF0ZU9uTGFyZ2VTY3JlZW4ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBtYXgtd2lkdGg6IDIwMHB4O1xcbn1cXG5cXG4ucHJvamVjdEJ1dHRvbnNDb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIHBhZGRpbmctaW5saW5lOiAxOHB4XFxufVxcblxcbi5wcm9qZWN0QnV0dG9uc0NvbnRhaW5lciBidXR0b24ge1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYm9yZGVyLXJhZGl1czogN3B4O1xcbiAgcGFkZGluZzogOXB4O1xcbiAgZm9udC1zaXplOiAxLjJyZW07XFxuICBmb250LXdlaWdodDogNjAwO1xcbn1cXG5cXG4uZXhjbHVkZWQge1xcbiAgY29sb3I6IHJlZDtcXG59XFxuXFxuLnRhc2tDb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXg6IDE7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcblxcbi50YXNrVGl0bGUsXFxuLm5ld1Byb2plY3QtdGFzay10aXRsZSxcXG4uZWRpdGFibGVTYXZlVGFza0VsIHtcXG4gIG1hcmdpbjogMDtcXG4gIGZvbnQtc2l6ZTogMS4zcmVtO1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgdGV4dC1kZWNvcmF0aW9uLWNvbG9yOiByZWQ7XFxufVxcblxcbi50YXNrRGVzY3JpcHRpb24sXFxuLm5ld1Byb2plY3QtZGVzY3JpcHRpb24ge1xcbiAgbWFyZ2luOiAwO1xcbiAgZm9udC1zaXplOiAxLjJyZW07XFxufVxcblxcbi50YXNrUHJpb3JpdHkge1xcbiAgZm9udC1zaXplOiAxOXB4O1xcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzU3M2QzZDtcXG4gIHBhZGRpbmc6IDZweDtcXG4gIG1hcmdpbjogMCAwIDdweDtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHdpZHRoOiAxMzBweDtcXG59XFxuXFxuLnRhc2tQcmlvcml0eTpob3ZlciB7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMDUpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzljMTUxNTtcXG59XFxuXFxuXFxuLmlubmVyVGFza0hhbmRsZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBtYXJnaW46IDBweCAxNXB4IDAgNDBweDtcXG59XFxuXFxuYXNpZGUgdWwgbGkge1xcbiAgbGlzdC1zdHlsZTogbm9uZTtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIHdpZHRoOiAxMDAlO1xcbiAgcGFkZGluZzogMTBweCAyMHB4O1xcbn1cXG5cXG4uaW5ib3gtY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiA1cHg7XFxuICBmb250LXNpemU6IDEuM3JlbTtcXG59XFxuXFxuXFxuLmluYm94IHtcXG4gIGZvbnQtc2l6ZTogMS40cmVtO1xcbn1cXG5cXG4uaW5ib3hMaXN0Q29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IDVweDtcXG59XFxuXFxuLmluYm94VGFza0NvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleDogMTtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuXFxuLmluYm94VGFza1RpdGxlIHtcXG4gIG1hcmdpbjogMDtcXG4gIGZvbnQtc2l6ZTogMThweDtcXG59XFxuXFxuLmluYm94VGFza0Rlc2NyaXB0aW9uIHtcXG4gIG1hcmdpbjogMDtcXG4gIGZvbnQtc2l6ZTogMTRweDtcXG59XFxuXFxuLmluYm94VGFza1ByaW9yaXR5IHtcXG4gIG1hcmdpbjogMCAyMHB4IDAgMDtcXG4gIGZvbnQtc2l6ZTogMS4zcmVtO1xcblxcbn1cXG5cXG4uZHVlRGF0ZSB7XFxuICBtYXJnaW46IDA7XFxuICBmb250LXNpemU6IDEuMnJlbTtcXG59XFxuXFxuLmVkaXQge1xcbiAgYm9yZGVyOiBub25lO1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIGZvbnQtc2l6ZTogMTdweDtcXG4gIG1heC13aWR0aDogMTEwcHg7XFxuICBtYXJnaW46IDAgMDtcXG59XFxuXFxuI3Byb2plY3RzIGgzIHtcXG4gIG1hcmdpbjogMCAwIDAgMTBweDtcXG59XFxuXFxuI2Zvcm0ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzY0NzQ4YjtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICBoZWlnaHQ6IDE3MHB4O1xcbiAgZGlzcGxheTogbm9uZTtcXG4gIHBhZGRpbmctbGVmdDogMXJlbTtcXG4gIG1hcmdpbjogMTBweCAxMHB4IDAgMDtcXG59XFxuXFxuLmZvcm1EZXRhaWxzIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgbWFyZ2luOiAxMnB4IDE1cHg7XFxufVxcblxcbmlucHV0I2RhdGVQaWNrZXIge1xcbiAgbWF4LXdpZHRoOiAxMzNweDtcXG59XFxuXFxuLmJ1dHRvbnMge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIG1hcmdpbjogMXB4IDMzcHg7XFxufVxcblxcbi5idXR0b25zIGJ1dHRvbiB7XFxuICBib3JkZXI6IG5vbmU7XFxuICBib3JkZXItcmFkaXVzOiA3cHg7XFxuICBwYWRkaW5nOiA3cHg7XFxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4ycyBlYXNlLW91dDtcXG59XFxuXFxuLmJ1dHRvbnMgYnV0dG9uOmhvdmVyIHtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4wNSk7XFxufVxcblxcbiNQcm9qZWN0Rm9ybSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjQ3NDhiO1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIGhlaWdodDogMTY2cHg7XFxuICBkaXNwbGF5OiBub25lO1xcbiAgcGFkZGluZzogMTBweDtcXG4gIG1hcmdpbjogMTVweCAxNXB4IDAgMTdweDtcXG59XFxuXFxuLnByb2plY3RGb3JtRGV0YWlscyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIHBhZGRpbmctbGVmdDogMXJlbTtcXG4gIHRvcDogMDtcXG59XFxuXFxuLmZpcnN0LWlucHV0Q29udGFpbmVyIGlucHV0LFxcbi5QdGl0bGVJbnB1dENvbnRhaW5lciBpbnB1dCB7XFxuICBtYXgtd2lkdGg6IDYwMHB4O1xcbiAgaGVpZ2h0OiAzN3B4O1xcbiAgYm9yZGVyOiBub25lO1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIG1hcmdpbjogMTBweCAwIDAgMDtcXG4gIGJhY2tncm91bmQtY29sb3I6IGluaGVyaXQ7XFxufVxcblxcbi50YXNrLXRpdGxlLFxcbi5kZXNjcmlwdGlvbiB7XFxuICB3aWR0aDogMzUwcHg7XFxuICBmb250LXNpemU6IDEuMXJlbTtcXG5cXG59XFxuXFxuLmZpcnN0LWlucHV0Q29udGFpbmVyIGlucHV0OjpwbGFjZWhvbGRlcixcXG4uUHRpdGxlSW5wdXRDb250YWluZXIgaW5wdXQ6OnBsYWNlaG9sZGVyIHtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIHBhZGRpbmc6IDAgMTBweDtcXG4gIG9wYWNpdHk6IDE7XFxufVxcblxcbi5zZWNvbmQtaW5wdXRDb250YWluZXIgaW5wdXQsXFxuLlBkZXNjcmlwdGlvbklucHV0Q29udGFpbmVyIGlucHV0IHtcXG4gIG1heC13aWR0aDogNjAwcHg7XFxuICBoZWlnaHQ6IDM3cHg7XFxuICBib3JkZXI6IG5vbmU7XFxuICBvdXRsaW5lOiBub25lO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogaW5oZXJpdDtcXG4gIG1hcmdpbjogMDtcXG59XFxuXFxuLnBUaXRsZSwgLnBEZXNjcmlwdGlvbiB7XFxuICB3aWR0aDogMzUwcHg7XFxuICBmb250LXNpemU6IDEuMDdyZW07XFxufVxcblxcbi5zZWNvbmQtaW5wdXRDb250YWluZXIgaW5wdXQ6OnBsYWNlaG9sZGVyLFxcbi5QZGVzY3JpcHRpb25JbnB1dENvbnRhaW5lciBpbnB1dDo6cGxhY2Vob2xkZXIge1xcbiAgcGFkZGluZzogMCAxMHB4O1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgb3BhY2l0eTogMTtcXG59XFxuXFxuLmZpcnN0LWlucHV0Q29udGFpbmVyLFxcbi5zZWNvbmQtaW5wdXRDb250YWluZXIge1xcbiAgbWFyZ2luOiAxMHB4IDAgMCAwO1xcbiAgZm9udC1zaXplOiAxcmVtO1xcbn1cXG5cXG4uc3VibWl0QnRuOmFjdGl2ZSB7XFxuICB0cmFuc2Zvcm06IGFjdGl2ZSBzY2FsZSgxLjEpO1xcbn1cXG5cXG4ub3RoZXItb3B0aW9ucy1vbi1mb3JtcyBidXR0b24sXFxuI3ByaW9yaXR5LFxcbmlucHV0I2RhdGVQaWNrZXIge1xcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuM3MgZWFzZS1pbjtcXG4gIHBhZGRpbmc6IDdweDtcXG4gIGJvcmRlci1yYWRpdXM6IDdweDtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwODMzNDQ7XFxuICBjb2xvcjogd2hpdGU7XFxuICBmb250LXNpemU6IDEuMXJlbTtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxufVxcblxcbiNwcmlvcml0eSB7XFxuICBtYXJnaW46IDEwcHggMCA4cHggMDtcXG59XFxuXFxuI3Byb2plY3RQcmlvcml0eSxcXG4uZm9vdGVyIHtcXG4gIHBhZGRpbmc6IDdweDtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIG1hcmdpbjogMCA0cHggNXB4IDA7XFxuXFxufVxcblxcblxcblxcbiNwcm9qZWN0UHJpb3JpdHksICNwcm9qZWN0UHJpb3JpdHkgb3B0aW9uIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM0NDQwM2M7XFxuICBjb2xvcjogI2ZhZmFmYTtcXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG59XFxuXFxuXFxuXFxuLmFkZFByb2plY3RzQ29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAxMHB4O1xcbn1cXG5cXG4uaW5ib3gtY29udGFpbmVyOmhvdmVyLCAuYWRkUHJvamVjdHNDb250YWluZXI6aG92ZXIsIC5wcm9qZWN0X3RleHQ6aG92ZXIsICNwcm9qZWN0LWRyb3Bkb3duOmhvdmVyIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxLjA1KTtcXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcbn1cXG5cXG5cXG4uYWRkUHJvamVjdHNDb250YWluZXIgc3ZnIHtcXG4gIHdpZHRoOiAyNXB4O1xcbiAgaGVpZ2h0OiAyNXB4O1xcbn1cXG5cXG4jYWRkTmV3UHJvamVjdEVsIHtcXG4gIG1hcmdpbjogMDtcXG4gIGZvbnQtc2l6ZTogMS4zcmVtO1xcbn1cXG5cXG4ucHJvamVjdF90ZXh0IHtcXG4gIG1hcmdpbjogMCAwIDEwcHggMTdweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDlweDtcXG4gIGJvcmRlci1yYWRpdXM6IDVweCAwcHggMHB4IDVweDtcXG59XFxuXFxuXFxuI3Byb2plY3QtZHJvcGRvd24ge1xcbiAgYm9yZGVyOiAwO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogaW5oZXJpdDtcXG4gIGZvbnQtc2l6ZTogMS4zcmVtO1xcbiAgZm9udC13ZWlnaHQ6IDU1MDtcXG4gIG1heC13aWR0aDogMTYwcHg7XFxufVxcblxcblxcbiNwcm9qZWN0LWRyb3Bkb3duOmZvY3VzIHtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIG91dGxpbmU6IG5vbmU7XFxufVxcblxcbiNuZXdQcm9qZWN0c0Zvcm1Db250YWluZXJFbCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4jUHJvamVjdHNGb3JtTmFtZUNvbnRhaW5lckVsIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5pbnB1dE5ld3Byb2plY3RGb3JtTmFtZSB7XFxuICBkaXNwbGF5OiBub25lO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2NlZTNlMztcXG4gIG1heC13aWR0aDogNDAwcHg7XFxuICBtYXgtaGVpZ2h0OiAzMDBweDtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICBwYWRkaW5nOiA0NnB4O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgbWFyZ2luOiA2MHB4IDAgMCAwO1xcbiAgYm94LXNoYWRvdzogMHB4IDlweCAzcHggMHB4O1xcbn1cXG5cXG4uaW5wdXROZXdwcm9qZWN0Rm9ybU5hbWUgaDIge1xcbiAgbWFyZ2luOiAwIDAgMTBweCAwO1xcbn1cXG5cXG4uaW5wdXROZXdQcm9qZWN0TmFtZSB7XFxuICBtYXgtd2lkdGg6IDM1MHB4O1xcbiAgbWF4LWhlaWdodDogMzVweDtcXG4gIHBhZGRpbmc6IDE3cHg7XFxuICBib3JkZXI6IG5vbmU7XFxuICBib3JkZXItcmFkaXVzOiA3cHg7XFxuICBmb250LXNpemU6IDE5cHg7XFxufVxcblxcbmlucHV0LlNhdmVQcm9qZWN0TmFtZSB7XFxuICBwYWRkaW5nOiA5cHg7XFxuICBib3JkZXI6IG5vbmU7XFxuICBib3JkZXItcmFkaXVzOiA4cHg7XFxuICBtYXgtd2lkdGg6IDEwMHB4O1xcbiAgaGVpZ2h0OiA0MHB4O1xcbiAgZm9udC1zaXplOiAxOXB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0MCwgNTksIDEzNCk7XFxuICBjb2xvcjogd2hpdGU7XFxufVxcblxcbi5wcm9qZWN0TmFtZVNhdmVyQnRuQ29udGFpbmVyIHtcXG4gIG1hcmdpbjogMTBweCAwO1xcbn1cXG5cXG4ucHJvamVjdE5hbWVTYXZlckJ0bkNvbnRhaW5lciBidXR0b24ge1xcbiAgcGFkZGluZzogOXB4O1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xcbiAgd2lkdGg6IDEwMHB4O1xcbiAgaGVpZ2h0OiA0MHB4O1xcbiAgZm9udC1zaXplOiAxOXB4O1xcbn1cXG5cXG4jUHJvamVjdHNGb3JtTmFtZUNvbnRhaW5lckVsIC5DYW5jZWwge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JleTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuI25ld1Byb2plY3RUYXNrc0NvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4jbmV3UHJvamVjdFRhc2tCdG5XcmFwcGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbiNuZXdQcm9qZWN0VGFza3NJbm5lckNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiA1cHg7XFxuICBtYXJnaW46IDEwcHg7XFxuICBib3gtc2hhZG93OiAjNWM1NTU1IDFweCAzcHggM3B4IDFweDtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICBwYWRkaW5nOiAxMHB4O1xcbiAgd2lkdGg6IDk1cHg7XFxuXFxufVxcblxcbnN2Zy5hZGRUYXNrIHtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gIGZpbGw6IHdoZWF0O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xcbn1cXG5cXG4ubmV3UHJvamVjdEFkZEJ0biB7XFxuICBib3JkZXI6IDA7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmhlcml0O1xcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXG59XFxuXFxuI1Byb2plY3RkYXRlUGlja2VyIHtcXG4gIHBhZGRpbmc6IDJweDtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGhlaWdodDogMzJweDtcXG4gIHBhZGRpbmc6IDJweDtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGhlaWdodDogMzJweDtcXG4gIGZvbnQtc2l6ZTogMS4xcmVtO1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gIGJhY2tncm91bmQ6ICNkNGQ0ZDg7XFxuICAvKiBjb2xvcjogI2Y4ZmFmYzsgKi9cXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuI1Byb2plY3RkYXRlUGlja2VyIGlucHV0W3R5cGU9J2RhdGUnXSB7XFxuICBmaWxsOiB3aGl0ZTtcXG59XFxuXFxuI3N1Ym1pdEJ0bkZvclByb2plY3Qge1xcbiAgcGFkZGluZzogN3B4O1xcbiAgYm9yZGVyLXJhZGl1czogOXB4O1xcbiAgLyogZm9udC1zaXplOiAxLjJyZW07XFxuICBmb250LXdlaWdodDogNjAwOyAqL1xcbn1cXG5cXG4jc3VibWl0QnRuRm9yUHJvamVjdDphY3RpdmUge1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xcbn1cXG5cXG4uY2FuY2VsRm9yUHJvamVjdEJ0biB7XFxuICBwYWRkaW5nOiA3cHg7XFxuICBib3JkZXItcmFkaXVzOiA5cHg7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7XG5cbiAgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH1cblxuICAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5vcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiLy8gaW1wb3J0IHsgbXlQcm9qZWN0cyB9IGZyb20gJy4vZG9tLUVsJ1xuaW1wb3J0IHsgZGlzcGxheUZvcm0gfSBmcm9tIFwiLi9kb20tRWxcIjtcbi8vIGltcG9ydCB7IGVkaXRUYXNrIH0gZnJvbSBcIi4vbG9naWNzXCI7XG5cbmNvbnN0IG15UHJvamVjdHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Byb2plY3RzIGgzXCIpO1xuY29uc3Qgc2NyZWVuQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNDb250YWluZXJcIik7XG5jb25zdCB1c2VyTGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdXNlcmxpc3RcIik7XG5jb25zdCBhZGRQcm9qZWN0c0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYWRkUHJvamVjdHNDb250YWluZXJcIik7XG5jb25zdCBuZXdQcm9qZWN0c0Zvcm1Db250YWluZXJFbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gIFwiI25ld1Byb2plY3RzRm9ybUNvbnRhaW5lckVsXCIsXG4pO1xuZXhwb3J0IGNvbnN0IGlucHV0TmV3cHJvamVjdEZvcm1OYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgXCIuaW5wdXROZXdwcm9qZWN0Rm9ybU5hbWVcIixcbik7XG5jb25zdCBuZXdQcm9qZWN0TmFtZVJlcXVlc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm5ld1Byb2plY3ROYW1lUmVxdWVzdFwiKTtcbmNvbnN0IG5ld1Byb2plY3ROYW1lVGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmhlYWRlclRleHRDb250ZW50XCIpO1xuY29uc3QgU2F2ZVByb2plY3ROYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5TYXZlUHJvamVjdE5hbWVcIik7XG5jb25zdCBuZXdQcm9qZWN0VGFzayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubmV3UHJvamVjdFRhc2tcIik7XG5jb25zdCBuZXdQcm9qZWN0VGFza3NDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuY29uc3QgbmV3UHJvamVjdFRhc2tCdG5XcmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5jb25zdCBuZXdQcm9qZWN0VGFza3NJbm5lckNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cbmNvbnN0IG5ld1Byb2plY3RBZGRCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuY29uc3Qgc3VibWl0VGFza0J0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjc3VibWl0QnRuRm9yUHJvamVjdFwiKTtcbmNvbnN0IGNhbmNlbFRhc2tCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNhbmNlbEZvclByb2plY3RCdG5cIik7XG5jb25zdCBkaXNwbGF5UHJvamVjdFRvZG9zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNkaXNwbGF5UHJvamVjdFRvZG9zXCIpO1xuXG5sZXQgcHJvamVjdEZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI1Byb2plY3RGb3JtXCIpO1xubGV0IGZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2Zvcm1cIik7XG5sZXQgaW5wdXRGaWVsZEVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wVGl0bGVcIik7XG5sZXQgZGVzY3JpcHRpb25GaWVsZEVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wRGVzY3JpcHRpb25cIik7XG5sZXQgc2VsZWN0UHJpb3JpdHlFbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcHJvamVjdFByaW9yaXR5XCIpO1xubGV0IGR1ZURhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI1Byb2plY3RkYXRlUGlja2VyXCIpO1xuY29uc3QgcHJvamVjdERyb3BEb3duID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwcm9qZWN0LWRyb3Bkb3duXCIpO1xubGV0IHNlbGVjdGVkUHJvamVjdCA9IHByb2plY3REcm9wRG93bi52YWx1ZTtcblxuY29uc3QgbmV3UHJvamVjdEZvcm1OYW1lQnRuRWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICBcIi5uZXdQcm9qZWN0Rm9ybU5hbWVCdG5FbFwiLFxuKTtcblxuY2xhc3MgZ2V0TGlzdCB7XG4gIGNvbnN0cnVjdG9yKHRpdGxlLCBkZXNjcmlwdGlvbiwgcHJpb3JpdHksIGRhdGUpIHtcbiAgICB0aGlzLnRpdGxlID0gdGl0bGU7XG4gICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xuICAgIHRoaXMucHJpb3JpdHkgPSBwcmlvcml0eTtcbiAgICB0aGlzLmRhdGUgPSBkYXRlO1xuICB9XG59XG5cbmZ1bmN0aW9uIGRpc3BsYXlSZXF1ZXN0TmV3UHJvamVjdEZvcm1OYW1lKCkge1xuICAgY29uc3QgaW50aWFsVGV4dERpc3BsYXlDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgIFwiLmludGlhbFRleHREaXNwbGF5Q29udGFpbmVyXCIsXG4gICk7XG4gIGNvbnN0IHByb2plY3RUYXNrQnRuID0gY3JlYXRlTmV3UHJvamVjdFRhc2tCdG4oKTtcblxuICBjb25zb2xlLmxvZyhwcm9qZWN0VGFza0J0bik7XG4gIFxuXG4gIGludGlhbFRleHREaXNwbGF5Q29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gIGlmICh1c2VyTGlzdC50ZXh0Q29udGVudCkge1xuICAgIHVzZXJMaXN0LnRleHRDb250ZW50ID0gXCJcIjtcbiAgfVxuXG4gIGlmIChmb3JtLnN0eWxlLmRpc3BsYXkgPT09IFwiYmxvY2tcIikge1xuICAgIGZvcm0uc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICB9XG4gIGlmIChwcm9qZWN0Rm9ybS5zdHlsZS5kaXNwbGF5ID09PSBcImJsb2NrXCIpIHtcbiAgICBwcm9qZWN0Rm9ybS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gIH1cbiAgXG4gICAgcHJvamVjdFRhc2tCdG4uc3R5bGUuZGlzcGxheSA9ICdub25lJztcblxuICBpbnB1dE5ld3Byb2plY3RGb3JtTmFtZS5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuICByZXR1cm4geyBpbnB1dE5ld3Byb2plY3RGb3JtTmFtZSB9O1xufVxuYWRkUHJvamVjdHNDb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcihcbiAgXCJjbGlja1wiLFxuICBkaXNwbGF5UmVxdWVzdE5ld1Byb2plY3RGb3JtTmFtZSxcbik7XG5cbi8vR2V0IE5ldyBQcm9qZWN0IE5hbWUgRnVuY3Rpb24uXG5leHBvcnQgZnVuY3Rpb24gZ2V0bmV3UHJvamVjdElucHV0TmFtZSgpIHtcbiAgY29uc3QgaW5wdXROZXdQcm9qZWN0TmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaW5wdXROZXdQcm9qZWN0TmFtZVwiKTtcbiAgY29uc3QgaW5wdXROZXdQcm9qZWN0TmFtZVZhbHVlID0gaW5wdXROZXdQcm9qZWN0TmFtZS52YWx1ZTtcbiAgbmV3UHJvamVjdE5hbWVUaXRsZS50ZXh0Q29udGVudCA9IGlucHV0TmV3UHJvamVjdE5hbWVWYWx1ZTtcblxuICAvLyBwcm9qZWN0cy5wdXNoKGlucHV0TmV3UHJvamVjdE5hbWVWYWx1ZSlcblxuICBpbnB1dE5ld1Byb2plY3ROYW1lLnZhbHVlID0gXCJcIjtcblxuICBhZGRQcm9qZWN0TmFtZShpbnB1dE5ld1Byb2plY3ROYW1lVmFsdWUpO1xuXG4gIGlmIChpbnB1dE5ld3Byb2plY3RGb3JtTmFtZSkge1xuICAgIGlucHV0TmV3cHJvamVjdEZvcm1OYW1lLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgfSBlbHNlIHtcbiAgICBpbnB1dE5ld3Byb2plY3RGb3JtTmFtZS5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuICB9XG5cbiAgcmV0dXJuIHsgaW5wdXROZXdQcm9qZWN0TmFtZVZhbHVlIH07XG59XG5cbi8vQ2FuY2VsIHByb2plY3QgZm9ybSBuYW1lIHJlcXVlc3Rcbm5ld1Byb2plY3RGb3JtTmFtZUJ0bkVsLmFkZEV2ZW50TGlzdGVuZXIoXG4gIFwiY2xpY2tcIixcbiAgKCkgPT4geyBcbmlucHV0TmV3cHJvamVjdEZvcm1OYW1lLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICBjb25zdCBpbnRpYWxUZXh0RGlzcGxheUNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgXCIuaW50aWFsVGV4dERpc3BsYXlDb250YWluZXJcIixcbiAgKTtcblxuICAgIGludGlhbFRleHREaXNwbGF5Q29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG5cbiAgfVxuKTtcblxubGV0IHN2Z0VsZW1lbnQgPSBudWxsO1xuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZU5ld1Byb2plY3RUYXNrQnRuKCkge1xuICBuZXdQcm9qZWN0VGFza3NDb250YWluZXIuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJuZXdQcm9qZWN0VGFza3NDb250YWluZXJcIik7XG4gIG5ld1Byb2plY3RUYXNrQnRuV3JhcHBlci5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcIm5ld1Byb2plY3RUYXNrQnRuV3JhcHBlclwiKTtcbiAgbmV3UHJvamVjdFRhc2tzSW5uZXJDb250YWluZXIuc2V0QXR0cmlidXRlKFxuICAgIFwiaWRcIixcbiAgICBcIm5ld1Byb2plY3RUYXNrc0lubmVyQ29udGFpbmVyXCIsXG4gICk7XG4gIFxuIGlmIChuZXdQcm9qZWN0VGFza3NJbm5lckNvbnRhaW5lci5jb250YWlucyhzdmdFbGVtZW50KSkge1xuICAgIG5ld1Byb2plY3RUYXNrc0lubmVyQ29udGFpbmVyLnJlbW92ZUNoaWxkKHN2Z0VsZW1lbnQpO1xuICB9XG5cbiAgbmV3UHJvamVjdEFkZEJ0bi50ZXh0Q29udGVudCA9IFwiQWRkIHRhc2tcIjtcblxuICAvLyBDcmVhdGUgdGhlIFNWRyBlbGVtZW50XG4gIGNvbnN0IHN2Z05hbWVzcGFjZSA9IFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIjtcbiAgICBzdmdFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKHN2Z05hbWVzcGFjZSwgXCJzdmdcIik7XG5cbiAgLy8gU2V0IHRoZSBjbGFzcyBhbmQgdmlld0JveCBhdHRyaWJ1dGVzXG4gIHN2Z0VsZW1lbnQuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJhZGRUYXNrXCIpO1xuICBzdmdFbGVtZW50LnNldEF0dHJpYnV0ZShcInZpZXdCb3hcIiwgXCIwIDAgMjQgMjRcIik7XG5cbiAgLy8gQ3JlYXRlIHRoZSB0aXRsZSBlbGVtZW50XG4gIGNvbnN0IHRpdGxlRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyhzdmdOYW1lc3BhY2UsIFwidGl0bGVcIik7XG4gIHRpdGxlRWxlbWVudC50ZXh0Q29udGVudCA9IFwicGx1c1wiO1xuICBzdmdFbGVtZW50LmFwcGVuZENoaWxkKHRpdGxlRWxlbWVudCk7XG5cbiAgLy8gQ3JlYXRlIHRoZSBwYXRoIGVsZW1lbnRcbiAgY29uc3QgcGF0aEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoc3ZnTmFtZXNwYWNlLCBcInBhdGhcIik7XG4gIHBhdGhFbGVtZW50LnNldEF0dHJpYnV0ZShcImRcIiwgXCJNMTksMTNIMTNWMTlIMTFWMTNINVYxMUgxMVY1SDEzVjExSDE5VjEzWlwiKTtcbiAgc3ZnRWxlbWVudC5hcHBlbmRDaGlsZChwYXRoRWxlbWVudCk7XG5cbiAgbmV3UHJvamVjdEFkZEJ0bi5jbGFzc0xpc3QuYWRkKFwibmV3UHJvamVjdEFkZEJ0blwiKTtcblxuICBuZXdQcm9qZWN0VGFza3NJbm5lckNvbnRhaW5lci5hcHBlbmRDaGlsZChzdmdFbGVtZW50KTtcbiAgbmV3UHJvamVjdFRhc2tzSW5uZXJDb250YWluZXIuYXBwZW5kQ2hpbGQobmV3UHJvamVjdEFkZEJ0bik7XG4gIG5ld1Byb2plY3RUYXNrQnRuV3JhcHBlci5hcHBlbmRDaGlsZChuZXdQcm9qZWN0VGFza3NJbm5lckNvbnRhaW5lcilcbiAgbmV3UHJvamVjdFRhc2tzQ29udGFpbmVyLmFwcGVuZENoaWxkKG5ld1Byb2plY3RUYXNrQnRuV3JhcHBlcik7XG5cbiAgbmV3UHJvamVjdHNGb3JtQ29udGFpbmVyRWwuYXBwZW5kQ2hpbGQobmV3UHJvamVjdFRhc2tzQ29udGFpbmVyKTtcblxuICByZXR1cm4gbmV3UHJvamVjdHNGb3JtQ29udGFpbmVyRWw7XG59XG5cbmZ1bmN0aW9uIGRpc3BsYXlOZXdQcm9qZWN0Rm9ybSgpIHtcbiAgcHJvamVjdEZvcm0uc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcbn1cblxuLy8gQWRkIHByb2plY3QgbmFtZSB0byBsb2NhbCBzdG9yYWdlIGFuZCAgcG9wdWxhdGUgcHJvamVjdCBkcm9wIGRvd25cbmZ1bmN0aW9uIGFkZFByb2plY3ROYW1lKHByb2plY3ROYW1lKSB7XG4gIGxldCBwcm9qZWN0cyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJwcm9qZWN0c1wiKSkgfHwgW107XG4gIHByb2plY3RzLnB1c2gocHJvamVjdE5hbWUpO1xuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInByb2plY3RzXCIsIEpTT04uc3RyaW5naWZ5KHByb2plY3RzKSk7XG4gIGZpbGxQcm9qZWN0RHJvcERvd24oKTtcbiAgcmV0dXJuIHsgcHJvamVjdE5hbWUgfTtcbn1cblxuLy8gUG9wdWxhdGUgcHJvamVjdCBkcm9wLWRvd25cbmZ1bmN0aW9uIGZpbGxQcm9qZWN0RHJvcERvd24oKSB7XG4gIHByb2plY3REcm9wRG93bi50ZXh0Q29udGVudCA9IFwiXCI7XG4gIGxldCBwcm9qZWN0cyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJwcm9qZWN0c1wiKSkgfHwgW107XG5cbiAgaWYgKHByb2plY3RzKSB7XG4gICAgY29uc3Qgb3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTtcbiAgICBvcHRpb24udmFsdWUgPSBcIlwiO1xuICAgIG9wdGlvbi50ZXh0Q29udGVudCA9IFwiU2VsZWN0IHByb2plY3RcIjtcbiAgICBwcm9qZWN0RHJvcERvd24uYXBwZW5kQ2hpbGQob3B0aW9uKTtcblxuICAgIHByb2plY3RzPy5mb3JFYWNoKChwcm9qZWN0KSA9PiB7XG4gICAgICBjb25zdCBvcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xuICAgICAgb3B0aW9uLnZhbHVlID0gcHJvamVjdDtcbiAgICAgIG9wdGlvbi50ZXh0Q29udGVudCA9IHByb2plY3Q7XG4gICAgICBwcm9qZWN0RHJvcERvd24uYXBwZW5kQ2hpbGQob3B0aW9uKTtcbiAgICB9KTtcbiAgfVxufVxuZmlsbFByb2plY3REcm9wRG93bigpO1xuXG4vLyBEaXNwbGF5IGVhY2ggcHJvamVjdCdzIHRvLWRvcyB3aGVuIHNlbGVjdGVkXG5wcm9qZWN0RHJvcERvd24uYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCAoKSA9PiB7XG4gIHVzZXJMaXN0LnRleHRDb250ZW50ID0gXCJcIjtcbiAgY29uc3QgaW50aWFsVGV4dERpc3BsYXlDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgIFwiLmludGlhbFRleHREaXNwbGF5Q29udGFpbmVyXCIsXG4gICk7XG4gIGludGlhbFRleHREaXNwbGF5Q29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcblxuICBkaXNwbGF5UHJvamVjdFRvZG9zLnRleHRDb250ZW50ID0gXCJcIjtcbiAgbmV3UHJvamVjdFRhc2tzQ29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcblxuICAvL0NsZWFyIHRoZSBhZGQgdGFzayBidXR0b24gY29udGFpbmVyIGVhY2ggdGltZSB1c2VyIHNlbGVjdCBhIHByb2plY3RcbiAgbmV3UHJvamVjdFRhc2tzQ29udGFpbmVyLnRleHRDb250ZW50ID0gXCJcIjtcblxuICAvL0Rpc3BsYXkgbm8gZm9ybSBpZiBhbnkgZm9ybSBpcyBpbiBibG9ja1xuICBpZiAoZm9ybS5zdHlsZS5kaXNwbGF5ID09PSBcImJsb2NrXCIpIHtcbiAgICBmb3JtLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgfVxuXG4gIHNlbGVjdGVkUHJvamVjdCA9IHByb2plY3REcm9wRG93bi52YWx1ZTtcbiAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImhlYWRlciBoMVwiKTtcbiAgaGVhZGVyLnRleHRDb250ZW50ID0gc2VsZWN0ZWRQcm9qZWN0O1xuICAvLyBnZXRTZWxlY3RlZFRvZG9zKHNlbGVjdGVkUHJvamVjdCk7XG4gIGRpc3BsYXlUb0Rvc0ZvckN1cnJlbnRQcm9qZWN0KHNlbGVjdGVkUHJvamVjdCk7XG4gIC8vIGRpc3BsYXlTZWxlY3RlZFRvRG9zKHNlbGVjdGVkUHJvamVjdCk7XG4gIGRpc3BsYXlOZXdQcm9qZWN0Rm9ybSgpO1xufSk7XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRVc2VyVG9kbygpIHtcbiAgbGV0IHRhc2tJbnB1dFZhbHVlID0gaW5wdXRGaWVsZEVsLnZhbHVlO1xuICBsZXQgZGVzY3JpcHRpb25JbnB1dFZhbHVlID0gZGVzY3JpcHRpb25GaWVsZEVsLnZhbHVlO1xuICBsZXQgcHJpb3JpdHlWYWx1ZUVsID0gc2VsZWN0UHJpb3JpdHlFbC52YWx1ZTtcbiAgbGV0IGR1ZURhdGVWYWx1ZUVsID0gZHVlRGF0ZS52YWx1ZTtcblxuICAvLyBsZXQgdGFza1RpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhc2tUaXRsZScpO1xuICAvLyBsZXQgdGFza0Rlc2NyaXB0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50YXNrRGVzY3JpcHRpb25cIik7XG5cbiAgLy8gaWYgKHRhc2tUaXRsZS50ZXh0Q29udGVudC5sZW5ndGggPiAzNSkge1xuICAvLyAgIHRhc2tUaXRsZS5zdHlsZS5vdmVyZmxvdyA9ICdoaWRkZW4nXG4gIC8vICAgLy8gcmV0dXJuIGFsZXJ0KFxuICAvLyAgIC8vICAgYElucHV0IHNob3VsZCBiZSBsZXNzIG9yIGVxdWFsIHRvIHRoZSAzNSBjaGFyYWN0ZXJzLCB5b3UgaGF2ZSBlbnRlcmVkICR7dGFza0lucHV0VmFsdWUubGVuZ3RofSBjaGFyYWN0ZXJzYCxcbiAgLy8gICAvLyApO1xuICAvLyB9IGVsc2UgaWYgKHRhc2tEZXNjcmlwdGlvbi50ZXh0Q29udGVudC5sZW5ndGggPiA0MCkge1xuICAvLyAgIHRhc2tEZXNjcmlwdGlvbi5zdHlsZS5vdmVyZmxvdyA9ICdoaWRkZW4nXG5cbiAgLy8gICByZXR1cm4gYWxlcnQoXG4gIC8vICAgICBgRGVzY3JpcHRpb24gc2hvdWxkIGJlIGxlc3Mgb3IgZXF1YWwgdG8gdGhlIDQwIGNoYXJhY3RlcnMsIHlvdSBoYXZlIGVudGVyZWQgJHtkZXNjcmlwdGlvbklucHV0VmFsdWUubGVuZ3RofSBjaGFyYWN0ZXJzYCxcbiAgLy8gICApO1xuICAvLyB9XG5cbiAgY29uc3QgZGF0ZSA9IG5ldyBEYXRlKGR1ZURhdGVWYWx1ZUVsKTtcblxuICBjb25zdCBvcHRpb25zID0ge1xuICAgIHdlZWtkYXk6IFwibG9uZ1wiLFxuICAgIHllYXI6IFwibnVtZXJpY1wiLFxuICAgIG1vbnRoOiBcInNob3J0XCIsXG4gICAgZGF5OiBcIm51bWVyaWNcIixcbiAgfTtcblxuICBjb25zdCBkYXlPZldlZWsgPSBkYXRlLnRvTG9jYWxlRGF0ZVN0cmluZyhcImVuLVVzXCIsIG9wdGlvbnMpO1xuXG4gIGxldCB1c2VyVG9kbyA9IG5ldyBnZXRMaXN0KFxuICAgIHRhc2tJbnB1dFZhbHVlLFxuICAgIGRlc2NyaXB0aW9uSW5wdXRWYWx1ZSxcbiAgICBwcmlvcml0eVZhbHVlRWwsXG4gICAgZGF5T2ZXZWVrLFxuICApO1xuXG4gIHJldHVybiB1c2VyVG9kbztcbn1cblxuLy8gQ2xlYXIgZm9ybSBpbnB1dFxuZnVuY3Rpb24gY2xlYXJJbnB1dEZvcm0oKSB7XG4gIGlucHV0RmllbGRFbC52YWx1ZSA9IFwiXCI7XG4gIGRlc2NyaXB0aW9uRmllbGRFbC52YWx1ZSA9IFwiXCI7XG4gIHNlbGVjdFByaW9yaXR5RWwudmFsdWUgPSBcIlNlbGVjdCBQcmlvcml0eVwiO1xuICBkdWVEYXRlLnZhbHVlID0gXCJcIjtcbn1cblxubGV0IGN1cnJlbnRQcm9qZWN0TmFtZSA9IFtdO1xubGV0IHRvRG8gPSBbXTtcbmZ1bmN0aW9uIGFkZE5ld1Byb2plY3RUb2RvcygpIHtcbiAgY3VycmVudFByb2plY3ROYW1lID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInByb2plY3RzXCIpKSB8fCBbXTtcbiAgY29uc3QgY3VycmVudFByb2plY3QgPSBjdXJyZW50UHJvamVjdE5hbWVbY3VycmVudFByb2plY3ROYW1lLmxlbmd0aCAtIDFdO1xuICBjb25zb2xlLmxvZyhjdXJyZW50UHJvamVjdE5hbWUpO1xuXG4gIC8vIGlmIChwcm9qZWN0Rm9ybS5zdHlsZS5kaXNwbGF5ID09PSBcImJsb2NrXCIpIHtcbiAgLy8gc2VsZWN0ZWRQcm9qZWN0ID0gY3VycmVudFByb2plY3Q7XG5cbiAgY29uc3Qgc2VsZWN0ZWRQcm9qZWN0ID0gcHJvamVjdERyb3BEb3duLnZhbHVlO1xuXG4gIGlmIChzZWxlY3RlZFByb2plY3QpIHtcbiAgICB0b0RvID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShzZWxlY3RlZFByb2plY3QpKSB8fCBbXTtcblxuICAgIGNvbnN0IG5ld1RvRG8gPSBnZXRVc2VyVG9kbygpO1xuICAgIHRvRG8ucHVzaChuZXdUb0RvKTtcblxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKHNlbGVjdGVkUHJvamVjdCwgSlNPTi5zdHJpbmdpZnkodG9EbykpO1xuICAgIGNvbnNvbGUubG9nKHRvRG8pO1xuXG4gICAgY29uc29sZS5sb2codG9Ebyk7XG4gICAgY2xlYXJJbnB1dEZvcm0oKTtcbiAgICBkaXNwbGF5VG9Eb3NGb3JDdXJyZW50UHJvamVjdChzZWxlY3RlZFByb2plY3QpO1xuICB9IGVsc2Uge1xuICAgIGNvbnNvbGUubG9nKGN1cnJlbnRQcm9qZWN0KTtcbiAgICAvL0lmIHRoZXJlIGlzIGFuIGV4aXN0aW5nIHByb2plY3QgZ2V0IGl0IGZyb20gdGhlIGxvY2FsIHN0b3JhZ2VcbiAgICBjb25zdCB0b0RvID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShjdXJyZW50UHJvamVjdCkpIHx8IFtdO1xuXG4gICAgY29uc3QgbmV3VG9EbyA9IGdldFVzZXJUb2RvKCk7XG5cbiAgICB0b0RvLnB1c2gobmV3VG9Ebyk7XG5cbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShjdXJyZW50UHJvamVjdCwgSlNPTi5zdHJpbmdpZnkodG9EbykpO1xuXG4gICAgY29uc29sZS5sb2codG9Ebyk7XG4gICAgY2xlYXJJbnB1dEZvcm0oKTtcbiAgICBkaXNwbGF5VG9Eb3NGb3JDdXJyZW50UHJvamVjdChjdXJyZW50UHJvamVjdCk7XG4gIH1cbiAgLy8gfVxufVxuXG5mdW5jdGlvbiBkaXNwbGF5VG9Eb3NGb3JDdXJyZW50UHJvamVjdChwcm9qZWN0TmFtZSkge1xuICBjdXJyZW50UHJvamVjdE5hbWUgPSBwcm9qZWN0TmFtZTtcbiAgLy8gY29uc29sZS5sb2coY3VycmVudFByb2plY3ROYW1lKTtcblxuICAvLyBzYXZlVGFzayhwcm9qZWN0TmFtZSk7XG4gIGxldCBwcm9qZWN0VG9kb3MgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKHByb2plY3ROYW1lKSkgfHwgW107XG5cbiAgdG9EbyA9IHByb2plY3RUb2RvcztcbiAgY29uc29sZS5sb2codG9Ebyk7XG4gIC8vIGNvbnNvbGUubG9nKGN1cnJlbnRUb2Rvcyk7XG5cbiAgcHJvamVjdFRvZG9zLmZvckVhY2goKHRvZG8sIGluZGV4KSA9PiB7XG4gICAgZGlzcGxheVRhc2soXG4gICAgICB0b2RvLnRpdGxlLFxuICAgICAgdG9kby5kZXNjcmlwdGlvbixcbiAgICAgIHRvZG8ucHJpb3JpdHksXG4gICAgICB0b2RvLmRhdGUsXG4gICAgICBpbmRleCxcbiAgICAgIHByb2plY3ROYW1lLFxuICAgICk7XG4gIH0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZGlzcGxheVRhc2soXG4gIHNhdmVUaXRsZURhdGEsXG4gIHNhdmVEZXNjcmlwdGlvbkRhdGEsXG4gIHNhdmVQcmlvcml0eURhdGEsXG4gIHNhdmVEdWVEYXRlRGF0YSxcbiAgaW5kZXgsXG4gIHByb2plY3ROYW1lLFxuKSB7XG4gIGNvbnN0IGxpc3RDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCB0YXNrQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIGNvbnN0IGlubmVyVGFza0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IGlubmVyVGFza0hhbmRsZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXG4gIGlubmVyVGFza0hhbmRsZXIuY2xhc3NMaXN0LmFkZChcImlubmVyVGFza0hhbmRsZXJcIik7XG4gIGlubmVyVGFza0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiaW5uZXJUYXNrQ29udGFpbmVyXCIpO1xuICB0YXNrQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJ0YXNrQ29udGFpbmVyXCIpO1xuICBsaXN0Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJsaXN0Q29udGFpbmVyXCIpO1xuXG4gIGNvbnN0IGNoZWNrQm94Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIGNoZWNrQm94Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJjaGVja0JveENvbnRhaW5lclwiKTtcbiAgY29uc3QgY2hlY2tCb3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gIGNoZWNrQm94LmNsYXNzTGlzdC5hZGQoXCJjaGVja0JveFwiKTtcbiAgY2hlY2tCb3guc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcImNoZWNrYm94XCIpO1xuXG4gIGNvbnN0IHRhc2tUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoNFwiKTtcbiAgY29uc3QgdGFza0Rlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIGNvbnN0IGR1ZURhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgY29uc3QgdGFza1ByaW9yaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIGNvbnN0IGRlbGV0ZVRhc2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuXG4gIHRhc2tUaXRsZS5jbGFzc0xpc3QuYWRkKFwidGFza1RpdGxlXCIpO1xuICB0YXNrRGVzY3JpcHRpb24uY2xhc3NMaXN0LmFkZChcInRhc2tEZXNjcmlwdGlvblwiKTtcbiAgZHVlRGF0ZS5jbGFzc0xpc3QuYWRkKFwiZHVlRGF0ZVwiKTtcbiAgZGVsZXRlVGFzay5jbGFzc0xpc3QuYWRkKFwiZGVsZXRlVGFza1wiKTtcbiAgdGFza1ByaW9yaXR5LmNsYXNzTGlzdC5hZGQoXCJ0YXNrUHJpb3JpdHlcIik7XG5cbiAgdGFza1RpdGxlLnRleHRDb250ZW50ID0gYCAke3NhdmVUaXRsZURhdGF9YDtcbiAgdGFza0Rlc2NyaXB0aW9uLnRleHRDb250ZW50ID0gYCR7c2F2ZURlc2NyaXB0aW9uRGF0YX1gO1xuICB0YXNrUHJpb3JpdHkudGV4dENvbnRlbnQgPSBgJHtzYXZlUHJpb3JpdHlEYXRhfWA7XG4gIGR1ZURhdGUudGV4dENvbnRlbnQgPSBgJHtzYXZlRHVlRGF0ZURhdGF9YDtcbiAgZGVsZXRlVGFzay50ZXh0Q29udGVudCA9IFwiRGVsZXRlIHRhc2tcIjtcblxuICBkZWxldGVUYXNrLmRhdGFzZXQuaW5kZXggPSBpbmRleDtcbiAgZGVsZXRlVGFzay5kYXRhc2V0LnByb2plY3QgPSBwcm9qZWN0TmFtZTtcbiAgY2hlY2tCb3guZGF0YXNldC5pbmRleCA9IGluZGV4O1xuICBjaGVja0JveC5kYXRhc2V0LnByb2plY3QgPSBwcm9qZWN0TmFtZTtcblxuICB0YXNrVGl0bGUuZGF0YXNldC5maWVsZFR5cGUgPSBcInRpdGxlXCI7XG4gIHRhc2tEZXNjcmlwdGlvbi5kYXRhc2V0LmZpZWxkVHlwZSA9IFwiZGVzY3JpcHRpb25cIjtcbiAgdGFza1ByaW9yaXR5LmRhdGFzZXQuZmllbGRUeXBlID0gXCJ0YXNrUHJpb3JpdHlcIjtcbiAgZHVlRGF0ZS5kYXRhc2V0LmZpZWxkVHlwZSA9IFwiZHVlRGF0ZVwiO1xuXG4gIHRhc2tUaXRsZS5kYXRhc2V0LmluZGV4ID0gaW5kZXg7XG4gIHRhc2tEZXNjcmlwdGlvbi5kYXRhc2V0LmluZGV4ID0gaW5kZXg7XG4gIHRhc2tQcmlvcml0eS5kYXRhc2V0LmluZGV4ID0gaW5kZXg7XG4gIGR1ZURhdGUuZGF0YXNldC5pbmRleCA9IGluZGV4O1xuXG4gIGlubmVyVGFza0NvbnRhaW5lci5hcHBlbmRDaGlsZCh0YXNrVGl0bGUpO1xuICBpbm5lclRhc2tDb250YWluZXIuYXBwZW5kQ2hpbGQodGFza0Rlc2NyaXB0aW9uKTtcbiAgaW5uZXJUYXNrQ29udGFpbmVyLmFwcGVuZENoaWxkKGR1ZURhdGUpO1xuXG4gIGlubmVyVGFza0hhbmRsZXIuYXBwZW5kQ2hpbGQodGFza1ByaW9yaXR5KTtcbiAgaW5uZXJUYXNrSGFuZGxlci5hcHBlbmRDaGlsZChkZWxldGVUYXNrKTtcblxuICB0YXNrQ29udGFpbmVyLmFwcGVuZENoaWxkKGlubmVyVGFza0NvbnRhaW5lcik7XG4gIHRhc2tDb250YWluZXIuYXBwZW5kQ2hpbGQoaW5uZXJUYXNrSGFuZGxlcik7XG5cbiAgY2hlY2tCb3hDb250YWluZXIuYXBwZW5kQ2hpbGQoY2hlY2tCb3gpO1xuICBsaXN0Q29udGFpbmVyLmFwcGVuZENoaWxkKGNoZWNrQm94Q29udGFpbmVyKTtcblxuICBsaXN0Q29udGFpbmVyLmFwcGVuZENoaWxkKHRhc2tDb250YWluZXIpO1xuICB1c2VyTGlzdC5hcHBlbmRDaGlsZChsaXN0Q29udGFpbmVyKTtcblxuICB0YXNrVGl0bGUuYWRkRXZlbnRMaXN0ZW5lcihcImRibGNsaWNrXCIsIGVkaXRUYXNrKTtcbiAgdGFza0Rlc2NyaXB0aW9uLmFkZEV2ZW50TGlzdGVuZXIoXCJkYmxjbGlja1wiLCBlZGl0VGFzayk7XG4gIHRhc2tQcmlvcml0eS5hZGRFdmVudExpc3RlbmVyKFwiZGJsY2xpY2tcIiwgZWRpdFRhc2spO1xuICBkdWVEYXRlLmFkZEV2ZW50TGlzdGVuZXIoXCJkYmxjbGlja1wiLCBlZGl0VGFzayk7XG5cbiAgZGVsZXRlVGFzay5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZGVsZXRlVG9Ebyk7XG4gIGRlbGV0ZVRhc2suYWRkRXZlbnRMaXN0ZW5lcihcInRvdWNoc3RhcnRcIiwgZGVsZXRlVG9Ebyk7XG5cbiAgaGFuZGxlQ2hlY2tCb3goY2hlY2tCb3gsIHRhc2tUaXRsZSwgdGFza0Rlc2NyaXB0aW9uKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGVkaXRUYXNrKGV2ZW50KSB7XG4gIGNvbnN0IHRhcmdldCA9IGV2ZW50LnRhcmdldDtcblxuICBjb25zdCBmaWVsZFR5cGUgPSB0YXJnZXQuZGF0YXNldC5maWVsZFR5cGU7IC8vIElkZW50aWZ5IHRoZSBmaWVsZCB0eXBlKHRpdGxlLGRlc2NyaXB0aW9uLHByaW9yaXR5LGRhdGUpXG4gIGNvbnN0IGluZGV4ID0gdGFyZ2V0LmRhdGFzZXQuaW5kZXg7XG4gIGNvbnN0IHRhc2tQcmlvcml0eSA9IFtcIlVyZ2VudFwiLCBcIkltcG9ydGFudFwiLCBcIkxvdyBwcmlvcml0eVwiXTtcblxuICBsZXQgdGFza0lucHV0O1xuICBpZiAoZmllbGRUeXBlID09PSBcInRpdGxlXCIgfHwgZmllbGRUeXBlID09PSBcImRlc2NyaXB0aW9uXCIpIHtcbiAgICB0YXNrSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgdGFza0lucHV0LnR5cGUgPSBcInRleHRcIjtcbiAgICB0YXNrSW5wdXQudmFsdWUgPSB0YXJnZXQudGV4dENvbnRlbnQ7XG4gIH0gZWxzZSBpZiAoZmllbGRUeXBlID09PSBcImR1ZURhdGVcIikge1xuICAgIHRhc2tJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICB0YXNrSW5wdXQudHlwZSA9IFwiZGF0ZVwiO1xuICAgIHRhc2tJbnB1dC52YWx1ZSA9IHRhcmdldC50ZXh0Q29udGVudDtcbiAgfSBlbHNlIGlmIChmaWVsZFR5cGUgPT09IFwidGFza1ByaW9yaXR5XCIpIHtcbiAgICB0YXNrSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VsZWN0XCIpO1xuXG4gICAgdGFza1ByaW9yaXR5LmZvckVhY2goKHByaW9yaXR5KSA9PiB7XG4gICAgICBjb25zdCBvcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xuICAgICAgb3B0aW9uLnZhbHVlID0gcHJpb3JpdHk7XG4gICAgICBvcHRpb24udGV4dENvbnRlbnQgPSBwcmlvcml0eTtcblxuICAgICAgaWYgKHByaW9yaXR5ID09PSB0YXJnZXQudGV4dENvbnRlbnQpIHtcbiAgICAgICAgb3B0aW9uLnNlbGVjdGVkID0gdHJ1ZTtcbiAgICAgIH1cbiAgICAgIHRhc2tJbnB1dC5hcHBlbmRDaGlsZChvcHRpb24pO1xuICAgIH0pO1xuICB9XG5cbiAgLy9TdG9yZSB0aGUgZmllbGRUeXBlIGluIHRoZSBpbnB1dCBkYXRhc2V0XG4gIHRhc2tJbnB1dC5kYXRhc2V0LmZpZWxkVHlwZSA9IGZpZWxkVHlwZTtcbiAgdGFza0lucHV0LmRhdGFzZXQuaW5kZXggPSBpbmRleDtcblxuICB0YXJnZXQuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICB0YXJnZXQucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUodGFza0lucHV0LCB0YXJnZXQubmV4dFNpYmxpbmcpOyAvLyBJbnNlcnQgdGhlIGlucHV0IGZpZWxkIG5leHQgdG8gdGFyZ2V0IGVsZW1lbnRcblxuICB0YXNrSW5wdXQuY2xhc3NMaXN0LmFkZChcImVkaXRcIik7XG4gIC8vICAgY29uc3Qgc2VsZWN0ZWRWYWx1ZSA9IHRhc2tJbnB1dC52YWx1ZTtcbiAgLy8gY29uc29sZS5sb2coc2VsZWN0ZWRWYWx1ZSk7XG5cbiAgaWYgKHRhc2tJbnB1dC50eXBlID09PSBcInRleHRcIikge1xuICAgIHRhc2tJbnB1dC5zZWxlY3QoKTsgLy8gQXV0b21hdGljYWxseSBzZWxlY3QgdGhlIGNvbnRlbnQgb2YgdGhlIGlucHV0IGZpZWxkXG4gIH1cblxuICB0YXNrSW5wdXQuYWRkRXZlbnRMaXN0ZW5lcihcImJsdXJcIiwgc2F2ZUVkaXRlZFRhc2spOyAvLyBTYXZlIHRhc2sgd2hlbiB0YXNrIGxvc2UgZm9jdXMgb24gaW5wdXQgZWxlbWVudC5cbiAgdGFza0lucHV0LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlwcmVzc1wiLCBzYXZlRWRpdGVkVGFzayk7IC8vIFNhdmUgdGFzayBvbiBwcmVzc2luZyBFbnRlclxufVxuXG5leHBvcnQgZnVuY3Rpb24gc2F2ZUVkaXRlZFRhc2soZXZlbnQpIHtcbiAgY29uc29sZS5sb2codG9Ebyk7XG5cbiAgaWYgKGV2ZW50LnR5cGUgPT09IFwiYmx1clwiIHx8IGV2ZW50LmtleSA9PT0gXCJFbnRlclwiKSB7XG4gICAgY29uc3QgaW5wdXQgPSBldmVudC50YXJnZXQ7XG5cbiAgICBsZXQgZmllbGRUeXBlID0gaW5wdXQuZGF0YXNldC5maWVsZFR5cGU7XG4gICAgbGV0IGluZGV4ID0gaW5wdXQuZGF0YXNldC5pbmRleDsgLy8gR2V0IHRoZSBpbmRleCBmcm9tIHRoZSBpbnB1dCBkYXRhc2V0XG5cbiAgICBsZXQgbmV3VmFsdWU7XG4gICAgLy9JZiBzZWxlY3QgZWxlbWVudCwgZ2V0IGl0IHZhbHVlIGVsc2UgZ2V0IGlucHV0IHZhbHVlXG4gICAgaWYgKGlucHV0LnRhZ05hbWUgPT09IFwiU0VMRUNUXCIpIHtcbiAgICAgIG5ld1ZhbHVlID0gaW5wdXQub3B0aW9uc1tpbnB1dC5zZWxlY3RlZEluZGV4XS52YWx1ZTtcbiAgICAgIHRvRG9baW5kZXhdLnByaW9yaXR5ID0gbmV3VmFsdWU7XG4gICAgICBjb25zb2xlLmxvZyh0b0RvW2luZGV4XS5wcmlvcml0eSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIG5ld1ZhbHVlID0gaW5wdXQudmFsdWU7XG4gICAgfVxuICAgIC8vIGNvbnN0IGN1cnJlbnRQcm9qZWN0ID0gY3VycmVudFByb2plY3ROYW1lW2N1cnJlbnRQcm9qZWN0TmFtZS5sZW5ndGggLSAxXTtcblxuICAgIC8vR2V0IHRoZSB0YXNrIGZyb20gdGhlIGxvY2FsIHN0b3JhZ2VcbiAgICAvLyBsZXQgdG9EbyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oY3VycmVudFByb2plY3ROYW1lKSkgfHwgW107XG4gICAgY29uc29sZS5sb2codG9Ebyk7XG5cbiAgICAvL0NoZWNrIGlmIHRoZSBpbmRleCBpcyBub3Qgb3V0IG9mIGJvdW5kcyBpbiB0aGUgYXJyYXlcbiAgICBpZiAoaW5kZXggPCB0b0RvLmxlbmd0aCkge1xuICAgICAgaWYgKGZpZWxkVHlwZSA9PT0gXCJ0aXRsZVwiKSB7XG4gICAgICAgIHRvRG9baW5kZXhdLnRpdGxlID0gbmV3VmFsdWU7XG4gICAgICAgIGNvbnNvbGUubG9nKHRvRG9baW5kZXhdLnRpdGxlKTtcbiAgICAgIH0gZWxzZSBpZiAoZmllbGRUeXBlID09PSBcImRlc2NyaXB0aW9uXCIpIHtcbiAgICAgICAgdG9Eb1tpbmRleF0uZGVzY3JpcHRpb24gPSBuZXdWYWx1ZTtcbiAgICAgIH0gZWxzZSBpZiAoZmllbGRUeXBlID09PSBcImR1ZURhdGVcIikge1xuICAgICAgICBsZXQgZHVlRGF0ZSA9IG5ld1ZhbHVlO1xuICAgICAgICBjb25zdCBkYXRlID0gbmV3IERhdGUoZHVlRGF0ZSk7XG5cbiAgICAgICAgY29uc3Qgb3B0aW9ucyA9IHtcbiAgICAgICAgICB3ZWVrZGF5OiBcImxvbmdcIixcbiAgICAgICAgICB5ZWFyOiBcIm51bWVyaWNcIixcbiAgICAgICAgICBtb250aDogXCJzaG9ydFwiLFxuICAgICAgICAgIGRheTogXCJudW1lcmljXCIsXG4gICAgICAgIH07XG5cbiAgICAgICAgdG9Eb1tpbmRleF0uZGF0ZSA9IGRhdGUudG9Mb2NhbGVEYXRlU3RyaW5nKFwiZW4tVXNcIiwgb3B0aW9ucyk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gU2F2ZSB0aGUgdXBkYXRlZCB0YXNrcyB0byBsb2NhbCBzdG9yYWdlXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oY3VycmVudFByb2plY3ROYW1lLCBKU09OLnN0cmluZ2lmeSh0b0RvKSk7XG5cbiAgICAvLyBVcGRhdGUgdGhlIG9yaWdpbmFsIGVsZW1lbnQncyB0ZXh0IGNvbnRlbnQgYW5kIHNob3cgaXQgYWdhaW5cbiAgICBsZXQgb3JpZ2luYWxFbGVtZW50ID0gaW5wdXQucHJldmlvdXNTaWJsaW5nO1xuXG4gICAgb3JpZ2luYWxFbGVtZW50LnRleHRDb250ZW50ID0gbmV3VmFsdWU7XG5cbiAgICBvcmlnaW5hbEVsZW1lbnQuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcblxuICAgIC8vIFJlbW92ZSB0aGUgaW5wdXQgZmllbGQgaWYgaXQgaXMgc3RpbGwgcGFydCBvZiB0aGUgRE9NXG5cbiAgICBpbnB1dC5yZW1vdmUoKTtcblxuICAgIHVzZXJMaXN0LnRleHRDb250ZW50ID0gXCJcIjtcblxuICAgIC8vIFJlLXJlbmRlciB0aGUgdG9kbyBsaXN0IGlmIG5lY2Vzc2FyeVxuICAgIGRpc3BsYXlUb0Rvc0ZvckN1cnJlbnRQcm9qZWN0KGN1cnJlbnRQcm9qZWN0TmFtZSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gaGFuZGxlQ2hlY2tCb3goY2hlY2tCb3gsIHRhc2tUaXRsZSwgdGFza0Rlc2NyaXB0aW9uKSB7XG4gIGNoZWNrQm94LmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgKGV2ZW50KSA9PiB7XG4gICAgaWYgKGNoZWNrQm94LmNoZWNrZWQgPT09IHRydWUpIHtcbiAgICAgIGNvbnN0IGNoZWNrQm94ID0gZXZlbnQudGFyZ2V0O1xuICAgICAgY29uc29sZS5sb2coY2hlY2tCb3gpO1xuICAgICAgY29uc3QgaW5kZXggPSBjaGVja0JveC5kYXRhc2V0LmluZGV4O1xuICAgICAgY29uc3QgcHJvamVjdE5hbWUgPSBjaGVja0JveC5kYXRhc2V0LnByb2plY3Q7XG5cbiAgICAgIHRvRG8gPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKHByb2plY3ROYW1lKSkgfHwgW107XG5cbiAgICAgIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICAgICAgY2hlY2tCb3gucmVtb3ZlKGNoZWNrQm94KTtcbiAgICAgICAgdG9Eby5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICAvL3VwZGF0ZSBUby1kbyBpdGVtIGluIGxvY2FsIHN0b3JhZ2VcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0ocHJvamVjdE5hbWUsIEpTT04uc3RyaW5naWZ5KHRvRG8pKTtcbiAgICAgICAgY29uc29sZS5sb2codG9Ebyk7XG4gICAgICAgIHVzZXJMaXN0LnRleHRDb250ZW50ID0gXCJcIjtcbiAgICAgICAgZGlzcGxheVRvRG9zRm9yQ3VycmVudFByb2plY3QocHJvamVjdE5hbWUpO1xuICAgICAgICBhbGVydChcIlRhc2sgY29tcGxldGVkIVwiKTtcbiAgICAgIH1cbiAgICAgIGNvbnNvbGUubG9nKFwidHJ1ZVwiKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGFza1RpdGxlLnN0eWxlLnRleHREZWNvcmF0aW9uID0gXCJub25lXCI7XG4gICAgICB0YXNrRGVzY3JpcHRpb24uc3R5bGUudGV4dERlY29yYXRpb24gPSBcIm5vbmVcIjtcbiAgICAgIGNvbnNvbGUubG9nKFwiZmFsc2VcIik7XG4gICAgfVxuICB9KTtcbn1cblxuLy9EZWxldGUgdGhlIHRvZG8gdGhhdCBnZXQgY2xpY2tlZFxuZnVuY3Rpb24gZGVsZXRlVG9EbyhldmVudCkge1xuICBjb25zdCBidXR0b24gPSBldmVudC50YXJnZXQ7XG4gIGNvbnN0IGluZGV4ID0gYnV0dG9uLmRhdGFzZXQuaW5kZXg7XG4gIGNvbnN0IGN1cnJlbnRQcm9qZWN0ID0gYnV0dG9uLmRhdGFzZXQucHJvamVjdDtcbiAgY29uc29sZS5sb2coY3VycmVudFByb2plY3QpO1xuXG4gIC8vIGNvbnN0IGN1cnJlbnRQcm9qZWN0ID0gY3VycmVudFByb2plY3ROYW1lW2N1cnJlbnRQcm9qZWN0TmFtZS5sZW5ndGggLSAxXTtcbiAgdG9EbyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oY3VycmVudFByb2plY3QpKSB8fCBbXTtcblxuICBjb25zb2xlLmxvZyh0b0RvKTtcblxuICBpZiAoaW5kZXggIT09IC0xKSB7XG4gICAgdG9Eby5zcGxpY2UoaW5kZXgsIDEpO1xuICAgIC8vdXBkYXRlIFRvLWRvIGl0ZW0gaW4gbG9jYWwgc3RvcmFnZVxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKGN1cnJlbnRQcm9qZWN0LCBKU09OLnN0cmluZ2lmeSh0b0RvKSk7XG4gICAgY29uc29sZS5sb2codG9Ebyk7XG4gICAgdXNlckxpc3QudGV4dENvbnRlbnQgPSBcIlwiO1xuICAgIGRpc3BsYXlUb0Rvc0ZvckN1cnJlbnRQcm9qZWN0KGN1cnJlbnRQcm9qZWN0KTtcbiAgfVxufVxuXG4vL0NhbmNlbCBwcm9qZWN0IGZvcm0gZnJvbSBkaXNwbGF5aW5nLlxuZnVuY3Rpb24gY2FuY2VsRm9ybURpc3BsYXkoKSB7XG4gIGlucHV0RmllbGRFbC52YWx1ZSA9IFwiXCI7XG4gIGRlc2NyaXB0aW9uRmllbGRFbC52YWx1ZSA9IFwiXCI7XG4gIHNlbGVjdFByaW9yaXR5RWwudmFsdWUgPSBcIlNlbGVjdCBQcmlvcml0eVwiO1xuICBkdWVEYXRlLnZhbHVlID0gXCJcIjtcbiAgcHJvamVjdEZvcm0uc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICBjb25zb2xlLmxvZyhcImNhbmNlbCBmb3JtIVwiKTtcbiAgbmV3UHJvamVjdHNGb3JtQ29udGFpbmVyRWwuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcbiAgaWYgKG5ld1Byb2plY3RUYXNrc0NvbnRhaW5lci5zdHlsZS5kaXNwbGF5ID09PSBcIm5vbmVcIikge1xuICAgIG5ld1Byb2plY3RUYXNrc0NvbnRhaW5lci5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuICB9XG4gIGNyZWF0ZU5ld1Byb2plY3RUYXNrQnRuKCk7XG4gIC8vIGRpc3BsYXlUb0Rvc0ZvckN1cnJlbnRQcm9qZWN0KGN1cnJlbnRQcm9qZWN0TmFtZS5zbGljZSgpLnBvcCgpKTtcbn1cbmNhbmNlbFRhc2tCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGNhbmNlbEZvcm1EaXNwbGF5KTtcblxuLy9QcmV2ZW50IGZvcm0gRGVmYXVsdCB3aGVuIHN1Ym1pdGluZyBwcm9qZWN0IG5hbWVcbmNvbnN0IHN1Ym1pdE5ld1Byb2plY3RGb3JtTmFtZSA9IChldmVudCkgPT4ge1xuICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICBnZXRuZXdQcm9qZWN0SW5wdXROYW1lKCk7XG4gIGRpc3BsYXlOZXdQcm9qZWN0Rm9ybSgpO1xuICAvLyBjcmVhdGVOZXdQcm9qZWN0VGFza0J0bigpO1xufTtcblNhdmVQcm9qZWN0TmFtZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgc3VibWl0TmV3UHJvamVjdEZvcm1OYW1lKTtcbm5ld1Byb2plY3ROYW1lUmVxdWVzdC5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIChldmVudCkgPT5cbiAgZXZlbnQucHJldmVudERlZmF1bHQoKSxcbik7XG5cbm5ld1Byb2plY3RUYXNrc0NvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICBkaXNwbGF5TmV3UHJvamVjdEZvcm0oKTtcbiAgbmV3UHJvamVjdFRhc2tzQ29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgbmV3UHJvamVjdFRhc2tzQ29udGFpbmVyLnRleHRDb250ZW50ID0gXCJcIjtcbn0pO1xuXG5mdW5jdGlvbiBzdWJtaXRGb3JtKGV2ZW50KSB7XG4gIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gIHVzZXJMaXN0LnRleHRDb250ZW50ID0gXCJcIjtcblxuICBhZGROZXdQcm9qZWN0VG9kb3MoKTtcbiAgLy8gZGlzcGxheVRvRG9zRm9yQ3VycmVudFByb2plY3QocHJvamVjdE5hbWUpO1xuICAvLyBhZGRUb2RvVG9zZWxlY3RlZFByb2plY3QoKTtcbn1cbnN1Ym1pdFRhc2tCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHN1Ym1pdEZvcm0pO1xucHJvamVjdEZvcm0uYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCAoZXZlbnQpID0+IGV2ZW50LnByZXZlbnREZWZhdWx0KCkpO1xuIiwiaW1wb3J0IHsgZ2V0VXNlclRvZG8gfSBmcm9tIFwiLi9kb20tRWwtMlwiO1xuaW1wb3J0IHsgbmV3UHJvamVjdFRhc2tzQ29udGFpbmVyIH0gZnJvbSBcIi4vZG9tLUVsLTJcIjtcbmltcG9ydCB7IGdldG5ld1Byb2plY3RJbnB1dFZhbHVlIH0gZnJvbSBcIi4vZG9tLUVsLTJcIjtcbmltcG9ydCB7IGNyZWF0ZU5ld1Byb2plY3RUYXNrQnRuIH0gZnJvbSBcIi4vZG9tLUVsLTJcIjtcbmltcG9ydCB7IGlucHV0TmV3cHJvamVjdEZvcm1OYW1lIH0gZnJvbSBcIi4vZG9tLUVsLTJcIjtcblxuY29uc3QgbWFpbkNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJtYWluXCIpO1xuY29uc3QgaGVhZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5oZWFkZXJUZXh0Q29udGVudFwiKTtcbmNvbnN0IHVzZXJMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN1c2VybGlzdFwiKTtcbmNvbnN0IGluYm94VGFza0Rpc3BsYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmRpc3BsYXlJbmJveFRhc2tcIik7XG5jb25zdCBmb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNmb3JtXCIpO1xubGV0IHByb2plY3RGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNQcm9qZWN0Rm9ybVwiKTtcbmNvbnN0IGNhbmNlbEZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNhbmNlbFwiKTtcbmNvbnN0IHN1Ym1pdEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjc3VibWl0QnRuXCIpO1xuY29uc3QgYWRkVGFza2J0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdGFza1wiKTtcbmNvbnN0IGFkZFRhc2tNb2JpbGVCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2FkZFRvZG9CdG5Db250YWluZXJcIik7XG5cbmxldCBpbmJveCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaW5ib3hcIik7XG5jb25zdCB0b0RvQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNlY3Rpb25cIik7XG50b0RvQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJ0b0RvQ29udGFpbmVySW5ib3hcIik7XG5jb25zdCBpbmJveEZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZm9ybVwiKTtcbmluYm94Rm9ybS5jbGFzc0xpc3QuYWRkKFwiaW5ib3hGb3JtXCIpO1xuY29uc3QgaW5ib3hUYXNrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbmluYm94VGFzay5jbGFzc0xpc3QuYWRkKFwiaW5ib3hUYXNrXCIpO1xuXG5sZXQgdGFza1RpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50YXNrLXRpdGxlXCIpO1xubGV0IHRhc2tEZXNjcmlwdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZGVzY3JpcHRpb25cIik7XG5sZXQgdGFza1ByaW9yaXR5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwcmlvcml0eVwiKTtcbmxldCBkdWVEYXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNkYXRlUGlja2VyXCIpO1xuXG5jbGFzcyBnZXRMaXN0IHtcbiAgY29uc3RydWN0b3IodGl0bGUsIGRlc2NyaXB0aW9uLCBwcmlvcml0eSwgZGF0ZSkge1xuICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcbiAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XG4gICAgdGhpcy5wcmlvcml0eSA9IHByaW9yaXR5O1xuICAgIHRoaXMuZGF0ZSA9IGRhdGU7XG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IG15UHJvamVjdHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Byb2plY3RzIGgzXCIpO1xuY29uc3QgZGVmYXVsdFByb2plY3RzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwcm9qZWN0c1wiKTtcblxuZnVuY3Rpb24gZGlzcGxheUZvcm0oZXZlbnQpIHtcbiAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImhlYWRlciBoMVwiKTtcblxuICBoZWFkZXIudGV4dENvbnRlbnQgPSBcIkFkZCB5b3VyIFRvIGRvXCI7XG4gIHVzZXJMaXN0LnRleHRDb250ZW50ID0gXCJcIjtcbiAgY29uc3QgaW50aWFsVGV4dERpc3BsYXlDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgIFwiLmludGlhbFRleHREaXNwbGF5Q29udGFpbmVyXCIsXG4gICk7XG4gIGludGlhbFRleHREaXNwbGF5Q29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcblxuICBsZXQgbmV3UHJvamVjdEJ0biA9IGNyZWF0ZU5ld1Byb2plY3RUYXNrQnRuKCk7XG4gIG5ld1Byb2plY3RCdG4uc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICBmb3JtLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG4gIGlmICgocHJvamVjdEZvcm0uc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIikpIHtcbiAgICBwcm9qZWN0Rm9ybS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gIH1cbn1cbmFkZFRhc2tidG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGRpc3BsYXlGb3JtKTtcbmFkZFRhc2tNb2JpbGVCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGRpc3BsYXlGb3JtKTtcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgKCkgPT4ge1xuICBkaXNwbGF5VG9Eb3MoKTtcbn0pO1xuXG5sZXQgdG9Eb3MgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidG9Eb3NcIikpIHx8IFtdO1xuXG5mdW5jdGlvbiBhY2NlcHRJbnB1dCgpIHtcbiAgbGV0IHRhc2tJbnB1dFZhbHVlID0gdGFza1RpdGxlLnZhbHVlO1xuICBsZXQgZGVzY3JpcHRpb25JbnB1dFZhbHVlID0gdGFza0Rlc2NyaXB0aW9uLnZhbHVlO1xuICBsZXQgcHJpb3JpdHlWYWx1ZUVsID0gdGFza1ByaW9yaXR5LnZhbHVlO1xuICBsZXQgZHVlRGF0ZVZhbHVlRWwgPSBkdWVEYXRlLnZhbHVlO1xuXG4gIGNvbnNvbGUubG9nKHRhc2tJbnB1dFZhbHVlLmxlbmd0aCk7XG4gIC8vIGlmICh0YXNrSW5wdXRWYWx1ZS5sZW5ndGggPj0gMzUpIHtcbiAgLy8gICByZXR1cm4gYWxlcnQoXG4gIC8vICAgICBgdGFzayB0aXRsZSBzaG91bGQgYmUgbGVzcyBvciBlcXVhbCB0byAzNSAgY2hhcmFjdGVycywgeW91IGhhdmUgZW50ZXJlZCAke3Rhc2tJbnB1dFZhbHVlLmxlbmd0aH0gY2hhcmFjdGVyc2AsXG4gIC8vICAgKTtcbiAgLy8gfSBlbHNlIGlmIChkZXNjcmlwdGlvbklucHV0VmFsdWUubGVuZ3RoID49IDQwKSB7XG4gIC8vICAgcmV0dXJuIGFsZXJ0KFxuICAvLyAgICAgYERlc2NyaXB0aW9uIHNob3VsZCBiZSBsZXNzIG9yIGVxdWFsIHRvICA0MCBjaGFyYWN0ZXJzLCB5b3UgaGF2ZSBlbnRlcmVkICR7ZGVzY3JpcHRpb25JbnB1dFZhbHVlLmxlbmd0aH0gY2hhcmFjdGVyc2AsXG4gIC8vICAgKTtcbiAgLy8gfVxuXG4gIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZShkdWVEYXRlVmFsdWVFbCk7XG5cbiAgY29uc3Qgb3B0aW9ucyA9IHtcbiAgICB3ZWVrZGF5OiBcImxvbmdcIixcbiAgICB5ZWFyOiBcIm51bWVyaWNcIixcbiAgICBtb250aDogXCJzaG9ydFwiLFxuICAgIGRheTogXCJudW1lcmljXCIsXG4gIH07XG5cbiAgY29uc3QgZGF5T2ZXZWVrID0gZGF0ZS50b0xvY2FsZURhdGVTdHJpbmcoXCJlbi1Vc1wiLCBvcHRpb25zKTtcblxuICBsZXQgdXNlclRvRG8gPSBuZXcgZ2V0TGlzdChcbiAgICB0YXNrSW5wdXRWYWx1ZSxcbiAgICBkZXNjcmlwdGlvbklucHV0VmFsdWUsXG4gICAgcHJpb3JpdHlWYWx1ZUVsLFxuICAgIGRheU9mV2VlayxcbiAgKTtcblxuICB0b0Rvcy5wdXNoKHVzZXJUb0RvKTtcblxuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInRvRG9zXCIsIEpTT04uc3RyaW5naWZ5KHRvRG9zKSk7XG5cbiAgY2xlYXJGb3JtKCk7XG59XG5cbmZ1bmN0aW9uIGNsZWFyRm9ybSgpIHtcbiAgdGFza1RpdGxlLnZhbHVlID0gXCJcIjtcbiAgdGFza0Rlc2NyaXB0aW9uLnZhbHVlID0gXCJcIjtcbiAgZHVlRGF0ZS52YWx1ZSA9IFwiXCI7XG4gIHRhc2tQcmlvcml0eS52YWx1ZSA9IFwiU2VsZWN0IFByaW9yaXR5XCI7XG59XG5cbmZ1bmN0aW9uIGRpc3BsYXlUb0RvcygpIHtcbiAgbGV0IHVzZXJUb2RvcyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ0b0Rvc1wiKSkgfHwgW107XG5cbiAgdXNlclRvZG9zPy5mb3JFYWNoKCh0b2RvT2JqLCBpbmRleCkgPT4ge1xuICAgIGdldEVsZW1lbnRGb3JUYXNrRGlzcGxheShcbiAgICAgIHRvZG9PYmoudGl0bGUsXG4gICAgICB0b2RvT2JqLmRlc2NyaXB0aW9uLFxuICAgICAgdG9kb09iai5wcmlvcml0eSxcbiAgICAgIHRvZG9PYmouZGF0ZSxcbiAgICAgIGluZGV4LFxuICAgICk7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBnZXRFbGVtZW50Rm9yVGFza0Rpc3BsYXkoXG4gIHNhdmVUaXRsZURhdGEsXG4gIHNhdmVEZXNjcmlwdGlvbkRhdGEsXG4gIHNhdmVQcmlvcml0eURhdGEsXG4gIHNhdmVEdWVEYXRlRGF0YSxcbiAgaW5kZXgsXG4pIHtcbiAgaGVhZGVyLnRleHRDb250ZW50ID0gXCJDcmVhdGUgWW91ciBUby1EbyBMaXN0LlwiO1xuICBjb25zdCBsaXN0Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgdGFza0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICBjb25zdCBpbm5lclRhc2tDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBpbm5lclRhc2tIYW5kbGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgaW5uZXJUYXNrSGFuZGxlci5jbGFzc0xpc3QuYWRkKFwiaW5uZXJUYXNrSGFuZGxlclwiKTtcbiAgaW5uZXJUYXNrQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJpbm5lclRhc2tDb250YWluZXJcIik7XG4gIHRhc2tDb250YWluZXIuY2xhc3NMaXN0LmFkZChcInRhc2tDb250YWluZXJcIik7XG4gIGxpc3RDb250YWluZXIuY2xhc3NMaXN0LmFkZChcImxpc3RDb250YWluZXJcIik7XG5cbiAgY29uc3QgY2hlY2tCb3hDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgY2hlY2tCb3hDb250YWluZXIuY2xhc3NMaXN0LmFkZChcImNoZWNrQm94Q29udGFpbmVyXCIpO1xuICBjb25zdCBjaGVja0JveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgY2hlY2tCb3guY2xhc3NMaXN0LmFkZChcImNoZWNrQm94XCIpO1xuICBjaGVja0JveC5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwiY2hlY2tib3hcIik7XG5cbiAgY29uc3QgdGFza1RpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImg0XCIpO1xuICBjb25zdCB0YXNrRGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgY29uc3QgZHVlRGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICBjb25zdCB0YXNrUHJpb3JpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgY29uc3QgZGVsZXRlVGFzayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG5cbiAgdGFza1RpdGxlLmNsYXNzTGlzdC5hZGQoXCJ0YXNrVGl0bGVcIik7XG4gIHRhc2tEZXNjcmlwdGlvbi5jbGFzc0xpc3QuYWRkKFwidGFza0Rlc2NyaXB0aW9uXCIpO1xuXG4gIGR1ZURhdGUuY2xhc3NMaXN0LmFkZChcImR1ZURhdGVcIik7XG4gIGRlbGV0ZVRhc2suY2xhc3NMaXN0LmFkZChcImRlbGV0ZVRhc2tcIik7XG4gIHRhc2tQcmlvcml0eS5jbGFzc0xpc3QuYWRkKFwidGFza1ByaW9yaXR5XCIpO1xuXG4gIHRhc2tUaXRsZS50ZXh0Q29udGVudCA9IGAgJHtzYXZlVGl0bGVEYXRhfWA7XG4gIHRhc2tEZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9IGAke3NhdmVEZXNjcmlwdGlvbkRhdGF9YDtcbiAgdGFza1ByaW9yaXR5LnRleHRDb250ZW50ID0gYCR7c2F2ZVByaW9yaXR5RGF0YX1gO1xuICBkdWVEYXRlLnRleHRDb250ZW50ID0gYCR7c2F2ZUR1ZURhdGVEYXRhfWA7XG4gIGRlbGV0ZVRhc2sudGV4dENvbnRlbnQgPSBcIkRlbGV0ZSB0YXNrXCI7XG5cbiAgdGFza1RpdGxlLmRhdGFzZXQuZmllbGRUeXBlID0gXCJ0aXRsZVwiO1xuICB0YXNrRGVzY3JpcHRpb24uZGF0YXNldC5maWVsZFR5cGUgPSBcImRlc2NyaXB0aW9uXCI7XG4gIHRhc2tQcmlvcml0eS5kYXRhc2V0LmZpZWxkVHlwZSA9IFwidGFza1ByaW9yaXR5XCI7XG4gIGR1ZURhdGUuZGF0YXNldC5maWVsZFR5cGUgPSBcImR1ZURhdGVcIjtcblxuICB0YXNrVGl0bGUuZGF0YXNldC5pbmRleCA9IGluZGV4O1xuICB0YXNrRGVzY3JpcHRpb24uZGF0YXNldC5pbmRleCA9IGluZGV4O1xuICB0YXNrUHJpb3JpdHkuZGF0YXNldC5pbmRleCA9IGluZGV4O1xuICBkdWVEYXRlLmRhdGFzZXQuaW5kZXggPSBpbmRleDtcbiAgY2hlY2tCb3guZGF0YXNldC5pbmRleCA9IGluZGV4O1xuXG4gIGlubmVyVGFza0NvbnRhaW5lci5hcHBlbmRDaGlsZCh0YXNrVGl0bGUpO1xuICBpbm5lclRhc2tDb250YWluZXIuYXBwZW5kQ2hpbGQodGFza0Rlc2NyaXB0aW9uKTtcbiAgaW5uZXJUYXNrQ29udGFpbmVyLmFwcGVuZENoaWxkKGR1ZURhdGUpO1xuXG4gIGlubmVyVGFza0hhbmRsZXIuYXBwZW5kQ2hpbGQodGFza1ByaW9yaXR5KTtcbiAgaW5uZXJUYXNrSGFuZGxlci5hcHBlbmRDaGlsZChkZWxldGVUYXNrKTtcblxuICB0YXNrQ29udGFpbmVyLmFwcGVuZENoaWxkKGlubmVyVGFza0NvbnRhaW5lcik7XG4gIHRhc2tDb250YWluZXIuYXBwZW5kQ2hpbGQoaW5uZXJUYXNrSGFuZGxlcik7XG5cbiAgY2hlY2tCb3hDb250YWluZXIuYXBwZW5kQ2hpbGQoY2hlY2tCb3gpO1xuICBsaXN0Q29udGFpbmVyLmFwcGVuZENoaWxkKGNoZWNrQm94Q29udGFpbmVyKTtcblxuICBsaXN0Q29udGFpbmVyLmFwcGVuZENoaWxkKHRhc2tDb250YWluZXIpO1xuICB1c2VyTGlzdC5hcHBlbmRDaGlsZChsaXN0Q29udGFpbmVyKTtcblxuICB0YXNrVGl0bGUuYWRkRXZlbnRMaXN0ZW5lcihcImRibGNsaWNrXCIsIGVkaXRUYXNrKTtcbiAgdGFza1RpdGxlLmFkZEV2ZW50TGlzdGVuZXIoXCJ0b3VjaHN0YXJ0XCIsIGVkaXRUYXNrKTtcblxuICB0YXNrRGVzY3JpcHRpb24uYWRkRXZlbnRMaXN0ZW5lcihcImRibGNsaWNrXCIsIGVkaXRUYXNrKTtcbiAgdGFza0Rlc2NyaXB0aW9uLmFkZEV2ZW50TGlzdGVuZXIoXCJ0b3VjaHN0YXJ0XCIsIGVkaXRUYXNrKTtcblxuICB0YXNrUHJpb3JpdHkuYWRkRXZlbnRMaXN0ZW5lcihcImRibGNsaWNrXCIsIGVkaXRUYXNrKTtcbiAgdGFza1ByaW9yaXR5LmFkZEV2ZW50TGlzdGVuZXIoXCJ0b3VjaHN0YXJ0XCIsIGVkaXRUYXNrKTtcblxuICBkdWVEYXRlLmFkZEV2ZW50TGlzdGVuZXIoXCJkYmxjbGlja1wiLCBlZGl0VGFzayk7XG4gIGR1ZURhdGUuYWRkRXZlbnRMaXN0ZW5lcihcInRvdWNoc3RhcnRcIiwgZWRpdFRhc2spO1xuXG4gIGRlbGV0ZVRhc2suYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGRlbGV0ZVRvRG8pO1xuICBkZWxldGVUYXNrLmFkZEV2ZW50TGlzdGVuZXIoXCJ0b3VjaHN0YXJ0XCIsIGRlbGV0ZVRvRG8pO1xuXG4gIGhhbmRsZUNoZWNrQm94KGNoZWNrQm94LCB0YXNrVGl0bGUsIHRhc2tEZXNjcmlwdGlvbik7XG59XG5cbmZ1bmN0aW9uIGVkaXRUYXNrKGV2ZW50KSB7XG4gIGNvbnN0IHRhcmdldCA9IGV2ZW50LnRhcmdldDtcbiAgY29uc29sZS5sb2codGFyZ2V0KTtcbiAgY29uc3QgZmllbGRUeXBlID0gdGFyZ2V0LmRhdGFzZXQuZmllbGRUeXBlO1xuICBjb25zdCBpbmRleCA9IHRhcmdldC5kYXRhc2V0LmluZGV4O1xuICBjb25zb2xlLmxvZyhpbmRleCk7XG4gIGNvbnN0IHRhc2tQcmlvcml0eSA9IFtcIlVyZ2VudFwiLCBcIkltcG9ydGFudFwiLCBcIkxvdyBwcmlvcml0eVwiXTtcblxuICBsZXQgdGFza0lucHV0O1xuXG4gIGlmIChmaWVsZFR5cGUgPT09IFwidGl0bGVcIiB8fCBmaWVsZFR5cGUgPT09IFwiZGVzY3JpcHRpb25cIikge1xuICAgIHRhc2tJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICB0YXNrSW5wdXQudHlwZSA9IFwidGV4dFwiO1xuICAgIHRhc2tJbnB1dC52YWx1ZSA9IHRhcmdldC50ZXh0Q29udGVudDtcbiAgfSBlbHNlIGlmIChmaWVsZFR5cGUgPT09IFwiZHVlRGF0ZVwiKSB7XG4gICAgdGFza0lucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgIHRhc2tJbnB1dC50eXBlID0gXCJkYXRlXCI7XG4gICAgdGFza0lucHV0LnZhbHVlID0gdGFyZ2V0LnRleHRDb250ZW50O1xuICB9IGVsc2UgaWYgKGZpZWxkVHlwZSA9PT0gXCJ0YXNrUHJpb3JpdHlcIikge1xuICAgIHRhc2tJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzZWxlY3RcIik7XG5cbiAgICB0YXNrUHJpb3JpdHkuZm9yRWFjaCgocHJpb3JpdHkpID0+IHtcbiAgICAgIGNvbnN0IG9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7XG4gICAgICBvcHRpb24udmFsdWUgPSBwcmlvcml0eTtcbiAgICAgIG9wdGlvbi50ZXh0Q29udGVudCA9IHByaW9yaXR5O1xuXG4gICAgICBpZiAocHJpb3JpdHkgPT09IHRhcmdldC50ZXh0Q29udGVudCkge1xuICAgICAgICBvcHRpb24uc2VsZWN0ZWQgPSB0cnVlO1xuICAgICAgfVxuICAgICAgdGFza0lucHV0LmFwcGVuZENoaWxkKG9wdGlvbik7XG4gICAgfSk7XG4gIH1cblxuICB0YXNrSW5wdXQuZGF0YXNldC5maWVsZFR5cGUgPSBmaWVsZFR5cGU7XG4gIHRhc2tJbnB1dC5kYXRhc2V0LmluZGV4ID0gaW5kZXg7XG5cbiAgdGFyZ2V0LnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgdGFyZ2V0LnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKHRhc2tJbnB1dCwgdGFyZ2V0Lm5leHRTaWJsaW5nKTtcblxuICB0YXNrSW5wdXQuY2xhc3NMaXN0LmFkZChcImVkaXRcIik7XG5cbiAgaWYgKHRhc2tJbnB1dC50eXBlID09PSBcInRleHRcIikge1xuICAgIHRhc2tJbnB1dC5zZWxlY3QoKTtcbiAgfVxuXG4gIHRhc2tJbnB1dC5hZGRFdmVudExpc3RlbmVyKFwiYmx1clwiLCBzYXZlRWRpdGVkVGFzayk7XG4gIHRhc2tJbnB1dC5hZGRFdmVudExpc3RlbmVyKFwia2V5cHJlc3NcIiwgc2F2ZUVkaXRlZFRhc2spO1xufVxuXG5mdW5jdGlvbiBzYXZlRWRpdGVkVGFzayhldmVudCkge1xuICBpZiAoZXZlbnQudHlwZSA9PT0gXCJibHVyXCIgfHwgZXZlbnQua2V5ID09PSBcIkVudGVyXCIpIHtcbiAgICBsZXQgaW5wdXQgPSBldmVudC50YXJnZXQ7XG4gICAgY29uc29sZS5sb2coaW5wdXQpO1xuICAgIGxldCBmaWVsZFR5cGUgPSBpbnB1dC5kYXRhc2V0LmZpZWxkVHlwZTtcbiAgICBsZXQgaW5kZXggPSBpbnB1dC5kYXRhc2V0LmluZGV4O1xuXG4gICAgY29uc29sZS5sb2codG9Eb3MpO1xuXG4gICAgbGV0IG5ld1ZhbHVlO1xuICAgIGlmIChpbnB1dC50YWdOYW1lID09PSBcIlNFTEVDVFwiKSB7XG4gICAgICBuZXdWYWx1ZSA9IGlucHV0Lm9wdGlvbnNbaW5wdXQuc2VsZWN0ZWRJbmRleF0udmFsdWU7XG4gICAgICB0b0Rvc1tpbmRleF0ucHJpb3JpdHkgPSBuZXdWYWx1ZTtcbiAgICAgIGNvbnNvbGUubG9nKHRvRG9zW2luZGV4XS5wcmlvcml0eSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIG5ld1ZhbHVlID0gaW5wdXQudmFsdWU7XG4gICAgfVxuXG4gICAgaWYgKGluZGV4IDwgdG9Eb3MubGVuZ3RoKSB7XG4gICAgICBpZiAoZmllbGRUeXBlID09PSBcInRpdGxlXCIpIHtcbiAgICAgICAgdG9Eb3NbaW5kZXhdLnRpdGxlID0gbmV3VmFsdWU7XG4gICAgICAgIGNvbnNvbGUubG9nKHRvRG9zW2luZGV4XS50aXRsZSk7XG4gICAgICAgIGNvbnNvbGUubG9nKG5ld1ZhbHVlKTtcbiAgICAgIH0gZWxzZSBpZiAoZmllbGRUeXBlID09PSBcImRlc2NyaXB0aW9uXCIpIHtcbiAgICAgICAgdG9Eb3NbaW5kZXhdLmRlc2NyaXB0aW9uID0gbmV3VmFsdWU7XG4gICAgICAgIGNvbnNvbGUubG9nKGluZGV4KTtcbiAgICAgICAgY29uc29sZS5sb2codG9Eb3NbZGVzY3JpcHRpb25dKTtcbiAgICAgIH0gZWxzZSBpZiAoZmllbGRUeXBlID09PSBcImR1ZURhdGVcIikge1xuICAgICAgICBsZXQgZHVlRGF0ZSA9IG5ld1ZhbHVlO1xuICAgICAgICBjb25zdCBkYXRlID0gbmV3IERhdGUoZHVlRGF0ZSk7XG5cbiAgICAgICAgY29uc3Qgb3B0aW9ucyA9IHtcbiAgICAgICAgICB3ZWVrZGF5OiBcImxvbmdcIixcbiAgICAgICAgICB5ZWFyOiBcIm51bWVyaWNcIixcbiAgICAgICAgICBtb250aDogXCJzaG9ydFwiLFxuICAgICAgICAgIGRheTogXCJudW1lcmljXCIsXG4gICAgICAgIH07XG4gICAgICAgIGNvbnNvbGUubG9nKHRvRG9zKTtcblxuICAgICAgICB0b0Rvc1tpbmRleF0uZGF0ZSA9IGRhdGUudG9Mb2NhbGVEYXRlU3RyaW5nKFwiZW4tVXNcIiwgb3B0aW9ucyk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJ0b0Rvc1wiLCBKU09OLnN0cmluZ2lmeSh0b0RvcykpO1xuXG4gICAgbGV0IG9yaWdpbmFsRWxlbWVudCA9IGlucHV0LnByZXZpb3VzU2libGluZztcblxuICAgIG9yaWdpbmFsRWxlbWVudC50ZXh0Q29udGVudCA9IG5ld1ZhbHVlO1xuXG4gICAgb3JpZ2luYWxFbGVtZW50LnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG5cbiAgICBpbnB1dC5yZW1vdmUoKTtcblxuICAgIHVzZXJMaXN0LnRleHRDb250ZW50ID0gXCJcIjtcblxuICAgIGRpc3BsYXlUb0RvcygpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGhhbmRsZUNoZWNrQm94KGNoZWNrQm94LCB0YXNrVGl0bGUsIHRhc2tEZXNjcmlwdGlvbikge1xuICBjaGVja0JveC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGV2ZW50KSA9PiB7XG4gICAgaWYgKGNoZWNrQm94LmNoZWNrZWQgPT09IHRydWUpIHtcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwidG9Eb3NcIiwgSlNPTi5zdHJpbmdpZnkodG9Eb3MpKTtcbiAgICAgIGNvbnNvbGUubG9nKHRvRG9zKTtcblxuICAgICAgY29uc3QgbGlzdENvbnRhaW5lckVsID0gZXZlbnQudGFyZ2V0O1xuICAgICAgY29uc29sZS5sb2cobGlzdENvbnRhaW5lckVsKTtcbiAgICAgIGNvbnN0IGluZGV4ID0gbGlzdENvbnRhaW5lckVsLmRhdGFzZXQuaW5kZXg7XG5cbiAgICAgIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICAgICAgbGlzdENvbnRhaW5lckVsLnJlbW92ZShsaXN0Q29udGFpbmVyRWwpO1xuICAgICAgICB0b0Rvcy5zcGxpY2UoaW5kZXgsIDEpO1xuXG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwidG9Eb3NcIiwgSlNPTi5zdHJpbmdpZnkodG9Eb3MpKTtcbiAgICAgICAgY29uc29sZS5sb2codG9Eb3MpO1xuICAgICAgICB1c2VyTGlzdC50ZXh0Q29udGVudCA9IFwiXCI7XG4gICAgICAgIGRpc3BsYXlUb0RvcygpO1xuICAgICAgICBhbGVydChcIlRhc2sgY29tcGxldGVkIVwiKTtcbiAgICAgIH1cblxuICAgICAgY29uc29sZS5sb2coXCJ0cnVlXCIpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0YXNrVGl0bGUuc3R5bGUudGV4dERlY29yYXRpb24gPSBcIm5vbmVcIjtcbiAgICAgIHRhc2tEZXNjcmlwdGlvbi5zdHlsZS50ZXh0RGVjb3JhdGlvbiA9IFwibm9uZVwiO1xuICAgICAgY29uc29sZS5sb2coXCJmYWxzZVwiKTtcbiAgICB9XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBkZWxldGVUb0RvKCkge1xuICBjb25zdCBsaXN0Q29udGFpbmVyRWwgPSB0aGlzLmNsb3Nlc3QoXCIubGlzdENvbnRhaW5lclwiKTtcbiAgY29uc3QgYnV0dG9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuZGVsZXRlVGFza1wiKTtcbiAgY29uc3QgaW5kZXggPSBBcnJheS5mcm9tKGJ1dHRvbnMpLmluZGV4T2YodGhpcyk7XG5cbiAgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgIGxpc3RDb250YWluZXJFbC5yZW1vdmUobGlzdENvbnRhaW5lckVsKTtcbiAgICB0b0Rvcy5zcGxpY2UoaW5kZXgsIDEpO1xuXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJ0b0Rvc1wiLCBKU09OLnN0cmluZ2lmeSh0b0RvcykpO1xuICAgIGNvbnNvbGUubG9nKHRvRG9zKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBjYW5jZWxGb3JtRGlzcGxheSgpIHtcbiAgLy8gICBsZXQgYWRkVG9kb0J0bk9uTW9iaWxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNhZGRUb2RvQnRuQ29udGFpbmVyMlwiKTtcbiAgLy8gICBjb25zb2xlLmxvZyhhZGRUb2RvQnRuT25Nb2JpbGUpO1xuXG4gIC8vIGxldCBtZWRpYVF1ZXJ5ID0gd2luZG93Lm1hdGNoTWVkaWEoJyhtYXgtd2lkdGg6IDUwMHB4KScpXG4gIC8vIGlmIChtZWRpYVF1ZXJ5Lm1hdGNoZXMpIHtcbiAgLy8gICAgYWRkVG9kb0J0bk9uTW9iaWxlLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG4gIC8vICAgY29uc29sZS5sb2coJ3RydWUnKVxuICAvLyB9IGVsc2Uge1xuICAvLyAgIGNvbnNvbGUubG9nKCdmYWxzZScpXG5cbiAgLy8gfVxuICBjb25zdCBpbnRpYWxUZXh0RGlzcGxheUNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgXCIuaW50aWFsVGV4dERpc3BsYXlDb250YWluZXJcIixcbiAgKTtcbiAgaW50aWFsVGV4dERpc3BsYXlDb250YWluZXIuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcbiAgdGFza1RpdGxlLnZhbHVlID0gXCJcIjtcbiAgdGFza0Rlc2NyaXB0aW9uLnZhbHVlID0gXCJcIjtcbiAgZHVlRGF0ZS52YWx1ZSA9IFwiXCI7XG4gIHRhc2tQcmlvcml0eS52YWx1ZSA9IFwiU2VsZWN0IFByaW9yaXR5XCI7XG4gIGZvcm0uc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuIFxuXG59XG5jYW5jZWxGb3JtLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBjYW5jZWxGb3JtRGlzcGxheSk7XG5cbmZ1bmN0aW9uIHN1Ym1pdEZvcm0oKSB7XG4gIHVzZXJsaXN0LnRleHRDb250ZW50ID0gXCJcIjtcblxuICBhY2NlcHRJbnB1dCgpO1xuICBkaXNwbGF5VG9Eb3MoKTtcbn1cbmZvcm0uYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCAoZXZlbnQpID0+IGV2ZW50LnByZXZlbnREZWZhdWx0KCkpO1xuc3VibWl0QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBzdWJtaXRGb3JtKTtcblxuZnVuY3Rpb24gZGlzcGxheUluYm94Rm9ybSgpIHtcbiAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImhlYWRlciBoMVwiKTtcbiAgdXNlcmxpc3QudGV4dENvbnRlbnQgPSBcIlwiO1xuICBoZWFkZXIudGV4dENvbnRlbnQgPSBcIkluYm94XCI7XG5cbiAgZGlzcGxheVRvRG9zKCk7XG4gIGZvcm0uc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcblxuICBpZiAoaW5wdXROZXdwcm9qZWN0Rm9ybU5hbWUuc3R5bGUuZGlzcGxheSA9PT0gXCJibG9ja1wiKSB7XG4gICAgaW5wdXROZXdwcm9qZWN0Rm9ybU5hbWUuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICB9XG4gIHByb2plY3RGb3JtLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbn1cbmluYm94LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBkaXNwbGF5SW5ib3hGb3JtKTtcbiIsImltcG9ydCB7IGNyZWF0ZU5ld1Byb2plY3RUYXNrQnRuIH0gZnJvbSBcIi4vZG9tLUVsLTJcIjtcbmxldCBhc2lkZUVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIm1haW4gYXNpZGVcIik7XG5sZXQgdG9nZ2xlTWVudUljb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3RvZ2dsZU1lbnVJY29uXCIpO1xubGV0IHNpZGVCYXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYXNpZGUjbWVudVwiKTtcbmxldCBwcm9qZWN0RHJvcERvd24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Byb2plY3QtZHJvcGRvd25cIik7XG4vLyBsZXQgYWRkTmV3UHJvamVjdEVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNhZE5ld1Byb2plY3RFbFwiKTtcblxuY29uc29sZS5sb2cocHJvamVjdERyb3BEb3duKTtcblxuY29uc29sZS5sb2coYXNpZGVFbCk7XG5cbmZ1bmN0aW9uIHRvZ2dlbE1lbnUoKSB7XG4gIGNvbnNvbGUubG9nKFwidG9nZ2xlIGVsZW1lbnQgaXMgY2xpY2tlZFwiKTtcbiAgdG9nZ2xlTWVudUljb24uY2xhc3NMaXN0LnRvZ2dsZShcImFjdGl2ZVwiKTtcbiAgc2lkZUJhci5jbGFzc0xpc3QudG9nZ2xlKFwiYWN0aXZlXCIpO1xufVxudG9nZ2xlTWVudUljb24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHRvZ2dlbE1lbnUpO1xuXG5mdW5jdGlvbiByZW1vdmVTaWRlQmFyKGUpIHtcbiAgaWYgKGUudGFyZ2V0LnRhZ05hbWUgPT09IFwiT1BUSU9OXCIpIHtcbiAgICB0b2dnbGVNZW51SWNvbi5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xuICAgIHNpZGVCYXIuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcbiAgfSBlbHNlIGlmIChcbiAgICBlLnRhcmdldCAhPT0gdG9nZ2xlTWVudUljb24gJiZcbiAgICBlLnRhcmdldCAhPT0gc2lkZUJhciAmJlxuICAgIGUudGFyZ2V0ICE9PSBwcm9qZWN0RHJvcERvd25cbiAgKSB7XG4gICAgdG9nZ2xlTWVudUljb24uY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcbiAgICBzaWRlQmFyLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XG4gIH1cbn1cblxuZnVuY3Rpb24gb3B0aW9uU2VsZWN0ZWQoKSB7XG4gIHRvZ2dsZU1lbnVJY29uLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XG4gIHNpZGVCYXIuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcbn1cblxucHJvamVjdERyb3BEb3duLmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgb3B0aW9uU2VsZWN0ZWQpO1xuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHJlbW92ZVNpZGVCYXIpO1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyYztcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSB7XG5cdFx0XHR2YXIgaSA9IHNjcmlwdHMubGVuZ3RoIC0gMTtcblx0XHRcdHdoaWxlIChpID4gLTEgJiYgKCFzY3JpcHRVcmwgfHwgIS9eaHR0cChzPyk6Ly50ZXN0KHNjcmlwdFVybCkpKSBzY3JpcHRVcmwgPSBzY3JpcHRzW2ktLV0uc3JjO1xuXHRcdH1cblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJtYWluXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCBcIi4uL3NyYy9zdHlsZXMuY3NzXCI7XG5pbXBvcnQgZG9tRWwgZnJvbSBcIi4vZG9tLUVsXCI7XG5pbXBvcnQgZG9tRWwyIGZyb20gXCIuL2RvbS1FbC0yXCI7XG5pbXBvcnQgcmVzcG9uc2l2ZSBmcm9tIFwiLi9yZXNwb25zaXZlXCI7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=