import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";


@Entity({name: "embarcacion"})
export class Embarcacion {
    
    @PrimaryGeneratedColumn("uuid")
    Id: string; //Id de la embarcacion

    @Column({unique: true})
    nombre: string; //nombre de la embarcacion (debe ser único)

    @Column()
    tipo_embarcacion: string;   //tipo de embarcacion

    @Column()
    tipo_material: string;  //tipo de material de la embarcacion

    @Column("int")
    capacidad_maxima: number;   //Capacidad maxima de pasajeros permitida
    
    @Column("int")
    cantidad_pasajero: number;  //Cantidad de pasajeros en flota

    @Column("date")
    fecha_fabricacion: Date;    //fecha de fabricacion de la embarcacion

    @Column("int")
    cantidad_motor: number;   //Cantidad de motores de la embarcacion

}

