// Buscador de médicos
document.addEventListener('keyup', e => {
    if (e.target.matches('#campo-buscar-medico')) {
        const textoBusqueda = e.target.value.toLowerCase();
        const tarjetasMedicos = document.querySelectorAll('.tarjeta-medico');

        tarjetasMedicos.forEach(tarjeta => {
            const nombre = tarjeta.querySelector('.medico-nombre').textContent.toLowerCase();
            const especialidad = tarjeta.querySelector('.medico-especialidad').textContent.toLowerCase();

            if (nombre.includes(textoBusqueda) || especialidad.includes(textoBusqueda)) {
                tarjeta.style.display = 'flex';
            } else {
                tarjeta.style.display = 'none';
            }
        });
    }
});