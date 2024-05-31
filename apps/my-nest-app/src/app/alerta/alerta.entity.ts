import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Embarcacion } from "../embarcacion/embarcacion.entity";


@Entity({name: 'alerta'})
export class Alerta {
    
    @PrimaryGeneratedColumn('uuid')
    Id_alerta: string;

    @Column()
    descripcion: string;

    @OneToOne(() => Embarcacion)
    @JoinColumn()
    embarcacion: Embarcacion

}