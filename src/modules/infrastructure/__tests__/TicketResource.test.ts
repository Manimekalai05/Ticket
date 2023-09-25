import TicketResource from '../TicketResource';
import { Ticket } from '../../domain/entities/Ticket';
import { updateTicketData, ticketStore } from './store/TicketDataStore';

// Create mock implementations of ticketStore and updateTicketData
const mockTicketStore = {
  getState: jest.fn(),
  dispatch: jest.fn(),
  subscribe: jest.fn(),
};

const mockUpdateTicketData = jest.fn();

// Mock the ticketData in the store
const mockTicketData = {
  ticket1: {
    id: 'ticket1',
    title: 'Ticket 1',
    description: 'Description 1',
  },
  ticket2: {
    id: 'ticket2',
    title: 'Ticket 2',
    description: 'Description 2',
  },
};

// Replace the real ticketStore and updateTicketData with mocks
jest.mock('./store/TicketDataStore', () => ({
  ticketStore: mockTicketStore,
  updateTicketData: mockUpdateTicketData,
}));

describe('TicketResource', () => {
  let ticketResource: TicketResource;

  beforeEach(() => {
    // Reset mock functions and create a new instance of TicketResource before each test
    jest.clearAllMocks();
    ticketResource = new TicketResource();
  });

  it('should get a ticket by ID', async () => {
    // Arrange
    const ticketId = 'ticket1';
    mockTicketStore.getState.mockReturnValue({ ticketData: mockTicketData });

    // Act
    const result = await ticketResource.getTicketById(ticketId);

    // Assert
    expect(result).toEqual({
      id: 'ticket1',
      title: 'Ticket 1',
      description: 'Description 1',
    });
  });

  it('should get all tickets', async () => {
    // Arrange
    mockTicketStore.getState.mockReturnValue({ ticketData: mockTicketData });

    // Act
    const result = await ticketResource.getAllTickets();

    // Assert
    expect(result).toEqual([
      {
        id: 'ticket1',
        title: 'Ticket 1',
        description: 'Description 1',
      },
      {
        id: 'ticket2',
        title: 'Ticket 2',
        description: 'Description 2',
      },
    ]);
  });

  it('should submit a ticket', async () => {
    // Arrange
    const ticketData: Ticket = {
      id: 'ticket3',
      title: 'Ticket 3',
      description: 'Description 3',
    };

    // Act
    await ticketResource.submitTicket(ticketData);

    // Assert
    expect(mockUpdateTicketData).toHaveBeenCalledWith(ticketData);
  });

  it('should subscribe to ticket updates', () => {
    // Arrange
    const callback = jest.fn();

    // Act
    ticketResource.subscribeToTicket(callback);

    // Assert
    expect(mockTicketStore.subscribe).toHaveBeenCalledWith(
      expect.any(Function)
    );
    expect(callback).not.toHaveBeenCalled();

    // Simulate a state change
    mockTicketStore.subscribe.mock.calls[0][0]();

    // Callback should have been called with ticket data
    expect(callback).toHaveBeenCalledWith(mockTicketData);
  });
});
