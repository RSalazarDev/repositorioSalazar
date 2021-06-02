export class Usuario {
    id?: number
    email?: String
    password?: String
    nombre?: String
    apellidos?: String
    telefono?: String
    s_social?: String
}

export interface acceso {
    email: string
    password: string
}