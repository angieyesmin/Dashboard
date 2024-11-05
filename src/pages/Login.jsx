import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Login.css"; // Asegúrate de importar el archivo de estilos correcto


const Login = () => {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    navigate("/dashboard");
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleLogin}>
        <h2>Iniciar sesión</h2>
        <div className="mb-3">
          <input type="email" className="form-control" placeholder="Correo electrónico" required />
        </div>
        <div className="mb-3">
          <input type="password" className="form-control" placeholder="Contraseña" required />
        </div>
        <button type="submit" className="btn">Entrar</button>
        <div className="message">
          <p>¿No tienes una cuenta? <a href="/register">Regístrate aquí</a></p>
        </div>
      </form>
    </div>
  );
};

export default Login;
