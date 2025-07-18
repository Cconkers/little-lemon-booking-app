import { useState } from "react";
import "./BookingForm.css";

const BookingForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    guests: "1",
    occasion: "",
    requests: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const timeSlots = [
    "12:00",
    "12:30",
    "13:00",
    "13:30",
    "14:00",
    "14:30",
    "19:00",
    "19:30",
    "20:00",
    "20:30",
    "21:00",
    "21:30",
  ];

  const occasions = [
    "Cumpleaños",
    "Aniversario",
    "Cena de negocios",
    "Cita romántica",
    "Celebración familiar",
    "Otro",
  ];

  const validateForm = () => {
    const newErrors = {};

    // Validar nombre
    if (!formData.name.trim()) {
      newErrors.name = "El nombre es obligatorio";
    } else if (formData.name.trim().length < 2) {
      newErrors.name = "El nombre debe tener al menos 2 caracteres";
    }

    // Validar email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = "El email es obligatorio";
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "El email no tiene un formato válido";
    }

    // Validar teléfono
    const phoneRegex = /^[+]?[0-9\s\-()]{9,}$/;
    if (!formData.phone.trim()) {
      newErrors.phone = "El teléfono es obligatorio";
    } else if (!phoneRegex.test(formData.phone)) {
      newErrors.phone = "El teléfono no tiene un formato válido";
    }

    // Validar fecha
    if (!formData.date) {
      newErrors.date = "La fecha es obligatoria";
    } else {
      const selectedDate = new Date(formData.date);
      const today = new Date();
      today.setHours(0, 0, 0, 0);

      if (selectedDate < today) {
        newErrors.date = "La fecha no puede ser anterior a hoy";
      }
    }

    // Validar hora
    if (!formData.time) {
      newErrors.time = "La hora es obligatoria";
    }

    // Validar número de comensales
    if (!formData.guests || formData.guests < 1 || formData.guests > 12) {
      newErrors.guests = "El número de comensales debe ser entre 1 y 12";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Limpiar error del campo cuando el usuario empiece a escribir
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      setIsSubmitted(true);
      console.log("Datos de la reserva:", formData);
      // Aquí normalmente enviarías los datos a un servidor
    }
  };

  if (isSubmitted) {
    return (
      <section id="booking" className="booking-section">
        <div className="booking-container">
          <div className="booking-success" role="alert" aria-live="polite">
            <h2>¡Reserva Confirmada!</h2>
            <p>Gracias {formData.name}, tu reserva ha sido confirmada.</p>
            <div className="booking-details">
              <p>
                <strong>Fecha:</strong> {formData.date}
              </p>
              <p>
                <strong>Hora:</strong> {formData.time}
              </p>
              <p>
                <strong>Comensales:</strong> {formData.guests}
              </p>
              {formData.occasion && (
                <p>
                  <strong>Ocasión:</strong> {formData.occasion}
                </p>
              )}
            </div>
            <p>Te enviaremos una confirmación a {formData.email}</p>
            <button
              className="new-booking-btn"
              onClick={() => {
                setIsSubmitted(false);
                setFormData({
                  name: "",
                  email: "",
                  phone: "",
                  date: "",
                  time: "",
                  guests: "1",
                  occasion: "",
                  requests: "",
                });
              }}
            >
              Hacer Nueva Reserva
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="booking" className="booking-section">
      <div className="booking-container">
        <h2 className="booking-title">Reservar Mesa</h2>
        <form className="booking-form" onSubmit={handleSubmit} noValidate>
          <div className="form-group">
            <label htmlFor="name" className="form-label">
              Nombre Completo *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              className={`form-input ${errors.name ? "error" : ""}`}
              aria-describedby={errors.name ? "name-error" : undefined}
              aria-required="true"
              placeholder="Ingresa tu nombre completo"
            />
            {errors.name && (
              <span id="name-error" className="error-message" role="alert">
                {errors.name}
              </span>
            )}
          </div>

          <div className="form-group">
            <label htmlFor="email" className="form-label">
              Email *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className={`form-input ${errors.email ? "error" : ""}`}
              aria-describedby={errors.email ? "email-error" : undefined}
              aria-required="true"
              placeholder="tu@email.com"
            />
            {errors.email && (
              <span id="email-error" className="error-message" role="alert">
                {errors.email}
              </span>
            )}
          </div>

          <div className="form-group">
            <label htmlFor="phone" className="form-label">
              Teléfono *
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              className={`form-input ${errors.phone ? "error" : ""}`}
              aria-describedby={errors.phone ? "phone-error" : undefined}
              aria-required="true"
              placeholder="+34 123 456 789"
            />
            {errors.phone && (
              <span id="phone-error" className="error-message" role="alert">
                {errors.phone}
              </span>
            )}
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="date" className="form-label">
                Fecha *
              </label>
              <input
                type="date"
                id="date"
                name="date"
                value={formData.date}
                onChange={handleInputChange}
                className={`form-input ${errors.date ? "error" : ""}`}
                aria-describedby={errors.date ? "date-error" : undefined}
                aria-required="true"
                min={new Date().toISOString().split("T")[0]}
              />
              {errors.date && (
                <span id="date-error" className="error-message" role="alert">
                  {errors.date}
                </span>
              )}
            </div>

            <div className="form-group">
              <label htmlFor="time" className="form-label">
                Hora *
              </label>
              <select
                id="time"
                name="time"
                value={formData.time}
                onChange={handleInputChange}
                className={`form-input ${errors.time ? "error" : ""}`}
                aria-describedby={errors.time ? "time-error" : undefined}
                aria-required="true"
              >
                <option value="">Selecciona una hora</option>
                {timeSlots.map((slot) => (
                  <option key={slot} value={slot}>
                    {slot}
                  </option>
                ))}
              </select>
              {errors.time && (
                <span id="time-error" className="error-message" role="alert">
                  {errors.time}
                </span>
              )}
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="guests" className="form-label">
                Número de Comensales *
              </label>
              <input
                type="number"
                id="guests"
                name="guests"
                value={formData.guests}
                onChange={handleInputChange}
                className={`form-input ${errors.guests ? "error" : ""}`}
                aria-describedby={errors.guests ? "guests-error" : undefined}
                aria-required="true"
                min="1"
                max="12"
              />
              {errors.guests && (
                <span id="guests-error" className="error-message" role="alert">
                  {errors.guests}
                </span>
              )}
            </div>

            <div className="form-group">
              <label htmlFor="occasion" className="form-label">
                Ocasión (Opcional)
              </label>
              <select
                id="occasion"
                name="occasion"
                value={formData.occasion}
                onChange={handleInputChange}
                className="form-input"
              >
                <option value="">Selecciona una ocasión</option>
                {occasions.map((occasion) => (
                  <option key={occasion} value={occasion}>
                    {occasion}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="requests" className="form-label">
              Solicitudes Especiales (Opcional)
            </label>
            <textarea
              id="requests"
              name="requests"
              value={formData.requests}
              onChange={handleInputChange}
              className="form-textarea"
              rows="4"
              placeholder="¿Tienes alguna solicitud especial? (alergias, preferencias de asiento, etc.)"
            />
          </div>

          <button type="submit" className="submit-btn">
            Confirmar Reserva
          </button>
        </form>
      </div>
    </section>
  );
};

export default BookingForm;
