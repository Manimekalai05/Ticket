// src/usecases/TicketViewUsecase.ts

import { TicketRepository } from '../repository/TicketRepository';
import { TicketOutputModel } from '../model/TicketOutputModel';
import { TicketPresenter } from '../repository/TicketPresenter';

export default class TicketViewUsecase {
  private ticketRepo: TicketRepository;
  private ticketPresenter: TicketPresenter;

  constructor(
    ticketGateway: TicketRepository,
    ticketPresenter: TicketPresenter
  ) {
    this.ticketRepo = ticketGateway;
    this.ticketPresenter = ticketPresenter;
  }

  async viewTicket(ticketId: string): Promise<TicketOutputModel | null> {
    try {
      // Fetch ticket data from the Gateway
      const ticketData = await this.ticketRepo.getTicketById(ticketId);

      if (ticketData) {
        // Map the ticket data to the output model
        const outputModel: TicketOutputModel = {
          id: ticketData.id,
          title: ticketData.title,
          description: ticketData.description,
          // Other fields mapping
        };

        this.ticketPresenter.fetchTicket(outputModel);

        return outputModel;
      } else {
        // Handle the case where the ticket data is not found
        return null;
      }
    } catch (error) {
      // Handle errors
      console.error('Error while viewing the ticket:', error);
      throw error;
    }
  }

  async getAllTickets(): Promise<TicketOutputModel[]> {
    try {
      // Fetch all ticket data from the Gateway
      const ticketDataArray = await this.ticketRepo.getAllTickets();
  
      // Map the ticket data to output models
      const outputModels: TicketOutputModel[] = ticketDataArray.map((ticketData) => ({
        id: ticketData.id,
        title: ticketData.title,
        description: ticketData.description,
        // Other fields mapping
      }));
  
      // Assuming you have a presenter to handle multiple tickets
      this.ticketPresenter.fetchAllTickets(outputModels);
  
      return outputModels;
    } catch (error) {
      // Handle errors
      console.error('Error while fetching all tickets:', error);
      throw error;
    }
  }
  
}
