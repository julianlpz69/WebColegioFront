import { useState } from 'react';
import GoogleLogin from './GoogleLogin';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import  LogoCampus  from "../../Images/LogoCampus.png"
import "./Login.css";





const Login = () => {



  const navigate = useNavigate();

  const [error1, setError1] = useState(false)
  const [error2, setError2] = useState(false)
  const [error3, setError3] = useState(false)
    
  const [formData, setFormData] = useState({
    CorreoUsuario: '',
    ClaveUsuario: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };


  const handleSubmit = async (e) => {

    e.preventDefault();

    setError1(false);
    setError2(false);
    setError3(false);

    try {
      const response = await axios.post("http://localhost:5250/api/usuario/token", formData);
      const { mensaje,usuarioToken, usuarioRol } = response.data;
    
      localStorage.setItem('token', usuarioToken);
      localStorage.setItem('RolUsuario', usuarioRol);
      localStorage.setItem('estaAutentica', true);

      if(mensaje == "Correo Electronico No Existente en la base de datos")
      {
        setError1(true)
      }

      else if(mensaje == "Contraseña incorrectas")
      {
        setError2(true)
      }

      else if(mensaje == "Usuario Existente"){

        if (usuarioRol === 'Administrador') {
          navigate('/InicioAdministrador');
        } 

        else if (usuarioRol === 'Profesor') {
          navigate('/InicioProfesor');
        }

        else if (usuarioRol === 'Estudiante') {
          navigate('/InicioEstudiante');
        }

        else if (usuarioRol === 'Padre') {
          navigate('/InicioPadre');
        }

        else{
          setError3(true)
        }
      }
    } 
    
    catch (error) {
      setError1(false)
      setError2(false)
      setError3(true)
      console.error('Error al iniciar sesión:', error);
    }
  };


  return (
    <div className={`body`}>
      <form onSubmit={handleSubmit} className="containers">
        <div className={`header`}>
          <div><img className='logoLogin' alt='logo' src={LogoCampus}/></div>
          <div className={`text`}>Bienvenido</div>
          <div className={`underline`}></div>
        </div>
          
        <div className={`inputs text-center`}>
          {error1 && <span className='errorMensaje'>Correo Electronico sin registro</span>}
          {error2 && <span className='errorMensaje'>Contraseña Incorrecta</span>}
          {error3 && <span className='errorMensaje'>Hubo un error inesperado volver mas tarde Muack</span>}
          
          <div className={`input`}>
            <i className="bi bi-envelope-fill "></i>
            <input
            type="email"
            id="CorreoUsuario"
            name="CorreoUsuario"
            value={formData.userEmail}
            onChange={handleChange}
            placeholder='Correo Electronico' 
            className=' text-black'  
            required/>
          </div>
          <div className={`input`}>
            <i className="bi bi-box-arrow-in-right"></i>
            <input
            type="password"
            id="ClaveUsuario"
            name="ClaveUsuario"
            value={formData.password}
            onChange={handleChange}
            placeholder='Contraseña' 
            className=' text-black'
            required/>
          </div>
        </div>
        
        <a href='https://th.bing.com/th/id/OIP.ag0pxJ1FOer41el1-aVM7AAAAA?pid=ImgDet&rs=1' target='on_black' className='forgot-password'>¿Olvidaste tu Contraseña?</a>
        <div className={`submit-container`}>
          <button type="submit" className={`submit fw-bold`}>Ingresar</button>
        </div>
        <div className="divider d-flex align-items-center my-4">
            <p className="text-center fw-bold mx-3 mb-0 fs-4">Ó </p>
        </div>
        <div className='submit-container'>

          <GoogleLogin setError1={setError1} setError2={setError2} setError3={setError3} /> 
          <button type="submit" className={`submits githu fw-bold mt-2`}><i className="bi bi-github"></i>Continua con GitHub</button>

        </div>
      </form>
    </div>
  );
};

export default Login;