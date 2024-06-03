import { addDate, format, compareAsc } from "date-fns";
import acceptUserInput from './dom-El';
export let toDos = [];
console.log(toDos);



const date = {
    dueDate: function getDate() {

    }
}

// const dates = new date();
// console.log(dates);

// const dates = [
//     new Date(1995, 6, 2),
//     new Date(1987, 1, 11),
//     new Date(1989, 6, 10),
//   ];
//   console.log(dates);

// export function getProjectDefault() {
//     const taskName = projectOBj.Title = 'Choir Rehearsal';
//     const taskDescription = projectOBj.Description = 'All must learn three songs';
//     const taskDueDate = projectOBj.DueDate = new Date();
//     return projectOBj;
// }

// getProjectDefault();

function addTask() {
    submitBtn.addEventListener('click', acceptUserInput)

}
addTask()


export function edittask(event) {
    let task = event.target.textContent;
    let taskInput = document.createElement('input');
    taskInput.type = 'text';
    taskInput.value = task;
    taskInput.classList.add('edit');
    taskInput.addEventListener('keypress', saveTask);
    taskInput.addEventListener('click', saveTask);
    event.target.parentNode.prepend(taskInput);
    
    event.target.remove();
    taskInput.select();
}

function saveTask(event) {
    let inputValue = event.target.value;
    if (inputValue.length > 0 && (event.keycode === 13 || event.type === 'click')) {
        let taskEl = document.createElement('h4');
        taskEl.classList.add('editableSaveTaskEl')
        taskEl.addEventListener('dblclick', edittask);
        taskEl.textContent = event.target.value;
        event.target.parentNode.prepend(taskEl);
        event.target.remove();
    }
}


function deleteTask() {

}