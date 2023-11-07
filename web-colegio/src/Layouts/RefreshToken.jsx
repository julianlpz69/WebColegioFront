import React, { useEffect } from 'react';


const MiComponente = () => {
    useEffect(() => {
      const interval = setInterval(() => {
        alert('¡Hola, mundo!');
      }, 5000); // 5000 milisegundos = 5 segundos
  
      // Limpia el intervalo cuando el componente se desmonta
      return () => clearInterval(interval);
    }, []); // El segundo argumento del useEffect es un array de dependencias. Al dejarlo vacío, el efecto se ejecuta solo una vez después del primer renderizado.
  
  };
  
  export default MiComponente;