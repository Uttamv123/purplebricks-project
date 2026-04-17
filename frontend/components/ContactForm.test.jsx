import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ContactForm from './ContactForm';
import * as api from '../lib/api';

jest.mock('../lib/api');

describe('ContactForm', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  // Requirement 8.1 — renders all three fields
  it('renders name, email, and message fields', () => {
    render(<ContactForm propertyId={1} />);
    expect(screen.getByLabelText(/name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/message/i)).toBeInTheDocument();
  });

  // Requirement 8.5 — empty fields show inline errors, no API call
  it('shows inline errors for all empty fields and does not call API', async () => {
    render(<ContactForm propertyId={1} />);
    fireEvent.click(screen.getByRole('button', { name: /send inquiry/i }));

    expect(await screen.findByText(/name is required/i)).toBeInTheDocument();
    expect(screen.getByText(/email is required/i)).toBeInTheDocument();
    expect(screen.getByText(/message is required/i)).toBeInTheDocument();
    expect(api.submitInquiry).not.toHaveBeenCalled();
  });

  // Requirement 8.6 — invalid email shows inline error, no API call
  it('shows inline error for invalid email and does not call API', async () => {
    render(<ContactForm propertyId={1} />);
    await userEvent.type(screen.getByLabelText(/name/i), 'Alice');
    await userEvent.type(screen.getByLabelText(/email/i), 'not-an-email');
    await userEvent.type(screen.getByLabelText(/message/i), 'Hello');
    fireEvent.click(screen.getByRole('button', { name: /send inquiry/i }));

    expect(await screen.findByText(/valid email/i)).toBeInTheDocument();
    expect(api.submitInquiry).not.toHaveBeenCalled();
  });

  // Requirement 8.2 — submits correct payload
  it('calls submitInquiry with correct payload on valid submit', async () => {
    api.submitInquiry.mockResolvedValue({ id: 1 });
    render(<ContactForm propertyId={42} />);

    await userEvent.type(screen.getByLabelText(/name/i), 'Alice');
    await userEvent.type(screen.getByLabelText(/email/i), 'alice@example.com');
    await userEvent.type(screen.getByLabelText(/message/i), 'Interested!');
    fireEvent.click(screen.getByRole('button', { name: /send inquiry/i }));

    await waitFor(() =>
      expect(api.submitInquiry).toHaveBeenCalledWith({
        propertyId: 42,
        name: 'Alice',
        email: 'alice@example.com',
        message: 'Interested!',
      })
    );
  });

  // Requirement 8.3 — success banner shown and fields reset
  it('shows success banner and resets fields on 201', async () => {
    api.submitInquiry.mockResolvedValue({ id: 1 });
    render(<ContactForm propertyId={1} />);

    await userEvent.type(screen.getByLabelText(/name/i), 'Alice');
    await userEvent.type(screen.getByLabelText(/email/i), 'alice@example.com');
    await userEvent.type(screen.getByLabelText(/message/i), 'Hello');
    fireEvent.click(screen.getByRole('button', { name: /send inquiry/i }));

    expect(await screen.findByText(/sent successfully/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/name/i)).toHaveValue('');
    expect(screen.getByLabelText(/email/i)).toHaveValue('');
    expect(screen.getByLabelText(/message/i)).toHaveValue('');
  });

  // Requirement 8.4 — API error details displayed
  it('displays API error details on failure', async () => {
    const err = new Error('Property does not exist');
    err.body = { error: 'Property does not exist' };
    api.submitInquiry.mockRejectedValue(err);

    render(<ContactForm propertyId={999} />);
    await userEvent.type(screen.getByLabelText(/name/i), 'Bob');
    await userEvent.type(screen.getByLabelText(/email/i), 'bob@example.com');
    await userEvent.type(screen.getByLabelText(/message/i), 'Hi');
    fireEvent.click(screen.getByRole('button', { name: /send inquiry/i }));

    expect(await screen.findByText(/property does not exist/i)).toBeInTheDocument();
  });
});
