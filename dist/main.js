/******/ (() => {
  // webpackBootstrap
  /******/ "use strict";
  /******/ var __webpack_modules__ = {
    /***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
      /*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
      /***/ (module, __webpack_exports__, __webpack_require__) => {
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ default: () => __WEBPACK_DEFAULT_EXPORT__,
          /* harmony export */
        });
        /* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            /*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js",
          );
        /* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default =
          /*#__PURE__*/ __webpack_require__.n(
            _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__,
          );
        /* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(
            /*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js",
          );
        /* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default =
          /*#__PURE__*/ __webpack_require__.n(
            _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__,
          );
        /* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(
            /*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js",
          );
        /* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default =
          /*#__PURE__*/ __webpack_require__.n(
            _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__,
          );
        // Imports

        var ___CSS_LOADER_URL_IMPORT_0___ = new URL(
          /* asset import */ __webpack_require__(
            /*! ./images/Todo-1.jpg */ "./src/images/Todo-1.jpg",
          ),
          __webpack_require__.b,
        );
        var ___CSS_LOADER_EXPORT___ =
          _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()(
            _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default(),
          );
        var ___CSS_LOADER_URL_REPLACEMENT_0___ =
          _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(
            ___CSS_LOADER_URL_IMPORT_0___,
          );
        // Module
        ___CSS_LOADER_EXPORT___.push([
          module.id,
          `    body {
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
    }`,
          "",
          {
            version: 3,
            sources: ["webpack://./src/styles.css"],
            names: [],
            mappings:
              "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",
            sourcesContent: [
              "    body {\r\n        padding: 0;\r\n        margin: 0;\r\n        box-sizing: border-box;\r\n    }\r\n\r\n    :root {\r\n        --hover-color: #fda4af;\r\n        --background-color: #6f9e9e;\r\n    }\r\n\r\n    * {\r\n        padding: 0;\r\n        margin: 0;\r\n        box-sizing: border-box;\r\n\r\n        font-family: \"Roboto\", sans-serif;\r\n        font-weight: 400;\r\n        font-style: normal;\r\n    }\r\n\r\n    @media (max-width: 550px) {\r\n\r\n        body main {\r\n            display: flex;\r\n            flex-direction: column;\r\n            justify-content: center;\r\n            z-index: 1;\r\n        }\r\n\r\n        main header {\r\n            background-color: #fda4af;\r\n            text-align: center;\r\n            display: flex;\r\n            align-items: center;\r\n            justify-content: center;\r\n            gap: 10px;\r\n        }\r\n\r\n\r\n\r\n\r\n        #toggleMenuIcon {\r\n            position: fixed;\r\n            top: 20px;\r\n            right: 20px;\r\n            width: 60px;\r\n            height: 60px;\r\n            background-color: #6b8888;\r\n            cursor: pointer;\r\n            display: flex;\r\n            justify-content: center;\r\n            align-items: center;\r\n            border-radius: 8px;\r\n            transition: top 0.3s;\r\n\r\n            z-index: 1000;\r\n        }\r\n\r\n        #toggleMenuIcon::before {\r\n            content: '';\r\n            position: absolute;\r\n            width: 28px;\r\n            height: 2px;\r\n            background-color: #fff;\r\n            transform: translateY(-5px);\r\n            transition: 0.2s;\r\n        }\r\n\r\n        #toggleMenuIcon::after {\r\n            content: '';\r\n            position: absolute;\r\n            width: 28px;\r\n            height: 2px;\r\n            background-color: #fff;\r\n            transform: translateY(5px);\r\n            transition: 0.2s;\r\n        }\r\n\r\n        #toggleMenuIcon.active::before {\r\n            transform: translateY(0px) rotate(45deg);\r\n\r\n        }\r\n\r\n        #toggleMenuIcon.active::after {\r\n            transform: translateY(0px) rotate(-45deg);\r\n\r\n        }\r\n\r\n        aside#menu {\r\n            display: block;\r\n            position: fixed;\r\n            top: 0;\r\n            left: -220px;\r\n            width: 220px;\r\n            height: 100vh;\r\n            color: white;\r\n            filter: white;\r\n            background-color: #7989a1;\r\n            transition: 0.3s;\r\n            z-index: 1000;\r\n            fill: white;\r\n\r\n        }\r\n\r\n        aside#menu.active {\r\n            left: 0;\r\n        }\r\n\r\n        main aside {\r\n            display: none;\r\n            border-radius: 5px;\r\n            background-color: #e2e8f0;\r\n        }\r\n\r\n        main #Container {\r\n            display: flex;\r\n            flex-direction: column;\r\n            flex-wrap: wrap;\r\n            border-radius: 5px;\r\n        }\r\n\r\n\r\n        header .menuController {\r\n            display: block;\r\n            width: 40px;\r\n            height: 40px;\r\n        }\r\n\r\n        header .menuController svg {\r\n            display: block;\r\n            width: 40px;\r\n            height: 40px;\r\n            fill: white;\r\n            background-color: black;\r\n            border-radius: 10px\r\n        }\r\n\r\n        #userlist {\r\n            display: flex;\r\n            flex-direction: column;\r\n            max-width: 550px;\r\n        }\r\n\r\n        div.listContainer {\r\n            display: flex;\r\n            gap: 5px;\r\n            max-width: 515px;\r\n            border-radius: 10px;\r\n            box-shadow: 1px 0px 3px 0px;\r\n            margin: 14px 14px 0 19px;\r\n\r\n            padding: 10px;\r\n\r\n\r\n        }\r\n\r\n        #userlist .intialTextDisplay {\r\n            display: flex;\r\n            flex-direction: column;\r\n            justify-content: center;\r\n            align-items: center;\r\n            text-align: center;\r\n        }\r\n\r\n        .intialTextDisplay img {\r\n            max-width: 100%;\r\n            height: auto;\r\n            padding: 18px;\r\n            border-radius: 30px;\r\n            object-fit: contain;\r\n\r\n        }\r\n\r\n        #userlist #addTodoBtnContainer {\r\n            display: flex;\r\n            align-items: center;\r\n            gap: 5px;\r\n            margin: 27px 0 11px 26px;\r\n        }\r\n\r\n        #task {\r\n            display: flex;\r\n            align-items: center;\r\n            gap: 5px;\r\n            margin: 27px 0 11px 26px;\r\n        }\r\n\r\n        #userlist #addTodoBtnContainer svg {\r\n            background-color: #dc2626;\r\n            border-radius: 50%;\r\n            fill: white;\r\n        }\r\n\r\n        #userlist #addTodoBtnContainer :hover {\r\n            cursor: pointer;\r\n            -webkit-transform: scale(1.09);\r\n        }\r\n\r\n        #userlist #addTodoBtnContainer button {\r\n            border: 0;\r\n            font-size: 16px;\r\n            color: #b91c1c;\r\n            background-color: inherit;\r\n            transition: 0.3s;\r\n        }\r\n\r\n        #userlist #addTodoBtnContainer button:hover {\r\n            cursor: pointer;\r\n            -webkit-transform: scale(1.09);\r\n        }\r\n\r\n\r\n        .inner_container #form {\r\n            background-color: #64748b;\r\n            border-radius: 10px;\r\n            max-height: 135px;\r\n            max-width: 515px !important;\r\n            height: 140px;\r\n            padding-left: 1rem;\r\n            display: none;\r\n            max-width: 480px;\r\n            margin: 10px 10px 0 10px;\r\n        }\r\n\r\n\r\n\r\n\r\n        div.inputNewprojectFormName {\r\n            display: none;\r\n            background-color: #cee3e3;\r\n            max-width: 300px;\r\n            max-height: 300px;\r\n            border-radius: 10px;\r\n            padding: 25px;\r\n            text-align: center;\r\n            margin: 60px 0 0 0;\r\n            box-shadow: 0px 9px 3px 0px;\r\n\r\n        }\r\n\r\n\r\n        .inputNewprojectFormName h2 {\r\n            margin: 0 0 10px 0;\r\n        }\r\n\r\n\r\n        .inputNewprojectFormName .inputNewProjectName {\r\n            max-width: 300px;\r\n            max-height: 35px;\r\n            padding: 14px;\r\n            border: none;\r\n            border-radius: 7px;\r\n        }\r\n\r\n        input.SaveProjectName {\r\n            padding: 9px;\r\n            border: none;\r\n            border-radius: 8px;\r\n            max-width: 100px;\r\n            height: 40px;\r\n            font-size: 19px;\r\n\r\n        }\r\n\r\n        .projectNameSaverBtnContainer {\r\n            margin: 10px 0;\r\n        }\r\n\r\n        .projectNameSaverBtnContainer button {\r\n            padding: 9px;\r\n            border: none;\r\n            border-radius: 8px;\r\n            width: 100px;\r\n            height: 40px;\r\n            font-size: 19px;\r\n        }\r\n\r\n\r\n        .inner_container #ProjectForm {\r\n            background-color: #64748b;\r\n            border-radius: 10px;\r\n            max-height: 134px;\r\n            max-width: 515px;\r\n            display: none;\r\n            max-width: 500px;\r\n            margin: 9px 10px 0 23px;\r\n        }\r\n\r\n        .projectFormDetails {\r\n            display: flex;\r\n            justify-content: space-between;\r\n            align-items: center;\r\n            padding: 10px;\r\n            height: 80px;\r\n        }\r\n\r\n        div.priorityDateOnLargeScreen {\r\n            display: flex;\r\n            position: relative;\r\n            top: 0;\r\n            max-width: 200px;\r\n            flex-direction: column;\r\n        }\r\n\r\n        .projectInputContainer {\r\n            max-width: 200px;\r\n        }\r\n\r\n        .projectInputContainer p input {\r\n            max-width: 200px;\r\n        }\r\n\r\n        .innerTaskContainer .edit {\r\n            max-width: 140px;\r\n        }\r\n\r\n        .projectInputContainer .PdescriptionInputContainer {\r\n            margin: 10px 0 0 0;\r\n        }\r\n\r\n        div#configPriorityDateOnMobile {\r\n            display: flex;\r\n            flex-direction: column;\r\n            max-width: 200px;\r\n            position: static;\r\n        }\r\n\r\n        #configPriorityDateOnMobile #priority, #datePicker {\r\n            padding: 2px;\r\n            border-radius: 6px;\r\n            max-width: 104px;\r\n            min-width: 80px;\r\n        }\r\n\r\n        #ProjectForm .footer {\r\n            display: flex;\r\n            flex-direction: column;\r\n            justify-content: space-between;\r\n            padding: 0 10px;\r\n            gap: 0;\r\n        }\r\n\r\n\r\n\r\n\r\n        #ProjectForm .projectButtonsContainer {\r\n            display: flex;\r\n            justify-content: space-between;\r\n            align-items: center;\r\n            padding: 0 10px;\r\n            gap: 0;\r\n        }\r\n\r\n        #form .formDetails {\r\n            display: flex;\r\n            justify-content: space-between;\r\n            align-items: center;\r\n            padding: 10px;\r\n            margin: 0;\r\n        }\r\n\r\n        #formFooterOnMobile {\r\n            display: flex;\r\n            flex-direction: column;\r\n            justify-content: space-between;\r\n            padding: 0 10px;\r\n        }\r\n\r\n\r\n        #formFooterOnMobile .buttons {\r\n            display: flex;\r\n            justify-content: space-between;\r\n            align-items: center;\r\n            padding: 0 10px;\r\n            margin: 0;\r\n            gap: 0;\r\n        }\r\n\r\n\r\n\r\n        .priorityDateLargeScreen {\r\n            display: flex;\r\n            flex-direction: column;\r\n        }\r\n\r\n        #form .inputs {\r\n            display: flex;\r\n            flex-direction: column;\r\n            max-width: 150px;\r\n\r\n        }\r\n\r\n        #form .first-inputContainer input, .PtitleInputContainer input {\r\n            max-width: 165px;\r\n            max-height: 15px;\r\n            border: none;\r\n            outline: none;\r\n            color: white;\r\n            margin: 10px 0;\r\n            background-color: inherit;\r\n        }\r\n\r\n        #form .second-inputContainer input, .PdescriptionInputContainer input {\r\n            max-width: 178px;\r\n            max-height: 15px;\r\n            border: none;\r\n            outline: none;\r\n            color: white;\r\n            background-color: inherit;\r\n            margin: 0;\r\n        }\r\n\r\n\r\n        #form .other-options-on-forms button, #configPriorityDateOnMobile #priority, #datePicker {\r\n            padding: 4px;\r\n            border-radius: 6px;\r\n            max-width: 104px;\r\n            min-width: 80px;\r\n        }\r\n\r\n    }\r\n\r\n    @media (min-width: 551px) and (max-width: 768px) {\r\n        body main {\r\n            display: flex;\r\n            flex-direction: column;\r\n            justify-content: center;\r\n\r\n        }\r\n\r\n\r\n        main header {\r\n\r\n            background-color: #fda4af;\r\n            text-align: center;\r\n            display: flex;\r\n            align-items: center;\r\n            justify-content: center;\r\n            gap: 10px;\r\n        }\r\n\r\n        main aside {\r\n            display: none;\r\n            border-radius: 5px;\r\n            background-color: #e2e8f0;\r\n            z-index: 2;\r\n        }\r\n\r\n        aside ul, ul select {\r\n            display: flex;\r\n            flex-direction: column;\r\n            color: white;\r\n            fill: white;\r\n        }\r\n\r\n        select#project-dropdown {\r\n            background-color: rgb(42, 40, 49);\r\n        }\r\n\r\n        main #Container {\r\n            display: flex;\r\n            flex-direction: column;\r\n            flex-wrap: wrap;\r\n            border-radius: 5px;\r\n            z-index: 1;\r\n\r\n        }\r\n\r\n        header .menuController {\r\n\r\n            display: block;\r\n            width: 40px;\r\n            height: 40px;\r\n\r\n        }\r\n\r\n\r\n\r\n\r\n        #toggleMenuIcon {\r\n            position: fixed;\r\n            top: 20px;\r\n            right: 20px;\r\n            width: 50px;\r\n            height: 50px;\r\n            background-color: #6f9e9e;\r\n            cursor: pointer;\r\n            display: flex;\r\n            justify-content: center;\r\n            align-items: center;\r\n            border-radius: 8px;\r\n            transition: top 0.3s;\r\n            z-index: 1000;\r\n\r\n            z-index: 1000;\r\n        }\r\n\r\n        #toggleMenuIcon::before {\r\n            content: '';\r\n            position: absolute;\r\n            width: 28px;\r\n            height: 2px;\r\n            background-color: #fff;\r\n            transform: translateY(-5px);\r\n            transition: 0.2s;\r\n        }\r\n\r\n        #toggleMenuIcon::after {\r\n            content: '';\r\n            position: absolute;\r\n            width: 28px;\r\n            height: 2px;\r\n            background-color: #fff;\r\n            transform: translateY(5px);\r\n            transition: 0.2s;\r\n        }\r\n\r\n        #toggleMenuIcon.active::before {\r\n            transform: translateY(0px) rotate(45deg);\r\n\r\n        }\r\n\r\n        #toggleMenuIcon.active::after {\r\n            transform: translateY(0px) rotate(-45deg);\r\n\r\n        }\r\n\r\n        aside#menu {\r\n            display: block;\r\n            position: fixed;\r\n            top: 0;\r\n            left: -220px;\r\n            width: 220px;\r\n            height: 100vh;\r\n            background-color: var(--background-color);\r\n            transition: 0.3s;\r\n\r\n        }\r\n\r\n        aside#menu.active {\r\n            left: 0;\r\n        }\r\n\r\n        aside ul {\r\n            display: flex;\r\n            flex-direction: column;\r\n            color: white;\r\n            fill: white;\r\n        }\r\n\r\n        header .menuController svg {\r\n            display: block;\r\n            width: 40px;\r\n            height: 40px;\r\n            fill: white;\r\n            background-color: black;\r\n            border-radius: 10px\r\n        }\r\n\r\n\r\n        #userlist #addTodoBtnContainer {\r\n            display: flex;\r\n            align-items: center;\r\n            gap: 5px;\r\n            margin: 27px 0 11px 26px;\r\n        }\r\n\r\n        #task {\r\n            display: flex;\r\n            align-items: center;\r\n            gap: 5px;\r\n            margin: 27px 0 11px 26px;\r\n        }\r\n\r\n        #userlist #addTodoBtnContainer svg {\r\n            background-color: #dc2626;\r\n            border-radius: 50%;\r\n            fill: white;\r\n        }\r\n\r\n        #userlist #addTodoBtnContainer :hover {\r\n            cursor: pointer;\r\n            -webkit-transform: scale(1.09);\r\n        }\r\n\r\n        #userlist #addTodoBtnContainer button {\r\n            border: 0;\r\n            font-size: 16px;\r\n            color: #b91c1c;\r\n            background-color: inherit;\r\n        }\r\n\r\n        #userlist #addTodoBtnContainer button:hover {\r\n            cursor: pointer;\r\n            -webkit-transform: scale(1.09);\r\n        }\r\n\r\n        div.listContainer {\r\n            display: flex;\r\n            gap: 5px;\r\n            max-width: 714px;\r\n\r\n            border-radius: 10px;\r\n            box-shadow: 1px 0px 3px 0px;\r\n            margin: 18px 60px;\r\n            padding: 15px;\r\n        }\r\n\r\n        #userlist .intialTextDisplay {\r\n            display: flex;\r\n            flex-direction: column;\r\n            justify-content: center;\r\n            align-items: center;\r\n            text-align: center;\r\n        }\r\n\r\n        .intialTextDisplay p {\r\n            max-width: 500px;\r\n            display: flex;\r\n            max-width: 500px;\r\n            flex-direction: column;\r\n            flex-wrap: wrap;\r\n        }\r\n\r\n        .intialTextDisplay img {\r\n            width: 100%;\r\n            height: auto;\r\n            padding: 20px;\r\n            border-radius: 41px;\r\n            object-fit: contain;\r\n        }\r\n\r\n        .inner_container #form {\r\n            background-color: #64748b;\r\n            border-radius: 10px;\r\n            height: 150px;\r\n            display: none;\r\n            max-width: 600px;\r\n\r\n            margin: 17px;\r\n        }\r\n\r\n\r\n        #form div.formDetails {\r\n            display: flex;\r\n            justify-content: space-between;\r\n            align-items: center;\r\n\r\n            padding: 10px;\r\n            margin: 0;\r\n        }\r\n\r\n        .priorityDateLargeScreen {\r\n            display: none;\r\n        }\r\n\r\n        #form .inputs {\r\n            max-width: 150px\r\n        }\r\n\r\n        #form .first-inputContainer input, .PtitleInputContainer input,\r\n        #form .second-inputContainer input, .PdescriptionInputContainer input {\r\n            max-width: 600px;\r\n            height: 25px;\r\n            border: none;\r\n            outline: none;\r\n            color: white;\r\n            margin: 10px 0 0 0;\r\n            background-color: inherit;\r\n        }\r\n\r\n\r\n\r\n        p.second-inputContainer {\r\n            margin: 0;\r\n        }\r\n\r\n        #form .buttons {\r\n            display: flex;\r\n            margin: 1px 23px;\r\n\r\n\r\n\r\n        }\r\n\r\n        #configPriorityDateOnMobile {\r\n            display: flex;\r\n            flex-direction: column;\r\n            position: static;\r\n\r\n        }\r\n\r\n\r\n        #form .other-options-on-forms button, #priority, #datePicker {\r\n            padding: 7px;\r\n            border-radius: 9px;\r\n        }\r\n\r\n        form#ProjectForm {\r\n\r\n\r\n            background-color: #64748b;\r\n            border-radius: 10px;\r\n            height: 150px;\r\n            display: none;\r\n            max-width: 693px;\r\n            padding-left: 1rem;\r\n            margin: 9px 61px;\r\n        }\r\n\r\n        div.projectFormDetails {\r\n            display: flex;\r\n            align-items: center;\r\n            justify-content: space-between;\r\n            top: 0;\r\n        }\r\n\r\n\r\n\r\n    }\r\n\r\n    */ .projectButtonsContainer {\r\n        display: flex;\r\n        justify-content: space-between;\r\n        align-items: center;\r\n    }\r\n\r\n    select#priority {\r\n        padding: 4px;\r\n        border-radius: 9px;\r\n    }\r\n\r\n    input#datePicker {\r\n\r\n        padding: 3px;\r\n        border-radius: 9px;\r\n    }\r\n\r\n\r\n    @media (min-width: 769px) and (max-width: 1000px) {\r\n\r\n        body main {\r\n\r\n            display: grid;\r\n\r\n        }\r\n\r\n\r\n        main header {\r\n            grid-area: 1 / 2 / 2 / 6;\r\n\r\n            background-color: #fda4af;\r\n            text-align: center;\r\n            display: flex;\r\n            align-items: center;\r\n            justify-content: center;\r\n            gap: 10px;\r\n        }\r\n\r\n        main aside {\r\n\r\n            border-radius: 5px;\r\n            background-color: #e2e8f0;\r\n        }\r\n\r\n        main #Container {\r\n            display: flex;\r\n            flex-direction: column;\r\n            flex-wrap: wrap;\r\n            border-radius: 5px;\r\n            z-index: 1;\r\n\r\n        }\r\n\r\n        header .menuController {\r\n\r\n            display: block;\r\n            width: 40px;\r\n            height: 40px;\r\n\r\n        }\r\n\r\n        header .menuController svg {\r\n            display: block;\r\n            width: 40px;\r\n            height: 40px;\r\n            fill: white;\r\n            background-color: black;\r\n            border-radius: 10px\r\n        }\r\n\r\n        #userlist .intialTextDisplay {\r\n            display: flex;\r\n            justify-content: center;\r\n            align-items: center;\r\n            text-align: center;\r\n        }\r\n\r\n        #userlist .intialTextDisplay p {\r\n            font-size: 1.2rem;\r\n            text-align: center;\r\n            font-weight: 500;\r\n            margin: 10px 0 0 0;\r\n            max-width: 600px;\r\n        }\r\n\r\n        #userlist #addTodoBtnContainer {\r\n            display: none;\r\n            align-items: center;\r\n            gap: 5px;\r\n            margin: 27px 0 11px 26px;\r\n        }\r\n\r\n        #task {\r\n            display: flex;\r\n            align-items: center;\r\n            gap: 5px;\r\n            margin: 27px 0 11px 26px;\r\n        }\r\n\r\n        #userlist #addTodoBtnContainer svg {\r\n            background-color: #dc2626;\r\n            border-radius: 50%;\r\n            fill: white;\r\n        }\r\n\r\n        #userlist #addTodoBtnContainer :hover {\r\n            cursor: pointer;\r\n            -webkit-transform: scale(1.09);\r\n        }\r\n\r\n        #userlist #addTodoBtnContainer button {\r\n            border: 0;\r\n            font-size: 16px;\r\n            color: #b91c1c;\r\n            background-color: inherit;\r\n        }\r\n\r\n        #userlist #addTodoBtnContainer button:hover {\r\n            cursor: pointer;\r\n            -webkit-transform: scale(1.09);\r\n        }\r\n\r\n        div.listContainer {\r\n            display: flex;\r\n            gap: 5px;\r\n            max-width: 714px;\r\n\r\n            border-radius: 10px;\r\n            box-shadow: 1px 0px 3px 0px;\r\n            margin: 18px 60px;\r\n            padding: 15px;\r\n        }\r\n\r\n\r\n\r\n\r\n\r\n        .inner_container #form {\r\n            background-color: #64748b;\r\n            border-radius: 10px;\r\n            height: 150px;\r\n            display: none;\r\n            max-width: 750px;\r\n\r\n            margin: 17px;\r\n        }\r\n\r\n\r\n        #form div.formDetails {\r\n            display: flex;\r\n            justify-content: space-between;\r\n            align-items: center;\r\n\r\n            padding: 9px 20px;\r\n            margin: 0;\r\n        }\r\n\r\n        .priorityDateLargeScreen {\r\n            display: none;\r\n        }\r\n\r\n        #form .inputs {\r\n            max-width: 150px\r\n        }\r\n\r\n        #form .first-inputContainer input, .PtitleInputContainer input {\r\n            max-width: 420px;\r\n            max-height: 60px;\r\n            border: none;\r\n            outline: none;\r\n            color: white;\r\n            background-color: inherit;\r\n            margin: 0;\r\n        }\r\n\r\n        #form .second-inputContainer input, .PdescriptionInputContainer input {\r\n            max-width: 420px;\r\n            max-height: 60px;\r\n            border: none;\r\n            outline: none;\r\n            color: rgb(90, 77, 77);\r\n            background-color: inherit;\r\n            margin: 0;\r\n        }\r\n\r\n\r\n        #form .buttons {\r\n            display: flex;\r\n            justify-content: space-between;\r\n            margin: 1px 33px\r\n        }\r\n\r\n        form#ProjectForm {\r\n            background-color: #64748b;\r\n            border-radius: 10px;\r\n            height: 150px;\r\n            display: none;\r\n            max-width: 693px;\r\n            padding-left: 1rem;\r\n            margin: 9px 61px;\r\n\r\n        }\r\n\r\n        div.projectFormDetails {\r\n            display: flex;\r\n            align-items: center;\r\n            justify-content: space-between;\r\n            top: 0;\r\n        }\r\n\r\n        div.priorityDateOnLargeScreen {\r\n            display: flex;\r\n            flex-direction: column;\r\n            justify-content: space-between;\r\n            align-items: center;\r\n            top: 0;\r\n\r\n\r\n        }\r\n\r\n        .projectButtonsContainer {\r\n            display: flex;\r\n            justify-content: space-between;\r\n            align-items: center;\r\n        }\r\n\r\n        #configPriorityDateOnMobile {\r\n            display: flex;\r\n            flex-direction: column;\r\n            position: static;\r\n        }\r\n\r\n        #form .other-options-on-forms button, #priority, #datePicker {\r\n            padding: 8px;\r\n            border-radius: 6px;\r\n            border: none;\r\n        }\r\n\r\n    }\r\n\r\n    main {\r\n        display: grid;\r\n        grid-template-columns: 190px 1fr;\r\n        grid-template-rows: 70px 570px;\r\n    }\r\n\r\n\r\n    header {\r\n        grid-area: 1 / 2 / 2 / 6;\r\n        background-color: #fda4af;\r\n        text-align: center;\r\n        display: flex;\r\n        align-items: center;\r\n        justify-content: center;\r\n    }\r\n\r\n    aside {\r\n        grid-area: 1/ 1/ 4/ 2;\r\n        border-radius: 5px;\r\n        background-color: #e2e8f0;\r\n\r\n    }\r\n\r\n    #Container {\r\n        grid-area: 2 / 2 / 3 / 4;\r\n\r\n        display: grid;\r\n        grid-template-columns: 100px 650px 350px;\r\n        border-radius: 5px;\r\n    }\r\n\r\n\r\n\r\n    .inner_container {\r\n        grid-area: 1 / 2 / 3 / 3;\r\n    }\r\n\r\n\r\n    .intialTextDisplay {\r\n        display: flex;\r\n        flex-direction: column;\r\n        justify-content: center;\r\n        align-items: center;\r\n        padding: 10px;\r\n    }\r\n\r\n    .intialTextDisplay p {\r\n        font-size: 1.2rem;\r\n        text-align: center;\r\n        font-weight: 500;\r\n        margin: 10px 0 0 0;\r\n    }\r\n\r\n    .intialTextDisplay img {\r\n        width: 100%;\r\n        height: auto;\r\n        border-radius: 30px;\r\n        padding: 20px;\r\n\r\n    }\r\n\r\n    #addTodoBtnContainer {\r\n        display: none;\r\n    }\r\n\r\n    .empty {\r\n        grid-area: 1 / 3 / 5 / 4;\r\n        background-color: #f8f8f8;\r\n        background-image: url('./images/Todo-1.jpg');\r\n        background-size: cover;\r\n        background-position: center;\r\n    }\r\n\r\n\r\n\r\n    .menuController {\r\n\r\n        display: none;\r\n        width: 40px;\r\n        height: 40px;\r\n    }\r\n\r\n    .checkBox {\r\n        -webkit-appearance: none;\r\n        -moz-appearance: none;\r\n        width: 20px;\r\n        height: 20px;\r\n        border: 1px solid #ccc;\r\n        border-radius: 3px;\r\n        outline: none;\r\n        cursor: pointer;\r\n        position: relative;\r\n\r\n    }\r\n\r\n\r\n    .checkBox::before {\r\n        content: \"\";\r\n        display: block;\r\n        position: absolute;\r\n        top: 50%;\r\n        left: 50%;\r\n        transform: translate(-50%, -50%);\r\n        font-size: 16px;\r\n        color: rgb(22, 252, 22);\r\n        opacity: 0;\r\n        transition: opacity 0.3s ease;\r\n    }\r\n\r\n    .checkBox:hover::before {\r\n        content: \"✓\";\r\n        opacity: 0.5;\r\n    }\r\n\r\n\r\n    svg {\r\n        width: 25px;\r\n        height: 25px;\r\n    }\r\n\r\n    #task {\r\n        display: flex;\r\n        align-items: center;\r\n        gap: 5px;\r\n        margin: 27px 0 11px 26px;\r\n    }\r\n\r\n\r\n\r\n    #task svg {\r\n        background-color: #dc2626;\r\n        border-radius: 50%;\r\n        fill: white;\r\n    }\r\n\r\n    #task :hover {\r\n        cursor: pointer;\r\n        -webkit-transform: scale(1.09);\r\n    }\r\n\r\n    #task button {\r\n        border: 0;\r\n        font-size: 16px;\r\n        color: #b91c1c;\r\n        background-color: inherit;\r\n    }\r\n\r\n    #task button:hover {\r\n        cursor: pointer;\r\n        -webkit-transform: scale(1.09);\r\n    }\r\n\r\n    button.deleteTask {\r\n        padding: 10px;\r\n        border: none;\r\n        border-radius: 7px;\r\n        font-size: 1.1rem;\r\n        background-color: #e0487c;\r\n        color: white;\r\n        transition: transform 0.2s ease-out;\r\n    }\r\n\r\n    button.deleteTask:hover {\r\n        transform: scale(1.1)\r\n    }\r\n\r\n    button.deleteTask:active {\r\n        transform: scale(0.9)\r\n    }\r\n\r\n\r\n\r\n\r\n    .listContainer {\r\n        display: flex;\r\n        gap: 5px;\r\n        max-width: 714px;\r\n\r\n        border-radius: 10px;\r\n        box-shadow: 1px 0px 3px 0px;\r\n        margin: 18px 18px;\r\n        padding: 15px;\r\n\r\n\r\n    }\r\n\r\n\r\n    .priorityDateOnLargeScreen {\r\n        display: flex;\r\n        flex-direction: column;\r\n        justify-content: center;\r\n        align-items: center;\r\n        max-width: 200px;\r\n    }\r\n\r\n    .projectButtonsContainer {\r\n        display: flex;\r\n        justify-content: space-between;\r\n    }\r\n\r\n    .projectButtonsContainer button {\r\n        border: none;\r\n        border-radius: 7px;\r\n        padding: 9px;\r\n    }\r\n\r\n\r\n    .excluded {\r\n        color: red;\r\n    }\r\n\r\n    .taskContainer {\r\n        display: flex;\r\n        flex: 1;\r\n        justify-content: space-between;\r\n    }\r\n\r\n\r\n\r\n    .taskTitle, .newProject-task-title, .editableSaveTaskEl {\r\n        margin: 0;\r\n        font-size: 18px;\r\n        text-decoration: none;\r\n        text-decoration-color: red;\r\n\r\n    }\r\n\r\n    .taskDescription, .newProject-description {\r\n        margin: 0;\r\n        font-size: 14px;\r\n\r\n    }\r\n\r\n    .taskPriority {\r\n        font-size: 19px;\r\n        border-radius: 6px;\r\n        background-color: #573d3d;\r\n        padding: 6px;\r\n        margin: 0 0 7px;\r\n        color: white;\r\n\r\n    }\r\n\r\n    .innerTaskHandler {\r\n        display: flex;\r\n        flex-direction: column;\r\n        justify-items: center;\r\n        justify-content: center;\r\n        align-items: center;\r\n        margin: 0px 15px 0 40px;\r\n    }\r\n\r\n    .inbox-container {\r\n        display: flex;\r\n        align-items: center;\r\n        gap: 5px;\r\n        margin: 0px 0 0 16px;\r\n        height: 26px;\r\n        padding: 9px;\r\n        border-radius: 5px 0px 0px 5px;\r\n    }\r\n\r\n    .inbox-container:hover {\r\n        background-color: var(--hover-color);\r\n    }\r\n\r\n\r\n    .inbox {\r\n        font-size: 20px;\r\n\r\n    }\r\n\r\n    .inboxListContainer {\r\n        display: flex;\r\n        gap: 5px;\r\n\r\n    }\r\n\r\n    .inboxTaskContainer {\r\n        display: flex;\r\n        flex: 1;\r\n        justify-content: space-between;\r\n    }\r\n\r\n    .inboxTaskTitle {\r\n        margin: 0;\r\n        font-size: 18px;\r\n    }\r\n\r\n    .inboxTaskDescription {\r\n        margin: 0;\r\n        font-size: 14px;\r\n\r\n    }\r\n\r\n    .inboxTaskPriority {\r\n        margin: 0 20px 0 0;\r\n        font-size: 20px;\r\n\r\n    }\r\n\r\n    .dueDate {\r\n        margin: 0;\r\n\r\n    }\r\n\r\n    .edit {\r\n        border: none;\r\n        outline: none;\r\n        font-size: 17px;\r\n        max-width: 110px;\r\n        margin: 0 0\r\n    }\r\n\r\n    #projects h3 {\r\n        margin: 0 0 0 10px;\r\n    }\r\n\r\n    #form {\r\n        background-color: #64748b;\r\n        border-radius: 10px;\r\n        height: 140px;\r\n        display: none;\r\n        padding-left: 1rem;\r\n        margin: 10px 10px 0 0;\r\n    }\r\n\r\n    .formDetails {\r\n        display: flex;\r\n        align-items: center;\r\n        justify-content: space-between;\r\n        margin: 12px 15px;\r\n    }\r\n\r\n    input#datePicker {\r\n        max-width: 118px;\r\n    }\r\n\r\n    .buttons {\r\n        display: flex;\r\n        justify-content: space-between;\r\n        margin: 1px 33px\r\n    }\r\n\r\n    .buttons button {\r\n        border: none;\r\n        border-radius: 7px;\r\n        padding: 7px;\r\n        transition: transform 0.2s ease-out\r\n    }\r\n\r\n    .buttons button:hover {\r\n        transform: scale(1.05)\r\n    }\r\n\r\n    #ProjectForm {\r\n        background-color: #64748b;\r\n        border-radius: 10px;\r\n        height: 150px;\r\n        display: none;\r\n        padding: 10px;\r\n        margin: 15px 15px 0 17px;\r\n    }\r\n\r\n    .projectFormDetails {\r\n        display: flex;\r\n        align-items: center;\r\n        justify-content: space-between;\r\n        top: 0;\r\n    }\r\n\r\n\r\n    .first-inputContainer input, .PtitleInputContainer input {\r\n        max-width: 600px;\r\n        height: 25px;\r\n        border: none;\r\n        outline: none;\r\n        color: white;\r\n        margin: 10px 0 0 0;\r\n        background-color: inherit;\r\n    }\r\n\r\n    .task-title, .description {\r\n        width: 350px;\r\n    }\r\n\r\n    .first-inputContainer input::placeholder, .PtitleInputContainer input::placeholder {\r\n        color: white;\r\n        padding: 0 10px;\r\n        opacity: 1;\r\n\r\n    }\r\n\r\n    .second-inputContainer input, .PdescriptionInputContainer input {\r\n        max-width: 600px;\r\n        height: 25px;\r\n        border: none;\r\n        outline: none;\r\n        color: white;\r\n        background-color: inherit;\r\n        margin: 0;\r\n    }\r\n\r\n    .second-inputContainer input::placeholder, .PdescriptionInputContainer input::placeholder {\r\n        padding: 0 10px;\r\n        color: white;\r\n        opacity: 1;\r\n\r\n    }\r\n\r\n    .first-inputContainer, .second-inputContainer {\r\n        margin: 10px 0 0 0;\r\n        font-size: 1rem;\r\n    }\r\n\r\n    .other-options-on-forms, .footer {}\r\n\r\n    .submitBtn:active {\r\n        transform: active scale(1.1);\r\n    }\r\n\r\n    .other-options-on-forms button, #priority, input#datePicker {\r\n        transition: transform .3s ease-in;\r\n        padding: 7px;\r\n        border-radius: 7px;\r\n        border: none;\r\n        background-color: #07c4dd;\r\n        color: white;\r\n        font-size: 15px;\r\n        font-weight: 600;\r\n    }\r\n\r\n    #priority {\r\n        margin: 10px 0 8px 0;\r\n    }\r\n\r\n    #projectPriority, .footer {\r\n        padding: 7px;\r\n        border-radius: 5px;\r\n        margin: 0 4px 5px 0;\r\n    }\r\n\r\n    .addProjectsContainer {\r\n        display: flex;\r\n\r\n        margin: 0 0 0 20px;\r\n        padding: 7px;\r\n        align-items: center;\r\n        gap: 10px;\r\n        height: 25px;\r\n        border-radius: 5px 0px 0px 5px;\r\n\r\n    }\r\n\r\n    .addProjectsContainer:hover {\r\n        background-color: var(--hover-color);\r\n    }\r\n\r\n    .addProjectsContainer svg {\r\n        width: 25px;\r\n        height: 25px;\r\n    }\r\n\r\n    #addNewProjectEl {\r\n        margin: 0;\r\n        font-size: 19px;\r\n    }\r\n\r\n\r\n    .project_text {\r\n        margin: 0 0 10px 17px;\r\n        display: flex;\r\n        align-self: center;\r\n        justify-self: center;\r\n        padding: 9px;\r\n        border-radius: 5px 0px 0px 5px;\r\n\r\n\r\n    }\r\n\r\n    .project_text:hover {\r\n        background-color: var(--hover-color);\r\n    }\r\n\r\n\r\n\r\n    #project-dropdown {\r\n        border: 0;\r\n        background-color: inherit;\r\n        margin: 5px 0 0 17px;\r\n        font-size: 18px;\r\n        font-weight: 550;\r\n        padding: 8px;\r\n        border-radius: 5px 0px 0px 5px;\r\n        max-width: 160px;\r\n\r\n    }\r\n\r\n    #project-dropdown:hover {\r\n        background-color: var(--hover-color);\r\n\r\n    }\r\n\r\n\r\n    #project-dropdown:focus {\r\n        border: none;\r\n        outline: none;\r\n    }\r\n\r\n    #newProjectsFormContainerEl {\r\n        display: flex;\r\n        justify-content: center;\r\n        align-items: center;\r\n        justify-items: center;\r\n\r\n\r\n    }\r\n\r\n    #ProjectsFormNameContainerEl {\r\n        display: flex;\r\n        justify-content: center;\r\n        align-items: center;\r\n        justify-items: center;\r\n    }\r\n\r\n\r\n    .inputNewprojectFormName {\r\n        display: none;\r\n        background-color: #cee3e3;\r\n        max-width: 400px;\r\n        max-height: 300px;\r\n        border-radius: 10px;\r\n        padding: 46px;\r\n        text-align: center;\r\n        margin: 60px 0 0 0;\r\n        box-shadow: 0px 9px 3px 0px;\r\n    }\r\n\r\n\r\n    .inputNewprojectFormName h2 {\r\n        margin: 0 0 10px 0;\r\n    }\r\n\r\n\r\n    .inputNewProjectName {\r\n        max-width: 350px;\r\n        max-height: 35px;\r\n        padding: 17px;\r\n        border: none;\r\n        border-radius: 7px;\r\n        font-size: 19px;\r\n    }\r\n\r\n    input.SaveProjectName {\r\n        padding: 9px;\r\n        border: none;\r\n        border-radius: 8px;\r\n        max-width: 100px;\r\n        height: 40px;\r\n        font-size: 19px;\r\n        background-color: rgb(240, 59, 134);\r\n        color: white;\r\n\r\n    }\r\n\r\n    .projectNameSaverBtnContainer {\r\n        margin: 10px 0;\r\n    }\r\n\r\n    .projectNameSaverBtnContainer button {\r\n        padding: 9px;\r\n        border: none;\r\n        border-radius: 8px;\r\n        width: 100px;\r\n        height: 40px;\r\n        font-size: 19px;\r\n    }\r\n\r\n    #ProjectsFormNameContainerEl .Cancel {\r\n        background-color: grey;\r\n        color: white;\r\n    }\r\n\r\n    #newProjectTasksContainer {\r\n        display: flex;\r\n        justify-content: center;\r\n        align-items: center;\r\n\r\n    }\r\n\r\n    #newProjectTasksInnerContainer {\r\n        display: flex;\r\n        justify-content: center;\r\n        align-items: center;\r\n        gap: 5px;\r\n        margin: 10px;\r\n        box-shadow: #5c5555 1px 3px 3px 1px;\r\n        border-radius: 10px;\r\n        padding: 10px;\r\n        width: 95px;\r\n        position: relative;\r\n        left: 250px;\r\n    }\r\n\r\n    svg.addTask {\r\n        border-radius: 50%;\r\n        fill: wheat;\r\n        background-color: red;\r\n    }\r\n\r\n    .newProjectAddBtn {\r\n        border: 0;\r\n        background-color: inherit;\r\n        font-weight: 500;\r\n\r\n    }\r\n\r\n    #ProjectdatePicker {\r\n        padding: 2px;\r\n        border-radius: 5px;\r\n        border: none;\r\n        height: 32px;\r\n\r\n    }\r\n\r\n\r\n    #submitBtnForProject {\r\n        padding: 7px;\r\n        border-radius: 9px;\r\n\r\n    }\r\n\r\n    #submitBtnForProject:active {\r\n        transform: scale(1.1)\r\n    }\r\n\r\n    .cancelForProjectBtn {\r\n        padding: 7px;\r\n        border-radius: 9px;\r\n    }",
            ],
            sourceRoot: "",
          },
        ]);
        // Exports
        /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ =
          ___CSS_LOADER_EXPORT___;

        /***/
      },

    /***/ "./node_modules/css-loader/dist/runtime/api.js":
      /*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
      /***/ (module) => {
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
                content += "@layer".concat(
                  item[5].length > 0 ? " ".concat(item[5]) : "",
                  " {",
                );
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
                  item[1] = "@layer"
                    .concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {")
                    .concat(item[1], "}");
                  item[5] = layer;
                }
              }
              if (media) {
                if (!item[2]) {
                  item[2] = media;
                } else {
                  item[1] = "@media "
                    .concat(item[2], " {")
                    .concat(item[1], "}");
                  item[2] = media;
                }
              }
              if (supports) {
                if (!item[4]) {
                  item[4] = "".concat(supports);
                } else {
                  item[1] = "@supports ("
                    .concat(item[4], ") {")
                    .concat(item[1], "}");
                  item[4] = supports;
                }
              }
              list.push(item);
            }
          };
          return list;
        };

        /***/
      },

    /***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
      /*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
      /***/ (module) => {
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
            return '"'.concat(
              url.replace(/"/g, '\\"').replace(/\n/g, "\\n"),
              '"',
            );
          }
          return url;
        };

        /***/
      },

    /***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
      /*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
      /***/ (module) => {
        module.exports = function (item) {
          var content = item[1];
          var cssMapping = item[3];
          if (!cssMapping) {
            return content;
          }
          if (typeof btoa === "function") {
            var base64 = btoa(
              unescape(encodeURIComponent(JSON.stringify(cssMapping))),
            );
            var data =
              "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(
                base64,
              );
            var sourceMapping = "/*# ".concat(data, " */");
            return [content].concat([sourceMapping]).join("\n");
          }
          return [content].join("\n");
        };

        /***/
      },

    /***/ "./src/styles.css":
      /*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__,
      ) => {
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ default: () => __WEBPACK_DEFAULT_EXPORT__,
          /* harmony export */
        });
        /* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(
            /*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js",
          );
        /* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default =
          /*#__PURE__*/ __webpack_require__.n(
            _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__,
          );
        /* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ =
          __webpack_require__(
            /*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js",
          );
        /* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default =
          /*#__PURE__*/ __webpack_require__.n(
            _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__,
          );
        /* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ =
          __webpack_require__(
            /*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js",
          );
        /* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default =
          /*#__PURE__*/ __webpack_require__.n(
            _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__,
          );
        /* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ =
          __webpack_require__(
            /*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js",
          );
        /* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default =
          /*#__PURE__*/ __webpack_require__.n(
            _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__,
          );
        /* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ =
          __webpack_require__(
            /*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js",
          );
        /* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default =
          /*#__PURE__*/ __webpack_require__.n(
            _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__,
          );
        /* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ =
          __webpack_require__(
            /*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js",
          );
        /* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default =
          /*#__PURE__*/ __webpack_require__.n(
            _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__,
          );
        /* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ =
          __webpack_require__(
            /*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles.css",
          );

        var options = {};

        options.styleTagTransform =
          _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default();
        options.setAttributes =
          _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default();
        options.insert =
          _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(
            null,
            "head",
          );
        options.domAPI =
          _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default();
        options.insertStyleElement =
          _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default();

        var update =
          _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(
            _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[
              "default"
            ],
            options,
          );

        /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ =
          _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[
            "default"
          ] &&
          _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[
            "default"
          ].locals
            ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[
                "default"
              ].locals
            : undefined;

        /***/
      },

    /***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
      /*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
      /***/ (module) => {
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
              layer: item[5],
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
                references: 1,
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
              if (
                newObj.css === obj.css &&
                newObj.media === obj.media &&
                newObj.sourceMap === obj.sourceMap &&
                newObj.supports === obj.supports &&
                newObj.layer === obj.layer
              ) {
                return;
              }
              api.update((obj = newObj));
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

        /***/
      },

    /***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
      /*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
      /***/ (module) => {
        var memo = {};

        /* istanbul ignore next  */
        function getTarget(target) {
          if (typeof memo[target] === "undefined") {
            var styleTarget = document.querySelector(target);

            // Special case to return head of iframe instead of iframe itself
            if (
              window.HTMLIFrameElement &&
              styleTarget instanceof window.HTMLIFrameElement
            ) {
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
            throw new Error(
              "Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.",
            );
          }
          target.appendChild(style);
        }
        module.exports = insertBySelector;

        /***/
      },

    /***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
      /*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
      /***/ (module) => {
        /* istanbul ignore next  */
        function insertStyleElement(options) {
          var element = document.createElement("style");
          options.setAttributes(element, options.attributes);
          options.insert(element, options.options);
          return element;
        }
        module.exports = insertStyleElement;

        /***/
      },

    /***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
      /*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
      /***/ (module, __unused_webpack_exports, __webpack_require__) => {
        /* istanbul ignore next  */
        function setAttributesWithoutAttributes(styleElement) {
          var nonce = true ? __webpack_require__.nc : 0;
          if (nonce) {
            styleElement.setAttribute("nonce", nonce);
          }
        }
        module.exports = setAttributesWithoutAttributes;

        /***/
      },

    /***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
      /*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
      /***/ (module) => {
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
            css += "@layer".concat(
              obj.layer.length > 0 ? " ".concat(obj.layer) : "",
              " {",
            );
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
            css +=
              "\n/*# sourceMappingURL=data:application/json;base64,".concat(
                btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))),
                " */",
              );
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
              remove: function remove() {},
            };
          }
          var styleElement = options.insertStyleElement(options);
          return {
            update: function update(obj) {
              apply(styleElement, options, obj);
            },
            remove: function remove() {
              removeStyleElement(styleElement);
            },
          };
        }
        module.exports = domAPI;

        /***/
      },

    /***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
      /*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
      /***/ (module) => {
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

        /***/
      },

    /***/ "./src/dom-El-2.js":
      /*!*************************!*\
  !*** ./src/dom-El-2.js ***!
  \*************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__,
      ) => {
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ createNewProjectTaskBtn: () =>
            /* binding */ createNewProjectTaskBtn,
          /* harmony export */ displayTask: () => /* binding */ displayTask,
          /* harmony export */ editTask: () => /* binding */ editTask,
          /* harmony export */ getUserTodo: () => /* binding */ getUserTodo,
          /* harmony export */ getnewProjectInputName: () =>
            /* binding */ getnewProjectInputName,
          /* harmony export */ inputNewprojectFormName: () =>
            /* binding */ inputNewprojectFormName,
          /* harmony export */ saveEditedTask: () =>
            /* binding */ saveEditedTask,
          /* harmony export */
        });
        /* harmony import */ var _dom_El__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(/*! ./dom-El */ "./src/dom-El.js");
        // import { myProjects } from './dom-El'

        // import { editTask } from "./logics";

        const myProjects = document.querySelector("#projects h3");
        const screenContainer = document.querySelector("#Container");
        const userList = document.querySelector("#userlist");
        const addProjectsContainer = document.querySelector(
          ".addProjectsContainer",
        );
        const newProjectsFormContainerEl = document.querySelector(
          "#newProjectsFormContainerEl",
        );
        const inputNewprojectFormName = document.querySelector(
          ".inputNewprojectFormName",
        );
        const newProjectNameRequest = document.querySelector(
          ".newProjectNameRequest",
        );
        const newProjectNameTitle =
          document.querySelector(".headerTextContent");
        const SaveProjectName = document.querySelector(".SaveProjectName");
        const newProjectTask = document.querySelector(".newProjectTask");
        const newProjectTasksContainer = document.createElement("div");
        const newProjectTasksInnerContainer = document.createElement("div");

        const newProjectAddBtn = document.createElement("button");
        const submitTaskBtn = document.querySelector("#submitBtnForProject");
        const cancelTaskBtn = document.querySelector(".cancelForProjectBtn");
        const displayProjectTodos = document.querySelector(
          "#displayProjectTodos",
        );

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
          const inputNewProjectName = document.querySelector(
            ".inputNewProjectName",
          );
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

        function createNewProjectTaskBtn() {
          newProjectTasksContainer.setAttribute(
            "id",
            "newProjectTasksContainer",
          );
          newProjectTasksInnerContainer.setAttribute(
            "id",
            "newProjectTasksInnerContainer",
          );

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
          pathElement.setAttribute(
            "d",
            "M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z",
          );
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
          currentProjectName =
            JSON.parse(localStorage.getItem("projects")) || [];
          const currentProject =
            currentProjectName[currentProjectName.length - 1];
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
          let projectTodos =
            JSON.parse(localStorage.getItem(projectName)) || [];

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
        projectForm.addEventListener("submit", (event) =>
          event.preventDefault(),
        );

        /***/
      },

    /***/ "./src/dom-El.js":
      /*!***********************!*\
  !*** ./src/dom-El.js ***!
  \***********************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__,
      ) => {
        __webpack_require__.r(__webpack_exports__);
        /* harmony export */ __webpack_require__.d(__webpack_exports__, {
          /* harmony export */ myProjects: () => /* binding */ myProjects,
          /* harmony export */
        });
        /* harmony import */ var _dom_El_2__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(/*! ./dom-El-2 */ "./src/dom-El-2.js");

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

          let newProjectBtn = (0,
          _dom_El_2__WEBPACK_IMPORTED_MODULE_0__.createNewProjectTaskBtn)();
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
              `Input should be less or equal to the 35 characters, you have entered ${
                taskInputValue.length
              } characters`,
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

          if (
            _dom_El_2__WEBPACK_IMPORTED_MODULE_0__.inputNewprojectFormName.style
              .display === "block"
          ) {
            _dom_El_2__WEBPACK_IMPORTED_MODULE_0__.inputNewprojectFormName.style.display =
              "none";
          }
          projectForm.style.display = "none";
        }
        inbox.addEventListener("click", displayInboxForm);

        /***/
      },

    /***/ "./src/responsive.js":
      /*!***************************!*\
  !*** ./src/responsive.js ***!
  \***************************/
      /***/ (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__,
      ) => {
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */ var _dom_El_2__WEBPACK_IMPORTED_MODULE_0__ =
          __webpack_require__(/*! ./dom-El-2 */ "./src/dom-El-2.js");

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

        /***/
      },

    /***/ "./src/images/Todo-1.jpg":
      /*!*******************************!*\
  !*** ./src/images/Todo-1.jpg ***!
  \*******************************/
      /***/ (module, __unused_webpack_exports, __webpack_require__) => {
        module.exports = __webpack_require__.p + "3916b1eee65e53d7f1df.jpg";

        /***/
      },

    /******/
  };
  /************************************************************************/
  /******/ // The module cache
  /******/ var __webpack_module_cache__ = {};
  /******/
  /******/ // The require function
  /******/ function __webpack_require__(moduleId) {
    /******/ // Check if module is in cache
    /******/ var cachedModule = __webpack_module_cache__[moduleId];
    /******/ if (cachedModule !== undefined) {
      /******/ return cachedModule.exports;
      /******/
    }
    /******/ // Create a new module (and put it into the cache)
    /******/ var module = (__webpack_module_cache__[moduleId] = {
      /******/ id: moduleId,
      /******/ // no module.loaded needed
      /******/ exports: {},
      /******/
    });
    /******/
    /******/ // Execute the module function
    /******/ __webpack_modules__[moduleId](
      module,
      module.exports,
      __webpack_require__,
    );
    /******/
    /******/ // Return the exports of the module
    /******/ return module.exports;
    /******/
  }
  /******/
  /******/ // expose the modules object (__webpack_modules__)
  /******/ __webpack_require__.m = __webpack_modules__;
  /******/
  /************************************************************************/
  /******/ /* webpack/runtime/compat get default export */
  /******/ (() => {
    /******/ // getDefaultExport function for compatibility with non-harmony modules
    /******/ __webpack_require__.n = (module) => {
      /******/ var getter =
        module && module.__esModule
          ? /******/ () => module["default"]
          : /******/ () => module;
      /******/ __webpack_require__.d(getter, { a: getter });
      /******/ return getter;
      /******/
    };
    /******/
  })();
  /******/
  /******/ /* webpack/runtime/define property getters */
  /******/ (() => {
    /******/ // define getter functions for harmony exports
    /******/ __webpack_require__.d = (exports, definition) => {
      /******/ for (var key in definition) {
        /******/ if (
          __webpack_require__.o(definition, key) &&
          !__webpack_require__.o(exports, key)
        ) {
          /******/ Object.defineProperty(exports, key, {
            enumerable: true,
            get: definition[key],
          });
          /******/
        }
        /******/
      }
      /******/
    };
    /******/
  })();
  /******/
  /******/ /* webpack/runtime/global */
  /******/ (() => {
    /******/ __webpack_require__.g = (function () {
      /******/ if (typeof globalThis === "object") return globalThis;
      /******/ try {
        /******/ return this || new Function("return this")();
        /******/
      } catch (e) {
        /******/ if (typeof window === "object") return window;
        /******/
      }
      /******/
    })();
    /******/
  })();
  /******/
  /******/ /* webpack/runtime/hasOwnProperty shorthand */
  /******/ (() => {
    /******/ __webpack_require__.o = (obj, prop) =>
      Object.prototype.hasOwnProperty.call(obj, prop);
    /******/
  })();
  /******/
  /******/ /* webpack/runtime/make namespace object */
  /******/ (() => {
    /******/ // define __esModule on exports
    /******/ __webpack_require__.r = (exports) => {
      /******/ if (typeof Symbol !== "undefined" && Symbol.toStringTag) {
        /******/ Object.defineProperty(exports, Symbol.toStringTag, {
          value: "Module",
        });
        /******/
      }
      /******/ Object.defineProperty(exports, "__esModule", { value: true });
      /******/
    };
    /******/
  })();
  /******/
  /******/ /* webpack/runtime/publicPath */
  /******/ (() => {
    /******/ var scriptUrl;
    /******/ if (__webpack_require__.g.importScripts)
      scriptUrl = __webpack_require__.g.location + "";
    /******/ var document = __webpack_require__.g.document;
    /******/ if (!scriptUrl && document) {
      /******/ if (document.currentScript)
        /******/ scriptUrl = document.currentScript.src;
      /******/ if (!scriptUrl) {
        /******/ var scripts = document.getElementsByTagName("script");
        /******/ if (scripts.length) {
          /******/ var i = scripts.length - 1;
          /******/ while (
            i > -1 &&
            (!scriptUrl || !/^http(s?):/.test(scriptUrl))
          )
            scriptUrl = scripts[i--].src;
          /******/
        }
        /******/
      }
      /******/
    }
    /******/ // When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
    /******/ // or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
    /******/ if (!scriptUrl)
      throw new Error("Automatic publicPath is not supported in this browser");
    /******/ scriptUrl = scriptUrl
      .replace(/#.*$/, "")
      .replace(/\?.*$/, "")
      .replace(/\/[^\/]+$/, "/");
    /******/ __webpack_require__.p = scriptUrl;
    /******/
  })();
  /******/
  /******/ /* webpack/runtime/jsonp chunk loading */
  /******/ (() => {
    /******/ __webpack_require__.b = document.baseURI || self.location.href;
    /******/
    /******/ // object to store loaded and loading chunks
    /******/ // undefined = chunk not loaded, null = chunk preloaded/prefetched
    /******/ // [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
    /******/ var installedChunks = {
      /******/ main: 0,
      /******/
    };
    /******/
    /******/ // no chunk on demand loading
    /******/
    /******/ // no prefetching
    /******/
    /******/ // no preloaded
    /******/
    /******/ // no HMR
    /******/
    /******/ // no HMR manifest
    /******/
    /******/ // no on chunks loaded
    /******/
    /******/ // no jsonp function
    /******/
  })();
  /******/
  /******/ /* webpack/runtime/nonce */
  /******/ (() => {
    /******/ __webpack_require__.nc = undefined;
    /******/
  })();
  /******/
  /************************************************************************/
  var __webpack_exports__ = {};
  /*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
  __webpack_require__.r(__webpack_exports__);
  /* harmony import */ var _src_styles_css__WEBPACK_IMPORTED_MODULE_0__ =
    __webpack_require__(/*! ../src/styles.css */ "./src/styles.css");
  /* harmony import */ var _dom_El__WEBPACK_IMPORTED_MODULE_1__ =
    __webpack_require__(/*! ./dom-El */ "./src/dom-El.js");
  /* harmony import */ var _dom_El_2__WEBPACK_IMPORTED_MODULE_2__ =
    __webpack_require__(/*! ./dom-El-2 */ "./src/dom-El-2.js");
  /* harmony import */ var _responsive__WEBPACK_IMPORTED_MODULE_3__ =
    __webpack_require__(/*! ./responsive */ "./src/responsive.js");

  /******/
})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzBHO0FBQ2pCO0FBQ087QUFDaEcsNENBQTRDLG1IQUFzQztBQUNsRiw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GLHlDQUF5QyxzRkFBK0I7QUFDeEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdDQUFnQyxtQ0FBbUM7QUFDbkU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSyxPQUFPLGlGQUFpRixVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsV0FBVyxTQUFTLEtBQUssVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLGNBQWMsV0FBVyxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssYUFBYSxPQUFPLEtBQUssYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLFdBQVcsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLFFBQVEsS0FBSyxVQUFVLFVBQVUsVUFBVSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLE1BQU0sTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsY0FBYyxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksY0FBYyxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksUUFBUSxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLFdBQVcsWUFBWSxhQUFhLFVBQVUsS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsY0FBYyxRQUFRLEtBQUssWUFBWSxRQUFRLEtBQUssWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsV0FBVyxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksV0FBVyxVQUFVLFVBQVUsUUFBUSxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsU0FBUyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFFBQVEsS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsVUFBVSxRQUFRLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksY0FBYyxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsVUFBVSxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsVUFBVSxVQUFVLFlBQVksV0FBVyxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxPQUFPLE1BQU0sS0FBSyxLQUFLLFVBQVUsWUFBWSxjQUFjLFFBQVEsTUFBTSxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxZQUFZLE1BQU0sTUFBTSxVQUFVLFVBQVUsV0FBVyxVQUFVLEtBQUssVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsWUFBWSxVQUFVLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxhQUFhLE9BQU8sS0FBSyxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLGNBQWMsT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxNQUFNLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxXQUFXLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFVBQVUsYUFBYSxXQUFXLFFBQVEsS0FBSyxVQUFVLFlBQVksY0FBYyxXQUFXLFVBQVUsTUFBTSxLQUFLLFVBQVUsT0FBTyxLQUFLLEtBQUssTUFBTSxNQUFNLFlBQVksV0FBVyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsU0FBUyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsZUFBZSxPQUFPLEtBQUssVUFBVSxZQUFZLGNBQWMsUUFBUSxLQUFLLFVBQVUsWUFBWSxPQUFPLE9BQU8sWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxRQUFRLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sTUFBTSxVQUFVLFlBQVksUUFBUSxNQUFNLE1BQU0sV0FBVyxRQUFRLEtBQUssYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsV0FBVyxNQUFNLE1BQU0sWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLFlBQVksTUFBTSxNQUFNLFVBQVUsVUFBVSxXQUFXLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksTUFBTSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsV0FBVyxLQUFLLFlBQVksYUFBYSxXQUFXLFVBQVUsYUFBYSxXQUFXLFFBQVEsS0FBSyxVQUFVLFlBQVksY0FBYyxhQUFhLFdBQVcsTUFBTSxLQUFLLFVBQVUsT0FBTyxLQUFLLEtBQUssTUFBTSxLQUFLLFlBQVksYUFBYSxXQUFXLFVBQVUsVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxhQUFhLFdBQVcsT0FBTyxLQUFLLFVBQVUsWUFBWSxNQUFNLE1BQU0sS0FBSyxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksYUFBYSxjQUFjLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsT0FBTyxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsUUFBUSxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsY0FBYyxPQUFPLEtBQUssYUFBYSxXQUFXLFlBQVksYUFBYSxTQUFTLEtBQUssWUFBWSxRQUFRLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxZQUFZLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsU0FBUyxNQUFNLFVBQVUsVUFBVSxVQUFVLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsYUFBYSxRQUFRLEtBQUssVUFBVSxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksV0FBVyxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFFBQVEsS0FBSyxVQUFVLFVBQVUsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksU0FBUyxLQUFLLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssS0FBSyxNQUFNLEtBQUssS0FBSyxTQUFTLEtBQUssVUFBVSxVQUFVLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxRQUFRLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFFBQVEsS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxTQUFTLEtBQUssVUFBVSxVQUFVLFlBQVksY0FBYyxPQUFPLEtBQUssVUFBVSxXQUFXLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsV0FBVyxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksV0FBVyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksUUFBUSxLQUFLLFdBQVcsT0FBTyxLQUFLLFVBQVUsV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxPQUFPLEtBQUssVUFBVSxXQUFXLE9BQU8sS0FBSyxZQUFZLFlBQVksT0FBTyxLQUFLLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksTUFBTSxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxNQUFNLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxLQUFLLE1BQU0sS0FBSyxLQUFLLE1BQU0sS0FBSyxZQUFZLGFBQWEsV0FBVyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxVQUFVLFdBQVcsTUFBTSxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxXQUFXLE1BQU0sS0FBSyxZQUFZLFdBQVcsT0FBTyxhQUFhLE1BQU0sWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksV0FBVyxZQUFZLFdBQVcsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssV0FBVyxZQUFZLFdBQVcsWUFBWSxXQUFXLFVBQVUsYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLE9BQU8sS0FBSyxVQUFVLFVBQVUsUUFBUSxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsV0FBVyxjQUFjLE9BQU8sS0FBSyxZQUFZLFNBQVMsS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksV0FBVyxZQUFZLGNBQWMsT0FBTyxLQUFLLGFBQWEsUUFBUSxLQUFLLFVBQVUsVUFBVSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsZUFBZSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxRQUFRLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsUUFBUSxLQUFLLFlBQVksUUFBUSxLQUFLLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxXQUFXLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLFlBQVksT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLFdBQVcsVUFBVSxVQUFVLE9BQU8sS0FBSyxZQUFZLFdBQVcsT0FBTyxLQUFLLFVBQVUsWUFBWSxjQUFjLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksY0FBYyxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsV0FBVyxRQUFRLEtBQUssVUFBVSxh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QyxZQUFZLFdBQVc7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FB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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDeGxCQTtBQUN5QztBQUNhO0FBQ0Q7QUFDQTtBQUNBO0FBQ3JEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0Isa0VBQXVCO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQSxJQUFJO0FBQ0o7QUFDQSxvRkFBb0YsOEJBQThCO0FBQ2xIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4QkFBOEIsY0FBYztBQUM1QyxtQ0FBbUMsb0JBQW9CO0FBQ3ZELGdDQUFnQyxpQkFBaUI7QUFDakQsMkJBQTJCLGdCQUFnQjtBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNLDhEQUF1QjtBQUM3QixJQUFJLDhEQUF1QjtBQUMzQjtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ25icUQ7QUFDckQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDMUNBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7Ozs7V0N6QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDbEJBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7Ozs7V0NyQkE7Ozs7Ozs7Ozs7Ozs7QUNBMkI7QUFDRTtBQUNHO0FBQ007QUFDdEM7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9zdHlsZXMuY3NzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzLmNzcz80NGIyIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RvbS1FbC0yLmpzIiwid2VicGFjazovLy8uL3NyYy9kb20tRWwuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Jlc3BvbnNpdmUuanMiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4vaW1hZ2VzL1RvZG8tMS5qcGdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYCAgICBib2R5IHtcclxuICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgfVxyXG5cclxuICAgIDpyb290IHtcclxuICAgICAgICAtLWhvdmVyLWNvbG9yOiAjZmRhNGFmO1xyXG4gICAgICAgIC0tYmFja2dyb3VuZC1jb2xvcjogIzZmOWU5ZTtcclxuICAgIH1cclxuXHJcbiAgICAqIHtcclxuICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG5cclxuICAgICAgICBmb250LWZhbWlseTogXCJSb2JvdG9cIiwgc2Fucy1zZXJpZjtcclxuICAgICAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgIH1cclxuXHJcbiAgICBAbWVkaWEgKG1heC13aWR0aDogNTUwcHgpIHtcclxuXHJcbiAgICAgICAgYm9keSBtYWluIHtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgIHotaW5kZXg6IDE7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBtYWluIGhlYWRlciB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZGE0YWY7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGdhcDogMTBweDtcclxuICAgICAgICB9XHJcblxyXG5cclxuXHJcblxyXG4gICAgICAgICN0b2dnbGVNZW51SWNvbiB7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgICAgICAgICAgdG9wOiAyMHB4O1xyXG4gICAgICAgICAgICByaWdodDogMjBweDtcclxuICAgICAgICAgICAgd2lkdGg6IDYwcHg7XHJcbiAgICAgICAgICAgIGhlaWdodDogNjBweDtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzZiODg4ODtcclxuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gICAgICAgICAgICB0cmFuc2l0aW9uOiB0b3AgMC4zcztcclxuXHJcbiAgICAgICAgICAgIHotaW5kZXg6IDEwMDA7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAjdG9nZ2xlTWVudUljb246OmJlZm9yZSB7XHJcbiAgICAgICAgICAgIGNvbnRlbnQ6ICcnO1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgIHdpZHRoOiAyOHB4O1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDJweDtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01cHgpO1xyXG4gICAgICAgICAgICB0cmFuc2l0aW9uOiAwLjJzO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgI3RvZ2dsZU1lbnVJY29uOjphZnRlciB7XHJcbiAgICAgICAgICAgIGNvbnRlbnQ6ICcnO1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgIHdpZHRoOiAyOHB4O1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDJweDtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDVweCk7XHJcbiAgICAgICAgICAgIHRyYW5zaXRpb246IDAuMnM7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAjdG9nZ2xlTWVudUljb24uYWN0aXZlOjpiZWZvcmUge1xyXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMHB4KSByb3RhdGUoNDVkZWcpO1xyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICN0b2dnbGVNZW51SWNvbi5hY3RpdmU6OmFmdGVyIHtcclxuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDBweCkgcm90YXRlKC00NWRlZyk7XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgYXNpZGUjbWVudSB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICAgICAgICAgIHRvcDogMDtcclxuICAgICAgICAgICAgbGVmdDogLTIyMHB4O1xyXG4gICAgICAgICAgICB3aWR0aDogMjIwcHg7XHJcbiAgICAgICAgICAgIGhlaWdodDogMTAwdmg7XHJcbiAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgICAgZmlsdGVyOiB3aGl0ZTtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzc5ODlhMTtcclxuICAgICAgICAgICAgdHJhbnNpdGlvbjogMC4zcztcclxuICAgICAgICAgICAgei1pbmRleDogMTAwMDtcclxuICAgICAgICAgICAgZmlsbDogd2hpdGU7XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgYXNpZGUjbWVudS5hY3RpdmUge1xyXG4gICAgICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbWFpbiBhc2lkZSB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2UyZThmMDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIG1haW4gI0NvbnRhaW5lciB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgIGhlYWRlciAubWVudUNvbnRyb2xsZXIge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgd2lkdGg6IDQwcHg7XHJcbiAgICAgICAgICAgIGhlaWdodDogNDBweDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGhlYWRlciAubWVudUNvbnRyb2xsZXIgc3ZnIHtcclxuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgIHdpZHRoOiA0MHB4O1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICAgICAgICAgIGZpbGw6IHdoaXRlO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweFxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgI3VzZXJsaXN0IHtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgICAgbWF4LXdpZHRoOiA1NTBweDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGRpdi5saXN0Q29udGFpbmVyIHtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgZ2FwOiA1cHg7XHJcbiAgICAgICAgICAgIG1heC13aWR0aDogNTE1cHg7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IDFweCAwcHggM3B4IDBweDtcclxuICAgICAgICAgICAgbWFyZ2luOiAxNHB4IDE0cHggMCAxOXB4O1xyXG5cclxuICAgICAgICAgICAgcGFkZGluZzogMTBweDtcclxuXHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgI3VzZXJsaXN0IC5pbnRpYWxUZXh0RGlzcGxheSB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuaW50aWFsVGV4dERpc3BsYXkgaW1nIHtcclxuICAgICAgICAgICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDE4cHg7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDMwcHg7XHJcbiAgICAgICAgICAgIG9iamVjdC1maXQ6IGNvbnRhaW47XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgI3VzZXJsaXN0ICNhZGRUb2RvQnRuQ29udGFpbmVyIHtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgZ2FwOiA1cHg7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMjdweCAwIDExcHggMjZweDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICN0YXNrIHtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgZ2FwOiA1cHg7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMjdweCAwIDExcHggMjZweDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICN1c2VybGlzdCAjYWRkVG9kb0J0bkNvbnRhaW5lciBzdmcge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGMyNjI2O1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgICAgIGZpbGw6IHdoaXRlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgI3VzZXJsaXN0ICNhZGRUb2RvQnRuQ29udGFpbmVyIDpob3ZlciB7XHJcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEuMDkpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgI3VzZXJsaXN0ICNhZGRUb2RvQnRuQ29udGFpbmVyIGJ1dHRvbiB7XHJcbiAgICAgICAgICAgIGJvcmRlcjogMDtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgICAgICBjb2xvcjogI2I5MWMxYztcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogaW5oZXJpdDtcclxuICAgICAgICAgICAgdHJhbnNpdGlvbjogMC4zcztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICN1c2VybGlzdCAjYWRkVG9kb0J0bkNvbnRhaW5lciBidXR0b246aG92ZXIge1xyXG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxLjA5KTtcclxuICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICAuaW5uZXJfY29udGFpbmVyICNmb3JtIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzY0NzQ4YjtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgICAgICAgICAgbWF4LWhlaWdodDogMTM1cHg7XHJcbiAgICAgICAgICAgIG1heC13aWR0aDogNTE1cHggIWltcG9ydGFudDtcclxuICAgICAgICAgICAgaGVpZ2h0OiAxNDBweDtcclxuICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAxcmVtO1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICAgICAgICBtYXgtd2lkdGg6IDQ4MHB4O1xyXG4gICAgICAgICAgICBtYXJnaW46IDEwcHggMTBweCAwIDEwcHg7XHJcbiAgICAgICAgfVxyXG5cclxuXHJcblxyXG5cclxuICAgICAgICBkaXYuaW5wdXROZXdwcm9qZWN0Rm9ybU5hbWUge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2VlM2UzO1xyXG4gICAgICAgICAgICBtYXgtd2lkdGg6IDMwMHB4O1xyXG4gICAgICAgICAgICBtYXgtaGVpZ2h0OiAzMDBweDtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgICAgICAgICAgcGFkZGluZzogMjVweDtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICBtYXJnaW46IDYwcHggMCAwIDA7XHJcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IDBweCA5cHggM3B4IDBweDtcclxuXHJcbiAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgLmlucHV0TmV3cHJvamVjdEZvcm1OYW1lIGgyIHtcclxuICAgICAgICAgICAgbWFyZ2luOiAwIDAgMTBweCAwO1xyXG4gICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgIC5pbnB1dE5ld3Byb2plY3RGb3JtTmFtZSAuaW5wdXROZXdQcm9qZWN0TmFtZSB7XHJcbiAgICAgICAgICAgIG1heC13aWR0aDogMzAwcHg7XHJcbiAgICAgICAgICAgIG1heC1oZWlnaHQ6IDM1cHg7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDE0cHg7XHJcbiAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogN3B4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaW5wdXQuU2F2ZVByb2plY3ROYW1lIHtcclxuICAgICAgICAgICAgcGFkZGluZzogOXB4O1xyXG4gICAgICAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICAgICAgICAgICAgbWF4LXdpZHRoOiAxMDBweDtcclxuICAgICAgICAgICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDE5cHg7XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLnByb2plY3ROYW1lU2F2ZXJCdG5Db250YWluZXIge1xyXG4gICAgICAgICAgICBtYXJnaW46IDEwcHggMDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5wcm9qZWN0TmFtZVNhdmVyQnRuQ29udGFpbmVyIGJ1dHRvbiB7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDlweDtcclxuICAgICAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDBweDtcclxuICAgICAgICAgICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDE5cHg7XHJcbiAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgLmlubmVyX2NvbnRhaW5lciAjUHJvamVjdEZvcm0ge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjQ3NDhiO1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgICAgICAgICBtYXgtaGVpZ2h0OiAxMzRweDtcclxuICAgICAgICAgICAgbWF4LXdpZHRoOiA1MTVweDtcclxuICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgICAgICAgbWF4LXdpZHRoOiA1MDBweDtcclxuICAgICAgICAgICAgbWFyZ2luOiA5cHggMTBweCAwIDIzcHg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAucHJvamVjdEZvcm1EZXRhaWxzIHtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDgwcHg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBkaXYucHJpb3JpdHlEYXRlT25MYXJnZVNjcmVlbiB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgdG9wOiAwO1xyXG4gICAgICAgICAgICBtYXgtd2lkdGg6IDIwMHB4O1xyXG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLnByb2plY3RJbnB1dENvbnRhaW5lciB7XHJcbiAgICAgICAgICAgIG1heC13aWR0aDogMjAwcHg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAucHJvamVjdElucHV0Q29udGFpbmVyIHAgaW5wdXQge1xyXG4gICAgICAgICAgICBtYXgtd2lkdGg6IDIwMHB4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmlubmVyVGFza0NvbnRhaW5lciAuZWRpdCB7XHJcbiAgICAgICAgICAgIG1heC13aWR0aDogMTQwcHg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAucHJvamVjdElucHV0Q29udGFpbmVyIC5QZGVzY3JpcHRpb25JbnB1dENvbnRhaW5lciB7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMTBweCAwIDAgMDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGRpdiNjb25maWdQcmlvcml0eURhdGVPbk1vYmlsZSB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICAgIG1heC13aWR0aDogMjAwcHg7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBzdGF0aWM7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAjY29uZmlnUHJpb3JpdHlEYXRlT25Nb2JpbGUgI3ByaW9yaXR5LCAjZGF0ZVBpY2tlciB7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDJweDtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNnB4O1xyXG4gICAgICAgICAgICBtYXgtd2lkdGg6IDEwNHB4O1xyXG4gICAgICAgICAgICBtaW4td2lkdGg6IDgwcHg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAjUHJvamVjdEZvcm0gLmZvb3RlciB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgICAgICAgcGFkZGluZzogMCAxMHB4O1xyXG4gICAgICAgICAgICBnYXA6IDA7XHJcbiAgICAgICAgfVxyXG5cclxuXHJcblxyXG5cclxuICAgICAgICAjUHJvamVjdEZvcm0gLnByb2plY3RCdXR0b25zQ29udGFpbmVyIHtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAwIDEwcHg7XHJcbiAgICAgICAgICAgIGdhcDogMDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICNmb3JtIC5mb3JtRGV0YWlscyB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgcGFkZGluZzogMTBweDtcclxuICAgICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgI2Zvcm1Gb290ZXJPbk1vYmlsZSB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgICAgICAgcGFkZGluZzogMCAxMHB4O1xyXG4gICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgICNmb3JtRm9vdGVyT25Nb2JpbGUgLmJ1dHRvbnMge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDAgMTBweDtcclxuICAgICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgICBnYXA6IDA7XHJcbiAgICAgICAgfVxyXG5cclxuXHJcblxyXG4gICAgICAgIC5wcmlvcml0eURhdGVMYXJnZVNjcmVlbiB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAjZm9ybSAuaW5wdXRzIHtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgICAgbWF4LXdpZHRoOiAxNTBweDtcclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAjZm9ybSAuZmlyc3QtaW5wdXRDb250YWluZXIgaW5wdXQsIC5QdGl0bGVJbnB1dENvbnRhaW5lciBpbnB1dCB7XHJcbiAgICAgICAgICAgIG1heC13aWR0aDogMTY1cHg7XHJcbiAgICAgICAgICAgIG1heC1oZWlnaHQ6IDE1cHg7XHJcbiAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgICAgICAgb3V0bGluZTogbm9uZTtcclxuICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgICBtYXJnaW46IDEwcHggMDtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogaW5oZXJpdDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICNmb3JtIC5zZWNvbmQtaW5wdXRDb250YWluZXIgaW5wdXQsIC5QZGVzY3JpcHRpb25JbnB1dENvbnRhaW5lciBpbnB1dCB7XHJcbiAgICAgICAgICAgIG1heC13aWR0aDogMTc4cHg7XHJcbiAgICAgICAgICAgIG1heC1oZWlnaHQ6IDE1cHg7XHJcbiAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgICAgICAgb3V0bGluZTogbm9uZTtcclxuICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmhlcml0O1xyXG4gICAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgI2Zvcm0gLm90aGVyLW9wdGlvbnMtb24tZm9ybXMgYnV0dG9uLCAjY29uZmlnUHJpb3JpdHlEYXRlT25Nb2JpbGUgI3ByaW9yaXR5LCAjZGF0ZVBpY2tlciB7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDRweDtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNnB4O1xyXG4gICAgICAgICAgICBtYXgtd2lkdGg6IDEwNHB4O1xyXG4gICAgICAgICAgICBtaW4td2lkdGg6IDgwcHg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuXHJcbiAgICBAbWVkaWEgKG1pbi13aWR0aDogNTUxcHgpIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gICAgICAgIGJvZHkgbWFpbiB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cclxuICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICBtYWluIGhlYWRlciB7XHJcblxyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmRhNGFmO1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgICBnYXA6IDEwcHg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBtYWluIGFzaWRlIHtcclxuICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTJlOGYwO1xyXG4gICAgICAgICAgICB6LWluZGV4OiAyO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgYXNpZGUgdWwsIHVsIHNlbGVjdCB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgICAgZmlsbDogd2hpdGU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBzZWxlY3QjcHJvamVjdC1kcm9wZG93biB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig0MiwgNDAsIDQ5KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIG1haW4gI0NvbnRhaW5lciB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgICAgICAgICB6LWluZGV4OiAxO1xyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGhlYWRlciAubWVudUNvbnRyb2xsZXIge1xyXG5cclxuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgIHdpZHRoOiA0MHB4O1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDQwcHg7XHJcblxyXG4gICAgICAgIH1cclxuXHJcblxyXG5cclxuXHJcbiAgICAgICAgI3RvZ2dsZU1lbnVJY29uIHtcclxuICAgICAgICAgICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgICAgICAgICB0b3A6IDIwcHg7XHJcbiAgICAgICAgICAgIHJpZ2h0OiAyMHB4O1xyXG4gICAgICAgICAgICB3aWR0aDogNTBweDtcclxuICAgICAgICAgICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNmY5ZTllO1xyXG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgICAgICAgICAgIHRyYW5zaXRpb246IHRvcCAwLjNzO1xyXG4gICAgICAgICAgICB6LWluZGV4OiAxMDAwO1xyXG5cclxuICAgICAgICAgICAgei1pbmRleDogMTAwMDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICN0b2dnbGVNZW51SWNvbjo6YmVmb3JlIHtcclxuICAgICAgICAgICAgY29udGVudDogJyc7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgd2lkdGg6IDI4cHg7XHJcbiAgICAgICAgICAgIGhlaWdodDogMnB4O1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTVweCk7XHJcbiAgICAgICAgICAgIHRyYW5zaXRpb246IDAuMnM7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAjdG9nZ2xlTWVudUljb246OmFmdGVyIHtcclxuICAgICAgICAgICAgY29udGVudDogJyc7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgd2lkdGg6IDI4cHg7XHJcbiAgICAgICAgICAgIGhlaWdodDogMnB4O1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoNXB4KTtcclxuICAgICAgICAgICAgdHJhbnNpdGlvbjogMC4ycztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICN0b2dnbGVNZW51SWNvbi5hY3RpdmU6OmJlZm9yZSB7XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwcHgpIHJvdGF0ZSg0NWRlZyk7XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgI3RvZ2dsZU1lbnVJY29uLmFjdGl2ZTo6YWZ0ZXIge1xyXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMHB4KSByb3RhdGUoLTQ1ZGVnKTtcclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBhc2lkZSNtZW51IHtcclxuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgICAgICAgICAgdG9wOiAwO1xyXG4gICAgICAgICAgICBsZWZ0OiAtMjIwcHg7XHJcbiAgICAgICAgICAgIHdpZHRoOiAyMjBweDtcclxuICAgICAgICAgICAgaGVpZ2h0OiAxMDB2aDtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZC1jb2xvcik7XHJcbiAgICAgICAgICAgIHRyYW5zaXRpb246IDAuM3M7XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgYXNpZGUjbWVudS5hY3RpdmUge1xyXG4gICAgICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgYXNpZGUgdWwge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgICAgIGZpbGw6IHdoaXRlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaGVhZGVyIC5tZW51Q29udHJvbGxlciBzdmcge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgd2lkdGg6IDQwcHg7XHJcbiAgICAgICAgICAgIGhlaWdodDogNDBweDtcclxuICAgICAgICAgICAgZmlsbDogd2hpdGU7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4XHJcbiAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgI3VzZXJsaXN0ICNhZGRUb2RvQnRuQ29udGFpbmVyIHtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgZ2FwOiA1cHg7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMjdweCAwIDExcHggMjZweDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICN0YXNrIHtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgZ2FwOiA1cHg7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMjdweCAwIDExcHggMjZweDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICN1c2VybGlzdCAjYWRkVG9kb0J0bkNvbnRhaW5lciBzdmcge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGMyNjI2O1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgICAgIGZpbGw6IHdoaXRlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgI3VzZXJsaXN0ICNhZGRUb2RvQnRuQ29udGFpbmVyIDpob3ZlciB7XHJcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEuMDkpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgI3VzZXJsaXN0ICNhZGRUb2RvQnRuQ29udGFpbmVyIGJ1dHRvbiB7XHJcbiAgICAgICAgICAgIGJvcmRlcjogMDtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgICAgICBjb2xvcjogI2I5MWMxYztcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogaW5oZXJpdDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICN1c2VybGlzdCAjYWRkVG9kb0J0bkNvbnRhaW5lciBidXR0b246aG92ZXIge1xyXG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxLjA5KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGRpdi5saXN0Q29udGFpbmVyIHtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgZ2FwOiA1cHg7XHJcbiAgICAgICAgICAgIG1heC13aWR0aDogNzE0cHg7XHJcblxyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgICAgICAgICBib3gtc2hhZG93OiAxcHggMHB4IDNweCAwcHg7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMThweCA2MHB4O1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAxNXB4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgI3VzZXJsaXN0IC5pbnRpYWxUZXh0RGlzcGxheSB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuaW50aWFsVGV4dERpc3BsYXkgcCB7XHJcbiAgICAgICAgICAgIG1heC13aWR0aDogNTAwcHg7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIG1heC13aWR0aDogNTAwcHg7XHJcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5pbnRpYWxUZXh0RGlzcGxheSBpbWcge1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAyMHB4O1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA0MXB4O1xyXG4gICAgICAgICAgICBvYmplY3QtZml0OiBjb250YWluO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmlubmVyX2NvbnRhaW5lciAjZm9ybSB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICM2NDc0OGI7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICAgICAgICAgIGhlaWdodDogMTUwcHg7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgICAgICAgIG1heC13aWR0aDogNjAwcHg7XHJcblxyXG4gICAgICAgICAgICBtYXJnaW46IDE3cHg7XHJcbiAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgI2Zvcm0gZGl2LmZvcm1EZXRhaWxzIHtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cclxuICAgICAgICAgICAgcGFkZGluZzogMTBweDtcclxuICAgICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLnByaW9yaXR5RGF0ZUxhcmdlU2NyZWVuIHtcclxuICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICNmb3JtIC5pbnB1dHMge1xyXG4gICAgICAgICAgICBtYXgtd2lkdGg6IDE1MHB4XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAjZm9ybSAuZmlyc3QtaW5wdXRDb250YWluZXIgaW5wdXQsIC5QdGl0bGVJbnB1dENvbnRhaW5lciBpbnB1dCxcclxuICAgICAgICAjZm9ybSAuc2Vjb25kLWlucHV0Q29udGFpbmVyIGlucHV0LCAuUGRlc2NyaXB0aW9uSW5wdXRDb250YWluZXIgaW5wdXQge1xyXG4gICAgICAgICAgICBtYXgtd2lkdGg6IDYwMHB4O1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDI1cHg7XHJcbiAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgICAgICAgb3V0bGluZTogbm9uZTtcclxuICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgICBtYXJnaW46IDEwcHggMCAwIDA7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IGluaGVyaXQ7XHJcbiAgICAgICAgfVxyXG5cclxuXHJcblxyXG4gICAgICAgIHAuc2Vjb25kLWlucHV0Q29udGFpbmVyIHtcclxuICAgICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgI2Zvcm0gLmJ1dHRvbnMge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBtYXJnaW46IDFweCAyM3B4O1xyXG5cclxuXHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgI2NvbmZpZ1ByaW9yaXR5RGF0ZU9uTW9iaWxlIHtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgICAgcG9zaXRpb246IHN0YXRpYztcclxuXHJcbiAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgI2Zvcm0gLm90aGVyLW9wdGlvbnMtb24tZm9ybXMgYnV0dG9uLCAjcHJpb3JpdHksICNkYXRlUGlja2VyIHtcclxuICAgICAgICAgICAgcGFkZGluZzogN3B4O1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA5cHg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmb3JtI1Byb2plY3RGb3JtIHtcclxuXHJcblxyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjQ3NDhiO1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDE1MHB4O1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICAgICAgICBtYXgtd2lkdGg6IDY5M3B4O1xyXG4gICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDFyZW07XHJcbiAgICAgICAgICAgIG1hcmdpbjogOXB4IDYxcHg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBkaXYucHJvamVjdEZvcm1EZXRhaWxzIHtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgfVxyXG5cclxuXHJcblxyXG4gICAgfVxyXG5cclxuICAgICovIC5wcm9qZWN0QnV0dG9uc0NvbnRhaW5lciB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIH1cclxuXHJcbiAgICBzZWxlY3QjcHJpb3JpdHkge1xyXG4gICAgICAgIHBhZGRpbmc6IDRweDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA5cHg7XHJcbiAgICB9XHJcblxyXG4gICAgaW5wdXQjZGF0ZVBpY2tlciB7XHJcblxyXG4gICAgICAgIHBhZGRpbmc6IDNweDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA5cHg7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIEBtZWRpYSAobWluLXdpZHRoOiA3NjlweCkgYW5kIChtYXgtd2lkdGg6IDEwMDBweCkge1xyXG5cclxuICAgICAgICBib2R5IG1haW4ge1xyXG5cclxuICAgICAgICAgICAgZGlzcGxheTogZ3JpZDtcclxuXHJcbiAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgbWFpbiBoZWFkZXIge1xyXG4gICAgICAgICAgICBncmlkLWFyZWE6IDEgLyAyIC8gMiAvIDY7XHJcblxyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmRhNGFmO1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgICBnYXA6IDEwcHg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBtYWluIGFzaWRlIHtcclxuXHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2UyZThmMDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIG1haW4gI0NvbnRhaW5lciB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgICAgICAgICB6LWluZGV4OiAxO1xyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGhlYWRlciAubWVudUNvbnRyb2xsZXIge1xyXG5cclxuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgIHdpZHRoOiA0MHB4O1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDQwcHg7XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaGVhZGVyIC5tZW51Q29udHJvbGxlciBzdmcge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgd2lkdGg6IDQwcHg7XHJcbiAgICAgICAgICAgIGhlaWdodDogNDBweDtcclxuICAgICAgICAgICAgZmlsbDogd2hpdGU7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAjdXNlcmxpc3QgLmludGlhbFRleHREaXNwbGF5IHtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICN1c2VybGlzdCAuaW50aWFsVGV4dERpc3BsYXkgcCB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMTBweCAwIDAgMDtcclxuICAgICAgICAgICAgbWF4LXdpZHRoOiA2MDBweDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICN1c2VybGlzdCAjYWRkVG9kb0J0bkNvbnRhaW5lciB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGdhcDogNXB4O1xyXG4gICAgICAgICAgICBtYXJnaW46IDI3cHggMCAxMXB4IDI2cHg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAjdGFzayB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGdhcDogNXB4O1xyXG4gICAgICAgICAgICBtYXJnaW46IDI3cHggMCAxMXB4IDI2cHg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAjdXNlcmxpc3QgI2FkZFRvZG9CdG5Db250YWluZXIgc3ZnIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2RjMjYyNjtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICAgICAgICBmaWxsOiB3aGl0ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICN1c2VybGlzdCAjYWRkVG9kb0J0bkNvbnRhaW5lciA6aG92ZXIge1xyXG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxLjA5KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICN1c2VybGlzdCAjYWRkVG9kb0J0bkNvbnRhaW5lciBidXR0b24ge1xyXG4gICAgICAgICAgICBib3JkZXI6IDA7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICAgICAgY29sb3I6ICNiOTFjMWM7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IGluaGVyaXQ7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAjdXNlcmxpc3QgI2FkZFRvZG9CdG5Db250YWluZXIgYnV0dG9uOmhvdmVyIHtcclxuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMS4wOSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBkaXYubGlzdENvbnRhaW5lciB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGdhcDogNXB4O1xyXG4gICAgICAgICAgICBtYXgtd2lkdGg6IDcxNHB4O1xyXG5cclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgICAgICAgICAgYm94LXNoYWRvdzogMXB4IDBweCAzcHggMHB4O1xyXG4gICAgICAgICAgICBtYXJnaW46IDE4cHggNjBweDtcclxuICAgICAgICAgICAgcGFkZGluZzogMTVweDtcclxuICAgICAgICB9XHJcblxyXG5cclxuXHJcblxyXG5cclxuICAgICAgICAuaW5uZXJfY29udGFpbmVyICNmb3JtIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzY0NzQ4YjtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgICAgICAgICAgaGVpZ2h0OiAxNTBweDtcclxuICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgICAgICAgbWF4LXdpZHRoOiA3NTBweDtcclxuXHJcbiAgICAgICAgICAgIG1hcmdpbjogMTdweDtcclxuICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICAjZm9ybSBkaXYuZm9ybURldGFpbHMge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblxyXG4gICAgICAgICAgICBwYWRkaW5nOiA5cHggMjBweDtcclxuICAgICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLnByaW9yaXR5RGF0ZUxhcmdlU2NyZWVuIHtcclxuICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICNmb3JtIC5pbnB1dHMge1xyXG4gICAgICAgICAgICBtYXgtd2lkdGg6IDE1MHB4XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAjZm9ybSAuZmlyc3QtaW5wdXRDb250YWluZXIgaW5wdXQsIC5QdGl0bGVJbnB1dENvbnRhaW5lciBpbnB1dCB7XHJcbiAgICAgICAgICAgIG1heC13aWR0aDogNDIwcHg7XHJcbiAgICAgICAgICAgIG1heC1oZWlnaHQ6IDYwcHg7XHJcbiAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgICAgICAgb3V0bGluZTogbm9uZTtcclxuICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmhlcml0O1xyXG4gICAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAjZm9ybSAuc2Vjb25kLWlucHV0Q29udGFpbmVyIGlucHV0LCAuUGRlc2NyaXB0aW9uSW5wdXRDb250YWluZXIgaW5wdXQge1xyXG4gICAgICAgICAgICBtYXgtd2lkdGg6IDQyMHB4O1xyXG4gICAgICAgICAgICBtYXgtaGVpZ2h0OiA2MHB4O1xyXG4gICAgICAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgICAgICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICAgICAgICAgIGNvbG9yOiByZ2IoOTAsIDc3LCA3Nyk7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IGluaGVyaXQ7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICAjZm9ybSAuYnV0dG9ucyB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgICAgICAgbWFyZ2luOiAxcHggMzNweFxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZm9ybSNQcm9qZWN0Rm9ybSB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICM2NDc0OGI7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICAgICAgICAgIGhlaWdodDogMTUwcHg7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgICAgICAgIG1heC13aWR0aDogNjkzcHg7XHJcbiAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMXJlbTtcclxuICAgICAgICAgICAgbWFyZ2luOiA5cHggNjFweDtcclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBkaXYucHJvamVjdEZvcm1EZXRhaWxzIHtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBkaXYucHJpb3JpdHlEYXRlT25MYXJnZVNjcmVlbiB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgdG9wOiAwO1xyXG5cclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAucHJvamVjdEJ1dHRvbnNDb250YWluZXIge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAjY29uZmlnUHJpb3JpdHlEYXRlT25Nb2JpbGUge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogc3RhdGljO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgI2Zvcm0gLm90aGVyLW9wdGlvbnMtb24tZm9ybXMgYnV0dG9uLCAjcHJpb3JpdHksICNkYXRlUGlja2VyIHtcclxuICAgICAgICAgICAgcGFkZGluZzogOHB4O1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA2cHg7XHJcbiAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxuICAgIG1haW4ge1xyXG4gICAgICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxOTBweCAxZnI7XHJcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiA3MHB4IDU3MHB4O1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBoZWFkZXIge1xyXG4gICAgICAgIGdyaWQtYXJlYTogMSAvIDIgLyAyIC8gNjtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmRhNGFmO1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICB9XHJcblxyXG4gICAgYXNpZGUge1xyXG4gICAgICAgIGdyaWQtYXJlYTogMS8gMS8gNC8gMjtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2UyZThmMDtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgI0NvbnRhaW5lciB7XHJcbiAgICAgICAgZ3JpZC1hcmVhOiAyIC8gMiAvIDMgLyA0O1xyXG5cclxuICAgICAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMTAwcHggNjUwcHggMzUwcHg7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgfVxyXG5cclxuXHJcblxyXG4gICAgLmlubmVyX2NvbnRhaW5lciB7XHJcbiAgICAgICAgZ3JpZC1hcmVhOiAxIC8gMiAvIDMgLyAzO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAuaW50aWFsVGV4dERpc3BsYXkge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgLmludGlhbFRleHREaXNwbGF5IHAge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICAgIG1hcmdpbjogMTBweCAwIDAgMDtcclxuICAgIH1cclxuXHJcbiAgICAuaW50aWFsVGV4dERpc3BsYXkgaW1nIHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMzBweDtcclxuICAgICAgICBwYWRkaW5nOiAyMHB4O1xyXG5cclxuICAgIH1cclxuXHJcbiAgICAjYWRkVG9kb0J0bkNvbnRhaW5lciB7XHJcbiAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgIH1cclxuXHJcbiAgICAuZW1wdHkge1xyXG4gICAgICAgIGdyaWQtYXJlYTogMSAvIDMgLyA1IC8gNDtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjhmOGY4O1xyXG4gICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX199KTtcclxuICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICAgIH1cclxuXHJcblxyXG5cclxuICAgIC5tZW51Q29udHJvbGxlciB7XHJcblxyXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgICAgd2lkdGg6IDQwcHg7XHJcbiAgICAgICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5jaGVja0JveCB7XHJcbiAgICAgICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xyXG4gICAgICAgIC1tb3otYXBwZWFyYW5jZTogbm9uZTtcclxuICAgICAgICB3aWR0aDogMjBweDtcclxuICAgICAgICBoZWlnaHQ6IDIwcHg7XHJcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgICAgICAgb3V0bGluZTogbm9uZTtcclxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG5cclxuICAgIH1cclxuXHJcblxyXG4gICAgLmNoZWNrQm94OjpiZWZvcmUge1xyXG4gICAgICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHRvcDogNTAlO1xyXG4gICAgICAgIGxlZnQ6IDUwJTtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxuICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgY29sb3I6IHJnYigyMiwgMjUyLCAyMik7XHJcbiAgICAgICAgb3BhY2l0eTogMDtcclxuICAgICAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuM3MgZWFzZTtcclxuICAgIH1cclxuXHJcbiAgICAuY2hlY2tCb3g6aG92ZXI6OmJlZm9yZSB7XHJcbiAgICAgICAgY29udGVudDogXCLinJNcIjtcclxuICAgICAgICBvcGFjaXR5OiAwLjU7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHN2ZyB7XHJcbiAgICAgICAgd2lkdGg6IDI1cHg7XHJcbiAgICAgICAgaGVpZ2h0OiAyNXB4O1xyXG4gICAgfVxyXG5cclxuICAgICN0YXNrIHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgZ2FwOiA1cHg7XHJcbiAgICAgICAgbWFyZ2luOiAyN3B4IDAgMTFweCAyNnB4O1xyXG4gICAgfVxyXG5cclxuXHJcblxyXG4gICAgI3Rhc2sgc3ZnIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGMyNjI2O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgICBmaWxsOiB3aGl0ZTtcclxuICAgIH1cclxuXHJcbiAgICAjdGFzayA6aG92ZXIge1xyXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMS4wOSk7XHJcbiAgICB9XHJcblxyXG4gICAgI3Rhc2sgYnV0dG9uIHtcclxuICAgICAgICBib3JkZXI6IDA7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgIGNvbG9yOiAjYjkxYzFjO1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IGluaGVyaXQ7XHJcbiAgICB9XHJcblxyXG4gICAgI3Rhc2sgYnV0dG9uOmhvdmVyIHtcclxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEuMDkpO1xyXG4gICAgfVxyXG5cclxuICAgIGJ1dHRvbi5kZWxldGVUYXNrIHtcclxuICAgICAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA3cHg7XHJcbiAgICAgICAgZm9udC1zaXplOiAxLjFyZW07XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2UwNDg3YztcclxuICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMnMgZWFzZS1vdXQ7XHJcbiAgICB9XHJcblxyXG4gICAgYnV0dG9uLmRlbGV0ZVRhc2s6aG92ZXIge1xyXG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xKVxyXG4gICAgfVxyXG5cclxuICAgIGJ1dHRvbi5kZWxldGVUYXNrOmFjdGl2ZSB7XHJcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwLjkpXHJcbiAgICB9XHJcblxyXG5cclxuXHJcblxyXG4gICAgLmxpc3RDb250YWluZXIge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgZ2FwOiA1cHg7XHJcbiAgICAgICAgbWF4LXdpZHRoOiA3MTRweDtcclxuXHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgICAgICBib3gtc2hhZG93OiAxcHggMHB4IDNweCAwcHg7XHJcbiAgICAgICAgbWFyZ2luOiAxOHB4IDE4cHg7XHJcbiAgICAgICAgcGFkZGluZzogMTVweDtcclxuXHJcblxyXG4gICAgfVxyXG5cclxuXHJcbiAgICAucHJpb3JpdHlEYXRlT25MYXJnZVNjcmVlbiB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgbWF4LXdpZHRoOiAyMDBweDtcclxuICAgIH1cclxuXHJcbiAgICAucHJvamVjdEJ1dHRvbnNDb250YWluZXIge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgfVxyXG5cclxuICAgIC5wcm9qZWN0QnV0dG9uc0NvbnRhaW5lciBidXR0b24ge1xyXG4gICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA3cHg7XHJcbiAgICAgICAgcGFkZGluZzogOXB4O1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAuZXhjbHVkZWQge1xyXG4gICAgICAgIGNvbG9yOiByZWQ7XHJcbiAgICB9XHJcblxyXG4gICAgLnRhc2tDb250YWluZXIge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgZmxleDogMTtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICB9XHJcblxyXG5cclxuXHJcbiAgICAudGFza1RpdGxlLCAubmV3UHJvamVjdC10YXNrLXRpdGxlLCAuZWRpdGFibGVTYXZlVGFza0VsIHtcclxuICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgICB0ZXh0LWRlY29yYXRpb24tY29sb3I6IHJlZDtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgLnRhc2tEZXNjcmlwdGlvbiwgLm5ld1Byb2plY3QtZGVzY3JpcHRpb24ge1xyXG4gICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIC50YXNrUHJpb3JpdHkge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTlweDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA2cHg7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzU3M2QzZDtcclxuICAgICAgICBwYWRkaW5nOiA2cHg7XHJcbiAgICAgICAgbWFyZ2luOiAwIDAgN3B4O1xyXG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgLmlubmVyVGFza0hhbmRsZXIge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICBtYXJnaW46IDBweCAxNXB4IDAgNDBweDtcclxuICAgIH1cclxuXHJcbiAgICAuaW5ib3gtY29udGFpbmVyIHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgZ2FwOiA1cHg7XHJcbiAgICAgICAgbWFyZ2luOiAwcHggMCAwIDE2cHg7XHJcbiAgICAgICAgaGVpZ2h0OiAyNnB4O1xyXG4gICAgICAgIHBhZGRpbmc6IDlweDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA1cHggMHB4IDBweCA1cHg7XHJcbiAgICB9XHJcblxyXG4gICAgLmluYm94LWNvbnRhaW5lcjpob3ZlciB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taG92ZXItY29sb3IpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAuaW5ib3gge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgLmluYm94TGlzdENvbnRhaW5lciB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBnYXA6IDVweDtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgLmluYm94VGFza0NvbnRhaW5lciB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBmbGV4OiAxO1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIH1cclxuXHJcbiAgICAuaW5ib3hUYXNrVGl0bGUge1xyXG4gICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICB9XHJcblxyXG4gICAgLmluYm94VGFza0Rlc2NyaXB0aW9uIHtcclxuICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG5cclxuICAgIH1cclxuXHJcbiAgICAuaW5ib3hUYXNrUHJpb3JpdHkge1xyXG4gICAgICAgIG1hcmdpbjogMCAyMHB4IDAgMDtcclxuICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIC5kdWVEYXRlIHtcclxuICAgICAgICBtYXJnaW46IDA7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIC5lZGl0IHtcclxuICAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgICAgb3V0bGluZTogbm9uZTtcclxuICAgICAgICBmb250LXNpemU6IDE3cHg7XHJcbiAgICAgICAgbWF4LXdpZHRoOiAxMTBweDtcclxuICAgICAgICBtYXJnaW46IDAgMFxyXG4gICAgfVxyXG5cclxuICAgICNwcm9qZWN0cyBoMyB7XHJcbiAgICAgICAgbWFyZ2luOiAwIDAgMCAxMHB4O1xyXG4gICAgfVxyXG5cclxuICAgICNmb3JtIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjQ3NDhiO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICAgICAgaGVpZ2h0OiAxNDBweDtcclxuICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICAgIHBhZGRpbmctbGVmdDogMXJlbTtcclxuICAgICAgICBtYXJnaW46IDEwcHggMTBweCAwIDA7XHJcbiAgICB9XHJcblxyXG4gICAgLmZvcm1EZXRhaWxzIHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICAgIG1hcmdpbjogMTJweCAxNXB4O1xyXG4gICAgfVxyXG5cclxuICAgIGlucHV0I2RhdGVQaWNrZXIge1xyXG4gICAgICAgIG1heC13aWR0aDogMTE4cHg7XHJcbiAgICB9XHJcblxyXG4gICAgLmJ1dHRvbnMge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICAgIG1hcmdpbjogMXB4IDMzcHhcclxuICAgIH1cclxuXHJcbiAgICAuYnV0dG9ucyBidXR0b24ge1xyXG4gICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA3cHg7XHJcbiAgICAgICAgcGFkZGluZzogN3B4O1xyXG4gICAgICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjJzIGVhc2Utb3V0XHJcbiAgICB9XHJcblxyXG4gICAgLmJ1dHRvbnMgYnV0dG9uOmhvdmVyIHtcclxuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMDUpXHJcbiAgICB9XHJcblxyXG4gICAgI1Byb2plY3RGb3JtIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjQ3NDhiO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICAgICAgaGVpZ2h0OiAxNTBweDtcclxuICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICAgICAgbWFyZ2luOiAxNXB4IDE1cHggMCAxN3B4O1xyXG4gICAgfVxyXG5cclxuICAgIC5wcm9qZWN0Rm9ybURldGFpbHMge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgICAgdG9wOiAwO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAuZmlyc3QtaW5wdXRDb250YWluZXIgaW5wdXQsIC5QdGl0bGVJbnB1dENvbnRhaW5lciBpbnB1dCB7XHJcbiAgICAgICAgbWF4LXdpZHRoOiA2MDBweDtcclxuICAgICAgICBoZWlnaHQ6IDI1cHg7XHJcbiAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgIG1hcmdpbjogMTBweCAwIDAgMDtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmhlcml0O1xyXG4gICAgfVxyXG5cclxuICAgIC50YXNrLXRpdGxlLCAuZGVzY3JpcHRpb24ge1xyXG4gICAgICAgIHdpZHRoOiAzNTBweDtcclxuICAgIH1cclxuXHJcbiAgICAuZmlyc3QtaW5wdXRDb250YWluZXIgaW5wdXQ6OnBsYWNlaG9sZGVyLCAuUHRpdGxlSW5wdXRDb250YWluZXIgaW5wdXQ6OnBsYWNlaG9sZGVyIHtcclxuICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgcGFkZGluZzogMCAxMHB4O1xyXG4gICAgICAgIG9wYWNpdHk6IDE7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIC5zZWNvbmQtaW5wdXRDb250YWluZXIgaW5wdXQsIC5QZGVzY3JpcHRpb25JbnB1dENvbnRhaW5lciBpbnB1dCB7XHJcbiAgICAgICAgbWF4LXdpZHRoOiA2MDBweDtcclxuICAgICAgICBoZWlnaHQ6IDI1cHg7XHJcbiAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IGluaGVyaXQ7XHJcbiAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgfVxyXG5cclxuICAgIC5zZWNvbmQtaW5wdXRDb250YWluZXIgaW5wdXQ6OnBsYWNlaG9sZGVyLCAuUGRlc2NyaXB0aW9uSW5wdXRDb250YWluZXIgaW5wdXQ6OnBsYWNlaG9sZGVyIHtcclxuICAgICAgICBwYWRkaW5nOiAwIDEwcHg7XHJcbiAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgIG9wYWNpdHk6IDE7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIC5maXJzdC1pbnB1dENvbnRhaW5lciwgLnNlY29uZC1pbnB1dENvbnRhaW5lciB7XHJcbiAgICAgICAgbWFyZ2luOiAxMHB4IDAgMCAwO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcclxuICAgIH1cclxuXHJcbiAgICAub3RoZXItb3B0aW9ucy1vbi1mb3JtcywgLmZvb3RlciB7fVxyXG5cclxuICAgIC5zdWJtaXRCdG46YWN0aXZlIHtcclxuICAgICAgICB0cmFuc2Zvcm06IGFjdGl2ZSBzY2FsZSgxLjEpO1xyXG4gICAgfVxyXG5cclxuICAgIC5vdGhlci1vcHRpb25zLW9uLWZvcm1zIGJ1dHRvbiwgI3ByaW9yaXR5LCBpbnB1dCNkYXRlUGlja2VyIHtcclxuICAgICAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gLjNzIGVhc2UtaW47XHJcbiAgICAgICAgcGFkZGluZzogN3B4O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDdweDtcclxuICAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzA3YzRkZDtcclxuICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICB9XHJcblxyXG4gICAgI3ByaW9yaXR5IHtcclxuICAgICAgICBtYXJnaW46IDEwcHggMCA4cHggMDtcclxuICAgIH1cclxuXHJcbiAgICAjcHJvamVjdFByaW9yaXR5LCAuZm9vdGVyIHtcclxuICAgICAgICBwYWRkaW5nOiA3cHg7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgICAgIG1hcmdpbjogMCA0cHggNXB4IDA7XHJcbiAgICB9XHJcblxyXG4gICAgLmFkZFByb2plY3RzQ29udGFpbmVyIHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG5cclxuICAgICAgICBtYXJnaW46IDAgMCAwIDIwcHg7XHJcbiAgICAgICAgcGFkZGluZzogN3B4O1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgZ2FwOiAxMHB4O1xyXG4gICAgICAgIGhlaWdodDogMjVweDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA1cHggMHB4IDBweCA1cHg7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIC5hZGRQcm9qZWN0c0NvbnRhaW5lcjpob3ZlciB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taG92ZXItY29sb3IpO1xyXG4gICAgfVxyXG5cclxuICAgIC5hZGRQcm9qZWN0c0NvbnRhaW5lciBzdmcge1xyXG4gICAgICAgIHdpZHRoOiAyNXB4O1xyXG4gICAgICAgIGhlaWdodDogMjVweDtcclxuICAgIH1cclxuXHJcbiAgICAjYWRkTmV3UHJvamVjdEVsIHtcclxuICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgZm9udC1zaXplOiAxOXB4O1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAucHJvamVjdF90ZXh0IHtcclxuICAgICAgICBtYXJnaW46IDAgMCAxMHB4IDE3cHg7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XHJcbiAgICAgICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XHJcbiAgICAgICAgcGFkZGluZzogOXB4O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDVweCAwcHggMHB4IDVweDtcclxuXHJcblxyXG4gICAgfVxyXG5cclxuICAgIC5wcm9qZWN0X3RleHQ6aG92ZXIge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWhvdmVyLWNvbG9yKTtcclxuICAgIH1cclxuXHJcblxyXG5cclxuICAgICNwcm9qZWN0LWRyb3Bkb3duIHtcclxuICAgICAgICBib3JkZXI6IDA7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogaW5oZXJpdDtcclxuICAgICAgICBtYXJnaW46IDVweCAwIDAgMTdweDtcclxuICAgICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDU1MDtcclxuICAgICAgICBwYWRkaW5nOiA4cHg7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4IDBweCAwcHggNXB4O1xyXG4gICAgICAgIG1heC13aWR0aDogMTYwcHg7XHJcblxyXG4gICAgfVxyXG5cclxuICAgICNwcm9qZWN0LWRyb3Bkb3duOmhvdmVyIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ob3Zlci1jb2xvcik7XHJcblxyXG4gICAgfVxyXG5cclxuXHJcbiAgICAjcHJvamVjdC1kcm9wZG93bjpmb2N1cyB7XHJcbiAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICB9XHJcblxyXG4gICAgI25ld1Byb2plY3RzRm9ybUNvbnRhaW5lckVsIHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAganVzdGlmeS1pdGVtczogY2VudGVyO1xyXG5cclxuXHJcbiAgICB9XHJcblxyXG4gICAgI1Byb2plY3RzRm9ybU5hbWVDb250YWluZXJFbCB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLmlucHV0TmV3cHJvamVjdEZvcm1OYW1lIHtcclxuICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNjZWUzZTM7XHJcbiAgICAgICAgbWF4LXdpZHRoOiA0MDBweDtcclxuICAgICAgICBtYXgtaGVpZ2h0OiAzMDBweDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgICAgIHBhZGRpbmc6IDQ2cHg7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIG1hcmdpbjogNjBweCAwIDAgMDtcclxuICAgICAgICBib3gtc2hhZG93OiAwcHggOXB4IDNweCAwcHg7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC5pbnB1dE5ld3Byb2plY3RGb3JtTmFtZSBoMiB7XHJcbiAgICAgICAgbWFyZ2luOiAwIDAgMTBweCAwO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAuaW5wdXROZXdQcm9qZWN0TmFtZSB7XHJcbiAgICAgICAgbWF4LXdpZHRoOiAzNTBweDtcclxuICAgICAgICBtYXgtaGVpZ2h0OiAzNXB4O1xyXG4gICAgICAgIHBhZGRpbmc6IDE3cHg7XHJcbiAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDdweDtcclxuICAgICAgICBmb250LXNpemU6IDE5cHg7XHJcbiAgICB9XHJcblxyXG4gICAgaW5wdXQuU2F2ZVByb2plY3ROYW1lIHtcclxuICAgICAgICBwYWRkaW5nOiA5cHg7XHJcbiAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICAgICAgICBtYXgtd2lkdGg6IDEwMHB4O1xyXG4gICAgICAgIGhlaWdodDogNDBweDtcclxuICAgICAgICBmb250LXNpemU6IDE5cHg7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0MCwgNTksIDEzNCk7XHJcbiAgICAgICAgY29sb3I6IHdoaXRlO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICAucHJvamVjdE5hbWVTYXZlckJ0bkNvbnRhaW5lciB7XHJcbiAgICAgICAgbWFyZ2luOiAxMHB4IDA7XHJcbiAgICB9XHJcblxyXG4gICAgLnByb2plY3ROYW1lU2F2ZXJCdG5Db250YWluZXIgYnV0dG9uIHtcclxuICAgICAgICBwYWRkaW5nOiA5cHg7XHJcbiAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICAgICAgICB3aWR0aDogMTAwcHg7XHJcbiAgICAgICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTlweDtcclxuICAgIH1cclxuXHJcbiAgICAjUHJvamVjdHNGb3JtTmFtZUNvbnRhaW5lckVsIC5DYW5jZWwge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IGdyZXk7XHJcbiAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgfVxyXG5cclxuICAgICNuZXdQcm9qZWN0VGFza3NDb250YWluZXIge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgI25ld1Byb2plY3RUYXNrc0lubmVyQ29udGFpbmVyIHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgZ2FwOiA1cHg7XHJcbiAgICAgICAgbWFyZ2luOiAxMHB4O1xyXG4gICAgICAgIGJveC1zaGFkb3c6ICM1YzU1NTUgMXB4IDNweCAzcHggMXB4O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICAgICAgcGFkZGluZzogMTBweDtcclxuICAgICAgICB3aWR0aDogOTVweDtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgbGVmdDogMjUwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgc3ZnLmFkZFRhc2sge1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgICBmaWxsOiB3aGVhdDtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XHJcbiAgICB9XHJcblxyXG4gICAgLm5ld1Byb2plY3RBZGRCdG4ge1xyXG4gICAgICAgIGJvcmRlcjogMDtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmhlcml0O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcblxyXG4gICAgfVxyXG5cclxuICAgICNQcm9qZWN0ZGF0ZVBpY2tlciB7XHJcbiAgICAgICAgcGFkZGluZzogMnB4O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgICAgaGVpZ2h0OiAzMnB4O1xyXG5cclxuICAgIH1cclxuXHJcblxyXG4gICAgI3N1Ym1pdEJ0bkZvclByb2plY3Qge1xyXG4gICAgICAgIHBhZGRpbmc6IDdweDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA5cHg7XHJcblxyXG4gICAgfVxyXG5cclxuICAgICNzdWJtaXRCdG5Gb3JQcm9qZWN0OmFjdGl2ZSB7XHJcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpXHJcbiAgICB9XHJcblxyXG4gICAgLmNhbmNlbEZvclByb2plY3RCdG4ge1xyXG4gICAgICAgIHBhZGRpbmc6IDdweDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA5cHg7XHJcbiAgICB9YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiSUFBSTtRQUNJLFVBQVU7UUFDVixTQUFTO1FBQ1Qsc0JBQXNCO0lBQzFCOztJQUVBO1FBQ0ksc0JBQXNCO1FBQ3RCLDJCQUEyQjtJQUMvQjs7SUFFQTtRQUNJLFVB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QkFBZ0I7O0lBRXBCOztJQUVBO1FBQ0ksWUFBWTtRQUNaLGtCQUFrQjtRQUNsQixZQUFZO1FBQ1osWUFBWTs7SUFFaEI7OztJQUdBO1FBQ0ksWUFBWTtRQUNaLGtCQUFrQjs7SUFFdEI7O0lBRUE7UUFDSTtJQUNKOztJQUVBO1FBQ0ksWUFBWTtRQUNaLGtCQUFrQjtJQUN0QlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIgICAgYm9keSB7XFxyXFxuICAgICAgICBwYWRkaW5nOiAwO1xcclxcbiAgICAgICAgbWFyZ2luOiAwO1xcclxcbiAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICA6cm9vdCB7XFxyXFxuICAgICAgICAtLWhvdmVyLWNvbG9yOiAjZmRhNGFmO1xcclxcbiAgICAgICAgLS1iYWNrZ3JvdW5kLWNvbG9yOiAjNmY5ZTllO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgICoge1xcclxcbiAgICAgICAgcGFkZGluZzogMDtcXHJcXG4gICAgICAgIG1hcmdpbjogMDtcXHJcXG4gICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuXFxyXFxuICAgICAgICBmb250LWZhbWlseTogXFxcIlJvYm90b1xcXCIsIHNhbnMtc2VyaWY7XFxyXFxuICAgICAgICBmb250LXdlaWdodDogNDAwO1xcclxcbiAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiA1NTBweCkge1xcclxcblxcclxcbiAgICAgICAgYm9keSBtYWluIHtcXHJcXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgICAgICAgICAgei1pbmRleDogMTtcXHJcXG4gICAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAgIG1haW4gaGVhZGVyIHtcXHJcXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmRhNGFmO1xcclxcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgICAgICAgICAgZ2FwOiAxMHB4O1xcclxcbiAgICAgICAgfVxcclxcblxcclxcblxcclxcblxcclxcblxcclxcbiAgICAgICAgI3RvZ2dsZU1lbnVJY29uIHtcXHJcXG4gICAgICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICAgICAgICAgICAgdG9wOiAyMHB4O1xcclxcbiAgICAgICAgICAgIHJpZ2h0OiAyMHB4O1xcclxcbiAgICAgICAgICAgIHdpZHRoOiA2MHB4O1xcclxcbiAgICAgICAgICAgIGhlaWdodDogNjBweDtcXHJcXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNmI4ODg4O1xcclxcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogOHB4O1xcclxcbiAgICAgICAgICAgIHRyYW5zaXRpb246IHRvcCAwLjNzO1xcclxcblxcclxcbiAgICAgICAgICAgIHotaW5kZXg6IDEwMDA7XFxyXFxuICAgICAgICB9XFxyXFxuXFxyXFxuICAgICAgICAjdG9nZ2xlTWVudUljb246OmJlZm9yZSB7XFxyXFxuICAgICAgICAgICAgY29udGVudDogJyc7XFxyXFxuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICAgICAgICAgIHdpZHRoOiAyOHB4O1xcclxcbiAgICAgICAgICAgIGhlaWdodDogMnB4O1xcclxcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxyXFxuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01cHgpO1xcclxcbiAgICAgICAgICAgIHRyYW5zaXRpb246IDAuMnM7XFxyXFxuICAgICAgICB9XFxyXFxuXFxyXFxuICAgICAgICAjdG9nZ2xlTWVudUljb246OmFmdGVyIHtcXHJcXG4gICAgICAgICAgICBjb250ZW50OiAnJztcXHJcXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgICAgICAgICAgd2lkdGg6IDI4cHg7XFxyXFxuICAgICAgICAgICAgaGVpZ2h0OiAycHg7XFxyXFxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXHJcXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoNXB4KTtcXHJcXG4gICAgICAgICAgICB0cmFuc2l0aW9uOiAwLjJzO1xcclxcbiAgICAgICAgfVxcclxcblxcclxcbiAgICAgICAgI3RvZ2dsZU1lbnVJY29uLmFjdGl2ZTo6YmVmb3JlIHtcXHJcXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMHB4KSByb3RhdGUoNDVkZWcpO1xcclxcblxcclxcbiAgICAgICAgfVxcclxcblxcclxcbiAgICAgICAgI3RvZ2dsZU1lbnVJY29uLmFjdGl2ZTo6YWZ0ZXIge1xcclxcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwcHgpIHJvdGF0ZSgtNDVkZWcpO1xcclxcblxcclxcbiAgICAgICAgfVxcclxcblxcclxcbiAgICAgICAgYXNpZGUjbWVudSB7XFxyXFxuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XFxyXFxuICAgICAgICAgICAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgICAgICAgICAgIHRvcDogMDtcXHJcXG4gICAgICAgICAgICBsZWZ0OiAtMjIwcHg7XFxyXFxuICAgICAgICAgICAgd2lkdGg6IDIyMHB4O1xcclxcbiAgICAgICAgICAgIGhlaWdodDogMTAwdmg7XFxyXFxuICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xcclxcbiAgICAgICAgICAgIGZpbHRlcjogd2hpdGU7XFxyXFxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzc5ODlhMTtcXHJcXG4gICAgICAgICAgICB0cmFuc2l0aW9uOiAwLjNzO1xcclxcbiAgICAgICAgICAgIHotaW5kZXg6IDEwMDA7XFxyXFxuICAgICAgICAgICAgZmlsbDogd2hpdGU7XFxyXFxuXFxyXFxuICAgICAgICB9XFxyXFxuXFxyXFxuICAgICAgICBhc2lkZSNtZW51LmFjdGl2ZSB7XFxyXFxuICAgICAgICAgICAgbGVmdDogMDtcXHJcXG4gICAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAgIG1haW4gYXNpZGUge1xcclxcbiAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XFxyXFxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNlMmU4ZjA7XFxyXFxuICAgICAgICB9XFxyXFxuXFxyXFxuICAgICAgICBtYWluICNDb250YWluZXIge1xcclxcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XFxyXFxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcbiAgICAgICAgfVxcclxcblxcclxcblxcclxcbiAgICAgICAgaGVhZGVyIC5tZW51Q29udHJvbGxlciB7XFxyXFxuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XFxyXFxuICAgICAgICAgICAgd2lkdGg6IDQwcHg7XFxyXFxuICAgICAgICAgICAgaGVpZ2h0OiA0MHB4O1xcclxcbiAgICAgICAgfVxcclxcblxcclxcbiAgICAgICAgaGVhZGVyIC5tZW51Q29udHJvbGxlciBzdmcge1xcclxcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgICAgICAgICAgIHdpZHRoOiA0MHB4O1xcclxcbiAgICAgICAgICAgIGhlaWdodDogNDBweDtcXHJcXG4gICAgICAgICAgICBmaWxsOiB3aGl0ZTtcXHJcXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXHJcXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4XFxyXFxuICAgICAgICB9XFxyXFxuXFxyXFxuICAgICAgICAjdXNlcmxpc3Qge1xcclxcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgICAgICAgICBtYXgtd2lkdGg6IDU1MHB4O1xcclxcbiAgICAgICAgfVxcclxcblxcclxcbiAgICAgICAgZGl2Lmxpc3RDb250YWluZXIge1xcclxcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgICAgICAgICAgZ2FwOiA1cHg7XFxyXFxuICAgICAgICAgICAgbWF4LXdpZHRoOiA1MTVweDtcXHJcXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IDFweCAwcHggM3B4IDBweDtcXHJcXG4gICAgICAgICAgICBtYXJnaW46IDE0cHggMTRweCAwIDE5cHg7XFxyXFxuXFxyXFxuICAgICAgICAgICAgcGFkZGluZzogMTBweDtcXHJcXG5cXHJcXG5cXHJcXG4gICAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAgICN1c2VybGlzdCAuaW50aWFsVGV4dERpc3BsYXkge1xcclxcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAgIC5pbnRpYWxUZXh0RGlzcGxheSBpbWcge1xcclxcbiAgICAgICAgICAgIG1heC13aWR0aDogMTAwJTtcXHJcXG4gICAgICAgICAgICBoZWlnaHQ6IGF1dG87XFxyXFxuICAgICAgICAgICAgcGFkZGluZzogMThweDtcXHJcXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xcclxcbiAgICAgICAgICAgIG9iamVjdC1maXQ6IGNvbnRhaW47XFxyXFxuXFxyXFxuICAgICAgICB9XFxyXFxuXFxyXFxuICAgICAgICAjdXNlcmxpc3QgI2FkZFRvZG9CdG5Db250YWluZXIge1xcclxcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgICAgICAgICBnYXA6IDVweDtcXHJcXG4gICAgICAgICAgICBtYXJnaW46IDI3cHggMCAxMXB4IDI2cHg7XFxyXFxuICAgICAgICB9XFxyXFxuXFxyXFxuICAgICAgICAjdGFzayB7XFxyXFxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICAgICAgICAgIGdhcDogNXB4O1xcclxcbiAgICAgICAgICAgIG1hcmdpbjogMjdweCAwIDExcHggMjZweDtcXHJcXG4gICAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAgICN1c2VybGlzdCAjYWRkVG9kb0J0bkNvbnRhaW5lciBzdmcge1xcclxcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNkYzI2MjY7XFxyXFxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xcclxcbiAgICAgICAgICAgIGZpbGw6IHdoaXRlO1xcclxcbiAgICAgICAgfVxcclxcblxcclxcbiAgICAgICAgI3VzZXJsaXN0ICNhZGRUb2RvQnRuQ29udGFpbmVyIDpob3ZlciB7XFxyXFxuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICAgICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxLjA5KTtcXHJcXG4gICAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAgICN1c2VybGlzdCAjYWRkVG9kb0J0bkNvbnRhaW5lciBidXR0b24ge1xcclxcbiAgICAgICAgICAgIGJvcmRlcjogMDtcXHJcXG4gICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XFxyXFxuICAgICAgICAgICAgY29sb3I6ICNiOTFjMWM7XFxyXFxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogaW5oZXJpdDtcXHJcXG4gICAgICAgICAgICB0cmFuc2l0aW9uOiAwLjNzO1xcclxcbiAgICAgICAgfVxcclxcblxcclxcbiAgICAgICAgI3VzZXJsaXN0ICNhZGRUb2RvQnRuQ29udGFpbmVyIGJ1dHRvbjpob3ZlciB7XFxyXFxuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICAgICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxLjA5KTtcXHJcXG4gICAgICAgIH1cXHJcXG5cXHJcXG5cXHJcXG4gICAgICAgIC5pbm5lcl9jb250YWluZXIgI2Zvcm0ge1xcclxcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICM2NDc0OGI7XFxyXFxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG4gICAgICAgICAgICBtYXgtaGVpZ2h0OiAxMzVweDtcXHJcXG4gICAgICAgICAgICBtYXgtd2lkdGg6IDUxNXB4ICFpbXBvcnRhbnQ7XFxyXFxuICAgICAgICAgICAgaGVpZ2h0OiAxNDBweDtcXHJcXG4gICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDFyZW07XFxyXFxuICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcXHJcXG4gICAgICAgICAgICBtYXgtd2lkdGg6IDQ4MHB4O1xcclxcbiAgICAgICAgICAgIG1hcmdpbjogMTBweCAxMHB4IDAgMTBweDtcXHJcXG4gICAgICAgIH1cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG4gICAgICAgIGRpdi5pbnB1dE5ld3Byb2plY3RGb3JtTmFtZSB7XFxyXFxuICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcXHJcXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2VlM2UzO1xcclxcbiAgICAgICAgICAgIG1heC13aWR0aDogMzAwcHg7XFxyXFxuICAgICAgICAgICAgbWF4LWhlaWdodDogMzAwcHg7XFxyXFxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG4gICAgICAgICAgICBwYWRkaW5nOiAyNXB4O1xcclxcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgICAgICAgICBtYXJnaW46IDYwcHggMCAwIDA7XFxyXFxuICAgICAgICAgICAgYm94LXNoYWRvdzogMHB4IDlweCAzcHggMHB4O1xcclxcblxcclxcbiAgICAgICAgfVxcclxcblxcclxcblxcclxcbiAgICAgICAgLmlucHV0TmV3cHJvamVjdEZvcm1OYW1lIGgyIHtcXHJcXG4gICAgICAgICAgICBtYXJnaW46IDAgMCAxMHB4IDA7XFxyXFxuICAgICAgICB9XFxyXFxuXFxyXFxuXFxyXFxuICAgICAgICAuaW5wdXROZXdwcm9qZWN0Rm9ybU5hbWUgLmlucHV0TmV3UHJvamVjdE5hbWUge1xcclxcbiAgICAgICAgICAgIG1heC13aWR0aDogMzAwcHg7XFxyXFxuICAgICAgICAgICAgbWF4LWhlaWdodDogMzVweDtcXHJcXG4gICAgICAgICAgICBwYWRkaW5nOiAxNHB4O1xcclxcbiAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcXHJcXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA3cHg7XFxyXFxuICAgICAgICB9XFxyXFxuXFxyXFxuICAgICAgICBpbnB1dC5TYXZlUHJvamVjdE5hbWUge1xcclxcbiAgICAgICAgICAgIHBhZGRpbmc6IDlweDtcXHJcXG4gICAgICAgICAgICBib3JkZXI6IG5vbmU7XFxyXFxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogOHB4O1xcclxcbiAgICAgICAgICAgIG1heC13aWR0aDogMTAwcHg7XFxyXFxuICAgICAgICAgICAgaGVpZ2h0OiA0MHB4O1xcclxcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTlweDtcXHJcXG5cXHJcXG4gICAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAgIC5wcm9qZWN0TmFtZVNhdmVyQnRuQ29udGFpbmVyIHtcXHJcXG4gICAgICAgICAgICBtYXJnaW46IDEwcHggMDtcXHJcXG4gICAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAgIC5wcm9qZWN0TmFtZVNhdmVyQnRuQ29udGFpbmVyIGJ1dHRvbiB7XFxyXFxuICAgICAgICAgICAgcGFkZGluZzogOXB4O1xcclxcbiAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcXHJcXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA4cHg7XFxyXFxuICAgICAgICAgICAgd2lkdGg6IDEwMHB4O1xcclxcbiAgICAgICAgICAgIGhlaWdodDogNDBweDtcXHJcXG4gICAgICAgICAgICBmb250LXNpemU6IDE5cHg7XFxyXFxuICAgICAgICB9XFxyXFxuXFxyXFxuXFxyXFxuICAgICAgICAuaW5uZXJfY29udGFpbmVyICNQcm9qZWN0Rm9ybSB7XFxyXFxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzY0NzQ4YjtcXHJcXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbiAgICAgICAgICAgIG1heC1oZWlnaHQ6IDEzNHB4O1xcclxcbiAgICAgICAgICAgIG1heC13aWR0aDogNTE1cHg7XFxyXFxuICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcXHJcXG4gICAgICAgICAgICBtYXgtd2lkdGg6IDUwMHB4O1xcclxcbiAgICAgICAgICAgIG1hcmdpbjogOXB4IDEwcHggMCAyM3B4O1xcclxcbiAgICAgICAgfVxcclxcblxcclxcbiAgICAgICAgLnByb2plY3RGb3JtRGV0YWlscyB7XFxyXFxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgICAgICAgICBwYWRkaW5nOiAxMHB4O1xcclxcbiAgICAgICAgICAgIGhlaWdodDogODBweDtcXHJcXG4gICAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAgIGRpdi5wcmlvcml0eURhdGVPbkxhcmdlU2NyZWVuIHtcXHJcXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gICAgICAgICAgICB0b3A6IDA7XFxyXFxuICAgICAgICAgICAgbWF4LXdpZHRoOiAyMDBweDtcXHJcXG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICAgICAgfVxcclxcblxcclxcbiAgICAgICAgLnByb2plY3RJbnB1dENvbnRhaW5lciB7XFxyXFxuICAgICAgICAgICAgbWF4LXdpZHRoOiAyMDBweDtcXHJcXG4gICAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAgIC5wcm9qZWN0SW5wdXRDb250YWluZXIgcCBpbnB1dCB7XFxyXFxuICAgICAgICAgICAgbWF4LXdpZHRoOiAyMDBweDtcXHJcXG4gICAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAgIC5pbm5lclRhc2tDb250YWluZXIgLmVkaXQge1xcclxcbiAgICAgICAgICAgIG1heC13aWR0aDogMTQwcHg7XFxyXFxuICAgICAgICB9XFxyXFxuXFxyXFxuICAgICAgICAucHJvamVjdElucHV0Q29udGFpbmVyIC5QZGVzY3JpcHRpb25JbnB1dENvbnRhaW5lciB7XFxyXFxuICAgICAgICAgICAgbWFyZ2luOiAxMHB4IDAgMCAwO1xcclxcbiAgICAgICAgfVxcclxcblxcclxcbiAgICAgICAgZGl2I2NvbmZpZ1ByaW9yaXR5RGF0ZU9uTW9iaWxlIHtcXHJcXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgICAgICAgICAgbWF4LXdpZHRoOiAyMDBweDtcXHJcXG4gICAgICAgICAgICBwb3NpdGlvbjogc3RhdGljO1xcclxcbiAgICAgICAgfVxcclxcblxcclxcbiAgICAgICAgI2NvbmZpZ1ByaW9yaXR5RGF0ZU9uTW9iaWxlICNwcmlvcml0eSwgI2RhdGVQaWNrZXIge1xcclxcbiAgICAgICAgICAgIHBhZGRpbmc6IDJweDtcXHJcXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA2cHg7XFxyXFxuICAgICAgICAgICAgbWF4LXdpZHRoOiAxMDRweDtcXHJcXG4gICAgICAgICAgICBtaW4td2lkdGg6IDgwcHg7XFxyXFxuICAgICAgICB9XFxyXFxuXFxyXFxuICAgICAgICAjUHJvamVjdEZvcm0gLmZvb3RlciB7XFxyXFxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gICAgICAgICAgICBwYWRkaW5nOiAwIDEwcHg7XFxyXFxuICAgICAgICAgICAgZ2FwOiAwO1xcclxcbiAgICAgICAgfVxcclxcblxcclxcblxcclxcblxcclxcblxcclxcbiAgICAgICAgI1Byb2plY3RGb3JtIC5wcm9qZWN0QnV0dG9uc0NvbnRhaW5lciB7XFxyXFxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgICAgICAgICBwYWRkaW5nOiAwIDEwcHg7XFxyXFxuICAgICAgICAgICAgZ2FwOiAwO1xcclxcbiAgICAgICAgfVxcclxcblxcclxcbiAgICAgICAgI2Zvcm0gLmZvcm1EZXRhaWxzIHtcXHJcXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICAgICAgICAgIHBhZGRpbmc6IDEwcHg7XFxyXFxuICAgICAgICAgICAgbWFyZ2luOiAwO1xcclxcbiAgICAgICAgfVxcclxcblxcclxcbiAgICAgICAgI2Zvcm1Gb290ZXJPbk1vYmlsZSB7XFxyXFxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gICAgICAgICAgICBwYWRkaW5nOiAwIDEwcHg7XFxyXFxuICAgICAgICB9XFxyXFxuXFxyXFxuXFxyXFxuICAgICAgICAjZm9ybUZvb3Rlck9uTW9iaWxlIC5idXR0b25zIHtcXHJcXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICAgICAgICAgIHBhZGRpbmc6IDAgMTBweDtcXHJcXG4gICAgICAgICAgICBtYXJnaW46IDA7XFxyXFxuICAgICAgICAgICAgZ2FwOiAwO1xcclxcbiAgICAgICAgfVxcclxcblxcclxcblxcclxcblxcclxcbiAgICAgICAgLnByaW9yaXR5RGF0ZUxhcmdlU2NyZWVuIHtcXHJcXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgICAgICB9XFxyXFxuXFxyXFxuICAgICAgICAjZm9ybSAuaW5wdXRzIHtcXHJcXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgICAgICAgICAgbWF4LXdpZHRoOiAxNTBweDtcXHJcXG5cXHJcXG4gICAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAgICNmb3JtIC5maXJzdC1pbnB1dENvbnRhaW5lciBpbnB1dCwgLlB0aXRsZUlucHV0Q29udGFpbmVyIGlucHV0IHtcXHJcXG4gICAgICAgICAgICBtYXgtd2lkdGg6IDE2NXB4O1xcclxcbiAgICAgICAgICAgIG1heC1oZWlnaHQ6IDE1cHg7XFxyXFxuICAgICAgICAgICAgYm9yZGVyOiBub25lO1xcclxcbiAgICAgICAgICAgIG91dGxpbmU6IG5vbmU7XFxyXFxuICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xcclxcbiAgICAgICAgICAgIG1hcmdpbjogMTBweCAwO1xcclxcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IGluaGVyaXQ7XFxyXFxuICAgICAgICB9XFxyXFxuXFxyXFxuICAgICAgICAjZm9ybSAuc2Vjb25kLWlucHV0Q29udGFpbmVyIGlucHV0LCAuUGRlc2NyaXB0aW9uSW5wdXRDb250YWluZXIgaW5wdXQge1xcclxcbiAgICAgICAgICAgIG1heC13aWR0aDogMTc4cHg7XFxyXFxuICAgICAgICAgICAgbWF4LWhlaWdodDogMTVweDtcXHJcXG4gICAgICAgICAgICBib3JkZXI6IG5vbmU7XFxyXFxuICAgICAgICAgICAgb3V0bGluZTogbm9uZTtcXHJcXG4gICAgICAgICAgICBjb2xvcjogd2hpdGU7XFxyXFxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogaW5oZXJpdDtcXHJcXG4gICAgICAgICAgICBtYXJnaW46IDA7XFxyXFxuICAgICAgICB9XFxyXFxuXFxyXFxuXFxyXFxuICAgICAgICAjZm9ybSAub3RoZXItb3B0aW9ucy1vbi1mb3JtcyBidXR0b24sICNjb25maWdQcmlvcml0eURhdGVPbk1vYmlsZSAjcHJpb3JpdHksICNkYXRlUGlja2VyIHtcXHJcXG4gICAgICAgICAgICBwYWRkaW5nOiA0cHg7XFxyXFxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNnB4O1xcclxcbiAgICAgICAgICAgIG1heC13aWR0aDogMTA0cHg7XFxyXFxuICAgICAgICAgICAgbWluLXdpZHRoOiA4MHB4O1xcclxcbiAgICAgICAgfVxcclxcblxcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIEBtZWRpYSAobWluLXdpZHRoOiA1NTFweCkgYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XFxyXFxuICAgICAgICBib2R5IG1haW4ge1xcclxcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG5cXHJcXG4gICAgICAgIH1cXHJcXG5cXHJcXG5cXHJcXG4gICAgICAgIG1haW4gaGVhZGVyIHtcXHJcXG5cXHJcXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmRhNGFmO1xcclxcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgICAgICAgICAgZ2FwOiAxMHB4O1xcclxcbiAgICAgICAgfVxcclxcblxcclxcbiAgICAgICAgbWFpbiBhc2lkZSB7XFxyXFxuICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcXHJcXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2UyZThmMDtcXHJcXG4gICAgICAgICAgICB6LWluZGV4OiAyO1xcclxcbiAgICAgICAgfVxcclxcblxcclxcbiAgICAgICAgYXNpZGUgdWwsIHVsIHNlbGVjdCB7XFxyXFxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcXHJcXG4gICAgICAgICAgICBmaWxsOiB3aGl0ZTtcXHJcXG4gICAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAgIHNlbGVjdCNwcm9qZWN0LWRyb3Bkb3duIHtcXHJcXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNDIsIDQwLCA0OSk7XFxyXFxuICAgICAgICB9XFxyXFxuXFxyXFxuICAgICAgICBtYWluICNDb250YWluZXIge1xcclxcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XFxyXFxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcbiAgICAgICAgICAgIHotaW5kZXg6IDE7XFxyXFxuXFxyXFxuICAgICAgICB9XFxyXFxuXFxyXFxuICAgICAgICBoZWFkZXIgLm1lbnVDb250cm9sbGVyIHtcXHJcXG5cXHJcXG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcXHJcXG4gICAgICAgICAgICB3aWR0aDogNDBweDtcXHJcXG4gICAgICAgICAgICBoZWlnaHQ6IDQwcHg7XFxyXFxuXFxyXFxuICAgICAgICB9XFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuICAgICAgICAjdG9nZ2xlTWVudUljb24ge1xcclxcbiAgICAgICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gICAgICAgICAgICB0b3A6IDIwcHg7XFxyXFxuICAgICAgICAgICAgcmlnaHQ6IDIwcHg7XFxyXFxuICAgICAgICAgICAgd2lkdGg6IDUwcHg7XFxyXFxuICAgICAgICAgICAgaGVpZ2h0OiA1MHB4O1xcclxcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICM2ZjllOWU7XFxyXFxuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA4cHg7XFxyXFxuICAgICAgICAgICAgdHJhbnNpdGlvbjogdG9wIDAuM3M7XFxyXFxuICAgICAgICAgICAgei1pbmRleDogMTAwMDtcXHJcXG5cXHJcXG4gICAgICAgICAgICB6LWluZGV4OiAxMDAwO1xcclxcbiAgICAgICAgfVxcclxcblxcclxcbiAgICAgICAgI3RvZ2dsZU1lbnVJY29uOjpiZWZvcmUge1xcclxcbiAgICAgICAgICAgIGNvbnRlbnQ6ICcnO1xcclxcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgICAgICAgICB3aWR0aDogMjhweDtcXHJcXG4gICAgICAgICAgICBoZWlnaHQ6IDJweDtcXHJcXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcclxcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNXB4KTtcXHJcXG4gICAgICAgICAgICB0cmFuc2l0aW9uOiAwLjJzO1xcclxcbiAgICAgICAgfVxcclxcblxcclxcbiAgICAgICAgI3RvZ2dsZU1lbnVJY29uOjphZnRlciB7XFxyXFxuICAgICAgICAgICAgY29udGVudDogJyc7XFxyXFxuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICAgICAgICAgIHdpZHRoOiAyOHB4O1xcclxcbiAgICAgICAgICAgIGhlaWdodDogMnB4O1xcclxcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxyXFxuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDVweCk7XFxyXFxuICAgICAgICAgICAgdHJhbnNpdGlvbjogMC4ycztcXHJcXG4gICAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAgICN0b2dnbGVNZW51SWNvbi5hY3RpdmU6OmJlZm9yZSB7XFxyXFxuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDBweCkgcm90YXRlKDQ1ZGVnKTtcXHJcXG5cXHJcXG4gICAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAgICN0b2dnbGVNZW51SWNvbi5hY3RpdmU6OmFmdGVyIHtcXHJcXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMHB4KSByb3RhdGUoLTQ1ZGVnKTtcXHJcXG5cXHJcXG4gICAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAgIGFzaWRlI21lbnUge1xcclxcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgICAgICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gICAgICAgICAgICB0b3A6IDA7XFxyXFxuICAgICAgICAgICAgbGVmdDogLTIyMHB4O1xcclxcbiAgICAgICAgICAgIHdpZHRoOiAyMjBweDtcXHJcXG4gICAgICAgICAgICBoZWlnaHQ6IDEwMHZoO1xcclxcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQtY29sb3IpO1xcclxcbiAgICAgICAgICAgIHRyYW5zaXRpb246IDAuM3M7XFxyXFxuXFxyXFxuICAgICAgICB9XFxyXFxuXFxyXFxuICAgICAgICBhc2lkZSNtZW51LmFjdGl2ZSB7XFxyXFxuICAgICAgICAgICAgbGVmdDogMDtcXHJcXG4gICAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAgIGFzaWRlIHVsIHtcXHJcXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xcclxcbiAgICAgICAgICAgIGZpbGw6IHdoaXRlO1xcclxcbiAgICAgICAgfVxcclxcblxcclxcbiAgICAgICAgaGVhZGVyIC5tZW51Q29udHJvbGxlciBzdmcge1xcclxcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgICAgICAgICAgIHdpZHRoOiA0MHB4O1xcclxcbiAgICAgICAgICAgIGhlaWdodDogNDBweDtcXHJcXG4gICAgICAgICAgICBmaWxsOiB3aGl0ZTtcXHJcXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXHJcXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4XFxyXFxuICAgICAgICB9XFxyXFxuXFxyXFxuXFxyXFxuICAgICAgICAjdXNlcmxpc3QgI2FkZFRvZG9CdG5Db250YWluZXIge1xcclxcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgICAgICAgICBnYXA6IDVweDtcXHJcXG4gICAgICAgICAgICBtYXJnaW46IDI3cHggMCAxMXB4IDI2cHg7XFxyXFxuICAgICAgICB9XFxyXFxuXFxyXFxuICAgICAgICAjdGFzayB7XFxyXFxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICAgICAgICAgIGdhcDogNXB4O1xcclxcbiAgICAgICAgICAgIG1hcmdpbjogMjdweCAwIDExcHggMjZweDtcXHJcXG4gICAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAgICN1c2VybGlzdCAjYWRkVG9kb0J0bkNvbnRhaW5lciBzdmcge1xcclxcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNkYzI2MjY7XFxyXFxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xcclxcbiAgICAgICAgICAgIGZpbGw6IHdoaXRlO1xcclxcbiAgICAgICAgfVxcclxcblxcclxcbiAgICAgICAgI3VzZXJsaXN0ICNhZGRUb2RvQnRuQ29udGFpbmVyIDpob3ZlciB7XFxyXFxuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICAgICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxLjA5KTtcXHJcXG4gICAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAgICN1c2VybGlzdCAjYWRkVG9kb0J0bkNvbnRhaW5lciBidXR0b24ge1xcclxcbiAgICAgICAgICAgIGJvcmRlcjogMDtcXHJcXG4gICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XFxyXFxuICAgICAgICAgICAgY29sb3I6ICNiOTFjMWM7XFxyXFxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogaW5oZXJpdDtcXHJcXG4gICAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAgICN1c2VybGlzdCAjYWRkVG9kb0J0bkNvbnRhaW5lciBidXR0b246aG92ZXIge1xcclxcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMS4wOSk7XFxyXFxuICAgICAgICB9XFxyXFxuXFxyXFxuICAgICAgICBkaXYubGlzdENvbnRhaW5lciB7XFxyXFxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgICAgICAgICBnYXA6IDVweDtcXHJcXG4gICAgICAgICAgICBtYXgtd2lkdGg6IDcxNHB4O1xcclxcblxcclxcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxyXFxuICAgICAgICAgICAgYm94LXNoYWRvdzogMXB4IDBweCAzcHggMHB4O1xcclxcbiAgICAgICAgICAgIG1hcmdpbjogMThweCA2MHB4O1xcclxcbiAgICAgICAgICAgIHBhZGRpbmc6IDE1cHg7XFxyXFxuICAgICAgICB9XFxyXFxuXFxyXFxuICAgICAgICAjdXNlcmxpc3QgLmludGlhbFRleHREaXNwbGF5IHtcXHJcXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgICAgICB9XFxyXFxuXFxyXFxuICAgICAgICAuaW50aWFsVGV4dERpc3BsYXkgcCB7XFxyXFxuICAgICAgICAgICAgbWF4LXdpZHRoOiA1MDBweDtcXHJcXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICAgICAgICAgIG1heC13aWR0aDogNTAwcHg7XFxyXFxuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XFxyXFxuICAgICAgICB9XFxyXFxuXFxyXFxuICAgICAgICAuaW50aWFsVGV4dERpc3BsYXkgaW1nIHtcXHJcXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgICAgICAgICBoZWlnaHQ6IGF1dG87XFxyXFxuICAgICAgICAgICAgcGFkZGluZzogMjBweDtcXHJcXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA0MXB4O1xcclxcbiAgICAgICAgICAgIG9iamVjdC1maXQ6IGNvbnRhaW47XFxyXFxuICAgICAgICB9XFxyXFxuXFxyXFxuICAgICAgICAuaW5uZXJfY29udGFpbmVyICNmb3JtIHtcXHJcXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjQ3NDhiO1xcclxcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxyXFxuICAgICAgICAgICAgaGVpZ2h0OiAxNTBweDtcXHJcXG4gICAgICAgICAgICBkaXNwbGF5OiBub25lO1xcclxcbiAgICAgICAgICAgIG1heC13aWR0aDogNjAwcHg7XFxyXFxuXFxyXFxuICAgICAgICAgICAgbWFyZ2luOiAxN3B4O1xcclxcbiAgICAgICAgfVxcclxcblxcclxcblxcclxcbiAgICAgICAgI2Zvcm0gZGl2LmZvcm1EZXRhaWxzIHtcXHJcXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcblxcclxcbiAgICAgICAgICAgIHBhZGRpbmc6IDEwcHg7XFxyXFxuICAgICAgICAgICAgbWFyZ2luOiAwO1xcclxcbiAgICAgICAgfVxcclxcblxcclxcbiAgICAgICAgLnByaW9yaXR5RGF0ZUxhcmdlU2NyZWVuIHtcXHJcXG4gICAgICAgICAgICBkaXNwbGF5OiBub25lO1xcclxcbiAgICAgICAgfVxcclxcblxcclxcbiAgICAgICAgI2Zvcm0gLmlucHV0cyB7XFxyXFxuICAgICAgICAgICAgbWF4LXdpZHRoOiAxNTBweFxcclxcbiAgICAgICAgfVxcclxcblxcclxcbiAgICAgICAgI2Zvcm0gLmZpcnN0LWlucHV0Q29udGFpbmVyIGlucHV0LCAuUHRpdGxlSW5wdXRDb250YWluZXIgaW5wdXQsXFxyXFxuICAgICAgICAjZm9ybSAuc2Vjb25kLWlucHV0Q29udGFpbmVyIGlucHV0LCAuUGRlc2NyaXB0aW9uSW5wdXRDb250YWluZXIgaW5wdXQge1xcclxcbiAgICAgICAgICAgIG1heC13aWR0aDogNjAwcHg7XFxyXFxuICAgICAgICAgICAgaGVpZ2h0OiAyNXB4O1xcclxcbiAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcXHJcXG4gICAgICAgICAgICBvdXRsaW5lOiBub25lO1xcclxcbiAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcXHJcXG4gICAgICAgICAgICBtYXJnaW46IDEwcHggMCAwIDA7XFxyXFxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogaW5oZXJpdDtcXHJcXG4gICAgICAgIH1cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG4gICAgICAgIHAuc2Vjb25kLWlucHV0Q29udGFpbmVyIHtcXHJcXG4gICAgICAgICAgICBtYXJnaW46IDA7XFxyXFxuICAgICAgICB9XFxyXFxuXFxyXFxuICAgICAgICAjZm9ybSAuYnV0dG9ucyB7XFxyXFxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgICAgICAgICBtYXJnaW46IDFweCAyM3B4O1xcclxcblxcclxcblxcclxcblxcclxcbiAgICAgICAgfVxcclxcblxcclxcbiAgICAgICAgI2NvbmZpZ1ByaW9yaXR5RGF0ZU9uTW9iaWxlIHtcXHJcXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgICAgICAgICAgcG9zaXRpb246IHN0YXRpYztcXHJcXG5cXHJcXG4gICAgICAgIH1cXHJcXG5cXHJcXG5cXHJcXG4gICAgICAgICNmb3JtIC5vdGhlci1vcHRpb25zLW9uLWZvcm1zIGJ1dHRvbiwgI3ByaW9yaXR5LCAjZGF0ZVBpY2tlciB7XFxyXFxuICAgICAgICAgICAgcGFkZGluZzogN3B4O1xcclxcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDlweDtcXHJcXG4gICAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAgIGZvcm0jUHJvamVjdEZvcm0ge1xcclxcblxcclxcblxcclxcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICM2NDc0OGI7XFxyXFxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG4gICAgICAgICAgICBoZWlnaHQ6IDE1MHB4O1xcclxcbiAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XFxyXFxuICAgICAgICAgICAgbWF4LXdpZHRoOiA2OTNweDtcXHJcXG4gICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDFyZW07XFxyXFxuICAgICAgICAgICAgbWFyZ2luOiA5cHggNjFweDtcXHJcXG4gICAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAgIGRpdi5wcm9qZWN0Rm9ybURldGFpbHMge1xcclxcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICAgICAgICAgICAgdG9wOiAwO1xcclxcbiAgICAgICAgfVxcclxcblxcclxcblxcclxcblxcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgICovIC5wcm9qZWN0QnV0dG9uc0NvbnRhaW5lciB7XFxyXFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICBzZWxlY3QjcHJpb3JpdHkge1xcclxcbiAgICAgICAgcGFkZGluZzogNHB4O1xcclxcbiAgICAgICAgYm9yZGVyLXJhZGl1czogOXB4O1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIGlucHV0I2RhdGVQaWNrZXIge1xcclxcblxcclxcbiAgICAgICAgcGFkZGluZzogM3B4O1xcclxcbiAgICAgICAgYm9yZGVyLXJhZGl1czogOXB4O1xcclxcbiAgICB9XFxyXFxuXFxyXFxuXFxyXFxuICAgIEBtZWRpYSAobWluLXdpZHRoOiA3NjlweCkgYW5kIChtYXgtd2lkdGg6IDEwMDBweCkge1xcclxcblxcclxcbiAgICAgICAgYm9keSBtYWluIHtcXHJcXG5cXHJcXG4gICAgICAgICAgICBkaXNwbGF5OiBncmlkO1xcclxcblxcclxcbiAgICAgICAgfVxcclxcblxcclxcblxcclxcbiAgICAgICAgbWFpbiBoZWFkZXIge1xcclxcbiAgICAgICAgICAgIGdyaWQtYXJlYTogMSAvIDIgLyAyIC8gNjtcXHJcXG5cXHJcXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmRhNGFmO1xcclxcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgICAgICAgICAgZ2FwOiAxMHB4O1xcclxcbiAgICAgICAgfVxcclxcblxcclxcbiAgICAgICAgbWFpbiBhc2lkZSB7XFxyXFxuXFxyXFxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNlMmU4ZjA7XFxyXFxuICAgICAgICB9XFxyXFxuXFxyXFxuICAgICAgICBtYWluICNDb250YWluZXIge1xcclxcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XFxyXFxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcbiAgICAgICAgICAgIHotaW5kZXg6IDE7XFxyXFxuXFxyXFxuICAgICAgICB9XFxyXFxuXFxyXFxuICAgICAgICBoZWFkZXIgLm1lbnVDb250cm9sbGVyIHtcXHJcXG5cXHJcXG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcXHJcXG4gICAgICAgICAgICB3aWR0aDogNDBweDtcXHJcXG4gICAgICAgICAgICBoZWlnaHQ6IDQwcHg7XFxyXFxuXFxyXFxuICAgICAgICB9XFxyXFxuXFxyXFxuICAgICAgICBoZWFkZXIgLm1lbnVDb250cm9sbGVyIHN2ZyB7XFxyXFxuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XFxyXFxuICAgICAgICAgICAgd2lkdGg6IDQwcHg7XFxyXFxuICAgICAgICAgICAgaGVpZ2h0OiA0MHB4O1xcclxcbiAgICAgICAgICAgIGZpbGw6IHdoaXRlO1xcclxcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcclxcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHhcXHJcXG4gICAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAgICN1c2VybGlzdCAuaW50aWFsVGV4dERpc3BsYXkge1xcclxcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgICAgICB9XFxyXFxuXFxyXFxuICAgICAgICAjdXNlcmxpc3QgLmludGlhbFRleHREaXNwbGF5IHAge1xcclxcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xcclxcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xcclxcbiAgICAgICAgICAgIG1hcmdpbjogMTBweCAwIDAgMDtcXHJcXG4gICAgICAgICAgICBtYXgtd2lkdGg6IDYwMHB4O1xcclxcbiAgICAgICAgfVxcclxcblxcclxcbiAgICAgICAgI3VzZXJsaXN0ICNhZGRUb2RvQnRuQ29udGFpbmVyIHtcXHJcXG4gICAgICAgICAgICBkaXNwbGF5OiBub25lO1xcclxcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgICAgICAgICAgZ2FwOiA1cHg7XFxyXFxuICAgICAgICAgICAgbWFyZ2luOiAyN3B4IDAgMTFweCAyNnB4O1xcclxcbiAgICAgICAgfVxcclxcblxcclxcbiAgICAgICAgI3Rhc2sge1xcclxcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgICAgICAgICBnYXA6IDVweDtcXHJcXG4gICAgICAgICAgICBtYXJnaW46IDI3cHggMCAxMXB4IDI2cHg7XFxyXFxuICAgICAgICB9XFxyXFxuXFxyXFxuICAgICAgICAjdXNlcmxpc3QgI2FkZFRvZG9CdG5Db250YWluZXIgc3ZnIHtcXHJcXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGMyNjI2O1xcclxcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXHJcXG4gICAgICAgICAgICBmaWxsOiB3aGl0ZTtcXHJcXG4gICAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAgICN1c2VybGlzdCAjYWRkVG9kb0J0bkNvbnRhaW5lciA6aG92ZXIge1xcclxcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMS4wOSk7XFxyXFxuICAgICAgICB9XFxyXFxuXFxyXFxuICAgICAgICAjdXNlcmxpc3QgI2FkZFRvZG9CdG5Db250YWluZXIgYnV0dG9uIHtcXHJcXG4gICAgICAgICAgICBib3JkZXI6IDA7XFxyXFxuICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xcclxcbiAgICAgICAgICAgIGNvbG9yOiAjYjkxYzFjO1xcclxcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IGluaGVyaXQ7XFxyXFxuICAgICAgICB9XFxyXFxuXFxyXFxuICAgICAgICAjdXNlcmxpc3QgI2FkZFRvZG9CdG5Db250YWluZXIgYnV0dG9uOmhvdmVyIHtcXHJcXG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgICAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEuMDkpO1xcclxcbiAgICAgICAgfVxcclxcblxcclxcbiAgICAgICAgZGl2Lmxpc3RDb250YWluZXIge1xcclxcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgICAgICAgICAgZ2FwOiA1cHg7XFxyXFxuICAgICAgICAgICAgbWF4LXdpZHRoOiA3MTRweDtcXHJcXG5cXHJcXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IDFweCAwcHggM3B4IDBweDtcXHJcXG4gICAgICAgICAgICBtYXJnaW46IDE4cHggNjBweDtcXHJcXG4gICAgICAgICAgICBwYWRkaW5nOiAxNXB4O1xcclxcbiAgICAgICAgfVxcclxcblxcclxcblxcclxcblxcclxcblxcclxcblxcclxcbiAgICAgICAgLmlubmVyX2NvbnRhaW5lciAjZm9ybSB7XFxyXFxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzY0NzQ4YjtcXHJcXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbiAgICAgICAgICAgIGhlaWdodDogMTUwcHg7XFxyXFxuICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcXHJcXG4gICAgICAgICAgICBtYXgtd2lkdGg6IDc1MHB4O1xcclxcblxcclxcbiAgICAgICAgICAgIG1hcmdpbjogMTdweDtcXHJcXG4gICAgICAgIH1cXHJcXG5cXHJcXG5cXHJcXG4gICAgICAgICNmb3JtIGRpdi5mb3JtRGV0YWlscyB7XFxyXFxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG5cXHJcXG4gICAgICAgICAgICBwYWRkaW5nOiA5cHggMjBweDtcXHJcXG4gICAgICAgICAgICBtYXJnaW46IDA7XFxyXFxuICAgICAgICB9XFxyXFxuXFxyXFxuICAgICAgICAucHJpb3JpdHlEYXRlTGFyZ2VTY3JlZW4ge1xcclxcbiAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XFxyXFxuICAgICAgICB9XFxyXFxuXFxyXFxuICAgICAgICAjZm9ybSAuaW5wdXRzIHtcXHJcXG4gICAgICAgICAgICBtYXgtd2lkdGg6IDE1MHB4XFxyXFxuICAgICAgICB9XFxyXFxuXFxyXFxuICAgICAgICAjZm9ybSAuZmlyc3QtaW5wdXRDb250YWluZXIgaW5wdXQsIC5QdGl0bGVJbnB1dENvbnRhaW5lciBpbnB1dCB7XFxyXFxuICAgICAgICAgICAgbWF4LXdpZHRoOiA0MjBweDtcXHJcXG4gICAgICAgICAgICBtYXgtaGVpZ2h0OiA2MHB4O1xcclxcbiAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcXHJcXG4gICAgICAgICAgICBvdXRsaW5lOiBub25lO1xcclxcbiAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcXHJcXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmhlcml0O1xcclxcbiAgICAgICAgICAgIG1hcmdpbjogMDtcXHJcXG4gICAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAgICNmb3JtIC5zZWNvbmQtaW5wdXRDb250YWluZXIgaW5wdXQsIC5QZGVzY3JpcHRpb25JbnB1dENvbnRhaW5lciBpbnB1dCB7XFxyXFxuICAgICAgICAgICAgbWF4LXdpZHRoOiA0MjBweDtcXHJcXG4gICAgICAgICAgICBtYXgtaGVpZ2h0OiA2MHB4O1xcclxcbiAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcXHJcXG4gICAgICAgICAgICBvdXRsaW5lOiBub25lO1xcclxcbiAgICAgICAgICAgIGNvbG9yOiByZ2IoOTAsIDc3LCA3Nyk7XFxyXFxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogaW5oZXJpdDtcXHJcXG4gICAgICAgICAgICBtYXJnaW46IDA7XFxyXFxuICAgICAgICB9XFxyXFxuXFxyXFxuXFxyXFxuICAgICAgICAjZm9ybSAuYnV0dG9ucyB7XFxyXFxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICAgICAgICAgICAgbWFyZ2luOiAxcHggMzNweFxcclxcbiAgICAgICAgfVxcclxcblxcclxcbiAgICAgICAgZm9ybSNQcm9qZWN0Rm9ybSB7XFxyXFxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzY0NzQ4YjtcXHJcXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbiAgICAgICAgICAgIGhlaWdodDogMTUwcHg7XFxyXFxuICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcXHJcXG4gICAgICAgICAgICBtYXgtd2lkdGg6IDY5M3B4O1xcclxcbiAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMXJlbTtcXHJcXG4gICAgICAgICAgICBtYXJnaW46IDlweCA2MXB4O1xcclxcblxcclxcbiAgICAgICAgfVxcclxcblxcclxcbiAgICAgICAgZGl2LnByb2plY3RGb3JtRGV0YWlscyB7XFxyXFxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gICAgICAgICAgICB0b3A6IDA7XFxyXFxuICAgICAgICB9XFxyXFxuXFxyXFxuICAgICAgICBkaXYucHJpb3JpdHlEYXRlT25MYXJnZVNjcmVlbiB7XFxyXFxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICAgICAgICAgIHRvcDogMDtcXHJcXG5cXHJcXG5cXHJcXG4gICAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAgIC5wcm9qZWN0QnV0dG9uc0NvbnRhaW5lciB7XFxyXFxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgICAgIH1cXHJcXG5cXHJcXG4gICAgICAgICNjb25maWdQcmlvcml0eURhdGVPbk1vYmlsZSB7XFxyXFxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICAgICAgICAgIHBvc2l0aW9uOiBzdGF0aWM7XFxyXFxuICAgICAgICB9XFxyXFxuXFxyXFxuICAgICAgICAjZm9ybSAub3RoZXItb3B0aW9ucy1vbi1mb3JtcyBidXR0b24sICNwcmlvcml0eSwgI2RhdGVQaWNrZXIge1xcclxcbiAgICAgICAgICAgIHBhZGRpbmc6IDhweDtcXHJcXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA2cHg7XFxyXFxuICAgICAgICAgICAgYm9yZGVyOiBub25lO1xcclxcbiAgICAgICAgfVxcclxcblxcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIG1haW4ge1xcclxcbiAgICAgICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMTkwcHggMWZyO1xcclxcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiA3MHB4IDU3MHB4O1xcclxcbiAgICB9XFxyXFxuXFxyXFxuXFxyXFxuICAgIGhlYWRlciB7XFxyXFxuICAgICAgICBncmlkLWFyZWE6IDEgLyAyIC8gMiAvIDY7XFxyXFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmRhNGFmO1xcclxcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICAgICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICBhc2lkZSB7XFxyXFxuICAgICAgICBncmlkLWFyZWE6IDEvIDEvIDQvIDI7XFxyXFxuICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTJlOGYwO1xcclxcblxcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgICNDb250YWluZXIge1xcclxcbiAgICAgICAgZ3JpZC1hcmVhOiAyIC8gMiAvIDMgLyA0O1xcclxcblxcclxcbiAgICAgICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMTAwcHggNjUwcHggMzUwcHg7XFxyXFxuICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG4gICAgLmlubmVyX2NvbnRhaW5lciB7XFxyXFxuICAgICAgICBncmlkLWFyZWE6IDEgLyAyIC8gMyAvIDM7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG5cXHJcXG4gICAgLmludGlhbFRleHREaXNwbGF5IHtcXHJcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICAgICAgcGFkZGluZzogMTBweDtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAuaW50aWFsVGV4dERpc3BsYXkgcCB7XFxyXFxuICAgICAgICBmb250LXNpemU6IDEuMnJlbTtcXHJcXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XFxyXFxuICAgICAgICBtYXJnaW46IDEwcHggMCAwIDA7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLmludGlhbFRleHREaXNwbGF5IGltZyB7XFxyXFxuICAgICAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgICAgIGhlaWdodDogYXV0bztcXHJcXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDMwcHg7XFxyXFxuICAgICAgICBwYWRkaW5nOiAyMHB4O1xcclxcblxcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgICNhZGRUb2RvQnRuQ29udGFpbmVyIHtcXHJcXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLmVtcHR5IHtcXHJcXG4gICAgICAgIGdyaWQtYXJlYTogMSAvIDMgLyA1IC8gNDtcXHJcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmOGY4Zjg7XFxyXFxuICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4vaW1hZ2VzL1RvZG8tMS5qcGcnKTtcXHJcXG4gICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxyXFxuICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG4gICAgLm1lbnVDb250cm9sbGVyIHtcXHJcXG5cXHJcXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XFxyXFxuICAgICAgICB3aWR0aDogNDBweDtcXHJcXG4gICAgICAgIGhlaWdodDogNDBweDtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAuY2hlY2tCb3gge1xcclxcbiAgICAgICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xcclxcbiAgICAgICAgLW1vei1hcHBlYXJhbmNlOiBub25lO1xcclxcbiAgICAgICAgd2lkdGg6IDIwcHg7XFxyXFxuICAgICAgICBoZWlnaHQ6IDIwcHg7XFxyXFxuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xcclxcbiAgICAgICAgYm9yZGVyLXJhZGl1czogM3B4O1xcclxcbiAgICAgICAgb3V0bGluZTogbm9uZTtcXHJcXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG5cXHJcXG4gICAgfVxcclxcblxcclxcblxcclxcbiAgICAuY2hlY2tCb3g6OmJlZm9yZSB7XFxyXFxuICAgICAgICBjb250ZW50OiBcXFwiXFxcIjtcXHJcXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICAgICAgdG9wOiA1MCU7XFxyXFxuICAgICAgICBsZWZ0OiA1MCU7XFxyXFxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcXHJcXG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcXHJcXG4gICAgICAgIGNvbG9yOiByZ2IoMjIsIDI1MiwgMjIpO1xcclxcbiAgICAgICAgb3BhY2l0eTogMDtcXHJcXG4gICAgICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMC4zcyBlYXNlO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5jaGVja0JveDpob3Zlcjo6YmVmb3JlIHtcXHJcXG4gICAgICAgIGNvbnRlbnQ6IFxcXCLinJNcXFwiO1xcclxcbiAgICAgICAgb3BhY2l0eTogMC41O1xcclxcbiAgICB9XFxyXFxuXFxyXFxuXFxyXFxuICAgIHN2ZyB7XFxyXFxuICAgICAgICB3aWR0aDogMjVweDtcXHJcXG4gICAgICAgIGhlaWdodDogMjVweDtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAjdGFzayB7XFxyXFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgICAgIGdhcDogNXB4O1xcclxcbiAgICAgICAgbWFyZ2luOiAyN3B4IDAgMTFweCAyNnB4O1xcclxcbiAgICB9XFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuICAgICN0YXNrIHN2ZyB7XFxyXFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGMyNjI2O1xcclxcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xcclxcbiAgICAgICAgZmlsbDogd2hpdGU7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgI3Rhc2sgOmhvdmVyIHtcXHJcXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxLjA5KTtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAjdGFzayBidXR0b24ge1xcclxcbiAgICAgICAgYm9yZGVyOiAwO1xcclxcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xcclxcbiAgICAgICAgY29sb3I6ICNiOTFjMWM7XFxyXFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmhlcml0O1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgICN0YXNrIGJ1dHRvbjpob3ZlciB7XFxyXFxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMS4wOSk7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgYnV0dG9uLmRlbGV0ZVRhc2sge1xcclxcbiAgICAgICAgcGFkZGluZzogMTBweDtcXHJcXG4gICAgICAgIGJvcmRlcjogbm9uZTtcXHJcXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDdweDtcXHJcXG4gICAgICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xcclxcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2UwNDg3YztcXHJcXG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcXHJcXG4gICAgICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjJzIGVhc2Utb3V0O1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIGJ1dHRvbi5kZWxldGVUYXNrOmhvdmVyIHtcXHJcXG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xKVxcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIGJ1dHRvbi5kZWxldGVUYXNrOmFjdGl2ZSB7XFxyXFxuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDAuOSlcXHJcXG4gICAgfVxcclxcblxcclxcblxcclxcblxcclxcblxcclxcbiAgICAubGlzdENvbnRhaW5lciB7XFxyXFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICAgICAgZ2FwOiA1cHg7XFxyXFxuICAgICAgICBtYXgtd2lkdGg6IDcxNHB4O1xcclxcblxcclxcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG4gICAgICAgIGJveC1zaGFkb3c6IDFweCAwcHggM3B4IDBweDtcXHJcXG4gICAgICAgIG1hcmdpbjogMThweCAxOHB4O1xcclxcbiAgICAgICAgcGFkZGluZzogMTVweDtcXHJcXG5cXHJcXG5cXHJcXG4gICAgfVxcclxcblxcclxcblxcclxcbiAgICAucHJpb3JpdHlEYXRlT25MYXJnZVNjcmVlbiB7XFxyXFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgICAgIG1heC13aWR0aDogMjAwcHg7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLnByb2plY3RCdXR0b25zQ29udGFpbmVyIHtcXHJcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLnByb2plY3RCdXR0b25zQ29udGFpbmVyIGJ1dHRvbiB7XFxyXFxuICAgICAgICBib3JkZXI6IG5vbmU7XFxyXFxuICAgICAgICBib3JkZXItcmFkaXVzOiA3cHg7XFxyXFxuICAgICAgICBwYWRkaW5nOiA5cHg7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG5cXHJcXG4gICAgLmV4Y2x1ZGVkIHtcXHJcXG4gICAgICAgIGNvbG9yOiByZWQ7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLnRhc2tDb250YWluZXIge1xcclxcbiAgICAgICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgICAgIGZsZXg6IDE7XFxyXFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICAgIH1cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG4gICAgLnRhc2tUaXRsZSwgLm5ld1Byb2plY3QtdGFzay10aXRsZSwgLmVkaXRhYmxlU2F2ZVRhc2tFbCB7XFxyXFxuICAgICAgICBtYXJnaW46IDA7XFxyXFxuICAgICAgICBmb250LXNpemU6IDE4cHg7XFxyXFxuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxuICAgICAgICB0ZXh0LWRlY29yYXRpb24tY29sb3I6IHJlZDtcXHJcXG5cXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAudGFza0Rlc2NyaXB0aW9uLCAubmV3UHJvamVjdC1kZXNjcmlwdGlvbiB7XFxyXFxuICAgICAgICBtYXJnaW46IDA7XFxyXFxuICAgICAgICBmb250LXNpemU6IDE0cHg7XFxyXFxuXFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLnRhc2tQcmlvcml0eSB7XFxyXFxuICAgICAgICBmb250LXNpemU6IDE5cHg7XFxyXFxuICAgICAgICBib3JkZXItcmFkaXVzOiA2cHg7XFxyXFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTczZDNkO1xcclxcbiAgICAgICAgcGFkZGluZzogNnB4O1xcclxcbiAgICAgICAgbWFyZ2luOiAwIDAgN3B4O1xcclxcbiAgICAgICAgY29sb3I6IHdoaXRlO1xcclxcblxcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5pbm5lclRhc2tIYW5kbGVyIHtcXHJcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICAgICAganVzdGlmeS1pdGVtczogY2VudGVyO1xcclxcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICAgICAgbWFyZ2luOiAwcHggMTVweCAwIDQwcHg7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLmluYm94LWNvbnRhaW5lciB7XFxyXFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgICAgIGdhcDogNXB4O1xcclxcbiAgICAgICAgbWFyZ2luOiAwcHggMCAwIDE2cHg7XFxyXFxuICAgICAgICBoZWlnaHQ6IDI2cHg7XFxyXFxuICAgICAgICBwYWRkaW5nOiA5cHg7XFxyXFxuICAgICAgICBib3JkZXItcmFkaXVzOiA1cHggMHB4IDBweCA1cHg7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLmluYm94LWNvbnRhaW5lcjpob3ZlciB7XFxyXFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ob3Zlci1jb2xvcik7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG5cXHJcXG4gICAgLmluYm94IHtcXHJcXG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcXHJcXG5cXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAuaW5ib3hMaXN0Q29udGFpbmVyIHtcXHJcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgICAgICBnYXA6IDVweDtcXHJcXG5cXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAuaW5ib3hUYXNrQ29udGFpbmVyIHtcXHJcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgICAgICBmbGV4OiAxO1xcclxcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5pbmJveFRhc2tUaXRsZSB7XFxyXFxuICAgICAgICBtYXJnaW46IDA7XFxyXFxuICAgICAgICBmb250LXNpemU6IDE4cHg7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLmluYm94VGFza0Rlc2NyaXB0aW9uIHtcXHJcXG4gICAgICAgIG1hcmdpbjogMDtcXHJcXG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcXHJcXG5cXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAuaW5ib3hUYXNrUHJpb3JpdHkge1xcclxcbiAgICAgICAgbWFyZ2luOiAwIDIwcHggMCAwO1xcclxcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xcclxcblxcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5kdWVEYXRlIHtcXHJcXG4gICAgICAgIG1hcmdpbjogMDtcXHJcXG5cXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAuZWRpdCB7XFxyXFxuICAgICAgICBib3JkZXI6IG5vbmU7XFxyXFxuICAgICAgICBvdXRsaW5lOiBub25lO1xcclxcbiAgICAgICAgZm9udC1zaXplOiAxN3B4O1xcclxcbiAgICAgICAgbWF4LXdpZHRoOiAxMTBweDtcXHJcXG4gICAgICAgIG1hcmdpbjogMCAwXFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgI3Byb2plY3RzIGgzIHtcXHJcXG4gICAgICAgIG1hcmdpbjogMCAwIDAgMTBweDtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAjZm9ybSB7XFxyXFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjQ3NDhiO1xcclxcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG4gICAgICAgIGhlaWdodDogMTQwcHg7XFxyXFxuICAgICAgICBkaXNwbGF5OiBub25lO1xcclxcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAxcmVtO1xcclxcbiAgICAgICAgbWFyZ2luOiAxMHB4IDEwcHggMCAwO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5mb3JtRGV0YWlscyB7XFxyXFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gICAgICAgIG1hcmdpbjogMTJweCAxNXB4O1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIGlucHV0I2RhdGVQaWNrZXIge1xcclxcbiAgICAgICAgbWF4LXdpZHRoOiAxMThweDtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAuYnV0dG9ucyB7XFxyXFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgICAgICAgbWFyZ2luOiAxcHggMzNweFxcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5idXR0b25zIGJ1dHRvbiB7XFxyXFxuICAgICAgICBib3JkZXI6IG5vbmU7XFxyXFxuICAgICAgICBib3JkZXItcmFkaXVzOiA3cHg7XFxyXFxuICAgICAgICBwYWRkaW5nOiA3cHg7XFxyXFxuICAgICAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4ycyBlYXNlLW91dFxcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5idXR0b25zIGJ1dHRvbjpob3ZlciB7XFxyXFxuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMDUpXFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgI1Byb2plY3RGb3JtIHtcXHJcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICM2NDc0OGI7XFxyXFxuICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbiAgICAgICAgaGVpZ2h0OiAxNTBweDtcXHJcXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XFxyXFxuICAgICAgICBwYWRkaW5nOiAxMHB4O1xcclxcbiAgICAgICAgbWFyZ2luOiAxNXB4IDE1cHggMCAxN3B4O1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5wcm9qZWN0Rm9ybURldGFpbHMge1xcclxcbiAgICAgICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICAgICAgICB0b3A6IDA7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG5cXHJcXG4gICAgLmZpcnN0LWlucHV0Q29udGFpbmVyIGlucHV0LCAuUHRpdGxlSW5wdXRDb250YWluZXIgaW5wdXQge1xcclxcbiAgICAgICAgbWF4LXdpZHRoOiA2MDBweDtcXHJcXG4gICAgICAgIGhlaWdodDogMjVweDtcXHJcXG4gICAgICAgIGJvcmRlcjogbm9uZTtcXHJcXG4gICAgICAgIG91dGxpbmU6IG5vbmU7XFxyXFxuICAgICAgICBjb2xvcjogd2hpdGU7XFxyXFxuICAgICAgICBtYXJnaW46IDEwcHggMCAwIDA7XFxyXFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmhlcml0O1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC50YXNrLXRpdGxlLCAuZGVzY3JpcHRpb24ge1xcclxcbiAgICAgICAgd2lkdGg6IDM1MHB4O1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5maXJzdC1pbnB1dENvbnRhaW5lciBpbnB1dDo6cGxhY2Vob2xkZXIsIC5QdGl0bGVJbnB1dENvbnRhaW5lciBpbnB1dDo6cGxhY2Vob2xkZXIge1xcclxcbiAgICAgICAgY29sb3I6IHdoaXRlO1xcclxcbiAgICAgICAgcGFkZGluZzogMCAxMHB4O1xcclxcbiAgICAgICAgb3BhY2l0eTogMTtcXHJcXG5cXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAuc2Vjb25kLWlucHV0Q29udGFpbmVyIGlucHV0LCAuUGRlc2NyaXB0aW9uSW5wdXRDb250YWluZXIgaW5wdXQge1xcclxcbiAgICAgICAgbWF4LXdpZHRoOiA2MDBweDtcXHJcXG4gICAgICAgIGhlaWdodDogMjVweDtcXHJcXG4gICAgICAgIGJvcmRlcjogbm9uZTtcXHJcXG4gICAgICAgIG91dGxpbmU6IG5vbmU7XFxyXFxuICAgICAgICBjb2xvcjogd2hpdGU7XFxyXFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmhlcml0O1xcclxcbiAgICAgICAgbWFyZ2luOiAwO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5zZWNvbmQtaW5wdXRDb250YWluZXIgaW5wdXQ6OnBsYWNlaG9sZGVyLCAuUGRlc2NyaXB0aW9uSW5wdXRDb250YWluZXIgaW5wdXQ6OnBsYWNlaG9sZGVyIHtcXHJcXG4gICAgICAgIHBhZGRpbmc6IDAgMTBweDtcXHJcXG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcXHJcXG4gICAgICAgIG9wYWNpdHk6IDE7XFxyXFxuXFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLmZpcnN0LWlucHV0Q29udGFpbmVyLCAuc2Vjb25kLWlucHV0Q29udGFpbmVyIHtcXHJcXG4gICAgICAgIG1hcmdpbjogMTBweCAwIDAgMDtcXHJcXG4gICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAub3RoZXItb3B0aW9ucy1vbi1mb3JtcywgLmZvb3RlciB7fVxcclxcblxcclxcbiAgICAuc3VibWl0QnRuOmFjdGl2ZSB7XFxyXFxuICAgICAgICB0cmFuc2Zvcm06IGFjdGl2ZSBzY2FsZSgxLjEpO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5vdGhlci1vcHRpb25zLW9uLWZvcm1zIGJ1dHRvbiwgI3ByaW9yaXR5LCBpbnB1dCNkYXRlUGlja2VyIHtcXHJcXG4gICAgICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAuM3MgZWFzZS1pbjtcXHJcXG4gICAgICAgIHBhZGRpbmc6IDdweDtcXHJcXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDdweDtcXHJcXG4gICAgICAgIGJvcmRlcjogbm9uZTtcXHJcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMwN2M0ZGQ7XFxyXFxuICAgICAgICBjb2xvcjogd2hpdGU7XFxyXFxuICAgICAgICBmb250LXNpemU6IDE1cHg7XFxyXFxuICAgICAgICBmb250LXdlaWdodDogNjAwO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgICNwcmlvcml0eSB7XFxyXFxuICAgICAgICBtYXJnaW46IDEwcHggMCA4cHggMDtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAjcHJvamVjdFByaW9yaXR5LCAuZm9vdGVyIHtcXHJcXG4gICAgICAgIHBhZGRpbmc6IDdweDtcXHJcXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG4gICAgICAgIG1hcmdpbjogMCA0cHggNXB4IDA7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLmFkZFByb2plY3RzQ29udGFpbmVyIHtcXHJcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuXFxyXFxuICAgICAgICBtYXJnaW46IDAgMCAwIDIwcHg7XFxyXFxuICAgICAgICBwYWRkaW5nOiA3cHg7XFxyXFxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICAgICAgZ2FwOiAxMHB4O1xcclxcbiAgICAgICAgaGVpZ2h0OiAyNXB4O1xcclxcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4IDBweCAwcHggNXB4O1xcclxcblxcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5hZGRQcm9qZWN0c0NvbnRhaW5lcjpob3ZlciB7XFxyXFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ob3Zlci1jb2xvcik7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLmFkZFByb2plY3RzQ29udGFpbmVyIHN2ZyB7XFxyXFxuICAgICAgICB3aWR0aDogMjVweDtcXHJcXG4gICAgICAgIGhlaWdodDogMjVweDtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAjYWRkTmV3UHJvamVjdEVsIHtcXHJcXG4gICAgICAgIG1hcmdpbjogMDtcXHJcXG4gICAgICAgIGZvbnQtc2l6ZTogMTlweDtcXHJcXG4gICAgfVxcclxcblxcclxcblxcclxcbiAgICAucHJvamVjdF90ZXh0IHtcXHJcXG4gICAgICAgIG1hcmdpbjogMCAwIDEwcHggMTdweDtcXHJcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgICAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxyXFxuICAgICAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXHJcXG4gICAgICAgIHBhZGRpbmc6IDlweDtcXHJcXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDVweCAwcHggMHB4IDVweDtcXHJcXG5cXHJcXG5cXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAucHJvamVjdF90ZXh0OmhvdmVyIHtcXHJcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWhvdmVyLWNvbG9yKTtcXHJcXG4gICAgfVxcclxcblxcclxcblxcclxcblxcclxcbiAgICAjcHJvamVjdC1kcm9wZG93biB7XFxyXFxuICAgICAgICBib3JkZXI6IDA7XFxyXFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmhlcml0O1xcclxcbiAgICAgICAgbWFyZ2luOiA1cHggMCAwIDE3cHg7XFxyXFxuICAgICAgICBmb250LXNpemU6IDE4cHg7XFxyXFxuICAgICAgICBmb250LXdlaWdodDogNTUwO1xcclxcbiAgICAgICAgcGFkZGluZzogOHB4O1xcclxcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4IDBweCAwcHggNXB4O1xcclxcbiAgICAgICAgbWF4LXdpZHRoOiAxNjBweDtcXHJcXG5cXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAjcHJvamVjdC1kcm9wZG93bjpob3ZlciB7XFxyXFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ob3Zlci1jb2xvcik7XFxyXFxuXFxyXFxuICAgIH1cXHJcXG5cXHJcXG5cXHJcXG4gICAgI3Byb2plY3QtZHJvcGRvd246Zm9jdXMge1xcclxcbiAgICAgICAgYm9yZGVyOiBub25lO1xcclxcbiAgICAgICAgb3V0bGluZTogbm9uZTtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAjbmV3UHJvamVjdHNGb3JtQ29udGFpbmVyRWwge1xcclxcbiAgICAgICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXHJcXG5cXHJcXG5cXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAjUHJvamVjdHNGb3JtTmFtZUNvbnRhaW5lckVsIHtcXHJcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgICAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG5cXHJcXG4gICAgLmlucHV0TmV3cHJvamVjdEZvcm1OYW1lIHtcXHJcXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XFxyXFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2VlM2UzO1xcclxcbiAgICAgICAgbWF4LXdpZHRoOiA0MDBweDtcXHJcXG4gICAgICAgIG1heC1oZWlnaHQ6IDMwMHB4O1xcclxcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcXHJcXG4gICAgICAgIHBhZGRpbmc6IDQ2cHg7XFxyXFxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgICAgICBtYXJnaW46IDYwcHggMCAwIDA7XFxyXFxuICAgICAgICBib3gtc2hhZG93OiAwcHggOXB4IDNweCAwcHg7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG5cXHJcXG4gICAgLmlucHV0TmV3cHJvamVjdEZvcm1OYW1lIGgyIHtcXHJcXG4gICAgICAgIG1hcmdpbjogMCAwIDEwcHggMDtcXHJcXG4gICAgfVxcclxcblxcclxcblxcclxcbiAgICAuaW5wdXROZXdQcm9qZWN0TmFtZSB7XFxyXFxuICAgICAgICBtYXgtd2lkdGg6IDM1MHB4O1xcclxcbiAgICAgICAgbWF4LWhlaWdodDogMzVweDtcXHJcXG4gICAgICAgIHBhZGRpbmc6IDE3cHg7XFxyXFxuICAgICAgICBib3JkZXI6IG5vbmU7XFxyXFxuICAgICAgICBib3JkZXItcmFkaXVzOiA3cHg7XFxyXFxuICAgICAgICBmb250LXNpemU6IDE5cHg7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgaW5wdXQuU2F2ZVByb2plY3ROYW1lIHtcXHJcXG4gICAgICAgIHBhZGRpbmc6IDlweDtcXHJcXG4gICAgICAgIGJvcmRlcjogbm9uZTtcXHJcXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDhweDtcXHJcXG4gICAgICAgIG1heC13aWR0aDogMTAwcHg7XFxyXFxuICAgICAgICBoZWlnaHQ6IDQwcHg7XFxyXFxuICAgICAgICBmb250LXNpemU6IDE5cHg7XFxyXFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQwLCA1OSwgMTM0KTtcXHJcXG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcXHJcXG5cXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAucHJvamVjdE5hbWVTYXZlckJ0bkNvbnRhaW5lciB7XFxyXFxuICAgICAgICBtYXJnaW46IDEwcHggMDtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAucHJvamVjdE5hbWVTYXZlckJ0bkNvbnRhaW5lciBidXR0b24ge1xcclxcbiAgICAgICAgcGFkZGluZzogOXB4O1xcclxcbiAgICAgICAgYm9yZGVyOiBub25lO1xcclxcbiAgICAgICAgYm9yZGVyLXJhZGl1czogOHB4O1xcclxcbiAgICAgICAgd2lkdGg6IDEwMHB4O1xcclxcbiAgICAgICAgaGVpZ2h0OiA0MHB4O1xcclxcbiAgICAgICAgZm9udC1zaXplOiAxOXB4O1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgICNQcm9qZWN0c0Zvcm1OYW1lQ29udGFpbmVyRWwgLkNhbmNlbCB7XFxyXFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmV5O1xcclxcbiAgICAgICAgY29sb3I6IHdoaXRlO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgICNuZXdQcm9qZWN0VGFza3NDb250YWluZXIge1xcclxcbiAgICAgICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG5cXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAjbmV3UHJvamVjdFRhc2tzSW5uZXJDb250YWluZXIge1xcclxcbiAgICAgICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgICAgIGdhcDogNXB4O1xcclxcbiAgICAgICAgbWFyZ2luOiAxMHB4O1xcclxcbiAgICAgICAgYm94LXNoYWRvdzogIzVjNTU1NSAxcHggM3B4IDNweCAxcHg7XFxyXFxuICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcclxcbiAgICAgICAgcGFkZGluZzogMTBweDtcXHJcXG4gICAgICAgIHdpZHRoOiA5NXB4O1xcclxcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgICAgICAgbGVmdDogMjUwcHg7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgc3ZnLmFkZFRhc2sge1xcclxcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xcclxcbiAgICAgICAgZmlsbDogd2hlYXQ7XFxyXFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLm5ld1Byb2plY3RBZGRCdG4ge1xcclxcbiAgICAgICAgYm9yZGVyOiAwO1xcclxcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogaW5oZXJpdDtcXHJcXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XFxyXFxuXFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgI1Byb2plY3RkYXRlUGlja2VyIHtcXHJcXG4gICAgICAgIHBhZGRpbmc6IDJweDtcXHJcXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG4gICAgICAgIGJvcmRlcjogbm9uZTtcXHJcXG4gICAgICAgIGhlaWdodDogMzJweDtcXHJcXG5cXHJcXG4gICAgfVxcclxcblxcclxcblxcclxcbiAgICAjc3VibWl0QnRuRm9yUHJvamVjdCB7XFxyXFxuICAgICAgICBwYWRkaW5nOiA3cHg7XFxyXFxuICAgICAgICBib3JkZXItcmFkaXVzOiA5cHg7XFxyXFxuXFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgI3N1Ym1pdEJ0bkZvclByb2plY3Q6YWN0aXZlIHtcXHJcXG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xKVxcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5jYW5jZWxGb3JQcm9qZWN0QnRuIHtcXHJcXG4gICAgICAgIHBhZGRpbmc6IDdweDtcXHJcXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDlweDtcXHJcXG4gICAgfVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7XG5cbiAgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH1cblxuICAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5vcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiLy8gaW1wb3J0IHsgbXlQcm9qZWN0cyB9IGZyb20gJy4vZG9tLUVsJ1xyXG5pbXBvcnQgeyBkaXNwbGF5Rm9ybSB9IGZyb20gXCIuL2RvbS1FbFwiO1xyXG4vLyBpbXBvcnQgeyBlZGl0VGFzayB9IGZyb20gXCIuL2xvZ2ljc1wiO1xyXG5cclxuY29uc3QgbXlQcm9qZWN0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcHJvamVjdHMgaDNcIik7XHJcbmNvbnN0IHNjcmVlbkNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjQ29udGFpbmVyXCIpO1xyXG5jb25zdCB1c2VyTGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdXNlcmxpc3RcIik7XHJcbmNvbnN0IGFkZFByb2plY3RzQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hZGRQcm9qZWN0c0NvbnRhaW5lclwiKTtcclxuY29uc3QgbmV3UHJvamVjdHNGb3JtQ29udGFpbmVyRWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxyXG4gIFwiI25ld1Byb2plY3RzRm9ybUNvbnRhaW5lckVsXCJcclxuKTtcclxuZXhwb3J0IGNvbnN0IGlucHV0TmV3cHJvamVjdEZvcm1OYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcclxuICBcIi5pbnB1dE5ld3Byb2plY3RGb3JtTmFtZVwiXHJcbik7XHJcbmNvbnN0IG5ld1Byb2plY3ROYW1lUmVxdWVzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubmV3UHJvamVjdE5hbWVSZXF1ZXN0XCIpO1xyXG5jb25zdCBuZXdQcm9qZWN0TmFtZVRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5oZWFkZXJUZXh0Q29udGVudFwiKTtcclxuY29uc3QgU2F2ZVByb2plY3ROYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5TYXZlUHJvamVjdE5hbWVcIik7XHJcbmNvbnN0IG5ld1Byb2plY3RUYXNrID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5uZXdQcm9qZWN0VGFza1wiKTtcclxuY29uc3QgbmV3UHJvamVjdFRhc2tzQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuY29uc3QgbmV3UHJvamVjdFRhc2tzSW5uZXJDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG5cclxuY29uc3QgbmV3UHJvamVjdEFkZEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XHJcbmNvbnN0IHN1Ym1pdFRhc2tCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3N1Ym1pdEJ0bkZvclByb2plY3RcIik7XHJcbmNvbnN0IGNhbmNlbFRhc2tCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNhbmNlbEZvclByb2plY3RCdG5cIik7XHJcbmNvbnN0IGRpc3BsYXlQcm9qZWN0VG9kb3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2Rpc3BsYXlQcm9qZWN0VG9kb3NcIik7XHJcblxyXG5sZXQgcHJvamVjdEZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI1Byb2plY3RGb3JtXCIpO1xyXG5sZXQgZm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZm9ybVwiKTtcclxubGV0IGlucHV0RmllbGRFbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucFRpdGxlXCIpO1xyXG5sZXQgZGVzY3JpcHRpb25GaWVsZEVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wRGVzY3JpcHRpb25cIik7XHJcbmxldCBzZWxlY3RQcmlvcml0eUVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwcm9qZWN0UHJpb3JpdHlcIik7XHJcbmxldCBkdWVEYXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNQcm9qZWN0ZGF0ZVBpY2tlclwiKTtcclxuY29uc3QgcHJvamVjdERyb3BEb3duID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwcm9qZWN0LWRyb3Bkb3duXCIpO1xyXG5sZXQgc2VsZWN0ZWRQcm9qZWN0ID0gcHJvamVjdERyb3BEb3duLnZhbHVlO1xyXG5cclxuY29uc3QgbmV3UHJvamVjdEZvcm1OYW1lQnRuRWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxyXG4gIFwiLm5ld1Byb2plY3RGb3JtTmFtZUJ0bkVsXCJcclxuKTtcclxuXHJcbmNsYXNzIGdldExpc3Qge1xyXG4gIGNvbnN0cnVjdG9yKHRpdGxlLCBkZXNjcmlwdGlvbiwgcHJpb3JpdHksIGRhdGUpIHtcclxuICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcclxuICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcclxuICAgIHRoaXMucHJpb3JpdHkgPSBwcmlvcml0eTtcclxuICAgIHRoaXMuZGF0ZSA9IGRhdGU7XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBkaXNwbGF5UmVxdWVzdE5ld1Byb2plY3RGb3JtTmFtZSgpIHtcclxuICBpZiAodXNlckxpc3QudGV4dENvbnRlbnQpIHtcclxuICAgIHVzZXJMaXN0LnRleHRDb250ZW50ID0gXCJcIjtcclxuICB9XHJcblxyXG4gIGlmIChmb3JtLnN0eWxlLmRpc3BsYXkgPT09IFwiYmxvY2tcIikge1xyXG4gICAgZm9ybS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbiAgfVxyXG4gIGlmIChwcm9qZWN0Rm9ybS5zdHlsZS5kaXNwbGF5ID09PSBcImJsb2NrXCIpIHtcclxuICAgIHByb2plY3RGb3JtLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuICB9XHJcblxyXG4gIGlucHV0TmV3cHJvamVjdEZvcm1OYW1lLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XHJcbiAgcmV0dXJuIHsgaW5wdXROZXdwcm9qZWN0Rm9ybU5hbWUgfTtcclxufVxyXG5hZGRQcm9qZWN0c0NvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKFxyXG4gIFwiY2xpY2tcIixcclxuICBkaXNwbGF5UmVxdWVzdE5ld1Byb2plY3RGb3JtTmFtZVxyXG4pO1xyXG5cclxuLy9HZXQgTmV3IFByb2plY3QgTmFtZSBGdW5jdGlvbi5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldG5ld1Byb2plY3RJbnB1dE5hbWUoKSB7XHJcbiAgY29uc3QgaW5wdXROZXdQcm9qZWN0TmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaW5wdXROZXdQcm9qZWN0TmFtZVwiKTtcclxuICBjb25zdCBpbnB1dE5ld1Byb2plY3ROYW1lVmFsdWUgPSBpbnB1dE5ld1Byb2plY3ROYW1lLnZhbHVlO1xyXG4gIG5ld1Byb2plY3ROYW1lVGl0bGUudGV4dENvbnRlbnQgPSBpbnB1dE5ld1Byb2plY3ROYW1lVmFsdWU7XHJcblxyXG4gIC8vIHByb2plY3RzLnB1c2goaW5wdXROZXdQcm9qZWN0TmFtZVZhbHVlKVxyXG5cclxuICBpbnB1dE5ld1Byb2plY3ROYW1lLnZhbHVlID0gXCJcIjtcclxuXHJcbiAgYWRkUHJvamVjdE5hbWUoaW5wdXROZXdQcm9qZWN0TmFtZVZhbHVlKTtcclxuXHJcbiAgaWYgKGlucHV0TmV3cHJvamVjdEZvcm1OYW1lKSB7XHJcbiAgICBpbnB1dE5ld3Byb2plY3RGb3JtTmFtZS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbiAgfSBlbHNlIHtcclxuICAgIGlucHV0TmV3cHJvamVjdEZvcm1OYW1lLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XHJcbiAgfVxyXG5cclxuICByZXR1cm4geyBpbnB1dE5ld1Byb2plY3ROYW1lVmFsdWUgfTtcclxufVxyXG5cclxuLy9DYW5jZWwgcHJvamVjdCBmb3JtIG5hbWUgcmVxdWVzdFxyXG5uZXdQcm9qZWN0Rm9ybU5hbWVCdG5FbC5hZGRFdmVudExpc3RlbmVyKFxyXG4gIFwiY2xpY2tcIixcclxuICAoKSA9PiAoaW5wdXROZXdwcm9qZWN0Rm9ybU5hbWUuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiKVxyXG4pO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZU5ld1Byb2plY3RUYXNrQnRuKCkge1xyXG4gIG5ld1Byb2plY3RUYXNrc0NvbnRhaW5lci5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcIm5ld1Byb2plY3RUYXNrc0NvbnRhaW5lclwiKTtcclxuICBuZXdQcm9qZWN0VGFza3NJbm5lckNvbnRhaW5lci5zZXRBdHRyaWJ1dGUoXHJcbiAgICBcImlkXCIsXHJcbiAgICBcIm5ld1Byb2plY3RUYXNrc0lubmVyQ29udGFpbmVyXCJcclxuICApO1xyXG5cclxuICBuZXdQcm9qZWN0QWRkQnRuLnRleHRDb250ZW50ID0gXCJBZGQgdGFza1wiO1xyXG5cclxuICAvLyBDcmVhdGUgdGhlIFNWRyBlbGVtZW50XHJcbiAgY29uc3Qgc3ZnTmFtZXNwYWNlID0gXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiO1xyXG4gIGNvbnN0IHN2Z0VsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoc3ZnTmFtZXNwYWNlLCBcInN2Z1wiKTtcclxuXHJcbiAgLy8gU2V0IHRoZSBjbGFzcyBhbmQgdmlld0JveCBhdHRyaWJ1dGVzXHJcbiAgc3ZnRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJjbGFzc1wiLCBcImFkZFRhc2tcIik7XHJcbiAgc3ZnRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJ2aWV3Qm94XCIsIFwiMCAwIDI0IDI0XCIpO1xyXG5cclxuICAvLyBDcmVhdGUgdGhlIHRpdGxlIGVsZW1lbnRcclxuICBjb25zdCB0aXRsZUVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoc3ZnTmFtZXNwYWNlLCBcInRpdGxlXCIpO1xyXG4gIHRpdGxlRWxlbWVudC50ZXh0Q29udGVudCA9IFwicGx1c1wiO1xyXG4gIHN2Z0VsZW1lbnQuYXBwZW5kQ2hpbGQodGl0bGVFbGVtZW50KTtcclxuXHJcbiAgLy8gQ3JlYXRlIHRoZSBwYXRoIGVsZW1lbnRcclxuICBjb25zdCBwYXRoRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyhzdmdOYW1lc3BhY2UsIFwicGF0aFwiKTtcclxuICBwYXRoRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJkXCIsIFwiTTE5LDEzSDEzVjE5SDExVjEzSDVWMTFIMTFWNUgxM1YxMUgxOVYxM1pcIik7XHJcbiAgc3ZnRWxlbWVudC5hcHBlbmRDaGlsZChwYXRoRWxlbWVudCk7XHJcblxyXG4gIG5ld1Byb2plY3RBZGRCdG4uY2xhc3NMaXN0LmFkZChcIm5ld1Byb2plY3RBZGRCdG5cIik7XHJcblxyXG4gIGlmIChuZXdQcm9qZWN0VGFza3NJbm5lckNvbnRhaW5lci5jb250YWlucyhzdmdFbGVtZW50KSkge1xyXG4gICAgbmV3UHJvamVjdFRhc2tzSW5uZXJDb250YWluZXIucmVtb3ZlQ2hpbGQoc3ZnRWxlbWVudCk7XHJcbiAgfVxyXG5cclxuICBuZXdQcm9qZWN0VGFza3NJbm5lckNvbnRhaW5lci5hcHBlbmRDaGlsZChzdmdFbGVtZW50KTtcclxuICBuZXdQcm9qZWN0VGFza3NJbm5lckNvbnRhaW5lci5hcHBlbmRDaGlsZChuZXdQcm9qZWN0QWRkQnRuKTtcclxuICBuZXdQcm9qZWN0VGFza3NDb250YWluZXIuYXBwZW5kQ2hpbGQobmV3UHJvamVjdFRhc2tzSW5uZXJDb250YWluZXIpO1xyXG5cclxuICBuZXdQcm9qZWN0c0Zvcm1Db250YWluZXJFbC5hcHBlbmRDaGlsZChuZXdQcm9qZWN0VGFza3NDb250YWluZXIpO1xyXG5cclxuICByZXR1cm4gbmV3UHJvamVjdHNGb3JtQ29udGFpbmVyRWw7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGRpc3BsYXlOZXdQcm9qZWN0Rm9ybSgpIHtcclxuICBwcm9qZWN0Rm9ybS5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xyXG59XHJcblxyXG4vLyBBZGQgcHJvamVjdCBuYW1lIHRvIGxvY2FsIHN0b3JhZ2UgYW5kICBwb3B1bGF0ZSBwcm9qZWN0IGRyb3AgZG93blxyXG5mdW5jdGlvbiBhZGRQcm9qZWN0TmFtZShwcm9qZWN0TmFtZSkge1xyXG4gIGxldCBwcm9qZWN0cyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJwcm9qZWN0c1wiKSkgfHwgW107XHJcbiAgcHJvamVjdHMucHVzaChwcm9qZWN0TmFtZSk7XHJcbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJwcm9qZWN0c1wiLCBKU09OLnN0cmluZ2lmeShwcm9qZWN0cykpO1xyXG4gIGZpbGxQcm9qZWN0RHJvcERvd24oKTtcclxuICByZXR1cm4geyBwcm9qZWN0TmFtZSB9O1xyXG59XHJcblxyXG4vLyBQb3B1bGF0ZSBwcm9qZWN0IGRyb3AtZG93blxyXG5mdW5jdGlvbiBmaWxsUHJvamVjdERyb3BEb3duKCkge1xyXG4gIHByb2plY3REcm9wRG93bi50ZXh0Q29udGVudCA9IFwiXCI7XHJcbiAgbGV0IHByb2plY3RzID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInByb2plY3RzXCIpKSB8fCBbXTtcclxuXHJcbiAgaWYgKHByb2plY3RzKSB7XHJcbiAgICBjb25zdCBvcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xyXG4gICAgb3B0aW9uLnZhbHVlID0gXCJcIjtcclxuICAgIG9wdGlvbi50ZXh0Q29udGVudCA9IFwiU2VsZWN0IHByb2plY3RcIjtcclxuICAgIHByb2plY3REcm9wRG93bi5hcHBlbmRDaGlsZChvcHRpb24pO1xyXG5cclxuICAgIHByb2plY3RzPy5mb3JFYWNoKChwcm9qZWN0KSA9PiB7XHJcbiAgICAgIGNvbnN0IG9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7XHJcbiAgICAgIG9wdGlvbi52YWx1ZSA9IHByb2plY3Q7XHJcbiAgICAgIG9wdGlvbi50ZXh0Q29udGVudCA9IHByb2plY3Q7XHJcbiAgICAgIHByb2plY3REcm9wRG93bi5hcHBlbmRDaGlsZChvcHRpb24pO1xyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcbmZpbGxQcm9qZWN0RHJvcERvd24oKTtcclxuXHJcbi8vIERpc3BsYXkgZWFjaCBwcm9qZWN0J3MgdG8tZG9zIHdoZW4gc2VsZWN0ZWRcclxucHJvamVjdERyb3BEb3duLmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgKCkgPT4ge1xyXG4gIHVzZXJMaXN0LnRleHRDb250ZW50ID0gXCJcIjtcclxuICBkaXNwbGF5UHJvamVjdFRvZG9zLnRleHRDb250ZW50ID0gXCJcIjtcclxuICBuZXdQcm9qZWN0VGFza3NDb250YWluZXIuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG5cclxuICAvL0NsZWFyIHRoZSBhZGQgdGFzayBidXR0b24gY29udGFpbmVyIGVhY2ggdGltZSB1c2VyIHNlbGVjdCBhIHByb2plY3RcclxuICBuZXdQcm9qZWN0VGFza3NDb250YWluZXIudGV4dENvbnRlbnQgPSBcIlwiO1xyXG5cclxuICAvL0Rpc3BsYXkgbm8gZm9ybSBpZiBhbnkgZm9ybSBpcyBpbiBibG9ja1xyXG4gIGlmIChmb3JtLnN0eWxlLmRpc3BsYXkgPT09IFwiYmxvY2tcIikge1xyXG4gICAgZm9ybS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbiAgfVxyXG5cclxuICBzZWxlY3RlZFByb2plY3QgPSBwcm9qZWN0RHJvcERvd24udmFsdWU7XHJcbiAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImhlYWRlciBoMVwiKTtcclxuICBoZWFkZXIudGV4dENvbnRlbnQgPSBzZWxlY3RlZFByb2plY3Q7XHJcbiAgLy8gZ2V0U2VsZWN0ZWRUb2RvcyhzZWxlY3RlZFByb2plY3QpO1xyXG4gIGRpc3BsYXlUb0Rvc0ZvckN1cnJlbnRQcm9qZWN0KHNlbGVjdGVkUHJvamVjdCk7XHJcbiAgLy8gZGlzcGxheVNlbGVjdGVkVG9Eb3Moc2VsZWN0ZWRQcm9qZWN0KTtcclxuICBkaXNwbGF5TmV3UHJvamVjdEZvcm0oKTtcclxufSk7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0VXNlclRvZG8oKSB7XHJcbiAgbGV0IHRhc2tJbnB1dFZhbHVlID0gaW5wdXRGaWVsZEVsLnZhbHVlO1xyXG4gIGxldCBkZXNjcmlwdGlvbklucHV0VmFsdWUgPSBkZXNjcmlwdGlvbkZpZWxkRWwudmFsdWU7XHJcbiAgbGV0IHByaW9yaXR5VmFsdWVFbCA9IHNlbGVjdFByaW9yaXR5RWwudmFsdWU7XHJcbiAgbGV0IGR1ZURhdGVWYWx1ZUVsID0gZHVlRGF0ZS52YWx1ZTtcclxuXHJcbiAgaWYgKHRhc2tJbnB1dFZhbHVlLmxlbmd0aCA+IDM1KSB7XHJcbiAgICByZXR1cm4gYWxlcnQoXHJcbiAgICAgIGBJbnB1dCBzaG91bGQgYmUgbGVzcyBvciBlcXVhbCB0byB0aGUgMzUgY2hhcmFjdGVycywgeW91IGhhdmUgZW50ZXJlZCAke3Rhc2tJbnB1dFZhbHVlLmxlbmd0aH0gY2hhcmFjdGVyc2BcclxuICAgICk7XHJcbiAgfSBlbHNlIGlmIChkZXNjcmlwdGlvbklucHV0VmFsdWUubGVuZ3RoID4gNDApIHtcclxuICAgIHJldHVybiBhbGVydChcclxuICAgICAgYERlc2NyaXB0aW9uIHNob3VsZCBiZSBsZXNzIG9yIGVxdWFsIHRvIHRoZSA0MCBjaGFyYWN0ZXJzLCB5b3UgaGF2ZSBlbnRlcmVkICR7ZGVzY3JpcHRpb25JbnB1dFZhbHVlLmxlbmd0aH0gY2hhcmFjdGVyc2BcclxuICAgICk7XHJcbiAgfVxyXG5cclxuICBjb25zdCBkYXRlID0gbmV3IERhdGUoZHVlRGF0ZVZhbHVlRWwpO1xyXG5cclxuICBjb25zdCBvcHRpb25zID0ge1xyXG4gICAgd2Vla2RheTogXCJsb25nXCIsXHJcbiAgICB5ZWFyOiBcIm51bWVyaWNcIixcclxuICAgIG1vbnRoOiBcInNob3J0XCIsXHJcbiAgICBkYXk6IFwibnVtZXJpY1wiLFxyXG4gIH07XHJcblxyXG4gIGNvbnN0IGRheU9mV2VlayA9IGRhdGUudG9Mb2NhbGVEYXRlU3RyaW5nKFwiZW4tVXNcIiwgb3B0aW9ucyk7XHJcblxyXG4gIGxldCB1c2VyVG9kbyA9IG5ldyBnZXRMaXN0KFxyXG4gICAgdGFza0lucHV0VmFsdWUsXHJcbiAgICBkZXNjcmlwdGlvbklucHV0VmFsdWUsXHJcbiAgICBwcmlvcml0eVZhbHVlRWwsXHJcbiAgICBkYXlPZldlZWtcclxuICApO1xyXG5cclxuICByZXR1cm4gdXNlclRvZG87XHJcbn1cclxuXHJcbi8vIENsZWFyIGZvcm0gaW5wdXRcclxuZnVuY3Rpb24gY2xlYXJJbnB1dEZvcm0oKSB7XHJcbiAgaW5wdXRGaWVsZEVsLnZhbHVlID0gXCJcIjtcclxuICBkZXNjcmlwdGlvbkZpZWxkRWwudmFsdWUgPSBcIlwiO1xyXG4gIHNlbGVjdFByaW9yaXR5RWwudmFsdWUgPSBcIlNlbGVjdCBQcmlvcml0eVwiO1xyXG4gIGR1ZURhdGUudmFsdWUgPSBcIlwiO1xyXG59XHJcblxyXG5sZXQgY3VycmVudFByb2plY3ROYW1lID0gW107XHJcbmxldCB0b0RvID0gW107XHJcbmZ1bmN0aW9uIGFkZE5ld1Byb2plY3RUb2RvcygpIHtcclxuICBjdXJyZW50UHJvamVjdE5hbWUgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwicHJvamVjdHNcIikpIHx8IFtdO1xyXG4gIGNvbnN0IGN1cnJlbnRQcm9qZWN0ID0gY3VycmVudFByb2plY3ROYW1lW2N1cnJlbnRQcm9qZWN0TmFtZS5sZW5ndGggLSAxXTtcclxuICBjb25zb2xlLmxvZyhjdXJyZW50UHJvamVjdE5hbWUpO1xyXG5cclxuICAvLyBpZiAocHJvamVjdEZvcm0uc3R5bGUuZGlzcGxheSA9PT0gXCJibG9ja1wiKSB7XHJcbiAgLy8gc2VsZWN0ZWRQcm9qZWN0ID0gY3VycmVudFByb2plY3Q7XHJcblxyXG4gIGNvbnN0IHNlbGVjdGVkUHJvamVjdCA9IHByb2plY3REcm9wRG93bi52YWx1ZTtcclxuXHJcbiAgaWYgKHNlbGVjdGVkUHJvamVjdCkge1xyXG4gICAgdG9EbyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oc2VsZWN0ZWRQcm9qZWN0KSkgfHwgW107XHJcblxyXG4gICAgY29uc3QgbmV3VG9EbyA9IGdldFVzZXJUb2RvKCk7XHJcbiAgICB0b0RvLnB1c2gobmV3VG9Ebyk7XHJcblxyXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oc2VsZWN0ZWRQcm9qZWN0LCBKU09OLnN0cmluZ2lmeSh0b0RvKSk7XHJcbiAgICBjb25zb2xlLmxvZyh0b0RvKTtcclxuXHJcbiAgICBjb25zb2xlLmxvZyh0b0RvKTtcclxuICAgIGNsZWFySW5wdXRGb3JtKCk7XHJcbiAgICBkaXNwbGF5VG9Eb3NGb3JDdXJyZW50UHJvamVjdChzZWxlY3RlZFByb2plY3QpO1xyXG4gIH0gZWxzZSB7XHJcbiAgICBjb25zb2xlLmxvZyhjdXJyZW50UHJvamVjdCk7XHJcbiAgICAvL0lmIHRoZXJlIGlzIGFuIGV4aXN0aW5nIHByb2plY3QgZ2V0IGl0IGZyb20gdGhlIGxvY2FsIHN0b3JhZ2VcclxuICAgIGNvbnN0IHRvRG8gPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKGN1cnJlbnRQcm9qZWN0KSkgfHwgW107XHJcblxyXG4gICAgY29uc3QgbmV3VG9EbyA9IGdldFVzZXJUb2RvKCk7XHJcblxyXG4gICAgdG9Eby5wdXNoKG5ld1RvRG8pO1xyXG5cclxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKGN1cnJlbnRQcm9qZWN0LCBKU09OLnN0cmluZ2lmeSh0b0RvKSk7XHJcblxyXG4gICAgY29uc29sZS5sb2codG9Ebyk7XHJcbiAgICBjbGVhcklucHV0Rm9ybSgpO1xyXG4gICAgZGlzcGxheVRvRG9zRm9yQ3VycmVudFByb2plY3QoY3VycmVudFByb2plY3QpO1xyXG4gIH1cclxuICAvLyB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGRpc3BsYXlUb0Rvc0ZvckN1cnJlbnRQcm9qZWN0KHByb2plY3ROYW1lKSB7XHJcbiAgY3VycmVudFByb2plY3ROYW1lID0gcHJvamVjdE5hbWU7XHJcbiAgLy8gY29uc29sZS5sb2coY3VycmVudFByb2plY3ROYW1lKTtcclxuXHJcbiAgLy8gc2F2ZVRhc2socHJvamVjdE5hbWUpO1xyXG4gIGxldCBwcm9qZWN0VG9kb3MgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKHByb2plY3ROYW1lKSkgfHwgW107XHJcblxyXG4gIHRvRG8gPSBwcm9qZWN0VG9kb3M7XHJcbiAgY29uc29sZS5sb2codG9Ebyk7XHJcbiAgLy8gY29uc29sZS5sb2coY3VycmVudFRvZG9zKTtcclxuXHJcbiAgcHJvamVjdFRvZG9zLmZvckVhY2goKHRvZG8sIGluZGV4KSA9PiB7XHJcbiAgICBkaXNwbGF5VGFzayhcclxuICAgICAgdG9kby50aXRsZSxcclxuICAgICAgdG9kby5kZXNjcmlwdGlvbixcclxuICAgICAgdG9kby5wcmlvcml0eSxcclxuICAgICAgdG9kby5kYXRlLFxyXG4gICAgICBpbmRleCxcclxuICAgICAgcHJvamVjdE5hbWVcclxuICAgICk7XHJcbiAgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBkaXNwbGF5VGFzayhcclxuICBzYXZlVGl0bGVEYXRhLFxyXG4gIHNhdmVEZXNjcmlwdGlvbkRhdGEsXHJcbiAgc2F2ZVByaW9yaXR5RGF0YSxcclxuICBzYXZlRHVlRGF0ZURhdGEsXHJcbiAgaW5kZXgsXHJcbiAgcHJvamVjdE5hbWVcclxuKSB7XHJcbiAgY29uc3QgbGlzdENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgY29uc3QgdGFza0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xyXG4gIGNvbnN0IGlubmVyVGFza0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgY29uc3QgaW5uZXJUYXNrSGFuZGxlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcblxyXG4gIGlubmVyVGFza0hhbmRsZXIuY2xhc3NMaXN0LmFkZChcImlubmVyVGFza0hhbmRsZXJcIik7XHJcbiAgaW5uZXJUYXNrQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJpbm5lclRhc2tDb250YWluZXJcIik7XHJcbiAgdGFza0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwidGFza0NvbnRhaW5lclwiKTtcclxuICBsaXN0Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJsaXN0Q29udGFpbmVyXCIpO1xyXG5cclxuICBjb25zdCBjaGVja0JveENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xyXG4gIGNoZWNrQm94Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJjaGVja0JveENvbnRhaW5lclwiKTtcclxuICBjb25zdCBjaGVja0JveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcclxuICBjaGVja0JveC5jbGFzc0xpc3QuYWRkKFwiY2hlY2tCb3hcIik7XHJcbiAgY2hlY2tCb3guc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcImNoZWNrYm94XCIpO1xyXG5cclxuICBjb25zdCB0YXNrVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDRcIik7XHJcbiAgY29uc3QgdGFza0Rlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XHJcbiAgY29uc3QgZHVlRGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xyXG4gIGNvbnN0IHRhc2tQcmlvcml0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xyXG4gIGNvbnN0IGRlbGV0ZVRhc2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xyXG5cclxuICB0YXNrVGl0bGUuY2xhc3NMaXN0LmFkZChcInRhc2tUaXRsZVwiKTtcclxuICB0YXNrRGVzY3JpcHRpb24uY2xhc3NMaXN0LmFkZChcInRhc2tEZXNjcmlwdGlvblwiKTtcclxuICBkdWVEYXRlLmNsYXNzTGlzdC5hZGQoXCJkdWVEYXRlXCIpO1xyXG4gIGRlbGV0ZVRhc2suY2xhc3NMaXN0LmFkZChcImRlbGV0ZVRhc2tcIik7XHJcbiAgdGFza1ByaW9yaXR5LmNsYXNzTGlzdC5hZGQoXCJ0YXNrUHJpb3JpdHlcIik7XHJcblxyXG4gIHRhc2tUaXRsZS50ZXh0Q29udGVudCA9IGAgJHtzYXZlVGl0bGVEYXRhfWA7XHJcbiAgdGFza0Rlc2NyaXB0aW9uLnRleHRDb250ZW50ID0gYCR7c2F2ZURlc2NyaXB0aW9uRGF0YX1gO1xyXG4gIHRhc2tQcmlvcml0eS50ZXh0Q29udGVudCA9IGAke3NhdmVQcmlvcml0eURhdGF9YDtcclxuICBkdWVEYXRlLnRleHRDb250ZW50ID0gYCR7c2F2ZUR1ZURhdGVEYXRhfWA7XHJcbiAgZGVsZXRlVGFzay50ZXh0Q29udGVudCA9IFwiRGVsZXRlIHRhc2tcIjtcclxuXHJcbiAgZGVsZXRlVGFzay5kYXRhc2V0LmluZGV4ID0gaW5kZXg7XHJcbiAgZGVsZXRlVGFzay5kYXRhc2V0LnByb2plY3QgPSBwcm9qZWN0TmFtZTtcclxuICBjaGVja0JveC5kYXRhc2V0LmluZGV4ID0gaW5kZXg7XHJcbiAgY2hlY2tCb3guZGF0YXNldC5wcm9qZWN0ID0gcHJvamVjdE5hbWU7XHJcblxyXG4gIHRhc2tUaXRsZS5kYXRhc2V0LmZpZWxkVHlwZSA9IFwidGl0bGVcIjtcclxuICB0YXNrRGVzY3JpcHRpb24uZGF0YXNldC5maWVsZFR5cGUgPSBcImRlc2NyaXB0aW9uXCI7XHJcbiAgdGFza1ByaW9yaXR5LmRhdGFzZXQuZmllbGRUeXBlID0gXCJ0YXNrUHJpb3JpdHlcIjtcclxuICBkdWVEYXRlLmRhdGFzZXQuZmllbGRUeXBlID0gXCJkdWVEYXRlXCI7XHJcblxyXG4gIHRhc2tUaXRsZS5kYXRhc2V0LmluZGV4ID0gaW5kZXg7XHJcbiAgdGFza0Rlc2NyaXB0aW9uLmRhdGFzZXQuaW5kZXggPSBpbmRleDtcclxuICB0YXNrUHJpb3JpdHkuZGF0YXNldC5pbmRleCA9IGluZGV4O1xyXG4gIGR1ZURhdGUuZGF0YXNldC5pbmRleCA9IGluZGV4O1xyXG5cclxuICBpbm5lclRhc2tDb250YWluZXIuYXBwZW5kQ2hpbGQodGFza1RpdGxlKTtcclxuICBpbm5lclRhc2tDb250YWluZXIuYXBwZW5kQ2hpbGQodGFza0Rlc2NyaXB0aW9uKTtcclxuICBpbm5lclRhc2tDb250YWluZXIuYXBwZW5kQ2hpbGQoZHVlRGF0ZSk7XHJcblxyXG4gIGlubmVyVGFza0hhbmRsZXIuYXBwZW5kQ2hpbGQodGFza1ByaW9yaXR5KTtcclxuICBpbm5lclRhc2tIYW5kbGVyLmFwcGVuZENoaWxkKGRlbGV0ZVRhc2spO1xyXG5cclxuICB0YXNrQ29udGFpbmVyLmFwcGVuZENoaWxkKGlubmVyVGFza0NvbnRhaW5lcik7XHJcbiAgdGFza0NvbnRhaW5lci5hcHBlbmRDaGlsZChpbm5lclRhc2tIYW5kbGVyKTtcclxuXHJcbiAgY2hlY2tCb3hDb250YWluZXIuYXBwZW5kQ2hpbGQoY2hlY2tCb3gpO1xyXG4gIGxpc3RDb250YWluZXIuYXBwZW5kQ2hpbGQoY2hlY2tCb3hDb250YWluZXIpO1xyXG5cclxuICBsaXN0Q29udGFpbmVyLmFwcGVuZENoaWxkKHRhc2tDb250YWluZXIpO1xyXG4gIHVzZXJMaXN0LmFwcGVuZENoaWxkKGxpc3RDb250YWluZXIpO1xyXG5cclxuICB0YXNrVGl0bGUuYWRkRXZlbnRMaXN0ZW5lcihcImRibGNsaWNrXCIsIGVkaXRUYXNrKTtcclxuICB0YXNrRGVzY3JpcHRpb24uYWRkRXZlbnRMaXN0ZW5lcihcImRibGNsaWNrXCIsIGVkaXRUYXNrKTtcclxuICB0YXNrUHJpb3JpdHkuYWRkRXZlbnRMaXN0ZW5lcihcImRibGNsaWNrXCIsIGVkaXRUYXNrKTtcclxuICBkdWVEYXRlLmFkZEV2ZW50TGlzdGVuZXIoXCJkYmxjbGlja1wiLCBlZGl0VGFzayk7XHJcblxyXG4gIGRlbGV0ZVRhc2suYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGRlbGV0ZVRvRG8pO1xyXG4gIGRlbGV0ZVRhc2suYWRkRXZlbnRMaXN0ZW5lcihcInRvdWNoc3RhcnRcIiwgZGVsZXRlVG9Ebyk7XHJcblxyXG4gIGhhbmRsZUNoZWNrQm94KGNoZWNrQm94LCB0YXNrVGl0bGUsIHRhc2tEZXNjcmlwdGlvbik7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBlZGl0VGFzayhldmVudCkge1xyXG4gIGNvbnN0IHRhcmdldCA9IGV2ZW50LnRhcmdldDtcclxuXHJcbiAgY29uc3QgZmllbGRUeXBlID0gdGFyZ2V0LmRhdGFzZXQuZmllbGRUeXBlOyAvLyBJZGVudGlmeSB0aGUgZmllbGQgdHlwZSh0aXRsZSxkZXNjcmlwdGlvbixwcmlvcml0eSxkYXRlKVxyXG4gIGNvbnN0IGluZGV4ID0gdGFyZ2V0LmRhdGFzZXQuaW5kZXg7XHJcbiAgY29uc3QgdGFza1ByaW9yaXR5ID0gW1wiVXJnZW50XCIsIFwiSW1wb3J0YW50XCIsIFwiTG93IHByaW9yaXR5XCJdO1xyXG5cclxuICBsZXQgdGFza0lucHV0O1xyXG4gIGlmIChmaWVsZFR5cGUgPT09IFwidGl0bGVcIiB8fCBmaWVsZFR5cGUgPT09IFwiZGVzY3JpcHRpb25cIikge1xyXG4gICAgdGFza0lucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xyXG4gICAgdGFza0lucHV0LnR5cGUgPSBcInRleHRcIjtcclxuICAgIHRhc2tJbnB1dC52YWx1ZSA9IHRhcmdldC50ZXh0Q29udGVudDtcclxuICB9IGVsc2UgaWYgKGZpZWxkVHlwZSA9PT0gXCJkdWVEYXRlXCIpIHtcclxuICAgIHRhc2tJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcclxuICAgIHRhc2tJbnB1dC50eXBlID0gXCJkYXRlXCI7XHJcbiAgICB0YXNrSW5wdXQudmFsdWUgPSB0YXJnZXQudGV4dENvbnRlbnQ7XHJcbiAgfSBlbHNlIGlmIChmaWVsZFR5cGUgPT09IFwidGFza1ByaW9yaXR5XCIpIHtcclxuICAgIHRhc2tJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzZWxlY3RcIik7XHJcblxyXG4gICAgdGFza1ByaW9yaXR5LmZvckVhY2goKHByaW9yaXR5KSA9PiB7XHJcbiAgICAgIGNvbnN0IG9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7XHJcbiAgICAgIG9wdGlvbi52YWx1ZSA9IHByaW9yaXR5O1xyXG4gICAgICBvcHRpb24udGV4dENvbnRlbnQgPSBwcmlvcml0eTtcclxuXHJcbiAgICAgIGlmIChwcmlvcml0eSA9PT0gdGFyZ2V0LnRleHRDb250ZW50KSB7XHJcbiAgICAgICAgb3B0aW9uLnNlbGVjdGVkID0gdHJ1ZTtcclxuICAgICAgfVxyXG4gICAgICB0YXNrSW5wdXQuYXBwZW5kQ2hpbGQob3B0aW9uKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgLy9TdG9yZSB0aGUgZmllbGRUeXBlIGluIHRoZSBpbnB1dCBkYXRhc2V0XHJcbiAgdGFza0lucHV0LmRhdGFzZXQuZmllbGRUeXBlID0gZmllbGRUeXBlO1xyXG4gIHRhc2tJbnB1dC5kYXRhc2V0LmluZGV4ID0gaW5kZXg7XHJcblxyXG4gIHRhcmdldC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbiAgdGFyZ2V0LnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKHRhc2tJbnB1dCwgdGFyZ2V0Lm5leHRTaWJsaW5nKTsgLy8gSW5zZXJ0IHRoZSBpbnB1dCBmaWVsZCBuZXh0IHRvIHRhcmdldCBlbGVtZW50XHJcblxyXG4gIHRhc2tJbnB1dC5jbGFzc0xpc3QuYWRkKFwiZWRpdFwiKTtcclxuICAvLyAgIGNvbnN0IHNlbGVjdGVkVmFsdWUgPSB0YXNrSW5wdXQudmFsdWU7XHJcbiAgLy8gY29uc29sZS5sb2coc2VsZWN0ZWRWYWx1ZSk7XHJcblxyXG4gIGlmICh0YXNrSW5wdXQudHlwZSA9PT0gXCJ0ZXh0XCIpIHtcclxuICAgIHRhc2tJbnB1dC5zZWxlY3QoKTsgLy8gQXV0b21hdGljYWxseSBzZWxlY3QgdGhlIGNvbnRlbnQgb2YgdGhlIGlucHV0IGZpZWxkXHJcbiAgfVxyXG5cclxuICB0YXNrSW5wdXQuYWRkRXZlbnRMaXN0ZW5lcihcImJsdXJcIiwgc2F2ZUVkaXRlZFRhc2spOyAvLyBTYXZlIHRhc2sgd2hlbiB0YXNrIGxvc2UgZm9jdXMgb24gaW5wdXQgZWxlbWVudC5cclxuICB0YXNrSW5wdXQuYWRkRXZlbnRMaXN0ZW5lcihcImtleXByZXNzXCIsIHNhdmVFZGl0ZWRUYXNrKTsgLy8gU2F2ZSB0YXNrIG9uIHByZXNzaW5nIEVudGVyXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBzYXZlRWRpdGVkVGFzayhldmVudCkge1xyXG4gIGNvbnNvbGUubG9nKHRvRG8pO1xyXG5cclxuICBpZiAoZXZlbnQudHlwZSA9PT0gXCJibHVyXCIgfHwgZXZlbnQua2V5ID09PSBcIkVudGVyXCIpIHtcclxuICAgIGNvbnN0IGlucHV0ID0gZXZlbnQudGFyZ2V0O1xyXG5cclxuICAgIGxldCBmaWVsZFR5cGUgPSBpbnB1dC5kYXRhc2V0LmZpZWxkVHlwZTtcclxuICAgIGxldCBpbmRleCA9IGlucHV0LmRhdGFzZXQuaW5kZXg7IC8vIEdldCB0aGUgaW5kZXggZnJvbSB0aGUgaW5wdXQgZGF0YXNldFxyXG5cclxuICAgIGxldCBuZXdWYWx1ZTtcclxuICAgIC8vSWYgc2VsZWN0IGVsZW1lbnQsIGdldCBpdCB2YWx1ZSBlbHNlIGdldCBpbnB1dCB2YWx1ZVxyXG4gICAgaWYgKGlucHV0LnRhZ05hbWUgPT09IFwiU0VMRUNUXCIpIHtcclxuICAgICAgbmV3VmFsdWUgPSBpbnB1dC5vcHRpb25zW2lucHV0LnNlbGVjdGVkSW5kZXhdLnZhbHVlO1xyXG4gICAgICB0b0RvW2luZGV4XS5wcmlvcml0eSA9IG5ld1ZhbHVlO1xyXG4gICAgICBjb25zb2xlLmxvZyh0b0RvW2luZGV4XS5wcmlvcml0eSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBuZXdWYWx1ZSA9IGlucHV0LnZhbHVlO1xyXG4gICAgfVxyXG4gICAgLy8gY29uc3QgY3VycmVudFByb2plY3QgPSBjdXJyZW50UHJvamVjdE5hbWVbY3VycmVudFByb2plY3ROYW1lLmxlbmd0aCAtIDFdO1xyXG5cclxuICAgIC8vR2V0IHRoZSB0YXNrIGZyb20gdGhlIGxvY2FsIHN0b3JhZ2VcclxuICAgIC8vIGxldCB0b0RvID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShjdXJyZW50UHJvamVjdE5hbWUpKSB8fCBbXTtcclxuICAgIGNvbnNvbGUubG9nKHRvRG8pO1xyXG5cclxuICAgIC8vQ2hlY2sgaWYgdGhlIGluZGV4IGlzIG5vdCBvdXQgb2YgYm91bmRzIGluIHRoZSBhcnJheVxyXG4gICAgaWYgKGluZGV4IDwgdG9Eby5sZW5ndGgpIHtcclxuICAgICAgaWYgKGZpZWxkVHlwZSA9PT0gXCJ0aXRsZVwiKSB7XHJcbiAgICAgICAgdG9Eb1tpbmRleF0udGl0bGUgPSBuZXdWYWx1ZTtcclxuICAgICAgICBjb25zb2xlLmxvZyh0b0RvW2luZGV4XS50aXRsZSk7XHJcbiAgICAgIH0gZWxzZSBpZiAoZmllbGRUeXBlID09PSBcImRlc2NyaXB0aW9uXCIpIHtcclxuICAgICAgICB0b0RvW2luZGV4XS5kZXNjcmlwdGlvbiA9IG5ld1ZhbHVlO1xyXG4gICAgICB9IGVsc2UgaWYgKGZpZWxkVHlwZSA9PT0gXCJkdWVEYXRlXCIpIHtcclxuICAgICAgICBsZXQgZHVlRGF0ZSA9IG5ld1ZhbHVlO1xyXG4gICAgICAgIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZShkdWVEYXRlKTtcclxuXHJcbiAgICAgICAgY29uc3Qgb3B0aW9ucyA9IHtcclxuICAgICAgICAgIHdlZWtkYXk6IFwibG9uZ1wiLFxyXG4gICAgICAgICAgeWVhcjogXCJudW1lcmljXCIsXHJcbiAgICAgICAgICBtb250aDogXCJzaG9ydFwiLFxyXG4gICAgICAgICAgZGF5OiBcIm51bWVyaWNcIixcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICB0b0RvW2luZGV4XS5kYXRlID0gZGF0ZS50b0xvY2FsZURhdGVTdHJpbmcoXCJlbi1Vc1wiLCBvcHRpb25zKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIFNhdmUgdGhlIHVwZGF0ZWQgdGFza3MgdG8gbG9jYWwgc3RvcmFnZVxyXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oY3VycmVudFByb2plY3ROYW1lLCBKU09OLnN0cmluZ2lmeSh0b0RvKSk7XHJcblxyXG4gICAgLy8gVXBkYXRlIHRoZSBvcmlnaW5hbCBlbGVtZW50J3MgdGV4dCBjb250ZW50IGFuZCBzaG93IGl0IGFnYWluXHJcbiAgICBsZXQgb3JpZ2luYWxFbGVtZW50ID0gaW5wdXQucHJldmlvdXNTaWJsaW5nO1xyXG5cclxuICAgIG9yaWdpbmFsRWxlbWVudC50ZXh0Q29udGVudCA9IG5ld1ZhbHVlO1xyXG5cclxuICAgIG9yaWdpbmFsRWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xyXG5cclxuICAgIC8vIFJlbW92ZSB0aGUgaW5wdXQgZmllbGQgaWYgaXQgaXMgc3RpbGwgcGFydCBvZiB0aGUgRE9NXHJcblxyXG4gICAgaW5wdXQucmVtb3ZlKCk7XHJcblxyXG4gICAgdXNlckxpc3QudGV4dENvbnRlbnQgPSBcIlwiO1xyXG5cclxuICAgIC8vIFJlLXJlbmRlciB0aGUgdG9kbyBsaXN0IGlmIG5lY2Vzc2FyeVxyXG4gICAgZGlzcGxheVRvRG9zRm9yQ3VycmVudFByb2plY3QoY3VycmVudFByb2plY3ROYW1lKTtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGhhbmRsZUNoZWNrQm94KGNoZWNrQm94LCB0YXNrVGl0bGUsIHRhc2tEZXNjcmlwdGlvbikge1xyXG4gIGNoZWNrQm94LmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgKGV2ZW50KSA9PiB7XHJcbiAgICBpZiAoY2hlY2tCb3guY2hlY2tlZCA9PT0gdHJ1ZSkge1xyXG4gICAgICBjb25zdCBjaGVja0JveCA9IGV2ZW50LnRhcmdldDtcclxuICAgICAgY29uc29sZS5sb2coY2hlY2tCb3gpO1xyXG4gICAgICBjb25zdCBpbmRleCA9IGNoZWNrQm94LmRhdGFzZXQuaW5kZXg7XHJcbiAgICAgIGNvbnN0IHByb2plY3ROYW1lID0gY2hlY2tCb3guZGF0YXNldC5wcm9qZWN0O1xyXG5cclxuICAgICAgdG9EbyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0ocHJvamVjdE5hbWUpKSB8fCBbXTtcclxuXHJcbiAgICAgIGlmIChpbmRleCAhPT0gLTEpIHtcclxuICAgICAgICBjaGVja0JveC5yZW1vdmUoY2hlY2tCb3gpO1xyXG4gICAgICAgIHRvRG8uc3BsaWNlKGluZGV4LCAxKTtcclxuICAgICAgICAvL3VwZGF0ZSBUby1kbyBpdGVtIGluIGxvY2FsIHN0b3JhZ2VcclxuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShwcm9qZWN0TmFtZSwgSlNPTi5zdHJpbmdpZnkodG9EbykpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHRvRG8pO1xyXG4gICAgICAgIHVzZXJMaXN0LnRleHRDb250ZW50ID0gXCJcIjtcclxuICAgICAgICBkaXNwbGF5VG9Eb3NGb3JDdXJyZW50UHJvamVjdChwcm9qZWN0TmFtZSk7XHJcbiAgICAgICAgYWxlcnQoXCJUYXNrIGNvbXBsZXRlZCFcIik7XHJcbiAgICAgIH1cclxuICAgICAgY29uc29sZS5sb2coXCJ0cnVlXCIpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGFza1RpdGxlLnN0eWxlLnRleHREZWNvcmF0aW9uID0gXCJub25lXCI7XHJcbiAgICAgIHRhc2tEZXNjcmlwdGlvbi5zdHlsZS50ZXh0RGVjb3JhdGlvbiA9IFwibm9uZVwiO1xyXG4gICAgICBjb25zb2xlLmxvZyhcImZhbHNlXCIpO1xyXG4gICAgfVxyXG4gIH0pO1xyXG59XHJcblxyXG4vL0RlbGV0ZSB0aGUgdG9kbyB0aGF0IGdldCBjbGlja2VkXHJcbmZ1bmN0aW9uIGRlbGV0ZVRvRG8oZXZlbnQpIHtcclxuICBjb25zdCBidXR0b24gPSBldmVudC50YXJnZXQ7XHJcbiAgY29uc3QgaW5kZXggPSBidXR0b24uZGF0YXNldC5pbmRleDtcclxuICBjb25zdCBjdXJyZW50UHJvamVjdCA9IGJ1dHRvbi5kYXRhc2V0LnByb2plY3Q7XHJcbiAgY29uc29sZS5sb2coY3VycmVudFByb2plY3QpO1xyXG5cclxuICAvLyBjb25zdCBjdXJyZW50UHJvamVjdCA9IGN1cnJlbnRQcm9qZWN0TmFtZVtjdXJyZW50UHJvamVjdE5hbWUubGVuZ3RoIC0gMV07XHJcbiAgdG9EbyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oY3VycmVudFByb2plY3QpKSB8fCBbXTtcclxuXHJcbiAgY29uc29sZS5sb2codG9Ebyk7XHJcblxyXG4gIGlmIChpbmRleCAhPT0gLTEpIHtcclxuICAgIHRvRG8uc3BsaWNlKGluZGV4LCAxKTtcclxuICAgIC8vdXBkYXRlIFRvLWRvIGl0ZW0gaW4gbG9jYWwgc3RvcmFnZVxyXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oY3VycmVudFByb2plY3QsIEpTT04uc3RyaW5naWZ5KHRvRG8pKTtcclxuICAgIGNvbnNvbGUubG9nKHRvRG8pO1xyXG4gICAgdXNlckxpc3QudGV4dENvbnRlbnQgPSBcIlwiO1xyXG4gICAgZGlzcGxheVRvRG9zRm9yQ3VycmVudFByb2plY3QoY3VycmVudFByb2plY3QpO1xyXG4gIH1cclxufVxyXG5cclxuLy9DYW5jZWwgcHJvamVjdCBmb3JtIGZyb20gZGlzcGxheWluZy5cclxuZnVuY3Rpb24gY2FuY2VsRm9ybURpc3BsYXkoKSB7XHJcbiAgaW5wdXRGaWVsZEVsLnZhbHVlID0gXCJcIjtcclxuICBkZXNjcmlwdGlvbkZpZWxkRWwudmFsdWUgPSBcIlwiO1xyXG4gIHNlbGVjdFByaW9yaXR5RWwudmFsdWUgPSBcIlNlbGVjdCBQcmlvcml0eVwiO1xyXG4gIGR1ZURhdGUudmFsdWUgPSBcIlwiO1xyXG4gIHByb2plY3RGb3JtLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuICBjb25zb2xlLmxvZyhcImNhbmNlbCBmb3JtIVwiKTtcclxuICBuZXdQcm9qZWN0c0Zvcm1Db250YWluZXJFbC5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xyXG4gIGlmIChuZXdQcm9qZWN0VGFza3NDb250YWluZXIuc3R5bGUuZGlzcGxheSA9PT0gXCJub25lXCIpIHtcclxuICAgIG5ld1Byb2plY3RUYXNrc0NvbnRhaW5lci5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xyXG4gIH1cclxuICBjcmVhdGVOZXdQcm9qZWN0VGFza0J0bigpO1xyXG4gIC8vIGRpc3BsYXlUb0Rvc0ZvckN1cnJlbnRQcm9qZWN0KGN1cnJlbnRQcm9qZWN0TmFtZS5zbGljZSgpLnBvcCgpKTtcclxufVxyXG5jYW5jZWxUYXNrQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBjYW5jZWxGb3JtRGlzcGxheSk7XHJcblxyXG4vL1ByZXZlbnQgZm9ybSBEZWZhdWx0IHdoZW4gc3VibWl0aW5nIHByb2plY3QgbmFtZVxyXG5jb25zdCBzdWJtaXROZXdQcm9qZWN0Rm9ybU5hbWUgPSAoZXZlbnQpID0+IHtcclxuICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gIGdldG5ld1Byb2plY3RJbnB1dE5hbWUoKTtcclxuICBkaXNwbGF5TmV3UHJvamVjdEZvcm0oKTtcclxuICAvLyBjcmVhdGVOZXdQcm9qZWN0VGFza0J0bigpO1xyXG59O1xyXG5TYXZlUHJvamVjdE5hbWUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHN1Ym1pdE5ld1Byb2plY3RGb3JtTmFtZSk7XHJcbm5ld1Byb2plY3ROYW1lUmVxdWVzdC5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIChldmVudCkgPT5cclxuICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXHJcbik7XHJcblxyXG5uZXdQcm9qZWN0VGFza3NDb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICBkaXNwbGF5TmV3UHJvamVjdEZvcm0oKTtcclxuICBuZXdQcm9qZWN0VGFza3NDb250YWluZXIuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG4gIG5ld1Byb2plY3RUYXNrc0NvbnRhaW5lci50ZXh0Q29udGVudCA9IFwiXCI7XHJcbn0pO1xyXG5cclxuZnVuY3Rpb24gc3VibWl0Rm9ybShldmVudCkge1xyXG4gIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgdXNlckxpc3QudGV4dENvbnRlbnQgPSBcIlwiO1xyXG5cclxuICBhZGROZXdQcm9qZWN0VG9kb3MoKTtcclxuICAvLyBkaXNwbGF5VG9Eb3NGb3JDdXJyZW50UHJvamVjdChwcm9qZWN0TmFtZSk7XHJcbiAgLy8gYWRkVG9kb1Rvc2VsZWN0ZWRQcm9qZWN0KCk7XHJcbn1cclxuc3VibWl0VGFza0J0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgc3VibWl0Rm9ybSk7XHJcbnByb2plY3RGb3JtLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgKGV2ZW50KSA9PiBldmVudC5wcmV2ZW50RGVmYXVsdCgpKTtcclxuIiwiXHJcbmltcG9ydCB7IGdldFVzZXJUb2RvIH0gZnJvbSBcIi4vZG9tLUVsLTJcIjtcclxuaW1wb3J0IHsgbmV3UHJvamVjdFRhc2tzQ29udGFpbmVyIH0gZnJvbSBcIi4vZG9tLUVsLTJcIjtcclxuaW1wb3J0IHsgZ2V0bmV3UHJvamVjdElucHV0VmFsdWUgfSBmcm9tIFwiLi9kb20tRWwtMlwiO1xyXG5pbXBvcnQgeyBjcmVhdGVOZXdQcm9qZWN0VGFza0J0biB9IGZyb20gXCIuL2RvbS1FbC0yXCI7XHJcbmltcG9ydCB7IGlucHV0TmV3cHJvamVjdEZvcm1OYW1lIH0gZnJvbSBcIi4vZG9tLUVsLTJcIjtcclxuXHJcbmNvbnN0IG1haW5Db250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwibWFpblwiKTtcclxuY29uc3QgaGVhZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5oZWFkZXJUZXh0Q29udGVudFwiKTtcclxuY29uc3QgdXNlckxpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3VzZXJsaXN0XCIpO1xyXG5jb25zdCBpbmJveFRhc2tEaXNwbGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5kaXNwbGF5SW5ib3hUYXNrXCIpO1xyXG5jb25zdCBmb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNmb3JtXCIpO1xyXG5sZXQgcHJvamVjdEZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI1Byb2plY3RGb3JtXCIpO1xyXG5jb25zdCBjYW5jZWxGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jYW5jZWxcIik7XHJcbmNvbnN0IHN1Ym1pdEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjc3VibWl0QnRuXCIpO1xyXG5jb25zdCBhZGRUYXNrYnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0YXNrXCIpO1xyXG5jb25zdCBhZGRUYXNrTW9iaWxlQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2FkZFRvZG9CdG5Db250YWluZXInKVxyXG5cclxubGV0IGluYm94ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5pbmJveFwiKTtcclxuY29uc3QgdG9Eb0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzZWN0aW9uXCIpO1xyXG50b0RvQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJ0b0RvQ29udGFpbmVySW5ib3hcIik7XHJcbmNvbnN0IGluYm94Rm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJmb3JtXCIpO1xyXG5pbmJveEZvcm0uY2xhc3NMaXN0LmFkZChcImluYm94Rm9ybVwiKTtcclxuY29uc3QgaW5ib3hUYXNrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuaW5ib3hUYXNrLmNsYXNzTGlzdC5hZGQoXCJpbmJveFRhc2tcIik7XHJcblxyXG5sZXQgdGFza1RpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50YXNrLXRpdGxlXCIpO1xyXG5sZXQgdGFza0Rlc2NyaXB0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5kZXNjcmlwdGlvblwiKTtcclxubGV0IHRhc2tQcmlvcml0eSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcHJpb3JpdHlcIik7XHJcbmxldCBkdWVEYXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNkYXRlUGlja2VyXCIpO1xyXG5cclxuY2xhc3MgZ2V0TGlzdCB7XHJcbiAgY29uc3RydWN0b3IodGl0bGUsIGRlc2NyaXB0aW9uLCBwcmlvcml0eSwgZGF0ZSkge1xyXG4gICAgdGhpcy50aXRsZSA9IHRpdGxlO1xyXG4gICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xyXG4gICAgdGhpcy5wcmlvcml0eSA9IHByaW9yaXR5O1xyXG4gICAgdGhpcy5kYXRlID0gZGF0ZTtcclxuICB9XHJcbn1cclxuXHJcblxyXG5leHBvcnQgY29uc3QgbXlQcm9qZWN0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcHJvamVjdHMgaDNcIik7XHJcbmNvbnN0IGRlZmF1bHRQcm9qZWN0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcHJvamVjdHNcIik7XHJcblxyXG5cclxuZnVuY3Rpb24gZGlzcGxheUZvcm0oZXZlbnQpIHtcclxuICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiaGVhZGVyIGgxXCIpO1xyXG4gIFxyXG4gIGhlYWRlci50ZXh0Q29udGVudCA9IFwiQWRkIHlvdXIgVG8gZG9cIjtcclxuICB1c2VyTGlzdC50ZXh0Q29udGVudCA9IFwiXCI7XHJcbiAgY29uc3QgaW50aWFsVGV4dERpc3BsYXlDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaW50aWFsVGV4dERpc3BsYXlDb250YWluZXInKVxyXG4gIGludGlhbFRleHREaXNwbGF5Q29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSdcclxuICBcclxuICBsZXQgbmV3UHJvamVjdEJ0biA9IGNyZWF0ZU5ld1Byb2plY3RUYXNrQnRuKCk7XHJcbiAgbmV3UHJvamVjdEJ0bi5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbiAgZm9ybS5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xyXG4gIGlmICgocHJvamVjdEZvcm0uc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIikpIHtcclxuICAgIHByb2plY3RGb3JtLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSdcclxuICB9XHJcbn1cclxuYWRkVGFza2J0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZGlzcGxheUZvcm0pO1xyXG5hZGRUYXNrTW9iaWxlQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBkaXNwbGF5Rm9ybSk7XHJcblxyXG5cclxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgKCkgPT4ge1xyXG4gIGRpc3BsYXlUb0RvcygpO1xyXG59KTtcclxuXHJcbmxldCB0b0RvcyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ0b0Rvc1wiKSkgfHwgW107XHJcblxyXG5cclxuZnVuY3Rpb24gYWNjZXB0SW5wdXQoKSB7ICBcclxuICBsZXQgdGFza0lucHV0VmFsdWUgPSB0YXNrVGl0bGUudmFsdWU7XHJcbiAgbGV0IGRlc2NyaXB0aW9uSW5wdXRWYWx1ZSA9IHRhc2tEZXNjcmlwdGlvbi52YWx1ZTtcclxuICBsZXQgcHJpb3JpdHlWYWx1ZUVsID0gdGFza1ByaW9yaXR5LnZhbHVlO1xyXG4gIGxldCBkdWVEYXRlVmFsdWVFbCA9IGR1ZURhdGUudmFsdWU7XHJcblxyXG4gIGNvbnNvbGUubG9nKHRhc2tJbnB1dFZhbHVlLmxlbmd0aClcclxuICBpZiAodGFza0lucHV0VmFsdWUubGVuZ3RoID4gMzApIHtcclxuICAgIHJldHVybiBhbGVydChcclxuICAgICAgYElucHV0IHNob3VsZCBiZSBsZXNzIG9yIGVxdWFsIHRvIHRoZSAzNSBjaGFyYWN0ZXJzLCB5b3UgaGF2ZSBlbnRlcmVkICR7XHJcbiAgICAgICAgdGFza0lucHV0VmFsdWUubGVuZ3RoXHJcbiAgICAgIH0gY2hhcmFjdGVyc2BcclxuICAgICk7XHJcbiAgfSBlbHNlIGlmKGRlc2NyaXB0aW9uSW5wdXRWYWx1ZS5sZW5ndGggPiAzNSkge1xyXG4gICAgcmV0dXJuIGFsZXJ0KFxyXG4gICAgICBgRGVzY3JpcHRpb24gc2hvdWxkIGJlIGxlc3Mgb3IgZXF1YWwgdG8gdGhlIDQwIGNoYXJhY3RlcnMsIHlvdSBoYXZlIGVudGVyZWQgJHtkZXNjcmlwdGlvbklucHV0VmFsdWUubGVuZ3RofSBjaGFyYWN0ZXJzYFxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZShkdWVEYXRlVmFsdWVFbCk7XHJcblxyXG4gIGNvbnN0IG9wdGlvbnMgPSB7XHJcbiAgICB3ZWVrZGF5OiBcImxvbmdcIixcclxuICAgIHllYXI6IFwibnVtZXJpY1wiLFxyXG4gICAgbW9udGg6IFwic2hvcnRcIixcclxuICAgIGRheTogXCJudW1lcmljXCIsXHJcbiAgfTtcclxuXHJcbiAgY29uc3QgZGF5T2ZXZWVrID0gZGF0ZS50b0xvY2FsZURhdGVTdHJpbmcoXCJlbi1Vc1wiLCBvcHRpb25zKTtcclxuXHJcbiAgbGV0IHVzZXJUb0RvID0gbmV3IGdldExpc3QoXHJcbiAgICB0YXNrSW5wdXRWYWx1ZSxcclxuICAgIGRlc2NyaXB0aW9uSW5wdXRWYWx1ZSxcclxuICAgIHByaW9yaXR5VmFsdWVFbCxcclxuICAgIGRheU9mV2Vla1xyXG4gICk7XHJcblxyXG4gIHRvRG9zLnB1c2godXNlclRvRG8pO1xyXG5cclxuICBcclxuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInRvRG9zXCIsIEpTT04uc3RyaW5naWZ5KHRvRG9zKSk7XHJcblxyXG4gIGNsZWFyRm9ybSgpO1xyXG4gIFxyXG59XHJcblxyXG5mdW5jdGlvbiBjbGVhckZvcm0oKSB7XHJcbiAgdGFza1RpdGxlLnZhbHVlID0gXCJcIjtcclxuICB0YXNrRGVzY3JpcHRpb24udmFsdWUgPSBcIlwiO1xyXG4gIGR1ZURhdGUudmFsdWUgPSBcIlwiO1xyXG4gIHRhc2tQcmlvcml0eS52YWx1ZSA9IFwiU2VsZWN0IFByaW9yaXR5XCI7XHJcbn1cclxuXHJcblxyXG5mdW5jdGlvbiBkaXNwbGF5VG9Eb3MoKSB7XHJcbiAgbGV0IHVzZXJUb2RvcyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ0b0Rvc1wiKSkgfHwgW107XHJcblxyXG4gIHVzZXJUb2Rvcz8uZm9yRWFjaCgodG9kb09iaiwgaW5kZXgpID0+IHtcclxuICAgIGdldEVsZW1lbnRGb3JUYXNrRGlzcGxheShcclxuICAgICAgdG9kb09iai50aXRsZSxcclxuICAgICAgdG9kb09iai5kZXNjcmlwdGlvbixcclxuICAgICAgdG9kb09iai5wcmlvcml0eSxcclxuICAgICAgdG9kb09iai5kYXRlLFxyXG4gICAgICBpbmRleFxyXG4gICAgKTtcclxuICB9KTtcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0RWxlbWVudEZvclRhc2tEaXNwbGF5KFxyXG4gIHNhdmVUaXRsZURhdGEsXHJcbiAgc2F2ZURlc2NyaXB0aW9uRGF0YSxcclxuICBzYXZlUHJpb3JpdHlEYXRhLFxyXG4gIHNhdmVEdWVEYXRlRGF0YSxcclxuICBpbmRleFxyXG4pIHtcclxuICBoZWFkZXIudGV4dENvbnRlbnQgPSBcIkNyZWF0ZSBZb3VyIFRvLURvIExpc3QuXCI7XHJcbiAgY29uc3QgbGlzdENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgY29uc3QgdGFza0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xyXG4gIGNvbnN0IGlubmVyVGFza0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgY29uc3QgaW5uZXJUYXNrSGFuZGxlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgaW5uZXJUYXNrSGFuZGxlci5jbGFzc0xpc3QuYWRkKFwiaW5uZXJUYXNrSGFuZGxlclwiKTtcclxuICBpbm5lclRhc2tDb250YWluZXIuY2xhc3NMaXN0LmFkZChcImlubmVyVGFza0NvbnRhaW5lclwiKTtcclxuICB0YXNrQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJ0YXNrQ29udGFpbmVyXCIpO1xyXG4gIGxpc3RDb250YWluZXIuY2xhc3NMaXN0LmFkZChcImxpc3RDb250YWluZXJcIik7XHJcblxyXG4gIGNvbnN0IGNoZWNrQm94Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XHJcbiAgY2hlY2tCb3hDb250YWluZXIuY2xhc3NMaXN0LmFkZChcImNoZWNrQm94Q29udGFpbmVyXCIpO1xyXG4gIGNvbnN0IGNoZWNrQm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xyXG4gIGNoZWNrQm94LmNsYXNzTGlzdC5hZGQoXCJjaGVja0JveFwiKTtcclxuICBjaGVja0JveC5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwiY2hlY2tib3hcIik7XHJcblxyXG4gIGNvbnN0IHRhc2tUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoNFwiKTtcclxuICBjb25zdCB0YXNrRGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcclxuICBjb25zdCBkdWVEYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XHJcbiAgY29uc3QgdGFza1ByaW9yaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XHJcbiAgY29uc3QgZGVsZXRlVGFzayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XHJcblxyXG4gIHRhc2tUaXRsZS5jbGFzc0xpc3QuYWRkKFwidGFza1RpdGxlXCIpO1xyXG4gIHRhc2tEZXNjcmlwdGlvbi5jbGFzc0xpc3QuYWRkKFwidGFza0Rlc2NyaXB0aW9uXCIpO1xyXG4gIFxyXG4gIGR1ZURhdGUuY2xhc3NMaXN0LmFkZChcImR1ZURhdGVcIik7XHJcbiAgZGVsZXRlVGFzay5jbGFzc0xpc3QuYWRkKFwiZGVsZXRlVGFza1wiKTtcclxuICB0YXNrUHJpb3JpdHkuY2xhc3NMaXN0LmFkZChcInRhc2tQcmlvcml0eVwiKTtcclxuXHJcbiAgdGFza1RpdGxlLnRleHRDb250ZW50ID0gYCAke3NhdmVUaXRsZURhdGF9YDtcclxuICB0YXNrRGVzY3JpcHRpb24udGV4dENvbnRlbnQgPSBgJHtzYXZlRGVzY3JpcHRpb25EYXRhfWA7XHJcbiAgdGFza1ByaW9yaXR5LnRleHRDb250ZW50ID0gYCR7c2F2ZVByaW9yaXR5RGF0YX1gO1xyXG4gIGR1ZURhdGUudGV4dENvbnRlbnQgPSBgJHtzYXZlRHVlRGF0ZURhdGF9YDtcclxuICBkZWxldGVUYXNrLnRleHRDb250ZW50ID0gXCJEZWxldGUgdGFza1wiO1xyXG5cclxuICB0YXNrVGl0bGUuZGF0YXNldC5maWVsZFR5cGUgPSBcInRpdGxlXCI7XHJcbiAgdGFza0Rlc2NyaXB0aW9uLmRhdGFzZXQuZmllbGRUeXBlID0gXCJkZXNjcmlwdGlvblwiO1xyXG50YXNrUHJpb3JpdHkuZGF0YXNldC5maWVsZFR5cGUgPSBcInRhc2tQcmlvcml0eVwiO1xyXG5kdWVEYXRlLmRhdGFzZXQuZmllbGRUeXBlID0gXCJkdWVEYXRlXCI7XHJcblxyXG4gIHRhc2tUaXRsZS5kYXRhc2V0LmluZGV4ID0gaW5kZXg7XHJcbiAgdGFza0Rlc2NyaXB0aW9uLmRhdGFzZXQuaW5kZXggPSBpbmRleDtcclxuICB0YXNrUHJpb3JpdHkuZGF0YXNldC5pbmRleCA9IGluZGV4O1xyXG4gIGR1ZURhdGUuZGF0YXNldC5pbmRleCA9IGluZGV4O1xyXG4gIGNoZWNrQm94LmRhdGFzZXQuaW5kZXggPSBpbmRleDtcclxuXHJcbiAgaW5uZXJUYXNrQ29udGFpbmVyLmFwcGVuZENoaWxkKHRhc2tUaXRsZSk7XHJcbiAgaW5uZXJUYXNrQ29udGFpbmVyLmFwcGVuZENoaWxkKHRhc2tEZXNjcmlwdGlvbik7XHJcbiAgaW5uZXJUYXNrQ29udGFpbmVyLmFwcGVuZENoaWxkKGR1ZURhdGUpO1xyXG5cclxuICBpbm5lclRhc2tIYW5kbGVyLmFwcGVuZENoaWxkKHRhc2tQcmlvcml0eSk7XHJcbiAgaW5uZXJUYXNrSGFuZGxlci5hcHBlbmRDaGlsZChkZWxldGVUYXNrKTtcclxuXHJcbiAgdGFza0NvbnRhaW5lci5hcHBlbmRDaGlsZChpbm5lclRhc2tDb250YWluZXIpO1xyXG4gIHRhc2tDb250YWluZXIuYXBwZW5kQ2hpbGQoaW5uZXJUYXNrSGFuZGxlcik7XHJcblxyXG4gIGNoZWNrQm94Q29udGFpbmVyLmFwcGVuZENoaWxkKGNoZWNrQm94KTtcclxuICBsaXN0Q29udGFpbmVyLmFwcGVuZENoaWxkKGNoZWNrQm94Q29udGFpbmVyKTtcclxuXHJcbiAgbGlzdENvbnRhaW5lci5hcHBlbmRDaGlsZCh0YXNrQ29udGFpbmVyKTtcclxuICB1c2VyTGlzdC5hcHBlbmRDaGlsZChsaXN0Q29udGFpbmVyKTtcclxuXHJcbiAgdGFza1RpdGxlLmFkZEV2ZW50TGlzdGVuZXIoXCJkYmxjbGlja1wiLCBlZGl0VGFzayk7XHJcbiAgdGFza1RpdGxlLmFkZEV2ZW50TGlzdGVuZXIoXCJ0b3VjaHN0YXJ0XCIsIGVkaXRUYXNrKTtcclxuXHJcbiAgdGFza0Rlc2NyaXB0aW9uLmFkZEV2ZW50TGlzdGVuZXIoXCJkYmxjbGlja1wiLCBlZGl0VGFzayk7XHJcbiAgdGFza0Rlc2NyaXB0aW9uLmFkZEV2ZW50TGlzdGVuZXIoXCJ0b3VjaHN0YXJ0XCIsIGVkaXRUYXNrKTtcclxuXHJcbiAgdGFza1ByaW9yaXR5LmFkZEV2ZW50TGlzdGVuZXIoXCJkYmxjbGlja1wiLCBlZGl0VGFzayk7XHJcbiAgdGFza1ByaW9yaXR5LmFkZEV2ZW50TGlzdGVuZXIoXCJ0b3VjaHN0YXJ0XCIsIGVkaXRUYXNrKTtcclxuXHJcbiAgZHVlRGF0ZS5hZGRFdmVudExpc3RlbmVyKFwiZGJsY2xpY2tcIiwgZWRpdFRhc2spO1xyXG4gIGR1ZURhdGUuYWRkRXZlbnRMaXN0ZW5lcihcInRvdWNoc3RhcnRcIiwgZWRpdFRhc2spO1xyXG5cclxuXHJcblxyXG4gIGRlbGV0ZVRhc2suYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGRlbGV0ZVRvRG8pO1xyXG4gIGRlbGV0ZVRhc2suYWRkRXZlbnRMaXN0ZW5lcihcInRvdWNoc3RhcnRcIiwgZGVsZXRlVG9Ebyk7XHJcblxyXG5cclxuICBoYW5kbGVDaGVja0JveChjaGVja0JveCwgdGFza1RpdGxlLCB0YXNrRGVzY3JpcHRpb24pO1xyXG59XHJcblxyXG5mdW5jdGlvbiBlZGl0VGFzayhldmVudCkge1xyXG4gIGNvbnN0IHRhcmdldCA9IGV2ZW50LnRhcmdldDtcclxuICBjb25zb2xlLmxvZyh0YXJnZXQpO1xyXG4gIGNvbnN0IGZpZWxkVHlwZSA9IHRhcmdldC5kYXRhc2V0LmZpZWxkVHlwZTsgXHJcbiAgY29uc3QgaW5kZXggPSB0YXJnZXQuZGF0YXNldC5pbmRleDtcclxuICBjb25zb2xlLmxvZyhpbmRleCk7XHJcbiAgY29uc3QgdGFza1ByaW9yaXR5ID0gW1wiVXJnZW50XCIsIFwiSW1wb3J0YW50XCIsIFwiTG93IHByaW9yaXR5XCJdO1xyXG5cclxuICBsZXQgdGFza0lucHV0O1xyXG5cclxuICBpZiAoZmllbGRUeXBlID09PSBcInRpdGxlXCIgfHwgZmllbGRUeXBlID09PSBcImRlc2NyaXB0aW9uXCIpIHtcclxuICAgIHRhc2tJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcclxuICAgIHRhc2tJbnB1dC50eXBlID0gXCJ0ZXh0XCI7XHJcbiAgICB0YXNrSW5wdXQudmFsdWUgPSB0YXJnZXQudGV4dENvbnRlbnQ7XHJcbiAgfSBlbHNlIGlmIChmaWVsZFR5cGUgPT09IFwiZHVlRGF0ZVwiKSB7XHJcbiAgICB0YXNrSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XHJcbiAgICB0YXNrSW5wdXQudHlwZSA9IFwiZGF0ZVwiO1xyXG4gICAgdGFza0lucHV0LnZhbHVlID0gdGFyZ2V0LnRleHRDb250ZW50O1xyXG4gIH0gZWxzZSBpZiAoZmllbGRUeXBlID09PSBcInRhc2tQcmlvcml0eVwiKSB7XHJcbiAgICB0YXNrSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VsZWN0XCIpO1xyXG5cclxuICAgIHRhc2tQcmlvcml0eS5mb3JFYWNoKChwcmlvcml0eSkgPT4ge1xyXG4gICAgICBjb25zdCBvcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xyXG4gICAgICBvcHRpb24udmFsdWUgPSBwcmlvcml0eTtcclxuICAgICAgb3B0aW9uLnRleHRDb250ZW50ID0gcHJpb3JpdHk7XHJcblxyXG4gICAgICBpZiAocHJpb3JpdHkgPT09IHRhcmdldC50ZXh0Q29udGVudCkge1xyXG4gICAgICAgIG9wdGlvbi5zZWxlY3RlZCA9IHRydWU7XHJcbiAgICAgIH1cclxuICAgICAgdGFza0lucHV0LmFwcGVuZENoaWxkKG9wdGlvbik7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIFxyXG4gIHRhc2tJbnB1dC5kYXRhc2V0LmZpZWxkVHlwZSA9IGZpZWxkVHlwZTtcclxuICB0YXNrSW5wdXQuZGF0YXNldC5pbmRleCA9IGluZGV4O1xyXG5cclxuICB0YXJnZXQuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG4gIHRhcmdldC5wYXJlbnROb2RlLmluc2VydEJlZm9yZSh0YXNrSW5wdXQsIHRhcmdldC5uZXh0U2libGluZyk7IFxyXG5cclxuICB0YXNrSW5wdXQuY2xhc3NMaXN0LmFkZChcImVkaXRcIik7XHJcblxyXG4gIGlmICh0YXNrSW5wdXQudHlwZSA9PT0gXCJ0ZXh0XCIpIHtcclxuICAgIHRhc2tJbnB1dC5zZWxlY3QoKTsgXHJcbiAgfVxyXG5cclxuICB0YXNrSW5wdXQuYWRkRXZlbnRMaXN0ZW5lcihcImJsdXJcIiwgc2F2ZUVkaXRlZFRhc2spOyBcclxuICB0YXNrSW5wdXQuYWRkRXZlbnRMaXN0ZW5lcihcImtleXByZXNzXCIsIHNhdmVFZGl0ZWRUYXNrKTsgXHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNhdmVFZGl0ZWRUYXNrKGV2ZW50KSB7XHJcbiAgaWYgKGV2ZW50LnR5cGUgPT09IFwiYmx1clwiIHx8IGV2ZW50LmtleSA9PT0gXCJFbnRlclwiKSB7XHJcblxyXG4gICAgbGV0IGlucHV0ID0gZXZlbnQudGFyZ2V0O1xyXG4gICAgY29uc29sZS5sb2coaW5wdXQpO1xyXG4gICAgbGV0IGZpZWxkVHlwZSA9IGlucHV0LmRhdGFzZXQuZmllbGRUeXBlO1xyXG4gICAgbGV0IGluZGV4ID0gaW5wdXQuZGF0YXNldC5pbmRleDsgXHJcbiAgICBcclxuICAgICAgICBjb25zb2xlLmxvZyh0b0Rvcyk7XHJcblxyXG4gICAgbGV0IG5ld1ZhbHVlO1xyXG4gICAgaWYgKGlucHV0LnRhZ05hbWUgPT09IFwiU0VMRUNUXCIpIHtcclxuICAgICAgbmV3VmFsdWUgPSBpbnB1dC5vcHRpb25zW2lucHV0LnNlbGVjdGVkSW5kZXhdLnZhbHVlO1xyXG4gICAgICB0b0Rvc1tpbmRleF0ucHJpb3JpdHkgPSBuZXdWYWx1ZTtcclxuICAgICAgY29uc29sZS5sb2codG9Eb3NbaW5kZXhdLnByaW9yaXR5KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIG5ld1ZhbHVlID0gaW5wdXQudmFsdWU7XHJcbiAgICB9XHJcblxyXG4gICAgXHJcbiAgICBpZiAoaW5kZXggPCB0b0Rvcy5sZW5ndGgpIHtcclxuICAgICAgaWYgKGZpZWxkVHlwZSA9PT0gXCJ0aXRsZVwiKSB7XHJcbiAgICAgICAgdG9Eb3NbaW5kZXhdLnRpdGxlID0gbmV3VmFsdWU7XHJcbiAgICAgICAgY29uc29sZS5sb2codG9Eb3NbaW5kZXhdLnRpdGxlKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhuZXdWYWx1ZSk7XHJcbiAgICAgIH0gZWxzZSBpZiAoZmllbGRUeXBlID09PSBcImRlc2NyaXB0aW9uXCIpIHtcclxuICAgICAgICB0b0Rvc1tpbmRleF0uZGVzY3JpcHRpb24gPSBuZXdWYWx1ZTtcclxuICAgICAgICBjb25zb2xlLmxvZyhpbmRleClcclxuICAgICAgICBjb25zb2xlLmxvZyh0b0Rvc1tkZXNjcmlwdGlvbl0pO1xyXG4gICAgICB9XHJcbiAgICAgIGVsc2UgaWYgKGZpZWxkVHlwZSA9PT0gXCJkdWVEYXRlXCIpIHtcclxuICAgICAgICBsZXQgZHVlRGF0ZSA9IG5ld1ZhbHVlO1xyXG4gICAgICAgIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZShkdWVEYXRlKTtcclxuXHJcbiAgICAgICAgY29uc3Qgb3B0aW9ucyA9IHtcclxuICAgICAgICAgIHdlZWtkYXk6IFwibG9uZ1wiLFxyXG4gICAgICAgICAgeWVhcjogXCJudW1lcmljXCIsXHJcbiAgICAgICAgICBtb250aDogXCJzaG9ydFwiLFxyXG4gICAgICAgICAgZGF5OiBcIm51bWVyaWNcIixcclxuICAgICAgICB9O1xyXG4gICAgY29uc29sZS5sb2codG9Eb3MpO1xyXG5cclxuICAgICAgICB0b0Rvc1tpbmRleF0uZGF0ZSA9IGRhdGUudG9Mb2NhbGVEYXRlU3RyaW5nKFwiZW4tVXNcIiwgb3B0aW9ucyk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIFxyXG5cclxuICAgIFxyXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJ0b0Rvc1wiLCBKU09OLnN0cmluZ2lmeSh0b0RvcykpO1xyXG5cclxuICAgIFxyXG4gICAgbGV0IG9yaWdpbmFsRWxlbWVudCA9IGlucHV0LnByZXZpb3VzU2libGluZztcclxuXHJcbiAgICBvcmlnaW5hbEVsZW1lbnQudGV4dENvbnRlbnQgPSBuZXdWYWx1ZTtcclxuXHJcbiAgICBvcmlnaW5hbEVsZW1lbnQuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcclxuXHJcbiAgICBcclxuICAgIGlucHV0LnJlbW92ZSgpO1xyXG5cclxuICAgIHVzZXJMaXN0LnRleHRDb250ZW50ID0gXCJcIjtcclxuXHJcbiAgICBcclxuICAgIGRpc3BsYXlUb0RvcygpO1xyXG4gIH1cclxuXHJcbn1cclxuXHJcblxyXG5cclxuZnVuY3Rpb24gaGFuZGxlQ2hlY2tCb3goY2hlY2tCb3gsIHRhc2tUaXRsZSwgdGFza0Rlc2NyaXB0aW9uKSB7XHJcbiAgY2hlY2tCb3guYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChldmVudCkgPT4ge1xyXG4gICAgaWYgKGNoZWNrQm94LmNoZWNrZWQgPT09IHRydWUpIHtcclxuICAgICAgXHJcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwidG9Eb3NcIiwgSlNPTi5zdHJpbmdpZnkodG9Eb3MpKTtcclxuICAgICAgY29uc29sZS5sb2codG9Eb3MpO1xyXG5cclxuICAgICAgdGFza0Rlc2NyaXB0aW9uLnN0eWxlLnRleHREZWNvcmF0aW9uID0gXCJsaW5lLXRocm91Z2hcIjtcclxuXHJcbiAgICAgIGNvbnN0IGxpc3RDb250YWluZXJFbCA9IGV2ZW50LnRhcmdldDtcclxuICAgICAgY29uc29sZS5sb2cobGlzdENvbnRhaW5lckVsKTtcclxuICAgICAgY29uc3QgaW5kZXggPSBsaXN0Q29udGFpbmVyRWwuZGF0YXNldC5pbmRleDtcclxuICAgICAgXHJcbiAgICAgIFxyXG5cclxuICAgICAgaWYgKGluZGV4ICE9PSAtMSkge1xyXG4gICAgICAgIGxpc3RDb250YWluZXJFbC5yZW1vdmUobGlzdENvbnRhaW5lckVsKTtcclxuICAgICAgICB0b0Rvcy5zcGxpY2UoaW5kZXgsIDEpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwidG9Eb3NcIiwgSlNPTi5zdHJpbmdpZnkodG9Eb3MpKTtcclxuICAgICAgICBjb25zb2xlLmxvZyh0b0Rvcyk7XHJcbiAgICAgICAgdXNlckxpc3QudGV4dENvbnRlbnQgPSBcIlwiO1xyXG4gICAgICAgIGRpc3BsYXlUb0RvcygpO1xyXG4gICAgICAgIGFsZXJ0KFwiVGFzayBjb21wbGV0ZWQhXCIpO1xyXG4gICAgICB9XHJcbiAgICAgIGNvbnNvbGUubG9nKFwidHJ1ZVwiKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRhc2tUaXRsZS5zdHlsZS50ZXh0RGVjb3JhdGlvbiA9IFwibm9uZVwiO1xyXG4gICAgICB0YXNrRGVzY3JpcHRpb24uc3R5bGUudGV4dERlY29yYXRpb24gPSBcIm5vbmVcIjtcclxuICAgICAgY29uc29sZS5sb2coXCJmYWxzZVwiKTtcclxuICAgIH1cclxuICB9KTtcclxufVxyXG5cclxuXHJcbmZ1bmN0aW9uIGRlbGV0ZVRvRG8oKSB7XHJcbiAgY29uc3QgbGlzdENvbnRhaW5lckVsID0gdGhpcy5jbG9zZXN0KFwiLmxpc3RDb250YWluZXJcIik7XHJcbiAgY29uc3QgYnV0dG9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuZGVsZXRlVGFza1wiKTtcclxuICBjb25zdCBpbmRleCA9IEFycmF5LmZyb20oYnV0dG9ucykuaW5kZXhPZih0aGlzKTtcclxuXHJcbiAgaWYgKGluZGV4ICE9PSAtMSkge1xyXG4gICAgbGlzdENvbnRhaW5lckVsLnJlbW92ZShsaXN0Q29udGFpbmVyRWwpO1xyXG4gICAgdG9Eb3Muc3BsaWNlKGluZGV4LCAxKTtcclxuICAgIFxyXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJ0b0Rvc1wiLCBKU09OLnN0cmluZ2lmeSh0b0RvcykpO1xyXG4gICAgY29uc29sZS5sb2codG9Eb3MpO1xyXG4gIH1cclxufVxyXG5cclxuXHJcbmZ1bmN0aW9uIGNhbmNlbEZvcm1EaXNwbGF5KCkge1xyXG4gIGNvbnN0IGludGlhbFRleHREaXNwbGF5Q29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcclxuICAgIFwiLmludGlhbFRleHREaXNwbGF5Q29udGFpbmVyXCJcclxuICApO1xyXG4gIHRhc2tUaXRsZS52YWx1ZSA9IFwiXCI7XHJcbiAgdGFza0Rlc2NyaXB0aW9uLnZhbHVlID0gXCJcIjtcclxuICBkdWVEYXRlLnZhbHVlID0gXCJcIjtcclxuICB0YXNrUHJpb3JpdHkudmFsdWUgPSBcIlNlbGVjdCBQcmlvcml0eVwiO1xyXG4gIGZvcm0uc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG4gICAgaW50aWFsVGV4dERpc3BsYXlDb250YWluZXIuc3R5bGUuZGlzcGxheSA9ICdibG9jaydcclxuXHJcbn1cclxuY2FuY2VsRm9ybS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgY2FuY2VsRm9ybURpc3BsYXkpO1xyXG5cclxuZnVuY3Rpb24gc3VibWl0Rm9ybSgpIHtcclxuICB1c2VybGlzdC50ZXh0Q29udGVudCA9IFwiXCI7XHJcblxyXG4gIGFjY2VwdElucHV0KCk7XHJcbiAgZGlzcGxheVRvRG9zKCk7XHJcbn1cclxuZm9ybS5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIChldmVudCkgPT4gZXZlbnQucHJldmVudERlZmF1bHQoKSk7XHJcbnN1Ym1pdEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgc3VibWl0Rm9ybSk7XHJcblxyXG5mdW5jdGlvbiBkaXNwbGF5SW5ib3hGb3JtKCkge1xyXG4gIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJoZWFkZXIgaDFcIik7XHJcbiAgdXNlcmxpc3QudGV4dENvbnRlbnQgPSBcIlwiO1xyXG4gIGhlYWRlci50ZXh0Q29udGVudCA9IFwiSW5ib3hcIjtcclxuXHJcbiAgZGlzcGxheVRvRG9zKCk7XHJcbiAgZm9ybS5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xyXG5cclxuICBpZiAoaW5wdXROZXdwcm9qZWN0Rm9ybU5hbWUuc3R5bGUuZGlzcGxheSA9PT0gXCJibG9ja1wiKSB7XHJcbiAgICBpbnB1dE5ld3Byb2plY3RGb3JtTmFtZS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbiAgfVxyXG4gIHByb2plY3RGb3JtLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxufVxyXG5pbmJveC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZGlzcGxheUluYm94Rm9ybSk7XHJcbiIsImltcG9ydCB7IGNyZWF0ZU5ld1Byb2plY3RUYXNrQnRuIH0gZnJvbSBcIi4vZG9tLUVsLTJcIjtcclxubGV0IGFzaWRlRWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwibWFpbiBhc2lkZVwiKTtcclxubGV0IHRvZ2dsZU1lbnVJY29uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0b2dnbGVNZW51SWNvblwiKTtcclxubGV0IHNpZGVCYXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYXNpZGUjbWVudVwiKTtcclxubGV0IHByb2plY3REcm9wRG93biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcHJvamVjdC1kcm9wZG93blwiKTtcclxubGV0IGFkZE5ld1Byb2plY3RFbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNhZE5ld1Byb2plY3RFbCcpXHJcblxyXG5jb25zb2xlLmxvZyhwcm9qZWN0RHJvcERvd24pO1xyXG5cclxuY29uc29sZS5sb2coYXNpZGVFbCk7XHJcblxyXG5mdW5jdGlvbiB0b2dnZWxNZW51KCkge1xyXG4gIGNvbnNvbGUubG9nKFwidG9nZ2xlIGVsZW1lbnQgaXMgY2xpY2tlZFwiKTtcclxuICB0b2dnbGVNZW51SWNvbi5jbGFzc0xpc3QudG9nZ2xlKFwiYWN0aXZlXCIpO1xyXG4gIHNpZGVCYXIuY2xhc3NMaXN0LnRvZ2dsZShcImFjdGl2ZVwiKTtcclxufVxyXG50b2dnbGVNZW51SWNvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdG9nZ2VsTWVudSk7XHJcblxyXG5mdW5jdGlvbiByZW1vdmVTaWRlQmFyKGUpIHtcclxuICBpZiAoZS50YXJnZXQudGFnTmFtZSA9PT0gXCJPUFRJT05cIikge1xyXG4gICAgdG9nZ2xlTWVudUljb24uY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcclxuICAgIHNpZGVCYXIuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcclxuICB9IGVsc2UgaWYgKFxyXG4gICAgZS50YXJnZXQgIT09IHRvZ2dsZU1lbnVJY29uICYmXHJcbiAgICBlLnRhcmdldCAhPT0gc2lkZUJhciAmJlxyXG4gICAgZS50YXJnZXQgIT09IHByb2plY3REcm9wRG93blxyXG4gICkge1xyXG4gICAgdG9nZ2xlTWVudUljb24uY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcclxuICAgIHNpZGVCYXIuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIG9wdGlvblNlbGVjdGVkKCkge1xyXG4gIHRvZ2dsZU1lbnVJY29uLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XHJcbiAgc2lkZUJhci5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xyXG59XHJcblxyXG5wcm9qZWN0RHJvcERvd24uYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCBvcHRpb25TZWxlY3RlZCk7XHJcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCByZW1vdmVTaWRlQmFyKTtcclxuXHJcblxyXG5cclxuXHJcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmM7XG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkge1xuXHRcdFx0dmFyIGkgPSBzY3JpcHRzLmxlbmd0aCAtIDE7XG5cdFx0XHR3aGlsZSAoaSA+IC0xICYmICghc2NyaXB0VXJsIHx8ICEvXmh0dHAocz8pOi8udGVzdChzY3JpcHRVcmwpKSkgc2NyaXB0VXJsID0gc2NyaXB0c1tpLS1dLnNyYztcblx0XHR9XG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwibWFpblwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgJy4uL3NyYy9zdHlsZXMuY3NzJztcclxuaW1wb3J0IGRvbUVsIGZyb20gJy4vZG9tLUVsJztcclxuaW1wb3J0IGRvbUVsMiBmcm9tICcuL2RvbS1FbC0yJztcclxuaW1wb3J0IHJlc3BvbnNpdmUgZnJvbSAnLi9yZXNwb25zaXZlJztcclxuXHJcblxyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=
