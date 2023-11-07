import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Importa los estilos de Bootstrap
import style from './Footer.module.css';



const FooterExample = () => {
  return (
    <footer className={`${style.body}`}>
       
        <div className={ `container`} id='footer'>
          <div className="row text-center">
            <div className='col-6 col-lg-4'>
              <p className="navbar-text  text-white"><i class="bi bi-telephone-forward"></i> (607) 6436161</p>
            </div>
            <div className='col-6 col-lg-4'>
              <span className="navbar-text  text-white"><i className="bi bi-envelope text-white"></i>Comunidad@CampusLands.edu.co</span>
            </div>
            <div className='col-12 col-lg-4'>
              <span className="navbar-text  text-white"><i className="bi bi-whatsapp "></i>(+57) 3132419753</span>
            </div>
          </div>
        </div>
    </footer>
  );
};

export default FooterExample;