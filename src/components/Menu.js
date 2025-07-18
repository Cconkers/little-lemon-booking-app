import React from 'react';
import './Menu.css';

const Menu = () => {
  const menuItems = [
    {
      id: 1,
      name: "Bruschetta Mediterránea",
      description: "Pan tostado con tomate fresco, albahaca, aceite de oliva virgen extra y queso feta",
      image: "https://images.unsplash.com/photo-1572695157366-5e585ab2b69f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      price: "12€"
    },
    {
      id: 2,
      name: "Paella Valenciana",
      description: "Arroz bomba con pollo, conejo, judías verdes, garrofón, tomate y azafrán",
      image: "https://images.unsplash.com/photo-1534080564583-6be75777b70a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      price: "18€"
    },
    {
      id: 3,
      name: "Salmón a la Parrilla",
      description: "Salmón fresco con hierbas mediterráneas, limón, aceite de oliva y verduras asadas",
      image: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      price: "22€"
    },
    {
      id: 4,
      name: "Pizza Margherita",
      description: "Pizza tradicional italiana con tomate, mozzarella fresca, albahaca y aceite de oliva",
      image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      price: "14€"
    },
    {
      id: 5,
      name: "Ensalada Griega",
      description: "Tomate, pepino, cebolla roja, aceitunas kalamata, queso feta y orégano",
      image: "https://images.unsplash.com/photo-1540420773420-3366772f4999?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      price: "14€"
    },
    {
      id: 6,
      name: "Pasta Puttanesca",
      description: "Espaguetis con tomate, aceitunas negras, alcaparras, anchoas y albahaca",
      image: "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      price: "15€"
    },
    {
      id: 7,
      name: "Cordero Asado",
      description: "Pierna de cordero con romero, ajo, patatas asadas y salsa de menta",
      image: "https://images.unsplash.com/photo-1544025162-d76694265947?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      price: "25€"
    },
    {
      id: 8,
      name: "Tiramisú Casero",
      description: "Postre italiano con mascarpone, café, cacao y galletas savoiardi",
      image: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      price: "8€"
    }
  ];

  return (
    <section id="menu" className="menu-section">
      <div className="menu-container">
        <h2 className="menu-title">Nuestro Menú</h2>
        <p className="menu-subtitle">Descubre nuestra selección de platos mediterráneos auténticos</p>
        
        <div className="menu-grid">
          {menuItems.map(item => (
            <div key={item.id} className="menu-card">
              <div className="menu-card-image">
                <img 
                  src={item.image} 
                  alt={item.name}
                  className="menu-img"
                />
                <div className="menu-price">{item.price}</div>
              </div>
              <div className="menu-card-content">
                <h3 className="menu-item-name">{item.name}</h3>
                <p className="menu-item-description">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Menu; 