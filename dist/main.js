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
  
  header.textContent = "Add your To do";
  userList.textContent = "";
  const intialTextDisplayContainer = document.querySelector('.intialTextDisplayContainer')
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
  const intialTextDisplayContainer = document.querySelector(
    ".intialTextDisplayContainer"
  );
  taskTitle.value = "";
  taskDescription.value = "";
  dueDate.value = "";
  taskPriority.value = "Select Priority";
  form.style.display = "none";
    intialTextDisplayContainer.style.display = 'block'

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzBHO0FBQ2pCO0FBQ087QUFDaEcsNENBQTRDLG1IQUFzQztBQUNsRiw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GLHlDQUF5QyxzRkFBK0I7QUFDeEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdDQUFnQyxtQ0FBbUM7QUFDbkU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSyxPQUFPLGlGQUFpRixVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsV0FBVyxTQUFTLEtBQUssVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLGNBQWMsV0FBVyxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssYUFBYSxPQUFPLEtBQUssYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLFdBQVcsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLFFBQVEsS0FBSyxVQUFVLFVBQVUsVUFBVSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLE1BQU0sTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsY0FBYyxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksY0FBYyxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksUUFBUSxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLFdBQVcsWUFBWSxhQUFhLFVBQVUsS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsY0FBYyxRQUFRLEtBQUssWUFBWSxRQUFRLEtBQUssWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsV0FBVyxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksV0FBVyxVQUFVLFVBQVUsUUFBUSxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsU0FBUyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFFBQVEsS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsVUFBVSxRQUFRLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksY0FBYyxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsVUFBVSxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsVUFBVSxVQUFVLFlBQVksV0FBVyxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxPQUFPLE1BQU0sS0FBSyxLQUFLLFVBQVUsWUFBWSxjQUFjLFFBQVEsTUFBTSxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxZQUFZLE1BQU0sTUFBTSxVQUFVLFVBQVUsV0FBVyxVQUFVLEtBQUssVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsWUFBWSxVQUFVLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxhQUFhLE9BQU8sS0FBSyxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLGNBQWMsT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxNQUFNLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxXQUFXLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFVBQVUsYUFBYSxXQUFXLFFBQVEsS0FBSyxVQUFVLFlBQVksY0FBYyxXQUFXLFVBQVUsTUFBTSxLQUFLLFVBQVUsT0FBTyxLQUFLLEtBQUssTUFBTSxNQUFNLFlBQVksV0FBVyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsU0FBUyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsZUFBZSxPQUFPLEtBQUssVUFBVSxZQUFZLGNBQWMsUUFBUSxLQUFLLFVBQVUsWUFBWSxPQUFPLE9BQU8sWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxRQUFRLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sTUFBTSxVQUFVLFlBQVksUUFBUSxNQUFNLE1BQU0sV0FBVyxRQUFRLEtBQUssYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsV0FBVyxNQUFNLE1BQU0sWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLFlBQVksTUFBTSxNQUFNLFVBQVUsVUFBVSxXQUFXLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksTUFBTSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsV0FBVyxLQUFLLFlBQVksYUFBYSxXQUFXLFVBQVUsYUFBYSxXQUFXLFFBQVEsS0FBSyxVQUFVLFlBQVksY0FBYyxhQUFhLFdBQVcsTUFBTSxLQUFLLFVBQVUsT0FBTyxLQUFLLEtBQUssTUFBTSxLQUFLLFlBQVksYUFBYSxXQUFXLFVBQVUsVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxhQUFhLFdBQVcsT0FBTyxLQUFLLFVBQVUsWUFBWSxNQUFNLE1BQU0sS0FBSyxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksYUFBYSxjQUFjLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsT0FBTyxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsUUFBUSxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsY0FBYyxPQUFPLEtBQUssYUFBYSxXQUFXLFlBQVksYUFBYSxTQUFTLEtBQUssWUFBWSxRQUFRLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxZQUFZLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsU0FBUyxNQUFNLFVBQVUsVUFBVSxVQUFVLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsYUFBYSxRQUFRLEtBQUssVUFBVSxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksV0FBVyxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFFBQVEsS0FBSyxVQUFVLFVBQVUsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksU0FBUyxLQUFLLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssS0FBSyxNQUFNLEtBQUssS0FBSyxTQUFTLEtBQUssVUFBVSxVQUFVLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxRQUFRLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFFBQVEsS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxTQUFTLEtBQUssVUFBVSxVQUFVLFlBQVksY0FBYyxPQUFPLEtBQUssVUFBVSxXQUFXLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsV0FBVyxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksV0FBVyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksUUFBUSxLQUFLLFdBQVcsT0FBTyxLQUFLLFVBQVUsV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxPQUFPLEtBQUssVUFBVSxXQUFXLE9BQU8sS0FBSyxZQUFZLFlBQVksT0FBTyxLQUFLLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksTUFBTSxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxNQUFNLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxLQUFLLE1BQU0sS0FBSyxLQUFLLE1BQU0sS0FBSyxZQUFZLGFBQWEsV0FBVyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxVQUFVLFdBQVcsTUFBTSxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxXQUFXLE1BQU0sS0FBSyxZQUFZLFdBQVcsT0FBTyxhQUFhLE1BQU0sWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksV0FBVyxZQUFZLFdBQVcsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssV0FBVyxZQUFZLFdBQVcsWUFBWSxXQUFXLFVBQVUsYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLE9BQU8sS0FBSyxVQUFVLFVBQVUsUUFBUSxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsV0FBVyxjQUFjLE9BQU8sS0FBSyxZQUFZLFNBQVMsS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksV0FBVyxZQUFZLGNBQWMsT0FBTyxLQUFLLGFBQWEsUUFBUSxLQUFLLFVBQVUsVUFBVSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsZUFBZSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxRQUFRLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsUUFBUSxLQUFLLFlBQVksUUFBUSxLQUFLLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxXQUFXLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLFlBQVksT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLFdBQVcsVUFBVSxVQUFVLE9BQU8sS0FBSyxZQUFZLFdBQVcsT0FBTyxLQUFLLFVBQVUsWUFBWSxjQUFjLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksY0FBYyxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsV0FBVyxRQUFRLEtBQUssVUFBVSxh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QyxZQUFZLFdBQVc7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhFQUE4RSx1QkFBdUI7QUFDckc7QUFDQSxJQUFJO0FBQ0o7QUFDQSxvRkFBb0YsOEJBQThCO0FBQ2xIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhCQUE4QixjQUFjO0FBQzVDLG1DQUFtQyxvQkFBb0I7QUFDdkQsZ0NBQWdDLGlCQUFpQjtBQUNqRCwyQkFBMkIsZ0JBQWdCO0FBQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQSw4Q0FBOEM7QUFDOUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlFQUFpRTtBQUNqRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0I7QUFDeEI7QUFDQTtBQUNBLHNEQUFzRDtBQUN0RCwwREFBMEQ7QUFDMUQ7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUNBQXFDO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUN0bEJBO0FBQ3lDO0FBQ2E7QUFDRDtBQUNBO0FBQ0E7QUFDckQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQixrRUFBdUI7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBLElBQUk7QUFDSjtBQUNBLG9GQUFvRiw4QkFBOEI7QUFDbEg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhCQUE4QixjQUFjO0FBQzVDLG1DQUFtQyxvQkFBb0I7QUFDdkQsZ0NBQWdDLGlCQUFpQjtBQUNqRCwyQkFBMkIsZ0JBQWdCO0FBQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU0sOERBQXVCO0FBQzdCLElBQUksOERBQXVCO0FBQzNCO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDbmJxRDtBQUNyRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7VUMxQ0E7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOzs7OztXQ3pCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0NsQkE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOzs7OztXQ3JCQTs7Ozs7Ozs7Ozs7OztBQ0EyQjtBQUNFO0FBQ0c7QUFDTTtBQUN0QztBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlcy5jc3MiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovLy8uL3NyYy9zdHlsZXMuY3NzPzQ0YjIiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZG9tLUVsLTIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RvbS1FbC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVzcG9uc2l2ZS5qcyIsIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovLy8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi9pbWFnZXMvVG9kby0xLmpwZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgICAgIGJvZHkge1xyXG4gICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICB9XHJcblxyXG4gICAgOnJvb3Qge1xyXG4gICAgICAgIC0taG92ZXItY29sb3I6ICNmZGE0YWY7XHJcbiAgICAgICAgLS1iYWNrZ3JvdW5kLWNvbG9yOiAjNmY5ZTllO1xyXG4gICAgfVxyXG5cclxuICAgICoge1xyXG4gICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcblxyXG4gICAgICAgIGZvbnQtZmFtaWx5OiBcIlJvYm90b1wiLCBzYW5zLXNlcmlmO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgfVxyXG5cclxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiA1NTBweCkge1xyXG5cclxuICAgICAgICBib2R5IG1haW4ge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAgei1pbmRleDogMTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIG1haW4gaGVhZGVyIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZkYTRhZjtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAgZ2FwOiAxMHB4O1xyXG4gICAgICAgIH1cclxuXHJcblxyXG5cclxuXHJcbiAgICAgICAgI3RvZ2dsZU1lbnVJY29uIHtcclxuICAgICAgICAgICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgICAgICAgICB0b3A6IDIwcHg7XHJcbiAgICAgICAgICAgIHJpZ2h0OiAyMHB4O1xyXG4gICAgICAgICAgICB3aWR0aDogNjBweDtcclxuICAgICAgICAgICAgaGVpZ2h0OiA2MHB4O1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNmI4ODg4O1xyXG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgICAgICAgICAgIHRyYW5zaXRpb246IHRvcCAwLjNzO1xyXG5cclxuICAgICAgICAgICAgei1pbmRleDogMTAwMDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICN0b2dnbGVNZW51SWNvbjo6YmVmb3JlIHtcclxuICAgICAgICAgICAgY29udGVudDogJyc7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgd2lkdGg6IDI4cHg7XHJcbiAgICAgICAgICAgIGhlaWdodDogMnB4O1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTVweCk7XHJcbiAgICAgICAgICAgIHRyYW5zaXRpb246IDAuMnM7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAjdG9nZ2xlTWVudUljb246OmFmdGVyIHtcclxuICAgICAgICAgICAgY29udGVudDogJyc7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgd2lkdGg6IDI4cHg7XHJcbiAgICAgICAgICAgIGhlaWdodDogMnB4O1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoNXB4KTtcclxuICAgICAgICAgICAgdHJhbnNpdGlvbjogMC4ycztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICN0b2dnbGVNZW51SWNvbi5hY3RpdmU6OmJlZm9yZSB7XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwcHgpIHJvdGF0ZSg0NWRlZyk7XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgI3RvZ2dsZU1lbnVJY29uLmFjdGl2ZTo6YWZ0ZXIge1xyXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMHB4KSByb3RhdGUoLTQ1ZGVnKTtcclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBhc2lkZSNtZW51IHtcclxuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgICAgICAgICAgdG9wOiAwO1xyXG4gICAgICAgICAgICBsZWZ0OiAtMjIwcHg7XHJcbiAgICAgICAgICAgIHdpZHRoOiAyMjBweDtcclxuICAgICAgICAgICAgaGVpZ2h0OiAxMDB2aDtcclxuICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgICBmaWx0ZXI6IHdoaXRlO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNzk4OWExO1xyXG4gICAgICAgICAgICB0cmFuc2l0aW9uOiAwLjNzO1xyXG4gICAgICAgICAgICB6LWluZGV4OiAxMDAwO1xyXG4gICAgICAgICAgICBmaWxsOiB3aGl0ZTtcclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBhc2lkZSNtZW51LmFjdGl2ZSB7XHJcbiAgICAgICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBtYWluIGFzaWRlIHtcclxuICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTJlOGYwO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbWFpbiAjQ29udGFpbmVyIHtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgaGVhZGVyIC5tZW51Q29udHJvbGxlciB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICB3aWR0aDogNDBweDtcclxuICAgICAgICAgICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaGVhZGVyIC5tZW51Q29udHJvbGxlciBzdmcge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgd2lkdGg6IDQwcHg7XHJcbiAgICAgICAgICAgIGhlaWdodDogNDBweDtcclxuICAgICAgICAgICAgZmlsbDogd2hpdGU7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAjdXNlcmxpc3Qge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgICBtYXgtd2lkdGg6IDU1MHB4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZGl2Lmxpc3RDb250YWluZXIge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBnYXA6IDVweDtcclxuICAgICAgICAgICAgbWF4LXdpZHRoOiA1MTVweDtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgICAgICAgICAgYm94LXNoYWRvdzogMXB4IDBweCAzcHggMHB4O1xyXG4gICAgICAgICAgICBtYXJnaW46IDE0cHggMTRweCAwIDE5cHg7XHJcblxyXG4gICAgICAgICAgICBwYWRkaW5nOiAxMHB4O1xyXG5cclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAjdXNlcmxpc3QgLmludGlhbFRleHREaXNwbGF5IHtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5pbnRpYWxUZXh0RGlzcGxheSBpbWcge1xyXG4gICAgICAgICAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIGhlaWdodDogYXV0bztcclxuICAgICAgICAgICAgcGFkZGluZzogMThweDtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMzBweDtcclxuICAgICAgICAgICAgb2JqZWN0LWZpdDogY29udGFpbjtcclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAjdXNlcmxpc3QgI2FkZFRvZG9CdG5Db250YWluZXIge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICBnYXA6IDVweDtcclxuICAgICAgICAgICAgbWFyZ2luOiAyN3B4IDAgMTFweCAyNnB4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgI3Rhc2sge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICBnYXA6IDVweDtcclxuICAgICAgICAgICAgbWFyZ2luOiAyN3B4IDAgMTFweCAyNnB4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgI3VzZXJsaXN0ICNhZGRUb2RvQnRuQ29udGFpbmVyIHN2ZyB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNkYzI2MjY7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgICAgICAgZmlsbDogd2hpdGU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAjdXNlcmxpc3QgI2FkZFRvZG9CdG5Db250YWluZXIgOmhvdmVyIHtcclxuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMS4wOSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAjdXNlcmxpc3QgI2FkZFRvZG9CdG5Db250YWluZXIgYnV0dG9uIHtcclxuICAgICAgICAgICAgYm9yZGVyOiAwO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjYjkxYzFjO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmhlcml0O1xyXG4gICAgICAgICAgICB0cmFuc2l0aW9uOiAwLjNzO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgI3VzZXJsaXN0ICNhZGRUb2RvQnRuQ29udGFpbmVyIGJ1dHRvbjpob3ZlciB7XHJcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEuMDkpO1xyXG4gICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgIC5pbm5lcl9jb250YWluZXIgI2Zvcm0ge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjQ3NDhiO1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgICAgICAgICBtYXgtaGVpZ2h0OiAxMzVweDtcclxuICAgICAgICAgICAgbWF4LXdpZHRoOiA1MTVweCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDE0MHB4O1xyXG4gICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDFyZW07XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgICAgICAgIG1heC13aWR0aDogNDgwcHg7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMTBweCAxMHB4IDAgMTBweDtcclxuICAgICAgICB9XHJcblxyXG5cclxuXHJcblxyXG4gICAgICAgIGRpdi5pbnB1dE5ld3Byb2plY3RGb3JtTmFtZSB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNjZWUzZTM7XHJcbiAgICAgICAgICAgIG1heC13aWR0aDogMzAwcHg7XHJcbiAgICAgICAgICAgIG1heC1oZWlnaHQ6IDMwMHB4O1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAyNXB4O1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIG1hcmdpbjogNjBweCAwIDAgMDtcclxuICAgICAgICAgICAgYm94LXNoYWRvdzogMHB4IDlweCAzcHggMHB4O1xyXG5cclxuICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICAuaW5wdXROZXdwcm9qZWN0Rm9ybU5hbWUgaDIge1xyXG4gICAgICAgICAgICBtYXJnaW46IDAgMCAxMHB4IDA7XHJcbiAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgLmlucHV0TmV3cHJvamVjdEZvcm1OYW1lIC5pbnB1dE5ld1Byb2plY3ROYW1lIHtcclxuICAgICAgICAgICAgbWF4LXdpZHRoOiAzMDBweDtcclxuICAgICAgICAgICAgbWF4LWhlaWdodDogMzVweDtcclxuICAgICAgICAgICAgcGFkZGluZzogMTRweDtcclxuICAgICAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA3cHg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpbnB1dC5TYXZlUHJvamVjdE5hbWUge1xyXG4gICAgICAgICAgICBwYWRkaW5nOiA5cHg7XHJcbiAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gICAgICAgICAgICBtYXgtd2lkdGg6IDEwMHB4O1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTlweDtcclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAucHJvamVjdE5hbWVTYXZlckJ0bkNvbnRhaW5lciB7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMTBweCAwO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLnByb2plY3ROYW1lU2F2ZXJCdG5Db250YWluZXIgYnV0dG9uIHtcclxuICAgICAgICAgICAgcGFkZGluZzogOXB4O1xyXG4gICAgICAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMHB4O1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTlweDtcclxuICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICAuaW5uZXJfY29udGFpbmVyICNQcm9qZWN0Rm9ybSB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICM2NDc0OGI7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICAgICAgICAgIG1heC1oZWlnaHQ6IDEzNHB4O1xyXG4gICAgICAgICAgICBtYXgtd2lkdGg6IDUxNXB4O1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICAgICAgICBtYXgtd2lkdGg6IDUwMHB4O1xyXG4gICAgICAgICAgICBtYXJnaW46IDlweCAxMHB4IDAgMjNweDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5wcm9qZWN0Rm9ybURldGFpbHMge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICAgICAgICAgIGhlaWdodDogODBweDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGRpdi5wcmlvcml0eURhdGVPbkxhcmdlU2NyZWVuIHtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgICAgIG1heC13aWR0aDogMjAwcHg7XHJcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAucHJvamVjdElucHV0Q29udGFpbmVyIHtcclxuICAgICAgICAgICAgbWF4LXdpZHRoOiAyMDBweDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5wcm9qZWN0SW5wdXRDb250YWluZXIgcCBpbnB1dCB7XHJcbiAgICAgICAgICAgIG1heC13aWR0aDogMjAwcHg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuaW5uZXJUYXNrQ29udGFpbmVyIC5lZGl0IHtcclxuICAgICAgICAgICAgbWF4LXdpZHRoOiAxNDBweDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5wcm9qZWN0SW5wdXRDb250YWluZXIgLlBkZXNjcmlwdGlvbklucHV0Q29udGFpbmVyIHtcclxuICAgICAgICAgICAgbWFyZ2luOiAxMHB4IDAgMCAwO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZGl2I2NvbmZpZ1ByaW9yaXR5RGF0ZU9uTW9iaWxlIHtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgICAgbWF4LXdpZHRoOiAyMDBweDtcclxuICAgICAgICAgICAgcG9zaXRpb246IHN0YXRpYztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICNjb25maWdQcmlvcml0eURhdGVPbk1vYmlsZSAjcHJpb3JpdHksICNkYXRlUGlja2VyIHtcclxuICAgICAgICAgICAgcGFkZGluZzogMnB4O1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA2cHg7XHJcbiAgICAgICAgICAgIG1heC13aWR0aDogMTA0cHg7XHJcbiAgICAgICAgICAgIG1pbi13aWR0aDogODBweDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICNQcm9qZWN0Rm9ybSAuZm9vdGVyIHtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAwIDEwcHg7XHJcbiAgICAgICAgICAgIGdhcDogMDtcclxuICAgICAgICB9XHJcblxyXG5cclxuXHJcblxyXG4gICAgICAgICNQcm9qZWN0Rm9ybSAucHJvamVjdEJ1dHRvbnNDb250YWluZXIge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDAgMTBweDtcclxuICAgICAgICAgICAgZ2FwOiAwO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgI2Zvcm0gLmZvcm1EZXRhaWxzIHtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAjZm9ybUZvb3Rlck9uTW9iaWxlIHtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAwIDEwcHg7XHJcbiAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgI2Zvcm1Gb290ZXJPbk1vYmlsZSAuYnV0dG9ucyB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgcGFkZGluZzogMCAxMHB4O1xyXG4gICAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICAgIGdhcDogMDtcclxuICAgICAgICB9XHJcblxyXG5cclxuXHJcbiAgICAgICAgLnByaW9yaXR5RGF0ZUxhcmdlU2NyZWVuIHtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICNmb3JtIC5pbnB1dHMge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgICBtYXgtd2lkdGg6IDE1MHB4O1xyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICNmb3JtIC5maXJzdC1pbnB1dENvbnRhaW5lciBpbnB1dCwgLlB0aXRsZUlucHV0Q29udGFpbmVyIGlucHV0IHtcclxuICAgICAgICAgICAgbWF4LXdpZHRoOiAxNjVweDtcclxuICAgICAgICAgICAgbWF4LWhlaWdodDogMTVweDtcclxuICAgICAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgICAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMTBweCAwO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmhlcml0O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgI2Zvcm0gLnNlY29uZC1pbnB1dENvbnRhaW5lciBpbnB1dCwgLlBkZXNjcmlwdGlvbklucHV0Q29udGFpbmVyIGlucHV0IHtcclxuICAgICAgICAgICAgbWF4LXdpZHRoOiAxNzhweDtcclxuICAgICAgICAgICAgbWF4LWhlaWdodDogMTVweDtcclxuICAgICAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgICAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IGluaGVyaXQ7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICAjZm9ybSAub3RoZXItb3B0aW9ucy1vbi1mb3JtcyBidXR0b24sICNjb25maWdQcmlvcml0eURhdGVPbk1vYmlsZSAjcHJpb3JpdHksICNkYXRlUGlja2VyIHtcclxuICAgICAgICAgICAgcGFkZGluZzogNHB4O1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA2cHg7XHJcbiAgICAgICAgICAgIG1heC13aWR0aDogMTA0cHg7XHJcbiAgICAgICAgICAgIG1pbi13aWR0aDogODBweDtcclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxuICAgIEBtZWRpYSAobWluLXdpZHRoOiA1NTFweCkgYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgICAgICAgYm9keSBtYWluIHtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcblxyXG4gICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgIG1haW4gaGVhZGVyIHtcclxuXHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZGE0YWY7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGdhcDogMTBweDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIG1haW4gYXNpZGUge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNlMmU4ZjA7XHJcbiAgICAgICAgICAgIHotaW5kZXg6IDI7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBhc2lkZSB1bCwgdWwgc2VsZWN0IHtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgICBmaWxsOiB3aGl0ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHNlbGVjdCNwcm9qZWN0LWRyb3Bkb3duIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDQyLCA0MCwgNDkpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbWFpbiAjQ29udGFpbmVyIHtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAgICAgICAgIHotaW5kZXg6IDE7XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaGVhZGVyIC5tZW51Q29udHJvbGxlciB7XHJcblxyXG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgd2lkdGg6IDQwcHg7XHJcbiAgICAgICAgICAgIGhlaWdodDogNDBweDtcclxuXHJcbiAgICAgICAgfVxyXG5cclxuXHJcblxyXG5cclxuICAgICAgICAjdG9nZ2xlTWVudUljb24ge1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICAgICAgICAgIHRvcDogMjBweDtcclxuICAgICAgICAgICAgcmlnaHQ6IDIwcHg7XHJcbiAgICAgICAgICAgIHdpZHRoOiA1MHB4O1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICM2ZjllOWU7XHJcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICAgICAgICAgICAgdHJhbnNpdGlvbjogdG9wIDAuM3M7XHJcbiAgICAgICAgICAgIHotaW5kZXg6IDEwMDA7XHJcblxyXG4gICAgICAgICAgICB6LWluZGV4OiAxMDAwO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgI3RvZ2dsZU1lbnVJY29uOjpiZWZvcmUge1xyXG4gICAgICAgICAgICBjb250ZW50OiAnJztcclxuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICB3aWR0aDogMjhweDtcclxuICAgICAgICAgICAgaGVpZ2h0OiAycHg7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNXB4KTtcclxuICAgICAgICAgICAgdHJhbnNpdGlvbjogMC4ycztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICN0b2dnbGVNZW51SWNvbjo6YWZ0ZXIge1xyXG4gICAgICAgICAgICBjb250ZW50OiAnJztcclxuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICB3aWR0aDogMjhweDtcclxuICAgICAgICAgICAgaGVpZ2h0OiAycHg7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSg1cHgpO1xyXG4gICAgICAgICAgICB0cmFuc2l0aW9uOiAwLjJzO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgI3RvZ2dsZU1lbnVJY29uLmFjdGl2ZTo6YmVmb3JlIHtcclxuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDBweCkgcm90YXRlKDQ1ZGVnKTtcclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAjdG9nZ2xlTWVudUljb24uYWN0aXZlOjphZnRlciB7XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwcHgpIHJvdGF0ZSgtNDVkZWcpO1xyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGFzaWRlI21lbnUge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgICAgIGxlZnQ6IC0yMjBweDtcclxuICAgICAgICAgICAgd2lkdGg6IDIyMHB4O1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDEwMHZoO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kLWNvbG9yKTtcclxuICAgICAgICAgICAgdHJhbnNpdGlvbjogMC4zcztcclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBhc2lkZSNtZW51LmFjdGl2ZSB7XHJcbiAgICAgICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBhc2lkZSB1bCB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgICAgZmlsbDogd2hpdGU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBoZWFkZXIgLm1lbnVDb250cm9sbGVyIHN2ZyB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICB3aWR0aDogNDBweDtcclxuICAgICAgICAgICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgICAgICAgICBmaWxsOiB3aGl0ZTtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHhcclxuICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICAjdXNlcmxpc3QgI2FkZFRvZG9CdG5Db250YWluZXIge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICBnYXA6IDVweDtcclxuICAgICAgICAgICAgbWFyZ2luOiAyN3B4IDAgMTFweCAyNnB4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgI3Rhc2sge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICBnYXA6IDVweDtcclxuICAgICAgICAgICAgbWFyZ2luOiAyN3B4IDAgMTFweCAyNnB4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgI3VzZXJsaXN0ICNhZGRUb2RvQnRuQ29udGFpbmVyIHN2ZyB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNkYzI2MjY7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgICAgICAgZmlsbDogd2hpdGU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAjdXNlcmxpc3QgI2FkZFRvZG9CdG5Db250YWluZXIgOmhvdmVyIHtcclxuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMS4wOSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAjdXNlcmxpc3QgI2FkZFRvZG9CdG5Db250YWluZXIgYnV0dG9uIHtcclxuICAgICAgICAgICAgYm9yZGVyOiAwO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjYjkxYzFjO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmhlcml0O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgI3VzZXJsaXN0ICNhZGRUb2RvQnRuQ29udGFpbmVyIGJ1dHRvbjpob3ZlciB7XHJcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEuMDkpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZGl2Lmxpc3RDb250YWluZXIge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBnYXA6IDVweDtcclxuICAgICAgICAgICAgbWF4LXdpZHRoOiA3MTRweDtcclxuXHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IDFweCAwcHggM3B4IDBweDtcclxuICAgICAgICAgICAgbWFyZ2luOiAxOHB4IDYwcHg7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDE1cHg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAjdXNlcmxpc3QgLmludGlhbFRleHREaXNwbGF5IHtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5pbnRpYWxUZXh0RGlzcGxheSBwIHtcclxuICAgICAgICAgICAgbWF4LXdpZHRoOiA1MDBweDtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgbWF4LXdpZHRoOiA1MDBweDtcclxuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmludGlhbFRleHREaXNwbGF5IGltZyB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDQxcHg7XHJcbiAgICAgICAgICAgIG9iamVjdC1maXQ6IGNvbnRhaW47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuaW5uZXJfY29udGFpbmVyICNmb3JtIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzY0NzQ4YjtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgICAgICAgICAgaGVpZ2h0OiAxNTBweDtcclxuICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgICAgICAgbWF4LXdpZHRoOiA2MDBweDtcclxuXHJcbiAgICAgICAgICAgIG1hcmdpbjogMTdweDtcclxuICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICAjZm9ybSBkaXYuZm9ybURldGFpbHMge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblxyXG4gICAgICAgICAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAucHJpb3JpdHlEYXRlTGFyZ2VTY3JlZW4ge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgI2Zvcm0gLmlucHV0cyB7XHJcbiAgICAgICAgICAgIG1heC13aWR0aDogMTUwcHhcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICNmb3JtIC5maXJzdC1pbnB1dENvbnRhaW5lciBpbnB1dCwgLlB0aXRsZUlucHV0Q29udGFpbmVyIGlucHV0LFxyXG4gICAgICAgICNmb3JtIC5zZWNvbmQtaW5wdXRDb250YWluZXIgaW5wdXQsIC5QZGVzY3JpcHRpb25JbnB1dENvbnRhaW5lciBpbnB1dCB7XHJcbiAgICAgICAgICAgIG1heC13aWR0aDogNjAwcHg7XHJcbiAgICAgICAgICAgIGhlaWdodDogMjVweDtcclxuICAgICAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgICAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMTBweCAwIDAgMDtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogaW5oZXJpdDtcclxuICAgICAgICB9XHJcblxyXG5cclxuXHJcbiAgICAgICAgcC5zZWNvbmQtaW5wdXRDb250YWluZXIge1xyXG4gICAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAjZm9ybSAuYnV0dG9ucyB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMXB4IDIzcHg7XHJcblxyXG5cclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAjY29uZmlnUHJpb3JpdHlEYXRlT25Nb2JpbGUge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogc3RhdGljO1xyXG5cclxuICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICAjZm9ybSAub3RoZXItb3B0aW9ucy1vbi1mb3JtcyBidXR0b24sICNwcmlvcml0eSwgI2RhdGVQaWNrZXIge1xyXG4gICAgICAgICAgICBwYWRkaW5nOiA3cHg7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDlweDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZvcm0jUHJvamVjdEZvcm0ge1xyXG5cclxuXHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICM2NDc0OGI7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICAgICAgICAgIGhlaWdodDogMTUwcHg7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgICAgICAgIG1heC13aWR0aDogNjkzcHg7XHJcbiAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMXJlbTtcclxuICAgICAgICAgICAgbWFyZ2luOiA5cHggNjFweDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGRpdi5wcm9qZWN0Rm9ybURldGFpbHMge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgICAgICAgIHRvcDogMDtcclxuICAgICAgICB9XHJcblxyXG5cclxuXHJcbiAgICB9XHJcblxyXG4gICAgKi8gLnByb2plY3RCdXR0b25zQ29udGFpbmVyIHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgfVxyXG5cclxuICAgIHNlbGVjdCNwcmlvcml0eSB7XHJcbiAgICAgICAgcGFkZGluZzogNHB4O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDlweDtcclxuICAgIH1cclxuXHJcbiAgICBpbnB1dCNkYXRlUGlja2VyIHtcclxuXHJcbiAgICAgICAgcGFkZGluZzogM3B4O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDlweDtcclxuICAgIH1cclxuXHJcblxyXG4gICAgQG1lZGlhIChtaW4td2lkdGg6IDc2OXB4KSBhbmQgKG1heC13aWR0aDogMTAwMHB4KSB7XHJcblxyXG4gICAgICAgIGJvZHkgbWFpbiB7XHJcblxyXG4gICAgICAgICAgICBkaXNwbGF5OiBncmlkO1xyXG5cclxuICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICBtYWluIGhlYWRlciB7XHJcbiAgICAgICAgICAgIGdyaWQtYXJlYTogMSAvIDIgLyAyIC8gNjtcclxuXHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZGE0YWY7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGdhcDogMTBweDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIG1haW4gYXNpZGUge1xyXG5cclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTJlOGYwO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbWFpbiAjQ29udGFpbmVyIHtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAgICAgICAgIHotaW5kZXg6IDE7XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaGVhZGVyIC5tZW51Q29udHJvbGxlciB7XHJcblxyXG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgd2lkdGg6IDQwcHg7XHJcbiAgICAgICAgICAgIGhlaWdodDogNDBweDtcclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBoZWFkZXIgLm1lbnVDb250cm9sbGVyIHN2ZyB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICB3aWR0aDogNDBweDtcclxuICAgICAgICAgICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgICAgICAgICBmaWxsOiB3aGl0ZTtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHhcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICN1c2VybGlzdCAuaW50aWFsVGV4dERpc3BsYXkge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgI3VzZXJsaXN0IC5pbnRpYWxUZXh0RGlzcGxheSBwIHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxLjJyZW07XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgICAgICAgbWFyZ2luOiAxMHB4IDAgMCAwO1xyXG4gICAgICAgICAgICBtYXgtd2lkdGg6IDYwMHB4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgI3VzZXJsaXN0ICNhZGRUb2RvQnRuQ29udGFpbmVyIHtcclxuICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgZ2FwOiA1cHg7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMjdweCAwIDExcHggMjZweDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICN0YXNrIHtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgZ2FwOiA1cHg7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMjdweCAwIDExcHggMjZweDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICN1c2VybGlzdCAjYWRkVG9kb0J0bkNvbnRhaW5lciBzdmcge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGMyNjI2O1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgICAgIGZpbGw6IHdoaXRlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgI3VzZXJsaXN0ICNhZGRUb2RvQnRuQ29udGFpbmVyIDpob3ZlciB7XHJcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEuMDkpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgI3VzZXJsaXN0ICNhZGRUb2RvQnRuQ29udGFpbmVyIGJ1dHRvbiB7XHJcbiAgICAgICAgICAgIGJvcmRlcjogMDtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgICAgICBjb2xvcjogI2I5MWMxYztcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogaW5oZXJpdDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICN1c2VybGlzdCAjYWRkVG9kb0J0bkNvbnRhaW5lciBidXR0b246aG92ZXIge1xyXG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxLjA5KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGRpdi5saXN0Q29udGFpbmVyIHtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgZ2FwOiA1cHg7XHJcbiAgICAgICAgICAgIG1heC13aWR0aDogNzE0cHg7XHJcblxyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgICAgICAgICBib3gtc2hhZG93OiAxcHggMHB4IDNweCAwcHg7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMThweCA2MHB4O1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAxNXB4O1xyXG4gICAgICAgIH1cclxuXHJcblxyXG5cclxuXHJcblxyXG4gICAgICAgIC5pbm5lcl9jb250YWluZXIgI2Zvcm0ge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjQ3NDhiO1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDE1MHB4O1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICAgICAgICBtYXgtd2lkdGg6IDc1MHB4O1xyXG5cclxuICAgICAgICAgICAgbWFyZ2luOiAxN3B4O1xyXG4gICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgICNmb3JtIGRpdi5mb3JtRGV0YWlscyB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDlweCAyMHB4O1xyXG4gICAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAucHJpb3JpdHlEYXRlTGFyZ2VTY3JlZW4ge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgI2Zvcm0gLmlucHV0cyB7XHJcbiAgICAgICAgICAgIG1heC13aWR0aDogMTUwcHhcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICNmb3JtIC5maXJzdC1pbnB1dENvbnRhaW5lciBpbnB1dCwgLlB0aXRsZUlucHV0Q29udGFpbmVyIGlucHV0IHtcclxuICAgICAgICAgICAgbWF4LXdpZHRoOiA0MjBweDtcclxuICAgICAgICAgICAgbWF4LWhlaWdodDogNjBweDtcclxuICAgICAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgICAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IGluaGVyaXQ7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICNmb3JtIC5zZWNvbmQtaW5wdXRDb250YWluZXIgaW5wdXQsIC5QZGVzY3JpcHRpb25JbnB1dENvbnRhaW5lciBpbnB1dCB7XHJcbiAgICAgICAgICAgIG1heC13aWR0aDogNDIwcHg7XHJcbiAgICAgICAgICAgIG1heC1oZWlnaHQ6IDYwcHg7XHJcbiAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgICAgICAgb3V0bGluZTogbm9uZTtcclxuICAgICAgICAgICAgY29sb3I6IHJnYig5MCwgNzcsIDc3KTtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogaW5oZXJpdDtcclxuICAgICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgICNmb3JtIC5idXR0b25zIHtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICAgICAgICBtYXJnaW46IDFweCAzM3B4XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmb3JtI1Byb2plY3RGb3JtIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzY0NzQ4YjtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgICAgICAgICAgaGVpZ2h0OiAxNTBweDtcclxuICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgICAgICAgbWF4LXdpZHRoOiA2OTNweDtcclxuICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAxcmVtO1xyXG4gICAgICAgICAgICBtYXJnaW46IDlweCA2MXB4O1xyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGRpdi5wcm9qZWN0Rm9ybURldGFpbHMge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgICAgICAgIHRvcDogMDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGRpdi5wcmlvcml0eURhdGVPbkxhcmdlU2NyZWVuIHtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICB0b3A6IDA7XHJcblxyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5wcm9qZWN0QnV0dG9uc0NvbnRhaW5lciB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICNjb25maWdQcmlvcml0eURhdGVPbk1vYmlsZSB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBzdGF0aWM7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAjZm9ybSAub3RoZXItb3B0aW9ucy1vbi1mb3JtcyBidXR0b24sICNwcmlvcml0eSwgI2RhdGVQaWNrZXIge1xyXG4gICAgICAgICAgICBwYWRkaW5nOiA4cHg7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDZweDtcclxuICAgICAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcblxyXG4gICAgbWFpbiB7XHJcbiAgICAgICAgZGlzcGxheTogZ3JpZDtcclxuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDE5MHB4IDFmcjtcclxuICAgICAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDcwcHggNTcwcHg7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIGhlYWRlciB7XHJcbiAgICAgICAgZ3JpZC1hcmVhOiAxIC8gMiAvIDIgLyA2O1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZGE0YWY7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIH1cclxuXHJcbiAgICBhc2lkZSB7XHJcbiAgICAgICAgZ3JpZC1hcmVhOiAxLyAxLyA0LyAyO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTJlOGYwO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICAjQ29udGFpbmVyIHtcclxuICAgICAgICBncmlkLWFyZWE6IDIgLyAyIC8gMyAvIDQ7XHJcblxyXG4gICAgICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxMDBweCA2NTBweCAzNTBweDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICB9XHJcblxyXG5cclxuXHJcbiAgICAuaW5uZXJfY29udGFpbmVyIHtcclxuICAgICAgICBncmlkLWFyZWE6IDEgLyAyIC8gMyAvIDM7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC5pbnRpYWxUZXh0RGlzcGxheSB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgcGFkZGluZzogMTBweDtcclxuICAgIH1cclxuXHJcbiAgICAuaW50aWFsVGV4dERpc3BsYXkgcCB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxLjJyZW07XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgICAgbWFyZ2luOiAxMHB4IDAgMCAwO1xyXG4gICAgfVxyXG5cclxuICAgIC5pbnRpYWxUZXh0RGlzcGxheSBpbWcge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGhlaWdodDogYXV0bztcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xyXG4gICAgICAgIHBhZGRpbmc6IDIwcHg7XHJcblxyXG4gICAgfVxyXG5cclxuICAgICNhZGRUb2RvQnRuQ29udGFpbmVyIHtcclxuICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgfVxyXG5cclxuICAgIC5lbXB0eSB7XHJcbiAgICAgICAgZ3JpZC1hcmVhOiAxIC8gMyAvIDUgLyA0O1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmOGY4Zjg7XHJcbiAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fX30pO1xyXG4gICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gICAgfVxyXG5cclxuXHJcblxyXG4gICAgLm1lbnVDb250cm9sbGVyIHtcclxuXHJcbiAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgICB3aWR0aDogNDBweDtcclxuICAgICAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgLmNoZWNrQm94IHtcclxuICAgICAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XHJcbiAgICAgICAgLW1vei1hcHBlYXJhbmNlOiBub25lO1xyXG4gICAgICAgIHdpZHRoOiAyMHB4O1xyXG4gICAgICAgIGhlaWdodDogMjBweDtcclxuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICAgICAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcblxyXG4gICAgfVxyXG5cclxuXHJcbiAgICAuY2hlY2tCb3g6OmJlZm9yZSB7XHJcbiAgICAgICAgY29udGVudDogXCJcIjtcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgdG9wOiA1MCU7XHJcbiAgICAgICAgbGVmdDogNTAlO1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICBjb2xvcjogcmdiKDIyLCAyNTIsIDIyKTtcclxuICAgICAgICBvcGFjaXR5OiAwO1xyXG4gICAgICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMC4zcyBlYXNlO1xyXG4gICAgfVxyXG5cclxuICAgIC5jaGVja0JveDpob3Zlcjo6YmVmb3JlIHtcclxuICAgICAgICBjb250ZW50OiBcIuKck1wiO1xyXG4gICAgICAgIG9wYWNpdHk6IDAuNTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgc3ZnIHtcclxuICAgICAgICB3aWR0aDogMjVweDtcclxuICAgICAgICBoZWlnaHQ6IDI1cHg7XHJcbiAgICB9XHJcblxyXG4gICAgI3Rhc2sge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICBnYXA6IDVweDtcclxuICAgICAgICBtYXJnaW46IDI3cHggMCAxMXB4IDI2cHg7XHJcbiAgICB9XHJcblxyXG5cclxuXHJcbiAgICAjdGFzayBzdmcge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNkYzI2MjY7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICAgIGZpbGw6IHdoaXRlO1xyXG4gICAgfVxyXG5cclxuICAgICN0YXNrIDpob3ZlciB7XHJcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxLjA5KTtcclxuICAgIH1cclxuXHJcbiAgICAjdGFzayBidXR0b24ge1xyXG4gICAgICAgIGJvcmRlcjogMDtcclxuICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgY29sb3I6ICNiOTFjMWM7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogaW5oZXJpdDtcclxuICAgIH1cclxuXHJcbiAgICAjdGFzayBidXR0b246aG92ZXIge1xyXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMS4wOSk7XHJcbiAgICB9XHJcblxyXG4gICAgYnV0dG9uLmRlbGV0ZVRhc2sge1xyXG4gICAgICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDdweDtcclxuICAgICAgICBmb250LXNpemU6IDEuMXJlbTtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTA0ODdjO1xyXG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4ycyBlYXNlLW91dDtcclxuICAgIH1cclxuXHJcbiAgICBidXR0b24uZGVsZXRlVGFzazpob3ZlciB7XHJcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpXHJcbiAgICB9XHJcblxyXG4gICAgYnV0dG9uLmRlbGV0ZVRhc2s6YWN0aXZlIHtcclxuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDAuOSlcclxuICAgIH1cclxuXHJcblxyXG5cclxuXHJcbiAgICAubGlzdENvbnRhaW5lciB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBnYXA6IDVweDtcclxuICAgICAgICBtYXgtd2lkdGg6IDcxNHB4O1xyXG5cclxuICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgICAgIGJveC1zaGFkb3c6IDFweCAwcHggM3B4IDBweDtcclxuICAgICAgICBtYXJnaW46IDE4cHggMThweDtcclxuICAgICAgICBwYWRkaW5nOiAxNXB4O1xyXG5cclxuXHJcbiAgICB9XHJcblxyXG5cclxuICAgIC5wcmlvcml0eURhdGVPbkxhcmdlU2NyZWVuIHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICBtYXgtd2lkdGg6IDIwMHB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5wcm9qZWN0QnV0dG9uc0NvbnRhaW5lciB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICB9XHJcblxyXG4gICAgLnByb2plY3RCdXR0b25zQ29udGFpbmVyIGJ1dHRvbiB7XHJcbiAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDdweDtcclxuICAgICAgICBwYWRkaW5nOiA5cHg7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC5leGNsdWRlZCB7XHJcbiAgICAgICAgY29sb3I6IHJlZDtcclxuICAgIH1cclxuXHJcbiAgICAudGFza0NvbnRhaW5lciB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBmbGV4OiAxO1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIH1cclxuXHJcblxyXG5cclxuICAgIC50YXNrVGl0bGUsIC5uZXdQcm9qZWN0LXRhc2stdGl0bGUsIC5lZGl0YWJsZVNhdmVUYXNrRWwge1xyXG4gICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgIHRleHQtZGVjb3JhdGlvbi1jb2xvcjogcmVkO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICAudGFza0Rlc2NyaXB0aW9uLCAubmV3UHJvamVjdC1kZXNjcmlwdGlvbiB7XHJcbiAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgLnRhc2tQcmlvcml0eSB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxOXB4O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDZweDtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTczZDNkO1xyXG4gICAgICAgIHBhZGRpbmc6IDZweDtcclxuICAgICAgICBtYXJnaW46IDAgMCA3cHg7XHJcbiAgICAgICAgY29sb3I6IHdoaXRlO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICAuaW5uZXJUYXNrSGFuZGxlciB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIG1hcmdpbjogMHB4IDE1cHggMCA0MHB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5pbmJveC1jb250YWluZXIge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICBnYXA6IDVweDtcclxuICAgICAgICBtYXJnaW46IDBweCAwIDAgMTZweDtcclxuICAgICAgICBoZWlnaHQ6IDI2cHg7XHJcbiAgICAgICAgcGFkZGluZzogOXB4O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDVweCAwcHggMHB4IDVweDtcclxuICAgIH1cclxuXHJcbiAgICAuaW5ib3gtY29udGFpbmVyOmhvdmVyIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ob3Zlci1jb2xvcik7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC5pbmJveCB7XHJcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG5cclxuICAgIH1cclxuXHJcbiAgICAuaW5ib3hMaXN0Q29udGFpbmVyIHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGdhcDogNXB4O1xyXG5cclxuICAgIH1cclxuXHJcbiAgICAuaW5ib3hUYXNrQ29udGFpbmVyIHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGZsZXg6IDE7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgfVxyXG5cclxuICAgIC5pbmJveFRhc2tUaXRsZSB7XHJcbiAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIH1cclxuXHJcbiAgICAuaW5ib3hUYXNrRGVzY3JpcHRpb24ge1xyXG4gICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIC5pbmJveFRhc2tQcmlvcml0eSB7XHJcbiAgICAgICAgbWFyZ2luOiAwIDIwcHggMCAwO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgLmR1ZURhdGUge1xyXG4gICAgICAgIG1hcmdpbjogMDtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgLmVkaXQge1xyXG4gICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTdweDtcclxuICAgICAgICBtYXgtd2lkdGg6IDExMHB4O1xyXG4gICAgICAgIG1hcmdpbjogMCAwXHJcbiAgICB9XHJcblxyXG4gICAgI3Byb2plY3RzIGgzIHtcclxuICAgICAgICBtYXJnaW46IDAgMCAwIDEwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgI2Zvcm0ge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICM2NDc0OGI7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgICAgICBoZWlnaHQ6IDE0MHB4O1xyXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAxcmVtO1xyXG4gICAgICAgIG1hcmdpbjogMTBweCAxMHB4IDAgMDtcclxuICAgIH1cclxuXHJcbiAgICAuZm9ybURldGFpbHMge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgICAgbWFyZ2luOiAxMnB4IDE1cHg7XHJcbiAgICB9XHJcblxyXG4gICAgaW5wdXQjZGF0ZVBpY2tlciB7XHJcbiAgICAgICAgbWF4LXdpZHRoOiAxMThweDtcclxuICAgIH1cclxuXHJcbiAgICAuYnV0dG9ucyB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgICAgbWFyZ2luOiAxcHggMzNweFxyXG4gICAgfVxyXG5cclxuICAgIC5idXR0b25zIGJ1dHRvbiB7XHJcbiAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDdweDtcclxuICAgICAgICBwYWRkaW5nOiA3cHg7XHJcbiAgICAgICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMnMgZWFzZS1vdXRcclxuICAgIH1cclxuXHJcbiAgICAuYnV0dG9ucyBidXR0b246aG92ZXIge1xyXG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wNSlcclxuICAgIH1cclxuXHJcbiAgICAjUHJvamVjdEZvcm0ge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICM2NDc0OGI7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgICAgICBoZWlnaHQ6IDE1MHB4O1xyXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgICAgcGFkZGluZzogMTBweDtcclxuICAgICAgICBtYXJnaW46IDE1cHggMTVweCAwIDE3cHg7XHJcbiAgICB9XHJcblxyXG4gICAgLnByb2plY3RGb3JtRGV0YWlscyB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgICB0b3A6IDA7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC5maXJzdC1pbnB1dENvbnRhaW5lciBpbnB1dCwgLlB0aXRsZUlucHV0Q29udGFpbmVyIGlucHV0IHtcclxuICAgICAgICBtYXgtd2lkdGg6IDYwMHB4O1xyXG4gICAgICAgIGhlaWdodDogMjVweDtcclxuICAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgICAgb3V0bGluZTogbm9uZTtcclxuICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgbWFyZ2luOiAxMHB4IDAgMCAwO1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IGluaGVyaXQ7XHJcbiAgICB9XHJcblxyXG4gICAgLnRhc2stdGl0bGUsIC5kZXNjcmlwdGlvbiB7XHJcbiAgICAgICAgd2lkdGg6IDM1MHB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5maXJzdC1pbnB1dENvbnRhaW5lciBpbnB1dDo6cGxhY2Vob2xkZXIsIC5QdGl0bGVJbnB1dENvbnRhaW5lciBpbnB1dDo6cGxhY2Vob2xkZXIge1xyXG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICBwYWRkaW5nOiAwIDEwcHg7XHJcbiAgICAgICAgb3BhY2l0eTogMTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgLnNlY29uZC1pbnB1dENvbnRhaW5lciBpbnB1dCwgLlBkZXNjcmlwdGlvbklucHV0Q29udGFpbmVyIGlucHV0IHtcclxuICAgICAgICBtYXgtd2lkdGg6IDYwMHB4O1xyXG4gICAgICAgIGhlaWdodDogMjVweDtcclxuICAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgICAgb3V0bGluZTogbm9uZTtcclxuICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogaW5oZXJpdDtcclxuICAgICAgICBtYXJnaW46IDA7XHJcbiAgICB9XHJcblxyXG4gICAgLnNlY29uZC1pbnB1dENvbnRhaW5lciBpbnB1dDo6cGxhY2Vob2xkZXIsIC5QZGVzY3JpcHRpb25JbnB1dENvbnRhaW5lciBpbnB1dDo6cGxhY2Vob2xkZXIge1xyXG4gICAgICAgIHBhZGRpbmc6IDAgMTBweDtcclxuICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgb3BhY2l0eTogMTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgLmZpcnN0LWlucHV0Q29udGFpbmVyLCAuc2Vjb25kLWlucHV0Q29udGFpbmVyIHtcclxuICAgICAgICBtYXJnaW46IDEwcHggMCAwIDA7XHJcbiAgICAgICAgZm9udC1zaXplOiAxcmVtO1xyXG4gICAgfVxyXG5cclxuICAgIC5vdGhlci1vcHRpb25zLW9uLWZvcm1zLCAuZm9vdGVyIHt9XHJcblxyXG4gICAgLnN1Ym1pdEJ0bjphY3RpdmUge1xyXG4gICAgICAgIHRyYW5zZm9ybTogYWN0aXZlIHNjYWxlKDEuMSk7XHJcbiAgICB9XHJcblxyXG4gICAgLm90aGVyLW9wdGlvbnMtb24tZm9ybXMgYnV0dG9uLCAjcHJpb3JpdHksIGlucHV0I2RhdGVQaWNrZXIge1xyXG4gICAgICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAuM3MgZWFzZS1pbjtcclxuICAgICAgICBwYWRkaW5nOiA3cHg7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogN3B4O1xyXG4gICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDdjNGRkO1xyXG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIH1cclxuXHJcbiAgICAjcHJpb3JpdHkge1xyXG4gICAgICAgIG1hcmdpbjogMTBweCAwIDhweCAwO1xyXG4gICAgfVxyXG5cclxuICAgICNwcm9qZWN0UHJpb3JpdHksIC5mb290ZXIge1xyXG4gICAgICAgIHBhZGRpbmc6IDdweDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAgICAgbWFyZ2luOiAwIDRweCA1cHggMDtcclxuICAgIH1cclxuXHJcbiAgICAuYWRkUHJvamVjdHNDb250YWluZXIge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcblxyXG4gICAgICAgIG1hcmdpbjogMCAwIDAgMjBweDtcclxuICAgICAgICBwYWRkaW5nOiA3cHg7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICBnYXA6IDEwcHg7XHJcbiAgICAgICAgaGVpZ2h0OiAyNXB4O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDVweCAwcHggMHB4IDVweDtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgLmFkZFByb2plY3RzQ29udGFpbmVyOmhvdmVyIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ob3Zlci1jb2xvcik7XHJcbiAgICB9XHJcblxyXG4gICAgLmFkZFByb2plY3RzQ29udGFpbmVyIHN2ZyB7XHJcbiAgICAgICAgd2lkdGg6IDI1cHg7XHJcbiAgICAgICAgaGVpZ2h0OiAyNXB4O1xyXG4gICAgfVxyXG5cclxuICAgICNhZGROZXdQcm9qZWN0RWwge1xyXG4gICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICBmb250LXNpemU6IDE5cHg7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC5wcm9qZWN0X3RleHQge1xyXG4gICAgICAgIG1hcmdpbjogMCAwIDEwcHggMTdweDtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcclxuICAgICAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcclxuICAgICAgICBwYWRkaW5nOiA5cHg7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4IDBweCAwcHggNXB4O1xyXG5cclxuXHJcbiAgICB9XHJcblxyXG4gICAgLnByb2plY3RfdGV4dDpob3ZlciB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taG92ZXItY29sb3IpO1xyXG4gICAgfVxyXG5cclxuXHJcblxyXG4gICAgI3Byb2plY3QtZHJvcGRvd24ge1xyXG4gICAgICAgIGJvcmRlcjogMDtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmhlcml0O1xyXG4gICAgICAgIG1hcmdpbjogNXB4IDAgMCAxN3B4O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgICAgICBmb250LXdlaWdodDogNTUwO1xyXG4gICAgICAgIHBhZGRpbmc6IDhweDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA1cHggMHB4IDBweCA1cHg7XHJcbiAgICAgICAgbWF4LXdpZHRoOiAxNjBweDtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgI3Byb2plY3QtZHJvcGRvd246aG92ZXIge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWhvdmVyLWNvbG9yKTtcclxuXHJcbiAgICB9XHJcblxyXG5cclxuICAgICNwcm9qZWN0LWRyb3Bkb3duOmZvY3VzIHtcclxuICAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgICAgb3V0bGluZTogbm9uZTtcclxuICAgIH1cclxuXHJcbiAgICAjbmV3UHJvamVjdHNGb3JtQ29udGFpbmVyRWwge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XHJcblxyXG5cclxuICAgIH1cclxuXHJcbiAgICAjUHJvamVjdHNGb3JtTmFtZUNvbnRhaW5lckVsIHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAganVzdGlmeS1pdGVtczogY2VudGVyO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAuaW5wdXROZXdwcm9qZWN0Rm9ybU5hbWUge1xyXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2NlZTNlMztcclxuICAgICAgICBtYXgtd2lkdGg6IDQwMHB4O1xyXG4gICAgICAgIG1heC1oZWlnaHQ6IDMwMHB4O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICAgICAgcGFkZGluZzogNDZweDtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgbWFyZ2luOiA2MHB4IDAgMCAwO1xyXG4gICAgICAgIGJveC1zaGFkb3c6IDBweCA5cHggM3B4IDBweDtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLmlucHV0TmV3cHJvamVjdEZvcm1OYW1lIGgyIHtcclxuICAgICAgICBtYXJnaW46IDAgMCAxMHB4IDA7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC5pbnB1dE5ld1Byb2plY3ROYW1lIHtcclxuICAgICAgICBtYXgtd2lkdGg6IDM1MHB4O1xyXG4gICAgICAgIG1heC1oZWlnaHQ6IDM1cHg7XHJcbiAgICAgICAgcGFkZGluZzogMTdweDtcclxuICAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogN3B4O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTlweDtcclxuICAgIH1cclxuXHJcbiAgICBpbnB1dC5TYXZlUHJvamVjdE5hbWUge1xyXG4gICAgICAgIHBhZGRpbmc6IDlweDtcclxuICAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gICAgICAgIG1heC13aWR0aDogMTAwcHg7XHJcbiAgICAgICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTlweDtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQwLCA1OSwgMTM0KTtcclxuICAgICAgICBjb2xvcjogd2hpdGU7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIC5wcm9qZWN0TmFtZVNhdmVyQnRuQ29udGFpbmVyIHtcclxuICAgICAgICBtYXJnaW46IDEwcHggMDtcclxuICAgIH1cclxuXHJcbiAgICAucHJvamVjdE5hbWVTYXZlckJ0bkNvbnRhaW5lciBidXR0b24ge1xyXG4gICAgICAgIHBhZGRpbmc6IDlweDtcclxuICAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gICAgICAgIHdpZHRoOiAxMDBweDtcclxuICAgICAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICAgICAgZm9udC1zaXplOiAxOXB4O1xyXG4gICAgfVxyXG5cclxuICAgICNQcm9qZWN0c0Zvcm1OYW1lQ29udGFpbmVyRWwgLkNhbmNlbCB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogZ3JleTtcclxuICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICB9XHJcblxyXG4gICAgI25ld1Byb2plY3RUYXNrc0NvbnRhaW5lciB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICAjbmV3UHJvamVjdFRhc2tzSW5uZXJDb250YWluZXIge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICBnYXA6IDVweDtcclxuICAgICAgICBtYXJnaW46IDEwcHg7XHJcbiAgICAgICAgYm94LXNoYWRvdzogIzVjNTU1NSAxcHggM3B4IDNweCAxcHg7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgICAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgICAgIHdpZHRoOiA5NXB4O1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICBsZWZ0OiAyNTBweDtcclxuICAgIH1cclxuXHJcbiAgICBzdmcuYWRkVGFzayB7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICAgIGZpbGw6IHdoZWF0O1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcclxuICAgIH1cclxuXHJcbiAgICAubmV3UHJvamVjdEFkZEJ0biB7XHJcbiAgICAgICAgYm9yZGVyOiAwO1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IGluaGVyaXQ7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgI1Byb2plY3RkYXRlUGlja2VyIHtcclxuICAgICAgICBwYWRkaW5nOiAycHg7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgICBoZWlnaHQ6IDMycHg7XHJcblxyXG4gICAgfVxyXG5cclxuXHJcbiAgICAjc3VibWl0QnRuRm9yUHJvamVjdCB7XHJcbiAgICAgICAgcGFkZGluZzogN3B4O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDlweDtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgI3N1Ym1pdEJ0bkZvclByb2plY3Q6YWN0aXZlIHtcclxuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMSlcclxuICAgIH1cclxuXHJcbiAgICAuY2FuY2VsRm9yUHJvamVjdEJ0biB7XHJcbiAgICAgICAgcGFkZGluZzogN3B4O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDlweDtcclxuICAgIH1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJJQUFJO1FBQ0ksVUFBVTtRQUNWLFNBQVM7UUFDVCxzQkFBc0I7SUFDMUI7O0lBRUE7UUFDSSxzQkFBc0I7UUFDdEIsMkJBQTJCO0lBQy9COztJQUVBO1FBQ0ksVUFBVTtRQUNWLFNBQVM7UUFDVCxzQkFBc0I7O1FBRXRCLGlDQUFpQztRQUNqQyxnQkFBZ0I7UUFDaEIsa0JBQWtCO0lBQ3RCOztJQUVBOztRQUVJO1lBQ0ksYUFBYTtZQUNiLHNCQUFzQjtZQUN0Qix1QkFBdUI7WUFDdkIsVUFBVTtRQUNkOztRQUVBO1lBQ0kseUJBQXlCO1lBQ3pCLGtCQUFrQjtZQUNsQixhQUFhO1lBQ2IsbUJBQW1CO1lBQ25CLHVCQUF1QjtZQUN2QixTQUFTO1FBQ2I7Ozs7O1FBS0E7WUFDSSxlQUFlO1lBQ2YsU0FBUztZQUNULFdBQVc7WUFDWCxXQUFXO1lBQ1gsWUFBWTtZQUNaLHlCQUF5QjtZQUN6QixlQUFlO1lBQ2YsYUFBYTtZQUNiLHVCQUF1QjtZQUN2QixtQkFBbUI7WUFDbkIsa0JBQWtCO1lBQ2xCLG9CQUFvQjs7WUFFcEIsYUFBYTtRQUNqQjs7UUFFQTtZQUNJLFdBQVc7WUFDWCxrQkFBa0I7WUFDbEIsV0FBVztZQUNYLFdBQVc7WUFDWCxzQkFBc0I7WUFDdEIsMkJBQTJCO1lBQzNCLGdCQUFnQjtRQUNwQjs7UUFFQTtZQUNJLFdBQVc7WUFDWCxrQkFBa0I7WUFDbEIsV0FBVztZQUNYLFdBQVc7WUFDWCxzQkFBc0I7WUFDdEIsMEJBQTBCO1lBQzFCLGdCQUFnQjtRQUNwQjs7UUFFQTtZQUNJLHdDQUF3Qzs7UUFFNUM7O1FBRUE7WUFDSSx5Q0FBeUM7O1FBRTdDOztRQUVBO1lBQ0ksY0FBYztZQUNkLGVBQWU7WUFDZixNQUFNO1lBQ04sWUFBWTtZQUNaLFlBQVk7WUFDWixhQUFhO1lBQ2IsWUFBWTtZQUNaLGFBQWE7WUFDYix5QkFBeUI7WUFDekIsZ0JBQWdCO1lBQ2hCLGFBQWE7WUFDYixXQUFXOztRQUVmOztRQUVBO1lBQ0ksT0FBTztRQUNYOztRQUVBO1lBQ0ksYUFBYTtZQUNiLGtCQUFrQjtZQUNsQix5QkFBeUI7UUFDN0I7O1FBRUE7WUFDSSxhQUFhO1lBQ2Isc0JBQXNCO1lBQ3RCLGVBQWU7WUFDZixrQkFBa0I7UUFDdEI7OztRQUdBO1lBQ0ksY0FBYztZQUNkLFdBQVc7WUFDWCxZQUFZO1FBQ2hCOztRQUVBO1lBQ0ksY0FBYztZQUNkLFdBQVc7WUFDWCxZQUFZO1lBQ1osV0FBVztZQUNYLHVCQUF1QjtZQUN2QjtRQUNKOztRQUVBO1lBQ0ksYUFBYTtZQUNiLHNCQUFzQjtZQUN0QixnQkFBZ0I7UUFDcEI7O1FBRUE7WUFDSSxhQUFhO1lBQ2IsUUFBUTtZQUNSLGdCQUFnQjtZQUNoQixtQkFBbUI7WUFDbkIsMkJBQTJCO1lBQzNCLHdCQUF3Qjs7WUFFeEIsYUFBYTs7O1FBR2pCOztRQUVBO1lBQ0ksYUFBYTtZQUNiLHNCQUFzQjtZQUN0Qix1QkFBdUI7WUFDdkIsbUJBQW1CO1lBQ25CLGtCQUFrQjtRQUN0Qjs7UUFFQTtZQUNJLGVBQWU7WUFDZixZQUFZO1lBQ1osYUFBYTtZQUNiLG1CQUFtQjtZQUNuQixtQkFBbUI7O1FBRXZCOztRQUVBO1lBQ0ksYUFBYTtZQUNiLG1CQUFtQjtZQUNuQixRQUFRO1lBQ1Isd0JBQXdCO1FBQzVCOztRQUVBO1lBQ0ksYUFBYTtZQUNiLG1CQUFtQjtZQUNuQixRQUFRO1lBQ1Isd0JBQXdCO1FBQzVCOztRQUVBO1lBQ0kseUJBQXlCO1lBQ3pCLGtCQUFrQjtZQUNsQixXQUFXO1FBQ2Y7O1FBRUE7WUFDSSxlQUFlO1lBQ2YsOEJBQThCO1FBQ2xDOztRQUVBO1lBQ0ksU0FBUztZQUNULGVBQWU7WUFDZixjQUFjO1lBQ2QseUJBQXlCO1lBQ3pCLGdCQUFnQjtRQUNwQjs7UUFFQTtZQUNJLGVBQWU7WUFDZiw4QkFBOEI7UUFDbEM7OztRQUdBO1lBQ0kseUJBQXlCO1lBQ3pCLG1CQUFtQjtZQUNuQixpQkFBaUI7WUFDakIsMkJBQTJCO1lBQzNCLGFBQWE7WUFDYixrQkFBa0I7WUFDbEIsYUFBYTtZQUNiLGdCQUFnQjtZQUNoQix3QkFBd0I7UUFDNUI7Ozs7O1FBS0E7WUFDSSxhQUFhO1lBQ2IseUJBQXlCO1lBQ3pCLGdCQUFnQjtZQUNoQixpQkFBaUI7WUFDakIsbUJBQW1CO1lBQ25CLGFBQWE7WUFDYixrQkFBa0I7WUFDbEIsa0JBQWtCO1lBQ2xCLDJCQUEyQjs7UUFFL0I7OztRQUdBO1lBQ0ksa0JBQWtCO1FBQ3RCOzs7UUFHQTtZQUNJLGdCQUFnQjtZQUNoQixnQkFBZ0I7WUFDaEIsYUFBYTtZQUNiLFlBQVk7WUFDWixrQkFBa0I7UUFDdEI7O1FBRUE7WUFDSSxZQUFZO1lBQ1osWUFBWTtZQUNaLGtCQUFrQjtZQUNsQixnQkFBZ0I7WUFDaEIsWUFBWTtZQUNaLGVBQWU7O1FBRW5COztRQUVBO1lBQ0ksY0FBYztRQUNsQjs7UUFFQTtZQUNJLFlBQVk7WUFDWixZQUFZO1lBQ1osa0JBQWtCO1lBQ2xCLFlBQVk7WUFDWixZQUFZO1lBQ1osZUFBZTtRQUNuQjs7O1FBR0E7WUFDSSx5QkFBeUI7WUFDekIsbUJBQW1CO1lBQ25CLGlCQUFpQjtZQUNqQixnQkFBZ0I7WUFDaEIsYUFBYTtZQUNiLGdCQUFnQjtZQUNoQix1QkFBdUI7UUFDM0I7O1FBRUE7WUFDSSxhQUFhO1lBQ2IsOEJBQThCO1lBQzlCLG1CQUFtQjtZQUNuQixhQUFhO1lBQ2IsWUFBWTtRQUNoQjs7UUFFQTtZQUNJLGFBQWE7WUFDYixrQkFBa0I7WUFDbEIsTUFBTTtZQUNOLGdCQUFnQjtZQUNoQixzQkFBc0I7UUFDMUI7O1FBRUE7WUFDSSxnQkFBZ0I7UUFDcEI7O1FBRUE7WUFDSSxnQkFBZ0I7UUFDcEI7O1FBRUE7WUFDSSxnQkFBZ0I7UUFDcEI7O1FBRUE7WUFDSSxrQkFBa0I7UUFDdEI7O1FBRUE7WUFDSSxhQUFhO1lBQ2Isc0JBQXNCO1lBQ3RCLGdCQUFnQjtZQUNoQixnQkFBZ0I7UUFDcEI7O1FBRUE7WUFDSSxZQUFZO1lBQ1osa0JBQWtCO1lBQ2xCLGdCQUFnQjtZQUNoQixlQUFlO1FBQ25COztRQUVBO1lBQ0ksYUFBYTtZQUNiLHNCQUFzQjtZQUN0Qiw4QkFBOEI7WUFDOUIsZUFBZTtZQUNmLE1BQU07UUFDVjs7Ozs7UUFLQTtZQUNJLGFBQWE7WUFDYiw4QkFBOEI7WUFDOUIsbUJBQW1CO1lBQ25CLGVBQWU7WUFDZixNQUFNO1FBQ1Y7O1FBRUE7WUFDSSxhQUFhO1lBQ2IsOEJBQThCO1lBQzlCLG1CQUFtQjtZQUNuQixhQUFhO1lBQ2IsU0FBUztRQUNiOztRQUVBO1lBQ0ksYUFBYTtZQUNiLHNCQUFzQjtZQUN0Qiw4QkFBOEI7WUFDOUIsZUFBZTtRQUNuQjs7O1FBR0E7WUFDSSxhQUFhO1lBQ2IsOEJBQThCO1lBQzlCLG1CQUFtQjtZQUNuQixlQUFlO1lBQ2YsU0FBUztZQUNULE1BQU07UUFDVjs7OztRQUlBO1lBQ0ksYUFBYTtZQUNiLHNCQUFzQjtRQUMxQjs7UUFFQTtZQUNJLGFBQWE7WUFDYixzQkFBc0I7WUFDdEIsZ0JBQWdCOztRQUVwQjs7UUFFQTtZQUNJLGdCQUFnQjtZQUNoQixnQkFBZ0I7WUFDaEIsWUFBWTtZQUNaLGFBQWE7WUFDYixZQUFZO1lBQ1osY0FBYztZQUNkLHlCQUF5QjtRQUM3Qjs7UUFFQTtZQUNJLGdCQUFnQjtZQUNoQixnQkFBZ0I7WUFDaEIsWUFBWTtZQUNaLGFBQWE7WUFDYixZQUFZO1lBQ1oseUJBQXlCO1lBQ3pCLFNBQVM7UUFDYjs7O1FBR0E7WUFDSSxZQUFZO1lBQ1osa0JBQWtCO1lBQ2xCLGdCQUFnQjtZQUNoQixlQUFlO1FBQ25COztJQUVKOztJQUVBO1FBQ0k7WUFDSSxhQUFhO1lBQ2Isc0JBQXNCO1lBQ3RCLHVCQUF1Qjs7UUFFM0I7OztRQUdBOztZQUVJLHlCQUF5QjtZQUN6QixrQkFBa0I7WUFDbEIsYUFBYTtZQUNiLG1CQUFtQjtZQUNuQix1QkFBdUI7WUFDdkIsU0FBUztRQUNiOztRQUVBO1lBQ0ksYUFBYTtZQUNiLGtCQUFrQjtZQUNsQix5QkFBeUI7WUFDekIsVUFBVTtRQUNkOztRQUVBO1lBQ0ksYUFBYTtZQUNiLHNCQUFzQjtZQUN0QixZQUFZO1lBQ1osV0FBVztRQUNmOztRQUVBO1lBQ0ksaUNBQWlDO1FBQ3JDOztRQUVBO1lBQ0ksYUFBYTtZQUNiLHNCQUFzQjtZQUN0QixlQUFlO1lBQ2Ysa0JBQWtCO1lBQ2xCLFVBQVU7O1FBRWQ7O1FBRUE7O1lBRUksY0FBYztZQUNkLFdBQVc7WUFDWCxZQUFZOztRQUVoQjs7Ozs7UUFLQTtZQUNJLGVBQWU7WUFDZixTQUFTO1lBQ1QsV0FBVztZQUNYLFdBQVc7WUFDWCxZQUFZO1lBQ1oseUJBQXlCO1lBQ3pCLGVBQWU7WUFDZixhQUFhO1lBQ2IsdUJBQXVCO1lBQ3ZCLG1CQUFtQjtZQUNuQixrQkFBa0I7WUFDbEIsb0JBQW9CO1lBQ3BCLGFBQWE7O1lBRWIsYUFBYTtRQUNqQjs7UUFFQTtZQUNJLFdBQVc7WUFDWCxrQkFBa0I7WUFDbEIsV0FBVztZQUNYLFdBQVc7WUFDWCxzQkFBc0I7WUFDdEIsMkJBQTJCO1lBQzNCLGdCQUFnQjtRQUNwQjs7UUFFQTtZQUNJLFdBQVc7WUFDWCxrQkFBa0I7WUFDbEIsV0FBVztZQUNYLFdBQVc7WUFDWCxzQkFBc0I7WUFDdEIsMEJBQTBCO1lBQzFCLGdCQUFnQjtRQUNwQjs7UUFFQTtZQUNJLHdDQUF3Qzs7UUFFNUM7O1FBRUE7WUFDSSx5Q0FBeUM7O1FBRTdDOztRQUVBO1lBQ0ksY0FBYztZQUNkLGVBQWU7WUFDZixNQUFNO1lBQ04sWUFBWTtZQUNaLFlBQVk7WUFDWixhQUFhO1lBQ2IseUNBQXlDO1lBQ3pDLGdCQUFnQjs7UUFFcEI7O1FBRUE7WUFDSSxPQUFPO1FBQ1g7O1FBRUE7WUFDSSxhQUFhO1lBQ2Isc0JBQXNCO1lBQ3RCLFlBQVk7WUFDWixXQUFXO1FBQ2Y7O1FBRUE7WUFDSSxjQUFjO1lBQ2QsV0FBVztZQUNYLFlBQVk7WUFDWixXQUFXO1lBQ1gsdUJBQXVCO1lBQ3ZCO1FBQ0o7OztRQUdBO1lBQ0ksYUFBYTtZQUNiLG1CQUFtQjtZQUNuQixRQUFRO1lBQ1Isd0JBQXdCO1FBQzVCOztRQUVBO1lBQ0ksYUFBYTtZQUNiLG1CQUFtQjtZQUNuQixRQUFRO1lBQ1Isd0JBQXdCO1FBQzVCOztRQUVBO1lBQ0kseUJBQXlCO1lBQ3pCLGtCQUFrQjtZQUNsQixXQUFXO1FBQ2Y7O1FBRUE7WUFDSSxlQUFlO1lBQ2YsOEJBQThCO1FBQ2xDOztRQUVBO1lBQ0ksU0FBUztZQUNULGVBQWU7WUFDZixjQUFjO1lBQ2QseUJBQXlCO1FBQzdCOztRQUVBO1lBQ0ksZUFBZTtZQUNmLDhCQUE4QjtRQUNsQzs7UUFFQTtZQUNJLGFBQWE7WUFDYixRQUFRO1lBQ1IsZ0JBQWdCOztZQUVoQixtQkFBbUI7WUFDbkIsMkJBQTJCO1lBQzNCLGlCQUFpQjtZQUNqQixhQUFhO1FBQ2pCOztRQUVBO1lBQ0ksYUFBYTtZQUNiLHNCQUFzQjtZQUN0Qix1QkFBdUI7WUFDdkIsbUJBQW1CO1lBQ25CLGtCQUFrQjtRQUN0Qjs7UUFFQTtZQUNJLGdCQUFnQjtZQUNoQixhQUFhO1lBQ2IsZ0JBQWdCO1lBQ2hCLHNCQUFzQjtZQUN0QixlQUFlO1FBQ25COztRQUVBO1lBQ0ksV0FBVztZQUNYLFlBQVk7WUFDWixhQUFhO1lBQ2IsbUJBQW1CO1lBQ25CLG1CQUFtQjtRQUN2Qjs7UUFFQTtZQUNJLHlCQUF5QjtZQUN6QixtQkFBbUI7WUFDbkIsYUFBYTtZQUNiLGFBQWE7WUFDYixnQkFBZ0I7O1lBRWhCLFlBQVk7UUFDaEI7OztRQUdBO1lBQ0ksYUFBYTtZQUNiLDhCQUE4QjtZQUM5QixtQkFBbUI7O1lBRW5CLGFBQWE7WUFDYixTQUFTO1FBQ2I7O1FBRUE7WUFDSSxhQUFhO1FBQ2pCOztRQUVBO1lBQ0k7UUFDSjs7UUFFQTs7WUFFSSxnQkFBZ0I7WUFDaEIsWUFBWTtZQUNaLFlBQVk7WUFDWixhQUFhO1lBQ2IsWUFBWTtZQUNaLGtCQUFrQjtZQUNsQix5QkFBeUI7UUFDN0I7Ozs7UUFJQTtZQUNJLFNBQVM7UUFDYjs7UUFFQTtZQUNJLGFBQWE7WUFDYixnQkFBZ0I7Ozs7UUFJcEI7O1FBRUE7WUFDSSxhQUFhO1lBQ2Isc0JBQXNCO1lBQ3RCLGdCQUFnQjs7UUFFcEI7OztRQUdBO1lBQ0ksWUFBWTtZQUNaLGtCQUFrQjtRQUN0Qjs7UUFFQTs7O1lBR0kseUJBQXlCO1lBQ3pCLG1CQUFtQjtZQUNuQixhQUFhO1lBQ2IsYUFBYTtZQUNiLGdCQUFnQjtZQUNoQixrQkFBa0I7WUFDbEIsZ0JBQWdCO1FBQ3BCOztRQUVBO1lBQ0ksYUFBYTtZQUNiLG1CQUFtQjtZQUNuQiw4QkFBOEI7WUFDOUIsTUFBTTtRQUNWOzs7O0lBSUo7O0lBRUE7UUFDSSxhQUFhO1FBQ2IsOEJBQThCO1FBQzlCLG1CQUFtQjtJQUN2Qjs7SUFFQTtRQUNJLFlBQVk7UUFDWixrQkFBa0I7SUFDdEI7O0lBRUE7O1FBRUksWUFBWTtRQUNaLGtCQUFrQjtJQUN0Qjs7O0lBR0E7O1FBRUk7O1lBRUksYUFBYTs7UUFFakI7OztRQUdBO1lBQ0ksd0JBQXdCOztZQUV4Qix5QkFBeUI7WUFDekIsa0JBQWtCO1lBQ2xCLGFBQWE7WUFDYixtQkFBbUI7WUFDbkIsdUJBQXVCO1lBQ3ZCLFNBQVM7UUFDYjs7UUFFQTs7WUFFSSxrQkFBa0I7WUFDbEIseUJBQXlCO1FBQzdCOztRQUVBO1lBQ0ksYUFBYTtZQUNiLHNCQUFzQjtZQUN0QixlQUFlO1lBQ2Ysa0JBQWtCO1lBQ2xCLFVBQVU7O1FBRWQ7O1FBRUE7O1lBRUksY0FBYztZQUNkLFdBQVc7WUFDWCxZQUFZOztRQUVoQjs7UUFFQTtZQUNJLGNBQWM7WUFDZCxXQUFXO1lBQ1gsWUFBWTtZQUNaLFdBQVc7WUFDWCx1QkFBdUI7WUFDdkI7UUFDSjs7UUFFQTtZQUNJLGFBQWE7WUFDYix1QkFBdUI7WUFDdkIsbUJBQW1CO1lBQ25CLGtCQUFrQjtRQUN0Qjs7UUFFQTtZQUNJLGlCQUFpQjtZQUNqQixrQkFBa0I7WUFDbEIsZ0JBQWdCO1lBQ2hCLGtCQUFrQjtZQUNsQixnQkFBZ0I7UUFDcEI7O1FBRUE7WUFDSSxhQUFhO1lBQ2IsbUJBQW1CO1lBQ25CLFFBQVE7WUFDUix3QkFBd0I7UUFDNUI7O1FBRUE7WUFDSSxhQUFhO1lBQ2IsbUJBQW1CO1lBQ25CLFFBQVE7WUFDUix3QkFBd0I7UUFDNUI7O1FBRUE7WUFDSSx5QkFBeUI7WUFDekIsa0JBQWtCO1lBQ2xCLFdBQVc7UUFDZjs7UUFFQTtZQUNJLGVBQWU7WUFDZiw4QkFBOEI7UUFDbEM7O1FBRUE7WUFDSSxTQUFTO1lBQ1QsZUFBZTtZQUNmLGNBQWM7WUFDZCx5QkFBeUI7UUFDN0I7O1FBRUE7WUFDSSxlQUFlO1lBQ2YsOEJBQThCO1FBQ2xDOztRQUVBO1lBQ0ksYUFBYTtZQUNiLFFBQVE7WUFDUixnQkFBZ0I7O1lBRWhCLG1CQUFtQjtZQUNuQiwyQkFBMkI7WUFDM0IsaUJBQWlCO1lBQ2pCLGFBQWE7UUFDakI7Ozs7OztRQU1BO1lBQ0kseUJBQXlCO1lBQ3pCLG1CQUFtQjtZQUNuQixhQUFhO1lBQ2IsYUFBYTtZQUNiLGdCQUFnQjs7WUFFaEIsWUFBWTtRQUNoQjs7O1FBR0E7WUFDSSxhQUFhO1lBQ2IsOEJBQThCO1lBQzlCLG1CQUFtQjs7WUFFbkIsaUJBQWlCO1lBQ2pCLFNBQVM7UUFDYjs7UUFFQTtZQUNJLGFBQWE7UUFDakI7O1FBRUE7WUFDSTtRQUNKOztRQUVBO1lBQ0ksZ0JBQWdCO1lBQ2hCLGdCQUFnQjtZQUNoQixZQUFZO1lBQ1osYUFBYTtZQUNiLFlBQVk7WUFDWix5QkFBeUI7WUFDekIsU0FBUztRQUNiOztRQUVBO1lBQ0ksZ0JBQWdCO1lBQ2hCLGdCQUFnQjtZQUNoQixZQUFZO1lBQ1osYUFBYTtZQUNiLHNCQUFzQjtZQUN0Qix5QkFBeUI7WUFDekIsU0FBUztRQUNiOzs7UUFHQTtZQUNJLGFBQWE7WUFDYiw4QkFBOEI7WUFDOUI7UUFDSjs7UUFFQTtZQUNJLHlCQUF5QjtZQUN6QixtQkFBbUI7WUFDbkIsYUFBYTtZQUNiLGFBQWE7WUFDYixnQkFBZ0I7WUFDaEIsa0JBQWtCO1lBQ2xCLGdCQUFnQjs7UUFFcEI7O1FBRUE7WUFDSSxhQUFhO1lBQ2IsbUJBQW1CO1lBQ25CLDhCQUE4QjtZQUM5QixNQUFNO1FBQ1Y7O1FBRUE7WUFDSSxhQUFhO1lBQ2Isc0JBQXNCO1lBQ3RCLDhCQUE4QjtZQUM5QixtQkFBbUI7WUFDbkIsTUFBTTs7O1FBR1Y7O1FBRUE7WUFDSSxhQUFhO1lBQ2IsOEJBQThCO1lBQzlCLG1CQUFtQjtRQUN2Qjs7UUFFQTtZQUNJLGFBQWE7WUFDYixzQkFBc0I7WUFDdEIsZ0JBQWdCO1FBQ3BCOztRQUVBO1lBQ0ksWUFBWTtZQUNaLGtCQUFrQjtZQUNsQixZQUFZO1FBQ2hCOztJQUVKOztJQUVBO1FBQ0ksYUFBYTtRQUNiLGdDQUFnQztRQUNoQyw4QkFBOEI7SUFDbEM7OztJQUdBO1FBQ0ksd0JBQXdCO1FBQ3hCLHlCQUF5QjtRQUN6QixrQkFBa0I7UUFDbEIsYUFBYTtRQUNiLG1CQUFtQjtRQUNuQix1QkFBdUI7SUFDM0I7O0lBRUE7UUFDSSxxQkFBcUI7UUFDckIsa0JBQWtCO1FBQ2xCLHlCQUF5Qjs7SUFFN0I7O0lBRUE7UUFDSSx3QkFBd0I7O1FBRXhCLGFBQWE7UUFDYix3Q0FBd0M7UUFDeEMsa0JBQWtCO0lBQ3RCOzs7O0lBSUE7UUFDSSx3QkFBd0I7SUFDNUI7OztJQUdBO1FBQ0ksYUFBYTtRQUNiLHNCQUFzQjtRQUN0Qix1QkFBdUI7UUFDdkIsbUJBQW1CO1FBQ25CLGFBQWE7SUFDakI7O0lBRUE7UUFDSSxpQkFBaUI7UUFDakIsa0JBQWtCO1FBQ2xCLGdCQUFnQjtRQUNoQixrQkFBa0I7SUFDdEI7O0lBRUE7UUFDSSxXQUFXO1FBQ1gsWUFBWTtRQUNaLG1CQUFtQjtRQUNuQixhQUFhOztJQUVqQjs7SUFFQTtRQUNJLGFBQWE7SUFDakI7O0lBRUE7UUFDSSx3QkFBd0I7UUFDeEIseUJBQXlCO1FBQ3pCLHlEQUE0QztRQUM1QyxzQkFBc0I7UUFDdEIsMkJBQTJCO0lBQy9COzs7O0lBSUE7O1FBRUksYUFBYTtRQUNiLFdBQVc7UUFDWCxZQUFZO0lBQ2hCOztJQUVBO1FBQ0ksd0JBQXdCO1FBQ3hCLHFCQUFxQjtRQUNyQixXQUFXO1FBQ1gsWUFBWTtRQUNaLHNCQUFzQjtRQUN0QixrQkFBa0I7UUFDbEIsYUFBYTtRQUNiLGVBQWU7UUFDZixrQkFBa0I7O0lBRXRCOzs7SUFHQTtRQUNJLFdBQVc7UUFDWCxjQUFjO1FBQ2Qsa0JBQWtCO1FBQ2xCLFFBQVE7UUFDUixTQUFTO1FBQ1QsZ0NBQWdDO1FBQ2hDLGVBQWU7UUFDZix1QkFBdUI7UUFDdkIsVUFBVTtRQUNWLDZCQUE2QjtJQUNqQzs7SUFFQTtRQUNJLFlBQVk7UUFDWixZQUFZO0lBQ2hCOzs7SUFHQTtRQUNJLFdBQVc7UUFDWCxZQUFZO0lBQ2hCOztJQUVBO1FBQ0ksYUFBYTtRQUNiLG1CQUFtQjtRQUNuQixRQUFRO1FBQ1Isd0JBQXdCO0lBQzVCOzs7O0lBSUE7UUFDSSx5QkFBeUI7UUFDekIsa0JBQWtCO1FBQ2xCLFdBQVc7SUFDZjs7SUFFQTtRQUNJLGVBQWU7UUFDZiw4QkFBOEI7SUFDbEM7O0lBRUE7UUFDSSxTQUFTO1FBQ1QsZUFBZTtRQUNmLGNBQWM7UUFDZCx5QkFBeUI7SUFDN0I7O0lBRUE7UUFDSSxlQUFlO1FBQ2YsOEJBQThCO0lBQ2xDOztJQUVBO1FBQ0ksYUFBYTtRQUNiLFlBQVk7UUFDWixrQkFBa0I7UUFDbEIsaUJBQWlCO1FBQ2pCLHlCQUF5QjtRQUN6QixZQUFZO1FBQ1osbUNBQW1DO0lBQ3ZDOztJQUVBO1FBQ0k7SUFDSjs7SUFFQTtRQUNJO0lBQ0o7Ozs7O0lBS0E7UUFDSSxhQUFhO1FBQ2IsUUFBUTtRQUNSLGdCQUFnQjs7UUFFaEIsbUJBQW1CO1FBQ25CLDJCQUEyQjtRQUMzQixpQkFBaUI7UUFDakIsYUFBYTs7O0lBR2pCOzs7SUFHQTtRQUNJLGFBQWE7UUFDYixzQkFBc0I7UUFDdEIsdUJBQXVCO1FBQ3ZCLG1CQUFtQjtRQUNuQixnQkFBZ0I7SUFDcEI7O0lBRUE7UUFDSSxhQUFhO1FBQ2IsOEJBQThCO0lBQ2xDOztJQUVBO1FBQ0ksWUFBWTtRQUNaLGtCQUFrQjtRQUNsQixZQUFZO0lBQ2hCOzs7SUFHQTtRQUNJLFVBQVU7SUFDZDs7SUFFQTtRQUNJLGFBQWE7UUFDYixPQUFPO1FBQ1AsOEJBQThCO0lBQ2xDOzs7O0lBSUE7UUFDSSxTQUFTO1FBQ1QsZUFBZTtRQUNmLHFCQUFxQjtRQUNyQiwwQkFBMEI7O0lBRTlCOztJQUVBO1FBQ0ksU0FBUztRQUNULGVBQWU7O0lBRW5COztJQUVBO1FBQ0ksZUFBZTtRQUNmLGtCQUFrQjtRQUNsQix5QkFBeUI7UUFDekIsWUFBWTtRQUNaLGVBQWU7UUFDZixZQUFZOztJQUVoQjs7SUFFQTtRQUNJLGFBQWE7UUFDYixzQkFBc0I7UUFDdEIscUJBQXFCO1FBQ3JCLHVCQUF1QjtRQUN2QixtQkFBbUI7UUFDbkIsdUJBQXVCO0lBQzNCOztJQUVBO1FBQ0ksYUFBYTtRQUNiLG1CQUFtQjtRQUNuQixRQUFRO1FBQ1Isb0JBQW9CO1FBQ3BCLFlBQVk7UUFDWixZQUFZO1FBQ1osOEJBQThCO0lBQ2xDOztJQUVBO1FBQ0ksb0NBQW9DO0lBQ3hDOzs7SUFHQTtRQUNJLGVBQWU7O0lBRW5COztJQUVBO1FBQ0ksYUFBYTtRQUNiLFFBQVE7O0lBRVo7O0lBRUE7UUFDSSxhQUFhO1FBQ2IsT0FBTztRQUNQLDhCQUE4QjtJQUNsQzs7SUFFQTtRQUNJLFNBQVM7UUFDVCxlQUFlO0lBQ25COztJQUVBO1FBQ0ksU0FBUztRQUNULGVBQWU7O0lBRW5COztJQUVBO1FBQ0ksa0JBQWtCO1FBQ2xCLGVBQWU7O0lBRW5COztJQUVBO1FBQ0ksU0FBUzs7SUFFYjs7SUFFQTtRQUNJLFlBQVk7UUFDWixhQUFhO1FBQ2IsZUFBZTtRQUNmLGdCQUFnQjtRQUNoQjtJQUNKOztJQUVBO1FBQ0ksa0JBQWtCO0lBQ3RCOztJQUVBO1FBQ0kseUJBQXlCO1FBQ3pCLG1CQUFtQjtRQUNuQixhQUFhO1FBQ2IsYUFBYTtRQUNiLGtCQUFrQjtRQUNsQixxQkFBcUI7SUFDekI7O0lBRUE7UUFDSSxhQUFhO1FBQ2IsbUJBQW1CO1FBQ25CLDhCQUE4QjtRQUM5QixpQkFBaUI7SUFDckI7O0lBRUE7UUFDSSxnQkFBZ0I7SUFDcEI7O0lBRUE7UUFDSSxhQUFhO1FBQ2IsOEJBQThCO1FBQzlCO0lBQ0o7O0lBRUE7UUFDSSxZQUFZO1FBQ1osa0JBQWtCO1FBQ2xCLFlBQVk7UUFDWjtJQUNKOztJQUVBO1FBQ0k7SUFDSjs7SUFFQTtRQUNJLHlCQUF5QjtRQUN6QixtQkFBbUI7UUFDbkIsYUFBYTtRQUNiLGFBQWE7UUFDYixhQUFhO1FBQ2Isd0JBQXdCO0lBQzVCOztJQUVBO1FBQ0ksYUFBYTtRQUNiLG1CQUFtQjtRQUNuQiw4QkFBOEI7UUFDOUIsTUFBTTtJQUNWOzs7SUFHQTtRQUNJLGdCQUFnQjtRQUNoQixZQUFZO1FBQ1osWUFBWTtRQUNaLGFBQWE7UUFDYixZQUFZO1FBQ1osa0JBQWtCO1FBQ2xCLHlCQUF5QjtJQUM3Qjs7SUFFQTtRQUNJLFlBQVk7SUFDaEI7O0lBRUE7UUFDSSxZQUFZO1FBQ1osZUFBZTtRQUNmLFVBQVU7O0lBRWQ7O0lBRUE7UUFDSSxnQkFBZ0I7UUFDaEIsWUFBWTtRQUNaLFlBQVk7UUFDWixhQUFhO1FBQ2IsWUFBWTtRQUNaLHlCQUF5QjtRQUN6QixTQUFTO0lBQ2I7O0lBRUE7UUFDSSxlQUFlO1FBQ2YsWUFBWTtRQUNaLFVBQVU7O0lBRWQ7O0lBRUE7UUFDSSxrQkFBa0I7UUFDbEIsZUFBZTtJQUNuQjs7SUFFQSxrQ0FBa0M7O0lBRWxDO1FBQ0ksNEJBQTRCO0lBQ2hDOztJQUVBO1FBQ0ksaUNBQWlDO1FBQ2pDLFlBQVk7UUFDWixrQkFBa0I7UUFDbEIsWUFBWTtRQUNaLHlCQUF5QjtRQUN6QixZQUFZO1FBQ1osZUFBZTtRQUNmLGdCQUFnQjtJQUNwQjs7SUFFQTtRQUNJLG9CQUFvQjtJQUN4Qjs7SUFFQTtRQUNJLFlBQVk7UUFDWixrQkFBa0I7UUFDbEIsbUJBQW1CO0lBQ3ZCOztJQUVBO1FBQ0ksYUFBYTs7UUFFYixrQkFBa0I7UUFDbEIsWUFBWTtRQUNaLG1CQUFtQjtRQUNuQixTQUFTO1FBQ1QsWUFBWTtRQUNaLDhCQUE4Qjs7SUFFbEM7O0lBRUE7UUFDSSxvQ0FBb0M7SUFDeEM7O0lBRUE7UUFDSSxXQUFXO1FBQ1gsWUFBWTtJQUNoQjs7SUFFQTtRQUNJLFNBQVM7UUFDVCxlQUFlO0lBQ25COzs7SUFHQTtRQUNJLHFCQUFxQjtRQUNyQixhQUFhO1FBQ2Isa0JBQWtCO1FBQ2xCLG9CQUFvQjtRQUNwQixZQUFZO1FBQ1osOEJBQThCOzs7SUFHbEM7O0lBRUE7UUFDSSxvQ0FBb0M7SUFDeEM7Ozs7SUFJQTtRQUNJLFNBQVM7UUFDVCx5QkFBeUI7UUFDekIsb0JBQW9CO1FBQ3BCLGVBQWU7UUFDZixnQkFBZ0I7UUFDaEIsWUFBWTtRQUNaLDhCQUE4QjtRQUM5QixnQkFBZ0I7O0lBRXBCOztJQUVBO1FBQ0ksb0NBQW9DOztJQUV4Qzs7O0lBR0E7UUFDSSxZQUFZO1FBQ1osYUFBYTtJQUNqQjs7SUFFQTtRQUNJLGFBQWE7UUFDYix1QkFBdUI7UUFDdkIsbUJBQW1CO1FBQ25CLHFCQUFxQjs7O0lBR3pCOztJQUVBO1FBQ0ksYUFBYTtRQUNiLHVCQUF1QjtRQUN2QixtQkFBbUI7UUFDbkIscUJBQXFCO0lBQ3pCOzs7SUFHQTtRQUNJLGFBQWE7UUFDYix5QkFBeUI7UUFDekIsZ0JBQWdCO1FBQ2hCLGlCQUFpQjtRQUNqQixtQkFBbUI7UUFDbkIsYUFBYTtRQUNiLGtCQUFrQjtRQUNsQixrQkFBa0I7UUFDbEIsMkJBQTJCO0lBQy9COzs7SUFHQTtRQUNJLGtCQUFrQjtJQUN0Qjs7O0lBR0E7UUFDSSxnQkFBZ0I7UUFDaEIsZ0JBQWdCO1FBQ2hCLGFBQWE7UUFDYixZQUFZO1FBQ1osa0JBQWtCO1FBQ2xCLGVBQWU7SUFDbkI7O0lBRUE7UUFDSSxZQUFZO1FBQ1osWUFBWTtRQUNaLGtCQUFrQjtRQUNsQixnQkFBZ0I7UUFDaEIsWUFBWTtRQUNaLGVBQWU7UUFDZixtQ0FBbUM7UUFDbkMsWUFBWTs7SUFFaEI7O0lBRUE7UUFDSSxjQUFjO0lBQ2xCOztJQUVBO1FBQ0ksWUFBWTtRQUNaLFlBQVk7UUFDWixrQkFBa0I7UUFDbEIsWUFBWTtRQUNaLFlBQVk7UUFDWixlQUFlO0lBQ25COztJQUVBO1FBQ0ksc0JBQXNCO1FBQ3RCLFlBQVk7SUFDaEI7O0lBRUE7UUFDSSxhQUFhO1FBQ2IsdUJBQXVCO1FBQ3ZCLG1CQUFtQjs7SUFFdkI7O0lBRUE7UUFDSSxhQUFhO1FBQ2IsdUJBQXVCO1FBQ3ZCLG1CQUFtQjtRQUNuQixRQUFRO1FBQ1IsWUFBWTtRQUNaLG1DQUFtQztRQUNuQyxtQkFBbUI7UUFDbkIsYUFBYTtRQUNiLFdBQVc7UUFDWCxrQkFBa0I7UUFDbEIsV0FBVztJQUNmOztJQUVBO1FBQ0ksa0JBQWtCO1FBQ2xCLFdBQVc7UUFDWCxxQkFBcUI7SUFDekI7O0lBRUE7UUFDSSxTQUFTO1FBQ1QseUJBQXlCO1FBQ3pCLGdCQUFnQjs7SUFFcEI7O0lBRUE7UUFDSSxZQUFZO1FBQ1osa0JBQWtCO1FBQ2xCLFlBQVk7UUFDWixZQUFZOztJQUVoQjs7O0lBR0E7UUFDSSxZQUFZO1FBQ1osa0JBQWtCOztJQUV0Qjs7SUFFQTtRQUNJO0lBQ0o7O0lBRUE7UUFDSSxZQUFZO1FBQ1osa0JBQWtCO0lBQ3RCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIiAgICBib2R5IHtcXHJcXG4gICAgICAgIHBhZGRpbmc6IDA7XFxyXFxuICAgICAgICBtYXJnaW46IDA7XFxyXFxuICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIDpyb290IHtcXHJcXG4gICAgICAgIC0taG92ZXItY29sb3I6ICNmZGE0YWY7XFxyXFxuICAgICAgICAtLWJhY2tncm91bmQtY29sb3I6ICM2ZjllOWU7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgKiB7XFxyXFxuICAgICAgICBwYWRkaW5nOiAwO1xcclxcbiAgICAgICAgbWFyZ2luOiAwO1xcclxcbiAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG5cXHJcXG4gICAgICAgIGZvbnQtZmFtaWx5OiBcXFwiUm9ib3RvXFxcIiwgc2Fucy1zZXJpZjtcXHJcXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XFxyXFxuICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDU1MHB4KSB7XFxyXFxuXFxyXFxuICAgICAgICBib2R5IG1haW4ge1xcclxcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgICAgICAgICB6LWluZGV4OiAxO1xcclxcbiAgICAgICAgfVxcclxcblxcclxcbiAgICAgICAgbWFpbiBoZWFkZXIge1xcclxcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZGE0YWY7XFxyXFxuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgICAgICAgICBnYXA6IDEwcHg7XFxyXFxuICAgICAgICB9XFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuICAgICAgICAjdG9nZ2xlTWVudUljb24ge1xcclxcbiAgICAgICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gICAgICAgICAgICB0b3A6IDIwcHg7XFxyXFxuICAgICAgICAgICAgcmlnaHQ6IDIwcHg7XFxyXFxuICAgICAgICAgICAgd2lkdGg6IDYwcHg7XFxyXFxuICAgICAgICAgICAgaGVpZ2h0OiA2MHB4O1xcclxcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICM2Yjg4ODg7XFxyXFxuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA4cHg7XFxyXFxuICAgICAgICAgICAgdHJhbnNpdGlvbjogdG9wIDAuM3M7XFxyXFxuXFxyXFxuICAgICAgICAgICAgei1pbmRleDogMTAwMDtcXHJcXG4gICAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAgICN0b2dnbGVNZW51SWNvbjo6YmVmb3JlIHtcXHJcXG4gICAgICAgICAgICBjb250ZW50OiAnJztcXHJcXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgICAgICAgICAgd2lkdGg6IDI4cHg7XFxyXFxuICAgICAgICAgICAgaGVpZ2h0OiAycHg7XFxyXFxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXHJcXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTVweCk7XFxyXFxuICAgICAgICAgICAgdHJhbnNpdGlvbjogMC4ycztcXHJcXG4gICAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAgICN0b2dnbGVNZW51SWNvbjo6YWZ0ZXIge1xcclxcbiAgICAgICAgICAgIGNvbnRlbnQ6ICcnO1xcclxcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgICAgICAgICB3aWR0aDogMjhweDtcXHJcXG4gICAgICAgICAgICBoZWlnaHQ6IDJweDtcXHJcXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcclxcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSg1cHgpO1xcclxcbiAgICAgICAgICAgIHRyYW5zaXRpb246IDAuMnM7XFxyXFxuICAgICAgICB9XFxyXFxuXFxyXFxuICAgICAgICAjdG9nZ2xlTWVudUljb24uYWN0aXZlOjpiZWZvcmUge1xcclxcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwcHgpIHJvdGF0ZSg0NWRlZyk7XFxyXFxuXFxyXFxuICAgICAgICB9XFxyXFxuXFxyXFxuICAgICAgICAjdG9nZ2xlTWVudUljb24uYWN0aXZlOjphZnRlciB7XFxyXFxuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDBweCkgcm90YXRlKC00NWRlZyk7XFxyXFxuXFxyXFxuICAgICAgICB9XFxyXFxuXFxyXFxuICAgICAgICBhc2lkZSNtZW51IHtcXHJcXG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcXHJcXG4gICAgICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICAgICAgICAgICAgdG9wOiAwO1xcclxcbiAgICAgICAgICAgIGxlZnQ6IC0yMjBweDtcXHJcXG4gICAgICAgICAgICB3aWR0aDogMjIwcHg7XFxyXFxuICAgICAgICAgICAgaGVpZ2h0OiAxMDB2aDtcXHJcXG4gICAgICAgICAgICBjb2xvcjogd2hpdGU7XFxyXFxuICAgICAgICAgICAgZmlsdGVyOiB3aGl0ZTtcXHJcXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNzk4OWExO1xcclxcbiAgICAgICAgICAgIHRyYW5zaXRpb246IDAuM3M7XFxyXFxuICAgICAgICAgICAgei1pbmRleDogMTAwMDtcXHJcXG4gICAgICAgICAgICBmaWxsOiB3aGl0ZTtcXHJcXG5cXHJcXG4gICAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAgIGFzaWRlI21lbnUuYWN0aXZlIHtcXHJcXG4gICAgICAgICAgICBsZWZ0OiAwO1xcclxcbiAgICAgICAgfVxcclxcblxcclxcbiAgICAgICAgbWFpbiBhc2lkZSB7XFxyXFxuICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcXHJcXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2UyZThmMDtcXHJcXG4gICAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAgIG1haW4gI0NvbnRhaW5lciB7XFxyXFxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICAgICAgICAgIGZsZXgtd3JhcDogd3JhcDtcXHJcXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxuICAgICAgICB9XFxyXFxuXFxyXFxuXFxyXFxuICAgICAgICBoZWFkZXIgLm1lbnVDb250cm9sbGVyIHtcXHJcXG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcXHJcXG4gICAgICAgICAgICB3aWR0aDogNDBweDtcXHJcXG4gICAgICAgICAgICBoZWlnaHQ6IDQwcHg7XFxyXFxuICAgICAgICB9XFxyXFxuXFxyXFxuICAgICAgICBoZWFkZXIgLm1lbnVDb250cm9sbGVyIHN2ZyB7XFxyXFxuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XFxyXFxuICAgICAgICAgICAgd2lkdGg6IDQwcHg7XFxyXFxuICAgICAgICAgICAgaGVpZ2h0OiA0MHB4O1xcclxcbiAgICAgICAgICAgIGZpbGw6IHdoaXRlO1xcclxcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcclxcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHhcXHJcXG4gICAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAgICN1c2VybGlzdCB7XFxyXFxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICAgICAgICAgIG1heC13aWR0aDogNTUwcHg7XFxyXFxuICAgICAgICB9XFxyXFxuXFxyXFxuICAgICAgICBkaXYubGlzdENvbnRhaW5lciB7XFxyXFxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgICAgICAgICBnYXA6IDVweDtcXHJcXG4gICAgICAgICAgICBtYXgtd2lkdGg6IDUxNXB4O1xcclxcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxyXFxuICAgICAgICAgICAgYm94LXNoYWRvdzogMXB4IDBweCAzcHggMHB4O1xcclxcbiAgICAgICAgICAgIG1hcmdpbjogMTRweCAxNHB4IDAgMTlweDtcXHJcXG5cXHJcXG4gICAgICAgICAgICBwYWRkaW5nOiAxMHB4O1xcclxcblxcclxcblxcclxcbiAgICAgICAgfVxcclxcblxcclxcbiAgICAgICAgI3VzZXJsaXN0IC5pbnRpYWxUZXh0RGlzcGxheSB7XFxyXFxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICAgICAgfVxcclxcblxcclxcbiAgICAgICAgLmludGlhbFRleHREaXNwbGF5IGltZyB7XFxyXFxuICAgICAgICAgICAgbWF4LXdpZHRoOiAxMDAlO1xcclxcbiAgICAgICAgICAgIGhlaWdodDogYXV0bztcXHJcXG4gICAgICAgICAgICBwYWRkaW5nOiAxOHB4O1xcclxcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDMwcHg7XFxyXFxuICAgICAgICAgICAgb2JqZWN0LWZpdDogY29udGFpbjtcXHJcXG5cXHJcXG4gICAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAgICN1c2VybGlzdCAjYWRkVG9kb0J0bkNvbnRhaW5lciB7XFxyXFxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICAgICAgICAgIGdhcDogNXB4O1xcclxcbiAgICAgICAgICAgIG1hcmdpbjogMjdweCAwIDExcHggMjZweDtcXHJcXG4gICAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAgICN0YXNrIHtcXHJcXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgICAgICAgICAgZ2FwOiA1cHg7XFxyXFxuICAgICAgICAgICAgbWFyZ2luOiAyN3B4IDAgMTFweCAyNnB4O1xcclxcbiAgICAgICAgfVxcclxcblxcclxcbiAgICAgICAgI3VzZXJsaXN0ICNhZGRUb2RvQnRuQ29udGFpbmVyIHN2ZyB7XFxyXFxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2RjMjYyNjtcXHJcXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxyXFxuICAgICAgICAgICAgZmlsbDogd2hpdGU7XFxyXFxuICAgICAgICB9XFxyXFxuXFxyXFxuICAgICAgICAjdXNlcmxpc3QgI2FkZFRvZG9CdG5Db250YWluZXIgOmhvdmVyIHtcXHJcXG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgICAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEuMDkpO1xcclxcbiAgICAgICAgfVxcclxcblxcclxcbiAgICAgICAgI3VzZXJsaXN0ICNhZGRUb2RvQnRuQ29udGFpbmVyIGJ1dHRvbiB7XFxyXFxuICAgICAgICAgICAgYm9yZGVyOiAwO1xcclxcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcXHJcXG4gICAgICAgICAgICBjb2xvcjogI2I5MWMxYztcXHJcXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmhlcml0O1xcclxcbiAgICAgICAgICAgIHRyYW5zaXRpb246IDAuM3M7XFxyXFxuICAgICAgICB9XFxyXFxuXFxyXFxuICAgICAgICAjdXNlcmxpc3QgI2FkZFRvZG9CdG5Db250YWluZXIgYnV0dG9uOmhvdmVyIHtcXHJcXG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgICAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEuMDkpO1xcclxcbiAgICAgICAgfVxcclxcblxcclxcblxcclxcbiAgICAgICAgLmlubmVyX2NvbnRhaW5lciAjZm9ybSB7XFxyXFxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzY0NzQ4YjtcXHJcXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbiAgICAgICAgICAgIG1heC1oZWlnaHQ6IDEzNXB4O1xcclxcbiAgICAgICAgICAgIG1heC13aWR0aDogNTE1cHggIWltcG9ydGFudDtcXHJcXG4gICAgICAgICAgICBoZWlnaHQ6IDE0MHB4O1xcclxcbiAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMXJlbTtcXHJcXG4gICAgICAgICAgICBkaXNwbGF5OiBub25lO1xcclxcbiAgICAgICAgICAgIG1heC13aWR0aDogNDgwcHg7XFxyXFxuICAgICAgICAgICAgbWFyZ2luOiAxMHB4IDEwcHggMCAxMHB4O1xcclxcbiAgICAgICAgfVxcclxcblxcclxcblxcclxcblxcclxcblxcclxcbiAgICAgICAgZGl2LmlucHV0TmV3cHJvamVjdEZvcm1OYW1lIHtcXHJcXG4gICAgICAgICAgICBkaXNwbGF5OiBub25lO1xcclxcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNjZWUzZTM7XFxyXFxuICAgICAgICAgICAgbWF4LXdpZHRoOiAzMDBweDtcXHJcXG4gICAgICAgICAgICBtYXgtaGVpZ2h0OiAzMDBweDtcXHJcXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbiAgICAgICAgICAgIHBhZGRpbmc6IDI1cHg7XFxyXFxuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICAgICAgICAgIG1hcmdpbjogNjBweCAwIDAgMDtcXHJcXG4gICAgICAgICAgICBib3gtc2hhZG93OiAwcHggOXB4IDNweCAwcHg7XFxyXFxuXFxyXFxuICAgICAgICB9XFxyXFxuXFxyXFxuXFxyXFxuICAgICAgICAuaW5wdXROZXdwcm9qZWN0Rm9ybU5hbWUgaDIge1xcclxcbiAgICAgICAgICAgIG1hcmdpbjogMCAwIDEwcHggMDtcXHJcXG4gICAgICAgIH1cXHJcXG5cXHJcXG5cXHJcXG4gICAgICAgIC5pbnB1dE5ld3Byb2plY3RGb3JtTmFtZSAuaW5wdXROZXdQcm9qZWN0TmFtZSB7XFxyXFxuICAgICAgICAgICAgbWF4LXdpZHRoOiAzMDBweDtcXHJcXG4gICAgICAgICAgICBtYXgtaGVpZ2h0OiAzNXB4O1xcclxcbiAgICAgICAgICAgIHBhZGRpbmc6IDE0cHg7XFxyXFxuICAgICAgICAgICAgYm9yZGVyOiBub25lO1xcclxcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDdweDtcXHJcXG4gICAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAgIGlucHV0LlNhdmVQcm9qZWN0TmFtZSB7XFxyXFxuICAgICAgICAgICAgcGFkZGluZzogOXB4O1xcclxcbiAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcXHJcXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA4cHg7XFxyXFxuICAgICAgICAgICAgbWF4LXdpZHRoOiAxMDBweDtcXHJcXG4gICAgICAgICAgICBoZWlnaHQ6IDQwcHg7XFxyXFxuICAgICAgICAgICAgZm9udC1zaXplOiAxOXB4O1xcclxcblxcclxcbiAgICAgICAgfVxcclxcblxcclxcbiAgICAgICAgLnByb2plY3ROYW1lU2F2ZXJCdG5Db250YWluZXIge1xcclxcbiAgICAgICAgICAgIG1hcmdpbjogMTBweCAwO1xcclxcbiAgICAgICAgfVxcclxcblxcclxcbiAgICAgICAgLnByb2plY3ROYW1lU2F2ZXJCdG5Db250YWluZXIgYnV0dG9uIHtcXHJcXG4gICAgICAgICAgICBwYWRkaW5nOiA5cHg7XFxyXFxuICAgICAgICAgICAgYm9yZGVyOiBub25lO1xcclxcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDhweDtcXHJcXG4gICAgICAgICAgICB3aWR0aDogMTAwcHg7XFxyXFxuICAgICAgICAgICAgaGVpZ2h0OiA0MHB4O1xcclxcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTlweDtcXHJcXG4gICAgICAgIH1cXHJcXG5cXHJcXG5cXHJcXG4gICAgICAgIC5pbm5lcl9jb250YWluZXIgI1Byb2plY3RGb3JtIHtcXHJcXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjQ3NDhiO1xcclxcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxyXFxuICAgICAgICAgICAgbWF4LWhlaWdodDogMTM0cHg7XFxyXFxuICAgICAgICAgICAgbWF4LXdpZHRoOiA1MTVweDtcXHJcXG4gICAgICAgICAgICBkaXNwbGF5OiBub25lO1xcclxcbiAgICAgICAgICAgIG1heC13aWR0aDogNTAwcHg7XFxyXFxuICAgICAgICAgICAgbWFyZ2luOiA5cHggMTBweCAwIDIzcHg7XFxyXFxuICAgICAgICB9XFxyXFxuXFxyXFxuICAgICAgICAucHJvamVjdEZvcm1EZXRhaWxzIHtcXHJcXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICAgICAgICAgIHBhZGRpbmc6IDEwcHg7XFxyXFxuICAgICAgICAgICAgaGVpZ2h0OiA4MHB4O1xcclxcbiAgICAgICAgfVxcclxcblxcclxcbiAgICAgICAgZGl2LnByaW9yaXR5RGF0ZU9uTGFyZ2VTY3JlZW4ge1xcclxcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgICAgICAgICAgIHRvcDogMDtcXHJcXG4gICAgICAgICAgICBtYXgtd2lkdGg6IDIwMHB4O1xcclxcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgICAgICB9XFxyXFxuXFxyXFxuICAgICAgICAucHJvamVjdElucHV0Q29udGFpbmVyIHtcXHJcXG4gICAgICAgICAgICBtYXgtd2lkdGg6IDIwMHB4O1xcclxcbiAgICAgICAgfVxcclxcblxcclxcbiAgICAgICAgLnByb2plY3RJbnB1dENvbnRhaW5lciBwIGlucHV0IHtcXHJcXG4gICAgICAgICAgICBtYXgtd2lkdGg6IDIwMHB4O1xcclxcbiAgICAgICAgfVxcclxcblxcclxcbiAgICAgICAgLmlubmVyVGFza0NvbnRhaW5lciAuZWRpdCB7XFxyXFxuICAgICAgICAgICAgbWF4LXdpZHRoOiAxNDBweDtcXHJcXG4gICAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAgIC5wcm9qZWN0SW5wdXRDb250YWluZXIgLlBkZXNjcmlwdGlvbklucHV0Q29udGFpbmVyIHtcXHJcXG4gICAgICAgICAgICBtYXJnaW46IDEwcHggMCAwIDA7XFxyXFxuICAgICAgICB9XFxyXFxuXFxyXFxuICAgICAgICBkaXYjY29uZmlnUHJpb3JpdHlEYXRlT25Nb2JpbGUge1xcclxcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgICAgICAgICBtYXgtd2lkdGg6IDIwMHB4O1xcclxcbiAgICAgICAgICAgIHBvc2l0aW9uOiBzdGF0aWM7XFxyXFxuICAgICAgICB9XFxyXFxuXFxyXFxuICAgICAgICAjY29uZmlnUHJpb3JpdHlEYXRlT25Nb2JpbGUgI3ByaW9yaXR5LCAjZGF0ZVBpY2tlciB7XFxyXFxuICAgICAgICAgICAgcGFkZGluZzogMnB4O1xcclxcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDZweDtcXHJcXG4gICAgICAgICAgICBtYXgtd2lkdGg6IDEwNHB4O1xcclxcbiAgICAgICAgICAgIG1pbi13aWR0aDogODBweDtcXHJcXG4gICAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAgICNQcm9qZWN0Rm9ybSAuZm9vdGVyIHtcXHJcXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgICAgICAgICAgIHBhZGRpbmc6IDAgMTBweDtcXHJcXG4gICAgICAgICAgICBnYXA6IDA7XFxyXFxuICAgICAgICB9XFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuICAgICAgICAjUHJvamVjdEZvcm0gLnByb2plY3RCdXR0b25zQ29udGFpbmVyIHtcXHJcXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICAgICAgICAgIHBhZGRpbmc6IDAgMTBweDtcXHJcXG4gICAgICAgICAgICBnYXA6IDA7XFxyXFxuICAgICAgICB9XFxyXFxuXFxyXFxuICAgICAgICAjZm9ybSAuZm9ybURldGFpbHMge1xcclxcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgICAgICAgICAgcGFkZGluZzogMTBweDtcXHJcXG4gICAgICAgICAgICBtYXJnaW46IDA7XFxyXFxuICAgICAgICB9XFxyXFxuXFxyXFxuICAgICAgICAjZm9ybUZvb3Rlck9uTW9iaWxlIHtcXHJcXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgICAgICAgICAgIHBhZGRpbmc6IDAgMTBweDtcXHJcXG4gICAgICAgIH1cXHJcXG5cXHJcXG5cXHJcXG4gICAgICAgICNmb3JtRm9vdGVyT25Nb2JpbGUgLmJ1dHRvbnMge1xcclxcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgICAgICAgICAgcGFkZGluZzogMCAxMHB4O1xcclxcbiAgICAgICAgICAgIG1hcmdpbjogMDtcXHJcXG4gICAgICAgICAgICBnYXA6IDA7XFxyXFxuICAgICAgICB9XFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuICAgICAgICAucHJpb3JpdHlEYXRlTGFyZ2VTY3JlZW4ge1xcclxcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAgICNmb3JtIC5pbnB1dHMge1xcclxcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgICAgICAgICBtYXgtd2lkdGg6IDE1MHB4O1xcclxcblxcclxcbiAgICAgICAgfVxcclxcblxcclxcbiAgICAgICAgI2Zvcm0gLmZpcnN0LWlucHV0Q29udGFpbmVyIGlucHV0LCAuUHRpdGxlSW5wdXRDb250YWluZXIgaW5wdXQge1xcclxcbiAgICAgICAgICAgIG1heC13aWR0aDogMTY1cHg7XFxyXFxuICAgICAgICAgICAgbWF4LWhlaWdodDogMTVweDtcXHJcXG4gICAgICAgICAgICBib3JkZXI6IG5vbmU7XFxyXFxuICAgICAgICAgICAgb3V0bGluZTogbm9uZTtcXHJcXG4gICAgICAgICAgICBjb2xvcjogd2hpdGU7XFxyXFxuICAgICAgICAgICAgbWFyZ2luOiAxMHB4IDA7XFxyXFxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogaW5oZXJpdDtcXHJcXG4gICAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAgICNmb3JtIC5zZWNvbmQtaW5wdXRDb250YWluZXIgaW5wdXQsIC5QZGVzY3JpcHRpb25JbnB1dENvbnRhaW5lciBpbnB1dCB7XFxyXFxuICAgICAgICAgICAgbWF4LXdpZHRoOiAxNzhweDtcXHJcXG4gICAgICAgICAgICBtYXgtaGVpZ2h0OiAxNXB4O1xcclxcbiAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcXHJcXG4gICAgICAgICAgICBvdXRsaW5lOiBub25lO1xcclxcbiAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcXHJcXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmhlcml0O1xcclxcbiAgICAgICAgICAgIG1hcmdpbjogMDtcXHJcXG4gICAgICAgIH1cXHJcXG5cXHJcXG5cXHJcXG4gICAgICAgICNmb3JtIC5vdGhlci1vcHRpb25zLW9uLWZvcm1zIGJ1dHRvbiwgI2NvbmZpZ1ByaW9yaXR5RGF0ZU9uTW9iaWxlICNwcmlvcml0eSwgI2RhdGVQaWNrZXIge1xcclxcbiAgICAgICAgICAgIHBhZGRpbmc6IDRweDtcXHJcXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA2cHg7XFxyXFxuICAgICAgICAgICAgbWF4LXdpZHRoOiAxMDRweDtcXHJcXG4gICAgICAgICAgICBtaW4td2lkdGg6IDgwcHg7XFxyXFxuICAgICAgICB9XFxyXFxuXFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgQG1lZGlhIChtaW4td2lkdGg6IDU1MXB4KSBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcXHJcXG4gICAgICAgIGJvZHkgbWFpbiB7XFxyXFxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcblxcclxcbiAgICAgICAgfVxcclxcblxcclxcblxcclxcbiAgICAgICAgbWFpbiBoZWFkZXIge1xcclxcblxcclxcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZGE0YWY7XFxyXFxuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgICAgICAgICBnYXA6IDEwcHg7XFxyXFxuICAgICAgICB9XFxyXFxuXFxyXFxuICAgICAgICBtYWluIGFzaWRlIHtcXHJcXG4gICAgICAgICAgICBkaXNwbGF5OiBub25lO1xcclxcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTJlOGYwO1xcclxcbiAgICAgICAgICAgIHotaW5kZXg6IDI7XFxyXFxuICAgICAgICB9XFxyXFxuXFxyXFxuICAgICAgICBhc2lkZSB1bCwgdWwgc2VsZWN0IHtcXHJcXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xcclxcbiAgICAgICAgICAgIGZpbGw6IHdoaXRlO1xcclxcbiAgICAgICAgfVxcclxcblxcclxcbiAgICAgICAgc2VsZWN0I3Byb2plY3QtZHJvcGRvd24ge1xcclxcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig0MiwgNDAsIDQ5KTtcXHJcXG4gICAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAgIG1haW4gI0NvbnRhaW5lciB7XFxyXFxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICAgICAgICAgIGZsZXgtd3JhcDogd3JhcDtcXHJcXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxuICAgICAgICAgICAgei1pbmRleDogMTtcXHJcXG5cXHJcXG4gICAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAgIGhlYWRlciAubWVudUNvbnRyb2xsZXIge1xcclxcblxcclxcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgICAgICAgICAgIHdpZHRoOiA0MHB4O1xcclxcbiAgICAgICAgICAgIGhlaWdodDogNDBweDtcXHJcXG5cXHJcXG4gICAgICAgIH1cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG4gICAgICAgICN0b2dnbGVNZW51SWNvbiB7XFxyXFxuICAgICAgICAgICAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgICAgICAgICAgIHRvcDogMjBweDtcXHJcXG4gICAgICAgICAgICByaWdodDogMjBweDtcXHJcXG4gICAgICAgICAgICB3aWR0aDogNTBweDtcXHJcXG4gICAgICAgICAgICBoZWlnaHQ6IDUwcHg7XFxyXFxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzZmOWU5ZTtcXHJcXG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDhweDtcXHJcXG4gICAgICAgICAgICB0cmFuc2l0aW9uOiB0b3AgMC4zcztcXHJcXG4gICAgICAgICAgICB6LWluZGV4OiAxMDAwO1xcclxcblxcclxcbiAgICAgICAgICAgIHotaW5kZXg6IDEwMDA7XFxyXFxuICAgICAgICB9XFxyXFxuXFxyXFxuICAgICAgICAjdG9nZ2xlTWVudUljb246OmJlZm9yZSB7XFxyXFxuICAgICAgICAgICAgY29udGVudDogJyc7XFxyXFxuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICAgICAgICAgIHdpZHRoOiAyOHB4O1xcclxcbiAgICAgICAgICAgIGhlaWdodDogMnB4O1xcclxcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxyXFxuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01cHgpO1xcclxcbiAgICAgICAgICAgIHRyYW5zaXRpb246IDAuMnM7XFxyXFxuICAgICAgICB9XFxyXFxuXFxyXFxuICAgICAgICAjdG9nZ2xlTWVudUljb246OmFmdGVyIHtcXHJcXG4gICAgICAgICAgICBjb250ZW50OiAnJztcXHJcXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgICAgICAgICAgd2lkdGg6IDI4cHg7XFxyXFxuICAgICAgICAgICAgaGVpZ2h0OiAycHg7XFxyXFxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXHJcXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoNXB4KTtcXHJcXG4gICAgICAgICAgICB0cmFuc2l0aW9uOiAwLjJzO1xcclxcbiAgICAgICAgfVxcclxcblxcclxcbiAgICAgICAgI3RvZ2dsZU1lbnVJY29uLmFjdGl2ZTo6YmVmb3JlIHtcXHJcXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMHB4KSByb3RhdGUoNDVkZWcpO1xcclxcblxcclxcbiAgICAgICAgfVxcclxcblxcclxcbiAgICAgICAgI3RvZ2dsZU1lbnVJY29uLmFjdGl2ZTo6YWZ0ZXIge1xcclxcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwcHgpIHJvdGF0ZSgtNDVkZWcpO1xcclxcblxcclxcbiAgICAgICAgfVxcclxcblxcclxcbiAgICAgICAgYXNpZGUjbWVudSB7XFxyXFxuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XFxyXFxuICAgICAgICAgICAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgICAgICAgICAgIHRvcDogMDtcXHJcXG4gICAgICAgICAgICBsZWZ0OiAtMjIwcHg7XFxyXFxuICAgICAgICAgICAgd2lkdGg6IDIyMHB4O1xcclxcbiAgICAgICAgICAgIGhlaWdodDogMTAwdmg7XFxyXFxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZC1jb2xvcik7XFxyXFxuICAgICAgICAgICAgdHJhbnNpdGlvbjogMC4zcztcXHJcXG5cXHJcXG4gICAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAgIGFzaWRlI21lbnUuYWN0aXZlIHtcXHJcXG4gICAgICAgICAgICBsZWZ0OiAwO1xcclxcbiAgICAgICAgfVxcclxcblxcclxcbiAgICAgICAgYXNpZGUgdWwge1xcclxcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgICAgICAgICBjb2xvcjogd2hpdGU7XFxyXFxuICAgICAgICAgICAgZmlsbDogd2hpdGU7XFxyXFxuICAgICAgICB9XFxyXFxuXFxyXFxuICAgICAgICBoZWFkZXIgLm1lbnVDb250cm9sbGVyIHN2ZyB7XFxyXFxuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XFxyXFxuICAgICAgICAgICAgd2lkdGg6IDQwcHg7XFxyXFxuICAgICAgICAgICAgaGVpZ2h0OiA0MHB4O1xcclxcbiAgICAgICAgICAgIGZpbGw6IHdoaXRlO1xcclxcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcclxcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHhcXHJcXG4gICAgICAgIH1cXHJcXG5cXHJcXG5cXHJcXG4gICAgICAgICN1c2VybGlzdCAjYWRkVG9kb0J0bkNvbnRhaW5lciB7XFxyXFxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICAgICAgICAgIGdhcDogNXB4O1xcclxcbiAgICAgICAgICAgIG1hcmdpbjogMjdweCAwIDExcHggMjZweDtcXHJcXG4gICAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAgICN0YXNrIHtcXHJcXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgICAgICAgICAgZ2FwOiA1cHg7XFxyXFxuICAgICAgICAgICAgbWFyZ2luOiAyN3B4IDAgMTFweCAyNnB4O1xcclxcbiAgICAgICAgfVxcclxcblxcclxcbiAgICAgICAgI3VzZXJsaXN0ICNhZGRUb2RvQnRuQ29udGFpbmVyIHN2ZyB7XFxyXFxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2RjMjYyNjtcXHJcXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxyXFxuICAgICAgICAgICAgZmlsbDogd2hpdGU7XFxyXFxuICAgICAgICB9XFxyXFxuXFxyXFxuICAgICAgICAjdXNlcmxpc3QgI2FkZFRvZG9CdG5Db250YWluZXIgOmhvdmVyIHtcXHJcXG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgICAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEuMDkpO1xcclxcbiAgICAgICAgfVxcclxcblxcclxcbiAgICAgICAgI3VzZXJsaXN0ICNhZGRUb2RvQnRuQ29udGFpbmVyIGJ1dHRvbiB7XFxyXFxuICAgICAgICAgICAgYm9yZGVyOiAwO1xcclxcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcXHJcXG4gICAgICAgICAgICBjb2xvcjogI2I5MWMxYztcXHJcXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmhlcml0O1xcclxcbiAgICAgICAgfVxcclxcblxcclxcbiAgICAgICAgI3VzZXJsaXN0ICNhZGRUb2RvQnRuQ29udGFpbmVyIGJ1dHRvbjpob3ZlciB7XFxyXFxuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICAgICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxLjA5KTtcXHJcXG4gICAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAgIGRpdi5saXN0Q29udGFpbmVyIHtcXHJcXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICAgICAgICAgIGdhcDogNXB4O1xcclxcbiAgICAgICAgICAgIG1heC13aWR0aDogNzE0cHg7XFxyXFxuXFxyXFxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG4gICAgICAgICAgICBib3gtc2hhZG93OiAxcHggMHB4IDNweCAwcHg7XFxyXFxuICAgICAgICAgICAgbWFyZ2luOiAxOHB4IDYwcHg7XFxyXFxuICAgICAgICAgICAgcGFkZGluZzogMTVweDtcXHJcXG4gICAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAgICN1c2VybGlzdCAuaW50aWFsVGV4dERpc3BsYXkge1xcclxcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAgIC5pbnRpYWxUZXh0RGlzcGxheSBwIHtcXHJcXG4gICAgICAgICAgICBtYXgtd2lkdGg6IDUwMHB4O1xcclxcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgICAgICAgICAgbWF4LXdpZHRoOiA1MDBweDtcXHJcXG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICAgICAgICAgIGZsZXgtd3JhcDogd3JhcDtcXHJcXG4gICAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAgIC5pbnRpYWxUZXh0RGlzcGxheSBpbWcge1xcclxcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICAgICAgICAgIGhlaWdodDogYXV0bztcXHJcXG4gICAgICAgICAgICBwYWRkaW5nOiAyMHB4O1xcclxcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDQxcHg7XFxyXFxuICAgICAgICAgICAgb2JqZWN0LWZpdDogY29udGFpbjtcXHJcXG4gICAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAgIC5pbm5lcl9jb250YWluZXIgI2Zvcm0ge1xcclxcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICM2NDc0OGI7XFxyXFxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG4gICAgICAgICAgICBoZWlnaHQ6IDE1MHB4O1xcclxcbiAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XFxyXFxuICAgICAgICAgICAgbWF4LXdpZHRoOiA2MDBweDtcXHJcXG5cXHJcXG4gICAgICAgICAgICBtYXJnaW46IDE3cHg7XFxyXFxuICAgICAgICB9XFxyXFxuXFxyXFxuXFxyXFxuICAgICAgICAjZm9ybSBkaXYuZm9ybURldGFpbHMge1xcclxcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuXFxyXFxuICAgICAgICAgICAgcGFkZGluZzogMTBweDtcXHJcXG4gICAgICAgICAgICBtYXJnaW46IDA7XFxyXFxuICAgICAgICB9XFxyXFxuXFxyXFxuICAgICAgICAucHJpb3JpdHlEYXRlTGFyZ2VTY3JlZW4ge1xcclxcbiAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XFxyXFxuICAgICAgICB9XFxyXFxuXFxyXFxuICAgICAgICAjZm9ybSAuaW5wdXRzIHtcXHJcXG4gICAgICAgICAgICBtYXgtd2lkdGg6IDE1MHB4XFxyXFxuICAgICAgICB9XFxyXFxuXFxyXFxuICAgICAgICAjZm9ybSAuZmlyc3QtaW5wdXRDb250YWluZXIgaW5wdXQsIC5QdGl0bGVJbnB1dENvbnRhaW5lciBpbnB1dCxcXHJcXG4gICAgICAgICNmb3JtIC5zZWNvbmQtaW5wdXRDb250YWluZXIgaW5wdXQsIC5QZGVzY3JpcHRpb25JbnB1dENvbnRhaW5lciBpbnB1dCB7XFxyXFxuICAgICAgICAgICAgbWF4LXdpZHRoOiA2MDBweDtcXHJcXG4gICAgICAgICAgICBoZWlnaHQ6IDI1cHg7XFxyXFxuICAgICAgICAgICAgYm9yZGVyOiBub25lO1xcclxcbiAgICAgICAgICAgIG91dGxpbmU6IG5vbmU7XFxyXFxuICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xcclxcbiAgICAgICAgICAgIG1hcmdpbjogMTBweCAwIDAgMDtcXHJcXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmhlcml0O1xcclxcbiAgICAgICAgfVxcclxcblxcclxcblxcclxcblxcclxcbiAgICAgICAgcC5zZWNvbmQtaW5wdXRDb250YWluZXIge1xcclxcbiAgICAgICAgICAgIG1hcmdpbjogMDtcXHJcXG4gICAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAgICNmb3JtIC5idXR0b25zIHtcXHJcXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICAgICAgICAgIG1hcmdpbjogMXB4IDIzcHg7XFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuICAgICAgICB9XFxyXFxuXFxyXFxuICAgICAgICAjY29uZmlnUHJpb3JpdHlEYXRlT25Nb2JpbGUge1xcclxcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgICAgICAgICBwb3NpdGlvbjogc3RhdGljO1xcclxcblxcclxcbiAgICAgICAgfVxcclxcblxcclxcblxcclxcbiAgICAgICAgI2Zvcm0gLm90aGVyLW9wdGlvbnMtb24tZm9ybXMgYnV0dG9uLCAjcHJpb3JpdHksICNkYXRlUGlja2VyIHtcXHJcXG4gICAgICAgICAgICBwYWRkaW5nOiA3cHg7XFxyXFxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogOXB4O1xcclxcbiAgICAgICAgfVxcclxcblxcclxcbiAgICAgICAgZm9ybSNQcm9qZWN0Rm9ybSB7XFxyXFxuXFxyXFxuXFxyXFxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzY0NzQ4YjtcXHJcXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbiAgICAgICAgICAgIGhlaWdodDogMTUwcHg7XFxyXFxuICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcXHJcXG4gICAgICAgICAgICBtYXgtd2lkdGg6IDY5M3B4O1xcclxcbiAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMXJlbTtcXHJcXG4gICAgICAgICAgICBtYXJnaW46IDlweCA2MXB4O1xcclxcbiAgICAgICAgfVxcclxcblxcclxcbiAgICAgICAgZGl2LnByb2plY3RGb3JtRGV0YWlscyB7XFxyXFxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gICAgICAgICAgICB0b3A6IDA7XFxyXFxuICAgICAgICB9XFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgKi8gLnByb2plY3RCdXR0b25zQ29udGFpbmVyIHtcXHJcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIHNlbGVjdCNwcmlvcml0eSB7XFxyXFxuICAgICAgICBwYWRkaW5nOiA0cHg7XFxyXFxuICAgICAgICBib3JkZXItcmFkaXVzOiA5cHg7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgaW5wdXQjZGF0ZVBpY2tlciB7XFxyXFxuXFxyXFxuICAgICAgICBwYWRkaW5nOiAzcHg7XFxyXFxuICAgICAgICBib3JkZXItcmFkaXVzOiA5cHg7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG5cXHJcXG4gICAgQG1lZGlhIChtaW4td2lkdGg6IDc2OXB4KSBhbmQgKG1heC13aWR0aDogMTAwMHB4KSB7XFxyXFxuXFxyXFxuICAgICAgICBib2R5IG1haW4ge1xcclxcblxcclxcbiAgICAgICAgICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuXFxyXFxuICAgICAgICB9XFxyXFxuXFxyXFxuXFxyXFxuICAgICAgICBtYWluIGhlYWRlciB7XFxyXFxuICAgICAgICAgICAgZ3JpZC1hcmVhOiAxIC8gMiAvIDIgLyA2O1xcclxcblxcclxcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZGE0YWY7XFxyXFxuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgICAgICAgICBnYXA6IDEwcHg7XFxyXFxuICAgICAgICB9XFxyXFxuXFxyXFxuICAgICAgICBtYWluIGFzaWRlIHtcXHJcXG5cXHJcXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2UyZThmMDtcXHJcXG4gICAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAgIG1haW4gI0NvbnRhaW5lciB7XFxyXFxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICAgICAgICAgIGZsZXgtd3JhcDogd3JhcDtcXHJcXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxuICAgICAgICAgICAgei1pbmRleDogMTtcXHJcXG5cXHJcXG4gICAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAgIGhlYWRlciAubWVudUNvbnRyb2xsZXIge1xcclxcblxcclxcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgICAgICAgICAgIHdpZHRoOiA0MHB4O1xcclxcbiAgICAgICAgICAgIGhlaWdodDogNDBweDtcXHJcXG5cXHJcXG4gICAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAgIGhlYWRlciAubWVudUNvbnRyb2xsZXIgc3ZnIHtcXHJcXG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcXHJcXG4gICAgICAgICAgICB3aWR0aDogNDBweDtcXHJcXG4gICAgICAgICAgICBoZWlnaHQ6IDQwcHg7XFxyXFxuICAgICAgICAgICAgZmlsbDogd2hpdGU7XFxyXFxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxyXFxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweFxcclxcbiAgICAgICAgfVxcclxcblxcclxcbiAgICAgICAgI3VzZXJsaXN0IC5pbnRpYWxUZXh0RGlzcGxheSB7XFxyXFxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAgICN1c2VybGlzdCAuaW50aWFsVGV4dERpc3BsYXkgcCB7XFxyXFxuICAgICAgICAgICAgZm9udC1zaXplOiAxLjJyZW07XFxyXFxuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XFxyXFxuICAgICAgICAgICAgbWFyZ2luOiAxMHB4IDAgMCAwO1xcclxcbiAgICAgICAgICAgIG1heC13aWR0aDogNjAwcHg7XFxyXFxuICAgICAgICB9XFxyXFxuXFxyXFxuICAgICAgICAjdXNlcmxpc3QgI2FkZFRvZG9CdG5Db250YWluZXIge1xcclxcbiAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XFxyXFxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgICAgICAgICBnYXA6IDVweDtcXHJcXG4gICAgICAgICAgICBtYXJnaW46IDI3cHggMCAxMXB4IDI2cHg7XFxyXFxuICAgICAgICB9XFxyXFxuXFxyXFxuICAgICAgICAjdGFzayB7XFxyXFxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICAgICAgICAgIGdhcDogNXB4O1xcclxcbiAgICAgICAgICAgIG1hcmdpbjogMjdweCAwIDExcHggMjZweDtcXHJcXG4gICAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAgICN1c2VybGlzdCAjYWRkVG9kb0J0bkNvbnRhaW5lciBzdmcge1xcclxcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNkYzI2MjY7XFxyXFxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xcclxcbiAgICAgICAgICAgIGZpbGw6IHdoaXRlO1xcclxcbiAgICAgICAgfVxcclxcblxcclxcbiAgICAgICAgI3VzZXJsaXN0ICNhZGRUb2RvQnRuQ29udGFpbmVyIDpob3ZlciB7XFxyXFxuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICAgICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxLjA5KTtcXHJcXG4gICAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAgICN1c2VybGlzdCAjYWRkVG9kb0J0bkNvbnRhaW5lciBidXR0b24ge1xcclxcbiAgICAgICAgICAgIGJvcmRlcjogMDtcXHJcXG4gICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XFxyXFxuICAgICAgICAgICAgY29sb3I6ICNiOTFjMWM7XFxyXFxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogaW5oZXJpdDtcXHJcXG4gICAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAgICN1c2VybGlzdCAjYWRkVG9kb0J0bkNvbnRhaW5lciBidXR0b246aG92ZXIge1xcclxcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMS4wOSk7XFxyXFxuICAgICAgICB9XFxyXFxuXFxyXFxuICAgICAgICBkaXYubGlzdENvbnRhaW5lciB7XFxyXFxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgICAgICAgICBnYXA6IDVweDtcXHJcXG4gICAgICAgICAgICBtYXgtd2lkdGg6IDcxNHB4O1xcclxcblxcclxcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxyXFxuICAgICAgICAgICAgYm94LXNoYWRvdzogMXB4IDBweCAzcHggMHB4O1xcclxcbiAgICAgICAgICAgIG1hcmdpbjogMThweCA2MHB4O1xcclxcbiAgICAgICAgICAgIHBhZGRpbmc6IDE1cHg7XFxyXFxuICAgICAgICB9XFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuICAgICAgICAuaW5uZXJfY29udGFpbmVyICNmb3JtIHtcXHJcXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjQ3NDhiO1xcclxcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxyXFxuICAgICAgICAgICAgaGVpZ2h0OiAxNTBweDtcXHJcXG4gICAgICAgICAgICBkaXNwbGF5OiBub25lO1xcclxcbiAgICAgICAgICAgIG1heC13aWR0aDogNzUwcHg7XFxyXFxuXFxyXFxuICAgICAgICAgICAgbWFyZ2luOiAxN3B4O1xcclxcbiAgICAgICAgfVxcclxcblxcclxcblxcclxcbiAgICAgICAgI2Zvcm0gZGl2LmZvcm1EZXRhaWxzIHtcXHJcXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcblxcclxcbiAgICAgICAgICAgIHBhZGRpbmc6IDlweCAyMHB4O1xcclxcbiAgICAgICAgICAgIG1hcmdpbjogMDtcXHJcXG4gICAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAgIC5wcmlvcml0eURhdGVMYXJnZVNjcmVlbiB7XFxyXFxuICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcXHJcXG4gICAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAgICNmb3JtIC5pbnB1dHMge1xcclxcbiAgICAgICAgICAgIG1heC13aWR0aDogMTUwcHhcXHJcXG4gICAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAgICNmb3JtIC5maXJzdC1pbnB1dENvbnRhaW5lciBpbnB1dCwgLlB0aXRsZUlucHV0Q29udGFpbmVyIGlucHV0IHtcXHJcXG4gICAgICAgICAgICBtYXgtd2lkdGg6IDQyMHB4O1xcclxcbiAgICAgICAgICAgIG1heC1oZWlnaHQ6IDYwcHg7XFxyXFxuICAgICAgICAgICAgYm9yZGVyOiBub25lO1xcclxcbiAgICAgICAgICAgIG91dGxpbmU6IG5vbmU7XFxyXFxuICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xcclxcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IGluaGVyaXQ7XFxyXFxuICAgICAgICAgICAgbWFyZ2luOiAwO1xcclxcbiAgICAgICAgfVxcclxcblxcclxcbiAgICAgICAgI2Zvcm0gLnNlY29uZC1pbnB1dENvbnRhaW5lciBpbnB1dCwgLlBkZXNjcmlwdGlvbklucHV0Q29udGFpbmVyIGlucHV0IHtcXHJcXG4gICAgICAgICAgICBtYXgtd2lkdGg6IDQyMHB4O1xcclxcbiAgICAgICAgICAgIG1heC1oZWlnaHQ6IDYwcHg7XFxyXFxuICAgICAgICAgICAgYm9yZGVyOiBub25lO1xcclxcbiAgICAgICAgICAgIG91dGxpbmU6IG5vbmU7XFxyXFxuICAgICAgICAgICAgY29sb3I6IHJnYig5MCwgNzcsIDc3KTtcXHJcXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmhlcml0O1xcclxcbiAgICAgICAgICAgIG1hcmdpbjogMDtcXHJcXG4gICAgICAgIH1cXHJcXG5cXHJcXG5cXHJcXG4gICAgICAgICNmb3JtIC5idXR0b25zIHtcXHJcXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gICAgICAgICAgICBtYXJnaW46IDFweCAzM3B4XFxyXFxuICAgICAgICB9XFxyXFxuXFxyXFxuICAgICAgICBmb3JtI1Byb2plY3RGb3JtIHtcXHJcXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjQ3NDhiO1xcclxcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxyXFxuICAgICAgICAgICAgaGVpZ2h0OiAxNTBweDtcXHJcXG4gICAgICAgICAgICBkaXNwbGF5OiBub25lO1xcclxcbiAgICAgICAgICAgIG1heC13aWR0aDogNjkzcHg7XFxyXFxuICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAxcmVtO1xcclxcbiAgICAgICAgICAgIG1hcmdpbjogOXB4IDYxcHg7XFxyXFxuXFxyXFxuICAgICAgICB9XFxyXFxuXFxyXFxuICAgICAgICBkaXYucHJvamVjdEZvcm1EZXRhaWxzIHtcXHJcXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgICAgICAgICAgIHRvcDogMDtcXHJcXG4gICAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAgIGRpdi5wcmlvcml0eURhdGVPbkxhcmdlU2NyZWVuIHtcXHJcXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgICAgICAgICAgdG9wOiAwO1xcclxcblxcclxcblxcclxcbiAgICAgICAgfVxcclxcblxcclxcbiAgICAgICAgLnByb2plY3RCdXR0b25zQ29udGFpbmVyIHtcXHJcXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICAgICAgfVxcclxcblxcclxcbiAgICAgICAgI2NvbmZpZ1ByaW9yaXR5RGF0ZU9uTW9iaWxlIHtcXHJcXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgICAgICAgICAgcG9zaXRpb246IHN0YXRpYztcXHJcXG4gICAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAgICNmb3JtIC5vdGhlci1vcHRpb25zLW9uLWZvcm1zIGJ1dHRvbiwgI3ByaW9yaXR5LCAjZGF0ZVBpY2tlciB7XFxyXFxuICAgICAgICAgICAgcGFkZGluZzogOHB4O1xcclxcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDZweDtcXHJcXG4gICAgICAgICAgICBib3JkZXI6IG5vbmU7XFxyXFxuICAgICAgICB9XFxyXFxuXFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgbWFpbiB7XFxyXFxuICAgICAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxOTBweCAxZnI7XFxyXFxuICAgICAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDcwcHggNTcwcHg7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG5cXHJcXG4gICAgaGVhZGVyIHtcXHJcXG4gICAgICAgIGdyaWQtYXJlYTogMSAvIDIgLyAyIC8gNjtcXHJcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZGE0YWY7XFxyXFxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIGFzaWRlIHtcXHJcXG4gICAgICAgIGdyaWQtYXJlYTogMS8gMS8gNC8gMjtcXHJcXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNlMmU4ZjA7XFxyXFxuXFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgI0NvbnRhaW5lciB7XFxyXFxuICAgICAgICBncmlkLWFyZWE6IDIgLyAyIC8gMyAvIDQ7XFxyXFxuXFxyXFxuICAgICAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxMDBweCA2NTBweCAzNTBweDtcXHJcXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG4gICAgfVxcclxcblxcclxcblxcclxcblxcclxcbiAgICAuaW5uZXJfY29udGFpbmVyIHtcXHJcXG4gICAgICAgIGdyaWQtYXJlYTogMSAvIDIgLyAzIC8gMztcXHJcXG4gICAgfVxcclxcblxcclxcblxcclxcbiAgICAuaW50aWFsVGV4dERpc3BsYXkge1xcclxcbiAgICAgICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgICAgICBwYWRkaW5nOiAxMHB4O1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5pbnRpYWxUZXh0RGlzcGxheSBwIHtcXHJcXG4gICAgICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xcclxcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcXHJcXG4gICAgICAgIG1hcmdpbjogMTBweCAwIDAgMDtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAuaW50aWFsVGV4dERpc3BsYXkgaW1nIHtcXHJcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICAgICAgaGVpZ2h0OiBhdXRvO1xcclxcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMzBweDtcXHJcXG4gICAgICAgIHBhZGRpbmc6IDIwcHg7XFxyXFxuXFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgI2FkZFRvZG9CdG5Db250YWluZXIge1xcclxcbiAgICAgICAgZGlzcGxheTogbm9uZTtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAuZW1wdHkge1xcclxcbiAgICAgICAgZ3JpZC1hcmVhOiAxIC8gMyAvIDUgLyA0O1xcclxcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2Y4ZjhmODtcXHJcXG4gICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi9pbWFnZXMvVG9kby0xLmpwZycpO1xcclxcbiAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXHJcXG4gICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXHJcXG4gICAgfVxcclxcblxcclxcblxcclxcblxcclxcbiAgICAubWVudUNvbnRyb2xsZXIge1xcclxcblxcclxcbiAgICAgICAgZGlzcGxheTogbm9uZTtcXHJcXG4gICAgICAgIHdpZHRoOiA0MHB4O1xcclxcbiAgICAgICAgaGVpZ2h0OiA0MHB4O1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5jaGVja0JveCB7XFxyXFxuICAgICAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XFxyXFxuICAgICAgICAtbW96LWFwcGVhcmFuY2U6IG5vbmU7XFxyXFxuICAgICAgICB3aWR0aDogMjBweDtcXHJcXG4gICAgICAgIGhlaWdodDogMjBweDtcXHJcXG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XFxyXFxuICAgICAgICBib3JkZXItcmFkaXVzOiAzcHg7XFxyXFxuICAgICAgICBvdXRsaW5lOiBub25lO1xcclxcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcblxcclxcbiAgICB9XFxyXFxuXFxyXFxuXFxyXFxuICAgIC5jaGVja0JveDo6YmVmb3JlIHtcXHJcXG4gICAgICAgIGNvbnRlbnQ6IFxcXCJcXFwiO1xcclxcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XFxyXFxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgICAgICB0b3A6IDUwJTtcXHJcXG4gICAgICAgIGxlZnQ6IDUwJTtcXHJcXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcclxcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xcclxcbiAgICAgICAgY29sb3I6IHJnYigyMiwgMjUyLCAyMik7XFxyXFxuICAgICAgICBvcGFjaXR5OiAwO1xcclxcbiAgICAgICAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjNzIGVhc2U7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLmNoZWNrQm94OmhvdmVyOjpiZWZvcmUge1xcclxcbiAgICAgICAgY29udGVudDogXFxcIuKck1xcXCI7XFxyXFxuICAgICAgICBvcGFjaXR5OiAwLjU7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG5cXHJcXG4gICAgc3ZnIHtcXHJcXG4gICAgICAgIHdpZHRoOiAyNXB4O1xcclxcbiAgICAgICAgaGVpZ2h0OiAyNXB4O1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgICN0YXNrIHtcXHJcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICAgICAgZ2FwOiA1cHg7XFxyXFxuICAgICAgICBtYXJnaW46IDI3cHggMCAxMXB4IDI2cHg7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG4gICAgI3Rhc2sgc3ZnIHtcXHJcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNkYzI2MjY7XFxyXFxuICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxyXFxuICAgICAgICBmaWxsOiB3aGl0ZTtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAjdGFzayA6aG92ZXIge1xcclxcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEuMDkpO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgICN0YXNrIGJ1dHRvbiB7XFxyXFxuICAgICAgICBib3JkZXI6IDA7XFxyXFxuICAgICAgICBmb250LXNpemU6IDE2cHg7XFxyXFxuICAgICAgICBjb2xvcjogI2I5MWMxYztcXHJcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IGluaGVyaXQ7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgI3Rhc2sgYnV0dG9uOmhvdmVyIHtcXHJcXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxLjA5KTtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICBidXR0b24uZGVsZXRlVGFzayB7XFxyXFxuICAgICAgICBwYWRkaW5nOiAxMHB4O1xcclxcbiAgICAgICAgYm9yZGVyOiBub25lO1xcclxcbiAgICAgICAgYm9yZGVyLXJhZGl1czogN3B4O1xcclxcbiAgICAgICAgZm9udC1zaXplOiAxLjFyZW07XFxyXFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTA0ODdjO1xcclxcbiAgICAgICAgY29sb3I6IHdoaXRlO1xcclxcbiAgICAgICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMnMgZWFzZS1vdXQ7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgYnV0dG9uLmRlbGV0ZVRhc2s6aG92ZXIge1xcclxcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpXFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgYnV0dG9uLmRlbGV0ZVRhc2s6YWN0aXZlIHtcXHJcXG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMC45KVxcclxcbiAgICB9XFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuICAgIC5saXN0Q29udGFpbmVyIHtcXHJcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgICAgICBnYXA6IDVweDtcXHJcXG4gICAgICAgIG1heC13aWR0aDogNzE0cHg7XFxyXFxuXFxyXFxuICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbiAgICAgICAgYm94LXNoYWRvdzogMXB4IDBweCAzcHggMHB4O1xcclxcbiAgICAgICAgbWFyZ2luOiAxOHB4IDE4cHg7XFxyXFxuICAgICAgICBwYWRkaW5nOiAxNXB4O1xcclxcblxcclxcblxcclxcbiAgICB9XFxyXFxuXFxyXFxuXFxyXFxuICAgIC5wcmlvcml0eURhdGVPbkxhcmdlU2NyZWVuIHtcXHJcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICAgICAgbWF4LXdpZHRoOiAyMDBweDtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAucHJvamVjdEJ1dHRvbnNDb250YWluZXIge1xcclxcbiAgICAgICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAucHJvamVjdEJ1dHRvbnNDb250YWluZXIgYnV0dG9uIHtcXHJcXG4gICAgICAgIGJvcmRlcjogbm9uZTtcXHJcXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDdweDtcXHJcXG4gICAgICAgIHBhZGRpbmc6IDlweDtcXHJcXG4gICAgfVxcclxcblxcclxcblxcclxcbiAgICAuZXhjbHVkZWQge1xcclxcbiAgICAgICAgY29sb3I6IHJlZDtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAudGFza0NvbnRhaW5lciB7XFxyXFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICAgICAgZmxleDogMTtcXHJcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gICAgfVxcclxcblxcclxcblxcclxcblxcclxcbiAgICAudGFza1RpdGxlLCAubmV3UHJvamVjdC10YXNrLXRpdGxlLCAuZWRpdGFibGVTYXZlVGFza0VsIHtcXHJcXG4gICAgICAgIG1hcmdpbjogMDtcXHJcXG4gICAgICAgIGZvbnQtc2l6ZTogMThweDtcXHJcXG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG4gICAgICAgIHRleHQtZGVjb3JhdGlvbi1jb2xvcjogcmVkO1xcclxcblxcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC50YXNrRGVzY3JpcHRpb24sIC5uZXdQcm9qZWN0LWRlc2NyaXB0aW9uIHtcXHJcXG4gICAgICAgIG1hcmdpbjogMDtcXHJcXG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcXHJcXG5cXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAudGFza1ByaW9yaXR5IHtcXHJcXG4gICAgICAgIGZvbnQtc2l6ZTogMTlweDtcXHJcXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDZweDtcXHJcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICM1NzNkM2Q7XFxyXFxuICAgICAgICBwYWRkaW5nOiA2cHg7XFxyXFxuICAgICAgICBtYXJnaW46IDAgMCA3cHg7XFxyXFxuICAgICAgICBjb2xvcjogd2hpdGU7XFxyXFxuXFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLmlubmVyVGFza0hhbmRsZXIge1xcclxcbiAgICAgICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgICAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgICAgICBtYXJnaW46IDBweCAxNXB4IDAgNDBweDtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAuaW5ib3gtY29udGFpbmVyIHtcXHJcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICAgICAgZ2FwOiA1cHg7XFxyXFxuICAgICAgICBtYXJnaW46IDBweCAwIDAgMTZweDtcXHJcXG4gICAgICAgIGhlaWdodDogMjZweDtcXHJcXG4gICAgICAgIHBhZGRpbmc6IDlweDtcXHJcXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDVweCAwcHggMHB4IDVweDtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAuaW5ib3gtY29udGFpbmVyOmhvdmVyIHtcXHJcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWhvdmVyLWNvbG9yKTtcXHJcXG4gICAgfVxcclxcblxcclxcblxcclxcbiAgICAuaW5ib3gge1xcclxcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xcclxcblxcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5pbmJveExpc3RDb250YWluZXIge1xcclxcbiAgICAgICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgICAgIGdhcDogNXB4O1xcclxcblxcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5pbmJveFRhc2tDb250YWluZXIge1xcclxcbiAgICAgICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgICAgIGZsZXg6IDE7XFxyXFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLmluYm94VGFza1RpdGxlIHtcXHJcXG4gICAgICAgIG1hcmdpbjogMDtcXHJcXG4gICAgICAgIGZvbnQtc2l6ZTogMThweDtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAuaW5ib3hUYXNrRGVzY3JpcHRpb24ge1xcclxcbiAgICAgICAgbWFyZ2luOiAwO1xcclxcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xcclxcblxcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5pbmJveFRhc2tQcmlvcml0eSB7XFxyXFxuICAgICAgICBtYXJnaW46IDAgMjBweCAwIDA7XFxyXFxuICAgICAgICBmb250LXNpemU6IDIwcHg7XFxyXFxuXFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLmR1ZURhdGUge1xcclxcbiAgICAgICAgbWFyZ2luOiAwO1xcclxcblxcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5lZGl0IHtcXHJcXG4gICAgICAgIGJvcmRlcjogbm9uZTtcXHJcXG4gICAgICAgIG91dGxpbmU6IG5vbmU7XFxyXFxuICAgICAgICBmb250LXNpemU6IDE3cHg7XFxyXFxuICAgICAgICBtYXgtd2lkdGg6IDExMHB4O1xcclxcbiAgICAgICAgbWFyZ2luOiAwIDBcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAjcHJvamVjdHMgaDMge1xcclxcbiAgICAgICAgbWFyZ2luOiAwIDAgMCAxMHB4O1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgICNmb3JtIHtcXHJcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICM2NDc0OGI7XFxyXFxuICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbiAgICAgICAgaGVpZ2h0OiAxNDBweDtcXHJcXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XFxyXFxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDFyZW07XFxyXFxuICAgICAgICBtYXJnaW46IDEwcHggMTBweCAwIDA7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLmZvcm1EZXRhaWxzIHtcXHJcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgICAgICAgbWFyZ2luOiAxMnB4IDE1cHg7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgaW5wdXQjZGF0ZVBpY2tlciB7XFxyXFxuICAgICAgICBtYXgtd2lkdGg6IDExOHB4O1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5idXR0b25zIHtcXHJcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICAgICAgICBtYXJnaW46IDFweCAzM3B4XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLmJ1dHRvbnMgYnV0dG9uIHtcXHJcXG4gICAgICAgIGJvcmRlcjogbm9uZTtcXHJcXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDdweDtcXHJcXG4gICAgICAgIHBhZGRpbmc6IDdweDtcXHJcXG4gICAgICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjJzIGVhc2Utb3V0XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLmJ1dHRvbnMgYnV0dG9uOmhvdmVyIHtcXHJcXG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wNSlcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAjUHJvamVjdEZvcm0ge1xcclxcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzY0NzQ4YjtcXHJcXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxyXFxuICAgICAgICBoZWlnaHQ6IDE1MHB4O1xcclxcbiAgICAgICAgZGlzcGxheTogbm9uZTtcXHJcXG4gICAgICAgIHBhZGRpbmc6IDEwcHg7XFxyXFxuICAgICAgICBtYXJnaW46IDE1cHggMTVweCAwIDE3cHg7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLnByb2plY3RGb3JtRGV0YWlscyB7XFxyXFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gICAgICAgIHRvcDogMDtcXHJcXG4gICAgfVxcclxcblxcclxcblxcclxcbiAgICAuZmlyc3QtaW5wdXRDb250YWluZXIgaW5wdXQsIC5QdGl0bGVJbnB1dENvbnRhaW5lciBpbnB1dCB7XFxyXFxuICAgICAgICBtYXgtd2lkdGg6IDYwMHB4O1xcclxcbiAgICAgICAgaGVpZ2h0OiAyNXB4O1xcclxcbiAgICAgICAgYm9yZGVyOiBub25lO1xcclxcbiAgICAgICAgb3V0bGluZTogbm9uZTtcXHJcXG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcXHJcXG4gICAgICAgIG1hcmdpbjogMTBweCAwIDAgMDtcXHJcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IGluaGVyaXQ7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLnRhc2stdGl0bGUsIC5kZXNjcmlwdGlvbiB7XFxyXFxuICAgICAgICB3aWR0aDogMzUwcHg7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLmZpcnN0LWlucHV0Q29udGFpbmVyIGlucHV0OjpwbGFjZWhvbGRlciwgLlB0aXRsZUlucHV0Q29udGFpbmVyIGlucHV0OjpwbGFjZWhvbGRlciB7XFxyXFxuICAgICAgICBjb2xvcjogd2hpdGU7XFxyXFxuICAgICAgICBwYWRkaW5nOiAwIDEwcHg7XFxyXFxuICAgICAgICBvcGFjaXR5OiAxO1xcclxcblxcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5zZWNvbmQtaW5wdXRDb250YWluZXIgaW5wdXQsIC5QZGVzY3JpcHRpb25JbnB1dENvbnRhaW5lciBpbnB1dCB7XFxyXFxuICAgICAgICBtYXgtd2lkdGg6IDYwMHB4O1xcclxcbiAgICAgICAgaGVpZ2h0OiAyNXB4O1xcclxcbiAgICAgICAgYm9yZGVyOiBub25lO1xcclxcbiAgICAgICAgb3V0bGluZTogbm9uZTtcXHJcXG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcXHJcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IGluaGVyaXQ7XFxyXFxuICAgICAgICBtYXJnaW46IDA7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLnNlY29uZC1pbnB1dENvbnRhaW5lciBpbnB1dDo6cGxhY2Vob2xkZXIsIC5QZGVzY3JpcHRpb25JbnB1dENvbnRhaW5lciBpbnB1dDo6cGxhY2Vob2xkZXIge1xcclxcbiAgICAgICAgcGFkZGluZzogMCAxMHB4O1xcclxcbiAgICAgICAgY29sb3I6IHdoaXRlO1xcclxcbiAgICAgICAgb3BhY2l0eTogMTtcXHJcXG5cXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAuZmlyc3QtaW5wdXRDb250YWluZXIsIC5zZWNvbmQtaW5wdXRDb250YWluZXIge1xcclxcbiAgICAgICAgbWFyZ2luOiAxMHB4IDAgMCAwO1xcclxcbiAgICAgICAgZm9udC1zaXplOiAxcmVtO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5vdGhlci1vcHRpb25zLW9uLWZvcm1zLCAuZm9vdGVyIHt9XFxyXFxuXFxyXFxuICAgIC5zdWJtaXRCdG46YWN0aXZlIHtcXHJcXG4gICAgICAgIHRyYW5zZm9ybTogYWN0aXZlIHNjYWxlKDEuMSk7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLm90aGVyLW9wdGlvbnMtb24tZm9ybXMgYnV0dG9uLCAjcHJpb3JpdHksIGlucHV0I2RhdGVQaWNrZXIge1xcclxcbiAgICAgICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIC4zcyBlYXNlLWluO1xcclxcbiAgICAgICAgcGFkZGluZzogN3B4O1xcclxcbiAgICAgICAgYm9yZGVyLXJhZGl1czogN3B4O1xcclxcbiAgICAgICAgYm9yZGVyOiBub25lO1xcclxcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzA3YzRkZDtcXHJcXG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcXHJcXG4gICAgICAgIGZvbnQtc2l6ZTogMTVweDtcXHJcXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgI3ByaW9yaXR5IHtcXHJcXG4gICAgICAgIG1hcmdpbjogMTBweCAwIDhweCAwO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgICNwcm9qZWN0UHJpb3JpdHksIC5mb290ZXIge1xcclxcbiAgICAgICAgcGFkZGluZzogN3B4O1xcclxcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcbiAgICAgICAgbWFyZ2luOiAwIDRweCA1cHggMDtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAuYWRkUHJvamVjdHNDb250YWluZXIge1xcclxcbiAgICAgICAgZGlzcGxheTogZmxleDtcXHJcXG5cXHJcXG4gICAgICAgIG1hcmdpbjogMCAwIDAgMjBweDtcXHJcXG4gICAgICAgIHBhZGRpbmc6IDdweDtcXHJcXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgICAgICBnYXA6IDEwcHg7XFxyXFxuICAgICAgICBoZWlnaHQ6IDI1cHg7XFxyXFxuICAgICAgICBib3JkZXItcmFkaXVzOiA1cHggMHB4IDBweCA1cHg7XFxyXFxuXFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLmFkZFByb2plY3RzQ29udGFpbmVyOmhvdmVyIHtcXHJcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWhvdmVyLWNvbG9yKTtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAuYWRkUHJvamVjdHNDb250YWluZXIgc3ZnIHtcXHJcXG4gICAgICAgIHdpZHRoOiAyNXB4O1xcclxcbiAgICAgICAgaGVpZ2h0OiAyNXB4O1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgICNhZGROZXdQcm9qZWN0RWwge1xcclxcbiAgICAgICAgbWFyZ2luOiAwO1xcclxcbiAgICAgICAgZm9udC1zaXplOiAxOXB4O1xcclxcbiAgICB9XFxyXFxuXFxyXFxuXFxyXFxuICAgIC5wcm9qZWN0X3RleHQge1xcclxcbiAgICAgICAgbWFyZ2luOiAwIDAgMTBweCAxN3B4O1xcclxcbiAgICAgICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXHJcXG4gICAgICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xcclxcbiAgICAgICAgcGFkZGluZzogOXB4O1xcclxcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4IDBweCAwcHggNXB4O1xcclxcblxcclxcblxcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5wcm9qZWN0X3RleHQ6aG92ZXIge1xcclxcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taG92ZXItY29sb3IpO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuICAgICNwcm9qZWN0LWRyb3Bkb3duIHtcXHJcXG4gICAgICAgIGJvcmRlcjogMDtcXHJcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IGluaGVyaXQ7XFxyXFxuICAgICAgICBtYXJnaW46IDVweCAwIDAgMTdweDtcXHJcXG4gICAgICAgIGZvbnQtc2l6ZTogMThweDtcXHJcXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA1NTA7XFxyXFxuICAgICAgICBwYWRkaW5nOiA4cHg7XFxyXFxuICAgICAgICBib3JkZXItcmFkaXVzOiA1cHggMHB4IDBweCA1cHg7XFxyXFxuICAgICAgICBtYXgtd2lkdGg6IDE2MHB4O1xcclxcblxcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgICNwcm9qZWN0LWRyb3Bkb3duOmhvdmVyIHtcXHJcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWhvdmVyLWNvbG9yKTtcXHJcXG5cXHJcXG4gICAgfVxcclxcblxcclxcblxcclxcbiAgICAjcHJvamVjdC1kcm9wZG93bjpmb2N1cyB7XFxyXFxuICAgICAgICBib3JkZXI6IG5vbmU7XFxyXFxuICAgICAgICBvdXRsaW5lOiBub25lO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgICNuZXdQcm9qZWN0c0Zvcm1Db250YWluZXJFbCB7XFxyXFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICAgICAganVzdGlmeS1pdGVtczogY2VudGVyO1xcclxcblxcclxcblxcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgICNQcm9qZWN0c0Zvcm1OYW1lQ29udGFpbmVyRWwge1xcclxcbiAgICAgICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgfVxcclxcblxcclxcblxcclxcbiAgICAuaW5wdXROZXdwcm9qZWN0Rm9ybU5hbWUge1xcclxcbiAgICAgICAgZGlzcGxheTogbm9uZTtcXHJcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNjZWUzZTM7XFxyXFxuICAgICAgICBtYXgtd2lkdGg6IDQwMHB4O1xcclxcbiAgICAgICAgbWF4LWhlaWdodDogMzAwcHg7XFxyXFxuICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbiAgICAgICAgcGFkZGluZzogNDZweDtcXHJcXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgICAgIG1hcmdpbjogNjBweCAwIDAgMDtcXHJcXG4gICAgICAgIGJveC1zaGFkb3c6IDBweCA5cHggM3B4IDBweDtcXHJcXG4gICAgfVxcclxcblxcclxcblxcclxcbiAgICAuaW5wdXROZXdwcm9qZWN0Rm9ybU5hbWUgaDIge1xcclxcbiAgICAgICAgbWFyZ2luOiAwIDAgMTBweCAwO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuXFxyXFxuICAgIC5pbnB1dE5ld1Byb2plY3ROYW1lIHtcXHJcXG4gICAgICAgIG1heC13aWR0aDogMzUwcHg7XFxyXFxuICAgICAgICBtYXgtaGVpZ2h0OiAzNXB4O1xcclxcbiAgICAgICAgcGFkZGluZzogMTdweDtcXHJcXG4gICAgICAgIGJvcmRlcjogbm9uZTtcXHJcXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDdweDtcXHJcXG4gICAgICAgIGZvbnQtc2l6ZTogMTlweDtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICBpbnB1dC5TYXZlUHJvamVjdE5hbWUge1xcclxcbiAgICAgICAgcGFkZGluZzogOXB4O1xcclxcbiAgICAgICAgYm9yZGVyOiBub25lO1xcclxcbiAgICAgICAgYm9yZGVyLXJhZGl1czogOHB4O1xcclxcbiAgICAgICAgbWF4LXdpZHRoOiAxMDBweDtcXHJcXG4gICAgICAgIGhlaWdodDogNDBweDtcXHJcXG4gICAgICAgIGZvbnQtc2l6ZTogMTlweDtcXHJcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNDAsIDU5LCAxMzQpO1xcclxcbiAgICAgICAgY29sb3I6IHdoaXRlO1xcclxcblxcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5wcm9qZWN0TmFtZVNhdmVyQnRuQ29udGFpbmVyIHtcXHJcXG4gICAgICAgIG1hcmdpbjogMTBweCAwO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5wcm9qZWN0TmFtZVNhdmVyQnRuQ29udGFpbmVyIGJ1dHRvbiB7XFxyXFxuICAgICAgICBwYWRkaW5nOiA5cHg7XFxyXFxuICAgICAgICBib3JkZXI6IG5vbmU7XFxyXFxuICAgICAgICBib3JkZXItcmFkaXVzOiA4cHg7XFxyXFxuICAgICAgICB3aWR0aDogMTAwcHg7XFxyXFxuICAgICAgICBoZWlnaHQ6IDQwcHg7XFxyXFxuICAgICAgICBmb250LXNpemU6IDE5cHg7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgI1Byb2plY3RzRm9ybU5hbWVDb250YWluZXJFbCAuQ2FuY2VsIHtcXHJcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IGdyZXk7XFxyXFxuICAgICAgICBjb2xvcjogd2hpdGU7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgI25ld1Byb2plY3RUYXNrc0NvbnRhaW5lciB7XFxyXFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcblxcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgICNuZXdQcm9qZWN0VGFza3NJbm5lckNvbnRhaW5lciB7XFxyXFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICAgICAgZ2FwOiA1cHg7XFxyXFxuICAgICAgICBtYXJnaW46IDEwcHg7XFxyXFxuICAgICAgICBib3gtc2hhZG93OiAjNWM1NTU1IDFweCAzcHggM3B4IDFweDtcXHJcXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxyXFxuICAgICAgICBwYWRkaW5nOiAxMHB4O1xcclxcbiAgICAgICAgd2lkdGg6IDk1cHg7XFxyXFxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICAgICAgICBsZWZ0OiAyNTBweDtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICBzdmcuYWRkVGFzayB7XFxyXFxuICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxyXFxuICAgICAgICBmaWxsOiB3aGVhdDtcXHJcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAubmV3UHJvamVjdEFkZEJ0biB7XFxyXFxuICAgICAgICBib3JkZXI6IDA7XFxyXFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmhlcml0O1xcclxcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcXHJcXG5cXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAjUHJvamVjdGRhdGVQaWNrZXIge1xcclxcbiAgICAgICAgcGFkZGluZzogMnB4O1xcclxcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcbiAgICAgICAgYm9yZGVyOiBub25lO1xcclxcbiAgICAgICAgaGVpZ2h0OiAzMnB4O1xcclxcblxcclxcbiAgICB9XFxyXFxuXFxyXFxuXFxyXFxuICAgICNzdWJtaXRCdG5Gb3JQcm9qZWN0IHtcXHJcXG4gICAgICAgIHBhZGRpbmc6IDdweDtcXHJcXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDlweDtcXHJcXG5cXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAjc3VibWl0QnRuRm9yUHJvamVjdDphY3RpdmUge1xcclxcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpXFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLmNhbmNlbEZvclByb2plY3RCdG4ge1xcclxcbiAgICAgICAgcGFkZGluZzogN3B4O1xcclxcbiAgICAgICAgYm9yZGVyLXJhZGl1czogOXB4O1xcclxcbiAgICB9XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTtcblxuICAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfVxuXG4gIC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcbm9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCIvLyBpbXBvcnQgeyBteVByb2plY3RzIH0gZnJvbSAnLi9kb20tRWwnXHJcbmltcG9ydCB7IGRpc3BsYXlGb3JtIH0gZnJvbSBcIi4vZG9tLUVsXCI7XHJcbi8vIGltcG9ydCB7IGVkaXRUYXNrIH0gZnJvbSBcIi4vbG9naWNzXCI7XHJcblxyXG5jb25zdCBteVByb2plY3RzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwcm9qZWN0cyBoM1wiKTtcclxuY29uc3Qgc2NyZWVuQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNDb250YWluZXJcIik7XHJcbmNvbnN0IHVzZXJMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN1c2VybGlzdFwiKTtcclxuY29uc3QgYWRkUHJvamVjdHNDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFkZFByb2plY3RzQ29udGFpbmVyXCIpO1xyXG5jb25zdCBuZXdQcm9qZWN0c0Zvcm1Db250YWluZXJFbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXHJcbiAgXCIjbmV3UHJvamVjdHNGb3JtQ29udGFpbmVyRWxcIlxyXG4pO1xyXG5leHBvcnQgY29uc3QgaW5wdXROZXdwcm9qZWN0Rm9ybU5hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxyXG4gIFwiLmlucHV0TmV3cHJvamVjdEZvcm1OYW1lXCJcclxuKTtcclxuY29uc3QgbmV3UHJvamVjdE5hbWVSZXF1ZXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5uZXdQcm9qZWN0TmFtZVJlcXVlc3RcIik7XHJcbmNvbnN0IG5ld1Byb2plY3ROYW1lVGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmhlYWRlclRleHRDb250ZW50XCIpO1xyXG5jb25zdCBTYXZlUHJvamVjdE5hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLlNhdmVQcm9qZWN0TmFtZVwiKTtcclxuY29uc3QgbmV3UHJvamVjdFRhc2sgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm5ld1Byb2plY3RUYXNrXCIpO1xyXG5jb25zdCBuZXdQcm9qZWN0VGFza3NDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG5jb25zdCBuZXdQcm9qZWN0VGFza3NJbm5lckNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcblxyXG5jb25zdCBuZXdQcm9qZWN0QWRkQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcclxuY29uc3Qgc3VibWl0VGFza0J0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjc3VibWl0QnRuRm9yUHJvamVjdFwiKTtcclxuY29uc3QgY2FuY2VsVGFza0J0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY2FuY2VsRm9yUHJvamVjdEJ0blwiKTtcclxuY29uc3QgZGlzcGxheVByb2plY3RUb2RvcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZGlzcGxheVByb2plY3RUb2Rvc1wiKTtcclxuXHJcbmxldCBwcm9qZWN0Rm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjUHJvamVjdEZvcm1cIik7XHJcbmxldCBmb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNmb3JtXCIpO1xyXG5sZXQgaW5wdXRGaWVsZEVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wVGl0bGVcIik7XHJcbmxldCBkZXNjcmlwdGlvbkZpZWxkRWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnBEZXNjcmlwdGlvblwiKTtcclxubGV0IHNlbGVjdFByaW9yaXR5RWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Byb2plY3RQcmlvcml0eVwiKTtcclxubGV0IGR1ZURhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI1Byb2plY3RkYXRlUGlja2VyXCIpO1xyXG5jb25zdCBwcm9qZWN0RHJvcERvd24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Byb2plY3QtZHJvcGRvd25cIik7XHJcbmxldCBzZWxlY3RlZFByb2plY3QgPSBwcm9qZWN0RHJvcERvd24udmFsdWU7XHJcblxyXG5jb25zdCBuZXdQcm9qZWN0Rm9ybU5hbWVCdG5FbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXHJcbiAgXCIubmV3UHJvamVjdEZvcm1OYW1lQnRuRWxcIlxyXG4pO1xyXG5cclxuY2xhc3MgZ2V0TGlzdCB7XHJcbiAgY29uc3RydWN0b3IodGl0bGUsIGRlc2NyaXB0aW9uLCBwcmlvcml0eSwgZGF0ZSkge1xyXG4gICAgdGhpcy50aXRsZSA9IHRpdGxlO1xyXG4gICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xyXG4gICAgdGhpcy5wcmlvcml0eSA9IHByaW9yaXR5O1xyXG4gICAgdGhpcy5kYXRlID0gZGF0ZTtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGRpc3BsYXlSZXF1ZXN0TmV3UHJvamVjdEZvcm1OYW1lKCkge1xyXG4gIGlmICh1c2VyTGlzdC50ZXh0Q29udGVudCkge1xyXG4gICAgdXNlckxpc3QudGV4dENvbnRlbnQgPSBcIlwiO1xyXG4gIH1cclxuXHJcbiAgaWYgKGZvcm0uc3R5bGUuZGlzcGxheSA9PT0gXCJibG9ja1wiKSB7XHJcbiAgICBmb3JtLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuICB9XHJcbiAgaWYgKHByb2plY3RGb3JtLnN0eWxlLmRpc3BsYXkgPT09IFwiYmxvY2tcIikge1xyXG4gICAgcHJvamVjdEZvcm0uc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG4gIH1cclxuXHJcbiAgaW5wdXROZXdwcm9qZWN0Rm9ybU5hbWUuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcclxuICByZXR1cm4geyBpbnB1dE5ld3Byb2plY3RGb3JtTmFtZSB9O1xyXG59XHJcbmFkZFByb2plY3RzQ29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoXHJcbiAgXCJjbGlja1wiLFxyXG4gIGRpc3BsYXlSZXF1ZXN0TmV3UHJvamVjdEZvcm1OYW1lXHJcbik7XHJcblxyXG4vL0dldCBOZXcgUHJvamVjdCBOYW1lIEZ1bmN0aW9uLlxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0bmV3UHJvamVjdElucHV0TmFtZSgpIHtcclxuICBjb25zdCBpbnB1dE5ld1Byb2plY3ROYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5pbnB1dE5ld1Byb2plY3ROYW1lXCIpO1xyXG4gIGNvbnN0IGlucHV0TmV3UHJvamVjdE5hbWVWYWx1ZSA9IGlucHV0TmV3UHJvamVjdE5hbWUudmFsdWU7XHJcbiAgbmV3UHJvamVjdE5hbWVUaXRsZS50ZXh0Q29udGVudCA9IGlucHV0TmV3UHJvamVjdE5hbWVWYWx1ZTtcclxuXHJcbiAgLy8gcHJvamVjdHMucHVzaChpbnB1dE5ld1Byb2plY3ROYW1lVmFsdWUpXHJcblxyXG4gIGlucHV0TmV3UHJvamVjdE5hbWUudmFsdWUgPSBcIlwiO1xyXG5cclxuICBhZGRQcm9qZWN0TmFtZShpbnB1dE5ld1Byb2plY3ROYW1lVmFsdWUpO1xyXG5cclxuICBpZiAoaW5wdXROZXdwcm9qZWN0Rm9ybU5hbWUpIHtcclxuICAgIGlucHV0TmV3cHJvamVjdEZvcm1OYW1lLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuICB9IGVsc2Uge1xyXG4gICAgaW5wdXROZXdwcm9qZWN0Rm9ybU5hbWUuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcclxuICB9XHJcblxyXG4gIHJldHVybiB7IGlucHV0TmV3UHJvamVjdE5hbWVWYWx1ZSB9O1xyXG59XHJcblxyXG4vL0NhbmNlbCBwcm9qZWN0IGZvcm0gbmFtZSByZXF1ZXN0XHJcbm5ld1Byb2plY3RGb3JtTmFtZUJ0bkVsLmFkZEV2ZW50TGlzdGVuZXIoXHJcbiAgXCJjbGlja1wiLFxyXG4gICgpID0+IChpbnB1dE5ld3Byb2plY3RGb3JtTmFtZS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCIpXHJcbik7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlTmV3UHJvamVjdFRhc2tCdG4oKSB7XHJcbiAgbmV3UHJvamVjdFRhc2tzQ29udGFpbmVyLnNldEF0dHJpYnV0ZShcImlkXCIsIFwibmV3UHJvamVjdFRhc2tzQ29udGFpbmVyXCIpO1xyXG4gIG5ld1Byb2plY3RUYXNrc0lubmVyQ29udGFpbmVyLnNldEF0dHJpYnV0ZShcImlkXCIsIFwibmV3UHJvamVjdFRhc2tzSW5uZXJDb250YWluZXJcIik7XHJcblxyXG4gIG5ld1Byb2plY3RBZGRCdG4udGV4dENvbnRlbnQgPSBcIkFkZCB0YXNrXCI7XHJcblxyXG4gIC8vIENyZWF0ZSB0aGUgU1ZHIGVsZW1lbnRcclxuICBjb25zdCBzdmdOYW1lc3BhY2UgPSBcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI7XHJcbiAgY29uc3Qgc3ZnRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyhzdmdOYW1lc3BhY2UsIFwic3ZnXCIpO1xyXG5cclxuICAvLyBTZXQgdGhlIGNsYXNzIGFuZCB2aWV3Qm94IGF0dHJpYnV0ZXNcclxuICBzdmdFbGVtZW50LnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiYWRkVGFza1wiKTtcclxuICBzdmdFbGVtZW50LnNldEF0dHJpYnV0ZShcInZpZXdCb3hcIiwgXCIwIDAgMjQgMjRcIik7XHJcblxyXG4gIC8vIENyZWF0ZSB0aGUgdGl0bGUgZWxlbWVudFxyXG4gIGNvbnN0IHRpdGxlRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyhzdmdOYW1lc3BhY2UsIFwidGl0bGVcIik7XHJcbiAgdGl0bGVFbGVtZW50LnRleHRDb250ZW50ID0gXCJwbHVzXCI7XHJcbiAgc3ZnRWxlbWVudC5hcHBlbmRDaGlsZCh0aXRsZUVsZW1lbnQpO1xyXG5cclxuICAvLyBDcmVhdGUgdGhlIHBhdGggZWxlbWVudFxyXG4gIGNvbnN0IHBhdGhFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKHN2Z05hbWVzcGFjZSwgXCJwYXRoXCIpO1xyXG4gIHBhdGhFbGVtZW50LnNldEF0dHJpYnV0ZShcImRcIiwgXCJNMTksMTNIMTNWMTlIMTFWMTNINVYxMUgxMVY1SDEzVjExSDE5VjEzWlwiKTtcclxuICBzdmdFbGVtZW50LmFwcGVuZENoaWxkKHBhdGhFbGVtZW50KTtcclxuXHJcbiAgbmV3UHJvamVjdEFkZEJ0bi5jbGFzc0xpc3QuYWRkKFwibmV3UHJvamVjdEFkZEJ0blwiKTtcclxuXHJcbiAgaWYgKG5ld1Byb2plY3RUYXNrc0lubmVyQ29udGFpbmVyLmNvbnRhaW5zKHN2Z0VsZW1lbnQpKSB7XHJcbiAgbmV3UHJvamVjdFRhc2tzSW5uZXJDb250YWluZXIucmVtb3ZlQ2hpbGQoc3ZnRWxlbWVudCk7XHJcbiAgXHJcbiAgfVxyXG4gXHJcbiAgbmV3UHJvamVjdFRhc2tzSW5uZXJDb250YWluZXIuYXBwZW5kQ2hpbGQoc3ZnRWxlbWVudCk7XHJcbiAgbmV3UHJvamVjdFRhc2tzSW5uZXJDb250YWluZXIuYXBwZW5kQ2hpbGQobmV3UHJvamVjdEFkZEJ0bik7XHJcbiAgbmV3UHJvamVjdFRhc2tzQ29udGFpbmVyLmFwcGVuZENoaWxkKG5ld1Byb2plY3RUYXNrc0lubmVyQ29udGFpbmVyKTtcclxuXHJcbiAgbmV3UHJvamVjdHNGb3JtQ29udGFpbmVyRWwuYXBwZW5kQ2hpbGQobmV3UHJvamVjdFRhc2tzQ29udGFpbmVyKTtcclxuXHJcbiAgcmV0dXJuIG5ld1Byb2plY3RzRm9ybUNvbnRhaW5lckVsO1xyXG59XHJcblxyXG5mdW5jdGlvbiBkaXNwbGF5TmV3UHJvamVjdEZvcm0oKSB7XHJcbiAgcHJvamVjdEZvcm0uc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcclxufVxyXG5cclxuLy8gQWRkIHByb2plY3QgbmFtZSB0byBsb2NhbCBzdG9yYWdlIGFuZCAgcG9wdWxhdGUgcHJvamVjdCBkcm9wIGRvd25cclxuZnVuY3Rpb24gYWRkUHJvamVjdE5hbWUocHJvamVjdE5hbWUpIHtcclxuICBsZXQgcHJvamVjdHMgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwicHJvamVjdHNcIikpIHx8IFtdO1xyXG4gIHByb2plY3RzLnB1c2gocHJvamVjdE5hbWUpO1xyXG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwicHJvamVjdHNcIiwgSlNPTi5zdHJpbmdpZnkocHJvamVjdHMpKTtcclxuICBmaWxsUHJvamVjdERyb3BEb3duKCk7XHJcbiAgcmV0dXJuIHsgcHJvamVjdE5hbWUgfTtcclxufVxyXG5cclxuLy8gUG9wdWxhdGUgcHJvamVjdCBkcm9wLWRvd25cclxuZnVuY3Rpb24gZmlsbFByb2plY3REcm9wRG93bigpIHtcclxuICBwcm9qZWN0RHJvcERvd24udGV4dENvbnRlbnQgPSBcIlwiO1xyXG4gIGxldCBwcm9qZWN0cyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJwcm9qZWN0c1wiKSkgfHwgW107XHJcblxyXG4gIGlmIChwcm9qZWN0cykge1xyXG4gICAgY29uc3Qgb3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTtcclxuICAgIG9wdGlvbi52YWx1ZSA9IFwiXCI7XHJcbiAgICBvcHRpb24udGV4dENvbnRlbnQgPSBcIlNlbGVjdCBwcm9qZWN0XCI7XHJcbiAgICBwcm9qZWN0RHJvcERvd24uYXBwZW5kQ2hpbGQob3B0aW9uKTtcclxuXHJcbiAgICBwcm9qZWN0cz8uZm9yRWFjaCgocHJvamVjdCkgPT4ge1xyXG4gICAgICBjb25zdCBvcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xyXG4gICAgICBvcHRpb24udmFsdWUgPSBwcm9qZWN0O1xyXG4gICAgICBvcHRpb24udGV4dENvbnRlbnQgPSBwcm9qZWN0O1xyXG4gICAgICBwcm9qZWN0RHJvcERvd24uYXBwZW5kQ2hpbGQob3B0aW9uKTtcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG5maWxsUHJvamVjdERyb3BEb3duKCk7XHJcblxyXG4vLyBEaXNwbGF5IGVhY2ggcHJvamVjdCdzIHRvLWRvcyB3aGVuIHNlbGVjdGVkXHJcbnByb2plY3REcm9wRG93bi5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsICgpID0+IHtcclxuICB1c2VyTGlzdC50ZXh0Q29udGVudCA9IFwiXCI7XHJcbiAgZGlzcGxheVByb2plY3RUb2Rvcy50ZXh0Q29udGVudCA9IFwiXCI7XHJcbiAgbmV3UHJvamVjdFRhc2tzQ29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuXHJcbiAgLy9DbGVhciB0aGUgYWRkIHRhc2sgYnV0dG9uIGNvbnRhaW5lciBlYWNoIHRpbWUgdXNlciBzZWxlY3QgYSBwcm9qZWN0XHJcbiAgbmV3UHJvamVjdFRhc2tzQ29udGFpbmVyLnRleHRDb250ZW50ID0gXCJcIjtcclxuXHJcbiAgLy9EaXNwbGF5IG5vIGZvcm0gaWYgYW55IGZvcm0gaXMgaW4gYmxvY2tcclxuICBpZiAoZm9ybS5zdHlsZS5kaXNwbGF5ID09PSBcImJsb2NrXCIpIHtcclxuICAgIGZvcm0uc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG4gIH1cclxuXHJcbiAgc2VsZWN0ZWRQcm9qZWN0ID0gcHJvamVjdERyb3BEb3duLnZhbHVlO1xyXG4gIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJoZWFkZXIgaDFcIik7XHJcbiAgaGVhZGVyLnRleHRDb250ZW50ID0gc2VsZWN0ZWRQcm9qZWN0O1xyXG4gIC8vIGdldFNlbGVjdGVkVG9kb3Moc2VsZWN0ZWRQcm9qZWN0KTtcclxuICBkaXNwbGF5VG9Eb3NGb3JDdXJyZW50UHJvamVjdChzZWxlY3RlZFByb2plY3QpO1xyXG4gIC8vIGRpc3BsYXlTZWxlY3RlZFRvRG9zKHNlbGVjdGVkUHJvamVjdCk7XHJcbiAgZGlzcGxheU5ld1Byb2plY3RGb3JtKCk7XHJcbn0pO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldFVzZXJUb2RvKCkge1xyXG4gIGxldCB0YXNrSW5wdXRWYWx1ZSA9IGlucHV0RmllbGRFbC52YWx1ZTtcclxuICBsZXQgZGVzY3JpcHRpb25JbnB1dFZhbHVlID0gZGVzY3JpcHRpb25GaWVsZEVsLnZhbHVlO1xyXG4gIGxldCBwcmlvcml0eVZhbHVlRWwgPSBzZWxlY3RQcmlvcml0eUVsLnZhbHVlO1xyXG4gIGxldCBkdWVEYXRlVmFsdWVFbCA9IGR1ZURhdGUudmFsdWU7XHJcblxyXG4gIGlmICh0YXNrSW5wdXRWYWx1ZS5sZW5ndGggPiAzNSkge1xyXG4gICAgcmV0dXJuIGFsZXJ0KFxyXG4gICAgICBgSW5wdXQgc2hvdWxkIGJlIGxlc3Mgb3IgZXF1YWwgdG8gdGhlIDM1IGNoYXJhY3RlcnMsIHlvdSBoYXZlIGVudGVyZWQgJHt0YXNrSW5wdXRWYWx1ZS5sZW5ndGh9IGNoYXJhY3RlcnNgXHJcbiAgICApO1xyXG4gIH0gZWxzZSBpZiAoZGVzY3JpcHRpb25JbnB1dFZhbHVlLmxlbmd0aCA+IDQwKSB7XHJcbiAgICByZXR1cm4gYWxlcnQoXHJcbiAgICAgIGBEZXNjcmlwdGlvbiBzaG91bGQgYmUgbGVzcyBvciBlcXVhbCB0byB0aGUgNDAgY2hhcmFjdGVycywgeW91IGhhdmUgZW50ZXJlZCAke2Rlc2NyaXB0aW9uSW5wdXRWYWx1ZS5sZW5ndGh9IGNoYXJhY3RlcnNgXHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgZGF0ZSA9IG5ldyBEYXRlKGR1ZURhdGVWYWx1ZUVsKTtcclxuXHJcbiAgY29uc3Qgb3B0aW9ucyA9IHtcclxuICAgIHdlZWtkYXk6IFwibG9uZ1wiLFxyXG4gICAgeWVhcjogXCJudW1lcmljXCIsXHJcbiAgICBtb250aDogXCJzaG9ydFwiLFxyXG4gICAgZGF5OiBcIm51bWVyaWNcIixcclxuICB9O1xyXG5cclxuICBjb25zdCBkYXlPZldlZWsgPSBkYXRlLnRvTG9jYWxlRGF0ZVN0cmluZyhcImVuLVVzXCIsIG9wdGlvbnMpO1xyXG5cclxuICBsZXQgdXNlclRvZG8gPSBuZXcgZ2V0TGlzdChcclxuICAgIHRhc2tJbnB1dFZhbHVlLFxyXG4gICAgZGVzY3JpcHRpb25JbnB1dFZhbHVlLFxyXG4gICAgcHJpb3JpdHlWYWx1ZUVsLFxyXG4gICAgZGF5T2ZXZWVrXHJcbiAgKTtcclxuXHJcbiAgcmV0dXJuIHVzZXJUb2RvO1xyXG59XHJcblxyXG4vLyBDbGVhciBmb3JtIGlucHV0XHJcbmZ1bmN0aW9uIGNsZWFySW5wdXRGb3JtKCkge1xyXG4gIGlucHV0RmllbGRFbC52YWx1ZSA9IFwiXCI7XHJcbiAgZGVzY3JpcHRpb25GaWVsZEVsLnZhbHVlID0gXCJcIjtcclxuICBzZWxlY3RQcmlvcml0eUVsLnZhbHVlID0gXCJTZWxlY3QgUHJpb3JpdHlcIjtcclxuICBkdWVEYXRlLnZhbHVlID0gXCJcIjtcclxufVxyXG5cclxubGV0IGN1cnJlbnRQcm9qZWN0TmFtZSA9IFtdO1xyXG5sZXQgdG9EbyA9IFtdO1xyXG5mdW5jdGlvbiBhZGROZXdQcm9qZWN0VG9kb3MoKSB7XHJcbiAgY3VycmVudFByb2plY3ROYW1lID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInByb2plY3RzXCIpKSB8fCBbXTtcclxuICBjb25zdCBjdXJyZW50UHJvamVjdCA9IGN1cnJlbnRQcm9qZWN0TmFtZVtjdXJyZW50UHJvamVjdE5hbWUubGVuZ3RoIC0gMV07XHJcbiAgY29uc29sZS5sb2coY3VycmVudFByb2plY3ROYW1lKTtcclxuXHJcbiAgLy8gaWYgKHByb2plY3RGb3JtLnN0eWxlLmRpc3BsYXkgPT09IFwiYmxvY2tcIikge1xyXG4gIC8vIHNlbGVjdGVkUHJvamVjdCA9IGN1cnJlbnRQcm9qZWN0O1xyXG5cclxuICBjb25zdCBzZWxlY3RlZFByb2plY3QgPSBwcm9qZWN0RHJvcERvd24udmFsdWU7XHJcblxyXG4gIGlmIChzZWxlY3RlZFByb2plY3QpIHtcclxuICAgIHRvRG8gPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKHNlbGVjdGVkUHJvamVjdCkpIHx8IFtdO1xyXG5cclxuICAgIGNvbnN0IG5ld1RvRG8gPSBnZXRVc2VyVG9kbygpO1xyXG4gICAgdG9Eby5wdXNoKG5ld1RvRG8pO1xyXG5cclxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKHNlbGVjdGVkUHJvamVjdCwgSlNPTi5zdHJpbmdpZnkodG9EbykpO1xyXG4gICAgY29uc29sZS5sb2codG9Ebyk7XHJcblxyXG4gICAgY29uc29sZS5sb2codG9Ebyk7XHJcbiAgICBjbGVhcklucHV0Rm9ybSgpO1xyXG4gICAgZGlzcGxheVRvRG9zRm9yQ3VycmVudFByb2plY3Qoc2VsZWN0ZWRQcm9qZWN0KTtcclxuICB9IGVsc2Uge1xyXG4gICAgY29uc29sZS5sb2coY3VycmVudFByb2plY3QpO1xyXG4gICAgLy9JZiB0aGVyZSBpcyBhbiBleGlzdGluZyBwcm9qZWN0IGdldCBpdCBmcm9tIHRoZSBsb2NhbCBzdG9yYWdlXHJcbiAgICBjb25zdCB0b0RvID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShjdXJyZW50UHJvamVjdCkpIHx8IFtdO1xyXG5cclxuICAgIGNvbnN0IG5ld1RvRG8gPSBnZXRVc2VyVG9kbygpO1xyXG5cclxuICAgIHRvRG8ucHVzaChuZXdUb0RvKTtcclxuXHJcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShjdXJyZW50UHJvamVjdCwgSlNPTi5zdHJpbmdpZnkodG9EbykpO1xyXG5cclxuICAgIGNvbnNvbGUubG9nKHRvRG8pO1xyXG4gICAgY2xlYXJJbnB1dEZvcm0oKTtcclxuICAgIGRpc3BsYXlUb0Rvc0ZvckN1cnJlbnRQcm9qZWN0KGN1cnJlbnRQcm9qZWN0KTtcclxuICB9XHJcbiAgLy8gfVxyXG59XHJcblxyXG5mdW5jdGlvbiBkaXNwbGF5VG9Eb3NGb3JDdXJyZW50UHJvamVjdChwcm9qZWN0TmFtZSkge1xyXG4gIGN1cnJlbnRQcm9qZWN0TmFtZSA9IHByb2plY3ROYW1lO1xyXG4gIC8vIGNvbnNvbGUubG9nKGN1cnJlbnRQcm9qZWN0TmFtZSk7XHJcblxyXG4gIC8vIHNhdmVUYXNrKHByb2plY3ROYW1lKTtcclxuICBsZXQgcHJvamVjdFRvZG9zID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShwcm9qZWN0TmFtZSkpIHx8IFtdO1xyXG5cclxuICB0b0RvID0gcHJvamVjdFRvZG9zO1xyXG4gIGNvbnNvbGUubG9nKHRvRG8pO1xyXG4gIC8vIGNvbnNvbGUubG9nKGN1cnJlbnRUb2Rvcyk7XHJcblxyXG4gIHByb2plY3RUb2Rvcy5mb3JFYWNoKCh0b2RvLCBpbmRleCkgPT4ge1xyXG4gICAgZGlzcGxheVRhc2soXHJcbiAgICAgIHRvZG8udGl0bGUsXHJcbiAgICAgIHRvZG8uZGVzY3JpcHRpb24sXHJcbiAgICAgIHRvZG8ucHJpb3JpdHksXHJcbiAgICAgIHRvZG8uZGF0ZSxcclxuICAgICAgaW5kZXgsXHJcbiAgICAgIHByb2plY3ROYW1lXHJcbiAgICApO1xyXG4gIH0pO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZGlzcGxheVRhc2soXHJcbiAgc2F2ZVRpdGxlRGF0YSxcclxuICBzYXZlRGVzY3JpcHRpb25EYXRhLFxyXG4gIHNhdmVQcmlvcml0eURhdGEsXHJcbiAgc2F2ZUR1ZURhdGVEYXRhLFxyXG4gIGluZGV4LFxyXG4gIHByb2plY3ROYW1lXHJcbikge1xyXG4gIGNvbnN0IGxpc3RDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIGNvbnN0IHRhc2tDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcclxuICBjb25zdCBpbm5lclRhc2tDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIGNvbnN0IGlubmVyVGFza0hhbmRsZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG5cclxuICBpbm5lclRhc2tIYW5kbGVyLmNsYXNzTGlzdC5hZGQoXCJpbm5lclRhc2tIYW5kbGVyXCIpO1xyXG4gIGlubmVyVGFza0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiaW5uZXJUYXNrQ29udGFpbmVyXCIpO1xyXG4gIHRhc2tDb250YWluZXIuY2xhc3NMaXN0LmFkZChcInRhc2tDb250YWluZXJcIik7XHJcbiAgbGlzdENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwibGlzdENvbnRhaW5lclwiKTtcclxuXHJcbiAgY29uc3QgY2hlY2tCb3hDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcclxuICBjaGVja0JveENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiY2hlY2tCb3hDb250YWluZXJcIik7XHJcbiAgY29uc3QgY2hlY2tCb3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XHJcbiAgY2hlY2tCb3guY2xhc3NMaXN0LmFkZChcImNoZWNrQm94XCIpO1xyXG4gIGNoZWNrQm94LnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJjaGVja2JveFwiKTtcclxuXHJcbiAgY29uc3QgdGFza1RpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImg0XCIpO1xyXG4gIGNvbnN0IHRhc2tEZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xyXG4gIGNvbnN0IGR1ZURhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcclxuICBjb25zdCB0YXNrUHJpb3JpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcclxuICBjb25zdCBkZWxldGVUYXNrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcclxuXHJcbiAgdGFza1RpdGxlLmNsYXNzTGlzdC5hZGQoXCJ0YXNrVGl0bGVcIik7XHJcbiAgdGFza0Rlc2NyaXB0aW9uLmNsYXNzTGlzdC5hZGQoXCJ0YXNrRGVzY3JpcHRpb25cIik7XHJcbiAgZHVlRGF0ZS5jbGFzc0xpc3QuYWRkKFwiZHVlRGF0ZVwiKTtcclxuICBkZWxldGVUYXNrLmNsYXNzTGlzdC5hZGQoXCJkZWxldGVUYXNrXCIpO1xyXG4gIHRhc2tQcmlvcml0eS5jbGFzc0xpc3QuYWRkKFwidGFza1ByaW9yaXR5XCIpO1xyXG5cclxuICB0YXNrVGl0bGUudGV4dENvbnRlbnQgPSBgICR7c2F2ZVRpdGxlRGF0YX1gO1xyXG4gIHRhc2tEZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9IGAke3NhdmVEZXNjcmlwdGlvbkRhdGF9YDtcclxuICB0YXNrUHJpb3JpdHkudGV4dENvbnRlbnQgPSBgJHtzYXZlUHJpb3JpdHlEYXRhfWA7XHJcbiAgZHVlRGF0ZS50ZXh0Q29udGVudCA9IGAke3NhdmVEdWVEYXRlRGF0YX1gO1xyXG4gIGRlbGV0ZVRhc2sudGV4dENvbnRlbnQgPSBcIkRlbGV0ZSB0YXNrXCI7XHJcblxyXG4gIGRlbGV0ZVRhc2suZGF0YXNldC5pbmRleCA9IGluZGV4O1xyXG4gIGRlbGV0ZVRhc2suZGF0YXNldC5wcm9qZWN0ID0gcHJvamVjdE5hbWU7XHJcbiAgY2hlY2tCb3guZGF0YXNldC5pbmRleCA9IGluZGV4O1xyXG4gIGNoZWNrQm94LmRhdGFzZXQucHJvamVjdCA9IHByb2plY3ROYW1lO1xyXG5cclxuICB0YXNrVGl0bGUuZGF0YXNldC5maWVsZFR5cGUgPSBcInRpdGxlXCI7XHJcbiAgdGFza0Rlc2NyaXB0aW9uLmRhdGFzZXQuZmllbGRUeXBlID0gXCJkZXNjcmlwdGlvblwiO1xyXG4gIHRhc2tQcmlvcml0eS5kYXRhc2V0LmZpZWxkVHlwZSA9IFwidGFza1ByaW9yaXR5XCI7XHJcbiAgZHVlRGF0ZS5kYXRhc2V0LmZpZWxkVHlwZSA9IFwiZHVlRGF0ZVwiO1xyXG5cclxuICB0YXNrVGl0bGUuZGF0YXNldC5pbmRleCA9IGluZGV4O1xyXG4gIHRhc2tEZXNjcmlwdGlvbi5kYXRhc2V0LmluZGV4ID0gaW5kZXg7XHJcbiAgdGFza1ByaW9yaXR5LmRhdGFzZXQuaW5kZXggPSBpbmRleDtcclxuICBkdWVEYXRlLmRhdGFzZXQuaW5kZXggPSBpbmRleDtcclxuXHJcbiAgaW5uZXJUYXNrQ29udGFpbmVyLmFwcGVuZENoaWxkKHRhc2tUaXRsZSk7XHJcbiAgaW5uZXJUYXNrQ29udGFpbmVyLmFwcGVuZENoaWxkKHRhc2tEZXNjcmlwdGlvbik7XHJcbiAgaW5uZXJUYXNrQ29udGFpbmVyLmFwcGVuZENoaWxkKGR1ZURhdGUpO1xyXG5cclxuICBpbm5lclRhc2tIYW5kbGVyLmFwcGVuZENoaWxkKHRhc2tQcmlvcml0eSk7XHJcbiAgaW5uZXJUYXNrSGFuZGxlci5hcHBlbmRDaGlsZChkZWxldGVUYXNrKTtcclxuXHJcbiAgdGFza0NvbnRhaW5lci5hcHBlbmRDaGlsZChpbm5lclRhc2tDb250YWluZXIpO1xyXG4gIHRhc2tDb250YWluZXIuYXBwZW5kQ2hpbGQoaW5uZXJUYXNrSGFuZGxlcik7XHJcblxyXG4gIGNoZWNrQm94Q29udGFpbmVyLmFwcGVuZENoaWxkKGNoZWNrQm94KTtcclxuICBsaXN0Q29udGFpbmVyLmFwcGVuZENoaWxkKGNoZWNrQm94Q29udGFpbmVyKTtcclxuXHJcbiAgbGlzdENvbnRhaW5lci5hcHBlbmRDaGlsZCh0YXNrQ29udGFpbmVyKTtcclxuICB1c2VyTGlzdC5hcHBlbmRDaGlsZChsaXN0Q29udGFpbmVyKTtcclxuXHJcbiAgdGFza1RpdGxlLmFkZEV2ZW50TGlzdGVuZXIoXCJkYmxjbGlja1wiLCBlZGl0VGFzayk7XHJcbiAgdGFza0Rlc2NyaXB0aW9uLmFkZEV2ZW50TGlzdGVuZXIoXCJkYmxjbGlja1wiLCBlZGl0VGFzayk7XHJcbiAgdGFza1ByaW9yaXR5LmFkZEV2ZW50TGlzdGVuZXIoXCJkYmxjbGlja1wiLCBlZGl0VGFzayk7XHJcbiAgZHVlRGF0ZS5hZGRFdmVudExpc3RlbmVyKFwiZGJsY2xpY2tcIiwgZWRpdFRhc2spO1xyXG5cclxuICBkZWxldGVUYXNrLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBkZWxldGVUb0RvKTtcclxuICBkZWxldGVUYXNrLmFkZEV2ZW50TGlzdGVuZXIoXCJ0b3VjaHN0YXJ0XCIsIGRlbGV0ZVRvRG8pO1xyXG5cclxuICBoYW5kbGVDaGVja0JveChjaGVja0JveCwgdGFza1RpdGxlLCB0YXNrRGVzY3JpcHRpb24pO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZWRpdFRhc2soZXZlbnQpIHtcclxuICBjb25zdCB0YXJnZXQgPSBldmVudC50YXJnZXQ7XHJcblxyXG4gIGNvbnN0IGZpZWxkVHlwZSA9IHRhcmdldC5kYXRhc2V0LmZpZWxkVHlwZTsgLy8gSWRlbnRpZnkgdGhlIGZpZWxkIHR5cGUodGl0bGUsZGVzY3JpcHRpb24scHJpb3JpdHksZGF0ZSlcclxuICBjb25zdCBpbmRleCA9IHRhcmdldC5kYXRhc2V0LmluZGV4O1xyXG4gIGNvbnN0IHRhc2tQcmlvcml0eSA9IFtcIlVyZ2VudFwiLCBcIkltcG9ydGFudFwiLCBcIkxvdyBwcmlvcml0eVwiXTtcclxuXHJcbiAgbGV0IHRhc2tJbnB1dDtcclxuICBpZiAoZmllbGRUeXBlID09PSBcInRpdGxlXCIgfHwgZmllbGRUeXBlID09PSBcImRlc2NyaXB0aW9uXCIpIHtcclxuICAgIHRhc2tJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcclxuICAgIHRhc2tJbnB1dC50eXBlID0gXCJ0ZXh0XCI7XHJcbiAgICB0YXNrSW5wdXQudmFsdWUgPSB0YXJnZXQudGV4dENvbnRlbnQ7XHJcbiAgfSBlbHNlIGlmIChmaWVsZFR5cGUgPT09IFwiZHVlRGF0ZVwiKSB7XHJcbiAgICB0YXNrSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XHJcbiAgICB0YXNrSW5wdXQudHlwZSA9IFwiZGF0ZVwiO1xyXG4gICAgdGFza0lucHV0LnZhbHVlID0gdGFyZ2V0LnRleHRDb250ZW50O1xyXG4gIH0gZWxzZSBpZiAoZmllbGRUeXBlID09PSBcInRhc2tQcmlvcml0eVwiKSB7XHJcbiAgICB0YXNrSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VsZWN0XCIpO1xyXG5cclxuICAgIHRhc2tQcmlvcml0eS5mb3JFYWNoKChwcmlvcml0eSkgPT4ge1xyXG4gICAgICBjb25zdCBvcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xyXG4gICAgICBvcHRpb24udmFsdWUgPSBwcmlvcml0eTtcclxuICAgICAgb3B0aW9uLnRleHRDb250ZW50ID0gcHJpb3JpdHk7XHJcblxyXG4gICAgICBpZiAocHJpb3JpdHkgPT09IHRhcmdldC50ZXh0Q29udGVudCkge1xyXG4gICAgICAgIG9wdGlvbi5zZWxlY3RlZCA9IHRydWU7XHJcbiAgICAgIH1cclxuICAgICAgdGFza0lucHV0LmFwcGVuZENoaWxkKG9wdGlvbik7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIC8vU3RvcmUgdGhlIGZpZWxkVHlwZSBpbiB0aGUgaW5wdXQgZGF0YXNldFxyXG4gIHRhc2tJbnB1dC5kYXRhc2V0LmZpZWxkVHlwZSA9IGZpZWxkVHlwZTtcclxuICB0YXNrSW5wdXQuZGF0YXNldC5pbmRleCA9IGluZGV4O1xyXG5cclxuICB0YXJnZXQuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG4gIHRhcmdldC5wYXJlbnROb2RlLmluc2VydEJlZm9yZSh0YXNrSW5wdXQsIHRhcmdldC5uZXh0U2libGluZyk7IC8vIEluc2VydCB0aGUgaW5wdXQgZmllbGQgbmV4dCB0byB0YXJnZXQgZWxlbWVudFxyXG5cclxuICB0YXNrSW5wdXQuY2xhc3NMaXN0LmFkZChcImVkaXRcIik7XHJcbiAgLy8gICBjb25zdCBzZWxlY3RlZFZhbHVlID0gdGFza0lucHV0LnZhbHVlO1xyXG4gIC8vIGNvbnNvbGUubG9nKHNlbGVjdGVkVmFsdWUpO1xyXG5cclxuICBpZiAodGFza0lucHV0LnR5cGUgPT09IFwidGV4dFwiKSB7XHJcbiAgICB0YXNrSW5wdXQuc2VsZWN0KCk7IC8vIEF1dG9tYXRpY2FsbHkgc2VsZWN0IHRoZSBjb250ZW50IG9mIHRoZSBpbnB1dCBmaWVsZFxyXG4gIH1cclxuXHJcbiAgdGFza0lucHV0LmFkZEV2ZW50TGlzdGVuZXIoXCJibHVyXCIsIHNhdmVFZGl0ZWRUYXNrKTsgLy8gU2F2ZSB0YXNrIHdoZW4gdGFzayBsb3NlIGZvY3VzIG9uIGlucHV0IGVsZW1lbnQuXHJcbiAgdGFza0lucHV0LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlwcmVzc1wiLCBzYXZlRWRpdGVkVGFzayk7IC8vIFNhdmUgdGFzayBvbiBwcmVzc2luZyBFbnRlclxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gc2F2ZUVkaXRlZFRhc2soZXZlbnQpIHtcclxuICBjb25zb2xlLmxvZyh0b0RvKTtcclxuXHJcbiAgaWYgKGV2ZW50LnR5cGUgPT09IFwiYmx1clwiIHx8IGV2ZW50LmtleSA9PT0gXCJFbnRlclwiKSB7XHJcbiAgICBjb25zdCBpbnB1dCA9IGV2ZW50LnRhcmdldDtcclxuXHJcbiAgICBsZXQgZmllbGRUeXBlID0gaW5wdXQuZGF0YXNldC5maWVsZFR5cGU7XHJcbiAgICBsZXQgaW5kZXggPSBpbnB1dC5kYXRhc2V0LmluZGV4OyAvLyBHZXQgdGhlIGluZGV4IGZyb20gdGhlIGlucHV0IGRhdGFzZXRcclxuXHJcbiAgICBsZXQgbmV3VmFsdWU7XHJcbiAgICAvL0lmIHNlbGVjdCBlbGVtZW50LCBnZXQgaXQgdmFsdWUgZWxzZSBnZXQgaW5wdXQgdmFsdWVcclxuICAgIGlmIChpbnB1dC50YWdOYW1lID09PSBcIlNFTEVDVFwiKSB7XHJcbiAgICAgIG5ld1ZhbHVlID0gaW5wdXQub3B0aW9uc1tpbnB1dC5zZWxlY3RlZEluZGV4XS52YWx1ZTtcclxuICAgICAgdG9Eb1tpbmRleF0ucHJpb3JpdHkgPSBuZXdWYWx1ZTtcclxuICAgICAgY29uc29sZS5sb2codG9Eb1tpbmRleF0ucHJpb3JpdHkpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgbmV3VmFsdWUgPSBpbnB1dC52YWx1ZTtcclxuICAgIH1cclxuICAgIC8vIGNvbnN0IGN1cnJlbnRQcm9qZWN0ID0gY3VycmVudFByb2plY3ROYW1lW2N1cnJlbnRQcm9qZWN0TmFtZS5sZW5ndGggLSAxXTtcclxuXHJcbiAgICAvL0dldCB0aGUgdGFzayBmcm9tIHRoZSBsb2NhbCBzdG9yYWdlXHJcbiAgICAvLyBsZXQgdG9EbyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oY3VycmVudFByb2plY3ROYW1lKSkgfHwgW107XHJcbiAgICBjb25zb2xlLmxvZyh0b0RvKTtcclxuXHJcbiAgICAvL0NoZWNrIGlmIHRoZSBpbmRleCBpcyBub3Qgb3V0IG9mIGJvdW5kcyBpbiB0aGUgYXJyYXlcclxuICAgIGlmIChpbmRleCA8IHRvRG8ubGVuZ3RoKSB7XHJcbiAgICAgIGlmIChmaWVsZFR5cGUgPT09IFwidGl0bGVcIikge1xyXG4gICAgICAgIHRvRG9baW5kZXhdLnRpdGxlID0gbmV3VmFsdWU7XHJcbiAgICAgICAgY29uc29sZS5sb2codG9Eb1tpbmRleF0udGl0bGUpO1xyXG4gICAgICB9IGVsc2UgaWYgKGZpZWxkVHlwZSA9PT0gXCJkZXNjcmlwdGlvblwiKSB7XHJcbiAgICAgICAgdG9Eb1tpbmRleF0uZGVzY3JpcHRpb24gPSBuZXdWYWx1ZTtcclxuICAgICAgfSBlbHNlIGlmIChmaWVsZFR5cGUgPT09IFwiZHVlRGF0ZVwiKSB7XHJcbiAgICAgICAgbGV0IGR1ZURhdGUgPSBuZXdWYWx1ZTtcclxuICAgICAgICBjb25zdCBkYXRlID0gbmV3IERhdGUoZHVlRGF0ZSk7XHJcblxyXG4gICAgICAgIGNvbnN0IG9wdGlvbnMgPSB7XHJcbiAgICAgICAgICB3ZWVrZGF5OiBcImxvbmdcIixcclxuICAgICAgICAgIHllYXI6IFwibnVtZXJpY1wiLFxyXG4gICAgICAgICAgbW9udGg6IFwic2hvcnRcIixcclxuICAgICAgICAgIGRheTogXCJudW1lcmljXCIsXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgdG9Eb1tpbmRleF0uZGF0ZSA9IGRhdGUudG9Mb2NhbGVEYXRlU3RyaW5nKFwiZW4tVXNcIiwgb3B0aW9ucyk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyBTYXZlIHRoZSB1cGRhdGVkIHRhc2tzIHRvIGxvY2FsIHN0b3JhZ2VcclxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKGN1cnJlbnRQcm9qZWN0TmFtZSwgSlNPTi5zdHJpbmdpZnkodG9EbykpO1xyXG5cclxuICAgIC8vIFVwZGF0ZSB0aGUgb3JpZ2luYWwgZWxlbWVudCdzIHRleHQgY29udGVudCBhbmQgc2hvdyBpdCBhZ2FpblxyXG4gICAgbGV0IG9yaWdpbmFsRWxlbWVudCA9IGlucHV0LnByZXZpb3VzU2libGluZztcclxuXHJcbiAgICBvcmlnaW5hbEVsZW1lbnQudGV4dENvbnRlbnQgPSBuZXdWYWx1ZTtcclxuXHJcbiAgICBvcmlnaW5hbEVsZW1lbnQuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcclxuXHJcbiAgICAvLyBSZW1vdmUgdGhlIGlucHV0IGZpZWxkIGlmIGl0IGlzIHN0aWxsIHBhcnQgb2YgdGhlIERPTVxyXG5cclxuICAgIGlucHV0LnJlbW92ZSgpO1xyXG5cclxuICAgIHVzZXJMaXN0LnRleHRDb250ZW50ID0gXCJcIjtcclxuXHJcbiAgICAvLyBSZS1yZW5kZXIgdGhlIHRvZG8gbGlzdCBpZiBuZWNlc3NhcnlcclxuICAgIGRpc3BsYXlUb0Rvc0ZvckN1cnJlbnRQcm9qZWN0KGN1cnJlbnRQcm9qZWN0TmFtZSk7XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBoYW5kbGVDaGVja0JveChjaGVja0JveCwgdGFza1RpdGxlLCB0YXNrRGVzY3JpcHRpb24pIHtcclxuICBjaGVja0JveC5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsIChldmVudCkgPT4ge1xyXG4gICAgaWYgKGNoZWNrQm94LmNoZWNrZWQgPT09IHRydWUpIHtcclxuICAgICAgY29uc3QgY2hlY2tCb3ggPSBldmVudC50YXJnZXQ7XHJcbiAgICAgIGNvbnNvbGUubG9nKGNoZWNrQm94KTtcclxuICAgICAgY29uc3QgaW5kZXggPSBjaGVja0JveC5kYXRhc2V0LmluZGV4O1xyXG4gICAgICBjb25zdCBwcm9qZWN0TmFtZSA9IGNoZWNrQm94LmRhdGFzZXQucHJvamVjdDtcclxuXHJcbiAgICAgIHRvRG8gPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKHByb2plY3ROYW1lKSkgfHwgW107XHJcblxyXG4gICAgICBpZiAoaW5kZXggIT09IC0xKSB7XHJcbiAgICAgICAgY2hlY2tCb3gucmVtb3ZlKGNoZWNrQm94KTtcclxuICAgICAgICB0b0RvLnNwbGljZShpbmRleCwgMSk7XHJcbiAgICAgICAgLy91cGRhdGUgVG8tZG8gaXRlbSBpbiBsb2NhbCBzdG9yYWdlXHJcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0ocHJvamVjdE5hbWUsIEpTT04uc3RyaW5naWZ5KHRvRG8pKTtcclxuICAgICAgICBjb25zb2xlLmxvZyh0b0RvKTtcclxuICAgICAgICB1c2VyTGlzdC50ZXh0Q29udGVudCA9IFwiXCI7XHJcbiAgICAgICAgZGlzcGxheVRvRG9zRm9yQ3VycmVudFByb2plY3QocHJvamVjdE5hbWUpO1xyXG4gICAgICAgIGFsZXJ0KFwiVGFzayBjb21wbGV0ZWQhXCIpO1xyXG4gICAgICB9XHJcbiAgICAgIGNvbnNvbGUubG9nKFwidHJ1ZVwiKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRhc2tUaXRsZS5zdHlsZS50ZXh0RGVjb3JhdGlvbiA9IFwibm9uZVwiO1xyXG4gICAgICB0YXNrRGVzY3JpcHRpb24uc3R5bGUudGV4dERlY29yYXRpb24gPSBcIm5vbmVcIjtcclxuICAgICAgY29uc29sZS5sb2coXCJmYWxzZVwiKTtcclxuICAgIH1cclxuICB9KTtcclxufVxyXG5cclxuLy9EZWxldGUgdGhlIHRvZG8gdGhhdCBnZXQgY2xpY2tlZFxyXG5mdW5jdGlvbiBkZWxldGVUb0RvKGV2ZW50KSB7XHJcbiAgY29uc3QgYnV0dG9uID0gZXZlbnQudGFyZ2V0O1xyXG4gIGNvbnN0IGluZGV4ID0gYnV0dG9uLmRhdGFzZXQuaW5kZXg7XHJcbiAgY29uc3QgY3VycmVudFByb2plY3QgPSBidXR0b24uZGF0YXNldC5wcm9qZWN0O1xyXG4gIGNvbnNvbGUubG9nKGN1cnJlbnRQcm9qZWN0KTtcclxuXHJcbiAgLy8gY29uc3QgY3VycmVudFByb2plY3QgPSBjdXJyZW50UHJvamVjdE5hbWVbY3VycmVudFByb2plY3ROYW1lLmxlbmd0aCAtIDFdO1xyXG4gIHRvRG8gPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKGN1cnJlbnRQcm9qZWN0KSkgfHwgW107XHJcblxyXG4gIGNvbnNvbGUubG9nKHRvRG8pO1xyXG5cclxuICBpZiAoaW5kZXggIT09IC0xKSB7XHJcbiAgICB0b0RvLnNwbGljZShpbmRleCwgMSk7XHJcbiAgICAvL3VwZGF0ZSBUby1kbyBpdGVtIGluIGxvY2FsIHN0b3JhZ2VcclxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKGN1cnJlbnRQcm9qZWN0LCBKU09OLnN0cmluZ2lmeSh0b0RvKSk7XHJcbiAgICBjb25zb2xlLmxvZyh0b0RvKTtcclxuICAgIHVzZXJMaXN0LnRleHRDb250ZW50ID0gXCJcIjtcclxuICAgIGRpc3BsYXlUb0Rvc0ZvckN1cnJlbnRQcm9qZWN0KGN1cnJlbnRQcm9qZWN0KTtcclxuICB9XHJcbn1cclxuXHJcbi8vQ2FuY2VsIHByb2plY3QgZm9ybSBmcm9tIGRpc3BsYXlpbmcuXHJcbmZ1bmN0aW9uIGNhbmNlbEZvcm1EaXNwbGF5KCkge1xyXG4gIGlucHV0RmllbGRFbC52YWx1ZSA9IFwiXCI7XHJcbiAgZGVzY3JpcHRpb25GaWVsZEVsLnZhbHVlID0gXCJcIjtcclxuICBzZWxlY3RQcmlvcml0eUVsLnZhbHVlID0gXCJTZWxlY3QgUHJpb3JpdHlcIjtcclxuICBkdWVEYXRlLnZhbHVlID0gXCJcIjtcclxuICBwcm9qZWN0Rm9ybS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbiAgY29uc29sZS5sb2coXCJjYW5jZWwgZm9ybSFcIik7XHJcbiAgbmV3UHJvamVjdHNGb3JtQ29udGFpbmVyRWwuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcclxuICBpZiAobmV3UHJvamVjdFRhc2tzQ29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPT09IFwibm9uZVwiKSB7XHJcbiAgICBuZXdQcm9qZWN0VGFza3NDb250YWluZXIuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcclxuICB9XHJcbiAgY3JlYXRlTmV3UHJvamVjdFRhc2tCdG4oKTtcclxuICAvLyBkaXNwbGF5VG9Eb3NGb3JDdXJyZW50UHJvamVjdChjdXJyZW50UHJvamVjdE5hbWUuc2xpY2UoKS5wb3AoKSk7XHJcbn1cclxuY2FuY2VsVGFza0J0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgY2FuY2VsRm9ybURpc3BsYXkpO1xyXG5cclxuLy9QcmV2ZW50IGZvcm0gRGVmYXVsdCB3aGVuIHN1Ym1pdGluZyBwcm9qZWN0IG5hbWVcclxuY29uc3Qgc3VibWl0TmV3UHJvamVjdEZvcm1OYW1lID0gKGV2ZW50KSA9PiB7XHJcbiAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICBnZXRuZXdQcm9qZWN0SW5wdXROYW1lKCk7XHJcbiAgZGlzcGxheU5ld1Byb2plY3RGb3JtKCk7XHJcbiAgLy8gY3JlYXRlTmV3UHJvamVjdFRhc2tCdG4oKTtcclxufTtcclxuU2F2ZVByb2plY3ROYW1lLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBzdWJtaXROZXdQcm9qZWN0Rm9ybU5hbWUpO1xyXG5uZXdQcm9qZWN0TmFtZVJlcXVlc3QuYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCAoZXZlbnQpID0+XHJcbiAgZXZlbnQucHJldmVudERlZmF1bHQoKVxyXG4pO1xyXG5cclxubmV3UHJvamVjdFRhc2tzQ29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgZGlzcGxheU5ld1Byb2plY3RGb3JtKCk7XHJcbiAgbmV3UHJvamVjdFRhc2tzQ29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuICBuZXdQcm9qZWN0VGFza3NDb250YWluZXIudGV4dENvbnRlbnQgPSBcIlwiO1xyXG59KTtcclxuXHJcbmZ1bmN0aW9uIHN1Ym1pdEZvcm0oZXZlbnQpIHtcclxuICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gIHVzZXJMaXN0LnRleHRDb250ZW50ID0gXCJcIjtcclxuXHJcbiAgYWRkTmV3UHJvamVjdFRvZG9zKCk7XHJcbiAgLy8gZGlzcGxheVRvRG9zRm9yQ3VycmVudFByb2plY3QocHJvamVjdE5hbWUpO1xyXG4gIC8vIGFkZFRvZG9Ub3NlbGVjdGVkUHJvamVjdCgpO1xyXG59XHJcbnN1Ym1pdFRhc2tCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHN1Ym1pdEZvcm0pO1xyXG5wcm9qZWN0Rm9ybS5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIChldmVudCkgPT4gZXZlbnQucHJldmVudERlZmF1bHQoKSk7XHJcbiIsIlxyXG5pbXBvcnQgeyBnZXRVc2VyVG9kbyB9IGZyb20gXCIuL2RvbS1FbC0yXCI7XHJcbmltcG9ydCB7IG5ld1Byb2plY3RUYXNrc0NvbnRhaW5lciB9IGZyb20gXCIuL2RvbS1FbC0yXCI7XHJcbmltcG9ydCB7IGdldG5ld1Byb2plY3RJbnB1dFZhbHVlIH0gZnJvbSBcIi4vZG9tLUVsLTJcIjtcclxuaW1wb3J0IHsgY3JlYXRlTmV3UHJvamVjdFRhc2tCdG4gfSBmcm9tIFwiLi9kb20tRWwtMlwiO1xyXG5pbXBvcnQgeyBpbnB1dE5ld3Byb2plY3RGb3JtTmFtZSB9IGZyb20gXCIuL2RvbS1FbC0yXCI7XHJcblxyXG5jb25zdCBtYWluQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIm1haW5cIik7XHJcbmNvbnN0IGhlYWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaGVhZGVyVGV4dENvbnRlbnRcIik7XHJcbmNvbnN0IHVzZXJMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN1c2VybGlzdFwiKTtcclxuY29uc3QgaW5ib3hUYXNrRGlzcGxheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZGlzcGxheUluYm94VGFza1wiKTtcclxuY29uc3QgZm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZm9ybVwiKTtcclxubGV0IHByb2plY3RGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNQcm9qZWN0Rm9ybVwiKTtcclxuY29uc3QgY2FuY2VsRm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY2FuY2VsXCIpO1xyXG5jb25zdCBzdWJtaXRCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3N1Ym1pdEJ0blwiKTtcclxuY29uc3QgYWRkVGFza2J0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdGFza1wiKTtcclxuY29uc3QgYWRkVGFza01vYmlsZUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNhZGRUb2RvQnRuQ29udGFpbmVyJylcclxuXHJcbmxldCBpbmJveCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaW5ib3hcIik7XHJcbmNvbnN0IHRvRG9Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VjdGlvblwiKTtcclxudG9Eb0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwidG9Eb0NvbnRhaW5lckluYm94XCIpO1xyXG5jb25zdCBpbmJveEZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZm9ybVwiKTtcclxuaW5ib3hGb3JtLmNsYXNzTGlzdC5hZGQoXCJpbmJveEZvcm1cIik7XHJcbmNvbnN0IGluYm94VGFzayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbmluYm94VGFzay5jbGFzc0xpc3QuYWRkKFwiaW5ib3hUYXNrXCIpO1xyXG5cclxubGV0IHRhc2tUaXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGFzay10aXRsZVwiKTtcclxubGV0IHRhc2tEZXNjcmlwdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZGVzY3JpcHRpb25cIik7XHJcbmxldCB0YXNrUHJpb3JpdHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3ByaW9yaXR5XCIpO1xyXG5sZXQgZHVlRGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZGF0ZVBpY2tlclwiKTtcclxuXHJcbmNsYXNzIGdldExpc3Qge1xyXG4gIGNvbnN0cnVjdG9yKHRpdGxlLCBkZXNjcmlwdGlvbiwgcHJpb3JpdHksIGRhdGUpIHtcclxuICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcclxuICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcclxuICAgIHRoaXMucHJpb3JpdHkgPSBwcmlvcml0eTtcclxuICAgIHRoaXMuZGF0ZSA9IGRhdGU7XHJcbiAgfVxyXG59XHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IG15UHJvamVjdHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Byb2plY3RzIGgzXCIpO1xyXG5jb25zdCBkZWZhdWx0UHJvamVjdHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Byb2plY3RzXCIpO1xyXG5cclxuXHJcbmZ1bmN0aW9uIGRpc3BsYXlGb3JtKGV2ZW50KSB7XHJcbiAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImhlYWRlciBoMVwiKTtcclxuICBcclxuICBoZWFkZXIudGV4dENvbnRlbnQgPSBcIkFkZCB5b3VyIFRvIGRvXCI7XHJcbiAgdXNlckxpc3QudGV4dENvbnRlbnQgPSBcIlwiO1xyXG4gIGNvbnN0IGludGlhbFRleHREaXNwbGF5Q29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmludGlhbFRleHREaXNwbGF5Q29udGFpbmVyJylcclxuICBpbnRpYWxUZXh0RGlzcGxheUNvbnRhaW5lci5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnXHJcbiAgXHJcbiAgbGV0IG5ld1Byb2plY3RCdG4gPSBjcmVhdGVOZXdQcm9qZWN0VGFza0J0bigpO1xyXG4gIG5ld1Byb2plY3RCdG4uc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG4gIGZvcm0uc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcclxuICBpZiAoKHByb2plY3RGb3JtLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCIpKSB7XHJcbiAgICBwcm9qZWN0Rm9ybS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnXHJcbiAgfVxyXG59XHJcbmFkZFRhc2tidG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGRpc3BsYXlGb3JtKTtcclxuYWRkVGFza01vYmlsZUJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZGlzcGxheUZvcm0pO1xyXG5cclxuXHJcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsICgpID0+IHtcclxuICBkaXNwbGF5VG9Eb3MoKTtcclxufSk7XHJcblxyXG5sZXQgdG9Eb3MgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidG9Eb3NcIikpIHx8IFtdO1xyXG5cclxuXHJcbmZ1bmN0aW9uIGFjY2VwdElucHV0KCkgeyAgXHJcbiAgbGV0IHRhc2tJbnB1dFZhbHVlID0gdGFza1RpdGxlLnZhbHVlO1xyXG4gIGxldCBkZXNjcmlwdGlvbklucHV0VmFsdWUgPSB0YXNrRGVzY3JpcHRpb24udmFsdWU7XHJcbiAgbGV0IHByaW9yaXR5VmFsdWVFbCA9IHRhc2tQcmlvcml0eS52YWx1ZTtcclxuICBsZXQgZHVlRGF0ZVZhbHVlRWwgPSBkdWVEYXRlLnZhbHVlO1xyXG5cclxuICBjb25zb2xlLmxvZyh0YXNrSW5wdXRWYWx1ZS5sZW5ndGgpXHJcbiAgaWYgKHRhc2tJbnB1dFZhbHVlLmxlbmd0aCA+IDMwKSB7XHJcbiAgICByZXR1cm4gYWxlcnQoXHJcbiAgICAgIGBJbnB1dCBzaG91bGQgYmUgbGVzcyBvciBlcXVhbCB0byB0aGUgMzUgY2hhcmFjdGVycywgeW91IGhhdmUgZW50ZXJlZCAke1xyXG4gICAgICAgIHRhc2tJbnB1dFZhbHVlLmxlbmd0aFxyXG4gICAgICB9IGNoYXJhY3RlcnNgXHJcbiAgICApO1xyXG4gIH0gZWxzZSBpZihkZXNjcmlwdGlvbklucHV0VmFsdWUubGVuZ3RoID4gMzUpIHtcclxuICAgIHJldHVybiBhbGVydChcclxuICAgICAgYERlc2NyaXB0aW9uIHNob3VsZCBiZSBsZXNzIG9yIGVxdWFsIHRvIHRoZSA0MCBjaGFyYWN0ZXJzLCB5b3UgaGF2ZSBlbnRlcmVkICR7ZGVzY3JpcHRpb25JbnB1dFZhbHVlLmxlbmd0aH0gY2hhcmFjdGVyc2BcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICBjb25zdCBkYXRlID0gbmV3IERhdGUoZHVlRGF0ZVZhbHVlRWwpO1xyXG5cclxuICBjb25zdCBvcHRpb25zID0ge1xyXG4gICAgd2Vla2RheTogXCJsb25nXCIsXHJcbiAgICB5ZWFyOiBcIm51bWVyaWNcIixcclxuICAgIG1vbnRoOiBcInNob3J0XCIsXHJcbiAgICBkYXk6IFwibnVtZXJpY1wiLFxyXG4gIH07XHJcblxyXG4gIGNvbnN0IGRheU9mV2VlayA9IGRhdGUudG9Mb2NhbGVEYXRlU3RyaW5nKFwiZW4tVXNcIiwgb3B0aW9ucyk7XHJcblxyXG4gIGxldCB1c2VyVG9EbyA9IG5ldyBnZXRMaXN0KFxyXG4gICAgdGFza0lucHV0VmFsdWUsXHJcbiAgICBkZXNjcmlwdGlvbklucHV0VmFsdWUsXHJcbiAgICBwcmlvcml0eVZhbHVlRWwsXHJcbiAgICBkYXlPZldlZWtcclxuICApO1xyXG5cclxuICB0b0Rvcy5wdXNoKHVzZXJUb0RvKTtcclxuXHJcbiAgXHJcbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJ0b0Rvc1wiLCBKU09OLnN0cmluZ2lmeSh0b0RvcykpO1xyXG5cclxuICBjbGVhckZvcm0oKTtcclxuICBcclxufVxyXG5cclxuZnVuY3Rpb24gY2xlYXJGb3JtKCkge1xyXG4gIHRhc2tUaXRsZS52YWx1ZSA9IFwiXCI7XHJcbiAgdGFza0Rlc2NyaXB0aW9uLnZhbHVlID0gXCJcIjtcclxuICBkdWVEYXRlLnZhbHVlID0gXCJcIjtcclxuICB0YXNrUHJpb3JpdHkudmFsdWUgPSBcIlNlbGVjdCBQcmlvcml0eVwiO1xyXG59XHJcblxyXG5cclxuZnVuY3Rpb24gZGlzcGxheVRvRG9zKCkge1xyXG4gIGxldCB1c2VyVG9kb3MgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidG9Eb3NcIikpIHx8IFtdO1xyXG5cclxuICB1c2VyVG9kb3M/LmZvckVhY2goKHRvZG9PYmosIGluZGV4KSA9PiB7XHJcbiAgICBnZXRFbGVtZW50Rm9yVGFza0Rpc3BsYXkoXHJcbiAgICAgIHRvZG9PYmoudGl0bGUsXHJcbiAgICAgIHRvZG9PYmouZGVzY3JpcHRpb24sXHJcbiAgICAgIHRvZG9PYmoucHJpb3JpdHksXHJcbiAgICAgIHRvZG9PYmouZGF0ZSxcclxuICAgICAgaW5kZXhcclxuICAgICk7XHJcbiAgfSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldEVsZW1lbnRGb3JUYXNrRGlzcGxheShcclxuICBzYXZlVGl0bGVEYXRhLFxyXG4gIHNhdmVEZXNjcmlwdGlvbkRhdGEsXHJcbiAgc2F2ZVByaW9yaXR5RGF0YSxcclxuICBzYXZlRHVlRGF0ZURhdGEsXHJcbiAgaW5kZXhcclxuKSB7XHJcbiAgaGVhZGVyLnRleHRDb250ZW50ID0gXCJDcmVhdGUgWW91ciBUby1EbyBMaXN0LlwiO1xyXG4gIGNvbnN0IGxpc3RDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIGNvbnN0IHRhc2tDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcclxuICBjb25zdCBpbm5lclRhc2tDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIGNvbnN0IGlubmVyVGFza0hhbmRsZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIGlubmVyVGFza0hhbmRsZXIuY2xhc3NMaXN0LmFkZChcImlubmVyVGFza0hhbmRsZXJcIik7XHJcbiAgaW5uZXJUYXNrQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJpbm5lclRhc2tDb250YWluZXJcIik7XHJcbiAgdGFza0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwidGFza0NvbnRhaW5lclwiKTtcclxuICBsaXN0Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJsaXN0Q29udGFpbmVyXCIpO1xyXG5cclxuICBjb25zdCBjaGVja0JveENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xyXG4gIGNoZWNrQm94Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJjaGVja0JveENvbnRhaW5lclwiKTtcclxuICBjb25zdCBjaGVja0JveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcclxuICBjaGVja0JveC5jbGFzc0xpc3QuYWRkKFwiY2hlY2tCb3hcIik7XHJcbiAgY2hlY2tCb3guc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcImNoZWNrYm94XCIpO1xyXG5cclxuICBjb25zdCB0YXNrVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDRcIik7XHJcbiAgY29uc3QgdGFza0Rlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XHJcbiAgY29uc3QgZHVlRGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xyXG4gIGNvbnN0IHRhc2tQcmlvcml0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xyXG4gIGNvbnN0IGRlbGV0ZVRhc2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xyXG5cclxuICB0YXNrVGl0bGUuY2xhc3NMaXN0LmFkZChcInRhc2tUaXRsZVwiKTtcclxuICB0YXNrRGVzY3JpcHRpb24uY2xhc3NMaXN0LmFkZChcInRhc2tEZXNjcmlwdGlvblwiKTtcclxuICBcclxuICBkdWVEYXRlLmNsYXNzTGlzdC5hZGQoXCJkdWVEYXRlXCIpO1xyXG4gIGRlbGV0ZVRhc2suY2xhc3NMaXN0LmFkZChcImRlbGV0ZVRhc2tcIik7XHJcbiAgdGFza1ByaW9yaXR5LmNsYXNzTGlzdC5hZGQoXCJ0YXNrUHJpb3JpdHlcIik7XHJcblxyXG4gIHRhc2tUaXRsZS50ZXh0Q29udGVudCA9IGAgJHtzYXZlVGl0bGVEYXRhfWA7XHJcbiAgdGFza0Rlc2NyaXB0aW9uLnRleHRDb250ZW50ID0gYCR7c2F2ZURlc2NyaXB0aW9uRGF0YX1gO1xyXG4gIHRhc2tQcmlvcml0eS50ZXh0Q29udGVudCA9IGAke3NhdmVQcmlvcml0eURhdGF9YDtcclxuICBkdWVEYXRlLnRleHRDb250ZW50ID0gYCR7c2F2ZUR1ZURhdGVEYXRhfWA7XHJcbiAgZGVsZXRlVGFzay50ZXh0Q29udGVudCA9IFwiRGVsZXRlIHRhc2tcIjtcclxuXHJcbiAgdGFza1RpdGxlLmRhdGFzZXQuZmllbGRUeXBlID0gXCJ0aXRsZVwiO1xyXG4gIHRhc2tEZXNjcmlwdGlvbi5kYXRhc2V0LmZpZWxkVHlwZSA9IFwiZGVzY3JpcHRpb25cIjtcclxudGFza1ByaW9yaXR5LmRhdGFzZXQuZmllbGRUeXBlID0gXCJ0YXNrUHJpb3JpdHlcIjtcclxuZHVlRGF0ZS5kYXRhc2V0LmZpZWxkVHlwZSA9IFwiZHVlRGF0ZVwiO1xyXG5cclxuICB0YXNrVGl0bGUuZGF0YXNldC5pbmRleCA9IGluZGV4O1xyXG4gIHRhc2tEZXNjcmlwdGlvbi5kYXRhc2V0LmluZGV4ID0gaW5kZXg7XHJcbiAgdGFza1ByaW9yaXR5LmRhdGFzZXQuaW5kZXggPSBpbmRleDtcclxuICBkdWVEYXRlLmRhdGFzZXQuaW5kZXggPSBpbmRleDtcclxuICBjaGVja0JveC5kYXRhc2V0LmluZGV4ID0gaW5kZXg7XHJcblxyXG4gIGlubmVyVGFza0NvbnRhaW5lci5hcHBlbmRDaGlsZCh0YXNrVGl0bGUpO1xyXG4gIGlubmVyVGFza0NvbnRhaW5lci5hcHBlbmRDaGlsZCh0YXNrRGVzY3JpcHRpb24pO1xyXG4gIGlubmVyVGFza0NvbnRhaW5lci5hcHBlbmRDaGlsZChkdWVEYXRlKTtcclxuXHJcbiAgaW5uZXJUYXNrSGFuZGxlci5hcHBlbmRDaGlsZCh0YXNrUHJpb3JpdHkpO1xyXG4gIGlubmVyVGFza0hhbmRsZXIuYXBwZW5kQ2hpbGQoZGVsZXRlVGFzayk7XHJcblxyXG4gIHRhc2tDb250YWluZXIuYXBwZW5kQ2hpbGQoaW5uZXJUYXNrQ29udGFpbmVyKTtcclxuICB0YXNrQ29udGFpbmVyLmFwcGVuZENoaWxkKGlubmVyVGFza0hhbmRsZXIpO1xyXG5cclxuICBjaGVja0JveENvbnRhaW5lci5hcHBlbmRDaGlsZChjaGVja0JveCk7XHJcbiAgbGlzdENvbnRhaW5lci5hcHBlbmRDaGlsZChjaGVja0JveENvbnRhaW5lcik7XHJcblxyXG4gIGxpc3RDb250YWluZXIuYXBwZW5kQ2hpbGQodGFza0NvbnRhaW5lcik7XHJcbiAgdXNlckxpc3QuYXBwZW5kQ2hpbGQobGlzdENvbnRhaW5lcik7XHJcblxyXG4gIHRhc2tUaXRsZS5hZGRFdmVudExpc3RlbmVyKFwiZGJsY2xpY2tcIiwgZWRpdFRhc2spO1xyXG4gIHRhc2tUaXRsZS5hZGRFdmVudExpc3RlbmVyKFwidG91Y2hzdGFydFwiLCBlZGl0VGFzayk7XHJcblxyXG4gIHRhc2tEZXNjcmlwdGlvbi5hZGRFdmVudExpc3RlbmVyKFwiZGJsY2xpY2tcIiwgZWRpdFRhc2spO1xyXG4gIHRhc2tEZXNjcmlwdGlvbi5hZGRFdmVudExpc3RlbmVyKFwidG91Y2hzdGFydFwiLCBlZGl0VGFzayk7XHJcblxyXG4gIHRhc2tQcmlvcml0eS5hZGRFdmVudExpc3RlbmVyKFwiZGJsY2xpY2tcIiwgZWRpdFRhc2spO1xyXG4gIHRhc2tQcmlvcml0eS5hZGRFdmVudExpc3RlbmVyKFwidG91Y2hzdGFydFwiLCBlZGl0VGFzayk7XHJcblxyXG4gIGR1ZURhdGUuYWRkRXZlbnRMaXN0ZW5lcihcImRibGNsaWNrXCIsIGVkaXRUYXNrKTtcclxuICBkdWVEYXRlLmFkZEV2ZW50TGlzdGVuZXIoXCJ0b3VjaHN0YXJ0XCIsIGVkaXRUYXNrKTtcclxuXHJcblxyXG5cclxuICBkZWxldGVUYXNrLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBkZWxldGVUb0RvKTtcclxuICBkZWxldGVUYXNrLmFkZEV2ZW50TGlzdGVuZXIoXCJ0b3VjaHN0YXJ0XCIsIGRlbGV0ZVRvRG8pO1xyXG5cclxuXHJcbiAgaGFuZGxlQ2hlY2tCb3goY2hlY2tCb3gsIHRhc2tUaXRsZSwgdGFza0Rlc2NyaXB0aW9uKTtcclxufVxyXG5cclxuZnVuY3Rpb24gZWRpdFRhc2soZXZlbnQpIHtcclxuICBjb25zdCB0YXJnZXQgPSBldmVudC50YXJnZXQ7XHJcbiAgY29uc29sZS5sb2codGFyZ2V0KTtcclxuICBjb25zdCBmaWVsZFR5cGUgPSB0YXJnZXQuZGF0YXNldC5maWVsZFR5cGU7IFxyXG4gIGNvbnN0IGluZGV4ID0gdGFyZ2V0LmRhdGFzZXQuaW5kZXg7XHJcbiAgY29uc29sZS5sb2coaW5kZXgpO1xyXG4gIGNvbnN0IHRhc2tQcmlvcml0eSA9IFtcIlVyZ2VudFwiLCBcIkltcG9ydGFudFwiLCBcIkxvdyBwcmlvcml0eVwiXTtcclxuXHJcbiAgbGV0IHRhc2tJbnB1dDtcclxuXHJcbiAgaWYgKGZpZWxkVHlwZSA9PT0gXCJ0aXRsZVwiIHx8IGZpZWxkVHlwZSA9PT0gXCJkZXNjcmlwdGlvblwiKSB7XHJcbiAgICB0YXNrSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XHJcbiAgICB0YXNrSW5wdXQudHlwZSA9IFwidGV4dFwiO1xyXG4gICAgdGFza0lucHV0LnZhbHVlID0gdGFyZ2V0LnRleHRDb250ZW50O1xyXG4gIH0gZWxzZSBpZiAoZmllbGRUeXBlID09PSBcImR1ZURhdGVcIikge1xyXG4gICAgdGFza0lucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xyXG4gICAgdGFza0lucHV0LnR5cGUgPSBcImRhdGVcIjtcclxuICAgIHRhc2tJbnB1dC52YWx1ZSA9IHRhcmdldC50ZXh0Q29udGVudDtcclxuICB9IGVsc2UgaWYgKGZpZWxkVHlwZSA9PT0gXCJ0YXNrUHJpb3JpdHlcIikge1xyXG4gICAgdGFza0lucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNlbGVjdFwiKTtcclxuXHJcbiAgICB0YXNrUHJpb3JpdHkuZm9yRWFjaCgocHJpb3JpdHkpID0+IHtcclxuICAgICAgY29uc3Qgb3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTtcclxuICAgICAgb3B0aW9uLnZhbHVlID0gcHJpb3JpdHk7XHJcbiAgICAgIG9wdGlvbi50ZXh0Q29udGVudCA9IHByaW9yaXR5O1xyXG5cclxuICAgICAgaWYgKHByaW9yaXR5ID09PSB0YXJnZXQudGV4dENvbnRlbnQpIHtcclxuICAgICAgICBvcHRpb24uc2VsZWN0ZWQgPSB0cnVlO1xyXG4gICAgICB9XHJcbiAgICAgIHRhc2tJbnB1dC5hcHBlbmRDaGlsZChvcHRpb24pO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBcclxuICB0YXNrSW5wdXQuZGF0YXNldC5maWVsZFR5cGUgPSBmaWVsZFR5cGU7XHJcbiAgdGFza0lucHV0LmRhdGFzZXQuaW5kZXggPSBpbmRleDtcclxuXHJcbiAgdGFyZ2V0LnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuICB0YXJnZXQucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUodGFza0lucHV0LCB0YXJnZXQubmV4dFNpYmxpbmcpOyBcclxuXHJcbiAgdGFza0lucHV0LmNsYXNzTGlzdC5hZGQoXCJlZGl0XCIpO1xyXG5cclxuICBpZiAodGFza0lucHV0LnR5cGUgPT09IFwidGV4dFwiKSB7XHJcbiAgICB0YXNrSW5wdXQuc2VsZWN0KCk7IFxyXG4gIH1cclxuXHJcbiAgdGFza0lucHV0LmFkZEV2ZW50TGlzdGVuZXIoXCJibHVyXCIsIHNhdmVFZGl0ZWRUYXNrKTsgXHJcbiAgdGFza0lucHV0LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlwcmVzc1wiLCBzYXZlRWRpdGVkVGFzayk7IFxyXG59XHJcblxyXG5mdW5jdGlvbiBzYXZlRWRpdGVkVGFzayhldmVudCkge1xyXG4gIGlmIChldmVudC50eXBlID09PSBcImJsdXJcIiB8fCBldmVudC5rZXkgPT09IFwiRW50ZXJcIikge1xyXG5cclxuICAgIGxldCBpbnB1dCA9IGV2ZW50LnRhcmdldDtcclxuICAgIGNvbnNvbGUubG9nKGlucHV0KTtcclxuICAgIGxldCBmaWVsZFR5cGUgPSBpbnB1dC5kYXRhc2V0LmZpZWxkVHlwZTtcclxuICAgIGxldCBpbmRleCA9IGlucHV0LmRhdGFzZXQuaW5kZXg7IFxyXG4gICAgXHJcbiAgICAgICAgY29uc29sZS5sb2codG9Eb3MpO1xyXG5cclxuICAgIGxldCBuZXdWYWx1ZTtcclxuICAgIGlmIChpbnB1dC50YWdOYW1lID09PSBcIlNFTEVDVFwiKSB7XHJcbiAgICAgIG5ld1ZhbHVlID0gaW5wdXQub3B0aW9uc1tpbnB1dC5zZWxlY3RlZEluZGV4XS52YWx1ZTtcclxuICAgICAgdG9Eb3NbaW5kZXhdLnByaW9yaXR5ID0gbmV3VmFsdWU7XHJcbiAgICAgIGNvbnNvbGUubG9nKHRvRG9zW2luZGV4XS5wcmlvcml0eSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBuZXdWYWx1ZSA9IGlucHV0LnZhbHVlO1xyXG4gICAgfVxyXG5cclxuICAgIFxyXG4gICAgaWYgKGluZGV4IDwgdG9Eb3MubGVuZ3RoKSB7XHJcbiAgICAgIGlmIChmaWVsZFR5cGUgPT09IFwidGl0bGVcIikge1xyXG4gICAgICAgIHRvRG9zW2luZGV4XS50aXRsZSA9IG5ld1ZhbHVlO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHRvRG9zW2luZGV4XS50aXRsZSk7XHJcbiAgICAgICAgY29uc29sZS5sb2cobmV3VmFsdWUpO1xyXG4gICAgICB9IGVsc2UgaWYgKGZpZWxkVHlwZSA9PT0gXCJkZXNjcmlwdGlvblwiKSB7XHJcbiAgICAgICAgdG9Eb3NbaW5kZXhdLmRlc2NyaXB0aW9uID0gbmV3VmFsdWU7XHJcbiAgICAgICAgY29uc29sZS5sb2coaW5kZXgpXHJcbiAgICAgICAgY29uc29sZS5sb2codG9Eb3NbZGVzY3JpcHRpb25dKTtcclxuICAgICAgfVxyXG4gICAgICBlbHNlIGlmIChmaWVsZFR5cGUgPT09IFwiZHVlRGF0ZVwiKSB7XHJcbiAgICAgICAgbGV0IGR1ZURhdGUgPSBuZXdWYWx1ZTtcclxuICAgICAgICBjb25zdCBkYXRlID0gbmV3IERhdGUoZHVlRGF0ZSk7XHJcblxyXG4gICAgICAgIGNvbnN0IG9wdGlvbnMgPSB7XHJcbiAgICAgICAgICB3ZWVrZGF5OiBcImxvbmdcIixcclxuICAgICAgICAgIHllYXI6IFwibnVtZXJpY1wiLFxyXG4gICAgICAgICAgbW9udGg6IFwic2hvcnRcIixcclxuICAgICAgICAgIGRheTogXCJudW1lcmljXCIsXHJcbiAgICAgICAgfTtcclxuICAgIGNvbnNvbGUubG9nKHRvRG9zKTtcclxuXHJcbiAgICAgICAgdG9Eb3NbaW5kZXhdLmRhdGUgPSBkYXRlLnRvTG9jYWxlRGF0ZVN0cmluZyhcImVuLVVzXCIsIG9wdGlvbnMpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBcclxuXHJcbiAgICBcclxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwidG9Eb3NcIiwgSlNPTi5zdHJpbmdpZnkodG9Eb3MpKTtcclxuXHJcbiAgICBcclxuICAgIGxldCBvcmlnaW5hbEVsZW1lbnQgPSBpbnB1dC5wcmV2aW91c1NpYmxpbmc7XHJcblxyXG4gICAgb3JpZ2luYWxFbGVtZW50LnRleHRDb250ZW50ID0gbmV3VmFsdWU7XHJcblxyXG4gICAgb3JpZ2luYWxFbGVtZW50LnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XHJcblxyXG4gICAgXHJcbiAgICBpbnB1dC5yZW1vdmUoKTtcclxuXHJcbiAgICB1c2VyTGlzdC50ZXh0Q29udGVudCA9IFwiXCI7XHJcblxyXG4gICAgXHJcbiAgICBkaXNwbGF5VG9Eb3MoKTtcclxuICB9XHJcblxyXG59XHJcblxyXG5cclxuXHJcbmZ1bmN0aW9uIGhhbmRsZUNoZWNrQm94KGNoZWNrQm94LCB0YXNrVGl0bGUsIHRhc2tEZXNjcmlwdGlvbikge1xyXG4gIGNoZWNrQm94LmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgKGV2ZW50KSA9PiB7XHJcbiAgICBpZiAoY2hlY2tCb3guY2hlY2tlZCA9PT0gdHJ1ZSkge1xyXG4gICAgICBcclxuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJ0b0Rvc1wiLCBKU09OLnN0cmluZ2lmeSh0b0RvcykpO1xyXG4gICAgICBjb25zb2xlLmxvZyh0b0Rvcyk7XHJcblxyXG4gICAgICB0YXNrRGVzY3JpcHRpb24uc3R5bGUudGV4dERlY29yYXRpb24gPSBcImxpbmUtdGhyb3VnaFwiO1xyXG5cclxuICAgICAgY29uc3QgbGlzdENvbnRhaW5lckVsID0gZXZlbnQudGFyZ2V0O1xyXG4gICAgICBjb25zb2xlLmxvZyhsaXN0Q29udGFpbmVyRWwpO1xyXG4gICAgICBjb25zdCBpbmRleCA9IGxpc3RDb250YWluZXJFbC5kYXRhc2V0LmluZGV4O1xyXG4gICAgICBcclxuICAgICAgXHJcblxyXG4gICAgICBpZiAoaW5kZXggIT09IC0xKSB7XHJcbiAgICAgICAgbGlzdENvbnRhaW5lckVsLnJlbW92ZShsaXN0Q29udGFpbmVyRWwpO1xyXG4gICAgICAgIHRvRG9zLnNwbGljZShpbmRleCwgMSk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJ0b0Rvc1wiLCBKU09OLnN0cmluZ2lmeSh0b0RvcykpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHRvRG9zKTtcclxuICAgICAgICB1c2VyTGlzdC50ZXh0Q29udGVudCA9IFwiXCI7XHJcbiAgICAgICAgZGlzcGxheVRvRG9zKCk7XHJcbiAgICAgICAgYWxlcnQoXCJUYXNrIGNvbXBsZXRlZCFcIik7XHJcbiAgICAgIH1cclxuICAgICAgY29uc29sZS5sb2coXCJ0cnVlXCIpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGFza1RpdGxlLnN0eWxlLnRleHREZWNvcmF0aW9uID0gXCJub25lXCI7XHJcbiAgICAgIHRhc2tEZXNjcmlwdGlvbi5zdHlsZS50ZXh0RGVjb3JhdGlvbiA9IFwibm9uZVwiO1xyXG4gICAgICBjb25zb2xlLmxvZyhcImZhbHNlXCIpO1xyXG4gICAgfVxyXG4gIH0pO1xyXG59XHJcblxyXG5cclxuZnVuY3Rpb24gZGVsZXRlVG9EbygpIHtcclxuICBjb25zdCBsaXN0Q29udGFpbmVyRWwgPSB0aGlzLmNsb3Nlc3QoXCIubGlzdENvbnRhaW5lclwiKTtcclxuICBjb25zdCBidXR0b25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5kZWxldGVUYXNrXCIpO1xyXG4gIGNvbnN0IGluZGV4ID0gQXJyYXkuZnJvbShidXR0b25zKS5pbmRleE9mKHRoaXMpO1xyXG5cclxuICBpZiAoaW5kZXggIT09IC0xKSB7XHJcbiAgICBsaXN0Q29udGFpbmVyRWwucmVtb3ZlKGxpc3RDb250YWluZXJFbCk7XHJcbiAgICB0b0Rvcy5zcGxpY2UoaW5kZXgsIDEpO1xyXG4gICAgXHJcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInRvRG9zXCIsIEpTT04uc3RyaW5naWZ5KHRvRG9zKSk7XHJcbiAgICBjb25zb2xlLmxvZyh0b0Rvcyk7XHJcbiAgfVxyXG59XHJcblxyXG5cclxuZnVuY3Rpb24gY2FuY2VsRm9ybURpc3BsYXkoKSB7XHJcbiAgY29uc3QgaW50aWFsVGV4dERpc3BsYXlDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxyXG4gICAgXCIuaW50aWFsVGV4dERpc3BsYXlDb250YWluZXJcIlxyXG4gICk7XHJcbiAgdGFza1RpdGxlLnZhbHVlID0gXCJcIjtcclxuICB0YXNrRGVzY3JpcHRpb24udmFsdWUgPSBcIlwiO1xyXG4gIGR1ZURhdGUudmFsdWUgPSBcIlwiO1xyXG4gIHRhc2tQcmlvcml0eS52YWx1ZSA9IFwiU2VsZWN0IFByaW9yaXR5XCI7XHJcbiAgZm9ybS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbiAgICBpbnRpYWxUZXh0RGlzcGxheUNvbnRhaW5lci5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJ1xyXG5cclxufVxyXG5jYW5jZWxGb3JtLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBjYW5jZWxGb3JtRGlzcGxheSk7XHJcblxyXG5mdW5jdGlvbiBzdWJtaXRGb3JtKCkge1xyXG4gIHVzZXJsaXN0LnRleHRDb250ZW50ID0gXCJcIjtcclxuXHJcbiAgYWNjZXB0SW5wdXQoKTtcclxuICBkaXNwbGF5VG9Eb3MoKTtcclxufVxyXG5mb3JtLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgKGV2ZW50KSA9PiBldmVudC5wcmV2ZW50RGVmYXVsdCgpKTtcclxuc3VibWl0QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBzdWJtaXRGb3JtKTtcclxuXHJcbmZ1bmN0aW9uIGRpc3BsYXlJbmJveEZvcm0oKSB7XHJcbiAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImhlYWRlciBoMVwiKTtcclxuICB1c2VybGlzdC50ZXh0Q29udGVudCA9IFwiXCI7XHJcbiAgaGVhZGVyLnRleHRDb250ZW50ID0gXCJJbmJveFwiO1xyXG5cclxuICBkaXNwbGF5VG9Eb3MoKTtcclxuICBmb3JtLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XHJcblxyXG4gIGlmIChpbnB1dE5ld3Byb2plY3RGb3JtTmFtZS5zdHlsZS5kaXNwbGF5ID09PSBcImJsb2NrXCIpIHtcclxuICAgIGlucHV0TmV3cHJvamVjdEZvcm1OYW1lLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuICB9XHJcbiAgcHJvamVjdEZvcm0uc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG59XHJcbmluYm94LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBkaXNwbGF5SW5ib3hGb3JtKTtcclxuIiwiaW1wb3J0IHsgY3JlYXRlTmV3UHJvamVjdFRhc2tCdG4gfSBmcm9tIFwiLi9kb20tRWwtMlwiO1xyXG5sZXQgYXNpZGVFbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJtYWluIGFzaWRlXCIpO1xyXG5sZXQgdG9nZ2xlTWVudUljb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3RvZ2dsZU1lbnVJY29uXCIpO1xyXG5sZXQgc2lkZUJhciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJhc2lkZSNtZW51XCIpO1xyXG5sZXQgcHJvamVjdERyb3BEb3duID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwcm9qZWN0LWRyb3Bkb3duXCIpO1xyXG5sZXQgYWRkTmV3UHJvamVjdEVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2FkTmV3UHJvamVjdEVsJylcclxuXHJcbmNvbnNvbGUubG9nKHByb2plY3REcm9wRG93bik7XHJcblxyXG5jb25zb2xlLmxvZyhhc2lkZUVsKTtcclxuXHJcbmZ1bmN0aW9uIHRvZ2dlbE1lbnUoKSB7XHJcbiAgY29uc29sZS5sb2coXCJ0b2dnbGUgZWxlbWVudCBpcyBjbGlja2VkXCIpO1xyXG4gIHRvZ2dsZU1lbnVJY29uLmNsYXNzTGlzdC50b2dnbGUoXCJhY3RpdmVcIik7XHJcbiAgc2lkZUJhci5jbGFzc0xpc3QudG9nZ2xlKFwiYWN0aXZlXCIpO1xyXG59XHJcbnRvZ2dsZU1lbnVJY29uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB0b2dnZWxNZW51KTtcclxuXHJcbmZ1bmN0aW9uIHJlbW92ZVNpZGVCYXIoZSkge1xyXG4gIGlmIChlLnRhcmdldC50YWdOYW1lID09PSBcIk9QVElPTlwiKSB7XHJcbiAgICB0b2dnbGVNZW51SWNvbi5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xyXG4gICAgc2lkZUJhci5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xyXG4gIH0gZWxzZSBpZiAoXHJcbiAgICBlLnRhcmdldCAhPT0gdG9nZ2xlTWVudUljb24gJiZcclxuICAgIGUudGFyZ2V0ICE9PSBzaWRlQmFyICYmXHJcbiAgICBlLnRhcmdldCAhPT0gcHJvamVjdERyb3BEb3duXHJcbiAgKSB7XHJcbiAgICB0b2dnbGVNZW51SWNvbi5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xyXG4gICAgc2lkZUJhci5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gb3B0aW9uU2VsZWN0ZWQoKSB7XHJcbiAgdG9nZ2xlTWVudUljb24uY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcclxuICBzaWRlQmFyLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XHJcbn1cclxuXHJcbnByb2plY3REcm9wRG93bi5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsIG9wdGlvblNlbGVjdGVkKTtcclxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHJlbW92ZVNpZGVCYXIpO1xyXG5cclxuXHJcblxyXG5cclxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyYztcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSB7XG5cdFx0XHR2YXIgaSA9IHNjcmlwdHMubGVuZ3RoIC0gMTtcblx0XHRcdHdoaWxlIChpID4gLTEgJiYgKCFzY3JpcHRVcmwgfHwgIS9eaHR0cChzPyk6Ly50ZXN0KHNjcmlwdFVybCkpKSBzY3JpcHRVcmwgPSBzY3JpcHRzW2ktLV0uc3JjO1xuXHRcdH1cblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJtYWluXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCAnLi4vc3JjL3N0eWxlcy5jc3MnO1xyXG5pbXBvcnQgZG9tRWwgZnJvbSAnLi9kb20tRWwnO1xyXG5pbXBvcnQgZG9tRWwyIGZyb20gJy4vZG9tLUVsLTInO1xyXG5pbXBvcnQgcmVzcG9uc2l2ZSBmcm9tICcuL3Jlc3BvbnNpdmUnO1xyXG5cclxuXHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==