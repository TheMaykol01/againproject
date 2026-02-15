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

const formularioCita = document.getElementById('formulario-cita');
if (formularioCita) {
  formularioCita.addEventListener('submit', function (e) {
    let warnings = "";
    let entrar = false;
    const regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    const parrafo = document.getElementById("warning");

    const nombre = document.getElementById("campo-nombre");
    const telefono = document.getElementById("campo-telefono");
    const email = document.getElementById("campo-correo");
    const especialidad = document.getElementById("campo-especialidad");
    const fecha = document.getElementById("campo-fecha");
    const horario = document.getElementById("campo-horario");

    parrafo.innerHTML = "";

    if (nombre.value.length < 3) {
      warnings += `El nombre no es válido <br>`;
      entrar = true;
    }
    if (telefono.value.length < 10) {
      warnings += `El teléfono no es válido <br>`;
      entrar = true;
    }
    if (!regexEmail.test(email.value)) {
      warnings += `El email no es válido <br>`;
      entrar = true;
    }
    if (especialidad.value === "") {
      warnings += `Selecciona una especialidad <br>`;
      entrar = true;
    }
    if (fecha.value === "") {
      warnings += `Selecciona una fecha <br>`;
      entrar = true;
    } else {
      const fechaSeleccionada = new Date(fecha.value + 'T00:00:00');
      const fechaActual = new Date();
      fechaActual.setHours(0, 0, 0, 0);
      if (fechaSeleccionada < fechaActual) {
        warnings += `La fecha debe ser hoy o futura <br>`;
        entrar = true;
      }
    }
    if (horario.value === "") {
      warnings += `Selecciona un horario <br>`;
      entrar = true;
    }

    if (entrar) {
      e.preventDefault();
      parrafo.innerHTML = warnings;
    } else {
      e.preventDefault();
      parrafo.innerHTML = "Enviado";
    }
  });
}

const formularioCV = document.getElementById('formulario-cv');
if (formularioCV) {
  formularioCV.addEventListener('submit', function (e) {
    let warnings = "";
    let entrar = false;
    const regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    const parrafo = document.getElementById("warning-cv");

    const nombre = document.getElementById("campo-nombre-cv");
    const email = document.getElementById("campo-correo-cv");
    const telefono = document.getElementById("campo-telefono-cv");
    const perfil = document.getElementById("campo-perfil");
    const archivo = document.getElementById("campo-archivo");

    // El campo mensaje es opcional, no requiere validación obligatoria
    // const mensaje = document.getElementById("campo-mensaje-cv");

    parrafo.innerHTML = "";

    if (nombre.value.length < 3) {
      warnings += `El nombre no es válido <br>`;
      entrar = true;
    }
    if (!regexEmail.test(email.value)) {
      warnings += `El email no es válido <br>`;
      entrar = true;
    }
    if (telefono.value.length < 10) {
      warnings += `El teléfono no es válido <br>`;
      entrar = true;
    }
    if (perfil.value === "") {
      warnings += `Selecciona tu perfil profesional <br>`;
      entrar = true;
    }
    if (archivo.value === "") {
      warnings += `Debes adjuntar tu CV <br>`;
      entrar = true;
    }

    if (entrar) {
      e.preventDefault();
      parrafo.innerHTML = warnings;
    } else {
      parrafo.innerHTML = "Enviado";
    }
  });
}

// --- Lógica del Sistema de Gestión de Citas ---


