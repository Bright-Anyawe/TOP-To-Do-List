// import { myProjects } from './dom-El'
import { displayForm } from "./dom-El";
// import { editTask } from "./logics";

const myProjects = document.querySelector("#projects h3");
const screenContainer = document.querySelector("#Container");
const userList = document.querySelector("#userlist");
const addProjectsContainer = document.querySelector(".addProjectsContainer");
const newProjectsFormContainerEl = document.querySelector(
  "#newProjectsFormContainerEl"
);
export const inputNewprojectFormName = document.querySelector(
  ".inputNewprojectFormName"
);
const newProjectNameRequest = document.querySelector(".newProjectNameRequest");
const newProjectNameTitle = document.querySelector(".headerTextContent");
const newProjectTask = document.querySelector(".newProjectTask");
const newProjectTasksContainer = document.createElement("section");
const newProjectAddBtn = document.createElement("button");
const submitTaskBtn = document.querySelector("#submitBtnForProject");
const cancelTaskBtn = document.querySelector(".cancelForProjectBtn");
const displayProjectTodos = document.querySelector("#displayProjectTodos");

let projectForm = document.querySelector("#ProjectForm");
let form = document.querySelector("#form");
let inputFieldEl = document.querySelector(".pTitle");
let descriptionFieldEl = document.querySelector(".pDescription");
let selectPriorityEl = document.querySelector("#projectPriority");
let dueDate = document.querySelector("#ProjectdatePicker");
const projectDropDown = document.querySelector("#project-dropdown");
let selectedProject = projectDropDown.value;

class getList {
  constructor(title, description, priority, date) {
    this.title = title;
    this.description = description;
    this.priority = priority;
    this.date = date;
  }
}

function displayRequestNewProjectFormName() {
  inputNewprojectFormName.style.display = "block";

  if (userList.textContent) {
    userList.textContent = "";
  }

  if (newProjectTasksContainer.style.display === "block") {
    newProjectTasksContainer.style.display = "none";
  }

  // projectForm.style.display = "none";
  if (form.style.display === "block") {
    form.style.display = "none";
  }
  if (projectForm.style.display === "block") {
    projectForm.style.display = "none";
  }
  return { inputNewprojectFormName };
}
addProjectsContainer.addEventListener(
  "click",
  displayRequestNewProjectFormName
);

//Get New Project Name Function.
export function getnewProjectInputName() {
  const inputNewProjectName = document.querySelector(".inputNewProjectName");
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

export function createNewProjectTaskBtn() {
  newProjectTasksContainer.setAttribute("id", "newProjectTasksContainer");
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
  pathElement.setAttribute("d", "M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z");
  svgElement.appendChild(pathElement);

  newProjectAddBtn.classList.add("newProjectAddBtn");

  newProjectTasksContainer.appendChild(svgElement);
  newProjectTasksContainer.appendChild(newProjectAddBtn);
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
  //   if (form.style.display === "block") {
  //     projects = JSON.parse(
  //       localStorage.getItem(
  //         `newProject-${currentProjectName.reduce((acc, current) => current)}`
  //       )
  //     );
  //     console.log(projects);

  //     projects?.forEach((project) => {
  //       const option = document.createElement("option");
  //       option.value = project;
  //       option.textContent = project;
  //       projectDropDown.appendChild(option);
  // //     });
  //   }
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
  // getSelectedTodos(selectedProject);
  displayToDosForCurrentProject(selectedProject);
  // displaySelectedToDos(selectedProject);
  displayNewProjectForm();
});

