// import { edittask } from "./logics";
import { getUserTodo } from "./dom-El-2";
import { newProjectTasksContainer } from "./dom-El-2";
import { getnewProjectInputValue } from "./dom-El-2";
import { createNewProjectTaskBtn } from "./dom-El-2";
import { inputNewprojectFormName } from "./dom-El-2";

const mainContainer = document.querySelector("main");
const header = document.querySelector(".headerTextContent");
const userList = document.querySelector("#userlist");
const inboxTaskDisplay = document.querySelector(".displayInboxTask");
const form = document.querySelector("#form");
let projectForm = document.querySelector("#ProjectForm");
const cancelForm = document.querySelector(".cancel");
const submitBtn = document.querySelector("#submitBtn");
const addTaskbtn = document.querySelector(".addTask");

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

export const myProjects = document.querySelector("#projects h3");
const defaultProjects = document.querySelector("#projects");

//Display form in block
function displayForm(event) {
  const header = document.querySelector("header h1");
  header.textContent = "Add your To do";
  userList.textContent = "";
  let newProjectBtn = createNewProjectTaskBtn();
  newProjectBtn.style.display = "none";
  form.style.display = "block";
  projectForm.style.display = "none";
}
addTaskbtn.addEventListener("click", displayForm);

// Display all To-dos after complete load of html dom.
document.addEventListener("DOMContentLoaded", () => {
  displayToDos();
});

let toDos = JSON.parse(localStorage.getItem("toDos")) || [];

//Accept user data from form on (add task) click
function acceptInput() {
  let taskInputValue = taskTitle.value;
  let descriptionInputValue = taskDescription.value;
  let priorityValueEl = taskPriority.value;
  let dueDateValueEl = dueDate.value;

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

  // Save todos in local storage
  localStorage.setItem("toDos", JSON.stringify(toDos));

  clearForm();
}

function clearForm() {
  taskTitle.value = "";
  taskDescription.value = "";
  dueDate.value = "";
  taskPriority.value = "Select Priority";
}

