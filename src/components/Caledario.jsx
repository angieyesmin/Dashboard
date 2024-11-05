// src/SchoolCalendar.jsx
import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const Calendario = () => {
  const [date, setDate] = useState(new Date());

  // Función para manejar el cambio de fecha
  const handleDateChange = (date) => {
    setDate(date);
  };

  return (
    <div className="school-calendar">
      <h1>Calendario Escolar Universitario</h1>
      <div className="calendar-container">
        <Calendar
          onChange={handleDateChange}
          value={date}
        />
      </div>
      <div className="selected-date">
        <h2>Fecha Seleccionada:</h2>
        <p>{date.toDateString()}</p>
        {/* Aquí puedes agregar eventos o detalles relacionados con la fecha seleccionada */}
      </div>
    </div>
  );
};

export default Calendario;
