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

// function createForm() {
// const form = document.createElement('form');
//     const inputContainerDivEl = document.createElement('div');
//     console.log(inputContainerDivEl)
//     const firstInputContainer = document.createElement('p');
//     const secondInputContainer = document.createElement('p');

//     const taskTitle = document.createElement('input');
//     const taskDescription = document.createElement('input');
//     const formFooter = document.createElement('section');
//     const priorityDueDateContainer = document.createElement('div');
//     const selectOptionEl = document.createElement('select');
//     const opition1 = document.createElement('option');
//     const opition2 = document.createElement('option');
//     const opition3 = document.createElement('option');
//     const opition4 = document.createElement('option');
//     const opition5 = document.createElement('option');

//     const dueDateEl = document.createElement('input');
//     const buttonsContainerEl = document.createElement('div')
//     const cancelBtn = document.createElement('button');
//     const submitBtn = document.createElement('button');

//     form.setAttribute('id', 'form');
//     taskTitle.setAttribute('type', 'text');
//     taskDescription.setAttribute('type', 'text');
//     selectOptionEl.setAttribute('id', 'priority')

//     opition1.setAttribute('value', 'Select Priority');
//     opition2.setAttribute('value', 'Urgent');
//     opition3.setAttribute('value', 'Important');
//     opition4.setAttribute('value', 'Low priority');
//     opition5.setAttribute('value', 'Done');

//     dueDateEl.setAttribute('id', 'datePicker');

//     inputContainerDivEl.classList.add('inputContainerDivEl');
//     firstInputContainer.classList.add('firstInputContainer');
//     secondInputContainer.classList.add('secondInputContainer');

//     taskTitle.classList.add('taskTitle');
//     taskDescription.classList.add('taskDescription');
//     formFooter.classList.add('formFooter');
//     priorityDueDateContainer.classList.add('priorityDueDateContainer');
//     buttonsContainerEl.classList.add('buttonsContainerEl');
//     cancelBtn.classList.add('cancelBtn');
//     submitBtn.classList.add('submitBtn')

//     taskTitle.placeholder = 'Add task Title';
//     taskDescription.placeholder = 'Add description';

//     opition1.textContent = 'Select Priority';
//     opition2.textContent = 'Urgent';
//     opition3.textContent = 'Important';
//     opition4.textContent = 'Low priority';
//     opition5.textContent = 'Done';

//     cancelBtn.textContent = 'Cancel';
//     submitBtn.textContent = 'Submit task';

//     dueDateEl.type = 'date';
//     dueDateEl.placeholder = 'dd/mm/yyy';
//     dueDateEl.min = '1900-03-23';
//     dueDateEl.max = '2090-18-23';

//     firstInputContainer.appendChild(taskTitle);
//     secondInputContainer.appendChild(taskDescription);

//     inputContainerDivEl.append(firstInputContainer, secondInputContainer);
//     selectOptionEl.append(opition1, opition2, opition3, opition4, opition5);

//     priorityDueDateContainer.appendChild(selectOptionEl);
//     priorityDueDateContainer.appendChild(dueDateEl);

//     buttonsContainerEl.append(cancelBtn, submitBtn)
//     formFooter.append(priorityDueDateContainer, buttonsContainerEl);

//     form.append(inputContainerDivEl, formFooter)
//     mainContainer.appendChild(form);


//     acceptInput(taskTitle.value, taskDescription.value, selectOptionEl.value, dueDateEl.value);

//     return
// }


export const myProjects = document.querySelector('#projects h3');
import { CreateNewProjectTaskBtn } from './dom-El-2'
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

//



//

// Display form in block
function displayForm(event) {
    const header = document.querySelector('header h1');
    header.textContent = 'Inbox';
    form.style.display = 'block';


}
addTaskbtn.addEventListener('click', displayForm);

function cancelFormDisplay() {
    form.style.display = 'none';
}
cancelForm.addEventListener('click', cancelFormDisplay)

//Get To-do array from local storage.
let toDos = JSON.parse(localStorage.getItem('toDos')) || [];

//Display all To-dos after complete load of html dom.
// document.addEventListener('DOMContentLoaded', () => {
//     displayToDos()
// })

//Accept user data from form
 function acceptInput() {

    let taskTitle = document.querySelector('.task-title');
    let taskDescription = document.querySelector('.description');
    let taskPriority = document.querySelector('#priority');
    let dueDate = document.querySelector('#datePicker');
    let taskInputValue = taskTitle.value;
    let descriptionInputValue = taskDescription.value;
    let priorityValueEl = taskPriority.value;
    let dueDateValueEl = dueDate.value;

    let userToDo = new getList(taskInputValue, descriptionInputValue, priorityValueEl, dueDateValueEl);
    taskTitle.value = '';
    taskDescription.value = '';
    dueDate.value = '';
    taskPriority.value = 'Select Priority';

    toDos.push(userToDo);

}

//Display To-dos
function displayToDos() {
    toDos?.forEach(todoObj => {
        displayTask(todoObj.Title, todoObj.Description, todoObj.Priority, todoObj.Date);
    });
}


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

    // handleCheckBox(checkBox, taskTitle, taskDescription)
}

