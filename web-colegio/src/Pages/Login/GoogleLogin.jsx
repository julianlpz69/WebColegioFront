import { useEffect } from 'react';
import { gapi } from "gapi-script";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { GoogleLogin as GoogleLoginButton } from 'react-google-login';

const GoogleLogin =({setError1,setError2,setError3}) =>{

  const navigate = useNavigate();
  const clientID = "26323881431-07181ngouo0dmiobnp5oa06urh373q5n.apps.googleusercontent.com"

  const onSuccess = async (responseGoogle) => {

    setError1(false);
    setError2(false);
    setError3(false);

    const CorreoDto = {
      CorreoUsuario: responseGoogle.profileObj.email
    };

    try {
      const response = await axios.post("http://localhost:5250/api/usuario/token-google", CorreoDto);
      const { mensaje,usuarioToken, usuarioRol } = response.data;
      
      localStorage.setItem('token', usuarioToken);
      localStorage.setItem('RolUsuario', usuarioRol);
      localStorage.setItem('estaAutentica', true);

      if(mensaje == "Correo Electronico No Existente en la base de datos")
      {
        setError1(true)
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
      setError3(true)
      console.error('Error al iniciar sesión:', error);
    }
  } 
    
 
  const onFailure = (response) => {
    setError3(true)
    console.log(response);
  }
  
  useEffect(() => {
    function start() {
      gapi.client.init({
        clientId: clientID,
      });
    }
    gapi.load("client:auth2", start);})


  return (
      <GoogleLoginButton
      className='btnGoogle'
      clientId={clientID}
      onSuccess={onSuccess}
      onFailure={onFailure}
      buttonText="Continuar  Con Google"
      cookiePolicy={"single_host_origin"}
      prompt="select_account"
      />
    )
}  


export default GoogleLogin