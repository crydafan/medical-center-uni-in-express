import { redisClient } from "../lib/redis-client.ts";

export class TicketRepository {
  private static readonly TICKET_KEY = "ticket";

  constructor() {}

  async createTicket() {
    const ticketNumber = await redisClient.incr(TicketRepository.TICKET_KEY);
    return ticketNumber;
  }
}
