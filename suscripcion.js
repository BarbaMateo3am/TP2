const form = document.getElementById('subscription-form');

const fields = [
  { id: 'nombre', validator: val => val.length > 6 && val.includes(' '), error: 'Debe tener más de 6 letras y un espacio.' },
  { id: 'email', validator: val => /^[^@]+@[^@]+\.[a-z]{2,}$/.test(val), error: 'Debe tener un email válido.' },
  { id: 'password', validator: val => /[a-zA-Z]/.test(val) && /\d/.test(val) && val.length >= 8, error: 'Debe tener al menos 8 caracteres, letras y números.' },
  { id: 'repeat-password', validator: () => document.getElementById('repeat-password').value === document.getElementById('password').value, error: 'Las contraseñas no coinciden.' },
  { id: 'edad', validator: val => parseInt(val) >= 18, error: 'Debe ser mayor o igual a 18.' },
  { id: 'telefono', validator: val => /^\d{7,}$/.test(val), error: 'Debe tener al menos 7 dígitos sin espacios ni símbolos.' },
  { id: 'direccion', validator: val => val.length >= 5 && /\d/.test(val) && /[a-zA-Z]/.test(val) && val.includes(' '), error: 'Debe tener letras, números y un espacio.' },
  { id: 'ciudad', validator: val => val.length >= 3, error: 'Debe tener al menos 3 caracteres.' },
  { id: 'codigo-postal', validator: val => val.length >= 3, error: 'Debe tener al menos 3 caracteres.' },
  { id: 'dni', validator: val => /^\d{7,8}$/.test(val), error: 'Debe ser un número de 7 u 8 dígitos.' }
];

fields.forEach(({ id, validator, error }) => {
  const input = document.getElementById(id);
  const errorDiv = document.getElementById('error-' + id);

  input.addEventListener('blur', () => {
    const value = input.value.trim();
    if (!validator(value)) {
      errorDiv.textContent = error;
    }
  });

  input.addEventListener('focus', () => {
    errorDiv.textContent = '';
  });
});

function mostrarModal(texto) {
  document.getElementById('modal-text').textContent = texto;
  document.getElementById('modal').style.display = 'block';
}

form.addEventListener('submit', async (e) => {
  e.preventDefault();
  let errores = [];
  const datosAEnviar = {};

  fields.forEach(({ id, validator, error }) => {
    const input = document.getElementById(id);
    const valor = input.value.trim();
    if (!validator(valor)) {
      errores.push(`${id}: ${error}`);
      document.getElementById('error-' + id).textContent = error;
    } else {
      datosAEnviar[id] = valor;
    }
  });

  if (errores.length > 0) {
    mostrarModal('Errores en el formulario:\n' + errores.join('\n'));
    return;
  }

  try {
    const res = await fetch('https://jsonplaceholder.typicode.com/users', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(datosAEnviar)
    });

    if (!res.ok) {
      const error = await res.text();
      throw new Error(`Error ${res.status}: ${error}`);
    }

    const data = await res.json();
    mostrarModal('¡Formulario enviado con éxito!\n\nRespuesta del servidor:\n' + JSON.stringify(data, null, 2));
    localStorage.setItem('datosSuscripcion', JSON.stringify(data));
    form.reset();
  } catch (error) {
    mostrarModal('Error al enviar:\n' + error.message);
  }
});

window.addEventListener('DOMContentLoaded', () => {
  const guardado = localStorage.getItem('datosSuscripcion');
  if (guardado) {
    const data = JSON.parse(guardado);
    mostrarModal('Datos cargados desde LocalStorage:\n' + JSON.stringify(data, null, 2));
  }
});