//Display To-dos
function displayToDos() {
  toDos = JSON.parse(localStorage.getItem("toDos")) || [];

  toDos?.forEach((todoObj, index) => {
    getElementForTaskDisplay(
      todoObj.Title,
      todoObj.Description,
      todoObj.Priority,
      todoObj.Date,
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
  taskTitle.dataset.index = index;
  taskDescription.dataset.index = index;
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
  taskDescription.addEventListener("dblclick", editTask);

  deleteTask.addEventListener("click", deleteToDo);

  handleCheckBox(checkBox, taskTitle, taskDescription);
}

function editTask(event) {
  const target = event.target;
  console.log(target);
  const fieldType = target.dataset.fieldType; // Identify the field type(title,description,priority,date)
  const index = target.dataset.index;

  let taskInput;

  if (fieldType === "title" || fieldType === "description") {
    taskInput = document.createElement("input");
    taskInput.type = "text";
    taskInput.value = target.textContent;
  }

  //Store the fieldType in the input dataset
  taskInput.dataset.fieldType = fieldType;
  taskInput.dataset.index = index;

  target.style.display = "none";
  target.parentNode.insertBefore(taskInput, target.nextSibling); // Insert the input field next to target element

  taskInput.classList.add("edit");

  taskInput.select(); // Automatically select the content of the input field

  taskInput.addEventListener("blur", saveEditedTask); // Save task when task lose focus on input element.
  taskInput.addEventListener("keypress", saveEditedTask); // Save task on pressing Enter
}

function saveEditedTask(event) {
  if (event.type === "blur" || event.key === "Enter") {
    const input = event.target;
    console.log(input);

    let fieldType = input.dataset.fieldType;
    let index = input.dataset.index; // Get the index from the input dataset
    console.log(index);
    let newValue = input.value;
    console.log(newValue);

    console.log(toDos);

    //Check if the index is not out of bounds in the array
    if (index < toDos.length) {
      if (fieldType === "title") {
        toDos[index].title = newValue;
        console.log(toDos[index].title);
        console.log(newValue);
      } else if (fieldType === "description") {
        toDos[index].description = newValue;
      }
    }

    // Save the updated tasks to local storage
    localStorage.setItem("toDos", JSON.stringify(toDos));

    // Update the original element's text content and show it again
    let originalElement = input.previousSibling;

    originalElement.textContent = newValue;

    originalElement.style.display = "block";

    // Remove the input field if it is still part of the DOM
    input.remove();

    userList.textContent = "";

    // Re-render the todo list if necessary
    displayToDos(toDos);
  }
}

function handleCheckBox(checkBox, taskTitle, taskDescription) {
  checkBox.addEventListener("change", (event) => {
    if (checkBox.checked === true) {
      taskTitle.style.textDecoration = "line-through";
      taskTitle.style.textDecorationColor = "grey";
      taskTitle.style.textDecorationThickness = "2px";
      localStorage.setItem("toDos", JSON.stringify(toDos));
      console.log(toDos);

      taskDescription.style.textDecoration = "line-through";

      const listContainerEl = event.target;
      console.log(listContainerEl);
      const index = listContainerEl.dataset.index;
      // const buttons = document.querySelectorAll(".deleteTask");
      // const index = Array.from(buttons).indexOf(this);

      if (index !== -1) {
        listContainerEl.remove(listContainerEl);
        toDos.splice(index, 1);
        //update To-do item in local storage
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

//Delete the todo that get clicked
function deleteToDo() {
  const listContainerEl = this.closest(".listContainer");
  const buttons = document.querySelectorAll(".deleteTask");
  const index = Array.from(buttons).indexOf(this);

  if (index !== -1) {
    listContainerEl.remove(listContainerEl);
    toDos.splice(index, 1);
    //update To-do item in local storage
    localStorage.setItem("toDos", JSON.stringify(toDos));
    console.log(toDos);
  }
}

// function displayInboxTask(PriorityValue) {
//   const header = document.querySelector("header h1");
//   header.textContent = "Inbox";

//   const inboxListContainer = document.createElement("div");
//   const inboxTaskContainer = document.createElement("p");
//   const inboxInnerTaskContainer = document.createElement("div");
//   inboxInnerTaskContainer.classList.add("inboxInnerTaskContainer");
//   inboxTaskContainer.classList.add("inboxTaskContainer");
//   inboxListContainer.classList.add("inboxListContainer");

//   const inboxCheckBoxContainer = document.createElement("p");
//   inboxCheckBoxContainer.classList.add("inboxCheckBoxContainer");
//   const inboxCheckBox = document.createElement("input");
//   inboxCheckBox.classList.add("inboxCheckBox");
//   inboxCheckBox.setAttribute("type", "checkbox");

//   const inboxTaskTitle = document.createElement("h4");
//   inboxTaskTitle.classList.add("inboxTaskTitle");
//   const inboxTaskDescription = document.createElement("p");
//   inboxTaskDescription.classList.add("inboxTaskDescription");
//   const inboxTaskPriority = document.createElement("p");
//   inboxTaskPriority.classList.add("inboxTaskPriority");
//   inboxTaskTitle.textContent = "Ironing";
//   inboxTaskDescription.textContent = "Black trouser and pink shirt";
//   inboxTaskPriority.textContent = `${PriorityValue}`;

//   inboxInnerTaskContainer.appendChild(inboxTaskTitle);
//   inboxInnerTaskContainer.appendChild(inboxTaskDescription);
//   inboxTaskContainer.appendChild(inboxInnerTaskContainer);
//   inboxTaskContainer.appendChild(inboxInnerTaskContainer);
//   inboxTaskContainer.appendChild(inboxTaskPriority);
//   inboxCheckBoxContainer.appendChild(inboxCheckBox);
//   inboxListContainer.appendChild(inboxCheckBoxContainer);
//   inboxListContainer.appendChild(inboxTaskContainer);
//   userList.appendChild(inboxListContainer);
// }

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
submitBtn.addEventListener("click", submitForm);
form.addEventListener("submit", (event) => event.preventDefault());

function displayInboxForm() {
  const header = document.querySelector("header h1");
  userlist.textContent = "";
  header.textContent = "Inbox";

  displayToDos();
  form.style.display = "block";

  if (inputNewprojectFormName.style.display === "block") {
    inputNewprojectFormName.style.display = "none";
  }
}
inbox.addEventListener("click", displayInboxForm);
