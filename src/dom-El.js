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
  if ((projectForm.style.display = "block")) {
    projectForm.style.display = 'none'
  }
}
addTaskbtn.addEventListener("click", displayForm);
addTaskMobileBtn.addEventListener("click", displayForm);

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

  // Save todos in local storage
  localStorage.setItem("toDos", JSON.stringify(toDos));

  clearForm();
  // displayToDos(toDos)
}

function clearForm() {
  taskTitle.value = "";
  taskDescription.value = "";
  dueDate.value = "";
  taskPriority.value = "Select Priority";
}

//Display To-dos
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
  const fieldType = target.dataset.fieldType; // Identify the field type(title,description,priority,date)
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

  //Store the fieldType in the input dataset
  taskInput.dataset.fieldType = fieldType;
  taskInput.dataset.index = index;

  target.style.display = "none";
  target.parentNode.insertBefore(taskInput, target.nextSibling); // Insert the input field next to target element

  taskInput.classList.add("edit");

  if (taskInput.type === "text") {
    taskInput.select(); // Automatically select the content of the input field
  }

  taskInput.addEventListener("blur", saveEditedTask); // Save task when task lose focus on input element.
  taskInput.addEventListener("keypress", saveEditedTask); // Save task on pressing Enter
}

function saveEditedTask(event) {
  if (event.type === "blur" || event.key === "Enter") {

    let input = event.target;
    console.log(input);
    let fieldType = input.dataset.fieldType;
    let index = input.dataset.index; // Get the index from the input dataset
    
        console.log(toDos);

    let newValue;
    if (input.tagName === "SELECT") {
      newValue = input.options[input.selectedIndex].value;
      toDos[index].priority = newValue;
      console.log(toDos[index].priority);
    } else {
      newValue = input.value;
    }

    //Check if the index is not out of bounds in the array
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
form.addEventListener("submit", (event) => event.preventDefault());
submitBtn.addEventListener("click", submitForm);

function displayInboxForm() {
  const header = document.querySelector("header h1");
  userlist.textContent = "";
  header.textContent = "Inbox";

  displayToDos();
  form.style.display = "block";

  if (inputNewprojectFormName.style.display === "block") {
    inputNewprojectFormName.style.display = "none";
  }
  projectForm.style.display = "none";
}
inbox.addEventListener("click", displayInboxForm);
