export default function createTicket(ticket) {
  const container = document.querySelector(".container");

  const ticketDiv = document.createElement("div");
  ticketDiv.className = "ticket";

  const ticketShort = document.createElement("div");
  ticketShort.className = "shortTicket";

  const ticketInput = document.createElement("input");
  ticketInput.className = "ticketStatus";
  ticketInput.type = "checkbox";

  const ticketName = document.createElement("div");
  ticketName.className = "ticketName";
  ticketName.textContent = ticket.name;

  const ticketDate = document.createElement("div");
  ticketDate.className = "ticketDate";
  ticketDate.textContent = ticket.created;

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
  ticketFull.textContent = ticket.fullDesription;
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
