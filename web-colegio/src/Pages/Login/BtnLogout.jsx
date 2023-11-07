import { useNavigate } from 'react-router-dom';


const BtnLogout = (logout) => {
    const navigate = useNavigate();
    const funcion = () =>{
        localStorage.setItem('estaAutentica', false)
        navigate('/Login');
    }

    return(
        <a onClick={funcion} type='button' className='btnLogout'>
            <li className={`${logout}`}>
                <i class="bi bi-0-circle"></i>
                <span className="nav-item">Cerrar Secion</span>
            </li>
        </a>
    )
  };

  export default BtnLogout