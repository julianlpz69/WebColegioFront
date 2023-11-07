import './App.css';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import NavbarAdmin from './Layouts/NavbarAdmin';

//importamos los comp creados
import Inicio from './Pages/Inicio/Inicio';
import AreaAcademica from './Pages/Inicio/AreaAcademica';
import AreaAdministrativa from './Pages/Inicio/AreaAdministrativa';
import AreaComunitaria from './Pages/Inicio/AreaComunitaria';
import AreaDirectiva from './Pages/Inicio/AreaDirectiva';
import Login from './Pages/Login/Login';
import InicioProfesor from './Pages/Profesor/InicioProfesor';
import InicioAdministrador from './Pages/Administrador/AdminInicio';
import InicioPadre from './Pages/Padre/InicioPadre';
import InicioEstudiante from './Pages/Estudiante/InicioEstudiante';
import NavBarExample from './Layouts/Navbar';
import AdminEstudiante from './Pages/Administrador/AdminEstudiante';
import AdminGrupo from './Pages/Administrador/AdminGrupo';
import AdminPadre from './Pages/Administrador/AdminPadre';
import AdminProfesor from './Pages/Administrador/AdminProfesor';
import AdminSetting from './Pages/Administrador/AdminSetting';
import { AuthProvider } from './Pages/Login/Secionado';


function RutasProtegidas({ children }) {
  var isAuthenticates = JSON.parse(localStorage.getItem('estaAutentica'))

  return isAuthenticates ? children : <Navigate to="/Login" />;
}

function RutaLogin({ children }) {
  var isAuthenticates = JSON.parse(localStorage.getItem('estaAutentica'))
  var Rol = localStorage.getItem('RolUsuario')
  var rutaNavegacion = `/Inicio${Rol}`;

  return isAuthenticates ? <Navigate to={rutaNavegacion} /> : children;
}


function App() {
  
  return (
    <AuthProvider>
      <div className="App">
        <BrowserRouter>
          <Routes>

            <Route  element={ <NavBarExample /> }>
              <Route path='Inicio'  element={ <Inicio/> } />
              <Route path='AreaAcademica' element={ <AreaAcademica />} />
              <Route path='AreaDirectiva' element={ <AreaDirectiva /> } />
              <Route path='AreaComunitaria' element={ <AreaComunitaria />} />
              <Route path='AreaAdministrativa' element={ <AreaAdministrativa />} />
              <Route path='*' element={ <Navigate replace to="/Inicio"/> }/>
            </Route>
            
            <Route>
              <Route path='Login' element={<RutaLogin> <Login /> </RutaLogin>} />
            </Route>
          
            <Route element = {<RutasProtegidas><NavbarAdmin/></RutasProtegidas>}>
              <Route path='/AdminProfesor' element={<RutasProtegidas><AdminProfesor /></RutasProtegidas> } />
              <Route path='/AdminPadre' element={<RutasProtegidas> <AdminPadre /> </RutasProtegidas>} />
              <Route path='/InicioAdministrador' element={<RutasProtegidas> <InicioAdministrador /> </RutasProtegidas>} />
              <Route path='/AdminEstudiante' element={<RutasProtegidas> <AdminEstudiante /> </RutasProtegidas>} />
              <Route path='/AdminSetting' element={<RutasProtegidas> <AdminSetting /> </RutasProtegidas>} />
              <Route path='/AdminGrupo' element={<RutasProtegidas> <AdminGrupo /> </RutasProtegidas>} />
              <Route path='*'element={<RutasProtegidas><InicioAdministrador /></RutasProtegidas>}/>
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
    </AuthProvider>
  );
}

export default App;
