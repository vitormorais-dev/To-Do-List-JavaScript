const addButton = document.getElementById("add-button");
const taskInput = document.getElementById("task-input");
const taskList = document.getElementById("task-list");

taskInput.style.display = "none";
let openInput = false;

// FUNÇÃO QUE CRIA UMA TAREFA
function addTask() {
    const taskText = taskInput.value;

    if (taskText === "") {
        alert("Voce Precisa digitar uma Tarefa!!!")
        return;
    }

    const li = document.createElement("li");

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.classList.add("task-checkbox");

    const span = document.createElement("span");
    span.textContent = taskText;

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Excluir Tarefa";
    deleteButton.classList.add("dlt-button");

    checkbox.addEventListener("change", function () {
        span.classList.toggle("done");
    });

    deleteButton.addEventListener("click", function () {
        li.remove();
    });

    li.appendChild(checkbox);
    li.appendChild(span);
    li.appendChild(deleteButton);

    taskList.appendChild(li);
    taskInput.value = "";

}

// EVENTOS FIXOS
addButton.addEventListener("click", function () {
  
    if(!openInput){
        taskInput.style.display = "block";
        taskInput.focus();
        openInput = true;
        return;
    }
    addTask();
});

taskInput.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        addTask();
    }
});
