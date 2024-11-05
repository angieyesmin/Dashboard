import React from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  BarChart,
  Bar,
} from 'recharts';
import '../styles/Perfil.css';

const Perfil = () => {
  // Datos de ejemplo para las calificaciones
  const gradesData = [
    { name: 'Enero', calificaciones: 85 },
    { name: 'Febrero', calificaciones: 90 },
    { name: 'Marzo', calificaciones: 78 },
    { name: 'Abril', calificaciones: 92 },
    { name: 'Mayo', calificaciones: 88 },
    { name: 'Junio', calificaciones: 95 },
  ];

  // Datos de ejemplo para las actividades
  const activitiesData = [
    { name: 'Actividad 1', horas: 5 },
    { name: 'Actividad 2', horas: 3 },
    { name: 'Actividad 3', horas: 4 },
    { name: 'Actividad 4', horas: 2 },
    { name: 'Actividad 5', horas: 6 },
  ];

  return (
    <div className="perfil-container">
      <h1>Perfil del Alumno</h1>

      <h2>Gráficas de Calificaciones</h2>
      <LineChart width={600} height={300} data={gradesData} className="chart">
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line
          type="monotone"
          dataKey="calificaciones"
          stroke="#8884d8"
          activeDot={{ r: 8 }}
        />
      </LineChart>

      <h2>Actividades Realizadas</h2>
      <LineChart width={600} height={300} data={activitiesData} className="chart">
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="horas" stroke="#82ca9d" activeDot={{ r: 8 }} />
      </LineChart>

      <h2>Horas de Actividades Realizadas (Gráfico de Barras)</h2>
      <BarChart width={600} height={300} data={activitiesData} className="chart">
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="horas" fill="#8884d8" />
      </BarChart>
    </div>
  );
};

export default Perfil;
