import React, { useState } from "react";
import "../styles/Dashboard.css"; // Importar los estilos
import Perfil from "../components/Perfil"; 
import Calendar from 'react-calendar'; // Importar la biblioteca de calendario
import 'react-calendar/dist/Calendar.css'; // Importar estilos de la biblioteca
import Horario from "../components/Horario";
import Calendario from "../components/Caledario";
import { Line, Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const Dashboard = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [activities, setActivities] = useState([]); // Estado para las actividades
  const [activityInput, setActivityInput] = useState(""); // Estado para el input de la actividad
  const [date, setDate] = useState(new Date()); // Estado para la fecha del calendario

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleActivityChange = (e) => {
    setActivityInput(e.target.value);
  };

  const handleAddActivity = (e) => {
    e.preventDefault(); // Prevenir el comportamiento por defecto del formulario
    if (activityInput.trim() !== "") {
      setActivities([...activities, activityInput]);
      setActivityInput(""); // Limpiar el input
    }
  };

  const handleDateChange = (date) => {
    setDate(date); // Cambiar la fecha seleccionada
  };

  // Datos de los gráficos
  const lineChartData = {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    datasets: [
      {
        label: 'Revenu',
        data: [30, 45, 60, 50, 80, 70, 90],
        borderColor: '#FFFFFF', // Color blanco para la línea
        // Fondo azul semi-transparente
      },
    ],
  };
  

  const barChartData = {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    datasets: [
      {
        label: 'Earnings',
        data: [20, 30, 40, 20, 50, 10, 15],
        backgroundColor: '#28a745',
      },
    ],
  };

  return (
    <div className="dashboard-container">
      {/* Sidebar (menú lateral) */}
      <div className={`sidebar ${isSidebarOpen ? "open" : "closed"}`}>
        <button className="toggle-btn" onClick={toggleSidebar}>
          <div className="hamburger-icon">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </button>
        {isSidebarOpen && (
          <ul>
            <li><a href="Perfil">Perfil</a></li>
            <li><a href="#">Calificaciones</a></li>
            <li><a href="Horario">Horarios</a></li>
            <li><a href="#">Configuracion</a></li>
            <li><a href="Calendario">Calendario</a></li>
          </ul>
        )}
      </div>

      {/* Contenido principal */}
      <div className="main-content">
        <h1 className="text-center">Dashboard</h1>
  {/* Información del alumno */}
  <div className="student-info text-center">
          <img src="./images/Angie.jpeg" alt="Nombre del Alumno" className="student-photo" />
          <h3 className="student-name">Angie</h3>
        </div>
        {/* Tarjetas de estadísticas */}
        <div className="stats-cards row mb-4">
          <div className="col-md-3">
            <div className="card futuristic-card text-center">
              <div className="card-body">
                <h5 className="card-title">Grupo</h5>
                <p className="card-text">SM41</p>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card futuristic-card text-center">
              <div className="card-body">
                <h5 className="card-title">Matricula</h5>
                <p className="card-text">23393245</p>
              </div>
            </div>
          </div>
          
        </div>

        {/* Sección de gráficos */}
        <div className="charts row mb-4">
          <div className="col-md-6">
            <div className="chart-card">
              <h5>Revenue</h5>
              <Line data={lineChartData} />
            </div>
          </div>
          <div className="col-md-6">
            <div className="chart-card">
              <h5>Earnings</h5>
              <Bar data={barChartData} />
            </div>
          </div>
        </div>

        {/* Agenda de actividades */}
        <div className="activity-agenda">
          <h2 className="text-center">Agenda de Actividades</h2>
          <form onSubmit={handleAddActivity}>
            <div className="input-group mb-3">
              <input 
                type="text" 
                className="form-control" 
                placeholder="Agregar actividad..." 
                value={activityInput} 
                onChange={handleActivityChange} 
              />
              <button className="btn btn-primary" type="submit">Agregar</button>
            </div>
          </form>
          <ul className="list-group">
            {activities.map((activity, index) => (
              <li key={index} className="list-group-item">
                {activity}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
