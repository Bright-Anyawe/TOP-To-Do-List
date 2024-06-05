// import { myProjects } from './dom-El'
import { displayForm } from './dom-El'

const myProjects = document.querySelector('#projects h3');
const screenContainer = document.querySelector('#Container');
const userList = document.querySelector('#userlist');
const addNewProjectEl = document.querySelector('#addNewProjectEl');
const form = document.querySelector('#form');
const newProjectsFormContainerEl = document.querySelector('#newProjectsFormContainerEl');
const inputNewprojectNameForm = document.querySelector('.inputNewprojectNameForm');
const newProjectFormEl = document.querySelector('.newProjectFormEl');
const newProjectName = document.querySelector('.headerTextContent');
export const newProjectTasksContainer = document.createElement('section');
const newProjectTask = document.querySelector('.newProjectTask');
export const newProjectAddBtn = document.createElement('button');

console.log(newProjectTask);

//Create New Projects setup
function createNewProjectStartUp() {
    // <div id="addNewProjectEl"> # Add new project </div>
    const addNewProjectEl = document.createElement('div');
    addNewProjectEl.classList.add('addNewProjectEl');
    addNewProjectEl.textContent = '# Add new project'

}

function displayNewProjects() {

    addNewProjectEl.style.display = 'block';
    if (userList) {
        // userList.style.display = 'none';
        userList.textContent = '';
    }

    if (form) {
        console.log(form);
        form.style.display = 'none';
    }


    return { addNewProjectEl }

}
myProjects.addEventListener('click', displayNewProjects)

function displayNewProjectForm() {

    inputNewprojectNameForm.style.display = 'block';

if(addNewProjectEl) {
    addNewProjectEl.style.display = 'none';
}
   
    return { inputNewprojectNameForm }
}

addNewProjectEl.addEventListener('click', displayNewProjectForm);

// function displayNewProjectForm() {
//     const inputNewprojectNameForm = document.querySelector('#newProjectsFormContainerEl');

//     if (inputNewprojectNameForm !== null) {
//         inputNewprojectNameForm.style.display = 'block';
//         console.log(inputNewprojectNameForm);
//     } else {
//         console.error('inputNewprojectNameForm is null');
//     }

//     return { inputNewprojectNameForm };
// }
// addNewProjectEl.addEventListener('click', displayNewProjectForm);

//Get New Project Input Value Function.
export function getnewProjectInputValue() {
    const newProjectInputEl = document.querySelector('.newProjectInputEl');
    const newProjectInputValue = newProjectInputEl.value;
    newProjectName.textContent = newProjectInputValue;

    displayAllProjectName(newProjectInputValue)
    newProjectInputEl.value = '';

    return { newProjectInputValue }
}


function displayAllProjectName(newProjectInputValue) {
    const allProjectMenu = document.querySelector('.projectNames');
    const allProjectNames = document.createElement('p');
    allProjectNames.classList.add('allProjectNames');
    allProjectNames.textContent = ` ## ${newProjectInputValue}`;
    allProjectMenu.appendChild(allProjectNames);

    if(inputNewprojectNameForm) {
        inputNewprojectNameForm.style.display = 'none';

    }

}

function CreateNewProjectTaskBtn() {
    newProjectTasksContainer.setAttribute('id', 'newProjectTasksContainer');
    newProjectAddBtn.textContent = 'Add task';

    // Create the SVG element
    const svgNamespace = 'http://www.w3.org/2000/svg';
    const svgElement = document.createElementNS(svgNamespace, 'svg');

    // Set the class and viewBox attributes
    svgElement.setAttribute('class', 'addTask');
    svgElement.setAttribute('viewBox', '0 0 24 24');

    // Create the title element
    const titleElement = document.createElementNS(svgNamespace, 'title');
    titleElement.textContent = 'plus';
    svgElement.appendChild(titleElement);

    // Create the path element
    const pathElement = document.createElementNS(svgNamespace, 'path');
    pathElement.setAttribute('d', 'M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z');
    svgElement.appendChild(pathElement);

    newProjectAddBtn.classList.add('newProjectAddBtn');

    newProjectTasksContainer.appendChild(svgElement);
    newProjectTasksContainer.appendChild(newProjectAddBtn);
    newProjectsFormContainerEl.appendChild(newProjectTasksContainer);

    

}

function displayNewProjectTasksContainer() {
    let newProjectForm = displayNewProjectForm().inputNewprojectNameForm;

    // newProjectTasksContainer.style.display = 'block';
    if (newProjectForm) {
        newProjectForm.style.display = 'none'
        CreateNewProjectTaskBtn()

    }
}


//Prevent form Default when submit
const preventNewProjectSubmitFormDefault = (event) => {
    event.preventDefault();
    getnewProjectInputValue();
    displayNewProjectTasksContainer()

}
newProjectFormEl.addEventListener('submit', preventNewProjectSubmitFormDefault);

newProjectAddBtn.addEventListener('click', displayForm)
