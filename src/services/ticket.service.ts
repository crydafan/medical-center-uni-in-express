export class TicketService {
  private ticketNumber = 1;

  createTicket() {
    return this.ticketNumber++;
  }
}
