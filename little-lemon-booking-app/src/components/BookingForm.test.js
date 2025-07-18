import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import BookingForm from './BookingForm';

describe('BookingForm', () => {
  test('renders all form fields', () => {
    render(<BookingForm />);
    expect(screen.getByLabelText(/nombre completo/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/teléfono/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/fecha/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/hora/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/número de comensales/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/ocasión/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/solicitudes especiales/i)).toBeInTheDocument();
  });

  test('shows validation errors for empty required fields', async () => {
    render(<BookingForm />);
    const user = userEvent.setup();
    const submitButton = screen.getByRole('button', { name: /confirmar reserva/i });
    
    await user.click(submitButton);

    await waitFor(() => {
      expect(screen.getByText(/el nombre es obligatorio/i)).toBeInTheDocument();
    });
    expect(screen.getByText(/el email es obligatorio/i)).toBeInTheDocument();
    expect(screen.getByText(/el teléfono es obligatorio/i)).toBeInTheDocument();
    expect(screen.getByText(/la fecha es obligatoria/i)).toBeInTheDocument();
    expect(screen.getByText(/la hora es obligatoria/i)).toBeInTheDocument();
  });

  test('validates email format', async () => {
    render(<BookingForm />);
    const user = userEvent.setup();
    const emailInput = screen.getByLabelText(/email/i);
    const submitButton = screen.getByRole('button', { name: /confirmar reserva/i });

    await user.type(emailInput, 'invalid-email');
    await user.click(submitButton);

    await waitFor(() => {
      expect(screen.getByText(/el email no tiene un formato válido/i)).toBeInTheDocument();
    });
  });

  test('validates phone format', async () => {
    render(<BookingForm />);
    const user = userEvent.setup();
    const phoneInput = screen.getByLabelText(/teléfono/i);
    const submitButton = screen.getByRole('button', { name: /confirmar reserva/i });

    await user.type(phoneInput, '123');
    await user.click(submitButton);

    await waitFor(() => {
      expect(screen.getByText(/el teléfono no tiene un formato válido/i)).toBeInTheDocument();
    });
  });

  test('validates date is not in the past', async () => {
    render(<BookingForm />);
    const user = userEvent.setup();
    const dateInput = screen.getByLabelText(/fecha/i);
    const submitButton = screen.getByRole('button', { name: /confirmar reserva/i });

    // Fecha de ayer
    const yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);
    const yesterdayString = yesterday.toISOString().split('T')[0];

    await user.type(dateInput, yesterdayString);
    await user.click(submitButton);

    await waitFor(() => {
      expect(screen.getByText(/la fecha no puede ser anterior a hoy/i)).toBeInTheDocument();
    });
  });

  test('validates number of guests range', async () => {
    render(<BookingForm />);
    const user = userEvent.setup();
    const guestsInput = screen.getByLabelText(/número de comensales/i);
    const submitButton = screen.getByRole('button', { name: /confirmar reserva/i });

    await user.clear(guestsInput);
    await user.type(guestsInput, '0');
    await user.click(submitButton);

    await waitFor(() => {
      expect(screen.getByText(/el número de comensales debe ser entre 1 y 12/i)).toBeInTheDocument();
    });
  });

  test('clears error when user starts typing', async () => {
    render(<BookingForm />);
    const user = userEvent.setup();
    const nameInput = screen.getByLabelText(/nombre completo/i);
    const submitButton = screen.getByRole('button', { name: /confirmar reserva/i });

    // Trigger validation error
    await user.click(submitButton);
    await waitFor(() => {
      expect(screen.getByText(/el nombre es obligatorio/i)).toBeInTheDocument();
    });

    // Start typing to clear error
    await user.type(nameInput, 'Juan');
    expect(screen.queryByText(/el nombre es obligatorio/i)).not.toBeInTheDocument();
  });

  test('submits form with valid data', async () => {
    render(<BookingForm />);
    const user = userEvent.setup();
    const consoleSpy = jest.spyOn(console, 'log').mockImplementation(() => {});
    
    // Fill all required fields
    await user.type(screen.getByLabelText(/nombre completo/i), 'Juan Pérez');
    await user.type(screen.getByLabelText(/email/i), 'juan@email.com');
    await user.type(screen.getByLabelText(/teléfono/i), '+34 123 456 789');
    
    // Fecha de mañana
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    const tomorrowString = tomorrow.toISOString().split('T')[0];
    await user.type(screen.getByLabelText(/fecha/i), tomorrowString);
    
    await user.selectOptions(screen.getByLabelText(/hora/i), '19:00');
    await user.clear(screen.getByLabelText(/número de comensales/i));
    await user.type(screen.getByLabelText(/número de comensales/i), '2');

    const submitButton = screen.getByRole('button', { name: /confirmar reserva/i });
    await user.click(submitButton);

    await waitFor(() => {
      expect(screen.getByText(/¡reserva confirmada!/i)).toBeInTheDocument();
      expect(screen.getByText(/gracias juan pérez/i)).toBeInTheDocument();
    });

    consoleSpy.mockRestore();
  });

  test('shows booking confirmation with correct details', async () => {
    render(<BookingForm />);
    const user = userEvent.setup();
    const consoleSpy = jest.spyOn(console, 'log').mockImplementation(() => {});
    
    // Fill form with specific data
    await user.type(screen.getByLabelText(/nombre completo/i), 'María González');
    await user.type(screen.getByLabelText(/email/i), 'maria@email.com');
    await user.type(screen.getByLabelText(/teléfono/i), '+34 987 654 321');
    
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    const tomorrowString = tomorrow.toISOString().split('T')[0];
    await user.type(screen.getByLabelText(/fecha/i), tomorrowString);
    
    await user.selectOptions(screen.getByLabelText(/hora/i), '20:30');
    await user.clear(screen.getByLabelText(/número de comensales/i));
    await user.type(screen.getByLabelText(/número de comensales/i), '4');
    await user.selectOptions(screen.getByLabelText(/ocasión/i), 'Cumpleaños');

    const submitButton = screen.getByRole('button', { name: /confirmar reserva/i });
    await user.click(submitButton);

    await waitFor(() => {
      expect(screen.getByText(/fecha:/i)).toBeInTheDocument();
      expect(screen.getByText(/hora:/i)).toBeInTheDocument();
      expect(screen.getByText(/comensales:/i)).toBeInTheDocument();
      expect(screen.getByText(/ocasión:/i)).toBeInTheDocument();
      expect(screen.getByText(/20:30/)).toBeInTheDocument();
      expect(screen.getByText(/4/)).toBeInTheDocument();
      expect(screen.getByText(/cumpleaños/i)).toBeInTheDocument();
    });

    consoleSpy.mockRestore();
  });

  test('allows creating new booking after confirmation', async () => {
    render(<BookingForm />);
    const user = userEvent.setup();
    const consoleSpy = jest.spyOn(console, 'log').mockImplementation(() => {});
    
    // Fill and submit form
    await user.type(screen.getByLabelText(/nombre completo/i), 'Test User');
    await user.type(screen.getByLabelText(/email/i), 'test@email.com');
    await user.type(screen.getByLabelText(/teléfono/i), '+34 123 456 789');
    
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    const tomorrowString = tomorrow.toISOString().split('T')[0];
    await user.type(screen.getByLabelText(/fecha/i), tomorrowString);
    
    await user.selectOptions(screen.getByLabelText(/hora/i), '19:00');

    const submitButton = screen.getByRole('button', { name: /confirmar reserva/i });
    await user.click(submitButton);

    await waitFor(() => {
      expect(screen.getByText(/¡reserva confirmada!/i)).toBeInTheDocument();
    });

    // Click new booking button
    const newBookingButton = screen.getByRole('button', { name: /hacer nueva reserva/i });
    await user.click(newBookingButton);

    // Should return to form
    expect(screen.getByLabelText(/nombre completo/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/email/i)).toBeInTheDocument();

    consoleSpy.mockRestore();
  });

  test('has proper accessibility attributes', () => {
    render(<BookingForm />);
    // Check for required field indicators
    expect(screen.getByLabelText(/nombre completo/i)).toHaveAttribute('aria-required', 'true');
    expect(screen.getByLabelText(/email/i)).toHaveAttribute('aria-required', 'true');
    expect(screen.getByLabelText(/teléfono/i)).toHaveAttribute('aria-required', 'true');
    expect(screen.getByLabelText(/fecha/i)).toHaveAttribute('aria-required', 'true');
    expect(screen.getByLabelText(/hora/i)).toHaveAttribute('aria-required', 'true');
    expect(screen.getByLabelText(/número de comensales/i)).toHaveAttribute('aria-required', 'true');
    
    // Check for proper form structure
    expect(screen.getByRole('button', { name: /confirmar reserva/i })).toBeInTheDocument();
    expect(screen.getByRole('form')).toBeInTheDocument();
  });
}); 