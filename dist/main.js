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
  grid-template-columns: 250px 1fr;
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
  margin: 40px 0 0 20px;
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
}`, "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"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","sourcesContent":["body {\n  padding: 0;\n  margin: 0;\n  box-sizing: border-box;\n}\n\n:root {\n  --hover-color: #fda4af;\n  --background-color: #6f9e9e;\n}\n\n* {\n  padding: 0;\n  margin: 0;\n  box-sizing: border-box;\n  color: #78350f;\n  font-family: \"Roboto\", sans-serif;\n  font-weight: 400;\n  font-style: normal;\n}\n\n@media (max-width: 550px) {\n  body main {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    z-index: 1;\n  }\n\n  main header {\n    background-color: #fda4af;\n    text-align: center;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    gap: 10px;\n  }\n\n  #toggleMenuIcon {\n    position: fixed;\n    top: 100px;\n    right: 10px;\n    width: 50px;\n    height: 50px;\n    /* \n    top: 106px;\n    right: 10px;\n    width: 50px; */\n    background-color: #6b8888;\n    cursor: pointer;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    border-radius: 8px;\n    transition: top 0.3s;\n\n    z-index: 1000;\n  }\n\n  h1.headerTextContent {\n    font-weight: 600;\n    padding: 30px;\n  }\n\n  #toggleMenuIcon::before {\n    content: \"\";\n    position: absolute;\n    width: 28px;\n    height: 2px;\n    background-color: #fff;\n    transform: translateY(-5px);\n    transition: 0.2s;\n  }\n\n  #toggleMenuIcon::after {\n    content: \"\";\n    position: absolute;\n    width: 28px;\n    height: 2px;\n    background-color: #fff;\n    transform: translateY(5px);\n    transition: 0.2s;\n  }\n\n  #toggleMenuIcon.active::before {\n    transform: translateY(0px) rotate(45deg);\n  }\n\n  #toggleMenuIcon.active::after {\n    transform: translateY(0px) rotate(-45deg);\n  }\n\n  aside#menu {\n    display: block;\n    position: fixed;\n    top: 0;\n    left: -220px;\n    width: 220px;\n    height: 100vh;\n    color: white;\n    filter: white;\n    background-color: #7989a1;\n    transition: 0.3s;\n    z-index: 1000;\n    fill: white;\n  }\n\n  aside#menu.active {\n    left: 0;\n  }\n\n  main aside {\n    display: none;\n    border-radius: 5px;\n    background-color: #e2e8f0;\n  }\n\n  p#addNewProjectEl, p.inbox, select#project-dropdown {\n    color: white;\n  }\n\n  main #Container {\n    display: flex;\n    flex-direction: column;\n    flex-wrap: wrap;\n    border-radius: 5px;\n  }\n\n  header .menuController {\n    display: block;\n    width: 40px;\n    height: 40px;\n  }\n\n  header .menuController svg {\n    display: block;\n    width: 40px;\n    height: 40px;\n    fill: white;\n    background-color: black;\n    border-radius: 10px;\n  }\n\n  #userlist {\n    display: flex;\n    flex-direction: column;\n    max-width: 550px;\n  }\n\n  div.listContainer {\n    display: flex;\n    gap: 5px;\n    max-width: 515px;\n    border-radius: 10px;\n    box-shadow: 1px 0px 3px 0px;\n    margin: 14px 14px 0 19px;\n    word-wrap: break-word;\n    word-break: break-all;\n    white-space: normal;\n    overflow-wrap: break-word;\n\n    padding: 10px;\n  }\n\n  #userlist .intialTextDisplay {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    text-align: center;\n  }\n\n  .intialTextDisplay img {\n    max-width: 100%;\n    height: auto;\n    padding: 18px;\n    border-radius: 30px;\n    object-fit: contain;\n  }\n\n  .popUpContainer {\n    display: flex;\n    max-width: 200px;\n    padding: 30px;\n    background-color: #07c4dd;\n    border: 1px solid black;\n  }\n\n  #userlist #addTodoBtnContainer {\n    display: flex;\n    align-items: center;\n    gap: 5px;\n    margin: 27px 0 11px 26px;\n  }\n\n  #task {\n    display: flex;\n    align-items: center;\n    gap: 5px;\n    margin: 27px 0 11px 26px;\n  }\n\n  #userlist #addTodoBtnContainer svg {\n    background-color: #dc2626;\n    border-radius: 50%;\n    fill: white;\n  }\n\n  #userlist #addTodoBtnContainer :hover {\n    cursor: pointer;\n    -webkit-transform: scale(1.09);\n  }\n\n  #userlist #addTodoBtnContainer button {\n    border: 0;\n    font-size: 1.3rem;\n    color: #b91c1c;\n    background-color: inherit;\n    transition: 0.3s;\n  }\n\n  #userlist #addTodoBtnContainer button:hover {\n    cursor: pointer;\n    -webkit-transform: scale(1.09);\n  }\n\n  .inner_container #form {\n    background-color: #64748b;\n    border-radius: 10px;\n    max-height: 200px;\n    max-width: 515px !important;\n    height: 170px;\n    display: none;\n    max-width: 480px;\n    margin: 10px 10px 0 10px;\n  }\n\n  div.inputNewprojectFormName {\n    display: none;\n    background-color: #cee3e3;\n    max-width: 300px;\n    max-height: 300px;\n    border-radius: 10px;\n    padding: 25px;\n    text-align: center;\n    margin: 60px 0 0 0;\n    box-shadow: 0px 9px 3px 0px;\n  }\n\n  .inputNewprojectFormName h2 {\n    margin: 0 0 10px 0;\n  }\n\n  .inputNewprojectFormName .inputNewProjectName {\n    max-width: 300px;\n    max-height: 35px;\n    padding: 14px;\n    border: none;\n    border-radius: 7px;\n  }\n\n  input.SaveProjectName {\n    padding: 9px;\n    border: none;\n    border-radius: 8px;\n    max-width: 100px;\n    height: 40px;\n    font-size: 19px;\n  }\n\n  .projectNameSaverBtnContainer {\n    margin: 10px 0;\n  }\n\n  .projectNameSaverBtnContainer button {\n    padding: 9px;\n    border: none;\n    border-radius: 8px;\n    width: 100px;\n    height: 40px;\n    font-size: 19px;\n  }\n\n  .inner_container #ProjectForm {\n    background-color: #64748b;\n    border-radius: 10px;\n    max-height: 134px;\n    max-width: 515px;\n    display: none;\n    max-width: 500px;\n    margin: 9px 10px 0 23px;\n  }\n\n  .projectFormDetails {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    padding: 10px;\n    height: 80px;\n  }\n\n  div.priorityDateOnLargeScreen {\n    display: flex;\n    position: relative;\n    top: 0;\n    max-width: 200px;\n    flex-direction: column;\n  }\n\n  .projectInputContainer {\n    max-width: 200px;\n  }\n\n  .projectInputContainer p input {\n    max-width: 200px;\n  }\n\n  .innerTaskContainer .edit {\n    max-width: 140px;\n  }\n\n  .projectInputContainer .PdescriptionInputContainer {\n    margin: 0;\n  }\n\n  input#ProjectdatePicker {\n    padding: 2px;\n    border-radius: 5px;\n    border: none;\n    height: 32px;\n    font-size: 0.9rem;\n    font-weight: 700;\n    background: #d4d4d8;\n    text-align: center;\n  }\n\n  select#projectPriority {\n    background-color: #44403c;\n    color: #fafafa;\n    font-size: 0.85rem;\n    font-weight: 600;\n    height: 35px;\n  }\n\n\n  div.projectButtonsContainer button {\n    border: none;\n    border-radius: 7px;\n    padding: 9px;\n    font-size: 1rem;\n    font-weight: 600;\n  }\n\n\n  div#configPriorityDateOnMobile {\n    display: flex;\n    flex-direction: column;\n    max-width: 200px;\n    position: static;\n  }\n\n  #configPriorityDateOnMobile #priority,\n  #datePicker {\n    padding: 2px;\n    border-radius: 6px;\n    max-width: 104px;\n    min-width: 80px;\n  }\n\n  #ProjectForm .footer {\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n    padding: 0 10px;\n    gap: 0;\n  }\n\n  #ProjectForm .projectButtonsContainer {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    padding: 0 10px;\n    gap: 0;\n  }\n\n  #form .formDetails {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    padding: 10px;\n    margin: 0;\n  }\n\n  #formFooterOnMobile {\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n    padding: 0 10px;\n  }\n\n  #formFooterOnMobile .buttons {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    padding: 0 10px;\n    margin: 0;\n    gap: 0;\n  }\n\n  .priorityDateLargeScreen {\n    display: flex;\n    flex-direction: column;\n  }\n\n  #form .inputs {\n    display: flex;\n    flex-direction: column;\n    max-width: 150px;\n  }\n\n  #form .first-inputContainer input,\n  .PtitleInputContainer input {\n    max-width: 305px;\n    max-height: 40px;\n    border: none;\n    outline: none;\n    color: white;\n    /* margin: 10px 0; */\n    background-color: inherit;\n  }\n\n  #form .first-inputContainer input, .second-inputContainer input {\n    max-width: 305px;\n    max-height: 40px;\n    margin: 0;\n    font-size: 1.1rem;\n  }\n\n  #form .second-inputContainer input,\n  .PdescriptionInputContainer input {\n    max-width: 307px;\n    max-height: 40px;\n    border: none;\n    outline: none;\n    color: white;\n    background-color: inherit;\n    margin: 0;\n  }\n\n  #form .other-options-on-forms button,\n  #configPriorityDateOnMobile #priority,\n  #datePicker {\n    padding: 4px;\n    border-radius: 6px;\n    max-width: 104px;\n    min-width: 80px;\n  }\n}\n\n@media (min-width: 551px) and (max-width: 768px) {\n  body main {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n  }\n\n  main header {\n    background-color: #fda4af;\n    text-align: center;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    gap: 10px;\n    height: 100px;\n  }\n\n  main aside {\n    display: none;\n    border-radius: 5px;\n    background-color: #e2e8f0;\n    z-index: 2;\n  }\n\n  aside ul,\n  ul select {\n    display: flex;\n    flex-direction: column;\n    /* color: white; */\n    fill: #78350f;\n  }\n\n  li.inbox {\n    font-size: 1.4rem;\n    color: white;\n  }\n\n  li#addNewProjectEl {\n    margin: 0;\n    font-size: 1.3rem;\n    color: white;\n  }\n\n  select#project-dropdown {\n    background-color: inherit;\n  }\n\n  main #Container {\n    display: flex;\n    flex-direction: column;\n    flex-wrap: wrap;\n    border-radius: 5px;\n    z-index: 1;\n  }\n\n  header .menuController {\n    display: block;\n    width: 40px;\n    height: 40px;\n  }\n\n  #toggleMenuIcon {\n    position: fixed;\n    top: 20px;\n    right: 20px;\n    width: 50px;\n    height: 50px;\n    background-color: #6f9e9e;\n    cursor: pointer;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    border-radius: 8px;\n    transition: top 0.3s;\n    z-index: 1000;\n\n    z-index: 1000;\n  }\n\n  #toggleMenuIcon::before {\n    content: \"\";\n    position: absolute;\n    width: 28px;\n    height: 2px;\n    background-color: #fff;\n    transform: translateY(-5px);\n    transition: 0.2s;\n  }\n\n  #toggleMenuIcon::after {\n    content: \"\";\n    position: absolute;\n    width: 28px;\n    height: 2px;\n    background-color: #fff;\n    transform: translateY(5px);\n    transition: 0.2s;\n  }\n\n  #toggleMenuIcon.active::before {\n    transform: translateY(0px) rotate(45deg);\n  }\n\n  #toggleMenuIcon.active::after {\n    transform: translateY(0px) rotate(-45deg);\n  }\n\n  aside#menu {\n    display: block;\n    position: fixed;\n    top: 0;\n    left: -220px;\n    width: 220px;\n    height: 100vh;\n    background-color: #bfc6c6;\n    transition: 0.3s;\n  }\n\n  aside#menu.active {\n    left: 0;\n  }\n\n  aside ul {\n    display: flex;\n    flex-direction: column;\n    color: white;\n    fill: white;\n  }\n\n  p#addNewProjectEl, p.inbox, select#project-dropdown {\n    /* color: white; */\n\n    font-weight: 600;\n  }\n\n  header .menuController svg {\n    display: block;\n    width: 40px;\n    height: 40px;\n    fill: white;\n    background-color: black;\n    border-radius: 10px;\n  }\n\n  #userlist #addTodoBtnContainer {\n    display: flex;\n    align-items: center;\n    gap: 5px;\n    margin: 27px 0 11px 26px;\n  }\n\n  #task {\n    display: flex;\n    align-items: center;\n    gap: 5px;\n    margin: 27px 0 11px 26px;\n  }\n\n  #userlist #addTodoBtnContainer svg {\n    background-color: #dc2626;\n    border-radius: 50%;\n    fill: white;\n  }\n\n  #userlist #addTodoBtnContainer :hover {\n    cursor: pointer;\n    -webkit-transform: scale(1.09);\n  }\n\n  #userlist #addTodoBtnContainer button {\n    border: 0;\n    font-size: 1.4rem;\n\n    color: #b91c1c;\n    background-color: inherit;\n  }\n\n  #userlist #addTodoBtnContainer button:hover {\n    cursor: pointer;\n    -webkit-transform: scale(1.09);\n  }\n\n  div.listContainer {\n    display: flex;\n    gap: 5px;\n    max-width: 714px;\n    word-wrap: break-word;\n    word-break: break-all;\n    white-space: normal;\n    overflow-wrap: break-word;\n    border-radius: 10px;\n    box-shadow: 1px 0px 3px 0px;\n    /* margin: 18px 60px; */\n    padding: 15px;\n  }\n\n  #userlist .intialTextDisplay {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    text-align: center;\n  }\n\n  .intialTextDisplay p {\n    max-width: 500px;\n    display: flex;\n    max-width: 500px;\n    flex-direction: column;\n    flex-wrap: wrap;\n  }\n\n  .intialTextDisplay img {\n    width: 100%;\n    height: auto;\n    padding: 20px;\n    border-radius: 41px;\n    object-fit: contain;\n  }\n\n  .inner_container #form {\n    background-color: #64748b;\n    border-radius: 10px;\n    height: 160px;\n    display: none;\n    max-width: 700px;\n\n    margin: 17px;\n  }\n\n  #form div.formDetails {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n\n    padding: 10px;\n    margin: 0;\n  }\n\n  .priorityDateLargeScreen {\n    display: none;\n  }\n\n  #form .inputs {\n    max-width: 150px;\n  }\n\n  #form .first-inputContainer input,\n  .PtitleInputContainer input,\n  #form .second-inputContainer input,\n  .PdescriptionInputContainer input {\n    max-width: 600px;\n    height: 25px;\n    border: none;\n    outline: none;\n    color: white;\n    margin: 10px 0 0 0;\n    background-color: inherit;\n  }\n\n  p.second-inputContainer {\n    margin: 0;\n  }\n\n  #form .buttons {\n    display: flex;\n    margin: 1px 23px;\n  }\n\n  #configPriorityDateOnMobile {\n    display: flex;\n    flex-direction: column;\n    position: static;\n  }\n\n  #form .other-options-on-forms button,\n  #priority,\n  #datePicker {\n    padding: 7px;\n    border-radius: 9px;\n  }\n\n  form#ProjectForm {\n    background-color: #64748b;\n    border-radius: 10px;\n    height: 160px;\n    display: none;\n    max-width: 693px;\n    padding-left: 1rem;\n    /* margin: 9px 61px; */\n  }\n\n  div.projectFormDetails {\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    top: 0;\n  }\n\n  */ .projectButtonsContainer {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n  }\n\n  select#priority {\n    padding: 8px;\n    border-radius: 9px;\n  }\n\n  select#priority option {\n    color: white;\n    font-weight: 700;\n  }\n\n  input#datePicker {\n    padding: 3px;\n    border-radius: 9px;\n  }\n}\n\n\n@media (min-width: 769px) and (max-width: 1000px) {\n  body main {\n    display: grid;\n  }\n\n  main header {\n    grid-area: 1 / 2 / 2 / 6;\n\n    background-color: #fda4af;\n    text-align: center;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    gap: 10px;\n  }\n\n  main aside {\n    border-radius: 5px;\n    background-color: #e2e8f0;\n  }\n\n  main #Container {\n    display: flex;\n    flex-direction: column;\n    flex-wrap: wrap;\n    border-radius: 5px;\n    z-index: 1;\n  }\n\n  header .menuController {\n    display: block;\n    width: 40px;\n    height: 40px;\n  }\n\n  header .menuController svg {\n    display: block;\n    width: 40px;\n    height: 40px;\n    fill: white;\n    background-color: black;\n    border-radius: 10px;\n  }\n\n\n\n\n  #userlist .intialTextDisplay {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    text-align: center;\n  }\n\n  #userlist .intialTextDisplay p {\n    font-size: 1.2rem;\n    text-align: center;\n    font-weight: 500;\n    margin: 10px 0 0 0;\n    max-width: 600px;\n  }\n\n  #userlist #addTodoBtnContainer {\n    display: none;\n    align-items: center;\n    gap: 5px;\n    margin: 27px 0 11px 26px;\n  }\n\n  #task {\n    display: flex;\n    align-items: center;\n    gap: 5px;\n    margin: 27px 0 11px 26px;\n  }\n\n  #userlist #addTodoBtnContainer svg {\n    background-color: #dc2626;\n    border-radius: 50%;\n    fill: white;\n  }\n\n  #userlist #addTodoBtnContainer :hover {\n    cursor: pointer;\n    -webkit-transform: scale(1.09);\n  }\n\n  #userlist #addTodoBtnContainer button {\n    border: 0;\n    font-size: 16px;\n    color: #b91c1c;\n    background-color: inherit;\n  }\n\n  #userlist #addTodoBtnContainer button:hover {\n    cursor: pointer;\n    -webkit-transform: scale(1.09);\n  }\n\n  div.listContainer {\n    display: flex;\n    gap: 5px;\n    max-width: 714px;\n    word-break: break-all;\n    white-space: normal;\n    overflow-wrap: break-word;\n    border-radius: 10px;\n    box-shadow: 1px 0px 3px 0px;\n    /* margin: 18px 60px; */\n    padding: 15px;\n  }\n\n  .inner_container #form {\n    background-color: #64748b;\n    border-radius: 10px;\n    height: 180px;\n    display: none;\n    max-width: 750px;\n\n    margin: 17px;\n  }\n\n  #form div.formDetails {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n\n    padding: 9px 20px;\n    margin: 0;\n  }\n\n  .priorityDateLargeScreen {\n    display: none;\n  }\n\n  #form .inputs {\n    max-width: 150px;\n  }\n\n  #form .first-inputContainer input,\n  .PtitleInputContainer input {\n    max-width: 420px;\n    max-height: 60px;\n    border: none;\n    outline: none;\n    color: white;\n    background-color: inherit;\n    margin: 0;\n  }\n\n  #form .second-inputContainer input,\n  .PdescriptionInputContainer input {\n    max-width: 420px;\n    max-height: 60px;\n    border: none;\n    outline: none;\n    color: rgb(90, 77, 77);\n    background-color: inherit;\n    margin: 0;\n  }\n\n  #form .buttons {\n    display: flex;\n    justify-content: space-between;\n    margin: 1px 33px;\n  }\n\n  form#ProjectForm {\n    background-color: #64748b;\n    border-radius: 10px;\n    height: 160px;\n    display: none;\n    max-width: 693px;\n    padding-left: 1rem;\n  }\n\n  div.projectFormDetails {\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    top: 0;\n  }\n\n  div.priorityDateOnLargeScreen {\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n    align-items: center;\n    top: 0;\n  }\n\n  .projectButtonsContainer {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n  }\n\n  #configPriorityDateOnMobile {\n    display: flex;\n    flex-direction: column;\n    position: static;\n  }\n\n  #form .other-options-on-forms button,\n  #priority,\n  #datePicker {\n    padding: 8px;\n    border-radius: 6px;\n    border: none;\n  }\n\n\n}\n\nmain {\n  display: grid;\n  grid-template-columns: 250px 1fr;\n  grid-template-rows: 100px minmax(100vh, 600px);\n  ;\n}\n\nheader {\n  grid-area: 1 / 2 / 2 / 6;\n  background-color: #fda4af;\n  text-align: center;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-weight: 700;\n}\n\n.headerTextContent {\n  font-weight: 700;\n\n}\n\naside {\n  grid-area: 1/ 1/ 4/ 2;\n  border-radius: 5px;\n  background-color: #e2e8f0;\n}\n\n.sideBarContentContainer {\n  margin: 40px 0 0 20px;\n}\n\n#Container {\n  grid-area: 2 / 2 / 3 / 4;\n\n  display: grid;\n  grid-template-columns: 100px 650px minmax(100px, 350px);\n  border-radius: 5px;\n}\n\n.inner_container {\n  grid-area: 1 / 2 / 3 / 3;\n}\n\n.intialTextDisplay {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  padding: 10px;\n}\n\n.intialTextDisplay p {\n  font-size: 1.2rem;\n  text-align: center;\n  font-weight: 800;\n  color: #78350f;\n  margin: 10px 0 0 0;\n}\n\n.intialTextDisplay img {\n  width: 100%;\n  height: auto;\n  border-radius: 30px;\n  padding: 20px;\n}\n\n#addTodoBtnContainer {\n  display: none;\n}\n\n.empty {\n  grid-area: 1 / 3 / 5 / 4;\n  background-color: #f8f8f8;\n  background-image: url(\"./images/Todo-1.jpg\");\n  background-size: cover;\n  background-position: center;\n}\n\n.menuController {\n  display: none;\n  width: 40px;\n  height: 40px;\n}\n\n.checkBox {\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  width: 20px;\n  height: 20px;\n  border: 1px solid #ccc;\n  border-radius: 3px;\n  outline: none;\n  cursor: pointer;\n  position: relative;\n}\n\n.checkBox::before {\n  content: \"\";\n  display: block;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  font-size: 16px;\n  color: rgb(22, 252, 22);\n  opacity: 0;\n  transition: opacity 0.3s ease;\n}\n\n.checkBox:hover::before {\n  content: \"✓\";\n  opacity: 0.5;\n}\n\nsvg {\n  width: 34px;\n  height: 33px;\n  pointer-events: none;\n\n}\n\n#task {\n  display: flex;\n  align-items: center;\n  gap: 5px;\n  margin: 27px 0 11px 26px;\n}\n\n#task svg {\n  background-color: #dc2626;\n  border-radius: 50%;\n  fill: white;\n}\n\n#task :hover {\n  cursor: pointer;\n  -webkit-transform: scale(1.09);\n}\n\n#task button {\n  border: 0;\n  font-size: 1.4rem;\n  color: #b91c1c;\n  background-color: inherit;\n  font-weight: 700;\n}\n\n#task button:hover {\n  cursor: pointer;\n  -webkit-transform: scale(1.09);\n}\n\nbutton.deleteTask {\n  padding: 10px;\n  border: none;\n  border-radius: 7px;\n  font-size: 1.1rem;\n  background-color: #e0487c;\n  color: white;\n  transition: transform 0.2s ease-out;\n}\n\nbutton.deleteTask:hover {\n  transform: scale(1.05);\n  background-color: #4b0707;\n\n}\n\nbutton.deleteTask:active {\n  transform: scale(0.9);\n}\n\n.listContainer {\n  display: flex;\n  gap: 5px;\n  max-width: 714px;\n  word-break: break-all;\n  white-space: normal;\n  overflow-wrap: break-word;\n  border-radius: 10px;\n  box-shadow: 1px 0px 3px 0px;\n  margin: 18px 18px;\n  padding: 15px;\n  transition: transform 3ms ease;\n}\n\n.listContainer:hover {\n  transform: scale(1.01);\n}\n\n.priorityDateOnLargeScreen {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  max-width: 200px;\n}\n\n.projectButtonsContainer {\n  display: flex;\n  justify-content: space-between;\n  padding-inline: 18px\n}\n\n.projectButtonsContainer button {\n  border: none;\n  border-radius: 7px;\n  padding: 9px;\n  font-size: 1.2rem;\n  font-weight: 600;\n}\n\n.excluded {\n  color: red;\n}\n\n.taskContainer {\n  display: flex;\n  flex: 1;\n  justify-content: space-between;\n}\n\n.taskTitle,\n.newProject-task-title,\n.editableSaveTaskEl {\n  margin: 0;\n  font-size: 1.3rem;\n  text-decoration: none;\n  text-decoration-color: red;\n}\n\n.taskDescription,\n.newProject-description {\n  margin: 0;\n  font-size: 1.2rem;\n}\n\n.taskPriority {\n  font-size: 19px;\n  border-radius: 6px;\n  background-color: #573d3d;\n  padding: 6px;\n  margin: 0 0 7px;\n  color: white;\n  text-align: center;\n  width: 130px;\n}\n\n.taskPriority:hover {\n  transform: scale(1.05);\n  background-color: #9c1515;\n}\n\n\n.innerTaskHandler {\n  display: flex;\n  flex-direction: column;\n  justify-items: center;\n  justify-content: center;\n  align-items: center;\n  margin: 0px 15px 0 40px;\n}\n\naside ul li {\n  list-style: none;\n  display: inline-block;\n  width: 100%;\n  padding: 10px 20px;\n}\n\n.inbox-container {\n  display: flex;\n  align-items: center;\n  gap: 5px;\n  font-size: 1.3rem;\n}\n\n\n.inbox {\n  font-size: 1.4rem;\n}\n\n.inboxListContainer {\n  display: flex;\n  gap: 5px;\n}\n\n.inboxTaskContainer {\n  display: flex;\n  flex: 1;\n  justify-content: space-between;\n}\n\n.inboxTaskTitle {\n  margin: 0;\n  font-size: 18px;\n}\n\n.inboxTaskDescription {\n  margin: 0;\n  font-size: 14px;\n}\n\n.inboxTaskPriority {\n  margin: 0 20px 0 0;\n  font-size: 1.3rem;\n\n}\n\n.dueDate {\n  margin: 0;\n  font-size: 1.2rem;\n}\n\n.edit {\n  border: none;\n  outline: none;\n  font-size: 17px;\n  max-width: 110px;\n  margin: 0 0;\n}\n\n#projects h3 {\n  margin: 0 0 0 10px;\n}\n\n#form {\n  background-color: #64748b;\n  border-radius: 10px;\n  height: 170px;\n  display: none;\n  padding-left: 1rem;\n  margin: 10px 10px 0 0;\n}\n\n.formDetails {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin: 12px 15px;\n}\n\ninput#datePicker {\n  max-width: 133px;\n}\n\n.buttons {\n  display: flex;\n  justify-content: space-between;\n  margin: 1px 33px;\n}\n\n.buttons button {\n  border: none;\n  border-radius: 7px;\n  padding: 7px;\n  transition: transform 0.2s ease-out;\n}\n\n.buttons button:hover {\n  transform: scale(1.05);\n}\n\n#ProjectForm {\n  background-color: #64748b;\n  border-radius: 10px;\n  height: 166px;\n  display: none;\n  padding: 10px;\n  margin: 15px 15px 0 17px;\n}\n\n.projectFormDetails {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding-left: 1rem;\n  top: 0;\n}\n\n.first-inputContainer input,\n.PtitleInputContainer input {\n  max-width: 600px;\n  height: 37px;\n  border: none;\n  outline: none;\n  color: white;\n  margin: 10px 0 0 0;\n  background-color: inherit;\n}\n\n.task-title,\n.description {\n  width: 350px;\n  font-size: 1.1rem;\n\n}\n\n.first-inputContainer input::placeholder,\n.PtitleInputContainer input::placeholder {\n  color: white;\n  padding: 0 10px;\n  opacity: 1;\n}\n\n.second-inputContainer input,\n.PdescriptionInputContainer input {\n  max-width: 600px;\n  height: 37px;\n  border: none;\n  outline: none;\n  color: white;\n  background-color: inherit;\n  margin: 0;\n}\n\n.pTitle, .pDescription {\n  width: 350px;\n  font-size: 1.07rem;\n}\n\n.second-inputContainer input::placeholder,\n.PdescriptionInputContainer input::placeholder {\n  padding: 0 10px;\n  color: white;\n  opacity: 1;\n}\n\n.first-inputContainer,\n.second-inputContainer {\n  margin: 10px 0 0 0;\n  font-size: 1rem;\n}\n\n.submitBtn:active {\n  transform: active scale(1.1);\n}\n\n.other-options-on-forms button,\n#priority,\ninput#datePicker {\n  transition: transform 0.3s ease-in;\n  padding: 7px;\n  border-radius: 7px;\n  border: none;\n  background-color: #083344;\n  color: white;\n  font-size: 1.1rem;\n  font-weight: 600;\n}\n\n#priority {\n  margin: 10px 0 8px 0;\n}\n\n#projectPriority,\n.footer {\n  padding: 7px;\n  border-radius: 5px;\n  margin: 0 4px 5px 0;\n\n}\n\n\n\n#projectPriority, #projectPriority option {\n  background-color: #44403c;\n  color: #fafafa;\n  font-size: 1.2rem;\n  font-weight: 600;\n}\n\n\n\n.addProjectsContainer {\n  display: flex;\n\n  align-items: center;\n  gap: 10px;\n}\n\n.inbox-container:hover, .addProjectsContainer:hover, .project_text:hover, #project-dropdown:hover {\n  cursor: pointer;\n  -webkit-transform: scale(1.05);\n  text-decoration: underline;\n}\n\n\n.addProjectsContainer svg {\n  width: 25px;\n  height: 25px;\n}\n\n#addNewProjectEl {\n  margin: 0;\n  font-size: 1.3rem;\n}\n\n.project_text {\n  margin: 0 0 10px 17px;\n  display: flex;\n  align-self: center;\n  justify-self: center;\n  padding: 9px;\n  border-radius: 5px 0px 0px 5px;\n}\n\n\n#project-dropdown {\n  border: 0;\n  background-color: inherit;\n  font-size: 1.3rem;\n  font-weight: 550;\n  max-width: 200px;\n}\n\n\n#project-dropdown:focus {\n  border: none;\n  outline: none;\n}\n\n#newProjectsFormContainerEl {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  justify-items: center;\n}\n\n#ProjectsFormNameContainerEl {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  justify-items: center;\n}\n\n.inputNewprojectFormName {\n  display: none;\n  background-color: #cee3e3;\n  max-width: 400px;\n  max-height: 300px;\n  border-radius: 10px;\n  padding: 46px;\n  text-align: center;\n  margin: 60px 0 0 0;\n  box-shadow: 0px 9px 3px 0px;\n}\n\n.inputNewprojectFormName h2 {\n  margin: 0 0 10px 0;\n}\n\n.inputNewProjectName {\n  max-width: 350px;\n  max-height: 35px;\n  padding: 17px;\n  border: none;\n  border-radius: 7px;\n  font-size: 19px;\n}\n\ninput.SaveProjectName {\n  padding: 9px;\n  border: none;\n  border-radius: 8px;\n  max-width: 100px;\n  height: 40px;\n  font-size: 19px;\n  background-color: rgb(240, 59, 134);\n  color: white;\n  transition: transform 3ms ease;\n}\n\ninput.SaveProjectName:hover {\n  transform: scale(1.03)\n}\n\n.projectNameSaverBtnContainer {\n  margin: 10px 0;\n}\n\n.projectNameSaverBtnContainer button {\n  padding: 9px;\n  border: none;\n  border-radius: 8px;\n  width: 100px;\n  height: 40px;\n  font-size: 19px;\n}\n\n#ProjectsFormNameContainerEl .Cancel {\n  background-color: grey;\n  color: white;\n  transition: transform 3ms ease;\n\n}\n\n#ProjectsFormNameContainerEl .Cancel:hover {\n  transform: scale(1.03)\n}\n\n#newProjectTasksContainer {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n#newProjectTaskBtnWrapper {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n#newProjectTasksInnerContainer {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 5px;\n  margin: 10px;\n  box-shadow: #5c5555 1px 3px 3px 1px;\n  border-radius: 10px;\n  padding: 10px;\n  width: 95px;\n\n}\n\nsvg.addTask {\n  border-radius: 50%;\n  fill: wheat;\n  background-color: red;\n}\n\n.newProjectAddBtn {\n  border: 0;\n  background-color: inherit;\n  font-weight: 500;\n}\n\n#ProjectdatePicker {\n  padding: 2px;\n  border-radius: 5px;\n  border: none;\n  height: 32px;\n  padding: 2px;\n  border-radius: 5px;\n  border: none;\n  height: 32px;\n  font-size: 1.1rem;\n  font-weight: 700;\n  background: #f0f0f0;\n  text-align: center;\n}\n\n#ProjectdatePicker input[type='date'] {\n  fill: white;\n}\n\n#submitBtnForProject {\n  padding: 7px;\n  border-radius: 9px;\n  /* font-size: 1.2rem;\n  font-weight: 600; */\n}\n\n#submitBtnForProject:active {\n  transform: scale(1.1);\n}\n\n.cancelForProjectBtn {\n  padding: 7px;\n  border-radius: 9px;\n}"],"sourceRoot":""}]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzBHO0FBQ2pCO0FBQ087QUFDaEcsNENBQTRDLG1IQUFzQztBQUNsRiw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GLHlDQUF5QyxzRkFBK0I7QUFDeEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QjtBQUN2QjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHFCQUFxQjs7QUFFckI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCO0FBQzFCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QjtBQUN6Qjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQkFBMEI7QUFDMUI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCLG1DQUFtQztBQUM3RDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFJQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CO0FBQ3BCOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLE9BQU8saUZBQWlGLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxPQUFPLE1BQU0sWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsY0FBYyxXQUFXLE1BQU0sS0FBSyxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsY0FBYyxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksV0FBVyxVQUFVLFVBQVUsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsV0FBVyxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxZQUFZLFFBQVEsS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sTUFBTSxVQUFVLFlBQVksYUFBYSxXQUFXLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLE1BQU0sWUFBWSxhQUFhLFdBQVcsVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsWUFBWSxPQUFPLE1BQU0sWUFBWSxhQUFhLFdBQVcsVUFBVSxVQUFVLFlBQVksV0FBVyxNQUFNLE9BQU8sVUFBVSxZQUFZLGFBQWEsV0FBVyxNQUFNLE1BQU0sS0FBSyxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsV0FBVyxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLE1BQU0sTUFBTSxVQUFVLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxZQUFZLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxNQUFNLEtBQUssYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxXQUFXLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFVBQVUsYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksY0FBYyxXQUFXLFVBQVUsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksT0FBTyxRQUFRLFlBQVksV0FBVyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxPQUFPLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksTUFBTSxPQUFPLEtBQUssS0FBSyxVQUFVLE1BQU0sS0FBSyxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLFVBQVUsS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxNQUFNLEtBQUssWUFBWSxhQUFhLFdBQVcsVUFBVSxhQUFhLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxjQUFjLGFBQWEsV0FBVyxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxPQUFPLE1BQU0sWUFBWSxhQUFhLFdBQVcsVUFBVSxVQUFVLFlBQVksV0FBVyxNQUFNLE1BQU0sWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLE9BQU8sVUFBVSxZQUFZLFdBQVcsT0FBTyxNQUFNLEtBQUssVUFBVSxZQUFZLGNBQWMsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxhQUFhLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxNQUFNLEtBQUssWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLFdBQVcsVUFBVSxZQUFZLFdBQVcsWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLGNBQWMsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksTUFBTSxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxPQUFPLE9BQU8sVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLE1BQU0sVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksYUFBYSxRQUFRLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksUUFBUSxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxPQUFPLEtBQUssVUFBVSxVQUFVLE9BQU8sS0FBSyxZQUFZLGNBQWMsT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsTUFBTSxNQUFNLFlBQVksV0FBVyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxNQUFNLFVBQVUsYUFBYSxPQUFPLE1BQU0sVUFBVSxVQUFVLFVBQVUsTUFBTSxNQUFNLFlBQVksV0FBVyxVQUFVLFVBQVUsVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxPQUFPLE1BQU0sVUFBVSxVQUFVLFVBQVUsTUFBTSxNQUFNLFlBQVksV0FBVyxPQUFPLEtBQUssWUFBWSxPQUFPLE9BQU8sWUFBWSxXQUFXLFlBQVksV0FBVyxZQUFZLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sTUFBTSxVQUFVLFlBQVksY0FBYyxTQUFTLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxTQUFTLEtBQUssV0FBVyxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLFFBQVEsS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxXQUFXLFlBQVksUUFBUSxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxRQUFRLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLFdBQVcsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxLQUFLLE1BQU0sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxXQUFXLFVBQVUsVUFBVSxPQUFPLEtBQUssWUFBWSxXQUFXLGFBQWEsT0FBTyxLQUFLLEtBQUssTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksYUFBYSxXQUFXLFdBQVcsTUFBTSxLQUFLLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxNQUFNLE9BQU8sT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFL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QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxpRUFBaUU7O0FBRWpFO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHdCQUF3QjtBQUN4Qjs7QUFFQSxzREFBc0Q7QUFDdEQsMERBQTBEO0FBQzFEOztBQUVPO0FBQ1A7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLHFDQUFxQzs7QUFFckM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBLFFBQVE7QUFDUjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtB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OztXQ2xCQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7Ozs7O1dDckJBOzs7Ozs7Ozs7Ozs7O0FDQTJCO0FBQ0U7QUFDRztBQUNNIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlcy5jc3MiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovLy8uL3NyYy9zdHlsZXMuY3NzPzQ0YjIiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZG9tLUVsLTIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RvbS1FbC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVzcG9uc2l2ZS5qcyIsIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovLy8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi9pbWFnZXMvVG9kby0xLmpwZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgYm9keSB7XG4gIHBhZGRpbmc6IDA7XG4gIG1hcmdpbjogMDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxuOnJvb3Qge1xuICAtLWhvdmVyLWNvbG9yOiAjZmRhNGFmO1xuICAtLWJhY2tncm91bmQtY29sb3I6ICM2ZjllOWU7XG59XG5cbioge1xuICBwYWRkaW5nOiAwO1xuICBtYXJnaW46IDA7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGNvbG9yOiAjNzgzNTBmO1xuICBmb250LWZhbWlseTogXCJSb2JvdG9cIiwgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogNTUwcHgpIHtcbiAgYm9keSBtYWluIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgei1pbmRleDogMTtcbiAgfVxuXG4gIG1haW4gaGVhZGVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmRhNGFmO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgZ2FwOiAxMHB4O1xuICB9XG5cbiAgI3RvZ2dsZU1lbnVJY29uIHtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgdG9wOiAxMDBweDtcbiAgICByaWdodDogMTBweDtcbiAgICB3aWR0aDogNTBweDtcbiAgICBoZWlnaHQ6IDUwcHg7XG4gICAgLyogXG4gICAgdG9wOiAxMDZweDtcbiAgICByaWdodDogMTBweDtcbiAgICB3aWR0aDogNTBweDsgKi9cbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNmI4ODg4O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xuICAgIHRyYW5zaXRpb246IHRvcCAwLjNzO1xuXG4gICAgei1pbmRleDogMTAwMDtcbiAgfVxuXG4gIGgxLmhlYWRlclRleHRDb250ZW50IHtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIHBhZGRpbmc6IDMwcHg7XG4gIH1cblxuICAjdG9nZ2xlTWVudUljb246OmJlZm9yZSB7XG4gICAgY29udGVudDogXCJcIjtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgd2lkdGg6IDI4cHg7XG4gICAgaGVpZ2h0OiAycHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTVweCk7XG4gICAgdHJhbnNpdGlvbjogMC4ycztcbiAgfVxuXG4gICN0b2dnbGVNZW51SWNvbjo6YWZ0ZXIge1xuICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHdpZHRoOiAyOHB4O1xuICAgIGhlaWdodDogMnB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDVweCk7XG4gICAgdHJhbnNpdGlvbjogMC4ycztcbiAgfVxuXG4gICN0b2dnbGVNZW51SWNvbi5hY3RpdmU6OmJlZm9yZSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDBweCkgcm90YXRlKDQ1ZGVnKTtcbiAgfVxuXG4gICN0b2dnbGVNZW51SWNvbi5hY3RpdmU6OmFmdGVyIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMHB4KSByb3RhdGUoLTQ1ZGVnKTtcbiAgfVxuXG4gIGFzaWRlI21lbnUge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogLTIyMHB4O1xuICAgIHdpZHRoOiAyMjBweDtcbiAgICBoZWlnaHQ6IDEwMHZoO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBmaWx0ZXI6IHdoaXRlO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM3OTg5YTE7XG4gICAgdHJhbnNpdGlvbjogMC4zcztcbiAgICB6LWluZGV4OiAxMDAwO1xuICAgIGZpbGw6IHdoaXRlO1xuICB9XG5cbiAgYXNpZGUjbWVudS5hY3RpdmUge1xuICAgIGxlZnQ6IDA7XG4gIH1cblxuICBtYWluIGFzaWRlIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTJlOGYwO1xuICB9XG5cbiAgcCNhZGROZXdQcm9qZWN0RWwsIHAuaW5ib3gsIHNlbGVjdCNwcm9qZWN0LWRyb3Bkb3duIHtcbiAgICBjb2xvcjogd2hpdGU7XG4gIH1cblxuICBtYWluICNDb250YWluZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICB9XG5cbiAgaGVhZGVyIC5tZW51Q29udHJvbGxlciB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgd2lkdGg6IDQwcHg7XG4gICAgaGVpZ2h0OiA0MHB4O1xuICB9XG5cbiAgaGVhZGVyIC5tZW51Q29udHJvbGxlciBzdmcge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHdpZHRoOiA0MHB4O1xuICAgIGhlaWdodDogNDBweDtcbiAgICBmaWxsOiB3aGl0ZTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICB9XG5cbiAgI3VzZXJsaXN0IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgbWF4LXdpZHRoOiA1NTBweDtcbiAgfVxuXG4gIGRpdi5saXN0Q29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGdhcDogNXB4O1xuICAgIG1heC13aWR0aDogNTE1cHg7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICBib3gtc2hhZG93OiAxcHggMHB4IDNweCAwcHg7XG4gICAgbWFyZ2luOiAxNHB4IDE0cHggMCAxOXB4O1xuICAgIHdvcmQtd3JhcDogYnJlYWstd29yZDtcbiAgICB3b3JkLWJyZWFrOiBicmVhay1hbGw7XG4gICAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcbiAgICBvdmVyZmxvdy13cmFwOiBicmVhay13b3JkO1xuXG4gICAgcGFkZGluZzogMTBweDtcbiAgfVxuXG4gICN1c2VybGlzdCAuaW50aWFsVGV4dERpc3BsYXkge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxuXG4gIC5pbnRpYWxUZXh0RGlzcGxheSBpbWcge1xuICAgIG1heC13aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IGF1dG87XG4gICAgcGFkZGluZzogMThweDtcbiAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xuICAgIG9iamVjdC1maXQ6IGNvbnRhaW47XG4gIH1cblxuICAucG9wVXBDb250YWluZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgbWF4LXdpZHRoOiAyMDBweDtcbiAgICBwYWRkaW5nOiAzMHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMwN2M0ZGQ7XG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XG4gIH1cblxuICAjdXNlcmxpc3QgI2FkZFRvZG9CdG5Db250YWluZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBnYXA6IDVweDtcbiAgICBtYXJnaW46IDI3cHggMCAxMXB4IDI2cHg7XG4gIH1cblxuICAjdGFzayB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGdhcDogNXB4O1xuICAgIG1hcmdpbjogMjdweCAwIDExcHggMjZweDtcbiAgfVxuXG4gICN1c2VybGlzdCAjYWRkVG9kb0J0bkNvbnRhaW5lciBzdmcge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNkYzI2MjY7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIGZpbGw6IHdoaXRlO1xuICB9XG5cbiAgI3VzZXJsaXN0ICNhZGRUb2RvQnRuQ29udGFpbmVyIDpob3ZlciB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxLjA5KTtcbiAgfVxuXG4gICN1c2VybGlzdCAjYWRkVG9kb0J0bkNvbnRhaW5lciBidXR0b24ge1xuICAgIGJvcmRlcjogMDtcbiAgICBmb250LXNpemU6IDEuM3JlbTtcbiAgICBjb2xvcjogI2I5MWMxYztcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmhlcml0O1xuICAgIHRyYW5zaXRpb246IDAuM3M7XG4gIH1cblxuICAjdXNlcmxpc3QgI2FkZFRvZG9CdG5Db250YWluZXIgYnV0dG9uOmhvdmVyIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEuMDkpO1xuICB9XG5cbiAgLmlubmVyX2NvbnRhaW5lciAjZm9ybSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzY0NzQ4YjtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIG1heC1oZWlnaHQ6IDIwMHB4O1xuICAgIG1heC13aWR0aDogNTE1cHggIWltcG9ydGFudDtcbiAgICBoZWlnaHQ6IDE3MHB4O1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgbWF4LXdpZHRoOiA0ODBweDtcbiAgICBtYXJnaW46IDEwcHggMTBweCAwIDEwcHg7XG4gIH1cblxuICBkaXYuaW5wdXROZXdwcm9qZWN0Rm9ybU5hbWUge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2NlZTNlMztcbiAgICBtYXgtd2lkdGg6IDMwMHB4O1xuICAgIG1heC1oZWlnaHQ6IDMwMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgcGFkZGluZzogMjVweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbWFyZ2luOiA2MHB4IDAgMCAwO1xuICAgIGJveC1zaGFkb3c6IDBweCA5cHggM3B4IDBweDtcbiAgfVxuXG4gIC5pbnB1dE5ld3Byb2plY3RGb3JtTmFtZSBoMiB7XG4gICAgbWFyZ2luOiAwIDAgMTBweCAwO1xuICB9XG5cbiAgLmlucHV0TmV3cHJvamVjdEZvcm1OYW1lIC5pbnB1dE5ld1Byb2plY3ROYW1lIHtcbiAgICBtYXgtd2lkdGg6IDMwMHB4O1xuICAgIG1heC1oZWlnaHQ6IDM1cHg7XG4gICAgcGFkZGluZzogMTRweDtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgYm9yZGVyLXJhZGl1czogN3B4O1xuICB9XG5cbiAgaW5wdXQuU2F2ZVByb2plY3ROYW1lIHtcbiAgICBwYWRkaW5nOiA5cHg7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgICBtYXgtd2lkdGg6IDEwMHB4O1xuICAgIGhlaWdodDogNDBweDtcbiAgICBmb250LXNpemU6IDE5cHg7XG4gIH1cblxuICAucHJvamVjdE5hbWVTYXZlckJ0bkNvbnRhaW5lciB7XG4gICAgbWFyZ2luOiAxMHB4IDA7XG4gIH1cblxuICAucHJvamVjdE5hbWVTYXZlckJ0bkNvbnRhaW5lciBidXR0b24ge1xuICAgIHBhZGRpbmc6IDlweDtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xuICAgIHdpZHRoOiAxMDBweDtcbiAgICBoZWlnaHQ6IDQwcHg7XG4gICAgZm9udC1zaXplOiAxOXB4O1xuICB9XG5cbiAgLmlubmVyX2NvbnRhaW5lciAjUHJvamVjdEZvcm0ge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM2NDc0OGI7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICBtYXgtaGVpZ2h0OiAxMzRweDtcbiAgICBtYXgtd2lkdGg6IDUxNXB4O1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgbWF4LXdpZHRoOiA1MDBweDtcbiAgICBtYXJnaW46IDlweCAxMHB4IDAgMjNweDtcbiAgfVxuXG4gIC5wcm9qZWN0Rm9ybURldGFpbHMge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICBoZWlnaHQ6IDgwcHg7XG4gIH1cblxuICBkaXYucHJpb3JpdHlEYXRlT25MYXJnZVNjcmVlbiB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgdG9wOiAwO1xuICAgIG1heC13aWR0aDogMjAwcHg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgfVxuXG4gIC5wcm9qZWN0SW5wdXRDb250YWluZXIge1xuICAgIG1heC13aWR0aDogMjAwcHg7XG4gIH1cblxuICAucHJvamVjdElucHV0Q29udGFpbmVyIHAgaW5wdXQge1xuICAgIG1heC13aWR0aDogMjAwcHg7XG4gIH1cblxuICAuaW5uZXJUYXNrQ29udGFpbmVyIC5lZGl0IHtcbiAgICBtYXgtd2lkdGg6IDE0MHB4O1xuICB9XG5cbiAgLnByb2plY3RJbnB1dENvbnRhaW5lciAuUGRlc2NyaXB0aW9uSW5wdXRDb250YWluZXIge1xuICAgIG1hcmdpbjogMDtcbiAgfVxuXG4gIGlucHV0I1Byb2plY3RkYXRlUGlja2VyIHtcbiAgICBwYWRkaW5nOiAycHg7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBoZWlnaHQ6IDMycHg7XG4gICAgZm9udC1zaXplOiAwLjlyZW07XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICBiYWNrZ3JvdW5kOiAjZDRkNGQ4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxuXG4gIHNlbGVjdCNwcm9qZWN0UHJpb3JpdHkge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM0NDQwM2M7XG4gICAgY29sb3I6ICNmYWZhZmE7XG4gICAgZm9udC1zaXplOiAwLjg1cmVtO1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgaGVpZ2h0OiAzNXB4O1xuICB9XG5cblxuICBkaXYucHJvamVjdEJ1dHRvbnNDb250YWluZXIgYnV0dG9uIHtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgYm9yZGVyLXJhZGl1czogN3B4O1xuICAgIHBhZGRpbmc6IDlweDtcbiAgICBmb250LXNpemU6IDFyZW07XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgfVxuXG5cbiAgZGl2I2NvbmZpZ1ByaW9yaXR5RGF0ZU9uTW9iaWxlIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgbWF4LXdpZHRoOiAyMDBweDtcbiAgICBwb3NpdGlvbjogc3RhdGljO1xuICB9XG5cbiAgI2NvbmZpZ1ByaW9yaXR5RGF0ZU9uTW9iaWxlICNwcmlvcml0eSxcbiAgI2RhdGVQaWNrZXIge1xuICAgIHBhZGRpbmc6IDJweDtcbiAgICBib3JkZXItcmFkaXVzOiA2cHg7XG4gICAgbWF4LXdpZHRoOiAxMDRweDtcbiAgICBtaW4td2lkdGg6IDgwcHg7XG4gIH1cblxuICAjUHJvamVjdEZvcm0gLmZvb3RlciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBwYWRkaW5nOiAwIDEwcHg7XG4gICAgZ2FwOiAwO1xuICB9XG5cbiAgI1Byb2plY3RGb3JtIC5wcm9qZWN0QnV0dG9uc0NvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBwYWRkaW5nOiAwIDEwcHg7XG4gICAgZ2FwOiAwO1xuICB9XG5cbiAgI2Zvcm0gLmZvcm1EZXRhaWxzIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgbWFyZ2luOiAwO1xuICB9XG5cbiAgI2Zvcm1Gb290ZXJPbk1vYmlsZSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBwYWRkaW5nOiAwIDEwcHg7XG4gIH1cblxuICAjZm9ybUZvb3Rlck9uTW9iaWxlIC5idXR0b25zIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHBhZGRpbmc6IDAgMTBweDtcbiAgICBtYXJnaW46IDA7XG4gICAgZ2FwOiAwO1xuICB9XG5cbiAgLnByaW9yaXR5RGF0ZUxhcmdlU2NyZWVuIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIH1cblxuICAjZm9ybSAuaW5wdXRzIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgbWF4LXdpZHRoOiAxNTBweDtcbiAgfVxuXG4gICNmb3JtIC5maXJzdC1pbnB1dENvbnRhaW5lciBpbnB1dCxcbiAgLlB0aXRsZUlucHV0Q29udGFpbmVyIGlucHV0IHtcbiAgICBtYXgtd2lkdGg6IDMwNXB4O1xuICAgIG1heC1oZWlnaHQ6IDQwcHg7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIG91dGxpbmU6IG5vbmU7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIC8qIG1hcmdpbjogMTBweCAwOyAqL1xuICAgIGJhY2tncm91bmQtY29sb3I6IGluaGVyaXQ7XG4gIH1cblxuICAjZm9ybSAuZmlyc3QtaW5wdXRDb250YWluZXIgaW5wdXQsIC5zZWNvbmQtaW5wdXRDb250YWluZXIgaW5wdXQge1xuICAgIG1heC13aWR0aDogMzA1cHg7XG4gICAgbWF4LWhlaWdodDogNDBweDtcbiAgICBtYXJnaW46IDA7XG4gICAgZm9udC1zaXplOiAxLjFyZW07XG4gIH1cblxuICAjZm9ybSAuc2Vjb25kLWlucHV0Q29udGFpbmVyIGlucHV0LFxuICAuUGRlc2NyaXB0aW9uSW5wdXRDb250YWluZXIgaW5wdXQge1xuICAgIG1heC13aWR0aDogMzA3cHg7XG4gICAgbWF4LWhlaWdodDogNDBweDtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgb3V0bGluZTogbm9uZTtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogaW5oZXJpdDtcbiAgICBtYXJnaW46IDA7XG4gIH1cblxuICAjZm9ybSAub3RoZXItb3B0aW9ucy1vbi1mb3JtcyBidXR0b24sXG4gICNjb25maWdQcmlvcml0eURhdGVPbk1vYmlsZSAjcHJpb3JpdHksXG4gICNkYXRlUGlja2VyIHtcbiAgICBwYWRkaW5nOiA0cHg7XG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xuICAgIG1heC13aWR0aDogMTA0cHg7XG4gICAgbWluLXdpZHRoOiA4MHB4O1xuICB9XG59XG5cbkBtZWRpYSAobWluLXdpZHRoOiA1NTFweCkgYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIGJvZHkgbWFpbiB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB9XG5cbiAgbWFpbiBoZWFkZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZGE0YWY7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBnYXA6IDEwcHg7XG4gICAgaGVpZ2h0OiAxMDBweDtcbiAgfVxuXG4gIG1haW4gYXNpZGUge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNlMmU4ZjA7XG4gICAgei1pbmRleDogMjtcbiAgfVxuXG4gIGFzaWRlIHVsLFxuICB1bCBzZWxlY3Qge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAvKiBjb2xvcjogd2hpdGU7ICovXG4gICAgZmlsbDogIzc4MzUwZjtcbiAgfVxuXG4gIGxpLmluYm94IHtcbiAgICBmb250LXNpemU6IDEuNHJlbTtcbiAgICBjb2xvcjogd2hpdGU7XG4gIH1cblxuICBsaSNhZGROZXdQcm9qZWN0RWwge1xuICAgIG1hcmdpbjogMDtcbiAgICBmb250LXNpemU6IDEuM3JlbTtcbiAgICBjb2xvcjogd2hpdGU7XG4gIH1cblxuICBzZWxlY3QjcHJvamVjdC1kcm9wZG93biB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogaW5oZXJpdDtcbiAgfVxuXG4gIG1haW4gI0NvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgei1pbmRleDogMTtcbiAgfVxuXG4gIGhlYWRlciAubWVudUNvbnRyb2xsZXIge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHdpZHRoOiA0MHB4O1xuICAgIGhlaWdodDogNDBweDtcbiAgfVxuXG4gICN0b2dnbGVNZW51SWNvbiB7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIHRvcDogMjBweDtcbiAgICByaWdodDogMjBweDtcbiAgICB3aWR0aDogNTBweDtcbiAgICBoZWlnaHQ6IDUwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzZmOWU5ZTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgICB0cmFuc2l0aW9uOiB0b3AgMC4zcztcbiAgICB6LWluZGV4OiAxMDAwO1xuXG4gICAgei1pbmRleDogMTAwMDtcbiAgfVxuXG4gICN0b2dnbGVNZW51SWNvbjo6YmVmb3JlIHtcbiAgICBjb250ZW50OiBcIlwiO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB3aWR0aDogMjhweDtcbiAgICBoZWlnaHQ6IDJweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNXB4KTtcbiAgICB0cmFuc2l0aW9uOiAwLjJzO1xuICB9XG5cbiAgI3RvZ2dsZU1lbnVJY29uOjphZnRlciB7XG4gICAgY29udGVudDogXCJcIjtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgd2lkdGg6IDI4cHg7XG4gICAgaGVpZ2h0OiAycHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoNXB4KTtcbiAgICB0cmFuc2l0aW9uOiAwLjJzO1xuICB9XG5cbiAgI3RvZ2dsZU1lbnVJY29uLmFjdGl2ZTo6YmVmb3JlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMHB4KSByb3RhdGUoNDVkZWcpO1xuICB9XG5cbiAgI3RvZ2dsZU1lbnVJY29uLmFjdGl2ZTo6YWZ0ZXIge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwcHgpIHJvdGF0ZSgtNDVkZWcpO1xuICB9XG5cbiAgYXNpZGUjbWVudSB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAtMjIwcHg7XG4gICAgd2lkdGg6IDIyMHB4O1xuICAgIGhlaWdodDogMTAwdmg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2JmYzZjNjtcbiAgICB0cmFuc2l0aW9uOiAwLjNzO1xuICB9XG5cbiAgYXNpZGUjbWVudS5hY3RpdmUge1xuICAgIGxlZnQ6IDA7XG4gIH1cblxuICBhc2lkZSB1bCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBmaWxsOiB3aGl0ZTtcbiAgfVxuXG4gIHAjYWRkTmV3UHJvamVjdEVsLCBwLmluYm94LCBzZWxlY3QjcHJvamVjdC1kcm9wZG93biB7XG4gICAgLyogY29sb3I6IHdoaXRlOyAqL1xuXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgfVxuXG4gIGhlYWRlciAubWVudUNvbnRyb2xsZXIgc3ZnIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICB3aWR0aDogNDBweDtcbiAgICBoZWlnaHQ6IDQwcHg7XG4gICAgZmlsbDogd2hpdGU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgfVxuXG4gICN1c2VybGlzdCAjYWRkVG9kb0J0bkNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGdhcDogNXB4O1xuICAgIG1hcmdpbjogMjdweCAwIDExcHggMjZweDtcbiAgfVxuXG4gICN0YXNrIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZ2FwOiA1cHg7XG4gICAgbWFyZ2luOiAyN3B4IDAgMTFweCAyNnB4O1xuICB9XG5cbiAgI3VzZXJsaXN0ICNhZGRUb2RvQnRuQ29udGFpbmVyIHN2ZyB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2RjMjYyNjtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgZmlsbDogd2hpdGU7XG4gIH1cblxuICAjdXNlcmxpc3QgI2FkZFRvZG9CdG5Db250YWluZXIgOmhvdmVyIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEuMDkpO1xuICB9XG5cbiAgI3VzZXJsaXN0ICNhZGRUb2RvQnRuQ29udGFpbmVyIGJ1dHRvbiB7XG4gICAgYm9yZGVyOiAwO1xuICAgIGZvbnQtc2l6ZTogMS40cmVtO1xuXG4gICAgY29sb3I6ICNiOTFjMWM7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogaW5oZXJpdDtcbiAgfVxuXG4gICN1c2VybGlzdCAjYWRkVG9kb0J0bkNvbnRhaW5lciBidXR0b246aG92ZXIge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMS4wOSk7XG4gIH1cblxuICBkaXYubGlzdENvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBnYXA6IDVweDtcbiAgICBtYXgtd2lkdGg6IDcxNHB4O1xuICAgIHdvcmQtd3JhcDogYnJlYWstd29yZDtcbiAgICB3b3JkLWJyZWFrOiBicmVhay1hbGw7XG4gICAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcbiAgICBvdmVyZmxvdy13cmFwOiBicmVhay13b3JkO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgYm94LXNoYWRvdzogMXB4IDBweCAzcHggMHB4O1xuICAgIC8qIG1hcmdpbjogMThweCA2MHB4OyAqL1xuICAgIHBhZGRpbmc6IDE1cHg7XG4gIH1cblxuICAjdXNlcmxpc3QgLmludGlhbFRleHREaXNwbGF5IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH1cblxuICAuaW50aWFsVGV4dERpc3BsYXkgcCB7XG4gICAgbWF4LXdpZHRoOiA1MDBweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIG1heC13aWR0aDogNTAwcHg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBmbGV4LXdyYXA6IHdyYXA7XG4gIH1cblxuICAuaW50aWFsVGV4dERpc3BsYXkgaW1nIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IGF1dG87XG4gICAgcGFkZGluZzogMjBweDtcbiAgICBib3JkZXItcmFkaXVzOiA0MXB4O1xuICAgIG9iamVjdC1maXQ6IGNvbnRhaW47XG4gIH1cblxuICAuaW5uZXJfY29udGFpbmVyICNmb3JtIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjQ3NDhiO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgaGVpZ2h0OiAxNjBweDtcbiAgICBkaXNwbGF5OiBub25lO1xuICAgIG1heC13aWR0aDogNzAwcHg7XG5cbiAgICBtYXJnaW46IDE3cHg7XG4gIH1cblxuICAjZm9ybSBkaXYuZm9ybURldGFpbHMge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIG1hcmdpbjogMDtcbiAgfVxuXG4gIC5wcmlvcml0eURhdGVMYXJnZVNjcmVlbiB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuXG4gICNmb3JtIC5pbnB1dHMge1xuICAgIG1heC13aWR0aDogMTUwcHg7XG4gIH1cblxuICAjZm9ybSAuZmlyc3QtaW5wdXRDb250YWluZXIgaW5wdXQsXG4gIC5QdGl0bGVJbnB1dENvbnRhaW5lciBpbnB1dCxcbiAgI2Zvcm0gLnNlY29uZC1pbnB1dENvbnRhaW5lciBpbnB1dCxcbiAgLlBkZXNjcmlwdGlvbklucHV0Q29udGFpbmVyIGlucHV0IHtcbiAgICBtYXgtd2lkdGg6IDYwMHB4O1xuICAgIGhlaWdodDogMjVweDtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgb3V0bGluZTogbm9uZTtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgbWFyZ2luOiAxMHB4IDAgMCAwO1xuICAgIGJhY2tncm91bmQtY29sb3I6IGluaGVyaXQ7XG4gIH1cblxuICBwLnNlY29uZC1pbnB1dENvbnRhaW5lciB7XG4gICAgbWFyZ2luOiAwO1xuICB9XG5cbiAgI2Zvcm0gLmJ1dHRvbnMge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgbWFyZ2luOiAxcHggMjNweDtcbiAgfVxuXG4gICNjb25maWdQcmlvcml0eURhdGVPbk1vYmlsZSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIHBvc2l0aW9uOiBzdGF0aWM7XG4gIH1cblxuICAjZm9ybSAub3RoZXItb3B0aW9ucy1vbi1mb3JtcyBidXR0b24sXG4gICNwcmlvcml0eSxcbiAgI2RhdGVQaWNrZXIge1xuICAgIHBhZGRpbmc6IDdweDtcbiAgICBib3JkZXItcmFkaXVzOiA5cHg7XG4gIH1cblxuICBmb3JtI1Byb2plY3RGb3JtIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjQ3NDhiO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgaGVpZ2h0OiAxNjBweDtcbiAgICBkaXNwbGF5OiBub25lO1xuICAgIG1heC13aWR0aDogNjkzcHg7XG4gICAgcGFkZGluZy1sZWZ0OiAxcmVtO1xuICAgIC8qIG1hcmdpbjogOXB4IDYxcHg7ICovXG4gIH1cblxuICBkaXYucHJvamVjdEZvcm1EZXRhaWxzIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIHRvcDogMDtcbiAgfVxuXG4gICovIC5wcm9qZWN0QnV0dG9uc0NvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgfVxuXG4gIHNlbGVjdCNwcmlvcml0eSB7XG4gICAgcGFkZGluZzogOHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDlweDtcbiAgfVxuXG4gIHNlbGVjdCNwcmlvcml0eSBvcHRpb24ge1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBmb250LXdlaWdodDogNzAwO1xuICB9XG5cbiAgaW5wdXQjZGF0ZVBpY2tlciB7XG4gICAgcGFkZGluZzogM3B4O1xuICAgIGJvcmRlci1yYWRpdXM6IDlweDtcbiAgfVxufVxuXG5cbkBtZWRpYSAobWluLXdpZHRoOiA3NjlweCkgYW5kIChtYXgtd2lkdGg6IDEwMDBweCkge1xuICBib2R5IG1haW4ge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gIH1cblxuICBtYWluIGhlYWRlciB7XG4gICAgZ3JpZC1hcmVhOiAxIC8gMiAvIDIgLyA2O1xuXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZkYTRhZjtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGdhcDogMTBweDtcbiAgfVxuXG4gIG1haW4gYXNpZGUge1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTJlOGYwO1xuICB9XG5cbiAgbWFpbiAjQ29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgZmxleC13cmFwOiB3cmFwO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICB6LWluZGV4OiAxO1xuICB9XG5cbiAgaGVhZGVyIC5tZW51Q29udHJvbGxlciB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgd2lkdGg6IDQwcHg7XG4gICAgaGVpZ2h0OiA0MHB4O1xuICB9XG5cbiAgaGVhZGVyIC5tZW51Q29udHJvbGxlciBzdmcge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHdpZHRoOiA0MHB4O1xuICAgIGhlaWdodDogNDBweDtcbiAgICBmaWxsOiB3aGl0ZTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICB9XG5cblxuXG5cbiAgI3VzZXJsaXN0IC5pbnRpYWxUZXh0RGlzcGxheSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxuXG4gICN1c2VybGlzdCAuaW50aWFsVGV4dERpc3BsYXkgcCB7XG4gICAgZm9udC1zaXplOiAxLjJyZW07XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgbWFyZ2luOiAxMHB4IDAgMCAwO1xuICAgIG1heC13aWR0aDogNjAwcHg7XG4gIH1cblxuICAjdXNlcmxpc3QgI2FkZFRvZG9CdG5Db250YWluZXIge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBnYXA6IDVweDtcbiAgICBtYXJnaW46IDI3cHggMCAxMXB4IDI2cHg7XG4gIH1cblxuICAjdGFzayB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGdhcDogNXB4O1xuICAgIG1hcmdpbjogMjdweCAwIDExcHggMjZweDtcbiAgfVxuXG4gICN1c2VybGlzdCAjYWRkVG9kb0J0bkNvbnRhaW5lciBzdmcge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNkYzI2MjY7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIGZpbGw6IHdoaXRlO1xuICB9XG5cbiAgI3VzZXJsaXN0ICNhZGRUb2RvQnRuQ29udGFpbmVyIDpob3ZlciB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxLjA5KTtcbiAgfVxuXG4gICN1c2VybGlzdCAjYWRkVG9kb0J0bkNvbnRhaW5lciBidXR0b24ge1xuICAgIGJvcmRlcjogMDtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgY29sb3I6ICNiOTFjMWM7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogaW5oZXJpdDtcbiAgfVxuXG4gICN1c2VybGlzdCAjYWRkVG9kb0J0bkNvbnRhaW5lciBidXR0b246aG92ZXIge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMS4wOSk7XG4gIH1cblxuICBkaXYubGlzdENvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBnYXA6IDVweDtcbiAgICBtYXgtd2lkdGg6IDcxNHB4O1xuICAgIHdvcmQtYnJlYWs6IGJyZWFrLWFsbDtcbiAgICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xuICAgIG92ZXJmbG93LXdyYXA6IGJyZWFrLXdvcmQ7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICBib3gtc2hhZG93OiAxcHggMHB4IDNweCAwcHg7XG4gICAgLyogbWFyZ2luOiAxOHB4IDYwcHg7ICovXG4gICAgcGFkZGluZzogMTVweDtcbiAgfVxuXG4gIC5pbm5lcl9jb250YWluZXIgI2Zvcm0ge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM2NDc0OGI7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICBoZWlnaHQ6IDE4MHB4O1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgbWF4LXdpZHRoOiA3NTBweDtcblxuICAgIG1hcmdpbjogMTdweDtcbiAgfVxuXG4gICNmb3JtIGRpdi5mb3JtRGV0YWlscyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxuICAgIHBhZGRpbmc6IDlweCAyMHB4O1xuICAgIG1hcmdpbjogMDtcbiAgfVxuXG4gIC5wcmlvcml0eURhdGVMYXJnZVNjcmVlbiB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuXG4gICNmb3JtIC5pbnB1dHMge1xuICAgIG1heC13aWR0aDogMTUwcHg7XG4gIH1cblxuICAjZm9ybSAuZmlyc3QtaW5wdXRDb250YWluZXIgaW5wdXQsXG4gIC5QdGl0bGVJbnB1dENvbnRhaW5lciBpbnB1dCB7XG4gICAgbWF4LXdpZHRoOiA0MjBweDtcbiAgICBtYXgtaGVpZ2h0OiA2MHB4O1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBvdXRsaW5lOiBub25lO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmhlcml0O1xuICAgIG1hcmdpbjogMDtcbiAgfVxuXG4gICNmb3JtIC5zZWNvbmQtaW5wdXRDb250YWluZXIgaW5wdXQsXG4gIC5QZGVzY3JpcHRpb25JbnB1dENvbnRhaW5lciBpbnB1dCB7XG4gICAgbWF4LXdpZHRoOiA0MjBweDtcbiAgICBtYXgtaGVpZ2h0OiA2MHB4O1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBvdXRsaW5lOiBub25lO1xuICAgIGNvbG9yOiByZ2IoOTAsIDc3LCA3Nyk7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogaW5oZXJpdDtcbiAgICBtYXJnaW46IDA7XG4gIH1cblxuICAjZm9ybSAuYnV0dG9ucyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgbWFyZ2luOiAxcHggMzNweDtcbiAgfVxuXG4gIGZvcm0jUHJvamVjdEZvcm0ge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM2NDc0OGI7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICBoZWlnaHQ6IDE2MHB4O1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgbWF4LXdpZHRoOiA2OTNweDtcbiAgICBwYWRkaW5nLWxlZnQ6IDFyZW07XG4gIH1cblxuICBkaXYucHJvamVjdEZvcm1EZXRhaWxzIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIHRvcDogMDtcbiAgfVxuXG4gIGRpdi5wcmlvcml0eURhdGVPbkxhcmdlU2NyZWVuIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgdG9wOiAwO1xuICB9XG5cbiAgLnByb2plY3RCdXR0b25zQ29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB9XG5cbiAgI2NvbmZpZ1ByaW9yaXR5RGF0ZU9uTW9iaWxlIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgcG9zaXRpb246IHN0YXRpYztcbiAgfVxuXG4gICNmb3JtIC5vdGhlci1vcHRpb25zLW9uLWZvcm1zIGJ1dHRvbixcbiAgI3ByaW9yaXR5LFxuICAjZGF0ZVBpY2tlciB7XG4gICAgcGFkZGluZzogOHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgICBib3JkZXI6IG5vbmU7XG4gIH1cblxuXG59XG5cbm1haW4ge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDI1MHB4IDFmcjtcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxMDBweCBtaW5tYXgoMTAwdmgsIDYwMHB4KTtcbiAgO1xufVxuXG5oZWFkZXIge1xuICBncmlkLWFyZWE6IDEgLyAyIC8gMiAvIDY7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZGE0YWY7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG59XG5cbi5oZWFkZXJUZXh0Q29udGVudCB7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG5cbn1cblxuYXNpZGUge1xuICBncmlkLWFyZWE6IDEvIDEvIDQvIDI7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2UyZThmMDtcbn1cblxuLnNpZGVCYXJDb250ZW50Q29udGFpbmVyIHtcbiAgbWFyZ2luOiA0MHB4IDAgMCAyMHB4O1xufVxuXG4jQ29udGFpbmVyIHtcbiAgZ3JpZC1hcmVhOiAyIC8gMiAvIDMgLyA0O1xuXG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMTAwcHggNjUwcHggbWlubWF4KDEwMHB4LCAzNTBweCk7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cblxuLmlubmVyX2NvbnRhaW5lciB7XG4gIGdyaWQtYXJlYTogMSAvIDIgLyAzIC8gMztcbn1cblxuLmludGlhbFRleHREaXNwbGF5IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDEwcHg7XG59XG5cbi5pbnRpYWxUZXh0RGlzcGxheSBwIHtcbiAgZm9udC1zaXplOiAxLjJyZW07XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgY29sb3I6ICM3ODM1MGY7XG4gIG1hcmdpbjogMTBweCAwIDAgMDtcbn1cblxuLmludGlhbFRleHREaXNwbGF5IGltZyB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IGF1dG87XG4gIGJvcmRlci1yYWRpdXM6IDMwcHg7XG4gIHBhZGRpbmc6IDIwcHg7XG59XG5cbiNhZGRUb2RvQnRuQ29udGFpbmVyIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuLmVtcHR5IHtcbiAgZ3JpZC1hcmVhOiAxIC8gMyAvIDUgLyA0O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjhmOGY4O1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19ffSk7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbn1cblxuLm1lbnVDb250cm9sbGVyIHtcbiAgZGlzcGxheTogbm9uZTtcbiAgd2lkdGg6IDQwcHg7XG4gIGhlaWdodDogNDBweDtcbn1cblxuLmNoZWNrQm94IHtcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xuICAtbW96LWFwcGVhcmFuY2U6IG5vbmU7XG4gIHdpZHRoOiAyMHB4O1xuICBoZWlnaHQ6IDIwcHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgb3V0bGluZTogbm9uZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5jaGVja0JveDo6YmVmb3JlIHtcbiAgY29udGVudDogXCJcIjtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA1MCU7XG4gIGxlZnQ6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgY29sb3I6IHJnYigyMiwgMjUyLCAyMik7XG4gIG9wYWNpdHk6IDA7XG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMC4zcyBlYXNlO1xufVxuXG4uY2hlY2tCb3g6aG92ZXI6OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwi4pyTXCI7XG4gIG9wYWNpdHk6IDAuNTtcbn1cblxuc3ZnIHtcbiAgd2lkdGg6IDM0cHg7XG4gIGhlaWdodDogMzNweDtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG5cbn1cblxuI3Rhc2sge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDVweDtcbiAgbWFyZ2luOiAyN3B4IDAgMTFweCAyNnB4O1xufVxuXG4jdGFzayBzdmcge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGMyNjI2O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGZpbGw6IHdoaXRlO1xufVxuXG4jdGFzayA6aG92ZXIge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxLjA5KTtcbn1cblxuI3Rhc2sgYnV0dG9uIHtcbiAgYm9yZGVyOiAwO1xuICBmb250LXNpemU6IDEuNHJlbTtcbiAgY29sb3I6ICNiOTFjMWM7XG4gIGJhY2tncm91bmQtY29sb3I6IGluaGVyaXQ7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG59XG5cbiN0YXNrIGJ1dHRvbjpob3ZlciB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEuMDkpO1xufVxuXG5idXR0b24uZGVsZXRlVGFzayB7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGJvcmRlcjogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogN3B4O1xuICBmb250LXNpemU6IDEuMXJlbTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2UwNDg3YztcbiAgY29sb3I6IHdoaXRlO1xuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4ycyBlYXNlLW91dDtcbn1cblxuYnV0dG9uLmRlbGV0ZVRhc2s6aG92ZXIge1xuICB0cmFuc2Zvcm06IHNjYWxlKDEuMDUpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNGIwNzA3O1xuXG59XG5cbmJ1dHRvbi5kZWxldGVUYXNrOmFjdGl2ZSB7XG4gIHRyYW5zZm9ybTogc2NhbGUoMC45KTtcbn1cblxuLmxpc3RDb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBnYXA6IDVweDtcbiAgbWF4LXdpZHRoOiA3MTRweDtcbiAgd29yZC1icmVhazogYnJlYWstYWxsO1xuICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xuICBvdmVyZmxvdy13cmFwOiBicmVhay13b3JkO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBib3gtc2hhZG93OiAxcHggMHB4IDNweCAwcHg7XG4gIG1hcmdpbjogMThweCAxOHB4O1xuICBwYWRkaW5nOiAxNXB4O1xuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gM21zIGVhc2U7XG59XG5cbi5saXN0Q29udGFpbmVyOmhvdmVyIHtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjAxKTtcbn1cblxuLnByaW9yaXR5RGF0ZU9uTGFyZ2VTY3JlZW4ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgbWF4LXdpZHRoOiAyMDBweDtcbn1cblxuLnByb2plY3RCdXR0b25zQ29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBwYWRkaW5nLWlubGluZTogMThweFxufVxuXG4ucHJvamVjdEJ1dHRvbnNDb250YWluZXIgYnV0dG9uIHtcbiAgYm9yZGVyOiBub25lO1xuICBib3JkZXItcmFkaXVzOiA3cHg7XG4gIHBhZGRpbmc6IDlweDtcbiAgZm9udC1zaXplOiAxLjJyZW07XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG5cbi5leGNsdWRlZCB7XG4gIGNvbG9yOiByZWQ7XG59XG5cbi50YXNrQ29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleDogMTtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuXG4udGFza1RpdGxlLFxuLm5ld1Byb2plY3QtdGFzay10aXRsZSxcbi5lZGl0YWJsZVNhdmVUYXNrRWwge1xuICBtYXJnaW46IDA7XG4gIGZvbnQtc2l6ZTogMS4zcmVtO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIHRleHQtZGVjb3JhdGlvbi1jb2xvcjogcmVkO1xufVxuXG4udGFza0Rlc2NyaXB0aW9uLFxuLm5ld1Byb2plY3QtZGVzY3JpcHRpb24ge1xuICBtYXJnaW46IDA7XG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xufVxuXG4udGFza1ByaW9yaXR5IHtcbiAgZm9udC1zaXplOiAxOXB4O1xuICBib3JkZXItcmFkaXVzOiA2cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICM1NzNkM2Q7XG4gIHBhZGRpbmc6IDZweDtcbiAgbWFyZ2luOiAwIDAgN3B4O1xuICBjb2xvcjogd2hpdGU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgd2lkdGg6IDEzMHB4O1xufVxuXG4udGFza1ByaW9yaXR5OmhvdmVyIHtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjA1KTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzljMTUxNTtcbn1cblxuXG4uaW5uZXJUYXNrSGFuZGxlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIG1hcmdpbjogMHB4IDE1cHggMCA0MHB4O1xufVxuXG5hc2lkZSB1bCBsaSB7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDEwcHggMjBweDtcbn1cblxuLmluYm94LWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogNXB4O1xuICBmb250LXNpemU6IDEuM3JlbTtcbn1cblxuXG4uaW5ib3gge1xuICBmb250LXNpemU6IDEuNHJlbTtcbn1cblxuLmluYm94TGlzdENvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGdhcDogNXB4O1xufVxuXG4uaW5ib3hUYXNrQ29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleDogMTtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuXG4uaW5ib3hUYXNrVGl0bGUge1xuICBtYXJnaW46IDA7XG4gIGZvbnQtc2l6ZTogMThweDtcbn1cblxuLmluYm94VGFza0Rlc2NyaXB0aW9uIHtcbiAgbWFyZ2luOiAwO1xuICBmb250LXNpemU6IDE0cHg7XG59XG5cbi5pbmJveFRhc2tQcmlvcml0eSB7XG4gIG1hcmdpbjogMCAyMHB4IDAgMDtcbiAgZm9udC1zaXplOiAxLjNyZW07XG5cbn1cblxuLmR1ZURhdGUge1xuICBtYXJnaW46IDA7XG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xufVxuXG4uZWRpdCB7XG4gIGJvcmRlcjogbm9uZTtcbiAgb3V0bGluZTogbm9uZTtcbiAgZm9udC1zaXplOiAxN3B4O1xuICBtYXgtd2lkdGg6IDExMHB4O1xuICBtYXJnaW46IDAgMDtcbn1cblxuI3Byb2plY3RzIGgzIHtcbiAgbWFyZ2luOiAwIDAgMCAxMHB4O1xufVxuXG4jZm9ybSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM2NDc0OGI7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGhlaWdodDogMTcwcHg7XG4gIGRpc3BsYXk6IG5vbmU7XG4gIHBhZGRpbmctbGVmdDogMXJlbTtcbiAgbWFyZ2luOiAxMHB4IDEwcHggMCAwO1xufVxuXG4uZm9ybURldGFpbHMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIG1hcmdpbjogMTJweCAxNXB4O1xufVxuXG5pbnB1dCNkYXRlUGlja2VyIHtcbiAgbWF4LXdpZHRoOiAxMzNweDtcbn1cblxuLmJ1dHRvbnMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIG1hcmdpbjogMXB4IDMzcHg7XG59XG5cbi5idXR0b25zIGJ1dHRvbiB7XG4gIGJvcmRlcjogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogN3B4O1xuICBwYWRkaW5nOiA3cHg7XG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjJzIGVhc2Utb3V0O1xufVxuXG4uYnV0dG9ucyBidXR0b246aG92ZXIge1xuICB0cmFuc2Zvcm06IHNjYWxlKDEuMDUpO1xufVxuXG4jUHJvamVjdEZvcm0ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjQ3NDhiO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBoZWlnaHQ6IDE2NnB4O1xuICBkaXNwbGF5OiBub25lO1xuICBwYWRkaW5nOiAxMHB4O1xuICBtYXJnaW46IDE1cHggMTVweCAwIDE3cHg7XG59XG5cbi5wcm9qZWN0Rm9ybURldGFpbHMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIHBhZGRpbmctbGVmdDogMXJlbTtcbiAgdG9wOiAwO1xufVxuXG4uZmlyc3QtaW5wdXRDb250YWluZXIgaW5wdXQsXG4uUHRpdGxlSW5wdXRDb250YWluZXIgaW5wdXQge1xuICBtYXgtd2lkdGg6IDYwMHB4O1xuICBoZWlnaHQ6IDM3cHg7XG4gIGJvcmRlcjogbm9uZTtcbiAgb3V0bGluZTogbm9uZTtcbiAgY29sb3I6IHdoaXRlO1xuICBtYXJnaW46IDEwcHggMCAwIDA7XG4gIGJhY2tncm91bmQtY29sb3I6IGluaGVyaXQ7XG59XG5cbi50YXNrLXRpdGxlLFxuLmRlc2NyaXB0aW9uIHtcbiAgd2lkdGg6IDM1MHB4O1xuICBmb250LXNpemU6IDEuMXJlbTtcblxufVxuXG4uZmlyc3QtaW5wdXRDb250YWluZXIgaW5wdXQ6OnBsYWNlaG9sZGVyLFxuLlB0aXRsZUlucHV0Q29udGFpbmVyIGlucHV0OjpwbGFjZWhvbGRlciB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgcGFkZGluZzogMCAxMHB4O1xuICBvcGFjaXR5OiAxO1xufVxuXG4uc2Vjb25kLWlucHV0Q29udGFpbmVyIGlucHV0LFxuLlBkZXNjcmlwdGlvbklucHV0Q29udGFpbmVyIGlucHV0IHtcbiAgbWF4LXdpZHRoOiA2MDBweDtcbiAgaGVpZ2h0OiAzN3B4O1xuICBib3JkZXI6IG5vbmU7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogaW5oZXJpdDtcbiAgbWFyZ2luOiAwO1xufVxuXG4ucFRpdGxlLCAucERlc2NyaXB0aW9uIHtcbiAgd2lkdGg6IDM1MHB4O1xuICBmb250LXNpemU6IDEuMDdyZW07XG59XG5cbi5zZWNvbmQtaW5wdXRDb250YWluZXIgaW5wdXQ6OnBsYWNlaG9sZGVyLFxuLlBkZXNjcmlwdGlvbklucHV0Q29udGFpbmVyIGlucHV0OjpwbGFjZWhvbGRlciB7XG4gIHBhZGRpbmc6IDAgMTBweDtcbiAgY29sb3I6IHdoaXRlO1xuICBvcGFjaXR5OiAxO1xufVxuXG4uZmlyc3QtaW5wdXRDb250YWluZXIsXG4uc2Vjb25kLWlucHV0Q29udGFpbmVyIHtcbiAgbWFyZ2luOiAxMHB4IDAgMCAwO1xuICBmb250LXNpemU6IDFyZW07XG59XG5cbi5zdWJtaXRCdG46YWN0aXZlIHtcbiAgdHJhbnNmb3JtOiBhY3RpdmUgc2NhbGUoMS4xKTtcbn1cblxuLm90aGVyLW9wdGlvbnMtb24tZm9ybXMgYnV0dG9uLFxuI3ByaW9yaXR5LFxuaW5wdXQjZGF0ZVBpY2tlciB7XG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjNzIGVhc2UtaW47XG4gIHBhZGRpbmc6IDdweDtcbiAgYm9yZGVyLXJhZGl1czogN3B4O1xuICBib3JkZXI6IG5vbmU7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwODMzNDQ7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC1zaXplOiAxLjFyZW07XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG5cbiNwcmlvcml0eSB7XG4gIG1hcmdpbjogMTBweCAwIDhweCAwO1xufVxuXG4jcHJvamVjdFByaW9yaXR5LFxuLmZvb3RlciB7XG4gIHBhZGRpbmc6IDdweDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBtYXJnaW46IDAgNHB4IDVweCAwO1xuXG59XG5cblxuXG4jcHJvamVjdFByaW9yaXR5LCAjcHJvamVjdFByaW9yaXR5IG9wdGlvbiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM0NDQwM2M7XG4gIGNvbG9yOiAjZmFmYWZhO1xuICBmb250LXNpemU6IDEuMnJlbTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cblxuXG5cbi5hZGRQcm9qZWN0c0NvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG5cbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiAxMHB4O1xufVxuXG4uaW5ib3gtY29udGFpbmVyOmhvdmVyLCAuYWRkUHJvamVjdHNDb250YWluZXI6aG92ZXIsIC5wcm9qZWN0X3RleHQ6aG92ZXIsICNwcm9qZWN0LWRyb3Bkb3duOmhvdmVyIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMS4wNSk7XG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xufVxuXG5cbi5hZGRQcm9qZWN0c0NvbnRhaW5lciBzdmcge1xuICB3aWR0aDogMjVweDtcbiAgaGVpZ2h0OiAyNXB4O1xufVxuXG4jYWRkTmV3UHJvamVjdEVsIHtcbiAgbWFyZ2luOiAwO1xuICBmb250LXNpemU6IDEuM3JlbTtcbn1cblxuLnByb2plY3RfdGV4dCB7XG4gIG1hcmdpbjogMCAwIDEwcHggMTdweDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xuICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcbiAgcGFkZGluZzogOXB4O1xuICBib3JkZXItcmFkaXVzOiA1cHggMHB4IDBweCA1cHg7XG59XG5cblxuI3Byb2plY3QtZHJvcGRvd24ge1xuICBib3JkZXI6IDA7XG4gIGJhY2tncm91bmQtY29sb3I6IGluaGVyaXQ7XG4gIGZvbnQtc2l6ZTogMS4zcmVtO1xuICBmb250LXdlaWdodDogNTUwO1xuICBtYXgtd2lkdGg6IDIwMHB4O1xufVxuXG5cbiNwcm9qZWN0LWRyb3Bkb3duOmZvY3VzIHtcbiAgYm9yZGVyOiBub25lO1xuICBvdXRsaW5lOiBub25lO1xufVxuXG4jbmV3UHJvamVjdHNGb3JtQ29udGFpbmVyRWwge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1pdGVtczogY2VudGVyO1xufVxuXG4jUHJvamVjdHNGb3JtTmFtZUNvbnRhaW5lckVsIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcbn1cblxuLmlucHV0TmV3cHJvamVjdEZvcm1OYW1lIHtcbiAgZGlzcGxheTogbm9uZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2NlZTNlMztcbiAgbWF4LXdpZHRoOiA0MDBweDtcbiAgbWF4LWhlaWdodDogMzAwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIHBhZGRpbmc6IDQ2cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luOiA2MHB4IDAgMCAwO1xuICBib3gtc2hhZG93OiAwcHggOXB4IDNweCAwcHg7XG59XG5cbi5pbnB1dE5ld3Byb2plY3RGb3JtTmFtZSBoMiB7XG4gIG1hcmdpbjogMCAwIDEwcHggMDtcbn1cblxuLmlucHV0TmV3UHJvamVjdE5hbWUge1xuICBtYXgtd2lkdGg6IDM1MHB4O1xuICBtYXgtaGVpZ2h0OiAzNXB4O1xuICBwYWRkaW5nOiAxN3B4O1xuICBib3JkZXI6IG5vbmU7XG4gIGJvcmRlci1yYWRpdXM6IDdweDtcbiAgZm9udC1zaXplOiAxOXB4O1xufVxuXG5pbnB1dC5TYXZlUHJvamVjdE5hbWUge1xuICBwYWRkaW5nOiA5cHg7XG4gIGJvcmRlcjogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xuICBtYXgtd2lkdGg6IDEwMHB4O1xuICBoZWlnaHQ6IDQwcHg7XG4gIGZvbnQtc2l6ZTogMTlweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0MCwgNTksIDEzNCk7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDNtcyBlYXNlO1xufVxuXG5pbnB1dC5TYXZlUHJvamVjdE5hbWU6aG92ZXIge1xuICB0cmFuc2Zvcm06IHNjYWxlKDEuMDMpXG59XG5cbi5wcm9qZWN0TmFtZVNhdmVyQnRuQ29udGFpbmVyIHtcbiAgbWFyZ2luOiAxMHB4IDA7XG59XG5cbi5wcm9qZWN0TmFtZVNhdmVyQnRuQ29udGFpbmVyIGJ1dHRvbiB7XG4gIHBhZGRpbmc6IDlweDtcbiAgYm9yZGVyOiBub25lO1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIHdpZHRoOiAxMDBweDtcbiAgaGVpZ2h0OiA0MHB4O1xuICBmb250LXNpemU6IDE5cHg7XG59XG5cbiNQcm9qZWN0c0Zvcm1OYW1lQ29udGFpbmVyRWwgLkNhbmNlbCB7XG4gIGJhY2tncm91bmQtY29sb3I6IGdyZXk7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDNtcyBlYXNlO1xuXG59XG5cbiNQcm9qZWN0c0Zvcm1OYW1lQ29udGFpbmVyRWwgLkNhbmNlbDpob3ZlciB7XG4gIHRyYW5zZm9ybTogc2NhbGUoMS4wMylcbn1cblxuI25ld1Byb2plY3RUYXNrc0NvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4jbmV3UHJvamVjdFRhc2tCdG5XcmFwcGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbiNuZXdQcm9qZWN0VGFza3NJbm5lckNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDVweDtcbiAgbWFyZ2luOiAxMHB4O1xuICBib3gtc2hhZG93OiAjNWM1NTU1IDFweCAzcHggM3B4IDFweDtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgcGFkZGluZzogMTBweDtcbiAgd2lkdGg6IDk1cHg7XG5cbn1cblxuc3ZnLmFkZFRhc2sge1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGZpbGw6IHdoZWF0O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XG59XG5cbi5uZXdQcm9qZWN0QWRkQnRuIHtcbiAgYm9yZGVyOiAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmhlcml0O1xuICBmb250LXdlaWdodDogNTAwO1xufVxuXG4jUHJvamVjdGRhdGVQaWNrZXIge1xuICBwYWRkaW5nOiAycHg7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgYm9yZGVyOiBub25lO1xuICBoZWlnaHQ6IDMycHg7XG4gIHBhZGRpbmc6IDJweDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBib3JkZXI6IG5vbmU7XG4gIGhlaWdodDogMzJweDtcbiAgZm9udC1zaXplOiAxLjFyZW07XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGJhY2tncm91bmQ6ICNmMGYwZjA7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuI1Byb2plY3RkYXRlUGlja2VyIGlucHV0W3R5cGU9J2RhdGUnXSB7XG4gIGZpbGw6IHdoaXRlO1xufVxuXG4jc3VibWl0QnRuRm9yUHJvamVjdCB7XG4gIHBhZGRpbmc6IDdweDtcbiAgYm9yZGVyLXJhZGl1czogOXB4O1xuICAvKiBmb250LXNpemU6IDEuMnJlbTtcbiAgZm9udC13ZWlnaHQ6IDYwMDsgKi9cbn1cblxuI3N1Ym1pdEJ0bkZvclByb2plY3Q6YWN0aXZlIHtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xufVxuXG4uY2FuY2VsRm9yUHJvamVjdEJ0biB7XG4gIHBhZGRpbmc6IDdweDtcbiAgYm9yZGVyLXJhZGl1czogOXB4O1xufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxVQUFVO0VBQ1YsU0FBUztFQUNULHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLHNCQUFzQjtFQUN0QiwyQkFBMkI7QUFDN0I7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsU0FBUztFQUNULHNCQUFzQjtFQUN0QixjQUFjO0VBQ2QsaUNBQWlDO0VBQ2pDLGdCQUFnQjtFQUNoQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRTtJQUNFLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsdUJBQXVCO0lBQ3ZCLFVBQVU7RUFDWjs7RUFFQTtJQUNFLHlCQUF5QjtJQUN6QixrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQix1QkFBdUI7SUFDdkIsU0FBUztFQUNYOztFQUVBO0lBQ0UsZUFBZTtJQUNmLFVBQVU7SUFDVixXQUFXO0lBQ1gsV0FBVztJQUNYLFlBQVk7SUFDWjs7O2tCQUdjO0lBQ2QseUJBQXlCO0lBQ3pCLGVBQWU7SUFDZixhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsb0JBQW9COztJQUVwQixhQUFhO0VBQ2Y7O0VBRUE7SUFDRSxnQkFBZ0I7SUFD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RUFDWixrQkFBa0I7RUFDbEI7cUJBQ21CO0FBQ3JCOztBQUVBO0VBQ0UscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGtCQUFrQjtBQUNwQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJib2R5IHtcXG4gIHBhZGRpbmc6IDA7XFxuICBtYXJnaW46IDA7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG46cm9vdCB7XFxuICAtLWhvdmVyLWNvbG9yOiAjZmRhNGFmO1xcbiAgLS1iYWNrZ3JvdW5kLWNvbG9yOiAjNmY5ZTllO1xcbn1cXG5cXG4qIHtcXG4gIHBhZGRpbmc6IDA7XFxuICBtYXJnaW46IDA7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgY29sb3I6ICM3ODM1MGY7XFxuICBmb250LWZhbWlseTogXFxcIlJvYm90b1xcXCIsIHNhbnMtc2VyaWY7XFxuICBmb250LXdlaWdodDogNDAwO1xcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcbn1cXG5cXG5AbWVkaWEgKG1heC13aWR0aDogNTUwcHgpIHtcXG4gIGJvZHkgbWFpbiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICB6LWluZGV4OiAxO1xcbiAgfVxcblxcbiAgbWFpbiBoZWFkZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmRhNGFmO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBnYXA6IDEwcHg7XFxuICB9XFxuXFxuICAjdG9nZ2xlTWVudUljb24ge1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIHRvcDogMTAwcHg7XFxuICAgIHJpZ2h0OiAxMHB4O1xcbiAgICB3aWR0aDogNTBweDtcXG4gICAgaGVpZ2h0OiA1MHB4O1xcbiAgICAvKiBcXG4gICAgdG9wOiAxMDZweDtcXG4gICAgcmlnaHQ6IDEwcHg7XFxuICAgIHdpZHRoOiA1MHB4OyAqL1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNmI4ODg4O1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XFxuICAgIHRyYW5zaXRpb246IHRvcCAwLjNzO1xcblxcbiAgICB6LWluZGV4OiAxMDAwO1xcbiAgfVxcblxcbiAgaDEuaGVhZGVyVGV4dENvbnRlbnQge1xcbiAgICBmb250LXdlaWdodDogNjAwO1xcbiAgICBwYWRkaW5nOiAzMHB4O1xcbiAgfVxcblxcbiAgI3RvZ2dsZU1lbnVJY29uOjpiZWZvcmUge1xcbiAgICBjb250ZW50OiBcXFwiXFxcIjtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB3aWR0aDogMjhweDtcXG4gICAgaGVpZ2h0OiAycHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNXB4KTtcXG4gICAgdHJhbnNpdGlvbjogMC4ycztcXG4gIH1cXG5cXG4gICN0b2dnbGVNZW51SWNvbjo6YWZ0ZXIge1xcbiAgICBjb250ZW50OiBcXFwiXFxcIjtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB3aWR0aDogMjhweDtcXG4gICAgaGVpZ2h0OiAycHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSg1cHgpO1xcbiAgICB0cmFuc2l0aW9uOiAwLjJzO1xcbiAgfVxcblxcbiAgI3RvZ2dsZU1lbnVJY29uLmFjdGl2ZTo6YmVmb3JlIHtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDBweCkgcm90YXRlKDQ1ZGVnKTtcXG4gIH1cXG5cXG4gICN0b2dnbGVNZW51SWNvbi5hY3RpdmU6OmFmdGVyIHtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDBweCkgcm90YXRlKC00NWRlZyk7XFxuICB9XFxuXFxuICBhc2lkZSNtZW51IHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgdG9wOiAwO1xcbiAgICBsZWZ0OiAtMjIwcHg7XFxuICAgIHdpZHRoOiAyMjBweDtcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBmaWx0ZXI6IHdoaXRlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNzk4OWExO1xcbiAgICB0cmFuc2l0aW9uOiAwLjNzO1xcbiAgICB6LWluZGV4OiAxMDAwO1xcbiAgICBmaWxsOiB3aGl0ZTtcXG4gIH1cXG5cXG4gIGFzaWRlI21lbnUuYWN0aXZlIHtcXG4gICAgbGVmdDogMDtcXG4gIH1cXG5cXG4gIG1haW4gYXNpZGUge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlMmU4ZjA7XFxuICB9XFxuXFxuICBwI2FkZE5ld1Byb2plY3RFbCwgcC5pbmJveCwgc2VsZWN0I3Byb2plY3QtZHJvcGRvd24ge1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICB9XFxuXFxuICBtYWluICNDb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBmbGV4LXdyYXA6IHdyYXA7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIH1cXG5cXG4gIGhlYWRlciAubWVudUNvbnRyb2xsZXIge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgd2lkdGg6IDQwcHg7XFxuICAgIGhlaWdodDogNDBweDtcXG4gIH1cXG5cXG4gIGhlYWRlciAubWVudUNvbnRyb2xsZXIgc3ZnIHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIHdpZHRoOiA0MHB4O1xcbiAgICBoZWlnaHQ6IDQwcHg7XFxuICAgIGZpbGw6IHdoaXRlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIH1cXG5cXG4gICN1c2VybGlzdCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIG1heC13aWR0aDogNTUwcHg7XFxuICB9XFxuXFxuICBkaXYubGlzdENvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDogNXB4O1xcbiAgICBtYXgtd2lkdGg6IDUxNXB4O1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICBib3gtc2hhZG93OiAxcHggMHB4IDNweCAwcHg7XFxuICAgIG1hcmdpbjogMTRweCAxNHB4IDAgMTlweDtcXG4gICAgd29yZC13cmFwOiBicmVhay13b3JkO1xcbiAgICB3b3JkLWJyZWFrOiBicmVhay1hbGw7XFxuICAgIHdoaXRlLXNwYWNlOiBub3JtYWw7XFxuICAgIG92ZXJmbG93LXdyYXA6IGJyZWFrLXdvcmQ7XFxuXFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICB9XFxuXFxuICAjdXNlcmxpc3QgLmludGlhbFRleHREaXNwbGF5IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIH1cXG5cXG4gIC5pbnRpYWxUZXh0RGlzcGxheSBpbWcge1xcbiAgICBtYXgtd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogYXV0bztcXG4gICAgcGFkZGluZzogMThweDtcXG4gICAgYm9yZGVyLXJhZGl1czogMzBweDtcXG4gICAgb2JqZWN0LWZpdDogY29udGFpbjtcXG4gIH1cXG5cXG4gIC5wb3BVcENvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIG1heC13aWR0aDogMjAwcHg7XFxuICAgIHBhZGRpbmc6IDMwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwN2M0ZGQ7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbiAgfVxcblxcbiAgI3VzZXJsaXN0ICNhZGRUb2RvQnRuQ29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiA1cHg7XFxuICAgIG1hcmdpbjogMjdweCAwIDExcHggMjZweDtcXG4gIH1cXG5cXG4gICN0YXNrIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiA1cHg7XFxuICAgIG1hcmdpbjogMjdweCAwIDExcHggMjZweDtcXG4gIH1cXG5cXG4gICN1c2VybGlzdCAjYWRkVG9kb0J0bkNvbnRhaW5lciBzdmcge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGMyNjI2O1xcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICAgIGZpbGw6IHdoaXRlO1xcbiAgfVxcblxcbiAgI3VzZXJsaXN0ICNhZGRUb2RvQnRuQ29udGFpbmVyIDpob3ZlciB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEuMDkpO1xcbiAgfVxcblxcbiAgI3VzZXJsaXN0ICNhZGRUb2RvQnRuQ29udGFpbmVyIGJ1dHRvbiB7XFxuICAgIGJvcmRlcjogMDtcXG4gICAgZm9udC1zaXplOiAxLjNyZW07XFxuICAgIGNvbG9yOiAjYjkxYzFjO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmhlcml0O1xcbiAgICB0cmFuc2l0aW9uOiAwLjNzO1xcbiAgfVxcblxcbiAgI3VzZXJsaXN0ICNhZGRUb2RvQnRuQ29udGFpbmVyIGJ1dHRvbjpob3ZlciB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEuMDkpO1xcbiAgfVxcblxcbiAgLmlubmVyX2NvbnRhaW5lciAjZm9ybSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM2NDc0OGI7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIG1heC1oZWlnaHQ6IDIwMHB4O1xcbiAgICBtYXgtd2lkdGg6IDUxNXB4ICFpbXBvcnRhbnQ7XFxuICAgIGhlaWdodDogMTcwcHg7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIG1heC13aWR0aDogNDgwcHg7XFxuICAgIG1hcmdpbjogMTBweCAxMHB4IDAgMTBweDtcXG4gIH1cXG5cXG4gIGRpdi5pbnB1dE5ld3Byb2plY3RGb3JtTmFtZSB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNjZWUzZTM7XFxuICAgIG1heC13aWR0aDogMzAwcHg7XFxuICAgIG1heC1oZWlnaHQ6IDMwMHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICBwYWRkaW5nOiAyNXB4O1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIG1hcmdpbjogNjBweCAwIDAgMDtcXG4gICAgYm94LXNoYWRvdzogMHB4IDlweCAzcHggMHB4O1xcbiAgfVxcblxcbiAgLmlucHV0TmV3cHJvamVjdEZvcm1OYW1lIGgyIHtcXG4gICAgbWFyZ2luOiAwIDAgMTBweCAwO1xcbiAgfVxcblxcbiAgLmlucHV0TmV3cHJvamVjdEZvcm1OYW1lIC5pbnB1dE5ld1Byb2plY3ROYW1lIHtcXG4gICAgbWF4LXdpZHRoOiAzMDBweDtcXG4gICAgbWF4LWhlaWdodDogMzVweDtcXG4gICAgcGFkZGluZzogMTRweDtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBib3JkZXItcmFkaXVzOiA3cHg7XFxuICB9XFxuXFxuICBpbnB1dC5TYXZlUHJvamVjdE5hbWUge1xcbiAgICBwYWRkaW5nOiA5cHg7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xcbiAgICBtYXgtd2lkdGg6IDEwMHB4O1xcbiAgICBoZWlnaHQ6IDQwcHg7XFxuICAgIGZvbnQtc2l6ZTogMTlweDtcXG4gIH1cXG5cXG4gIC5wcm9qZWN0TmFtZVNhdmVyQnRuQ29udGFpbmVyIHtcXG4gICAgbWFyZ2luOiAxMHB4IDA7XFxuICB9XFxuXFxuICAucHJvamVjdE5hbWVTYXZlckJ0bkNvbnRhaW5lciBidXR0b24ge1xcbiAgICBwYWRkaW5nOiA5cHg7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xcbiAgICB3aWR0aDogMTAwcHg7XFxuICAgIGhlaWdodDogNDBweDtcXG4gICAgZm9udC1zaXplOiAxOXB4O1xcbiAgfVxcblxcbiAgLmlubmVyX2NvbnRhaW5lciAjUHJvamVjdEZvcm0ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjQ3NDhiO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICBtYXgtaGVpZ2h0OiAxMzRweDtcXG4gICAgbWF4LXdpZHRoOiA1MTVweDtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gICAgbWF4LXdpZHRoOiA1MDBweDtcXG4gICAgbWFyZ2luOiA5cHggMTBweCAwIDIzcHg7XFxuICB9XFxuXFxuICAucHJvamVjdEZvcm1EZXRhaWxzIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICBoZWlnaHQ6IDgwcHg7XFxuICB9XFxuXFxuICBkaXYucHJpb3JpdHlEYXRlT25MYXJnZVNjcmVlbiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgdG9wOiAwO1xcbiAgICBtYXgtd2lkdGg6IDIwMHB4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgfVxcblxcbiAgLnByb2plY3RJbnB1dENvbnRhaW5lciB7XFxuICAgIG1heC13aWR0aDogMjAwcHg7XFxuICB9XFxuXFxuICAucHJvamVjdElucHV0Q29udGFpbmVyIHAgaW5wdXQge1xcbiAgICBtYXgtd2lkdGg6IDIwMHB4O1xcbiAgfVxcblxcbiAgLmlubmVyVGFza0NvbnRhaW5lciAuZWRpdCB7XFxuICAgIG1heC13aWR0aDogMTQwcHg7XFxuICB9XFxuXFxuICAucHJvamVjdElucHV0Q29udGFpbmVyIC5QZGVzY3JpcHRpb25JbnB1dENvbnRhaW5lciB7XFxuICAgIG1hcmdpbjogMDtcXG4gIH1cXG5cXG4gIGlucHV0I1Byb2plY3RkYXRlUGlja2VyIHtcXG4gICAgcGFkZGluZzogMnB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgaGVpZ2h0OiAzMnB4O1xcbiAgICBmb250LXNpemU6IDAuOXJlbTtcXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gICAgYmFja2dyb3VuZDogI2Q0ZDRkODtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgfVxcblxcbiAgc2VsZWN0I3Byb2plY3RQcmlvcml0eSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM0NDQwM2M7XFxuICAgIGNvbG9yOiAjZmFmYWZhO1xcbiAgICBmb250LXNpemU6IDAuODVyZW07XFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICAgIGhlaWdodDogMzVweDtcXG4gIH1cXG5cXG5cXG4gIGRpdi5wcm9qZWN0QnV0dG9uc0NvbnRhaW5lciBidXR0b24ge1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDdweDtcXG4gICAgcGFkZGluZzogOXB4O1xcbiAgICBmb250LXNpemU6IDFyZW07XFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICB9XFxuXFxuXFxuICBkaXYjY29uZmlnUHJpb3JpdHlEYXRlT25Nb2JpbGUge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBtYXgtd2lkdGg6IDIwMHB4O1xcbiAgICBwb3NpdGlvbjogc3RhdGljO1xcbiAgfVxcblxcbiAgI2NvbmZpZ1ByaW9yaXR5RGF0ZU9uTW9iaWxlICNwcmlvcml0eSxcXG4gICNkYXRlUGlja2VyIHtcXG4gICAgcGFkZGluZzogMnB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA2cHg7XFxuICAgIG1heC13aWR0aDogMTA0cHg7XFxuICAgIG1pbi13aWR0aDogODBweDtcXG4gIH1cXG5cXG4gICNQcm9qZWN0Rm9ybSAuZm9vdGVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBwYWRkaW5nOiAwIDEwcHg7XFxuICAgIGdhcDogMDtcXG4gIH1cXG5cXG4gICNQcm9qZWN0Rm9ybSAucHJvamVjdEJ1dHRvbnNDb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHBhZGRpbmc6IDAgMTBweDtcXG4gICAgZ2FwOiAwO1xcbiAgfVxcblxcbiAgI2Zvcm0gLmZvcm1EZXRhaWxzIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICBtYXJnaW46IDA7XFxuICB9XFxuXFxuICAjZm9ybUZvb3Rlck9uTW9iaWxlIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBwYWRkaW5nOiAwIDEwcHg7XFxuICB9XFxuXFxuICAjZm9ybUZvb3Rlck9uTW9iaWxlIC5idXR0b25zIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBwYWRkaW5nOiAwIDEwcHg7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgZ2FwOiAwO1xcbiAgfVxcblxcbiAgLnByaW9yaXR5RGF0ZUxhcmdlU2NyZWVuIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIH1cXG5cXG4gICNmb3JtIC5pbnB1dHMge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBtYXgtd2lkdGg6IDE1MHB4O1xcbiAgfVxcblxcbiAgI2Zvcm0gLmZpcnN0LWlucHV0Q29udGFpbmVyIGlucHV0LFxcbiAgLlB0aXRsZUlucHV0Q29udGFpbmVyIGlucHV0IHtcXG4gICAgbWF4LXdpZHRoOiAzMDVweDtcXG4gICAgbWF4LWhlaWdodDogNDBweDtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBvdXRsaW5lOiBub25lO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIC8qIG1hcmdpbjogMTBweCAwOyAqL1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmhlcml0O1xcbiAgfVxcblxcbiAgI2Zvcm0gLmZpcnN0LWlucHV0Q29udGFpbmVyIGlucHV0LCAuc2Vjb25kLWlucHV0Q29udGFpbmVyIGlucHV0IHtcXG4gICAgbWF4LXdpZHRoOiAzMDVweDtcXG4gICAgbWF4LWhlaWdodDogNDBweDtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBmb250LXNpemU6IDEuMXJlbTtcXG4gIH1cXG5cXG4gICNmb3JtIC5zZWNvbmQtaW5wdXRDb250YWluZXIgaW5wdXQsXFxuICAuUGRlc2NyaXB0aW9uSW5wdXRDb250YWluZXIgaW5wdXQge1xcbiAgICBtYXgtd2lkdGg6IDMwN3B4O1xcbiAgICBtYXgtaGVpZ2h0OiA0MHB4O1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIG91dGxpbmU6IG5vbmU7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogaW5oZXJpdDtcXG4gICAgbWFyZ2luOiAwO1xcbiAgfVxcblxcbiAgI2Zvcm0gLm90aGVyLW9wdGlvbnMtb24tZm9ybXMgYnV0dG9uLFxcbiAgI2NvbmZpZ1ByaW9yaXR5RGF0ZU9uTW9iaWxlICNwcmlvcml0eSxcXG4gICNkYXRlUGlja2VyIHtcXG4gICAgcGFkZGluZzogNHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA2cHg7XFxuICAgIG1heC13aWR0aDogMTA0cHg7XFxuICAgIG1pbi13aWR0aDogODBweDtcXG4gIH1cXG59XFxuXFxuQG1lZGlhIChtaW4td2lkdGg6IDU1MXB4KSBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcXG4gIGJvZHkgbWFpbiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgfVxcblxcbiAgbWFpbiBoZWFkZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmRhNGFmO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBnYXA6IDEwcHg7XFxuICAgIGhlaWdodDogMTAwcHg7XFxuICB9XFxuXFxuICBtYWluIGFzaWRlIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTJlOGYwO1xcbiAgICB6LWluZGV4OiAyO1xcbiAgfVxcblxcbiAgYXNpZGUgdWwsXFxuICB1bCBzZWxlY3Qge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICAvKiBjb2xvcjogd2hpdGU7ICovXFxuICAgIGZpbGw6ICM3ODM1MGY7XFxuICB9XFxuXFxuICBsaS5pbmJveCB7XFxuICAgIGZvbnQtc2l6ZTogMS40cmVtO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICB9XFxuXFxuICBsaSNhZGROZXdQcm9qZWN0RWwge1xcbiAgICBtYXJnaW46IDA7XFxuICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICB9XFxuXFxuICBzZWxlY3QjcHJvamVjdC1kcm9wZG93biB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGluaGVyaXQ7XFxuICB9XFxuXFxuICBtYWluICNDb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBmbGV4LXdyYXA6IHdyYXA7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgei1pbmRleDogMTtcXG4gIH1cXG5cXG4gIGhlYWRlciAubWVudUNvbnRyb2xsZXIge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgd2lkdGg6IDQwcHg7XFxuICAgIGhlaWdodDogNDBweDtcXG4gIH1cXG5cXG4gICN0b2dnbGVNZW51SWNvbiB7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgdG9wOiAyMHB4O1xcbiAgICByaWdodDogMjBweDtcXG4gICAgd2lkdGg6IDUwcHg7XFxuICAgIGhlaWdodDogNTBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzZmOWU5ZTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xcbiAgICB0cmFuc2l0aW9uOiB0b3AgMC4zcztcXG4gICAgei1pbmRleDogMTAwMDtcXG5cXG4gICAgei1pbmRleDogMTAwMDtcXG4gIH1cXG5cXG4gICN0b2dnbGVNZW51SWNvbjo6YmVmb3JlIHtcXG4gICAgY29udGVudDogXFxcIlxcXCI7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgd2lkdGg6IDI4cHg7XFxuICAgIGhlaWdodDogMnB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTVweCk7XFxuICAgIHRyYW5zaXRpb246IDAuMnM7XFxuICB9XFxuXFxuICAjdG9nZ2xlTWVudUljb246OmFmdGVyIHtcXG4gICAgY29udGVudDogXFxcIlxcXCI7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgd2lkdGg6IDI4cHg7XFxuICAgIGhlaWdodDogMnB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoNXB4KTtcXG4gICAgdHJhbnNpdGlvbjogMC4ycztcXG4gIH1cXG5cXG4gICN0b2dnbGVNZW51SWNvbi5hY3RpdmU6OmJlZm9yZSB7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwcHgpIHJvdGF0ZSg0NWRlZyk7XFxuICB9XFxuXFxuICAjdG9nZ2xlTWVudUljb24uYWN0aXZlOjphZnRlciB7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwcHgpIHJvdGF0ZSgtNDVkZWcpO1xcbiAgfVxcblxcbiAgYXNpZGUjbWVudSB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIHRvcDogMDtcXG4gICAgbGVmdDogLTIyMHB4O1xcbiAgICB3aWR0aDogMjIwcHg7XFxuICAgIGhlaWdodDogMTAwdmg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNiZmM2YzY7XFxuICAgIHRyYW5zaXRpb246IDAuM3M7XFxuICB9XFxuXFxuICBhc2lkZSNtZW51LmFjdGl2ZSB7XFxuICAgIGxlZnQ6IDA7XFxuICB9XFxuXFxuICBhc2lkZSB1bCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgZmlsbDogd2hpdGU7XFxuICB9XFxuXFxuICBwI2FkZE5ld1Byb2plY3RFbCwgcC5pbmJveCwgc2VsZWN0I3Byb2plY3QtZHJvcGRvd24ge1xcbiAgICAvKiBjb2xvcjogd2hpdGU7ICovXFxuXFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICB9XFxuXFxuICBoZWFkZXIgLm1lbnVDb250cm9sbGVyIHN2ZyB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICB3aWR0aDogNDBweDtcXG4gICAgaGVpZ2h0OiA0MHB4O1xcbiAgICBmaWxsOiB3aGl0ZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICB9XFxuXFxuICAjdXNlcmxpc3QgI2FkZFRvZG9CdG5Db250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDVweDtcXG4gICAgbWFyZ2luOiAyN3B4IDAgMTFweCAyNnB4O1xcbiAgfVxcblxcbiAgI3Rhc2sge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDVweDtcXG4gICAgbWFyZ2luOiAyN3B4IDAgMTFweCAyNnB4O1xcbiAgfVxcblxcbiAgI3VzZXJsaXN0ICNhZGRUb2RvQnRuQ29udGFpbmVyIHN2ZyB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNkYzI2MjY7XFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gICAgZmlsbDogd2hpdGU7XFxuICB9XFxuXFxuICAjdXNlcmxpc3QgI2FkZFRvZG9CdG5Db250YWluZXIgOmhvdmVyIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMS4wOSk7XFxuICB9XFxuXFxuICAjdXNlcmxpc3QgI2FkZFRvZG9CdG5Db250YWluZXIgYnV0dG9uIHtcXG4gICAgYm9yZGVyOiAwO1xcbiAgICBmb250LXNpemU6IDEuNHJlbTtcXG5cXG4gICAgY29sb3I6ICNiOTFjMWM7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGluaGVyaXQ7XFxuICB9XFxuXFxuICAjdXNlcmxpc3QgI2FkZFRvZG9CdG5Db250YWluZXIgYnV0dG9uOmhvdmVyIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMS4wOSk7XFxuICB9XFxuXFxuICBkaXYubGlzdENvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDogNXB4O1xcbiAgICBtYXgtd2lkdGg6IDcxNHB4O1xcbiAgICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XFxuICAgIHdvcmQtYnJlYWs6IGJyZWFrLWFsbDtcXG4gICAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcXG4gICAgb3ZlcmZsb3ctd3JhcDogYnJlYWstd29yZDtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgYm94LXNoYWRvdzogMXB4IDBweCAzcHggMHB4O1xcbiAgICAvKiBtYXJnaW46IDE4cHggNjBweDsgKi9cXG4gICAgcGFkZGluZzogMTVweDtcXG4gIH1cXG5cXG4gICN1c2VybGlzdCAuaW50aWFsVGV4dERpc3BsYXkge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgfVxcblxcbiAgLmludGlhbFRleHREaXNwbGF5IHAge1xcbiAgICBtYXgtd2lkdGg6IDUwMHB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBtYXgtd2lkdGg6IDUwMHB4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBmbGV4LXdyYXA6IHdyYXA7XFxuICB9XFxuXFxuICAuaW50aWFsVGV4dERpc3BsYXkgaW1nIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogYXV0bztcXG4gICAgcGFkZGluZzogMjBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogNDFweDtcXG4gICAgb2JqZWN0LWZpdDogY29udGFpbjtcXG4gIH1cXG5cXG4gIC5pbm5lcl9jb250YWluZXIgI2Zvcm0ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjQ3NDhiO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICBoZWlnaHQ6IDE2MHB4O1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgICBtYXgtd2lkdGg6IDcwMHB4O1xcblxcbiAgICBtYXJnaW46IDE3cHg7XFxuICB9XFxuXFxuICAjZm9ybSBkaXYuZm9ybURldGFpbHMge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIG1hcmdpbjogMDtcXG4gIH1cXG5cXG4gIC5wcmlvcml0eURhdGVMYXJnZVNjcmVlbiB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICB9XFxuXFxuICAjZm9ybSAuaW5wdXRzIHtcXG4gICAgbWF4LXdpZHRoOiAxNTBweDtcXG4gIH1cXG5cXG4gICNmb3JtIC5maXJzdC1pbnB1dENvbnRhaW5lciBpbnB1dCxcXG4gIC5QdGl0bGVJbnB1dENvbnRhaW5lciBpbnB1dCxcXG4gICNmb3JtIC5zZWNvbmQtaW5wdXRDb250YWluZXIgaW5wdXQsXFxuICAuUGRlc2NyaXB0aW9uSW5wdXRDb250YWluZXIgaW5wdXQge1xcbiAgICBtYXgtd2lkdGg6IDYwMHB4O1xcbiAgICBoZWlnaHQ6IDI1cHg7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgb3V0bGluZTogbm9uZTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBtYXJnaW46IDEwcHggMCAwIDA7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGluaGVyaXQ7XFxuICB9XFxuXFxuICBwLnNlY29uZC1pbnB1dENvbnRhaW5lciB7XFxuICAgIG1hcmdpbjogMDtcXG4gIH1cXG5cXG4gICNmb3JtIC5idXR0b25zIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgbWFyZ2luOiAxcHggMjNweDtcXG4gIH1cXG5cXG4gICNjb25maWdQcmlvcml0eURhdGVPbk1vYmlsZSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIHBvc2l0aW9uOiBzdGF0aWM7XFxuICB9XFxuXFxuICAjZm9ybSAub3RoZXItb3B0aW9ucy1vbi1mb3JtcyBidXR0b24sXFxuICAjcHJpb3JpdHksXFxuICAjZGF0ZVBpY2tlciB7XFxuICAgIHBhZGRpbmc6IDdweDtcXG4gICAgYm9yZGVyLXJhZGl1czogOXB4O1xcbiAgfVxcblxcbiAgZm9ybSNQcm9qZWN0Rm9ybSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM2NDc0OGI7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIGhlaWdodDogMTYwcHg7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIG1heC13aWR0aDogNjkzcHg7XFxuICAgIHBhZGRpbmctbGVmdDogMXJlbTtcXG4gICAgLyogbWFyZ2luOiA5cHggNjFweDsgKi9cXG4gIH1cXG5cXG4gIGRpdi5wcm9qZWN0Rm9ybURldGFpbHMge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIHRvcDogMDtcXG4gIH1cXG5cXG4gICovIC5wcm9qZWN0QnV0dG9uc0NvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIH1cXG5cXG4gIHNlbGVjdCNwcmlvcml0eSB7XFxuICAgIHBhZGRpbmc6IDhweDtcXG4gICAgYm9yZGVyLXJhZGl1czogOXB4O1xcbiAgfVxcblxcbiAgc2VsZWN0I3ByaW9yaXR5IG9wdGlvbiB7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gIH1cXG5cXG4gIGlucHV0I2RhdGVQaWNrZXIge1xcbiAgICBwYWRkaW5nOiAzcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDlweDtcXG4gIH1cXG59XFxuXFxuXFxuQG1lZGlhIChtaW4td2lkdGg6IDc2OXB4KSBhbmQgKG1heC13aWR0aDogMTAwMHB4KSB7XFxuICBib2R5IG1haW4ge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgfVxcblxcbiAgbWFpbiBoZWFkZXIge1xcbiAgICBncmlkLWFyZWE6IDEgLyAyIC8gMiAvIDY7XFxuXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZGE0YWY7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGdhcDogMTBweDtcXG4gIH1cXG5cXG4gIG1haW4gYXNpZGUge1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlMmU4ZjA7XFxuICB9XFxuXFxuICBtYWluICNDb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBmbGV4LXdyYXA6IHdyYXA7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgei1pbmRleDogMTtcXG4gIH1cXG5cXG4gIGhlYWRlciAubWVudUNvbnRyb2xsZXIge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgd2lkdGg6IDQwcHg7XFxuICAgIGhlaWdodDogNDBweDtcXG4gIH1cXG5cXG4gIGhlYWRlciAubWVudUNvbnRyb2xsZXIgc3ZnIHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIHdpZHRoOiA0MHB4O1xcbiAgICBoZWlnaHQ6IDQwcHg7XFxuICAgIGZpbGw6IHdoaXRlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIH1cXG5cXG5cXG5cXG5cXG4gICN1c2VybGlzdCAuaW50aWFsVGV4dERpc3BsYXkge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgfVxcblxcbiAgI3VzZXJsaXN0IC5pbnRpYWxUZXh0RGlzcGxheSBwIHtcXG4gICAgZm9udC1zaXplOiAxLjJyZW07XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcXG4gICAgbWFyZ2luOiAxMHB4IDAgMCAwO1xcbiAgICBtYXgtd2lkdGg6IDYwMHB4O1xcbiAgfVxcblxcbiAgI3VzZXJsaXN0ICNhZGRUb2RvQnRuQ29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiA1cHg7XFxuICAgIG1hcmdpbjogMjdweCAwIDExcHggMjZweDtcXG4gIH1cXG5cXG4gICN0YXNrIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiA1cHg7XFxuICAgIG1hcmdpbjogMjdweCAwIDExcHggMjZweDtcXG4gIH1cXG5cXG4gICN1c2VybGlzdCAjYWRkVG9kb0J0bkNvbnRhaW5lciBzdmcge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGMyNjI2O1xcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICAgIGZpbGw6IHdoaXRlO1xcbiAgfVxcblxcbiAgI3VzZXJsaXN0ICNhZGRUb2RvQnRuQ29udGFpbmVyIDpob3ZlciB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEuMDkpO1xcbiAgfVxcblxcbiAgI3VzZXJsaXN0ICNhZGRUb2RvQnRuQ29udGFpbmVyIGJ1dHRvbiB7XFxuICAgIGJvcmRlcjogMDtcXG4gICAgZm9udC1zaXplOiAxNnB4O1xcbiAgICBjb2xvcjogI2I5MWMxYztcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogaW5oZXJpdDtcXG4gIH1cXG5cXG4gICN1c2VybGlzdCAjYWRkVG9kb0J0bkNvbnRhaW5lciBidXR0b246aG92ZXIge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxLjA5KTtcXG4gIH1cXG5cXG4gIGRpdi5saXN0Q29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOiA1cHg7XFxuICAgIG1heC13aWR0aDogNzE0cHg7XFxuICAgIHdvcmQtYnJlYWs6IGJyZWFrLWFsbDtcXG4gICAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcXG4gICAgb3ZlcmZsb3ctd3JhcDogYnJlYWstd29yZDtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgYm94LXNoYWRvdzogMXB4IDBweCAzcHggMHB4O1xcbiAgICAvKiBtYXJnaW46IDE4cHggNjBweDsgKi9cXG4gICAgcGFkZGluZzogMTVweDtcXG4gIH1cXG5cXG4gIC5pbm5lcl9jb250YWluZXIgI2Zvcm0ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjQ3NDhiO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICBoZWlnaHQ6IDE4MHB4O1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgICBtYXgtd2lkdGg6IDc1MHB4O1xcblxcbiAgICBtYXJnaW46IDE3cHg7XFxuICB9XFxuXFxuICAjZm9ybSBkaXYuZm9ybURldGFpbHMge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFxuICAgIHBhZGRpbmc6IDlweCAyMHB4O1xcbiAgICBtYXJnaW46IDA7XFxuICB9XFxuXFxuICAucHJpb3JpdHlEYXRlTGFyZ2VTY3JlZW4ge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgfVxcblxcbiAgI2Zvcm0gLmlucHV0cyB7XFxuICAgIG1heC13aWR0aDogMTUwcHg7XFxuICB9XFxuXFxuICAjZm9ybSAuZmlyc3QtaW5wdXRDb250YWluZXIgaW5wdXQsXFxuICAuUHRpdGxlSW5wdXRDb250YWluZXIgaW5wdXQge1xcbiAgICBtYXgtd2lkdGg6IDQyMHB4O1xcbiAgICBtYXgtaGVpZ2h0OiA2MHB4O1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIG91dGxpbmU6IG5vbmU7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogaW5oZXJpdDtcXG4gICAgbWFyZ2luOiAwO1xcbiAgfVxcblxcbiAgI2Zvcm0gLnNlY29uZC1pbnB1dENvbnRhaW5lciBpbnB1dCxcXG4gIC5QZGVzY3JpcHRpb25JbnB1dENvbnRhaW5lciBpbnB1dCB7XFxuICAgIG1heC13aWR0aDogNDIwcHg7XFxuICAgIG1heC1oZWlnaHQ6IDYwcHg7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgb3V0bGluZTogbm9uZTtcXG4gICAgY29sb3I6IHJnYig5MCwgNzcsIDc3KTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogaW5oZXJpdDtcXG4gICAgbWFyZ2luOiAwO1xcbiAgfVxcblxcbiAgI2Zvcm0gLmJ1dHRvbnMge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIG1hcmdpbjogMXB4IDMzcHg7XFxuICB9XFxuXFxuICBmb3JtI1Byb2plY3RGb3JtIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzY0NzQ4YjtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgaGVpZ2h0OiAxNjBweDtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gICAgbWF4LXdpZHRoOiA2OTNweDtcXG4gICAgcGFkZGluZy1sZWZ0OiAxcmVtO1xcbiAgfVxcblxcbiAgZGl2LnByb2plY3RGb3JtRGV0YWlscyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgdG9wOiAwO1xcbiAgfVxcblxcbiAgZGl2LnByaW9yaXR5RGF0ZU9uTGFyZ2VTY3JlZW4ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHRvcDogMDtcXG4gIH1cXG5cXG4gIC5wcm9qZWN0QnV0dG9uc0NvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIH1cXG5cXG4gICNjb25maWdQcmlvcml0eURhdGVPbk1vYmlsZSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIHBvc2l0aW9uOiBzdGF0aWM7XFxuICB9XFxuXFxuICAjZm9ybSAub3RoZXItb3B0aW9ucy1vbi1mb3JtcyBidXR0b24sXFxuICAjcHJpb3JpdHksXFxuICAjZGF0ZVBpY2tlciB7XFxuICAgIHBhZGRpbmc6IDhweDtcXG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICB9XFxuXFxuXFxufVxcblxcbm1haW4ge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMjUwcHggMWZyO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxMDBweCBtaW5tYXgoMTAwdmgsIDYwMHB4KTtcXG4gIDtcXG59XFxuXFxuaGVhZGVyIHtcXG4gIGdyaWQtYXJlYTogMSAvIDIgLyAyIC8gNjtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZGE0YWY7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG59XFxuXFxuLmhlYWRlclRleHRDb250ZW50IHtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxuXFxufVxcblxcbmFzaWRlIHtcXG4gIGdyaWQtYXJlYTogMS8gMS8gNC8gMjtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNlMmU4ZjA7XFxufVxcblxcbi5zaWRlQmFyQ29udGVudENvbnRhaW5lciB7XFxuICBtYXJnaW46IDQwcHggMCAwIDIwcHg7XFxufVxcblxcbiNDb250YWluZXIge1xcbiAgZ3JpZC1hcmVhOiAyIC8gMiAvIDMgLyA0O1xcblxcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMTAwcHggNjUwcHggbWlubWF4KDEwMHB4LCAzNTBweCk7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxufVxcblxcbi5pbm5lcl9jb250YWluZXIge1xcbiAgZ3JpZC1hcmVhOiAxIC8gMiAvIDMgLyAzO1xcbn1cXG5cXG4uaW50aWFsVGV4dERpc3BsYXkge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBwYWRkaW5nOiAxMHB4O1xcbn1cXG5cXG4uaW50aWFsVGV4dERpc3BsYXkgcCB7XFxuICBmb250LXNpemU6IDEuMnJlbTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGZvbnQtd2VpZ2h0OiA4MDA7XFxuICBjb2xvcjogIzc4MzUwZjtcXG4gIG1hcmdpbjogMTBweCAwIDAgMDtcXG59XFxuXFxuLmludGlhbFRleHREaXNwbGF5IGltZyB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogYXV0bztcXG4gIGJvcmRlci1yYWRpdXM6IDMwcHg7XFxuICBwYWRkaW5nOiAyMHB4O1xcbn1cXG5cXG4jYWRkVG9kb0J0bkNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4uZW1wdHkge1xcbiAgZ3JpZC1hcmVhOiAxIC8gMyAvIDUgLyA0O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y4ZjhmODtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcXFwiLi9pbWFnZXMvVG9kby0xLmpwZ1xcXCIpO1xcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXG59XFxuXFxuLm1lbnVDb250cm9sbGVyIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxuICB3aWR0aDogNDBweDtcXG4gIGhlaWdodDogNDBweDtcXG59XFxuXFxuLmNoZWNrQm94IHtcXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcXG4gIC1tb3otYXBwZWFyYW5jZTogbm9uZTtcXG4gIHdpZHRoOiAyMHB4O1xcbiAgaGVpZ2h0OiAyMHB4O1xcbiAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbi5jaGVja0JveDo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDUwJTtcXG4gIGxlZnQ6IDUwJTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcbiAgZm9udC1zaXplOiAxNnB4O1xcbiAgY29sb3I6IHJnYigyMiwgMjUyLCAyMik7XFxuICBvcGFjaXR5OiAwO1xcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjNzIGVhc2U7XFxufVxcblxcbi5jaGVja0JveDpob3Zlcjo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCLinJNcXFwiO1xcbiAgb3BhY2l0eTogMC41O1xcbn1cXG5cXG5zdmcge1xcbiAgd2lkdGg6IDM0cHg7XFxuICBoZWlnaHQ6IDMzcHg7XFxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG5cXG59XFxuXFxuI3Rhc2sge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDVweDtcXG4gIG1hcmdpbjogMjdweCAwIDExcHggMjZweDtcXG59XFxuXFxuI3Rhc2sgc3ZnIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNkYzI2MjY7XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICBmaWxsOiB3aGl0ZTtcXG59XFxuXFxuI3Rhc2sgOmhvdmVyIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxLjA5KTtcXG59XFxuXFxuI3Rhc2sgYnV0dG9uIHtcXG4gIGJvcmRlcjogMDtcXG4gIGZvbnQtc2l6ZTogMS40cmVtO1xcbiAgY29sb3I6ICNiOTFjMWM7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmhlcml0O1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG59XFxuXFxuI3Rhc2sgYnV0dG9uOmhvdmVyIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxLjA5KTtcXG59XFxuXFxuYnV0dG9uLmRlbGV0ZVRhc2sge1xcbiAgcGFkZGluZzogMTBweDtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJvcmRlci1yYWRpdXM6IDdweDtcXG4gIGZvbnQtc2l6ZTogMS4xcmVtO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2UwNDg3YztcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjJzIGVhc2Utb3V0O1xcbn1cXG5cXG5idXR0b24uZGVsZXRlVGFzazpob3ZlciB7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMDUpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzRiMDcwNztcXG5cXG59XFxuXFxuYnV0dG9uLmRlbGV0ZVRhc2s6YWN0aXZlIHtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMC45KTtcXG59XFxuXFxuLmxpc3RDb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogNXB4O1xcbiAgbWF4LXdpZHRoOiA3MTRweDtcXG4gIHdvcmQtYnJlYWs6IGJyZWFrLWFsbDtcXG4gIHdoaXRlLXNwYWNlOiBub3JtYWw7XFxuICBvdmVyZmxvdy13cmFwOiBicmVhay13b3JkO1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIGJveC1zaGFkb3c6IDFweCAwcHggM3B4IDBweDtcXG4gIG1hcmdpbjogMThweCAxOHB4O1xcbiAgcGFkZGluZzogMTVweDtcXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAzbXMgZWFzZTtcXG59XFxuXFxuLmxpc3RDb250YWluZXI6aG92ZXIge1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjAxKTtcXG59XFxuXFxuLnByaW9yaXR5RGF0ZU9uTGFyZ2VTY3JlZW4ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBtYXgtd2lkdGg6IDIwMHB4O1xcbn1cXG5cXG4ucHJvamVjdEJ1dHRvbnNDb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIHBhZGRpbmctaW5saW5lOiAxOHB4XFxufVxcblxcbi5wcm9qZWN0QnV0dG9uc0NvbnRhaW5lciBidXR0b24ge1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYm9yZGVyLXJhZGl1czogN3B4O1xcbiAgcGFkZGluZzogOXB4O1xcbiAgZm9udC1zaXplOiAxLjJyZW07XFxuICBmb250LXdlaWdodDogNjAwO1xcbn1cXG5cXG4uZXhjbHVkZWQge1xcbiAgY29sb3I6IHJlZDtcXG59XFxuXFxuLnRhc2tDb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXg6IDE7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcblxcbi50YXNrVGl0bGUsXFxuLm5ld1Byb2plY3QtdGFzay10aXRsZSxcXG4uZWRpdGFibGVTYXZlVGFza0VsIHtcXG4gIG1hcmdpbjogMDtcXG4gIGZvbnQtc2l6ZTogMS4zcmVtO1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgdGV4dC1kZWNvcmF0aW9uLWNvbG9yOiByZWQ7XFxufVxcblxcbi50YXNrRGVzY3JpcHRpb24sXFxuLm5ld1Byb2plY3QtZGVzY3JpcHRpb24ge1xcbiAgbWFyZ2luOiAwO1xcbiAgZm9udC1zaXplOiAxLjJyZW07XFxufVxcblxcbi50YXNrUHJpb3JpdHkge1xcbiAgZm9udC1zaXplOiAxOXB4O1xcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzU3M2QzZDtcXG4gIHBhZGRpbmc6IDZweDtcXG4gIG1hcmdpbjogMCAwIDdweDtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHdpZHRoOiAxMzBweDtcXG59XFxuXFxuLnRhc2tQcmlvcml0eTpob3ZlciB7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMDUpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzljMTUxNTtcXG59XFxuXFxuXFxuLmlubmVyVGFza0hhbmRsZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBtYXJnaW46IDBweCAxNXB4IDAgNDBweDtcXG59XFxuXFxuYXNpZGUgdWwgbGkge1xcbiAgbGlzdC1zdHlsZTogbm9uZTtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIHdpZHRoOiAxMDAlO1xcbiAgcGFkZGluZzogMTBweCAyMHB4O1xcbn1cXG5cXG4uaW5ib3gtY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiA1cHg7XFxuICBmb250LXNpemU6IDEuM3JlbTtcXG59XFxuXFxuXFxuLmluYm94IHtcXG4gIGZvbnQtc2l6ZTogMS40cmVtO1xcbn1cXG5cXG4uaW5ib3hMaXN0Q29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IDVweDtcXG59XFxuXFxuLmluYm94VGFza0NvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleDogMTtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuXFxuLmluYm94VGFza1RpdGxlIHtcXG4gIG1hcmdpbjogMDtcXG4gIGZvbnQtc2l6ZTogMThweDtcXG59XFxuXFxuLmluYm94VGFza0Rlc2NyaXB0aW9uIHtcXG4gIG1hcmdpbjogMDtcXG4gIGZvbnQtc2l6ZTogMTRweDtcXG59XFxuXFxuLmluYm94VGFza1ByaW9yaXR5IHtcXG4gIG1hcmdpbjogMCAyMHB4IDAgMDtcXG4gIGZvbnQtc2l6ZTogMS4zcmVtO1xcblxcbn1cXG5cXG4uZHVlRGF0ZSB7XFxuICBtYXJnaW46IDA7XFxuICBmb250LXNpemU6IDEuMnJlbTtcXG59XFxuXFxuLmVkaXQge1xcbiAgYm9yZGVyOiBub25lO1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIGZvbnQtc2l6ZTogMTdweDtcXG4gIG1heC13aWR0aDogMTEwcHg7XFxuICBtYXJnaW46IDAgMDtcXG59XFxuXFxuI3Byb2plY3RzIGgzIHtcXG4gIG1hcmdpbjogMCAwIDAgMTBweDtcXG59XFxuXFxuI2Zvcm0ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzY0NzQ4YjtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICBoZWlnaHQ6IDE3MHB4O1xcbiAgZGlzcGxheTogbm9uZTtcXG4gIHBhZGRpbmctbGVmdDogMXJlbTtcXG4gIG1hcmdpbjogMTBweCAxMHB4IDAgMDtcXG59XFxuXFxuLmZvcm1EZXRhaWxzIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgbWFyZ2luOiAxMnB4IDE1cHg7XFxufVxcblxcbmlucHV0I2RhdGVQaWNrZXIge1xcbiAgbWF4LXdpZHRoOiAxMzNweDtcXG59XFxuXFxuLmJ1dHRvbnMge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIG1hcmdpbjogMXB4IDMzcHg7XFxufVxcblxcbi5idXR0b25zIGJ1dHRvbiB7XFxuICBib3JkZXI6IG5vbmU7XFxuICBib3JkZXItcmFkaXVzOiA3cHg7XFxuICBwYWRkaW5nOiA3cHg7XFxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4ycyBlYXNlLW91dDtcXG59XFxuXFxuLmJ1dHRvbnMgYnV0dG9uOmhvdmVyIHtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4wNSk7XFxufVxcblxcbiNQcm9qZWN0Rm9ybSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjQ3NDhiO1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIGhlaWdodDogMTY2cHg7XFxuICBkaXNwbGF5OiBub25lO1xcbiAgcGFkZGluZzogMTBweDtcXG4gIG1hcmdpbjogMTVweCAxNXB4IDAgMTdweDtcXG59XFxuXFxuLnByb2plY3RGb3JtRGV0YWlscyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIHBhZGRpbmctbGVmdDogMXJlbTtcXG4gIHRvcDogMDtcXG59XFxuXFxuLmZpcnN0LWlucHV0Q29udGFpbmVyIGlucHV0LFxcbi5QdGl0bGVJbnB1dENvbnRhaW5lciBpbnB1dCB7XFxuICBtYXgtd2lkdGg6IDYwMHB4O1xcbiAgaGVpZ2h0OiAzN3B4O1xcbiAgYm9yZGVyOiBub25lO1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIG1hcmdpbjogMTBweCAwIDAgMDtcXG4gIGJhY2tncm91bmQtY29sb3I6IGluaGVyaXQ7XFxufVxcblxcbi50YXNrLXRpdGxlLFxcbi5kZXNjcmlwdGlvbiB7XFxuICB3aWR0aDogMzUwcHg7XFxuICBmb250LXNpemU6IDEuMXJlbTtcXG5cXG59XFxuXFxuLmZpcnN0LWlucHV0Q29udGFpbmVyIGlucHV0OjpwbGFjZWhvbGRlcixcXG4uUHRpdGxlSW5wdXRDb250YWluZXIgaW5wdXQ6OnBsYWNlaG9sZGVyIHtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIHBhZGRpbmc6IDAgMTBweDtcXG4gIG9wYWNpdHk6IDE7XFxufVxcblxcbi5zZWNvbmQtaW5wdXRDb250YWluZXIgaW5wdXQsXFxuLlBkZXNjcmlwdGlvbklucHV0Q29udGFpbmVyIGlucHV0IHtcXG4gIG1heC13aWR0aDogNjAwcHg7XFxuICBoZWlnaHQ6IDM3cHg7XFxuICBib3JkZXI6IG5vbmU7XFxuICBvdXRsaW5lOiBub25lO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogaW5oZXJpdDtcXG4gIG1hcmdpbjogMDtcXG59XFxuXFxuLnBUaXRsZSwgLnBEZXNjcmlwdGlvbiB7XFxuICB3aWR0aDogMzUwcHg7XFxuICBmb250LXNpemU6IDEuMDdyZW07XFxufVxcblxcbi5zZWNvbmQtaW5wdXRDb250YWluZXIgaW5wdXQ6OnBsYWNlaG9sZGVyLFxcbi5QZGVzY3JpcHRpb25JbnB1dENvbnRhaW5lciBpbnB1dDo6cGxhY2Vob2xkZXIge1xcbiAgcGFkZGluZzogMCAxMHB4O1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgb3BhY2l0eTogMTtcXG59XFxuXFxuLmZpcnN0LWlucHV0Q29udGFpbmVyLFxcbi5zZWNvbmQtaW5wdXRDb250YWluZXIge1xcbiAgbWFyZ2luOiAxMHB4IDAgMCAwO1xcbiAgZm9udC1zaXplOiAxcmVtO1xcbn1cXG5cXG4uc3VibWl0QnRuOmFjdGl2ZSB7XFxuICB0cmFuc2Zvcm06IGFjdGl2ZSBzY2FsZSgxLjEpO1xcbn1cXG5cXG4ub3RoZXItb3B0aW9ucy1vbi1mb3JtcyBidXR0b24sXFxuI3ByaW9yaXR5LFxcbmlucHV0I2RhdGVQaWNrZXIge1xcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuM3MgZWFzZS1pbjtcXG4gIHBhZGRpbmc6IDdweDtcXG4gIGJvcmRlci1yYWRpdXM6IDdweDtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwODMzNDQ7XFxuICBjb2xvcjogd2hpdGU7XFxuICBmb250LXNpemU6IDEuMXJlbTtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxufVxcblxcbiNwcmlvcml0eSB7XFxuICBtYXJnaW46IDEwcHggMCA4cHggMDtcXG59XFxuXFxuI3Byb2plY3RQcmlvcml0eSxcXG4uZm9vdGVyIHtcXG4gIHBhZGRpbmc6IDdweDtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIG1hcmdpbjogMCA0cHggNXB4IDA7XFxuXFxufVxcblxcblxcblxcbiNwcm9qZWN0UHJpb3JpdHksICNwcm9qZWN0UHJpb3JpdHkgb3B0aW9uIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM0NDQwM2M7XFxuICBjb2xvcjogI2ZhZmFmYTtcXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG59XFxuXFxuXFxuXFxuLmFkZFByb2plY3RzQ29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAxMHB4O1xcbn1cXG5cXG4uaW5ib3gtY29udGFpbmVyOmhvdmVyLCAuYWRkUHJvamVjdHNDb250YWluZXI6aG92ZXIsIC5wcm9qZWN0X3RleHQ6aG92ZXIsICNwcm9qZWN0LWRyb3Bkb3duOmhvdmVyIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxLjA1KTtcXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcbn1cXG5cXG5cXG4uYWRkUHJvamVjdHNDb250YWluZXIgc3ZnIHtcXG4gIHdpZHRoOiAyNXB4O1xcbiAgaGVpZ2h0OiAyNXB4O1xcbn1cXG5cXG4jYWRkTmV3UHJvamVjdEVsIHtcXG4gIG1hcmdpbjogMDtcXG4gIGZvbnQtc2l6ZTogMS4zcmVtO1xcbn1cXG5cXG4ucHJvamVjdF90ZXh0IHtcXG4gIG1hcmdpbjogMCAwIDEwcHggMTdweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDlweDtcXG4gIGJvcmRlci1yYWRpdXM6IDVweCAwcHggMHB4IDVweDtcXG59XFxuXFxuXFxuI3Byb2plY3QtZHJvcGRvd24ge1xcbiAgYm9yZGVyOiAwO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogaW5oZXJpdDtcXG4gIGZvbnQtc2l6ZTogMS4zcmVtO1xcbiAgZm9udC13ZWlnaHQ6IDU1MDtcXG4gIG1heC13aWR0aDogMjAwcHg7XFxufVxcblxcblxcbiNwcm9qZWN0LWRyb3Bkb3duOmZvY3VzIHtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIG91dGxpbmU6IG5vbmU7XFxufVxcblxcbiNuZXdQcm9qZWN0c0Zvcm1Db250YWluZXJFbCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4jUHJvamVjdHNGb3JtTmFtZUNvbnRhaW5lckVsIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5pbnB1dE5ld3Byb2plY3RGb3JtTmFtZSB7XFxuICBkaXNwbGF5OiBub25lO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2NlZTNlMztcXG4gIG1heC13aWR0aDogNDAwcHg7XFxuICBtYXgtaGVpZ2h0OiAzMDBweDtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICBwYWRkaW5nOiA0NnB4O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgbWFyZ2luOiA2MHB4IDAgMCAwO1xcbiAgYm94LXNoYWRvdzogMHB4IDlweCAzcHggMHB4O1xcbn1cXG5cXG4uaW5wdXROZXdwcm9qZWN0Rm9ybU5hbWUgaDIge1xcbiAgbWFyZ2luOiAwIDAgMTBweCAwO1xcbn1cXG5cXG4uaW5wdXROZXdQcm9qZWN0TmFtZSB7XFxuICBtYXgtd2lkdGg6IDM1MHB4O1xcbiAgbWF4LWhlaWdodDogMzVweDtcXG4gIHBhZGRpbmc6IDE3cHg7XFxuICBib3JkZXI6IG5vbmU7XFxuICBib3JkZXItcmFkaXVzOiA3cHg7XFxuICBmb250LXNpemU6IDE5cHg7XFxufVxcblxcbmlucHV0LlNhdmVQcm9qZWN0TmFtZSB7XFxuICBwYWRkaW5nOiA5cHg7XFxuICBib3JkZXI6IG5vbmU7XFxuICBib3JkZXItcmFkaXVzOiA4cHg7XFxuICBtYXgtd2lkdGg6IDEwMHB4O1xcbiAgaGVpZ2h0OiA0MHB4O1xcbiAgZm9udC1zaXplOiAxOXB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0MCwgNTksIDEzNCk7XFxuICBjb2xvcjogd2hpdGU7XFxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gM21zIGVhc2U7XFxufVxcblxcbmlucHV0LlNhdmVQcm9qZWN0TmFtZTpob3ZlciB7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMDMpXFxufVxcblxcbi5wcm9qZWN0TmFtZVNhdmVyQnRuQ29udGFpbmVyIHtcXG4gIG1hcmdpbjogMTBweCAwO1xcbn1cXG5cXG4ucHJvamVjdE5hbWVTYXZlckJ0bkNvbnRhaW5lciBidXR0b24ge1xcbiAgcGFkZGluZzogOXB4O1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xcbiAgd2lkdGg6IDEwMHB4O1xcbiAgaGVpZ2h0OiA0MHB4O1xcbiAgZm9udC1zaXplOiAxOXB4O1xcbn1cXG5cXG4jUHJvamVjdHNGb3JtTmFtZUNvbnRhaW5lckVsIC5DYW5jZWwge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JleTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAzbXMgZWFzZTtcXG5cXG59XFxuXFxuI1Byb2plY3RzRm9ybU5hbWVDb250YWluZXJFbCAuQ2FuY2VsOmhvdmVyIHtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4wMylcXG59XFxuXFxuI25ld1Byb2plY3RUYXNrc0NvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4jbmV3UHJvamVjdFRhc2tCdG5XcmFwcGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbiNuZXdQcm9qZWN0VGFza3NJbm5lckNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiA1cHg7XFxuICBtYXJnaW46IDEwcHg7XFxuICBib3gtc2hhZG93OiAjNWM1NTU1IDFweCAzcHggM3B4IDFweDtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICBwYWRkaW5nOiAxMHB4O1xcbiAgd2lkdGg6IDk1cHg7XFxuXFxufVxcblxcbnN2Zy5hZGRUYXNrIHtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gIGZpbGw6IHdoZWF0O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xcbn1cXG5cXG4ubmV3UHJvamVjdEFkZEJ0biB7XFxuICBib3JkZXI6IDA7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmhlcml0O1xcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXG59XFxuXFxuI1Byb2plY3RkYXRlUGlja2VyIHtcXG4gIHBhZGRpbmc6IDJweDtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGhlaWdodDogMzJweDtcXG4gIHBhZGRpbmc6IDJweDtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGhlaWdodDogMzJweDtcXG4gIGZvbnQtc2l6ZTogMS4xcmVtO1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gIGJhY2tncm91bmQ6ICNmMGYwZjA7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbiNQcm9qZWN0ZGF0ZVBpY2tlciBpbnB1dFt0eXBlPSdkYXRlJ10ge1xcbiAgZmlsbDogd2hpdGU7XFxufVxcblxcbiNzdWJtaXRCdG5Gb3JQcm9qZWN0IHtcXG4gIHBhZGRpbmc6IDdweDtcXG4gIGJvcmRlci1yYWRpdXM6IDlweDtcXG4gIC8qIGZvbnQtc2l6ZTogMS4ycmVtO1xcbiAgZm9udC13ZWlnaHQ6IDYwMDsgKi9cXG59XFxuXFxuI3N1Ym1pdEJ0bkZvclByb2plY3Q6YWN0aXZlIHtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcXG59XFxuXFxuLmNhbmNlbEZvclByb2plY3RCdG4ge1xcbiAgcGFkZGluZzogN3B4O1xcbiAgYm9yZGVyLXJhZGl1czogOXB4O1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpO1xuXG4gIC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9XG5cbiAgLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xub3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsIi8vIGltcG9ydCB7IG15UHJvamVjdHMgfSBmcm9tICcuL2RvbS1FbCdcbmltcG9ydCB7IGRpc3BsYXlGb3JtIH0gZnJvbSBcIi4vZG9tLUVsXCI7XG4vLyBpbXBvcnQgeyBlZGl0VGFzayB9IGZyb20gXCIuL2xvZ2ljc1wiO1xuXG5jb25zdCBteVByb2plY3RzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwcm9qZWN0cyBoM1wiKTtcbmNvbnN0IHNjcmVlbkNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjQ29udGFpbmVyXCIpO1xuY29uc3QgdXNlckxpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3VzZXJsaXN0XCIpO1xuY29uc3QgYWRkUHJvamVjdHNDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFkZFByb2plY3RzQ29udGFpbmVyXCIpO1xuY29uc3QgbmV3UHJvamVjdHNGb3JtQ29udGFpbmVyRWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICBcIiNuZXdQcm9qZWN0c0Zvcm1Db250YWluZXJFbFwiLFxuKTtcbmV4cG9ydCBjb25zdCBpbnB1dE5ld3Byb2plY3RGb3JtTmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gIFwiLmlucHV0TmV3cHJvamVjdEZvcm1OYW1lXCIsXG4pO1xuY29uc3QgbmV3UHJvamVjdE5hbWVSZXF1ZXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5uZXdQcm9qZWN0TmFtZVJlcXVlc3RcIik7XG5jb25zdCBuZXdQcm9qZWN0TmFtZVRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5oZWFkZXJUZXh0Q29udGVudFwiKTtcbmNvbnN0IFNhdmVQcm9qZWN0TmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuU2F2ZVByb2plY3ROYW1lXCIpO1xuY29uc3QgbmV3UHJvamVjdFRhc2sgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm5ld1Byb2plY3RUYXNrXCIpO1xuY29uc3QgbmV3UHJvamVjdFRhc2tzQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbmNvbnN0IG5ld1Byb2plY3RUYXNrQnRuV3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuY29uc3QgbmV3UHJvamVjdFRhc2tzSW5uZXJDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXG5jb25zdCBuZXdQcm9qZWN0QWRkQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbmNvbnN0IHN1Ym1pdFRhc2tCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3N1Ym1pdEJ0bkZvclByb2plY3RcIik7XG5jb25zdCBjYW5jZWxUYXNrQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jYW5jZWxGb3JQcm9qZWN0QnRuXCIpO1xuY29uc3QgZGlzcGxheVByb2plY3RUb2RvcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZGlzcGxheVByb2plY3RUb2Rvc1wiKTtcblxubGV0IHByb2plY3RGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNQcm9qZWN0Rm9ybVwiKTtcbmxldCBmb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNmb3JtXCIpO1xubGV0IGlucHV0RmllbGRFbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucFRpdGxlXCIpO1xubGV0IGRlc2NyaXB0aW9uRmllbGRFbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucERlc2NyaXB0aW9uXCIpO1xubGV0IHNlbGVjdFByaW9yaXR5RWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Byb2plY3RQcmlvcml0eVwiKTtcbmxldCBkdWVEYXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNQcm9qZWN0ZGF0ZVBpY2tlclwiKTtcbmNvbnN0IHByb2plY3REcm9wRG93biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcHJvamVjdC1kcm9wZG93blwiKTtcbmxldCBzZWxlY3RlZFByb2plY3QgPSBwcm9qZWN0RHJvcERvd24udmFsdWU7XG5cbmNvbnN0IG5ld1Byb2plY3RGb3JtTmFtZUJ0bkVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgXCIubmV3UHJvamVjdEZvcm1OYW1lQnRuRWxcIixcbik7XG5cbmNsYXNzIGdldExpc3Qge1xuICBjb25zdHJ1Y3Rvcih0aXRsZSwgZGVzY3JpcHRpb24sIHByaW9yaXR5LCBkYXRlKSB7XG4gICAgdGhpcy50aXRsZSA9IHRpdGxlO1xuICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcbiAgICB0aGlzLnByaW9yaXR5ID0gcHJpb3JpdHk7XG4gICAgdGhpcy5kYXRlID0gZGF0ZTtcbiAgfVxufVxuXG5mdW5jdGlvbiBkaXNwbGF5UmVxdWVzdE5ld1Byb2plY3RGb3JtTmFtZSgpIHtcbiAgIGNvbnN0IGludGlhbFRleHREaXNwbGF5Q29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICBcIi5pbnRpYWxUZXh0RGlzcGxheUNvbnRhaW5lclwiLFxuICApO1xuICBjb25zdCBwcm9qZWN0VGFza0J0biA9IGNyZWF0ZU5ld1Byb2plY3RUYXNrQnRuKCk7XG5cbiAgY29uc29sZS5sb2cocHJvamVjdFRhc2tCdG4pO1xuICBcblxuICBpbnRpYWxUZXh0RGlzcGxheUNvbnRhaW5lci5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICBpZiAodXNlckxpc3QudGV4dENvbnRlbnQpIHtcbiAgICB1c2VyTGlzdC50ZXh0Q29udGVudCA9IFwiXCI7XG4gIH1cblxuICBpZiAoZm9ybS5zdHlsZS5kaXNwbGF5ID09PSBcImJsb2NrXCIpIHtcbiAgICBmb3JtLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgfVxuICBpZiAocHJvamVjdEZvcm0uc3R5bGUuZGlzcGxheSA9PT0gXCJibG9ja1wiKSB7XG4gICAgcHJvamVjdEZvcm0uc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICB9XG4gIFxuICAgIHByb2plY3RUYXNrQnRuLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG5cbiAgaW5wdXROZXdwcm9qZWN0Rm9ybU5hbWUuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcbiAgcmV0dXJuIHsgaW5wdXROZXdwcm9qZWN0Rm9ybU5hbWUgfTtcbn1cbmFkZFByb2plY3RzQ29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoXG4gIFwiY2xpY2tcIixcbiAgZGlzcGxheVJlcXVlc3ROZXdQcm9qZWN0Rm9ybU5hbWUsXG4pO1xuXG4vL0dldCBOZXcgUHJvamVjdCBOYW1lIEZ1bmN0aW9uLlxuZXhwb3J0IGZ1bmN0aW9uIGdldG5ld1Byb2plY3RJbnB1dE5hbWUoKSB7XG4gIGNvbnN0IGlucHV0TmV3UHJvamVjdE5hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmlucHV0TmV3UHJvamVjdE5hbWVcIik7XG4gIGNvbnN0IGlucHV0TmV3UHJvamVjdE5hbWVWYWx1ZSA9IGlucHV0TmV3UHJvamVjdE5hbWUudmFsdWU7XG4gIG5ld1Byb2plY3ROYW1lVGl0bGUudGV4dENvbnRlbnQgPSBpbnB1dE5ld1Byb2plY3ROYW1lVmFsdWU7XG5cbiAgLy8gcHJvamVjdHMucHVzaChpbnB1dE5ld1Byb2plY3ROYW1lVmFsdWUpXG5cbiAgaW5wdXROZXdQcm9qZWN0TmFtZS52YWx1ZSA9IFwiXCI7XG5cbiAgYWRkUHJvamVjdE5hbWUoaW5wdXROZXdQcm9qZWN0TmFtZVZhbHVlKTtcblxuICBpZiAoaW5wdXROZXdwcm9qZWN0Rm9ybU5hbWUpIHtcbiAgICBpbnB1dE5ld3Byb2plY3RGb3JtTmFtZS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gIH0gZWxzZSB7XG4gICAgaW5wdXROZXdwcm9qZWN0Rm9ybU5hbWUuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcbiAgfVxuXG4gIHJldHVybiB7IGlucHV0TmV3UHJvamVjdE5hbWVWYWx1ZSB9O1xufVxuXG4vL0NhbmNlbCBwcm9qZWN0IGZvcm0gbmFtZSByZXF1ZXN0XG5uZXdQcm9qZWN0Rm9ybU5hbWVCdG5FbC5hZGRFdmVudExpc3RlbmVyKFxuICBcImNsaWNrXCIsXG4gICgpID0+IHsgXG5pbnB1dE5ld3Byb2plY3RGb3JtTmFtZS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgY29uc3QgaW50aWFsVGV4dERpc3BsYXlDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgIFwiLmludGlhbFRleHREaXNwbGF5Q29udGFpbmVyXCIsXG4gICk7XG5cbiAgICBpbnRpYWxUZXh0RGlzcGxheUNvbnRhaW5lci5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuXG4gIH1cbik7XG5cbmxldCBzdmdFbGVtZW50ID0gbnVsbDtcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVOZXdQcm9qZWN0VGFza0J0bigpIHtcbiAgbmV3UHJvamVjdFRhc2tzQ29udGFpbmVyLnNldEF0dHJpYnV0ZShcImlkXCIsIFwibmV3UHJvamVjdFRhc2tzQ29udGFpbmVyXCIpO1xuICBuZXdQcm9qZWN0VGFza0J0bldyYXBwZXIuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJuZXdQcm9qZWN0VGFza0J0bldyYXBwZXJcIik7XG4gIG5ld1Byb2plY3RUYXNrc0lubmVyQ29udGFpbmVyLnNldEF0dHJpYnV0ZShcbiAgICBcImlkXCIsXG4gICAgXCJuZXdQcm9qZWN0VGFza3NJbm5lckNvbnRhaW5lclwiLFxuICApO1xuICBcbiBpZiAobmV3UHJvamVjdFRhc2tzSW5uZXJDb250YWluZXIuY29udGFpbnMoc3ZnRWxlbWVudCkpIHtcbiAgICBuZXdQcm9qZWN0VGFza3NJbm5lckNvbnRhaW5lci5yZW1vdmVDaGlsZChzdmdFbGVtZW50KTtcbiAgfVxuXG4gIG5ld1Byb2plY3RBZGRCdG4udGV4dENvbnRlbnQgPSBcIkFkZCB0YXNrXCI7XG5cbiAgLy8gQ3JlYXRlIHRoZSBTVkcgZWxlbWVudFxuICBjb25zdCBzdmdOYW1lc3BhY2UgPSBcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI7XG4gICAgc3ZnRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyhzdmdOYW1lc3BhY2UsIFwic3ZnXCIpO1xuXG4gIC8vIFNldCB0aGUgY2xhc3MgYW5kIHZpZXdCb3ggYXR0cmlidXRlc1xuICBzdmdFbGVtZW50LnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiYWRkVGFza1wiKTtcbiAgc3ZnRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJ2aWV3Qm94XCIsIFwiMCAwIDI0IDI0XCIpO1xuXG4gIC8vIENyZWF0ZSB0aGUgdGl0bGUgZWxlbWVudFxuICBjb25zdCB0aXRsZUVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoc3ZnTmFtZXNwYWNlLCBcInRpdGxlXCIpO1xuICB0aXRsZUVsZW1lbnQudGV4dENvbnRlbnQgPSBcInBsdXNcIjtcbiAgc3ZnRWxlbWVudC5hcHBlbmRDaGlsZCh0aXRsZUVsZW1lbnQpO1xuXG4gIC8vIENyZWF0ZSB0aGUgcGF0aCBlbGVtZW50XG4gIGNvbnN0IHBhdGhFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKHN2Z05hbWVzcGFjZSwgXCJwYXRoXCIpO1xuICBwYXRoRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJkXCIsIFwiTTE5LDEzSDEzVjE5SDExVjEzSDVWMTFIMTFWNUgxM1YxMUgxOVYxM1pcIik7XG4gIHN2Z0VsZW1lbnQuYXBwZW5kQ2hpbGQocGF0aEVsZW1lbnQpO1xuXG4gIG5ld1Byb2plY3RBZGRCdG4uY2xhc3NMaXN0LmFkZChcIm5ld1Byb2plY3RBZGRCdG5cIik7XG5cbiAgbmV3UHJvamVjdFRhc2tzSW5uZXJDb250YWluZXIuYXBwZW5kQ2hpbGQoc3ZnRWxlbWVudCk7XG4gIG5ld1Byb2plY3RUYXNrc0lubmVyQ29udGFpbmVyLmFwcGVuZENoaWxkKG5ld1Byb2plY3RBZGRCdG4pO1xuICBuZXdQcm9qZWN0VGFza0J0bldyYXBwZXIuYXBwZW5kQ2hpbGQobmV3UHJvamVjdFRhc2tzSW5uZXJDb250YWluZXIpXG4gIG5ld1Byb2plY3RUYXNrc0NvbnRhaW5lci5hcHBlbmRDaGlsZChuZXdQcm9qZWN0VGFza0J0bldyYXBwZXIpO1xuXG4gIG5ld1Byb2plY3RzRm9ybUNvbnRhaW5lckVsLmFwcGVuZENoaWxkKG5ld1Byb2plY3RUYXNrc0NvbnRhaW5lcik7XG5cbiAgcmV0dXJuIG5ld1Byb2plY3RzRm9ybUNvbnRhaW5lckVsO1xufVxuXG5mdW5jdGlvbiBkaXNwbGF5TmV3UHJvamVjdEZvcm0oKSB7XG4gIHByb2plY3RGb3JtLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG59XG5cbi8vIEFkZCBwcm9qZWN0IG5hbWUgdG8gbG9jYWwgc3RvcmFnZSBhbmQgIHBvcHVsYXRlIHByb2plY3QgZHJvcCBkb3duXG5mdW5jdGlvbiBhZGRQcm9qZWN0TmFtZShwcm9qZWN0TmFtZSkge1xuICBsZXQgcHJvamVjdHMgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwicHJvamVjdHNcIikpIHx8IFtdO1xuICBwcm9qZWN0cy5wdXNoKHByb2plY3ROYW1lKTtcbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJwcm9qZWN0c1wiLCBKU09OLnN0cmluZ2lmeShwcm9qZWN0cykpO1xuICBmaWxsUHJvamVjdERyb3BEb3duKCk7XG4gIHJldHVybiB7IHByb2plY3ROYW1lIH07XG59XG5cbi8vIFBvcHVsYXRlIHByb2plY3QgZHJvcC1kb3duXG5mdW5jdGlvbiBmaWxsUHJvamVjdERyb3BEb3duKCkge1xuICBwcm9qZWN0RHJvcERvd24udGV4dENvbnRlbnQgPSBcIlwiO1xuICBsZXQgcHJvamVjdHMgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwicHJvamVjdHNcIikpIHx8IFtdO1xuXG4gIGlmIChwcm9qZWN0cykge1xuICAgIGNvbnN0IG9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7XG4gICAgb3B0aW9uLnZhbHVlID0gXCJcIjtcbiAgICBvcHRpb24udGV4dENvbnRlbnQgPSBcIlNlbGVjdCBwcm9qZWN0XCI7XG4gICAgcHJvamVjdERyb3BEb3duLmFwcGVuZENoaWxkKG9wdGlvbik7XG5cbiAgICBwcm9qZWN0cz8uZm9yRWFjaCgocHJvamVjdCkgPT4ge1xuICAgICAgY29uc3Qgb3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTtcbiAgICAgIG9wdGlvbi52YWx1ZSA9IHByb2plY3Q7XG4gICAgICBvcHRpb24udGV4dENvbnRlbnQgPSBwcm9qZWN0O1xuICAgICAgcHJvamVjdERyb3BEb3duLmFwcGVuZENoaWxkKG9wdGlvbik7XG4gICAgfSk7XG4gIH1cbn1cbmZpbGxQcm9qZWN0RHJvcERvd24oKTtcblxuLy8gRGlzcGxheSBlYWNoIHByb2plY3QncyB0by1kb3Mgd2hlbiBzZWxlY3RlZFxucHJvamVjdERyb3BEb3duLmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgKCkgPT4ge1xuICB1c2VyTGlzdC50ZXh0Q29udGVudCA9IFwiXCI7XG4gIGNvbnN0IGludGlhbFRleHREaXNwbGF5Q29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICBcIi5pbnRpYWxUZXh0RGlzcGxheUNvbnRhaW5lclwiLFxuICApO1xuICBpbnRpYWxUZXh0RGlzcGxheUNvbnRhaW5lci5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG5cbiAgZGlzcGxheVByb2plY3RUb2Rvcy50ZXh0Q29udGVudCA9IFwiXCI7XG4gIG5ld1Byb2plY3RUYXNrc0NvbnRhaW5lci5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG5cbiAgLy9DbGVhciB0aGUgYWRkIHRhc2sgYnV0dG9uIGNvbnRhaW5lciBlYWNoIHRpbWUgdXNlciBzZWxlY3QgYSBwcm9qZWN0XG4gIG5ld1Byb2plY3RUYXNrc0NvbnRhaW5lci50ZXh0Q29udGVudCA9IFwiXCI7XG5cbiAgLy9EaXNwbGF5IG5vIGZvcm0gaWYgYW55IGZvcm0gaXMgaW4gYmxvY2tcbiAgaWYgKGZvcm0uc3R5bGUuZGlzcGxheSA9PT0gXCJibG9ja1wiKSB7XG4gICAgZm9ybS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gIH1cblxuICBzZWxlY3RlZFByb2plY3QgPSBwcm9qZWN0RHJvcERvd24udmFsdWU7XG4gIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJoZWFkZXIgaDFcIik7XG4gIGhlYWRlci50ZXh0Q29udGVudCA9IHNlbGVjdGVkUHJvamVjdDtcbiAgLy8gZ2V0U2VsZWN0ZWRUb2RvcyhzZWxlY3RlZFByb2plY3QpO1xuICBkaXNwbGF5VG9Eb3NGb3JDdXJyZW50UHJvamVjdChzZWxlY3RlZFByb2plY3QpO1xuICAvLyBkaXNwbGF5U2VsZWN0ZWRUb0RvcyhzZWxlY3RlZFByb2plY3QpO1xuICBkaXNwbGF5TmV3UHJvamVjdEZvcm0oKTtcbn0pO1xuXG5leHBvcnQgZnVuY3Rpb24gZ2V0VXNlclRvZG8oKSB7XG4gIGxldCB0YXNrSW5wdXRWYWx1ZSA9IGlucHV0RmllbGRFbC52YWx1ZTtcbiAgbGV0IGRlc2NyaXB0aW9uSW5wdXRWYWx1ZSA9IGRlc2NyaXB0aW9uRmllbGRFbC52YWx1ZTtcbiAgbGV0IHByaW9yaXR5VmFsdWVFbCA9IHNlbGVjdFByaW9yaXR5RWwudmFsdWU7XG4gIGxldCBkdWVEYXRlVmFsdWVFbCA9IGR1ZURhdGUudmFsdWU7XG5cbiAgLy8gbGV0IHRhc2tUaXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YXNrVGl0bGUnKTtcbiAgLy8gbGV0IHRhc2tEZXNjcmlwdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGFza0Rlc2NyaXB0aW9uXCIpO1xuXG4gIC8vIGlmICh0YXNrVGl0bGUudGV4dENvbnRlbnQubGVuZ3RoID4gMzUpIHtcbiAgLy8gICB0YXNrVGl0bGUuc3R5bGUub3ZlcmZsb3cgPSAnaGlkZGVuJ1xuICAvLyAgIC8vIHJldHVybiBhbGVydChcbiAgLy8gICAvLyAgIGBJbnB1dCBzaG91bGQgYmUgbGVzcyBvciBlcXVhbCB0byB0aGUgMzUgY2hhcmFjdGVycywgeW91IGhhdmUgZW50ZXJlZCAke3Rhc2tJbnB1dFZhbHVlLmxlbmd0aH0gY2hhcmFjdGVyc2AsXG4gIC8vICAgLy8gKTtcbiAgLy8gfSBlbHNlIGlmICh0YXNrRGVzY3JpcHRpb24udGV4dENvbnRlbnQubGVuZ3RoID4gNDApIHtcbiAgLy8gICB0YXNrRGVzY3JpcHRpb24uc3R5bGUub3ZlcmZsb3cgPSAnaGlkZGVuJ1xuXG4gIC8vICAgcmV0dXJuIGFsZXJ0KFxuICAvLyAgICAgYERlc2NyaXB0aW9uIHNob3VsZCBiZSBsZXNzIG9yIGVxdWFsIHRvIHRoZSA0MCBjaGFyYWN0ZXJzLCB5b3UgaGF2ZSBlbnRlcmVkICR7ZGVzY3JpcHRpb25JbnB1dFZhbHVlLmxlbmd0aH0gY2hhcmFjdGVyc2AsXG4gIC8vICAgKTtcbiAgLy8gfVxuXG4gIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZShkdWVEYXRlVmFsdWVFbCk7XG5cbiAgY29uc3Qgb3B0aW9ucyA9IHtcbiAgICB3ZWVrZGF5OiBcImxvbmdcIixcbiAgICB5ZWFyOiBcIm51bWVyaWNcIixcbiAgICBtb250aDogXCJzaG9ydFwiLFxuICAgIGRheTogXCJudW1lcmljXCIsXG4gIH07XG5cbiAgY29uc3QgZGF5T2ZXZWVrID0gZGF0ZS50b0xvY2FsZURhdGVTdHJpbmcoXCJlbi1Vc1wiLCBvcHRpb25zKTtcblxuICBsZXQgdXNlclRvZG8gPSBuZXcgZ2V0TGlzdChcbiAgICB0YXNrSW5wdXRWYWx1ZSxcbiAgICBkZXNjcmlwdGlvbklucHV0VmFsdWUsXG4gICAgcHJpb3JpdHlWYWx1ZUVsLFxuICAgIGRheU9mV2VlayxcbiAgKTtcblxuICByZXR1cm4gdXNlclRvZG87XG59XG5cbi8vIENsZWFyIGZvcm0gaW5wdXRcbmZ1bmN0aW9uIGNsZWFySW5wdXRGb3JtKCkge1xuICBpbnB1dEZpZWxkRWwudmFsdWUgPSBcIlwiO1xuICBkZXNjcmlwdGlvbkZpZWxkRWwudmFsdWUgPSBcIlwiO1xuICBzZWxlY3RQcmlvcml0eUVsLnZhbHVlID0gXCJTZWxlY3QgUHJpb3JpdHlcIjtcbiAgZHVlRGF0ZS52YWx1ZSA9IFwiXCI7XG59XG5cbmxldCBjdXJyZW50UHJvamVjdE5hbWUgPSBbXTtcbmxldCB0b0RvID0gW107XG5mdW5jdGlvbiBhZGROZXdQcm9qZWN0VG9kb3MoKSB7XG4gIGN1cnJlbnRQcm9qZWN0TmFtZSA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJwcm9qZWN0c1wiKSkgfHwgW107XG4gIGNvbnN0IGN1cnJlbnRQcm9qZWN0ID0gY3VycmVudFByb2plY3ROYW1lW2N1cnJlbnRQcm9qZWN0TmFtZS5sZW5ndGggLSAxXTtcbiAgY29uc29sZS5sb2coY3VycmVudFByb2plY3ROYW1lKTtcblxuICAvLyBpZiAocHJvamVjdEZvcm0uc3R5bGUuZGlzcGxheSA9PT0gXCJibG9ja1wiKSB7XG4gIC8vIHNlbGVjdGVkUHJvamVjdCA9IGN1cnJlbnRQcm9qZWN0O1xuXG4gIGNvbnN0IHNlbGVjdGVkUHJvamVjdCA9IHByb2plY3REcm9wRG93bi52YWx1ZTtcblxuICBpZiAoc2VsZWN0ZWRQcm9qZWN0KSB7XG4gICAgdG9EbyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oc2VsZWN0ZWRQcm9qZWN0KSkgfHwgW107XG5cbiAgICBjb25zdCBuZXdUb0RvID0gZ2V0VXNlclRvZG8oKTtcbiAgICB0b0RvLnB1c2gobmV3VG9Ebyk7XG5cbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShzZWxlY3RlZFByb2plY3QsIEpTT04uc3RyaW5naWZ5KHRvRG8pKTtcbiAgICBjb25zb2xlLmxvZyh0b0RvKTtcblxuICAgIGNvbnNvbGUubG9nKHRvRG8pO1xuICAgIGNsZWFySW5wdXRGb3JtKCk7XG4gICAgZGlzcGxheVRvRG9zRm9yQ3VycmVudFByb2plY3Qoc2VsZWN0ZWRQcm9qZWN0KTtcbiAgfSBlbHNlIHtcbiAgICBjb25zb2xlLmxvZyhjdXJyZW50UHJvamVjdCk7XG4gICAgLy9JZiB0aGVyZSBpcyBhbiBleGlzdGluZyBwcm9qZWN0IGdldCBpdCBmcm9tIHRoZSBsb2NhbCBzdG9yYWdlXG4gICAgY29uc3QgdG9EbyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oY3VycmVudFByb2plY3QpKSB8fCBbXTtcblxuICAgIGNvbnN0IG5ld1RvRG8gPSBnZXRVc2VyVG9kbygpO1xuXG4gICAgdG9Eby5wdXNoKG5ld1RvRG8pO1xuXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oY3VycmVudFByb2plY3QsIEpTT04uc3RyaW5naWZ5KHRvRG8pKTtcblxuICAgIGNvbnNvbGUubG9nKHRvRG8pO1xuICAgIGNsZWFySW5wdXRGb3JtKCk7XG4gICAgZGlzcGxheVRvRG9zRm9yQ3VycmVudFByb2plY3QoY3VycmVudFByb2plY3QpO1xuICB9XG4gIC8vIH1cbn1cblxuZnVuY3Rpb24gZGlzcGxheVRvRG9zRm9yQ3VycmVudFByb2plY3QocHJvamVjdE5hbWUpIHtcbiAgY3VycmVudFByb2plY3ROYW1lID0gcHJvamVjdE5hbWU7XG4gIC8vIGNvbnNvbGUubG9nKGN1cnJlbnRQcm9qZWN0TmFtZSk7XG5cbiAgLy8gc2F2ZVRhc2socHJvamVjdE5hbWUpO1xuICBsZXQgcHJvamVjdFRvZG9zID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShwcm9qZWN0TmFtZSkpIHx8IFtdO1xuXG4gIHRvRG8gPSBwcm9qZWN0VG9kb3M7XG4gIGNvbnNvbGUubG9nKHRvRG8pO1xuICAvLyBjb25zb2xlLmxvZyhjdXJyZW50VG9kb3MpO1xuXG4gIHByb2plY3RUb2Rvcy5mb3JFYWNoKCh0b2RvLCBpbmRleCkgPT4ge1xuICAgIGRpc3BsYXlUYXNrKFxuICAgICAgdG9kby50aXRsZSxcbiAgICAgIHRvZG8uZGVzY3JpcHRpb24sXG4gICAgICB0b2RvLnByaW9yaXR5LFxuICAgICAgdG9kby5kYXRlLFxuICAgICAgaW5kZXgsXG4gICAgICBwcm9qZWN0TmFtZSxcbiAgICApO1xuICB9KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRpc3BsYXlUYXNrKFxuICBzYXZlVGl0bGVEYXRhLFxuICBzYXZlRGVzY3JpcHRpb25EYXRhLFxuICBzYXZlUHJpb3JpdHlEYXRhLFxuICBzYXZlRHVlRGF0ZURhdGEsXG4gIGluZGV4LFxuICBwcm9qZWN0TmFtZSxcbikge1xuICBjb25zdCBsaXN0Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgdGFza0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICBjb25zdCBpbm5lclRhc2tDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBpbm5lclRhc2tIYW5kbGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblxuICBpbm5lclRhc2tIYW5kbGVyLmNsYXNzTGlzdC5hZGQoXCJpbm5lclRhc2tIYW5kbGVyXCIpO1xuICBpbm5lclRhc2tDb250YWluZXIuY2xhc3NMaXN0LmFkZChcImlubmVyVGFza0NvbnRhaW5lclwiKTtcbiAgdGFza0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwidGFza0NvbnRhaW5lclwiKTtcbiAgbGlzdENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwibGlzdENvbnRhaW5lclwiKTtcblxuICBjb25zdCBjaGVja0JveENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICBjaGVja0JveENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiY2hlY2tCb3hDb250YWluZXJcIik7XG4gIGNvbnN0IGNoZWNrQm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICBjaGVja0JveC5jbGFzc0xpc3QuYWRkKFwiY2hlY2tCb3hcIik7XG4gIGNoZWNrQm94LnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJjaGVja2JveFwiKTtcblxuICBjb25zdCB0YXNrVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDRcIik7XG4gIGNvbnN0IHRhc2tEZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICBjb25zdCBkdWVEYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIGNvbnN0IHRhc2tQcmlvcml0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICBjb25zdCBkZWxldGVUYXNrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcblxuICB0YXNrVGl0bGUuY2xhc3NMaXN0LmFkZChcInRhc2tUaXRsZVwiKTtcbiAgdGFza0Rlc2NyaXB0aW9uLmNsYXNzTGlzdC5hZGQoXCJ0YXNrRGVzY3JpcHRpb25cIik7XG4gIGR1ZURhdGUuY2xhc3NMaXN0LmFkZChcImR1ZURhdGVcIik7XG4gIGRlbGV0ZVRhc2suY2xhc3NMaXN0LmFkZChcImRlbGV0ZVRhc2tcIik7XG4gIHRhc2tQcmlvcml0eS5jbGFzc0xpc3QuYWRkKFwidGFza1ByaW9yaXR5XCIpO1xuXG4gIHRhc2tUaXRsZS50ZXh0Q29udGVudCA9IGAgJHtzYXZlVGl0bGVEYXRhfWA7XG4gIHRhc2tEZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9IGAke3NhdmVEZXNjcmlwdGlvbkRhdGF9YDtcbiAgdGFza1ByaW9yaXR5LnRleHRDb250ZW50ID0gYCR7c2F2ZVByaW9yaXR5RGF0YX1gO1xuICBkdWVEYXRlLnRleHRDb250ZW50ID0gYCR7c2F2ZUR1ZURhdGVEYXRhfWA7XG4gIGRlbGV0ZVRhc2sudGV4dENvbnRlbnQgPSBcIkRlbGV0ZSB0YXNrXCI7XG5cbiAgZGVsZXRlVGFzay5kYXRhc2V0LmluZGV4ID0gaW5kZXg7XG4gIGRlbGV0ZVRhc2suZGF0YXNldC5wcm9qZWN0ID0gcHJvamVjdE5hbWU7XG4gIGNoZWNrQm94LmRhdGFzZXQuaW5kZXggPSBpbmRleDtcbiAgY2hlY2tCb3guZGF0YXNldC5wcm9qZWN0ID0gcHJvamVjdE5hbWU7XG5cbiAgdGFza1RpdGxlLmRhdGFzZXQuZmllbGRUeXBlID0gXCJ0aXRsZVwiO1xuICB0YXNrRGVzY3JpcHRpb24uZGF0YXNldC5maWVsZFR5cGUgPSBcImRlc2NyaXB0aW9uXCI7XG4gIHRhc2tQcmlvcml0eS5kYXRhc2V0LmZpZWxkVHlwZSA9IFwidGFza1ByaW9yaXR5XCI7XG4gIGR1ZURhdGUuZGF0YXNldC5maWVsZFR5cGUgPSBcImR1ZURhdGVcIjtcblxuICB0YXNrVGl0bGUuZGF0YXNldC5pbmRleCA9IGluZGV4O1xuICB0YXNrRGVzY3JpcHRpb24uZGF0YXNldC5pbmRleCA9IGluZGV4O1xuICB0YXNrUHJpb3JpdHkuZGF0YXNldC5pbmRleCA9IGluZGV4O1xuICBkdWVEYXRlLmRhdGFzZXQuaW5kZXggPSBpbmRleDtcblxuICBpbm5lclRhc2tDb250YWluZXIuYXBwZW5kQ2hpbGQodGFza1RpdGxlKTtcbiAgaW5uZXJUYXNrQ29udGFpbmVyLmFwcGVuZENoaWxkKHRhc2tEZXNjcmlwdGlvbik7XG4gIGlubmVyVGFza0NvbnRhaW5lci5hcHBlbmRDaGlsZChkdWVEYXRlKTtcblxuICBpbm5lclRhc2tIYW5kbGVyLmFwcGVuZENoaWxkKHRhc2tQcmlvcml0eSk7XG4gIGlubmVyVGFza0hhbmRsZXIuYXBwZW5kQ2hpbGQoZGVsZXRlVGFzayk7XG5cbiAgdGFza0NvbnRhaW5lci5hcHBlbmRDaGlsZChpbm5lclRhc2tDb250YWluZXIpO1xuICB0YXNrQ29udGFpbmVyLmFwcGVuZENoaWxkKGlubmVyVGFza0hhbmRsZXIpO1xuXG4gIGNoZWNrQm94Q29udGFpbmVyLmFwcGVuZENoaWxkKGNoZWNrQm94KTtcbiAgbGlzdENvbnRhaW5lci5hcHBlbmRDaGlsZChjaGVja0JveENvbnRhaW5lcik7XG5cbiAgbGlzdENvbnRhaW5lci5hcHBlbmRDaGlsZCh0YXNrQ29udGFpbmVyKTtcbiAgdXNlckxpc3QuYXBwZW5kQ2hpbGQobGlzdENvbnRhaW5lcik7XG5cbiAgdGFza1RpdGxlLmFkZEV2ZW50TGlzdGVuZXIoXCJkYmxjbGlja1wiLCBlZGl0VGFzayk7XG4gIHRhc2tEZXNjcmlwdGlvbi5hZGRFdmVudExpc3RlbmVyKFwiZGJsY2xpY2tcIiwgZWRpdFRhc2spO1xuICB0YXNrUHJpb3JpdHkuYWRkRXZlbnRMaXN0ZW5lcihcImRibGNsaWNrXCIsIGVkaXRUYXNrKTtcbiAgZHVlRGF0ZS5hZGRFdmVudExpc3RlbmVyKFwiZGJsY2xpY2tcIiwgZWRpdFRhc2spO1xuXG4gIGRlbGV0ZVRhc2suYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGRlbGV0ZVRvRG8pO1xuICBkZWxldGVUYXNrLmFkZEV2ZW50TGlzdGVuZXIoXCJ0b3VjaHN0YXJ0XCIsIGRlbGV0ZVRvRG8pO1xuXG4gIGhhbmRsZUNoZWNrQm94KGNoZWNrQm94LCB0YXNrVGl0bGUsIHRhc2tEZXNjcmlwdGlvbik7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBlZGl0VGFzayhldmVudCkge1xuICBjb25zdCB0YXJnZXQgPSBldmVudC50YXJnZXQ7XG5cbiAgY29uc3QgZmllbGRUeXBlID0gdGFyZ2V0LmRhdGFzZXQuZmllbGRUeXBlOyAvLyBJZGVudGlmeSB0aGUgZmllbGQgdHlwZSh0aXRsZSxkZXNjcmlwdGlvbixwcmlvcml0eSxkYXRlKVxuICBjb25zdCBpbmRleCA9IHRhcmdldC5kYXRhc2V0LmluZGV4O1xuICBjb25zdCB0YXNrUHJpb3JpdHkgPSBbXCJVcmdlbnRcIiwgXCJJbXBvcnRhbnRcIiwgXCJMb3cgcHJpb3JpdHlcIl07XG5cbiAgbGV0IHRhc2tJbnB1dDtcbiAgaWYgKGZpZWxkVHlwZSA9PT0gXCJ0aXRsZVwiIHx8IGZpZWxkVHlwZSA9PT0gXCJkZXNjcmlwdGlvblwiKSB7XG4gICAgdGFza0lucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgIHRhc2tJbnB1dC50eXBlID0gXCJ0ZXh0XCI7XG4gICAgdGFza0lucHV0LnZhbHVlID0gdGFyZ2V0LnRleHRDb250ZW50O1xuICB9IGVsc2UgaWYgKGZpZWxkVHlwZSA9PT0gXCJkdWVEYXRlXCIpIHtcbiAgICB0YXNrSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgdGFza0lucHV0LnR5cGUgPSBcImRhdGVcIjtcbiAgICB0YXNrSW5wdXQudmFsdWUgPSB0YXJnZXQudGV4dENvbnRlbnQ7XG4gIH0gZWxzZSBpZiAoZmllbGRUeXBlID09PSBcInRhc2tQcmlvcml0eVwiKSB7XG4gICAgdGFza0lucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNlbGVjdFwiKTtcblxuICAgIHRhc2tQcmlvcml0eS5mb3JFYWNoKChwcmlvcml0eSkgPT4ge1xuICAgICAgY29uc3Qgb3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTtcbiAgICAgIG9wdGlvbi52YWx1ZSA9IHByaW9yaXR5O1xuICAgICAgb3B0aW9uLnRleHRDb250ZW50ID0gcHJpb3JpdHk7XG5cbiAgICAgIGlmIChwcmlvcml0eSA9PT0gdGFyZ2V0LnRleHRDb250ZW50KSB7XG4gICAgICAgIG9wdGlvbi5zZWxlY3RlZCA9IHRydWU7XG4gICAgICB9XG4gICAgICB0YXNrSW5wdXQuYXBwZW5kQ2hpbGQob3B0aW9uKTtcbiAgICB9KTtcbiAgfVxuXG4gIC8vU3RvcmUgdGhlIGZpZWxkVHlwZSBpbiB0aGUgaW5wdXQgZGF0YXNldFxuICB0YXNrSW5wdXQuZGF0YXNldC5maWVsZFR5cGUgPSBmaWVsZFR5cGU7XG4gIHRhc2tJbnB1dC5kYXRhc2V0LmluZGV4ID0gaW5kZXg7XG5cbiAgdGFyZ2V0LnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgdGFyZ2V0LnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKHRhc2tJbnB1dCwgdGFyZ2V0Lm5leHRTaWJsaW5nKTsgLy8gSW5zZXJ0IHRoZSBpbnB1dCBmaWVsZCBuZXh0IHRvIHRhcmdldCBlbGVtZW50XG5cbiAgdGFza0lucHV0LmNsYXNzTGlzdC5hZGQoXCJlZGl0XCIpO1xuICAvLyAgIGNvbnN0IHNlbGVjdGVkVmFsdWUgPSB0YXNrSW5wdXQudmFsdWU7XG4gIC8vIGNvbnNvbGUubG9nKHNlbGVjdGVkVmFsdWUpO1xuXG4gIGlmICh0YXNrSW5wdXQudHlwZSA9PT0gXCJ0ZXh0XCIpIHtcbiAgICB0YXNrSW5wdXQuc2VsZWN0KCk7IC8vIEF1dG9tYXRpY2FsbHkgc2VsZWN0IHRoZSBjb250ZW50IG9mIHRoZSBpbnB1dCBmaWVsZFxuICB9XG5cbiAgdGFza0lucHV0LmFkZEV2ZW50TGlzdGVuZXIoXCJibHVyXCIsIHNhdmVFZGl0ZWRUYXNrKTsgLy8gU2F2ZSB0YXNrIHdoZW4gdGFzayBsb3NlIGZvY3VzIG9uIGlucHV0IGVsZW1lbnQuXG4gIHRhc2tJbnB1dC5hZGRFdmVudExpc3RlbmVyKFwia2V5cHJlc3NcIiwgc2F2ZUVkaXRlZFRhc2spOyAvLyBTYXZlIHRhc2sgb24gcHJlc3NpbmcgRW50ZXJcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNhdmVFZGl0ZWRUYXNrKGV2ZW50KSB7XG4gIGNvbnNvbGUubG9nKHRvRG8pO1xuXG4gIGlmIChldmVudC50eXBlID09PSBcImJsdXJcIiB8fCBldmVudC5rZXkgPT09IFwiRW50ZXJcIikge1xuICAgIGNvbnN0IGlucHV0ID0gZXZlbnQudGFyZ2V0O1xuXG4gICAgbGV0IGZpZWxkVHlwZSA9IGlucHV0LmRhdGFzZXQuZmllbGRUeXBlO1xuICAgIGxldCBpbmRleCA9IGlucHV0LmRhdGFzZXQuaW5kZXg7IC8vIEdldCB0aGUgaW5kZXggZnJvbSB0aGUgaW5wdXQgZGF0YXNldFxuXG4gICAgbGV0IG5ld1ZhbHVlO1xuICAgIC8vSWYgc2VsZWN0IGVsZW1lbnQsIGdldCBpdCB2YWx1ZSBlbHNlIGdldCBpbnB1dCB2YWx1ZVxuICAgIGlmIChpbnB1dC50YWdOYW1lID09PSBcIlNFTEVDVFwiKSB7XG4gICAgICBuZXdWYWx1ZSA9IGlucHV0Lm9wdGlvbnNbaW5wdXQuc2VsZWN0ZWRJbmRleF0udmFsdWU7XG4gICAgICB0b0RvW2luZGV4XS5wcmlvcml0eSA9IG5ld1ZhbHVlO1xuICAgICAgY29uc29sZS5sb2codG9Eb1tpbmRleF0ucHJpb3JpdHkpO1xuICAgIH0gZWxzZSB7XG4gICAgICBuZXdWYWx1ZSA9IGlucHV0LnZhbHVlO1xuICAgIH1cbiAgICAvLyBjb25zdCBjdXJyZW50UHJvamVjdCA9IGN1cnJlbnRQcm9qZWN0TmFtZVtjdXJyZW50UHJvamVjdE5hbWUubGVuZ3RoIC0gMV07XG5cbiAgICAvL0dldCB0aGUgdGFzayBmcm9tIHRoZSBsb2NhbCBzdG9yYWdlXG4gICAgLy8gbGV0IHRvRG8gPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKGN1cnJlbnRQcm9qZWN0TmFtZSkpIHx8IFtdO1xuICAgIGNvbnNvbGUubG9nKHRvRG8pO1xuXG4gICAgLy9DaGVjayBpZiB0aGUgaW5kZXggaXMgbm90IG91dCBvZiBib3VuZHMgaW4gdGhlIGFycmF5XG4gICAgaWYgKGluZGV4IDwgdG9Eby5sZW5ndGgpIHtcbiAgICAgIGlmIChmaWVsZFR5cGUgPT09IFwidGl0bGVcIikge1xuICAgICAgICB0b0RvW2luZGV4XS50aXRsZSA9IG5ld1ZhbHVlO1xuICAgICAgICBjb25zb2xlLmxvZyh0b0RvW2luZGV4XS50aXRsZSk7XG4gICAgICB9IGVsc2UgaWYgKGZpZWxkVHlwZSA9PT0gXCJkZXNjcmlwdGlvblwiKSB7XG4gICAgICAgIHRvRG9baW5kZXhdLmRlc2NyaXB0aW9uID0gbmV3VmFsdWU7XG4gICAgICB9IGVsc2UgaWYgKGZpZWxkVHlwZSA9PT0gXCJkdWVEYXRlXCIpIHtcbiAgICAgICAgbGV0IGR1ZURhdGUgPSBuZXdWYWx1ZTtcbiAgICAgICAgY29uc3QgZGF0ZSA9IG5ldyBEYXRlKGR1ZURhdGUpO1xuXG4gICAgICAgIGNvbnN0IG9wdGlvbnMgPSB7XG4gICAgICAgICAgd2Vla2RheTogXCJsb25nXCIsXG4gICAgICAgICAgeWVhcjogXCJudW1lcmljXCIsXG4gICAgICAgICAgbW9udGg6IFwic2hvcnRcIixcbiAgICAgICAgICBkYXk6IFwibnVtZXJpY1wiLFxuICAgICAgICB9O1xuXG4gICAgICAgIHRvRG9baW5kZXhdLmRhdGUgPSBkYXRlLnRvTG9jYWxlRGF0ZVN0cmluZyhcImVuLVVzXCIsIG9wdGlvbnMpO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIFNhdmUgdGhlIHVwZGF0ZWQgdGFza3MgdG8gbG9jYWwgc3RvcmFnZVxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKGN1cnJlbnRQcm9qZWN0TmFtZSwgSlNPTi5zdHJpbmdpZnkodG9EbykpO1xuXG4gICAgLy8gVXBkYXRlIHRoZSBvcmlnaW5hbCBlbGVtZW50J3MgdGV4dCBjb250ZW50IGFuZCBzaG93IGl0IGFnYWluXG4gICAgbGV0IG9yaWdpbmFsRWxlbWVudCA9IGlucHV0LnByZXZpb3VzU2libGluZztcblxuICAgIG9yaWdpbmFsRWxlbWVudC50ZXh0Q29udGVudCA9IG5ld1ZhbHVlO1xuXG4gICAgb3JpZ2luYWxFbGVtZW50LnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG5cbiAgICAvLyBSZW1vdmUgdGhlIGlucHV0IGZpZWxkIGlmIGl0IGlzIHN0aWxsIHBhcnQgb2YgdGhlIERPTVxuXG4gICAgaW5wdXQucmVtb3ZlKCk7XG5cbiAgICB1c2VyTGlzdC50ZXh0Q29udGVudCA9IFwiXCI7XG5cbiAgICAvLyBSZS1yZW5kZXIgdGhlIHRvZG8gbGlzdCBpZiBuZWNlc3NhcnlcbiAgICBkaXNwbGF5VG9Eb3NGb3JDdXJyZW50UHJvamVjdChjdXJyZW50UHJvamVjdE5hbWUpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGhhbmRsZUNoZWNrQm94KGNoZWNrQm94LCB0YXNrVGl0bGUsIHRhc2tEZXNjcmlwdGlvbikge1xuICBjaGVja0JveC5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsIChldmVudCkgPT4ge1xuICAgIGlmIChjaGVja0JveC5jaGVja2VkID09PSB0cnVlKSB7XG4gICAgICBjb25zdCBjaGVja0JveCA9IGV2ZW50LnRhcmdldDtcbiAgICAgIGNvbnNvbGUubG9nKGNoZWNrQm94KTtcbiAgICAgIGNvbnN0IGluZGV4ID0gY2hlY2tCb3guZGF0YXNldC5pbmRleDtcbiAgICAgIGNvbnN0IHByb2plY3ROYW1lID0gY2hlY2tCb3guZGF0YXNldC5wcm9qZWN0O1xuXG4gICAgICB0b0RvID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShwcm9qZWN0TmFtZSkpIHx8IFtdO1xuXG4gICAgICBpZiAoaW5kZXggIT09IC0xKSB7XG4gICAgICAgIGNoZWNrQm94LnJlbW92ZShjaGVja0JveCk7XG4gICAgICAgIHRvRG8uc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgLy91cGRhdGUgVG8tZG8gaXRlbSBpbiBsb2NhbCBzdG9yYWdlXG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKHByb2plY3ROYW1lLCBKU09OLnN0cmluZ2lmeSh0b0RvKSk7XG4gICAgICAgIGNvbnNvbGUubG9nKHRvRG8pO1xuICAgICAgICB1c2VyTGlzdC50ZXh0Q29udGVudCA9IFwiXCI7XG4gICAgICAgIGRpc3BsYXlUb0Rvc0ZvckN1cnJlbnRQcm9qZWN0KHByb2plY3ROYW1lKTtcbiAgICAgICAgYWxlcnQoXCJUYXNrIGNvbXBsZXRlZCFcIik7XG4gICAgICB9XG4gICAgICBjb25zb2xlLmxvZyhcInRydWVcIik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRhc2tUaXRsZS5zdHlsZS50ZXh0RGVjb3JhdGlvbiA9IFwibm9uZVwiO1xuICAgICAgdGFza0Rlc2NyaXB0aW9uLnN0eWxlLnRleHREZWNvcmF0aW9uID0gXCJub25lXCI7XG4gICAgICBjb25zb2xlLmxvZyhcImZhbHNlXCIpO1xuICAgIH1cbiAgfSk7XG59XG5cbi8vRGVsZXRlIHRoZSB0b2RvIHRoYXQgZ2V0IGNsaWNrZWRcbmZ1bmN0aW9uIGRlbGV0ZVRvRG8oZXZlbnQpIHtcbiAgY29uc3QgYnV0dG9uID0gZXZlbnQudGFyZ2V0O1xuICBjb25zdCBpbmRleCA9IGJ1dHRvbi5kYXRhc2V0LmluZGV4O1xuICBjb25zdCBjdXJyZW50UHJvamVjdCA9IGJ1dHRvbi5kYXRhc2V0LnByb2plY3Q7XG4gIGNvbnNvbGUubG9nKGN1cnJlbnRQcm9qZWN0KTtcblxuICAvLyBjb25zdCBjdXJyZW50UHJvamVjdCA9IGN1cnJlbnRQcm9qZWN0TmFtZVtjdXJyZW50UHJvamVjdE5hbWUubGVuZ3RoIC0gMV07XG4gIHRvRG8gPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKGN1cnJlbnRQcm9qZWN0KSkgfHwgW107XG5cbiAgY29uc29sZS5sb2codG9Ebyk7XG5cbiAgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgIHRvRG8uc3BsaWNlKGluZGV4LCAxKTtcbiAgICAvL3VwZGF0ZSBUby1kbyBpdGVtIGluIGxvY2FsIHN0b3JhZ2VcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShjdXJyZW50UHJvamVjdCwgSlNPTi5zdHJpbmdpZnkodG9EbykpO1xuICAgIGNvbnNvbGUubG9nKHRvRG8pO1xuICAgIHVzZXJMaXN0LnRleHRDb250ZW50ID0gXCJcIjtcbiAgICBkaXNwbGF5VG9Eb3NGb3JDdXJyZW50UHJvamVjdChjdXJyZW50UHJvamVjdCk7XG4gIH1cbn1cblxuLy9DYW5jZWwgcHJvamVjdCBmb3JtIGZyb20gZGlzcGxheWluZy5cbmZ1bmN0aW9uIGNhbmNlbEZvcm1EaXNwbGF5KCkge1xuICBpbnB1dEZpZWxkRWwudmFsdWUgPSBcIlwiO1xuICBkZXNjcmlwdGlvbkZpZWxkRWwudmFsdWUgPSBcIlwiO1xuICBzZWxlY3RQcmlvcml0eUVsLnZhbHVlID0gXCJTZWxlY3QgUHJpb3JpdHlcIjtcbiAgZHVlRGF0ZS52YWx1ZSA9IFwiXCI7XG4gIHByb2plY3RGb3JtLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgY29uc29sZS5sb2coXCJjYW5jZWwgZm9ybSFcIik7XG4gIG5ld1Byb2plY3RzRm9ybUNvbnRhaW5lckVsLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG4gIGlmIChuZXdQcm9qZWN0VGFza3NDb250YWluZXIuc3R5bGUuZGlzcGxheSA9PT0gXCJub25lXCIpIHtcbiAgICBuZXdQcm9qZWN0VGFza3NDb250YWluZXIuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcbiAgfVxuICBjcmVhdGVOZXdQcm9qZWN0VGFza0J0bigpO1xuICAvLyBkaXNwbGF5VG9Eb3NGb3JDdXJyZW50UHJvamVjdChjdXJyZW50UHJvamVjdE5hbWUuc2xpY2UoKS5wb3AoKSk7XG59XG5jYW5jZWxUYXNrQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBjYW5jZWxGb3JtRGlzcGxheSk7XG5cbi8vUHJldmVudCBmb3JtIERlZmF1bHQgd2hlbiBzdWJtaXRpbmcgcHJvamVjdCBuYW1lXG5jb25zdCBzdWJtaXROZXdQcm9qZWN0Rm9ybU5hbWUgPSAoZXZlbnQpID0+IHtcbiAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgZ2V0bmV3UHJvamVjdElucHV0TmFtZSgpO1xuICBkaXNwbGF5TmV3UHJvamVjdEZvcm0oKTtcbiAgLy8gY3JlYXRlTmV3UHJvamVjdFRhc2tCdG4oKTtcbn07XG5TYXZlUHJvamVjdE5hbWUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHN1Ym1pdE5ld1Byb2plY3RGb3JtTmFtZSk7XG5uZXdQcm9qZWN0TmFtZVJlcXVlc3QuYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCAoZXZlbnQpID0+XG4gIGV2ZW50LnByZXZlbnREZWZhdWx0KCksXG4pO1xuXG5uZXdQcm9qZWN0VGFza3NDb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgZGlzcGxheU5ld1Byb2plY3RGb3JtKCk7XG4gIG5ld1Byb2plY3RUYXNrc0NvbnRhaW5lci5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gIG5ld1Byb2plY3RUYXNrc0NvbnRhaW5lci50ZXh0Q29udGVudCA9IFwiXCI7XG59KTtcblxuZnVuY3Rpb24gc3VibWl0Rm9ybShldmVudCkge1xuICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICB1c2VyTGlzdC50ZXh0Q29udGVudCA9IFwiXCI7XG5cbiAgYWRkTmV3UHJvamVjdFRvZG9zKCk7XG4gIC8vIGRpc3BsYXlUb0Rvc0ZvckN1cnJlbnRQcm9qZWN0KHByb2plY3ROYW1lKTtcbiAgLy8gYWRkVG9kb1Rvc2VsZWN0ZWRQcm9qZWN0KCk7XG59XG5zdWJtaXRUYXNrQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBzdWJtaXRGb3JtKTtcbnByb2plY3RGb3JtLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgKGV2ZW50KSA9PiBldmVudC5wcmV2ZW50RGVmYXVsdCgpKTtcbiIsImltcG9ydCB7IGdldFVzZXJUb2RvIH0gZnJvbSBcIi4vZG9tLUVsLTJcIjtcbmltcG9ydCB7IG5ld1Byb2plY3RUYXNrc0NvbnRhaW5lciB9IGZyb20gXCIuL2RvbS1FbC0yXCI7XG5pbXBvcnQgeyBnZXRuZXdQcm9qZWN0SW5wdXRWYWx1ZSB9IGZyb20gXCIuL2RvbS1FbC0yXCI7XG5pbXBvcnQgeyBjcmVhdGVOZXdQcm9qZWN0VGFza0J0biB9IGZyb20gXCIuL2RvbS1FbC0yXCI7XG5pbXBvcnQgeyBpbnB1dE5ld3Byb2plY3RGb3JtTmFtZSB9IGZyb20gXCIuL2RvbS1FbC0yXCI7XG5cbmNvbnN0IG1haW5Db250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwibWFpblwiKTtcbmNvbnN0IGhlYWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaGVhZGVyVGV4dENvbnRlbnRcIik7XG5jb25zdCB1c2VyTGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdXNlcmxpc3RcIik7XG5jb25zdCBpbmJveFRhc2tEaXNwbGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5kaXNwbGF5SW5ib3hUYXNrXCIpO1xuY29uc3QgZm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZm9ybVwiKTtcbmxldCBwcm9qZWN0Rm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjUHJvamVjdEZvcm1cIik7XG5jb25zdCBjYW5jZWxGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jYW5jZWxcIik7XG5jb25zdCBzdWJtaXRCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3N1Ym1pdEJ0blwiKTtcbmNvbnN0IGFkZFRhc2tidG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Rhc2tcIik7XG5jb25zdCBhZGRUYXNrTW9iaWxlQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNhZGRUb2RvQnRuQ29udGFpbmVyXCIpO1xuXG5sZXQgaW5ib3ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmluYm94XCIpO1xuY29uc3QgdG9Eb0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzZWN0aW9uXCIpO1xudG9Eb0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwidG9Eb0NvbnRhaW5lckluYm94XCIpO1xuY29uc3QgaW5ib3hGb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZvcm1cIik7XG5pbmJveEZvcm0uY2xhc3NMaXN0LmFkZChcImluYm94Rm9ybVwiKTtcbmNvbnN0IGluYm94VGFzayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5pbmJveFRhc2suY2xhc3NMaXN0LmFkZChcImluYm94VGFza1wiKTtcblxubGV0IHRhc2tUaXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGFzay10aXRsZVwiKTtcbmxldCB0YXNrRGVzY3JpcHRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmRlc2NyaXB0aW9uXCIpO1xubGV0IHRhc2tQcmlvcml0eSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcHJpb3JpdHlcIik7XG5sZXQgZHVlRGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZGF0ZVBpY2tlclwiKTtcblxuY2xhc3MgZ2V0TGlzdCB7XG4gIGNvbnN0cnVjdG9yKHRpdGxlLCBkZXNjcmlwdGlvbiwgcHJpb3JpdHksIGRhdGUpIHtcbiAgICB0aGlzLnRpdGxlID0gdGl0bGU7XG4gICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xuICAgIHRoaXMucHJpb3JpdHkgPSBwcmlvcml0eTtcbiAgICB0aGlzLmRhdGUgPSBkYXRlO1xuICB9XG59XG5cbmV4cG9ydCBjb25zdCBteVByb2plY3RzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwcm9qZWN0cyBoM1wiKTtcbmNvbnN0IGRlZmF1bHRQcm9qZWN0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcHJvamVjdHNcIik7XG5cbmZ1bmN0aW9uIGRpc3BsYXlGb3JtKGV2ZW50KSB7XG4gIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJoZWFkZXIgaDFcIik7XG5cbiAgaGVhZGVyLnRleHRDb250ZW50ID0gXCJBZGQgeW91ciBUbyBkb1wiO1xuICB1c2VyTGlzdC50ZXh0Q29udGVudCA9IFwiXCI7XG4gIGNvbnN0IGludGlhbFRleHREaXNwbGF5Q29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICBcIi5pbnRpYWxUZXh0RGlzcGxheUNvbnRhaW5lclwiLFxuICApO1xuICBpbnRpYWxUZXh0RGlzcGxheUNvbnRhaW5lci5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG5cbiAgbGV0IG5ld1Byb2plY3RCdG4gPSBjcmVhdGVOZXdQcm9qZWN0VGFza0J0bigpO1xuICBuZXdQcm9qZWN0QnRuLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgZm9ybS5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuICBpZiAoKHByb2plY3RGb3JtLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCIpKSB7XG4gICAgcHJvamVjdEZvcm0uc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICB9XG5cbiAgaWYoaW5wdXROZXdwcm9qZWN0Rm9ybU5hbWUuc3R5bGUuZGlzcGxheSA9ICdibG9jaycpIHtcbiAgICBpbnB1dE5ld3Byb2plY3RGb3JtTmFtZS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnXG4gIH1cbn1cbmFkZFRhc2tidG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGRpc3BsYXlGb3JtKTtcbmFkZFRhc2tNb2JpbGVCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGRpc3BsYXlGb3JtKTtcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgKCkgPT4ge1xuICBkaXNwbGF5VG9Eb3MoKTtcbn0pO1xuXG5sZXQgdG9Eb3MgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidG9Eb3NcIikpIHx8IFtdO1xuXG5mdW5jdGlvbiBhY2NlcHRJbnB1dCgpIHtcbiAgbGV0IHRhc2tJbnB1dFZhbHVlID0gdGFza1RpdGxlLnZhbHVlO1xuICBsZXQgZGVzY3JpcHRpb25JbnB1dFZhbHVlID0gdGFza0Rlc2NyaXB0aW9uLnZhbHVlO1xuICBsZXQgcHJpb3JpdHlWYWx1ZUVsID0gdGFza1ByaW9yaXR5LnZhbHVlO1xuICBsZXQgZHVlRGF0ZVZhbHVlRWwgPSBkdWVEYXRlLnZhbHVlO1xuXG4gIGNvbnNvbGUubG9nKHRhc2tJbnB1dFZhbHVlLmxlbmd0aCk7XG4gIC8vIGlmICh0YXNrSW5wdXRWYWx1ZS5sZW5ndGggPj0gMzUpIHtcbiAgLy8gICByZXR1cm4gYWxlcnQoXG4gIC8vICAgICBgdGFzayB0aXRsZSBzaG91bGQgYmUgbGVzcyBvciBlcXVhbCB0byAzNSAgY2hhcmFjdGVycywgeW91IGhhdmUgZW50ZXJlZCAke3Rhc2tJbnB1dFZhbHVlLmxlbmd0aH0gY2hhcmFjdGVyc2AsXG4gIC8vICAgKTtcbiAgLy8gfSBlbHNlIGlmIChkZXNjcmlwdGlvbklucHV0VmFsdWUubGVuZ3RoID49IDQwKSB7XG4gIC8vICAgcmV0dXJuIGFsZXJ0KFxuICAvLyAgICAgYERlc2NyaXB0aW9uIHNob3VsZCBiZSBsZXNzIG9yIGVxdWFsIHRvICA0MCBjaGFyYWN0ZXJzLCB5b3UgaGF2ZSBlbnRlcmVkICR7ZGVzY3JpcHRpb25JbnB1dFZhbHVlLmxlbmd0aH0gY2hhcmFjdGVyc2AsXG4gIC8vICAgKTtcbiAgLy8gfVxuXG4gIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZShkdWVEYXRlVmFsdWVFbCk7XG5cbiAgY29uc3Qgb3B0aW9ucyA9IHtcbiAgICB3ZWVrZGF5OiBcImxvbmdcIixcbiAgICB5ZWFyOiBcIm51bWVyaWNcIixcbiAgICBtb250aDogXCJzaG9ydFwiLFxuICAgIGRheTogXCJudW1lcmljXCIsXG4gIH07XG5cbiAgY29uc3QgZGF5T2ZXZWVrID0gZGF0ZS50b0xvY2FsZURhdGVTdHJpbmcoXCJlbi1Vc1wiLCBvcHRpb25zKTtcblxuICBsZXQgdXNlclRvRG8gPSBuZXcgZ2V0TGlzdChcbiAgICB0YXNrSW5wdXRWYWx1ZSxcbiAgICBkZXNjcmlwdGlvbklucHV0VmFsdWUsXG4gICAgcHJpb3JpdHlWYWx1ZUVsLFxuICAgIGRheU9mV2VlayxcbiAgKTtcblxuICB0b0Rvcy5wdXNoKHVzZXJUb0RvKTtcblxuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInRvRG9zXCIsIEpTT04uc3RyaW5naWZ5KHRvRG9zKSk7XG5cbiAgY2xlYXJGb3JtKCk7XG59XG5cbmZ1bmN0aW9uIGNsZWFyRm9ybSgpIHtcbiAgdGFza1RpdGxlLnZhbHVlID0gXCJcIjtcbiAgdGFza0Rlc2NyaXB0aW9uLnZhbHVlID0gXCJcIjtcbiAgZHVlRGF0ZS52YWx1ZSA9IFwiXCI7XG4gIHRhc2tQcmlvcml0eS52YWx1ZSA9IFwiU2VsZWN0IFByaW9yaXR5XCI7XG59XG5cbmZ1bmN0aW9uIGRpc3BsYXlUb0RvcygpIHtcbiAgbGV0IHVzZXJUb2RvcyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ0b0Rvc1wiKSkgfHwgW107XG5cbiAgdXNlclRvZG9zPy5mb3JFYWNoKCh0b2RvT2JqLCBpbmRleCkgPT4ge1xuICAgIGdldEVsZW1lbnRGb3JUYXNrRGlzcGxheShcbiAgICAgIHRvZG9PYmoudGl0bGUsXG4gICAgICB0b2RvT2JqLmRlc2NyaXB0aW9uLFxuICAgICAgdG9kb09iai5wcmlvcml0eSxcbiAgICAgIHRvZG9PYmouZGF0ZSxcbiAgICAgIGluZGV4LFxuICAgICk7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBnZXRFbGVtZW50Rm9yVGFza0Rpc3BsYXkoXG4gIHNhdmVUaXRsZURhdGEsXG4gIHNhdmVEZXNjcmlwdGlvbkRhdGEsXG4gIHNhdmVQcmlvcml0eURhdGEsXG4gIHNhdmVEdWVEYXRlRGF0YSxcbiAgaW5kZXgsXG4pIHtcbiAgaGVhZGVyLnRleHRDb250ZW50ID0gXCJDcmVhdGUgWW91ciBUby1EbyBMaXN0LlwiO1xuICBjb25zdCBsaXN0Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgdGFza0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICBjb25zdCBpbm5lclRhc2tDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBpbm5lclRhc2tIYW5kbGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgaW5uZXJUYXNrSGFuZGxlci5jbGFzc0xpc3QuYWRkKFwiaW5uZXJUYXNrSGFuZGxlclwiKTtcbiAgaW5uZXJUYXNrQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJpbm5lclRhc2tDb250YWluZXJcIik7XG4gIHRhc2tDb250YWluZXIuY2xhc3NMaXN0LmFkZChcInRhc2tDb250YWluZXJcIik7XG4gIGxpc3RDb250YWluZXIuY2xhc3NMaXN0LmFkZChcImxpc3RDb250YWluZXJcIik7XG5cbiAgY29uc3QgY2hlY2tCb3hDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgY2hlY2tCb3hDb250YWluZXIuY2xhc3NMaXN0LmFkZChcImNoZWNrQm94Q29udGFpbmVyXCIpO1xuICBjb25zdCBjaGVja0JveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgY2hlY2tCb3guY2xhc3NMaXN0LmFkZChcImNoZWNrQm94XCIpO1xuICBjaGVja0JveC5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwiY2hlY2tib3hcIik7XG5cbiAgY29uc3QgdGFza1RpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImg0XCIpO1xuICBjb25zdCB0YXNrRGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgY29uc3QgZHVlRGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICBjb25zdCB0YXNrUHJpb3JpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgY29uc3QgZGVsZXRlVGFzayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG5cbiAgdGFza1RpdGxlLmNsYXNzTGlzdC5hZGQoXCJ0YXNrVGl0bGVcIik7XG4gIHRhc2tEZXNjcmlwdGlvbi5jbGFzc0xpc3QuYWRkKFwidGFza0Rlc2NyaXB0aW9uXCIpO1xuXG4gIGR1ZURhdGUuY2xhc3NMaXN0LmFkZChcImR1ZURhdGVcIik7XG4gIGRlbGV0ZVRhc2suY2xhc3NMaXN0LmFkZChcImRlbGV0ZVRhc2tcIik7XG4gIHRhc2tQcmlvcml0eS5jbGFzc0xpc3QuYWRkKFwidGFza1ByaW9yaXR5XCIpO1xuXG4gIHRhc2tUaXRsZS50ZXh0Q29udGVudCA9IGAgJHtzYXZlVGl0bGVEYXRhfWA7XG4gIHRhc2tEZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9IGAke3NhdmVEZXNjcmlwdGlvbkRhdGF9YDtcbiAgdGFza1ByaW9yaXR5LnRleHRDb250ZW50ID0gYCR7c2F2ZVByaW9yaXR5RGF0YX1gO1xuICBkdWVEYXRlLnRleHRDb250ZW50ID0gYCR7c2F2ZUR1ZURhdGVEYXRhfWA7XG4gIGRlbGV0ZVRhc2sudGV4dENvbnRlbnQgPSBcIkRlbGV0ZSB0YXNrXCI7XG5cbiAgdGFza1RpdGxlLmRhdGFzZXQuZmllbGRUeXBlID0gXCJ0aXRsZVwiO1xuICB0YXNrRGVzY3JpcHRpb24uZGF0YXNldC5maWVsZFR5cGUgPSBcImRlc2NyaXB0aW9uXCI7XG4gIHRhc2tQcmlvcml0eS5kYXRhc2V0LmZpZWxkVHlwZSA9IFwidGFza1ByaW9yaXR5XCI7XG4gIGR1ZURhdGUuZGF0YXNldC5maWVsZFR5cGUgPSBcImR1ZURhdGVcIjtcblxuICB0YXNrVGl0bGUuZGF0YXNldC5pbmRleCA9IGluZGV4O1xuICB0YXNrRGVzY3JpcHRpb24uZGF0YXNldC5pbmRleCA9IGluZGV4O1xuICB0YXNrUHJpb3JpdHkuZGF0YXNldC5pbmRleCA9IGluZGV4O1xuICBkdWVEYXRlLmRhdGFzZXQuaW5kZXggPSBpbmRleDtcbiAgY2hlY2tCb3guZGF0YXNldC5pbmRleCA9IGluZGV4O1xuXG4gIGlubmVyVGFza0NvbnRhaW5lci5hcHBlbmRDaGlsZCh0YXNrVGl0bGUpO1xuICBpbm5lclRhc2tDb250YWluZXIuYXBwZW5kQ2hpbGQodGFza0Rlc2NyaXB0aW9uKTtcbiAgaW5uZXJUYXNrQ29udGFpbmVyLmFwcGVuZENoaWxkKGR1ZURhdGUpO1xuXG4gIGlubmVyVGFza0hhbmRsZXIuYXBwZW5kQ2hpbGQodGFza1ByaW9yaXR5KTtcbiAgaW5uZXJUYXNrSGFuZGxlci5hcHBlbmRDaGlsZChkZWxldGVUYXNrKTtcblxuICB0YXNrQ29udGFpbmVyLmFwcGVuZENoaWxkKGlubmVyVGFza0NvbnRhaW5lcik7XG4gIHRhc2tDb250YWluZXIuYXBwZW5kQ2hpbGQoaW5uZXJUYXNrSGFuZGxlcik7XG5cbiAgY2hlY2tCb3hDb250YWluZXIuYXBwZW5kQ2hpbGQoY2hlY2tCb3gpO1xuICBsaXN0Q29udGFpbmVyLmFwcGVuZENoaWxkKGNoZWNrQm94Q29udGFpbmVyKTtcblxuICBsaXN0Q29udGFpbmVyLmFwcGVuZENoaWxkKHRhc2tDb250YWluZXIpO1xuICB1c2VyTGlzdC5hcHBlbmRDaGlsZChsaXN0Q29udGFpbmVyKTtcblxuICB0YXNrVGl0bGUuYWRkRXZlbnRMaXN0ZW5lcihcImRibGNsaWNrXCIsIGVkaXRUYXNrKTtcbiAgdGFza1RpdGxlLmFkZEV2ZW50TGlzdGVuZXIoXCJ0b3VjaHN0YXJ0XCIsIGVkaXRUYXNrKTtcblxuICB0YXNrRGVzY3JpcHRpb24uYWRkRXZlbnRMaXN0ZW5lcihcImRibGNsaWNrXCIsIGVkaXRUYXNrKTtcbiAgdGFza0Rlc2NyaXB0aW9uLmFkZEV2ZW50TGlzdGVuZXIoXCJ0b3VjaHN0YXJ0XCIsIGVkaXRUYXNrKTtcblxuICB0YXNrUHJpb3JpdHkuYWRkRXZlbnRMaXN0ZW5lcihcImRibGNsaWNrXCIsIGVkaXRUYXNrKTtcbiAgdGFza1ByaW9yaXR5LmFkZEV2ZW50TGlzdGVuZXIoXCJ0b3VjaHN0YXJ0XCIsIGVkaXRUYXNrKTtcblxuICBkdWVEYXRlLmFkZEV2ZW50TGlzdGVuZXIoXCJkYmxjbGlja1wiLCBlZGl0VGFzayk7XG4gIGR1ZURhdGUuYWRkRXZlbnRMaXN0ZW5lcihcInRvdWNoc3RhcnRcIiwgZWRpdFRhc2spO1xuXG4gIGRlbGV0ZVRhc2suYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGRlbGV0ZVRvRG8pO1xuICBkZWxldGVUYXNrLmFkZEV2ZW50TGlzdGVuZXIoXCJ0b3VjaHN0YXJ0XCIsIGRlbGV0ZVRvRG8pO1xuXG4gIGhhbmRsZUNoZWNrQm94KGNoZWNrQm94LCB0YXNrVGl0bGUsIHRhc2tEZXNjcmlwdGlvbik7XG59XG5cbmZ1bmN0aW9uIGVkaXRUYXNrKGV2ZW50KSB7XG4gIGNvbnN0IHRhcmdldCA9IGV2ZW50LnRhcmdldDtcbiAgY29uc29sZS5sb2codGFyZ2V0KTtcbiAgY29uc3QgZmllbGRUeXBlID0gdGFyZ2V0LmRhdGFzZXQuZmllbGRUeXBlO1xuICBjb25zdCBpbmRleCA9IHRhcmdldC5kYXRhc2V0LmluZGV4O1xuICBjb25zb2xlLmxvZyhpbmRleCk7XG4gIGNvbnN0IHRhc2tQcmlvcml0eSA9IFtcIlVyZ2VudFwiLCBcIkltcG9ydGFudFwiLCBcIkxvdyBwcmlvcml0eVwiXTtcblxuICBsZXQgdGFza0lucHV0O1xuXG4gIGlmIChmaWVsZFR5cGUgPT09IFwidGl0bGVcIiB8fCBmaWVsZFR5cGUgPT09IFwiZGVzY3JpcHRpb25cIikge1xuICAgIHRhc2tJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICB0YXNrSW5wdXQudHlwZSA9IFwidGV4dFwiO1xuICAgIHRhc2tJbnB1dC52YWx1ZSA9IHRhcmdldC50ZXh0Q29udGVudDtcbiAgfSBlbHNlIGlmIChmaWVsZFR5cGUgPT09IFwiZHVlRGF0ZVwiKSB7XG4gICAgdGFza0lucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgIHRhc2tJbnB1dC50eXBlID0gXCJkYXRlXCI7XG4gICAgdGFza0lucHV0LnZhbHVlID0gdGFyZ2V0LnRleHRDb250ZW50O1xuICB9IGVsc2UgaWYgKGZpZWxkVHlwZSA9PT0gXCJ0YXNrUHJpb3JpdHlcIikge1xuICAgIHRhc2tJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzZWxlY3RcIik7XG5cbiAgICB0YXNrUHJpb3JpdHkuZm9yRWFjaCgocHJpb3JpdHkpID0+IHtcbiAgICAgIGNvbnN0IG9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7XG4gICAgICBvcHRpb24udmFsdWUgPSBwcmlvcml0eTtcbiAgICAgIG9wdGlvbi50ZXh0Q29udGVudCA9IHByaW9yaXR5O1xuXG4gICAgICBpZiAocHJpb3JpdHkgPT09IHRhcmdldC50ZXh0Q29udGVudCkge1xuICAgICAgICBvcHRpb24uc2VsZWN0ZWQgPSB0cnVlO1xuICAgICAgfVxuICAgICAgdGFza0lucHV0LmFwcGVuZENoaWxkKG9wdGlvbik7XG4gICAgfSk7XG4gIH1cblxuICB0YXNrSW5wdXQuZGF0YXNldC5maWVsZFR5cGUgPSBmaWVsZFR5cGU7XG4gIHRhc2tJbnB1dC5kYXRhc2V0LmluZGV4ID0gaW5kZXg7XG5cbiAgdGFyZ2V0LnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgdGFyZ2V0LnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKHRhc2tJbnB1dCwgdGFyZ2V0Lm5leHRTaWJsaW5nKTtcblxuICB0YXNrSW5wdXQuY2xhc3NMaXN0LmFkZChcImVkaXRcIik7XG5cbiAgaWYgKHRhc2tJbnB1dC50eXBlID09PSBcInRleHRcIikge1xuICAgIHRhc2tJbnB1dC5zZWxlY3QoKTtcbiAgfVxuXG4gIHRhc2tJbnB1dC5hZGRFdmVudExpc3RlbmVyKFwiYmx1clwiLCBzYXZlRWRpdGVkVGFzayk7XG4gIHRhc2tJbnB1dC5hZGRFdmVudExpc3RlbmVyKFwia2V5cHJlc3NcIiwgc2F2ZUVkaXRlZFRhc2spO1xufVxuXG5mdW5jdGlvbiBzYXZlRWRpdGVkVGFzayhldmVudCkge1xuICBpZiAoZXZlbnQudHlwZSA9PT0gXCJibHVyXCIgfHwgZXZlbnQua2V5ID09PSBcIkVudGVyXCIpIHtcbiAgICBsZXQgaW5wdXQgPSBldmVudC50YXJnZXQ7XG4gICAgY29uc29sZS5sb2coaW5wdXQpO1xuICAgIGxldCBmaWVsZFR5cGUgPSBpbnB1dC5kYXRhc2V0LmZpZWxkVHlwZTtcbiAgICBsZXQgaW5kZXggPSBpbnB1dC5kYXRhc2V0LmluZGV4O1xuXG4gICAgY29uc29sZS5sb2codG9Eb3MpO1xuXG4gICAgbGV0IG5ld1ZhbHVlO1xuICAgIGlmIChpbnB1dC50YWdOYW1lID09PSBcIlNFTEVDVFwiKSB7XG4gICAgICBuZXdWYWx1ZSA9IGlucHV0Lm9wdGlvbnNbaW5wdXQuc2VsZWN0ZWRJbmRleF0udmFsdWU7XG4gICAgICB0b0Rvc1tpbmRleF0ucHJpb3JpdHkgPSBuZXdWYWx1ZTtcbiAgICAgIGNvbnNvbGUubG9nKHRvRG9zW2luZGV4XS5wcmlvcml0eSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIG5ld1ZhbHVlID0gaW5wdXQudmFsdWU7XG4gICAgfVxuXG4gICAgaWYgKGluZGV4IDwgdG9Eb3MubGVuZ3RoKSB7XG4gICAgICBpZiAoZmllbGRUeXBlID09PSBcInRpdGxlXCIpIHtcbiAgICAgICAgdG9Eb3NbaW5kZXhdLnRpdGxlID0gbmV3VmFsdWU7XG4gICAgICAgIGNvbnNvbGUubG9nKHRvRG9zW2luZGV4XS50aXRsZSk7XG4gICAgICAgIGNvbnNvbGUubG9nKG5ld1ZhbHVlKTtcbiAgICAgIH0gZWxzZSBpZiAoZmllbGRUeXBlID09PSBcImRlc2NyaXB0aW9uXCIpIHtcbiAgICAgICAgdG9Eb3NbaW5kZXhdLmRlc2NyaXB0aW9uID0gbmV3VmFsdWU7XG4gICAgICAgIGNvbnNvbGUubG9nKGluZGV4KTtcbiAgICAgICAgY29uc29sZS5sb2codG9Eb3NbZGVzY3JpcHRpb25dKTtcbiAgICAgIH0gZWxzZSBpZiAoZmllbGRUeXBlID09PSBcImR1ZURhdGVcIikge1xuICAgICAgICBsZXQgZHVlRGF0ZSA9IG5ld1ZhbHVlO1xuICAgICAgICBjb25zdCBkYXRlID0gbmV3IERhdGUoZHVlRGF0ZSk7XG5cbiAgICAgICAgY29uc3Qgb3B0aW9ucyA9IHtcbiAgICAgICAgICB3ZWVrZGF5OiBcImxvbmdcIixcbiAgICAgICAgICB5ZWFyOiBcIm51bWVyaWNcIixcbiAgICAgICAgICBtb250aDogXCJzaG9ydFwiLFxuICAgICAgICAgIGRheTogXCJudW1lcmljXCIsXG4gICAgICAgIH07XG4gICAgICAgIGNvbnNvbGUubG9nKHRvRG9zKTtcblxuICAgICAgICB0b0Rvc1tpbmRleF0uZGF0ZSA9IGRhdGUudG9Mb2NhbGVEYXRlU3RyaW5nKFwiZW4tVXNcIiwgb3B0aW9ucyk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJ0b0Rvc1wiLCBKU09OLnN0cmluZ2lmeSh0b0RvcykpO1xuXG4gICAgbGV0IG9yaWdpbmFsRWxlbWVudCA9IGlucHV0LnByZXZpb3VzU2libGluZztcblxuICAgIG9yaWdpbmFsRWxlbWVudC50ZXh0Q29udGVudCA9IG5ld1ZhbHVlO1xuXG4gICAgb3JpZ2luYWxFbGVtZW50LnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG5cbiAgICBpbnB1dC5yZW1vdmUoKTtcblxuICAgIHVzZXJMaXN0LnRleHRDb250ZW50ID0gXCJcIjtcblxuICAgIGRpc3BsYXlUb0RvcygpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGhhbmRsZUNoZWNrQm94KGNoZWNrQm94LCB0YXNrVGl0bGUsIHRhc2tEZXNjcmlwdGlvbikge1xuICBjaGVja0JveC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGV2ZW50KSA9PiB7XG4gICAgaWYgKGNoZWNrQm94LmNoZWNrZWQgPT09IHRydWUpIHtcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwidG9Eb3NcIiwgSlNPTi5zdHJpbmdpZnkodG9Eb3MpKTtcbiAgICAgIGNvbnNvbGUubG9nKHRvRG9zKTtcblxuICAgICAgY29uc3QgbGlzdENvbnRhaW5lckVsID0gZXZlbnQudGFyZ2V0O1xuICAgICAgY29uc29sZS5sb2cobGlzdENvbnRhaW5lckVsKTtcbiAgICAgIGNvbnN0IGluZGV4ID0gbGlzdENvbnRhaW5lckVsLmRhdGFzZXQuaW5kZXg7XG5cbiAgICAgIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICAgICAgbGlzdENvbnRhaW5lckVsLnJlbW92ZShsaXN0Q29udGFpbmVyRWwpO1xuICAgICAgICB0b0Rvcy5zcGxpY2UoaW5kZXgsIDEpO1xuXG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwidG9Eb3NcIiwgSlNPTi5zdHJpbmdpZnkodG9Eb3MpKTtcbiAgICAgICAgY29uc29sZS5sb2codG9Eb3MpO1xuICAgICAgICB1c2VyTGlzdC50ZXh0Q29udGVudCA9IFwiXCI7XG4gICAgICAgIGRpc3BsYXlUb0RvcygpO1xuICAgICAgICBhbGVydChcIlRhc2sgY29tcGxldGVkIVwiKTtcbiAgICAgIH1cblxuICAgICAgY29uc29sZS5sb2coXCJ0cnVlXCIpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0YXNrVGl0bGUuc3R5bGUudGV4dERlY29yYXRpb24gPSBcIm5vbmVcIjtcbiAgICAgIHRhc2tEZXNjcmlwdGlvbi5zdHlsZS50ZXh0RGVjb3JhdGlvbiA9IFwibm9uZVwiO1xuICAgICAgY29uc29sZS5sb2coXCJmYWxzZVwiKTtcbiAgICB9XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBkZWxldGVUb0RvKCkge1xuICBjb25zdCBsaXN0Q29udGFpbmVyRWwgPSB0aGlzLmNsb3Nlc3QoXCIubGlzdENvbnRhaW5lclwiKTtcbiAgY29uc3QgYnV0dG9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuZGVsZXRlVGFza1wiKTtcbiAgY29uc3QgaW5kZXggPSBBcnJheS5mcm9tKGJ1dHRvbnMpLmluZGV4T2YodGhpcyk7XG5cbiAgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgIGxpc3RDb250YWluZXJFbC5yZW1vdmUobGlzdENvbnRhaW5lckVsKTtcbiAgICB0b0Rvcy5zcGxpY2UoaW5kZXgsIDEpO1xuXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJ0b0Rvc1wiLCBKU09OLnN0cmluZ2lmeSh0b0RvcykpO1xuICAgIGNvbnNvbGUubG9nKHRvRG9zKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBjYW5jZWxGb3JtRGlzcGxheSgpIHtcbiAgLy8gICBsZXQgYWRkVG9kb0J0bk9uTW9iaWxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNhZGRUb2RvQnRuQ29udGFpbmVyMlwiKTtcbiAgLy8gICBjb25zb2xlLmxvZyhhZGRUb2RvQnRuT25Nb2JpbGUpO1xuXG4gIC8vIGxldCBtZWRpYVF1ZXJ5ID0gd2luZG93Lm1hdGNoTWVkaWEoJyhtYXgtd2lkdGg6IDUwMHB4KScpXG4gIC8vIGlmIChtZWRpYVF1ZXJ5Lm1hdGNoZXMpIHtcbiAgLy8gICAgYWRkVG9kb0J0bk9uTW9iaWxlLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG4gIC8vICAgY29uc29sZS5sb2coJ3RydWUnKVxuICAvLyB9IGVsc2Uge1xuICAvLyAgIGNvbnNvbGUubG9nKCdmYWxzZScpXG5cbiAgLy8gfVxuICBjb25zdCBpbnRpYWxUZXh0RGlzcGxheUNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgXCIuaW50aWFsVGV4dERpc3BsYXlDb250YWluZXJcIixcbiAgKTtcbiAgaW50aWFsVGV4dERpc3BsYXlDb250YWluZXIuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcbiAgdGFza1RpdGxlLnZhbHVlID0gXCJcIjtcbiAgdGFza0Rlc2NyaXB0aW9uLnZhbHVlID0gXCJcIjtcbiAgZHVlRGF0ZS52YWx1ZSA9IFwiXCI7XG4gIHRhc2tQcmlvcml0eS52YWx1ZSA9IFwiU2VsZWN0IFByaW9yaXR5XCI7XG4gIGZvcm0uc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuIFxuXG59XG5jYW5jZWxGb3JtLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBjYW5jZWxGb3JtRGlzcGxheSk7XG5cbmZ1bmN0aW9uIHN1Ym1pdEZvcm0oKSB7XG4gIHVzZXJsaXN0LnRleHRDb250ZW50ID0gXCJcIjtcblxuICBhY2NlcHRJbnB1dCgpO1xuICBkaXNwbGF5VG9Eb3MoKTtcbn1cbmZvcm0uYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCAoZXZlbnQpID0+IGV2ZW50LnByZXZlbnREZWZhdWx0KCkpO1xuc3VibWl0QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBzdWJtaXRGb3JtKTtcblxuZnVuY3Rpb24gZGlzcGxheUluYm94Rm9ybSgpIHtcbiAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImhlYWRlciBoMVwiKTtcbiAgdXNlcmxpc3QudGV4dENvbnRlbnQgPSBcIlwiO1xuICBoZWFkZXIudGV4dENvbnRlbnQgPSBcIkluYm94XCI7XG5cbiAgZGlzcGxheVRvRG9zKCk7XG4gIGZvcm0uc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcblxuICBpZiAoaW5wdXROZXdwcm9qZWN0Rm9ybU5hbWUuc3R5bGUuZGlzcGxheSA9PT0gXCJibG9ja1wiKSB7XG4gICAgaW5wdXROZXdwcm9qZWN0Rm9ybU5hbWUuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICB9XG4gIHByb2plY3RGb3JtLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbn1cbmluYm94LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBkaXNwbGF5SW5ib3hGb3JtKTtcbiIsImltcG9ydCB7IGNyZWF0ZU5ld1Byb2plY3RUYXNrQnRuIH0gZnJvbSBcIi4vZG9tLUVsLTJcIjtcbmxldCBhc2lkZUVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIm1haW4gYXNpZGVcIik7XG5sZXQgdG9nZ2xlTWVudUljb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3RvZ2dsZU1lbnVJY29uXCIpO1xubGV0IHNpZGVCYXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYXNpZGUjbWVudVwiKTtcbmxldCBwcm9qZWN0RHJvcERvd24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Byb2plY3QtZHJvcGRvd25cIik7XG4vLyBsZXQgYWRkTmV3UHJvamVjdEVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNhZE5ld1Byb2plY3RFbFwiKTtcblxuY29uc29sZS5sb2cocHJvamVjdERyb3BEb3duKTtcblxuY29uc29sZS5sb2coYXNpZGVFbCk7XG5cbmZ1bmN0aW9uIHRvZ2dlbE1lbnUoKSB7XG4gIGNvbnNvbGUubG9nKFwidG9nZ2xlIGVsZW1lbnQgaXMgY2xpY2tlZFwiKTtcbiAgdG9nZ2xlTWVudUljb24uY2xhc3NMaXN0LnRvZ2dsZShcImFjdGl2ZVwiKTtcbiAgc2lkZUJhci5jbGFzc0xpc3QudG9nZ2xlKFwiYWN0aXZlXCIpO1xufVxudG9nZ2xlTWVudUljb24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHRvZ2dlbE1lbnUpO1xuXG5mdW5jdGlvbiByZW1vdmVTaWRlQmFyKGUpIHtcbiAgaWYgKGUudGFyZ2V0LnRhZ05hbWUgPT09IFwiT1BUSU9OXCIpIHtcbiAgICB0b2dnbGVNZW51SWNvbi5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xuICAgIHNpZGVCYXIuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcbiAgfSBlbHNlIGlmIChcbiAgICBlLnRhcmdldCAhPT0gdG9nZ2xlTWVudUljb24gJiZcbiAgICBlLnRhcmdldCAhPT0gc2lkZUJhciAmJlxuICAgIGUudGFyZ2V0ICE9PSBwcm9qZWN0RHJvcERvd25cbiAgKSB7XG4gICAgdG9nZ2xlTWVudUljb24uY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcbiAgICBzaWRlQmFyLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XG4gIH1cbn1cblxuZnVuY3Rpb24gb3B0aW9uU2VsZWN0ZWQoKSB7XG4gIHRvZ2dsZU1lbnVJY29uLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XG4gIHNpZGVCYXIuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcbn1cblxucHJvamVjdERyb3BEb3duLmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgb3B0aW9uU2VsZWN0ZWQpO1xuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHJlbW92ZVNpZGVCYXIpO1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyYztcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSB7XG5cdFx0XHR2YXIgaSA9IHNjcmlwdHMubGVuZ3RoIC0gMTtcblx0XHRcdHdoaWxlIChpID4gLTEgJiYgKCFzY3JpcHRVcmwgfHwgIS9eaHR0cChzPyk6Ly50ZXN0KHNjcmlwdFVybCkpKSBzY3JpcHRVcmwgPSBzY3JpcHRzW2ktLV0uc3JjO1xuXHRcdH1cblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJtYWluXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCBcIi4uL3NyYy9zdHlsZXMuY3NzXCI7XG5pbXBvcnQgZG9tRWwgZnJvbSBcIi4vZG9tLUVsXCI7XG5pbXBvcnQgZG9tRWwyIGZyb20gXCIuL2RvbS1FbC0yXCI7XG5pbXBvcnQgcmVzcG9uc2l2ZSBmcm9tIFwiLi9yZXNwb25zaXZlXCI7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=