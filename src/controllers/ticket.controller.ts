import type { Request, Response } from "express";
import type { TicketService } from "../services/ticket.service.ts";

export class TicketController {
  constructor(private readonly ticketService: TicketService) {}

  async createTicket(request: Request, response: Response) {
    const newTicketNumber = this.ticketService.createTicket();
    response.send({
      ticketNumber: newTicketNumber,
    });
  }
}
