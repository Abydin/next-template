import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';

import { Button } from '../components/atoms/Button';

describe('Button Component', () => {
  test('renders the button with the correct label', () => {
    render(<Button label="Click Me" onClick={() => {}} />);

    // Check if the button is rendered with the correct label
    const buttonElement = screen.getByText(/Click Me/i);
    expect(buttonElement).toBeInTheDocument();
  });

  test('calls the onClick handler when clicked', () => {
    const handleClick = jest.fn();

    render(<Button label="Click Me" onClick={handleClick} />);

    // Find the button and simulate a click
    const buttonElement = screen.getByText(/Click Me/i);
    fireEvent.click(buttonElement);

    // Check if the onClick handler was called once
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
