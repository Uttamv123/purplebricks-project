import { render, screen } from '@testing-library/react';
import ErrorMessage from './ErrorMessage';

describe('ErrorMessage', () => {
  it('displays the provided message', () => {
    render(<ErrorMessage message="Property not found" />);
    expect(screen.getByRole('alert')).toHaveTextContent('Property not found');
  });

  it('falls back to generic message when no message prop is given', () => {
    render(<ErrorMessage />);
    expect(screen.getByRole('alert')).toHaveTextContent('Something went wrong');
  });

  it('falls back to generic message when message is empty string', () => {
    render(<ErrorMessage message="" />);
    expect(screen.getByRole('alert')).toHaveTextContent('Something went wrong');
  });

  it('renders with role="alert"', () => {
    render(<ErrorMessage message="Error" />);
    expect(screen.getByRole('alert')).toBeInTheDocument();
  });

  it('displays the error field from an API response body', () => {
    const apiError = 'Internal server error';
    render(<ErrorMessage message={apiError} />);
    expect(screen.getByRole('alert')).toHaveTextContent(apiError);
  });
});
