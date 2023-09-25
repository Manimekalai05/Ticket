import configureStore from 'redux-mock-store';
import { updateTicketData, ticketStore } from './store/TicketDataStore'; // Adjust the import path accordingly
import { TicketResource } from './TicketResource'; // Adjust the import path accordingly

const mockStore = configureStore([]);

describe('Ticket Repository Integration Test', () => {
  let store;
  let ticketRepository;

  beforeEach(() => {
    // Reset the Redux store for each test
    store = mockStore({});
    ticketRepository = new TicketResource();
  });

  it('should submit a ticket and update the Redux store', () => {
    const newTicket = {
      id: '123',
      title: 'Test Ticket',
      description: 'This is a test ticket.',
    };

    // Dispatch the action to update ticket data
    store.dispatch(updateTicketData(newTicket));

    // Verify that the Redux store has been updated correctly
    const actions = store.getActions();
    expect(actions).toEqual([
      {
        type: 'UPDATE_TICKET_DATA',
        payload: newTicket,
      },
    ]);

    // You can add more assertions or test other repository methods
  });

  // Add more integration test cases for other repository methods if needed
});
