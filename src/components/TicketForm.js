import React, { useState, useEffect } from 'react';

function TicketForm({ onSubmit }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate an API request or add your actual API call here
    // For demonstration purposes, we'll use setTimeout
    setTimeout(() => {
      onSubmit({ title, description });
      setTitle('');
      setDescription('');
      setIsLoading(false);
    }, 2000); // Simulated 2-second delay
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
        <button type="submit" disabled={isLoading}>
          {isLoading ? 'Adding Ticket...' : 'Submit'}
        </button>
      </form>
    </div>
  );
}

export default TicketForm;
