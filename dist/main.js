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
___CSS_LOADER_EXPORT___.push([module.id, `    body {
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
            content: '';
            position: absolute;
            width: 28px;
            height: 2px;
            background-color: #fff;
            transform: translateY(-5px);
            transition: 0.2s;
        }

        #toggleMenuIcon::after {
            content: '';
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
            border-radius: 10px
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

        #configPriorityDateOnMobile #priority, #datePicker {
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

        #form .first-inputContainer input, .PtitleInputContainer input {
            max-width: 165px;
            max-height: 15px;
            border: none;
            outline: none;
            color: white;
            margin: 10px 0;
            background-color: inherit;
        }

        #form .second-inputContainer input, .PdescriptionInputContainer input {
            max-width: 178px;
            max-height: 15px;
            border: none;
            outline: none;
            color: white;
            background-color: inherit;
            margin: 0;
        }


        #form .other-options-on-forms button, #configPriorityDateOnMobile #priority, #datePicker {
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

        aside ul, ul select {
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
            content: '';
            position: absolute;
            width: 28px;
            height: 2px;
            background-color: #fff;
            transform: translateY(-5px);
            transition: 0.2s;
        }

        #toggleMenuIcon::after {
            content: '';
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
            border-radius: 10px
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
            max-width: 150px
        }

        #form .first-inputContainer input, .PtitleInputContainer input,
        #form .second-inputContainer input, .PdescriptionInputContainer input {
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


        #form .other-options-on-forms button, #priority, #datePicker {
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
            border-radius: 10px
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
            max-width: 150px
        }

        #form .first-inputContainer input, .PtitleInputContainer input {
            max-width: 420px;
            max-height: 60px;
            border: none;
            outline: none;
            color: white;
            background-color: inherit;
            margin: 0;
        }

        #form .second-inputContainer input, .PdescriptionInputContainer input {
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
            margin: 1px 33px
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

        #form .other-options-on-forms button, #priority, #datePicker {
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
        grid-template-columns: 100px 650px 350px;
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
        transform: scale(1.1)
    }

    button.deleteTask:active {
        transform: scale(0.9)
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



    .taskTitle, .newProject-task-title, .editableSaveTaskEl {
        margin: 0;
        font-size: 18px;
        text-decoration: none;
        text-decoration-color: red;

    }

    .taskDescription, .newProject-description {
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

    .innerTaskHandler {
        display: flex;
        flex-direction: column;
        justify-items: center;
        justify-content: center;
        align-items: center;
        margin: 0px 15px 0 40px;
    }

    .inbox-container {
        display: flex;
        align-items: center;
        gap: 5px;
        margin: 0px 0 0 16px;
        height: 26px;
        padding: 9px;
        border-radius: 5px 0px 0px 5px;
    }

    .inbox-container:hover {
        background-color: var(--hover-color);
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
        margin: 0 0
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
        margin: 1px 33px
    }

    .buttons button {
        border: none;
        border-radius: 7px;
        padding: 7px;
        transition: transform 0.2s ease-out
    }

    .buttons button:hover {
        transform: scale(1.05)
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
        top: 0;
    }


    .first-inputContainer input, .PtitleInputContainer input {
        max-width: 600px;
        height: 25px;
        border: none;
        outline: none;
        color: white;
        margin: 10px 0 0 0;
        background-color: inherit;
    }

    .task-title, .description {
        width: 350px;
    }

    .first-inputContainer input::placeholder, .PtitleInputContainer input::placeholder {
        color: white;
        padding: 0 10px;
        opacity: 1;

    }

    .second-inputContainer input, .PdescriptionInputContainer input {
        max-width: 600px;
        height: 25px;
        border: none;
        outline: none;
        color: white;
        background-color: inherit;
        margin: 0;
    }

    .second-inputContainer input::placeholder, .PdescriptionInputContainer input::placeholder {
        padding: 0 10px;
        color: white;
        opacity: 1;

    }

    .first-inputContainer, .second-inputContainer {
        margin: 10px 0 0 0;
        font-size: 1rem;
    }

    .other-options-on-forms, .footer {}

    .submitBtn:active {
        transform: active scale(1.1);
    }

    .other-options-on-forms button, #priority, input#datePicker {
        transition: transform .3s ease-in;
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

    #projectPriority, .footer {
        padding: 7px;
        border-radius: 5px;
        margin: 0 4px 5px 0;
    }

    .addProjectsContainer {
        display: flex;

        margin: 0 0 0 20px;
        padding: 7px;
        align-items: center;
        gap: 10px;
        height: 25px;
        border-radius: 5px 0px 0px 5px;

    }

    .addProjectsContainer:hover {
        background-color: var(--hover-color);
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

    .project_text:hover {
        background-color: var(--hover-color);
    }



    #project-dropdown {
        border: 0;
        background-color: inherit;
        margin: 5px 0 0 17px;
        font-size: 18px;
        font-weight: 550;
        padding: 8px;
        border-radius: 5px 0px 0px 5px;
        max-width: 160px;

    }

    #project-dropdown:hover {
        background-color: var(--hover-color);

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
        transform: scale(1.1)
    }

    .cancelForProjectBtn {
        padding: 7px;
        border-radius: 9px;
    }`, "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"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","sourcesContent":["    body {\r\n        padding: 0;\r\n        margin: 0;\r\n        box-sizing: border-box;\r\n    }\r\n\r\n    :root {\r\n        --hover-color: #fda4af;\r\n        --background-color: #6f9e9e;\r\n    }\r\n\r\n    * {\r\n        padding: 0;\r\n        margin: 0;\r\n        box-sizing: border-box;\r\n\r\n        font-family: \"Roboto\", sans-serif;\r\n        font-weight: 400;\r\n        font-style: normal;\r\n    }\r\n\r\n    @media (max-width: 550px) {\r\n\r\n        body main {\r\n            display: flex;\r\n            flex-direction: column;\r\n            justify-content: center;\r\n            z-index: 1;\r\n        }\r\n\r\n        main header {\r\n            background-color: #fda4af;\r\n            text-align: center;\r\n            display: flex;\r\n            align-items: center;\r\n            justify-content: center;\r\n            gap: 10px;\r\n        }\r\n\r\n\r\n\r\n\r\n        #toggleMenuIcon {\r\n            position: fixed;\r\n            top: 20px;\r\n            right: 20px;\r\n            width: 60px;\r\n            height: 60px;\r\n            background-color: #6b8888;\r\n            cursor: pointer;\r\n            display: flex;\r\n            justify-content: center;\r\n            align-items: center;\r\n            border-radius: 8px;\r\n            transition: top 0.3s;\r\n\r\n            z-index: 1000;\r\n        }\r\n\r\n        #toggleMenuIcon::before {\r\n            content: '';\r\n            position: absolute;\r\n            width: 28px;\r\n            height: 2px;\r\n            background-color: #fff;\r\n            transform: translateY(-5px);\r\n            transition: 0.2s;\r\n        }\r\n\r\n        #toggleMenuIcon::after {\r\n            content: '';\r\n            position: absolute;\r\n            width: 28px;\r\n            height: 2px;\r\n            background-color: #fff;\r\n            transform: translateY(5px);\r\n            transition: 0.2s;\r\n        }\r\n\r\n        #toggleMenuIcon.active::before {\r\n            transform: translateY(0px) rotate(45deg);\r\n\r\n        }\r\n\r\n        #toggleMenuIcon.active::after {\r\n            transform: translateY(0px) rotate(-45deg);\r\n\r\n        }\r\n\r\n        aside#menu {\r\n            display: block;\r\n            position: fixed;\r\n            top: 0;\r\n            left: -220px;\r\n            width: 220px;\r\n            height: 100vh;\r\n            color: white;\r\n            filter: white;\r\n            background-color: #7989a1;\r\n            transition: 0.3s;\r\n            z-index: 1000;\r\n            fill: white;\r\n\r\n        }\r\n\r\n        aside#menu.active {\r\n            left: 0;\r\n        }\r\n\r\n        main aside {\r\n            display: none;\r\n            border-radius: 5px;\r\n            background-color: #e2e8f0;\r\n        }\r\n\r\n        main #Container {\r\n            display: flex;\r\n            flex-direction: column;\r\n            flex-wrap: wrap;\r\n            border-radius: 5px;\r\n        }\r\n\r\n\r\n        header .menuController {\r\n            display: block;\r\n            width: 40px;\r\n            height: 40px;\r\n        }\r\n\r\n        header .menuController svg {\r\n            display: block;\r\n            width: 40px;\r\n            height: 40px;\r\n            fill: white;\r\n            background-color: black;\r\n            border-radius: 10px\r\n        }\r\n\r\n        #userlist {\r\n            display: flex;\r\n            flex-direction: column;\r\n            max-width: 550px;\r\n        }\r\n\r\n        div.listContainer {\r\n            display: flex;\r\n            gap: 5px;\r\n            max-width: 515px;\r\n            border-radius: 10px;\r\n            box-shadow: 1px 0px 3px 0px;\r\n            margin: 14px 14px 0 19px;\r\n\r\n            padding: 10px;\r\n\r\n\r\n        }\r\n\r\n        #userlist .intialTextDisplay {\r\n            display: flex;\r\n            flex-direction: column;\r\n            justify-content: center;\r\n            align-items: center;\r\n            text-align: center;\r\n        }\r\n\r\n        .intialTextDisplay img {\r\n            max-width: 100%;\r\n            height: auto;\r\n            padding: 18px;\r\n            border-radius: 30px;\r\n            object-fit: contain;\r\n\r\n        }\r\n\r\n        #userlist #addTodoBtnContainer {\r\n            display: flex;\r\n            align-items: center;\r\n            gap: 5px;\r\n            margin: 27px 0 11px 26px;\r\n        }\r\n\r\n        #task {\r\n            display: flex;\r\n            align-items: center;\r\n            gap: 5px;\r\n            margin: 27px 0 11px 26px;\r\n        }\r\n\r\n        #userlist #addTodoBtnContainer svg {\r\n            background-color: #dc2626;\r\n            border-radius: 50%;\r\n            fill: white;\r\n        }\r\n\r\n        #userlist #addTodoBtnContainer :hover {\r\n            cursor: pointer;\r\n            -webkit-transform: scale(1.09);\r\n        }\r\n\r\n        #userlist #addTodoBtnContainer button {\r\n            border: 0;\r\n            font-size: 16px;\r\n            color: #b91c1c;\r\n            background-color: inherit;\r\n            transition: 0.3s;\r\n        }\r\n\r\n        #userlist #addTodoBtnContainer button:hover {\r\n            cursor: pointer;\r\n            -webkit-transform: scale(1.09);\r\n        }\r\n\r\n\r\n        .inner_container #form {\r\n            background-color: #64748b;\r\n            border-radius: 10px;\r\n            max-height: 135px;\r\n            max-width: 515px !important;\r\n            height: 140px;\r\n            padding-left: 1rem;\r\n            display: none;\r\n            max-width: 480px;\r\n            margin: 10px 10px 0 10px;\r\n        }\r\n\r\n\r\n\r\n\r\n        div.inputNewprojectFormName {\r\n            display: none;\r\n            background-color: #cee3e3;\r\n            max-width: 300px;\r\n            max-height: 300px;\r\n            border-radius: 10px;\r\n            padding: 25px;\r\n            text-align: center;\r\n            margin: 60px 0 0 0;\r\n            box-shadow: 0px 9px 3px 0px;\r\n\r\n        }\r\n\r\n\r\n        .inputNewprojectFormName h2 {\r\n            margin: 0 0 10px 0;\r\n        }\r\n\r\n\r\n        .inputNewprojectFormName .inputNewProjectName {\r\n            max-width: 300px;\r\n            max-height: 35px;\r\n            padding: 14px;\r\n            border: none;\r\n            border-radius: 7px;\r\n        }\r\n\r\n        input.SaveProjectName {\r\n            padding: 9px;\r\n            border: none;\r\n            border-radius: 8px;\r\n            max-width: 100px;\r\n            height: 40px;\r\n            font-size: 19px;\r\n\r\n        }\r\n\r\n        .projectNameSaverBtnContainer {\r\n            margin: 10px 0;\r\n        }\r\n\r\n        .projectNameSaverBtnContainer button {\r\n            padding: 9px;\r\n            border: none;\r\n            border-radius: 8px;\r\n            width: 100px;\r\n            height: 40px;\r\n            font-size: 19px;\r\n        }\r\n\r\n\r\n        .inner_container #ProjectForm {\r\n            background-color: #64748b;\r\n            border-radius: 10px;\r\n            max-height: 134px;\r\n            max-width: 515px;\r\n            display: none;\r\n            max-width: 500px;\r\n            margin: 9px 10px 0 23px;\r\n        }\r\n\r\n        .projectFormDetails {\r\n            display: flex;\r\n            justify-content: space-between;\r\n            align-items: center;\r\n            padding: 10px;\r\n            height: 80px;\r\n        }\r\n\r\n        div.priorityDateOnLargeScreen {\r\n            display: flex;\r\n            position: relative;\r\n            top: 0;\r\n            max-width: 200px;\r\n            flex-direction: column;\r\n        }\r\n\r\n        .projectInputContainer {\r\n            max-width: 200px;\r\n        }\r\n\r\n        .projectInputContainer p input {\r\n            max-width: 200px;\r\n        }\r\n\r\n        .innerTaskContainer .edit {\r\n            max-width: 140px;\r\n        }\r\n\r\n        .projectInputContainer .PdescriptionInputContainer {\r\n            margin: 10px 0 0 0;\r\n        }\r\n\r\n        div#configPriorityDateOnMobile {\r\n            display: flex;\r\n            flex-direction: column;\r\n            max-width: 200px;\r\n            position: static;\r\n        }\r\n\r\n        #configPriorityDateOnMobile #priority, #datePicker {\r\n            padding: 2px;\r\n            border-radius: 6px;\r\n            max-width: 104px;\r\n            min-width: 80px;\r\n        }\r\n\r\n        #ProjectForm .footer {\r\n            display: flex;\r\n            flex-direction: column;\r\n            justify-content: space-between;\r\n            padding: 0 10px;\r\n            gap: 0;\r\n        }\r\n\r\n\r\n\r\n\r\n        #ProjectForm .projectButtonsContainer {\r\n            display: flex;\r\n            justify-content: space-between;\r\n            align-items: center;\r\n            padding: 0 10px;\r\n            gap: 0;\r\n        }\r\n\r\n        #form .formDetails {\r\n            display: flex;\r\n            justify-content: space-between;\r\n            align-items: center;\r\n            padding: 10px;\r\n            margin: 0;\r\n        }\r\n\r\n        #formFooterOnMobile {\r\n            display: flex;\r\n            flex-direction: column;\r\n            justify-content: space-between;\r\n            padding: 0 10px;\r\n        }\r\n\r\n\r\n        #formFooterOnMobile .buttons {\r\n            display: flex;\r\n            justify-content: space-between;\r\n            align-items: center;\r\n            padding: 0 10px;\r\n            margin: 0;\r\n            gap: 0;\r\n        }\r\n\r\n\r\n\r\n        .priorityDateLargeScreen {\r\n            display: flex;\r\n            flex-direction: column;\r\n        }\r\n\r\n        #form .inputs {\r\n            display: flex;\r\n            flex-direction: column;\r\n            max-width: 150px;\r\n\r\n        }\r\n\r\n        #form .first-inputContainer input, .PtitleInputContainer input {\r\n            max-width: 165px;\r\n            max-height: 15px;\r\n            border: none;\r\n            outline: none;\r\n            color: white;\r\n            margin: 10px 0;\r\n            background-color: inherit;\r\n        }\r\n\r\n        #form .second-inputContainer input, .PdescriptionInputContainer input {\r\n            max-width: 178px;\r\n            max-height: 15px;\r\n            border: none;\r\n            outline: none;\r\n            color: white;\r\n            background-color: inherit;\r\n            margin: 0;\r\n        }\r\n\r\n\r\n        #form .other-options-on-forms button, #configPriorityDateOnMobile #priority, #datePicker {\r\n            padding: 4px;\r\n            border-radius: 6px;\r\n            max-width: 104px;\r\n            min-width: 80px;\r\n        }\r\n\r\n    }\r\n\r\n    @media (min-width: 551px) and (max-width: 768px) {\r\n        body main {\r\n            display: flex;\r\n            flex-direction: column;\r\n            justify-content: center;\r\n\r\n        }\r\n\r\n\r\n        main header {\r\n\r\n            background-color: #fda4af;\r\n            text-align: center;\r\n            display: flex;\r\n            align-items: center;\r\n            justify-content: center;\r\n            gap: 10px;\r\n        }\r\n\r\n        main aside {\r\n            display: none;\r\n            border-radius: 5px;\r\n            background-color: #e2e8f0;\r\n            z-index: 2;\r\n        }\r\n\r\n        aside ul, ul select {\r\n            display: flex;\r\n            flex-direction: column;\r\n            color: white;\r\n            fill: white;\r\n        }\r\n\r\n        select#project-dropdown {\r\n            background-color: rgb(42, 40, 49);\r\n        }\r\n\r\n        main #Container {\r\n            display: flex;\r\n            flex-direction: column;\r\n            flex-wrap: wrap;\r\n            border-radius: 5px;\r\n            z-index: 1;\r\n\r\n        }\r\n\r\n        header .menuController {\r\n\r\n            display: block;\r\n            width: 40px;\r\n            height: 40px;\r\n\r\n        }\r\n\r\n\r\n\r\n\r\n        #toggleMenuIcon {\r\n            position: fixed;\r\n            top: 20px;\r\n            right: 20px;\r\n            width: 50px;\r\n            height: 50px;\r\n            background-color: #6f9e9e;\r\n            cursor: pointer;\r\n            display: flex;\r\n            justify-content: center;\r\n            align-items: center;\r\n            border-radius: 8px;\r\n            transition: top 0.3s;\r\n            z-index: 1000;\r\n\r\n            z-index: 1000;\r\n        }\r\n\r\n        #toggleMenuIcon::before {\r\n            content: '';\r\n            position: absolute;\r\n            width: 28px;\r\n            height: 2px;\r\n            background-color: #fff;\r\n            transform: translateY(-5px);\r\n            transition: 0.2s;\r\n        }\r\n\r\n        #toggleMenuIcon::after {\r\n            content: '';\r\n            position: absolute;\r\n            width: 28px;\r\n            height: 2px;\r\n            background-color: #fff;\r\n            transform: translateY(5px);\r\n            transition: 0.2s;\r\n        }\r\n\r\n        #toggleMenuIcon.active::before {\r\n            transform: translateY(0px) rotate(45deg);\r\n\r\n        }\r\n\r\n        #toggleMenuIcon.active::after {\r\n            transform: translateY(0px) rotate(-45deg);\r\n\r\n        }\r\n\r\n        aside#menu {\r\n            display: block;\r\n            position: fixed;\r\n            top: 0;\r\n            left: -220px;\r\n            width: 220px;\r\n            height: 100vh;\r\n            background-color: var(--background-color);\r\n            transition: 0.3s;\r\n\r\n        }\r\n\r\n        aside#menu.active {\r\n            left: 0;\r\n        }\r\n\r\n        aside ul {\r\n            display: flex;\r\n            flex-direction: column;\r\n            color: white;\r\n            fill: white;\r\n        }\r\n\r\n        header .menuController svg {\r\n            display: block;\r\n            width: 40px;\r\n            height: 40px;\r\n            fill: white;\r\n            background-color: black;\r\n            border-radius: 10px\r\n        }\r\n\r\n\r\n        #userlist #addTodoBtnContainer {\r\n            display: flex;\r\n            align-items: center;\r\n            gap: 5px;\r\n            margin: 27px 0 11px 26px;\r\n        }\r\n\r\n        #task {\r\n            display: flex;\r\n            align-items: center;\r\n            gap: 5px;\r\n            margin: 27px 0 11px 26px;\r\n        }\r\n\r\n        #userlist #addTodoBtnContainer svg {\r\n            background-color: #dc2626;\r\n            border-radius: 50%;\r\n            fill: white;\r\n        }\r\n\r\n        #userlist #addTodoBtnContainer :hover {\r\n            cursor: pointer;\r\n            -webkit-transform: scale(1.09);\r\n        }\r\n\r\n        #userlist #addTodoBtnContainer button {\r\n            border: 0;\r\n            font-size: 16px;\r\n            color: #b91c1c;\r\n            background-color: inherit;\r\n        }\r\n\r\n        #userlist #addTodoBtnContainer button:hover {\r\n            cursor: pointer;\r\n            -webkit-transform: scale(1.09);\r\n        }\r\n\r\n        div.listContainer {\r\n            display: flex;\r\n            gap: 5px;\r\n            max-width: 714px;\r\n\r\n            border-radius: 10px;\r\n            box-shadow: 1px 0px 3px 0px;\r\n            margin: 18px 60px;\r\n            padding: 15px;\r\n        }\r\n\r\n        #userlist .intialTextDisplay {\r\n            display: flex;\r\n            flex-direction: column;\r\n            justify-content: center;\r\n            align-items: center;\r\n            text-align: center;\r\n        }\r\n\r\n        .intialTextDisplay p {\r\n            max-width: 500px;\r\n            display: flex;\r\n            max-width: 500px;\r\n            flex-direction: column;\r\n            flex-wrap: wrap;\r\n        }\r\n\r\n        .intialTextDisplay img {\r\n            width: 100%;\r\n            height: auto;\r\n            padding: 20px;\r\n            border-radius: 41px;\r\n            object-fit: contain;\r\n        }\r\n\r\n        .inner_container #form {\r\n            background-color: #64748b;\r\n            border-radius: 10px;\r\n            height: 150px;\r\n            display: none;\r\n            max-width: 600px;\r\n\r\n            margin: 17px;\r\n        }\r\n\r\n\r\n        #form div.formDetails {\r\n            display: flex;\r\n            justify-content: space-between;\r\n            align-items: center;\r\n\r\n            padding: 10px;\r\n            margin: 0;\r\n        }\r\n\r\n        .priorityDateLargeScreen {\r\n            display: none;\r\n        }\r\n\r\n        #form .inputs {\r\n            max-width: 150px\r\n        }\r\n\r\n        #form .first-inputContainer input, .PtitleInputContainer input,\r\n        #form .second-inputContainer input, .PdescriptionInputContainer input {\r\n            max-width: 600px;\r\n            height: 25px;\r\n            border: none;\r\n            outline: none;\r\n            color: white;\r\n            margin: 10px 0 0 0;\r\n            background-color: inherit;\r\n        }\r\n\r\n\r\n\r\n        p.second-inputContainer {\r\n            margin: 0;\r\n        }\r\n\r\n        #form .buttons {\r\n            display: flex;\r\n            margin: 1px 23px;\r\n\r\n\r\n\r\n        }\r\n\r\n        #configPriorityDateOnMobile {\r\n            display: flex;\r\n            flex-direction: column;\r\n            position: static;\r\n\r\n        }\r\n\r\n\r\n        #form .other-options-on-forms button, #priority, #datePicker {\r\n            padding: 7px;\r\n            border-radius: 9px;\r\n        }\r\n\r\n        form#ProjectForm {\r\n\r\n\r\n            background-color: #64748b;\r\n            border-radius: 10px;\r\n            height: 150px;\r\n            display: none;\r\n            max-width: 693px;\r\n            padding-left: 1rem;\r\n            margin: 9px 61px;\r\n        }\r\n\r\n        div.projectFormDetails {\r\n            display: flex;\r\n            align-items: center;\r\n            justify-content: space-between;\r\n            top: 0;\r\n        }\r\n\r\n\r\n\r\n    }\r\n\r\n    */ .projectButtonsContainer {\r\n        display: flex;\r\n        justify-content: space-between;\r\n        align-items: center;\r\n    }\r\n\r\n    select#priority {\r\n        padding: 4px;\r\n        border-radius: 9px;\r\n    }\r\n\r\n    input#datePicker {\r\n\r\n        padding: 3px;\r\n        border-radius: 9px;\r\n    }\r\n\r\n\r\n    @media (min-width: 769px) and (max-width: 1000px) {\r\n\r\n        body main {\r\n\r\n            display: grid;\r\n\r\n        }\r\n\r\n\r\n        main header {\r\n            grid-area: 1 / 2 / 2 / 6;\r\n\r\n            background-color: #fda4af;\r\n            text-align: center;\r\n            display: flex;\r\n            align-items: center;\r\n            justify-content: center;\r\n            gap: 10px;\r\n        }\r\n\r\n        main aside {\r\n\r\n            border-radius: 5px;\r\n            background-color: #e2e8f0;\r\n        }\r\n\r\n        main #Container {\r\n            display: flex;\r\n            flex-direction: column;\r\n            flex-wrap: wrap;\r\n            border-radius: 5px;\r\n            z-index: 1;\r\n\r\n        }\r\n\r\n        header .menuController {\r\n\r\n            display: block;\r\n            width: 40px;\r\n            height: 40px;\r\n\r\n        }\r\n\r\n        header .menuController svg {\r\n            display: block;\r\n            width: 40px;\r\n            height: 40px;\r\n            fill: white;\r\n            background-color: black;\r\n            border-radius: 10px\r\n        }\r\n\r\n        #userlist .intialTextDisplay {\r\n            display: flex;\r\n            justify-content: center;\r\n            align-items: center;\r\n            text-align: center;\r\n        }\r\n\r\n        #userlist .intialTextDisplay p {\r\n            font-size: 1.2rem;\r\n            text-align: center;\r\n            font-weight: 500;\r\n            margin: 10px 0 0 0;\r\n            max-width: 600px;\r\n        }\r\n\r\n        #userlist #addTodoBtnContainer {\r\n            display: none;\r\n            align-items: center;\r\n            gap: 5px;\r\n            margin: 27px 0 11px 26px;\r\n        }\r\n\r\n        #task {\r\n            display: flex;\r\n            align-items: center;\r\n            gap: 5px;\r\n            margin: 27px 0 11px 26px;\r\n        }\r\n\r\n        #userlist #addTodoBtnContainer svg {\r\n            background-color: #dc2626;\r\n            border-radius: 50%;\r\n            fill: white;\r\n        }\r\n\r\n        #userlist #addTodoBtnContainer :hover {\r\n            cursor: pointer;\r\n            -webkit-transform: scale(1.09);\r\n        }\r\n\r\n        #userlist #addTodoBtnContainer button {\r\n            border: 0;\r\n            font-size: 16px;\r\n            color: #b91c1c;\r\n            background-color: inherit;\r\n        }\r\n\r\n        #userlist #addTodoBtnContainer button:hover {\r\n            cursor: pointer;\r\n            -webkit-transform: scale(1.09);\r\n        }\r\n\r\n        div.listContainer {\r\n            display: flex;\r\n            gap: 5px;\r\n            max-width: 714px;\r\n\r\n            border-radius: 10px;\r\n            box-shadow: 1px 0px 3px 0px;\r\n            margin: 18px 60px;\r\n            padding: 15px;\r\n        }\r\n\r\n\r\n\r\n\r\n\r\n        .inner_container #form {\r\n            background-color: #64748b;\r\n            border-radius: 10px;\r\n            height: 150px;\r\n            display: none;\r\n            max-width: 750px;\r\n\r\n            margin: 17px;\r\n        }\r\n\r\n\r\n        #form div.formDetails {\r\n            display: flex;\r\n            justify-content: space-between;\r\n            align-items: center;\r\n\r\n            padding: 9px 20px;\r\n            margin: 0;\r\n        }\r\n\r\n        .priorityDateLargeScreen {\r\n            display: none;\r\n        }\r\n\r\n        #form .inputs {\r\n            max-width: 150px\r\n        }\r\n\r\n        #form .first-inputContainer input, .PtitleInputContainer input {\r\n            max-width: 420px;\r\n            max-height: 60px;\r\n            border: none;\r\n            outline: none;\r\n            color: white;\r\n            background-color: inherit;\r\n            margin: 0;\r\n        }\r\n\r\n        #form .second-inputContainer input, .PdescriptionInputContainer input {\r\n            max-width: 420px;\r\n            max-height: 60px;\r\n            border: none;\r\n            outline: none;\r\n            color: rgb(90, 77, 77);\r\n            background-color: inherit;\r\n            margin: 0;\r\n        }\r\n\r\n\r\n        #form .buttons {\r\n            display: flex;\r\n            justify-content: space-between;\r\n            margin: 1px 33px\r\n        }\r\n\r\n        form#ProjectForm {\r\n            background-color: #64748b;\r\n            border-radius: 10px;\r\n            height: 150px;\r\n            display: none;\r\n            max-width: 693px;\r\n            padding-left: 1rem;\r\n            margin: 9px 61px;\r\n\r\n        }\r\n\r\n        div.projectFormDetails {\r\n            display: flex;\r\n            align-items: center;\r\n            justify-content: space-between;\r\n            top: 0;\r\n        }\r\n\r\n        div.priorityDateOnLargeScreen {\r\n            display: flex;\r\n            flex-direction: column;\r\n            justify-content: space-between;\r\n            align-items: center;\r\n            top: 0;\r\n\r\n\r\n        }\r\n\r\n        .projectButtonsContainer {\r\n            display: flex;\r\n            justify-content: space-between;\r\n            align-items: center;\r\n        }\r\n\r\n        #configPriorityDateOnMobile {\r\n            display: flex;\r\n            flex-direction: column;\r\n            position: static;\r\n        }\r\n\r\n        #form .other-options-on-forms button, #priority, #datePicker {\r\n            padding: 8px;\r\n            border-radius: 6px;\r\n            border: none;\r\n        }\r\n\r\n    }\r\n\r\n    main {\r\n        display: grid;\r\n        grid-template-columns: 190px 1fr;\r\n        grid-template-rows: 70px 570px;\r\n    }\r\n\r\n\r\n    header {\r\n        grid-area: 1 / 2 / 2 / 6;\r\n        background-color: #fda4af;\r\n        text-align: center;\r\n        display: flex;\r\n        align-items: center;\r\n        justify-content: center;\r\n    }\r\n\r\n    aside {\r\n        grid-area: 1/ 1/ 4/ 2;\r\n        border-radius: 5px;\r\n        background-color: #e2e8f0;\r\n\r\n    }\r\n\r\n    #Container {\r\n        grid-area: 2 / 2 / 3 / 4;\r\n\r\n        display: grid;\r\n        grid-template-columns: 100px 650px 350px;\r\n        border-radius: 5px;\r\n    }\r\n\r\n\r\n\r\n    .inner_container {\r\n        grid-area: 1 / 2 / 3 / 3;\r\n    }\r\n\r\n\r\n    .intialTextDisplay {\r\n        display: flex;\r\n        flex-direction: column;\r\n        justify-content: center;\r\n        align-items: center;\r\n        padding: 10px;\r\n    }\r\n\r\n    .intialTextDisplay p {\r\n        font-size: 1.2rem;\r\n        text-align: center;\r\n        font-weight: 500;\r\n        margin: 10px 0 0 0;\r\n    }\r\n\r\n    .intialTextDisplay img {\r\n        width: 100%;\r\n        height: auto;\r\n        border-radius: 30px;\r\n        padding: 20px;\r\n\r\n    }\r\n\r\n    #addTodoBtnContainer {\r\n        display: none;\r\n    }\r\n\r\n    .empty {\r\n        grid-area: 1 / 3 / 5 / 4;\r\n        background-color: #f8f8f8;\r\n        background-image: url('./images/Todo-1.jpg');\r\n        background-size: cover;\r\n        background-position: center;\r\n    }\r\n\r\n\r\n\r\n    .menuController {\r\n\r\n        display: none;\r\n        width: 40px;\r\n        height: 40px;\r\n    }\r\n\r\n    .checkBox {\r\n        -webkit-appearance: none;\r\n        -moz-appearance: none;\r\n        width: 20px;\r\n        height: 20px;\r\n        border: 1px solid #ccc;\r\n        border-radius: 3px;\r\n        outline: none;\r\n        cursor: pointer;\r\n        position: relative;\r\n\r\n    }\r\n\r\n\r\n    .checkBox::before {\r\n        content: \"\";\r\n        display: block;\r\n        position: absolute;\r\n        top: 50%;\r\n        left: 50%;\r\n        transform: translate(-50%, -50%);\r\n        font-size: 16px;\r\n        color: rgb(22, 252, 22);\r\n        opacity: 0;\r\n        transition: opacity 0.3s ease;\r\n    }\r\n\r\n    .checkBox:hover::before {\r\n        content: \"✓\";\r\n        opacity: 0.5;\r\n    }\r\n\r\n\r\n    svg {\r\n        width: 25px;\r\n        height: 25px;\r\n    }\r\n\r\n    #task {\r\n        display: flex;\r\n        align-items: center;\r\n        gap: 5px;\r\n        margin: 27px 0 11px 26px;\r\n    }\r\n\r\n\r\n\r\n    #task svg {\r\n        background-color: #dc2626;\r\n        border-radius: 50%;\r\n        fill: white;\r\n    }\r\n\r\n    #task :hover {\r\n        cursor: pointer;\r\n        -webkit-transform: scale(1.09);\r\n    }\r\n\r\n    #task button {\r\n        border: 0;\r\n        font-size: 16px;\r\n        color: #b91c1c;\r\n        background-color: inherit;\r\n    }\r\n\r\n    #task button:hover {\r\n        cursor: pointer;\r\n        -webkit-transform: scale(1.09);\r\n    }\r\n\r\n    button.deleteTask {\r\n        padding: 10px;\r\n        border: none;\r\n        border-radius: 7px;\r\n        font-size: 1.1rem;\r\n        background-color: #e0487c;\r\n        color: white;\r\n        transition: transform 0.2s ease-out;\r\n    }\r\n\r\n    button.deleteTask:hover {\r\n        transform: scale(1.1)\r\n    }\r\n\r\n    button.deleteTask:active {\r\n        transform: scale(0.9)\r\n    }\r\n\r\n\r\n\r\n\r\n    .listContainer {\r\n        display: flex;\r\n        gap: 5px;\r\n        max-width: 714px;\r\n\r\n        border-radius: 10px;\r\n        box-shadow: 1px 0px 3px 0px;\r\n        margin: 18px 18px;\r\n        padding: 15px;\r\n\r\n\r\n    }\r\n\r\n\r\n    .priorityDateOnLargeScreen {\r\n        display: flex;\r\n        flex-direction: column;\r\n        justify-content: center;\r\n        align-items: center;\r\n        max-width: 200px;\r\n    }\r\n\r\n    .projectButtonsContainer {\r\n        display: flex;\r\n        justify-content: space-between;\r\n    }\r\n\r\n    .projectButtonsContainer button {\r\n        border: none;\r\n        border-radius: 7px;\r\n        padding: 9px;\r\n    }\r\n\r\n\r\n    .excluded {\r\n        color: red;\r\n    }\r\n\r\n    .taskContainer {\r\n        display: flex;\r\n        flex: 1;\r\n        justify-content: space-between;\r\n    }\r\n\r\n\r\n\r\n    .taskTitle, .newProject-task-title, .editableSaveTaskEl {\r\n        margin: 0;\r\n        font-size: 18px;\r\n        text-decoration: none;\r\n        text-decoration-color: red;\r\n\r\n    }\r\n\r\n    .taskDescription, .newProject-description {\r\n        margin: 0;\r\n        font-size: 14px;\r\n\r\n    }\r\n\r\n    .taskPriority {\r\n        font-size: 19px;\r\n        border-radius: 6px;\r\n        background-color: #573d3d;\r\n        padding: 6px;\r\n        margin: 0 0 7px;\r\n        color: white;\r\n\r\n    }\r\n\r\n    .innerTaskHandler {\r\n        display: flex;\r\n        flex-direction: column;\r\n        justify-items: center;\r\n        justify-content: center;\r\n        align-items: center;\r\n        margin: 0px 15px 0 40px;\r\n    }\r\n\r\n    .inbox-container {\r\n        display: flex;\r\n        align-items: center;\r\n        gap: 5px;\r\n        margin: 0px 0 0 16px;\r\n        height: 26px;\r\n        padding: 9px;\r\n        border-radius: 5px 0px 0px 5px;\r\n    }\r\n\r\n    .inbox-container:hover {\r\n        background-color: var(--hover-color);\r\n    }\r\n\r\n\r\n    .inbox {\r\n        font-size: 20px;\r\n\r\n    }\r\n\r\n    .inboxListContainer {\r\n        display: flex;\r\n        gap: 5px;\r\n\r\n    }\r\n\r\n    .inboxTaskContainer {\r\n        display: flex;\r\n        flex: 1;\r\n        justify-content: space-between;\r\n    }\r\n\r\n    .inboxTaskTitle {\r\n        margin: 0;\r\n        font-size: 18px;\r\n    }\r\n\r\n    .inboxTaskDescription {\r\n        margin: 0;\r\n        font-size: 14px;\r\n\r\n    }\r\n\r\n    .inboxTaskPriority {\r\n        margin: 0 20px 0 0;\r\n        font-size: 20px;\r\n\r\n    }\r\n\r\n    .dueDate {\r\n        margin: 0;\r\n\r\n    }\r\n\r\n    .edit {\r\n        border: none;\r\n        outline: none;\r\n        font-size: 17px;\r\n        max-width: 110px;\r\n        margin: 0 0\r\n    }\r\n\r\n    #projects h3 {\r\n        margin: 0 0 0 10px;\r\n    }\r\n\r\n    #form {\r\n        background-color: #64748b;\r\n        border-radius: 10px;\r\n        height: 140px;\r\n        display: none;\r\n        padding-left: 1rem;\r\n        margin: 10px 10px 0 0;\r\n    }\r\n\r\n    .formDetails {\r\n        display: flex;\r\n        align-items: center;\r\n        justify-content: space-between;\r\n        margin: 12px 15px;\r\n    }\r\n\r\n    input#datePicker {\r\n        max-width: 118px;\r\n    }\r\n\r\n    .buttons {\r\n        display: flex;\r\n        justify-content: space-between;\r\n        margin: 1px 33px\r\n    }\r\n\r\n    .buttons button {\r\n        border: none;\r\n        border-radius: 7px;\r\n        padding: 7px;\r\n        transition: transform 0.2s ease-out\r\n    }\r\n\r\n    .buttons button:hover {\r\n        transform: scale(1.05)\r\n    }\r\n\r\n    #ProjectForm {\r\n        background-color: #64748b;\r\n        border-radius: 10px;\r\n        height: 150px;\r\n        display: none;\r\n        padding: 10px;\r\n        margin: 15px 15px 0 17px;\r\n    }\r\n\r\n    .projectFormDetails {\r\n        display: flex;\r\n        align-items: center;\r\n        justify-content: space-between;\r\n        top: 0;\r\n    }\r\n\r\n\r\n    .first-inputContainer input, .PtitleInputContainer input {\r\n        max-width: 600px;\r\n        height: 25px;\r\n        border: none;\r\n        outline: none;\r\n        color: white;\r\n        margin: 10px 0 0 0;\r\n        background-color: inherit;\r\n    }\r\n\r\n    .task-title, .description {\r\n        width: 350px;\r\n    }\r\n\r\n    .first-inputContainer input::placeholder, .PtitleInputContainer input::placeholder {\r\n        color: white;\r\n        padding: 0 10px;\r\n        opacity: 1;\r\n\r\n    }\r\n\r\n    .second-inputContainer input, .PdescriptionInputContainer input {\r\n        max-width: 600px;\r\n        height: 25px;\r\n        border: none;\r\n        outline: none;\r\n        color: white;\r\n        background-color: inherit;\r\n        margin: 0;\r\n    }\r\n\r\n    .second-inputContainer input::placeholder, .PdescriptionInputContainer input::placeholder {\r\n        padding: 0 10px;\r\n        color: white;\r\n        opacity: 1;\r\n\r\n    }\r\n\r\n    .first-inputContainer, .second-inputContainer {\r\n        margin: 10px 0 0 0;\r\n        font-size: 1rem;\r\n    }\r\n\r\n    .other-options-on-forms, .footer {}\r\n\r\n    .submitBtn:active {\r\n        transform: active scale(1.1);\r\n    }\r\n\r\n    .other-options-on-forms button, #priority, input#datePicker {\r\n        transition: transform .3s ease-in;\r\n        padding: 7px;\r\n        border-radius: 7px;\r\n        border: none;\r\n        background-color: #07c4dd;\r\n        color: white;\r\n        font-size: 15px;\r\n        font-weight: 600;\r\n    }\r\n\r\n    #priority {\r\n        margin: 10px 0 8px 0;\r\n    }\r\n\r\n    #projectPriority, .footer {\r\n        padding: 7px;\r\n        border-radius: 5px;\r\n        margin: 0 4px 5px 0;\r\n    }\r\n\r\n    .addProjectsContainer {\r\n        display: flex;\r\n\r\n        margin: 0 0 0 20px;\r\n        padding: 7px;\r\n        align-items: center;\r\n        gap: 10px;\r\n        height: 25px;\r\n        border-radius: 5px 0px 0px 5px;\r\n\r\n    }\r\n\r\n    .addProjectsContainer:hover {\r\n        background-color: var(--hover-color);\r\n    }\r\n\r\n    .addProjectsContainer svg {\r\n        width: 25px;\r\n        height: 25px;\r\n    }\r\n\r\n    #addNewProjectEl {\r\n        margin: 0;\r\n        font-size: 19px;\r\n    }\r\n\r\n\r\n    .project_text {\r\n        margin: 0 0 10px 17px;\r\n        display: flex;\r\n        align-self: center;\r\n        justify-self: center;\r\n        padding: 9px;\r\n        border-radius: 5px 0px 0px 5px;\r\n\r\n\r\n    }\r\n\r\n    .project_text:hover {\r\n        background-color: var(--hover-color);\r\n    }\r\n\r\n\r\n\r\n    #project-dropdown {\r\n        border: 0;\r\n        background-color: inherit;\r\n        margin: 5px 0 0 17px;\r\n        font-size: 18px;\r\n        font-weight: 550;\r\n        padding: 8px;\r\n        border-radius: 5px 0px 0px 5px;\r\n        max-width: 160px;\r\n\r\n    }\r\n\r\n    #project-dropdown:hover {\r\n        background-color: var(--hover-color);\r\n\r\n    }\r\n\r\n\r\n    #project-dropdown:focus {\r\n        border: none;\r\n        outline: none;\r\n    }\r\n\r\n    #newProjectsFormContainerEl {\r\n        display: flex;\r\n        justify-content: center;\r\n        align-items: center;\r\n        justify-items: center;\r\n\r\n\r\n    }\r\n\r\n    #ProjectsFormNameContainerEl {\r\n        display: flex;\r\n        justify-content: center;\r\n        align-items: center;\r\n        justify-items: center;\r\n    }\r\n\r\n\r\n    .inputNewprojectFormName {\r\n        display: none;\r\n        background-color: #cee3e3;\r\n        max-width: 400px;\r\n        max-height: 300px;\r\n        border-radius: 10px;\r\n        padding: 46px;\r\n        text-align: center;\r\n        margin: 60px 0 0 0;\r\n        box-shadow: 0px 9px 3px 0px;\r\n    }\r\n\r\n\r\n    .inputNewprojectFormName h2 {\r\n        margin: 0 0 10px 0;\r\n    }\r\n\r\n\r\n    .inputNewProjectName {\r\n        max-width: 350px;\r\n        max-height: 35px;\r\n        padding: 17px;\r\n        border: none;\r\n        border-radius: 7px;\r\n        font-size: 19px;\r\n    }\r\n\r\n    input.SaveProjectName {\r\n        padding: 9px;\r\n        border: none;\r\n        border-radius: 8px;\r\n        max-width: 100px;\r\n        height: 40px;\r\n        font-size: 19px;\r\n        background-color: rgb(240, 59, 134);\r\n        color: white;\r\n\r\n    }\r\n\r\n    .projectNameSaverBtnContainer {\r\n        margin: 10px 0;\r\n    }\r\n\r\n    .projectNameSaverBtnContainer button {\r\n        padding: 9px;\r\n        border: none;\r\n        border-radius: 8px;\r\n        width: 100px;\r\n        height: 40px;\r\n        font-size: 19px;\r\n    }\r\n\r\n    #ProjectsFormNameContainerEl .Cancel {\r\n        background-color: grey;\r\n        color: white;\r\n    }\r\n\r\n    #newProjectTasksContainer {\r\n        display: flex;\r\n        justify-content: center;\r\n        align-items: center;\r\n\r\n    }\r\n\r\n    #newProjectTasksInnerContainer {\r\n        display: flex;\r\n        justify-content: center;\r\n        align-items: center;\r\n        gap: 5px;\r\n        margin: 10px;\r\n        box-shadow: #5c5555 1px 3px 3px 1px;\r\n        border-radius: 10px;\r\n        padding: 10px;\r\n        width: 95px;\r\n        position: relative;\r\n        left: 250px;\r\n    }\r\n\r\n    svg.addTask {\r\n        border-radius: 50%;\r\n        fill: wheat;\r\n        background-color: red;\r\n    }\r\n\r\n    .newProjectAddBtn {\r\n        border: 0;\r\n        background-color: inherit;\r\n        font-weight: 500;\r\n\r\n    }\r\n\r\n    #ProjectdatePicker {\r\n        padding: 2px;\r\n        border-radius: 5px;\r\n        border: none;\r\n        height: 32px;\r\n\r\n    }\r\n\r\n\r\n    #submitBtnForProject {\r\n        padding: 7px;\r\n        border-radius: 9px;\r\n\r\n    }\r\n\r\n    #submitBtnForProject:active {\r\n        transform: scale(1.1)\r\n    }\r\n\r\n    .cancelForProjectBtn {\r\n        padding: 7px;\r\n        border-radius: 9px;\r\n    }"],"sourceRoot":""}]);
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
  "#newProjectsFormContainerEl"
);
const inputNewprojectFormName = document.querySelector(
  ".inputNewprojectFormName"
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
  ".newProjectFormNameBtnEl"
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
  displayRequestNewProjectFormName
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
  () => (inputNewprojectFormName.style.display = "none")
);

function createNewProjectTaskBtn() {
  newProjectTasksContainer.setAttribute("id", "newProjectTasksContainer");
  newProjectTasksInnerContainer.setAttribute("id", "newProjectTasksInnerContainer");

  newProjectAddBtn.textContent = "Add task";

  // Create the SVG element
  const svgNamespace = "http://www.w3.org/2000/svg";
  const svgElement = document.createElementNS(svgNamespace, "svg");

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

  if (newProjectTasksInnerContainer.contains(svgElement)) {
  newProjectTasksInnerContainer.removeChild(svgElement);
  
  }
 
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
      `Input should be less or equal to the 35 characters, you have entered ${taskInputValue.length} characters`
    );
  } else if (descriptionInputValue.length > 40) {
    return alert(
      `Description should be less or equal to the 40 characters, you have entered ${descriptionInputValue.length} characters`
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
    dayOfWeek
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
      projectName
    );
  });
}

