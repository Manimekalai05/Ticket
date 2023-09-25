import { useState } from 'react';
import TicketViewUsecase from '../../domain/services/TicketViewUsecase';
import TicketSubmissionUsecase from '../../domain/services/TicketSubmissionUsecase';
import { TicketResource } from '../../infrastructure/TicketResource';
import { TicketViewPresenter } from '../presenter/TicketPresenter';
import { TicketInputModel } from '../../domain/model/TicketInputModel';

const replyRepo = new TicketResource();
const ticketPresenter = new TicketViewPresenter();
const ticketServices = new TicketViewUsecase(replyRepo, ticketPresenter);
const ticketSubmissionService = new TicketSubmissionUsecase(
  replyRepo,
  ticketPresenter
);
export function useticketlist() {
  const [tickets, setTickets] = useState([]);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  replyRepo.subscribeToTicket(setTickets);

  const viewModel = ticketPresenter.viewModel;

  const submit = (ticketTitle, ticketDiscription) => {
    console.log('ravci');
    const input: TicketInputModel = {
      title: ticketTitle,
      description: ticketDiscription,
    };
    return ticketSubmissionService.submitTicket(input);
  };
  const retrieveTicketList = async () => {
    try {
      const ticketList = await ticketServices.getAllTickets();
      setTickets(ticketList);
    } catch (error) {
      // Handle the error
      console.error('Error retrieving tickets:', error);
    }
  };

  return {
    submit,
    tickets,
    title,
    setTitle,
    description,
    setDescription,
    retrieveTicketList,
  };
}
