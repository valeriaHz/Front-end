
const datos = [
  {
    nombre: "jose",
    apellido: "avila",
    fecha_nacimiento: "10/05/2000",
    puesto: "sistemas",
    matricula: 121651,
    carrera: "Sistemas",
    edad: 34,
    escuela: "UVM",
    semestre: 7,
  },
  {
    nombre: "ana",
    apellido: "perez",
    fecha_nacimiento: "30/02/2001",
    puesto: "gestion",
    matricula: 121632,
    carrera: "Gestion",
    edad: 38,
    escuela: "UAM",
    semestre: 4,
  },
  {
    nombre: "julio",
    apellido: "lopez",
    fecha_nacimiento: "11/08/2002",
    puesto: "contador",
    matricula: 121623,
    carrera: "Contaduria",
    edad: 22,
    escuela: "UNAM",
    semestre: 3,
  },
  {
    nombre: "Carlos",
    apellido: "santos",
    fecha_nacimiento: "09/12/2000",
    puesto: "diseñador",
    matricula: 121685,
    carrera: "Diseño",
    edad: 33,
    escuela: "IPN",
    semestre: 5,
  },
  {
    nombre: "Felipe",
    apellido: "Lopez",
    fecha_nacimiento: "15/09/1999",
    puesto: "fotografo",
    matricula: 121650,
    carrera: "Fotografia",
    edad: 43,
    escuela: "UVM",
    semestre: 9,
  },
];

datos.map(({ nombre, apellido, fecha_nacimiento, puesto, matricula, carrera, edad, escuela, semestre } = persona) => console.log(`los datos son: ${nombre}, ${apellido}, ${fecha_nacimiento}, ${puesto}, ${matricula}, ${carrera}, ${edad}, ${escuela}, ${semestre}`));

datos.push ("marcos", "sanchez", "01/04/1998", "administrador", 151647, "administracion", 22, "ITMA", 5);
console.log(`los datos son: ${nombre}, ${apellido}, ${fecha_nacimiento}, ${puesto}, ${matricula}, ${carrera}, ${edad}, ${escuela}, ${semestre}`);


