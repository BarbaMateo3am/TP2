const form = document.getElementById('subscription-form');
const nombre = document.getElementById('nombre');
const formTitle = document.getElementById('form-title');

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

nombre.addEventListener('keydown', () => {
  formTitle.textContent = 'HOLA ' + nombre.value;
});
nombre.addEventListener('focus', () => {
  formTitle.textContent = 'HOLA ' + nombre.value;
});

form.addEventListener('submit', (e) => {
  e.preventDefault();
  let errors = [];

  fields.forEach(({ id, validator, error }) => {
    const input = document.getElementById(id);
    const value = input.value.trim();
    if (!validator(value)) {
      errors.push(`${id}: ${error}`);
      document.getElementById('error-' + id).textContent = error;
    }
  });

  if (errors.length > 0) {
    alert('Errores en el formulario:\n' + errors.join('\n'));
  } else {
    const datos = fields.map(({ id }) => {
      const val = document.getElementById(id).value;
      return `${id}: ${val}`;
    }).join('\n');
    alert('Datos ingresados:\n' + datos);
    form.reset();
    formTitle.textContent = 'HOLA';
  }
});
