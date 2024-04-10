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
    ticketInput.type = "checkbox";
    ticketInput.className = "ticketStatus";

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
    ticketFull.textContent = this.fullDescription;
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
