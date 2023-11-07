import NavbarAdmin from '../../Layouts/NavbarAdmin';
import style from"./AdminInicio.module.css"

const InicioAdministrador =() =>{
    return (
      
      <div className={`${style.InicioAdministrador}`}>
        <NavbarAdmin/>
        <div>
          <h1>InicioAdministrador</h1>
          
        </div>
        
        
      </div>
      )
}  


export default InicioAdministrador