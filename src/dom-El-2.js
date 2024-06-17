// import { myProjects } from './dom-El'
import { displayForm } from "./dom-El";
// import { editTask } from "./logics";

const myProjects = document.querySelector("#projects h3");
const screenContainer = document.querySelector("#Container");
const userList = document.querySelector("#userlist");
const addNewProjectEl = document.querySelector("#addNewProjectEl");
const newProjectsFormContainerEl = document.querySelector(
  "#newProjectsFormContainerEl"
);
export const inputNewprojectFormName = document.querySelector(
  ".inputNewprojectFormName"
);
const newProjectNameRequest = document.querySelector(".newProjectNameRequest");
const newProjectNameTitle = document.querySelector(".headerTextContent");
const newProjectTasksContainer = document.createElement("section");
const newProjectTask = document.querySelector(".newProjectTask");
const newProjectAddBtn = document.createElement("button");
const submitTaskBtn = document.querySelector("#submitBtn");
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
  constructor(Title, Description, Priority, Date) {
    this.Title = Title;
    this.Description = Description;
    this.Priority = Priority;
    this.Date = Date;
    this.projectName = currentProjectName[currentProjectName.length - 1];
  }
}

function displayRequestNewProjectFormName() {
  inputNewprojectFormName.style.display = "block";

  if (userList.textContent) {
    userList.textContent = "";
  }

  // projectForm.style.display = "none";
  if (form.style.display === "block") {
    form.style.display = "none";
  }
  return { inputNewprojectFormName };
}
addNewProjectEl.addEventListener("click", displayRequestNewProjectFormName);

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

export function CreateNewProjectTaskBtn() {
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
}

function displayNewProjectForm() {
  projectForm.style.display = "block";
  if (newProjectTasksContainer) {
    newProjectTasksContainer.style.display = "none";
  }
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
  newProjectTasksContainer.textContent = "";

  selectedProject = projectDropDown.value;
  // getSelectedTodos(selectedProject);
  displayToDosForCurrentProject(selectedProject);
  // displaySelectedToDos(selectedProject);
  CreateNewProjectTaskBtn();
});

export function getUserTodo() {
  let taskInputValue = inputFieldEl.value;
  console.log(taskInputValue);
  let descriptionInputValue = descriptionFieldEl.value;
  console.log(descriptionInputValue);
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

 let currentProjectName = [];
let toDo = [];
function addNewProjectTodos() {
  currentProjectName = JSON.parse(localStorage.getItem("projects")) || [];
  console.log(currentProjectName);

  if (projectForm.style.display === "block") {
    console.log(currentProjectName);

    //Get the current project name
    let currentProject = currentProjectName[currentProjectName.length - 1];
    console.log(currentProject);
    toDo = JSON.parse(localStorage.getItem(currentProject)) || [];

    const newToDo = getUserTodo();

    toDo.push(newToDo);

    localStorage.setItem(currentProject, JSON.stringify(toDo));

    console.log(toDo);
    clearInputForm();
    displayToDosForCurrentProject(currentProject);
  }
}

export function displayToDosForCurrentProject(projectName) {
  console.log(projectName);

  // saveTask(projectName);
  let projectTodos = JSON.parse(localStorage.getItem(projectName)) || [];

  console.log(projectTodos);
  // console.log(currentTodos);

  projectTodos.forEach((todo, index) => {
    displayTask(
      todo.Title,
      todo.Description,
      todo.Priority,
      todo.Date,
      index,
      projectName
    );
  });
}

function editTask(event) {
  const target = event.target;
  const fieldType = target.dataset.fieldType; // Identify the field type(title,description,priority,date)
  const index = target.dataset.index;

  let taskInput;

  if (fieldType === "title" || fieldType === "description") {
    taskInput = document.createElement("input");
    taskInput.type = "text";
    taskInput.value = target.textContent;
  }

  taskInput.addEventListener("keypress", saveTask); // Save task on pressing Enter
  taskInput.addEventListener("blur", saveTask); // Save task when task lose focus on input element.

  taskInput.classList.add("edit");
  //Store the fieldType in the input dataset
  taskInput.dataset.fieldType = fieldType;

  target.style.display = "none";
  target.parentNode.insertBefore(taskInput, target.nextSibling); // Insert the input field next to target element

  taskInput.select(); // Automatically select the content of the input field
}

function saveTask(event) {
  if (
    event.type === "blur" ||
    (event.type === "keypress" && event.key === "Enter")
  ) {
    const input = event.target;
    const fieldType = input.dataset.fieldType;
    const index = input.dataset.index; // Get the index from the input dataset
    const newValue = input.value;

    const currentProject = currentProjectName[currentProjectName.length - 1];
    console.log(currentProject);

    //Get the task from the local storage
    let toDo = JSON.parse(localStorage.getItem(currentProject)) || [];
    console.log(toDo);

    //Check if the index is not out of bounds in the array
    if (index < toDo.length) {
      if (fieldType === "title") {
        toDo[index].title = newValue;
      } else if (fieldType === "description") {
        toDo[index].description = newValue;
      }
    }

    // Save the updated tasks to local storage
    localStorage.setItem(currentProject, JSON.stringify(toDo));

    // Update the original element's text content and show it again
    const originalElement = input.previousSibling;

    if (fieldType === "title") {
      originalElement.textContent = toDo[index].title;
    }
    else if (fieldType === 'description') {
      originalElement.textContent = toDo[index].description;
    }

    originalElement.style.display = "block";

    // Remove the input field if it is still part of the DOM
    if (input.parentNode) {
      input.remove();
    }

    // Re-render the todo list if necessary
    displayToDosForCurrentProject(currentProject);
  }
  else {
    console.log('invalid task index or empty toDo array');
  }
}

//Clear form input
function clearInputForm() {
  inputFieldEl.value = "";
  descriptionFieldEl.value = "";
  selectPriorityEl.value = "Select Priority";
  dueDate.value = "";
}

//Clear task display when a new project selection change
function clearTaskDisplay() {
  while (userList.firstChild) {
    userList.textContent = "";
  }
}

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
  taskDescription.dataset.fieldType = "discription";
  // taskContainer.dataset.fieldType = "priority";
  // taskContainer.dataset.fieldType = "date";

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

  taskContainer.addEventListener("dblclick", editTask);

  deleteTask.addEventListener("click", (event) => deleteToDo(event));
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
  addTodosNewProject();
  displayToDosForCurrentProject(currentProjectName.slice().pop());
}
cancelTaskBtn.addEventListener("click", cancelFormDisplay);

//Prevent form Default when submit
const submitNewProjectFormName = (event) => {
  event.preventDefault();
  getnewProjectInputName();
  CreateNewProjectTaskBtn();
};
newProjectNameRequest.addEventListener("submit", submitNewProjectFormName);

newProjectTasksContainer.addEventListener("click", displayNewProjectForm);

function submitForm(event) {
  event.preventDefault();

  userList.textContent = "";
  addNewProjectTodos();
  // displayToDosForCurrentProject(projectName);

  // addTodoToselectedProject();
}
projectForm.addEventListener("submit", submitForm);
