// import { myProjects } from './dom-El'
import { displayForm } from "./dom-El";
import { edittask } from "./logics";

const myProjects = document.querySelector("#projects h3");
const screenContainer = document.querySelector("#Container");
const userList = document.querySelector("#userlist");
const addNewProjectEl = document.querySelector("#addNewProjectEl");
// const form = document.querySelector('#form2');
const newProjectsFormContainerEl = document.querySelector(
  "#newProjectsFormContainerEl"
);
const inputNewprojectFormName = document.querySelector(
  ".inputNewprojectFormName"
);
const newProjectNameRequest = document.querySelector(".newProjectNameRequest");
const newProjectNameTitle = document.querySelector(".headerTextContent");
export const newProjectTasksContainer = document.createElement("section");
const newProjectTask = document.querySelector(".newProjectTask");
export const newProjectAddBtn = document.createElement("button");
const submitTaskBtn = document.querySelector("#submitBtn");
const displayProjectTodos = document.querySelector("#displayProjectTodos");
console.log(submitTaskBtn);

const inputFieldEl = document.querySelector(".task-title");
const descriptionFieldEl = document.querySelector(".description");
const selectPriorityEl = document.querySelector("#priority");
const dueDate = document.querySelector("#datePicker");

class getList {
  constructor(Title, Description, Priority, Date) {
    this.Title = Title;
    this.Description = Description;
    this.Priority = Priority;
    this.Date = Date;
  }
}

function displayRequestNewProjectFormName() {
  inputNewprojectFormName.style.display = "block";

  if (userList.textContent) {
    userList.textContent = "";
  }

  // form.style.display === "none";
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
  form.style.display = "block";
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

const projectDropDown = document.querySelector("#project-dropdown");

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
  displayProjectTodos.textContent = "";
  newProjectTasksContainer.textContent = "";
  
  selectedProject = projectDropDown.value;
  displayToDosForCurrentProject(currentProjectName);
  displayToDos(selectedProject);
  CreateNewProjectTaskBtn();
});

//Add To-dos to local storage when called
// function addTodosNewProject() {
//   let taskInputValue = inputFieldEl.value;
//   console.log(taskInputValue);
//   let descriptionInputValue = descriptionFieldEl.value;
//   console.log(descriptionInputValue);
//   let priorityValueEl = selectPriorityEl.value;
//   let dueDateValueEl = dueDate.value;
//   let selectedProject = projectDropDown.value;
//   console.log(selectedProject);

//   const inputNewProjectName = document.querySelector(".inputNewProjectName");
//   const projectName = inputNewProjectName.value.trim();
//   console.log(projectName);

//   //Check if a project is selected or a new project name is provided
//   if (selectedProject || projectName) {
//     let projectTodos = [];

//     if (selectedProject) {
//       projectTodos =
//         JSON.parse(localStorage.getItem(`project-${selectedProject}`)) || [];
//       console.log(projectTodos);
//     } else {
//       addProjectName(projectName);
//       projectTodos =
//         JSON.parse(localStorage.getItem(`project-${projectName}`)) || [];
//     }

//     if (form.style.display === "block") {
//       console.log(selectedProject);

//       let userTodo = new getList(
//         taskInputValue,
//         descriptionInputValue,
//         priorityValueEl,
//         dueDateValueEl
//       );
//       console.log(userTodo);

//       // let toDos = JSON.parse(localStorage.getItem(`projects-${selectedProject}`)) || [];
//       projectTodos.push(userTodo);
//       console.log(projectTodos);

//       localStorage.setItem(
//         `projects-${selectedProject || projectName}`,
//         JSON.stringify(projectTodos)
//       );

//       console.log(selectedProject);
//       // saveToDosForProject(selectedProject, toDos);

//       fillProjectDropDown();
//       displayToDos(selectedProject || projectName);
//       inputFieldEl.value = "";
//       descriptionFieldEl.value = "";
//       selectPriorityEl.value = "Select Priority";
//       dueDate.value = "";
//     }
//   }
// }

