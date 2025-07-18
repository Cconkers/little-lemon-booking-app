import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('App', () => {
  test('renders all main components', () => {
    render(<App />);
    
    // Check for Header
    expect(screen.getByRole('banner')).toBeInTheDocument();
    expect(screen.getByText('Little Lemon')).toBeInTheDocument();
    
    // Check for Hero section
    expect(screen.getByText('Madrid')).toBeInTheDocument();
    expect(screen.getByText(/somos un restaurante familiar mediterráneo/i)).toBeInTheDocument();
    
    // Check for Booking form
    expect(screen.getByText('Reservar Mesa')).toBeInTheDocument();
    expect(screen.getByLabelText(/nombre completo/i)).toBeInTheDocument();
    
    // Check for Footer
    expect(screen.getByRole('contentinfo')).toBeInTheDocument();
    expect(screen.getByText('Contacto')).toBeInTheDocument();
  });

  test('has proper semantic HTML structure', () => {
    render(<App />);
    
    // Check for main element
    expect(screen.getByRole('main')).toBeInTheDocument();
    
    // Check for proper page structure
    const banners = screen.getAllByRole('banner');
    expect(banners).toHaveLength(2); // header and hero section
    expect(screen.getByRole('main')).toBeInTheDocument();    // main content
    expect(screen.getByRole('contentinfo')).toBeInTheDocument(); // footer
  });

  test('navigation links work correctly', () => {
    render(<App />);
    
    // Check navigation links are present
    expect(screen.getByRole('menuitem', { name: /inicio/i })).toHaveAttribute('href', '#home');
    expect(screen.getByRole('menuitem', { name: /reservar/i })).toHaveAttribute('href', '#booking');
    
    // Check hero button links to booking section
    expect(screen.getByRole('button', { name: /reservar mesa/i })).toHaveAttribute('href', '#booking');
  });
});
