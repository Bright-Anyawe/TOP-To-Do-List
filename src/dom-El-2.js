// import { myProjects } from './dom-El'
import { displayForm } from './dom-El'

const myProjects = document.querySelector('#projects h3');
const screenContainer = document.querySelector('#Container');
const userList = document.querySelector('#userlist');
const addNewProjectEl = document.querySelector('#addNewProjectEl');
const form = document.querySelector('#form');
const newProjectsFormContainerEl = document.querySelector('#newProjectsFormContainerEl');
const inputNewprojectFormName = document.querySelector('.inputNewprojectFormName');
const newProjectNameRequest = document.querySelector('.newProjectNameRequest');
const newProjectNameTitle = document.querySelector('.headerTextContent');
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

function displayRequestNewProjectFormName() {

    inputNewprojectFormName.style.display = 'block';

    if (addNewProjectEl) {
        addNewProjectEl.style.display = 'none';
    }

    return { inputNewprojectFormName }
}

addNewProjectEl.addEventListener('click', displayRequestNewProjectFormName);

//Get New Project Input Value Function.
export function getnewProjectInputValue() {
    const inputNewProjectName = document.querySelector('.inputNewProjectName');
    const inputNewProjectNameValue = inputNewProjectName.value;
    newProjectNameTitle.textContent = inputNewProjectNameValue;

    inputNewProjectName.value = '';

    displayAllProjectName(inputNewProjectNameValue)

    return { inputNewProjectNameValue }
}

// let i = 0;
// do {
//   i += 1;
//   result += `${i} `;
// } while (i > 0 && i < 5);

function displayAllProjectName(newProjectInputValue) {
    const allProjectMenu = document.querySelector('.projectNames');
    const allProjectNames = document.createElement('p');
    allProjectNames.classList.add('allProjectNames');
    allProjectNames.textContent = ` ## ${newProjectInputValue}`;
    allProjectMenu.appendChild(allProjectNames);

    if (inputNewprojectFormName) {
        inputNewprojectFormName.style.display = 'none';

    }
    else {
        inputNewprojectFormName.style.display = 'block';
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

// function displayNewProjectTasksBtn() {
//     let newProjectForm = displayRequestNewProjectFormName().inputNewprojectFormName;

//     // newProjectTasksContainer.style.display = 'block';
//     if (newProjectForm) {
//         newProjectForm.style.display = 'none'
//     }
// }

let User

function acceptInput() {
    let taskInputValue = inputFieldEl.value;
    let descriptionInputValue = descriptionFieldEl.value;
    let priorityValueEl = selectPriorityEl.value;
    let dueDateValueEl = dueDate.value;

    let userToDoProjects = new getList(taskInputValue, descriptionInputValue, priorityValueEl, dueDateValueEl);
    inputFieldEl.value = '';
    descriptionFieldEl.value = '';
    dueDate.value = '';
    selectPriorityEl.value = 'Select Priority';

    toDos.push(userToDoProjects);
}

//Prevent form Default when submit
const submitNewProjectForm = (event) => {
    event.preventDefault();
    getnewProjectInputValue();
    CreateNewProjectTaskBtn()
    displayNewProjectTasksBtn()

}
newProjectNameRequest.addEventListener('submit', submitNewProjectForm);

newProjectAddBtn.addEventListener('click', displayForm)
