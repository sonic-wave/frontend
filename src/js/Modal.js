import Ticket from "./Ticket";
import editTicketFunc from "./editTicketFunc";
import deleteTicketFunc from "./deleteTicketFunc";

const addTicketBtn = document.querySelector(".addTicketBtn");
const addTicket = document.querySelector(".addTicket");
const cancelBtn = addTicket.querySelector(".cancelBtn");
const okBtn = addTicket.querySelector(".okBtn");
const addTicketForm = addTicket.querySelector(".addTicketForm");
const container = document.querySelector(".container");
let editTicketBtn = document.querySelector(".editTicketBtn");
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
    const newTicket = new Ticket(
      ticket.id,
      ticket.name,
      ticket.fullDescription,
      ticket.status,
      ticket.created,
    );
    newTicket.createTicket();
    addTicket.classList.add("hidden");
  };

  xhr.open("POST", "http://localhost:7070/?method=createTicket");
  xhr.responseType = "json";
  xhr.send(body);
});

// Кнопка "Редактировать тикет"

const editTicket = document.querySelector(".editTicket");
const editTicketForm = editTicket.querySelector(".editTicketForm");

container.addEventListener("click", (e) => {
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
  if (e.target.matches(".ticket")) {
    console.log(e.target.querySelector(".fullTicket"));
    const ticket = e.target.querySelector(".fullTicket");
    ticket.classList.toggle("hidden");
  }
});

container.addEventListener("change", (e) => {
  if (e.target.matches(".ticketStatus")) {
    currentTicket = e.target.closest(".ticket");
    const body = new FormData();
    body.append("id", currentTicket.id);
    body.append("status", e.target.checked);

    const xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function () {
      if (xhr.readyState !== 4) return;
    };

    xhr.open("POST", "http://localhost:7070/?method=editStatus");

    xhr.responseType = "json";

    xhr.send(body);
  }
});

editTicket.querySelector(".okBtn").addEventListener("click", (e) => {
  e.preventDefault();

  const body = new FormData();
  body.append("id", currentTicket.id);
  body.append(
    "shortDescription",
    editTicketForm.querySelector(".shortDescription").value,
  );
  body.append(
    "fullDescription",
    editTicketForm.querySelector(".fullDescription").value,
  );

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

const deleteTicket = document.querySelector(".deleteTicket");

deleteTicket.querySelector(".okBtn").addEventListener("click", (e) => {
  e.preventDefault();

  const xhr = new XMLHttpRequest();

  xhr.onreadystatechange = function () {
    if (xhr.readyState !== 4) return;
    deleteTicketFunc(currentTicket);
    deleteTicket.classList.add("hidden");
  };

  xhr.open("DELETE", "http://localhost:7070/" + currentTicket.id);
  xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

  xhr.send();
});
