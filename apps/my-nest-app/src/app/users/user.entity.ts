import { Entity, Column, PrimaryGeneratedColumn, OneToOne, JoinColumn, OneToMany } from 'typeorm'
import { Profile } from './profile.entity'
import { Post } from '../posts/post.entity'

//Transformar la clase en entidades
@Entity({name: 'users'})
export class User {

    //Transformar todos los atributos en columnas para la tabla de la base de datos
    @PrimaryGeneratedColumn()   //Generar un ID
    id: number

    @Column({unique: true})
    username: string

    @Column()
    password: string

    @Column({type: 'datetime', default: () => 'CURRENT_TIMESTAMP'})
    createdAt: Date

    @Column({nullable: true}) //No es obligatorio el campo
    authStrategy: string

    @OneToOne(() => Profile)    //Relacion de 1 a 1
    @JoinColumn()
    profile: Profile

    @OneToMany(() => Post, post => post.author)
    posts: Post[]
}