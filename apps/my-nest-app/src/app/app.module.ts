import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {UsersModule} from './users/users.module';
import {TypeOrmModule} from '@nestjs/typeorm';
import { User } from './users/user.entity';
import { EmbarcacionModule } from './embarcacion/embarcacion.module';
import { Embarcacion } from './embarcacion/embarcacion.entity';
import { Profile } from './users/profile.entity';
import { Post } from './posts/post.entity';
import { PostsModule } from './posts/posts.module';
import { AlertaModule } from './alerta/alerta.module';
import { Alerta } from './alerta/alerta.entity';


@Module({
  //Conectarse a la base de datos
  imports: [
    TypeOrmModule.forRoot({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: '30230054jose',
    database: 'prueba',
    entities: [User, Embarcacion, Profile, Post, Alerta],
    synchronize: true
  }),
  UsersModule, EmbarcacionModule, PostsModule, AlertaModule], //Los archivos que se van a leer
controllers: [AppController],
providers: [AppService],


})
export class AppModule {}
