let $toDoInput; //treść nowego zadania
let $alertInfo; // info o braku treści zadania
let $addBtn; // dodanie nowego zadania
let $ulList; // lista zadań


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

const prepereDOMEvents = () => {

}
















document.addEventListener("DOMContentLoaded", main)