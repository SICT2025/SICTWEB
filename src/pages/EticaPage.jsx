import React from 'react';
import '../assets/styles/pages/EticaPage.css';

function EticaPage() {

	const archivos = [
		{
			nombre: 'Documentos de C_digo_de__tica_SFP_2022',
			url: 'https://drive.google.com/uc?export=download&id=1mP3e-TGUAkxvYJZl2nyLBM5EnRSY421h',
			descripcion: 'Contiene el Código de Ética de la Secretaría de la Función Pública (SFP) actualizado al año 2022. Establece los principios, valores y reglas de conducta para los servidores públicos.'
		},
		{
			nombre: 'Documentos de Codigo_de_Etica-amigable_SFP_2022',
			url: 'https://drive.google.com/uc?export=download&id=1kppuzhC77tY7vrp_oSZ_n3ZB0z2FcGp4',
			descripcion: 'Versión amigable y resumida del Código de Ética SFP 2022, diseñada para facilitar la comprensión de los valores y principios éticos.'
		},
	];

	const archivo = [
		{
			nombre: 'Documentos de POLITICA DE IGUALDAD LABORAL Y NO DISCRIMINACION C_250527_164531',
			url: 'https://drive.google.com/uc?export=download&id=1ur-8nwZWK66Bjo32_FrgTYURQjFxvnEQ',
			descripcion: 'Documento oficial que describe la política institucional para promover la igualdad laboral y prevenir cualquier tipo de discriminación.'
		},
		{
			nombre: 'Documentos de Politica_de_Igualdad_Laboral_y_No_Discrminaci_n_-_SICT',
			url: 'https://drive.google.com/uc?export=download&id=1tYhZ6nlwLpVHATWT7vu7Rj2BdXNssC_0',
			descripcion: 'Lineamientos y acciones específicas de la SICT para garantizar un ambiente de trabajo inclusivo, equitativo y libre de discriminación.'
		},
	];

	return (
		<div className="etica-container" style={{ maxWidth: 800, margin: '40px auto', padding: 32, background: '#fff', borderRadius: 12, boxShadow: '0 4px 24px rgba(44,62,80,0.10)' }}>
			<h1 style={{ color: '#8a0047', marginBottom: 24 }}>Ética y Buenas Prácticas</h1>
			<p style={{ marginBottom: 24 }}>
				Descarga aquí los documentos y conoce sobre el Código de Ética y la Política de Igualdad 
                Laboral y No Discriminación de nuestra institución. Estos documentos son fundamentales para promover 
                un ambiente de trabajo ético, inclusivo y respetuoso para todos los empleados:
			</p>
			<h2>Codigo de Etica</h2>
						<ul>
							{archivos.map((archivo, idx) => (
								<li key={idx} style={{ marginBottom: 18 }}>
									<a
										href={archivo.url}
										download
									>
										Descargar {archivo.nombre}
									</a>
									<br />
									<span style={{ fontSize: '0.95rem', color: '#444' }}>{archivo.descripcion}</span>
								</li>
							))}
						</ul>
			<h2 style={{ color: '#1e5b4f', marginBottom: 12 }}>Política de Igualdad Laboral y No Discriminación</h2>
						<ul>
							{archivo.map((archivo, idx) => (
								<li key={idx} style={{ marginBottom: 18 }}>
									<a
										href={archivo.url}
										download
									>
										Descargar {archivo.nombre}
									</a>
									<br />
									<span style={{ fontSize: '0.95rem', color: '#444' }}>{archivo.descripcion}</span>
								</li>
							))}
						</ul>
		</div>
	);
}

export default EticaPage;
