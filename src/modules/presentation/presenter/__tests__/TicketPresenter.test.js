import { TicketViewPresenter } from '../TicketPresenter';

test('TicketPresenter fetches and updates ticket correctly', () => {
  const presenter = new TicketViewPresenter();
  const ticketData = {
    id: '123',
    title: 'Test Ticket',
    description: 'This is a test ticket.',
  };

  // Test fetchTicket method
  presenter.fetchTicket(ticketData);

  // Ensure viewModel is correctly updated
  expect(presenter.viewModel.id).toBe(ticketData.id);
  expect(presenter.viewModel.title).toBe(ticketData.title);
  expect(presenter.viewModel.description).toBe(ticketData.description);

  // Test fetchAllTickets method
  const ticketList = [
    ticketData,
    { id: '456', title: 'Another Ticket', description: 'Another test ticket.' },
  ];

  presenter.fetchAllTickets(ticketList);

  // Ensure viewModel is correctly updated with an array of tickets
  expect(Array.isArray(presenter.viewModel)).toBe(true);
  expect(presenter.viewModel.length).toBe(ticketList.length);
  expect(presenter.viewModel[0].title).toBe(ticketList[0].title);
  expect(presenter.viewModel[1].description).toBe(ticketList[1].description);
});
