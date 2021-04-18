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

    } else {
        $alertInfo.textContent = "Wpisz treść zadania!"
    }
}





const prepereDOMEvents = () => {
    $addBtn.addEventListener("click", addNewTask);
}


document.addEventListener("DOMContentLoaded", main)