export function getUserTodo() {
  let taskInputValue = inputFieldEl.value;
  let descriptionInputValue = descriptionFieldEl.value;
  let priorityValueEl = selectPriorityEl.value;
  let dueDateValueEl = dueDate.value;

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
    dayOfWeek
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

function addNewProjectTodos() {
  const currentProjectName = JSON.parse(localStorage.getItem("projects")) || [];
  console.log(currentProjectName);

  if (projectForm.style.display === "block") {
    
     if (selectedProject) {
      const toDo = JSON.parse(localStorage.getItem(selectedProject)) || [];

      const newToDo = getUserTodo();
      toDo.push(newToDo);

      localStorage.setItem(selectedProject, JSON.stringify(toDo));
      console.log(toDo);

      console.log(toDo);
      clearInputForm();
      displayToDosForCurrentProject(selectedProject);

      } else {

        
              const currentProject = currentProjectName[currentProjectName.length - 1];
              console.log(currentProject);
              //If there is an existing project get it from the local storage
              const toDo = JSON.parse(localStorage.getItem(currentProject)) || [];
        
              const newToDo = getUserTodo();
        
              toDo.push(newToDo);
        
              localStorage.setItem(currentProject, JSON.stringify(toDo));
        
              console.log(toDo);
              // clearInputForm();
              displayToDosForCurrentProject(currentProject);
       
      }
    
  
    
  }
}

let currentProjectName = [];
let toDo = [];

function displayToDosForCurrentProject(projectName) {
  console.log(projectName);

  currentProjectName = projectName;
  // console.log(currentProjectName);

  // saveTask(projectName);
  let projectTodos = JSON.parse(localStorage.getItem(projectName)) || [];

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
      projectName
    );
  });
}

//Clear task display when a new project selection change
// function clearTaskDisplay() {
//   while (userList.firstChild) {
//     userList.textContent = "";
//   }
// }

function displayTask(
  saveTitleData,
  saveDescriptionData,
  savePriorityData,
  saveDueDateData,
  index,
  projectName
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

  taskTitle.dataset.fieldType = "title";
  taskDescription.dataset.fieldType = "description";
  taskTitle.dataset.index = index;
  taskDescription.dataset.index = index;

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

  deleteTask.addEventListener("click", (event) => deleteToDo(event));

  handleCheckBox(checkBox, taskTitle, taskDescription);
}

export function editTask(event) {
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

export function saveEditedTask(event) {
  console.log(toDo);
  if (event.type === "blur" || event.key === "Enter") {
    const input = event.target;
    console.log(input);

    let fieldType = input.dataset.fieldType;
    let index = input.dataset.index; // Get the index from the input dataset
    console.log(index);
    let newValue = input.value;
    console.log(newValue);

    console.log(currentProjectName);

    // const currentProject = currentProjectName[currentProjectName.length - 1];

    //Get the task from the local storage
    // let toDo = JSON.parse(localStorage.getItem(currentProjectName)) || [];
    console.log(toDo);

    //Check if the index is not out of bounds in the array
    if (index < toDo.length) {
      if (fieldType === "title") {
        toDo[index].title = newValue;
        console.log(toDo[index].title);
        console.log(newValue);
      } else if (fieldType === "description") {
        toDo[index].description = newValue;
      }
    }
    // toDo.splice(index, 1, newValue);

    // Save the updated tasks to local storage
    localStorage.setItem(currentProjectName, JSON.stringify(toDo));

    // Update the original element's text content and show it again
    let originalElement = input.previousSibling;

    originalElement.textContent = newValue;

    // if (fieldType === "title") {
    //   originalElement.textContent = newValue;
    // } else if (fieldType === "description") {
    //   originalElement.textContent = newValue;
    // }

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
      taskTitle.style.textDecoration = "line-through";
      taskTitle.style.textDecorationColor = "grey";
      taskTitle.style.textDecorationThickness = "2px";
      console.log(toDo);

      taskDescription.style.textDecoration = "line-through";

      const listContainerEl = event.target;
      console.log(listContainerEl);
      const index = listContainerEl.dataset.index;
      // const buttons = document.querySelectorAll(".deleteTask");
      // const index = Array.from(buttons).indexOf(this);

      if (index !== -1) {
        listContainerEl.remove(listContainerEl);
        toDo.splice(index, 1);
        //update To-do item in local storage
        localStorage.setItem(currentProjectName, JSON.stringify(toDo));
        console.log(toDo);
        userList.textContent = "";
        displayToDosForCurrentProject(currentProjectName);
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

function cancelFormDisplay() {
  inputFieldEl.value = "";
  descriptionFieldEl.value = "";
  selectPriorityEl.value = "Select Priority";
  dueDate.value = "";
  projectForm.style.display = "none";
  console.log("cancel form!");
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
newProjectNameRequest.addEventListener("submit", submitNewProjectFormName);
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
projectForm.addEventListener("submit", (event) => event.preventDefault());
