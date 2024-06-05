import { toDos } from './logics';
import { edittask } from './logics';
import { newProjectTasksContainer } from './dom-El-2';
import { getnewProjectInputValue } from './dom-El-2';


const mainContainer = document.querySelector('main');
const header = document.querySelector('header h1');
const userList = document.querySelector('#userlist');
const inboxTaskDisplay = document.querySelector('.displayInboxTask');
const form = document.querySelector('#form');
const cancelForm = document.querySelector('.cancel');
const submitBtn = document.querySelector('#submitBtn')
const addTaskbtn = document.querySelector('.addTask');
let inputFieldEl = document.querySelector('.task-title');
let descriptionFieldEl = document.querySelector('.description');
let selectPriorityEl = document.querySelector('#priority');
let dueDate = document.querySelector('#datePicker');

let inbox = document.querySelector('.inbox');
const toDoContainer = document.createElement('section');
toDoContainer.classList.add('toDoContainerInbox');
const inboxForm = document.createElement('form');
inboxForm.classList.add('inboxForm');
const inboxTask = document.createElement('div');
inboxTask.classList.add('inboxTask');



class getList {
    constructor(Title, Description, Priority, Date) {
        this.Title = Title;
        this.Description = Description;
        this.Priority = Priority;
        this.Date = Date;
    }
}

// console.log(newProjectFormEl);

export const myProjects = document.querySelector('#projects h3');
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
export function displayForm(event) {
    const header = document.querySelector('header h1');
    header.textContent = 'Inbox';
    form.style.display = 'block';

    if (newProjectTasksContainer) {
        newProjectTasksContainer.style.display = 'none'
    }
    // if (newProjectTasksContainer) {
    //     console.log(newProjectTasksContainer);
    //     newProjectTasksContainer.style.display = 'none';
    // }
}
addTaskbtn.addEventListener('click', displayForm);

function cancelFormDisplay() {
    form.style.display = 'none';
}
cancelForm.addEventListener('click', cancelFormDisplay)

export default function acceptInput() {
    let taskInputValue = inputFieldEl.value;
    let descriptionInputValue = descriptionFieldEl.value;
    let priorityValueEl = selectPriorityEl.value;
    let dueDateValueEl = dueDate.value;

    let userInfo = new getList(taskInputValue, descriptionInputValue, priorityValueEl, dueDateValueEl);
    inputFieldEl.value = '';
    descriptionFieldEl.value = '';
    dueDate.value = '';
    selectPriorityEl.value = 'Select Priority';

    toDos.push(userInfo);
    saveData(taskInputValue, descriptionInputValue, priorityValueEl, dueDateValueEl, userInfo);
}

function saveData(taskInputValue, descriptionInputValue, priorityValueEl, dueDateValueEl, userInfo) {

    // let toDos  = JSON.parse(localStorage.getItem('userList')) || [];

    const userInfoObj = JSON.stringify(userInfo);
    localStorage.setItem('userList', userInfoObj)
    // localStorage.setItem('userList', JSON.stringify(userInfo));

    // console.log(localStorage.setItem('userList', JSON.stringify(userInfo)))
    displayData()


}
// document.addEventListener('DOMContentLoaded', function () {
//     displayData();
// });

// function displayData() {
//     // Retrieve all to-dos from localStorage
//     const allToDos = JSON.parse(localStorage.getItem('userList')) || [];

//     // Check if allToDos is an array
//     if (Array.isArray(allToDos)) {
//         // Loop through each to-do and display it on the page
//         allToDos.forEach(todo => {
//             displayTask(todo.Title, todo.Description, todo.Priority, todo.Date);
//         });
//     } else {
//         console.error('Data in localStorage is not in expected format.');
//         // Optionally, you can handle this unexpected situation, such as clearing localStorage or displaying an error message.
//     }
// }

// function displayData() {


//     // const allToDos = JSON.parse(localStorage.getItem('userList')) || [];

//     // // Loop through each to-do and display it on the page
//     // allToDos.forEach(todo => {
//     //     displayTask(todo.Title, todo.Description, todo.Priority, todo.Date);
//     // });
//     // if (saveToDoObj) {
//         //     displayTask(saveToDoObj.Title, saveToDoObj.Description, saveToDoObj.Priority, saveToDoObj.Date);
//         // }
//     //     let userToDos = JSON.parse(localStorage.getItem('userList')) || [];

//     // userToDos.forEach((toDo) => {
//     //     displayTask(todo.Title, todo.Description, todo.Priority, todo.Date);
//     // })
// }

function displayData() {
    const saveToDoObj = JSON.parse(localStorage.getItem('userList'));
    console.log(saveToDoObj);


    const saveTitleData = saveToDoObj.Title;
    const saveDescriptionData = saveToDoObj.Description;
    const savePriorityData = saveToDoObj.Priority;
    const saveDueDateData = saveToDoObj.Date;
    if (saveToDoObj) {
        displayTask(saveToDoObj.Title, saveToDoObj.Description, saveToDoObj.Priority, saveToDoObj.Date);
    }
    // displayTask(saveTitleData, saveDescriptionData, savePriorityData, saveDueDateData)
}

