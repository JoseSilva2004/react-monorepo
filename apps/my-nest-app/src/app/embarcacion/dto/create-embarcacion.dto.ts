import { uuid } from "uuidv4";

export class CreateEmbarcacionDto {
    Id_embarcacion = uuid()
    nombre: string
    tipo_embarcacion: string
    tipo_material: string
    capacidad_maxima: number
    cantidad_pasajero: number
    fecha_fabricacion: Date
    cantidad_motor: number
}