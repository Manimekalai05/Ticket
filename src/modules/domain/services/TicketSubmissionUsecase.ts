// src/usecases/TicketSubmissionUsecase.ts

import { TicketRepository } from '../repository/TicketRepository';
import { TicketInputModel } from '../model/TicketInputModel';
import { TicketPresenter } from '../repository/TicketPresenter';

export default class TicketSubmissionUsecase {
  private ticketRepository: TicketRepository;
  private ticketNotifier: TicketPresenter;

  constructor(
    ticketRepository: TicketRepository,
    ticketNotifier: TicketPresenter
  ) {
    this.ticketRepository = ticketRepository;
    this.ticketNotifier = ticketNotifier;
  }

  async submitTicket(inputModel: TicketInputModel): Promise<void> {
    console.log('ravc13');
    try {
      // Validation and business logic here if needed

      // Convert input model to the format expected by the Gateway
      const formattedData = {
        id: generateTicketId(),
        title: inputModel.title,
        description: inputModel.description,
        // Other fields mapping
      };
      console.log('submitusecase', formattedData);
      //onsole.log(this.ticketRepository.submitTicket);
      // Call the Gateway to submit the ticket
      await this.ticketRepository.submitTicket(formattedData);
    } catch (error) {
      // Handle errors
      console.error('Error while submitting the ticket:', error);
      throw error;
    }
  }
}
function generateTicketId(): string {
  const randomId = Math.random().toString(36).substr(2, 9); // Generate a random alphanumeric ID
  return randomId;
}
