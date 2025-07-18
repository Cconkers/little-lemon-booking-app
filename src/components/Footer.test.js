import React from 'react';
import { render, screen } from '@testing-library/react';
import Footer from './Footer';

describe('Footer', () => {
  test('renders restaurant name and tagline', () => {
    render(<Footer />);
    expect(screen.getByText('Little Lemon')).toBeInTheDocument();
    expect(screen.getByText('Cocina mediterránea auténtica')).toBeInTheDocument();
  });

  test('renders contact information', () => {
    render(<Footer />);
    expect(screen.getByText('Contacto')).toBeInTheDocument();
    expect(screen.getByText(/calle mayor 123, madrid/i)).toBeInTheDocument();
    expect(screen.getByText(/\+34 91 123 45 67/)).toBeInTheDocument();
    expect(screen.getByText(/info@littlelemon.es/)).toBeInTheDocument();
  });

  test('renders opening hours', () => {
    render(<Footer />);
    expect(screen.getByText('Horarios')).toBeInTheDocument();
    expect(screen.getByText(/lunes - jueves: 12:00 - 22:00/i)).toBeInTheDocument();
    expect(screen.getByText(/viernes - sábado: 12:00 - 23:00/i)).toBeInTheDocument();
    expect(screen.getByText(/domingo: 12:00 - 21:00/i)).toBeInTheDocument();
  });

  test('renders copyright notice', () => {
    render(<Footer />);
    expect(screen.getByText(/© 2024 little lemon. todos los derechos reservados./i)).toBeInTheDocument();
  });

  test('has proper accessibility attributes', () => {
    render(<Footer />);
    expect(screen.getByRole('contentinfo')).toBeInTheDocument();
  });

  test('uses semantic HTML structure', () => {
    render(<Footer />);
    // Check for proper heading hierarchy
    const headings = screen.getAllByRole('heading', { level: 4 });
    expect(headings).toHaveLength(3);
    
    const headingTexts = headings.map(h => h.textContent);
    expect(headingTexts).toContain('Little Lemon');
    expect(headingTexts).toContain('Contacto');
    expect(headingTexts).toContain('Horarios');
  });
}); 