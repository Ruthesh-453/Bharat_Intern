document.getElementById("add-button").addEventListener("click", addTask);

function addTask() {
    var taskInput = document.getElementById("task-input");
    var taskText = taskInput.value;
    if (taskText === "") {
        return;
    }
    var taskDesc = document.getElementById("task-input-d");
    var taskD = taskDesc.value;
    var taskItem = document.createElement("li");
    var taskTextSpan = document.createElement("span");
    taskTextSpan.classList.add("task-text");
    taskTextSpan.innerText = taskText + ":\n" + taskD;
    taskItem.appendChild(taskTextSpan);

    var taskActions = document.createElement("div");
    taskActions.classList.add("task-actions");

    var completeButton = document.createElement("button");
    completeButton.classList.add("task-button");
    completeButton.innerText = "Complete";
    completeButton.addEventListener("click", function() {
        completeTask(taskItem);
    });
    taskActions.appendChild(completeButton);

    var deleteButton = document.createElement("button");
    deleteButton.classList.add("task-button");
    deleteButton.innerText = "Delete";
    deleteButton.addEventListener("click", function() {
        deleteTask(taskItem);
    });
    taskActions.appendChild(deleteButton);

    taskItem.appendChild(taskActions);

    document.getElementById("pending-list").appendChild(taskItem);

    taskInput.value = "";
    taskDesc.value = "";
}

function completeTask(taskItem) {
    var completedTasks = document.getElementById("completed-list");
    taskItem.removeChild(taskItem.lastChild); // Remove task actions
    completedTasks.appendChild(taskItem);
    taskItem.classList.add("completed");
    var deleteButton = document.createElement("button");
    deleteButton.classList.add("task-button");
    deleteButton.innerText = "Delete";
    deleteButton.addEventListener("click", function() {
        deleteTask(taskItem);
    });
    taskItem.lastChild.appendChild(deleteButton);
}

function deleteTask(taskItem) {
    taskItem.parentNode.removeChild(taskItem);
}