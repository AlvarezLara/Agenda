export type tipoMail= "personal"| "laboral"

export class Mail {
    constructor(
        public tipo: tipoMail,
        public direccion: string
    ){}
}