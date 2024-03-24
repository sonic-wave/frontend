export default class Ticket {
  constructor(id, name, fullDescription, status, created) {
    (this.id = id),
      (this.name = name),
      (this.fullDescription = fullDescription),
      (this.status = status),
      (this.created = created);
  }

  createTicket() {
    const container = document.querySelector(".container");

    const ticketDiv = document.createElement("div");
    ticketDiv.className = "ticket";
    ticketDiv.id = this.id;

    const ticketShort = document.createElement("div");
    ticketShort.className = "shortTicket";

    const ticketInput = document.createElement("input");
    ticketInput.className = "ticketStatus";
    ticketInput.type = "checkbox";

    const ticketName = document.createElement("div");
    ticketName.className = "ticketName";
    ticketName.textContent = this.name;

    const ticketDate = document.createElement("div");
    ticketDate.className = "ticketDate";
    ticketDate.textContent = this.created;

    const ticketButtons = document.createElement("div");
    ticketButtons.className = "ticketButtons";

    const editTicketBtn = document.createElement("button");
    editTicketBtn.className = "editTicketBtn";
    editTicketBtn.textContent = "Редактировать";

    const deleteTicketBtn = document.createElement("button");
    deleteTicketBtn.className = "deleteTicketBtn";
    deleteTicketBtn.textContent = "Удалить";

    const ticketFull = document.createElement("div");
    ticketFull.className = "fullTicket";
    ticketFull.textContent = this.fullDesription;
    ticketFull.classList.add("hidden");

    ticketButtons.append(editTicketBtn);
    ticketButtons.append(deleteTicketBtn);

    ticketShort.append(ticketInput);
    ticketShort.append(ticketName);
    ticketShort.append(ticketDate);
    ticketShort.append(ticketButtons);
    ticketDiv.append(ticketShort);
    ticketDiv.append(ticketFull);
    container.append(ticketDiv);
  }
}

const addTicketBtn = document.querySelector(".addTicket");
const container = document.querySelector(".container");

// const subscribeWidget = document.querySelector('.subscribe');
// const subscribeForm = subscribeWidget.querySelector('.subscribe-form');
// const nameInput = subscribeWidget.querySelector('.name');
// const phoneInput = subscribeWidget.querySelector('.phone');
// const unsubscribeBtn = subscribeWidget.querySelector('.unsubscribe-btn');

const addTicketForm = document.querySelector(".addTicketForm");
const tickets = document.querySelectorAll(".ticket");

container.addEventListener("click", (e) => {
  e.preventDefault();
  if (e.target.matches(".ticket")) {
    console.log(e.target.querySelector(".fullTicket"));
    const ticket = e.target.querySelector(".fullTicket");
    ticket.classList.toggle("hidden");
  }
});

// tickets.forEach(el => {
//   el.addEventListener('click', (e) => {
//     const ticket = e.target.closest('.ticket').querySelector('.fullTicket');
//     ticket.classList.toggle('hidden');
//   })
// })

// ticket.addEventListener('click', (e) => {
//   console.log(e.target);
//   console.log(e.target.closest('fullTicket'));
//   e.target.closest('fullTicket').toggle('hidden');})

// subscribeForm.addEventListener('submit', (e) => {
//   e.preventDefault();

//   const body = Array.from(subscribeForm.elements)
//     .filter(({ name }) => name)
//     .map(({ name, value }) => `${name}=${encodeURIComponent(value)}`)
//     .join('&');

//     const xhr = new XMLHttpRequest();

//   xhr.onreadystatechange = function() {
//     if (xhr.readyState !== 4) return;
//     console.log(xhr.responseText);
//   }

//   xhr.open('POST', 'http://localhost:7070');

//   xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');

//   xhr.send(body);
// })

// unsubscribeBtn.addEventListener('click', (e) => {
//   e.preventDefault();

//   const body = Array.from(subscribeForm.elements)
//     .filter(({ name }) => name)
//     .map(({ name, value }) => `${name}=${encodeURIComponent(value)}`)
//     .join('&');

//     const xhr = new XMLHttpRequest();

//   xhr.onreadystatechange = function() {
//     if (xhr.readyState !== 4) return;
//     console.log(xhr.responseText);
//   }

//   xhr.open('DELETE', 'http://localhost:7070/?' + body);

//   xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');

//   xhr.send();
// })

// addTicketBtn.addEventListener('click', (e) => {
//   e.preventDefault();

//   const body = new FormData(addTicketForm);

//     const xhr = new XMLHttpRequest();

//   xhr.onreadystatechange = function() {
//     if (xhr.readyState !== 4) return;
//     console.log(xhr.responseText);
//   }

//   xhr.open('POST', 'http://localhost:7070/?method=createTicket');

//   xhr.send(body);
// })
