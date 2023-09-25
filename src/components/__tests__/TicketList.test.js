import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import TicketList from './TicketList';

test('TicketList toggles accordion correctly', () => {
  const tickets = [
    { title: 'Ticket 1', description: 'Description 1' },
    { title: 'Ticket 2', description: 'Description 2' },
  ];

  const { getByText } = render(<TicketList tickets={tickets} />);

  // Initially, no accordion content should be visible
  expect(getByText('Description 1')).not.toBeVisible();
  expect(getByText('Description 2')).not.toBeVisible();

  // Click the first accordion button
  fireEvent.click(getByText('Ticket 1'));

  // The first accordion content should be visible, and the second one should be hidden
  expect(getByText('Description 1')).toBeVisible();
  expect(getByText('Description 2')).not.toBeVisible();

  // Click the first accordion button again to close it
  fireEvent.click(getByText('Ticket 1'));

  // Both accordion contents should be hidden
  expect(getByText('Description 1')).not.toBeVisible();
  expect(getByText('Description 2')).not.toBeVisible();
});
