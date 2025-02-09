function addTheTask(){

    const taskInput = document.getElementById("add-task");
    const taskName = taskInput.value;

    if (taskName === "") {
        alert("Please enter a task"); 
        return; 
    }

    const newTask = document.createElement("div");
    newTask.classList.add("task-item");

    const checkBox = document.createElement("input");
    checkBox.type = "checkbox";
    checkBox.classList.add("tasks");

    const label = document.createElement("label");
    label.textContent = taskName;
    label.classList.add("task-label");

    label.style.marginLeft = "10px";

    const deleteButton = document.createElement("button");
    deleteButton.classList.add("delete-button")
    deleteButton.innerHTML = '<img src="https://img.icons8.com/ios7/600/FA5252/delete.png">';
    deleteButton.addEventListener("click", function (){
        taskList.removeChild(newTask);
    });

    newTask.appendChild(checkBox);
    newTask.appendChild(label);
    newTask.appendChild(deleteButton);

    const taskList = document.querySelector(".block-tasks");
    taskList.appendChild(newTask);

    taskInput.value = "";

}