import { myProjects } from './dom-El'
import { displayForm } from './dom-El'


const addNewProjectEl = document.querySelector('#addNewProjectEl');
const newProjectsFormContainerEl = document.querySelector('#newProjectsFormContainerEl');
const inputNewprojectNameForm = document.querySelector('.inputNewprojectNameForm')
const newProjectFormEl = document.querySelector('.newProjectFormEl');
const newProjectTasksContainer = document.querySelector('#newProjectTasksContainer');
const newProjectName = document.querySelector('.headerTextContent');
const newProjectTask = document.querySelector('.newProjectTask');
console.log(newProjectTask);

//Create New Projects setup
function displayNewProjects() {
    addNewProjectEl.style.display = 'block';
    return { addNewProjectEl }

}
myProjects.addEventListener('click', displayNewProjects)

//Display new form Container
function displayNewProjectForm() {
    inputNewprojectNameForm.style.display = 'block';
    let addnewProjectElSetup = displayNewProjects().addNewProjectEl;
    if (addnewProjectElSetup) {
        addnewProjectElSetup.style.display = 'none';
    }
    return { inputNewprojectNameForm };

}
addNewProjectEl.addEventListener('click', displayNewProjectForm);



//Get New Project Input Value Function.
function getnewProjectInputValue() {
    const newProjectInputEl = document.querySelector('.newProjectInputEl');
    const newProjectInputValue = newProjectInputEl.value;
    newProjectName.textContent = newProjectInputValue;
    console.log(newProjectInputEl.value)

    displayAllProjectName(newProjectInputValue)
   
    newProjectInputEl.value = '';
}


function displayAllProjectName(newProjectInputValue) {
    // //  let newProjectTitle = getnewProjectInputValue().newProjectInputValue;
    // const allProjectMenu = document.querySelector('.projectNames');
    // allProjectMenu.textContent = newProjectInputValue;
    const allProjectMenu = document.querySelector('.projectNames');
    const allProjectNames = document.createElement('p');
    allProjectNames.classList.add('allProjectNames');
    allProjectNames.textContent = ` ## ${newProjectInputValue}`;
    allProjectMenu.appendChild(allProjectNames);

}

{/* <section id="newProjectTasksContainer">
<!-- <h3 class="newProjectName"></h3> -->
<svg class="addTask" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <title>plus</title>
    <path d="M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z" />
</svg>
<div class="newProjectTask">Add task</div>

</section> */}


const newProjectAddBtn = document.createElement('button');
function CreateNewProjectTaskContainer() {
    const newProjectTasksContainer = document.createElement('section');
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

    // if(newProjectsFormContainerEl.textContent) {
    //     newProjectsFormContainerEl.textContent = newProjectTasksContainer;
    // }

}

function displayNewProjectTasksContainer() {
    let newProjectForm = displayNewProjectForm().inputNewprojectNameForm;

    // newProjectTasksContainer.style.display = 'block';
    if (newProjectForm) {
        newProjectForm.style.display = 'none'
        CreateNewProjectTaskContainer()

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
