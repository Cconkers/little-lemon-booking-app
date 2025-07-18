import React from 'react';
import { render, screen } from '@testing-library/react';
import Header from './Header';

describe('Header', () => {
  test('renders logo with correct alt text', () => {
    render(<Header />);
    const logo = screen.getByRole('img', { name: /little lemon restaurant logo/i });
    expect(logo).toBeInTheDocument();
    expect(logo).toHaveAttribute('src', '/logo192.png');
  });

  test('renders restaurant name', () => {
    render(<Header />);
    expect(screen.getByText('Little Lemon')).toBeInTheDocument();
  });

  test('renders all navigation links', () => {
    render(<Header />);
    expect(screen.getByRole('link', { name: /inicio/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /menú/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /reservar/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /contacto/i })).toBeInTheDocument();
  });

  test('navigation links have correct href attributes', () => {
    render(<Header />);
    expect(screen.getByRole('link', { name: /inicio/i })).toHaveAttribute('href', '#home');
    expect(screen.getByRole('link', { name: /menú/i })).toHaveAttribute('href', '#menu');
    expect(screen.getByRole('link', { name: /reservar/i })).toHaveAttribute('href', '#booking');
    expect(screen.getByRole('link', { name: /contacto/i })).toHaveAttribute('href', '#contact');
  });

  test('has proper accessibility attributes', () => {
    render(<Header />);
    expect(screen.getByRole('banner')).toBeInTheDocument();
    expect(screen.getByRole('navigation')).toBeInTheDocument();
    expect(screen.getByRole('navigation')).toHaveAttribute('aria-label', 'Navegación principal');
    expect(screen.getByRole('menubar')).toBeInTheDocument();
  });

  test('navigation items have correct roles', () => {
    render(<Header />);
    const menuItems = screen.getAllByRole('menuitem');
    expect(menuItems).toHaveLength(4);
    
    menuItems.forEach(item => {
      expect(item).toHaveAttribute('role', 'menuitem');
    });
  });
}); 