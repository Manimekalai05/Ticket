// src/entities/TicketEntity.test.ts

import { TicketEntity } from '../Ticket';

describe('TicketEntity', () => {
  it('should create a valid ticket entity', () => {
    const ticket = new TicketEntity(
      '1',
      'Sample Ticket',
      'Description',
      'Open'
    );

    // Test individual properties
    expect(ticket.id).toBe('1');
    expect(ticket.title).toBe('Sample Ticket');
    expect(ticket.description).toBe('Description');
    expect(ticket.status).toBe('Open');

    // Test isValid method
    expect(ticket.isValid()).toBe(true);
  });

  it('should create an invalid ticket entity with missing properties', () => {
    const ticket = new TicketEntity('', '', '', '');

    // Test individual properties
    expect(ticket.id).toBe('');
    expect(ticket.title).toBe('');
    expect(ticket.description).toBe('');
    expect(ticket.status).toBe('');

    // Test isValid method
    expect(ticket.isValid()).toBe(false);
  });

  // Add more test cases as needed for other business rules and validations
});
