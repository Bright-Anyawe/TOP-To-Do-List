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

  div.sideBarContentContainer {
    margin: 40px 0 0 -4px;
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
    padding: 5px;
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
    max-height: 155px;
    max-width: 515px;
    display: none;
    max-width: 500px;
    margin: 9px 10px 0 13px;
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

  #priority option {
    color: white;
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
    max-width: 230px;
    max-height: 40px;
    margin: 0;
    font-size: 1.1rem;
  }

  .second-inputContainer input.description {
    max-width: 150px;
    font-size: 1.1rem;
  }



  #form .second-inputContainer input,
  .PdescriptionInputContainer input {
    max-width: 250px;
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
    padding: 8px;
    border-radius: 6px;
    max-width: 104px;
    min-width: 80px;
  }

  #configPriorityDateOnMobile input#datePicker {

    max-width: 80px;
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
    max-width: 180px;
  }

  div.sideBarContentContainer {
    margin: 40px 0 0 0px;
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
    height: 160px;
    display: none;
    max-width: 700px;

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
    height: 160px;
    display: none;
    max-width: 693px;
    padding-left: 1rem;
    /* margin: 9px 61px; */
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

  select#priority option {
    color: white;
    font-weight: 700;
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
    word-break: break-all;
    white-space: normal;
    overflow-wrap: break-word;
    border-radius: 10px;
    box-shadow: 1px 0px 3px 0px;
    /* margin: 18px 60px; */
    padding: 15px;
  }

  .inner_container #form {
    background-color: #64748b;
    border-radius: 10px;
    height: 180px;
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
    height: 160px;
    display: none;
    max-width: 693px;
    padding-left: 1rem;
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
  grid-template-columns: 230px 1fr;
  grid-template-rows: 100px minmax(100vh, 600px);
  ;
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

.headerTextContent {
  font-weight: 700;

}

aside {
  grid-area: 1/ 1/ 4/ 2;
  border-radius: 5px;
  background-color: #e2e8f0;
}

.sideBarContentContainer {
  margin: 40px 0 0 0px;
}

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
  word-break: break-all;
  white-space: normal;
  overflow-wrap: break-word;
  border-radius: 10px;
  box-shadow: 1px 0px 3px 0px;
  margin: 18px 18px;
  padding: 15px;
  transition: transform 3ms ease;
}

.listContainer:hover {
  transform: scale(1.01);
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
  max-width: 140px;
  min-width: 70px;


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
  max-width: 200px;
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
  transition: transform 3ms ease;
}

input.SaveProjectName:hover {
  transform: scale(1.03)
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
  transition: transform 3ms ease;

}

