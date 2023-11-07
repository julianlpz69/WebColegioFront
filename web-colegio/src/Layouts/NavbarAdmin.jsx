import { Navbar, Nav, NavLink } from "react-bootstrap"
import { Outlet, Link } from "react-router-dom"
import { useState } from 'react';
import  LogoCampus  from "../Images/LogoCampus.png"
import { useNavigate } from 'react-router-dom';
import style from "./NavbarAdmin.module.css"



const NavbarAdmin = () => {

    const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };



    const navigate = useNavigate();
    const Logout = () =>{
        localStorage.setItem('estaAutentica', false)
        navigate('/Login');
    }


// Agregar un evento de clic al elemento que debería abrir/cerrar la barra lateral

    return(
    <div className={`${style.con}`}>    
      <Navbar className={`${style.sidebar} ${isSidebarOpen ? style.closed : ''} `}>
          <ul className={`${style.styleUL}`}>
            <li className={`${style.liSolo}`}> 
              <i class={`bi bi-justify ${style.iconoNav}`} onClick={toggleSidebar}/>
              <span className={`${style.textRol} `}>Administrador</span>
            </li>
            <li className={`${style.userData}`}>
              <img src={LogoCampus} alt="" className={`${style.LogoNavar}`}/>
              <span className={`${style.nombrePersona}`}>Julian</span>
            </li>
            <NavLink className={`${style.styleA}`} as={Link} to="/InicioAdministrador">
            <li>
            <i class="bi bi-house-heart"></i>
              <span className={`${style.navItem}`}>Home</span>
            </li >
            </NavLink>
            <NavLink className={`${style.styleA}`} as={Link} to="/AdminProfesor">
            <li >
          
            <i class="bi bi-journal-text"></i>
              <span className={`${style.navItem}`}>Docentes</span>
            </li>
            </NavLink>
            <NavLink className={`${style.styleA}`} as={Link} to="/AdminEstudiante" >
            <li>
            <i class="bi bi-backpack3"></i>
              <span className={`${style.navItem}`} >Estudiantes</span>
            </li>
            </NavLink>
            <NavLink className={`${style.styleA}`} as={Link} to="/AdminPadre">
            <li>
            <i class="bi bi-person-workspace"></i>
              <span className={`${style.navItem}`}>Acudientes</span>
            </li>
            </NavLink>
            <NavLink className={`${style.styleA}`} as={Link} to="/AdminGrupo">
            <li>
            <i class="bi bi-people"></i>
              <span className={`${style.navItem}`}>Grupos</span>
            </li>
            </NavLink>
            <NavLink className={`${style.styleA}`} as={Link} to="/AdminSetting">
            <li>
            <i class="bi bi-gear"></i>
              <span className={`${style.navItem}`}>Settings</span>
            </li>
            </NavLink>
      
            <a onClick={Logout} type='button' className={`${style.logout}`}>
            <li  >
            <i class="bi bi-box-arrow-left"></i>
                <span className={`${style.navItem}`}>Cerrar Secion</span>
            </li>
        </a>
          </ul>
        </Navbar>
        <section className={`${style.section} ${isSidebarOpen ? style.closeds : ''}`} >
            <Outlet></Outlet>
        </section>
      </div>    
   


    )
}
export default NavbarAdmin