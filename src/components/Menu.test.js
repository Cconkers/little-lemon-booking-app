import React from 'react';
import { render, screen } from '@testing-library/react';
import Menu from './Menu';

describe('Menu', () => {
  test('renders menu title and subtitle', () => {
    render(<Menu />);
    expect(screen.getByText('Nuestro Menú')).toBeInTheDocument();
    expect(screen.getByText(/descubre nuestra selección de platos mediterráneos auténticos/i)).toBeInTheDocument();
  });

  test('renders all menu items', () => {
    render(<Menu />);
    
    // Check for specific menu items
    expect(screen.getByText('Bruschetta Mediterránea')).toBeInTheDocument();
    expect(screen.getByText('Paella Valenciana')).toBeInTheDocument();
    expect(screen.getByText('Salmón a la Parrilla')).toBeInTheDocument();
    expect(screen.getByText('Pizza Margherita')).toBeInTheDocument();
    expect(screen.getByText('Ensalada Griega')).toBeInTheDocument();
    expect(screen.getByText('Pasta Puttanesca')).toBeInTheDocument();
    expect(screen.getByText('Cordero Asado')).toBeInTheDocument();
    expect(screen.getByText('Tiramisú Casero')).toBeInTheDocument();
  });

  test('renders menu item descriptions', () => {
    render(<Menu />);
    
    expect(screen.getByText(/pan tostado con tomate fresco/i)).toBeInTheDocument();
    expect(screen.getByText(/arroz bomba con pollo/i)).toBeInTheDocument();
    expect(screen.getByText(/salmón fresco con hierbas mediterráneas/i)).toBeInTheDocument();
  });

  test('renders menu item prices', () => {
    render(<Menu />);
    
    expect(screen.getByText('12€')).toBeInTheDocument();
    expect(screen.getByText('18€')).toBeInTheDocument();
    expect(screen.getByText('22€')).toBeInTheDocument();
    expect(screen.getByText('25€')).toBeInTheDocument();
  });

  test('renders menu item images with correct alt text', () => {
    render(<Menu />);
    
    expect(screen.getByAltText('Bruschetta Mediterránea')).toBeInTheDocument();
    expect(screen.getByAltText('Paella Valenciana')).toBeInTheDocument();
    expect(screen.getByAltText('Tiramisú Casero')).toBeInTheDocument();
  });

  test('has proper semantic HTML structure', () => {
    render(<Menu />);
    
    // Check for proper heading hierarchy
    const h2 = screen.getByRole('heading', { level: 2 });
    expect(h2).toHaveTextContent('Nuestro Menú');
    
    // Check for all menu item headings
    const h3s = screen.getAllByRole('heading', { level: 3 });
    expect(h3s).toHaveLength(8); // 8 menu items
  });

  test('renders menu cards with proper structure', () => {
    render(<Menu />);
    
    // Check that all menu items have images
    const menuImages = screen.getAllByRole('img');
    expect(menuImages).toHaveLength(8);
    
    // Check that all images have proper alt text
    menuImages.forEach(img => {
      expect(img).toHaveAttribute('alt');
      expect(img.getAttribute('alt')).not.toBe('');
    });
  });
}); 