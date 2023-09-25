import { Ticket, TicketEntity } from '../domain/entities/Ticket';
import { TicketRepository } from '../domain/repository/TicketRepository';
import { updateTicketData, ticketStore } from './store/TicketDataStore';

export class TicketResource implements TicketRepository {
  async getTicketById(ticketId: string): Promise<Ticket | null> {
    const ticketData = ticketStore.getState().ticketData[ticketId];

    const ticket: Ticket = {
      id: ticketData.id,
      title: ticketData.title,
      description: ticketData.description,
    };
    console.log('getTicket', ticket);
    return ticket;
  }

  async getAllTickets(): Promise<Ticket[]> {
    try {
      const ticketDataMap = ticketStore.getState().ticketData;
      const ticketArray = Object.values(ticketDataMap);

      const tickets: Ticket[] = ticketArray.map((ticketData) => ({
        id: ticketData.id,
        title: ticketData.title,
        description: ticketData.description,
        // Other fields mapping
      }));

      console.log('getAllTickets', tickets);
      return tickets;
    } catch (error) {
      // Handle errors
      console.error('Error while fetching all tickets:', error);
      throw error;
    }
  }

  async submitTicket(ticketData: Ticket): Promise<void> {
    console.log('submit', ticketData);
    ticketStore.dispatch(updateTicketData(ticketData));
    ticketData = ticketStore.getState().ticketData;
    console.log('submit1', ticketData);
  }

  subscribeToTicket(callback) {
    ticketStore.subscribe(() => {
      console.log('inside');
      const ticketData = ticketStore.getState().ticketData;
      console.log(ticketData);
      callback(ticketData);
    });
  }
}
