import { Medico } from "./medico"
import { Sala } from "./sala"
import { Usuario } from "./usuario"

export class Cita {
    id?: number
    medico?: Medico
    usuario?: Usuario
    sala?: Sala
    fecha?: String
    estado?: String
}
