import React from 'react';

function EticaPage() {
	// Ejemplo de archivos y carpetas de Google Drive
	// Reemplaza los IDs y nombres por los reales que quieras mostrar
	const archivos = [
		{
			nombre: 'Código de Ética',
			url: 'https://drive.google.com/uc?export=download&id=1A2B3C4D5E6F7G8H9I0J',
		},
		{
			nombre: 'Manual de Buenas Prácticas',
			url: 'https://drive.google.com/uc?export=download&id=1K2L3M4N5O6P7Q8R9S0T',
		},
	];

	const carpetas = [
		{
			nombre: 'Documentos Ética',
			url: 'https://drive.google.com/drive/folders/1Z2X3C4V5B6N7M8Q9W0E',
		},
	];

	return (
		<div className="etica-container" style={{ maxWidth: 800, margin: '40px auto', padding: 32, background: '#fff', borderRadius: 12, boxShadow: '0 4px 24px rgba(44,62,80,0.10)' }}>
			<h1 style={{ color: '#8a0047', marginBottom: 24 }}>Ética y Buenas Prácticas</h1>
			<p style={{ marginBottom: 24 }}>
				Descarga aquí los documentos y carpetas relacionados con la ética institucional:
			</p>
			<h2 style={{ color: '#1e5b4f', marginBottom: 12 }}>Archivos disponibles</h2>
			<ul style={{ marginBottom: 32 }}>
				{archivos.map((archivo, idx) => (
					<li key={idx} style={{ marginBottom: 12 }}>
						<a
							href={archivo.url}
							target="_blank"
							rel="noopener noreferrer"
							style={{ color: '#611232', fontWeight: 'bold', textDecoration: 'underline', fontSize: '1.1rem' }}
						>
							Descargar {archivo.nombre}
						</a>
					</li>
				))}
			</ul>
			<h2 style={{ color: '#1e5b4f', marginBottom: 12 }}>Carpetas en Google Drive</h2>
			<ul>
				{carpetas.map((carpeta, idx) => (
					<li key={idx} style={{ marginBottom: 12 }}>
						<a
							href={carpeta.url}
							target="_blank"
							rel="noopener noreferrer"
							style={{ color: '#9b2247', fontWeight: 'bold', textDecoration: 'underline', fontSize: '1.1rem' }}
						>
							Abrir carpeta: {carpeta.nombre}
						</a>
					</li>
				))}
			</ul>
		</div>
	);
}

export default EticaPage;
