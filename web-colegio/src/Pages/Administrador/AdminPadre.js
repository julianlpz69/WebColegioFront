import NavbarAdmin from '../../Layouts/NavbarAdmin';
import style from "./AdminPadre.module.css"
const AdminPadre =() =>{
    return (
      
      <div className={`${style.AdminPadre}`}>
        <NavbarAdmin/>
        <div>
          <h1>AdminPadre</h1>
          
        </div>
        
        
      </div>
      )
}  


export default AdminPadre