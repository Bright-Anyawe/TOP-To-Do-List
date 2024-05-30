import { addDate, format, compareAsc } from "date-fns";

export class getList {
    constructor(Title, Description, Priority) {
        this.Title = Title;
        this.Description = Description;
        this.Priority = Priority;
    }
}

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

export function getUserInfo() {
    
}
getUserInfo();

export function getProjectDefault() {
    const projectOBj = new getList();
    const taskName = projectOBj.Title = 'Choir Rehearsal';
    const taskDescription = projectOBj.Description = 'All must learn three songs';
    const taskDueDate = projectOBj.DueDate = new Date();
    return projectOBj;
}
getProjectDefault();



function addTask() {

}

function editTask() {

}

function deleteTask() {

}