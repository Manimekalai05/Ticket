import { createStore } from 'redux';

// Define the initial state and the reducer
const initialState = {
  ticketData: [], // Initialize ticketData as an empty array
};

function ticketReducer(state = initialState, action) {
  switch (action.type) {
    case 'UPDATE_TICKET_DATA':
      // Add the new ticket object to the existing array
      return {
        ...state,
        ticketData: [...state.ticketData, action.payload],
      };
    default:
      return state;
  }
}

// Create the Redux store
export const ticketStore = createStore(ticketReducer);

// Define an action to update ticket data in the store with a single ticket object
export function updateTicketData(ticketData) {
  return {
    type: 'UPDATE_TICKET_DATA',
    payload: ticketData,
  };
}
