import { Router } from "express";
import { TicketController } from "../controllers/ticket.controller.ts";
import { TicketService } from "../services/ticket.service.ts";

const ticketService = new TicketService();
const ticketController = new TicketController(ticketService);

export const ticketRouter: Router = Router();

ticketRouter.post(
  "/ticket",
  TicketController.prototype.createTicket.bind(ticketController),
);
