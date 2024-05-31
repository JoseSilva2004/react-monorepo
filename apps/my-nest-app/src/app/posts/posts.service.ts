import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { InjectRepository } from '@nestjs/typeorm';
import { Post } from './post.entity';
import { Repository } from 'typeorm';
import { CreatePostDto } from './dto/create-post.dto';

@Injectable()
export class PostsService {
    
    constructor (
        @InjectRepository(Post) private postRepository: Repository<Post>,
        private usersService: UsersService  //el constructor nos sirve para traer metodos de otros modulos y asi reutilizarlos

    ) {}
    
    async createPost(post: CreatePostDto) {
       const usuario_encontrado = await this.usersService.getUser(post.authorId)

        if (!usuario_encontrado) 
            return new HttpException('no se encontró el usuario!!',HttpStatus.NOT_FOUND);
        
        const newPost =  this.postRepository.create(post)
        return this.postRepository.save(newPost);
    
    }

    getPosts() {
        return this.postRepository.find();
    }

}
