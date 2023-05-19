export type tipoTel = "movil"| "casa"

export class Telefono {
    constructor(
        public tipo: tipoTel,
        public numero: number,
    ){}

}