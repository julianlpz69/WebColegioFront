import { Navbar, Nav } from "react-bootstrap"
import { Outlet, Link } from "react-router-dom"
import  LogoCampus  from "../Images/Logo-campus.png"
import style from './Navbar.module.css';

const NavBarExample = () => {
    return(
       <>    
       
            <Navbar bg="dark" variant="dark" expand="lg"  className={`justify-content-between ${style.Navar}`}>
            <Navbar.Brand className="text-primary mx-5" as={Link} to="/inicio" ><img src={LogoCampus} className={`${style.logoCampus}`} alt="logoCampus" /></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="BarraNav mx-auto gap-5 ">
                <Nav.Link id="Text1" className=" text-center text-white fw-bold mt-3" as={Link} to="/AreaAcademica">
                <span>Área</span><span className="d-block">Académica</span>
                </Nav.Link>

                <Nav.Link id="Text1" className="text-center text-white fw-bold mt-3" as={Link} to="/AreaDirectiva">
                <span>Área</span><span className="d-block">Directiva</span>
                </Nav.Link>

                <Nav.Link id="Text1" className="text-center text-white  fw-bold mt-3" as={Link} to="/AreaComunitaria">
                <span>Área</span><span className="d-block">Comunitaria</span>
                </Nav.Link>

                <Nav.Link id="Text1" className="text-center  text-white fw-bold mt-3" as={Link} to="/AreaAdministrativa">
                <span>Área</span><span className="d-block">Administrativa</span>
                </Nav.Link>

               
                
               
            </Nav>
            <Nav.Link className="text-center col-lg-3 fs-4 fw-bold btnIngresar" id="btnIngresar" as={Link} to="/Login">
                <i className="bi bi-box-arrow-in-right me-2 d-block "></i>Ingresar
                </Nav.Link>
        </Navbar.Collapse>
        </Navbar> 

        <section>
            <Outlet></Outlet>
        </section>
       </>


    )
}
export default NavBarExample