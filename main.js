"use strict";
exports.__esModule = true;
var persona_1 = require("./persona");
// Agenda
var personas = [];
function agregarPersonaAgenda(persona) {
    personas.push(persona);
}
//Persona 1
var persona1 = new persona_1.Persona("Lara", "Alvarez", 30, '01865987Z', new Date(1992, 8, 11), "verde", "Mujer");
persona1.agregarDireccion('Rua de Magallanes', 23, 3, 'G', 36278, 'Vigo', 'Pontevedra');
persona1.agregarTelefono("movil", 1559373563);
persona1.agregarMail("personal", "laralvarez@gmail.com");
agregarPersonaAgenda(persona1);
//Persona 2
var persona2 = new persona_1.Persona("Marcos", "Rossi", 33, 'Y7654324X', new Date(1988, 1, 7), "verde", "Hombre");
persona2.agregarDireccion('Rua de argetina', 23, 3, 'G', 36278, 'Vigo', 'Pontevedra');
persona2.agregarTelefono("movil", 4444444444);
persona2.agregarMail("personal", "marcos@gmail.com");
agregarPersonaAgenda(persona2);
//Persona 3
var persona3 = new persona_1.Persona("Magali", "Dieguez", 26, '076590Y', new Date(1998, 10, 23), "verde", "Mujer");
persona3.agregarDireccion('Rua de venezuela', 23, 3, 'G', 36278, 'Vigo', 'Pontevedra');
persona3.agregarTelefono("movil", 8888888);
persona3.agregarMail("laboral", "magali@gfenacs.com");
agregarPersonaAgenda(persona3);
// Busqueda por DNI 
var personaAModificar = personas.filter(function (p) { return p.DNI === '01865987Z'; })[0];
if (personaAModificar != null) {
    personaAModificar.agregarDireccion('Rua de Argentina', 11, 5, 'A', 36208, 'Vigo', 'Pontevedra');
    personaAModificar.agregarTelefono("casa", 12345678);
    personaAModificar.agregarMail("laboral", "laralvarez2023@laboral.com");
}
personas.forEach(function (element) { return console.log(element); });
