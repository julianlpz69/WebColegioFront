import React, { useState } from 'react';
import axios from 'axios';

const Login = () => {
    
    const [error, setError] = useState(false)
    
    const [formData, setFormData] = useState({
    username: '',
    password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('/api/login', formData);
      const { token, rol } = response.data;
      
      // Almacena el token en localStorage para mantener la sesión
      localStorage.setItem('token', token);

      // Redirige a la página según el rol del usuario
      if (rol === 'cliente') {
        history.push('/cliente');
      } else if (rol === 'empleado') {
        history.push('/empleado');
      } else {
        // Manejar otros roles si es necesario
        console.error('Rol no reconocido');
      }
    } catch (error) {
      console.error('Error al iniciar sesión:', error);
      // Maneja el error, muestra un mensaje al usuario, etc.
    }
  };

  return (
    <div className="login-form">
      <h2>Iniciar Sesión</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="username">Usuario:</label>
          <input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Contraseña:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Iniciar Sesión</button>
      </form>
      {error && <p>escribe perra</p>}
    </div>
  );
};

export default Login;