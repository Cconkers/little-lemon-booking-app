# 🍋 Little Lemon Restaurant

<div align="center">
  <img src="https://play-lh.googleusercontent.com/t_XvMjLc2uxTVXMiQatnBGbmRDuu_6-5cbPzJJhyaPyBh4iPAqqJ2MwOo0JAxScRwUqL" alt="Little Lemon Logo" width="120" height="120">
  
  ### 🏆 Aplicación de Reservas de Restaurante Mediterráneo
  
  [![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://reactjs.org/)
  [![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/es/docs/Web/JavaScript)
  [![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://www.w3.org/Style/CSS/)
  [![Jest](https://img.shields.io/badge/Jest-C21325?style=for-the-badge&logo=jest&logoColor=white)](https://jestjs.io/)
  
  **✨ Una experiencia culinaria digital excepcional ✨**
</div>

---

## 🎯 **Descripción del Proyecto**

Little Lemon es una aplicación web moderna y completamente funcional para un restaurante mediterráneo familiar. Desarrollada con **React** y enfocada en la **experiencia del usuario**, permite a los clientes explorar el menú y realizar reservas de manera intuitiva y elegante.

### 🌟 **¿Por qué Little Lemon es especial?**

- 🎨 **Diseño Moderno**: Interfaz elegante y responsive
- ♿ **Accesibilidad Total**: Cumple con estándares WCAG
- 🧪 **100% Testeado**: 38 pruebas unitarias pasando
- 📱 **Responsive**: Perfecto en móvil, tablet y desktop
- 🔥 **Validación Robusta**: Formularios inteligentes con validación en tiempo real

---

## 🚀 **Características Principales**

### 📋 **Sistema de Reservas Inteligente**

- ✅ Validación completa de formularios
- ✅ Prevención de fechas pasadas
- ✅ Límites de comensales (1-12)
- ✅ Confirmación detallada de reserva
- ✅ Limpieza automática de errores

### 🍽️ **Menú Mediterráneo**

- 8 platos auténticos con imágenes profesionales
- Descripciones detalladas de cada plato
- Precios claramente mostrados
- Diseño tipo tarjeta con efectos hover

### 🎯 **Experiencia de Usuario**

- Navegación suave entre secciones
- Hero section impactante
- Footer con información de contacto
- Diseño mobile-first

### 🔧 **Calidad Técnica**

- **38 pruebas unitarias** (100% pasando)
- **Componentes reutilizables**
- **Código limpio y mantenible**
- **Semántica HTML perfecta**

---

## 🛠️ **Tecnologías Utilizadas**

| Tecnología                | Descripción            | Versión  |
| ------------------------- | ---------------------- | -------- |
| **React**                 | Framework principal    | 18.2.0   |
| **React Testing Library** | Testing de componentes | 13.4.0   |
| **Jest**                  | Framework de testing   | Incluido |
| **CSS3**                  | Estilos y animaciones  | -        |
| **JavaScript ES6+**       | Lógica de aplicación   | -        |

---

## 📦 **Instalación y Uso**

### 🔧 **Requisitos Previos**

```bash
Node.js >= 16.0.0
npm >= 8.0.0
```

### 🚀 **Instalación**

```bash
# Clonar el repositorio
git clone https://github.com/tuusuario/little-lemon-restaurant.git

# Entrar al directorio
cd little-lemon-restaurant

# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm start
```

### 🧪 **Ejecutar Tests**

```bash
# Ejecutar todas las pruebas
npm test

# Ejecutar tests en modo watch
npm test -- --watch

# Generar reporte de cobertura
npm test -- --coverage
```

### 📦 **Build para Producción**

```bash
npm run build
```

---

## 🏗️ **Estructura del Proyecto**

```
src/
├── components/
│   ├── Header.js & Header.css          # Navegación principal
│   ├── Hero.js & Hero.css              # Sección hero
│   ├── Menu.js & Menu.css              # Menú de platos
│   ├── BookingForm.js & BookingForm.css # Formulario de reservas
│   └── Footer.js & Footer.css          # Footer con contacto
├── App.js & App.css                    # Componente principal
├── index.js                            # Punto de entrada
└── __tests__/                          # Pruebas unitarias
    ├── Header.test.js
    ├── Hero.test.js
    ├── Menu.test.js
    ├── BookingForm.test.js
    ├── Footer.test.js
    └── App.test.js
```

---

## 🧪 **Testing y Calidad**

### 📊 **Cobertura de Tests**

- **38 pruebas unitarias** ✅
- **6 suites de tests** ✅
- **100% de tests pasando** ✅

### 🎯 **Tipos de Pruebas**

- ✅ Renderizado de componentes
- ✅ Validación de formularios
- ✅ Accesibilidad (ARIA, roles)
- ✅ Interacciones del usuario
- ✅ Navegación y enlaces

### 🔍 **Ejecutar Tests**

```bash
npm test -- --watchAll=false
```

---

## ♿ **Accesibilidad**

### 🎯 **Características de Accesibilidad**

- **Roles ARIA** completos
- **Etiquetas descriptivas** en todos los elementos
- **Navegación por teclado** funcional
- **Alt text** en todas las imágenes
- **Estructura semántica** HTML5

### 🏆 **Cumplimiento de Estándares**

- ✅ WCAG 2.1 AA
- ✅ Navegación por teclado
- ✅ Lectores de pantalla
- ✅ Contraste de colores óptimo

---

## 📱 **Responsive Design**

### 📐 **Breakpoints**

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

### 🎨 **Características Responsive**

- Grid layout adaptable
- Imágenes optimizadas
- Navegación mobile-friendly
- Formularios optimizados para móvil

---

## 🎨 **Paleta de Colores**

```css
:root {
  --primary-color: #495e57; /* Verde oscuro */
  --secondary-color: #f4ce14; /* Amarillo dorado */
  --accent-color: #ee9972; /* Naranja suave */
  --text-color: #333333; /* Gris oscuro */
  --background-color: #fafafa; /* Gris claro */
  --white: #ffffff; /* Blanco */
}
```

---

## 🔮 **Características Avanzadas**

### 🎯 **Validación Inteligente**

- Validación en tiempo real
- Mensajes de error contextuales
- Limpieza automática de errores
- Prevención de envíos duplicados

### 🍽️ **Gestión de Menú**

- Imágenes de alta calidad
- Información nutricional
- Precios dinámicos
- Categorización por tipo de plato

### 📧 **Sistema de Contacto**

- Enlace mailto funcional
- Información de contacto completa
- Horarios de atención
- Ubicación del restaurante

---

## 🤝 **Contribución**

### 🛠️ **Cómo Contribuir**

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

### 📝 **Estándares de Código**

- Seguir convenciones de React
- Escribir tests para nuevas funcionalidades
- Mantener accesibilidad en todos los componentes
- Documentar cambios importantes

---

## 🏆 **Logros del Proyecto**

- ✅ **38/38 Tests Pasando**
- ✅ **100% Accesible**
- ✅ **Diseño Responsive Perfecto**
- ✅ **Validación Completa**
- ✅ **Código Limpio y Mantenible**
- ✅ **Experiencia de Usuario Excepcional**

---

## 📄 **Licencia**

Este proyecto está bajo la licencia MIT. Ver el archivo `LICENSE` para más detalles.

---

<div align="center">
  
  ### 🌟 **¡Gracias por visitar Little Lemon!** 🌟
  
  **Desarrollado con ❤️ para ofrecer la mejor experiencia culinaria digital**
  
  [![GitHub](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/tuusuario)
  [![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://linkedin.com/in/tuusuario)
  
</div>

---

_🍋 Little Lemon - Donde la tradición mediterránea se encuentra con la innovación digital_
