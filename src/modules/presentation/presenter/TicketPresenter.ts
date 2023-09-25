import { TicketPresenter } from '../../domain/repository/TicketPresenter';
import { TicketOutputModel } from '../../domain/model/TicketOutputModel';
import TicketViewModel from '../viewmodel/TicketViewModel';

export class TicketViewPresenter implements TicketPresenter {
  public viewModel: TicketViewModel;
  private submitTicketListner;

  constructor() {
    this.viewModel = null;
  }
  async fetchTicket(ticket: TicketOutputModel): Promise<void> {
    this.viewModel = new TicketViewModel(
      ticket.id,
      ticket.title,
      ticket.description
    );
  }

  async fetchAllTickets(tickets: TicketOutputModel[]): Promise<void> {
    // Map the array of ticket output models to view models
    this.viewModel = tickets.map(
      (ticket) =>
        new TicketViewModel(
          ticket.id,
          ticket.title,
          ticket.description
          // Map other fields as needed
        )
    );
  }

  async submitTicket(ticket: TicketOutputModel): Promise<void> {}
}
