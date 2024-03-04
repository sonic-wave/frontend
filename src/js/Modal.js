import Ticket from "./Ticket";
import createTicket from "./createTicket";
import editTicketFunc from "./editTicketFunc";
import deleteTicketFunc from "./deleteTicketFunc";

const addTicketBtn = document.querySelector(".addTicketBtn");
const addTicket = document.querySelector(".addTicket");
const cancelBtn = addTicket.querySelector(".cancelBtn");
const okBtn = addTicket.querySelector(".okBtn");
const addTicketForm = addTicket.querySelector(".addTicketForm");
const container = document.querySelector(".container");
const tickets = document.querySelectorAll(".ticket");
let currentTicket;

// Кнопка "Добавить тикет"

addTicketBtn.addEventListener("click", (e) => {
  e.preventDefault();

  addTicket.classList.remove("hidden");
  editTicketBtn = document.querySelectorAll(".editTicketBtn");
});

cancelBtn.addEventListener("click", (e) => {
  e.preventDefault();

  addTicket.classList.add("hidden");
});

okBtn.addEventListener("click", (e) => {
  e.preventDefault();

  const body = new FormData(addTicketForm);

  const xhr = new XMLHttpRequest();

  xhr.onreadystatechange = function () {
    if (xhr.readyState !== 4) return;

    const ticket = xhr.response;
    createTicket(ticket);
    addTicket.classList.add("hidden");
  };

  xhr.open("POST", "http://localhost:7070/?method=createTicket");
  xhr.responseType = "json";
  xhr.send(body);
});

// Кнопка "Редактировать тикет"

let editTicketBtn = document.querySelectorAll(".editTicketBtn");
const editTicket = document.querySelector(".editTicket");
const editTicketForm = editTicket.querySelector(".editTicketForm");

container.addEventListener("click", (e) => {
  e.preventDefault();
  if (e.target.matches(".editTicketBtn")) {
    editTicket.classList.remove("hidden");
    currentTicket = e.target.closest(".ticket");
  }
  if (e.target.matches(".cancelBtn")) {
    editTicket.classList.add("hidden");
    deleteTicket.classList.add("hidden");
  }

  if (e.target.matches(".deleteTicketBtn")) {
    deleteTicket.classList.remove("hidden");
    currentTicket = e.target.closest(".ticket");
  }
});

// editTicketBtn.forEach(el => el.addEventListener('click', (e) => {
//     e.preventDefault();

//     editTicket.classList.remove('hidden');
//   }))

//   editTicket.querySelector('.cancelBtn').addEventListener('click', (e) => {
//     e.preventDefault();

//     editTicket.classList.add('hidden');
//   })

editTicket.querySelector(".okBtn").addEventListener("click", (e) => {
  e.preventDefault();

  const body = new FormData(editTicketForm);

  console.log(e.target.parentElement);

  const xhr = new XMLHttpRequest();

  xhr.onreadystatechange = function () {
    if (xhr.readyState !== 4) return;
    editTicketFunc(currentTicket, xhr.response);
    editTicket.classList.add("hidden");
  };

  xhr.open("POST", "http://localhost:7070/?method=editTicket");

  xhr.responseType = "json";

  xhr.send(body);
});

// Кнопка "Удалить тикет"

const deleteTicketBtn = document.querySelectorAll(".deleteTicketBtn");
const deleteTicket = document.querySelector(".deleteTicket");
const deleteTicketForm = deleteTicket.querySelector(".deleteTicketForm");

// deleteTicketBtn.forEach(el => el.addEventListener('click', (e) => {
//     e.preventDefault();
//     deleteTicket.classList.remove('hidden');
//   }))

//   deleteTicket.querySelector('.cancelBtn').addEventListener('click', (e) => {
//     e.preventDefault();

//     deleteTicket.classList.add('hidden');
//   })

deleteTicket.querySelector(".okBtn").addEventListener("click", (e) => {
  e.preventDefault();

  const xhr = new XMLHttpRequest();

  xhr.onreadystatechange = function () {
    if (xhr.readyState !== 4) return;
    deleteTicketFunc(currentTicket);
    deleteTicket.classList.add("hidden");
  };

  xhr.open("DELETE", "http://localhost:7070/");

  xhr.send();
});
