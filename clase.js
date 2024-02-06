const datos = [
  {
    nombre: "jose",
    apellido: "avila",
    fecha_nacimiento: "10/05/2000",
    puesto: "sistemas",
    matricula: 121651,
  },
  {
    nombre: "ana",
    apellido: "perez",
    fecha_nacimiento: "30/02/2001",
    puesto: "gestion",
    matricula: 121632,
  },
  {
    nombre: "julio",
    apellido: "lopez",
    fecha_nacimiento: "11/08/2002",
    puesto: "contador",
    matricula: 121623,
  },
  /* ["carrera", 2010, 12, 6],
  "hola mundo", */
];

//nos permite recolectar todos los datos en un lugar y posteriormente desestructurarlos mas facilmente
const obtener_datos = (dato) => {
  let { nombre, apellido, fecha_nacimiento, puesto, matricula } = dato;
  console.log(
    `los datos son: ${nombre}, ${apellido}, ${fecha_nacimiento}, ${puesto}, ${matricula}`
  );
};

// ***se realiza la desestructuración del objeto con componentes iguales para las primeras 3 partes ***
/* let [dt1,dt2,dt3,dt4] = datos;
obtener_datos(dt1);
obtener_datos(dt2);
obtener_datos(dt3);

let [texto, year, mes, dia] = dt4;

console.log (`los ultimos datos son: ${texto}, ${year}, ${mes}, ${dia}`);


for(let i = 0 ; i < datos.length; i++){
    console.log(datos[i]);
} */

//de donde se van a sacar los datos y donde se van a almacenar posteriormente
//siempre va a recibir una funcion annima (funcion flecha)
//no se puede romper el ciclo de un map

/* datos.map((persona) => {
  let { nombre, apellido, fecha_nacimiento, puesto, matricula } = persona;
  if ("nombre" in persona) {
    console.log(`los datos son: ${nombre}, ${apellido}, ${fecha_nacimiento}, ${puesto}, ${matricula}`);
  } else {
    let [texto, year, mes, dia] = persona;
    console.log(`los ultimos datos son: ${texto}, ${year}, ${mes}, ${dia}`);
  }
});

//Array funcion para construccion de arreglos
datos.map((persona) => {
  if (typeof persona == "object" && !Array.isArray(persona)) {
    let { nombre, apellido, fecha_nacimiento, puesto, matricula } = persona;
    console.log(`los datos son: ${nombre}, ${apellido}, ${fecha_nacimiento}, ${puesto}, ${matricula}`);
  } else if (Array.isArray(persona)) {
    let [texto, year, mes, dia] = persona;
    console.log(`los ultimos datos son: ${texto}, ${year}, ${mes}, ${dia}`);
  }
});

datos.map((datos) => {
  if (Array.isArray(datos)) {
    const[texto, year, mes, dia] = datos;
    console.log(`los ultimos datos son: ${texto}, ${year}, ${mes}, ${dia}`);
  } else if (Array.isArray(datos)) {
    const {nombre,apellido,fecha_nacimiento,puesto,matricula} = datos;
    console.log(`los datos son: ${nombre}, ${apellido}, ${fecha_nacimiento}, ${puesto}, ${matricula}`);
  }
}); */

/* datos.map((datos) => {
  let { nombre, apellido, fecha_nacimiento, puesto, matricula } = datos;
  if (nombre == undefined) {
    let [texto, year, mes, dia] = datos;
    console.log(`los ultimos datos son: ${texto}, ${year}, ${mes}, ${dia}`);
  } else {
    console.log(
      `los datos son: ${nombre}, ${apellido}, ${fecha_nacimiento}, ${puesto}, ${matricula}`
    );
  }
}); */

//funcion mas completa para desestructurar los datos de forma automatica
/* datos.map((persona) => {
  if (typeof persona == "object" && !Array.isArray(persona)) {
    let { nombre, apellido, fecha_nacimiento, puesto, matricula } = persona;
    console.log(`los datos son: ${nombre}, ${apellido}, ${fecha_nacimiento}, ${puesto}, ${matricula}`);
  } else if (Array.isArray(persona)) {
    let [texto, year, mes, dia] = persona;
    console.log(`los ultimos datos son: ${texto}, ${year}, ${mes}, ${dia}`);
  } else {
    console.log(persona);
  }
});
 */
datos.map((persona) => {
  if (typeof persona == "object" && !Array.isArray(persona)) {
    obtener_datos(persona);
  } else if (Array.isArray(persona)) {
    let [texto, year, mes, dia] = persona;
    console.log(`los ultimos datos son: ${texto}, ${year}, ${mes}, ${dia}`);
  } else {
    console.log(persona);
  }
});


//recorrer un objeto de arreglos
datos.map((persona) => {
  obtener_datos(persona);
});

datos.map(({ nombre, apellido, fecha_nacimiento, puesto, matricula } = persona) => {
console.log(`los datos son: ${nombre}, ${apellido}, ${fecha_nacimiento}, ${puesto}, ${matricula}`);
});

datos.map(({ nombre, apellido, fecha_nacimiento, puesto, matricula } = persona) => console.log(`los datos son: ${nombre}, ${apellido}, ${fecha_nacimiento}, ${puesto}, ${matricula}`));


//arreglo dinamico
const datos_clasicos = (... datos) => {
  let [nombre, apellido, carrera] = datos;
  console.log(`Tus datos son: ${nombre}, ${apellido}, ${carrera}`)
}

datos_clasicos("diego", "bollas", "sistemas");