function handleCheckBox(checkBox, taskTitle, taskDescription) {

    checkBox.addEventListener('change', () => {

        if (checkBox.checked === true) {

            taskTitle.style.textDecoration = 'line-through';
            taskTitle.style.textDecorationColor = 'red';
            taskTitle.style.textDecorationThickness = '2px';
            localStorage.setItem('toDos', JSON.stringify(toDos));
            console.log(toDos);

            taskDescription.style.textDecoration = 'line-through';

            console.log("true")
        }
        else {
            taskTitle.style.textDecoration = 'none'
            taskDescription.style.textDecoration = 'none';
            console.log("false")
        }
    })

}

function deleteToDo() {
    const listContainerEl = document.querySelector('.listContainer')
    let index = parseInt(this.id.split('_')[1]);
    listContainerEl.remove(listContainerEl);

    toDos.splice(index, 1);
    //update To-do item in local stor
    localStorage.setItem('toDos', JSON.stringify(toDos));
    console.log(toDos);
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


function submitForm(event) {

    event.preventDefault();
    acceptInput();
    // displayToDos()

}
form.addEventListener('submit', submitForm);

// function getdayfromDateInput() {
//     const selectDay = new Date(dueDate.value);
//     console.log(selectDay);
// }
// getdayfromDateInput()

export function displayInboxForm() {
    const header = document.querySelector('header h1');
    header.textContent = 'Inbox'
    const screenDisplay = document.querySelector('.display');
    displayInboxTask();
    // screenDisplay.textContent = '';
    form.style.display = 'none';
    CreateNewProjectTaskBtn()
    displayToDos()

}
inbox.addEventListener('click', displayInboxForm);

// function addTodoToSelectedProject() {
//   let taskInputValue = inputFieldEl.value;
//   console.log(taskInputValue);
//   let descriptionInputValue = descriptionFieldEl.value;
//   console.log(descriptionInputValue);
//   let priorityValueEl = selectPriorityEl.value;
//   let dueDateValueEl = dueDate.value;
//   let selectedProject = projectDropDown.value;

//   if (selectedProject) {
//     let projectTodos = [];

//     projectTodos =
//       JSON.parse(localStorage.getItem(`project-${selectedProject}`)) || [];

//     let userTodo = new getList(
//       taskInputValue,
//       descriptionInputValue,
//       priorityValueEl,
//       dueDateValueEl
//     );

//     projectTodos.push(userTodo);

//     localStorage.setItem(
//       `projects-${selectedProject}`,
//       JSON.stringify(projectTodos)
//     );

//     displayToDos(projectTodos);
//     inputFieldEl.value = "";
//     descriptionFieldEl.value = "";
//     selectPriorityEl.value = "Select Priority";
//     dueDate.value = "";
//   }
// }

// function addTodoToSelectedProject() {
//     let taskInputValue = inputFieldEl.value;
//     console.log(taskInputValue);
//     let descriptionInputValue = descriptionFieldEl.value;
//     console.log(descriptionInputValue);
//     let priorityValueEl = selectPriorityEl.value;
//     let dueDateValueEl = dueDate.value;
//     let selectedProject = projectDropDown.value;

//     const inputNewProjectName = document.querySelector('.inputNewProjectName');
//     const projectName = inputNewProjectName.value.trim();
//     console.log(projectName)

//     //Check if a project is selected or a new project name is provided
//     if (selectedProject || projectName) {
//         let projectTodos = [];

//         if (selectedProject) {
//             projectTodos = JSON.parse(localStorage.getItem(`project-${selectedProject}`)) || [];
//         }
//         else {
//             addProjectName(projectName);
//             projectTodos = JSON.parse(localStorage.getItem(`project-${projectName}`)) || [];
//         }

//         if (form.style.display === 'block') {
//             console.log(selectedProject);

//             let userTodo = new getList(taskInputValue, descriptionInputValue, priorityValueEl, dueDateValueEl);
//             console.log(userTodo);

//             // let toDos = JSON.parse(localStorage.getItem(`projects-${selectedProject}`)) || [];
//             console.log(projectTodos);
//             projectTodos.push(userTodo);

//             localStorage.setItem(`projects-${selectedProject || projectName}`, JSON.stringify(projectTodos));

//             console.log(toDos);
//             // saveToDosForProject(selectedProject, toDos);

//             fillProjectDropDown();
//             displayToDos(selectedProject || projectName);
//         }
//     }
//     inputFieldEl.value = '';
//     descriptionFieldEl.value = '';
//     selectPriorityEl.value = 'Select Priority';
//     dueDate.value = '';
// }


// function fillProjectDropDown(currentProjectName) {
//   projectDropDown.textContent = "";
//   let projects = JSON.parse(localStorage.getItem("projects")) || [];

//   if (projects) {
//     const option = document.createElement("option");
//     option.value = "";
//     option.textContent = "Select project";
//     projectDropDown.appendChild(option);

//     projects?.forEach((project) => {
//       const option = document.createElement("option");
//       option.value = project;
//       option.textContent = project;
//       projectDropDown.appendChild(option);
//     });
//   }
//   if (form.style.display === "block") {
//     projects = JSON.parse(
//       localStorage.getItem(
//         `newProject-${currentProjectName.reduce((acc, current) => current)}`
//       )
//     );
//     console.log(projects);

//     const option = document.createElement("option");
//     option.value = projects;
//     option.textContent = projects;
//     projectDropDown.appendChild(option);
//   }
// }
// fillProjectDropDown();