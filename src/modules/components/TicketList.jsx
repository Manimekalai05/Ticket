import React, { useState } from 'react';

function TicketList({ tickets }) {
  console.log('List', tickets);
  console.log('Is tickets an array?', Array.isArray(tickets));

  if (!Array.isArray(tickets)) {
    return <p>No tickets available</p>;
  }
  return (
    <div>
      <h2>View Tickets</h2>
      <ul>
        {tickets.map((ticket, index) => (
          <li key={index}>
            <div>
              <p>{ticket.title}</p>
              <p>{ticket.description}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TicketList;