function displayAllToDos(userToDos) {
}
displayAllToDos();



function displayTask(saveTitleData, saveDescriptionData, savePriorityData, saveDueDateData) {
    header.textContent = 'Create Your To-Do List.';
    const listContainer = document.createElement('div');
    const taskContainer = document.createElement('p');
    const innerTaskContainer = document.createElement('div');
    const innerTaskHandler = document.createElement('div');
    innerTaskHandler.classList.add('innerTaskHandler');
    innerTaskContainer.classList.add('innerTaskContainer');
    taskContainer.classList.add('taskContainer');
    listContainer.classList.add('listContainer');

    const checkBoxContainer = document.createElement('p');
    checkBoxContainer.classList.add('checkBoxContainer');
    const checkBox = document.createElement('input');
    checkBox.classList.add('checkBox');
    checkBox.setAttribute('type', 'checkbox');

    const taskTitle = document.createElement('h4');
    const taskDescription = document.createElement('p');
    const dueDate = document.createElement('p');
    const taskPriority = document.createElement('p');
    const deleteTask = document.createElement('button');


    taskTitle.classList.add('taskTitle');
    taskDescription.classList.add('taskDescription');
    dueDate.classList.add('dueDate');
    deleteTask.classList.add('deleteTask');
    taskPriority.classList.add('taskPriority');

    taskTitle.textContent = ` ${saveTitleData}`;
    taskDescription.textContent = `${saveDescriptionData}`;
    taskPriority.textContent = `${savePriorityData}`;
    dueDate.textContent = `${saveDueDateData}`;
    deleteTask.textContent = 'Delete task';

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

    taskTitle.addEventListener('dblclick', edittask);
    
    deleteTask.addEventListener('click', deleteToDo);
}

// const deleteTask = document.createElement('button');
// const innerTaskHandlerEl = document.querySelector('.innerTaskHandler')
// deleteTask.classList.add('deleteTask');
// deleteTask.textContent = 'Delete task';
// innerTaskHandlerEl.appendChild(deleteTask);

function deleteToDo() {
    const listContainerEl = document.querySelector('.listContainer')
    listContainerEl.remove()

}
// function displayInboxTask(PriorityValue) {
//     const header = document.querySelector('header h1');
//     header.textContent = 'Inbox';

//     const inboxListContainer = document.createElement('div');
//     const inboxTaskContainer = document.createElement('p');
//     const inboxInnerTaskContainer = document.createElement('div');
//     inboxInnerTaskContainer.classList.add('inboxInnerTaskContainer');
//     inboxTaskContainer.classList.add('inboxTaskContainer');
//     inboxListContainer.classList.add('inboxListContainer');

//     const inboxCheckBoxContainer = document.createElement('p');
//     inboxCheckBoxContainer.classList.add('inboxCheckBoxContainer');
//     const inboxCheckBox = document.createElement('input');
//     inboxCheckBox.classList.add('inboxCheckBox');
//     inboxCheckBox.setAttribute('type', 'checkbox');

//     const inboxTaskTitle = document.createElement('h4');
//     inboxTaskTitle.classList.add('inboxTaskTitle');
//     const inboxTaskDescription = document.createElement('p');
//     inboxTaskDescription.classList.add('inboxTaskDescription');
//     const inboxTaskPriority = document.createElement('p');
//     inboxTaskPriority.classList.add('inboxTaskPriority');
//     inboxTaskTitle.textContent = "Ironing";
//     inboxTaskDescription.textContent = "Black trouser and pink shirt";
//     inboxTaskPriority.textContent = `${PriorityValue}`;

//     inboxInnerTaskContainer.appendChild(inboxTaskTitle);
//     inboxInnerTaskContainer.appendChild(inboxTaskDescription);
//     inboxTaskContainer.appendChild(inboxInnerTaskContainer);
//     inboxTaskContainer.appendChild(inboxInnerTaskContainer);
//     inboxTaskContainer.appendChild(inboxTaskPriority);
//     inboxCheckBoxContainer.appendChild(inboxCheckBox);
//     inboxListContainer.appendChild(inboxCheckBoxContainer);
//     inboxListContainer.appendChild(inboxTaskContainer);
//     userList.appendChild(inboxListContainer);

// }

function preventDefault(event) {
    event.preventDefault();
}
form.addEventListener('submit', preventDefault);

function getdayfromDateInput() {
    const selectDay = new Date(dueDate.value);
    console.log(selectDay);
}
getdayfromDateInput()

export function displayInboxForm() {
    const header = document.querySelector('header h1');
    header.textContent = 'Inbox'
    const screenDisplay = document.querySelector('.display');
    // displayInboxTask();
    // screenDisplay.textContent = '';

    form.style.display = 'block';
}
inbox.addEventListener('click', displayInboxForm);