#ProjectsFormNameContainerEl .Cancel:hover {
  transform: scale(1.03)
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
  font-weight: 700;
  background: #f0f0f0;
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
}`, "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"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","sourcesContent":["body {\n  padding: 0;\n  margin: 0;\n  box-sizing: border-box;\n}\n\n:root {\n  --hover-color: #fda4af;\n  --background-color: #6f9e9e;\n}\n\n* {\n  padding: 0;\n  margin: 0;\n  box-sizing: border-box;\n  color: #78350f;\n  font-family: \"Roboto\", sans-serif;\n  font-weight: 400;\n  font-style: normal;\n}\n\n@media (max-width: 550px) {\n  body main {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    z-index: 1;\n  }\n\n  main header {\n    background-color: #fda4af;\n    text-align: center;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    gap: 10px;\n  }\n\n  #toggleMenuIcon {\n    position: fixed;\n    top: 100px;\n    right: 10px;\n    width: 50px;\n    height: 50px;\n    /* \n    top: 106px;\n    right: 10px;\n    width: 50px; */\n    background-color: #6b8888;\n    cursor: pointer;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    border-radius: 8px;\n    transition: top 0.3s;\n\n    z-index: 1000;\n  }\n\n  h1.headerTextContent {\n    font-weight: 600;\n    padding: 30px;\n  }\n\n  #toggleMenuIcon::before {\n    content: \"\";\n    position: absolute;\n    width: 28px;\n    height: 2px;\n    background-color: #fff;\n    transform: translateY(-5px);\n    transition: 0.2s;\n  }\n\n  #toggleMenuIcon::after {\n    content: \"\";\n    position: absolute;\n    width: 28px;\n    height: 2px;\n    background-color: #fff;\n    transform: translateY(5px);\n    transition: 0.2s;\n  }\n\n  #toggleMenuIcon.active::before {\n    transform: translateY(0px) rotate(45deg);\n  }\n\n  #toggleMenuIcon.active::after {\n    transform: translateY(0px) rotate(-45deg);\n  }\n\n  aside#menu {\n    display: block;\n    position: fixed;\n    top: 0;\n    left: -220px;\n    width: 220px;\n    height: 100vh;\n    color: white;\n    filter: white;\n    background-color: #7989a1;\n    transition: 0.3s;\n    z-index: 1000;\n    fill: white;\n  }\n\n  aside#menu.active {\n    left: 0;\n  }\n\n  main aside {\n    display: none;\n    border-radius: 5px;\n    background-color: #e2e8f0;\n  }\n\n  p#addNewProjectEl, p.inbox, select#project-dropdown {\n    color: white;\n  }\n\n  main #Container {\n    display: flex;\n    flex-direction: column;\n    flex-wrap: wrap;\n    border-radius: 5px;\n  }\n\n  header .menuController {\n    display: block;\n    width: 40px;\n    height: 40px;\n  }\n\n  header .menuController svg {\n    display: block;\n    width: 40px;\n    height: 40px;\n    fill: white;\n    background-color: black;\n    border-radius: 10px;\n  }\n\n  #userlist {\n    display: flex;\n    flex-direction: column;\n    max-width: 550px;\n  }\n\n  div.listContainer {\n    display: flex;\n    gap: 5px;\n    max-width: 515px;\n    border-radius: 10px;\n    box-shadow: 1px 0px 3px 0px;\n    margin: 14px 14px 0 19px;\n    word-wrap: break-word;\n    word-break: break-all;\n    white-space: normal;\n    overflow-wrap: break-word;\n\n    padding: 10px;\n  }\n\n  #userlist .intialTextDisplay {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    text-align: center;\n  }\n\n  .intialTextDisplay img {\n    max-width: 100%;\n    height: auto;\n    padding: 18px;\n    border-radius: 30px;\n    object-fit: contain;\n  }\n\n  .popUpContainer {\n    display: flex;\n    max-width: 200px;\n    padding: 30px;\n    background-color: #07c4dd;\n    border: 1px solid black;\n  }\n\n  div.sideBarContentContainer {\n    margin: 40px 0 0 -4px;\n  }\n\n  #userlist #addTodoBtnContainer {\n    display: flex;\n    align-items: center;\n    gap: 5px;\n    margin: 27px 0 11px 26px;\n  }\n\n  #task {\n    display: flex;\n    align-items: center;\n    gap: 5px;\n    margin: 27px 0 11px 26px;\n  }\n\n  #userlist #addTodoBtnContainer svg {\n    background-color: #dc2626;\n    border-radius: 50%;\n    fill: white;\n  }\n\n  #userlist #addTodoBtnContainer :hover {\n    cursor: pointer;\n    -webkit-transform: scale(1.09);\n  }\n\n  #userlist #addTodoBtnContainer button {\n    border: 0;\n    font-size: 1.3rem;\n    color: #b91c1c;\n    background-color: inherit;\n    transition: 0.3s;\n  }\n\n  #userlist #addTodoBtnContainer button:hover {\n    cursor: pointer;\n    -webkit-transform: scale(1.09);\n  }\n\n  .inner_container #form {\n    background-color: #64748b;\n    border-radius: 10px;\n    max-height: 200px;\n    max-width: 515px !important;\n    height: 170px;\n    display: none;\n    max-width: 480px;\n    margin: 10px 10px 0 10px;\n  }\n\n  div.inputNewprojectFormName {\n    display: none;\n    background-color: #cee3e3;\n    max-width: 300px;\n    max-height: 300px;\n    border-radius: 10px;\n    padding: 25px;\n    text-align: center;\n    margin: 60px 0 0 0;\n    box-shadow: 0px 9px 3px 0px;\n  }\n\n  .inputNewprojectFormName h2 {\n    margin: 0 0 10px 0;\n  }\n\n  .inputNewprojectFormName .inputNewProjectName {\n    max-width: 300px;\n    max-height: 35px;\n    padding: 5px;\n    border: none;\n    border-radius: 7px;\n  }\n\n  input.SaveProjectName {\n    padding: 9px;\n    border: none;\n    border-radius: 8px;\n    max-width: 100px;\n    height: 40px;\n    font-size: 19px;\n  }\n\n  .projectNameSaverBtnContainer {\n    margin: 10px 0;\n  }\n\n  .projectNameSaverBtnContainer button {\n    padding: 9px;\n    border: none;\n    border-radius: 8px;\n    width: 100px;\n    height: 40px;\n    font-size: 19px;\n  }\n\n  .inner_container #ProjectForm {\n    background-color: #64748b;\n    border-radius: 10px;\n    max-height: 155px;\n    max-width: 515px;\n    display: none;\n    max-width: 500px;\n    margin: 9px 10px 0 13px;\n  }\n\n  .projectFormDetails {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    padding: 10px;\n    height: 80px;\n  }\n\n  div.priorityDateOnLargeScreen {\n    display: flex;\n    position: relative;\n    top: 0;\n    max-width: 200px;\n    flex-direction: column;\n  }\n\n  .projectInputContainer {\n    max-width: 200px;\n  }\n\n  .projectInputContainer p input {\n    max-width: 200px;\n  }\n\n  .innerTaskContainer .edit {\n    max-width: 140px;\n  }\n\n  .projectInputContainer .PdescriptionInputContainer {\n    margin: 0;\n  }\n\n  input#ProjectdatePicker {\n    padding: 2px;\n    border-radius: 5px;\n    border: none;\n    height: 32px;\n    font-size: 0.9rem;\n    font-weight: 700;\n    background: #d4d4d8;\n    text-align: center;\n  }\n\n  select#projectPriority {\n    background-color: #44403c;\n    color: #fafafa;\n    font-size: 0.85rem;\n    font-weight: 600;\n    height: 35px;\n  }\n\n\n  div.projectButtonsContainer button {\n    border: none;\n    border-radius: 7px;\n    padding: 9px;\n    font-size: 1rem;\n    font-weight: 600;\n  }\n\n\n  div#configPriorityDateOnMobile {\n    display: flex;\n    flex-direction: column;\n    max-width: 200px;\n    position: static;\n  }\n\n  #configPriorityDateOnMobile #priority,\n  #datePicker {\n    padding: 2px;\n    border-radius: 6px;\n    max-width: 104px;\n    min-width: 80px;\n  }\n\n  #priority option {\n    color: white;\n  }\n\n  #ProjectForm .footer {\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n    padding: 0 10px;\n    gap: 0;\n  }\n\n  #ProjectForm .projectButtonsContainer {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    padding: 0 10px;\n    gap: 0;\n  }\n\n  #form .formDetails {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    padding: 10px;\n    margin: 0;\n  }\n\n  #formFooterOnMobile {\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n    padding: 0 10px;\n  }\n\n  #formFooterOnMobile .buttons {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    padding: 0 10px;\n    margin: 0;\n    gap: 0;\n  }\n\n  .priorityDateLargeScreen {\n    display: flex;\n    flex-direction: column;\n  }\n\n  #form .inputs {\n    display: flex;\n    flex-direction: column;\n    max-width: 150px;\n  }\n\n  #form .first-inputContainer input,\n  .PtitleInputContainer input {\n    max-width: 305px;\n    max-height: 40px;\n    border: none;\n    outline: none;\n    color: white;\n    /* margin: 10px 0; */\n    background-color: inherit;\n  }\n\n  #form .first-inputContainer input, .second-inputContainer input {\n    max-width: 230px;\n    max-height: 40px;\n    margin: 0;\n    font-size: 1.1rem;\n  }\n\n  .second-inputContainer input.description {\n    max-width: 150px;\n    font-size: 1.1rem;\n  }\n\n\n\n  #form .second-inputContainer input,\n  .PdescriptionInputContainer input {\n    max-width: 250px;\n    max-height: 40px;\n    border: none;\n    outline: none;\n    color: white;\n    background-color: inherit;\n    margin: 0;\n  }\n\n  #form .other-options-on-forms button,\n  #configPriorityDateOnMobile #priority,\n  #datePicker {\n    padding: 8px;\n    border-radius: 6px;\n    max-width: 104px;\n    min-width: 80px;\n  }\n\n  #configPriorityDateOnMobile input#datePicker {\n\n    max-width: 80px;\n  }\n}\n\n@media (min-width: 551px) and (max-width: 768px) {\n  body main {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n  }\n\n  main header {\n    background-color: #fda4af;\n    text-align: center;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    gap: 10px;\n    height: 100px;\n  }\n\n  main aside {\n    display: none;\n    border-radius: 5px;\n    background-color: #e2e8f0;\n    z-index: 2;\n  }\n\n  aside ul,\n  ul select {\n    display: flex;\n    flex-direction: column;\n    /* color: white; */\n    fill: #78350f;\n  }\n\n  li.inbox {\n    font-size: 1.4rem;\n    color: white;\n  }\n\n  li#addNewProjectEl {\n    margin: 0;\n    font-size: 1.3rem;\n    color: white;\n  }\n\n  select#project-dropdown {\n    background-color: inherit;\n    max-width: 180px;\n  }\n\n  div.sideBarContentContainer {\n    margin: 40px 0 0 0px;\n  }\n\n\n\n  main #Container {\n    display: flex;\n    flex-direction: column;\n    flex-wrap: wrap;\n    border-radius: 5px;\n    z-index: 1;\n  }\n\n  header .menuController {\n    display: block;\n    width: 40px;\n    height: 40px;\n  }\n\n  #toggleMenuIcon {\n    position: fixed;\n    top: 20px;\n    right: 20px;\n    width: 50px;\n    height: 50px;\n    background-color: #6f9e9e;\n    cursor: pointer;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    border-radius: 8px;\n    transition: top 0.3s;\n    z-index: 1000;\n\n    z-index: 1000;\n  }\n\n  #toggleMenuIcon::before {\n    content: \"\";\n    position: absolute;\n    width: 28px;\n    height: 2px;\n    background-color: #fff;\n    transform: translateY(-5px);\n    transition: 0.2s;\n  }\n\n  #toggleMenuIcon::after {\n    content: \"\";\n    position: absolute;\n    width: 28px;\n    height: 2px;\n    background-color: #fff;\n    transform: translateY(5px);\n    transition: 0.2s;\n  }\n\n  #toggleMenuIcon.active::before {\n    transform: translateY(0px) rotate(45deg);\n  }\n\n  #toggleMenuIcon.active::after {\n    transform: translateY(0px) rotate(-45deg);\n  }\n\n  aside#menu {\n    display: block;\n    position: fixed;\n    top: 0;\n    left: -220px;\n    width: 220px;\n    height: 100vh;\n    background-color: #bfc6c6;\n    transition: 0.3s;\n  }\n\n  aside#menu.active {\n    left: 0;\n  }\n\n  aside ul {\n    display: flex;\n    flex-direction: column;\n    color: white;\n    fill: white;\n  }\n\n  p#addNewProjectEl, p.inbox, select#project-dropdown {\n    /* color: white; */\n\n    font-weight: 600;\n  }\n\n  header .menuController svg {\n    display: block;\n    width: 40px;\n    height: 40px;\n    fill: white;\n    background-color: black;\n    border-radius: 10px;\n  }\n\n  #userlist #addTodoBtnContainer {\n    display: flex;\n    align-items: center;\n    gap: 5px;\n    margin: 27px 0 11px 26px;\n  }\n\n  #task {\n    display: flex;\n    align-items: center;\n    gap: 5px;\n    margin: 27px 0 11px 26px;\n  }\n\n  #userlist #addTodoBtnContainer svg {\n    background-color: #dc2626;\n    border-radius: 50%;\n    fill: white;\n  }\n\n  #userlist #addTodoBtnContainer :hover {\n    cursor: pointer;\n    -webkit-transform: scale(1.09);\n  }\n\n  #userlist #addTodoBtnContainer button {\n    border: 0;\n    font-size: 1.4rem;\n\n    color: #b91c1c;\n    background-color: inherit;\n  }\n\n  #userlist #addTodoBtnContainer button:hover {\n    cursor: pointer;\n    -webkit-transform: scale(1.09);\n  }\n\n  div.listContainer {\n    display: flex;\n    gap: 5px;\n    max-width: 714px;\n    word-wrap: break-word;\n    word-break: break-all;\n    white-space: normal;\n    overflow-wrap: break-word;\n    border-radius: 10px;\n    box-shadow: 1px 0px 3px 0px;\n    /* margin: 18px 60px; */\n    padding: 15px;\n  }\n\n  #userlist .intialTextDisplay {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    text-align: center;\n  }\n\n  .intialTextDisplay p {\n    max-width: 500px;\n    display: flex;\n    max-width: 500px;\n    flex-direction: column;\n    flex-wrap: wrap;\n  }\n\n  .intialTextDisplay img {\n    width: 100%;\n    height: auto;\n    padding: 20px;\n    border-radius: 41px;\n    object-fit: contain;\n  }\n\n  .inner_container #form {\n    background-color: #64748b;\n    border-radius: 10px;\n    height: 160px;\n    display: none;\n    max-width: 700px;\n\n    margin: 17px;\n  }\n\n  #form div.formDetails {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n\n    padding: 10px;\n    margin: 0;\n  }\n\n  .priorityDateLargeScreen {\n    display: none;\n  }\n\n  #form .inputs {\n    max-width: 150px;\n  }\n\n  #form .first-inputContainer input,\n  .PtitleInputContainer input,\n  #form .second-inputContainer input,\n  .PdescriptionInputContainer input {\n    max-width: 600px;\n    height: 25px;\n    border: none;\n    outline: none;\n    color: white;\n    margin: 10px 0 0 0;\n    background-color: inherit;\n  }\n\n  p.second-inputContainer {\n    margin: 0;\n  }\n\n  #form .buttons {\n    display: flex;\n    margin: 1px 23px;\n  }\n\n  #configPriorityDateOnMobile {\n    display: flex;\n    flex-direction: column;\n    position: static;\n  }\n\n  #form .other-options-on-forms button,\n  #priority,\n  #datePicker {\n    padding: 7px;\n    border-radius: 9px;\n  }\n\n  form#ProjectForm {\n    background-color: #64748b;\n    border-radius: 10px;\n    height: 160px;\n    display: none;\n    max-width: 693px;\n    padding-left: 1rem;\n    /* margin: 9px 61px; */\n  }\n\n  div.projectFormDetails {\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    top: 0;\n  }\n\n  */ .projectButtonsContainer {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n  }\n\n  select#priority {\n    padding: 8px;\n    border-radius: 9px;\n  }\n\n  select#priority option {\n    color: white;\n    font-weight: 700;\n  }\n\n  input#datePicker {\n    padding: 3px;\n    border-radius: 9px;\n  }\n}\n\n\n@media (min-width: 769px) and (max-width: 1000px) {\n  body main {\n    display: grid;\n  }\n\n  main header {\n    grid-area: 1 / 2 / 2 / 6;\n\n    background-color: #fda4af;\n    text-align: center;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    gap: 10px;\n  }\n\n  main aside {\n    border-radius: 5px;\n    background-color: #e2e8f0;\n  }\n\n  main #Container {\n    display: flex;\n    flex-direction: column;\n    flex-wrap: wrap;\n    border-radius: 5px;\n    z-index: 1;\n  }\n\n  header .menuController {\n    display: block;\n    width: 40px;\n    height: 40px;\n  }\n\n  header .menuController svg {\n    display: block;\n    width: 40px;\n    height: 40px;\n    fill: white;\n    background-color: black;\n    border-radius: 10px;\n  }\n\n\n\n\n  #userlist .intialTextDisplay {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    text-align: center;\n  }\n\n  #userlist .intialTextDisplay p {\n    font-size: 1.2rem;\n    text-align: center;\n    font-weight: 500;\n    margin: 10px 0 0 0;\n    max-width: 600px;\n  }\n\n  #userlist #addTodoBtnContainer {\n    display: none;\n    align-items: center;\n    gap: 5px;\n    margin: 27px 0 11px 26px;\n  }\n\n  #task {\n    display: flex;\n    align-items: center;\n    gap: 5px;\n    margin: 27px 0 11px 26px;\n  }\n\n  #userlist #addTodoBtnContainer svg {\n    background-color: #dc2626;\n    border-radius: 50%;\n    fill: white;\n  }\n\n  #userlist #addTodoBtnContainer :hover {\n    cursor: pointer;\n    -webkit-transform: scale(1.09);\n  }\n\n  #userlist #addTodoBtnContainer button {\n    border: 0;\n    font-size: 16px;\n    color: #b91c1c;\n    background-color: inherit;\n  }\n\n  #userlist #addTodoBtnContainer button:hover {\n    cursor: pointer;\n    -webkit-transform: scale(1.09);\n  }\n\n  div.listContainer {\n    display: flex;\n    gap: 5px;\n    max-width: 714px;\n    word-break: break-all;\n    white-space: normal;\n    overflow-wrap: break-word;\n    border-radius: 10px;\n    box-shadow: 1px 0px 3px 0px;\n    /* margin: 18px 60px; */\n    padding: 15px;\n  }\n\n  .inner_container #form {\n    background-color: #64748b;\n    border-radius: 10px;\n    height: 180px;\n    display: none;\n    max-width: 750px;\n\n    margin: 17px;\n  }\n\n  #form div.formDetails {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n\n    padding: 9px 20px;\n    margin: 0;\n  }\n\n  .priorityDateLargeScreen {\n    display: none;\n  }\n\n  #form .inputs {\n    max-width: 150px;\n  }\n\n  #form .first-inputContainer input,\n  .PtitleInputContainer input {\n    max-width: 420px;\n    max-height: 60px;\n    border: none;\n    outline: none;\n    color: white;\n    background-color: inherit;\n    margin: 0;\n  }\n\n  #form .second-inputContainer input,\n  .PdescriptionInputContainer input {\n    max-width: 420px;\n    max-height: 60px;\n    border: none;\n    outline: none;\n    color: rgb(90, 77, 77);\n    background-color: inherit;\n    margin: 0;\n  }\n\n  #form .buttons {\n    display: flex;\n    justify-content: space-between;\n    margin: 1px 33px;\n  }\n\n  form#ProjectForm {\n    background-color: #64748b;\n    border-radius: 10px;\n    height: 160px;\n    display: none;\n    max-width: 693px;\n    padding-left: 1rem;\n  }\n\n  div.projectFormDetails {\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    top: 0;\n  }\n\n  div.priorityDateOnLargeScreen {\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n    align-items: center;\n    top: 0;\n  }\n\n  .projectButtonsContainer {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n  }\n\n  #configPriorityDateOnMobile {\n    display: flex;\n    flex-direction: column;\n    position: static;\n  }\n\n  #form .other-options-on-forms button,\n  #priority,\n  #datePicker {\n    padding: 8px;\n    border-radius: 6px;\n    border: none;\n  }\n\n\n}\n\nmain {\n  display: grid;\n  grid-template-columns: 230px 1fr;\n  grid-template-rows: 100px minmax(100vh, 600px);\n  ;\n}\n\nheader {\n  grid-area: 1 / 2 / 2 / 6;\n  background-color: #fda4af;\n  text-align: center;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-weight: 700;\n}\n\n.headerTextContent {\n  font-weight: 700;\n\n}\n\naside {\n  grid-area: 1/ 1/ 4/ 2;\n  border-radius: 5px;\n  background-color: #e2e8f0;\n}\n\n.sideBarContentContainer {\n  margin: 40px 0 0 0px;\n}\n\n#Container {\n  grid-area: 2 / 2 / 3 / 4;\n\n  display: grid;\n  grid-template-columns: 100px 650px minmax(100px, 350px);\n  border-radius: 5px;\n}\n\n.inner_container {\n  grid-area: 1 / 2 / 3 / 3;\n}\n\n.intialTextDisplay {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  padding: 10px;\n}\n\n.intialTextDisplay p {\n  font-size: 1.2rem;\n  text-align: center;\n  font-weight: 800;\n  color: #78350f;\n  margin: 10px 0 0 0;\n}\n\n.intialTextDisplay img {\n  width: 100%;\n  height: auto;\n  border-radius: 30px;\n  padding: 20px;\n}\n\n#addTodoBtnContainer {\n  display: none;\n}\n\n.empty {\n  grid-area: 1 / 3 / 5 / 4;\n  background-color: #f8f8f8;\n  background-image: url(\"./images/Todo-1.jpg\");\n  background-size: cover;\n  background-position: center;\n}\n\n.menuController {\n  display: none;\n  width: 40px;\n  height: 40px;\n}\n\n.checkBox {\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  width: 20px;\n  height: 20px;\n  border: 1px solid #ccc;\n  border-radius: 3px;\n  outline: none;\n  cursor: pointer;\n  position: relative;\n}\n\n.checkBox::before {\n  content: \"\";\n  display: block;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  font-size: 16px;\n  color: rgb(22, 252, 22);\n  opacity: 0;\n  transition: opacity 0.3s ease;\n}\n\n.checkBox:hover::before {\n  content: \"✓\";\n  opacity: 0.5;\n}\n\nsvg {\n  width: 34px;\n  height: 33px;\n  pointer-events: none;\n\n}\n\n#task {\n  display: flex;\n  align-items: center;\n  gap: 5px;\n  margin: 27px 0 11px 26px;\n}\n\n#task svg {\n  background-color: #dc2626;\n  border-radius: 50%;\n  fill: white;\n}\n\n#task :hover {\n  cursor: pointer;\n  -webkit-transform: scale(1.09);\n}\n\n#task button {\n  border: 0;\n  font-size: 1.4rem;\n  color: #b91c1c;\n  background-color: inherit;\n  font-weight: 700;\n}\n\n#task button:hover {\n  cursor: pointer;\n  -webkit-transform: scale(1.09);\n}\n\nbutton.deleteTask {\n  padding: 10px;\n  border: none;\n  border-radius: 7px;\n  font-size: 1.1rem;\n  background-color: #e0487c;\n  color: white;\n  transition: transform 0.2s ease-out;\n}\n\nbutton.deleteTask:hover {\n  transform: scale(1.05);\n  background-color: #4b0707;\n\n}\n\nbutton.deleteTask:active {\n  transform: scale(0.9);\n}\n\n.listContainer {\n  display: flex;\n  gap: 5px;\n  max-width: 714px;\n  word-break: break-all;\n  white-space: normal;\n  overflow-wrap: break-word;\n  border-radius: 10px;\n  box-shadow: 1px 0px 3px 0px;\n  margin: 18px 18px;\n  padding: 15px;\n  transition: transform 3ms ease;\n}\n\n.listContainer:hover {\n  transform: scale(1.01);\n}\n\n.priorityDateOnLargeScreen {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  max-width: 200px;\n}\n\n.projectButtonsContainer {\n  display: flex;\n  justify-content: space-between;\n  padding-inline: 18px\n}\n\n.projectButtonsContainer button {\n  border: none;\n  border-radius: 7px;\n  padding: 9px;\n  font-size: 1.2rem;\n  font-weight: 600;\n}\n\n.excluded {\n  color: red;\n}\n\n.taskContainer {\n  display: flex;\n  flex: 1;\n  justify-content: space-between;\n}\n\n.taskTitle,\n.newProject-task-title,\n.editableSaveTaskEl {\n  margin: 0;\n  font-size: 1.3rem;\n  text-decoration: none;\n  text-decoration-color: red;\n}\n\n.taskDescription,\n.newProject-description {\n  margin: 0;\n  font-size: 1.2rem;\n}\n\n.taskPriority {\n  font-size: 19px;\n  border-radius: 6px;\n  background-color: #573d3d;\n  padding: 6px;\n  margin: 0 0 7px;\n  color: white;\n  text-align: center;\n  max-width: 140px;\n  min-width: 70px;\n\n\n}\n\n.taskPriority:hover {\n  transform: scale(1.05);\n  background-color: #9c1515;\n}\n\n\n.innerTaskHandler {\n  display: flex;\n  flex-direction: column;\n  justify-items: center;\n  justify-content: center;\n  align-items: center;\n  margin: 0px 15px 0 40px;\n}\n\naside ul li {\n  list-style: none;\n  display: inline-block;\n  width: 100%;\n  padding: 10px 20px;\n}\n\n.inbox-container {\n  display: flex;\n  align-items: center;\n  gap: 5px;\n  font-size: 1.3rem;\n}\n\n\n.inbox {\n  font-size: 1.4rem;\n}\n\n.inboxListContainer {\n  display: flex;\n  gap: 5px;\n}\n\n.inboxTaskContainer {\n  display: flex;\n  flex: 1;\n  justify-content: space-between;\n}\n\n.inboxTaskTitle {\n  margin: 0;\n  font-size: 18px;\n}\n\n.inboxTaskDescription {\n  margin: 0;\n  font-size: 14px;\n}\n\n.inboxTaskPriority {\n  margin: 0 20px 0 0;\n  font-size: 1.3rem;\n\n}\n\n.dueDate {\n  margin: 0;\n  font-size: 1.2rem;\n}\n\n.edit {\n  border: none;\n  outline: none;\n  font-size: 17px;\n  max-width: 110px;\n  margin: 0 0;\n}\n\n#projects h3 {\n  margin: 0 0 0 10px;\n}\n\n#form {\n  background-color: #64748b;\n  border-radius: 10px;\n  height: 170px;\n  display: none;\n  padding-left: 1rem;\n  margin: 10px 10px 0 0;\n}\n\n.formDetails {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin: 12px 15px;\n}\n\ninput#datePicker {\n  max-width: 133px;\n}\n\n.buttons {\n  display: flex;\n  justify-content: space-between;\n  margin: 1px 33px;\n}\n\n.buttons button {\n  border: none;\n  border-radius: 7px;\n  padding: 7px;\n  transition: transform 0.2s ease-out;\n}\n\n.buttons button:hover {\n  transform: scale(1.05);\n}\n\n#ProjectForm {\n  background-color: #64748b;\n  border-radius: 10px;\n  height: 166px;\n  display: none;\n  padding: 10px;\n  margin: 15px 15px 0 17px;\n}\n\n.projectFormDetails {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding-left: 1rem;\n  top: 0;\n}\n\n.first-inputContainer input,\n.PtitleInputContainer input {\n  max-width: 600px;\n  height: 37px;\n  border: none;\n  outline: none;\n  color: white;\n  margin: 10px 0 0 0;\n  background-color: inherit;\n}\n\n.task-title,\n.description {\n  width: 350px;\n  font-size: 1.1rem;\n\n}\n\n.first-inputContainer input::placeholder,\n.PtitleInputContainer input::placeholder {\n  color: white;\n  padding: 0 10px;\n  opacity: 1;\n}\n\n.second-inputContainer input,\n.PdescriptionInputContainer input {\n  max-width: 600px;\n  height: 37px;\n  border: none;\n  outline: none;\n  color: white;\n  background-color: inherit;\n  margin: 0;\n}\n\n.pTitle, .pDescription {\n  width: 350px;\n  font-size: 1.07rem;\n}\n\n.second-inputContainer input::placeholder,\n.PdescriptionInputContainer input::placeholder {\n  padding: 0 10px;\n  color: white;\n  opacity: 1;\n}\n\n.first-inputContainer,\n.second-inputContainer {\n  margin: 10px 0 0 0;\n  font-size: 1rem;\n}\n\n.submitBtn:active {\n  transform: active scale(1.1);\n}\n\n.other-options-on-forms button,\n#priority,\ninput#datePicker {\n  transition: transform 0.3s ease-in;\n  padding: 7px;\n  border-radius: 7px;\n  border: none;\n  background-color: #083344;\n  color: white;\n  font-size: 1.1rem;\n  font-weight: 600;\n}\n\n#priority {\n  margin: 10px 0 8px 0;\n}\n\n#projectPriority,\n.footer {\n  padding: 7px;\n  border-radius: 5px;\n  margin: 0 4px 5px 0;\n\n}\n\n\n\n#projectPriority, #projectPriority option {\n  background-color: #44403c;\n  color: #fafafa;\n  font-size: 1.2rem;\n  font-weight: 600;\n}\n\n\n\n.addProjectsContainer {\n  display: flex;\n\n  align-items: center;\n  gap: 10px;\n}\n\n.inbox-container:hover, .addProjectsContainer:hover, .project_text:hover, #project-dropdown:hover {\n  cursor: pointer;\n  -webkit-transform: scale(1.05);\n  text-decoration: underline;\n}\n\n\n.addProjectsContainer svg {\n  width: 25px;\n  height: 25px;\n}\n\n#addNewProjectEl {\n  margin: 0;\n  font-size: 1.3rem;\n}\n\n.project_text {\n  margin: 0 0 10px 17px;\n  display: flex;\n  align-self: center;\n  justify-self: center;\n  padding: 9px;\n  border-radius: 5px 0px 0px 5px;\n}\n\n\n#project-dropdown {\n  border: 0;\n  background-color: inherit;\n  font-size: 1.3rem;\n  font-weight: 550;\n  max-width: 200px;\n}\n\n\n#project-dropdown:focus {\n  border: none;\n  outline: none;\n}\n\n#newProjectsFormContainerEl {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  justify-items: center;\n}\n\n#ProjectsFormNameContainerEl {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  justify-items: center;\n}\n\n.inputNewprojectFormName {\n  display: none;\n  background-color: #cee3e3;\n  max-width: 400px;\n  max-height: 300px;\n  border-radius: 10px;\n  padding: 46px;\n  text-align: center;\n  margin: 60px 0 0 0;\n  box-shadow: 0px 9px 3px 0px;\n}\n\n.inputNewprojectFormName h2 {\n  margin: 0 0 10px 0;\n}\n\n.inputNewProjectName {\n  max-width: 350px;\n  max-height: 35px;\n  padding: 17px;\n  border: none;\n  border-radius: 7px;\n  font-size: 19px;\n}\n\ninput.SaveProjectName {\n  padding: 9px;\n  border: none;\n  border-radius: 8px;\n  max-width: 100px;\n  height: 40px;\n  font-size: 19px;\n  background-color: rgb(240, 59, 134);\n  color: white;\n  transition: transform 3ms ease;\n}\n\ninput.SaveProjectName:hover {\n  transform: scale(1.03)\n}\n\n.projectNameSaverBtnContainer {\n  margin: 10px 0;\n}\n\n.projectNameSaverBtnContainer button {\n  padding: 9px;\n  border: none;\n  border-radius: 8px;\n  width: 100px;\n  height: 40px;\n  font-size: 19px;\n}\n\n#ProjectsFormNameContainerEl .Cancel {\n  background-color: grey;\n  color: white;\n  transition: transform 3ms ease;\n\n}\n\n#ProjectsFormNameContainerEl .Cancel:hover {\n  transform: scale(1.03)\n}\n\n#newProjectTasksContainer {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n#newProjectTaskBtnWrapper {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n#newProjectTasksInnerContainer {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 5px;\n  margin: 10px;\n  box-shadow: #5c5555 1px 3px 3px 1px;\n  border-radius: 10px;\n  padding: 10px;\n  width: 95px;\n\n}\n\nsvg.addTask {\n  border-radius: 50%;\n  fill: wheat;\n  background-color: red;\n}\n\n.newProjectAddBtn {\n  border: 0;\n  background-color: inherit;\n  font-weight: 500;\n}\n\n#ProjectdatePicker {\n  padding: 2px;\n  border-radius: 5px;\n  border: none;\n  height: 32px;\n  padding: 2px;\n  border-radius: 5px;\n  border: none;\n  height: 32px;\n  font-size: 1.1rem;\n  font-weight: 700;\n  background: #f0f0f0;\n  text-align: center;\n}\n\n#ProjectdatePicker input[type='date'] {\n  fill: white;\n}\n\n#submitBtnForProject {\n  padding: 7px;\n  border-radius: 9px;\n  /* font-size: 1.2rem;\n  font-weight: 600; */\n}\n\n#submitBtnForProject:active {\n  transform: scale(1.1);\n}\n\n.cancelForProjectBtn {\n  padding: 7px;\n  border-radius: 9px;\n}"],"sourceRoot":""}]);
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
  deleteTask.textContent = "Delete";

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

  if(_dom_El_2__WEBPACK_IMPORTED_MODULE_0__.inputNewprojectFormName.style.display = 'block') {
    _dom_El_2__WEBPACK_IMPORTED_MODULE_0__.inputNewprojectFormName.style.display = 'none'
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
  deleteTask.textContent = "Delete";

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzBHO0FBQ2pCO0FBQ087QUFDaEcsNENBQTRDLG1IQUFzQztBQUNsRiw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GLHlDQUF5QyxzRkFBK0I7QUFDeEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCO0FBQ3ZCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EscUJBQXFCOztBQUVyQjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQkFBMEI7QUFDMUI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCO0FBQ3pCOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7OztBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQjtBQUMxQjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSwwQkFBMEIsbUNBQW1DO0FBQzdEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFJQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CO0FBQ3BCOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLE9BQU8saUZBQWlGLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxPQUFPLE1BQU0sWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsY0FBYyxXQUFXLE1BQU0sS0FBSyxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsY0FBYyxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksV0FBVyxVQUFVLFVBQVUsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsV0FBVyxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxZQUFZLFFBQVEsS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sTUFBTSxVQUFVLFlBQVksYUFBYSxXQUFXLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLE1BQU0sWUFBWSxhQUFhLFdBQVcsVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLFNBQVMsTUFBTSxZQUFZLGFBQWEsV0FBVyxVQUFVLFVBQVUsWUFBWSxXQUFXLE1BQU0sT0FBTyxVQUFVLFlBQVksYUFBYSxXQUFXLE9BQU8sTUFBTSxVQUFVLE1BQU0sTUFBTSxLQUFLLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxXQUFXLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsTUFBTSxNQUFNLFVBQVUsWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxTQUFTLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsWUFBWSxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsTUFBTSxLQUFLLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsV0FBVyxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxVQUFVLGFBQWEsV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLGNBQWMsV0FBVyxVQUFVLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLE9BQU8sUUFBUSxZQUFZLFdBQVcsVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sT0FBTyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLE1BQU0sT0FBTyxLQUFLLEtBQUssVUFBVSxNQUFNLEtBQUssYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxVQUFVLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsTUFBTSxLQUFLLFlBQVksYUFBYSxXQUFXLFVBQVUsYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksY0FBYyxhQUFhLFdBQVcsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksT0FBTyxNQUFNLFlBQVksYUFBYSxXQUFXLFVBQVUsVUFBVSxZQUFZLFdBQVcsTUFBTSxNQUFNLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxPQUFPLFVBQVUsWUFBWSxXQUFXLE9BQU8sTUFBTSxLQUFLLFVBQVUsWUFBWSxjQUFjLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssYUFBYSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsTUFBTSxLQUFLLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxXQUFXLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxjQUFjLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLE1BQU0sTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksT0FBTyxPQUFPLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxNQUFNLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxRQUFRLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksUUFBUSxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxPQUFPLEtBQUssVUFBVSxVQUFVLE9BQU8sS0FBSyxZQUFZLGNBQWMsT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsTUFBTSxNQUFNLFlBQVksV0FBVyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxNQUFNLFVBQVUsYUFBYSxPQUFPLE1BQU0sVUFBVSxVQUFVLFVBQVUsTUFBTSxNQUFNLFlBQVksV0FBVyxVQUFVLFVBQVUsVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxPQUFPLE1BQU0sVUFBVSxVQUFVLFVBQVUsTUFBTSxNQUFNLFlBQVksV0FBVyxPQUFPLEtBQUssWUFBWSxPQUFPLE9BQU8sWUFBWSxXQUFXLFlBQVksV0FBVyxZQUFZLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sTUFBTSxVQUFVLFlBQVksY0FBYyxTQUFTLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxTQUFTLEtBQUssV0FBVyxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLFFBQVEsS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxXQUFXLFlBQVksUUFBUSxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxRQUFRLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLFdBQVcsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxLQUFLLE1BQU0sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxXQUFXLFVBQVUsVUFBVSxPQUFPLEtBQUssWUFBWSxXQUFXLGFBQWEsT0FBTyxLQUFLLEtBQUssTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksYUFBYSxXQUFXLFdB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QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDYkEsWUFBWSxhQUFhO0FBQ2M7QUFDdkMsWUFBWSxXQUFXOztBQUV2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNPO0FBQ1A7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTs7QUFFQSxXQUFXO0FBQ1g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVB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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLE1BQU0sOERBQXVCO0FBQzdCLElBQUksOERBQXVCO0FBQzNCO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDdGFxRDtBQUNyRDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDdENBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7Ozs7V0N6QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDbEJBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7Ozs7V0NyQkE7Ozs7Ozs7Ozs7Ozs7QUNBMkI7QUFDRTtBQUNHO0FBQ00iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzLmNzcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlcy5jc3M/NDRiMiIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovLy8uL3NyYy9kb20tRWwtMi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZG9tLUVsLmpzIiwid2VicGFjazovLy8uL3NyYy9yZXNwb25zaXZlLmpzIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuL2ltYWdlcy9Ub2RvLTEuanBnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGBib2R5IHtcbiAgcGFkZGluZzogMDtcbiAgbWFyZ2luOiAwO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG46cm9vdCB7XG4gIC0taG92ZXItY29sb3I6ICNmZGE0YWY7XG4gIC0tYmFja2dyb3VuZC1jb2xvcjogIzZmOWU5ZTtcbn1cblxuKiB7XG4gIHBhZGRpbmc6IDA7XG4gIG1hcmdpbjogMDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgY29sb3I6ICM3ODM1MGY7XG4gIGZvbnQtZmFtaWx5OiBcIlJvYm90b1wiLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogNDAwO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA1NTBweCkge1xuICBib2R5IG1haW4ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICB6LWluZGV4OiAxO1xuICB9XG5cbiAgbWFpbiBoZWFkZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZGE0YWY7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBnYXA6IDEwcHg7XG4gIH1cblxuICAjdG9nZ2xlTWVudUljb24ge1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICB0b3A6IDEwMHB4O1xuICAgIHJpZ2h0OiAxMHB4O1xuICAgIHdpZHRoOiA1MHB4O1xuICAgIGhlaWdodDogNTBweDtcbiAgICAvKiBcbiAgICB0b3A6IDEwNnB4O1xuICAgIHJpZ2h0OiAxMHB4O1xuICAgIHdpZHRoOiA1MHB4OyAqL1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM2Yjg4ODg7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XG4gICAgdHJhbnNpdGlvbjogdG9wIDAuM3M7XG5cbiAgICB6LWluZGV4OiAxMDAwO1xuICB9XG5cbiAgaDEuaGVhZGVyVGV4dENvbnRlbnQge1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgcGFkZGluZzogMzBweDtcbiAgfVxuXG4gICN0b2dnbGVNZW51SWNvbjo6YmVmb3JlIHtcbiAgICBjb250ZW50OiBcIlwiO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB3aWR0aDogMjhweDtcbiAgICBoZWlnaHQ6IDJweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNXB4KTtcbiAgICB0cmFuc2l0aW9uOiAwLjJzO1xuICB9XG5cbiAgI3RvZ2dsZU1lbnVJY29uOjphZnRlciB7XG4gICAgY29udGVudDogXCJcIjtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgd2lkdGg6IDI4cHg7XG4gICAgaGVpZ2h0OiAycHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoNXB4KTtcbiAgICB0cmFuc2l0aW9uOiAwLjJzO1xuICB9XG5cbiAgI3RvZ2dsZU1lbnVJY29uLmFjdGl2ZTo6YmVmb3JlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMHB4KSByb3RhdGUoNDVkZWcpO1xuICB9XG5cbiAgI3RvZ2dsZU1lbnVJY29uLmFjdGl2ZTo6YWZ0ZXIge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwcHgpIHJvdGF0ZSgtNDVkZWcpO1xuICB9XG5cbiAgYXNpZGUjbWVudSB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAtMjIwcHg7XG4gICAgd2lkdGg6IDIyMHB4O1xuICAgIGhlaWdodDogMTAwdmg7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGZpbHRlcjogd2hpdGU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzc5ODlhMTtcbiAgICB0cmFuc2l0aW9uOiAwLjNzO1xuICAgIHotaW5kZXg6IDEwMDA7XG4gICAgZmlsbDogd2hpdGU7XG4gIH1cblxuICBhc2lkZSNtZW51LmFjdGl2ZSB7XG4gICAgbGVmdDogMDtcbiAgfVxuXG4gIG1haW4gYXNpZGUge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNlMmU4ZjA7XG4gIH1cblxuICBwI2FkZE5ld1Byb2plY3RFbCwgcC5pbmJveCwgc2VsZWN0I3Byb2plY3QtZHJvcGRvd24ge1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgfVxuXG4gIG1haW4gI0NvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIH1cblxuICBoZWFkZXIgLm1lbnVDb250cm9sbGVyIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICB3aWR0aDogNDBweDtcbiAgICBoZWlnaHQ6IDQwcHg7XG4gIH1cblxuICBoZWFkZXIgLm1lbnVDb250cm9sbGVyIHN2ZyB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgd2lkdGg6IDQwcHg7XG4gICAgaGVpZ2h0OiA0MHB4O1xuICAgIGZpbGw6IHdoaXRlO1xuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIH1cblxuICAjdXNlcmxpc3Qge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBtYXgtd2lkdGg6IDU1MHB4O1xuICB9XG5cbiAgZGl2Lmxpc3RDb250YWluZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZ2FwOiA1cHg7XG4gICAgbWF4LXdpZHRoOiA1MTVweDtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIGJveC1zaGFkb3c6IDFweCAwcHggM3B4IDBweDtcbiAgICBtYXJnaW46IDE0cHggMTRweCAwIDE5cHg7XG4gICAgd29yZC13cmFwOiBicmVhay13b3JkO1xuICAgIHdvcmQtYnJlYWs6IGJyZWFrLWFsbDtcbiAgICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xuICAgIG92ZXJmbG93LXdyYXA6IGJyZWFrLXdvcmQ7XG5cbiAgICBwYWRkaW5nOiAxMHB4O1xuICB9XG5cbiAgI3VzZXJsaXN0IC5pbnRpYWxUZXh0RGlzcGxheSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG5cbiAgLmludGlhbFRleHREaXNwbGF5IGltZyB7XG4gICAgbWF4LXdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogYXV0bztcbiAgICBwYWRkaW5nOiAxOHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDMwcHg7XG4gICAgb2JqZWN0LWZpdDogY29udGFpbjtcbiAgfVxuXG4gIC5wb3BVcENvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBtYXgtd2lkdGg6IDIwMHB4O1xuICAgIHBhZGRpbmc6IDMwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzA3YzRkZDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcbiAgfVxuXG4gIGRpdi5zaWRlQmFyQ29udGVudENvbnRhaW5lciB7XG4gICAgbWFyZ2luOiA0MHB4IDAgMCAtNHB4O1xuICB9XG5cbiAgI3VzZXJsaXN0ICNhZGRUb2RvQnRuQ29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZ2FwOiA1cHg7XG4gICAgbWFyZ2luOiAyN3B4IDAgMTFweCAyNnB4O1xuICB9XG5cbiAgI3Rhc2sge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBnYXA6IDVweDtcbiAgICBtYXJnaW46IDI3cHggMCAxMXB4IDI2cHg7XG4gIH1cblxuICAjdXNlcmxpc3QgI2FkZFRvZG9CdG5Db250YWluZXIgc3ZnIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGMyNjI2O1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBmaWxsOiB3aGl0ZTtcbiAgfVxuXG4gICN1c2VybGlzdCAjYWRkVG9kb0J0bkNvbnRhaW5lciA6aG92ZXIge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMS4wOSk7XG4gIH1cblxuICAjdXNlcmxpc3QgI2FkZFRvZG9CdG5Db250YWluZXIgYnV0dG9uIHtcbiAgICBib3JkZXI6IDA7XG4gICAgZm9udC1zaXplOiAxLjNyZW07XG4gICAgY29sb3I6ICNiOTFjMWM7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogaW5oZXJpdDtcbiAgICB0cmFuc2l0aW9uOiAwLjNzO1xuICB9XG5cbiAgI3VzZXJsaXN0ICNhZGRUb2RvQnRuQ29udGFpbmVyIGJ1dHRvbjpob3ZlciB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxLjA5KTtcbiAgfVxuXG4gIC5pbm5lcl9jb250YWluZXIgI2Zvcm0ge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM2NDc0OGI7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICBtYXgtaGVpZ2h0OiAyMDBweDtcbiAgICBtYXgtd2lkdGg6IDUxNXB4ICFpbXBvcnRhbnQ7XG4gICAgaGVpZ2h0OiAxNzBweDtcbiAgICBkaXNwbGF5OiBub25lO1xuICAgIG1heC13aWR0aDogNDgwcHg7XG4gICAgbWFyZ2luOiAxMHB4IDEwcHggMCAxMHB4O1xuICB9XG5cbiAgZGl2LmlucHV0TmV3cHJvamVjdEZvcm1OYW1lIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNjZWUzZTM7XG4gICAgbWF4LXdpZHRoOiAzMDBweDtcbiAgICBtYXgtaGVpZ2h0OiAzMDBweDtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIHBhZGRpbmc6IDI1cHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIG1hcmdpbjogNjBweCAwIDAgMDtcbiAgICBib3gtc2hhZG93OiAwcHggOXB4IDNweCAwcHg7XG4gIH1cblxuICAuaW5wdXROZXdwcm9qZWN0Rm9ybU5hbWUgaDIge1xuICAgIG1hcmdpbjogMCAwIDEwcHggMDtcbiAgfVxuXG4gIC5pbnB1dE5ld3Byb2plY3RGb3JtTmFtZSAuaW5wdXROZXdQcm9qZWN0TmFtZSB7XG4gICAgbWF4LXdpZHRoOiAzMDBweDtcbiAgICBtYXgtaGVpZ2h0OiAzNXB4O1xuICAgIHBhZGRpbmc6IDVweDtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgYm9yZGVyLXJhZGl1czogN3B4O1xuICB9XG5cbiAgaW5wdXQuU2F2ZVByb2plY3ROYW1lIHtcbiAgICBwYWRkaW5nOiA5cHg7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgICBtYXgtd2lkdGg6IDEwMHB4O1xuICAgIGhlaWdodDogNDBweDtcbiAgICBmb250LXNpemU6IDE5cHg7XG4gIH1cblxuICAucHJvamVjdE5hbWVTYXZlckJ0bkNvbnRhaW5lciB7XG4gICAgbWFyZ2luOiAxMHB4IDA7XG4gIH1cblxuICAucHJvamVjdE5hbWVTYXZlckJ0bkNvbnRhaW5lciBidXR0b24ge1xuICAgIHBhZGRpbmc6IDlweDtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xuICAgIHdpZHRoOiAxMDBweDtcbiAgICBoZWlnaHQ6IDQwcHg7XG4gICAgZm9udC1zaXplOiAxOXB4O1xuICB9XG5cbiAgLmlubmVyX2NvbnRhaW5lciAjUHJvamVjdEZvcm0ge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM2NDc0OGI7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICBtYXgtaGVpZ2h0OiAxNTVweDtcbiAgICBtYXgtd2lkdGg6IDUxNXB4O1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgbWF4LXdpZHRoOiA1MDBweDtcbiAgICBtYXJnaW46IDlweCAxMHB4IDAgMTNweDtcbiAgfVxuXG4gIC5wcm9qZWN0Rm9ybURldGFpbHMge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICBoZWlnaHQ6IDgwcHg7XG4gIH1cblxuICBkaXYucHJpb3JpdHlEYXRlT25MYXJnZVNjcmVlbiB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgdG9wOiAwO1xuICAgIG1heC13aWR0aDogMjAwcHg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgfVxuXG4gIC5wcm9qZWN0SW5wdXRDb250YWluZXIge1xuICAgIG1heC13aWR0aDogMjAwcHg7XG4gIH1cblxuICAucHJvamVjdElucHV0Q29udGFpbmVyIHAgaW5wdXQge1xuICAgIG1heC13aWR0aDogMjAwcHg7XG4gIH1cblxuICAuaW5uZXJUYXNrQ29udGFpbmVyIC5lZGl0IHtcbiAgICBtYXgtd2lkdGg6IDE0MHB4O1xuICB9XG5cbiAgLnByb2plY3RJbnB1dENvbnRhaW5lciAuUGRlc2NyaXB0aW9uSW5wdXRDb250YWluZXIge1xuICAgIG1hcmdpbjogMDtcbiAgfVxuXG4gIGlucHV0I1Byb2plY3RkYXRlUGlja2VyIHtcbiAgICBwYWRkaW5nOiAycHg7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBoZWlnaHQ6IDMycHg7XG4gICAgZm9udC1zaXplOiAwLjlyZW07XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICBiYWNrZ3JvdW5kOiAjZDRkNGQ4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxuXG4gIHNlbGVjdCNwcm9qZWN0UHJpb3JpdHkge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM0NDQwM2M7XG4gICAgY29sb3I6ICNmYWZhZmE7XG4gICAgZm9udC1zaXplOiAwLjg1cmVtO1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgaGVpZ2h0OiAzNXB4O1xuICB9XG5cblxuICBkaXYucHJvamVjdEJ1dHRvbnNDb250YWluZXIgYnV0dG9uIHtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgYm9yZGVyLXJhZGl1czogN3B4O1xuICAgIHBhZGRpbmc6IDlweDtcbiAgICBmb250LXNpemU6IDFyZW07XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgfVxuXG5cbiAgZGl2I2NvbmZpZ1ByaW9yaXR5RGF0ZU9uTW9iaWxlIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgbWF4LXdpZHRoOiAyMDBweDtcbiAgICBwb3NpdGlvbjogc3RhdGljO1xuICB9XG5cbiAgI2NvbmZpZ1ByaW9yaXR5RGF0ZU9uTW9iaWxlICNwcmlvcml0eSxcbiAgI2RhdGVQaWNrZXIge1xuICAgIHBhZGRpbmc6IDJweDtcbiAgICBib3JkZXItcmFkaXVzOiA2cHg7XG4gICAgbWF4LXdpZHRoOiAxMDRweDtcbiAgICBtaW4td2lkdGg6IDgwcHg7XG4gIH1cblxuICAjcHJpb3JpdHkgb3B0aW9uIHtcbiAgICBjb2xvcjogd2hpdGU7XG4gIH1cblxuICAjUHJvamVjdEZvcm0gLmZvb3RlciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBwYWRkaW5nOiAwIDEwcHg7XG4gICAgZ2FwOiAwO1xuICB9XG5cbiAgI1Byb2plY3RGb3JtIC5wcm9qZWN0QnV0dG9uc0NvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBwYWRkaW5nOiAwIDEwcHg7XG4gICAgZ2FwOiAwO1xuICB9XG5cbiAgI2Zvcm0gLmZvcm1EZXRhaWxzIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgbWFyZ2luOiAwO1xuICB9XG5cbiAgI2Zvcm1Gb290ZXJPbk1vYmlsZSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBwYWRkaW5nOiAwIDEwcHg7XG4gIH1cblxuICAjZm9ybUZvb3Rlck9uTW9iaWxlIC5idXR0b25zIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHBhZGRpbmc6IDAgMTBweDtcbiAgICBtYXJnaW46IDA7XG4gICAgZ2FwOiAwO1xuICB9XG5cbiAgLnByaW9yaXR5RGF0ZUxhcmdlU2NyZWVuIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIH1cblxuICAjZm9ybSAuaW5wdXRzIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgbWF4LXdpZHRoOiAxNTBweDtcbiAgfVxuXG4gICNmb3JtIC5maXJzdC1pbnB1dENvbnRhaW5lciBpbnB1dCxcbiAgLlB0aXRsZUlucHV0Q29udGFpbmVyIGlucHV0IHtcbiAgICBtYXgtd2lkdGg6IDMwNXB4O1xuICAgIG1heC1oZWlnaHQ6IDQwcHg7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIG91dGxpbmU6IG5vbmU7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIC8qIG1hcmdpbjogMTBweCAwOyAqL1xuICAgIGJhY2tncm91bmQtY29sb3I6IGluaGVyaXQ7XG4gIH1cblxuICAjZm9ybSAuZmlyc3QtaW5wdXRDb250YWluZXIgaW5wdXQsIC5zZWNvbmQtaW5wdXRDb250YWluZXIgaW5wdXQge1xuICAgIG1heC13aWR0aDogMjMwcHg7XG4gICAgbWF4LWhlaWdodDogNDBweDtcbiAgICBtYXJnaW46IDA7XG4gICAgZm9udC1zaXplOiAxLjFyZW07XG4gIH1cblxuICAuc2Vjb25kLWlucHV0Q29udGFpbmVyIGlucHV0LmRlc2NyaXB0aW9uIHtcbiAgICBtYXgtd2lkdGg6IDE1MHB4O1xuICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xuICB9XG5cblxuXG4gICNmb3JtIC5zZWNvbmQtaW5wdXRDb250YWluZXIgaW5wdXQsXG4gIC5QZGVzY3JpcHRpb25JbnB1dENvbnRhaW5lciBpbnB1dCB7XG4gICAgbWF4LXdpZHRoOiAyNTBweDtcbiAgICBtYXgtaGVpZ2h0OiA0MHB4O1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBvdXRsaW5lOiBub25lO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmhlcml0O1xuICAgIG1hcmdpbjogMDtcbiAgfVxuXG4gICNmb3JtIC5vdGhlci1vcHRpb25zLW9uLWZvcm1zIGJ1dHRvbixcbiAgI2NvbmZpZ1ByaW9yaXR5RGF0ZU9uTW9iaWxlICNwcmlvcml0eSxcbiAgI2RhdGVQaWNrZXIge1xuICAgIHBhZGRpbmc6IDhweDtcbiAgICBib3JkZXItcmFkaXVzOiA2cHg7XG4gICAgbWF4LXdpZHRoOiAxMDRweDtcbiAgICBtaW4td2lkdGg6IDgwcHg7XG4gIH1cblxuICAjY29uZmlnUHJpb3JpdHlEYXRlT25Nb2JpbGUgaW5wdXQjZGF0ZVBpY2tlciB7XG5cbiAgICBtYXgtd2lkdGg6IDgwcHg7XG4gIH1cbn1cblxuQG1lZGlhIChtaW4td2lkdGg6IDU1MXB4KSBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgYm9keSBtYWluIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIH1cblxuICBtYWluIGhlYWRlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZkYTRhZjtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGdhcDogMTBweDtcbiAgICBoZWlnaHQ6IDEwMHB4O1xuICB9XG5cbiAgbWFpbiBhc2lkZSB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2UyZThmMDtcbiAgICB6LWluZGV4OiAyO1xuICB9XG5cbiAgYXNpZGUgdWwsXG4gIHVsIHNlbGVjdCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIC8qIGNvbG9yOiB3aGl0ZTsgKi9cbiAgICBmaWxsOiAjNzgzNTBmO1xuICB9XG5cbiAgbGkuaW5ib3gge1xuICAgIGZvbnQtc2l6ZTogMS40cmVtO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgfVxuXG4gIGxpI2FkZE5ld1Byb2plY3RFbCB7XG4gICAgbWFyZ2luOiAwO1xuICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgfVxuXG4gIHNlbGVjdCNwcm9qZWN0LWRyb3Bkb3duIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmhlcml0O1xuICAgIG1heC13aWR0aDogMTgwcHg7XG4gIH1cblxuICBkaXYuc2lkZUJhckNvbnRlbnRDb250YWluZXIge1xuICAgIG1hcmdpbjogNDBweCAwIDAgMHB4O1xuICB9XG5cblxuXG4gIG1haW4gI0NvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgei1pbmRleDogMTtcbiAgfVxuXG4gIGhlYWRlciAubWVudUNvbnRyb2xsZXIge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHdpZHRoOiA0MHB4O1xuICAgIGhlaWdodDogNDBweDtcbiAgfVxuXG4gICN0b2dnbGVNZW51SWNvbiB7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIHRvcDogMjBweDtcbiAgICByaWdodDogMjBweDtcbiAgICB3aWR0aDogNTBweDtcbiAgICBoZWlnaHQ6IDUwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzZmOWU5ZTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgICB0cmFuc2l0aW9uOiB0b3AgMC4zcztcbiAgICB6LWluZGV4OiAxMDAwO1xuXG4gICAgei1pbmRleDogMTAwMDtcbiAgfVxuXG4gICN0b2dnbGVNZW51SWNvbjo6YmVmb3JlIHtcbiAgICBjb250ZW50OiBcIlwiO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB3aWR0aDogMjhweDtcbiAgICBoZWlnaHQ6IDJweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNXB4KTtcbiAgICB0cmFuc2l0aW9uOiAwLjJzO1xuICB9XG5cbiAgI3RvZ2dsZU1lbnVJY29uOjphZnRlciB7XG4gICAgY29udGVudDogXCJcIjtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgd2lkdGg6IDI4cHg7XG4gICAgaGVpZ2h0OiAycHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoNXB4KTtcbiAgICB0cmFuc2l0aW9uOiAwLjJzO1xuICB9XG5cbiAgI3RvZ2dsZU1lbnVJY29uLmFjdGl2ZTo6YmVmb3JlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMHB4KSByb3RhdGUoNDVkZWcpO1xuICB9XG5cbiAgI3RvZ2dsZU1lbnVJY29uLmFjdGl2ZTo6YWZ0ZXIge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwcHgpIHJvdGF0ZSgtNDVkZWcpO1xuICB9XG5cbiAgYXNpZGUjbWVudSB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAtMjIwcHg7XG4gICAgd2lkdGg6IDIyMHB4O1xuICAgIGhlaWdodDogMTAwdmg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2JmYzZjNjtcbiAgICB0cmFuc2l0aW9uOiAwLjNzO1xuICB9XG5cbiAgYXNpZGUjbWVudS5hY3RpdmUge1xuICAgIGxlZnQ6IDA7XG4gIH1cblxuICBhc2lkZSB1bCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBmaWxsOiB3aGl0ZTtcbiAgfVxuXG4gIHAjYWRkTmV3UHJvamVjdEVsLCBwLmluYm94LCBzZWxlY3QjcHJvamVjdC1kcm9wZG93biB7XG4gICAgLyogY29sb3I6IHdoaXRlOyAqL1xuXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgfVxuXG4gIGhlYWRlciAubWVudUNvbnRyb2xsZXIgc3ZnIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICB3aWR0aDogNDBweDtcbiAgICBoZWlnaHQ6IDQwcHg7XG4gICAgZmlsbDogd2hpdGU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgfVxuXG4gICN1c2VybGlzdCAjYWRkVG9kb0J0bkNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGdhcDogNXB4O1xuICAgIG1hcmdpbjogMjdweCAwIDExcHggMjZweDtcbiAgfVxuXG4gICN0YXNrIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZ2FwOiA1cHg7XG4gICAgbWFyZ2luOiAyN3B4IDAgMTFweCAyNnB4O1xuICB9XG5cbiAgI3VzZXJsaXN0ICNhZGRUb2RvQnRuQ29udGFpbmVyIHN2ZyB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2RjMjYyNjtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgZmlsbDogd2hpdGU7XG4gIH1cblxuICAjdXNlcmxpc3QgI2FkZFRvZG9CdG5Db250YWluZXIgOmhvdmVyIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEuMDkpO1xuICB9XG5cbiAgI3VzZXJsaXN0ICNhZGRUb2RvQnRuQ29udGFpbmVyIGJ1dHRvbiB7XG4gICAgYm9yZGVyOiAwO1xuICAgIGZvbnQtc2l6ZTogMS40cmVtO1xuXG4gICAgY29sb3I6ICNiOTFjMWM7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogaW5oZXJpdDtcbiAgfVxuXG4gICN1c2VybGlzdCAjYWRkVG9kb0J0bkNvbnRhaW5lciBidXR0b246aG92ZXIge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMS4wOSk7XG4gIH1cblxuICBkaXYubGlzdENvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBnYXA6IDVweDtcbiAgICBtYXgtd2lkdGg6IDcxNHB4O1xuICAgIHdvcmQtd3JhcDogYnJlYWstd29yZDtcbiAgICB3b3JkLWJyZWFrOiBicmVhay1hbGw7XG4gICAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcbiAgICBvdmVyZmxvdy13cmFwOiBicmVhay13b3JkO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgYm94LXNoYWRvdzogMXB4IDBweCAzcHggMHB4O1xuICAgIC8qIG1hcmdpbjogMThweCA2MHB4OyAqL1xuICAgIHBhZGRpbmc6IDE1cHg7XG4gIH1cblxuICAjdXNlcmxpc3QgLmludGlhbFRleHREaXNwbGF5IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH1cblxuICAuaW50aWFsVGV4dERpc3BsYXkgcCB7XG4gICAgbWF4LXdpZHRoOiA1MDBweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIG1heC13aWR0aDogNTAwcHg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBmbGV4LXdyYXA6IHdyYXA7XG4gIH1cblxuICAuaW50aWFsVGV4dERpc3BsYXkgaW1nIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IGF1dG87XG4gICAgcGFkZGluZzogMjBweDtcbiAgICBib3JkZXItcmFkaXVzOiA0MXB4O1xuICAgIG9iamVjdC1maXQ6IGNvbnRhaW47XG4gIH1cblxuICAuaW5uZXJfY29udGFpbmVyICNmb3JtIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjQ3NDhiO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgaGVpZ2h0OiAxNjBweDtcbiAgICBkaXNwbGF5OiBub25lO1xuICAgIG1heC13aWR0aDogNzAwcHg7XG5cbiAgICBtYXJnaW46IDE3cHg7XG4gIH1cblxuICAjZm9ybSBkaXYuZm9ybURldGFpbHMge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIG1hcmdpbjogMDtcbiAgfVxuXG4gIC5wcmlvcml0eURhdGVMYXJnZVNjcmVlbiB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuXG4gICNmb3JtIC5pbnB1dHMge1xuICAgIG1heC13aWR0aDogMTUwcHg7XG4gIH1cblxuICAjZm9ybSAuZmlyc3QtaW5wdXRDb250YWluZXIgaW5wdXQsXG4gIC5QdGl0bGVJbnB1dENvbnRhaW5lciBpbnB1dCxcbiAgI2Zvcm0gLnNlY29uZC1pbnB1dENvbnRhaW5lciBpbnB1dCxcbiAgLlBkZXNjcmlwdGlvbklucHV0Q29udGFpbmVyIGlucHV0IHtcbiAgICBtYXgtd2lkdGg6IDYwMHB4O1xuICAgIGhlaWdodDogMjVweDtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgb3V0bGluZTogbm9uZTtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgbWFyZ2luOiAxMHB4IDAgMCAwO1xuICAgIGJhY2tncm91bmQtY29sb3I6IGluaGVyaXQ7XG4gIH1cblxuICBwLnNlY29uZC1pbnB1dENvbnRhaW5lciB7XG4gICAgbWFyZ2luOiAwO1xuICB9XG5cbiAgI2Zvcm0gLmJ1dHRvbnMge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgbWFyZ2luOiAxcHggMjNweDtcbiAgfVxuXG4gICNjb25maWdQcmlvcml0eURhdGVPbk1vYmlsZSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIHBvc2l0aW9uOiBzdGF0aWM7XG4gIH1cblxuICAjZm9ybSAub3RoZXItb3B0aW9ucy1vbi1mb3JtcyBidXR0b24sXG4gICNwcmlvcml0eSxcbiAgI2RhdGVQaWNrZXIge1xuICAgIHBhZGRpbmc6IDdweDtcbiAgICBib3JkZXItcmFkaXVzOiA5cHg7XG4gIH1cblxuICBmb3JtI1Byb2plY3RGb3JtIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjQ3NDhiO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgaGVpZ2h0OiAxNjBweDtcbiAgICBkaXNwbGF5OiBub25lO1xuICAgIG1heC13aWR0aDogNjkzcHg7XG4gICAgcGFkZGluZy1sZWZ0OiAxcmVtO1xuICAgIC8qIG1hcmdpbjogOXB4IDYxcHg7ICovXG4gIH1cblxuICBkaXYucHJvamVjdEZvcm1EZXRhaWxzIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIHRvcDogMDtcbiAgfVxuXG4gICovIC5wcm9qZWN0QnV0dG9uc0NvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgfVxuXG4gIHNlbGVjdCNwcmlvcml0eSB7XG4gICAgcGFkZGluZzogOHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDlweDtcbiAgfVxuXG4gIHNlbGVjdCNwcmlvcml0eSBvcHRpb24ge1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBmb250LXdlaWdodDogNzAwO1xuICB9XG5cbiAgaW5wdXQjZGF0ZVBpY2tlciB7XG4gICAgcGFkZGluZzogM3B4O1xuICAgIGJvcmRlci1yYWRpdXM6IDlweDtcbiAgfVxufVxuXG5cbkBtZWRpYSAobWluLXdpZHRoOiA3NjlweCkgYW5kIChtYXgtd2lkdGg6IDEwMDBweCkge1xuICBib2R5IG1haW4ge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gIH1cblxuICBtYWluIGhlYWRlciB7XG4gICAgZ3JpZC1hcmVhOiAxIC8gMiAvIDIgLyA2O1xuXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZkYTRhZjtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGdhcDogMTBweDtcbiAgfVxuXG4gIG1haW4gYXNpZGUge1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTJlOGYwO1xuICB9XG5cbiAgbWFpbiAjQ29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgZmxleC13cmFwOiB3cmFwO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICB6LWluZGV4OiAxO1xuICB9XG5cbiAgaGVhZGVyIC5tZW51Q29udHJvbGxlciB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgd2lkdGg6IDQwcHg7XG4gICAgaGVpZ2h0OiA0MHB4O1xuICB9XG5cbiAgaGVhZGVyIC5tZW51Q29udHJvbGxlciBzdmcge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHdpZHRoOiA0MHB4O1xuICAgIGhlaWdodDogNDBweDtcbiAgICBmaWxsOiB3aGl0ZTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICB9XG5cblxuXG5cbiAgI3VzZXJsaXN0IC5pbnRpYWxUZXh0RGlzcGxheSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxuXG4gICN1c2VybGlzdCAuaW50aWFsVGV4dERpc3BsYXkgcCB7XG4gICAgZm9udC1zaXplOiAxLjJyZW07XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgbWFyZ2luOiAxMHB4IDAgMCAwO1xuICAgIG1heC13aWR0aDogNjAwcHg7XG4gIH1cblxuICAjdXNlcmxpc3QgI2FkZFRvZG9CdG5Db250YWluZXIge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBnYXA6IDVweDtcbiAgICBtYXJnaW46IDI3cHggMCAxMXB4IDI2cHg7XG4gIH1cblxuICAjdGFzayB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGdhcDogNXB4O1xuICAgIG1hcmdpbjogMjdweCAwIDExcHggMjZweDtcbiAgfVxuXG4gICN1c2VybGlzdCAjYWRkVG9kb0J0bkNvbnRhaW5lciBzdmcge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNkYzI2MjY7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIGZpbGw6IHdoaXRlO1xuICB9XG5cbiAgI3VzZXJsaXN0ICNhZGRUb2RvQnRuQ29udGFpbmVyIDpob3ZlciB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxLjA5KTtcbiAgfVxuXG4gICN1c2VybGlzdCAjYWRkVG9kb0J0bkNvbnRhaW5lciBidXR0b24ge1xuICAgIGJvcmRlcjogMDtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgY29sb3I6ICNiOTFjMWM7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogaW5oZXJpdDtcbiAgfVxuXG4gICN1c2VybGlzdCAjYWRkVG9kb0J0bkNvbnRhaW5lciBidXR0b246aG92ZXIge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMS4wOSk7XG4gIH1cblxuICBkaXYubGlzdENvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBnYXA6IDVweDtcbiAgICBtYXgtd2lkdGg6IDcxNHB4O1xuICAgIHdvcmQtYnJlYWs6IGJyZWFrLWFsbDtcbiAgICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xuICAgIG92ZXJmbG93LXdyYXA6IGJyZWFrLXdvcmQ7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICBib3gtc2hhZG93OiAxcHggMHB4IDNweCAwcHg7XG4gICAgLyogbWFyZ2luOiAxOHB4IDYwcHg7ICovXG4gICAgcGFkZGluZzogMTVweDtcbiAgfVxuXG4gIC5pbm5lcl9jb250YWluZXIgI2Zvcm0ge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM2NDc0OGI7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICBoZWlnaHQ6IDE4MHB4O1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgbWF4LXdpZHRoOiA3NTBweDtcblxuICAgIG1hcmdpbjogMTdweDtcbiAgfVxuXG4gICNmb3JtIGRpdi5mb3JtRGV0YWlscyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxuICAgIHBhZGRpbmc6IDlweCAyMHB4O1xuICAgIG1hcmdpbjogMDtcbiAgfVxuXG4gIC5wcmlvcml0eURhdGVMYXJnZVNjcmVlbiB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuXG4gICNmb3JtIC5pbnB1dHMge1xuICAgIG1heC13aWR0aDogMTUwcHg7XG4gIH1cblxuICAjZm9ybSAuZmlyc3QtaW5wdXRDb250YWluZXIgaW5wdXQsXG4gIC5QdGl0bGVJbnB1dENvbnRhaW5lciBpbnB1dCB7XG4gICAgbWF4LXdpZHRoOiA0MjBweDtcbiAgICBtYXgtaGVpZ2h0OiA2MHB4O1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBvdXRsaW5lOiBub25lO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmhlcml0O1xuICAgIG1hcmdpbjogMDtcbiAgfVxuXG4gICNmb3JtIC5zZWNvbmQtaW5wdXRDb250YWluZXIgaW5wdXQsXG4gIC5QZGVzY3JpcHRpb25JbnB1dENvbnRhaW5lciBpbnB1dCB7XG4gICAgbWF4LXdpZHRoOiA0MjBweDtcbiAgICBtYXgtaGVpZ2h0OiA2MHB4O1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBvdXRsaW5lOiBub25lO1xuICAgIGNvbG9yOiByZ2IoOTAsIDc3LCA3Nyk7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogaW5oZXJpdDtcbiAgICBtYXJnaW46IDA7XG4gIH1cblxuICAjZm9ybSAuYnV0dG9ucyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgbWFyZ2luOiAxcHggMzNweDtcbiAgfVxuXG4gIGZvcm0jUHJvamVjdEZvcm0ge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM2NDc0OGI7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICBoZWlnaHQ6IDE2MHB4O1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgbWF4LXdpZHRoOiA2OTNweDtcbiAgICBwYWRkaW5nLWxlZnQ6IDFyZW07XG4gIH1cblxuICBkaXYucHJvamVjdEZvcm1EZXRhaWxzIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIHRvcDogMDtcbiAgfVxuXG4gIGRpdi5wcmlvcml0eURhdGVPbkxhcmdlU2NyZWVuIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgdG9wOiAwO1xuICB9XG5cbiAgLnByb2plY3RCdXR0b25zQ29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB9XG5cbiAgI2NvbmZpZ1ByaW9yaXR5RGF0ZU9uTW9iaWxlIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgcG9zaXRpb246IHN0YXRpYztcbiAgfVxuXG4gICNmb3JtIC5vdGhlci1vcHRpb25zLW9uLWZvcm1zIGJ1dHRvbixcbiAgI3ByaW9yaXR5LFxuICAjZGF0ZVBpY2tlciB7XG4gICAgcGFkZGluZzogOHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgICBib3JkZXI6IG5vbmU7XG4gIH1cblxuXG59XG5cbm1haW4ge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDIzMHB4IDFmcjtcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxMDBweCBtaW5tYXgoMTAwdmgsIDYwMHB4KTtcbiAgO1xufVxuXG5oZWFkZXIge1xuICBncmlkLWFyZWE6IDEgLyAyIC8gMiAvIDY7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZGE0YWY7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG59XG5cbi5oZWFkZXJUZXh0Q29udGVudCB7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG5cbn1cblxuYXNpZGUge1xuICBncmlkLWFyZWE6IDEvIDEvIDQvIDI7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2UyZThmMDtcbn1cblxuLnNpZGVCYXJDb250ZW50Q29udGFpbmVyIHtcbiAgbWFyZ2luOiA0MHB4IDAgMCAwcHg7XG59XG5cbiNDb250YWluZXIge1xuICBncmlkLWFyZWE6IDIgLyAyIC8gMyAvIDQ7XG5cbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxMDBweCA2NTBweCBtaW5tYXgoMTAwcHgsIDM1MHB4KTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxuXG4uaW5uZXJfY29udGFpbmVyIHtcbiAgZ3JpZC1hcmVhOiAxIC8gMiAvIDMgLyAzO1xufVxuXG4uaW50aWFsVGV4dERpc3BsYXkge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcGFkZGluZzogMTBweDtcbn1cblxuLmludGlhbFRleHREaXNwbGF5IHAge1xuICBmb250LXNpemU6IDEuMnJlbTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXdlaWdodDogODAwO1xuICBjb2xvcjogIzc4MzUwZjtcbiAgbWFyZ2luOiAxMHB4IDAgMCAwO1xufVxuXG4uaW50aWFsVGV4dERpc3BsYXkgaW1nIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogYXV0bztcbiAgYm9yZGVyLXJhZGl1czogMzBweDtcbiAgcGFkZGluZzogMjBweDtcbn1cblxuI2FkZFRvZG9CdG5Db250YWluZXIge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4uZW1wdHkge1xuICBncmlkLWFyZWE6IDEgLyAzIC8gNSAvIDQ7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmOGY4Zjg7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX199KTtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xufVxuXG4ubWVudUNvbnRyb2xsZXIge1xuICBkaXNwbGF5OiBub25lO1xuICB3aWR0aDogNDBweDtcbiAgaGVpZ2h0OiA0MHB4O1xufVxuXG4uY2hlY2tCb3gge1xuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XG4gIC1tb3otYXBwZWFyYW5jZTogbm9uZTtcbiAgd2lkdGg6IDIwcHg7XG4gIGhlaWdodDogMjBweDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xuICBvdXRsaW5lOiBub25lO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLmNoZWNrQm94OjpiZWZvcmUge1xuICBjb250ZW50OiBcIlwiO1xuICBkaXNwbGF5OiBibG9jaztcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDUwJTtcbiAgbGVmdDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBjb2xvcjogcmdiKDIyLCAyNTIsIDIyKTtcbiAgb3BhY2l0eTogMDtcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjNzIGVhc2U7XG59XG5cbi5jaGVja0JveDpob3Zlcjo6YmVmb3JlIHtcbiAgY29udGVudDogXCLinJNcIjtcbiAgb3BhY2l0eTogMC41O1xufVxuXG5zdmcge1xuICB3aWR0aDogMzRweDtcbiAgaGVpZ2h0OiAzM3B4O1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcblxufVxuXG4jdGFzayB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogNXB4O1xuICBtYXJnaW46IDI3cHggMCAxMXB4IDI2cHg7XG59XG5cbiN0YXNrIHN2ZyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNkYzI2MjY7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgZmlsbDogd2hpdGU7XG59XG5cbiN0YXNrIDpob3ZlciB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEuMDkpO1xufVxuXG4jdGFzayBidXR0b24ge1xuICBib3JkZXI6IDA7XG4gIGZvbnQtc2l6ZTogMS40cmVtO1xuICBjb2xvcjogI2I5MWMxYztcbiAgYmFja2dyb3VuZC1jb2xvcjogaW5oZXJpdDtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbn1cblxuI3Rhc2sgYnV0dG9uOmhvdmVyIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMS4wOSk7XG59XG5cbmJ1dHRvbi5kZWxldGVUYXNrIHtcbiAgcGFkZGluZzogMTBweDtcbiAgYm9yZGVyOiBub25lO1xuICBib3JkZXItcmFkaXVzOiA3cHg7XG4gIGZvbnQtc2l6ZTogMS4xcmVtO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTA0ODdjO1xuICBjb2xvcjogd2hpdGU7XG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjJzIGVhc2Utb3V0O1xufVxuXG5idXR0b24uZGVsZXRlVGFzazpob3ZlciB7XG4gIHRyYW5zZm9ybTogc2NhbGUoMS4wNSk7XG4gIGJhY2tncm91bmQtY29sb3I6ICM0YjA3MDc7XG5cbn1cblxuYnV0dG9uLmRlbGV0ZVRhc2s6YWN0aXZlIHtcbiAgdHJhbnNmb3JtOiBzY2FsZSgwLjkpO1xufVxuXG4ubGlzdENvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGdhcDogNXB4O1xuICBtYXgtd2lkdGg6IDcxNHB4O1xuICB3b3JkLWJyZWFrOiBicmVhay1hbGw7XG4gIHdoaXRlLXNwYWNlOiBub3JtYWw7XG4gIG92ZXJmbG93LXdyYXA6IGJyZWFrLXdvcmQ7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGJveC1zaGFkb3c6IDFweCAwcHggM3B4IDBweDtcbiAgbWFyZ2luOiAxOHB4IDE4cHg7XG4gIHBhZGRpbmc6IDE1cHg7XG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAzbXMgZWFzZTtcbn1cblxuLmxpc3RDb250YWluZXI6aG92ZXIge1xuICB0cmFuc2Zvcm06IHNjYWxlKDEuMDEpO1xufVxuXG4ucHJpb3JpdHlEYXRlT25MYXJnZVNjcmVlbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBtYXgtd2lkdGg6IDIwMHB4O1xufVxuXG4ucHJvamVjdEJ1dHRvbnNDb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIHBhZGRpbmctaW5saW5lOiAxOHB4XG59XG5cbi5wcm9qZWN0QnV0dG9uc0NvbnRhaW5lciBidXR0b24ge1xuICBib3JkZXI6IG5vbmU7XG4gIGJvcmRlci1yYWRpdXM6IDdweDtcbiAgcGFkZGluZzogOXB4O1xuICBmb250LXNpemU6IDEuMnJlbTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cblxuLmV4Y2x1ZGVkIHtcbiAgY29sb3I6IHJlZDtcbn1cblxuLnRhc2tDb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4OiAxO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG5cbi50YXNrVGl0bGUsXG4ubmV3UHJvamVjdC10YXNrLXRpdGxlLFxuLmVkaXRhYmxlU2F2ZVRhc2tFbCB7XG4gIG1hcmdpbjogMDtcbiAgZm9udC1zaXplOiAxLjNyZW07XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgdGV4dC1kZWNvcmF0aW9uLWNvbG9yOiByZWQ7XG59XG5cbi50YXNrRGVzY3JpcHRpb24sXG4ubmV3UHJvamVjdC1kZXNjcmlwdGlvbiB7XG4gIG1hcmdpbjogMDtcbiAgZm9udC1zaXplOiAxLjJyZW07XG59XG5cbi50YXNrUHJpb3JpdHkge1xuICBmb250LXNpemU6IDE5cHg7XG4gIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzU3M2QzZDtcbiAgcGFkZGluZzogNnB4O1xuICBtYXJnaW46IDAgMCA3cHg7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXgtd2lkdGg6IDE0MHB4O1xuICBtaW4td2lkdGg6IDcwcHg7XG5cblxufVxuXG4udGFza1ByaW9yaXR5OmhvdmVyIHtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjA1KTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzljMTUxNTtcbn1cblxuXG4uaW5uZXJUYXNrSGFuZGxlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIG1hcmdpbjogMHB4IDE1cHggMCA0MHB4O1xufVxuXG5hc2lkZSB1bCBsaSB7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDEwcHggMjBweDtcbn1cblxuLmluYm94LWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogNXB4O1xuICBmb250LXNpemU6IDEuM3JlbTtcbn1cblxuXG4uaW5ib3gge1xuICBmb250LXNpemU6IDEuNHJlbTtcbn1cblxuLmluYm94TGlzdENvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGdhcDogNXB4O1xufVxuXG4uaW5ib3hUYXNrQ29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleDogMTtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuXG4uaW5ib3hUYXNrVGl0bGUge1xuICBtYXJnaW46IDA7XG4gIGZvbnQtc2l6ZTogMThweDtcbn1cblxuLmluYm94VGFza0Rlc2NyaXB0aW9uIHtcbiAgbWFyZ2luOiAwO1xuICBmb250LXNpemU6IDE0cHg7XG59XG5cbi5pbmJveFRhc2tQcmlvcml0eSB7XG4gIG1hcmdpbjogMCAyMHB4IDAgMDtcbiAgZm9udC1zaXplOiAxLjNyZW07XG5cbn1cblxuLmR1ZURhdGUge1xuICBtYXJnaW46IDA7XG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xufVxuXG4uZWRpdCB7XG4gIGJvcmRlcjogbm9uZTtcbiAgb3V0bGluZTogbm9uZTtcbiAgZm9udC1zaXplOiAxN3B4O1xuICBtYXgtd2lkdGg6IDExMHB4O1xuICBtYXJnaW46IDAgMDtcbn1cblxuI3Byb2plY3RzIGgzIHtcbiAgbWFyZ2luOiAwIDAgMCAxMHB4O1xufVxuXG4jZm9ybSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM2NDc0OGI7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGhlaWdodDogMTcwcHg7XG4gIGRpc3BsYXk6IG5vbmU7XG4gIHBhZGRpbmctbGVmdDogMXJlbTtcbiAgbWFyZ2luOiAxMHB4IDEwcHggMCAwO1xufVxuXG4uZm9ybURldGFpbHMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIG1hcmdpbjogMTJweCAxNXB4O1xufVxuXG5pbnB1dCNkYXRlUGlja2VyIHtcbiAgbWF4LXdpZHRoOiAxMzNweDtcbn1cblxuLmJ1dHRvbnMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIG1hcmdpbjogMXB4IDMzcHg7XG59XG5cbi5idXR0b25zIGJ1dHRvbiB7XG4gIGJvcmRlcjogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogN3B4O1xuICBwYWRkaW5nOiA3cHg7XG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjJzIGVhc2Utb3V0O1xufVxuXG4uYnV0dG9ucyBidXR0b246aG92ZXIge1xuICB0cmFuc2Zvcm06IHNjYWxlKDEuMDUpO1xufVxuXG4jUHJvamVjdEZvcm0ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjQ3NDhiO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBoZWlnaHQ6IDE2NnB4O1xuICBkaXNwbGF5OiBub25lO1xuICBwYWRkaW5nOiAxMHB4O1xuICBtYXJnaW46IDE1cHggMTVweCAwIDE3cHg7XG59XG5cbi5wcm9qZWN0Rm9ybURldGFpbHMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIHBhZGRpbmctbGVmdDogMXJlbTtcbiAgdG9wOiAwO1xufVxuXG4uZmlyc3QtaW5wdXRDb250YWluZXIgaW5wdXQsXG4uUHRpdGxlSW5wdXRDb250YWluZXIgaW5wdXQge1xuICBtYXgtd2lkdGg6IDYwMHB4O1xuICBoZWlnaHQ6IDM3cHg7XG4gIGJvcmRlcjogbm9uZTtcbiAgb3V0bGluZTogbm9uZTtcbiAgY29sb3I6IHdoaXRlO1xuICBtYXJnaW46IDEwcHggMCAwIDA7XG4gIGJhY2tncm91bmQtY29sb3I6IGluaGVyaXQ7XG59XG5cbi50YXNrLXRpdGxlLFxuLmRlc2NyaXB0aW9uIHtcbiAgd2lkdGg6IDM1MHB4O1xuICBmb250LXNpemU6IDEuMXJlbTtcblxufVxuXG4uZmlyc3QtaW5wdXRDb250YWluZXIgaW5wdXQ6OnBsYWNlaG9sZGVyLFxuLlB0aXRsZUlucHV0Q29udGFpbmVyIGlucHV0OjpwbGFjZWhvbGRlciB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgcGFkZGluZzogMCAxMHB4O1xuICBvcGFjaXR5OiAxO1xufVxuXG4uc2Vjb25kLWlucHV0Q29udGFpbmVyIGlucHV0LFxuLlBkZXNjcmlwdGlvbklucHV0Q29udGFpbmVyIGlucHV0IHtcbiAgbWF4LXdpZHRoOiA2MDBweDtcbiAgaGVpZ2h0OiAzN3B4O1xuICBib3JkZXI6IG5vbmU7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogaW5oZXJpdDtcbiAgbWFyZ2luOiAwO1xufVxuXG4ucFRpdGxlLCAucERlc2NyaXB0aW9uIHtcbiAgd2lkdGg6IDM1MHB4O1xuICBmb250LXNpemU6IDEuMDdyZW07XG59XG5cbi5zZWNvbmQtaW5wdXRDb250YWluZXIgaW5wdXQ6OnBsYWNlaG9sZGVyLFxuLlBkZXNjcmlwdGlvbklucHV0Q29udGFpbmVyIGlucHV0OjpwbGFjZWhvbGRlciB7XG4gIHBhZGRpbmc6IDAgMTBweDtcbiAgY29sb3I6IHdoaXRlO1xuICBvcGFjaXR5OiAxO1xufVxuXG4uZmlyc3QtaW5wdXRDb250YWluZXIsXG4uc2Vjb25kLWlucHV0Q29udGFpbmVyIHtcbiAgbWFyZ2luOiAxMHB4IDAgMCAwO1xuICBmb250LXNpemU6IDFyZW07XG59XG5cbi5zdWJtaXRCdG46YWN0aXZlIHtcbiAgdHJhbnNmb3JtOiBhY3RpdmUgc2NhbGUoMS4xKTtcbn1cblxuLm90aGVyLW9wdGlvbnMtb24tZm9ybXMgYnV0dG9uLFxuI3ByaW9yaXR5LFxuaW5wdXQjZGF0ZVBpY2tlciB7XG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjNzIGVhc2UtaW47XG4gIHBhZGRpbmc6IDdweDtcbiAgYm9yZGVyLXJhZGl1czogN3B4O1xuICBib3JkZXI6IG5vbmU7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwODMzNDQ7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC1zaXplOiAxLjFyZW07XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG5cbiNwcmlvcml0eSB7XG4gIG1hcmdpbjogMTBweCAwIDhweCAwO1xufVxuXG4jcHJvamVjdFByaW9yaXR5LFxuLmZvb3RlciB7XG4gIHBhZGRpbmc6IDdweDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBtYXJnaW46IDAgNHB4IDVweCAwO1xuXG59XG5cblxuXG4jcHJvamVjdFByaW9yaXR5LCAjcHJvamVjdFByaW9yaXR5IG9wdGlvbiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM0NDQwM2M7XG4gIGNvbG9yOiAjZmFmYWZhO1xuICBmb250LXNpemU6IDEuMnJlbTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cblxuXG5cbi5hZGRQcm9qZWN0c0NvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG5cbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiAxMHB4O1xufVxuXG4uaW5ib3gtY29udGFpbmVyOmhvdmVyLCAuYWRkUHJvamVjdHNDb250YWluZXI6aG92ZXIsIC5wcm9qZWN0X3RleHQ6aG92ZXIsICNwcm9qZWN0LWRyb3Bkb3duOmhvdmVyIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMS4wNSk7XG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xufVxuXG5cbi5hZGRQcm9qZWN0c0NvbnRhaW5lciBzdmcge1xuICB3aWR0aDogMjVweDtcbiAgaGVpZ2h0OiAyNXB4O1xufVxuXG4jYWRkTmV3UHJvamVjdEVsIHtcbiAgbWFyZ2luOiAwO1xuICBmb250LXNpemU6IDEuM3JlbTtcbn1cblxuLnByb2plY3RfdGV4dCB7XG4gIG1hcmdpbjogMCAwIDEwcHggMTdweDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xuICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcbiAgcGFkZGluZzogOXB4O1xuICBib3JkZXItcmFkaXVzOiA1cHggMHB4IDBweCA1cHg7XG59XG5cblxuI3Byb2plY3QtZHJvcGRvd24ge1xuICBib3JkZXI6IDA7XG4gIGJhY2tncm91bmQtY29sb3I6IGluaGVyaXQ7XG4gIGZvbnQtc2l6ZTogMS4zcmVtO1xuICBmb250LXdlaWdodDogNTUwO1xuICBtYXgtd2lkdGg6IDIwMHB4O1xufVxuXG5cbiNwcm9qZWN0LWRyb3Bkb3duOmZvY3VzIHtcbiAgYm9yZGVyOiBub25lO1xuICBvdXRsaW5lOiBub25lO1xufVxuXG4jbmV3UHJvamVjdHNGb3JtQ29udGFpbmVyRWwge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1pdGVtczogY2VudGVyO1xufVxuXG4jUHJvamVjdHNGb3JtTmFtZUNvbnRhaW5lckVsIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcbn1cblxuLmlucHV0TmV3cHJvamVjdEZvcm1OYW1lIHtcbiAgZGlzcGxheTogbm9uZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2NlZTNlMztcbiAgbWF4LXdpZHRoOiA0MDBweDtcbiAgbWF4LWhlaWdodDogMzAwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIHBhZGRpbmc6IDQ2cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luOiA2MHB4IDAgMCAwO1xuICBib3gtc2hhZG93OiAwcHggOXB4IDNweCAwcHg7XG59XG5cbi5pbnB1dE5ld3Byb2plY3RGb3JtTmFtZSBoMiB7XG4gIG1hcmdpbjogMCAwIDEwcHggMDtcbn1cblxuLmlucHV0TmV3UHJvamVjdE5hbWUge1xuICBtYXgtd2lkdGg6IDM1MHB4O1xuICBtYXgtaGVpZ2h0OiAzNXB4O1xuICBwYWRkaW5nOiAxN3B4O1xuICBib3JkZXI6IG5vbmU7XG4gIGJvcmRlci1yYWRpdXM6IDdweDtcbiAgZm9udC1zaXplOiAxOXB4O1xufVxuXG5pbnB1dC5TYXZlUHJvamVjdE5hbWUge1xuICBwYWRkaW5nOiA5cHg7XG4gIGJvcmRlcjogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xuICBtYXgtd2lkdGg6IDEwMHB4O1xuICBoZWlnaHQ6IDQwcHg7XG4gIGZvbnQtc2l6ZTogMTlweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0MCwgNTksIDEzNCk7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDNtcyBlYXNlO1xufVxuXG5pbnB1dC5TYXZlUHJvamVjdE5hbWU6aG92ZXIge1xuICB0cmFuc2Zvcm06IHNjYWxlKDEuMDMpXG59XG5cbi5wcm9qZWN0TmFtZVNhdmVyQnRuQ29udGFpbmVyIHtcbiAgbWFyZ2luOiAxMHB4IDA7XG59XG5cbi5wcm9qZWN0TmFtZVNhdmVyQnRuQ29udGFpbmVyIGJ1dHRvbiB7XG4gIHBhZGRpbmc6IDlweDtcbiAgYm9yZGVyOiBub25lO1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIHdpZHRoOiAxMDBweDtcbiAgaGVpZ2h0OiA0MHB4O1xuICBmb250LXNpemU6IDE5cHg7XG59XG5cbiNQcm9qZWN0c0Zvcm1OYW1lQ29udGFpbmVyRWwgLkNhbmNlbCB7XG4gIGJhY2tncm91bmQtY29sb3I6IGdyZXk7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDNtcyBlYXNlO1xuXG59XG5cbiNQcm9qZWN0c0Zvcm1OYW1lQ29udGFpbmVyRWwgLkNhbmNlbDpob3ZlciB7XG4gIHRyYW5zZm9ybTogc2NhbGUoMS4wMylcbn1cblxuI25ld1Byb2plY3RUYXNrc0NvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4jbmV3UHJvamVjdFRhc2tCdG5XcmFwcGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbiNuZXdQcm9qZWN0VGFza3NJbm5lckNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDVweDtcbiAgbWFyZ2luOiAxMHB4O1xuICBib3gtc2hhZG93OiAjNWM1NTU1IDFweCAzcHggM3B4IDFweDtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgcGFkZGluZzogMTBweDtcbiAgd2lkdGg6IDk1cHg7XG5cbn1cblxuc3ZnLmFkZFRhc2sge1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGZpbGw6IHdoZWF0O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XG59XG5cbi5uZXdQcm9qZWN0QWRkQnRuIHtcbiAgYm9yZGVyOiAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmhlcml0O1xuICBmb250LXdlaWdodDogNTAwO1xufVxuXG4jUHJvamVjdGRhdGVQaWNrZXIge1xuICBwYWRkaW5nOiAycHg7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgYm9yZGVyOiBub25lO1xuICBoZWlnaHQ6IDMycHg7XG4gIHBhZGRpbmc6IDJweDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBib3JkZXI6IG5vbmU7XG4gIGhlaWdodDogMzJweDtcbiAgZm9udC1zaXplOiAxLjFyZW07XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGJhY2tncm91bmQ6ICNmMGYwZjA7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuI1Byb2plY3RkYXRlUGlja2VyIGlucHV0W3R5cGU9J2RhdGUnXSB7XG4gIGZpbGw6IHdoaXRlO1xufVxuXG4jc3VibWl0QnRuRm9yUHJvamVjdCB7XG4gIHBhZGRpbmc6IDdweDtcbiAgYm9yZGVyLXJhZGl1czogOXB4O1xuICAvKiBmb250LXNpemU6IDEuMnJlbTtcbiAgZm9udC13ZWlnaHQ6IDYwMDsgKi9cbn1cblxuI3N1Ym1pdEJ0bkZvclByb2plY3Q6YWN0aXZlIHtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xufVxuXG4uY2FuY2VsRm9yUHJvamVjdEJ0biB7XG4gIHBhZGRpbmc6IDdweDtcbiAgYm9yZGVyLXJhZGl1czogOXB4O1xufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxVQUFVO0VBQ1YsU0FBUztFQUNULHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLHNCQUFzQjtFQUN0QiwyQkFBMkI7QUFDN0I7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsU0FBUztFQUNULHNCQUFzQjtFQUN0QixjQUFjO0VBQ2QsaUNBQWlDO0VBQ2pDLGdCQUFnQjtFQUNoQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRTtJQUNFLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsdUJBQXVCO0lBQ3ZCLFVBQVU7RUFDWjs7RUFFQTtJQUNFLHlCQUF5QjtJQUN6QixrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQix1QkFBdUI7SUFDdkIsU0FBUztFQUNYOztFQUVBO0lBQ0UsZUFBZTtJQUNmLFVBQVU7SUFDVixXQUFXO0lBQ1gsV0FBVztJQUNYLFlBQVk7SUFDWjs7O2tCQUdjO0lBQ2QseUJBQXlCO0lBQ3pCLGVBQWU7SUFDZixhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsb0JBQW9COztJQUVwQixhQUFhO0VBQ2Y7O0VBRUE7SUFDRSxnQkFBZ0I7SUFDaEIsYUFBYTtFQUNmOztFQUVBO0lBQ0UsV0FBVztJQUNYLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsV0FBVztJQUNYLHNCQUFzQjtJQUN0QiwyQkFBMkI7SUFDM0IsZ0JBQWdCO0VBQ2xCOztFQUVBO0lBQ0UsV0FBVztJQUNYLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsV0FBVztJQUNYLHNCQUFzQjtJQUN0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a0I7RUFDbEI7cUJBQ21CO0FBQ3JCOztBQUVBO0VBQ0UscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGtCQUFrQjtBQUNwQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJib2R5IHtcXG4gIHBhZGRpbmc6IDA7XFxuICBtYXJnaW46IDA7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG46cm9vdCB7XFxuICAtLWhvdmVyLWNvbG9yOiAjZmRhNGFmO1xcbiAgLS1iYWNrZ3JvdW5kLWNvbG9yOiAjNmY5ZTllO1xcbn1cXG5cXG4qIHtcXG4gIHBhZGRpbmc6IDA7XFxuICBtYXJnaW46IDA7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgY29sb3I6ICM3ODM1MGY7XFxuICBmb250LWZhbWlseTogXFxcIlJvYm90b1xcXCIsIHNhbnMtc2VyaWY7XFxuICBmb250LXdlaWdodDogNDAwO1xcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcbn1cXG5cXG5AbWVkaWEgKG1heC13aWR0aDogNTUwcHgpIHtcXG4gIGJvZHkgbWFpbiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICB6LWluZGV4OiAxO1xcbiAgfVxcblxcbiAgbWFpbiBoZWFkZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmRhNGFmO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBnYXA6IDEwcHg7XFxuICB9XFxuXFxuICAjdG9nZ2xlTWVudUljb24ge1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIHRvcDogMTAwcHg7XFxuICAgIHJpZ2h0OiAxMHB4O1xcbiAgICB3aWR0aDogNTBweDtcXG4gICAgaGVpZ2h0OiA1MHB4O1xcbiAgICAvKiBcXG4gICAgdG9wOiAxMDZweDtcXG4gICAgcmlnaHQ6IDEwcHg7XFxuICAgIHdpZHRoOiA1MHB4OyAqL1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNmI4ODg4O1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XFxuICAgIHRyYW5zaXRpb246IHRvcCAwLjNzO1xcblxcbiAgICB6LWluZGV4OiAxMDAwO1xcbiAgfVxcblxcbiAgaDEuaGVhZGVyVGV4dENvbnRlbnQge1xcbiAgICBmb250LXdlaWdodDogNjAwO1xcbiAgICBwYWRkaW5nOiAzMHB4O1xcbiAgfVxcblxcbiAgI3RvZ2dsZU1lbnVJY29uOjpiZWZvcmUge1xcbiAgICBjb250ZW50OiBcXFwiXFxcIjtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB3aWR0aDogMjhweDtcXG4gICAgaGVpZ2h0OiAycHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNXB4KTtcXG4gICAgdHJhbnNpdGlvbjogMC4ycztcXG4gIH1cXG5cXG4gICN0b2dnbGVNZW51SWNvbjo6YWZ0ZXIge1xcbiAgICBjb250ZW50OiBcXFwiXFxcIjtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB3aWR0aDogMjhweDtcXG4gICAgaGVpZ2h0OiAycHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSg1cHgpO1xcbiAgICB0cmFuc2l0aW9uOiAwLjJzO1xcbiAgfVxcblxcbiAgI3RvZ2dsZU1lbnVJY29uLmFjdGl2ZTo6YmVmb3JlIHtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDBweCkgcm90YXRlKDQ1ZGVnKTtcXG4gIH1cXG5cXG4gICN0b2dnbGVNZW51SWNvbi5hY3RpdmU6OmFmdGVyIHtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDBweCkgcm90YXRlKC00NWRlZyk7XFxuICB9XFxuXFxuICBhc2lkZSNtZW51IHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgdG9wOiAwO1xcbiAgICBsZWZ0OiAtMjIwcHg7XFxuICAgIHdpZHRoOiAyMjBweDtcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBmaWx0ZXI6IHdoaXRlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNzk4OWExO1xcbiAgICB0cmFuc2l0aW9uOiAwLjNzO1xcbiAgICB6LWluZGV4OiAxMDAwO1xcbiAgICBmaWxsOiB3aGl0ZTtcXG4gIH1cXG5cXG4gIGFzaWRlI21lbnUuYWN0aXZlIHtcXG4gICAgbGVmdDogMDtcXG4gIH1cXG5cXG4gIG1haW4gYXNpZGUge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlMmU4ZjA7XFxuICB9XFxuXFxuICBwI2FkZE5ld1Byb2plY3RFbCwgcC5pbmJveCwgc2VsZWN0I3Byb2plY3QtZHJvcGRvd24ge1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICB9XFxuXFxuICBtYWluICNDb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBmbGV4LXdyYXA6IHdyYXA7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIH1cXG5cXG4gIGhlYWRlciAubWVudUNvbnRyb2xsZXIge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgd2lkdGg6IDQwcHg7XFxuICAgIGhlaWdodDogNDBweDtcXG4gIH1cXG5cXG4gIGhlYWRlciAubWVudUNvbnRyb2xsZXIgc3ZnIHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIHdpZHRoOiA0MHB4O1xcbiAgICBoZWlnaHQ6IDQwcHg7XFxuICAgIGZpbGw6IHdoaXRlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIH1cXG5cXG4gICN1c2VybGlzdCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIG1heC13aWR0aDogNTUwcHg7XFxuICB9XFxuXFxuICBkaXYubGlzdENvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDogNXB4O1xcbiAgICBtYXgtd2lkdGg6IDUxNXB4O1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICBib3gtc2hhZG93OiAxcHggMHB4IDNweCAwcHg7XFxuICAgIG1hcmdpbjogMTRweCAxNHB4IDAgMTlweDtcXG4gICAgd29yZC13cmFwOiBicmVhay13b3JkO1xcbiAgICB3b3JkLWJyZWFrOiBicmVhay1hbGw7XFxuICAgIHdoaXRlLXNwYWNlOiBub3JtYWw7XFxuICAgIG92ZXJmbG93LXdyYXA6IGJyZWFrLXdvcmQ7XFxuXFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICB9XFxuXFxuICAjdXNlcmxpc3QgLmludGlhbFRleHREaXNwbGF5IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIH1cXG5cXG4gIC5pbnRpYWxUZXh0RGlzcGxheSBpbWcge1xcbiAgICBtYXgtd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogYXV0bztcXG4gICAgcGFkZGluZzogMThweDtcXG4gICAgYm9yZGVyLXJhZGl1czogMzBweDtcXG4gICAgb2JqZWN0LWZpdDogY29udGFpbjtcXG4gIH1cXG5cXG4gIC5wb3BVcENvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIG1heC13aWR0aDogMjAwcHg7XFxuICAgIHBhZGRpbmc6IDMwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwN2M0ZGQ7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbiAgfVxcblxcbiAgZGl2LnNpZGVCYXJDb250ZW50Q29udGFpbmVyIHtcXG4gICAgbWFyZ2luOiA0MHB4IDAgMCAtNHB4O1xcbiAgfVxcblxcbiAgI3VzZXJsaXN0ICNhZGRUb2RvQnRuQ29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiA1cHg7XFxuICAgIG1hcmdpbjogMjdweCAwIDExcHggMjZweDtcXG4gIH1cXG5cXG4gICN0YXNrIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiA1cHg7XFxuICAgIG1hcmdpbjogMjdweCAwIDExcHggMjZweDtcXG4gIH1cXG5cXG4gICN1c2VybGlzdCAjYWRkVG9kb0J0bkNvbnRhaW5lciBzdmcge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGMyNjI2O1xcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICAgIGZpbGw6IHdoaXRlO1xcbiAgfVxcblxcbiAgI3VzZXJsaXN0ICNhZGRUb2RvQnRuQ29udGFpbmVyIDpob3ZlciB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEuMDkpO1xcbiAgfVxcblxcbiAgI3VzZXJsaXN0ICNhZGRUb2RvQnRuQ29udGFpbmVyIGJ1dHRvbiB7XFxuICAgIGJvcmRlcjogMDtcXG4gICAgZm9udC1zaXplOiAxLjNyZW07XFxuICAgIGNvbG9yOiAjYjkxYzFjO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmhlcml0O1xcbiAgICB0cmFuc2l0aW9uOiAwLjNzO1xcbiAgfVxcblxcbiAgI3VzZXJsaXN0ICNhZGRUb2RvQnRuQ29udGFpbmVyIGJ1dHRvbjpob3ZlciB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEuMDkpO1xcbiAgfVxcblxcbiAgLmlubmVyX2NvbnRhaW5lciAjZm9ybSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM2NDc0OGI7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIG1heC1oZWlnaHQ6IDIwMHB4O1xcbiAgICBtYXgtd2lkdGg6IDUxNXB4ICFpbXBvcnRhbnQ7XFxuICAgIGhlaWdodDogMTcwcHg7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIG1heC13aWR0aDogNDgwcHg7XFxuICAgIG1hcmdpbjogMTBweCAxMHB4IDAgMTBweDtcXG4gIH1cXG5cXG4gIGRpdi5pbnB1dE5ld3Byb2plY3RGb3JtTmFtZSB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNjZWUzZTM7XFxuICAgIG1heC13aWR0aDogMzAwcHg7XFxuICAgIG1heC1oZWlnaHQ6IDMwMHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICBwYWRkaW5nOiAyNXB4O1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIG1hcmdpbjogNjBweCAwIDAgMDtcXG4gICAgYm94LXNoYWRvdzogMHB4IDlweCAzcHggMHB4O1xcbiAgfVxcblxcbiAgLmlucHV0TmV3cHJvamVjdEZvcm1OYW1lIGgyIHtcXG4gICAgbWFyZ2luOiAwIDAgMTBweCAwO1xcbiAgfVxcblxcbiAgLmlucHV0TmV3cHJvamVjdEZvcm1OYW1lIC5pbnB1dE5ld1Byb2plY3ROYW1lIHtcXG4gICAgbWF4LXdpZHRoOiAzMDBweDtcXG4gICAgbWF4LWhlaWdodDogMzVweDtcXG4gICAgcGFkZGluZzogNXB4O1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDdweDtcXG4gIH1cXG5cXG4gIGlucHV0LlNhdmVQcm9qZWN0TmFtZSB7XFxuICAgIHBhZGRpbmc6IDlweDtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XFxuICAgIG1heC13aWR0aDogMTAwcHg7XFxuICAgIGhlaWdodDogNDBweDtcXG4gICAgZm9udC1zaXplOiAxOXB4O1xcbiAgfVxcblxcbiAgLnByb2plY3ROYW1lU2F2ZXJCdG5Db250YWluZXIge1xcbiAgICBtYXJnaW46IDEwcHggMDtcXG4gIH1cXG5cXG4gIC5wcm9qZWN0TmFtZVNhdmVyQnRuQ29udGFpbmVyIGJ1dHRvbiB7XFxuICAgIHBhZGRpbmc6IDlweDtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XFxuICAgIHdpZHRoOiAxMDBweDtcXG4gICAgaGVpZ2h0OiA0MHB4O1xcbiAgICBmb250LXNpemU6IDE5cHg7XFxuICB9XFxuXFxuICAuaW5uZXJfY29udGFpbmVyICNQcm9qZWN0Rm9ybSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM2NDc0OGI7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIG1heC1oZWlnaHQ6IDE1NXB4O1xcbiAgICBtYXgtd2lkdGg6IDUxNXB4O1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgICBtYXgtd2lkdGg6IDUwMHB4O1xcbiAgICBtYXJnaW46IDlweCAxMHB4IDAgMTNweDtcXG4gIH1cXG5cXG4gIC5wcm9qZWN0Rm9ybURldGFpbHMge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIGhlaWdodDogODBweDtcXG4gIH1cXG5cXG4gIGRpdi5wcmlvcml0eURhdGVPbkxhcmdlU2NyZWVuIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICB0b3A6IDA7XFxuICAgIG1heC13aWR0aDogMjAwcHg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICB9XFxuXFxuICAucHJvamVjdElucHV0Q29udGFpbmVyIHtcXG4gICAgbWF4LXdpZHRoOiAyMDBweDtcXG4gIH1cXG5cXG4gIC5wcm9qZWN0SW5wdXRDb250YWluZXIgcCBpbnB1dCB7XFxuICAgIG1heC13aWR0aDogMjAwcHg7XFxuICB9XFxuXFxuICAuaW5uZXJUYXNrQ29udGFpbmVyIC5lZGl0IHtcXG4gICAgbWF4LXdpZHRoOiAxNDBweDtcXG4gIH1cXG5cXG4gIC5wcm9qZWN0SW5wdXRDb250YWluZXIgLlBkZXNjcmlwdGlvbklucHV0Q29udGFpbmVyIHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgfVxcblxcbiAgaW5wdXQjUHJvamVjdGRhdGVQaWNrZXIge1xcbiAgICBwYWRkaW5nOiAycHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBoZWlnaHQ6IDMycHg7XFxuICAgIGZvbnQtc2l6ZTogMC45cmVtO1xcbiAgICBmb250LXdlaWdodDogNzAwO1xcbiAgICBiYWNrZ3JvdW5kOiAjZDRkNGQ4O1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICB9XFxuXFxuICBzZWxlY3QjcHJvamVjdFByaW9yaXR5IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzQ0NDAzYztcXG4gICAgY29sb3I6ICNmYWZhZmE7XFxuICAgIGZvbnQtc2l6ZTogMC44NXJlbTtcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gICAgaGVpZ2h0OiAzNXB4O1xcbiAgfVxcblxcblxcbiAgZGl2LnByb2plY3RCdXR0b25zQ29udGFpbmVyIGJ1dHRvbiB7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYm9yZGVyLXJhZGl1czogN3B4O1xcbiAgICBwYWRkaW5nOiA5cHg7XFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gIH1cXG5cXG5cXG4gIGRpdiNjb25maWdQcmlvcml0eURhdGVPbk1vYmlsZSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIG1heC13aWR0aDogMjAwcHg7XFxuICAgIHBvc2l0aW9uOiBzdGF0aWM7XFxuICB9XFxuXFxuICAjY29uZmlnUHJpb3JpdHlEYXRlT25Nb2JpbGUgI3ByaW9yaXR5LFxcbiAgI2RhdGVQaWNrZXIge1xcbiAgICBwYWRkaW5nOiAycHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcXG4gICAgbWF4LXdpZHRoOiAxMDRweDtcXG4gICAgbWluLXdpZHRoOiA4MHB4O1xcbiAgfVxcblxcbiAgI3ByaW9yaXR5IG9wdGlvbiB7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gIH1cXG5cXG4gICNQcm9qZWN0Rm9ybSAuZm9vdGVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBwYWRkaW5nOiAwIDEwcHg7XFxuICAgIGdhcDogMDtcXG4gIH1cXG5cXG4gICNQcm9qZWN0Rm9ybSAucHJvamVjdEJ1dHRvbnNDb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHBhZGRpbmc6IDAgMTBweDtcXG4gICAgZ2FwOiAwO1xcbiAgfVxcblxcbiAgI2Zvcm0gLmZvcm1EZXRhaWxzIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICBtYXJnaW46IDA7XFxuICB9XFxuXFxuICAjZm9ybUZvb3Rlck9uTW9iaWxlIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBwYWRkaW5nOiAwIDEwcHg7XFxuICB9XFxuXFxuICAjZm9ybUZvb3Rlck9uTW9iaWxlIC5idXR0b25zIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBwYWRkaW5nOiAwIDEwcHg7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgZ2FwOiAwO1xcbiAgfVxcblxcbiAgLnByaW9yaXR5RGF0ZUxhcmdlU2NyZWVuIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIH1cXG5cXG4gICNmb3JtIC5pbnB1dHMge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBtYXgtd2lkdGg6IDE1MHB4O1xcbiAgfVxcblxcbiAgI2Zvcm0gLmZpcnN0LWlucHV0Q29udGFpbmVyIGlucHV0LFxcbiAgLlB0aXRsZUlucHV0Q29udGFpbmVyIGlucHV0IHtcXG4gICAgbWF4LXdpZHRoOiAzMDVweDtcXG4gICAgbWF4LWhlaWdodDogNDBweDtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBvdXRsaW5lOiBub25lO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIC8qIG1hcmdpbjogMTBweCAwOyAqL1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmhlcml0O1xcbiAgfVxcblxcbiAgI2Zvcm0gLmZpcnN0LWlucHV0Q29udGFpbmVyIGlucHV0LCAuc2Vjb25kLWlucHV0Q29udGFpbmVyIGlucHV0IHtcXG4gICAgbWF4LXdpZHRoOiAyMzBweDtcXG4gICAgbWF4LWhlaWdodDogNDBweDtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBmb250LXNpemU6IDEuMXJlbTtcXG4gIH1cXG5cXG4gIC5zZWNvbmQtaW5wdXRDb250YWluZXIgaW5wdXQuZGVzY3JpcHRpb24ge1xcbiAgICBtYXgtd2lkdGg6IDE1MHB4O1xcbiAgICBmb250LXNpemU6IDEuMXJlbTtcXG4gIH1cXG5cXG5cXG5cXG4gICNmb3JtIC5zZWNvbmQtaW5wdXRDb250YWluZXIgaW5wdXQsXFxuICAuUGRlc2NyaXB0aW9uSW5wdXRDb250YWluZXIgaW5wdXQge1xcbiAgICBtYXgtd2lkdGg6IDI1MHB4O1xcbiAgICBtYXgtaGVpZ2h0OiA0MHB4O1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIG91dGxpbmU6IG5vbmU7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogaW5oZXJpdDtcXG4gICAgbWFyZ2luOiAwO1xcbiAgfVxcblxcbiAgI2Zvcm0gLm90aGVyLW9wdGlvbnMtb24tZm9ybXMgYnV0dG9uLFxcbiAgI2NvbmZpZ1ByaW9yaXR5RGF0ZU9uTW9iaWxlICNwcmlvcml0eSxcXG4gICNkYXRlUGlja2VyIHtcXG4gICAgcGFkZGluZzogOHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA2cHg7XFxuICAgIG1heC13aWR0aDogMTA0cHg7XFxuICAgIG1pbi13aWR0aDogODBweDtcXG4gIH1cXG5cXG4gICNjb25maWdQcmlvcml0eURhdGVPbk1vYmlsZSBpbnB1dCNkYXRlUGlja2VyIHtcXG5cXG4gICAgbWF4LXdpZHRoOiA4MHB4O1xcbiAgfVxcbn1cXG5cXG5AbWVkaWEgKG1pbi13aWR0aDogNTUxcHgpIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xcbiAgYm9keSBtYWluIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICB9XFxuXFxuICBtYWluIGhlYWRlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZGE0YWY7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGdhcDogMTBweDtcXG4gICAgaGVpZ2h0OiAxMDBweDtcXG4gIH1cXG5cXG4gIG1haW4gYXNpZGUge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlMmU4ZjA7XFxuICAgIHotaW5kZXg6IDI7XFxuICB9XFxuXFxuICBhc2lkZSB1bCxcXG4gIHVsIHNlbGVjdCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIC8qIGNvbG9yOiB3aGl0ZTsgKi9cXG4gICAgZmlsbDogIzc4MzUwZjtcXG4gIH1cXG5cXG4gIGxpLmluYm94IHtcXG4gICAgZm9udC1zaXplOiAxLjRyZW07XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gIH1cXG5cXG4gIGxpI2FkZE5ld1Byb2plY3RFbCB7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgZm9udC1zaXplOiAxLjNyZW07XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gIH1cXG5cXG4gIHNlbGVjdCNwcm9qZWN0LWRyb3Bkb3duIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogaW5oZXJpdDtcXG4gICAgbWF4LXdpZHRoOiAxODBweDtcXG4gIH1cXG5cXG4gIGRpdi5zaWRlQmFyQ29udGVudENvbnRhaW5lciB7XFxuICAgIG1hcmdpbjogNDBweCAwIDAgMHB4O1xcbiAgfVxcblxcblxcblxcbiAgbWFpbiAjQ29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZmxleC13cmFwOiB3cmFwO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIHotaW5kZXg6IDE7XFxuICB9XFxuXFxuICBoZWFkZXIgLm1lbnVDb250cm9sbGVyIHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIHdpZHRoOiA0MHB4O1xcbiAgICBoZWlnaHQ6IDQwcHg7XFxuICB9XFxuXFxuICAjdG9nZ2xlTWVudUljb24ge1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIHRvcDogMjBweDtcXG4gICAgcmlnaHQ6IDIwcHg7XFxuICAgIHdpZHRoOiA1MHB4O1xcbiAgICBoZWlnaHQ6IDUwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM2ZjllOWU7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcXG4gICAgdHJhbnNpdGlvbjogdG9wIDAuM3M7XFxuICAgIHotaW5kZXg6IDEwMDA7XFxuXFxuICAgIHotaW5kZXg6IDEwMDA7XFxuICB9XFxuXFxuICAjdG9nZ2xlTWVudUljb246OmJlZm9yZSB7XFxuICAgIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHdpZHRoOiAyOHB4O1xcbiAgICBoZWlnaHQ6IDJweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01cHgpO1xcbiAgICB0cmFuc2l0aW9uOiAwLjJzO1xcbiAgfVxcblxcbiAgI3RvZ2dsZU1lbnVJY29uOjphZnRlciB7XFxuICAgIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHdpZHRoOiAyOHB4O1xcbiAgICBoZWlnaHQ6IDJweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDVweCk7XFxuICAgIHRyYW5zaXRpb246IDAuMnM7XFxuICB9XFxuXFxuICAjdG9nZ2xlTWVudUljb24uYWN0aXZlOjpiZWZvcmUge1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMHB4KSByb3RhdGUoNDVkZWcpO1xcbiAgfVxcblxcbiAgI3RvZ2dsZU1lbnVJY29uLmFjdGl2ZTo6YWZ0ZXIge1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMHB4KSByb3RhdGUoLTQ1ZGVnKTtcXG4gIH1cXG5cXG4gIGFzaWRlI21lbnUge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICB0b3A6IDA7XFxuICAgIGxlZnQ6IC0yMjBweDtcXG4gICAgd2lkdGg6IDIyMHB4O1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYmZjNmM2O1xcbiAgICB0cmFuc2l0aW9uOiAwLjNzO1xcbiAgfVxcblxcbiAgYXNpZGUjbWVudS5hY3RpdmUge1xcbiAgICBsZWZ0OiAwO1xcbiAgfVxcblxcbiAgYXNpZGUgdWwge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGZpbGw6IHdoaXRlO1xcbiAgfVxcblxcbiAgcCNhZGROZXdQcm9qZWN0RWwsIHAuaW5ib3gsIHNlbGVjdCNwcm9qZWN0LWRyb3Bkb3duIHtcXG4gICAgLyogY29sb3I6IHdoaXRlOyAqL1xcblxcbiAgICBmb250LXdlaWdodDogNjAwO1xcbiAgfVxcblxcbiAgaGVhZGVyIC5tZW51Q29udHJvbGxlciBzdmcge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgd2lkdGg6IDQwcHg7XFxuICAgIGhlaWdodDogNDBweDtcXG4gICAgZmlsbDogd2hpdGU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgfVxcblxcbiAgI3VzZXJsaXN0ICNhZGRUb2RvQnRuQ29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiA1cHg7XFxuICAgIG1hcmdpbjogMjdweCAwIDExcHggMjZweDtcXG4gIH1cXG5cXG4gICN0YXNrIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiA1cHg7XFxuICAgIG1hcmdpbjogMjdweCAwIDExcHggMjZweDtcXG4gIH1cXG5cXG4gICN1c2VybGlzdCAjYWRkVG9kb0J0bkNvbnRhaW5lciBzdmcge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGMyNjI2O1xcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICAgIGZpbGw6IHdoaXRlO1xcbiAgfVxcblxcbiAgI3VzZXJsaXN0ICNhZGRUb2RvQnRuQ29udGFpbmVyIDpob3ZlciB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEuMDkpO1xcbiAgfVxcblxcbiAgI3VzZXJsaXN0ICNhZGRUb2RvQnRuQ29udGFpbmVyIGJ1dHRvbiB7XFxuICAgIGJvcmRlcjogMDtcXG4gICAgZm9udC1zaXplOiAxLjRyZW07XFxuXFxuICAgIGNvbG9yOiAjYjkxYzFjO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmhlcml0O1xcbiAgfVxcblxcbiAgI3VzZXJsaXN0ICNhZGRUb2RvQnRuQ29udGFpbmVyIGJ1dHRvbjpob3ZlciB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEuMDkpO1xcbiAgfVxcblxcbiAgZGl2Lmxpc3RDb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBnYXA6IDVweDtcXG4gICAgbWF4LXdpZHRoOiA3MTRweDtcXG4gICAgd29yZC13cmFwOiBicmVhay13b3JkO1xcbiAgICB3b3JkLWJyZWFrOiBicmVhay1hbGw7XFxuICAgIHdoaXRlLXNwYWNlOiBub3JtYWw7XFxuICAgIG92ZXJmbG93LXdyYXA6IGJyZWFrLXdvcmQ7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIGJveC1zaGFkb3c6IDFweCAwcHggM3B4IDBweDtcXG4gICAgLyogbWFyZ2luOiAxOHB4IDYwcHg7ICovXFxuICAgIHBhZGRpbmc6IDE1cHg7XFxuICB9XFxuXFxuICAjdXNlcmxpc3QgLmludGlhbFRleHREaXNwbGF5IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIH1cXG5cXG4gIC5pbnRpYWxUZXh0RGlzcGxheSBwIHtcXG4gICAgbWF4LXdpZHRoOiA1MDBweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgbWF4LXdpZHRoOiA1MDBweDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZmxleC13cmFwOiB3cmFwO1xcbiAgfVxcblxcbiAgLmludGlhbFRleHREaXNwbGF5IGltZyB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IGF1dG87XFxuICAgIHBhZGRpbmc6IDIwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDQxcHg7XFxuICAgIG9iamVjdC1maXQ6IGNvbnRhaW47XFxuICB9XFxuXFxuICAuaW5uZXJfY29udGFpbmVyICNmb3JtIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzY0NzQ4YjtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgaGVpZ2h0OiAxNjBweDtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gICAgbWF4LXdpZHRoOiA3MDBweDtcXG5cXG4gICAgbWFyZ2luOiAxN3B4O1xcbiAgfVxcblxcbiAgI2Zvcm0gZGl2LmZvcm1EZXRhaWxzIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcblxcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICBtYXJnaW46IDA7XFxuICB9XFxuXFxuICAucHJpb3JpdHlEYXRlTGFyZ2VTY3JlZW4ge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgfVxcblxcbiAgI2Zvcm0gLmlucHV0cyB7XFxuICAgIG1heC13aWR0aDogMTUwcHg7XFxuICB9XFxuXFxuICAjZm9ybSAuZmlyc3QtaW5wdXRDb250YWluZXIgaW5wdXQsXFxuICAuUHRpdGxlSW5wdXRDb250YWluZXIgaW5wdXQsXFxuICAjZm9ybSAuc2Vjb25kLWlucHV0Q29udGFpbmVyIGlucHV0LFxcbiAgLlBkZXNjcmlwdGlvbklucHV0Q29udGFpbmVyIGlucHV0IHtcXG4gICAgbWF4LXdpZHRoOiA2MDBweDtcXG4gICAgaGVpZ2h0OiAyNXB4O1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIG91dGxpbmU6IG5vbmU7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgbWFyZ2luOiAxMHB4IDAgMCAwO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmhlcml0O1xcbiAgfVxcblxcbiAgcC5zZWNvbmQtaW5wdXRDb250YWluZXIge1xcbiAgICBtYXJnaW46IDA7XFxuICB9XFxuXFxuICAjZm9ybSAuYnV0dG9ucyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIG1hcmdpbjogMXB4IDIzcHg7XFxuICB9XFxuXFxuICAjY29uZmlnUHJpb3JpdHlEYXRlT25Nb2JpbGUge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBwb3NpdGlvbjogc3RhdGljO1xcbiAgfVxcblxcbiAgI2Zvcm0gLm90aGVyLW9wdGlvbnMtb24tZm9ybXMgYnV0dG9uLFxcbiAgI3ByaW9yaXR5LFxcbiAgI2RhdGVQaWNrZXIge1xcbiAgICBwYWRkaW5nOiA3cHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDlweDtcXG4gIH1cXG5cXG4gIGZvcm0jUHJvamVjdEZvcm0ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjQ3NDhiO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICBoZWlnaHQ6IDE2MHB4O1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgICBtYXgtd2lkdGg6IDY5M3B4O1xcbiAgICBwYWRkaW5nLWxlZnQ6IDFyZW07XFxuICAgIC8qIG1hcmdpbjogOXB4IDYxcHg7ICovXFxuICB9XFxuXFxuICBkaXYucHJvamVjdEZvcm1EZXRhaWxzIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICB0b3A6IDA7XFxuICB9XFxuXFxuICAqLyAucHJvamVjdEJ1dHRvbnNDb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICB9XFxuXFxuICBzZWxlY3QjcHJpb3JpdHkge1xcbiAgICBwYWRkaW5nOiA4cHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDlweDtcXG4gIH1cXG5cXG4gIHNlbGVjdCNwcmlvcml0eSBvcHRpb24ge1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICB9XFxuXFxuICBpbnB1dCNkYXRlUGlja2VyIHtcXG4gICAgcGFkZGluZzogM3B4O1xcbiAgICBib3JkZXItcmFkaXVzOiA5cHg7XFxuICB9XFxufVxcblxcblxcbkBtZWRpYSAobWluLXdpZHRoOiA3NjlweCkgYW5kIChtYXgtd2lkdGg6IDEwMDBweCkge1xcbiAgYm9keSBtYWluIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gIH1cXG5cXG4gIG1haW4gaGVhZGVyIHtcXG4gICAgZ3JpZC1hcmVhOiAxIC8gMiAvIDIgLyA2O1xcblxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmRhNGFmO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBnYXA6IDEwcHg7XFxuICB9XFxuXFxuICBtYWluIGFzaWRlIHtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTJlOGYwO1xcbiAgfVxcblxcbiAgbWFpbiAjQ29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZmxleC13cmFwOiB3cmFwO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIHotaW5kZXg6IDE7XFxuICB9XFxuXFxuICBoZWFkZXIgLm1lbnVDb250cm9sbGVyIHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIHdpZHRoOiA0MHB4O1xcbiAgICBoZWlnaHQ6IDQwcHg7XFxuICB9XFxuXFxuICBoZWFkZXIgLm1lbnVDb250cm9sbGVyIHN2ZyB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICB3aWR0aDogNDBweDtcXG4gICAgaGVpZ2h0OiA0MHB4O1xcbiAgICBmaWxsOiB3aGl0ZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICB9XFxuXFxuXFxuXFxuXFxuICAjdXNlcmxpc3QgLmludGlhbFRleHREaXNwbGF5IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIH1cXG5cXG4gICN1c2VybGlzdCAuaW50aWFsVGV4dERpc3BsYXkgcCB7XFxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICAgIG1hcmdpbjogMTBweCAwIDAgMDtcXG4gICAgbWF4LXdpZHRoOiA2MDBweDtcXG4gIH1cXG5cXG4gICN1c2VybGlzdCAjYWRkVG9kb0J0bkNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogNXB4O1xcbiAgICBtYXJnaW46IDI3cHggMCAxMXB4IDI2cHg7XFxuICB9XFxuXFxuICAjdGFzayB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogNXB4O1xcbiAgICBtYXJnaW46IDI3cHggMCAxMXB4IDI2cHg7XFxuICB9XFxuXFxuICAjdXNlcmxpc3QgI2FkZFRvZG9CdG5Db250YWluZXIgc3ZnIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2RjMjYyNjtcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgICBmaWxsOiB3aGl0ZTtcXG4gIH1cXG5cXG4gICN1c2VybGlzdCAjYWRkVG9kb0J0bkNvbnRhaW5lciA6aG92ZXIge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxLjA5KTtcXG4gIH1cXG5cXG4gICN1c2VybGlzdCAjYWRkVG9kb0J0bkNvbnRhaW5lciBidXR0b24ge1xcbiAgICBib3JkZXI6IDA7XFxuICAgIGZvbnQtc2l6ZTogMTZweDtcXG4gICAgY29sb3I6ICNiOTFjMWM7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGluaGVyaXQ7XFxuICB9XFxuXFxuICAjdXNlcmxpc3QgI2FkZFRvZG9CdG5Db250YWluZXIgYnV0dG9uOmhvdmVyIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMS4wOSk7XFxuICB9XFxuXFxuICBkaXYubGlzdENvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDogNXB4O1xcbiAgICBtYXgtd2lkdGg6IDcxNHB4O1xcbiAgICB3b3JkLWJyZWFrOiBicmVhay1hbGw7XFxuICAgIHdoaXRlLXNwYWNlOiBub3JtYWw7XFxuICAgIG92ZXJmbG93LXdyYXA6IGJyZWFrLXdvcmQ7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIGJveC1zaGFkb3c6IDFweCAwcHggM3B4IDBweDtcXG4gICAgLyogbWFyZ2luOiAxOHB4IDYwcHg7ICovXFxuICAgIHBhZGRpbmc6IDE1cHg7XFxuICB9XFxuXFxuICAuaW5uZXJfY29udGFpbmVyICNmb3JtIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzY0NzQ4YjtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgaGVpZ2h0OiAxODBweDtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gICAgbWF4LXdpZHRoOiA3NTBweDtcXG5cXG4gICAgbWFyZ2luOiAxN3B4O1xcbiAgfVxcblxcbiAgI2Zvcm0gZGl2LmZvcm1EZXRhaWxzIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcblxcbiAgICBwYWRkaW5nOiA5cHggMjBweDtcXG4gICAgbWFyZ2luOiAwO1xcbiAgfVxcblxcbiAgLnByaW9yaXR5RGF0ZUxhcmdlU2NyZWVuIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gIH1cXG5cXG4gICNmb3JtIC5pbnB1dHMge1xcbiAgICBtYXgtd2lkdGg6IDE1MHB4O1xcbiAgfVxcblxcbiAgI2Zvcm0gLmZpcnN0LWlucHV0Q29udGFpbmVyIGlucHV0LFxcbiAgLlB0aXRsZUlucHV0Q29udGFpbmVyIGlucHV0IHtcXG4gICAgbWF4LXdpZHRoOiA0MjBweDtcXG4gICAgbWF4LWhlaWdodDogNjBweDtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBvdXRsaW5lOiBub25lO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGluaGVyaXQ7XFxuICAgIG1hcmdpbjogMDtcXG4gIH1cXG5cXG4gICNmb3JtIC5zZWNvbmQtaW5wdXRDb250YWluZXIgaW5wdXQsXFxuICAuUGRlc2NyaXB0aW9uSW5wdXRDb250YWluZXIgaW5wdXQge1xcbiAgICBtYXgtd2lkdGg6IDQyMHB4O1xcbiAgICBtYXgtaGVpZ2h0OiA2MHB4O1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIG91dGxpbmU6IG5vbmU7XFxuICAgIGNvbG9yOiByZ2IoOTAsIDc3LCA3Nyk7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGluaGVyaXQ7XFxuICAgIG1hcmdpbjogMDtcXG4gIH1cXG5cXG4gICNmb3JtIC5idXR0b25zIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBtYXJnaW46IDFweCAzM3B4O1xcbiAgfVxcblxcbiAgZm9ybSNQcm9qZWN0Rm9ybSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM2NDc0OGI7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIGhlaWdodDogMTYwcHg7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIG1heC13aWR0aDogNjkzcHg7XFxuICAgIHBhZGRpbmctbGVmdDogMXJlbTtcXG4gIH1cXG5cXG4gIGRpdi5wcm9qZWN0Rm9ybURldGFpbHMge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIHRvcDogMDtcXG4gIH1cXG5cXG4gIGRpdi5wcmlvcml0eURhdGVPbkxhcmdlU2NyZWVuIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICB0b3A6IDA7XFxuICB9XFxuXFxuICAucHJvamVjdEJ1dHRvbnNDb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICB9XFxuXFxuICAjY29uZmlnUHJpb3JpdHlEYXRlT25Nb2JpbGUge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBwb3NpdGlvbjogc3RhdGljO1xcbiAgfVxcblxcbiAgI2Zvcm0gLm90aGVyLW9wdGlvbnMtb24tZm9ybXMgYnV0dG9uLFxcbiAgI3ByaW9yaXR5LFxcbiAgI2RhdGVQaWNrZXIge1xcbiAgICBwYWRkaW5nOiA4cHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgfVxcblxcblxcbn1cXG5cXG5tYWluIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDIzMHB4IDFmcjtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMTAwcHggbWlubWF4KDEwMHZoLCA2MDBweCk7XFxuICA7XFxufVxcblxcbmhlYWRlciB7XFxuICBncmlkLWFyZWE6IDEgLyAyIC8gMiAvIDY7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmRhNGFmO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxufVxcblxcbi5oZWFkZXJUZXh0Q29udGVudCB7XFxuICBmb250LXdlaWdodDogNzAwO1xcblxcbn1cXG5cXG5hc2lkZSB7XFxuICBncmlkLWFyZWE6IDEvIDEvIDQvIDI7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTJlOGYwO1xcbn1cXG5cXG4uc2lkZUJhckNvbnRlbnRDb250YWluZXIge1xcbiAgbWFyZ2luOiA0MHB4IDAgMCAwcHg7XFxufVxcblxcbiNDb250YWluZXIge1xcbiAgZ3JpZC1hcmVhOiAyIC8gMiAvIDMgLyA0O1xcblxcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMTAwcHggNjUwcHggbWlubWF4KDEwMHB4LCAzNTBweCk7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxufVxcblxcbi5pbm5lcl9jb250YWluZXIge1xcbiAgZ3JpZC1hcmVhOiAxIC8gMiAvIDMgLyAzO1xcbn1cXG5cXG4uaW50aWFsVGV4dERpc3BsYXkge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBwYWRkaW5nOiAxMHB4O1xcbn1cXG5cXG4uaW50aWFsVGV4dERpc3BsYXkgcCB7XFxuICBmb250LXNpemU6IDEuMnJlbTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGZvbnQtd2VpZ2h0OiA4MDA7XFxuICBjb2xvcjogIzc4MzUwZjtcXG4gIG1hcmdpbjogMTBweCAwIDAgMDtcXG59XFxuXFxuLmludGlhbFRleHREaXNwbGF5IGltZyB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogYXV0bztcXG4gIGJvcmRlci1yYWRpdXM6IDMwcHg7XFxuICBwYWRkaW5nOiAyMHB4O1xcbn1cXG5cXG4jYWRkVG9kb0J0bkNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4uZW1wdHkge1xcbiAgZ3JpZC1hcmVhOiAxIC8gMyAvIDUgLyA0O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y4ZjhmODtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcXFwiLi9pbWFnZXMvVG9kby0xLmpwZ1xcXCIpO1xcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXG59XFxuXFxuLm1lbnVDb250cm9sbGVyIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxuICB3aWR0aDogNDBweDtcXG4gIGhlaWdodDogNDBweDtcXG59XFxuXFxuLmNoZWNrQm94IHtcXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcXG4gIC1tb3otYXBwZWFyYW5jZTogbm9uZTtcXG4gIHdpZHRoOiAyMHB4O1xcbiAgaGVpZ2h0OiAyMHB4O1xcbiAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbi5jaGVja0JveDo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDUwJTtcXG4gIGxlZnQ6IDUwJTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcbiAgZm9udC1zaXplOiAxNnB4O1xcbiAgY29sb3I6IHJnYigyMiwgMjUyLCAyMik7XFxuICBvcGFjaXR5OiAwO1xcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjNzIGVhc2U7XFxufVxcblxcbi5jaGVja0JveDpob3Zlcjo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCLinJNcXFwiO1xcbiAgb3BhY2l0eTogMC41O1xcbn1cXG5cXG5zdmcge1xcbiAgd2lkdGg6IDM0cHg7XFxuICBoZWlnaHQ6IDMzcHg7XFxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG5cXG59XFxuXFxuI3Rhc2sge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDVweDtcXG4gIG1hcmdpbjogMjdweCAwIDExcHggMjZweDtcXG59XFxuXFxuI3Rhc2sgc3ZnIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNkYzI2MjY7XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICBmaWxsOiB3aGl0ZTtcXG59XFxuXFxuI3Rhc2sgOmhvdmVyIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxLjA5KTtcXG59XFxuXFxuI3Rhc2sgYnV0dG9uIHtcXG4gIGJvcmRlcjogMDtcXG4gIGZvbnQtc2l6ZTogMS40cmVtO1xcbiAgY29sb3I6ICNiOTFjMWM7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmhlcml0O1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG59XFxuXFxuI3Rhc2sgYnV0dG9uOmhvdmVyIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxLjA5KTtcXG59XFxuXFxuYnV0dG9uLmRlbGV0ZVRhc2sge1xcbiAgcGFkZGluZzogMTBweDtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJvcmRlci1yYWRpdXM6IDdweDtcXG4gIGZvbnQtc2l6ZTogMS4xcmVtO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2UwNDg3YztcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjJzIGVhc2Utb3V0O1xcbn1cXG5cXG5idXR0b24uZGVsZXRlVGFzazpob3ZlciB7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMDUpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzRiMDcwNztcXG5cXG59XFxuXFxuYnV0dG9uLmRlbGV0ZVRhc2s6YWN0aXZlIHtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMC45KTtcXG59XFxuXFxuLmxpc3RDb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogNXB4O1xcbiAgbWF4LXdpZHRoOiA3MTRweDtcXG4gIHdvcmQtYnJlYWs6IGJyZWFrLWFsbDtcXG4gIHdoaXRlLXNwYWNlOiBub3JtYWw7XFxuICBvdmVyZmxvdy13cmFwOiBicmVhay13b3JkO1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIGJveC1zaGFkb3c6IDFweCAwcHggM3B4IDBweDtcXG4gIG1hcmdpbjogMThweCAxOHB4O1xcbiAgcGFkZGluZzogMTVweDtcXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAzbXMgZWFzZTtcXG59XFxuXFxuLmxpc3RDb250YWluZXI6aG92ZXIge1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjAxKTtcXG59XFxuXFxuLnByaW9yaXR5RGF0ZU9uTGFyZ2VTY3JlZW4ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBtYXgtd2lkdGg6IDIwMHB4O1xcbn1cXG5cXG4ucHJvamVjdEJ1dHRvbnNDb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIHBhZGRpbmctaW5saW5lOiAxOHB4XFxufVxcblxcbi5wcm9qZWN0QnV0dG9uc0NvbnRhaW5lciBidXR0b24ge1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYm9yZGVyLXJhZGl1czogN3B4O1xcbiAgcGFkZGluZzogOXB4O1xcbiAgZm9udC1zaXplOiAxLjJyZW07XFxuICBmb250LXdlaWdodDogNjAwO1xcbn1cXG5cXG4uZXhjbHVkZWQge1xcbiAgY29sb3I6IHJlZDtcXG59XFxuXFxuLnRhc2tDb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXg6IDE7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcblxcbi50YXNrVGl0bGUsXFxuLm5ld1Byb2plY3QtdGFzay10aXRsZSxcXG4uZWRpdGFibGVTYXZlVGFza0VsIHtcXG4gIG1hcmdpbjogMDtcXG4gIGZvbnQtc2l6ZTogMS4zcmVtO1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgdGV4dC1kZWNvcmF0aW9uLWNvbG9yOiByZWQ7XFxufVxcblxcbi50YXNrRGVzY3JpcHRpb24sXFxuLm5ld1Byb2plY3QtZGVzY3JpcHRpb24ge1xcbiAgbWFyZ2luOiAwO1xcbiAgZm9udC1zaXplOiAxLjJyZW07XFxufVxcblxcbi50YXNrUHJpb3JpdHkge1xcbiAgZm9udC1zaXplOiAxOXB4O1xcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzU3M2QzZDtcXG4gIHBhZGRpbmc6IDZweDtcXG4gIG1hcmdpbjogMCAwIDdweDtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIG1heC13aWR0aDogMTQwcHg7XFxuICBtaW4td2lkdGg6IDcwcHg7XFxuXFxuXFxufVxcblxcbi50YXNrUHJpb3JpdHk6aG92ZXIge1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjA1KTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM5YzE1MTU7XFxufVxcblxcblxcbi5pbm5lclRhc2tIYW5kbGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgbWFyZ2luOiAwcHggMTVweCAwIDQwcHg7XFxufVxcblxcbmFzaWRlIHVsIGxpIHtcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICB3aWR0aDogMTAwJTtcXG4gIHBhZGRpbmc6IDEwcHggMjBweDtcXG59XFxuXFxuLmluYm94LWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogNXB4O1xcbiAgZm9udC1zaXplOiAxLjNyZW07XFxufVxcblxcblxcbi5pbmJveCB7XFxuICBmb250LXNpemU6IDEuNHJlbTtcXG59XFxuXFxuLmluYm94TGlzdENvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiA1cHg7XFxufVxcblxcbi5pbmJveFRhc2tDb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXg6IDE7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcblxcbi5pbmJveFRhc2tUaXRsZSB7XFxuICBtYXJnaW46IDA7XFxuICBmb250LXNpemU6IDE4cHg7XFxufVxcblxcbi5pbmJveFRhc2tEZXNjcmlwdGlvbiB7XFxuICBtYXJnaW46IDA7XFxuICBmb250LXNpemU6IDE0cHg7XFxufVxcblxcbi5pbmJveFRhc2tQcmlvcml0eSB7XFxuICBtYXJnaW46IDAgMjBweCAwIDA7XFxuICBmb250LXNpemU6IDEuM3JlbTtcXG5cXG59XFxuXFxuLmR1ZURhdGUge1xcbiAgbWFyZ2luOiAwO1xcbiAgZm9udC1zaXplOiAxLjJyZW07XFxufVxcblxcbi5lZGl0IHtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICBmb250LXNpemU6IDE3cHg7XFxuICBtYXgtd2lkdGg6IDExMHB4O1xcbiAgbWFyZ2luOiAwIDA7XFxufVxcblxcbiNwcm9qZWN0cyBoMyB7XFxuICBtYXJnaW46IDAgMCAwIDEwcHg7XFxufVxcblxcbiNmb3JtIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM2NDc0OGI7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgaGVpZ2h0OiAxNzBweDtcXG4gIGRpc3BsYXk6IG5vbmU7XFxuICBwYWRkaW5nLWxlZnQ6IDFyZW07XFxuICBtYXJnaW46IDEwcHggMTBweCAwIDA7XFxufVxcblxcbi5mb3JtRGV0YWlscyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIG1hcmdpbjogMTJweCAxNXB4O1xcbn1cXG5cXG5pbnB1dCNkYXRlUGlja2VyIHtcXG4gIG1heC13aWR0aDogMTMzcHg7XFxufVxcblxcbi5idXR0b25zIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBtYXJnaW46IDFweCAzM3B4O1xcbn1cXG5cXG4uYnV0dG9ucyBidXR0b24ge1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYm9yZGVyLXJhZGl1czogN3B4O1xcbiAgcGFkZGluZzogN3B4O1xcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMnMgZWFzZS1vdXQ7XFxufVxcblxcbi5idXR0b25zIGJ1dHRvbjpob3ZlciB7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMDUpO1xcbn1cXG5cXG4jUHJvamVjdEZvcm0ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzY0NzQ4YjtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICBoZWlnaHQ6IDE2NnB4O1xcbiAgZGlzcGxheTogbm9uZTtcXG4gIHBhZGRpbmc6IDEwcHg7XFxuICBtYXJnaW46IDE1cHggMTVweCAwIDE3cHg7XFxufVxcblxcbi5wcm9qZWN0Rm9ybURldGFpbHMge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBwYWRkaW5nLWxlZnQ6IDFyZW07XFxuICB0b3A6IDA7XFxufVxcblxcbi5maXJzdC1pbnB1dENvbnRhaW5lciBpbnB1dCxcXG4uUHRpdGxlSW5wdXRDb250YWluZXIgaW5wdXQge1xcbiAgbWF4LXdpZHRoOiA2MDBweDtcXG4gIGhlaWdodDogMzdweDtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICBjb2xvcjogd2hpdGU7XFxuICBtYXJnaW46IDEwcHggMCAwIDA7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmhlcml0O1xcbn1cXG5cXG4udGFzay10aXRsZSxcXG4uZGVzY3JpcHRpb24ge1xcbiAgd2lkdGg6IDM1MHB4O1xcbiAgZm9udC1zaXplOiAxLjFyZW07XFxuXFxufVxcblxcbi5maXJzdC1pbnB1dENvbnRhaW5lciBpbnB1dDo6cGxhY2Vob2xkZXIsXFxuLlB0aXRsZUlucHV0Q29udGFpbmVyIGlucHV0OjpwbGFjZWhvbGRlciB7XFxuICBjb2xvcjogd2hpdGU7XFxuICBwYWRkaW5nOiAwIDEwcHg7XFxuICBvcGFjaXR5OiAxO1xcbn1cXG5cXG4uc2Vjb25kLWlucHV0Q29udGFpbmVyIGlucHV0LFxcbi5QZGVzY3JpcHRpb25JbnB1dENvbnRhaW5lciBpbnB1dCB7XFxuICBtYXgtd2lkdGg6IDYwMHB4O1xcbiAgaGVpZ2h0OiAzN3B4O1xcbiAgYm9yZGVyOiBub25lO1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGJhY2tncm91bmQtY29sb3I6IGluaGVyaXQ7XFxuICBtYXJnaW46IDA7XFxufVxcblxcbi5wVGl0bGUsIC5wRGVzY3JpcHRpb24ge1xcbiAgd2lkdGg6IDM1MHB4O1xcbiAgZm9udC1zaXplOiAxLjA3cmVtO1xcbn1cXG5cXG4uc2Vjb25kLWlucHV0Q29udGFpbmVyIGlucHV0OjpwbGFjZWhvbGRlcixcXG4uUGRlc2NyaXB0aW9uSW5wdXRDb250YWluZXIgaW5wdXQ6OnBsYWNlaG9sZGVyIHtcXG4gIHBhZGRpbmc6IDAgMTBweDtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIG9wYWNpdHk6IDE7XFxufVxcblxcbi5maXJzdC1pbnB1dENvbnRhaW5lcixcXG4uc2Vjb25kLWlucHV0Q29udGFpbmVyIHtcXG4gIG1hcmdpbjogMTBweCAwIDAgMDtcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXG59XFxuXFxuLnN1Ym1pdEJ0bjphY3RpdmUge1xcbiAgdHJhbnNmb3JtOiBhY3RpdmUgc2NhbGUoMS4xKTtcXG59XFxuXFxuLm90aGVyLW9wdGlvbnMtb24tZm9ybXMgYnV0dG9uLFxcbiNwcmlvcml0eSxcXG5pbnB1dCNkYXRlUGlja2VyIHtcXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjNzIGVhc2UtaW47XFxuICBwYWRkaW5nOiA3cHg7XFxuICBib3JkZXItcmFkaXVzOiA3cHg7XFxuICBib3JkZXI6IG5vbmU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDgzMzQ0O1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgZm9udC1zaXplOiAxLjFyZW07XFxuICBmb250LXdlaWdodDogNjAwO1xcbn1cXG5cXG4jcHJpb3JpdHkge1xcbiAgbWFyZ2luOiAxMHB4IDAgOHB4IDA7XFxufVxcblxcbiNwcm9qZWN0UHJpb3JpdHksXFxuLmZvb3RlciB7XFxuICBwYWRkaW5nOiA3cHg7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBtYXJnaW46IDAgNHB4IDVweCAwO1xcblxcbn1cXG5cXG5cXG5cXG4jcHJvamVjdFByaW9yaXR5LCAjcHJvamVjdFByaW9yaXR5IG9wdGlvbiB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDQ0MDNjO1xcbiAgY29sb3I6ICNmYWZhZmE7XFxuICBmb250LXNpemU6IDEuMnJlbTtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxufVxcblxcblxcblxcbi5hZGRQcm9qZWN0c0NvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcblxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogMTBweDtcXG59XFxuXFxuLmluYm94LWNvbnRhaW5lcjpob3ZlciwgLmFkZFByb2plY3RzQ29udGFpbmVyOmhvdmVyLCAucHJvamVjdF90ZXh0OmhvdmVyLCAjcHJvamVjdC1kcm9wZG93bjpob3ZlciB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMS4wNSk7XFxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXG59XFxuXFxuXFxuLmFkZFByb2plY3RzQ29udGFpbmVyIHN2ZyB7XFxuICB3aWR0aDogMjVweDtcXG4gIGhlaWdodDogMjVweDtcXG59XFxuXFxuI2FkZE5ld1Byb2plY3RFbCB7XFxuICBtYXJnaW46IDA7XFxuICBmb250LXNpemU6IDEuM3JlbTtcXG59XFxuXFxuLnByb2plY3RfdGV4dCB7XFxuICBtYXJnaW46IDAgMCAxMHB4IDE3cHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxuICBwYWRkaW5nOiA5cHg7XFxuICBib3JkZXItcmFkaXVzOiA1cHggMHB4IDBweCA1cHg7XFxufVxcblxcblxcbiNwcm9qZWN0LWRyb3Bkb3duIHtcXG4gIGJvcmRlcjogMDtcXG4gIGJhY2tncm91bmQtY29sb3I6IGluaGVyaXQ7XFxuICBmb250LXNpemU6IDEuM3JlbTtcXG4gIGZvbnQtd2VpZ2h0OiA1NTA7XFxuICBtYXgtd2lkdGg6IDIwMHB4O1xcbn1cXG5cXG5cXG4jcHJvamVjdC1kcm9wZG93bjpmb2N1cyB7XFxuICBib3JkZXI6IG5vbmU7XFxuICBvdXRsaW5lOiBub25lO1xcbn1cXG5cXG4jbmV3UHJvamVjdHNGb3JtQ29udGFpbmVyRWwge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuI1Byb2plY3RzRm9ybU5hbWVDb250YWluZXJFbCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uaW5wdXROZXdwcm9qZWN0Rm9ybU5hbWUge1xcbiAgZGlzcGxheTogbm9uZTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNjZWUzZTM7XFxuICBtYXgtd2lkdGg6IDQwMHB4O1xcbiAgbWF4LWhlaWdodDogMzAwcHg7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgcGFkZGluZzogNDZweDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIG1hcmdpbjogNjBweCAwIDAgMDtcXG4gIGJveC1zaGFkb3c6IDBweCA5cHggM3B4IDBweDtcXG59XFxuXFxuLmlucHV0TmV3cHJvamVjdEZvcm1OYW1lIGgyIHtcXG4gIG1hcmdpbjogMCAwIDEwcHggMDtcXG59XFxuXFxuLmlucHV0TmV3UHJvamVjdE5hbWUge1xcbiAgbWF4LXdpZHRoOiAzNTBweDtcXG4gIG1heC1oZWlnaHQ6IDM1cHg7XFxuICBwYWRkaW5nOiAxN3B4O1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYm9yZGVyLXJhZGl1czogN3B4O1xcbiAgZm9udC1zaXplOiAxOXB4O1xcbn1cXG5cXG5pbnB1dC5TYXZlUHJvamVjdE5hbWUge1xcbiAgcGFkZGluZzogOXB4O1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xcbiAgbWF4LXdpZHRoOiAxMDBweDtcXG4gIGhlaWdodDogNDBweDtcXG4gIGZvbnQtc2l6ZTogMTlweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNDAsIDU5LCAxMzQpO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDNtcyBlYXNlO1xcbn1cXG5cXG5pbnB1dC5TYXZlUHJvamVjdE5hbWU6aG92ZXIge1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjAzKVxcbn1cXG5cXG4ucHJvamVjdE5hbWVTYXZlckJ0bkNvbnRhaW5lciB7XFxuICBtYXJnaW46IDEwcHggMDtcXG59XFxuXFxuLnByb2plY3ROYW1lU2F2ZXJCdG5Db250YWluZXIgYnV0dG9uIHtcXG4gIHBhZGRpbmc6IDlweDtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcXG4gIHdpZHRoOiAxMDBweDtcXG4gIGhlaWdodDogNDBweDtcXG4gIGZvbnQtc2l6ZTogMTlweDtcXG59XFxuXFxuI1Byb2plY3RzRm9ybU5hbWVDb250YWluZXJFbCAuQ2FuY2VsIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGdyZXk7XFxuICBjb2xvcjogd2hpdGU7XFxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gM21zIGVhc2U7XFxuXFxufVxcblxcbiNQcm9qZWN0c0Zvcm1OYW1lQ29udGFpbmVyRWwgLkNhbmNlbDpob3ZlciB7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMDMpXFxufVxcblxcbiNuZXdQcm9qZWN0VGFza3NDb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuI25ld1Byb2plY3RUYXNrQnRuV3JhcHBlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4jbmV3UHJvamVjdFRhc2tzSW5uZXJDb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogNXB4O1xcbiAgbWFyZ2luOiAxMHB4O1xcbiAgYm94LXNoYWRvdzogIzVjNTU1NSAxcHggM3B4IDNweCAxcHg7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgcGFkZGluZzogMTBweDtcXG4gIHdpZHRoOiA5NXB4O1xcblxcbn1cXG5cXG5zdmcuYWRkVGFzayB7XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICBmaWxsOiB3aGVhdDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJlZDtcXG59XFxuXFxuLm5ld1Byb2plY3RBZGRCdG4ge1xcbiAgYm9yZGVyOiAwO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogaW5oZXJpdDtcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxufVxcblxcbiNQcm9qZWN0ZGF0ZVBpY2tlciB7XFxuICBwYWRkaW5nOiAycHg7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBib3JkZXI6IG5vbmU7XFxuICBoZWlnaHQ6IDMycHg7XFxuICBwYWRkaW5nOiAycHg7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBib3JkZXI6IG5vbmU7XFxuICBoZWlnaHQ6IDMycHg7XFxuICBmb250LXNpemU6IDEuMXJlbTtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICBiYWNrZ3JvdW5kOiAjZjBmMGYwO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4jUHJvamVjdGRhdGVQaWNrZXIgaW5wdXRbdHlwZT0nZGF0ZSddIHtcXG4gIGZpbGw6IHdoaXRlO1xcbn1cXG5cXG4jc3VibWl0QnRuRm9yUHJvamVjdCB7XFxuICBwYWRkaW5nOiA3cHg7XFxuICBib3JkZXItcmFkaXVzOiA5cHg7XFxuICAvKiBmb250LXNpemU6IDEuMnJlbTtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7ICovXFxufVxcblxcbiNzdWJtaXRCdG5Gb3JQcm9qZWN0OmFjdGl2ZSB7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XFxufVxcblxcbi5jYW5jZWxGb3JQcm9qZWN0QnRuIHtcXG4gIHBhZGRpbmc6IDdweDtcXG4gIGJvcmRlci1yYWRpdXM6IDlweDtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTtcblxuICAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfVxuXG4gIC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcbm9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCIvLyBpbXBvcnQgeyBteVByb2plY3RzIH0gZnJvbSAnLi9kb20tRWwnXG5pbXBvcnQgeyBkaXNwbGF5Rm9ybSB9IGZyb20gXCIuL2RvbS1FbFwiO1xuLy8gaW1wb3J0IHsgZWRpdFRhc2sgfSBmcm9tIFwiLi9sb2dpY3NcIjtcblxuY29uc3QgbXlQcm9qZWN0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcHJvamVjdHMgaDNcIik7XG5jb25zdCBzY3JlZW5Db250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI0NvbnRhaW5lclwiKTtcbmNvbnN0IHVzZXJMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN1c2VybGlzdFwiKTtcbmNvbnN0IGFkZFByb2plY3RzQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hZGRQcm9qZWN0c0NvbnRhaW5lclwiKTtcbmNvbnN0IG5ld1Byb2plY3RzRm9ybUNvbnRhaW5lckVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgXCIjbmV3UHJvamVjdHNGb3JtQ29udGFpbmVyRWxcIixcbik7XG5leHBvcnQgY29uc3QgaW5wdXROZXdwcm9qZWN0Rm9ybU5hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICBcIi5pbnB1dE5ld3Byb2plY3RGb3JtTmFtZVwiLFxuKTtcbmNvbnN0IG5ld1Byb2plY3ROYW1lUmVxdWVzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubmV3UHJvamVjdE5hbWVSZXF1ZXN0XCIpO1xuY29uc3QgbmV3UHJvamVjdE5hbWVUaXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaGVhZGVyVGV4dENvbnRlbnRcIik7XG5jb25zdCBTYXZlUHJvamVjdE5hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLlNhdmVQcm9qZWN0TmFtZVwiKTtcbmNvbnN0IG5ld1Byb2plY3RUYXNrID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5uZXdQcm9qZWN0VGFza1wiKTtcbmNvbnN0IG5ld1Byb2plY3RUYXNrc0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5jb25zdCBuZXdQcm9qZWN0VGFza0J0bldyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbmNvbnN0IG5ld1Byb2plY3RUYXNrc0lubmVyQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblxuY29uc3QgbmV3UHJvamVjdEFkZEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG5jb25zdCBzdWJtaXRUYXNrQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNzdWJtaXRCdG5Gb3JQcm9qZWN0XCIpO1xuY29uc3QgY2FuY2VsVGFza0J0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY2FuY2VsRm9yUHJvamVjdEJ0blwiKTtcbmNvbnN0IGRpc3BsYXlQcm9qZWN0VG9kb3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2Rpc3BsYXlQcm9qZWN0VG9kb3NcIik7XG5cbmxldCBwcm9qZWN0Rm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjUHJvamVjdEZvcm1cIik7XG5sZXQgZm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZm9ybVwiKTtcbmxldCBpbnB1dEZpZWxkRWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnBUaXRsZVwiKTtcbmxldCBkZXNjcmlwdGlvbkZpZWxkRWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnBEZXNjcmlwdGlvblwiKTtcbmxldCBzZWxlY3RQcmlvcml0eUVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwcm9qZWN0UHJpb3JpdHlcIik7XG5sZXQgZHVlRGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjUHJvamVjdGRhdGVQaWNrZXJcIik7XG5jb25zdCBwcm9qZWN0RHJvcERvd24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Byb2plY3QtZHJvcGRvd25cIik7XG5sZXQgc2VsZWN0ZWRQcm9qZWN0ID0gcHJvamVjdERyb3BEb3duLnZhbHVlO1xuXG5jb25zdCBuZXdQcm9qZWN0Rm9ybU5hbWVCdG5FbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gIFwiLm5ld1Byb2plY3RGb3JtTmFtZUJ0bkVsXCIsXG4pO1xuXG5jbGFzcyBnZXRMaXN0IHtcbiAgY29uc3RydWN0b3IodGl0bGUsIGRlc2NyaXB0aW9uLCBwcmlvcml0eSwgZGF0ZSkge1xuICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcbiAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XG4gICAgdGhpcy5wcmlvcml0eSA9IHByaW9yaXR5O1xuICAgIHRoaXMuZGF0ZSA9IGRhdGU7XG4gIH1cbn1cblxuZnVuY3Rpb24gZGlzcGxheVJlcXVlc3ROZXdQcm9qZWN0Rm9ybU5hbWUoKSB7XG4gICBjb25zdCBpbnRpYWxUZXh0RGlzcGxheUNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgXCIuaW50aWFsVGV4dERpc3BsYXlDb250YWluZXJcIixcbiAgKTtcbiAgY29uc3QgcHJvamVjdFRhc2tCdG4gPSBjcmVhdGVOZXdQcm9qZWN0VGFza0J0bigpO1xuXG4gIGNvbnNvbGUubG9nKHByb2plY3RUYXNrQnRuKTtcbiAgXG5cbiAgaW50aWFsVGV4dERpc3BsYXlDb250YWluZXIuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgaWYgKHVzZXJMaXN0LnRleHRDb250ZW50KSB7XG4gICAgdXNlckxpc3QudGV4dENvbnRlbnQgPSBcIlwiO1xuICB9XG5cbiAgaWYgKGZvcm0uc3R5bGUuZGlzcGxheSA9PT0gXCJibG9ja1wiKSB7XG4gICAgZm9ybS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gIH1cbiAgaWYgKHByb2plY3RGb3JtLnN0eWxlLmRpc3BsYXkgPT09IFwiYmxvY2tcIikge1xuICAgIHByb2plY3RGb3JtLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgfVxuICBcbiAgICBwcm9qZWN0VGFza0J0bi5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuXG4gIGlucHV0TmV3cHJvamVjdEZvcm1OYW1lLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG4gIHJldHVybiB7IGlucHV0TmV3cHJvamVjdEZvcm1OYW1lIH07XG59XG5hZGRQcm9qZWN0c0NvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKFxuICBcImNsaWNrXCIsXG4gIGRpc3BsYXlSZXF1ZXN0TmV3UHJvamVjdEZvcm1OYW1lLFxuKTtcblxuLy9HZXQgTmV3IFByb2plY3QgTmFtZSBGdW5jdGlvbi5cbmV4cG9ydCBmdW5jdGlvbiBnZXRuZXdQcm9qZWN0SW5wdXROYW1lKCkge1xuICBjb25zdCBpbnB1dE5ld1Byb2plY3ROYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5pbnB1dE5ld1Byb2plY3ROYW1lXCIpO1xuICBjb25zdCBpbnB1dE5ld1Byb2plY3ROYW1lVmFsdWUgPSBpbnB1dE5ld1Byb2plY3ROYW1lLnZhbHVlO1xuICBuZXdQcm9qZWN0TmFtZVRpdGxlLnRleHRDb250ZW50ID0gaW5wdXROZXdQcm9qZWN0TmFtZVZhbHVlO1xuXG4gIC8vIHByb2plY3RzLnB1c2goaW5wdXROZXdQcm9qZWN0TmFtZVZhbHVlKVxuXG4gIGlucHV0TmV3UHJvamVjdE5hbWUudmFsdWUgPSBcIlwiO1xuXG4gIGFkZFByb2plY3ROYW1lKGlucHV0TmV3UHJvamVjdE5hbWVWYWx1ZSk7XG5cbiAgaWYgKGlucHV0TmV3cHJvamVjdEZvcm1OYW1lKSB7XG4gICAgaW5wdXROZXdwcm9qZWN0Rm9ybU5hbWUuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICB9IGVsc2Uge1xuICAgIGlucHV0TmV3cHJvamVjdEZvcm1OYW1lLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG4gIH1cblxuICByZXR1cm4geyBpbnB1dE5ld1Byb2plY3ROYW1lVmFsdWUgfTtcbn1cblxuLy9DYW5jZWwgcHJvamVjdCBmb3JtIG5hbWUgcmVxdWVzdFxubmV3UHJvamVjdEZvcm1OYW1lQnRuRWwuYWRkRXZlbnRMaXN0ZW5lcihcbiAgXCJjbGlja1wiLFxuICAoKSA9PiB7IFxuaW5wdXROZXdwcm9qZWN0Rm9ybU5hbWUuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgIGNvbnN0IGludGlhbFRleHREaXNwbGF5Q29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICBcIi5pbnRpYWxUZXh0RGlzcGxheUNvbnRhaW5lclwiLFxuICApO1xuXG4gICAgaW50aWFsVGV4dERpc3BsYXlDb250YWluZXIuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcblxuICB9XG4pO1xuXG5sZXQgc3ZnRWxlbWVudCA9IG51bGw7XG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlTmV3UHJvamVjdFRhc2tCdG4oKSB7XG4gIG5ld1Byb2plY3RUYXNrc0NvbnRhaW5lci5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcIm5ld1Byb2plY3RUYXNrc0NvbnRhaW5lclwiKTtcbiAgbmV3UHJvamVjdFRhc2tCdG5XcmFwcGVyLnNldEF0dHJpYnV0ZShcImlkXCIsIFwibmV3UHJvamVjdFRhc2tCdG5XcmFwcGVyXCIpO1xuICBuZXdQcm9qZWN0VGFza3NJbm5lckNvbnRhaW5lci5zZXRBdHRyaWJ1dGUoXG4gICAgXCJpZFwiLFxuICAgIFwibmV3UHJvamVjdFRhc2tzSW5uZXJDb250YWluZXJcIixcbiAgKTtcbiAgXG4gaWYgKG5ld1Byb2plY3RUYXNrc0lubmVyQ29udGFpbmVyLmNvbnRhaW5zKHN2Z0VsZW1lbnQpKSB7XG4gICAgbmV3UHJvamVjdFRhc2tzSW5uZXJDb250YWluZXIucmVtb3ZlQ2hpbGQoc3ZnRWxlbWVudCk7XG4gIH1cblxuICBuZXdQcm9qZWN0QWRkQnRuLnRleHRDb250ZW50ID0gXCJBZGQgdGFza1wiO1xuXG4gIC8vIENyZWF0ZSB0aGUgU1ZHIGVsZW1lbnRcbiAgY29uc3Qgc3ZnTmFtZXNwYWNlID0gXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiO1xuICAgIHN2Z0VsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoc3ZnTmFtZXNwYWNlLCBcInN2Z1wiKTtcblxuICAvLyBTZXQgdGhlIGNsYXNzIGFuZCB2aWV3Qm94IGF0dHJpYnV0ZXNcbiAgc3ZnRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImFkZFRhc2tcIik7XG4gIHN2Z0VsZW1lbnQuc2V0QXR0cmlidXRlKFwidmlld0JveFwiLCBcIjAgMCAyNCAyNFwiKTtcblxuICAvLyBDcmVhdGUgdGhlIHRpdGxlIGVsZW1lbnRcbiAgY29uc3QgdGl0bGVFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKHN2Z05hbWVzcGFjZSwgXCJ0aXRsZVwiKTtcbiAgdGl0bGVFbGVtZW50LnRleHRDb250ZW50ID0gXCJwbHVzXCI7XG4gIHN2Z0VsZW1lbnQuYXBwZW5kQ2hpbGQodGl0bGVFbGVtZW50KTtcblxuICAvLyBDcmVhdGUgdGhlIHBhdGggZWxlbWVudFxuICBjb25zdCBwYXRoRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyhzdmdOYW1lc3BhY2UsIFwicGF0aFwiKTtcbiAgcGF0aEVsZW1lbnQuc2V0QXR0cmlidXRlKFwiZFwiLCBcIk0xOSwxM0gxM1YxOUgxMVYxM0g1VjExSDExVjVIMTNWMTFIMTlWMTNaXCIpO1xuICBzdmdFbGVtZW50LmFwcGVuZENoaWxkKHBhdGhFbGVtZW50KTtcblxuICBuZXdQcm9qZWN0QWRkQnRuLmNsYXNzTGlzdC5hZGQoXCJuZXdQcm9qZWN0QWRkQnRuXCIpO1xuXG4gIG5ld1Byb2plY3RUYXNrc0lubmVyQ29udGFpbmVyLmFwcGVuZENoaWxkKHN2Z0VsZW1lbnQpO1xuICBuZXdQcm9qZWN0VGFza3NJbm5lckNvbnRhaW5lci5hcHBlbmRDaGlsZChuZXdQcm9qZWN0QWRkQnRuKTtcbiAgbmV3UHJvamVjdFRhc2tCdG5XcmFwcGVyLmFwcGVuZENoaWxkKG5ld1Byb2plY3RUYXNrc0lubmVyQ29udGFpbmVyKVxuICBuZXdQcm9qZWN0VGFza3NDb250YWluZXIuYXBwZW5kQ2hpbGQobmV3UHJvamVjdFRhc2tCdG5XcmFwcGVyKTtcblxuICBuZXdQcm9qZWN0c0Zvcm1Db250YWluZXJFbC5hcHBlbmRDaGlsZChuZXdQcm9qZWN0VGFza3NDb250YWluZXIpO1xuXG4gIHJldHVybiBuZXdQcm9qZWN0c0Zvcm1Db250YWluZXJFbDtcbn1cblxuZnVuY3Rpb24gZGlzcGxheU5ld1Byb2plY3RGb3JtKCkge1xuICBwcm9qZWN0Rm9ybS5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xufVxuXG4vLyBBZGQgcHJvamVjdCBuYW1lIHRvIGxvY2FsIHN0b3JhZ2UgYW5kICBwb3B1bGF0ZSBwcm9qZWN0IGRyb3AgZG93blxuZnVuY3Rpb24gYWRkUHJvamVjdE5hbWUocHJvamVjdE5hbWUpIHtcbiAgbGV0IHByb2plY3RzID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInByb2plY3RzXCIpKSB8fCBbXTtcbiAgcHJvamVjdHMucHVzaChwcm9qZWN0TmFtZSk7XG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwicHJvamVjdHNcIiwgSlNPTi5zdHJpbmdpZnkocHJvamVjdHMpKTtcbiAgZmlsbFByb2plY3REcm9wRG93bigpO1xuICByZXR1cm4geyBwcm9qZWN0TmFtZSB9O1xufVxuXG4vLyBQb3B1bGF0ZSBwcm9qZWN0IGRyb3AtZG93blxuZnVuY3Rpb24gZmlsbFByb2plY3REcm9wRG93bigpIHtcbiAgcHJvamVjdERyb3BEb3duLnRleHRDb250ZW50ID0gXCJcIjtcbiAgbGV0IHByb2plY3RzID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInByb2plY3RzXCIpKSB8fCBbXTtcblxuICBpZiAocHJvamVjdHMpIHtcbiAgICBjb25zdCBvcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xuICAgIG9wdGlvbi52YWx1ZSA9IFwiXCI7XG4gICAgb3B0aW9uLnRleHRDb250ZW50ID0gXCJTZWxlY3QgcHJvamVjdFwiO1xuICAgIHByb2plY3REcm9wRG93bi5hcHBlbmRDaGlsZChvcHRpb24pO1xuXG4gICAgcHJvamVjdHM/LmZvckVhY2goKHByb2plY3QpID0+IHtcbiAgICAgIGNvbnN0IG9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7XG4gICAgICBvcHRpb24udmFsdWUgPSBwcm9qZWN0O1xuICAgICAgb3B0aW9uLnRleHRDb250ZW50ID0gcHJvamVjdDtcbiAgICAgIHByb2plY3REcm9wRG93bi5hcHBlbmRDaGlsZChvcHRpb24pO1xuICAgIH0pO1xuICB9XG59XG5maWxsUHJvamVjdERyb3BEb3duKCk7XG5cbi8vIERpc3BsYXkgZWFjaCBwcm9qZWN0J3MgdG8tZG9zIHdoZW4gc2VsZWN0ZWRcbnByb2plY3REcm9wRG93bi5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsICgpID0+IHtcbiAgdXNlckxpc3QudGV4dENvbnRlbnQgPSBcIlwiO1xuICBjb25zdCBpbnRpYWxUZXh0RGlzcGxheUNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgXCIuaW50aWFsVGV4dERpc3BsYXlDb250YWluZXJcIixcbiAgKTtcbiAgaW50aWFsVGV4dERpc3BsYXlDb250YWluZXIuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuXG4gIGRpc3BsYXlQcm9qZWN0VG9kb3MudGV4dENvbnRlbnQgPSBcIlwiO1xuICBuZXdQcm9qZWN0VGFza3NDb250YWluZXIuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuXG4gIC8vQ2xlYXIgdGhlIGFkZCB0YXNrIGJ1dHRvbiBjb250YWluZXIgZWFjaCB0aW1lIHVzZXIgc2VsZWN0IGEgcHJvamVjdFxuICBuZXdQcm9qZWN0VGFza3NDb250YWluZXIudGV4dENvbnRlbnQgPSBcIlwiO1xuXG4gIC8vRGlzcGxheSBubyBmb3JtIGlmIGFueSBmb3JtIGlzIGluIGJsb2NrXG4gIGlmIChmb3JtLnN0eWxlLmRpc3BsYXkgPT09IFwiYmxvY2tcIikge1xuICAgIGZvcm0uc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICB9XG5cbiAgc2VsZWN0ZWRQcm9qZWN0ID0gcHJvamVjdERyb3BEb3duLnZhbHVlO1xuICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiaGVhZGVyIGgxXCIpO1xuICBoZWFkZXIudGV4dENvbnRlbnQgPSBzZWxlY3RlZFByb2plY3Q7XG4gIC8vIGdldFNlbGVjdGVkVG9kb3Moc2VsZWN0ZWRQcm9qZWN0KTtcbiAgZGlzcGxheVRvRG9zRm9yQ3VycmVudFByb2plY3Qoc2VsZWN0ZWRQcm9qZWN0KTtcbiAgLy8gZGlzcGxheVNlbGVjdGVkVG9Eb3Moc2VsZWN0ZWRQcm9qZWN0KTtcbiAgZGlzcGxheU5ld1Byb2plY3RGb3JtKCk7XG59KTtcblxuZXhwb3J0IGZ1bmN0aW9uIGdldFVzZXJUb2RvKCkge1xuICBsZXQgdGFza0lucHV0VmFsdWUgPSBpbnB1dEZpZWxkRWwudmFsdWU7XG4gIGxldCBkZXNjcmlwdGlvbklucHV0VmFsdWUgPSBkZXNjcmlwdGlvbkZpZWxkRWwudmFsdWU7XG4gIGxldCBwcmlvcml0eVZhbHVlRWwgPSBzZWxlY3RQcmlvcml0eUVsLnZhbHVlO1xuICBsZXQgZHVlRGF0ZVZhbHVlRWwgPSBkdWVEYXRlLnZhbHVlO1xuXG4gIC8vIGxldCB0YXNrVGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFza1RpdGxlJyk7XG4gIC8vIGxldCB0YXNrRGVzY3JpcHRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRhc2tEZXNjcmlwdGlvblwiKTtcblxuICAvLyBpZiAodGFza1RpdGxlLnRleHRDb250ZW50Lmxlbmd0aCA+IDM1KSB7XG4gIC8vICAgdGFza1RpdGxlLnN0eWxlLm92ZXJmbG93ID0gJ2hpZGRlbidcbiAgLy8gICAvLyByZXR1cm4gYWxlcnQoXG4gIC8vICAgLy8gICBgSW5wdXQgc2hvdWxkIGJlIGxlc3Mgb3IgZXF1YWwgdG8gdGhlIDM1IGNoYXJhY3RlcnMsIHlvdSBoYXZlIGVudGVyZWQgJHt0YXNrSW5wdXRWYWx1ZS5sZW5ndGh9IGNoYXJhY3RlcnNgLFxuICAvLyAgIC8vICk7XG4gIC8vIH0gZWxzZSBpZiAodGFza0Rlc2NyaXB0aW9uLnRleHRDb250ZW50Lmxlbmd0aCA+IDQwKSB7XG4gIC8vICAgdGFza0Rlc2NyaXB0aW9uLnN0eWxlLm92ZXJmbG93ID0gJ2hpZGRlbidcblxuICAvLyAgIHJldHVybiBhbGVydChcbiAgLy8gICAgIGBEZXNjcmlwdGlvbiBzaG91bGQgYmUgbGVzcyBvciBlcXVhbCB0byB0aGUgNDAgY2hhcmFjdGVycywgeW91IGhhdmUgZW50ZXJlZCAke2Rlc2NyaXB0aW9uSW5wdXRWYWx1ZS5sZW5ndGh9IGNoYXJhY3RlcnNgLFxuICAvLyAgICk7XG4gIC8vIH1cblxuICBjb25zdCBkYXRlID0gbmV3IERhdGUoZHVlRGF0ZVZhbHVlRWwpO1xuXG4gIGNvbnN0IG9wdGlvbnMgPSB7XG4gICAgd2Vla2RheTogXCJsb25nXCIsXG4gICAgeWVhcjogXCJudW1lcmljXCIsXG4gICAgbW9udGg6IFwic2hvcnRcIixcbiAgICBkYXk6IFwibnVtZXJpY1wiLFxuICB9O1xuXG4gIGNvbnN0IGRheU9mV2VlayA9IGRhdGUudG9Mb2NhbGVEYXRlU3RyaW5nKFwiZW4tVXNcIiwgb3B0aW9ucyk7XG5cbiAgbGV0IHVzZXJUb2RvID0gbmV3IGdldExpc3QoXG4gICAgdGFza0lucHV0VmFsdWUsXG4gICAgZGVzY3JpcHRpb25JbnB1dFZhbHVlLFxuICAgIHByaW9yaXR5VmFsdWVFbCxcbiAgICBkYXlPZldlZWssXG4gICk7XG5cbiAgcmV0dXJuIHVzZXJUb2RvO1xufVxuXG4vLyBDbGVhciBmb3JtIGlucHV0XG5mdW5jdGlvbiBjbGVhcklucHV0Rm9ybSgpIHtcbiAgaW5wdXRGaWVsZEVsLnZhbHVlID0gXCJcIjtcbiAgZGVzY3JpcHRpb25GaWVsZEVsLnZhbHVlID0gXCJcIjtcbiAgc2VsZWN0UHJpb3JpdHlFbC52YWx1ZSA9IFwiU2VsZWN0IFByaW9yaXR5XCI7XG4gIGR1ZURhdGUudmFsdWUgPSBcIlwiO1xufVxuXG5sZXQgY3VycmVudFByb2plY3ROYW1lID0gW107XG5sZXQgdG9EbyA9IFtdO1xuZnVuY3Rpb24gYWRkTmV3UHJvamVjdFRvZG9zKCkge1xuICBjdXJyZW50UHJvamVjdE5hbWUgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwicHJvamVjdHNcIikpIHx8IFtdO1xuICBjb25zdCBjdXJyZW50UHJvamVjdCA9IGN1cnJlbnRQcm9qZWN0TmFtZVtjdXJyZW50UHJvamVjdE5hbWUubGVuZ3RoIC0gMV07XG4gIGNvbnNvbGUubG9nKGN1cnJlbnRQcm9qZWN0TmFtZSk7XG5cbiAgLy8gaWYgKHByb2plY3RGb3JtLnN0eWxlLmRpc3BsYXkgPT09IFwiYmxvY2tcIikge1xuICAvLyBzZWxlY3RlZFByb2plY3QgPSBjdXJyZW50UHJvamVjdDtcblxuICBjb25zdCBzZWxlY3RlZFByb2plY3QgPSBwcm9qZWN0RHJvcERvd24udmFsdWU7XG5cbiAgaWYgKHNlbGVjdGVkUHJvamVjdCkge1xuICAgIHRvRG8gPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKHNlbGVjdGVkUHJvamVjdCkpIHx8IFtdO1xuXG4gICAgY29uc3QgbmV3VG9EbyA9IGdldFVzZXJUb2RvKCk7XG4gICAgdG9Eby5wdXNoKG5ld1RvRG8pO1xuXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oc2VsZWN0ZWRQcm9qZWN0LCBKU09OLnN0cmluZ2lmeSh0b0RvKSk7XG4gICAgY29uc29sZS5sb2codG9Ebyk7XG5cbiAgICBjb25zb2xlLmxvZyh0b0RvKTtcbiAgICBjbGVhcklucHV0Rm9ybSgpO1xuICAgIGRpc3BsYXlUb0Rvc0ZvckN1cnJlbnRQcm9qZWN0KHNlbGVjdGVkUHJvamVjdCk7XG4gIH0gZWxzZSB7XG4gICAgY29uc29sZS5sb2coY3VycmVudFByb2plY3QpO1xuICAgIC8vSWYgdGhlcmUgaXMgYW4gZXhpc3RpbmcgcHJvamVjdCBnZXQgaXQgZnJvbSB0aGUgbG9jYWwgc3RvcmFnZVxuICAgIGNvbnN0IHRvRG8gPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKGN1cnJlbnRQcm9qZWN0KSkgfHwgW107XG5cbiAgICBjb25zdCBuZXdUb0RvID0gZ2V0VXNlclRvZG8oKTtcblxuICAgIHRvRG8ucHVzaChuZXdUb0RvKTtcblxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKGN1cnJlbnRQcm9qZWN0LCBKU09OLnN0cmluZ2lmeSh0b0RvKSk7XG5cbiAgICBjb25zb2xlLmxvZyh0b0RvKTtcbiAgICBjbGVhcklucHV0Rm9ybSgpO1xuICAgIGRpc3BsYXlUb0Rvc0ZvckN1cnJlbnRQcm9qZWN0KGN1cnJlbnRQcm9qZWN0KTtcbiAgfVxuICAvLyB9XG59XG5cbmZ1bmN0aW9uIGRpc3BsYXlUb0Rvc0ZvckN1cnJlbnRQcm9qZWN0KHByb2plY3ROYW1lKSB7XG4gIGN1cnJlbnRQcm9qZWN0TmFtZSA9IHByb2plY3ROYW1lO1xuICAvLyBjb25zb2xlLmxvZyhjdXJyZW50UHJvamVjdE5hbWUpO1xuXG4gIC8vIHNhdmVUYXNrKHByb2plY3ROYW1lKTtcbiAgbGV0IHByb2plY3RUb2RvcyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0ocHJvamVjdE5hbWUpKSB8fCBbXTtcblxuICB0b0RvID0gcHJvamVjdFRvZG9zO1xuICBjb25zb2xlLmxvZyh0b0RvKTtcbiAgLy8gY29uc29sZS5sb2coY3VycmVudFRvZG9zKTtcblxuICBwcm9qZWN0VG9kb3MuZm9yRWFjaCgodG9kbywgaW5kZXgpID0+IHtcbiAgICBkaXNwbGF5VGFzayhcbiAgICAgIHRvZG8udGl0bGUsXG4gICAgICB0b2RvLmRlc2NyaXB0aW9uLFxuICAgICAgdG9kby5wcmlvcml0eSxcbiAgICAgIHRvZG8uZGF0ZSxcbiAgICAgIGluZGV4LFxuICAgICAgcHJvamVjdE5hbWUsXG4gICAgKTtcbiAgfSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkaXNwbGF5VGFzayhcbiAgc2F2ZVRpdGxlRGF0YSxcbiAgc2F2ZURlc2NyaXB0aW9uRGF0YSxcbiAgc2F2ZVByaW9yaXR5RGF0YSxcbiAgc2F2ZUR1ZURhdGVEYXRhLFxuICBpbmRleCxcbiAgcHJvamVjdE5hbWUsXG4pIHtcbiAgY29uc3QgbGlzdENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IHRhc2tDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgY29uc3QgaW5uZXJUYXNrQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgaW5uZXJUYXNrSGFuZGxlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cbiAgaW5uZXJUYXNrSGFuZGxlci5jbGFzc0xpc3QuYWRkKFwiaW5uZXJUYXNrSGFuZGxlclwiKTtcbiAgaW5uZXJUYXNrQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJpbm5lclRhc2tDb250YWluZXJcIik7XG4gIHRhc2tDb250YWluZXIuY2xhc3NMaXN0LmFkZChcInRhc2tDb250YWluZXJcIik7XG4gIGxpc3RDb250YWluZXIuY2xhc3NMaXN0LmFkZChcImxpc3RDb250YWluZXJcIik7XG5cbiAgY29uc3QgY2hlY2tCb3hDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgY2hlY2tCb3hDb250YWluZXIuY2xhc3NMaXN0LmFkZChcImNoZWNrQm94Q29udGFpbmVyXCIpO1xuICBjb25zdCBjaGVja0JveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgY2hlY2tCb3guY2xhc3NMaXN0LmFkZChcImNoZWNrQm94XCIpO1xuICBjaGVja0JveC5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwiY2hlY2tib3hcIik7XG5cbiAgY29uc3QgdGFza1RpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImg0XCIpO1xuICBjb25zdCB0YXNrRGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgY29uc3QgZHVlRGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICBjb25zdCB0YXNrUHJpb3JpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgY29uc3QgZGVsZXRlVGFzayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG5cbiAgdGFza1RpdGxlLmNsYXNzTGlzdC5hZGQoXCJ0YXNrVGl0bGVcIik7XG4gIHRhc2tEZXNjcmlwdGlvbi5jbGFzc0xpc3QuYWRkKFwidGFza0Rlc2NyaXB0aW9uXCIpO1xuICBkdWVEYXRlLmNsYXNzTGlzdC5hZGQoXCJkdWVEYXRlXCIpO1xuICBkZWxldGVUYXNrLmNsYXNzTGlzdC5hZGQoXCJkZWxldGVUYXNrXCIpO1xuICB0YXNrUHJpb3JpdHkuY2xhc3NMaXN0LmFkZChcInRhc2tQcmlvcml0eVwiKTtcblxuICB0YXNrVGl0bGUudGV4dENvbnRlbnQgPSBgICR7c2F2ZVRpdGxlRGF0YX1gO1xuICB0YXNrRGVzY3JpcHRpb24udGV4dENvbnRlbnQgPSBgJHtzYXZlRGVzY3JpcHRpb25EYXRhfWA7XG4gIHRhc2tQcmlvcml0eS50ZXh0Q29udGVudCA9IGAke3NhdmVQcmlvcml0eURhdGF9YDtcbiAgZHVlRGF0ZS50ZXh0Q29udGVudCA9IGAke3NhdmVEdWVEYXRlRGF0YX1gO1xuICBkZWxldGVUYXNrLnRleHRDb250ZW50ID0gXCJEZWxldGVcIjtcblxuICBkZWxldGVUYXNrLmRhdGFzZXQuaW5kZXggPSBpbmRleDtcbiAgZGVsZXRlVGFzay5kYXRhc2V0LnByb2plY3QgPSBwcm9qZWN0TmFtZTtcbiAgY2hlY2tCb3guZGF0YXNldC5pbmRleCA9IGluZGV4O1xuICBjaGVja0JveC5kYXRhc2V0LnByb2plY3QgPSBwcm9qZWN0TmFtZTtcblxuICB0YXNrVGl0bGUuZGF0YXNldC5maWVsZFR5cGUgPSBcInRpdGxlXCI7XG4gIHRhc2tEZXNjcmlwdGlvbi5kYXRhc2V0LmZpZWxkVHlwZSA9IFwiZGVzY3JpcHRpb25cIjtcbiAgdGFza1ByaW9yaXR5LmRhdGFzZXQuZmllbGRUeXBlID0gXCJ0YXNrUHJpb3JpdHlcIjtcbiAgZHVlRGF0ZS5kYXRhc2V0LmZpZWxkVHlwZSA9IFwiZHVlRGF0ZVwiO1xuXG4gIHRhc2tUaXRsZS5kYXRhc2V0LmluZGV4ID0gaW5kZXg7XG4gIHRhc2tEZXNjcmlwdGlvbi5kYXRhc2V0LmluZGV4ID0gaW5kZXg7XG4gIHRhc2tQcmlvcml0eS5kYXRhc2V0LmluZGV4ID0gaW5kZXg7XG4gIGR1ZURhdGUuZGF0YXNldC5pbmRleCA9IGluZGV4O1xuXG4gIGlubmVyVGFza0NvbnRhaW5lci5hcHBlbmRDaGlsZCh0YXNrVGl0bGUpO1xuICBpbm5lclRhc2tDb250YWluZXIuYXBwZW5kQ2hpbGQodGFza0Rlc2NyaXB0aW9uKTtcbiAgaW5uZXJUYXNrQ29udGFpbmVyLmFwcGVuZENoaWxkKGR1ZURhdGUpO1xuXG4gIGlubmVyVGFza0hhbmRsZXIuYXBwZW5kQ2hpbGQodGFza1ByaW9yaXR5KTtcbiAgaW5uZXJUYXNrSGFuZGxlci5hcHBlbmRDaGlsZChkZWxldGVUYXNrKTtcblxuICB0YXNrQ29udGFpbmVyLmFwcGVuZENoaWxkKGlubmVyVGFza0NvbnRhaW5lcik7XG4gIHRhc2tDb250YWluZXIuYXBwZW5kQ2hpbGQoaW5uZXJUYXNrSGFuZGxlcik7XG5cbiAgY2hlY2tCb3hDb250YWluZXIuYXBwZW5kQ2hpbGQoY2hlY2tCb3gpO1xuICBsaXN0Q29udGFpbmVyLmFwcGVuZENoaWxkKGNoZWNrQm94Q29udGFpbmVyKTtcblxuICBsaXN0Q29udGFpbmVyLmFwcGVuZENoaWxkKHRhc2tDb250YWluZXIpO1xuICB1c2VyTGlzdC5hcHBlbmRDaGlsZChsaXN0Q29udGFpbmVyKTtcblxuICB0YXNrVGl0bGUuYWRkRXZlbnRMaXN0ZW5lcihcImRibGNsaWNrXCIsIGVkaXRUYXNrKTtcbiAgdGFza0Rlc2NyaXB0aW9uLmFkZEV2ZW50TGlzdGVuZXIoXCJkYmxjbGlja1wiLCBlZGl0VGFzayk7XG4gIHRhc2tQcmlvcml0eS5hZGRFdmVudExpc3RlbmVyKFwiZGJsY2xpY2tcIiwgZWRpdFRhc2spO1xuICBkdWVEYXRlLmFkZEV2ZW50TGlzdGVuZXIoXCJkYmxjbGlja1wiLCBlZGl0VGFzayk7XG5cbiAgZGVsZXRlVGFzay5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZGVsZXRlVG9Ebyk7XG4gIGRlbGV0ZVRhc2suYWRkRXZlbnRMaXN0ZW5lcihcInRvdWNoc3RhcnRcIiwgZGVsZXRlVG9Ebyk7XG5cbiAgaGFuZGxlQ2hlY2tCb3goY2hlY2tCb3gsIHRhc2tUaXRsZSwgdGFza0Rlc2NyaXB0aW9uKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGVkaXRUYXNrKGV2ZW50KSB7XG4gIGNvbnN0IHRhcmdldCA9IGV2ZW50LnRhcmdldDtcblxuICBjb25zdCBmaWVsZFR5cGUgPSB0YXJnZXQuZGF0YXNldC5maWVsZFR5cGU7IC8vIElkZW50aWZ5IHRoZSBmaWVsZCB0eXBlKHRpdGxlLGRlc2NyaXB0aW9uLHByaW9yaXR5LGRhdGUpXG4gIGNvbnN0IGluZGV4ID0gdGFyZ2V0LmRhdGFzZXQuaW5kZXg7XG4gIGNvbnN0IHRhc2tQcmlvcml0eSA9IFtcIlVyZ2VudFwiLCBcIkltcG9ydGFudFwiLCBcIkxvdyBwcmlvcml0eVwiXTtcblxuICBsZXQgdGFza0lucHV0O1xuICBpZiAoZmllbGRUeXBlID09PSBcInRpdGxlXCIgfHwgZmllbGRUeXBlID09PSBcImRlc2NyaXB0aW9uXCIpIHtcbiAgICB0YXNrSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgdGFza0lucHV0LnR5cGUgPSBcInRleHRcIjtcbiAgICB0YXNrSW5wdXQudmFsdWUgPSB0YXJnZXQudGV4dENvbnRlbnQ7XG4gIH0gZWxzZSBpZiAoZmllbGRUeXBlID09PSBcImR1ZURhdGVcIikge1xuICAgIHRhc2tJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICB0YXNrSW5wdXQudHlwZSA9IFwiZGF0ZVwiO1xuICAgIHRhc2tJbnB1dC52YWx1ZSA9IHRhcmdldC50ZXh0Q29udGVudDtcbiAgfSBlbHNlIGlmIChmaWVsZFR5cGUgPT09IFwidGFza1ByaW9yaXR5XCIpIHtcbiAgICB0YXNrSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VsZWN0XCIpO1xuXG4gICAgdGFza1ByaW9yaXR5LmZvckVhY2goKHByaW9yaXR5KSA9PiB7XG4gICAgICBjb25zdCBvcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xuICAgICAgb3B0aW9uLnZhbHVlID0gcHJpb3JpdHk7XG4gICAgICBvcHRpb24udGV4dENvbnRlbnQgPSBwcmlvcml0eTtcblxuICAgICAgaWYgKHByaW9yaXR5ID09PSB0YXJnZXQudGV4dENvbnRlbnQpIHtcbiAgICAgICAgb3B0aW9uLnNlbGVjdGVkID0gdHJ1ZTtcbiAgICAgIH1cbiAgICAgIHRhc2tJbnB1dC5hcHBlbmRDaGlsZChvcHRpb24pO1xuICAgIH0pO1xuICB9XG5cbiAgLy9TdG9yZSB0aGUgZmllbGRUeXBlIGluIHRoZSBpbnB1dCBkYXRhc2V0XG4gIHRhc2tJbnB1dC5kYXRhc2V0LmZpZWxkVHlwZSA9IGZpZWxkVHlwZTtcbiAgdGFza0lucHV0LmRhdGFzZXQuaW5kZXggPSBpbmRleDtcblxuICB0YXJnZXQuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICB0YXJnZXQucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUodGFza0lucHV0LCB0YXJnZXQubmV4dFNpYmxpbmcpOyAvLyBJbnNlcnQgdGhlIGlucHV0IGZpZWxkIG5leHQgdG8gdGFyZ2V0IGVsZW1lbnRcblxuICB0YXNrSW5wdXQuY2xhc3NMaXN0LmFkZChcImVkaXRcIik7XG4gIC8vICAgY29uc3Qgc2VsZWN0ZWRWYWx1ZSA9IHRhc2tJbnB1dC52YWx1ZTtcbiAgLy8gY29uc29sZS5sb2coc2VsZWN0ZWRWYWx1ZSk7XG5cbiAgaWYgKHRhc2tJbnB1dC50eXBlID09PSBcInRleHRcIikge1xuICAgIHRhc2tJbnB1dC5zZWxlY3QoKTsgLy8gQXV0b21hdGljYWxseSBzZWxlY3QgdGhlIGNvbnRlbnQgb2YgdGhlIGlucHV0IGZpZWxkXG4gIH1cblxuICB0YXNrSW5wdXQuYWRkRXZlbnRMaXN0ZW5lcihcImJsdXJcIiwgc2F2ZUVkaXRlZFRhc2spOyAvLyBTYXZlIHRhc2sgd2hlbiB0YXNrIGxvc2UgZm9jdXMgb24gaW5wdXQgZWxlbWVudC5cbiAgdGFza0lucHV0LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlwcmVzc1wiLCBzYXZlRWRpdGVkVGFzayk7IC8vIFNhdmUgdGFzayBvbiBwcmVzc2luZyBFbnRlclxufVxuXG5leHBvcnQgZnVuY3Rpb24gc2F2ZUVkaXRlZFRhc2soZXZlbnQpIHtcbiAgY29uc29sZS5sb2codG9Ebyk7XG5cbiAgaWYgKGV2ZW50LnR5cGUgPT09IFwiYmx1clwiIHx8IGV2ZW50LmtleSA9PT0gXCJFbnRlclwiKSB7XG4gICAgY29uc3QgaW5wdXQgPSBldmVudC50YXJnZXQ7XG5cbiAgICBsZXQgZmllbGRUeXBlID0gaW5wdXQuZGF0YXNldC5maWVsZFR5cGU7XG4gICAgbGV0IGluZGV4ID0gaW5wdXQuZGF0YXNldC5pbmRleDsgLy8gR2V0IHRoZSBpbmRleCBmcm9tIHRoZSBpbnB1dCBkYXRhc2V0XG5cbiAgICBsZXQgbmV3VmFsdWU7XG4gICAgLy9JZiBzZWxlY3QgZWxlbWVudCwgZ2V0IGl0IHZhbHVlIGVsc2UgZ2V0IGlucHV0IHZhbHVlXG4gICAgaWYgKGlucHV0LnRhZ05hbWUgPT09IFwiU0VMRUNUXCIpIHtcbiAgICAgIG5ld1ZhbHVlID0gaW5wdXQub3B0aW9uc1tpbnB1dC5zZWxlY3RlZEluZGV4XS52YWx1ZTtcbiAgICAgIHRvRG9baW5kZXhdLnByaW9yaXR5ID0gbmV3VmFsdWU7XG4gICAgICBjb25zb2xlLmxvZyh0b0RvW2luZGV4XS5wcmlvcml0eSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIG5ld1ZhbHVlID0gaW5wdXQudmFsdWU7XG4gICAgfVxuICAgIC8vIGNvbnN0IGN1cnJlbnRQcm9qZWN0ID0gY3VycmVudFByb2plY3ROYW1lW2N1cnJlbnRQcm9qZWN0TmFtZS5sZW5ndGggLSAxXTtcblxuICAgIC8vR2V0IHRoZSB0YXNrIGZyb20gdGhlIGxvY2FsIHN0b3JhZ2VcbiAgICAvLyBsZXQgdG9EbyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oY3VycmVudFByb2plY3ROYW1lKSkgfHwgW107XG4gICAgY29uc29sZS5sb2codG9Ebyk7XG5cbiAgICAvL0NoZWNrIGlmIHRoZSBpbmRleCBpcyBub3Qgb3V0IG9mIGJvdW5kcyBpbiB0aGUgYXJyYXlcbiAgICBpZiAoaW5kZXggPCB0b0RvLmxlbmd0aCkge1xuICAgICAgaWYgKGZpZWxkVHlwZSA9PT0gXCJ0aXRsZVwiKSB7XG4gICAgICAgIHRvRG9baW5kZXhdLnRpdGxlID0gbmV3VmFsdWU7XG4gICAgICAgIGNvbnNvbGUubG9nKHRvRG9baW5kZXhdLnRpdGxlKTtcbiAgICAgIH0gZWxzZSBpZiAoZmllbGRUeXBlID09PSBcImRlc2NyaXB0aW9uXCIpIHtcbiAgICAgICAgdG9Eb1tpbmRleF0uZGVzY3JpcHRpb24gPSBuZXdWYWx1ZTtcbiAgICAgIH0gZWxzZSBpZiAoZmllbGRUeXBlID09PSBcImR1ZURhdGVcIikge1xuICAgICAgICBsZXQgZHVlRGF0ZSA9IG5ld1ZhbHVlO1xuICAgICAgICBjb25zdCBkYXRlID0gbmV3IERhdGUoZHVlRGF0ZSk7XG5cbiAgICAgICAgY29uc3Qgb3B0aW9ucyA9IHtcbiAgICAgICAgICB3ZWVrZGF5OiBcImxvbmdcIixcbiAgICAgICAgICB5ZWFyOiBcIm51bWVyaWNcIixcbiAgICAgICAgICBtb250aDogXCJzaG9ydFwiLFxuICAgICAgICAgIGRheTogXCJudW1lcmljXCIsXG4gICAgICAgIH07XG5cbiAgICAgICAgdG9Eb1tpbmRleF0uZGF0ZSA9IGRhdGUudG9Mb2NhbGVEYXRlU3RyaW5nKFwiZW4tVXNcIiwgb3B0aW9ucyk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gU2F2ZSB0aGUgdXBkYXRlZCB0YXNrcyB0byBsb2NhbCBzdG9yYWdlXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oY3VycmVudFByb2plY3ROYW1lLCBKU09OLnN0cmluZ2lmeSh0b0RvKSk7XG5cbiAgICAvLyBVcGRhdGUgdGhlIG9yaWdpbmFsIGVsZW1lbnQncyB0ZXh0IGNvbnRlbnQgYW5kIHNob3cgaXQgYWdhaW5cbiAgICBsZXQgb3JpZ2luYWxFbGVtZW50ID0gaW5wdXQucHJldmlvdXNTaWJsaW5nO1xuXG4gICAgb3JpZ2luYWxFbGVtZW50LnRleHRDb250ZW50ID0gbmV3VmFsdWU7XG5cbiAgICBvcmlnaW5hbEVsZW1lbnQuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcblxuICAgIC8vIFJlbW92ZSB0aGUgaW5wdXQgZmllbGQgaWYgaXQgaXMgc3RpbGwgcGFydCBvZiB0aGUgRE9NXG5cbiAgICBpbnB1dC5yZW1vdmUoKTtcblxuICAgIHVzZXJMaXN0LnRleHRDb250ZW50ID0gXCJcIjtcblxuICAgIC8vIFJlLXJlbmRlciB0aGUgdG9kbyBsaXN0IGlmIG5lY2Vzc2FyeVxuICAgIGRpc3BsYXlUb0Rvc0ZvckN1cnJlbnRQcm9qZWN0KGN1cnJlbnRQcm9qZWN0TmFtZSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gaGFuZGxlQ2hlY2tCb3goY2hlY2tCb3gsIHRhc2tUaXRsZSwgdGFza0Rlc2NyaXB0aW9uKSB7XG4gIGNoZWNrQm94LmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgKGV2ZW50KSA9PiB7XG4gICAgaWYgKGNoZWNrQm94LmNoZWNrZWQgPT09IHRydWUpIHtcbiAgICAgIGNvbnN0IGNoZWNrQm94ID0gZXZlbnQudGFyZ2V0O1xuICAgICAgY29uc29sZS5sb2coY2hlY2tCb3gpO1xuICAgICAgY29uc3QgaW5kZXggPSBjaGVja0JveC5kYXRhc2V0LmluZGV4O1xuICAgICAgY29uc3QgcHJvamVjdE5hbWUgPSBjaGVja0JveC5kYXRhc2V0LnByb2plY3Q7XG5cbiAgICAgIHRvRG8gPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKHByb2plY3ROYW1lKSkgfHwgW107XG5cbiAgICAgIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICAgICAgY2hlY2tCb3gucmVtb3ZlKGNoZWNrQm94KTtcbiAgICAgICAgdG9Eby5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICAvL3VwZGF0ZSBUby1kbyBpdGVtIGluIGxvY2FsIHN0b3JhZ2VcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0ocHJvamVjdE5hbWUsIEpTT04uc3RyaW5naWZ5KHRvRG8pKTtcbiAgICAgICAgY29uc29sZS5sb2codG9Ebyk7XG4gICAgICAgIHVzZXJMaXN0LnRleHRDb250ZW50ID0gXCJcIjtcbiAgICAgICAgZGlzcGxheVRvRG9zRm9yQ3VycmVudFByb2plY3QocHJvamVjdE5hbWUpO1xuICAgICAgICBhbGVydChcIlRhc2sgY29tcGxldGVkIVwiKTtcbiAgICAgIH1cbiAgICAgIGNvbnNvbGUubG9nKFwidHJ1ZVwiKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGFza1RpdGxlLnN0eWxlLnRleHREZWNvcmF0aW9uID0gXCJub25lXCI7XG4gICAgICB0YXNrRGVzY3JpcHRpb24uc3R5bGUudGV4dERlY29yYXRpb24gPSBcIm5vbmVcIjtcbiAgICAgIGNvbnNvbGUubG9nKFwiZmFsc2VcIik7XG4gICAgfVxuICB9KTtcbn1cblxuLy9EZWxldGUgdGhlIHRvZG8gdGhhdCBnZXQgY2xpY2tlZFxuZnVuY3Rpb24gZGVsZXRlVG9EbyhldmVudCkge1xuICBjb25zdCBidXR0b24gPSBldmVudC50YXJnZXQ7XG4gIGNvbnN0IGluZGV4ID0gYnV0dG9uLmRhdGFzZXQuaW5kZXg7XG4gIGNvbnN0IGN1cnJlbnRQcm9qZWN0ID0gYnV0dG9uLmRhdGFzZXQucHJvamVjdDtcbiAgY29uc29sZS5sb2coY3VycmVudFByb2plY3QpO1xuXG4gIC8vIGNvbnN0IGN1cnJlbnRQcm9qZWN0ID0gY3VycmVudFByb2plY3ROYW1lW2N1cnJlbnRQcm9qZWN0TmFtZS5sZW5ndGggLSAxXTtcbiAgdG9EbyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oY3VycmVudFByb2plY3QpKSB8fCBbXTtcblxuICBjb25zb2xlLmxvZyh0b0RvKTtcblxuICBpZiAoaW5kZXggIT09IC0xKSB7XG4gICAgdG9Eby5zcGxpY2UoaW5kZXgsIDEpO1xuICAgIC8vdXBkYXRlIFRvLWRvIGl0ZW0gaW4gbG9jYWwgc3RvcmFnZVxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKGN1cnJlbnRQcm9qZWN0LCBKU09OLnN0cmluZ2lmeSh0b0RvKSk7XG4gICAgY29uc29sZS5sb2codG9Ebyk7XG4gICAgdXNlckxpc3QudGV4dENvbnRlbnQgPSBcIlwiO1xuICAgIGRpc3BsYXlUb0Rvc0ZvckN1cnJlbnRQcm9qZWN0KGN1cnJlbnRQcm9qZWN0KTtcbiAgfVxufVxuXG4vL0NhbmNlbCBwcm9qZWN0IGZvcm0gZnJvbSBkaXNwbGF5aW5nLlxuZnVuY3Rpb24gY2FuY2VsRm9ybURpc3BsYXkoKSB7XG4gIGlucHV0RmllbGRFbC52YWx1ZSA9IFwiXCI7XG4gIGRlc2NyaXB0aW9uRmllbGRFbC52YWx1ZSA9IFwiXCI7XG4gIHNlbGVjdFByaW9yaXR5RWwudmFsdWUgPSBcIlNlbGVjdCBQcmlvcml0eVwiO1xuICBkdWVEYXRlLnZhbHVlID0gXCJcIjtcbiAgcHJvamVjdEZvcm0uc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICBjb25zb2xlLmxvZyhcImNhbmNlbCBmb3JtIVwiKTtcbiAgbmV3UHJvamVjdHNGb3JtQ29udGFpbmVyRWwuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcbiAgaWYgKG5ld1Byb2plY3RUYXNrc0NvbnRhaW5lci5zdHlsZS5kaXNwbGF5ID09PSBcIm5vbmVcIikge1xuICAgIG5ld1Byb2plY3RUYXNrc0NvbnRhaW5lci5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuICB9XG4gIGNyZWF0ZU5ld1Byb2plY3RUYXNrQnRuKCk7XG4gIC8vIGRpc3BsYXlUb0Rvc0ZvckN1cnJlbnRQcm9qZWN0KGN1cnJlbnRQcm9qZWN0TmFtZS5zbGljZSgpLnBvcCgpKTtcbn1cbmNhbmNlbFRhc2tCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGNhbmNlbEZvcm1EaXNwbGF5KTtcblxuLy9QcmV2ZW50IGZvcm0gRGVmYXVsdCB3aGVuIHN1Ym1pdGluZyBwcm9qZWN0IG5hbWVcbmNvbnN0IHN1Ym1pdE5ld1Byb2plY3RGb3JtTmFtZSA9IChldmVudCkgPT4ge1xuICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICBnZXRuZXdQcm9qZWN0SW5wdXROYW1lKCk7XG4gIGRpc3BsYXlOZXdQcm9qZWN0Rm9ybSgpO1xuICAvLyBjcmVhdGVOZXdQcm9qZWN0VGFza0J0bigpO1xufTtcblNhdmVQcm9qZWN0TmFtZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgc3VibWl0TmV3UHJvamVjdEZvcm1OYW1lKTtcbm5ld1Byb2plY3ROYW1lUmVxdWVzdC5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIChldmVudCkgPT5cbiAgZXZlbnQucHJldmVudERlZmF1bHQoKSxcbik7XG5cbm5ld1Byb2plY3RUYXNrc0NvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICBkaXNwbGF5TmV3UHJvamVjdEZvcm0oKTtcbiAgbmV3UHJvamVjdFRhc2tzQ29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgbmV3UHJvamVjdFRhc2tzQ29udGFpbmVyLnRleHRDb250ZW50ID0gXCJcIjtcbn0pO1xuXG5mdW5jdGlvbiBzdWJtaXRGb3JtKGV2ZW50KSB7XG4gIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gIHVzZXJMaXN0LnRleHRDb250ZW50ID0gXCJcIjtcblxuICBhZGROZXdQcm9qZWN0VG9kb3MoKTtcbiAgLy8gZGlzcGxheVRvRG9zRm9yQ3VycmVudFByb2plY3QocHJvamVjdE5hbWUpO1xuICAvLyBhZGRUb2RvVG9zZWxlY3RlZFByb2plY3QoKTtcbn1cbnN1Ym1pdFRhc2tCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHN1Ym1pdEZvcm0pO1xucHJvamVjdEZvcm0uYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCAoZXZlbnQpID0+IGV2ZW50LnByZXZlbnREZWZhdWx0KCkpO1xuIiwiaW1wb3J0IHsgZ2V0VXNlclRvZG8gfSBmcm9tIFwiLi9kb20tRWwtMlwiO1xuaW1wb3J0IHsgbmV3UHJvamVjdFRhc2tzQ29udGFpbmVyIH0gZnJvbSBcIi4vZG9tLUVsLTJcIjtcbmltcG9ydCB7IGdldG5ld1Byb2plY3RJbnB1dFZhbHVlIH0gZnJvbSBcIi4vZG9tLUVsLTJcIjtcbmltcG9ydCB7IGNyZWF0ZU5ld1Byb2plY3RUYXNrQnRuIH0gZnJvbSBcIi4vZG9tLUVsLTJcIjtcbmltcG9ydCB7IGlucHV0TmV3cHJvamVjdEZvcm1OYW1lIH0gZnJvbSBcIi4vZG9tLUVsLTJcIjtcblxuY29uc3QgbWFpbkNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJtYWluXCIpO1xuY29uc3QgaGVhZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5oZWFkZXJUZXh0Q29udGVudFwiKTtcbmNvbnN0IHVzZXJMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN1c2VybGlzdFwiKTtcbmNvbnN0IGluYm94VGFza0Rpc3BsYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmRpc3BsYXlJbmJveFRhc2tcIik7XG5jb25zdCBmb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNmb3JtXCIpO1xubGV0IHByb2plY3RGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNQcm9qZWN0Rm9ybVwiKTtcbmNvbnN0IGNhbmNlbEZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNhbmNlbFwiKTtcbmNvbnN0IHN1Ym1pdEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjc3VibWl0QnRuXCIpO1xuY29uc3QgYWRkVGFza2J0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdGFza1wiKTtcbmNvbnN0IGFkZFRhc2tNb2JpbGVCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2FkZFRvZG9CdG5Db250YWluZXJcIik7XG5cbmxldCBpbmJveCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaW5ib3hcIik7XG5jb25zdCB0b0RvQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNlY3Rpb25cIik7XG50b0RvQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJ0b0RvQ29udGFpbmVySW5ib3hcIik7XG5jb25zdCBpbmJveEZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZm9ybVwiKTtcbmluYm94Rm9ybS5jbGFzc0xpc3QuYWRkKFwiaW5ib3hGb3JtXCIpO1xuY29uc3QgaW5ib3hUYXNrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbmluYm94VGFzay5jbGFzc0xpc3QuYWRkKFwiaW5ib3hUYXNrXCIpO1xuXG5sZXQgdGFza1RpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50YXNrLXRpdGxlXCIpO1xubGV0IHRhc2tEZXNjcmlwdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZGVzY3JpcHRpb25cIik7XG5sZXQgdGFza1ByaW9yaXR5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwcmlvcml0eVwiKTtcbmxldCBkdWVEYXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNkYXRlUGlja2VyXCIpO1xuXG5jbGFzcyBnZXRMaXN0IHtcbiAgY29uc3RydWN0b3IodGl0bGUsIGRlc2NyaXB0aW9uLCBwcmlvcml0eSwgZGF0ZSkge1xuICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcbiAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XG4gICAgdGhpcy5wcmlvcml0eSA9IHByaW9yaXR5O1xuICAgIHRoaXMuZGF0ZSA9IGRhdGU7XG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IG15UHJvamVjdHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Byb2plY3RzIGgzXCIpO1xuY29uc3QgZGVmYXVsdFByb2plY3RzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwcm9qZWN0c1wiKTtcblxuZnVuY3Rpb24gZGlzcGxheUZvcm0oZXZlbnQpIHtcbiAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImhlYWRlciBoMVwiKTtcblxuICBoZWFkZXIudGV4dENvbnRlbnQgPSBcIkFkZCB5b3VyIFRvIGRvXCI7XG4gIHVzZXJMaXN0LnRleHRDb250ZW50ID0gXCJcIjtcbiAgY29uc3QgaW50aWFsVGV4dERpc3BsYXlDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgIFwiLmludGlhbFRleHREaXNwbGF5Q29udGFpbmVyXCIsXG4gICk7XG4gIGludGlhbFRleHREaXNwbGF5Q29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcblxuICBsZXQgbmV3UHJvamVjdEJ0biA9IGNyZWF0ZU5ld1Byb2plY3RUYXNrQnRuKCk7XG4gIG5ld1Byb2plY3RCdG4uc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICBmb3JtLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG4gIGlmICgocHJvamVjdEZvcm0uc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIikpIHtcbiAgICBwcm9qZWN0Rm9ybS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gIH1cblxuICBpZihpbnB1dE5ld3Byb2plY3RGb3JtTmFtZS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJykge1xuICAgIGlucHV0TmV3cHJvamVjdEZvcm1OYW1lLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSdcbiAgfVxufVxuYWRkVGFza2J0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZGlzcGxheUZvcm0pO1xuYWRkVGFza01vYmlsZUJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZGlzcGxheUZvcm0pO1xuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCAoKSA9PiB7XG4gIGRpc3BsYXlUb0RvcygpO1xufSk7XG5cbmxldCB0b0RvcyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ0b0Rvc1wiKSkgfHwgW107XG5cbmZ1bmN0aW9uIGFjY2VwdElucHV0KCkge1xuICBsZXQgdGFza0lucHV0VmFsdWUgPSB0YXNrVGl0bGUudmFsdWU7XG4gIGxldCBkZXNjcmlwdGlvbklucHV0VmFsdWUgPSB0YXNrRGVzY3JpcHRpb24udmFsdWU7XG4gIGxldCBwcmlvcml0eVZhbHVlRWwgPSB0YXNrUHJpb3JpdHkudmFsdWU7XG4gIGxldCBkdWVEYXRlVmFsdWVFbCA9IGR1ZURhdGUudmFsdWU7XG5cbiAgY29uc29sZS5sb2codGFza0lucHV0VmFsdWUubGVuZ3RoKTtcbiAgLy8gaWYgKHRhc2tJbnB1dFZhbHVlLmxlbmd0aCA+PSAzNSkge1xuICAvLyAgIHJldHVybiBhbGVydChcbiAgLy8gICAgIGB0YXNrIHRpdGxlIHNob3VsZCBiZSBsZXNzIG9yIGVxdWFsIHRvIDM1ICBjaGFyYWN0ZXJzLCB5b3UgaGF2ZSBlbnRlcmVkICR7dGFza0lucHV0VmFsdWUubGVuZ3RofSBjaGFyYWN0ZXJzYCxcbiAgLy8gICApO1xuICAvLyB9IGVsc2UgaWYgKGRlc2NyaXB0aW9uSW5wdXRWYWx1ZS5sZW5ndGggPj0gNDApIHtcbiAgLy8gICByZXR1cm4gYWxlcnQoXG4gIC8vICAgICBgRGVzY3JpcHRpb24gc2hvdWxkIGJlIGxlc3Mgb3IgZXF1YWwgdG8gIDQwIGNoYXJhY3RlcnMsIHlvdSBoYXZlIGVudGVyZWQgJHtkZXNjcmlwdGlvbklucHV0VmFsdWUubGVuZ3RofSBjaGFyYWN0ZXJzYCxcbiAgLy8gICApO1xuICAvLyB9XG5cbiAgY29uc3QgZGF0ZSA9IG5ldyBEYXRlKGR1ZURhdGVWYWx1ZUVsKTtcblxuICBjb25zdCBvcHRpb25zID0ge1xuICAgIHdlZWtkYXk6IFwibG9uZ1wiLFxuICAgIHllYXI6IFwibnVtZXJpY1wiLFxuICAgIG1vbnRoOiBcInNob3J0XCIsXG4gICAgZGF5OiBcIm51bWVyaWNcIixcbiAgfTtcblxuICBjb25zdCBkYXlPZldlZWsgPSBkYXRlLnRvTG9jYWxlRGF0ZVN0cmluZyhcImVuLVVzXCIsIG9wdGlvbnMpO1xuXG4gIGxldCB1c2VyVG9EbyA9IG5ldyBnZXRMaXN0KFxuICAgIHRhc2tJbnB1dFZhbHVlLFxuICAgIGRlc2NyaXB0aW9uSW5wdXRWYWx1ZSxcbiAgICBwcmlvcml0eVZhbHVlRWwsXG4gICAgZGF5T2ZXZWVrLFxuICApO1xuXG4gIHRvRG9zLnB1c2godXNlclRvRG8pO1xuXG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwidG9Eb3NcIiwgSlNPTi5zdHJpbmdpZnkodG9Eb3MpKTtcblxuICBjbGVhckZvcm0oKTtcbn1cblxuZnVuY3Rpb24gY2xlYXJGb3JtKCkge1xuICB0YXNrVGl0bGUudmFsdWUgPSBcIlwiO1xuICB0YXNrRGVzY3JpcHRpb24udmFsdWUgPSBcIlwiO1xuICBkdWVEYXRlLnZhbHVlID0gXCJcIjtcbiAgdGFza1ByaW9yaXR5LnZhbHVlID0gXCJTZWxlY3QgUHJpb3JpdHlcIjtcbn1cblxuZnVuY3Rpb24gZGlzcGxheVRvRG9zKCkge1xuICBsZXQgdXNlclRvZG9zID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInRvRG9zXCIpKSB8fCBbXTtcblxuICB1c2VyVG9kb3M/LmZvckVhY2goKHRvZG9PYmosIGluZGV4KSA9PiB7XG4gICAgZ2V0RWxlbWVudEZvclRhc2tEaXNwbGF5KFxuICAgICAgdG9kb09iai50aXRsZSxcbiAgICAgIHRvZG9PYmouZGVzY3JpcHRpb24sXG4gICAgICB0b2RvT2JqLnByaW9yaXR5LFxuICAgICAgdG9kb09iai5kYXRlLFxuICAgICAgaW5kZXgsXG4gICAgKTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGdldEVsZW1lbnRGb3JUYXNrRGlzcGxheShcbiAgc2F2ZVRpdGxlRGF0YSxcbiAgc2F2ZURlc2NyaXB0aW9uRGF0YSxcbiAgc2F2ZVByaW9yaXR5RGF0YSxcbiAgc2F2ZUR1ZURhdGVEYXRhLFxuICBpbmRleCxcbikge1xuICBoZWFkZXIudGV4dENvbnRlbnQgPSBcIkNyZWF0ZSBZb3VyIFRvLURvIExpc3QuXCI7XG4gIGNvbnN0IGxpc3RDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCB0YXNrQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIGNvbnN0IGlubmVyVGFza0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IGlubmVyVGFza0hhbmRsZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBpbm5lclRhc2tIYW5kbGVyLmNsYXNzTGlzdC5hZGQoXCJpbm5lclRhc2tIYW5kbGVyXCIpO1xuICBpbm5lclRhc2tDb250YWluZXIuY2xhc3NMaXN0LmFkZChcImlubmVyVGFza0NvbnRhaW5lclwiKTtcbiAgdGFza0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwidGFza0NvbnRhaW5lclwiKTtcbiAgbGlzdENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwibGlzdENvbnRhaW5lclwiKTtcblxuICBjb25zdCBjaGVja0JveENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICBjaGVja0JveENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiY2hlY2tCb3hDb250YWluZXJcIik7XG4gIGNvbnN0IGNoZWNrQm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICBjaGVja0JveC5jbGFzc0xpc3QuYWRkKFwiY2hlY2tCb3hcIik7XG4gIGNoZWNrQm94LnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJjaGVja2JveFwiKTtcblxuICBjb25zdCB0YXNrVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDRcIik7XG4gIGNvbnN0IHRhc2tEZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICBjb25zdCBkdWVEYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIGNvbnN0IHRhc2tQcmlvcml0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICBjb25zdCBkZWxldGVUYXNrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcblxuICB0YXNrVGl0bGUuY2xhc3NMaXN0LmFkZChcInRhc2tUaXRsZVwiKTtcbiAgdGFza0Rlc2NyaXB0aW9uLmNsYXNzTGlzdC5hZGQoXCJ0YXNrRGVzY3JpcHRpb25cIik7XG5cbiAgZHVlRGF0ZS5jbGFzc0xpc3QuYWRkKFwiZHVlRGF0ZVwiKTtcbiAgZGVsZXRlVGFzay5jbGFzc0xpc3QuYWRkKFwiZGVsZXRlVGFza1wiKTtcbiAgdGFza1ByaW9yaXR5LmNsYXNzTGlzdC5hZGQoXCJ0YXNrUHJpb3JpdHlcIik7XG5cbiAgdGFza1RpdGxlLnRleHRDb250ZW50ID0gYCAke3NhdmVUaXRsZURhdGF9YDtcbiAgdGFza0Rlc2NyaXB0aW9uLnRleHRDb250ZW50ID0gYCR7c2F2ZURlc2NyaXB0aW9uRGF0YX1gO1xuICB0YXNrUHJpb3JpdHkudGV4dENvbnRlbnQgPSBgJHtzYXZlUHJpb3JpdHlEYXRhfWA7XG4gIGR1ZURhdGUudGV4dENvbnRlbnQgPSBgJHtzYXZlRHVlRGF0ZURhdGF9YDtcbiAgZGVsZXRlVGFzay50ZXh0Q29udGVudCA9IFwiRGVsZXRlXCI7XG5cbiAgdGFza1RpdGxlLmRhdGFzZXQuZmllbGRUeXBlID0gXCJ0aXRsZVwiO1xuICB0YXNrRGVzY3JpcHRpb24uZGF0YXNldC5maWVsZFR5cGUgPSBcImRlc2NyaXB0aW9uXCI7XG4gIHRhc2tQcmlvcml0eS5kYXRhc2V0LmZpZWxkVHlwZSA9IFwidGFza1ByaW9yaXR5XCI7XG4gIGR1ZURhdGUuZGF0YXNldC5maWVsZFR5cGUgPSBcImR1ZURhdGVcIjtcblxuICB0YXNrVGl0bGUuZGF0YXNldC5pbmRleCA9IGluZGV4O1xuICB0YXNrRGVzY3JpcHRpb24uZGF0YXNldC5pbmRleCA9IGluZGV4O1xuICB0YXNrUHJpb3JpdHkuZGF0YXNldC5pbmRleCA9IGluZGV4O1xuICBkdWVEYXRlLmRhdGFzZXQuaW5kZXggPSBpbmRleDtcbiAgY2hlY2tCb3guZGF0YXNldC5pbmRleCA9IGluZGV4O1xuXG4gIGlubmVyVGFza0NvbnRhaW5lci5hcHBlbmRDaGlsZCh0YXNrVGl0bGUpO1xuICBpbm5lclRhc2tDb250YWluZXIuYXBwZW5kQ2hpbGQodGFza0Rlc2NyaXB0aW9uKTtcbiAgaW5uZXJUYXNrQ29udGFpbmVyLmFwcGVuZENoaWxkKGR1ZURhdGUpO1xuXG4gIGlubmVyVGFza0hhbmRsZXIuYXBwZW5kQ2hpbGQodGFza1ByaW9yaXR5KTtcbiAgaW5uZXJUYXNrSGFuZGxlci5hcHBlbmRDaGlsZChkZWxldGVUYXNrKTtcblxuICB0YXNrQ29udGFpbmVyLmFwcGVuZENoaWxkKGlubmVyVGFza0NvbnRhaW5lcik7XG4gIHRhc2tDb250YWluZXIuYXBwZW5kQ2hpbGQoaW5uZXJUYXNrSGFuZGxlcik7XG5cbiAgY2hlY2tCb3hDb250YWluZXIuYXBwZW5kQ2hpbGQoY2hlY2tCb3gpO1xuICBsaXN0Q29udGFpbmVyLmFwcGVuZENoaWxkKGNoZWNrQm94Q29udGFpbmVyKTtcblxuICBsaXN0Q29udGFpbmVyLmFwcGVuZENoaWxkKHRhc2tDb250YWluZXIpO1xuICB1c2VyTGlzdC5hcHBlbmRDaGlsZChsaXN0Q29udGFpbmVyKTtcblxuICB0YXNrVGl0bGUuYWRkRXZlbnRMaXN0ZW5lcihcImRibGNsaWNrXCIsIGVkaXRUYXNrKTtcbiAgdGFza1RpdGxlLmFkZEV2ZW50TGlzdGVuZXIoXCJ0b3VjaHN0YXJ0XCIsIGVkaXRUYXNrKTtcblxuICB0YXNrRGVzY3JpcHRpb24uYWRkRXZlbnRMaXN0ZW5lcihcImRibGNsaWNrXCIsIGVkaXRUYXNrKTtcbiAgdGFza0Rlc2NyaXB0aW9uLmFkZEV2ZW50TGlzdGVuZXIoXCJ0b3VjaHN0YXJ0XCIsIGVkaXRUYXNrKTtcblxuICB0YXNrUHJpb3JpdHkuYWRkRXZlbnRMaXN0ZW5lcihcImRibGNsaWNrXCIsIGVkaXRUYXNrKTtcbiAgdGFza1ByaW9yaXR5LmFkZEV2ZW50TGlzdGVuZXIoXCJ0b3VjaHN0YXJ0XCIsIGVkaXRUYXNrKTtcblxuICBkdWVEYXRlLmFkZEV2ZW50TGlzdGVuZXIoXCJkYmxjbGlja1wiLCBlZGl0VGFzayk7XG4gIGR1ZURhdGUuYWRkRXZlbnRMaXN0ZW5lcihcInRvdWNoc3RhcnRcIiwgZWRpdFRhc2spO1xuXG4gIGRlbGV0ZVRhc2suYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGRlbGV0ZVRvRG8pO1xuICBkZWxldGVUYXNrLmFkZEV2ZW50TGlzdGVuZXIoXCJ0b3VjaHN0YXJ0XCIsIGRlbGV0ZVRvRG8pO1xuXG4gIGhhbmRsZUNoZWNrQm94KGNoZWNrQm94LCB0YXNrVGl0bGUsIHRhc2tEZXNjcmlwdGlvbik7XG59XG5cbmZ1bmN0aW9uIGVkaXRUYXNrKGV2ZW50KSB7XG4gIGNvbnN0IHRhcmdldCA9IGV2ZW50LnRhcmdldDtcbiAgY29uc29sZS5sb2codGFyZ2V0KTtcbiAgY29uc3QgZmllbGRUeXBlID0gdGFyZ2V0LmRhdGFzZXQuZmllbGRUeXBlO1xuICBjb25zdCBpbmRleCA9IHRhcmdldC5kYXRhc2V0LmluZGV4O1xuICBjb25zb2xlLmxvZyhpbmRleCk7XG4gIGNvbnN0IHRhc2tQcmlvcml0eSA9IFtcIlVyZ2VudFwiLCBcIkltcG9ydGFudFwiLCBcIkxvdyBwcmlvcml0eVwiXTtcblxuICBsZXQgdGFza0lucHV0O1xuXG4gIGlmIChmaWVsZFR5cGUgPT09IFwidGl0bGVcIiB8fCBmaWVsZFR5cGUgPT09IFwiZGVzY3JpcHRpb25cIikge1xuICAgIHRhc2tJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICB0YXNrSW5wdXQudHlwZSA9IFwidGV4dFwiO1xuICAgIHRhc2tJbnB1dC52YWx1ZSA9IHRhcmdldC50ZXh0Q29udGVudDtcbiAgfSBlbHNlIGlmIChmaWVsZFR5cGUgPT09IFwiZHVlRGF0ZVwiKSB7XG4gICAgdGFza0lucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgIHRhc2tJbnB1dC50eXBlID0gXCJkYXRlXCI7XG4gICAgdGFza0lucHV0LnZhbHVlID0gdGFyZ2V0LnRleHRDb250ZW50O1xuICB9IGVsc2UgaWYgKGZpZWxkVHlwZSA9PT0gXCJ0YXNrUHJpb3JpdHlcIikge1xuICAgIHRhc2tJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzZWxlY3RcIik7XG5cbiAgICB0YXNrUHJpb3JpdHkuZm9yRWFjaCgocHJpb3JpdHkpID0+IHtcbiAgICAgIGNvbnN0IG9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7XG4gICAgICBvcHRpb24udmFsdWUgPSBwcmlvcml0eTtcbiAgICAgIG9wdGlvbi50ZXh0Q29udGVudCA9IHByaW9yaXR5O1xuXG4gICAgICBpZiAocHJpb3JpdHkgPT09IHRhcmdldC50ZXh0Q29udGVudCkge1xuICAgICAgICBvcHRpb24uc2VsZWN0ZWQgPSB0cnVlO1xuICAgICAgfVxuICAgICAgdGFza0lucHV0LmFwcGVuZENoaWxkKG9wdGlvbik7XG4gICAgfSk7XG4gIH1cblxuICB0YXNrSW5wdXQuZGF0YXNldC5maWVsZFR5cGUgPSBmaWVsZFR5cGU7XG4gIHRhc2tJbnB1dC5kYXRhc2V0LmluZGV4ID0gaW5kZXg7XG5cbiAgdGFyZ2V0LnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgdGFyZ2V0LnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKHRhc2tJbnB1dCwgdGFyZ2V0Lm5leHRTaWJsaW5nKTtcblxuICB0YXNrSW5wdXQuY2xhc3NMaXN0LmFkZChcImVkaXRcIik7XG5cbiAgaWYgKHRhc2tJbnB1dC50eXBlID09PSBcInRleHRcIikge1xuICAgIHRhc2tJbnB1dC5zZWxlY3QoKTtcbiAgfVxuXG4gIHRhc2tJbnB1dC5hZGRFdmVudExpc3RlbmVyKFwiYmx1clwiLCBzYXZlRWRpdGVkVGFzayk7XG4gIHRhc2tJbnB1dC5hZGRFdmVudExpc3RlbmVyKFwia2V5cHJlc3NcIiwgc2F2ZUVkaXRlZFRhc2spO1xufVxuXG5mdW5jdGlvbiBzYXZlRWRpdGVkVGFzayhldmVudCkge1xuICBpZiAoZXZlbnQudHlwZSA9PT0gXCJibHVyXCIgfHwgZXZlbnQua2V5ID09PSBcIkVudGVyXCIpIHtcbiAgICBsZXQgaW5wdXQgPSBldmVudC50YXJnZXQ7XG4gICAgY29uc29sZS5sb2coaW5wdXQpO1xuICAgIGxldCBmaWVsZFR5cGUgPSBpbnB1dC5kYXRhc2V0LmZpZWxkVHlwZTtcbiAgICBsZXQgaW5kZXggPSBpbnB1dC5kYXRhc2V0LmluZGV4O1xuXG4gICAgY29uc29sZS5sb2codG9Eb3MpO1xuXG4gICAgbGV0IG5ld1ZhbHVlO1xuICAgIGlmIChpbnB1dC50YWdOYW1lID09PSBcIlNFTEVDVFwiKSB7XG4gICAgICBuZXdWYWx1ZSA9IGlucHV0Lm9wdGlvbnNbaW5wdXQuc2VsZWN0ZWRJbmRleF0udmFsdWU7XG4gICAgICB0b0Rvc1tpbmRleF0ucHJpb3JpdHkgPSBuZXdWYWx1ZTtcbiAgICAgIGNvbnNvbGUubG9nKHRvRG9zW2luZGV4XS5wcmlvcml0eSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIG5ld1ZhbHVlID0gaW5wdXQudmFsdWU7XG4gICAgfVxuXG4gICAgaWYgKGluZGV4IDwgdG9Eb3MubGVuZ3RoKSB7XG4gICAgICBpZiAoZmllbGRUeXBlID09PSBcInRpdGxlXCIpIHtcbiAgICAgICAgdG9Eb3NbaW5kZXhdLnRpdGxlID0gbmV3VmFsdWU7XG4gICAgICAgIGNvbnNvbGUubG9nKHRvRG9zW2luZGV4XS50aXRsZSk7XG4gICAgICAgIGNvbnNvbGUubG9nKG5ld1ZhbHVlKTtcbiAgICAgIH0gZWxzZSBpZiAoZmllbGRUeXBlID09PSBcImRlc2NyaXB0aW9uXCIpIHtcbiAgICAgICAgdG9Eb3NbaW5kZXhdLmRlc2NyaXB0aW9uID0gbmV3VmFsdWU7XG4gICAgICAgIGNvbnNvbGUubG9nKGluZGV4KTtcbiAgICAgICAgY29uc29sZS5sb2codG9Eb3NbZGVzY3JpcHRpb25dKTtcbiAgICAgIH0gZWxzZSBpZiAoZmllbGRUeXBlID09PSBcImR1ZURhdGVcIikge1xuICAgICAgICBsZXQgZHVlRGF0ZSA9IG5ld1ZhbHVlO1xuICAgICAgICBjb25zdCBkYXRlID0gbmV3IERhdGUoZHVlRGF0ZSk7XG5cbiAgICAgICAgY29uc3Qgb3B0aW9ucyA9IHtcbiAgICAgICAgICB3ZWVrZGF5OiBcImxvbmdcIixcbiAgICAgICAgICB5ZWFyOiBcIm51bWVyaWNcIixcbiAgICAgICAgICBtb250aDogXCJzaG9ydFwiLFxuICAgICAgICAgIGRheTogXCJudW1lcmljXCIsXG4gICAgICAgIH07XG4gICAgICAgIGNvbnNvbGUubG9nKHRvRG9zKTtcblxuICAgICAgICB0b0Rvc1tpbmRleF0uZGF0ZSA9IGRhdGUudG9Mb2NhbGVEYXRlU3RyaW5nKFwiZW4tVXNcIiwgb3B0aW9ucyk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJ0b0Rvc1wiLCBKU09OLnN0cmluZ2lmeSh0b0RvcykpO1xuXG4gICAgbGV0IG9yaWdpbmFsRWxlbWVudCA9IGlucHV0LnByZXZpb3VzU2libGluZztcblxuICAgIG9yaWdpbmFsRWxlbWVudC50ZXh0Q29udGVudCA9IG5ld1ZhbHVlO1xuXG4gICAgb3JpZ2luYWxFbGVtZW50LnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG5cbiAgICBpbnB1dC5yZW1vdmUoKTtcblxuICAgIHVzZXJMaXN0LnRleHRDb250ZW50ID0gXCJcIjtcblxuICAgIGRpc3BsYXlUb0RvcygpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGhhbmRsZUNoZWNrQm94KGNoZWNrQm94LCB0YXNrVGl0bGUsIHRhc2tEZXNjcmlwdGlvbikge1xuICBjaGVja0JveC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGV2ZW50KSA9PiB7XG4gICAgaWYgKGNoZWNrQm94LmNoZWNrZWQgPT09IHRydWUpIHtcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwidG9Eb3NcIiwgSlNPTi5zdHJpbmdpZnkodG9Eb3MpKTtcbiAgICAgIGNvbnNvbGUubG9nKHRvRG9zKTtcblxuICAgICAgY29uc3QgbGlzdENvbnRhaW5lckVsID0gZXZlbnQudGFyZ2V0O1xuICAgICAgY29uc29sZS5sb2cobGlzdENvbnRhaW5lckVsKTtcbiAgICAgIGNvbnN0IGluZGV4ID0gbGlzdENvbnRhaW5lckVsLmRhdGFzZXQuaW5kZXg7XG5cbiAgICAgIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICAgICAgbGlzdENvbnRhaW5lckVsLnJlbW92ZShsaXN0Q29udGFpbmVyRWwpO1xuICAgICAgICB0b0Rvcy5zcGxpY2UoaW5kZXgsIDEpO1xuXG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwidG9Eb3NcIiwgSlNPTi5zdHJpbmdpZnkodG9Eb3MpKTtcbiAgICAgICAgY29uc29sZS5sb2codG9Eb3MpO1xuICAgICAgICB1c2VyTGlzdC50ZXh0Q29udGVudCA9IFwiXCI7XG4gICAgICAgIGRpc3BsYXlUb0RvcygpO1xuICAgICAgICBhbGVydChcIlRhc2sgY29tcGxldGVkIVwiKTtcbiAgICAgIH1cblxuICAgICAgY29uc29sZS5sb2coXCJ0cnVlXCIpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0YXNrVGl0bGUuc3R5bGUudGV4dERlY29yYXRpb24gPSBcIm5vbmVcIjtcbiAgICAgIHRhc2tEZXNjcmlwdGlvbi5zdHlsZS50ZXh0RGVjb3JhdGlvbiA9IFwibm9uZVwiO1xuICAgICAgY29uc29sZS5sb2coXCJmYWxzZVwiKTtcbiAgICB9XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBkZWxldGVUb0RvKCkge1xuICBjb25zdCBsaXN0Q29udGFpbmVyRWwgPSB0aGlzLmNsb3Nlc3QoXCIubGlzdENvbnRhaW5lclwiKTtcbiAgY29uc3QgYnV0dG9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuZGVsZXRlVGFza1wiKTtcbiAgY29uc3QgaW5kZXggPSBBcnJheS5mcm9tKGJ1dHRvbnMpLmluZGV4T2YodGhpcyk7XG5cbiAgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgIGxpc3RDb250YWluZXJFbC5yZW1vdmUobGlzdENvbnRhaW5lckVsKTtcbiAgICB0b0Rvcy5zcGxpY2UoaW5kZXgsIDEpO1xuXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJ0b0Rvc1wiLCBKU09OLnN0cmluZ2lmeSh0b0RvcykpO1xuICAgIGNvbnNvbGUubG9nKHRvRG9zKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBjYW5jZWxGb3JtRGlzcGxheSgpIHtcbiAgLy8gICBsZXQgYWRkVG9kb0J0bk9uTW9iaWxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNhZGRUb2RvQnRuQ29udGFpbmVyMlwiKTtcbiAgLy8gICBjb25zb2xlLmxvZyhhZGRUb2RvQnRuT25Nb2JpbGUpO1xuXG4gIC8vIGxldCBtZWRpYVF1ZXJ5ID0gd2luZG93Lm1hdGNoTWVkaWEoJyhtYXgtd2lkdGg6IDUwMHB4KScpXG4gIC8vIGlmIChtZWRpYVF1ZXJ5Lm1hdGNoZXMpIHtcbiAgLy8gICAgYWRkVG9kb0J0bk9uTW9iaWxlLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG4gIC8vICAgY29uc29sZS5sb2coJ3RydWUnKVxuICAvLyB9IGVsc2Uge1xuICAvLyAgIGNvbnNvbGUubG9nKCdmYWxzZScpXG5cbiAgLy8gfVxuICBjb25zdCBpbnRpYWxUZXh0RGlzcGxheUNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgXCIuaW50aWFsVGV4dERpc3BsYXlDb250YWluZXJcIixcbiAgKTtcbiAgaW50aWFsVGV4dERpc3BsYXlDb250YWluZXIuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcbiAgdGFza1RpdGxlLnZhbHVlID0gXCJcIjtcbiAgdGFza0Rlc2NyaXB0aW9uLnZhbHVlID0gXCJcIjtcbiAgZHVlRGF0ZS52YWx1ZSA9IFwiXCI7XG4gIHRhc2tQcmlvcml0eS52YWx1ZSA9IFwiU2VsZWN0IFByaW9yaXR5XCI7XG4gIGZvcm0uc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuIFxuXG59XG5jYW5jZWxGb3JtLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBjYW5jZWxGb3JtRGlzcGxheSk7XG5cbmZ1bmN0aW9uIHN1Ym1pdEZvcm0oKSB7XG4gIHVzZXJsaXN0LnRleHRDb250ZW50ID0gXCJcIjtcblxuICBhY2NlcHRJbnB1dCgpO1xuICBkaXNwbGF5VG9Eb3MoKTtcbn1cbmZvcm0uYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCAoZXZlbnQpID0+IGV2ZW50LnByZXZlbnREZWZhdWx0KCkpO1xuc3VibWl0QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBzdWJtaXRGb3JtKTtcblxuZnVuY3Rpb24gZGlzcGxheUluYm94Rm9ybSgpIHtcbiAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImhlYWRlciBoMVwiKTtcbiAgdXNlcmxpc3QudGV4dENvbnRlbnQgPSBcIlwiO1xuICBoZWFkZXIudGV4dENvbnRlbnQgPSBcIkluYm94XCI7XG5cbiAgZGlzcGxheVRvRG9zKCk7XG4gIGZvcm0uc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcblxuICBpZiAoaW5wdXROZXdwcm9qZWN0Rm9ybU5hbWUuc3R5bGUuZGlzcGxheSA9PT0gXCJibG9ja1wiKSB7XG4gICAgaW5wdXROZXdwcm9qZWN0Rm9ybU5hbWUuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICB9XG4gIHByb2plY3RGb3JtLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbn1cbmluYm94LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBkaXNwbGF5SW5ib3hGb3JtKTtcbiIsImltcG9ydCB7IGNyZWF0ZU5ld1Byb2plY3RUYXNrQnRuIH0gZnJvbSBcIi4vZG9tLUVsLTJcIjtcbmxldCBhc2lkZUVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIm1haW4gYXNpZGVcIik7XG5sZXQgdG9nZ2xlTWVudUljb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3RvZ2dsZU1lbnVJY29uXCIpO1xubGV0IHNpZGVCYXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYXNpZGUjbWVudVwiKTtcbmxldCBwcm9qZWN0RHJvcERvd24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Byb2plY3QtZHJvcGRvd25cIik7XG4vLyBsZXQgYWRkTmV3UHJvamVjdEVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNhZE5ld1Byb2plY3RFbFwiKTtcblxuY29uc29sZS5sb2cocHJvamVjdERyb3BEb3duKTtcblxuY29uc29sZS5sb2coYXNpZGVFbCk7XG5cbmZ1bmN0aW9uIHRvZ2dlbE1lbnUoKSB7XG4gIGNvbnNvbGUubG9nKFwidG9nZ2xlIGVsZW1lbnQgaXMgY2xpY2tlZFwiKTtcbiAgdG9nZ2xlTWVudUljb24uY2xhc3NMaXN0LnRvZ2dsZShcImFjdGl2ZVwiKTtcbiAgc2lkZUJhci5jbGFzc0xpc3QudG9nZ2xlKFwiYWN0aXZlXCIpO1xufVxudG9nZ2xlTWVudUljb24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHRvZ2dlbE1lbnUpO1xuXG5mdW5jdGlvbiByZW1vdmVTaWRlQmFyKGUpIHtcbiAgaWYgKGUudGFyZ2V0LnRhZ05hbWUgPT09IFwiT1BUSU9OXCIpIHtcbiAgICB0b2dnbGVNZW51SWNvbi5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xuICAgIHNpZGVCYXIuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcbiAgfSBlbHNlIGlmIChcbiAgICBlLnRhcmdldCAhPT0gdG9nZ2xlTWVudUljb24gJiZcbiAgICBlLnRhcmdldCAhPT0gc2lkZUJhciAmJlxuICAgIGUudGFyZ2V0ICE9PSBwcm9qZWN0RHJvcERvd25cbiAgKSB7XG4gICAgdG9nZ2xlTWVudUljb24uY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcbiAgICBzaWRlQmFyLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XG4gIH1cbn1cblxuZnVuY3Rpb24gb3B0aW9uU2VsZWN0ZWQoKSB7XG4gIHRvZ2dsZU1lbnVJY29uLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XG4gIHNpZGVCYXIuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcbn1cblxucHJvamVjdERyb3BEb3duLmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgb3B0aW9uU2VsZWN0ZWQpO1xuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHJlbW92ZVNpZGVCYXIpO1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyYztcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSB7XG5cdFx0XHR2YXIgaSA9IHNjcmlwdHMubGVuZ3RoIC0gMTtcblx0XHRcdHdoaWxlIChpID4gLTEgJiYgKCFzY3JpcHRVcmwgfHwgIS9eaHR0cChzPyk6Ly50ZXN0KHNjcmlwdFVybCkpKSBzY3JpcHRVcmwgPSBzY3JpcHRzW2ktLV0uc3JjO1xuXHRcdH1cblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJtYWluXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCBcIi4uL3NyYy9zdHlsZXMuY3NzXCI7XG5pbXBvcnQgZG9tRWwgZnJvbSBcIi4vZG9tLUVsXCI7XG5pbXBvcnQgZG9tRWwyIGZyb20gXCIuL2RvbS1FbC0yXCI7XG5pbXBvcnQgcmVzcG9uc2l2ZSBmcm9tIFwiLi9yZXNwb25zaXZlXCI7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=