import { useEffect, useState } from 'react';
import Testimonio from './Testimonio';
import datos from './Testimonios.json';

function Testimonios() {    
    const [testimonios, setTestimonios] = useState([])  

    useEffect(() => {
        setTestimonios(datos);
    }, []); // El segundo argumento de useEffect es un array de dependencias, en este caso está vacío
    
    return(
        <div>
            {testimonios.map((testimonio, index) => {
                return(
                    <Testimonio
                        key={index}
                        nombre={testimonio.nombre}
                        pais={testimonio.pais}
                        imagen={testimonio.imagen}
                        empresa={testimonio.empresa}
                        cargo={testimonio.cargo}
                        testimonio={testimonio.testimonio} />
                );
            })}
        </div>
    );
}

export default Testimonios;