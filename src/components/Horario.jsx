// src/ClassSchedule.jsx
import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import '../styles/Horario.css'; // Importar el CSS

const Horario= () => {
  // Datos de ejemplo para el horario de clases
  const classSchedule = [
    { dia: 'Lunes', materia: 'Estructura de datos aplicadas', hora: '9:00 AM' },
    { dia: 'Lunes', materia: 'Diseño App', hora: '11:00 AM' },
    { dia: 'Martes', materia: 'Principios  de IoT', hora: '9:00 AM' },
    { dia: 'Martes', materia: 'Programación', hora: '11:00 AM' },
    { dia: 'Miércoles', materia: 'Estándares y métricas para el desarrollo de software', hora: '9:00 AM' },
    { dia: 'Jueves', materia: 'Evaluacion y Mejora para el Desarrolloo De Software', hora: '11:00 AM' },
    { dia: 'Viernes', materia: 'Aplicaciones web orientada a servicios ', hora: '9:00 AM' },
    { dia: 'Viernes', materia: 'Curso de React', hora: '11:00 AM' },
  ];

  // Datos de ejemplo para las calificaciones de las materias más difíciles
  const difficultSubjectsData = [
    { name: 'Matemáticas', calificaciones: 75 },
    { name: 'Física', calificaciones: 60 },
    { name: 'Química', calificaciones: 65 },
    { name: 'Programación', calificaciones: 80 },
    { name: 'Biología', calificaciones: 70 },
    { name: 'Historia', calificaciones: 90 },
  ];

  return (
    <div className="class-schedule">
      <h1>Horario de Clases</h1>

      <table>
        <thead>
          <tr>
            <th>Día</th>
            <th>Materia</th>
            <th>Hora</th>
          </tr>
        </thead>
        <tbody>
          {classSchedule.map((clase, index) => (
            <tr key={index}>
              <td>{clase.dia}</td>
              <td>{clase.materia}</td>
              <td>{clase.hora}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="chart-container">
        <h2>Gráfica de Materias Más Difíciles</h2>
        <LineChart width={600} height={300} data={difficultSubjectsData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="calificaciones" stroke="#8884d8" activeDot={{ r: 8 }} />
        </LineChart>
      </div>
    </div>
  );
};

export default Horario;
