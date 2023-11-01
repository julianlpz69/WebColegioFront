import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Importa los estilos de Bootstrap
import style from './Footer.module.css';



const FooterExample = () => {
  return (
    <footer>
        <p className='fs-5'>© 2023  -   Desarrollado por the best.</p>
        <div className={ `navbar navbar-expand-lg ${style.footer}`} id='footer'>
          <div className="mx-auto text-center">
            <span className="navbar-text mb-0 m-5 text-white"><i className="bi bi-telephone-forward mt-5  me-2"></i> (607) 6436161</span>
            <span className="navbar-text m-5 text-white"><i className="bi bi-envelope text-white me-2"></i>Comunidad@CampusLands.edu.co</span>
            <span className="navbar-text m-5 text-white"><i className="bi bi-whatsapp mt-5  me-2"></i>(+57) 3132419753</span>
          </div>
        </div>
    </footer>
  );
};

export default FooterExample;