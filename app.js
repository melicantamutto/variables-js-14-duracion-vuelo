console.log('Duración de vuelo');

alert('Duración de vuelo');

const escala1 = prompt('Ingresá el destino de tu primera escala');
const duracion1 = prompt('Ingresá la duración del primer vuelo en minutos');
const escala2 = prompt('Ingresá el destino de tu segunda escala');
const duracion2 = prompt('Ingresá la duración del segundo vuelo en minutos');
const escala3 = prompt('Ingresá el destino de tu tercer escala');
const duracion3 = prompt('Ingresá la duración del tercer vuelo en minutos');

const total = Number(duracion1) + Number(duracion2) + Number(duracion3);

alert(`El primer vuelo a ${escala1} dura ${duracion1} minutos,
El primer vuelo a ${escala2} dura ${duracion2} minutos,
El primer vuelo a ${escala3} dura ${duracion3} minutos,
El total del vuelo es de ${total}.
`);
