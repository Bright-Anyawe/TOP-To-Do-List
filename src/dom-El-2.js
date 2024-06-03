import {myProjects} from './dom-El'
import {displayForm} from './dom-El'


const addNewProjectEl = document.querySelector('#addNewProjectEl');
const newProjectsFormContainerEl = document.querySelector('#newProjectsFormContainerEl');
const newProjectFormEl = document.querySelector('.newProjectFormEl');
const newProjectTasksContainer = document.querySelector('#newProjectTasksContainer');
const newProjectName = document.querySelector('.newProjectName');
const newProjectTask = document.querySelector('.newProjectTask');
console.log(newProjectTask);

//Create New Projects setup
function displayNewProjects() {
    addNewProjectEl.style.display = 'block';
 
}
myProjects.addEventListener('click', displayNewProjects)

//Display new form Container.
function displayNewProjectForm() {
    newProjectsFormContainerEl.style.display = 'block';
    return { newProjectsFormContainerEl };

}
addNewProjectEl.addEventListener('click', displayNewProjectForm);

//Get New Project Input Value Function.
const getnewProjectInputValue = () => {
    const newProjectInputEl = document.querySelector('.newProjectInputEl');
    const newProjectInputValue = newProjectInputEl.value;
    newProjectName.textContent = newProjectInputValue;

    newProjectInputEl.value = '';
    return { newProjectInputValue };
}


function displayNewProjectTasksContainer() {
    let newProjectForm = displayNewProjectForm().newProjectsFormContainerEl;


    newProjectTasksContainer.style.display = 'block';
    if (newProjectForm) {
        newProjectForm.style.display = 'none'
    }
}

//Prevent form Default when submit
const preventNewProjectSubmitFormDefault = (event) => {
    event.preventDefault();
    getnewProjectInputValue();
    displayNewProjectTasksContainer()
}
newProjectFormEl.addEventListener('submit', preventNewProjectSubmitFormDefault);

newProjectTask.addEventListener('click', displayForm)
