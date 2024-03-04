export default function editTicket(currentTicket, ticket) {
  currentTicket.querySelector(".ticketName").textContent =
    ticket.shortDescription;
  currentTicket.querySelector(".fullTicket").textContent =
    ticket.fullDescription;
}
