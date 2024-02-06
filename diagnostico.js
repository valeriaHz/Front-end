/* const saludo = (nombre = "desconocido", edad = "desconocido") => {
    let mayor_menor = edad >= 18 ? 'mayor' : 'menor';
    return `Hola bienvenido ${nombre} eres ${mayor_menor} de edad`;
};

console.log(saludo('valeria', 23)); */

/* const saludo = (nombre = "desconocido", edad = "desconocido") =>`Hola bienvenido ${nombre} eres ${edad >= 18 ? 'mayor' : 'menor'} de edad`;

console.log (saludo('valeria',23));
 */
/* const saludo = nombre  => {return `Hola bienvenido ${nombre} eres ${edad >= 18 ? 'mayor' : 'menor'} de edad`};*/

/* const nombres = ['Jiovanni', ['Karla', 'lucia'] , 'Manuel', 'Lili', 'Flor', 'Dulce', 'Roberto'];
let[nombre1, [nom1,nom2] = nombre2, nombre3, nombre4, nombre5,  nombre6] = nombres;  //restructuración => hace referencia a una variable para cadenas mas largas

console.log(nom2); */


const datos_personales = {
    nombre:"Valeria",
    ap_paterno: "Aguilar",
    ap_materno: "Hernández",
}

console.log(datos_personales['nombre']);
console.log(datos_personales.nombre);

//requerimos el nombre de la kay para poder llamar el dato
let {nombre, ap_paterno, ap_materno} = datos_personales;
console.log(ap_materno);




