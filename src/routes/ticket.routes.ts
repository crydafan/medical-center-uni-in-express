import { Router } from "express";
import { TicketController } from "../controllers/ticket.controller.ts";
import { TicketService } from "../services/ticket.service.ts";
import { TicketRepository } from "../repositories/ticket.repository.ts";
import { validateBearer } from "../middleware/auth.middleware.ts";

const ticketRepository = new TicketRepository();
const ticketService = new TicketService(ticketRepository);
const ticketController = new TicketController(ticketService);

export const ticketRouter: Router = Router();

ticketRouter.post(
  "/ticket",
  validateBearer,
  TicketController.prototype.createTicket.bind(ticketController),
);
