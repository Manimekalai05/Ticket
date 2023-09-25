import React from 'react';
import { render, fireEvent, waitFor, screen } from '@testing-library/react';
import TicketForm from './TicketForm';

test('TicketForm submits data correctly', async () => {
  const mockOnSubmit = jest.fn();

  const { getByLabelText, getByText, getByTestId } = render(
    <TicketForm onSubmit={mockOnSubmit} />
  );

  // Fill in the form inputs
  fireEvent.change(getByLabelText('Title:'), {
    target: { value: 'Test Title' },
  });
  fireEvent.change(getByLabelText('Description:'), {
    target: { value: 'Test Description' },
  });

  // Submit the form
  fireEvent.submit(getByTestId('ticket-form'));

  // Wait for the form submission to complete (2-second delay)
  await waitFor(() =>
    expect(mockOnSubmit).toHaveBeenCalledWith({
      title: 'Test Title',
      description: 'Test Description',
    })
  );

  // Ensure that the inputs are cleared after submission
  expect(getByLabelText('Title:')).toHaveValue('');
  expect(getByLabelText('Description:')).toHaveValue('');
});
