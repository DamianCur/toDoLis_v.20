let $toDoInput; //treść nowego zadania
let $alertInfo; // info o braku treści zadania
let $addBtn; // dodanie nowego zadania
let $ulList; // lista zadań
let $newTask; // nowe zadanie (li);


const main = () => {
    prepereDOMElements();
    prepereDOMEvents();
}

const prepereDOMElements = () => {
    $toDoInput = document.querySelector(".todoInput");
    $alertInfo = document.querySelector(".alertInfo");
    $addBtn = document.querySelector(".addBtn");
    $ulList = document.querySelector(".todoList ul");
}


const addNewTask = () => {
    if ($toDoInput.value !== "") {
        $newTask = document.createElement("li");
        $newTask.textContent = $toDoInput.value;
        $ulList.appendChild($newTask);
        $toDoInput.value = "";
        $alertInfo.textContent = ""
        createToolsArea()

    } else {
        $alertInfo.textContent = "Wpisz treść zadania!"
    }
}


const createToolsArea = () => {
    toolsPanel = document.createElement("div");
    toolsPanel.classList.add("tools");
    $newTask.appendChild(toolsPanel);

    completeBtn = document.createElement("button");
    completeBtn.classList.add("complete");
    toolsPanel.appendChild(completeBtn);
    completeBtn.innerHTML = '<i class="fas fa-check"></i>'

    editBtn = document.createElement("button");
    editBtn.classList.add("edit");
    toolsPanel.appendChild(editBtn);
    editBtn.innerHTML = 'EDIT';

    deleteBtn = document.createElement("button");
    deleteBtn.classList.add("delete");
    toolsPanel.appendChild(deleteBtn);
    deleteBtn.innerHTML = '<i class="fas fa-times"></i>';
}






const prepereDOMEvents = () => {
    $addBtn.addEventListener("click", addNewTask);
}


document.addEventListener("DOMContentLoaded", main)