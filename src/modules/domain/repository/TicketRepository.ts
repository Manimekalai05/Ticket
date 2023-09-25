// src/gateways/TicketGateway.ts

import { Ticket } from '../entities/Ticket';

export interface TicketRepository {
  getTicketById(ticketId: string): Promise<Ticket | null>;
  submitTicket(ticketData: Ticket): Promise<void>;
  getAllTickets(): Promise<Ticket[] | null>;
}
