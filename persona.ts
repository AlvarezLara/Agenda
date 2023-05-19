import { Direccion } from "./direccion";
import { Mail, tipoMail } from "./mail";
import { Telefono, tipoTel } from "./telefono";

type sexo = "Hombre" | "Mujer" | "Prefiero no Contestar"

export class Persona {
    constructor (public nombre: string,
        public apellidos: string, 
        public edad: number,
        public DNI: string, 
        public cumpleanos: Date,
        public colorFavorito: string,
        public sexo: sexo,
        public direcciones: Direccion[] = [],
        public mails: Mail []= [],
        public telefonos: Telefono[]= [],
        public notas: string []= []){}

       agregarTelefono(tipo: tipoTel,numero: number) {
        const newTelefono= new Telefono (tipo,numero);
        this.telefonos.push(newTelefono);
       }

        agregarDireccion(calle: string,numero: number,piso: number,letra: string,codigoPostal: number,poblacion: string,provincia: string,):void{
            const direccionAgregar = new Direccion(calle,numero,piso,letra,codigoPostal,poblacion,provincia);
            this.direcciones.push(direccionAgregar);
        }

        agregarMail(tipoMail:tipoMail, direccion:string){
            const email = new Mail(tipoMail,direccion);
            this.mails.push(email);
        }

}