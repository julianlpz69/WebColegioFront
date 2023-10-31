import './App.css';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

//importamos los comp creados
import Inicio from './Pages/Inicio';
import AreaAcademica from './Pages/AreaAcademica';
import AreaAdministrativa from './Pages/AreaAdministrativa';
import AreaComunitaria from './Pages/AreaComunitaria';
import AreaDirectiva from './Pages/AreaDirectiva';
import Login from './Pages/Login';
import NavBarExample from './Layouts/Navbar';
import FooterExample from './Layouts/Footer';

function App() {
  return (
    <div className="App">
    
      
      <BrowserRouter>
      <Routes>
        <Route path='/' element={ <NavBarExample /> }>
          <Route index element={ <Inicio/> } />
          <Route path='AreaAcademica' element={ <AreaAcademica />} />
          <Route path='AreaDirectiva' element={ <AreaDirectiva /> } />
          <Route path='AreaComunitaria' element={ <AreaComunitaria />} />
          <Route path='AreaAdministrativa' element={ <AreaAdministrativa />} />

          <Route path='*' element={ <Navigate replace to="/"/> }/>
         
        </Route>
        
        
        <Route>
        <Route path='Login' element={ <Login />} />

        </Route>
   

      </Routes> 
      </BrowserRouter>



      <FooterExample/>
    </div>
  );
}

export default App;
