import { renderHook, act } from '@testing-library/react-hooks';
import { useticketlist } from '../useticketlist';

test('useticketlist hook initializes correctly', () => {
  const { result } = renderHook(() => useticketlist());

  // Initial values
  expect(result.current.tickets).toEqual([]);
  expect(result.current.title).toBe('');
  expect(result.current.description).toBe('');

  // Simulate setting values
  act(() => {
    result.current.setTitle('Test Title');
    result.current.setDescription('Test Description');
  });

  // Updated values
  expect(result.current.title).toBe('Test Title');
  expect(result.current.description).toBe('Test Description');
});
