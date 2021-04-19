let $toDoInput; //treść nowego zadania
let $alertInfo; // info o braku treści zadania
let $addBtn; // dodanie nowego zadania
let $ulList; // lista zadań
let $newTask; // nowe zadanie (li);
let $popup;
let $popupInfo;
let $editedTodo;
let $popupInput;
let $addPopupBtn;
let $closeTodoBtn;
let $idNumber = 0;



const main = () => {
    prepereDOMElements();
    prepereDOMEvents();
}

const prepereDOMElements = () => {
    $toDoInput = document.querySelector(".todoInput");
    $alertInfo = document.querySelector(".alertInfo");
    $addBtn = document.querySelector(".addBtn");
    $ulList = document.querySelector(".todoList ul");
    $popup = document.querySelector('.popup');
    $popupInfo = document.querySelector('.popupInfo');
    $popupInput = document.querySelector('.popupInput');
    $addPopupBtn = document.querySelector('.accept');
    $closeTodoBtn = document.querySelector('.cancel');
}


const addNewTask = () => {
    if ($toDoInput.value !== "") {
        $idNumber++;
        $newTask = document.createElement("li");
        $newTask.textContent = $toDoInput.value;
        $newTask.setAttribute('id', `todo-${$idNumber}`);
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


const checkClick = (e) => {
    if (e.target.closest('button').classList.contains('complete')) {
        e.target.closest('li').classList.toggle('completed');
        e.target.closest('button').classList.toggle('completed');

    } else if (e.target.closest('button').className === 'edit') {
        editTask(e);
    } else if (e.target.closest('button').className === 'delete') {

    }
}

const editTask = (e) => {
    const oldTodo = e.target.closest('li').id;
    $editedTodo = document.getElementById(oldTodo);
    $popupInput.value = $editedTodo.firstChild.textContent;
    $popup.style.display = 'flex';
}

const changeTodo = () => {
    if ($popupInput.value !== "") {
        $editedTodo.firstChild.textContent = $popupInput.value;
        $popup.style.display = 'none';
        $popupInfo.textContent = "";
    } else {
        $popupInfo.textContent = 'Musisz podać jakąś treść'
    }
}


const closePopup = () => {
    $popup.style.display = 'none';
    $popupInfo.textContent = "";
}





const prepereDOMEvents = () => {
    $addBtn.addEventListener("click", addNewTask);
    $ulList.addEventListener("click", checkClick);
    $closeTodoBtn.addEventListener("click", closePopup);
    $addPopupBtn.addEventListener("click", changeTodo);
}


document.addEventListener("DOMContentLoaded", main)