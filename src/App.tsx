import React, { useState } from 'react';
import { FC } from 'react';
import './App.css';
import TicketForm from './modules/components/TicketForm';
import TicketList from './modules/components/TicketList';
import { useticketlist } from './modules/presentation/controller/useticketlist';

const App = () => {
  const { tickets, addTicket } = useticketlist();
  return (
    <div className="App">
      <h1>Ticket System</h1>
      <TicketForm />
      <TicketList tickets={tickets} />
    </div>
  );
};
export default App;

// export const App: FC<{ name: string }> = ({ name }) => {
//   const [tickets, setTickets] = useState([]);
//   const addTicket = (ticket) => {
//     setTickets([...tickets, ticket]);
//   };

//   return (
//     <div className="App">
//       <h1>Ticket System</h1>
//       <TicketForm onSubmit={addTicket} />
//       <TicketList tickets={tickets} />
//     </div>
//   );
// };

// import { FC } from 'react';
// import Todo from './Todo';
// import './style.css';

// export const App: FC<{ name: string }> = ({ name }) => {
//   return (
//     <div>
//       <Todo />
//     </div>
//   );
// };
