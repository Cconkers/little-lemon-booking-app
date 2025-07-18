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
    const submitButton = screen.getByRole('button', { name: /confirmar reserva/i });
    
    fireEvent.click(submitButton);

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
    const emailInput = screen.getByLabelText(/email/i);
    const submitButton = screen.getByRole('button', { name: /confirmar reserva/i });

    fireEvent.change(emailInput, { target: { value: 'invalid-email' } });
    fireEvent.click(submitButton);

    await waitFor(() => {
      expect(screen.getByText(/el email no tiene un formato válido/i)).toBeInTheDocument();
    });
  });

  test('validates phone format', async () => {
    render(<BookingForm />);
    const phoneInput = screen.getByLabelText(/teléfono/i);
    const submitButton = screen.getByRole('button', { name: /confirmar reserva/i });

    fireEvent.change(phoneInput, { target: { value: '123' } });
    fireEvent.click(submitButton);

    await waitFor(() => {
      expect(screen.getByText(/el teléfono no tiene un formato válido/i)).toBeInTheDocument();
    });
  });

  test('validates date is not in the past', async () => {
    render(<BookingForm />);
    const dateInput = screen.getByLabelText(/fecha/i);
    const submitButton = screen.getByRole('button', { name: /confirmar reserva/i });

    // Fecha de ayer
    const yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);
    const yesterdayString = yesterday.toISOString().split('T')[0];

    fireEvent.change(dateInput, { target: { value: yesterdayString } });
    fireEvent.click(submitButton);

    await waitFor(() => {
      expect(screen.getByText(/la fecha no puede ser anterior a hoy/i)).toBeInTheDocument();
    });
  });

  test('validates number of guests range', async () => {
    render(<BookingForm />);
    const guestsInput = screen.getByLabelText(/número de comensales/i);
    const submitButton = screen.getByRole('button', { name: /confirmar reserva/i });

    fireEvent.change(guestsInput, { target: { value: '0' } });
    fireEvent.click(submitButton);

    await waitFor(() => {
      expect(screen.getByText(/el número de comensales debe ser entre 1 y 12/i)).toBeInTheDocument();
    });
  });

  test('clears error when user starts typing', async () => {
    render(<BookingForm />);
    const nameInput = screen.getByLabelText(/nombre completo/i);
    const submitButton = screen.getByRole('button', { name: /confirmar reserva/i });

    // Trigger validation error
    fireEvent.click(submitButton);
    await waitFor(() => {
      expect(screen.getByText(/el nombre es obligatorio/i)).toBeInTheDocument();
    });

    // Start typing to clear error
    fireEvent.change(nameInput, { target: { value: 'Juan' } });
    expect(screen.queryByText(/el nombre es obligatorio/i)).not.toBeInTheDocument();
  });

  test('submits form with valid data', async () => {
    render(<BookingForm />);
    const consoleSpy = jest.spyOn(console, 'log').mockImplementation(() => {});
    
    // Fill all required fields
    fireEvent.change(screen.getByLabelText(/nombre completo/i), { target: { value: 'Juan Pérez' } });
    fireEvent.change(screen.getByLabelText(/email/i), { target: { value: 'juan@email.com' } });
    fireEvent.change(screen.getByLabelText(/teléfono/i), { target: { value: '+34 123 456 789' } });
    
    // Fecha de mañana
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    const tomorrowString = tomorrow.toISOString().split('T')[0];
    fireEvent.change(screen.getByLabelText(/fecha/i), { target: { value: tomorrowString } });
    
    fireEvent.change(screen.getByLabelText(/hora/i), { target: { value: '19:00' } });
    fireEvent.change(screen.getByLabelText(/número de comensales/i), { target: { value: '2' } });

    const submitButton = screen.getByRole('button', { name: /confirmar reserva/i });
    fireEvent.click(submitButton);

    await waitFor(() => {
      expect(screen.getByText(/¡reserva confirmada!/i)).toBeInTheDocument();
    });

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
    const form = screen.getByRole('form');
    expect(form).toBeInTheDocument();
  });
}); 