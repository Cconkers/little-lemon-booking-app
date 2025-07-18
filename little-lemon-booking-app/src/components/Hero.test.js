import React from 'react';
import { render, screen } from '@testing-library/react';
import Hero from './Hero';

describe('Hero', () => {
  test('renders restaurant name and location', () => {
    render(<Hero />);
    expect(screen.getByText('Little Lemon')).toBeInTheDocument();
    expect(screen.getByText('Madrid')).toBeInTheDocument();
  });

  test('renders restaurant description', () => {
    render(<Hero />);
    expect(screen.getByText(/somos un restaurante familiar mediterráneo/i)).toBeInTheDocument();
  });

  test('renders call-to-action button', () => {
    render(<Hero />);
    const reserveButton = screen.getByRole('button', { name: /reservar mesa/i });
    expect(reserveButton).toBeInTheDocument();
    expect(reserveButton).toHaveAttribute('href', '#booking');
  });

  test('renders hero image with correct alt text', () => {
    render(<Hero />);
    const heroImage = screen.getByRole('img', { name: /plato de comida mediterránea del restaurante little lemon/i });
    expect(heroImage).toBeInTheDocument();
    expect(heroImage).toHaveAttribute('src', expect.stringContaining('unsplash.com'));
  });

  test('has proper accessibility attributes', () => {
    render(<Hero />);
    expect(screen.getByRole('banner')).toBeInTheDocument();
    
    const reserveButton = screen.getByRole('button', { name: /reservar mesa/i });
    expect(reserveButton).toHaveAttribute('aria-label', 'Ir a la sección de reservas');
  });

  test('uses semantic HTML structure', () => {
    render(<Hero />);
    // Check for proper heading hierarchy
    const h2 = screen.getByRole('heading', { level: 2 });
    const h3 = screen.getByRole('heading', { level: 3 });
    
    expect(h2).toHaveTextContent('Little Lemon');
    expect(h3).toHaveTextContent('Madrid');
  });
}); 