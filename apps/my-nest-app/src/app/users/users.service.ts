import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './user.entity';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { CreateProfileDto } from './dto/create-profile.dto';
import { Profile } from './profile.entity';


@Injectable()
export class UsersService {
    constructor (
        @InjectRepository(User) private userRepository: Repository<User>,
        @InjectRepository(Profile) private profileRepository: Repository<Profile>,
    ) {}
        

        async createUser(users: CreateUserDto) {  //Registrar un usuario
            
            const usuario_encontrado = await this.userRepository.findOne({    //Manejar Excepciones
                where: {
                    username: users.username
                }

            })

            if (usuario_encontrado) {
                return new HttpException('El usuario ya existe!!', HttpStatus.CONFLICT)
            }
            
            const newUser = this.userRepository.create(users)
            return this.userRepository.save(newUser)
        }

        getUsers() {
            return this.userRepository.find()   //Buscar todos los usuarios

        }

        //Obteer un usuario con ID
       async getUser(id: number) {
            const usuario_encontrado = await this.userRepository.findOne({
                where: {
                    id: id
                }
            });

            if (!usuario_encontrado) {  //Si no se encuentra el usuario
                return new HttpException('el usuario no existe!!', HttpStatus.NOT_FOUND)
            
            }
            return usuario_encontrado;

        }

        //Eliminar usuario por ID
        async deleteUser(id: number) {
            const usuario_encontrado = await this.userRepository.findOne({
                where: {
                    id
                }

            });
                //Si el usuario a eliminar no existe, retornar el error
            if (!usuario_encontrado) {
                return new HttpException('el usuario no existe!!', HttpStatus.NOT_FOUND);

            }   
            //De lo contrario, elimina el usuario
            return this.userRepository.delete({ id });
        }

        async updateUser(id: number, user: UpdateUserDto) {
           const usuario_encontrado = await this.userRepository.findOne({
            where: {
                id
            }

            
           });

           if (!usuario_encontrado) {
            return new HttpException('el usuario no existe!!', HttpStatus.NOT_FOUND);

           }

           const usuario_actualizado = Object.assign(usuario_encontrado, user)
           return this.userRepository.save(usuario_actualizado)
        }

        async createProfile(id: number, profile: CreateProfileDto) {
            const usuario_encontrado = await this.userRepository.findOne({
                where: {
                id,
            }});

            if (!usuario_encontrado) {
                return new HttpException('usuario no encontrado!!', HttpStatus.NOT_FOUND)
            }

            const newProfile = this.profileRepository.create(profile)
            const saveProfile =  await this.profileRepository.save(newProfile)
            usuario_encontrado.profile = saveProfile


            return this.userRepository.save(usuario_encontrado)
        }
}
