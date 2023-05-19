"use strict";
exports.__esModule = true;
exports.Persona = void 0;
var direccion_1 = require("./direccion");
var mail_1 = require("./mail");
var telefono_1 = require("./telefono");
var Persona = /** @class */ (function () {
    function Persona(nombre, apellidos, edad, DNI, cumpleanos, colorFavorito, sexo, direcciones, mails, telefonos, notas) {
        if (direcciones === void 0) { direcciones = []; }
        if (mails === void 0) { mails = []; }
        if (telefonos === void 0) { telefonos = []; }
        if (notas === void 0) { notas = []; }
        this.nombre = nombre;
        this.apellidos = apellidos;
        this.edad = edad;
        this.DNI = DNI;
        this.cumpleanos = cumpleanos;
        this.colorFavorito = colorFavorito;
        this.sexo = sexo;
        this.direcciones = direcciones;
        this.mails = mails;
        this.telefonos = telefonos;
        this.notas = notas;
    }
    Persona.prototype.agregarTelefono = function (tipo, numero) {
        var newTelefono = new telefono_1.Telefono(tipo, numero);
        this.telefonos.push(newTelefono);
    };
    Persona.prototype.agregarDireccion = function (calle, numero, piso, letra, codigoPostal, poblacion, provincia) {
        var direccionAgregar = new direccion_1.Direccion(calle, numero, piso, letra, codigoPostal, poblacion, provincia);
        this.direcciones.push(direccionAgregar);
    };
    Persona.prototype.agregarMail = function (tipoMail, direccion) {
        var email = new mail_1.Mail(tipoMail, direccion);
        this.mails.push(email);
    };
    return Persona;
}());
exports.Persona = Persona;
