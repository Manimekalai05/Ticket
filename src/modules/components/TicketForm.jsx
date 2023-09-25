import React from 'react';
import { useticketlist } from '../presentation/controller/useticketlist';

function TicketForm() {
  // Destructure the necessary functions and state from the custom hook
  const {
    submit, // Function to submit a ticket
    title,
    setTitle, // Title state and setter
    description,
    setDescription, // Description state and setter
  } = useticketlist();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Call the submit function from the custom hook
    submit(title, description);
    // Reset title and description fields after submission
    setTitle('');
    setDescription('');
  };

  return (
    <div>
      <h2>Submit a Ticket</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Title:</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Description:</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default TicketForm;
