import * as mylogic from './logics';
const defaultProject = new mylogic.getList();
let userToDos = mylogic.toDos;


const mainContainer = document.querySelector('main');
const userList = document.querySelector('#userlist');
const inboxTaskDisplay = document.querySelector('.displayInboxTask');
const form = document.querySelector('#form');
const addTaskbtn = document.querySelector('.addTask');
let inputFieldEl = document.querySelector('.task-title');
let descriptionFieldEl = document.querySelector('.description');
let selectPriorityEl = document.querySelector('#priority');

let inbox = document.querySelector('.inbox');
const toDoContainer = document.createElement('section');
toDoContainer.classList.add('toDoContainerInbox');
const inboxForm = document.createElement('form');
inboxForm.classList.add('inboxForm');
const inboxTask = document.createElement('div');
inboxTask.classList.add('inboxTask');

const newProjetEl = document.querySelector('#newProjetEl');
const newProjectsFormContainerEl = document.querySelector('#newProjectsFormContainerEl');
const newProjectFormEl = document.querySelector('.newProjectFormEl');
// console.log(newProjectFormEl);

const projects = document.querySelector('#projects h4');
const defaultProjects = document.querySelector('#projects');

//  function getInboxForm() {
//     const inputInboxTask = document.createElement('input');
//     inputInboxTask.classList.add('inputInboxTask');
//     inputInboxTask.setAttribute('placeholder', 'add title task');

//     const inputInboxDescription = document.createElement('input');
//     inputInboxDescription.classList.add('inputInboxDescription');
//     inputInboxDescription.setAttribute('placeholder', 'add description');

//     const inboxSelectEl = document.createElement('select');
//     inboxSelectEl.classList.add('priority');

//     const sOption1 = document.createElement('option');
//     const sOption2 = document.createElement('option');
//     const sOption3 = document.createElement('option');
//     const sOption4 = document.createElement('option');
//     const sOption5 = document.createElement('option');

//     const submitTaskBtn = document.createElement('button');
//     submitTaskBtn.classList.add('submitInboxForm');
//     submitTaskBtn.textContent = 'Submit Task';

//     sOption1.setAttribute('value', 'Select Priority');
//     sOption1.textContent = 'Select Priority';
//     sOption2.setAttribute('value', 'Urgent');
//     sOption2.textContent = 'Urgent';
//     sOption3.setAttribute('value', 'Important');
//     sOption3.textContent = 'Important';
//     sOption4.setAttribute('value', 'Low priority');
//     sOption4.textContent = 'Low priority';
//     sOption5.setAttribute('value', 'Done');
//     sOption5.textContent = 'Done';


//     inboxSelectEl.appendChild(sOption1);
//     inboxSelectEl.appendChild(sOption2);
//     inboxSelectEl.appendChild(sOption3);
//     inboxSelectEl.appendChild(sOption4);
//     inboxSelectEl.appendChild(sOption5);

//     inboxTask.appendChild(inputInboxTask);
//     inboxTask.appendChild(inputInboxDescription);
//     inboxTask.appendChild(inboxSelectEl);
//     inboxTask.appendChild(submitTaskBtn);
//     inboxForm.appendChild(inboxTask);

//     toDoContainer.appendChild(inboxForm);
//     inboxTaskDisplay.appendChild(toDoContainer);

//     inboxForm.addEventListener('submit', function(event) {
//         event.preventDefault();
//         acceptInboxInput(inputInboxTask, inputInboxDescription, inboxSelectEl);
//     });
// }
inbox.addEventListener('click', displayForm);

//  function acceptInboxInput(inputInboxTask, inputInboxDescription,inboxSelectEl) {
//     let inboxTaskInputValue = inputInboxTask.value;
//     let inboxDescriptionInputValue = inputInboxDescription.value;
//     let inboxPriorityValueEl = inboxSelectEl.value;
//     let userInfo = new mylogic.getList(inboxTaskInputValue, inboxDescriptionInputValue, inboxPriorityValueEl);
//     inputInboxTask.value = '';
//     inputInboxDescription.value = '';
//     inboxSelectEl.value = 'Select Priority';
//     console.log(userInfo);
//     // console.log(toDos);
//     displayTask(userInfo)
//     userToDos.push(userInfo);
//     console.log(userToDos);
// }

// function displayDefaultTask() {
//     Object.entries(defaultProject).forEach(([key, value]) => {
//         console.log(defaultProject);
//         const task = document.createElement('p');
//         task.textContent = `${key}:  ${value}`;
//         defaultProjects.appendChild(task);

//         // console.log(`${key}: ${value}`)
//     })
// }
// projects.addEventListener('click', displayDefaultTask);


//Display Initial form
export function displayForm() {
    form.style.display = 'block';
}
addTaskbtn.addEventListener('click', displayForm);

function acceptInput() {
    let taskInputValue = inputFieldEl.value;
    let descriptionInputValue = descriptionFieldEl.value;
    let priorityValueEl = selectPriorityEl.value;
    let userInfo = new mylogic.getList(taskInputValue, descriptionInputValue, priorityValueEl);
    inputFieldEl.value = '';
    descriptionFieldEl.value = '';
    selectPriorityEl.value = 'Select Priority';

    displayTask(userInfo)
    userToDos.push(userInfo);
    displayAllToDos(userToDos);
}

// let getToDos = () => acceptInput();
// console.log(getToDos());

function preventDefault(event) {
    event.preventDefault();
    acceptInput();
}
form.addEventListener('submit', preventDefault);

function displayTask(todo) {
    Object.entries(todo).forEach(([key, value]) => {
        const task = document.createElement('p');
        task.textContent = `${key}:  ${value}`;
        userList.appendChild(task);

    })
}

function displayAllToDos(userToDos) {

    console.log(userToDos);
    // for (const todo of Object.entries(userToDos)) {
    //     for (let item in todo[1]) {
    //         console.log(todo[1]);
    //     }
    // }
    // userToDos.forEach((todo) => {
    //     console.log(todo);
    //     for (let item in todo) {

    //         const allToDos = document.createElement('p');
    //         // allToDos.textContent = `${item}: ${todo[item]}`;
    //         // userList.appendChild(allToDos);
    //         console.log(`${todo[item]}`)
    //     }
    // });
}
displayAllToDos();

//Create New Projects
function displayNewProjects() {
    newProjetEl.style.display = 'block';
}
projects.addEventListener('click', displayNewProjects)

function displayNewProjectForm() {
    newProjectsFormContainerEl.style.display = 'block';
}
newProjetEl.addEventListener('click', displayNewProjectForm);

//Get New Project Input Value Function.
const getnewProjectInputValue = () => {
    const newProjectInputEl = document.querySelector('.newProjectInputEl');
    const newProjectInputValue = newProjectInputEl.value;
    console.log(newProjectInputValue);

    newProjectInputEl.value = '';
    return { newProjectInputValue };
}

//Prevent form Default when submit
const preventNewProjectFormDefault = (event) => {
    event.preventDefault();
    getnewProjectInputValue();
}
newProjectFormEl.addEventListener('submit', preventNewProjectFormDefault);
