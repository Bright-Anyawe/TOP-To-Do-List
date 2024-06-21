import { addDate, format, compareAsc } from "date-fns";
import acceptUserInput from "./dom-El";
import { displayTask } from "./dom-El";
// import { currentProjectName } from "./dom-El-2";
// import { displayToDosForCurrentProject } from "./dom-El-2";

// export function edittask(event) {
//     let task = event.target.textContent;
//     let taskInput = document.createElement('input');
//     taskInput.type = 'text';
//     taskInput.value = task;
//     taskInput.classList.add('edit');
//     taskInput.addEventListener('keypress', saveTask);
//     taskInput.addEventListener('click', saveTask);
//     event.target.parentNode.prepend(taskInput);

//     event.target.remove();
//     taskInput.select();
// }

// function saveTask(event) {
//   let inputValue = event.target.value;
//   if (
//     inputValue.length > 0 &&
//     (event.keycode === 13 || event.type === "blur")
//   ) {
//     let taskEl = document.createElement("h4");
//     taskEl.classList.add("editableSaveTaskEl");
//     taskEl.addEventListener("dblclick", edittask);
//     taskEl.textContent = event.target.value;
//     event.target.parentNode.prepend(taskEl);
//     event.target.remove();
//   }
// }


// export function editTask(event) {
//   let options = ["Urgent", "Important", "Low priority"];
//   const target = event.target;
//   const fieldType = target.dataset.fieldType; // Identify the field type(title,description,priority,date)

//   let taskInput;
//   if (fieldType === "date") {
//     taskInput = document.createElement("input");
//     taskInput.type = "date";
//     taskInput.value = target.dataset.value;
//   } else if (fieldType === "priority") {
//     taskInput = document.createElement("select");
//     options.forEach((priority) => {
//       const option = document.createElement("option");
//       option.value = priority;
//       option.textContent = priority;
//       if (priority === target.textContent) {
//         option.selected = true;
//       }
//       taskInput.appendChild(option);
//     });
//   } else {
//     taskInput = document.createElement("input");
//     taskInput.type = "text";
//     taskInput.value = target.textContent;
//   }

//   taskInput.addEventListener("keypress", saveTask); // Save task on pressing Enter
//   taskInput.addEventListener("blur", saveTask); // Save task when task lose focus on input element.


//   taskInput.classList.add("edit");
//   //Store the fieldType in the input dataset
//   taskInput.dataset.fieldType = fieldType;

//   target.style.display = "none";
//   target.parentNode.insertBefore(taskInput, target.nextSibling); // Insert the input field next to target element

//   taskInput.select(); // Automatically select the content of the input field
// }

//  function saveTaskF(event) {
//   if (
//     event.type === "blur" ||
//     (event.type === "keypress" && event.key === "Enter")
//   ) {
//     const input = event.target;
//     const fieldType = input.dataset.fieldType;
//     const index = input.dataset.index; // Get the index from the input dataset
//     const newValue = input.value;

//     const currentProject = currentProjectName[currentProjectName.length - 1];
//     console.log(currentProject);

//     //Get the task from the local storage
//     let toDo = JSON.parse(localStorage.getItem(currentProject)) || [];
//     console.log(toDo);

//     if (fieldType === "title") {
//       toDo[index].title = newValue;
//     } else if (fieldType === "description") {
//       toDo[index].description = newValue;
//     } else if (fieldType === "priority") {
//       toDo[index].priority = newValue;
//     } else if (fieldType === "date") {
//       const date = new Date(newValue);
//       const options = {
//         weekday: "long",
//         year: "numeric",
//         month: "long",
//         day: "numeric",
//       };
//       toDo[index].date = date.toLocaleDateString("en-US", options); // Format the date
//       input.dataset.value = newValue; // Update data-value attribute        }
//     }

//     // Save the updated tasks to local storage
//     localStorage.setItem(currentProject, JSON.stringify(toDo));

//     // Update the original element's text content and show it again
//     const originalElement = input.previousSibling;
//     if (originalElement) {
//       originalElement.textContent =
//         fieldType === "date" ? toDo[index].date : newValue;
//       originalElement.style.display = "block";
//     }

//     // Remove the input field if it is still part of the DOM
//     if (input.parentNode) {
//       input.remove();
//     }

//     // Re-render the todo list if necessary
//     displayToDosForCurrentProject(currentProject);
//   }
// }

