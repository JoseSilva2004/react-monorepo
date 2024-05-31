import { uuid } from "uuidv4";

export class CreateAlertDto {
    Id_alerta = uuid()
    descripcion: string;
}