import { Navbar, Nav } from "react-bootstrap"
import { Outlet, Link } from "react-router-dom"
import  LogoCampus  from "../Images/Logo-campus.png"
import '../Styles/Nabvar.css';

const NavBarExample = () => {
    return(
       <>    
       <Navbar className="navBg" id="Navar" bg="" variant="dark" expand="lg">
        
            <Navbar.Brand className="text-primary mx-5" as={Link} to="/inicio" ><img src={LogoCampus} id="logoCampus" alt="logoCampus" /></Navbar.Brand>
            <Navbar.Toggle className="bg-primary" aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="BarraNav mx-auto ">
                <Nav.Link id="Text1" className=" text-center me-4 fw-bold mt-3"  as={Link} to="/AreaAcademica" ><span>Área</span><span className="d-block">Academica</span></Nav.Link>
                <Nav.Link id="Text1" className=" text-center me-4 fw-bold mt-3" as={Link} to="/AreaDirectiva"><span>Área</span><span className="d-block">Directiva</span></Nav.Link>
                <Nav.Link id="Text1" className=" text-center me-4 fw-bold mt-3" as={Link} to="/AreaComunitaria"><span>Área</span><span className="d-block">Comunitaria</span></Nav.Link>      
                <Nav.Link id="Text1" className=" text-center me-4 fw-bold mt-3" as={Link} to="/AreaAdministrativa"><span>Área</span><span className="d-block">Administrativa</span></Nav.Link>
                <div id="btnIngresa" className=" col-lg-2  col-xl-4 text-center mx-5">
                <Nav.Link className="text-center fs-4 me-4 fw-bold btnIngresar" id="btnIngresar" as={Link} to="/Login"><i className="bi bi-box-arrow-in-right me-2 d-block "></i>Ingresar</Nav.Link>
                </div>
                          
            </Nav>
            
            
            </Navbar.Collapse>
    
        </Navbar>  

        <section>
            <Outlet></Outlet>
        </section> 
       </> 
    )
}
export default NavBarExample