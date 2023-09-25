import React, { useState } from 'react';

function TicketList({ tickets }) {
  const [activeIndex, setActiveIndex] = useState(-1);

  const toggleAccordion = (index) => {
    console.log(activeIndex, ' ', index);
    setActiveIndex(index === activeIndex ? -1 : index);
  };

  return (
    <div>
      <h2>View Tickets</h2>
      <ul>
        {tickets.map((ticket, index) => (
          <li key={index}>
            <button onClick={() => toggleAccordion(index)}>
              <strong>{ticket.title}</strong>
            </button>
            {activeIndex === index && (
              <div>
                <p>{ticket.description}</p>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TicketList;
