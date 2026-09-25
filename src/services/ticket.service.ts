import type { TicketRepository } from "../repositories/ticket.repository.ts";

export class TicketService {
  constructor(private readonly ticketRepository: TicketRepository) {}

  async createTicket() {
    return this.ticketRepository.createTicket();
  }
}
