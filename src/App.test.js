import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('App', () => {
  test('renders all main components', () => {
    render(<App />);
    
    // Check for Header and Hero sections (both have role="banner")
    const banners = screen.getAllByRole('banner');
    expect(banners).toHaveLength(2);
    
    // Check for specific Little Lemon instances
    expect(screen.getByRole('heading', { level: 1, name: /little lemon/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { level: 2, name: /little lemon/i })).toBeInTheDocument();
    
    // Check for Hero section
    expect(screen.getByText('Madrid')).toBeInTheDocument();
    expect(screen.getByText(/somos un restaurante familiar mediterráneo/i)).toBeInTheDocument();
    
    // Check for Menu section
    expect(screen.getByText('Nuestro Menú')).toBeInTheDocument();
    
    // Check for Booking form
    expect(screen.getByRole('heading', { level: 2, name: /reservar mesa/i })).toBeInTheDocument();
    expect(screen.getByLabelText(/nombre completo/i)).toBeInTheDocument();
    
    // Check for Footer with contact ID
    const footer = screen.getByRole('contentinfo');
    expect(footer).toBeInTheDocument();
    expect(footer).toHaveAttribute('id', 'contact');
    
    // Check for specific footer heading
    const footerHeading = screen.getByRole('heading', { level: 4, name: /contacto/i });
    expect(footerHeading).toBeInTheDocument();
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
    expect(screen.getByRole('menuitem', { name: /contacto/i })).toHaveAttribute('href', '#contact');
    
    // Check hero button links to booking section
    expect(screen.getByRole('button', { name: /ir a la sección de reservas/i })).toHaveAttribute('href', '#booking');
  });

  test('footer email is clickeable with mailto', () => {
    render(<App />);
    
    // Check that email link exists and has mailto
    const emailLink = screen.getByRole('link', { name: /info@littlelemon.es/i });
    expect(emailLink).toBeInTheDocument();
    expect(emailLink).toHaveAttribute('href', 'mailto:info@littlelemon.es');
  });
});
