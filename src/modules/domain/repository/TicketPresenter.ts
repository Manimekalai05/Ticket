import { TicketOutputModel } from '../model/TicketOutputModel';

export interface TicketPresenter {
  fetchTicket(ticket: TicketOutputModel): Promise<void>;
  submitTicket(ticket: TicketOutputModel): Promise<void>;
}
