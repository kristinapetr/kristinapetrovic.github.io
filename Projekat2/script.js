// Code goes here
// if there is no localStorage data, initialize array, else, fill the array with localStorage data
if (!localStorage.getItem("task")) {
    arrayTask = [];
} else {
    arrayTask = localStorage.getItem("task").split(",");
}

// function that adds new task
function newTask() {
    let newt = document.taskList.txtNewTask;
    if (newt.value !== "") {
        arrayTask.push(newt.value);
        localStorage.setItem("task", arrayTask);
        displayTasks();
        newt.value = "";
    } else {
        alert("You must enter input data");
    }
}

// function that dispays tasks
function displayTasks() {
    document.getElementById("tasksBox").innerHTML = "";

    if (typeof(Storage) !== "undefined") {
        for (let i = 0; i < arrayTask.length; i++) {
            // create single task box
            let taskBox = document.createElement("DIV");
            taskBox.className = "singleTask";
            // create single task text content
            let taskSpan = document.createElement("SPAN");
            let taskContent = document.createTextNode(arrayTask[i]);
            taskSpan.appendChild(taskContent);
            taskBox.appendChild(taskSpan);
            // create single task delete button
            let taskDelIco = document.createElement("I");
            taskDelIco.className = "fas fa-times";
            taskDelIco.title = "Delete this task";
            taskDelIco.setAttribute("onclick", "delOne(event)");
            taskBox.appendChild(taskDelIco);
            // add everything to list of task
            document.getElementById("tasksBox").appendChild(taskBox);
            // clear new task text box
            document.taskList.txtNewTask.value = "";
        }
    } else {
        alert("All changes will be lost.");
    }
}

// function that filters task
function filterTasks() {
    let txtToFilter = document.tasksForm.txtFilterTasks.value.toUpperCase();
    let groupOfTasks = document.getElementById("tasksBox").getElementsByTagName("DIV");

    for (let i = 0; i < groupOfTasks.length; i++) {
        let data = groupOfTasks[i].getElementsByTagName("SPAN")[0];
        if (data.innerHTML.toUpperCase().indexOf(txtToFilter) > -1) {
            groupOfTasks[i].style.display = "flex";
        } else {
            groupOfTasks[i].style.display = "none";
        }        
    }
}

// function that deletes all task
function delAll() {
    let taskBox = document.getElementById("tasksBox");

    if (taskBox.innerHTML !== "" && confirm("Are you sure you want to clear all the tasks?")) {
        // delete all items with 'task' key prefix from localStorage
        localStorage.removeItem("task");
        arrayTask = [];
        //  task box
        taskBox.innerHTML = "";
        // filter text box
        document.tasksForm.txtFilterTasks.value = "";
    }
}

// function that deletes one task
function delOne(event) {
    if (confirm("Are you sure you want to delete this task?")) {
        let newtParent = event.target.parentElement;

        // delete selected elements
        for (let i = 0; i < arrayTask.length; i++) {
            if (newtParent.getElementsByTagName("SPAN")[0].innerHTML === arrayTask[i]) {
                arrayTask.splice(i, 1);
                localStorage.setItem("task", arrayTask);
            }
        }
        newtParent.remove();
        displayTasks();
    }
}

window.onload = displayTasks;
