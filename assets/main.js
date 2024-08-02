document.getElementById('reservaForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const reserva = {
        nombre: document.getElementById('nombre').value,
        apellido: document.getElementById('apellido').value,
        correo: document.getElementById('correo').value,
        edad: document.getElementById('edad').value,
        fecha: document.getElementById('fecha').value
    };

    const handler = {
        set: function(target, property, value) {
            if (property === 'edad' && value < 18) {
                alert('Debes ser mayor de edad para crear una reservación');
                return false;
            } else {
                target[property] = value;
                return true;
            }
        }
    };

    const proxyReserva = new Proxy(reserva, handler);

    // Try to set the values
    for (let key in reserva) {
        proxyReserva[key] = reserva[key];
    }

    // If the age is valid, log the reservation
    if (reserva.edad >= 18) {
        console.log(proxyReserva);
        alert('Reserva creada con éxito');
    }
});