function displayTask(
  saveTitleData,
  saveDescriptionData,
  savePriorityData,
  saveDueDateData,
  index,
  projectName
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
  event.preventDefault()
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
const addTaskMobileBtn = document.querySelector('#addTodoBtnContainer')

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
  const intialTextDisplayContainer = document.querySelector('.intialTextDisplayContainer')
  header.textContent = "Add your To do";
  userList.textContent = "";
  intialTextDisplayContainer.style.display = 'none'
  
  let newProjectBtn = (0,_dom_El_2__WEBPACK_IMPORTED_MODULE_0__.createNewProjectTaskBtn)();
  newProjectBtn.style.display = "none";
  form.style.display = "block";
  if ((projectForm.style.display = "block")) {
    projectForm.style.display = 'none'
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

  console.log(taskInputValue.length)
  if (taskInputValue.length > 30) {
    return alert(
      `Input should be less or equal to the 35 characters, you have entered ${
        taskInputValue.length
      } characters`
    );
  } else if(descriptionInputValue.length > 35) {
    return alert(
      `Description should be less or equal to the 40 characters, you have entered ${descriptionInputValue.length} characters`
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
    dayOfWeek
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
      index
    );
  });
}

function getElementForTaskDisplay(
  saveTitleData,
  saveDescriptionData,
  savePriorityData,
  saveDueDateData,
  index
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
        console.log(index)
        console.log(toDos[description]);
      }
      else if (fieldType === "dueDate") {
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
  checkBox.addEventListener("change", (event) => {
    if (checkBox.checked === true) {
      
      localStorage.setItem("toDos", JSON.stringify(toDos));
      console.log(toDos);

      taskDescription.style.textDecoration = "line-through";

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
let addNewProjectEl = document.querySelector('#adNewProjectEl')

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzBHO0FBQ2pCO0FBQ087QUFDaEcsNENBQTRDLG1IQUFzQztBQUNsRiw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GLHlDQUF5QyxzRkFBK0I7QUFDeEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdDQUFnQyxtQ0FBbUM7QUFDbkU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSyxPQUFPLGlGQUFpRixVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsV0FBVyxTQUFTLEtBQUssVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLGNBQWMsV0FBVyxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssYUFBYSxPQUFPLEtBQUssYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLFdBQVcsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLFFBQVEsS0FBSyxVQUFVLFVBQVUsVUFBVSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLE1BQU0sTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsY0FBYyxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksY0FBYyxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksUUFBUSxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLFdBQVcsWUFBWSxhQUFhLFVBQVUsS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsY0FBYyxRQUFRLEtBQUssWUFBWSxRQUFRLEtBQUssWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsV0FBVyxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksV0FBVyxVQUFVLFVBQVUsUUFBUSxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsU0FBUyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFFBQVEsS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsVUFBVSxRQUFRLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksY0FBYyxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsVUFBVSxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsVUFBVSxVQUFVLFlBQVksV0FBVyxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxPQUFPLE1BQU0sS0FBSyxLQUFLLFVBQVUsWUFBWSxjQUFjLFFBQVEsTUFBTSxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxZQUFZLE1BQU0sTUFBTSxVQUFVLFVBQVUsV0FBVyxVQUFVLEtBQUssVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsWUFBWSxVQUFVLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxhQUFhLE9BQU8sS0FBSyxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLGNBQWMsT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxNQUFNLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxXQUFXLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFVBQVUsYUFBYSxXQUFXLFFBQVEsS0FBSyxVQUFVLFlBQVksY0FBYyxXQUFXLFVBQVUsTUFBTSxLQUFLLFVBQVUsT0FBTyxLQUFLLEtBQUssTUFBTSxNQUFNLFlBQVksV0FBVyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsU0FBUyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsZUFBZSxPQUFPLEtBQUssVUFBVSxZQUFZLGNBQWMsUUFBUSxLQUFLLFVBQVUsWUFBWSxPQUFPLE9BQU8sWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxRQUFRLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sTUFBTSxVQUFVLFlBQVksUUFBUSxNQUFNLE1BQU0sV0FBVyxRQUFRLEtBQUssYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsV0FBVyxNQUFNLE1BQU0sWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLFlBQVksTUFBTSxNQUFNLFVBQVUsVUFBVSxXQUFXLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksTUFBTSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsV0FBVyxLQUFLLFlBQVksYUFBYSxXQUFXLFVBQVUsYUFBYSxXQUFXLFFBQVEsS0FBSyxVQUFVLFlBQVksY0FBYyxhQUFhLFdBQVcsTUFBTSxLQUFLLFVBQVUsT0FBTyxLQUFLLEtBQUssTUFBTSxLQUFLLFlBQVksYUFBYSxXQUFXLFVBQVUsVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxhQUFhLFdBQVcsT0FBTyxLQUFLLFVBQVUsWUFBWSxNQUFNLE1BQU0sS0FBSyxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksYUFBYSxjQUFjLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsT0FBTyxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsUUFBUSxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsY0FBYyxPQUFPLEtBQUssYUFBYSxXQUFXLFlBQVksYUFBYSxTQUFTLEtBQUssWUFBWSxRQUFRLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxZQUFZLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsU0FBUyxNQUFNLFVBQVUsVUFBVSxVQUFVLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsYUFBYSxRQUFRLEtBQUssVUFBVSxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksV0FBVyxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFFBQVEsS0FBSyxVQUFVLFVBQVUsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksU0FBUyxLQUFLLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssS0FBSyxNQUFNLEtBQUssS0FBSyxTQUFTLEtBQUssVUFBVSxVQUFVLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxRQUFRLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFFBQVEsS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxTQUFTLEtBQUssVUFBVSxVQUFVLFlBQVksY0FBYyxPQUFPLEtBQUssVUFBVSxXQUFXLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsV0FBVyxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksV0FBVyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksUUFBUSxLQUFLLFdBQVcsT0FBTyxLQUFLLFVBQVUsV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxPQUFPLEtBQUssVUFBVSxXQUFXLE9BQU8sS0FBSyxZQUFZLFlBQVksT0FBTyxLQUFLLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksTUFBTSxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxNQUFNLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxLQUFLLE1BQU0sS0FBSyxLQUFLLE1BQU0sS0FBSyxZQUFZLGFBQWEsV0FBVyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxVQUFVLFdBQVcsTUFBTSxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxXQUFXLE1BQU0sS0FBSyxZQUFZLFdBQVcsT0FBTyxhQUFhLE1BQU0sWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksV0FBVyxZQUFZLFdBQVcsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssV0FBVyxZQUFZLFdBQVcsWUFBWSxXQUFXLFVBQVUsYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLE9BQU8sS0FBSyxVQUFVLFVBQVUsUUFBUSxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsV0FBVyxjQUFjLE9BQU8sS0FBSyxZQUFZLFNBQVMsS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksV0FBVyxZQUFZLGNBQWMsT0FBTyxLQUFLLGFBQWEsUUFBUSxLQUFLLFVBQVUsVUFBVSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsZUFBZSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxRQUFRLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsUUFBUSxLQUFLLFlBQVksUUFBUSxLQUFLLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxXQUFXLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLFlBQVksT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLFdBQVcsVUFBVSxVQUFVLE9BQU8sS0FBSyxZQUFZLFdBQVcsT0FBTyxLQUFLLFVBQVUsWUFBWSxjQUFjLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksY0FBYyxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsV0FBVyxRQUFRLEtBQUssVUFBVSxhQUFhLE9BQU8sS0FBSyxLQUFLLE1BQU0sS0FBSyxVQUFVLFlBQVksb0NBQW9DLHVCQUF1QixzQkFBc0IsbUNBQW1DLFNBQVMsbUJBQW1CLG1DQUFtQyx3Q0FBd0MsU0FBUyxlQUFlLHVCQUF1QixzQkFBc0IsbUNBQW1DLG9EQUFvRCw2QkFBNkIsK0JBQStCLFNBQVMsdUNBQXVDLDJCQUEyQiw4QkFBOEIsdUNBQXVDLHdDQUF3QywyQkFBMkIsYUFBYSw2QkFBNkIsMENBQTBDLG1DQUFtQyw4QkFBOEIsb0NBQW9DLHdDQUF3QywwQkFBMEIsYUFBYSw2Q0FBNkMsZ0NBQWdDLDBCQUEwQiw0QkFBNEIsNEJBQTRCLDZCQUE2QiwwQ0FBMEMsZ0NBQWdDLDhCQUE4Qix3Q0FBd0Msb0NBQW9DLG1DQUFtQyxxQ0FBcUMsa0NBQWtDLGFBQWEseUNBQXlDLDRCQUE0QixtQ0FBbUMsNEJBQTRCLDRCQUE0Qix1Q0FBdUMsNENBQTRDLGlDQUFpQyxhQUFhLHdDQUF3Qyw0QkFBNEIsbUNBQW1DLDRCQUE0Qiw0QkFBNEIsdUNBQXVDLDJDQUEyQyxpQ0FBaUMsYUFBYSxnREFBZ0QseURBQXlELGlCQUFpQiwrQ0FBK0MsMERBQTBELGlCQUFpQiw0QkFBNEIsK0JBQStCLGdDQUFnQyx1QkFBdUIsNkJBQTZCLDZCQUE2Qiw4QkFBOEIsNkJBQTZCLDhCQUE4QiwwQ0FBMEMsaUNBQWlDLDhCQUE4Qiw0QkFBNEIsaUJBQWlCLG1DQUFtQyx3QkFBd0IsYUFBYSw0QkFBNEIsOEJBQThCLG1DQUFtQywwQ0FBMEMsYUFBYSxpQ0FBaUMsOEJBQThCLHVDQUF1QyxnQ0FBZ0MsbUNBQW1DLGFBQWEsNENBQTRDLCtCQUErQiw0QkFBNEIsNkJBQTZCLGFBQWEsNENBQTRDLCtCQUErQiw0QkFBNEIsNkJBQTZCLDRCQUE0Qix3Q0FBd0MsZ0RBQWdELDJCQUEyQiw4QkFBOEIsdUNBQXVDLGlDQUFpQyxhQUFhLG1DQUFtQyw4QkFBOEIseUJBQXlCLGlDQUFpQyxvQ0FBb0MsNENBQTRDLHlDQUF5QyxrQ0FBa0MscUJBQXFCLDhDQUE4Qyw4QkFBOEIsdUNBQXVDLHdDQUF3QyxvQ0FBb0MsbUNBQW1DLGFBQWEsd0NBQXdDLGdDQUFnQyw2QkFBNkIsOEJBQThCLG9DQUFvQyxvQ0FBb0MsaUJBQWlCLGdEQUFnRCw4QkFBOEIsb0NBQW9DLHlCQUF5Qix5Q0FBeUMsYUFBYSx1QkFBdUIsOEJBQThCLG9DQUFvQyx5QkFBeUIseUNBQXlDLGFBQWEsb0RBQW9ELDBDQUEwQyxtQ0FBbUMsNEJBQTRCLGFBQWEsdURBQXVELGdDQUFnQywrQ0FBK0MsYUFBYSx1REFBdUQsMEJBQTBCLGdDQUFnQywrQkFBK0IsMENBQTBDLGlDQUFpQyxhQUFhLDZEQUE2RCxnQ0FBZ0MsK0NBQStDLGFBQWEsNENBQTRDLDBDQUEwQyxvQ0FBb0Msa0NBQWtDLDRDQUE0Qyw4QkFBOEIsbUNBQW1DLDhCQUE4QixpQ0FBaUMseUNBQXlDLGFBQWEseURBQXlELDhCQUE4QiwwQ0FBMEMsaUNBQWlDLGtDQUFrQyxvQ0FBb0MsOEJBQThCLG1DQUFtQyxtQ0FBbUMsNENBQTRDLGlCQUFpQixpREFBaUQsbUNBQW1DLGFBQWEsbUVBQW1FLGlDQUFpQyxpQ0FBaUMsOEJBQThCLDZCQUE2QixtQ0FBbUMsYUFBYSx1Q0FBdUMsNkJBQTZCLDZCQUE2QixtQ0FBbUMsaUNBQWlDLDZCQUE2QixnQ0FBZ0MsaUJBQWlCLCtDQUErQywrQkFBK0IsYUFBYSxzREFBc0QsNkJBQTZCLDZCQUE2QixtQ0FBbUMsNkJBQTZCLDZCQUE2QixnQ0FBZ0MsYUFBYSxtREFBbUQsMENBQTBDLG9DQUFvQyxrQ0FBa0MsaUNBQWlDLDhCQUE4QixpQ0FBaUMsd0NBQXdDLGFBQWEscUNBQXFDLDhCQUE4QiwrQ0FBK0Msb0NBQW9DLDhCQUE4Qiw2QkFBNkIsYUFBYSwrQ0FBK0MsOEJBQThCLG1DQUFtQyx1QkFBdUIsaUNBQWlDLHVDQUF1QyxhQUFhLHdDQUF3QyxpQ0FBaUMsYUFBYSxnREFBZ0QsaUNBQWlDLGFBQWEsMkNBQTJDLGlDQUFpQyxhQUFhLG9FQUFvRSxtQ0FBbUMsYUFBYSxnREFBZ0QsOEJBQThCLHVDQUF1QyxpQ0FBaUMsaUNBQWlDLGFBQWEsb0VBQW9FLDZCQUE2QixtQ0FBbUMsaUNBQWlDLGdDQUFnQyxhQUFhLHNDQUFzQyw4QkFBOEIsdUNBQXVDLCtDQUErQyxnQ0FBZ0MsdUJBQXVCLGFBQWEsbUVBQW1FLDhCQUE4QiwrQ0FBK0Msb0NBQW9DLGdDQUFnQyx1QkFBdUIsYUFBYSxvQ0FBb0MsOEJBQThCLCtDQUErQyxvQ0FBb0MsOEJBQThCLDBCQUEwQixhQUFhLHFDQUFxQyw4QkFBOEIsdUNBQXVDLCtDQUErQyxnQ0FBZ0MsYUFBYSxrREFBa0QsOEJBQThCLCtDQUErQyxvQ0FBb0MsZ0NBQWdDLDBCQUEwQix1QkFBdUIsYUFBYSxrREFBa0QsOEJBQThCLHVDQUF1QyxhQUFhLCtCQUErQiw4QkFBOEIsdUNBQXVDLGlDQUFpQyxpQkFBaUIsZ0ZBQWdGLGlDQUFpQyxpQ0FBaUMsNkJBQTZCLDhCQUE4Qiw2QkFBNkIsK0JBQStCLDBDQUEwQyxhQUFhLHVGQUF1RixpQ0FBaUMsaUNBQWlDLDZCQUE2Qiw4QkFBOEIsNkJBQTZCLDBDQUEwQywwQkFBMEIsYUFBYSw4R0FBOEcsNkJBQTZCLG1DQUFtQyxpQ0FBaUMsZ0NBQWdDLGFBQWEsYUFBYSw4REFBOEQsdUJBQXVCLDhCQUE4Qix1Q0FBdUMsd0NBQXdDLGlCQUFpQixpQ0FBaUMsOENBQThDLG1DQUFtQyw4QkFBOEIsb0NBQW9DLHdDQUF3QywwQkFBMEIsYUFBYSw0QkFBNEIsOEJBQThCLG1DQUFtQywwQ0FBMEMsMkJBQTJCLGFBQWEscUNBQXFDLDhCQUE4Qix1Q0FBdUMsNkJBQTZCLDRCQUE0QixhQUFhLHlDQUF5QyxrREFBa0QsYUFBYSxpQ0FBaUMsOEJBQThCLHVDQUF1QyxnQ0FBZ0MsbUNBQW1DLDJCQUEyQixpQkFBaUIsd0NBQXdDLG1DQUFtQyw0QkFBNEIsNkJBQTZCLGlCQUFpQiw2Q0FBNkMsZ0NBQWdDLDBCQUEwQiw0QkFBNEIsNEJBQTRCLDZCQUE2QiwwQ0FBMEMsZ0NBQWdDLDhCQUE4Qix3Q0FBd0Msb0NBQW9DLG1DQUFtQyxxQ0FBcUMsOEJBQThCLGtDQUFrQyxhQUFhLHlDQUF5Qyw0QkFBNEIsbUNBQW1DLDRCQUE0Qiw0QkFBNEIsdUNBQXVDLDRDQUE0QyxpQ0FBaUMsYUFBYSx3Q0FBd0MsNEJBQTRCLG1DQUFtQyw0QkFBNEIsNEJBQTRCLHVDQUF1QywyQ0FBMkMsaUNBQWlDLGFBQWEsZ0RBQWdELHlEQUF5RCxpQkFBaUIsK0NBQStDLDBEQUEwRCxpQkFBaUIsNEJBQTRCLCtCQUErQixnQ0FBZ0MsdUJBQXVCLDZCQUE2Qiw2QkFBNkIsOEJBQThCLDBEQUEwRCxpQ0FBaUMsaUJBQWlCLG1DQUFtQyx3QkFBd0IsYUFBYSwwQkFBMEIsOEJBQThCLHVDQUF1Qyw2QkFBNkIsNEJBQTRCLGFBQWEsNENBQTRDLCtCQUErQiw0QkFBNEIsNkJBQTZCLDRCQUE0Qix3Q0FBd0MsZ0RBQWdELG9EQUFvRCw4QkFBOEIsb0NBQW9DLHlCQUF5Qix5Q0FBeUMsYUFBYSx1QkFBdUIsOEJBQThCLG9DQUFvQyx5QkFBeUIseUNBQXlDLGFBQWEsb0RBQW9ELDBDQUEwQyxtQ0FBbUMsNEJBQTRCLGFBQWEsdURBQXVELGdDQUFnQywrQ0FBK0MsYUFBYSx1REFBdUQsMEJBQTBCLGdDQUFnQywrQkFBK0IsMENBQTBDLGFBQWEsNkRBQTZELGdDQUFnQywrQ0FBK0MsYUFBYSxtQ0FBbUMsOEJBQThCLHlCQUF5QixpQ0FBaUMsd0NBQXdDLDRDQUE0QyxrQ0FBa0MsOEJBQThCLGFBQWEsOENBQThDLDhCQUE4Qix1Q0FBdUMsd0NBQXdDLG9DQUFvQyxtQ0FBbUMsYUFBYSxzQ0FBc0MsaUNBQWlDLDhCQUE4QixpQ0FBaUMsdUNBQXVDLGdDQUFnQyxhQUFhLHdDQUF3Qyw0QkFBNEIsNkJBQTZCLDhCQUE4QixvQ0FBb0Msb0NBQW9DLGFBQWEsd0NBQXdDLDBDQUEwQyxvQ0FBb0MsOEJBQThCLDhCQUE4QixpQ0FBaUMsaUNBQWlDLGFBQWEsMkNBQTJDLDhCQUE4QiwrQ0FBK0Msb0NBQW9DLGtDQUFrQywwQkFBMEIsYUFBYSwwQ0FBMEMsOEJBQThCLGFBQWEsK0JBQStCLDZDQUE2QyxrS0FBa0ssaUNBQWlDLDZCQUE2Qiw2QkFBNkIsOEJBQThCLDZCQUE2QixtQ0FBbUMsMENBQTBDLGFBQWEsaURBQWlELDBCQUEwQixhQUFhLGdDQUFnQyw4QkFBOEIsaUNBQWlDLHlCQUF5Qiw2Q0FBNkMsOEJBQThCLHVDQUF1QyxpQ0FBaUMsaUJBQWlCLGtGQUFrRiw2QkFBNkIsbUNBQW1DLGFBQWEsa0NBQWtDLGtEQUFrRCxvQ0FBb0MsOEJBQThCLDhCQUE4QixpQ0FBaUMsbUNBQW1DLGlDQUFpQyxhQUFhLHdDQUF3Qyw4QkFBOEIsb0NBQW9DLCtDQUErQyx1QkFBdUIsYUFBYSxxQkFBcUIseUNBQXlDLDBCQUEwQiwyQ0FBMkMsZ0NBQWdDLFNBQVMsNkJBQTZCLHlCQUF5QiwrQkFBK0IsU0FBUyw4QkFBOEIsNkJBQTZCLCtCQUErQixTQUFTLG1FQUFtRSwyQkFBMkIsa0NBQWtDLGlCQUFpQixpQ0FBaUMseUNBQXlDLDhDQUE4QyxtQ0FBbUMsOEJBQThCLG9DQUFvQyx3Q0FBd0MsMEJBQTBCLGFBQWEsNEJBQTRCLHVDQUF1QywwQ0FBMEMsYUFBYSxpQ0FBaUMsOEJBQThCLHVDQUF1QyxnQ0FBZ0MsbUNBQW1DLDJCQUEyQixpQkFBaUIsd0NBQXdDLG1DQUFtQyw0QkFBNEIsNkJBQTZCLGlCQUFpQiw0Q0FBNEMsK0JBQStCLDRCQUE0Qiw2QkFBNkIsNEJBQTRCLHdDQUF3QyxnREFBZ0QsOENBQThDLDhCQUE4Qix3Q0FBd0Msb0NBQW9DLG1DQUFtQyxhQUFhLGdEQUFnRCxrQ0FBa0MsbUNBQW1DLGlDQUFpQyxtQ0FBbUMsaUNBQWlDLGFBQWEsZ0RBQWdELDhCQUE4QixvQ0FBb0MseUJBQXlCLHlDQUF5QyxhQUFhLHVCQUF1Qiw4QkFBOEIsb0NBQW9DLHlCQUF5Qix5Q0FBeUMsYUFBYSxvREFBb0QsMENBQTBDLG1DQUFtQyw0QkFBNEIsYUFBYSx1REFBdUQsZ0NBQWdDLCtDQUErQyxhQUFhLHVEQUF1RCwwQkFBMEIsZ0NBQWdDLCtCQUErQiwwQ0FBMEMsYUFBYSw2REFBNkQsZ0NBQWdDLCtDQUErQyxhQUFhLG1DQUFtQyw4QkFBOEIseUJBQXlCLGlDQUFpQyx3Q0FBd0MsNENBQTRDLGtDQUFrQyw4QkFBOEIsYUFBYSx3REFBd0QsMENBQTBDLG9DQUFvQyw4QkFBOEIsOEJBQThCLGlDQUFpQyxpQ0FBaUMsYUFBYSwyQ0FBMkMsOEJBQThCLCtDQUErQyxvQ0FBb0Msc0NBQXNDLDBCQUEwQixhQUFhLDBDQUEwQyw4QkFBOEIsYUFBYSwrQkFBK0IsNkNBQTZDLGdGQUFnRixpQ0FBaUMsaUNBQWlDLDZCQUE2Qiw4QkFBOEIsNkJBQTZCLDBDQUEwQywwQkFBMEIsYUFBYSx1RkFBdUYsaUNBQWlDLGlDQUFpQyw2QkFBNkIsOEJBQThCLHVDQUF1QywwQ0FBMEMsMEJBQTBCLGFBQWEsb0NBQW9DLDhCQUE4QiwrQ0FBK0MsNkNBQTZDLGtDQUFrQywwQ0FBMEMsb0NBQW9DLDhCQUE4Qiw4QkFBOEIsaUNBQWlDLG1DQUFtQyxpQ0FBaUMsaUJBQWlCLHdDQUF3Qyw4QkFBOEIsb0NBQW9DLCtDQUErQyx1QkFBdUIsYUFBYSwrQ0FBK0MsOEJBQThCLHVDQUF1QywrQ0FBK0Msb0NBQW9DLHVCQUF1QixxQkFBcUIsMENBQTBDLDhCQUE4QiwrQ0FBK0Msb0NBQW9DLGFBQWEsNkNBQTZDLDhCQUE4Qix1Q0FBdUMsaUNBQWlDLGFBQWEsOEVBQThFLDZCQUE2QixtQ0FBbUMsNkJBQTZCLGFBQWEsYUFBYSxrQkFBa0IsMEJBQTBCLDZDQUE2QywyQ0FBMkMsU0FBUyx3QkFBd0IscUNBQXFDLHNDQUFzQywrQkFBK0IsMEJBQTBCLGdDQUFnQyxvQ0FBb0MsU0FBUyxtQkFBbUIsa0NBQWtDLCtCQUErQixzQ0FBc0MsYUFBYSx3QkFBd0IscUNBQXFDLDhCQUE4QixxREFBcUQsK0JBQStCLFNBQVMsc0NBQXNDLHFDQUFxQyxTQUFTLG9DQUFvQywwQkFBMEIsbUNBQW1DLG9DQUFvQyxnQ0FBZ0MsMEJBQTBCLFNBQVMsa0NBQWtDLDhCQUE4QiwrQkFBK0IsNkJBQTZCLCtCQUErQixTQUFTLG9DQUFvQyx3QkFBd0IseUJBQXlCLGdDQUFnQywwQkFBMEIsYUFBYSxrQ0FBa0MsMEJBQTBCLFNBQVMsb0JBQW9CLHFDQUFxQyxzQ0FBc0MseURBQXlELG1DQUFtQyx3Q0FBd0MsU0FBUyxxQ0FBcUMsOEJBQThCLHdCQUF3Qix5QkFBeUIsU0FBUyx1QkFBdUIscUNBQXFDLGtDQUFrQyx3QkFBd0IseUJBQXlCLG1DQUFtQywrQkFBK0IsMEJBQTBCLDRCQUE0QiwrQkFBK0IsYUFBYSxtQ0FBbUMsMEJBQTBCLDJCQUEyQiwrQkFBK0IscUJBQXFCLHNCQUFzQiw2Q0FBNkMsNEJBQTRCLG9DQUFvQyx1QkFBdUIsMENBQTBDLFNBQVMscUNBQXFDLDJCQUEyQix5QkFBeUIsU0FBUyxxQkFBcUIsd0JBQXdCLHlCQUF5QixTQUFTLG1CQUFtQiwwQkFBMEIsZ0NBQWdDLHFCQUFxQixxQ0FBcUMsU0FBUywrQkFBK0Isc0NBQXNDLCtCQUErQix3QkFBd0IsU0FBUywwQkFBMEIsNEJBQTRCLDJDQUEyQyxTQUFTLDBCQUEwQixzQkFBc0IsNEJBQTRCLDJCQUEyQixzQ0FBc0MsU0FBUyxnQ0FBZ0MsNEJBQTRCLDJDQUEyQyxTQUFTLCtCQUErQiwwQkFBMEIseUJBQXlCLCtCQUErQiw4QkFBOEIsc0NBQXNDLHlCQUF5QixnREFBZ0QsU0FBUyxxQ0FBcUMsMENBQTBDLHNDQUFzQywwQ0FBMEMsd0NBQXdDLDBCQUEwQixxQkFBcUIsNkJBQTZCLG9DQUFvQyx3Q0FBd0MsOEJBQThCLDBCQUEwQixpQkFBaUIsNENBQTRDLDBCQUEwQixtQ0FBbUMsb0NBQW9DLGdDQUFnQyw2QkFBNkIsU0FBUyxzQ0FBc0MsMEJBQTBCLDJDQUEyQyxTQUFTLDZDQUE2Qyx5QkFBeUIsK0JBQStCLHlCQUF5QixTQUFTLDJCQUEyQix1QkFBdUIsU0FBUyw0QkFBNEIsMEJBQTBCLG9CQUFvQiwyQ0FBMkMsU0FBUyw2RUFBNkUsc0JBQXNCLDRCQUE0QixrQ0FBa0MsdUNBQXVDLGFBQWEsdURBQXVELHNCQUFzQiw0QkFBNEIsYUFBYSwyQkFBMkIsNEJBQTRCLCtCQUErQixzQ0FBc0MseUJBQXlCLDRCQUE0Qix5QkFBeUIsYUFBYSwrQkFBK0IsMEJBQTBCLG1DQUFtQyxrQ0FBa0Msb0NBQW9DLGdDQUFnQyxvQ0FBb0MsU0FBUyw4QkFBOEIsMEJBQTBCLGdDQUFnQyxxQkFBcUIsaUNBQWlDLHlCQUF5Qix5QkFBeUIsMkNBQTJDLFNBQVMsb0NBQW9DLGlEQUFpRCxTQUFTLHdCQUF3Qiw0QkFBNEIsYUFBYSxpQ0FBaUMsMEJBQTBCLHFCQUFxQixhQUFhLGlDQUFpQywwQkFBMEIsb0JBQW9CLDJDQUEyQyxTQUFTLDZCQUE2QixzQkFBc0IsNEJBQTRCLFNBQVMsbUNBQW1DLHNCQUFzQiw0QkFBNEIsYUFBYSxnQ0FBZ0MsK0JBQStCLDRCQUE0QixhQUFhLHNCQUFzQixzQkFBc0IsYUFBYSxtQkFBbUIseUJBQXlCLDBCQUEwQiw0QkFBNEIsNkJBQTZCLGdDQUFnQywwQkFBMEIsK0JBQStCLFNBQVMsbUJBQW1CLHNDQUFzQyxnQ0FBZ0MsMEJBQTBCLDBCQUEwQiwrQkFBK0Isa0NBQWtDLFNBQVMsMEJBQTBCLDBCQUEwQixnQ0FBZ0MsMkNBQTJDLDhCQUE4QixTQUFTLDhCQUE4Qiw2QkFBNkIsU0FBUyxzQkFBc0IsMEJBQTBCLDJDQUEyQyxxQ0FBcUMsNkJBQTZCLHlCQUF5QiwrQkFBK0IseUJBQXlCLHdEQUF3RCxtQ0FBbUMsMkNBQTJDLDBCQUEwQixzQ0FBc0MsZ0NBQWdDLDBCQUEwQiwwQkFBMEIsMEJBQTBCLHFDQUFxQyxTQUFTLGlDQUFpQywwQkFBMEIsZ0NBQWdDLDJDQUEyQyxtQkFBbUIsU0FBUywwRUFBMEUsNkJBQTZCLHlCQUF5Qix5QkFBeUIsMEJBQTBCLHlCQUF5QiwrQkFBK0Isc0NBQXNDLFNBQVMsdUNBQXVDLHlCQUF5QixTQUFTLGdHQUFnRyx5QkFBeUIsNEJBQTRCLHVCQUF1QixhQUFhLDZFQUE2RSw2QkFBNkIseUJBQXlCLHlCQUF5QiwwQkFBMEIseUJBQXlCLHNDQUFzQyxzQkFBc0IsU0FBUyx1R0FBdUcsNEJBQTRCLHlCQUF5Qix1QkFBdUIsYUFBYSwyREFBMkQsK0JBQStCLDRCQUE0QixTQUFTLCtDQUErQywrQkFBK0IseUNBQXlDLFNBQVMseUVBQXlFLDhDQUE4Qyx5QkFBeUIsK0JBQStCLHlCQUF5QixzQ0FBc0MseUJBQXlCLDRCQUE0Qiw2QkFBNkIsU0FBUyx1QkFBdUIsaUNBQWlDLFNBQVMsdUNBQXVDLHlCQUF5QiwrQkFBK0IsZ0NBQWdDLFNBQVMsbUNBQW1DLDBCQUEwQixtQ0FBbUMseUJBQXlCLGdDQUFnQyxzQkFBc0IseUJBQXlCLDJDQUEyQyxhQUFhLHlDQUF5QyxpREFBaUQsU0FBUyx1Q0FBdUMsd0JBQXdCLHlCQUF5QixTQUFTLDhCQUE4QixzQkFBc0IsNEJBQTRCLFNBQVMsK0JBQStCLGtDQUFrQywwQkFBMEIsK0JBQStCLGlDQUFpQyx5QkFBeUIsMkNBQTJDLGlCQUFpQixpQ0FBaUMsaURBQWlELFNBQVMsdUNBQXVDLHNCQUFzQixzQ0FBc0MsaUNBQWlDLDRCQUE0Qiw2QkFBNkIseUJBQXlCLDJDQUEyQyw2QkFBNkIsYUFBYSxxQ0FBcUMsaURBQWlELGFBQWEseUNBQXlDLHlCQUF5QiwwQkFBMEIsU0FBUyx5Q0FBeUMsMEJBQTBCLG9DQUFvQyxnQ0FBZ0Msa0NBQWtDLGlCQUFpQiwwQ0FBMEMsMEJBQTBCLG9DQUFvQyxnQ0FBZ0Msa0NBQWtDLFNBQVMsMENBQTBDLDBCQUEwQixzQ0FBc0MsNkJBQTZCLDhCQUE4QixnQ0FBZ0MsMEJBQTBCLCtCQUErQiwrQkFBK0Isd0NBQXdDLFNBQVMsNkNBQTZDLCtCQUErQixTQUFTLHNDQUFzQyw2QkFBNkIsNkJBQTZCLDBCQUEwQix5QkFBeUIsK0JBQStCLDRCQUE0QixTQUFTLG1DQUFtQyx5QkFBeUIseUJBQXlCLCtCQUErQiw2QkFBNkIseUJBQXlCLDRCQUE0QixnREFBZ0QseUJBQXlCLGFBQWEsMkNBQTJDLDJCQUEyQixTQUFTLGtEQUFrRCx5QkFBeUIseUJBQXlCLCtCQUErQix5QkFBeUIseUJBQXlCLDRCQUE0QixTQUFTLGtEQUFrRCxtQ0FBbUMseUJBQXlCLFNBQVMsdUNBQXVDLDBCQUEwQixvQ0FBb0MsZ0NBQWdDLGFBQWEsNENBQTRDLDBCQUEwQixvQ0FBb0MsZ0NBQWdDLHFCQUFxQix5QkFBeUIsZ0RBQWdELGdDQUFnQywwQkFBMEIsd0JBQXdCLCtCQUErQix3QkFBd0IsU0FBUyx5QkFBeUIsK0JBQStCLHdCQUF3QixrQ0FBa0MsU0FBUywrQkFBK0Isc0JBQXNCLHNDQUFzQyw2QkFBNkIsYUFBYSxnQ0FBZ0MseUJBQXlCLCtCQUErQix5QkFBeUIseUJBQXlCLGFBQWEsc0NBQXNDLHlCQUF5QiwrQkFBK0IsYUFBYSx5Q0FBeUMsMENBQTBDLGtDQUFrQyx5QkFBeUIsK0JBQStCLFNBQVMsbUJBQW1CO0FBQ2huaUQ7QUFDQSxpRUFBZSx1QkFBdUIsRUFBQzs7Ozs7Ozs7Ozs7QUMza0QxQjs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscURBQXFEO0FBQ3JEO0FBQ0E7QUFDQSxnREFBZ0Q7QUFDaEQ7QUFDQTtBQUNBLHFGQUFxRjtBQUNyRjtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IsaUJBQWlCO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQixxQkFBcUI7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Ysc0ZBQXNGLHFCQUFxQjtBQUMzRztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1YsaURBQWlELHFCQUFxQjtBQUN0RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Ysc0RBQXNELHFCQUFxQjtBQUMzRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDcEZhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUN6QmE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVEQUF1RCxjQUFjO0FBQ3JFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNkQSxNQUErRjtBQUMvRixNQUFxRjtBQUNyRixNQUE0RjtBQUM1RixNQUErRztBQUMvRyxNQUF3RztBQUN4RyxNQUF3RztBQUN4RyxNQUFvRztBQUNwRztBQUNBOztBQUVBOztBQUVBLDRCQUE0QixxR0FBbUI7QUFDL0Msd0JBQXdCLGtIQUFhO0FBQ3JDLGlCQUFpQix1R0FBYTtBQUM5QixpQkFBaUIsK0ZBQU07QUFDdkIsNkJBQTZCLHNHQUFrQjs7QUFFL0MsYUFBYSwwR0FBRyxDQUFDLHVGQUFPOzs7O0FBSThDO0FBQ3RFLE9BQU8saUVBQWUsdUZBQU8sSUFBSSx1RkFBTyxVQUFVLHVGQUFPLG1CQUFtQixFQUFDOzs7Ozs7Ozs7OztBQ3hCaEU7O0FBRWI7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLHdCQUF3QjtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQixpQkFBaUI7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQiw0QkFBNEI7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQiw2QkFBNkI7QUFDbEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNuRmE7O0FBRWI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDakNhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNUYTs7QUFFYjtBQUNBO0FBQ0EsY0FBYyxLQUF3QyxHQUFHLHNCQUFpQixHQUFHLENBQUk7QUFDakY7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ1RhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0RBQWtEO0FBQ2xEO0FBQ0E7QUFDQSwwQ0FBMEM7QUFDMUM7QUFDQTtBQUNBO0FBQ0EsaUZBQWlGO0FBQ2pGO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EseURBQXlEO0FBQ3pEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQ0FBa0M7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDNURhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNiQSxZQUFZLGFBQWE7QUFDYztBQUN2QyxZQUFZLFdBQVc7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FB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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUN0bEJBO0FBQ3lDO0FBQ2E7QUFDRDtBQUNBO0FBQ0E7QUFDckQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0Isa0VBQXVCO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQSxJQUFJO0FBQ0o7QUFDQSxvRkFBb0YsOEJBQThCO0FBQ2xIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4QkFBOEIsY0FBYztBQUM1QyxtQ0FBbUMsb0JBQW9CO0FBQ3ZELGdDQUFnQyxpQkFBaUI7QUFDakQsMkJBQTJCLGdCQUFnQjtBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTSw4REFBdUI7QUFDN0IsSUFBSSw4REFBdUI7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNqYnFEO0FBQ3JEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztVQzFDQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOztVQUVBO1VBQ0E7Ozs7O1dDekJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQ2xCQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7Ozs7O1dDckJBOzs7Ozs7Ozs7Ozs7O0FDQTJCO0FBQ0U7QUFDRztBQUNNO0FBQ3RDO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzLmNzcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlcy5jc3M/NDRiMiIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovLy8uL3NyYy9kb20tRWwtMi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZG9tLUVsLmpzIiwid2VicGFjazovLy8uL3NyYy9yZXNwb25zaXZlLmpzIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuL2ltYWdlcy9Ub2RvLTEuanBnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAgICAgYm9keSB7XHJcbiAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIH1cclxuXHJcbiAgICA6cm9vdCB7XHJcbiAgICAgICAgLS1ob3Zlci1jb2xvcjogI2ZkYTRhZjtcclxuICAgICAgICAtLWJhY2tncm91bmQtY29sb3I6ICM2ZjllOWU7XHJcbiAgICB9XHJcblxyXG4gICAgKiB7XHJcbiAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuXHJcbiAgICAgICAgZm9udC1mYW1pbHk6IFwiUm9ib3RvXCIsIHNhbnMtc2VyaWY7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICB9XHJcblxyXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDU1MHB4KSB7XHJcblxyXG4gICAgICAgIGJvZHkgbWFpbiB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgICB6LWluZGV4OiAxO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbWFpbiBoZWFkZXIge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmRhNGFmO1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgICBnYXA6IDEwcHg7XHJcbiAgICAgICAgfVxyXG5cclxuXHJcblxyXG5cclxuICAgICAgICAjdG9nZ2xlTWVudUljb24ge1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICAgICAgICAgIHRvcDogMjBweDtcclxuICAgICAgICAgICAgcmlnaHQ6IDIwcHg7XHJcbiAgICAgICAgICAgIHdpZHRoOiA2MHB4O1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDYwcHg7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICM2Yjg4ODg7XHJcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICAgICAgICAgICAgdHJhbnNpdGlvbjogdG9wIDAuM3M7XHJcblxyXG4gICAgICAgICAgICB6LWluZGV4OiAxMDAwO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgI3RvZ2dsZU1lbnVJY29uOjpiZWZvcmUge1xyXG4gICAgICAgICAgICBjb250ZW50OiAnJztcclxuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICB3aWR0aDogMjhweDtcclxuICAgICAgICAgICAgaGVpZ2h0OiAycHg7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNXB4KTtcclxuICAgICAgICAgICAgdHJhbnNpdGlvbjogMC4ycztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICN0b2dnbGVNZW51SWNvbjo6YWZ0ZXIge1xyXG4gICAgICAgICAgICBjb250ZW50OiAnJztcclxuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICB3aWR0aDogMjhweDtcclxuICAgICAgICAgICAgaGVpZ2h0OiAycHg7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSg1cHgpO1xyXG4gICAgICAgICAgICB0cmFuc2l0aW9uOiAwLjJzO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgI3RvZ2dsZU1lbnVJY29uLmFjdGl2ZTo6YmVmb3JlIHtcclxuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDBweCkgcm90YXRlKDQ1ZGVnKTtcclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAjdG9nZ2xlTWVudUljb24uYWN0aXZlOjphZnRlciB7XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwcHgpIHJvdGF0ZSgtNDVkZWcpO1xyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGFzaWRlI21lbnUge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgICAgIGxlZnQ6IC0yMjBweDtcclxuICAgICAgICAgICAgd2lkdGg6IDIyMHB4O1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDEwMHZoO1xyXG4gICAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICAgIGZpbHRlcjogd2hpdGU7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICM3OTg5YTE7XHJcbiAgICAgICAgICAgIHRyYW5zaXRpb246IDAuM3M7XHJcbiAgICAgICAgICAgIHotaW5kZXg6IDEwMDA7XHJcbiAgICAgICAgICAgIGZpbGw6IHdoaXRlO1xyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGFzaWRlI21lbnUuYWN0aXZlIHtcclxuICAgICAgICAgICAgbGVmdDogMDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIG1haW4gYXNpZGUge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNlMmU4ZjA7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBtYWluICNDb250YWluZXIge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICBoZWFkZXIgLm1lbnVDb250cm9sbGVyIHtcclxuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgIHdpZHRoOiA0MHB4O1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBoZWFkZXIgLm1lbnVDb250cm9sbGVyIHN2ZyB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICB3aWR0aDogNDBweDtcclxuICAgICAgICAgICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgICAgICAgICBmaWxsOiB3aGl0ZTtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHhcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICN1c2VybGlzdCB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICAgIG1heC13aWR0aDogNTUwcHg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBkaXYubGlzdENvbnRhaW5lciB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGdhcDogNXB4O1xyXG4gICAgICAgICAgICBtYXgtd2lkdGg6IDUxNXB4O1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgICAgICAgICBib3gtc2hhZG93OiAxcHggMHB4IDNweCAwcHg7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMTRweCAxNHB4IDAgMTlweDtcclxuXHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDEwcHg7XHJcblxyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICN1c2VybGlzdCAuaW50aWFsVGV4dERpc3BsYXkge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmludGlhbFRleHREaXNwbGF5IGltZyB7XHJcbiAgICAgICAgICAgIG1heC13aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAxOHB4O1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xyXG4gICAgICAgICAgICBvYmplY3QtZml0OiBjb250YWluO1xyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICN1c2VybGlzdCAjYWRkVG9kb0J0bkNvbnRhaW5lciB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGdhcDogNXB4O1xyXG4gICAgICAgICAgICBtYXJnaW46IDI3cHggMCAxMXB4IDI2cHg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAjdGFzayB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGdhcDogNXB4O1xyXG4gICAgICAgICAgICBtYXJnaW46IDI3cHggMCAxMXB4IDI2cHg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAjdXNlcmxpc3QgI2FkZFRvZG9CdG5Db250YWluZXIgc3ZnIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2RjMjYyNjtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICAgICAgICBmaWxsOiB3aGl0ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICN1c2VybGlzdCAjYWRkVG9kb0J0bkNvbnRhaW5lciA6aG92ZXIge1xyXG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxLjA5KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICN1c2VybGlzdCAjYWRkVG9kb0J0bkNvbnRhaW5lciBidXR0b24ge1xyXG4gICAgICAgICAgICBib3JkZXI6IDA7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICAgICAgY29sb3I6ICNiOTFjMWM7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IGluaGVyaXQ7XHJcbiAgICAgICAgICAgIHRyYW5zaXRpb246IDAuM3M7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAjdXNlcmxpc3QgI2FkZFRvZG9CdG5Db250YWluZXIgYnV0dG9uOmhvdmVyIHtcclxuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMS4wOSk7XHJcbiAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgLmlubmVyX2NvbnRhaW5lciAjZm9ybSB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICM2NDc0OGI7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICAgICAgICAgIG1heC1oZWlnaHQ6IDEzNXB4O1xyXG4gICAgICAgICAgICBtYXgtd2lkdGg6IDUxNXB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgIGhlaWdodDogMTQwcHg7XHJcbiAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMXJlbTtcclxuICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgICAgICAgbWF4LXdpZHRoOiA0ODBweDtcclxuICAgICAgICAgICAgbWFyZ2luOiAxMHB4IDEwcHggMCAxMHB4O1xyXG4gICAgICAgIH1cclxuXHJcblxyXG5cclxuXHJcbiAgICAgICAgZGl2LmlucHV0TmV3cHJvamVjdEZvcm1OYW1lIHtcclxuICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2NlZTNlMztcclxuICAgICAgICAgICAgbWF4LXdpZHRoOiAzMDBweDtcclxuICAgICAgICAgICAgbWF4LWhlaWdodDogMzAwcHg7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDI1cHg7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgbWFyZ2luOiA2MHB4IDAgMCAwO1xyXG4gICAgICAgICAgICBib3gtc2hhZG93OiAwcHggOXB4IDNweCAwcHg7XHJcblxyXG4gICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgIC5pbnB1dE5ld3Byb2plY3RGb3JtTmFtZSBoMiB7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMCAwIDEwcHggMDtcclxuICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICAuaW5wdXROZXdwcm9qZWN0Rm9ybU5hbWUgLmlucHV0TmV3UHJvamVjdE5hbWUge1xyXG4gICAgICAgICAgICBtYXgtd2lkdGg6IDMwMHB4O1xyXG4gICAgICAgICAgICBtYXgtaGVpZ2h0OiAzNXB4O1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAxNHB4O1xyXG4gICAgICAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDdweDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlucHV0LlNhdmVQcm9qZWN0TmFtZSB7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDlweDtcclxuICAgICAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgICAgICAgICAgIG1heC13aWR0aDogMTAwcHg7XHJcbiAgICAgICAgICAgIGhlaWdodDogNDBweDtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxOXB4O1xyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5wcm9qZWN0TmFtZVNhdmVyQnRuQ29udGFpbmVyIHtcclxuICAgICAgICAgICAgbWFyZ2luOiAxMHB4IDA7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAucHJvamVjdE5hbWVTYXZlckJ0bkNvbnRhaW5lciBidXR0b24ge1xyXG4gICAgICAgICAgICBwYWRkaW5nOiA5cHg7XHJcbiAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwcHg7XHJcbiAgICAgICAgICAgIGhlaWdodDogNDBweDtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxOXB4O1xyXG4gICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgIC5pbm5lcl9jb250YWluZXIgI1Byb2plY3RGb3JtIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzY0NzQ4YjtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgICAgICAgICAgbWF4LWhlaWdodDogMTM0cHg7XHJcbiAgICAgICAgICAgIG1heC13aWR0aDogNTE1cHg7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgICAgICAgIG1heC13aWR0aDogNTAwcHg7XHJcbiAgICAgICAgICAgIG1hcmdpbjogOXB4IDEwcHggMCAyM3B4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLnByb2plY3RGb3JtRGV0YWlscyB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgcGFkZGluZzogMTBweDtcclxuICAgICAgICAgICAgaGVpZ2h0OiA4MHB4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZGl2LnByaW9yaXR5RGF0ZU9uTGFyZ2VTY3JlZW4ge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgIHRvcDogMDtcclxuICAgICAgICAgICAgbWF4LXdpZHRoOiAyMDBweDtcclxuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5wcm9qZWN0SW5wdXRDb250YWluZXIge1xyXG4gICAgICAgICAgICBtYXgtd2lkdGg6IDIwMHB4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLnByb2plY3RJbnB1dENvbnRhaW5lciBwIGlucHV0IHtcclxuICAgICAgICAgICAgbWF4LXdpZHRoOiAyMDBweDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5pbm5lclRhc2tDb250YWluZXIgLmVkaXQge1xyXG4gICAgICAgICAgICBtYXgtd2lkdGg6IDE0MHB4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLnByb2plY3RJbnB1dENvbnRhaW5lciAuUGRlc2NyaXB0aW9uSW5wdXRDb250YWluZXIge1xyXG4gICAgICAgICAgICBtYXJnaW46IDEwcHggMCAwIDA7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBkaXYjY29uZmlnUHJpb3JpdHlEYXRlT25Nb2JpbGUge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgICBtYXgtd2lkdGg6IDIwMHB4O1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogc3RhdGljO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgI2NvbmZpZ1ByaW9yaXR5RGF0ZU9uTW9iaWxlICNwcmlvcml0eSwgI2RhdGVQaWNrZXIge1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAycHg7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDZweDtcclxuICAgICAgICAgICAgbWF4LXdpZHRoOiAxMDRweDtcclxuICAgICAgICAgICAgbWluLXdpZHRoOiA4MHB4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgI1Byb2plY3RGb3JtIC5mb290ZXIge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDAgMTBweDtcclxuICAgICAgICAgICAgZ2FwOiAwO1xyXG4gICAgICAgIH1cclxuXHJcblxyXG5cclxuXHJcbiAgICAgICAgI1Byb2plY3RGb3JtIC5wcm9qZWN0QnV0dG9uc0NvbnRhaW5lciB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgcGFkZGluZzogMCAxMHB4O1xyXG4gICAgICAgICAgICBnYXA6IDA7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAjZm9ybSAuZm9ybURldGFpbHMge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICNmb3JtRm9vdGVyT25Nb2JpbGUge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDAgMTBweDtcclxuICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICAjZm9ybUZvb3Rlck9uTW9iaWxlIC5idXR0b25zIHtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAwIDEwcHg7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgICAgZ2FwOiAwO1xyXG4gICAgICAgIH1cclxuXHJcblxyXG5cclxuICAgICAgICAucHJpb3JpdHlEYXRlTGFyZ2VTY3JlZW4ge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgI2Zvcm0gLmlucHV0cyB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICAgIG1heC13aWR0aDogMTUwcHg7XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgI2Zvcm0gLmZpcnN0LWlucHV0Q29udGFpbmVyIGlucHV0LCAuUHRpdGxlSW5wdXRDb250YWluZXIgaW5wdXQge1xyXG4gICAgICAgICAgICBtYXgtd2lkdGg6IDE2NXB4O1xyXG4gICAgICAgICAgICBtYXgtaGVpZ2h0OiAxNXB4O1xyXG4gICAgICAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgICAgICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgICAgbWFyZ2luOiAxMHB4IDA7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IGluaGVyaXQ7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAjZm9ybSAuc2Vjb25kLWlucHV0Q29udGFpbmVyIGlucHV0LCAuUGRlc2NyaXB0aW9uSW5wdXRDb250YWluZXIgaW5wdXQge1xyXG4gICAgICAgICAgICBtYXgtd2lkdGg6IDE3OHB4O1xyXG4gICAgICAgICAgICBtYXgtaGVpZ2h0OiAxNXB4O1xyXG4gICAgICAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgICAgICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogaW5oZXJpdDtcclxuICAgICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgICNmb3JtIC5vdGhlci1vcHRpb25zLW9uLWZvcm1zIGJ1dHRvbiwgI2NvbmZpZ1ByaW9yaXR5RGF0ZU9uTW9iaWxlICNwcmlvcml0eSwgI2RhdGVQaWNrZXIge1xyXG4gICAgICAgICAgICBwYWRkaW5nOiA0cHg7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDZweDtcclxuICAgICAgICAgICAgbWF4LXdpZHRoOiAxMDRweDtcclxuICAgICAgICAgICAgbWluLXdpZHRoOiA4MHB4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcblxyXG4gICAgQG1lZGlhIChtaW4td2lkdGg6IDU1MXB4KSBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAgICAgICBib2R5IG1haW4ge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHJcbiAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgbWFpbiBoZWFkZXIge1xyXG5cclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZkYTRhZjtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAgZ2FwOiAxMHB4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbWFpbiBhc2lkZSB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2UyZThmMDtcclxuICAgICAgICAgICAgei1pbmRleDogMjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGFzaWRlIHVsLCB1bCBzZWxlY3Qge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICAgIGZpbGw6IHdoaXRlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgc2VsZWN0I3Byb2plY3QtZHJvcGRvd24ge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNDIsIDQwLCA0OSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBtYWluICNDb250YWluZXIge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgICAgICAgICAgei1pbmRleDogMTtcclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBoZWFkZXIgLm1lbnVDb250cm9sbGVyIHtcclxuXHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICB3aWR0aDogNDBweDtcclxuICAgICAgICAgICAgaGVpZ2h0OiA0MHB4O1xyXG5cclxuICAgICAgICB9XHJcblxyXG5cclxuXHJcblxyXG4gICAgICAgICN0b2dnbGVNZW51SWNvbiB7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgICAgICAgICAgdG9wOiAyMHB4O1xyXG4gICAgICAgICAgICByaWdodDogMjBweDtcclxuICAgICAgICAgICAgd2lkdGg6IDUwcHg7XHJcbiAgICAgICAgICAgIGhlaWdodDogNTBweDtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzZmOWU5ZTtcclxuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gICAgICAgICAgICB0cmFuc2l0aW9uOiB0b3AgMC4zcztcclxuICAgICAgICAgICAgei1pbmRleDogMTAwMDtcclxuXHJcbiAgICAgICAgICAgIHotaW5kZXg6IDEwMDA7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAjdG9nZ2xlTWVudUljb246OmJlZm9yZSB7XHJcbiAgICAgICAgICAgIGNvbnRlbnQ6ICcnO1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgIHdpZHRoOiAyOHB4O1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDJweDtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01cHgpO1xyXG4gICAgICAgICAgICB0cmFuc2l0aW9uOiAwLjJzO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgI3RvZ2dsZU1lbnVJY29uOjphZnRlciB7XHJcbiAgICAgICAgICAgIGNvbnRlbnQ6ICcnO1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgIHdpZHRoOiAyOHB4O1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDJweDtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDVweCk7XHJcbiAgICAgICAgICAgIHRyYW5zaXRpb246IDAuMnM7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAjdG9nZ2xlTWVudUljb24uYWN0aXZlOjpiZWZvcmUge1xyXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMHB4KSByb3RhdGUoNDVkZWcpO1xyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICN0b2dnbGVNZW51SWNvbi5hY3RpdmU6OmFmdGVyIHtcclxuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDBweCkgcm90YXRlKC00NWRlZyk7XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgYXNpZGUjbWVudSB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICAgICAgICAgIHRvcDogMDtcclxuICAgICAgICAgICAgbGVmdDogLTIyMHB4O1xyXG4gICAgICAgICAgICB3aWR0aDogMjIwcHg7XHJcbiAgICAgICAgICAgIGhlaWdodDogMTAwdmg7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQtY29sb3IpO1xyXG4gICAgICAgICAgICB0cmFuc2l0aW9uOiAwLjNzO1xyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGFzaWRlI21lbnUuYWN0aXZlIHtcclxuICAgICAgICAgICAgbGVmdDogMDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGFzaWRlIHVsIHtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgICBmaWxsOiB3aGl0ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGhlYWRlciAubWVudUNvbnRyb2xsZXIgc3ZnIHtcclxuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgIHdpZHRoOiA0MHB4O1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICAgICAgICAgIGZpbGw6IHdoaXRlO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweFxyXG4gICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgICN1c2VybGlzdCAjYWRkVG9kb0J0bkNvbnRhaW5lciB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGdhcDogNXB4O1xyXG4gICAgICAgICAgICBtYXJnaW46IDI3cHggMCAxMXB4IDI2cHg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAjdGFzayB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGdhcDogNXB4O1xyXG4gICAgICAgICAgICBtYXJnaW46IDI3cHggMCAxMXB4IDI2cHg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAjdXNlcmxpc3QgI2FkZFRvZG9CdG5Db250YWluZXIgc3ZnIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2RjMjYyNjtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICAgICAgICBmaWxsOiB3aGl0ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICN1c2VybGlzdCAjYWRkVG9kb0J0bkNvbnRhaW5lciA6aG92ZXIge1xyXG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxLjA5KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICN1c2VybGlzdCAjYWRkVG9kb0J0bkNvbnRhaW5lciBidXR0b24ge1xyXG4gICAgICAgICAgICBib3JkZXI6IDA7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICAgICAgY29sb3I6ICNiOTFjMWM7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IGluaGVyaXQ7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAjdXNlcmxpc3QgI2FkZFRvZG9CdG5Db250YWluZXIgYnV0dG9uOmhvdmVyIHtcclxuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMS4wOSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBkaXYubGlzdENvbnRhaW5lciB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGdhcDogNXB4O1xyXG4gICAgICAgICAgICBtYXgtd2lkdGg6IDcxNHB4O1xyXG5cclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgICAgICAgICAgYm94LXNoYWRvdzogMXB4IDBweCAzcHggMHB4O1xyXG4gICAgICAgICAgICBtYXJnaW46IDE4cHggNjBweDtcclxuICAgICAgICAgICAgcGFkZGluZzogMTVweDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICN1c2VybGlzdCAuaW50aWFsVGV4dERpc3BsYXkge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmludGlhbFRleHREaXNwbGF5IHAge1xyXG4gICAgICAgICAgICBtYXgtd2lkdGg6IDUwMHB4O1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBtYXgtd2lkdGg6IDUwMHB4O1xyXG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuaW50aWFsVGV4dERpc3BsYXkgaW1nIHtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIGhlaWdodDogYXV0bztcclxuICAgICAgICAgICAgcGFkZGluZzogMjBweDtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNDFweDtcclxuICAgICAgICAgICAgb2JqZWN0LWZpdDogY29udGFpbjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5pbm5lcl9jb250YWluZXIgI2Zvcm0ge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjQ3NDhiO1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDE1MHB4O1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICAgICAgICBtYXgtd2lkdGg6IDYwMHB4O1xyXG5cclxuICAgICAgICAgICAgbWFyZ2luOiAxN3B4O1xyXG4gICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgICNmb3JtIGRpdi5mb3JtRGV0YWlscyB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5wcmlvcml0eURhdGVMYXJnZVNjcmVlbiB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAjZm9ybSAuaW5wdXRzIHtcclxuICAgICAgICAgICAgbWF4LXdpZHRoOiAxNTBweFxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgI2Zvcm0gLmZpcnN0LWlucHV0Q29udGFpbmVyIGlucHV0LCAuUHRpdGxlSW5wdXRDb250YWluZXIgaW5wdXQsXHJcbiAgICAgICAgI2Zvcm0gLnNlY29uZC1pbnB1dENvbnRhaW5lciBpbnB1dCwgLlBkZXNjcmlwdGlvbklucHV0Q29udGFpbmVyIGlucHV0IHtcclxuICAgICAgICAgICAgbWF4LXdpZHRoOiA2MDBweDtcclxuICAgICAgICAgICAgaGVpZ2h0OiAyNXB4O1xyXG4gICAgICAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgICAgICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgICAgbWFyZ2luOiAxMHB4IDAgMCAwO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmhlcml0O1xyXG4gICAgICAgIH1cclxuXHJcblxyXG5cclxuICAgICAgICBwLnNlY29uZC1pbnB1dENvbnRhaW5lciB7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICNmb3JtIC5idXR0b25zIHtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgbWFyZ2luOiAxcHggMjNweDtcclxuXHJcblxyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICNjb25maWdQcmlvcml0eURhdGVPbk1vYmlsZSB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBzdGF0aWM7XHJcblxyXG4gICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgICNmb3JtIC5vdGhlci1vcHRpb25zLW9uLWZvcm1zIGJ1dHRvbiwgI3ByaW9yaXR5LCAjZGF0ZVBpY2tlciB7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDdweDtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogOXB4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZm9ybSNQcm9qZWN0Rm9ybSB7XHJcblxyXG5cclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzY0NzQ4YjtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgICAgICAgICAgaGVpZ2h0OiAxNTBweDtcclxuICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgICAgICAgbWF4LXdpZHRoOiA2OTNweDtcclxuICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAxcmVtO1xyXG4gICAgICAgICAgICBtYXJnaW46IDlweCA2MXB4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZGl2LnByb2plY3RGb3JtRGV0YWlscyB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgICAgICAgdG9wOiAwO1xyXG4gICAgICAgIH1cclxuXHJcblxyXG5cclxuICAgIH1cclxuXHJcbiAgICAqLyAucHJvamVjdEJ1dHRvbnNDb250YWluZXIge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICB9XHJcblxyXG4gICAgc2VsZWN0I3ByaW9yaXR5IHtcclxuICAgICAgICBwYWRkaW5nOiA0cHg7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogOXB4O1xyXG4gICAgfVxyXG5cclxuICAgIGlucHV0I2RhdGVQaWNrZXIge1xyXG5cclxuICAgICAgICBwYWRkaW5nOiAzcHg7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogOXB4O1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBAbWVkaWEgKG1pbi13aWR0aDogNzY5cHgpIGFuZCAobWF4LXdpZHRoOiAxMDAwcHgpIHtcclxuXHJcbiAgICAgICAgYm9keSBtYWluIHtcclxuXHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGdyaWQ7XHJcblxyXG4gICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgIG1haW4gaGVhZGVyIHtcclxuICAgICAgICAgICAgZ3JpZC1hcmVhOiAxIC8gMiAvIDIgLyA2O1xyXG5cclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZkYTRhZjtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAgZ2FwOiAxMHB4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbWFpbiBhc2lkZSB7XHJcblxyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNlMmU4ZjA7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBtYWluICNDb250YWluZXIge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgICAgICAgICAgei1pbmRleDogMTtcclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBoZWFkZXIgLm1lbnVDb250cm9sbGVyIHtcclxuXHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICB3aWR0aDogNDBweDtcclxuICAgICAgICAgICAgaGVpZ2h0OiA0MHB4O1xyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGhlYWRlciAubWVudUNvbnRyb2xsZXIgc3ZnIHtcclxuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgIHdpZHRoOiA0MHB4O1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICAgICAgICAgIGZpbGw6IHdoaXRlO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweFxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgI3VzZXJsaXN0IC5pbnRpYWxUZXh0RGlzcGxheSB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAjdXNlcmxpc3QgLmludGlhbFRleHREaXNwbGF5IHAge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDEuMnJlbTtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICAgICAgICBtYXJnaW46IDEwcHggMCAwIDA7XHJcbiAgICAgICAgICAgIG1heC13aWR0aDogNjAwcHg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAjdXNlcmxpc3QgI2FkZFRvZG9CdG5Db250YWluZXIge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICBnYXA6IDVweDtcclxuICAgICAgICAgICAgbWFyZ2luOiAyN3B4IDAgMTFweCAyNnB4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgI3Rhc2sge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICBnYXA6IDVweDtcclxuICAgICAgICAgICAgbWFyZ2luOiAyN3B4IDAgMTFweCAyNnB4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgI3VzZXJsaXN0ICNhZGRUb2RvQnRuQ29udGFpbmVyIHN2ZyB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNkYzI2MjY7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgICAgICAgZmlsbDogd2hpdGU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAjdXNlcmxpc3QgI2FkZFRvZG9CdG5Db250YWluZXIgOmhvdmVyIHtcclxuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMS4wOSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAjdXNlcmxpc3QgI2FkZFRvZG9CdG5Db250YWluZXIgYnV0dG9uIHtcclxuICAgICAgICAgICAgYm9yZGVyOiAwO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjYjkxYzFjO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmhlcml0O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgI3VzZXJsaXN0ICNhZGRUb2RvQnRuQ29udGFpbmVyIGJ1dHRvbjpob3ZlciB7XHJcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEuMDkpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZGl2Lmxpc3RDb250YWluZXIge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBnYXA6IDVweDtcclxuICAgICAgICAgICAgbWF4LXdpZHRoOiA3MTRweDtcclxuXHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IDFweCAwcHggM3B4IDBweDtcclxuICAgICAgICAgICAgbWFyZ2luOiAxOHB4IDYwcHg7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDE1cHg7XHJcbiAgICAgICAgfVxyXG5cclxuXHJcblxyXG5cclxuXHJcbiAgICAgICAgLmlubmVyX2NvbnRhaW5lciAjZm9ybSB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICM2NDc0OGI7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICAgICAgICAgIGhlaWdodDogMTUwcHg7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgICAgICAgIG1heC13aWR0aDogNzUwcHg7XHJcblxyXG4gICAgICAgICAgICBtYXJnaW46IDE3cHg7XHJcbiAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgI2Zvcm0gZGl2LmZvcm1EZXRhaWxzIHtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cclxuICAgICAgICAgICAgcGFkZGluZzogOXB4IDIwcHg7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5wcmlvcml0eURhdGVMYXJnZVNjcmVlbiB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAjZm9ybSAuaW5wdXRzIHtcclxuICAgICAgICAgICAgbWF4LXdpZHRoOiAxNTBweFxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgI2Zvcm0gLmZpcnN0LWlucHV0Q29udGFpbmVyIGlucHV0LCAuUHRpdGxlSW5wdXRDb250YWluZXIgaW5wdXQge1xyXG4gICAgICAgICAgICBtYXgtd2lkdGg6IDQyMHB4O1xyXG4gICAgICAgICAgICBtYXgtaGVpZ2h0OiA2MHB4O1xyXG4gICAgICAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgICAgICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogaW5oZXJpdDtcclxuICAgICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgI2Zvcm0gLnNlY29uZC1pbnB1dENvbnRhaW5lciBpbnB1dCwgLlBkZXNjcmlwdGlvbklucHV0Q29udGFpbmVyIGlucHV0IHtcclxuICAgICAgICAgICAgbWF4LXdpZHRoOiA0MjBweDtcclxuICAgICAgICAgICAgbWF4LWhlaWdodDogNjBweDtcclxuICAgICAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgICAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgICAgICAgICBjb2xvcjogcmdiKDkwLCA3NywgNzcpO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmhlcml0O1xyXG4gICAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgI2Zvcm0gLmJ1dHRvbnMge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgICAgICAgIG1hcmdpbjogMXB4IDMzcHhcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZvcm0jUHJvamVjdEZvcm0ge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjQ3NDhiO1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDE1MHB4O1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICAgICAgICBtYXgtd2lkdGg6IDY5M3B4O1xyXG4gICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDFyZW07XHJcbiAgICAgICAgICAgIG1hcmdpbjogOXB4IDYxcHg7XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZGl2LnByb2plY3RGb3JtRGV0YWlscyB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgICAgICAgdG9wOiAwO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZGl2LnByaW9yaXR5RGF0ZU9uTGFyZ2VTY3JlZW4ge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIHRvcDogMDtcclxuXHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLnByb2plY3RCdXR0b25zQ29udGFpbmVyIHtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgI2NvbmZpZ1ByaW9yaXR5RGF0ZU9uTW9iaWxlIHtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgICAgcG9zaXRpb246IHN0YXRpYztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICNmb3JtIC5vdGhlci1vcHRpb25zLW9uLWZvcm1zIGJ1dHRvbiwgI3ByaW9yaXR5LCAjZGF0ZVBpY2tlciB7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDhweDtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNnB4O1xyXG4gICAgICAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuXHJcbiAgICBtYWluIHtcclxuICAgICAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMTkwcHggMWZyO1xyXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtcm93czogNzBweCA1NzBweDtcclxuICAgIH1cclxuXHJcblxyXG4gICAgaGVhZGVyIHtcclxuICAgICAgICBncmlkLWFyZWE6IDEgLyAyIC8gMiAvIDY7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZkYTRhZjtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgfVxyXG5cclxuICAgIGFzaWRlIHtcclxuICAgICAgICBncmlkLWFyZWE6IDEvIDEvIDQvIDI7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNlMmU4ZjA7XHJcblxyXG4gICAgfVxyXG5cclxuICAgICNDb250YWluZXIge1xyXG4gICAgICAgIGdyaWQtYXJlYTogMiAvIDIgLyAzIC8gNDtcclxuXHJcbiAgICAgICAgZGlzcGxheTogZ3JpZDtcclxuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDEwMHB4IDY1MHB4IDM1MHB4O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIH1cclxuXHJcblxyXG5cclxuICAgIC5pbm5lcl9jb250YWluZXIge1xyXG4gICAgICAgIGdyaWQtYXJlYTogMSAvIDIgLyAzIC8gMztcclxuICAgIH1cclxuXHJcblxyXG4gICAgLmludGlhbFRleHREaXNwbGF5IHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5pbnRpYWxUZXh0RGlzcGxheSBwIHtcclxuICAgICAgICBmb250LXNpemU6IDEuMnJlbTtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgICBtYXJnaW46IDEwcHggMCAwIDA7XHJcbiAgICB9XHJcblxyXG4gICAgLmludGlhbFRleHREaXNwbGF5IGltZyB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDMwcHg7XHJcbiAgICAgICAgcGFkZGluZzogMjBweDtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgI2FkZFRvZG9CdG5Db250YWluZXIge1xyXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICB9XHJcblxyXG4gICAgLmVtcHR5IHtcclxuICAgICAgICBncmlkLWFyZWE6IDEgLyAzIC8gNSAvIDQ7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2Y4ZjhmODtcclxuICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19ffSk7XHJcbiAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgICB9XHJcblxyXG5cclxuXHJcbiAgICAubWVudUNvbnRyb2xsZXIge1xyXG5cclxuICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICAgIHdpZHRoOiA0MHB4O1xyXG4gICAgICAgIGhlaWdodDogNDBweDtcclxuICAgIH1cclxuXHJcbiAgICAuY2hlY2tCb3gge1xyXG4gICAgICAgIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcclxuICAgICAgICAtbW96LWFwcGVhcmFuY2U6IG5vbmU7XHJcbiAgICAgICAgd2lkdGg6IDIwcHg7XHJcbiAgICAgICAgaGVpZ2h0OiAyMHB4O1xyXG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gICAgICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHJcbiAgICB9XHJcblxyXG5cclxuICAgIC5jaGVja0JveDo6YmVmb3JlIHtcclxuICAgICAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICB0b3A6IDUwJTtcclxuICAgICAgICBsZWZ0OiA1MCU7XHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgIGNvbG9yOiByZ2IoMjIsIDI1MiwgMjIpO1xyXG4gICAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICAgICAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjNzIGVhc2U7XHJcbiAgICB9XHJcblxyXG4gICAgLmNoZWNrQm94OmhvdmVyOjpiZWZvcmUge1xyXG4gICAgICAgIGNvbnRlbnQ6IFwi4pyTXCI7XHJcbiAgICAgICAgb3BhY2l0eTogMC41O1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBzdmcge1xyXG4gICAgICAgIHdpZHRoOiAyNXB4O1xyXG4gICAgICAgIGhlaWdodDogMjVweDtcclxuICAgIH1cclxuXHJcbiAgICAjdGFzayB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIGdhcDogNXB4O1xyXG4gICAgICAgIG1hcmdpbjogMjdweCAwIDExcHggMjZweDtcclxuICAgIH1cclxuXHJcblxyXG5cclxuICAgICN0YXNrIHN2ZyB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2RjMjYyNjtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgZmlsbDogd2hpdGU7XHJcbiAgICB9XHJcblxyXG4gICAgI3Rhc2sgOmhvdmVyIHtcclxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEuMDkpO1xyXG4gICAgfVxyXG5cclxuICAgICN0YXNrIGJ1dHRvbiB7XHJcbiAgICAgICAgYm9yZGVyOiAwO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICBjb2xvcjogI2I5MWMxYztcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmhlcml0O1xyXG4gICAgfVxyXG5cclxuICAgICN0YXNrIGJ1dHRvbjpob3ZlciB7XHJcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxLjA5KTtcclxuICAgIH1cclxuXHJcbiAgICBidXR0b24uZGVsZXRlVGFzayB7XHJcbiAgICAgICAgcGFkZGluZzogMTBweDtcclxuICAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogN3B4O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNlMDQ4N2M7XHJcbiAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjJzIGVhc2Utb3V0O1xyXG4gICAgfVxyXG5cclxuICAgIGJ1dHRvbi5kZWxldGVUYXNrOmhvdmVyIHtcclxuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMSlcclxuICAgIH1cclxuXHJcbiAgICBidXR0b24uZGVsZXRlVGFzazphY3RpdmUge1xyXG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMC45KVxyXG4gICAgfVxyXG5cclxuXHJcblxyXG5cclxuICAgIC5saXN0Q29udGFpbmVyIHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGdhcDogNXB4O1xyXG4gICAgICAgIG1heC13aWR0aDogNzE0cHg7XHJcblxyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICAgICAgYm94LXNoYWRvdzogMXB4IDBweCAzcHggMHB4O1xyXG4gICAgICAgIG1hcmdpbjogMThweCAxOHB4O1xyXG4gICAgICAgIHBhZGRpbmc6IDE1cHg7XHJcblxyXG5cclxuICAgIH1cclxuXHJcblxyXG4gICAgLnByaW9yaXR5RGF0ZU9uTGFyZ2VTY3JlZW4ge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIG1heC13aWR0aDogMjAwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgLnByb2plY3RCdXR0b25zQ29udGFpbmVyIHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIH1cclxuXHJcbiAgICAucHJvamVjdEJ1dHRvbnNDb250YWluZXIgYnV0dG9uIHtcclxuICAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogN3B4O1xyXG4gICAgICAgIHBhZGRpbmc6IDlweDtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLmV4Y2x1ZGVkIHtcclxuICAgICAgICBjb2xvcjogcmVkO1xyXG4gICAgfVxyXG5cclxuICAgIC50YXNrQ29udGFpbmVyIHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGZsZXg6IDE7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgfVxyXG5cclxuXHJcblxyXG4gICAgLnRhc2tUaXRsZSwgLm5ld1Byb2plY3QtdGFzay10aXRsZSwgLmVkaXRhYmxlU2F2ZVRhc2tFbCB7XHJcbiAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uLWNvbG9yOiByZWQ7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIC50YXNrRGVzY3JpcHRpb24sIC5uZXdQcm9qZWN0LWRlc2NyaXB0aW9uIHtcclxuICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG5cclxuICAgIH1cclxuXHJcbiAgICAudGFza1ByaW9yaXR5IHtcclxuICAgICAgICBmb250LXNpemU6IDE5cHg7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNnB4O1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICM1NzNkM2Q7XHJcbiAgICAgICAgcGFkZGluZzogNnB4O1xyXG4gICAgICAgIG1hcmdpbjogMCAwIDdweDtcclxuICAgICAgICBjb2xvcjogd2hpdGU7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIC5pbm5lclRhc2tIYW5kbGVyIHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAganVzdGlmeS1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgbWFyZ2luOiAwcHggMTVweCAwIDQwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgLmluYm94LWNvbnRhaW5lciB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIGdhcDogNXB4O1xyXG4gICAgICAgIG1hcmdpbjogMHB4IDAgMCAxNnB4O1xyXG4gICAgICAgIGhlaWdodDogMjZweDtcclxuICAgICAgICBwYWRkaW5nOiA5cHg7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4IDBweCAwcHggNXB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5pbmJveC1jb250YWluZXI6aG92ZXIge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWhvdmVyLWNvbG9yKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLmluYm94IHtcclxuICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIC5pbmJveExpc3RDb250YWluZXIge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgZ2FwOiA1cHg7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIC5pbmJveFRhc2tDb250YWluZXIge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgZmxleDogMTtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICB9XHJcblxyXG4gICAgLmluYm94VGFza1RpdGxlIHtcclxuICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5pbmJveFRhc2tEZXNjcmlwdGlvbiB7XHJcbiAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgLmluYm94VGFza1ByaW9yaXR5IHtcclxuICAgICAgICBtYXJnaW46IDAgMjBweCAwIDA7XHJcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG5cclxuICAgIH1cclxuXHJcbiAgICAuZHVlRGF0ZSB7XHJcbiAgICAgICAgbWFyZ2luOiAwO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICAuZWRpdCB7XHJcbiAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICAgICAgZm9udC1zaXplOiAxN3B4O1xyXG4gICAgICAgIG1heC13aWR0aDogMTEwcHg7XHJcbiAgICAgICAgbWFyZ2luOiAwIDBcclxuICAgIH1cclxuXHJcbiAgICAjcHJvamVjdHMgaDMge1xyXG4gICAgICAgIG1hcmdpbjogMCAwIDAgMTBweDtcclxuICAgIH1cclxuXHJcbiAgICAjZm9ybSB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzY0NzQ4YjtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgICAgIGhlaWdodDogMTQwcHg7XHJcbiAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDFyZW07XHJcbiAgICAgICAgbWFyZ2luOiAxMHB4IDEwcHggMCAwO1xyXG4gICAgfVxyXG5cclxuICAgIC5mb3JtRGV0YWlscyB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgICBtYXJnaW46IDEycHggMTVweDtcclxuICAgIH1cclxuXHJcbiAgICBpbnB1dCNkYXRlUGlja2VyIHtcclxuICAgICAgICBtYXgtd2lkdGg6IDExOHB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5idXR0b25zIHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgICBtYXJnaW46IDFweCAzM3B4XHJcbiAgICB9XHJcblxyXG4gICAgLmJ1dHRvbnMgYnV0dG9uIHtcclxuICAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogN3B4O1xyXG4gICAgICAgIHBhZGRpbmc6IDdweDtcclxuICAgICAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4ycyBlYXNlLW91dFxyXG4gICAgfVxyXG5cclxuICAgIC5idXR0b25zIGJ1dHRvbjpob3ZlciB7XHJcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjA1KVxyXG4gICAgfVxyXG5cclxuICAgICNQcm9qZWN0Rm9ybSB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzY0NzQ4YjtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgICAgIGhlaWdodDogMTUwcHg7XHJcbiAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgICAgIG1hcmdpbjogMTVweCAxNXB4IDAgMTdweDtcclxuICAgIH1cclxuXHJcbiAgICAucHJvamVjdEZvcm1EZXRhaWxzIHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICAgIHRvcDogMDtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLmZpcnN0LWlucHV0Q29udGFpbmVyIGlucHV0LCAuUHRpdGxlSW5wdXRDb250YWluZXIgaW5wdXQge1xyXG4gICAgICAgIG1heC13aWR0aDogNjAwcHg7XHJcbiAgICAgICAgaGVpZ2h0OiAyNXB4O1xyXG4gICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICBtYXJnaW46IDEwcHggMCAwIDA7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogaW5oZXJpdDtcclxuICAgIH1cclxuXHJcbiAgICAudGFzay10aXRsZSwgLmRlc2NyaXB0aW9uIHtcclxuICAgICAgICB3aWR0aDogMzUwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgLmZpcnN0LWlucHV0Q29udGFpbmVyIGlucHV0OjpwbGFjZWhvbGRlciwgLlB0aXRsZUlucHV0Q29udGFpbmVyIGlucHV0OjpwbGFjZWhvbGRlciB7XHJcbiAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgIHBhZGRpbmc6IDAgMTBweDtcclxuICAgICAgICBvcGFjaXR5OiAxO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICAuc2Vjb25kLWlucHV0Q29udGFpbmVyIGlucHV0LCAuUGRlc2NyaXB0aW9uSW5wdXRDb250YWluZXIgaW5wdXQge1xyXG4gICAgICAgIG1heC13aWR0aDogNjAwcHg7XHJcbiAgICAgICAgaGVpZ2h0OiAyNXB4O1xyXG4gICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmhlcml0O1xyXG4gICAgICAgIG1hcmdpbjogMDtcclxuICAgIH1cclxuXHJcbiAgICAuc2Vjb25kLWlucHV0Q29udGFpbmVyIGlucHV0OjpwbGFjZWhvbGRlciwgLlBkZXNjcmlwdGlvbklucHV0Q29udGFpbmVyIGlucHV0OjpwbGFjZWhvbGRlciB7XHJcbiAgICAgICAgcGFkZGluZzogMCAxMHB4O1xyXG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICBvcGFjaXR5OiAxO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICAuZmlyc3QtaW5wdXRDb250YWluZXIsIC5zZWNvbmQtaW5wdXRDb250YWluZXIge1xyXG4gICAgICAgIG1hcmdpbjogMTBweCAwIDAgMDtcclxuICAgICAgICBmb250LXNpemU6IDFyZW07XHJcbiAgICB9XHJcblxyXG4gICAgLm90aGVyLW9wdGlvbnMtb24tZm9ybXMsIC5mb290ZXIge31cclxuXHJcbiAgICAuc3VibWl0QnRuOmFjdGl2ZSB7XHJcbiAgICAgICAgdHJhbnNmb3JtOiBhY3RpdmUgc2NhbGUoMS4xKTtcclxuICAgIH1cclxuXHJcbiAgICAub3RoZXItb3B0aW9ucy1vbi1mb3JtcyBidXR0b24sICNwcmlvcml0eSwgaW5wdXQjZGF0ZVBpY2tlciB7XHJcbiAgICAgICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIC4zcyBlYXNlLWluO1xyXG4gICAgICAgIHBhZGRpbmc6IDdweDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA3cHg7XHJcbiAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMwN2M0ZGQ7XHJcbiAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgfVxyXG5cclxuICAgICNwcmlvcml0eSB7XHJcbiAgICAgICAgbWFyZ2luOiAxMHB4IDAgOHB4IDA7XHJcbiAgICB9XHJcblxyXG4gICAgI3Byb2plY3RQcmlvcml0eSwgLmZvb3RlciB7XHJcbiAgICAgICAgcGFkZGluZzogN3B4O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgICAgICBtYXJnaW46IDAgNHB4IDVweCAwO1xyXG4gICAgfVxyXG5cclxuICAgIC5hZGRQcm9qZWN0c0NvbnRhaW5lciB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuXHJcbiAgICAgICAgbWFyZ2luOiAwIDAgMCAyMHB4O1xyXG4gICAgICAgIHBhZGRpbmc6IDdweDtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIGdhcDogMTBweDtcclxuICAgICAgICBoZWlnaHQ6IDI1cHg7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4IDBweCAwcHggNXB4O1xyXG5cclxuICAgIH1cclxuXHJcbiAgICAuYWRkUHJvamVjdHNDb250YWluZXI6aG92ZXIge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWhvdmVyLWNvbG9yKTtcclxuICAgIH1cclxuXHJcbiAgICAuYWRkUHJvamVjdHNDb250YWluZXIgc3ZnIHtcclxuICAgICAgICB3aWR0aDogMjVweDtcclxuICAgICAgICBoZWlnaHQ6IDI1cHg7XHJcbiAgICB9XHJcblxyXG4gICAgI2FkZE5ld1Byb2plY3RFbCB7XHJcbiAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTlweDtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLnByb2plY3RfdGV4dCB7XHJcbiAgICAgICAgbWFyZ2luOiAwIDAgMTBweCAxN3B4O1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgYWxpZ24tc2VsZjogY2VudGVyO1xyXG4gICAgICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xyXG4gICAgICAgIHBhZGRpbmc6IDlweDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA1cHggMHB4IDBweCA1cHg7XHJcblxyXG5cclxuICAgIH1cclxuXHJcbiAgICAucHJvamVjdF90ZXh0OmhvdmVyIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ob3Zlci1jb2xvcik7XHJcbiAgICB9XHJcblxyXG5cclxuXHJcbiAgICAjcHJvamVjdC1kcm9wZG93biB7XHJcbiAgICAgICAgYm9yZGVyOiAwO1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IGluaGVyaXQ7XHJcbiAgICAgICAgbWFyZ2luOiA1cHggMCAwIDE3cHg7XHJcbiAgICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA1NTA7XHJcbiAgICAgICAgcGFkZGluZzogOHB4O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDVweCAwcHggMHB4IDVweDtcclxuICAgICAgICBtYXgtd2lkdGg6IDE2MHB4O1xyXG5cclxuICAgIH1cclxuXHJcbiAgICAjcHJvamVjdC1kcm9wZG93bjpob3ZlciB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taG92ZXItY29sb3IpO1xyXG5cclxuICAgIH1cclxuXHJcblxyXG4gICAgI3Byb2plY3QtZHJvcGRvd246Zm9jdXMge1xyXG4gICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgfVxyXG5cclxuICAgICNuZXdQcm9qZWN0c0Zvcm1Db250YWluZXJFbCB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcclxuXHJcblxyXG4gICAgfVxyXG5cclxuICAgICNQcm9qZWN0c0Zvcm1OYW1lQ29udGFpbmVyRWwge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC5pbnB1dE5ld3Byb2plY3RGb3JtTmFtZSB7XHJcbiAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2VlM2UzO1xyXG4gICAgICAgIG1heC13aWR0aDogNDAwcHg7XHJcbiAgICAgICAgbWF4LWhlaWdodDogMzAwcHg7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgICAgICBwYWRkaW5nOiA0NnB4O1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBtYXJnaW46IDYwcHggMCAwIDA7XHJcbiAgICAgICAgYm94LXNoYWRvdzogMHB4IDlweCAzcHggMHB4O1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAuaW5wdXROZXdwcm9qZWN0Rm9ybU5hbWUgaDIge1xyXG4gICAgICAgIG1hcmdpbjogMCAwIDEwcHggMDtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLmlucHV0TmV3UHJvamVjdE5hbWUge1xyXG4gICAgICAgIG1heC13aWR0aDogMzUwcHg7XHJcbiAgICAgICAgbWF4LWhlaWdodDogMzVweDtcclxuICAgICAgICBwYWRkaW5nOiAxN3B4O1xyXG4gICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA3cHg7XHJcbiAgICAgICAgZm9udC1zaXplOiAxOXB4O1xyXG4gICAgfVxyXG5cclxuICAgIGlucHV0LlNhdmVQcm9qZWN0TmFtZSB7XHJcbiAgICAgICAgcGFkZGluZzogOXB4O1xyXG4gICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgICAgICAgbWF4LXdpZHRoOiAxMDBweDtcclxuICAgICAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICAgICAgZm9udC1zaXplOiAxOXB4O1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNDAsIDU5LCAxMzQpO1xyXG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgLnByb2plY3ROYW1lU2F2ZXJCdG5Db250YWluZXIge1xyXG4gICAgICAgIG1hcmdpbjogMTBweCAwO1xyXG4gICAgfVxyXG5cclxuICAgIC5wcm9qZWN0TmFtZVNhdmVyQnRuQ29udGFpbmVyIGJ1dHRvbiB7XHJcbiAgICAgICAgcGFkZGluZzogOXB4O1xyXG4gICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgICAgICAgd2lkdGg6IDEwMHB4O1xyXG4gICAgICAgIGhlaWdodDogNDBweDtcclxuICAgICAgICBmb250LXNpemU6IDE5cHg7XHJcbiAgICB9XHJcblxyXG4gICAgI1Byb2plY3RzRm9ybU5hbWVDb250YWluZXJFbCAuQ2FuY2VsIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmV5O1xyXG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIH1cclxuXHJcbiAgICAjbmV3UHJvamVjdFRhc2tzQ29udGFpbmVyIHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblxyXG4gICAgfVxyXG5cclxuICAgICNuZXdQcm9qZWN0VGFza3NJbm5lckNvbnRhaW5lciB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIGdhcDogNXB4O1xyXG4gICAgICAgIG1hcmdpbjogMTBweDtcclxuICAgICAgICBib3gtc2hhZG93OiAjNWM1NTU1IDFweCAzcHggM3B4IDFweDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICAgICAgd2lkdGg6IDk1cHg7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgIGxlZnQ6IDI1MHB4O1xyXG4gICAgfVxyXG5cclxuICAgIHN2Zy5hZGRUYXNrIHtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgZmlsbDogd2hlYXQ7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xyXG4gICAgfVxyXG5cclxuICAgIC5uZXdQcm9qZWN0QWRkQnRuIHtcclxuICAgICAgICBib3JkZXI6IDA7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogaW5oZXJpdDtcclxuICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICAjUHJvamVjdGRhdGVQaWNrZXIge1xyXG4gICAgICAgIHBhZGRpbmc6IDJweDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgIGhlaWdodDogMzJweDtcclxuXHJcbiAgICB9XHJcblxyXG5cclxuICAgICNzdWJtaXRCdG5Gb3JQcm9qZWN0IHtcclxuICAgICAgICBwYWRkaW5nOiA3cHg7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogOXB4O1xyXG5cclxuICAgIH1cclxuXHJcbiAgICAjc3VibWl0QnRuRm9yUHJvamVjdDphY3RpdmUge1xyXG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xKVxyXG4gICAgfVxyXG5cclxuICAgIC5jYW5jZWxGb3JQcm9qZWN0QnRuIHtcclxuICAgICAgICBwYWRkaW5nOiA3cHg7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogOXB4O1xyXG4gICAgfWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIklBQUk7UUFDSSxVQUFVO1FBQ1YsU0FBUztRQUNULHNCQUFzQjtJQUMxQjs7SUFFQTtRQUNJLHNCQUFzQjtRQUN0QiwyQkFBMkI7SUFDL0I7O0lBRUE7UUFDSSxVQUFVO1FBQ1YsU0FBUztRQUNULHNC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QUNJLFlBQVk7UUFDWixrQkFBa0I7UUFDbEIsWUFBWTtRQUNaLFlBQVk7O0lBRWhCOzs7SUFHQTtRQUNJLFlBQVk7UUFDWixrQkFBa0I7O0lBRXRCOztJQUVBO1FBQ0k7SUFDSjs7SUFFQTtRQUNJLFlBQVk7UUFDWixrQkFBa0I7SUFDdEJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiICAgIGJvZHkge1xcclxcbiAgICAgICAgcGFkZGluZzogMDtcXHJcXG4gICAgICAgIG1hcmdpbjogMDtcXHJcXG4gICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgOnJvb3Qge1xcclxcbiAgICAgICAgLS1ob3Zlci1jb2xvcjogI2ZkYTRhZjtcXHJcXG4gICAgICAgIC0tYmFja2dyb3VuZC1jb2xvcjogIzZmOWU5ZTtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAqIHtcXHJcXG4gICAgICAgIHBhZGRpbmc6IDA7XFxyXFxuICAgICAgICBtYXJnaW46IDA7XFxyXFxuICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcblxcclxcbiAgICAgICAgZm9udC1mYW1pbHk6IFxcXCJSb2JvdG9cXFwiLCBzYW5zLXNlcmlmO1xcclxcbiAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcXHJcXG4gICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICBAbWVkaWEgKG1heC13aWR0aDogNTUwcHgpIHtcXHJcXG5cXHJcXG4gICAgICAgIGJvZHkgbWFpbiB7XFxyXFxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICAgICAgICAgIHotaW5kZXg6IDE7XFxyXFxuICAgICAgICB9XFxyXFxuXFxyXFxuICAgICAgICBtYWluIGhlYWRlciB7XFxyXFxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZkYTRhZjtcXHJcXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICAgICAgICAgIGdhcDogMTBweDtcXHJcXG4gICAgICAgIH1cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG4gICAgICAgICN0b2dnbGVNZW51SWNvbiB7XFxyXFxuICAgICAgICAgICAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgICAgICAgICAgIHRvcDogMjBweDtcXHJcXG4gICAgICAgICAgICByaWdodDogMjBweDtcXHJcXG4gICAgICAgICAgICB3aWR0aDogNjBweDtcXHJcXG4gICAgICAgICAgICBoZWlnaHQ6IDYwcHg7XFxyXFxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzZiODg4ODtcXHJcXG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDhweDtcXHJcXG4gICAgICAgICAgICB0cmFuc2l0aW9uOiB0b3AgMC4zcztcXHJcXG5cXHJcXG4gICAgICAgICAgICB6LWluZGV4OiAxMDAwO1xcclxcbiAgICAgICAgfVxcclxcblxcclxcbiAgICAgICAgI3RvZ2dsZU1lbnVJY29uOjpiZWZvcmUge1xcclxcbiAgICAgICAgICAgIGNvbnRlbnQ6ICcnO1xcclxcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgICAgICAgICB3aWR0aDogMjhweDtcXHJcXG4gICAgICAgICAgICBoZWlnaHQ6IDJweDtcXHJcXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcclxcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNXB4KTtcXHJcXG4gICAgICAgICAgICB0cmFuc2l0aW9uOiAwLjJzO1xcclxcbiAgICAgICAgfVxcclxcblxcclxcbiAgICAgICAgI3RvZ2dsZU1lbnVJY29uOjphZnRlciB7XFxyXFxuICAgICAgICAgICAgY29udGVudDogJyc7XFxyXFxuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICAgICAgICAgIHdpZHRoOiAyOHB4O1xcclxcbiAgICAgICAgICAgIGhlaWdodDogMnB4O1xcclxcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxyXFxuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDVweCk7XFxyXFxuICAgICAgICAgICAgdHJhbnNpdGlvbjogMC4ycztcXHJcXG4gICAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAgICN0b2dnbGVNZW51SWNvbi5hY3RpdmU6OmJlZm9yZSB7XFxyXFxuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDBweCkgcm90YXRlKDQ1ZGVnKTtcXHJcXG5cXHJcXG4gICAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAgICN0b2dnbGVNZW51SWNvbi5hY3RpdmU6OmFmdGVyIHtcXHJcXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMHB4KSByb3RhdGUoLTQ1ZGVnKTtcXHJcXG5cXHJcXG4gICAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAgIGFzaWRlI21lbnUge1xcclxcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgICAgICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gICAgICAgICAgICB0b3A6IDA7XFxyXFxuICAgICAgICAgICAgbGVmdDogLTIyMHB4O1xcclxcbiAgICAgICAgICAgIHdpZHRoOiAyMjBweDtcXHJcXG4gICAgICAgICAgICBoZWlnaHQ6IDEwMHZoO1xcclxcbiAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcXHJcXG4gICAgICAgICAgICBmaWx0ZXI6IHdoaXRlO1xcclxcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICM3OTg5YTE7XFxyXFxuICAgICAgICAgICAgdHJhbnNpdGlvbjogMC4zcztcXHJcXG4gICAgICAgICAgICB6LWluZGV4OiAxMDAwO1xcclxcbiAgICAgICAgICAgIGZpbGw6IHdoaXRlO1xcclxcblxcclxcbiAgICAgICAgfVxcclxcblxcclxcbiAgICAgICAgYXNpZGUjbWVudS5hY3RpdmUge1xcclxcbiAgICAgICAgICAgIGxlZnQ6IDA7XFxyXFxuICAgICAgICB9XFxyXFxuXFxyXFxuICAgICAgICBtYWluIGFzaWRlIHtcXHJcXG4gICAgICAgICAgICBkaXNwbGF5OiBub25lO1xcclxcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTJlOGYwO1xcclxcbiAgICAgICAgfVxcclxcblxcclxcbiAgICAgICAgbWFpbiAjQ29udGFpbmVyIHtcXHJcXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgICAgICAgICAgZmxleC13cmFwOiB3cmFwO1xcclxcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG4gICAgICAgIH1cXHJcXG5cXHJcXG5cXHJcXG4gICAgICAgIGhlYWRlciAubWVudUNvbnRyb2xsZXIge1xcclxcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgICAgICAgICAgIHdpZHRoOiA0MHB4O1xcclxcbiAgICAgICAgICAgIGhlaWdodDogNDBweDtcXHJcXG4gICAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAgIGhlYWRlciAubWVudUNvbnRyb2xsZXIgc3ZnIHtcXHJcXG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcXHJcXG4gICAgICAgICAgICB3aWR0aDogNDBweDtcXHJcXG4gICAgICAgICAgICBoZWlnaHQ6IDQwcHg7XFxyXFxuICAgICAgICAgICAgZmlsbDogd2hpdGU7XFxyXFxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxyXFxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweFxcclxcbiAgICAgICAgfVxcclxcblxcclxcbiAgICAgICAgI3VzZXJsaXN0IHtcXHJcXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgICAgICAgICAgbWF4LXdpZHRoOiA1NTBweDtcXHJcXG4gICAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAgIGRpdi5saXN0Q29udGFpbmVyIHtcXHJcXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICAgICAgICAgIGdhcDogNXB4O1xcclxcbiAgICAgICAgICAgIG1heC13aWR0aDogNTE1cHg7XFxyXFxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG4gICAgICAgICAgICBib3gtc2hhZG93OiAxcHggMHB4IDNweCAwcHg7XFxyXFxuICAgICAgICAgICAgbWFyZ2luOiAxNHB4IDE0cHggMCAxOXB4O1xcclxcblxcclxcbiAgICAgICAgICAgIHBhZGRpbmc6IDEwcHg7XFxyXFxuXFxyXFxuXFxyXFxuICAgICAgICB9XFxyXFxuXFxyXFxuICAgICAgICAjdXNlcmxpc3QgLmludGlhbFRleHREaXNwbGF5IHtcXHJcXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgICAgICB9XFxyXFxuXFxyXFxuICAgICAgICAuaW50aWFsVGV4dERpc3BsYXkgaW1nIHtcXHJcXG4gICAgICAgICAgICBtYXgtd2lkdGg6IDEwMCU7XFxyXFxuICAgICAgICAgICAgaGVpZ2h0OiBhdXRvO1xcclxcbiAgICAgICAgICAgIHBhZGRpbmc6IDE4cHg7XFxyXFxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMzBweDtcXHJcXG4gICAgICAgICAgICBvYmplY3QtZml0OiBjb250YWluO1xcclxcblxcclxcbiAgICAgICAgfVxcclxcblxcclxcbiAgICAgICAgI3VzZXJsaXN0ICNhZGRUb2RvQnRuQ29udGFpbmVyIHtcXHJcXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgICAgICAgICAgZ2FwOiA1cHg7XFxyXFxuICAgICAgICAgICAgbWFyZ2luOiAyN3B4IDAgMTFweCAyNnB4O1xcclxcbiAgICAgICAgfVxcclxcblxcclxcbiAgICAgICAgI3Rhc2sge1xcclxcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgICAgICAgICBnYXA6IDVweDtcXHJcXG4gICAgICAgICAgICBtYXJnaW46IDI3cHggMCAxMXB4IDI2cHg7XFxyXFxuICAgICAgICB9XFxyXFxuXFxyXFxuICAgICAgICAjdXNlcmxpc3QgI2FkZFRvZG9CdG5Db250YWluZXIgc3ZnIHtcXHJcXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGMyNjI2O1xcclxcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXHJcXG4gICAgICAgICAgICBmaWxsOiB3aGl0ZTtcXHJcXG4gICAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAgICN1c2VybGlzdCAjYWRkVG9kb0J0bkNvbnRhaW5lciA6aG92ZXIge1xcclxcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMS4wOSk7XFxyXFxuICAgICAgICB9XFxyXFxuXFxyXFxuICAgICAgICAjdXNlcmxpc3QgI2FkZFRvZG9CdG5Db250YWluZXIgYnV0dG9uIHtcXHJcXG4gICAgICAgICAgICBib3JkZXI6IDA7XFxyXFxuICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xcclxcbiAgICAgICAgICAgIGNvbG9yOiAjYjkxYzFjO1xcclxcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IGluaGVyaXQ7XFxyXFxuICAgICAgICAgICAgdHJhbnNpdGlvbjogMC4zcztcXHJcXG4gICAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAgICN1c2VybGlzdCAjYWRkVG9kb0J0bkNvbnRhaW5lciBidXR0b246aG92ZXIge1xcclxcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMS4wOSk7XFxyXFxuICAgICAgICB9XFxyXFxuXFxyXFxuXFxyXFxuICAgICAgICAuaW5uZXJfY29udGFpbmVyICNmb3JtIHtcXHJcXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjQ3NDhiO1xcclxcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxyXFxuICAgICAgICAgICAgbWF4LWhlaWdodDogMTM1cHg7XFxyXFxuICAgICAgICAgICAgbWF4LXdpZHRoOiA1MTVweCAhaW1wb3J0YW50O1xcclxcbiAgICAgICAgICAgIGhlaWdodDogMTQwcHg7XFxyXFxuICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAxcmVtO1xcclxcbiAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XFxyXFxuICAgICAgICAgICAgbWF4LXdpZHRoOiA0ODBweDtcXHJcXG4gICAgICAgICAgICBtYXJnaW46IDEwcHggMTBweCAwIDEwcHg7XFxyXFxuICAgICAgICB9XFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuICAgICAgICBkaXYuaW5wdXROZXdwcm9qZWN0Rm9ybU5hbWUge1xcclxcbiAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XFxyXFxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2NlZTNlMztcXHJcXG4gICAgICAgICAgICBtYXgtd2lkdGg6IDMwMHB4O1xcclxcbiAgICAgICAgICAgIG1heC1oZWlnaHQ6IDMwMHB4O1xcclxcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxyXFxuICAgICAgICAgICAgcGFkZGluZzogMjVweDtcXHJcXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgICAgICAgICAgbWFyZ2luOiA2MHB4IDAgMCAwO1xcclxcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IDBweCA5cHggM3B4IDBweDtcXHJcXG5cXHJcXG4gICAgICAgIH1cXHJcXG5cXHJcXG5cXHJcXG4gICAgICAgIC5pbnB1dE5ld3Byb2plY3RGb3JtTmFtZSBoMiB7XFxyXFxuICAgICAgICAgICAgbWFyZ2luOiAwIDAgMTBweCAwO1xcclxcbiAgICAgICAgfVxcclxcblxcclxcblxcclxcbiAgICAgICAgLmlucHV0TmV3cHJvamVjdEZvcm1OYW1lIC5pbnB1dE5ld1Byb2plY3ROYW1lIHtcXHJcXG4gICAgICAgICAgICBtYXgtd2lkdGg6IDMwMHB4O1xcclxcbiAgICAgICAgICAgIG1heC1oZWlnaHQ6IDM1cHg7XFxyXFxuICAgICAgICAgICAgcGFkZGluZzogMTRweDtcXHJcXG4gICAgICAgICAgICBib3JkZXI6IG5vbmU7XFxyXFxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogN3B4O1xcclxcbiAgICAgICAgfVxcclxcblxcclxcbiAgICAgICAgaW5wdXQuU2F2ZVByb2plY3ROYW1lIHtcXHJcXG4gICAgICAgICAgICBwYWRkaW5nOiA5cHg7XFxyXFxuICAgICAgICAgICAgYm9yZGVyOiBub25lO1xcclxcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDhweDtcXHJcXG4gICAgICAgICAgICBtYXgtd2lkdGg6IDEwMHB4O1xcclxcbiAgICAgICAgICAgIGhlaWdodDogNDBweDtcXHJcXG4gICAgICAgICAgICBmb250LXNpemU6IDE5cHg7XFxyXFxuXFxyXFxuICAgICAgICB9XFxyXFxuXFxyXFxuICAgICAgICAucHJvamVjdE5hbWVTYXZlckJ0bkNvbnRhaW5lciB7XFxyXFxuICAgICAgICAgICAgbWFyZ2luOiAxMHB4IDA7XFxyXFxuICAgICAgICB9XFxyXFxuXFxyXFxuICAgICAgICAucHJvamVjdE5hbWVTYXZlckJ0bkNvbnRhaW5lciBidXR0b24ge1xcclxcbiAgICAgICAgICAgIHBhZGRpbmc6IDlweDtcXHJcXG4gICAgICAgICAgICBib3JkZXI6IG5vbmU7XFxyXFxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogOHB4O1xcclxcbiAgICAgICAgICAgIHdpZHRoOiAxMDBweDtcXHJcXG4gICAgICAgICAgICBoZWlnaHQ6IDQwcHg7XFxyXFxuICAgICAgICAgICAgZm9udC1zaXplOiAxOXB4O1xcclxcbiAgICAgICAgfVxcclxcblxcclxcblxcclxcbiAgICAgICAgLmlubmVyX2NvbnRhaW5lciAjUHJvamVjdEZvcm0ge1xcclxcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICM2NDc0OGI7XFxyXFxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG4gICAgICAgICAgICBtYXgtaGVpZ2h0OiAxMzRweDtcXHJcXG4gICAgICAgICAgICBtYXgtd2lkdGg6IDUxNXB4O1xcclxcbiAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XFxyXFxuICAgICAgICAgICAgbWF4LXdpZHRoOiA1MDBweDtcXHJcXG4gICAgICAgICAgICBtYXJnaW46IDlweCAxMHB4IDAgMjNweDtcXHJcXG4gICAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAgIC5wcm9qZWN0Rm9ybURldGFpbHMge1xcclxcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgICAgICAgICAgcGFkZGluZzogMTBweDtcXHJcXG4gICAgICAgICAgICBoZWlnaHQ6IDgwcHg7XFxyXFxuICAgICAgICB9XFxyXFxuXFxyXFxuICAgICAgICBkaXYucHJpb3JpdHlEYXRlT25MYXJnZVNjcmVlbiB7XFxyXFxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICAgICAgICAgICAgdG9wOiAwO1xcclxcbiAgICAgICAgICAgIG1heC13aWR0aDogMjAwcHg7XFxyXFxuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAgIC5wcm9qZWN0SW5wdXRDb250YWluZXIge1xcclxcbiAgICAgICAgICAgIG1heC13aWR0aDogMjAwcHg7XFxyXFxuICAgICAgICB9XFxyXFxuXFxyXFxuICAgICAgICAucHJvamVjdElucHV0Q29udGFpbmVyIHAgaW5wdXQge1xcclxcbiAgICAgICAgICAgIG1heC13aWR0aDogMjAwcHg7XFxyXFxuICAgICAgICB9XFxyXFxuXFxyXFxuICAgICAgICAuaW5uZXJUYXNrQ29udGFpbmVyIC5lZGl0IHtcXHJcXG4gICAgICAgICAgICBtYXgtd2lkdGg6IDE0MHB4O1xcclxcbiAgICAgICAgfVxcclxcblxcclxcbiAgICAgICAgLnByb2plY3RJbnB1dENvbnRhaW5lciAuUGRlc2NyaXB0aW9uSW5wdXRDb250YWluZXIge1xcclxcbiAgICAgICAgICAgIG1hcmdpbjogMTBweCAwIDAgMDtcXHJcXG4gICAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAgIGRpdiNjb25maWdQcmlvcml0eURhdGVPbk1vYmlsZSB7XFxyXFxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICAgICAgICAgIG1heC13aWR0aDogMjAwcHg7XFxyXFxuICAgICAgICAgICAgcG9zaXRpb246IHN0YXRpYztcXHJcXG4gICAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAgICNjb25maWdQcmlvcml0eURhdGVPbk1vYmlsZSAjcHJpb3JpdHksICNkYXRlUGlja2VyIHtcXHJcXG4gICAgICAgICAgICBwYWRkaW5nOiAycHg7XFxyXFxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNnB4O1xcclxcbiAgICAgICAgICAgIG1heC13aWR0aDogMTA0cHg7XFxyXFxuICAgICAgICAgICAgbWluLXdpZHRoOiA4MHB4O1xcclxcbiAgICAgICAgfVxcclxcblxcclxcbiAgICAgICAgI1Byb2plY3RGb3JtIC5mb290ZXIge1xcclxcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICAgICAgICAgICAgcGFkZGluZzogMCAxMHB4O1xcclxcbiAgICAgICAgICAgIGdhcDogMDtcXHJcXG4gICAgICAgIH1cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG4gICAgICAgICNQcm9qZWN0Rm9ybSAucHJvamVjdEJ1dHRvbnNDb250YWluZXIge1xcclxcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgICAgICAgICAgcGFkZGluZzogMCAxMHB4O1xcclxcbiAgICAgICAgICAgIGdhcDogMDtcXHJcXG4gICAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAgICNmb3JtIC5mb3JtRGV0YWlscyB7XFxyXFxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgICAgICAgICBwYWRkaW5nOiAxMHB4O1xcclxcbiAgICAgICAgICAgIG1hcmdpbjogMDtcXHJcXG4gICAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAgICNmb3JtRm9vdGVyT25Nb2JpbGUge1xcclxcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICAgICAgICAgICAgcGFkZGluZzogMCAxMHB4O1xcclxcbiAgICAgICAgfVxcclxcblxcclxcblxcclxcbiAgICAgICAgI2Zvcm1Gb290ZXJPbk1vYmlsZSAuYnV0dG9ucyB7XFxyXFxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgICAgICAgICBwYWRkaW5nOiAwIDEwcHg7XFxyXFxuICAgICAgICAgICAgbWFyZ2luOiAwO1xcclxcbiAgICAgICAgICAgIGdhcDogMDtcXHJcXG4gICAgICAgIH1cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG4gICAgICAgIC5wcmlvcml0eURhdGVMYXJnZVNjcmVlbiB7XFxyXFxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICAgICAgfVxcclxcblxcclxcbiAgICAgICAgI2Zvcm0gLmlucHV0cyB7XFxyXFxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICAgICAgICAgIG1heC13aWR0aDogMTUwcHg7XFxyXFxuXFxyXFxuICAgICAgICB9XFxyXFxuXFxyXFxuICAgICAgICAjZm9ybSAuZmlyc3QtaW5wdXRDb250YWluZXIgaW5wdXQsIC5QdGl0bGVJbnB1dENvbnRhaW5lciBpbnB1dCB7XFxyXFxuICAgICAgICAgICAgbWF4LXdpZHRoOiAxNjVweDtcXHJcXG4gICAgICAgICAgICBtYXgtaGVpZ2h0OiAxNXB4O1xcclxcbiAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcXHJcXG4gICAgICAgICAgICBvdXRsaW5lOiBub25lO1xcclxcbiAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcXHJcXG4gICAgICAgICAgICBtYXJnaW46IDEwcHggMDtcXHJcXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmhlcml0O1xcclxcbiAgICAgICAgfVxcclxcblxcclxcbiAgICAgICAgI2Zvcm0gLnNlY29uZC1pbnB1dENvbnRhaW5lciBpbnB1dCwgLlBkZXNjcmlwdGlvbklucHV0Q29udGFpbmVyIGlucHV0IHtcXHJcXG4gICAgICAgICAgICBtYXgtd2lkdGg6IDE3OHB4O1xcclxcbiAgICAgICAgICAgIG1heC1oZWlnaHQ6IDE1cHg7XFxyXFxuICAgICAgICAgICAgYm9yZGVyOiBub25lO1xcclxcbiAgICAgICAgICAgIG91dGxpbmU6IG5vbmU7XFxyXFxuICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xcclxcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IGluaGVyaXQ7XFxyXFxuICAgICAgICAgICAgbWFyZ2luOiAwO1xcclxcbiAgICAgICAgfVxcclxcblxcclxcblxcclxcbiAgICAgICAgI2Zvcm0gLm90aGVyLW9wdGlvbnMtb24tZm9ybXMgYnV0dG9uLCAjY29uZmlnUHJpb3JpdHlEYXRlT25Nb2JpbGUgI3ByaW9yaXR5LCAjZGF0ZVBpY2tlciB7XFxyXFxuICAgICAgICAgICAgcGFkZGluZzogNHB4O1xcclxcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDZweDtcXHJcXG4gICAgICAgICAgICBtYXgtd2lkdGg6IDEwNHB4O1xcclxcbiAgICAgICAgICAgIG1pbi13aWR0aDogODBweDtcXHJcXG4gICAgICAgIH1cXHJcXG5cXHJcXG4gICAgfVxcclxcblxcclxcbiAgICBAbWVkaWEgKG1pbi13aWR0aDogNTUxcHgpIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xcclxcbiAgICAgICAgYm9keSBtYWluIHtcXHJcXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuXFxyXFxuICAgICAgICB9XFxyXFxuXFxyXFxuXFxyXFxuICAgICAgICBtYWluIGhlYWRlciB7XFxyXFxuXFxyXFxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZkYTRhZjtcXHJcXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICAgICAgICAgIGdhcDogMTBweDtcXHJcXG4gICAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAgIG1haW4gYXNpZGUge1xcclxcbiAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XFxyXFxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNlMmU4ZjA7XFxyXFxuICAgICAgICAgICAgei1pbmRleDogMjtcXHJcXG4gICAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAgIGFzaWRlIHVsLCB1bCBzZWxlY3Qge1xcclxcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgICAgICAgICBjb2xvcjogd2hpdGU7XFxyXFxuICAgICAgICAgICAgZmlsbDogd2hpdGU7XFxyXFxuICAgICAgICB9XFxyXFxuXFxyXFxuICAgICAgICBzZWxlY3QjcHJvamVjdC1kcm9wZG93biB7XFxyXFxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDQyLCA0MCwgNDkpO1xcclxcbiAgICAgICAgfVxcclxcblxcclxcbiAgICAgICAgbWFpbiAjQ29udGFpbmVyIHtcXHJcXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgICAgICAgICAgZmxleC13cmFwOiB3cmFwO1xcclxcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG4gICAgICAgICAgICB6LWluZGV4OiAxO1xcclxcblxcclxcbiAgICAgICAgfVxcclxcblxcclxcbiAgICAgICAgaGVhZGVyIC5tZW51Q29udHJvbGxlciB7XFxyXFxuXFxyXFxuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XFxyXFxuICAgICAgICAgICAgd2lkdGg6IDQwcHg7XFxyXFxuICAgICAgICAgICAgaGVpZ2h0OiA0MHB4O1xcclxcblxcclxcbiAgICAgICAgfVxcclxcblxcclxcblxcclxcblxcclxcblxcclxcbiAgICAgICAgI3RvZ2dsZU1lbnVJY29uIHtcXHJcXG4gICAgICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICAgICAgICAgICAgdG9wOiAyMHB4O1xcclxcbiAgICAgICAgICAgIHJpZ2h0OiAyMHB4O1xcclxcbiAgICAgICAgICAgIHdpZHRoOiA1MHB4O1xcclxcbiAgICAgICAgICAgIGhlaWdodDogNTBweDtcXHJcXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNmY5ZTllO1xcclxcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogOHB4O1xcclxcbiAgICAgICAgICAgIHRyYW5zaXRpb246IHRvcCAwLjNzO1xcclxcbiAgICAgICAgICAgIHotaW5kZXg6IDEwMDA7XFxyXFxuXFxyXFxuICAgICAgICAgICAgei1pbmRleDogMTAwMDtcXHJcXG4gICAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAgICN0b2dnbGVNZW51SWNvbjo6YmVmb3JlIHtcXHJcXG4gICAgICAgICAgICBjb250ZW50OiAnJztcXHJcXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgICAgICAgICAgd2lkdGg6IDI4cHg7XFxyXFxuICAgICAgICAgICAgaGVpZ2h0OiAycHg7XFxyXFxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXHJcXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTVweCk7XFxyXFxuICAgICAgICAgICAgdHJhbnNpdGlvbjogMC4ycztcXHJcXG4gICAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAgICN0b2dnbGVNZW51SWNvbjo6YWZ0ZXIge1xcclxcbiAgICAgICAgICAgIGNvbnRlbnQ6ICcnO1xcclxcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgICAgICAgICB3aWR0aDogMjhweDtcXHJcXG4gICAgICAgICAgICBoZWlnaHQ6IDJweDtcXHJcXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcclxcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSg1cHgpO1xcclxcbiAgICAgICAgICAgIHRyYW5zaXRpb246IDAuMnM7XFxyXFxuICAgICAgICB9XFxyXFxuXFxyXFxuICAgICAgICAjdG9nZ2xlTWVudUljb24uYWN0aXZlOjpiZWZvcmUge1xcclxcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwcHgpIHJvdGF0ZSg0NWRlZyk7XFxyXFxuXFxyXFxuICAgICAgICB9XFxyXFxuXFxyXFxuICAgICAgICAjdG9nZ2xlTWVudUljb24uYWN0aXZlOjphZnRlciB7XFxyXFxuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDBweCkgcm90YXRlKC00NWRlZyk7XFxyXFxuXFxyXFxuICAgICAgICB9XFxyXFxuXFxyXFxuICAgICAgICBhc2lkZSNtZW51IHtcXHJcXG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcXHJcXG4gICAgICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICAgICAgICAgICAgdG9wOiAwO1xcclxcbiAgICAgICAgICAgIGxlZnQ6IC0yMjBweDtcXHJcXG4gICAgICAgICAgICB3aWR0aDogMjIwcHg7XFxyXFxuICAgICAgICAgICAgaGVpZ2h0OiAxMDB2aDtcXHJcXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kLWNvbG9yKTtcXHJcXG4gICAgICAgICAgICB0cmFuc2l0aW9uOiAwLjNzO1xcclxcblxcclxcbiAgICAgICAgfVxcclxcblxcclxcbiAgICAgICAgYXNpZGUjbWVudS5hY3RpdmUge1xcclxcbiAgICAgICAgICAgIGxlZnQ6IDA7XFxyXFxuICAgICAgICB9XFxyXFxuXFxyXFxuICAgICAgICBhc2lkZSB1bCB7XFxyXFxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcXHJcXG4gICAgICAgICAgICBmaWxsOiB3aGl0ZTtcXHJcXG4gICAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAgIGhlYWRlciAubWVudUNvbnRyb2xsZXIgc3ZnIHtcXHJcXG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcXHJcXG4gICAgICAgICAgICB3aWR0aDogNDBweDtcXHJcXG4gICAgICAgICAgICBoZWlnaHQ6IDQwcHg7XFxyXFxuICAgICAgICAgICAgZmlsbDogd2hpdGU7XFxyXFxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxyXFxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweFxcclxcbiAgICAgICAgfVxcclxcblxcclxcblxcclxcbiAgICAgICAgI3VzZXJsaXN0ICNhZGRUb2RvQnRuQ29udGFpbmVyIHtcXHJcXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgICAgICAgICAgZ2FwOiA1cHg7XFxyXFxuICAgICAgICAgICAgbWFyZ2luOiAyN3B4IDAgMTFweCAyNnB4O1xcclxcbiAgICAgICAgfVxcclxcblxcclxcbiAgICAgICAgI3Rhc2sge1xcclxcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgICAgICAgICBnYXA6IDVweDtcXHJcXG4gICAgICAgICAgICBtYXJnaW46IDI3cHggMCAxMXB4IDI2cHg7XFxyXFxuICAgICAgICB9XFxyXFxuXFxyXFxuICAgICAgICAjdXNlcmxpc3QgI2FkZFRvZG9CdG5Db250YWluZXIgc3ZnIHtcXHJcXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGMyNjI2O1xcclxcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXHJcXG4gICAgICAgICAgICBmaWxsOiB3aGl0ZTtcXHJcXG4gICAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAgICN1c2VybGlzdCAjYWRkVG9kb0J0bkNvbnRhaW5lciA6aG92ZXIge1xcclxcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMS4wOSk7XFxyXFxuICAgICAgICB9XFxyXFxuXFxyXFxuICAgICAgICAjdXNlcmxpc3QgI2FkZFRvZG9CdG5Db250YWluZXIgYnV0dG9uIHtcXHJcXG4gICAgICAgICAgICBib3JkZXI6IDA7XFxyXFxuICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xcclxcbiAgICAgICAgICAgIGNvbG9yOiAjYjkxYzFjO1xcclxcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IGluaGVyaXQ7XFxyXFxuICAgICAgICB9XFxyXFxuXFxyXFxuICAgICAgICAjdXNlcmxpc3QgI2FkZFRvZG9CdG5Db250YWluZXIgYnV0dG9uOmhvdmVyIHtcXHJcXG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgICAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEuMDkpO1xcclxcbiAgICAgICAgfVxcclxcblxcclxcbiAgICAgICAgZGl2Lmxpc3RDb250YWluZXIge1xcclxcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgICAgICAgICAgZ2FwOiA1cHg7XFxyXFxuICAgICAgICAgICAgbWF4LXdpZHRoOiA3MTRweDtcXHJcXG5cXHJcXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IDFweCAwcHggM3B4IDBweDtcXHJcXG4gICAgICAgICAgICBtYXJnaW46IDE4cHggNjBweDtcXHJcXG4gICAgICAgICAgICBwYWRkaW5nOiAxNXB4O1xcclxcbiAgICAgICAgfVxcclxcblxcclxcbiAgICAgICAgI3VzZXJsaXN0IC5pbnRpYWxUZXh0RGlzcGxheSB7XFxyXFxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICAgICAgfVxcclxcblxcclxcbiAgICAgICAgLmludGlhbFRleHREaXNwbGF5IHAge1xcclxcbiAgICAgICAgICAgIG1heC13aWR0aDogNTAwcHg7XFxyXFxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgICAgICAgICBtYXgtd2lkdGg6IDUwMHB4O1xcclxcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgICAgICAgICAgZmxleC13cmFwOiB3cmFwO1xcclxcbiAgICAgICAgfVxcclxcblxcclxcbiAgICAgICAgLmludGlhbFRleHREaXNwbGF5IGltZyB7XFxyXFxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgICAgICAgICAgaGVpZ2h0OiBhdXRvO1xcclxcbiAgICAgICAgICAgIHBhZGRpbmc6IDIwcHg7XFxyXFxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNDFweDtcXHJcXG4gICAgICAgICAgICBvYmplY3QtZml0OiBjb250YWluO1xcclxcbiAgICAgICAgfVxcclxcblxcclxcbiAgICAgICAgLmlubmVyX2NvbnRhaW5lciAjZm9ybSB7XFxyXFxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzY0NzQ4YjtcXHJcXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbiAgICAgICAgICAgIGhlaWdodDogMTUwcHg7XFxyXFxuICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcXHJcXG4gICAgICAgICAgICBtYXgtd2lkdGg6IDYwMHB4O1xcclxcblxcclxcbiAgICAgICAgICAgIG1hcmdpbjogMTdweDtcXHJcXG4gICAgICAgIH1cXHJcXG5cXHJcXG5cXHJcXG4gICAgICAgICNmb3JtIGRpdi5mb3JtRGV0YWlscyB7XFxyXFxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG5cXHJcXG4gICAgICAgICAgICBwYWRkaW5nOiAxMHB4O1xcclxcbiAgICAgICAgICAgIG1hcmdpbjogMDtcXHJcXG4gICAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAgIC5wcmlvcml0eURhdGVMYXJnZVNjcmVlbiB7XFxyXFxuICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcXHJcXG4gICAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAgICNmb3JtIC5pbnB1dHMge1xcclxcbiAgICAgICAgICAgIG1heC13aWR0aDogMTUwcHhcXHJcXG4gICAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAgICNmb3JtIC5maXJzdC1pbnB1dENvbnRhaW5lciBpbnB1dCwgLlB0aXRsZUlucHV0Q29udGFpbmVyIGlucHV0LFxcclxcbiAgICAgICAgI2Zvcm0gLnNlY29uZC1pbnB1dENvbnRhaW5lciBpbnB1dCwgLlBkZXNjcmlwdGlvbklucHV0Q29udGFpbmVyIGlucHV0IHtcXHJcXG4gICAgICAgICAgICBtYXgtd2lkdGg6IDYwMHB4O1xcclxcbiAgICAgICAgICAgIGhlaWdodDogMjVweDtcXHJcXG4gICAgICAgICAgICBib3JkZXI6IG5vbmU7XFxyXFxuICAgICAgICAgICAgb3V0bGluZTogbm9uZTtcXHJcXG4gICAgICAgICAgICBjb2xvcjogd2hpdGU7XFxyXFxuICAgICAgICAgICAgbWFyZ2luOiAxMHB4IDAgMCAwO1xcclxcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IGluaGVyaXQ7XFxyXFxuICAgICAgICB9XFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuICAgICAgICBwLnNlY29uZC1pbnB1dENvbnRhaW5lciB7XFxyXFxuICAgICAgICAgICAgbWFyZ2luOiAwO1xcclxcbiAgICAgICAgfVxcclxcblxcclxcbiAgICAgICAgI2Zvcm0gLmJ1dHRvbnMge1xcclxcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgICAgICAgICAgbWFyZ2luOiAxcHggMjNweDtcXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG4gICAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAgICNjb25maWdQcmlvcml0eURhdGVPbk1vYmlsZSB7XFxyXFxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICAgICAgICAgIHBvc2l0aW9uOiBzdGF0aWM7XFxyXFxuXFxyXFxuICAgICAgICB9XFxyXFxuXFxyXFxuXFxyXFxuICAgICAgICAjZm9ybSAub3RoZXItb3B0aW9ucy1vbi1mb3JtcyBidXR0b24sICNwcmlvcml0eSwgI2RhdGVQaWNrZXIge1xcclxcbiAgICAgICAgICAgIHBhZGRpbmc6IDdweDtcXHJcXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA5cHg7XFxyXFxuICAgICAgICB9XFxyXFxuXFxyXFxuICAgICAgICBmb3JtI1Byb2plY3RGb3JtIHtcXHJcXG5cXHJcXG5cXHJcXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjQ3NDhiO1xcclxcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxyXFxuICAgICAgICAgICAgaGVpZ2h0OiAxNTBweDtcXHJcXG4gICAgICAgICAgICBkaXNwbGF5OiBub25lO1xcclxcbiAgICAgICAgICAgIG1heC13aWR0aDogNjkzcHg7XFxyXFxuICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAxcmVtO1xcclxcbiAgICAgICAgICAgIG1hcmdpbjogOXB4IDYxcHg7XFxyXFxuICAgICAgICB9XFxyXFxuXFxyXFxuICAgICAgICBkaXYucHJvamVjdEZvcm1EZXRhaWxzIHtcXHJcXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgICAgICAgICAgIHRvcDogMDtcXHJcXG4gICAgICAgIH1cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAqLyAucHJvamVjdEJ1dHRvbnNDb250YWluZXIge1xcclxcbiAgICAgICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgc2VsZWN0I3ByaW9yaXR5IHtcXHJcXG4gICAgICAgIHBhZGRpbmc6IDRweDtcXHJcXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDlweDtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICBpbnB1dCNkYXRlUGlja2VyIHtcXHJcXG5cXHJcXG4gICAgICAgIHBhZGRpbmc6IDNweDtcXHJcXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDlweDtcXHJcXG4gICAgfVxcclxcblxcclxcblxcclxcbiAgICBAbWVkaWEgKG1pbi13aWR0aDogNzY5cHgpIGFuZCAobWF4LXdpZHRoOiAxMDAwcHgpIHtcXHJcXG5cXHJcXG4gICAgICAgIGJvZHkgbWFpbiB7XFxyXFxuXFxyXFxuICAgICAgICAgICAgZGlzcGxheTogZ3JpZDtcXHJcXG5cXHJcXG4gICAgICAgIH1cXHJcXG5cXHJcXG5cXHJcXG4gICAgICAgIG1haW4gaGVhZGVyIHtcXHJcXG4gICAgICAgICAgICBncmlkLWFyZWE6IDEgLyAyIC8gMiAvIDY7XFxyXFxuXFxyXFxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZkYTRhZjtcXHJcXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICAgICAgICAgIGdhcDogMTBweDtcXHJcXG4gICAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAgIG1haW4gYXNpZGUge1xcclxcblxcclxcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTJlOGYwO1xcclxcbiAgICAgICAgfVxcclxcblxcclxcbiAgICAgICAgbWFpbiAjQ29udGFpbmVyIHtcXHJcXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgICAgICAgICAgZmxleC13cmFwOiB3cmFwO1xcclxcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG4gICAgICAgICAgICB6LWluZGV4OiAxO1xcclxcblxcclxcbiAgICAgICAgfVxcclxcblxcclxcbiAgICAgICAgaGVhZGVyIC5tZW51Q29udHJvbGxlciB7XFxyXFxuXFxyXFxuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XFxyXFxuICAgICAgICAgICAgd2lkdGg6IDQwcHg7XFxyXFxuICAgICAgICAgICAgaGVpZ2h0OiA0MHB4O1xcclxcblxcclxcbiAgICAgICAgfVxcclxcblxcclxcbiAgICAgICAgaGVhZGVyIC5tZW51Q29udHJvbGxlciBzdmcge1xcclxcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgICAgICAgICAgIHdpZHRoOiA0MHB4O1xcclxcbiAgICAgICAgICAgIGhlaWdodDogNDBweDtcXHJcXG4gICAgICAgICAgICBmaWxsOiB3aGl0ZTtcXHJcXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXHJcXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4XFxyXFxuICAgICAgICB9XFxyXFxuXFxyXFxuICAgICAgICAjdXNlcmxpc3QgLmludGlhbFRleHREaXNwbGF5IHtcXHJcXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICAgICAgfVxcclxcblxcclxcbiAgICAgICAgI3VzZXJsaXN0IC5pbnRpYWxUZXh0RGlzcGxheSBwIHtcXHJcXG4gICAgICAgICAgICBmb250LXNpemU6IDEuMnJlbTtcXHJcXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcXHJcXG4gICAgICAgICAgICBtYXJnaW46IDEwcHggMCAwIDA7XFxyXFxuICAgICAgICAgICAgbWF4LXdpZHRoOiA2MDBweDtcXHJcXG4gICAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAgICN1c2VybGlzdCAjYWRkVG9kb0J0bkNvbnRhaW5lciB7XFxyXFxuICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcXHJcXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICAgICAgICAgIGdhcDogNXB4O1xcclxcbiAgICAgICAgICAgIG1hcmdpbjogMjdweCAwIDExcHggMjZweDtcXHJcXG4gICAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAgICN0YXNrIHtcXHJcXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgICAgICAgICAgZ2FwOiA1cHg7XFxyXFxuICAgICAgICAgICAgbWFyZ2luOiAyN3B4IDAgMTFweCAyNnB4O1xcclxcbiAgICAgICAgfVxcclxcblxcclxcbiAgICAgICAgI3VzZXJsaXN0ICNhZGRUb2RvQnRuQ29udGFpbmVyIHN2ZyB7XFxyXFxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2RjMjYyNjtcXHJcXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxyXFxuICAgICAgICAgICAgZmlsbDogd2hpdGU7XFxyXFxuICAgICAgICB9XFxyXFxuXFxyXFxuICAgICAgICAjdXNlcmxpc3QgI2FkZFRvZG9CdG5Db250YWluZXIgOmhvdmVyIHtcXHJcXG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgICAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEuMDkpO1xcclxcbiAgICAgICAgfVxcclxcblxcclxcbiAgICAgICAgI3VzZXJsaXN0ICNhZGRUb2RvQnRuQ29udGFpbmVyIGJ1dHRvbiB7XFxyXFxuICAgICAgICAgICAgYm9yZGVyOiAwO1xcclxcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcXHJcXG4gICAgICAgICAgICBjb2xvcjogI2I5MWMxYztcXHJcXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmhlcml0O1xcclxcbiAgICAgICAgfVxcclxcblxcclxcbiAgICAgICAgI3VzZXJsaXN0ICNhZGRUb2RvQnRuQ29udGFpbmVyIGJ1dHRvbjpob3ZlciB7XFxyXFxuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICAgICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxLjA5KTtcXHJcXG4gICAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAgIGRpdi5saXN0Q29udGFpbmVyIHtcXHJcXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICAgICAgICAgIGdhcDogNXB4O1xcclxcbiAgICAgICAgICAgIG1heC13aWR0aDogNzE0cHg7XFxyXFxuXFxyXFxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG4gICAgICAgICAgICBib3gtc2hhZG93OiAxcHggMHB4IDNweCAwcHg7XFxyXFxuICAgICAgICAgICAgbWFyZ2luOiAxOHB4IDYwcHg7XFxyXFxuICAgICAgICAgICAgcGFkZGluZzogMTVweDtcXHJcXG4gICAgICAgIH1cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG4gICAgICAgIC5pbm5lcl9jb250YWluZXIgI2Zvcm0ge1xcclxcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICM2NDc0OGI7XFxyXFxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG4gICAgICAgICAgICBoZWlnaHQ6IDE1MHB4O1xcclxcbiAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XFxyXFxuICAgICAgICAgICAgbWF4LXdpZHRoOiA3NTBweDtcXHJcXG5cXHJcXG4gICAgICAgICAgICBtYXJnaW46IDE3cHg7XFxyXFxuICAgICAgICB9XFxyXFxuXFxyXFxuXFxyXFxuICAgICAgICAjZm9ybSBkaXYuZm9ybURldGFpbHMge1xcclxcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuXFxyXFxuICAgICAgICAgICAgcGFkZGluZzogOXB4IDIwcHg7XFxyXFxuICAgICAgICAgICAgbWFyZ2luOiAwO1xcclxcbiAgICAgICAgfVxcclxcblxcclxcbiAgICAgICAgLnByaW9yaXR5RGF0ZUxhcmdlU2NyZWVuIHtcXHJcXG4gICAgICAgICAgICBkaXNwbGF5OiBub25lO1xcclxcbiAgICAgICAgfVxcclxcblxcclxcbiAgICAgICAgI2Zvcm0gLmlucHV0cyB7XFxyXFxuICAgICAgICAgICAgbWF4LXdpZHRoOiAxNTBweFxcclxcbiAgICAgICAgfVxcclxcblxcclxcbiAgICAgICAgI2Zvcm0gLmZpcnN0LWlucHV0Q29udGFpbmVyIGlucHV0LCAuUHRpdGxlSW5wdXRDb250YWluZXIgaW5wdXQge1xcclxcbiAgICAgICAgICAgIG1heC13aWR0aDogNDIwcHg7XFxyXFxuICAgICAgICAgICAgbWF4LWhlaWdodDogNjBweDtcXHJcXG4gICAgICAgICAgICBib3JkZXI6IG5vbmU7XFxyXFxuICAgICAgICAgICAgb3V0bGluZTogbm9uZTtcXHJcXG4gICAgICAgICAgICBjb2xvcjogd2hpdGU7XFxyXFxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogaW5oZXJpdDtcXHJcXG4gICAgICAgICAgICBtYXJnaW46IDA7XFxyXFxuICAgICAgICB9XFxyXFxuXFxyXFxuICAgICAgICAjZm9ybSAuc2Vjb25kLWlucHV0Q29udGFpbmVyIGlucHV0LCAuUGRlc2NyaXB0aW9uSW5wdXRDb250YWluZXIgaW5wdXQge1xcclxcbiAgICAgICAgICAgIG1heC13aWR0aDogNDIwcHg7XFxyXFxuICAgICAgICAgICAgbWF4LWhlaWdodDogNjBweDtcXHJcXG4gICAgICAgICAgICBib3JkZXI6IG5vbmU7XFxyXFxuICAgICAgICAgICAgb3V0bGluZTogbm9uZTtcXHJcXG4gICAgICAgICAgICBjb2xvcjogcmdiKDkwLCA3NywgNzcpO1xcclxcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IGluaGVyaXQ7XFxyXFxuICAgICAgICAgICAgbWFyZ2luOiAwO1xcclxcbiAgICAgICAgfVxcclxcblxcclxcblxcclxcbiAgICAgICAgI2Zvcm0gLmJ1dHRvbnMge1xcclxcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgICAgICAgICAgIG1hcmdpbjogMXB4IDMzcHhcXHJcXG4gICAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAgIGZvcm0jUHJvamVjdEZvcm0ge1xcclxcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICM2NDc0OGI7XFxyXFxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG4gICAgICAgICAgICBoZWlnaHQ6IDE1MHB4O1xcclxcbiAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XFxyXFxuICAgICAgICAgICAgbWF4LXdpZHRoOiA2OTNweDtcXHJcXG4gICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDFyZW07XFxyXFxuICAgICAgICAgICAgbWFyZ2luOiA5cHggNjFweDtcXHJcXG5cXHJcXG4gICAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAgIGRpdi5wcm9qZWN0Rm9ybURldGFpbHMge1xcclxcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICAgICAgICAgICAgdG9wOiAwO1xcclxcbiAgICAgICAgfVxcclxcblxcclxcbiAgICAgICAgZGl2LnByaW9yaXR5RGF0ZU9uTGFyZ2VTY3JlZW4ge1xcclxcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgICAgICAgICB0b3A6IDA7XFxyXFxuXFxyXFxuXFxyXFxuICAgICAgICB9XFxyXFxuXFxyXFxuICAgICAgICAucHJvamVjdEJ1dHRvbnNDb250YWluZXIge1xcclxcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgICAgICB9XFxyXFxuXFxyXFxuICAgICAgICAjY29uZmlnUHJpb3JpdHlEYXRlT25Nb2JpbGUge1xcclxcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgICAgICAgICBwb3NpdGlvbjogc3RhdGljO1xcclxcbiAgICAgICAgfVxcclxcblxcclxcbiAgICAgICAgI2Zvcm0gLm90aGVyLW9wdGlvbnMtb24tZm9ybXMgYnV0dG9uLCAjcHJpb3JpdHksICNkYXRlUGlja2VyIHtcXHJcXG4gICAgICAgICAgICBwYWRkaW5nOiA4cHg7XFxyXFxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNnB4O1xcclxcbiAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcXHJcXG4gICAgICAgIH1cXHJcXG5cXHJcXG4gICAgfVxcclxcblxcclxcbiAgICBtYWluIHtcXHJcXG4gICAgICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDE5MHB4IDFmcjtcXHJcXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtcm93czogNzBweCA1NzBweDtcXHJcXG4gICAgfVxcclxcblxcclxcblxcclxcbiAgICBoZWFkZXIge1xcclxcbiAgICAgICAgZ3JpZC1hcmVhOiAxIC8gMiAvIDIgLyA2O1xcclxcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZkYTRhZjtcXHJcXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgYXNpZGUge1xcclxcbiAgICAgICAgZ3JpZC1hcmVhOiAxLyAxLyA0LyAyO1xcclxcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2UyZThmMDtcXHJcXG5cXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAjQ29udGFpbmVyIHtcXHJcXG4gICAgICAgIGdyaWQtYXJlYTogMiAvIDIgLyAzIC8gNDtcXHJcXG5cXHJcXG4gICAgICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDEwMHB4IDY1MHB4IDM1MHB4O1xcclxcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcbiAgICB9XFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuICAgIC5pbm5lcl9jb250YWluZXIge1xcclxcbiAgICAgICAgZ3JpZC1hcmVhOiAxIC8gMiAvIDMgLyAzO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuXFxyXFxuICAgIC5pbnRpYWxUZXh0RGlzcGxheSB7XFxyXFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgICAgIHBhZGRpbmc6IDEwcHg7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLmludGlhbFRleHREaXNwbGF5IHAge1xcclxcbiAgICAgICAgZm9udC1zaXplOiAxLjJyZW07XFxyXFxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgICAgICBmb250LXdlaWdodDogNTAwO1xcclxcbiAgICAgICAgbWFyZ2luOiAxMHB4IDAgMCAwO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5pbnRpYWxUZXh0RGlzcGxheSBpbWcge1xcclxcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgICAgICBoZWlnaHQ6IGF1dG87XFxyXFxuICAgICAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xcclxcbiAgICAgICAgcGFkZGluZzogMjBweDtcXHJcXG5cXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAjYWRkVG9kb0J0bkNvbnRhaW5lciB7XFxyXFxuICAgICAgICBkaXNwbGF5OiBub25lO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5lbXB0eSB7XFxyXFxuICAgICAgICBncmlkLWFyZWE6IDEgLyAzIC8gNSAvIDQ7XFxyXFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjhmOGY4O1xcclxcbiAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuL2ltYWdlcy9Ub2RvLTEuanBnJyk7XFxyXFxuICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcclxcbiAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuICAgIC5tZW51Q29udHJvbGxlciB7XFxyXFxuXFxyXFxuICAgICAgICBkaXNwbGF5OiBub25lO1xcclxcbiAgICAgICAgd2lkdGg6IDQwcHg7XFxyXFxuICAgICAgICBoZWlnaHQ6IDQwcHg7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLmNoZWNrQm94IHtcXHJcXG4gICAgICAgIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcXHJcXG4gICAgICAgIC1tb3otYXBwZWFyYW5jZTogbm9uZTtcXHJcXG4gICAgICAgIHdpZHRoOiAyMHB4O1xcclxcbiAgICAgICAgaGVpZ2h0OiAyMHB4O1xcclxcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcXHJcXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDNweDtcXHJcXG4gICAgICAgIG91dGxpbmU6IG5vbmU7XFxyXFxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuXFxyXFxuICAgIH1cXHJcXG5cXHJcXG5cXHJcXG4gICAgLmNoZWNrQm94OjpiZWZvcmUge1xcclxcbiAgICAgICAgY29udGVudDogXFxcIlxcXCI7XFxyXFxuICAgICAgICBkaXNwbGF5OiBibG9jaztcXHJcXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgICAgIHRvcDogNTAlO1xcclxcbiAgICAgICAgbGVmdDogNTAlO1xcclxcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxyXFxuICAgICAgICBmb250LXNpemU6IDE2cHg7XFxyXFxuICAgICAgICBjb2xvcjogcmdiKDIyLCAyNTIsIDIyKTtcXHJcXG4gICAgICAgIG9wYWNpdHk6IDA7XFxyXFxuICAgICAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuM3MgZWFzZTtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAuY2hlY2tCb3g6aG92ZXI6OmJlZm9yZSB7XFxyXFxuICAgICAgICBjb250ZW50OiBcXFwi4pyTXFxcIjtcXHJcXG4gICAgICAgIG9wYWNpdHk6IDAuNTtcXHJcXG4gICAgfVxcclxcblxcclxcblxcclxcbiAgICBzdmcge1xcclxcbiAgICAgICAgd2lkdGg6IDI1cHg7XFxyXFxuICAgICAgICBoZWlnaHQ6IDI1cHg7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgI3Rhc2sge1xcclxcbiAgICAgICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgICAgICBnYXA6IDVweDtcXHJcXG4gICAgICAgIG1hcmdpbjogMjdweCAwIDExcHggMjZweDtcXHJcXG4gICAgfVxcclxcblxcclxcblxcclxcblxcclxcbiAgICAjdGFzayBzdmcge1xcclxcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2RjMjYyNjtcXHJcXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXHJcXG4gICAgICAgIGZpbGw6IHdoaXRlO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgICN0YXNrIDpob3ZlciB7XFxyXFxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMS4wOSk7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgI3Rhc2sgYnV0dG9uIHtcXHJcXG4gICAgICAgIGJvcmRlcjogMDtcXHJcXG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcXHJcXG4gICAgICAgIGNvbG9yOiAjYjkxYzFjO1xcclxcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogaW5oZXJpdDtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAjdGFzayBidXR0b246aG92ZXIge1xcclxcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEuMDkpO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIGJ1dHRvbi5kZWxldGVUYXNrIHtcXHJcXG4gICAgICAgIHBhZGRpbmc6IDEwcHg7XFxyXFxuICAgICAgICBib3JkZXI6IG5vbmU7XFxyXFxuICAgICAgICBib3JkZXItcmFkaXVzOiA3cHg7XFxyXFxuICAgICAgICBmb250LXNpemU6IDEuMXJlbTtcXHJcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNlMDQ4N2M7XFxyXFxuICAgICAgICBjb2xvcjogd2hpdGU7XFxyXFxuICAgICAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4ycyBlYXNlLW91dDtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICBidXR0b24uZGVsZXRlVGFzazpob3ZlciB7XFxyXFxuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMSlcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICBidXR0b24uZGVsZXRlVGFzazphY3RpdmUge1xcclxcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwLjkpXFxyXFxuICAgIH1cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG4gICAgLmxpc3RDb250YWluZXIge1xcclxcbiAgICAgICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgICAgIGdhcDogNXB4O1xcclxcbiAgICAgICAgbWF4LXdpZHRoOiA3MTRweDtcXHJcXG5cXHJcXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxyXFxuICAgICAgICBib3gtc2hhZG93OiAxcHggMHB4IDNweCAwcHg7XFxyXFxuICAgICAgICBtYXJnaW46IDE4cHggMThweDtcXHJcXG4gICAgICAgIHBhZGRpbmc6IDE1cHg7XFxyXFxuXFxyXFxuXFxyXFxuICAgIH1cXHJcXG5cXHJcXG5cXHJcXG4gICAgLnByaW9yaXR5RGF0ZU9uTGFyZ2VTY3JlZW4ge1xcclxcbiAgICAgICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgICAgICBtYXgtd2lkdGg6IDIwMHB4O1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5wcm9qZWN0QnV0dG9uc0NvbnRhaW5lciB7XFxyXFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5wcm9qZWN0QnV0dG9uc0NvbnRhaW5lciBidXR0b24ge1xcclxcbiAgICAgICAgYm9yZGVyOiBub25lO1xcclxcbiAgICAgICAgYm9yZGVyLXJhZGl1czogN3B4O1xcclxcbiAgICAgICAgcGFkZGluZzogOXB4O1xcclxcbiAgICB9XFxyXFxuXFxyXFxuXFxyXFxuICAgIC5leGNsdWRlZCB7XFxyXFxuICAgICAgICBjb2xvcjogcmVkO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC50YXNrQ29udGFpbmVyIHtcXHJcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgICAgICBmbGV4OiAxO1xcclxcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuICAgIC50YXNrVGl0bGUsIC5uZXdQcm9qZWN0LXRhc2stdGl0bGUsIC5lZGl0YWJsZVNhdmVUYXNrRWwge1xcclxcbiAgICAgICAgbWFyZ2luOiAwO1xcclxcbiAgICAgICAgZm9udC1zaXplOiAxOHB4O1xcclxcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uLWNvbG9yOiByZWQ7XFxyXFxuXFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLnRhc2tEZXNjcmlwdGlvbiwgLm5ld1Byb2plY3QtZGVzY3JpcHRpb24ge1xcclxcbiAgICAgICAgbWFyZ2luOiAwO1xcclxcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xcclxcblxcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC50YXNrUHJpb3JpdHkge1xcclxcbiAgICAgICAgZm9udC1zaXplOiAxOXB4O1xcclxcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNnB4O1xcclxcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzU3M2QzZDtcXHJcXG4gICAgICAgIHBhZGRpbmc6IDZweDtcXHJcXG4gICAgICAgIG1hcmdpbjogMCAwIDdweDtcXHJcXG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcXHJcXG5cXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAuaW5uZXJUYXNrSGFuZGxlciB7XFxyXFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgICAgIG1hcmdpbjogMHB4IDE1cHggMCA0MHB4O1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5pbmJveC1jb250YWluZXIge1xcclxcbiAgICAgICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgICAgICBnYXA6IDVweDtcXHJcXG4gICAgICAgIG1hcmdpbjogMHB4IDAgMCAxNnB4O1xcclxcbiAgICAgICAgaGVpZ2h0OiAyNnB4O1xcclxcbiAgICAgICAgcGFkZGluZzogOXB4O1xcclxcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4IDBweCAwcHggNXB4O1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5pbmJveC1jb250YWluZXI6aG92ZXIge1xcclxcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taG92ZXItY29sb3IpO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuXFxyXFxuICAgIC5pbmJveCB7XFxyXFxuICAgICAgICBmb250LXNpemU6IDIwcHg7XFxyXFxuXFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLmluYm94TGlzdENvbnRhaW5lciB7XFxyXFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICAgICAgZ2FwOiA1cHg7XFxyXFxuXFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLmluYm94VGFza0NvbnRhaW5lciB7XFxyXFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICAgICAgZmxleDogMTtcXHJcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAuaW5ib3hUYXNrVGl0bGUge1xcclxcbiAgICAgICAgbWFyZ2luOiAwO1xcclxcbiAgICAgICAgZm9udC1zaXplOiAxOHB4O1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5pbmJveFRhc2tEZXNjcmlwdGlvbiB7XFxyXFxuICAgICAgICBtYXJnaW46IDA7XFxyXFxuICAgICAgICBmb250LXNpemU6IDE0cHg7XFxyXFxuXFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLmluYm94VGFza1ByaW9yaXR5IHtcXHJcXG4gICAgICAgIG1hcmdpbjogMCAyMHB4IDAgMDtcXHJcXG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcXHJcXG5cXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAuZHVlRGF0ZSB7XFxyXFxuICAgICAgICBtYXJnaW46IDA7XFxyXFxuXFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLmVkaXQge1xcclxcbiAgICAgICAgYm9yZGVyOiBub25lO1xcclxcbiAgICAgICAgb3V0bGluZTogbm9uZTtcXHJcXG4gICAgICAgIGZvbnQtc2l6ZTogMTdweDtcXHJcXG4gICAgICAgIG1heC13aWR0aDogMTEwcHg7XFxyXFxuICAgICAgICBtYXJnaW46IDAgMFxcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgICNwcm9qZWN0cyBoMyB7XFxyXFxuICAgICAgICBtYXJnaW46IDAgMCAwIDEwcHg7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgI2Zvcm0ge1xcclxcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzY0NzQ4YjtcXHJcXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxyXFxuICAgICAgICBoZWlnaHQ6IDE0MHB4O1xcclxcbiAgICAgICAgZGlzcGxheTogbm9uZTtcXHJcXG4gICAgICAgIHBhZGRpbmctbGVmdDogMXJlbTtcXHJcXG4gICAgICAgIG1hcmdpbjogMTBweCAxMHB4IDAgMDtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAuZm9ybURldGFpbHMge1xcclxcbiAgICAgICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICAgICAgICBtYXJnaW46IDEycHggMTVweDtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICBpbnB1dCNkYXRlUGlja2VyIHtcXHJcXG4gICAgICAgIG1heC13aWR0aDogMTE4cHg7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLmJ1dHRvbnMge1xcclxcbiAgICAgICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gICAgICAgIG1hcmdpbjogMXB4IDMzcHhcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAuYnV0dG9ucyBidXR0b24ge1xcclxcbiAgICAgICAgYm9yZGVyOiBub25lO1xcclxcbiAgICAgICAgYm9yZGVyLXJhZGl1czogN3B4O1xcclxcbiAgICAgICAgcGFkZGluZzogN3B4O1xcclxcbiAgICAgICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMnMgZWFzZS1vdXRcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAuYnV0dG9ucyBidXR0b246aG92ZXIge1xcclxcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjA1KVxcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgICNQcm9qZWN0Rm9ybSB7XFxyXFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjQ3NDhiO1xcclxcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG4gICAgICAgIGhlaWdodDogMTUwcHg7XFxyXFxuICAgICAgICBkaXNwbGF5OiBub25lO1xcclxcbiAgICAgICAgcGFkZGluZzogMTBweDtcXHJcXG4gICAgICAgIG1hcmdpbjogMTVweCAxNXB4IDAgMTdweDtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAucHJvamVjdEZvcm1EZXRhaWxzIHtcXHJcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgICAgICAgdG9wOiAwO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuXFxyXFxuICAgIC5maXJzdC1pbnB1dENvbnRhaW5lciBpbnB1dCwgLlB0aXRsZUlucHV0Q29udGFpbmVyIGlucHV0IHtcXHJcXG4gICAgICAgIG1heC13aWR0aDogNjAwcHg7XFxyXFxuICAgICAgICBoZWlnaHQ6IDI1cHg7XFxyXFxuICAgICAgICBib3JkZXI6IG5vbmU7XFxyXFxuICAgICAgICBvdXRsaW5lOiBub25lO1xcclxcbiAgICAgICAgY29sb3I6IHdoaXRlO1xcclxcbiAgICAgICAgbWFyZ2luOiAxMHB4IDAgMCAwO1xcclxcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogaW5oZXJpdDtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAudGFzay10aXRsZSwgLmRlc2NyaXB0aW9uIHtcXHJcXG4gICAgICAgIHdpZHRoOiAzNTBweDtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAuZmlyc3QtaW5wdXRDb250YWluZXIgaW5wdXQ6OnBsYWNlaG9sZGVyLCAuUHRpdGxlSW5wdXRDb250YWluZXIgaW5wdXQ6OnBsYWNlaG9sZGVyIHtcXHJcXG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcXHJcXG4gICAgICAgIHBhZGRpbmc6IDAgMTBweDtcXHJcXG4gICAgICAgIG9wYWNpdHk6IDE7XFxyXFxuXFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLnNlY29uZC1pbnB1dENvbnRhaW5lciBpbnB1dCwgLlBkZXNjcmlwdGlvbklucHV0Q29udGFpbmVyIGlucHV0IHtcXHJcXG4gICAgICAgIG1heC13aWR0aDogNjAwcHg7XFxyXFxuICAgICAgICBoZWlnaHQ6IDI1cHg7XFxyXFxuICAgICAgICBib3JkZXI6IG5vbmU7XFxyXFxuICAgICAgICBvdXRsaW5lOiBub25lO1xcclxcbiAgICAgICAgY29sb3I6IHdoaXRlO1xcclxcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogaW5oZXJpdDtcXHJcXG4gICAgICAgIG1hcmdpbjogMDtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAuc2Vjb25kLWlucHV0Q29udGFpbmVyIGlucHV0OjpwbGFjZWhvbGRlciwgLlBkZXNjcmlwdGlvbklucHV0Q29udGFpbmVyIGlucHV0OjpwbGFjZWhvbGRlciB7XFxyXFxuICAgICAgICBwYWRkaW5nOiAwIDEwcHg7XFxyXFxuICAgICAgICBjb2xvcjogd2hpdGU7XFxyXFxuICAgICAgICBvcGFjaXR5OiAxO1xcclxcblxcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5maXJzdC1pbnB1dENvbnRhaW5lciwgLnNlY29uZC1pbnB1dENvbnRhaW5lciB7XFxyXFxuICAgICAgICBtYXJnaW46IDEwcHggMCAwIDA7XFxyXFxuICAgICAgICBmb250LXNpemU6IDFyZW07XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLm90aGVyLW9wdGlvbnMtb24tZm9ybXMsIC5mb290ZXIge31cXHJcXG5cXHJcXG4gICAgLnN1Ym1pdEJ0bjphY3RpdmUge1xcclxcbiAgICAgICAgdHJhbnNmb3JtOiBhY3RpdmUgc2NhbGUoMS4xKTtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAub3RoZXItb3B0aW9ucy1vbi1mb3JtcyBidXR0b24sICNwcmlvcml0eSwgaW5wdXQjZGF0ZVBpY2tlciB7XFxyXFxuICAgICAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gLjNzIGVhc2UtaW47XFxyXFxuICAgICAgICBwYWRkaW5nOiA3cHg7XFxyXFxuICAgICAgICBib3JkZXItcmFkaXVzOiA3cHg7XFxyXFxuICAgICAgICBib3JkZXI6IG5vbmU7XFxyXFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDdjNGRkO1xcclxcbiAgICAgICAgY29sb3I6IHdoaXRlO1xcclxcbiAgICAgICAgZm9udC1zaXplOiAxNXB4O1xcclxcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAjcHJpb3JpdHkge1xcclxcbiAgICAgICAgbWFyZ2luOiAxMHB4IDAgOHB4IDA7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgI3Byb2plY3RQcmlvcml0eSwgLmZvb3RlciB7XFxyXFxuICAgICAgICBwYWRkaW5nOiA3cHg7XFxyXFxuICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxuICAgICAgICBtYXJnaW46IDAgNHB4IDVweCAwO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5hZGRQcm9qZWN0c0NvbnRhaW5lciB7XFxyXFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcclxcblxcclxcbiAgICAgICAgbWFyZ2luOiAwIDAgMCAyMHB4O1xcclxcbiAgICAgICAgcGFkZGluZzogN3B4O1xcclxcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgICAgIGdhcDogMTBweDtcXHJcXG4gICAgICAgIGhlaWdodDogMjVweDtcXHJcXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDVweCAwcHggMHB4IDVweDtcXHJcXG5cXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAuYWRkUHJvamVjdHNDb250YWluZXI6aG92ZXIge1xcclxcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taG92ZXItY29sb3IpO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5hZGRQcm9qZWN0c0NvbnRhaW5lciBzdmcge1xcclxcbiAgICAgICAgd2lkdGg6IDI1cHg7XFxyXFxuICAgICAgICBoZWlnaHQ6IDI1cHg7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgI2FkZE5ld1Byb2plY3RFbCB7XFxyXFxuICAgICAgICBtYXJnaW46IDA7XFxyXFxuICAgICAgICBmb250LXNpemU6IDE5cHg7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG5cXHJcXG4gICAgLnByb2plY3RfdGV4dCB7XFxyXFxuICAgICAgICBtYXJnaW46IDAgMCAxMHB4IDE3cHg7XFxyXFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICAgICAgYWxpZ24tc2VsZjogY2VudGVyO1xcclxcbiAgICAgICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxyXFxuICAgICAgICBwYWRkaW5nOiA5cHg7XFxyXFxuICAgICAgICBib3JkZXItcmFkaXVzOiA1cHggMHB4IDBweCA1cHg7XFxyXFxuXFxyXFxuXFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLnByb2plY3RfdGV4dDpob3ZlciB7XFxyXFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ob3Zlci1jb2xvcik7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG4gICAgI3Byb2plY3QtZHJvcGRvd24ge1xcclxcbiAgICAgICAgYm9yZGVyOiAwO1xcclxcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogaW5oZXJpdDtcXHJcXG4gICAgICAgIG1hcmdpbjogNXB4IDAgMCAxN3B4O1xcclxcbiAgICAgICAgZm9udC1zaXplOiAxOHB4O1xcclxcbiAgICAgICAgZm9udC13ZWlnaHQ6IDU1MDtcXHJcXG4gICAgICAgIHBhZGRpbmc6IDhweDtcXHJcXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDVweCAwcHggMHB4IDVweDtcXHJcXG4gICAgICAgIG1heC13aWR0aDogMTYwcHg7XFxyXFxuXFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgI3Byb2plY3QtZHJvcGRvd246aG92ZXIge1xcclxcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taG92ZXItY29sb3IpO1xcclxcblxcclxcbiAgICB9XFxyXFxuXFxyXFxuXFxyXFxuICAgICNwcm9qZWN0LWRyb3Bkb3duOmZvY3VzIHtcXHJcXG4gICAgICAgIGJvcmRlcjogbm9uZTtcXHJcXG4gICAgICAgIG91dGxpbmU6IG5vbmU7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgI25ld1Byb2plY3RzRm9ybUNvbnRhaW5lckVsIHtcXHJcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgICAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxyXFxuXFxyXFxuXFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgI1Byb2plY3RzRm9ybU5hbWVDb250YWluZXJFbCB7XFxyXFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICAgICAganVzdGlmeS1pdGVtczogY2VudGVyO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuXFxyXFxuICAgIC5pbnB1dE5ld3Byb2plY3RGb3JtTmFtZSB7XFxyXFxuICAgICAgICBkaXNwbGF5OiBub25lO1xcclxcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2NlZTNlMztcXHJcXG4gICAgICAgIG1heC13aWR0aDogNDAwcHg7XFxyXFxuICAgICAgICBtYXgtaGVpZ2h0OiAzMDBweDtcXHJcXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxyXFxuICAgICAgICBwYWRkaW5nOiA0NnB4O1xcclxcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICAgICAgbWFyZ2luOiA2MHB4IDAgMCAwO1xcclxcbiAgICAgICAgYm94LXNoYWRvdzogMHB4IDlweCAzcHggMHB4O1xcclxcbiAgICB9XFxyXFxuXFxyXFxuXFxyXFxuICAgIC5pbnB1dE5ld3Byb2plY3RGb3JtTmFtZSBoMiB7XFxyXFxuICAgICAgICBtYXJnaW46IDAgMCAxMHB4IDA7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG5cXHJcXG4gICAgLmlucHV0TmV3UHJvamVjdE5hbWUge1xcclxcbiAgICAgICAgbWF4LXdpZHRoOiAzNTBweDtcXHJcXG4gICAgICAgIG1heC1oZWlnaHQ6IDM1cHg7XFxyXFxuICAgICAgICBwYWRkaW5nOiAxN3B4O1xcclxcbiAgICAgICAgYm9yZGVyOiBub25lO1xcclxcbiAgICAgICAgYm9yZGVyLXJhZGl1czogN3B4O1xcclxcbiAgICAgICAgZm9udC1zaXplOiAxOXB4O1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIGlucHV0LlNhdmVQcm9qZWN0TmFtZSB7XFxyXFxuICAgICAgICBwYWRkaW5nOiA5cHg7XFxyXFxuICAgICAgICBib3JkZXI6IG5vbmU7XFxyXFxuICAgICAgICBib3JkZXItcmFkaXVzOiA4cHg7XFxyXFxuICAgICAgICBtYXgtd2lkdGg6IDEwMHB4O1xcclxcbiAgICAgICAgaGVpZ2h0OiA0MHB4O1xcclxcbiAgICAgICAgZm9udC1zaXplOiAxOXB4O1xcclxcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0MCwgNTksIDEzNCk7XFxyXFxuICAgICAgICBjb2xvcjogd2hpdGU7XFxyXFxuXFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLnByb2plY3ROYW1lU2F2ZXJCdG5Db250YWluZXIge1xcclxcbiAgICAgICAgbWFyZ2luOiAxMHB4IDA7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLnByb2plY3ROYW1lU2F2ZXJCdG5Db250YWluZXIgYnV0dG9uIHtcXHJcXG4gICAgICAgIHBhZGRpbmc6IDlweDtcXHJcXG4gICAgICAgIGJvcmRlcjogbm9uZTtcXHJcXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDhweDtcXHJcXG4gICAgICAgIHdpZHRoOiAxMDBweDtcXHJcXG4gICAgICAgIGhlaWdodDogNDBweDtcXHJcXG4gICAgICAgIGZvbnQtc2l6ZTogMTlweDtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAjUHJvamVjdHNGb3JtTmFtZUNvbnRhaW5lckVsIC5DYW5jZWwge1xcclxcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogZ3JleTtcXHJcXG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAjbmV3UHJvamVjdFRhc2tzQ29udGFpbmVyIHtcXHJcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuXFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgI25ld1Byb2plY3RUYXNrc0lubmVyQ29udGFpbmVyIHtcXHJcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgICAgICBnYXA6IDVweDtcXHJcXG4gICAgICAgIG1hcmdpbjogMTBweDtcXHJcXG4gICAgICAgIGJveC1zaGFkb3c6ICM1YzU1NTUgMXB4IDNweCAzcHggMXB4O1xcclxcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG4gICAgICAgIHBhZGRpbmc6IDEwcHg7XFxyXFxuICAgICAgICB3aWR0aDogOTVweDtcXHJcXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gICAgICAgIGxlZnQ6IDI1MHB4O1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIHN2Zy5hZGRUYXNrIHtcXHJcXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXHJcXG4gICAgICAgIGZpbGw6IHdoZWF0O1xcclxcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5uZXdQcm9qZWN0QWRkQnRuIHtcXHJcXG4gICAgICAgIGJvcmRlcjogMDtcXHJcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IGluaGVyaXQ7XFxyXFxuICAgICAgICBmb250LXdlaWdodDogNTAwO1xcclxcblxcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgICNQcm9qZWN0ZGF0ZVBpY2tlciB7XFxyXFxuICAgICAgICBwYWRkaW5nOiAycHg7XFxyXFxuICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxuICAgICAgICBib3JkZXI6IG5vbmU7XFxyXFxuICAgICAgICBoZWlnaHQ6IDMycHg7XFxyXFxuXFxyXFxuICAgIH1cXHJcXG5cXHJcXG5cXHJcXG4gICAgI3N1Ym1pdEJ0bkZvclByb2plY3Qge1xcclxcbiAgICAgICAgcGFkZGluZzogN3B4O1xcclxcbiAgICAgICAgYm9yZGVyLXJhZGl1czogOXB4O1xcclxcblxcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgICNzdWJtaXRCdG5Gb3JQcm9qZWN0OmFjdGl2ZSB7XFxyXFxuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMSlcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAuY2FuY2VsRm9yUHJvamVjdEJ0biB7XFxyXFxuICAgICAgICBwYWRkaW5nOiA3cHg7XFxyXFxuICAgICAgICBib3JkZXItcmFkaXVzOiA5cHg7XFxyXFxuICAgIH1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpO1xuXG4gIC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9XG5cbiAgLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xub3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsIi8vIGltcG9ydCB7IG15UHJvamVjdHMgfSBmcm9tICcuL2RvbS1FbCdcclxuaW1wb3J0IHsgZGlzcGxheUZvcm0gfSBmcm9tIFwiLi9kb20tRWxcIjtcclxuLy8gaW1wb3J0IHsgZWRpdFRhc2sgfSBmcm9tIFwiLi9sb2dpY3NcIjtcclxuXHJcbmNvbnN0IG15UHJvamVjdHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Byb2plY3RzIGgzXCIpO1xyXG5jb25zdCBzY3JlZW5Db250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI0NvbnRhaW5lclwiKTtcclxuY29uc3QgdXNlckxpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3VzZXJsaXN0XCIpO1xyXG5jb25zdCBhZGRQcm9qZWN0c0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYWRkUHJvamVjdHNDb250YWluZXJcIik7XHJcbmNvbnN0IG5ld1Byb2plY3RzRm9ybUNvbnRhaW5lckVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcclxuICBcIiNuZXdQcm9qZWN0c0Zvcm1Db250YWluZXJFbFwiXHJcbik7XHJcbmV4cG9ydCBjb25zdCBpbnB1dE5ld3Byb2plY3RGb3JtTmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXHJcbiAgXCIuaW5wdXROZXdwcm9qZWN0Rm9ybU5hbWVcIlxyXG4pO1xyXG5jb25zdCBuZXdQcm9qZWN0TmFtZVJlcXVlc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm5ld1Byb2plY3ROYW1lUmVxdWVzdFwiKTtcclxuY29uc3QgbmV3UHJvamVjdE5hbWVUaXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaGVhZGVyVGV4dENvbnRlbnRcIik7XHJcbmNvbnN0IFNhdmVQcm9qZWN0TmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuU2F2ZVByb2plY3ROYW1lXCIpO1xyXG5jb25zdCBuZXdQcm9qZWN0VGFzayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubmV3UHJvamVjdFRhc2tcIik7XHJcbmNvbnN0IG5ld1Byb2plY3RUYXNrc0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbmNvbnN0IG5ld1Byb2plY3RUYXNrc0lubmVyQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuXHJcbmNvbnN0IG5ld1Byb2plY3RBZGRCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xyXG5jb25zdCBzdWJtaXRUYXNrQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNzdWJtaXRCdG5Gb3JQcm9qZWN0XCIpO1xyXG5jb25zdCBjYW5jZWxUYXNrQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jYW5jZWxGb3JQcm9qZWN0QnRuXCIpO1xyXG5jb25zdCBkaXNwbGF5UHJvamVjdFRvZG9zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNkaXNwbGF5UHJvamVjdFRvZG9zXCIpO1xyXG5cclxubGV0IHByb2plY3RGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNQcm9qZWN0Rm9ybVwiKTtcclxubGV0IGZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2Zvcm1cIik7XHJcbmxldCBpbnB1dEZpZWxkRWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnBUaXRsZVwiKTtcclxubGV0IGRlc2NyaXB0aW9uRmllbGRFbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucERlc2NyaXB0aW9uXCIpO1xyXG5sZXQgc2VsZWN0UHJpb3JpdHlFbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcHJvamVjdFByaW9yaXR5XCIpO1xyXG5sZXQgZHVlRGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjUHJvamVjdGRhdGVQaWNrZXJcIik7XHJcbmNvbnN0IHByb2plY3REcm9wRG93biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcHJvamVjdC1kcm9wZG93blwiKTtcclxubGV0IHNlbGVjdGVkUHJvamVjdCA9IHByb2plY3REcm9wRG93bi52YWx1ZTtcclxuXHJcbmNvbnN0IG5ld1Byb2plY3RGb3JtTmFtZUJ0bkVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcclxuICBcIi5uZXdQcm9qZWN0Rm9ybU5hbWVCdG5FbFwiXHJcbik7XHJcblxyXG5jbGFzcyBnZXRMaXN0IHtcclxuICBjb25zdHJ1Y3Rvcih0aXRsZSwgZGVzY3JpcHRpb24sIHByaW9yaXR5LCBkYXRlKSB7XHJcbiAgICB0aGlzLnRpdGxlID0gdGl0bGU7XHJcbiAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XHJcbiAgICB0aGlzLnByaW9yaXR5ID0gcHJpb3JpdHk7XHJcbiAgICB0aGlzLmRhdGUgPSBkYXRlO1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gZGlzcGxheVJlcXVlc3ROZXdQcm9qZWN0Rm9ybU5hbWUoKSB7XHJcbiAgaWYgKHVzZXJMaXN0LnRleHRDb250ZW50KSB7XHJcbiAgICB1c2VyTGlzdC50ZXh0Q29udGVudCA9IFwiXCI7XHJcbiAgfVxyXG5cclxuICBpZiAoZm9ybS5zdHlsZS5kaXNwbGF5ID09PSBcImJsb2NrXCIpIHtcclxuICAgIGZvcm0uc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG4gIH1cclxuICBpZiAocHJvamVjdEZvcm0uc3R5bGUuZGlzcGxheSA9PT0gXCJibG9ja1wiKSB7XHJcbiAgICBwcm9qZWN0Rm9ybS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbiAgfVxyXG5cclxuICBpbnB1dE5ld3Byb2plY3RGb3JtTmFtZS5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xyXG4gIHJldHVybiB7IGlucHV0TmV3cHJvamVjdEZvcm1OYW1lIH07XHJcbn1cclxuYWRkUHJvamVjdHNDb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcihcclxuICBcImNsaWNrXCIsXHJcbiAgZGlzcGxheVJlcXVlc3ROZXdQcm9qZWN0Rm9ybU5hbWVcclxuKTtcclxuXHJcbi8vR2V0IE5ldyBQcm9qZWN0IE5hbWUgRnVuY3Rpb24uXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRuZXdQcm9qZWN0SW5wdXROYW1lKCkge1xyXG4gIGNvbnN0IGlucHV0TmV3UHJvamVjdE5hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmlucHV0TmV3UHJvamVjdE5hbWVcIik7XHJcbiAgY29uc3QgaW5wdXROZXdQcm9qZWN0TmFtZVZhbHVlID0gaW5wdXROZXdQcm9qZWN0TmFtZS52YWx1ZTtcclxuICBuZXdQcm9qZWN0TmFtZVRpdGxlLnRleHRDb250ZW50ID0gaW5wdXROZXdQcm9qZWN0TmFtZVZhbHVlO1xyXG5cclxuICAvLyBwcm9qZWN0cy5wdXNoKGlucHV0TmV3UHJvamVjdE5hbWVWYWx1ZSlcclxuXHJcbiAgaW5wdXROZXdQcm9qZWN0TmFtZS52YWx1ZSA9IFwiXCI7XHJcblxyXG4gIGFkZFByb2plY3ROYW1lKGlucHV0TmV3UHJvamVjdE5hbWVWYWx1ZSk7XHJcblxyXG4gIGlmIChpbnB1dE5ld3Byb2plY3RGb3JtTmFtZSkge1xyXG4gICAgaW5wdXROZXdwcm9qZWN0Rm9ybU5hbWUuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG4gIH0gZWxzZSB7XHJcbiAgICBpbnB1dE5ld3Byb2plY3RGb3JtTmFtZS5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIHsgaW5wdXROZXdQcm9qZWN0TmFtZVZhbHVlIH07XHJcbn1cclxuXHJcbi8vQ2FuY2VsIHByb2plY3QgZm9ybSBuYW1lIHJlcXVlc3RcclxubmV3UHJvamVjdEZvcm1OYW1lQnRuRWwuYWRkRXZlbnRMaXN0ZW5lcihcclxuICBcImNsaWNrXCIsXHJcbiAgKCkgPT4gKGlucHV0TmV3cHJvamVjdEZvcm1OYW1lLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIilcclxuKTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVOZXdQcm9qZWN0VGFza0J0bigpIHtcclxuICBuZXdQcm9qZWN0VGFza3NDb250YWluZXIuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJuZXdQcm9qZWN0VGFza3NDb250YWluZXJcIik7XHJcbiAgbmV3UHJvamVjdFRhc2tzSW5uZXJDb250YWluZXIuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJuZXdQcm9qZWN0VGFza3NJbm5lckNvbnRhaW5lclwiKTtcclxuXHJcbiAgbmV3UHJvamVjdEFkZEJ0bi50ZXh0Q29udGVudCA9IFwiQWRkIHRhc2tcIjtcclxuXHJcbiAgLy8gQ3JlYXRlIHRoZSBTVkcgZWxlbWVudFxyXG4gIGNvbnN0IHN2Z05hbWVzcGFjZSA9IFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIjtcclxuICBjb25zdCBzdmdFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKHN2Z05hbWVzcGFjZSwgXCJzdmdcIik7XHJcblxyXG4gIC8vIFNldCB0aGUgY2xhc3MgYW5kIHZpZXdCb3ggYXR0cmlidXRlc1xyXG4gIHN2Z0VsZW1lbnQuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJhZGRUYXNrXCIpO1xyXG4gIHN2Z0VsZW1lbnQuc2V0QXR0cmlidXRlKFwidmlld0JveFwiLCBcIjAgMCAyNCAyNFwiKTtcclxuXHJcbiAgLy8gQ3JlYXRlIHRoZSB0aXRsZSBlbGVtZW50XHJcbiAgY29uc3QgdGl0bGVFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKHN2Z05hbWVzcGFjZSwgXCJ0aXRsZVwiKTtcclxuICB0aXRsZUVsZW1lbnQudGV4dENvbnRlbnQgPSBcInBsdXNcIjtcclxuICBzdmdFbGVtZW50LmFwcGVuZENoaWxkKHRpdGxlRWxlbWVudCk7XHJcblxyXG4gIC8vIENyZWF0ZSB0aGUgcGF0aCBlbGVtZW50XHJcbiAgY29uc3QgcGF0aEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoc3ZnTmFtZXNwYWNlLCBcInBhdGhcIik7XHJcbiAgcGF0aEVsZW1lbnQuc2V0QXR0cmlidXRlKFwiZFwiLCBcIk0xOSwxM0gxM1YxOUgxMVYxM0g1VjExSDExVjVIMTNWMTFIMTlWMTNaXCIpO1xyXG4gIHN2Z0VsZW1lbnQuYXBwZW5kQ2hpbGQocGF0aEVsZW1lbnQpO1xyXG5cclxuICBuZXdQcm9qZWN0QWRkQnRuLmNsYXNzTGlzdC5hZGQoXCJuZXdQcm9qZWN0QWRkQnRuXCIpO1xyXG5cclxuICBpZiAobmV3UHJvamVjdFRhc2tzSW5uZXJDb250YWluZXIuY29udGFpbnMoc3ZnRWxlbWVudCkpIHtcclxuICBuZXdQcm9qZWN0VGFza3NJbm5lckNvbnRhaW5lci5yZW1vdmVDaGlsZChzdmdFbGVtZW50KTtcclxuICBcclxuICB9XHJcbiBcclxuICBuZXdQcm9qZWN0VGFza3NJbm5lckNvbnRhaW5lci5hcHBlbmRDaGlsZChzdmdFbGVtZW50KTtcclxuICBuZXdQcm9qZWN0VGFza3NJbm5lckNvbnRhaW5lci5hcHBlbmRDaGlsZChuZXdQcm9qZWN0QWRkQnRuKTtcclxuICBuZXdQcm9qZWN0VGFza3NDb250YWluZXIuYXBwZW5kQ2hpbGQobmV3UHJvamVjdFRhc2tzSW5uZXJDb250YWluZXIpO1xyXG5cclxuICBuZXdQcm9qZWN0c0Zvcm1Db250YWluZXJFbC5hcHBlbmRDaGlsZChuZXdQcm9qZWN0VGFza3NDb250YWluZXIpO1xyXG5cclxuICByZXR1cm4gbmV3UHJvamVjdHNGb3JtQ29udGFpbmVyRWw7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGRpc3BsYXlOZXdQcm9qZWN0Rm9ybSgpIHtcclxuICBwcm9qZWN0Rm9ybS5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xyXG59XHJcblxyXG4vLyBBZGQgcHJvamVjdCBuYW1lIHRvIGxvY2FsIHN0b3JhZ2UgYW5kICBwb3B1bGF0ZSBwcm9qZWN0IGRyb3AgZG93blxyXG5mdW5jdGlvbiBhZGRQcm9qZWN0TmFtZShwcm9qZWN0TmFtZSkge1xyXG4gIGxldCBwcm9qZWN0cyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJwcm9qZWN0c1wiKSkgfHwgW107XHJcbiAgcHJvamVjdHMucHVzaChwcm9qZWN0TmFtZSk7XHJcbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJwcm9qZWN0c1wiLCBKU09OLnN0cmluZ2lmeShwcm9qZWN0cykpO1xyXG4gIGZpbGxQcm9qZWN0RHJvcERvd24oKTtcclxuICByZXR1cm4geyBwcm9qZWN0TmFtZSB9O1xyXG59XHJcblxyXG4vLyBQb3B1bGF0ZSBwcm9qZWN0IGRyb3AtZG93blxyXG5mdW5jdGlvbiBmaWxsUHJvamVjdERyb3BEb3duKCkge1xyXG4gIHByb2plY3REcm9wRG93bi50ZXh0Q29udGVudCA9IFwiXCI7XHJcbiAgbGV0IHByb2plY3RzID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInByb2plY3RzXCIpKSB8fCBbXTtcclxuXHJcbiAgaWYgKHByb2plY3RzKSB7XHJcbiAgICBjb25zdCBvcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xyXG4gICAgb3B0aW9uLnZhbHVlID0gXCJcIjtcclxuICAgIG9wdGlvbi50ZXh0Q29udGVudCA9IFwiU2VsZWN0IHByb2plY3RcIjtcclxuICAgIHByb2plY3REcm9wRG93bi5hcHBlbmRDaGlsZChvcHRpb24pO1xyXG5cclxuICAgIHByb2plY3RzPy5mb3JFYWNoKChwcm9qZWN0KSA9PiB7XHJcbiAgICAgIGNvbnN0IG9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7XHJcbiAgICAgIG9wdGlvbi52YWx1ZSA9IHByb2plY3Q7XHJcbiAgICAgIG9wdGlvbi50ZXh0Q29udGVudCA9IHByb2plY3Q7XHJcbiAgICAgIHByb2plY3REcm9wRG93bi5hcHBlbmRDaGlsZChvcHRpb24pO1xyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcbmZpbGxQcm9qZWN0RHJvcERvd24oKTtcclxuXHJcbi8vIERpc3BsYXkgZWFjaCBwcm9qZWN0J3MgdG8tZG9zIHdoZW4gc2VsZWN0ZWRcclxucHJvamVjdERyb3BEb3duLmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgKCkgPT4ge1xyXG4gIHVzZXJMaXN0LnRleHRDb250ZW50ID0gXCJcIjtcclxuICBkaXNwbGF5UHJvamVjdFRvZG9zLnRleHRDb250ZW50ID0gXCJcIjtcclxuICBuZXdQcm9qZWN0VGFza3NDb250YWluZXIuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG5cclxuICAvL0NsZWFyIHRoZSBhZGQgdGFzayBidXR0b24gY29udGFpbmVyIGVhY2ggdGltZSB1c2VyIHNlbGVjdCBhIHByb2plY3RcclxuICBuZXdQcm9qZWN0VGFza3NDb250YWluZXIudGV4dENvbnRlbnQgPSBcIlwiO1xyXG5cclxuICAvL0Rpc3BsYXkgbm8gZm9ybSBpZiBhbnkgZm9ybSBpcyBpbiBibG9ja1xyXG4gIGlmIChmb3JtLnN0eWxlLmRpc3BsYXkgPT09IFwiYmxvY2tcIikge1xyXG4gICAgZm9ybS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbiAgfVxyXG5cclxuICBzZWxlY3RlZFByb2plY3QgPSBwcm9qZWN0RHJvcERvd24udmFsdWU7XHJcbiAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImhlYWRlciBoMVwiKTtcclxuICBoZWFkZXIudGV4dENvbnRlbnQgPSBzZWxlY3RlZFByb2plY3Q7XHJcbiAgLy8gZ2V0U2VsZWN0ZWRUb2RvcyhzZWxlY3RlZFByb2plY3QpO1xyXG4gIGRpc3BsYXlUb0Rvc0ZvckN1cnJlbnRQcm9qZWN0KHNlbGVjdGVkUHJvamVjdCk7XHJcbiAgLy8gZGlzcGxheVNlbGVjdGVkVG9Eb3Moc2VsZWN0ZWRQcm9qZWN0KTtcclxuICBkaXNwbGF5TmV3UHJvamVjdEZvcm0oKTtcclxufSk7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0VXNlclRvZG8oKSB7XHJcbiAgbGV0IHRhc2tJbnB1dFZhbHVlID0gaW5wdXRGaWVsZEVsLnZhbHVlO1xyXG4gIGxldCBkZXNjcmlwdGlvbklucHV0VmFsdWUgPSBkZXNjcmlwdGlvbkZpZWxkRWwudmFsdWU7XHJcbiAgbGV0IHByaW9yaXR5VmFsdWVFbCA9IHNlbGVjdFByaW9yaXR5RWwudmFsdWU7XHJcbiAgbGV0IGR1ZURhdGVWYWx1ZUVsID0gZHVlRGF0ZS52YWx1ZTtcclxuXHJcbiAgaWYgKHRhc2tJbnB1dFZhbHVlLmxlbmd0aCA+IDM1KSB7XHJcbiAgICByZXR1cm4gYWxlcnQoXHJcbiAgICAgIGBJbnB1dCBzaG91bGQgYmUgbGVzcyBvciBlcXVhbCB0byB0aGUgMzUgY2hhcmFjdGVycywgeW91IGhhdmUgZW50ZXJlZCAke3Rhc2tJbnB1dFZhbHVlLmxlbmd0aH0gY2hhcmFjdGVyc2BcclxuICAgICk7XHJcbiAgfSBlbHNlIGlmIChkZXNjcmlwdGlvbklucHV0VmFsdWUubGVuZ3RoID4gNDApIHtcclxuICAgIHJldHVybiBhbGVydChcclxuICAgICAgYERlc2NyaXB0aW9uIHNob3VsZCBiZSBsZXNzIG9yIGVxdWFsIHRvIHRoZSA0MCBjaGFyYWN0ZXJzLCB5b3UgaGF2ZSBlbnRlcmVkICR7ZGVzY3JpcHRpb25JbnB1dFZhbHVlLmxlbmd0aH0gY2hhcmFjdGVyc2BcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICBjb25zdCBkYXRlID0gbmV3IERhdGUoZHVlRGF0ZVZhbHVlRWwpO1xyXG5cclxuICBjb25zdCBvcHRpb25zID0ge1xyXG4gICAgd2Vla2RheTogXCJsb25nXCIsXHJcbiAgICB5ZWFyOiBcIm51bWVyaWNcIixcclxuICAgIG1vbnRoOiBcInNob3J0XCIsXHJcbiAgICBkYXk6IFwibnVtZXJpY1wiLFxyXG4gIH07XHJcblxyXG4gIGNvbnN0IGRheU9mV2VlayA9IGRhdGUudG9Mb2NhbGVEYXRlU3RyaW5nKFwiZW4tVXNcIiwgb3B0aW9ucyk7XHJcblxyXG4gIGxldCB1c2VyVG9kbyA9IG5ldyBnZXRMaXN0KFxyXG4gICAgdGFza0lucHV0VmFsdWUsXHJcbiAgICBkZXNjcmlwdGlvbklucHV0VmFsdWUsXHJcbiAgICBwcmlvcml0eVZhbHVlRWwsXHJcbiAgICBkYXlPZldlZWtcclxuICApO1xyXG5cclxuICByZXR1cm4gdXNlclRvZG87XHJcbn1cclxuXHJcbi8vIENsZWFyIGZvcm0gaW5wdXRcclxuZnVuY3Rpb24gY2xlYXJJbnB1dEZvcm0oKSB7XHJcbiAgaW5wdXRGaWVsZEVsLnZhbHVlID0gXCJcIjtcclxuICBkZXNjcmlwdGlvbkZpZWxkRWwudmFsdWUgPSBcIlwiO1xyXG4gIHNlbGVjdFByaW9yaXR5RWwudmFsdWUgPSBcIlNlbGVjdCBQcmlvcml0eVwiO1xyXG4gIGR1ZURhdGUudmFsdWUgPSBcIlwiO1xyXG59XHJcblxyXG5sZXQgY3VycmVudFByb2plY3ROYW1lID0gW107XHJcbmxldCB0b0RvID0gW107XHJcbmZ1bmN0aW9uIGFkZE5ld1Byb2plY3RUb2RvcygpIHtcclxuICBjdXJyZW50UHJvamVjdE5hbWUgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwicHJvamVjdHNcIikpIHx8IFtdO1xyXG4gIGNvbnN0IGN1cnJlbnRQcm9qZWN0ID0gY3VycmVudFByb2plY3ROYW1lW2N1cnJlbnRQcm9qZWN0TmFtZS5sZW5ndGggLSAxXTtcclxuICBjb25zb2xlLmxvZyhjdXJyZW50UHJvamVjdE5hbWUpO1xyXG5cclxuICAvLyBpZiAocHJvamVjdEZvcm0uc3R5bGUuZGlzcGxheSA9PT0gXCJibG9ja1wiKSB7XHJcbiAgLy8gc2VsZWN0ZWRQcm9qZWN0ID0gY3VycmVudFByb2plY3Q7XHJcblxyXG4gIGNvbnN0IHNlbGVjdGVkUHJvamVjdCA9IHByb2plY3REcm9wRG93bi52YWx1ZTtcclxuXHJcbiAgaWYgKHNlbGVjdGVkUHJvamVjdCkge1xyXG4gICAgdG9EbyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oc2VsZWN0ZWRQcm9qZWN0KSkgfHwgW107XHJcblxyXG4gICAgY29uc3QgbmV3VG9EbyA9IGdldFVzZXJUb2RvKCk7XHJcbiAgICB0b0RvLnB1c2gobmV3VG9Ebyk7XHJcblxyXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oc2VsZWN0ZWRQcm9qZWN0LCBKU09OLnN0cmluZ2lmeSh0b0RvKSk7XHJcbiAgICBjb25zb2xlLmxvZyh0b0RvKTtcclxuXHJcbiAgICBjb25zb2xlLmxvZyh0b0RvKTtcclxuICAgIGNsZWFySW5wdXRGb3JtKCk7XHJcbiAgICBkaXNwbGF5VG9Eb3NGb3JDdXJyZW50UHJvamVjdChzZWxlY3RlZFByb2plY3QpO1xyXG4gIH0gZWxzZSB7XHJcbiAgICBjb25zb2xlLmxvZyhjdXJyZW50UHJvamVjdCk7XHJcbiAgICAvL0lmIHRoZXJlIGlzIGFuIGV4aXN0aW5nIHByb2plY3QgZ2V0IGl0IGZyb20gdGhlIGxvY2FsIHN0b3JhZ2VcclxuICAgIGNvbnN0IHRvRG8gPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKGN1cnJlbnRQcm9qZWN0KSkgfHwgW107XHJcblxyXG4gICAgY29uc3QgbmV3VG9EbyA9IGdldFVzZXJUb2RvKCk7XHJcblxyXG4gICAgdG9Eby5wdXNoKG5ld1RvRG8pO1xyXG5cclxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKGN1cnJlbnRQcm9qZWN0LCBKU09OLnN0cmluZ2lmeSh0b0RvKSk7XHJcblxyXG4gICAgY29uc29sZS5sb2codG9Ebyk7XHJcbiAgICBjbGVhcklucHV0Rm9ybSgpO1xyXG4gICAgZGlzcGxheVRvRG9zRm9yQ3VycmVudFByb2plY3QoY3VycmVudFByb2plY3QpO1xyXG4gIH1cclxuICAvLyB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGRpc3BsYXlUb0Rvc0ZvckN1cnJlbnRQcm9qZWN0KHByb2plY3ROYW1lKSB7XHJcbiAgY3VycmVudFByb2plY3ROYW1lID0gcHJvamVjdE5hbWU7XHJcbiAgLy8gY29uc29sZS5sb2coY3VycmVudFByb2plY3ROYW1lKTtcclxuXHJcbiAgLy8gc2F2ZVRhc2socHJvamVjdE5hbWUpO1xyXG4gIGxldCBwcm9qZWN0VG9kb3MgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKHByb2plY3ROYW1lKSkgfHwgW107XHJcblxyXG4gIHRvRG8gPSBwcm9qZWN0VG9kb3M7XHJcbiAgY29uc29sZS5sb2codG9Ebyk7XHJcbiAgLy8gY29uc29sZS5sb2coY3VycmVudFRvZG9zKTtcclxuXHJcbiAgcHJvamVjdFRvZG9zLmZvckVhY2goKHRvZG8sIGluZGV4KSA9PiB7XHJcbiAgICBkaXNwbGF5VGFzayhcclxuICAgICAgdG9kby50aXRsZSxcclxuICAgICAgdG9kby5kZXNjcmlwdGlvbixcclxuICAgICAgdG9kby5wcmlvcml0eSxcclxuICAgICAgdG9kby5kYXRlLFxyXG4gICAgICBpbmRleCxcclxuICAgICAgcHJvamVjdE5hbWVcclxuICAgICk7XHJcbiAgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBkaXNwbGF5VGFzayhcclxuICBzYXZlVGl0bGVEYXRhLFxyXG4gIHNhdmVEZXNjcmlwdGlvbkRhdGEsXHJcbiAgc2F2ZVByaW9yaXR5RGF0YSxcclxuICBzYXZlRHVlRGF0ZURhdGEsXHJcbiAgaW5kZXgsXHJcbiAgcHJvamVjdE5hbWVcclxuKSB7XHJcbiAgY29uc3QgbGlzdENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgY29uc3QgdGFza0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xyXG4gIGNvbnN0IGlubmVyVGFza0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgY29uc3QgaW5uZXJUYXNrSGFuZGxlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcblxyXG4gIGlubmVyVGFza0hhbmRsZXIuY2xhc3NMaXN0LmFkZChcImlubmVyVGFza0hhbmRsZXJcIik7XHJcbiAgaW5uZXJUYXNrQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJpbm5lclRhc2tDb250YWluZXJcIik7XHJcbiAgdGFza0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwidGFza0NvbnRhaW5lclwiKTtcclxuICBsaXN0Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJsaXN0Q29udGFpbmVyXCIpO1xyXG5cclxuICBjb25zdCBjaGVja0JveENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xyXG4gIGNoZWNrQm94Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJjaGVja0JveENvbnRhaW5lclwiKTtcclxuICBjb25zdCBjaGVja0JveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcclxuICBjaGVja0JveC5jbGFzc0xpc3QuYWRkKFwiY2hlY2tCb3hcIik7XHJcbiAgY2hlY2tCb3guc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcImNoZWNrYm94XCIpO1xyXG5cclxuICBjb25zdCB0YXNrVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDRcIik7XHJcbiAgY29uc3QgdGFza0Rlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XHJcbiAgY29uc3QgZHVlRGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xyXG4gIGNvbnN0IHRhc2tQcmlvcml0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xyXG4gIGNvbnN0IGRlbGV0ZVRhc2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xyXG5cclxuICB0YXNrVGl0bGUuY2xhc3NMaXN0LmFkZChcInRhc2tUaXRsZVwiKTtcclxuICB0YXNrRGVzY3JpcHRpb24uY2xhc3NMaXN0LmFkZChcInRhc2tEZXNjcmlwdGlvblwiKTtcclxuICBkdWVEYXRlLmNsYXNzTGlzdC5hZGQoXCJkdWVEYXRlXCIpO1xyXG4gIGRlbGV0ZVRhc2suY2xhc3NMaXN0LmFkZChcImRlbGV0ZVRhc2tcIik7XHJcbiAgdGFza1ByaW9yaXR5LmNsYXNzTGlzdC5hZGQoXCJ0YXNrUHJpb3JpdHlcIik7XHJcblxyXG4gIHRhc2tUaXRsZS50ZXh0Q29udGVudCA9IGAgJHtzYXZlVGl0bGVEYXRhfWA7XHJcbiAgdGFza0Rlc2NyaXB0aW9uLnRleHRDb250ZW50ID0gYCR7c2F2ZURlc2NyaXB0aW9uRGF0YX1gO1xyXG4gIHRhc2tQcmlvcml0eS50ZXh0Q29udGVudCA9IGAke3NhdmVQcmlvcml0eURhdGF9YDtcclxuICBkdWVEYXRlLnRleHRDb250ZW50ID0gYCR7c2F2ZUR1ZURhdGVEYXRhfWA7XHJcbiAgZGVsZXRlVGFzay50ZXh0Q29udGVudCA9IFwiRGVsZXRlIHRhc2tcIjtcclxuXHJcbiAgZGVsZXRlVGFzay5kYXRhc2V0LmluZGV4ID0gaW5kZXg7XHJcbiAgZGVsZXRlVGFzay5kYXRhc2V0LnByb2plY3QgPSBwcm9qZWN0TmFtZTtcclxuICBjaGVja0JveC5kYXRhc2V0LmluZGV4ID0gaW5kZXg7XHJcbiAgY2hlY2tCb3guZGF0YXNldC5wcm9qZWN0ID0gcHJvamVjdE5hbWU7XHJcblxyXG4gIHRhc2tUaXRsZS5kYXRhc2V0LmZpZWxkVHlwZSA9IFwidGl0bGVcIjtcclxuICB0YXNrRGVzY3JpcHRpb24uZGF0YXNldC5maWVsZFR5cGUgPSBcImRlc2NyaXB0aW9uXCI7XHJcbiAgdGFza1ByaW9yaXR5LmRhdGFzZXQuZmllbGRUeXBlID0gXCJ0YXNrUHJpb3JpdHlcIjtcclxuICBkdWVEYXRlLmRhdGFzZXQuZmllbGRUeXBlID0gXCJkdWVEYXRlXCI7XHJcblxyXG4gIHRhc2tUaXRsZS5kYXRhc2V0LmluZGV4ID0gaW5kZXg7XHJcbiAgdGFza0Rlc2NyaXB0aW9uLmRhdGFzZXQuaW5kZXggPSBpbmRleDtcclxuICB0YXNrUHJpb3JpdHkuZGF0YXNldC5pbmRleCA9IGluZGV4O1xyXG4gIGR1ZURhdGUuZGF0YXNldC5pbmRleCA9IGluZGV4O1xyXG5cclxuICBpbm5lclRhc2tDb250YWluZXIuYXBwZW5kQ2hpbGQodGFza1RpdGxlKTtcclxuICBpbm5lclRhc2tDb250YWluZXIuYXBwZW5kQ2hpbGQodGFza0Rlc2NyaXB0aW9uKTtcclxuICBpbm5lclRhc2tDb250YWluZXIuYXBwZW5kQ2hpbGQoZHVlRGF0ZSk7XHJcblxyXG4gIGlubmVyVGFza0hhbmRsZXIuYXBwZW5kQ2hpbGQodGFza1ByaW9yaXR5KTtcclxuICBpbm5lclRhc2tIYW5kbGVyLmFwcGVuZENoaWxkKGRlbGV0ZVRhc2spO1xyXG5cclxuICB0YXNrQ29udGFpbmVyLmFwcGVuZENoaWxkKGlubmVyVGFza0NvbnRhaW5lcik7XHJcbiAgdGFza0NvbnRhaW5lci5hcHBlbmRDaGlsZChpbm5lclRhc2tIYW5kbGVyKTtcclxuXHJcbiAgY2hlY2tCb3hDb250YWluZXIuYXBwZW5kQ2hpbGQoY2hlY2tCb3gpO1xyXG4gIGxpc3RDb250YWluZXIuYXBwZW5kQ2hpbGQoY2hlY2tCb3hDb250YWluZXIpO1xyXG5cclxuICBsaXN0Q29udGFpbmVyLmFwcGVuZENoaWxkKHRhc2tDb250YWluZXIpO1xyXG4gIHVzZXJMaXN0LmFwcGVuZENoaWxkKGxpc3RDb250YWluZXIpO1xyXG5cclxuICB0YXNrVGl0bGUuYWRkRXZlbnRMaXN0ZW5lcihcImRibGNsaWNrXCIsIGVkaXRUYXNrKTtcclxuICB0YXNrRGVzY3JpcHRpb24uYWRkRXZlbnRMaXN0ZW5lcihcImRibGNsaWNrXCIsIGVkaXRUYXNrKTtcclxuICB0YXNrUHJpb3JpdHkuYWRkRXZlbnRMaXN0ZW5lcihcImRibGNsaWNrXCIsIGVkaXRUYXNrKTtcclxuICBkdWVEYXRlLmFkZEV2ZW50TGlzdGVuZXIoXCJkYmxjbGlja1wiLCBlZGl0VGFzayk7XHJcblxyXG4gIGRlbGV0ZVRhc2suYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGRlbGV0ZVRvRG8pO1xyXG4gIGRlbGV0ZVRhc2suYWRkRXZlbnRMaXN0ZW5lcihcInRvdWNoc3RhcnRcIiwgZGVsZXRlVG9Ebyk7XHJcblxyXG4gIGhhbmRsZUNoZWNrQm94KGNoZWNrQm94LCB0YXNrVGl0bGUsIHRhc2tEZXNjcmlwdGlvbik7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBlZGl0VGFzayhldmVudCkge1xyXG4gIGNvbnN0IHRhcmdldCA9IGV2ZW50LnRhcmdldDtcclxuXHJcbiAgY29uc3QgZmllbGRUeXBlID0gdGFyZ2V0LmRhdGFzZXQuZmllbGRUeXBlOyAvLyBJZGVudGlmeSB0aGUgZmllbGQgdHlwZSh0aXRsZSxkZXNjcmlwdGlvbixwcmlvcml0eSxkYXRlKVxyXG4gIGNvbnN0IGluZGV4ID0gdGFyZ2V0LmRhdGFzZXQuaW5kZXg7XHJcbiAgY29uc3QgdGFza1ByaW9yaXR5ID0gW1wiVXJnZW50XCIsIFwiSW1wb3J0YW50XCIsIFwiTG93IHByaW9yaXR5XCJdO1xyXG5cclxuICBsZXQgdGFza0lucHV0O1xyXG4gIGlmIChmaWVsZFR5cGUgPT09IFwidGl0bGVcIiB8fCBmaWVsZFR5cGUgPT09IFwiZGVzY3JpcHRpb25cIikge1xyXG4gICAgdGFza0lucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xyXG4gICAgdGFza0lucHV0LnR5cGUgPSBcInRleHRcIjtcclxuICAgIHRhc2tJbnB1dC52YWx1ZSA9IHRhcmdldC50ZXh0Q29udGVudDtcclxuICB9IGVsc2UgaWYgKGZpZWxkVHlwZSA9PT0gXCJkdWVEYXRlXCIpIHtcclxuICAgIHRhc2tJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcclxuICAgIHRhc2tJbnB1dC50eXBlID0gXCJkYXRlXCI7XHJcbiAgICB0YXNrSW5wdXQudmFsdWUgPSB0YXJnZXQudGV4dENvbnRlbnQ7XHJcbiAgfSBlbHNlIGlmIChmaWVsZFR5cGUgPT09IFwidGFza1ByaW9yaXR5XCIpIHtcclxuICAgIHRhc2tJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzZWxlY3RcIik7XHJcblxyXG4gICAgdGFza1ByaW9yaXR5LmZvckVhY2goKHByaW9yaXR5KSA9PiB7XHJcbiAgICAgIGNvbnN0IG9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7XHJcbiAgICAgIG9wdGlvbi52YWx1ZSA9IHByaW9yaXR5O1xyXG4gICAgICBvcHRpb24udGV4dENvbnRlbnQgPSBwcmlvcml0eTtcclxuXHJcbiAgICAgIGlmIChwcmlvcml0eSA9PT0gdGFyZ2V0LnRleHRDb250ZW50KSB7XHJcbiAgICAgICAgb3B0aW9uLnNlbGVjdGVkID0gdHJ1ZTtcclxuICAgICAgfVxyXG4gICAgICB0YXNrSW5wdXQuYXBwZW5kQ2hpbGQob3B0aW9uKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgLy9TdG9yZSB0aGUgZmllbGRUeXBlIGluIHRoZSBpbnB1dCBkYXRhc2V0XHJcbiAgdGFza0lucHV0LmRhdGFzZXQuZmllbGRUeXBlID0gZmllbGRUeXBlO1xyXG4gIHRhc2tJbnB1dC5kYXRhc2V0LmluZGV4ID0gaW5kZXg7XHJcblxyXG4gIHRhcmdldC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbiAgdGFyZ2V0LnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKHRhc2tJbnB1dCwgdGFyZ2V0Lm5leHRTaWJsaW5nKTsgLy8gSW5zZXJ0IHRoZSBpbnB1dCBmaWVsZCBuZXh0IHRvIHRhcmdldCBlbGVtZW50XHJcblxyXG4gIHRhc2tJbnB1dC5jbGFzc0xpc3QuYWRkKFwiZWRpdFwiKTtcclxuICAvLyAgIGNvbnN0IHNlbGVjdGVkVmFsdWUgPSB0YXNrSW5wdXQudmFsdWU7XHJcbiAgLy8gY29uc29sZS5sb2coc2VsZWN0ZWRWYWx1ZSk7XHJcblxyXG4gIGlmICh0YXNrSW5wdXQudHlwZSA9PT0gXCJ0ZXh0XCIpIHtcclxuICAgIHRhc2tJbnB1dC5zZWxlY3QoKTsgLy8gQXV0b21hdGljYWxseSBzZWxlY3QgdGhlIGNvbnRlbnQgb2YgdGhlIGlucHV0IGZpZWxkXHJcbiAgfVxyXG5cclxuICB0YXNrSW5wdXQuYWRkRXZlbnRMaXN0ZW5lcihcImJsdXJcIiwgc2F2ZUVkaXRlZFRhc2spOyAvLyBTYXZlIHRhc2sgd2hlbiB0YXNrIGxvc2UgZm9jdXMgb24gaW5wdXQgZWxlbWVudC5cclxuICB0YXNrSW5wdXQuYWRkRXZlbnRMaXN0ZW5lcihcImtleXByZXNzXCIsIHNhdmVFZGl0ZWRUYXNrKTsgLy8gU2F2ZSB0YXNrIG9uIHByZXNzaW5nIEVudGVyXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBzYXZlRWRpdGVkVGFzayhldmVudCkge1xyXG4gIGNvbnNvbGUubG9nKHRvRG8pO1xyXG5cclxuICBpZiAoZXZlbnQudHlwZSA9PT0gXCJibHVyXCIgfHwgZXZlbnQua2V5ID09PSBcIkVudGVyXCIpIHtcclxuICAgIGNvbnN0IGlucHV0ID0gZXZlbnQudGFyZ2V0O1xyXG5cclxuICAgIGxldCBmaWVsZFR5cGUgPSBpbnB1dC5kYXRhc2V0LmZpZWxkVHlwZTtcclxuICAgIGxldCBpbmRleCA9IGlucHV0LmRhdGFzZXQuaW5kZXg7IC8vIEdldCB0aGUgaW5kZXggZnJvbSB0aGUgaW5wdXQgZGF0YXNldFxyXG5cclxuICAgIGxldCBuZXdWYWx1ZTtcclxuICAgIC8vSWYgc2VsZWN0IGVsZW1lbnQsIGdldCBpdCB2YWx1ZSBlbHNlIGdldCBpbnB1dCB2YWx1ZVxyXG4gICAgaWYgKGlucHV0LnRhZ05hbWUgPT09IFwiU0VMRUNUXCIpIHtcclxuICAgICAgbmV3VmFsdWUgPSBpbnB1dC5vcHRpb25zW2lucHV0LnNlbGVjdGVkSW5kZXhdLnZhbHVlO1xyXG4gICAgICB0b0RvW2luZGV4XS5wcmlvcml0eSA9IG5ld1ZhbHVlO1xyXG4gICAgICBjb25zb2xlLmxvZyh0b0RvW2luZGV4XS5wcmlvcml0eSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBuZXdWYWx1ZSA9IGlucHV0LnZhbHVlO1xyXG4gICAgfVxyXG4gICAgLy8gY29uc3QgY3VycmVudFByb2plY3QgPSBjdXJyZW50UHJvamVjdE5hbWVbY3VycmVudFByb2plY3ROYW1lLmxlbmd0aCAtIDFdO1xyXG5cclxuICAgIC8vR2V0IHRoZSB0YXNrIGZyb20gdGhlIGxvY2FsIHN0b3JhZ2VcclxuICAgIC8vIGxldCB0b0RvID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShjdXJyZW50UHJvamVjdE5hbWUpKSB8fCBbXTtcclxuICAgIGNvbnNvbGUubG9nKHRvRG8pO1xyXG5cclxuICAgIC8vQ2hlY2sgaWYgdGhlIGluZGV4IGlzIG5vdCBvdXQgb2YgYm91bmRzIGluIHRoZSBhcnJheVxyXG4gICAgaWYgKGluZGV4IDwgdG9Eby5sZW5ndGgpIHtcclxuICAgICAgaWYgKGZpZWxkVHlwZSA9PT0gXCJ0aXRsZVwiKSB7XHJcbiAgICAgICAgdG9Eb1tpbmRleF0udGl0bGUgPSBuZXdWYWx1ZTtcclxuICAgICAgICBjb25zb2xlLmxvZyh0b0RvW2luZGV4XS50aXRsZSk7XHJcbiAgICAgIH0gZWxzZSBpZiAoZmllbGRUeXBlID09PSBcImRlc2NyaXB0aW9uXCIpIHtcclxuICAgICAgICB0b0RvW2luZGV4XS5kZXNjcmlwdGlvbiA9IG5ld1ZhbHVlO1xyXG4gICAgICB9IGVsc2UgaWYgKGZpZWxkVHlwZSA9PT0gXCJkdWVEYXRlXCIpIHtcclxuICAgICAgICBsZXQgZHVlRGF0ZSA9IG5ld1ZhbHVlO1xyXG4gICAgICAgIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZShkdWVEYXRlKTtcclxuXHJcbiAgICAgICAgY29uc3Qgb3B0aW9ucyA9IHtcclxuICAgICAgICAgIHdlZWtkYXk6IFwibG9uZ1wiLFxyXG4gICAgICAgICAgeWVhcjogXCJudW1lcmljXCIsXHJcbiAgICAgICAgICBtb250aDogXCJzaG9ydFwiLFxyXG4gICAgICAgICAgZGF5OiBcIm51bWVyaWNcIixcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICB0b0RvW2luZGV4XS5kYXRlID0gZGF0ZS50b0xvY2FsZURhdGVTdHJpbmcoXCJlbi1Vc1wiLCBvcHRpb25zKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIFNhdmUgdGhlIHVwZGF0ZWQgdGFza3MgdG8gbG9jYWwgc3RvcmFnZVxyXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oY3VycmVudFByb2plY3ROYW1lLCBKU09OLnN0cmluZ2lmeSh0b0RvKSk7XHJcblxyXG4gICAgLy8gVXBkYXRlIHRoZSBvcmlnaW5hbCBlbGVtZW50J3MgdGV4dCBjb250ZW50IGFuZCBzaG93IGl0IGFnYWluXHJcbiAgICBsZXQgb3JpZ2luYWxFbGVtZW50ID0gaW5wdXQucHJldmlvdXNTaWJsaW5nO1xyXG5cclxuICAgIG9yaWdpbmFsRWxlbWVudC50ZXh0Q29udGVudCA9IG5ld1ZhbHVlO1xyXG5cclxuICAgIG9yaWdpbmFsRWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xyXG5cclxuICAgIC8vIFJlbW92ZSB0aGUgaW5wdXQgZmllbGQgaWYgaXQgaXMgc3RpbGwgcGFydCBvZiB0aGUgRE9NXHJcblxyXG4gICAgaW5wdXQucmVtb3ZlKCk7XHJcblxyXG4gICAgdXNlckxpc3QudGV4dENvbnRlbnQgPSBcIlwiO1xyXG5cclxuICAgIC8vIFJlLXJlbmRlciB0aGUgdG9kbyBsaXN0IGlmIG5lY2Vzc2FyeVxyXG4gICAgZGlzcGxheVRvRG9zRm9yQ3VycmVudFByb2plY3QoY3VycmVudFByb2plY3ROYW1lKTtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGhhbmRsZUNoZWNrQm94KGNoZWNrQm94LCB0YXNrVGl0bGUsIHRhc2tEZXNjcmlwdGlvbikge1xyXG4gIGNoZWNrQm94LmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgKGV2ZW50KSA9PiB7XHJcbiAgICBpZiAoY2hlY2tCb3guY2hlY2tlZCA9PT0gdHJ1ZSkge1xyXG4gICAgICBjb25zdCBjaGVja0JveCA9IGV2ZW50LnRhcmdldDtcclxuICAgICAgY29uc29sZS5sb2coY2hlY2tCb3gpO1xyXG4gICAgICBjb25zdCBpbmRleCA9IGNoZWNrQm94LmRhdGFzZXQuaW5kZXg7XHJcbiAgICAgIGNvbnN0IHByb2plY3ROYW1lID0gY2hlY2tCb3guZGF0YXNldC5wcm9qZWN0O1xyXG5cclxuICAgICAgdG9EbyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0ocHJvamVjdE5hbWUpKSB8fCBbXTtcclxuXHJcbiAgICAgIGlmIChpbmRleCAhPT0gLTEpIHtcclxuICAgICAgICBjaGVja0JveC5yZW1vdmUoY2hlY2tCb3gpO1xyXG4gICAgICAgIHRvRG8uc3BsaWNlKGluZGV4LCAxKTtcclxuICAgICAgICAvL3VwZGF0ZSBUby1kbyBpdGVtIGluIGxvY2FsIHN0b3JhZ2VcclxuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShwcm9qZWN0TmFtZSwgSlNPTi5zdHJpbmdpZnkodG9EbykpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHRvRG8pO1xyXG4gICAgICAgIHVzZXJMaXN0LnRleHRDb250ZW50ID0gXCJcIjtcclxuICAgICAgICBkaXNwbGF5VG9Eb3NGb3JDdXJyZW50UHJvamVjdChwcm9qZWN0TmFtZSk7XHJcbiAgICAgICAgYWxlcnQoXCJUYXNrIGNvbXBsZXRlZCFcIik7XHJcbiAgICAgIH1cclxuICAgICAgY29uc29sZS5sb2coXCJ0cnVlXCIpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGFza1RpdGxlLnN0eWxlLnRleHREZWNvcmF0aW9uID0gXCJub25lXCI7XHJcbiAgICAgIHRhc2tEZXNjcmlwdGlvbi5zdHlsZS50ZXh0RGVjb3JhdGlvbiA9IFwibm9uZVwiO1xyXG4gICAgICBjb25zb2xlLmxvZyhcImZhbHNlXCIpO1xyXG4gICAgfVxyXG4gIH0pO1xyXG59XHJcblxyXG4vL0RlbGV0ZSB0aGUgdG9kbyB0aGF0IGdldCBjbGlja2VkXHJcbmZ1bmN0aW9uIGRlbGV0ZVRvRG8oZXZlbnQpIHtcclxuICBjb25zdCBidXR0b24gPSBldmVudC50YXJnZXQ7XHJcbiAgY29uc3QgaW5kZXggPSBidXR0b24uZGF0YXNldC5pbmRleDtcclxuICBjb25zdCBjdXJyZW50UHJvamVjdCA9IGJ1dHRvbi5kYXRhc2V0LnByb2plY3Q7XHJcbiAgY29uc29sZS5sb2coY3VycmVudFByb2plY3QpO1xyXG5cclxuICAvLyBjb25zdCBjdXJyZW50UHJvamVjdCA9IGN1cnJlbnRQcm9qZWN0TmFtZVtjdXJyZW50UHJvamVjdE5hbWUubGVuZ3RoIC0gMV07XHJcbiAgdG9EbyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oY3VycmVudFByb2plY3QpKSB8fCBbXTtcclxuXHJcbiAgY29uc29sZS5sb2codG9Ebyk7XHJcblxyXG4gIGlmIChpbmRleCAhPT0gLTEpIHtcclxuICAgIHRvRG8uc3BsaWNlKGluZGV4LCAxKTtcclxuICAgIC8vdXBkYXRlIFRvLWRvIGl0ZW0gaW4gbG9jYWwgc3RvcmFnZVxyXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oY3VycmVudFByb2plY3QsIEpTT04uc3RyaW5naWZ5KHRvRG8pKTtcclxuICAgIGNvbnNvbGUubG9nKHRvRG8pO1xyXG4gICAgdXNlckxpc3QudGV4dENvbnRlbnQgPSBcIlwiO1xyXG4gICAgZGlzcGxheVRvRG9zRm9yQ3VycmVudFByb2plY3QoY3VycmVudFByb2plY3QpO1xyXG4gIH1cclxufVxyXG5cclxuLy9DYW5jZWwgcHJvamVjdCBmb3JtIGZyb20gZGlzcGxheWluZy5cclxuZnVuY3Rpb24gY2FuY2VsRm9ybURpc3BsYXkoKSB7XHJcbiAgaW5wdXRGaWVsZEVsLnZhbHVlID0gXCJcIjtcclxuICBkZXNjcmlwdGlvbkZpZWxkRWwudmFsdWUgPSBcIlwiO1xyXG4gIHNlbGVjdFByaW9yaXR5RWwudmFsdWUgPSBcIlNlbGVjdCBQcmlvcml0eVwiO1xyXG4gIGR1ZURhdGUudmFsdWUgPSBcIlwiO1xyXG4gIHByb2plY3RGb3JtLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuICBjb25zb2xlLmxvZyhcImNhbmNlbCBmb3JtIVwiKTtcclxuICBuZXdQcm9qZWN0c0Zvcm1Db250YWluZXJFbC5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xyXG4gIGlmIChuZXdQcm9qZWN0VGFza3NDb250YWluZXIuc3R5bGUuZGlzcGxheSA9PT0gXCJub25lXCIpIHtcclxuICAgIG5ld1Byb2plY3RUYXNrc0NvbnRhaW5lci5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xyXG4gIH1cclxuICBjcmVhdGVOZXdQcm9qZWN0VGFza0J0bigpO1xyXG4gIC8vIGRpc3BsYXlUb0Rvc0ZvckN1cnJlbnRQcm9qZWN0KGN1cnJlbnRQcm9qZWN0TmFtZS5zbGljZSgpLnBvcCgpKTtcclxufVxyXG5jYW5jZWxUYXNrQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBjYW5jZWxGb3JtRGlzcGxheSk7XHJcblxyXG4vL1ByZXZlbnQgZm9ybSBEZWZhdWx0IHdoZW4gc3VibWl0aW5nIHByb2plY3QgbmFtZVxyXG5jb25zdCBzdWJtaXROZXdQcm9qZWN0Rm9ybU5hbWUgPSAoZXZlbnQpID0+IHtcclxuICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gIGdldG5ld1Byb2plY3RJbnB1dE5hbWUoKTtcclxuICBkaXNwbGF5TmV3UHJvamVjdEZvcm0oKTtcclxuICAvLyBjcmVhdGVOZXdQcm9qZWN0VGFza0J0bigpO1xyXG59O1xyXG5TYXZlUHJvamVjdE5hbWUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHN1Ym1pdE5ld1Byb2plY3RGb3JtTmFtZSk7XHJcbm5ld1Byb2plY3ROYW1lUmVxdWVzdC5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIChldmVudCkgPT5cclxuICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXHJcbik7XHJcblxyXG5uZXdQcm9qZWN0VGFza3NDb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICBkaXNwbGF5TmV3UHJvamVjdEZvcm0oKTtcclxuICBuZXdQcm9qZWN0VGFza3NDb250YWluZXIuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG4gIG5ld1Byb2plY3RUYXNrc0NvbnRhaW5lci50ZXh0Q29udGVudCA9IFwiXCI7XHJcbn0pO1xyXG5cclxuZnVuY3Rpb24gc3VibWl0Rm9ybShldmVudCkge1xyXG4gIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgdXNlckxpc3QudGV4dENvbnRlbnQgPSBcIlwiO1xyXG5cclxuICBhZGROZXdQcm9qZWN0VG9kb3MoKTtcclxuICAvLyBkaXNwbGF5VG9Eb3NGb3JDdXJyZW50UHJvamVjdChwcm9qZWN0TmFtZSk7XHJcbiAgLy8gYWRkVG9kb1Rvc2VsZWN0ZWRQcm9qZWN0KCk7XHJcbn1cclxuc3VibWl0VGFza0J0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgc3VibWl0Rm9ybSk7XHJcbnByb2plY3RGb3JtLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgKGV2ZW50KSA9PiBldmVudC5wcmV2ZW50RGVmYXVsdCgpKTtcclxuIiwiXHJcbmltcG9ydCB7IGdldFVzZXJUb2RvIH0gZnJvbSBcIi4vZG9tLUVsLTJcIjtcclxuaW1wb3J0IHsgbmV3UHJvamVjdFRhc2tzQ29udGFpbmVyIH0gZnJvbSBcIi4vZG9tLUVsLTJcIjtcclxuaW1wb3J0IHsgZ2V0bmV3UHJvamVjdElucHV0VmFsdWUgfSBmcm9tIFwiLi9kb20tRWwtMlwiO1xyXG5pbXBvcnQgeyBjcmVhdGVOZXdQcm9qZWN0VGFza0J0biB9IGZyb20gXCIuL2RvbS1FbC0yXCI7XHJcbmltcG9ydCB7IGlucHV0TmV3cHJvamVjdEZvcm1OYW1lIH0gZnJvbSBcIi4vZG9tLUVsLTJcIjtcclxuXHJcbmNvbnN0IG1haW5Db250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwibWFpblwiKTtcclxuY29uc3QgaGVhZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5oZWFkZXJUZXh0Q29udGVudFwiKTtcclxuY29uc3QgdXNlckxpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3VzZXJsaXN0XCIpO1xyXG5jb25zdCBpbmJveFRhc2tEaXNwbGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5kaXNwbGF5SW5ib3hUYXNrXCIpO1xyXG5jb25zdCBmb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNmb3JtXCIpO1xyXG5sZXQgcHJvamVjdEZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI1Byb2plY3RGb3JtXCIpO1xyXG5jb25zdCBjYW5jZWxGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jYW5jZWxcIik7XHJcbmNvbnN0IHN1Ym1pdEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjc3VibWl0QnRuXCIpO1xyXG5jb25zdCBhZGRUYXNrYnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0YXNrXCIpO1xyXG5jb25zdCBhZGRUYXNrTW9iaWxlQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2FkZFRvZG9CdG5Db250YWluZXInKVxyXG5cclxubGV0IGluYm94ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5pbmJveFwiKTtcclxuY29uc3QgdG9Eb0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzZWN0aW9uXCIpO1xyXG50b0RvQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJ0b0RvQ29udGFpbmVySW5ib3hcIik7XHJcbmNvbnN0IGluYm94Rm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJmb3JtXCIpO1xyXG5pbmJveEZvcm0uY2xhc3NMaXN0LmFkZChcImluYm94Rm9ybVwiKTtcclxuY29uc3QgaW5ib3hUYXNrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuaW5ib3hUYXNrLmNsYXNzTGlzdC5hZGQoXCJpbmJveFRhc2tcIik7XHJcblxyXG5sZXQgdGFza1RpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50YXNrLXRpdGxlXCIpO1xyXG5sZXQgdGFza0Rlc2NyaXB0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5kZXNjcmlwdGlvblwiKTtcclxubGV0IHRhc2tQcmlvcml0eSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcHJpb3JpdHlcIik7XHJcbmxldCBkdWVEYXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNkYXRlUGlja2VyXCIpO1xyXG5cclxuY2xhc3MgZ2V0TGlzdCB7XHJcbiAgY29uc3RydWN0b3IodGl0bGUsIGRlc2NyaXB0aW9uLCBwcmlvcml0eSwgZGF0ZSkge1xyXG4gICAgdGhpcy50aXRsZSA9IHRpdGxlO1xyXG4gICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xyXG4gICAgdGhpcy5wcmlvcml0eSA9IHByaW9yaXR5O1xyXG4gICAgdGhpcy5kYXRlID0gZGF0ZTtcclxuICB9XHJcbn1cclxuXHJcblxyXG5leHBvcnQgY29uc3QgbXlQcm9qZWN0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcHJvamVjdHMgaDNcIik7XHJcbmNvbnN0IGRlZmF1bHRQcm9qZWN0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcHJvamVjdHNcIik7XHJcblxyXG5cclxuZnVuY3Rpb24gZGlzcGxheUZvcm0oZXZlbnQpIHtcclxuICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiaGVhZGVyIGgxXCIpO1xyXG4gIGNvbnN0IGludGlhbFRleHREaXNwbGF5Q29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmludGlhbFRleHREaXNwbGF5Q29udGFpbmVyJylcclxuICBoZWFkZXIudGV4dENvbnRlbnQgPSBcIkFkZCB5b3VyIFRvIGRvXCI7XHJcbiAgdXNlckxpc3QudGV4dENvbnRlbnQgPSBcIlwiO1xyXG4gIGludGlhbFRleHREaXNwbGF5Q29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSdcclxuICBcclxuICBsZXQgbmV3UHJvamVjdEJ0biA9IGNyZWF0ZU5ld1Byb2plY3RUYXNrQnRuKCk7XHJcbiAgbmV3UHJvamVjdEJ0bi5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbiAgZm9ybS5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xyXG4gIGlmICgocHJvamVjdEZvcm0uc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIikpIHtcclxuICAgIHByb2plY3RGb3JtLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSdcclxuICB9XHJcbn1cclxuYWRkVGFza2J0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZGlzcGxheUZvcm0pO1xyXG5hZGRUYXNrTW9iaWxlQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBkaXNwbGF5Rm9ybSk7XHJcblxyXG5cclxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgKCkgPT4ge1xyXG4gIGRpc3BsYXlUb0RvcygpO1xyXG59KTtcclxuXHJcbmxldCB0b0RvcyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ0b0Rvc1wiKSkgfHwgW107XHJcblxyXG5cclxuZnVuY3Rpb24gYWNjZXB0SW5wdXQoKSB7ICBcclxuICBsZXQgdGFza0lucHV0VmFsdWUgPSB0YXNrVGl0bGUudmFsdWU7XHJcbiAgbGV0IGRlc2NyaXB0aW9uSW5wdXRWYWx1ZSA9IHRhc2tEZXNjcmlwdGlvbi52YWx1ZTtcclxuICBsZXQgcHJpb3JpdHlWYWx1ZUVsID0gdGFza1ByaW9yaXR5LnZhbHVlO1xyXG4gIGxldCBkdWVEYXRlVmFsdWVFbCA9IGR1ZURhdGUudmFsdWU7XHJcblxyXG4gIGNvbnNvbGUubG9nKHRhc2tJbnB1dFZhbHVlLmxlbmd0aClcclxuICBpZiAodGFza0lucHV0VmFsdWUubGVuZ3RoID4gMzApIHtcclxuICAgIHJldHVybiBhbGVydChcclxuICAgICAgYElucHV0IHNob3VsZCBiZSBsZXNzIG9yIGVxdWFsIHRvIHRoZSAzNSBjaGFyYWN0ZXJzLCB5b3UgaGF2ZSBlbnRlcmVkICR7XHJcbiAgICAgICAgdGFza0lucHV0VmFsdWUubGVuZ3RoXHJcbiAgICAgIH0gY2hhcmFjdGVyc2BcclxuICAgICk7XHJcbiAgfSBlbHNlIGlmKGRlc2NyaXB0aW9uSW5wdXRWYWx1ZS5sZW5ndGggPiAzNSkge1xyXG4gICAgcmV0dXJuIGFsZXJ0KFxyXG4gICAgICBgRGVzY3JpcHRpb24gc2hvdWxkIGJlIGxlc3Mgb3IgZXF1YWwgdG8gdGhlIDQwIGNoYXJhY3RlcnMsIHlvdSBoYXZlIGVudGVyZWQgJHtkZXNjcmlwdGlvbklucHV0VmFsdWUubGVuZ3RofSBjaGFyYWN0ZXJzYFxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZShkdWVEYXRlVmFsdWVFbCk7XHJcblxyXG4gIGNvbnN0IG9wdGlvbnMgPSB7XHJcbiAgICB3ZWVrZGF5OiBcImxvbmdcIixcclxuICAgIHllYXI6IFwibnVtZXJpY1wiLFxyXG4gICAgbW9udGg6IFwic2hvcnRcIixcclxuICAgIGRheTogXCJudW1lcmljXCIsXHJcbiAgfTtcclxuXHJcbiAgY29uc3QgZGF5T2ZXZWVrID0gZGF0ZS50b0xvY2FsZURhdGVTdHJpbmcoXCJlbi1Vc1wiLCBvcHRpb25zKTtcclxuXHJcbiAgbGV0IHVzZXJUb0RvID0gbmV3IGdldExpc3QoXHJcbiAgICB0YXNrSW5wdXRWYWx1ZSxcclxuICAgIGRlc2NyaXB0aW9uSW5wdXRWYWx1ZSxcclxuICAgIHByaW9yaXR5VmFsdWVFbCxcclxuICAgIGRheU9mV2Vla1xyXG4gICk7XHJcblxyXG4gIHRvRG9zLnB1c2godXNlclRvRG8pO1xyXG5cclxuICBcclxuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInRvRG9zXCIsIEpTT04uc3RyaW5naWZ5KHRvRG9zKSk7XHJcblxyXG4gIGNsZWFyRm9ybSgpO1xyXG4gIFxyXG59XHJcblxyXG5mdW5jdGlvbiBjbGVhckZvcm0oKSB7XHJcbiAgdGFza1RpdGxlLnZhbHVlID0gXCJcIjtcclxuICB0YXNrRGVzY3JpcHRpb24udmFsdWUgPSBcIlwiO1xyXG4gIGR1ZURhdGUudmFsdWUgPSBcIlwiO1xyXG4gIHRhc2tQcmlvcml0eS52YWx1ZSA9IFwiU2VsZWN0IFByaW9yaXR5XCI7XHJcbn1cclxuXHJcblxyXG5mdW5jdGlvbiBkaXNwbGF5VG9Eb3MoKSB7XHJcbiAgbGV0IHVzZXJUb2RvcyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ0b0Rvc1wiKSkgfHwgW107XHJcblxyXG4gIHVzZXJUb2Rvcz8uZm9yRWFjaCgodG9kb09iaiwgaW5kZXgpID0+IHtcclxuICAgIGdldEVsZW1lbnRGb3JUYXNrRGlzcGxheShcclxuICAgICAgdG9kb09iai50aXRsZSxcclxuICAgICAgdG9kb09iai5kZXNjcmlwdGlvbixcclxuICAgICAgdG9kb09iai5wcmlvcml0eSxcclxuICAgICAgdG9kb09iai5kYXRlLFxyXG4gICAgICBpbmRleFxyXG4gICAgKTtcclxuICB9KTtcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0RWxlbWVudEZvclRhc2tEaXNwbGF5KFxyXG4gIHNhdmVUaXRsZURhdGEsXHJcbiAgc2F2ZURlc2NyaXB0aW9uRGF0YSxcclxuICBzYXZlUHJpb3JpdHlEYXRhLFxyXG4gIHNhdmVEdWVEYXRlRGF0YSxcclxuICBpbmRleFxyXG4pIHtcclxuICBoZWFkZXIudGV4dENvbnRlbnQgPSBcIkNyZWF0ZSBZb3VyIFRvLURvIExpc3QuXCI7XHJcbiAgY29uc3QgbGlzdENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgY29uc3QgdGFza0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xyXG4gIGNvbnN0IGlubmVyVGFza0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgY29uc3QgaW5uZXJUYXNrSGFuZGxlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgaW5uZXJUYXNrSGFuZGxlci5jbGFzc0xpc3QuYWRkKFwiaW5uZXJUYXNrSGFuZGxlclwiKTtcclxuICBpbm5lclRhc2tDb250YWluZXIuY2xhc3NMaXN0LmFkZChcImlubmVyVGFza0NvbnRhaW5lclwiKTtcclxuICB0YXNrQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJ0YXNrQ29udGFpbmVyXCIpO1xyXG4gIGxpc3RDb250YWluZXIuY2xhc3NMaXN0LmFkZChcImxpc3RDb250YWluZXJcIik7XHJcblxyXG4gIGNvbnN0IGNoZWNrQm94Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XHJcbiAgY2hlY2tCb3hDb250YWluZXIuY2xhc3NMaXN0LmFkZChcImNoZWNrQm94Q29udGFpbmVyXCIpO1xyXG4gIGNvbnN0IGNoZWNrQm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xyXG4gIGNoZWNrQm94LmNsYXNzTGlzdC5hZGQoXCJjaGVja0JveFwiKTtcclxuICBjaGVja0JveC5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwiY2hlY2tib3hcIik7XHJcblxyXG4gIGNvbnN0IHRhc2tUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoNFwiKTtcclxuICBjb25zdCB0YXNrRGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcclxuICBjb25zdCBkdWVEYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XHJcbiAgY29uc3QgdGFza1ByaW9yaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XHJcbiAgY29uc3QgZGVsZXRlVGFzayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XHJcblxyXG4gIHRhc2tUaXRsZS5jbGFzc0xpc3QuYWRkKFwidGFza1RpdGxlXCIpO1xyXG4gIHRhc2tEZXNjcmlwdGlvbi5jbGFzc0xpc3QuYWRkKFwidGFza0Rlc2NyaXB0aW9uXCIpO1xyXG4gIFxyXG4gIGR1ZURhdGUuY2xhc3NMaXN0LmFkZChcImR1ZURhdGVcIik7XHJcbiAgZGVsZXRlVGFzay5jbGFzc0xpc3QuYWRkKFwiZGVsZXRlVGFza1wiKTtcclxuICB0YXNrUHJpb3JpdHkuY2xhc3NMaXN0LmFkZChcInRhc2tQcmlvcml0eVwiKTtcclxuXHJcbiAgdGFza1RpdGxlLnRleHRDb250ZW50ID0gYCAke3NhdmVUaXRsZURhdGF9YDtcclxuICB0YXNrRGVzY3JpcHRpb24udGV4dENvbnRlbnQgPSBgJHtzYXZlRGVzY3JpcHRpb25EYXRhfWA7XHJcbiAgdGFza1ByaW9yaXR5LnRleHRDb250ZW50ID0gYCR7c2F2ZVByaW9yaXR5RGF0YX1gO1xyXG4gIGR1ZURhdGUudGV4dENvbnRlbnQgPSBgJHtzYXZlRHVlRGF0ZURhdGF9YDtcclxuICBkZWxldGVUYXNrLnRleHRDb250ZW50ID0gXCJEZWxldGUgdGFza1wiO1xyXG5cclxuICB0YXNrVGl0bGUuZGF0YXNldC5maWVsZFR5cGUgPSBcInRpdGxlXCI7XHJcbiAgdGFza0Rlc2NyaXB0aW9uLmRhdGFzZXQuZmllbGRUeXBlID0gXCJkZXNjcmlwdGlvblwiO1xyXG50YXNrUHJpb3JpdHkuZGF0YXNldC5maWVsZFR5cGUgPSBcInRhc2tQcmlvcml0eVwiO1xyXG5kdWVEYXRlLmRhdGFzZXQuZmllbGRUeXBlID0gXCJkdWVEYXRlXCI7XHJcblxyXG4gIHRhc2tUaXRsZS5kYXRhc2V0LmluZGV4ID0gaW5kZXg7XHJcbiAgdGFza0Rlc2NyaXB0aW9uLmRhdGFzZXQuaW5kZXggPSBpbmRleDtcclxuICB0YXNrUHJpb3JpdHkuZGF0YXNldC5pbmRleCA9IGluZGV4O1xyXG4gIGR1ZURhdGUuZGF0YXNldC5pbmRleCA9IGluZGV4O1xyXG4gIGNoZWNrQm94LmRhdGFzZXQuaW5kZXggPSBpbmRleDtcclxuXHJcbiAgaW5uZXJUYXNrQ29udGFpbmVyLmFwcGVuZENoaWxkKHRhc2tUaXRsZSk7XHJcbiAgaW5uZXJUYXNrQ29udGFpbmVyLmFwcGVuZENoaWxkKHRhc2tEZXNjcmlwdGlvbik7XHJcbiAgaW5uZXJUYXNrQ29udGFpbmVyLmFwcGVuZENoaWxkKGR1ZURhdGUpO1xyXG5cclxuICBpbm5lclRhc2tIYW5kbGVyLmFwcGVuZENoaWxkKHRhc2tQcmlvcml0eSk7XHJcbiAgaW5uZXJUYXNrSGFuZGxlci5hcHBlbmRDaGlsZChkZWxldGVUYXNrKTtcclxuXHJcbiAgdGFza0NvbnRhaW5lci5hcHBlbmRDaGlsZChpbm5lclRhc2tDb250YWluZXIpO1xyXG4gIHRhc2tDb250YWluZXIuYXBwZW5kQ2hpbGQoaW5uZXJUYXNrSGFuZGxlcik7XHJcblxyXG4gIGNoZWNrQm94Q29udGFpbmVyLmFwcGVuZENoaWxkKGNoZWNrQm94KTtcclxuICBsaXN0Q29udGFpbmVyLmFwcGVuZENoaWxkKGNoZWNrQm94Q29udGFpbmVyKTtcclxuXHJcbiAgbGlzdENvbnRhaW5lci5hcHBlbmRDaGlsZCh0YXNrQ29udGFpbmVyKTtcclxuICB1c2VyTGlzdC5hcHBlbmRDaGlsZChsaXN0Q29udGFpbmVyKTtcclxuXHJcbiAgdGFza1RpdGxlLmFkZEV2ZW50TGlzdGVuZXIoXCJkYmxjbGlja1wiLCBlZGl0VGFzayk7XHJcbiAgdGFza1RpdGxlLmFkZEV2ZW50TGlzdGVuZXIoXCJ0b3VjaHN0YXJ0XCIsIGVkaXRUYXNrKTtcclxuXHJcbiAgdGFza0Rlc2NyaXB0aW9uLmFkZEV2ZW50TGlzdGVuZXIoXCJkYmxjbGlja1wiLCBlZGl0VGFzayk7XHJcbiAgdGFza0Rlc2NyaXB0aW9uLmFkZEV2ZW50TGlzdGVuZXIoXCJ0b3VjaHN0YXJ0XCIsIGVkaXRUYXNrKTtcclxuXHJcbiAgdGFza1ByaW9yaXR5LmFkZEV2ZW50TGlzdGVuZXIoXCJkYmxjbGlja1wiLCBlZGl0VGFzayk7XHJcbiAgdGFza1ByaW9yaXR5LmFkZEV2ZW50TGlzdGVuZXIoXCJ0b3VjaHN0YXJ0XCIsIGVkaXRUYXNrKTtcclxuXHJcbiAgZHVlRGF0ZS5hZGRFdmVudExpc3RlbmVyKFwiZGJsY2xpY2tcIiwgZWRpdFRhc2spO1xyXG4gIGR1ZURhdGUuYWRkRXZlbnRMaXN0ZW5lcihcInRvdWNoc3RhcnRcIiwgZWRpdFRhc2spO1xyXG5cclxuXHJcblxyXG4gIGRlbGV0ZVRhc2suYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGRlbGV0ZVRvRG8pO1xyXG4gIGRlbGV0ZVRhc2suYWRkRXZlbnRMaXN0ZW5lcihcInRvdWNoc3RhcnRcIiwgZGVsZXRlVG9Ebyk7XHJcblxyXG5cclxuICBoYW5kbGVDaGVja0JveChjaGVja0JveCwgdGFza1RpdGxlLCB0YXNrRGVzY3JpcHRpb24pO1xyXG59XHJcblxyXG5mdW5jdGlvbiBlZGl0VGFzayhldmVudCkge1xyXG4gIGNvbnN0IHRhcmdldCA9IGV2ZW50LnRhcmdldDtcclxuICBjb25zb2xlLmxvZyh0YXJnZXQpO1xyXG4gIGNvbnN0IGZpZWxkVHlwZSA9IHRhcmdldC5kYXRhc2V0LmZpZWxkVHlwZTsgXHJcbiAgY29uc3QgaW5kZXggPSB0YXJnZXQuZGF0YXNldC5pbmRleDtcclxuICBjb25zb2xlLmxvZyhpbmRleCk7XHJcbiAgY29uc3QgdGFza1ByaW9yaXR5ID0gW1wiVXJnZW50XCIsIFwiSW1wb3J0YW50XCIsIFwiTG93IHByaW9yaXR5XCJdO1xyXG5cclxuICBsZXQgdGFza0lucHV0O1xyXG5cclxuICBpZiAoZmllbGRUeXBlID09PSBcInRpdGxlXCIgfHwgZmllbGRUeXBlID09PSBcImRlc2NyaXB0aW9uXCIpIHtcclxuICAgIHRhc2tJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcclxuICAgIHRhc2tJbnB1dC50eXBlID0gXCJ0ZXh0XCI7XHJcbiAgICB0YXNrSW5wdXQudmFsdWUgPSB0YXJnZXQudGV4dENvbnRlbnQ7XHJcbiAgfSBlbHNlIGlmIChmaWVsZFR5cGUgPT09IFwiZHVlRGF0ZVwiKSB7XHJcbiAgICB0YXNrSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XHJcbiAgICB0YXNrSW5wdXQudHlwZSA9IFwiZGF0ZVwiO1xyXG4gICAgdGFza0lucHV0LnZhbHVlID0gdGFyZ2V0LnRleHRDb250ZW50O1xyXG4gIH0gZWxzZSBpZiAoZmllbGRUeXBlID09PSBcInRhc2tQcmlvcml0eVwiKSB7XHJcbiAgICB0YXNrSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VsZWN0XCIpO1xyXG5cclxuICAgIHRhc2tQcmlvcml0eS5mb3JFYWNoKChwcmlvcml0eSkgPT4ge1xyXG4gICAgICBjb25zdCBvcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xyXG4gICAgICBvcHRpb24udmFsdWUgPSBwcmlvcml0eTtcclxuICAgICAgb3B0aW9uLnRleHRDb250ZW50ID0gcHJpb3JpdHk7XHJcblxyXG4gICAgICBpZiAocHJpb3JpdHkgPT09IHRhcmdldC50ZXh0Q29udGVudCkge1xyXG4gICAgICAgIG9wdGlvbi5zZWxlY3RlZCA9IHRydWU7XHJcbiAgICAgIH1cclxuICAgICAgdGFza0lucHV0LmFwcGVuZENoaWxkKG9wdGlvbik7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIFxyXG4gIHRhc2tJbnB1dC5kYXRhc2V0LmZpZWxkVHlwZSA9IGZpZWxkVHlwZTtcclxuICB0YXNrSW5wdXQuZGF0YXNldC5pbmRleCA9IGluZGV4O1xyXG5cclxuICB0YXJnZXQuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG4gIHRhcmdldC5wYXJlbnROb2RlLmluc2VydEJlZm9yZSh0YXNrSW5wdXQsIHRhcmdldC5uZXh0U2libGluZyk7IFxyXG5cclxuICB0YXNrSW5wdXQuY2xhc3NMaXN0LmFkZChcImVkaXRcIik7XHJcblxyXG4gIGlmICh0YXNrSW5wdXQudHlwZSA9PT0gXCJ0ZXh0XCIpIHtcclxuICAgIHRhc2tJbnB1dC5zZWxlY3QoKTsgXHJcbiAgfVxyXG5cclxuICB0YXNrSW5wdXQuYWRkRXZlbnRMaXN0ZW5lcihcImJsdXJcIiwgc2F2ZUVkaXRlZFRhc2spOyBcclxuICB0YXNrSW5wdXQuYWRkRXZlbnRMaXN0ZW5lcihcImtleXByZXNzXCIsIHNhdmVFZGl0ZWRUYXNrKTsgXHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNhdmVFZGl0ZWRUYXNrKGV2ZW50KSB7XHJcbiAgaWYgKGV2ZW50LnR5cGUgPT09IFwiYmx1clwiIHx8IGV2ZW50LmtleSA9PT0gXCJFbnRlclwiKSB7XHJcblxyXG4gICAgbGV0IGlucHV0ID0gZXZlbnQudGFyZ2V0O1xyXG4gICAgY29uc29sZS5sb2coaW5wdXQpO1xyXG4gICAgbGV0IGZpZWxkVHlwZSA9IGlucHV0LmRhdGFzZXQuZmllbGRUeXBlO1xyXG4gICAgbGV0IGluZGV4ID0gaW5wdXQuZGF0YXNldC5pbmRleDsgXHJcbiAgICBcclxuICAgICAgICBjb25zb2xlLmxvZyh0b0Rvcyk7XHJcblxyXG4gICAgbGV0IG5ld1ZhbHVlO1xyXG4gICAgaWYgKGlucHV0LnRhZ05hbWUgPT09IFwiU0VMRUNUXCIpIHtcclxuICAgICAgbmV3VmFsdWUgPSBpbnB1dC5vcHRpb25zW2lucHV0LnNlbGVjdGVkSW5kZXhdLnZhbHVlO1xyXG4gICAgICB0b0Rvc1tpbmRleF0ucHJpb3JpdHkgPSBuZXdWYWx1ZTtcclxuICAgICAgY29uc29sZS5sb2codG9Eb3NbaW5kZXhdLnByaW9yaXR5KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIG5ld1ZhbHVlID0gaW5wdXQudmFsdWU7XHJcbiAgICB9XHJcblxyXG4gICAgXHJcbiAgICBpZiAoaW5kZXggPCB0b0Rvcy5sZW5ndGgpIHtcclxuICAgICAgaWYgKGZpZWxkVHlwZSA9PT0gXCJ0aXRsZVwiKSB7XHJcbiAgICAgICAgdG9Eb3NbaW5kZXhdLnRpdGxlID0gbmV3VmFsdWU7XHJcbiAgICAgICAgY29uc29sZS5sb2codG9Eb3NbaW5kZXhdLnRpdGxlKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhuZXdWYWx1ZSk7XHJcbiAgICAgIH0gZWxzZSBpZiAoZmllbGRUeXBlID09PSBcImRlc2NyaXB0aW9uXCIpIHtcclxuICAgICAgICB0b0Rvc1tpbmRleF0uZGVzY3JpcHRpb24gPSBuZXdWYWx1ZTtcclxuICAgICAgICBjb25zb2xlLmxvZyhpbmRleClcclxuICAgICAgICBjb25zb2xlLmxvZyh0b0Rvc1tkZXNjcmlwdGlvbl0pO1xyXG4gICAgICB9XHJcbiAgICAgIGVsc2UgaWYgKGZpZWxkVHlwZSA9PT0gXCJkdWVEYXRlXCIpIHtcclxuICAgICAgICBsZXQgZHVlRGF0ZSA9IG5ld1ZhbHVlO1xyXG4gICAgICAgIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZShkdWVEYXRlKTtcclxuXHJcbiAgICAgICAgY29uc3Qgb3B0aW9ucyA9IHtcclxuICAgICAgICAgIHdlZWtkYXk6IFwibG9uZ1wiLFxyXG4gICAgICAgICAgeWVhcjogXCJudW1lcmljXCIsXHJcbiAgICAgICAgICBtb250aDogXCJzaG9ydFwiLFxyXG4gICAgICAgICAgZGF5OiBcIm51bWVyaWNcIixcclxuICAgICAgICB9O1xyXG4gICAgY29uc29sZS5sb2codG9Eb3MpO1xyXG5cclxuICAgICAgICB0b0Rvc1tpbmRleF0uZGF0ZSA9IGRhdGUudG9Mb2NhbGVEYXRlU3RyaW5nKFwiZW4tVXNcIiwgb3B0aW9ucyk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIFxyXG5cclxuICAgIFxyXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJ0b0Rvc1wiLCBKU09OLnN0cmluZ2lmeSh0b0RvcykpO1xyXG5cclxuICAgIFxyXG4gICAgbGV0IG9yaWdpbmFsRWxlbWVudCA9IGlucHV0LnByZXZpb3VzU2libGluZztcclxuXHJcbiAgICBvcmlnaW5hbEVsZW1lbnQudGV4dENvbnRlbnQgPSBuZXdWYWx1ZTtcclxuXHJcbiAgICBvcmlnaW5hbEVsZW1lbnQuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcclxuXHJcbiAgICBcclxuICAgIGlucHV0LnJlbW92ZSgpO1xyXG5cclxuICAgIHVzZXJMaXN0LnRleHRDb250ZW50ID0gXCJcIjtcclxuXHJcbiAgICBcclxuICAgIGRpc3BsYXlUb0RvcygpO1xyXG4gIH1cclxuXHJcbn1cclxuXHJcblxyXG5cclxuZnVuY3Rpb24gaGFuZGxlQ2hlY2tCb3goY2hlY2tCb3gsIHRhc2tUaXRsZSwgdGFza0Rlc2NyaXB0aW9uKSB7XHJcbiAgY2hlY2tCb3guYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCAoZXZlbnQpID0+IHtcclxuICAgIGlmIChjaGVja0JveC5jaGVja2VkID09PSB0cnVlKSB7XHJcbiAgICAgIFxyXG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInRvRG9zXCIsIEpTT04uc3RyaW5naWZ5KHRvRG9zKSk7XHJcbiAgICAgIGNvbnNvbGUubG9nKHRvRG9zKTtcclxuXHJcbiAgICAgIHRhc2tEZXNjcmlwdGlvbi5zdHlsZS50ZXh0RGVjb3JhdGlvbiA9IFwibGluZS10aHJvdWdoXCI7XHJcblxyXG4gICAgICBjb25zdCBsaXN0Q29udGFpbmVyRWwgPSBldmVudC50YXJnZXQ7XHJcbiAgICAgIGNvbnNvbGUubG9nKGxpc3RDb250YWluZXJFbCk7XHJcbiAgICAgIGNvbnN0IGluZGV4ID0gbGlzdENvbnRhaW5lckVsLmRhdGFzZXQuaW5kZXg7XHJcbiAgICAgIFxyXG4gICAgICBcclxuXHJcbiAgICAgIGlmIChpbmRleCAhPT0gLTEpIHtcclxuICAgICAgICBsaXN0Q29udGFpbmVyRWwucmVtb3ZlKGxpc3RDb250YWluZXJFbCk7XHJcbiAgICAgICAgdG9Eb3Muc3BsaWNlKGluZGV4LCAxKTtcclxuICAgICAgICBcclxuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInRvRG9zXCIsIEpTT04uc3RyaW5naWZ5KHRvRG9zKSk7XHJcbiAgICAgICAgY29uc29sZS5sb2codG9Eb3MpO1xyXG4gICAgICAgIHVzZXJMaXN0LnRleHRDb250ZW50ID0gXCJcIjtcclxuICAgICAgICBkaXNwbGF5VG9Eb3MoKTtcclxuICAgICAgICBhbGVydChcIlRhc2sgY29tcGxldGVkIVwiKTtcclxuICAgICAgfVxyXG4gICAgICBjb25zb2xlLmxvZyhcInRydWVcIik7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0YXNrVGl0bGUuc3R5bGUudGV4dERlY29yYXRpb24gPSBcIm5vbmVcIjtcclxuICAgICAgdGFza0Rlc2NyaXB0aW9uLnN0eWxlLnRleHREZWNvcmF0aW9uID0gXCJub25lXCI7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwiZmFsc2VcIik7XHJcbiAgICB9XHJcbiAgfSk7XHJcbn1cclxuXHJcblxyXG5mdW5jdGlvbiBkZWxldGVUb0RvKCkge1xyXG4gIGNvbnN0IGxpc3RDb250YWluZXJFbCA9IHRoaXMuY2xvc2VzdChcIi5saXN0Q29udGFpbmVyXCIpO1xyXG4gIGNvbnN0IGJ1dHRvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmRlbGV0ZVRhc2tcIik7XHJcbiAgY29uc3QgaW5kZXggPSBBcnJheS5mcm9tKGJ1dHRvbnMpLmluZGV4T2YodGhpcyk7XHJcblxyXG4gIGlmIChpbmRleCAhPT0gLTEpIHtcclxuICAgIGxpc3RDb250YWluZXJFbC5yZW1vdmUobGlzdENvbnRhaW5lckVsKTtcclxuICAgIHRvRG9zLnNwbGljZShpbmRleCwgMSk7XHJcbiAgICBcclxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwidG9Eb3NcIiwgSlNPTi5zdHJpbmdpZnkodG9Eb3MpKTtcclxuICAgIGNvbnNvbGUubG9nKHRvRG9zKTtcclxuICB9XHJcbn1cclxuXHJcblxyXG5mdW5jdGlvbiBjYW5jZWxGb3JtRGlzcGxheSgpIHtcclxuICBcclxuICBcclxuICBcclxuICBcclxuICB0YXNrVGl0bGUudmFsdWUgPSBcIlwiO1xyXG4gIHRhc2tEZXNjcmlwdGlvbi52YWx1ZSA9IFwiXCI7XHJcbiAgZHVlRGF0ZS52YWx1ZSA9IFwiXCI7XHJcbiAgdGFza1ByaW9yaXR5LnZhbHVlID0gXCJTZWxlY3QgUHJpb3JpdHlcIjtcclxuICBmb3JtLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxufVxyXG5jYW5jZWxGb3JtLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBjYW5jZWxGb3JtRGlzcGxheSk7XHJcblxyXG5mdW5jdGlvbiBzdWJtaXRGb3JtKCkge1xyXG4gIHVzZXJsaXN0LnRleHRDb250ZW50ID0gXCJcIjtcclxuXHJcbiAgYWNjZXB0SW5wdXQoKTtcclxuICBkaXNwbGF5VG9Eb3MoKTtcclxufVxyXG5mb3JtLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgKGV2ZW50KSA9PiBldmVudC5wcmV2ZW50RGVmYXVsdCgpKTtcclxuc3VibWl0QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBzdWJtaXRGb3JtKTtcclxuXHJcbmZ1bmN0aW9uIGRpc3BsYXlJbmJveEZvcm0oKSB7XHJcbiAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImhlYWRlciBoMVwiKTtcclxuICB1c2VybGlzdC50ZXh0Q29udGVudCA9IFwiXCI7XHJcbiAgaGVhZGVyLnRleHRDb250ZW50ID0gXCJJbmJveFwiO1xyXG5cclxuICBkaXNwbGF5VG9Eb3MoKTtcclxuICBmb3JtLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XHJcblxyXG4gIGlmIChpbnB1dE5ld3Byb2plY3RGb3JtTmFtZS5zdHlsZS5kaXNwbGF5ID09PSBcImJsb2NrXCIpIHtcclxuICAgIGlucHV0TmV3cHJvamVjdEZvcm1OYW1lLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuICB9XHJcbiAgcHJvamVjdEZvcm0uc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG59XHJcbmluYm94LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBkaXNwbGF5SW5ib3hGb3JtKTtcclxuIiwiaW1wb3J0IHsgY3JlYXRlTmV3UHJvamVjdFRhc2tCdG4gfSBmcm9tIFwiLi9kb20tRWwtMlwiO1xyXG5sZXQgYXNpZGVFbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJtYWluIGFzaWRlXCIpO1xyXG5sZXQgdG9nZ2xlTWVudUljb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3RvZ2dsZU1lbnVJY29uXCIpO1xyXG5sZXQgc2lkZUJhciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJhc2lkZSNtZW51XCIpO1xyXG5sZXQgcHJvamVjdERyb3BEb3duID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwcm9qZWN0LWRyb3Bkb3duXCIpO1xyXG5sZXQgYWRkTmV3UHJvamVjdEVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2FkTmV3UHJvamVjdEVsJylcclxuXHJcbmNvbnNvbGUubG9nKHByb2plY3REcm9wRG93bik7XHJcblxyXG5jb25zb2xlLmxvZyhhc2lkZUVsKTtcclxuXHJcbmZ1bmN0aW9uIHRvZ2dlbE1lbnUoKSB7XHJcbiAgY29uc29sZS5sb2coXCJ0b2dnbGUgZWxlbWVudCBpcyBjbGlja2VkXCIpO1xyXG4gIHRvZ2dsZU1lbnVJY29uLmNsYXNzTGlzdC50b2dnbGUoXCJhY3RpdmVcIik7XHJcbiAgc2lkZUJhci5jbGFzc0xpc3QudG9nZ2xlKFwiYWN0aXZlXCIpO1xyXG59XHJcbnRvZ2dsZU1lbnVJY29uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB0b2dnZWxNZW51KTtcclxuXHJcbmZ1bmN0aW9uIHJlbW92ZVNpZGVCYXIoZSkge1xyXG4gIGlmIChlLnRhcmdldC50YWdOYW1lID09PSBcIk9QVElPTlwiKSB7XHJcbiAgICB0b2dnbGVNZW51SWNvbi5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xyXG4gICAgc2lkZUJhci5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xyXG4gIH0gZWxzZSBpZiAoXHJcbiAgICBlLnRhcmdldCAhPT0gdG9nZ2xlTWVudUljb24gJiZcclxuICAgIGUudGFyZ2V0ICE9PSBzaWRlQmFyICYmXHJcbiAgICBlLnRhcmdldCAhPT0gcHJvamVjdERyb3BEb3duXHJcbiAgKSB7XHJcbiAgICB0b2dnbGVNZW51SWNvbi5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xyXG4gICAgc2lkZUJhci5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gb3B0aW9uU2VsZWN0ZWQoKSB7XHJcbiAgdG9nZ2xlTWVudUljb24uY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcclxuICBzaWRlQmFyLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XHJcbn1cclxuXHJcbnByb2plY3REcm9wRG93bi5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsIG9wdGlvblNlbGVjdGVkKTtcclxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHJlbW92ZVNpZGVCYXIpO1xyXG5cclxuXHJcblxyXG5cclxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyYztcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSB7XG5cdFx0XHR2YXIgaSA9IHNjcmlwdHMubGVuZ3RoIC0gMTtcblx0XHRcdHdoaWxlIChpID4gLTEgJiYgKCFzY3JpcHRVcmwgfHwgIS9eaHR0cChzPyk6Ly50ZXN0KHNjcmlwdFVybCkpKSBzY3JpcHRVcmwgPSBzY3JpcHRzW2ktLV0uc3JjO1xuXHRcdH1cblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJtYWluXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCAnLi4vc3JjL3N0eWxlcy5jc3MnO1xyXG5pbXBvcnQgZG9tRWwgZnJvbSAnLi9kb20tRWwnO1xyXG5pbXBvcnQgZG9tRWwyIGZyb20gJy4vZG9tLUVsLTInO1xyXG5pbXBvcnQgcmVzcG9uc2l2ZSBmcm9tICcuL3Jlc3BvbnNpdmUnO1xyXG5cclxuXHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==