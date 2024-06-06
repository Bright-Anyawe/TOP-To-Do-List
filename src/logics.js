import { addDate, format, compareAsc } from "date-fns";
import acceptUserInput from './dom-El';
import { displayTask } from "./dom-El";



const date = {
    dueDate: function getDate() {

    }
}


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



