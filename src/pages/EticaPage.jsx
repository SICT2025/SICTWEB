import React from 'react';
import '../assets/styles/pages/EticaPage.css';

function EticaPage() {

	const archivos = [
		{
			nombre: 'Documentos de Codigo de Etica',
			url: 'https://drive.google.com/drive/folders/1-QDK7sX0XVEk-KZaDK_5E6pPj5VqxzsI?usp=sharing',
			descripcion: 'Contiene el Código de Ética de la Secretaría de la Función Pública (SFP) actualizado al año 2022. Establece los principios, valores y reglas de conducta para los servidores públicos.'
		},

	];

	const archivo = [
		{
			nombre: 'Documentos de Política de Igualdad Laboral y No Discriminación',
			url: 'https://drive.google.com/drive/folders/1OjpP_51yu_EU5x_04eN803rQT0R_z5Bu?usp=sharing',
			descripcion: 'Documento oficial que describe la política institucional para promover la igualdad laboral y prevenir cualquier tipo de discriminación.'
		},

	];

		return (
			<div className="etica-container">
				<h1>Ética y Buenas Prácticas</h1>
				<p className="etica-desc">
					Descarga aquí los documentos y conoce sobre el Código de Ética y la Política de Igualdad 
					Laboral y No Discriminación de nuestra institución. Estos documentos son fundamentales para promover 
					un ambiente de trabajo ético, inclusivo y respetuoso para todos los empleados:
				</p>
				<h2 className="etica-codigo">Codigo de Etica</h2>
				<ul>
					{archivos.map((archivo, idx) => (
						<li key={idx} className="etica-lista">
										<a
											href={archivo.url}
											target="_blank"
											rel="noopener noreferrer"
											download
										>
											Descargar {archivo.nombre}
										</a>
							<br />
							<span className="etica-descripcion">{archivo.descripcion}</span>
						</li>
					))}
				</ul>
			<h2 className="etica-politica">Política de Igualdad Laboral y No Discriminación</h2>
				<ul>
					{archivo.map((archivo, idx) => (
						<li key={idx} className="etica-lista">
										<a
											href={archivo.url}
											target="_blank"
											rel="noopener noreferrer"
											download
										>
											Descargar {archivo.nombre}
										</a>
							<br />
							<span className="etica-descripcion">{archivo.descripcion}</span>
						</li>
					))}
				</ul>
			</div>
		);
}

export default EticaPage;
