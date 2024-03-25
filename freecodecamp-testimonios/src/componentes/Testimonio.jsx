import React from 'react';
import '../hojas-de-estilo/Testimonio.css';

function Testimonio(props) {
	return(
		<article className='contenedor-testimonio'>
			<img 
				className= 'imagen-testimonio' 
				src= {props.imagen}
				alt= {`foto de ${props.nombre}`} />
			<div className='contenedor-texto-testimonio'>
				<p className='nombre-testimonio'>
					<b>{props.nombre}</b> en {props.pais}</p>
				<p className='cargo-testimonio'>
					{props.cargo} en <b>{props.empresa}</b></p>
				<p className='texto-testimonio'>
					"{props.testimonio}"</p>
			</div>
		</article>
	);
}

export default Testimonio;