function addTodosNewProject() {
  let currentProjectName = JSON.parse(localStorage.getItem("projects")) || [];
  // let inputNewProjectName = document.querySelector(".inputNewProjectName");
  // let projectName = inputNewProjectName.value;
  // console.log(projectName)
  if (form.style.display === "block") {
    console.log(currentProjectName);
    let toDo =
      JSON.parse(
        localStorage.getItem(`newProject-${currentProjectName.slice().pop()}`)
      ) || [];

    // let toDo =
    //   JSON.parse(localStorage.getItem(`newProject-${projectName}`)) || [];

    let taskInputValue = inputFieldEl.value;
    console.log(taskInputValue);
    let descriptionInputValue = descriptionFieldEl.value;
    console.log(descriptionInputValue);
    let priorityValueEl = selectPriorityEl.value;
    let dueDateValueEl = dueDate.value;

    let userTodo = new getList(
      taskInputValue,
      descriptionInputValue,
      priorityValueEl,
      dueDateValueEl
    );

    toDo.push(userTodo);
    localStorage.setItem(
      `newProject-${currentProjectName.slice().pop()}`,
      JSON.stringify(toDo)
    );

    console.log(toDo);
    inputFieldEl.value = "";
    descriptionFieldEl.value = "";
    selectPriorityEl.value = "Select Priority";
    dueDate.value = "";
    displayToDosForCurrentProject(currentProjectName);
  }
}

function displayToDosForCurrentProject(currentProjectName) {
  const currentTodos =
    JSON.parse(
      localStorage.getItem(`newProject-${currentProjectName.slice().pop()}`)
    ) || [];

  console.log(currentTodos);

  currentTodos.forEach((todo) => {
    displayTask(todo.Title, todo.Description, todo.Priority, todo.Date);
  });
}

let selectedProject = projectDropDown.value;
function addTodoToselectedProject() {
  console.log(selectedProject);

  if (selectedProject) {
    let projectTodo =
      JSON.parse(localStorage.getItem(`project-${selectedProject}`)) || [];

    if (form.style.display === "block") {
      let taskInputValue = inputFieldEl.value;
      console.log(taskInputValue);
      let descriptionInputValue = descriptionFieldEl.value;
      console.log(descriptionInputValue);
      let priorityValueEl = selectPriorityEl.value;
      let dueDateValueEl = dueDate.value;

      let userTodo = new getList(
        taskInputValue,
        descriptionInputValue,
        priorityValueEl,
        dueDateValueEl
      );
      console.log(userTodo);

      projectTodo.push(userTodo);

      localStorage.setItem(
        `project-${selectedProject}`,
        JSON.stringify(projectTodo)
      );
      console.log(projectTodo);

      displayToDos(selectedProject);

      inputFieldEl.value = "";
      descriptionFieldEl.value = "";
      selectPriorityEl.value = "Select Priority";
      dueDate.value = "";
    }
  }
}

//Clear task display when a new project selection change
function clearTaskDisplay() {
  while (displayProjectTodos.firstChild) {
    displayProjectTodos.textContent = "";
  }
}

function displayToDos(selectedProject) {
  if (selectedProject) {
    console.log(selectedProject);

    let toDos =
      JSON.parse(localStorage.getItem(`project-${selectedProject}`)) || [];

    console.log(toDos);

    toDos.forEach((todoObj) => {
      console.log(todoObj);

      displayTask(
        todoObj.Title,
        todoObj.Description,
        todoObj.Priority,
        todoObj.Date
      );
    });
  }
}

function displayTask(
  saveTitleData,
  saveDescriptionData,
  savePriorityData,
  saveDueDateData
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
  displayProjectTodos.appendChild(listContainer);

  taskTitle.addEventListener("dblclick", edittask);

  deleteTask.addEventListener("click", deleteToDo);
}

function deleteToDo() {
  const listContainerEl = document.querySelector(".listContainer");
  var index = parseInt(this.id.split("_")[1]);
  listContainerEl.remove(listContainerEl);

  toDos.splice(index, 1);
  //update To-do item in local stor
  // localStorage.setItem('toDos', JSON.stringify(toDos));
  console.log(toDos);
}

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

  displayProjectTodos.textContent = "";
  addTodosNewProject();
  // displayToDosForCurrentProject(projectName);

  addTodoToselectedProject();
  //   addTodosNewProject();
}
form.addEventListener("submit", submitForm);
