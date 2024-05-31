import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Embarcacion } from './embarcacion.entity';
import { Repository } from 'typeorm';
import { CreateEmbarcacionDto } from './dto/create-embarcacion.dto';
import { UpdateEmbarcacionDto } from './dto/update-embarcacion.dto';

@Injectable()
export class EmbarcacionService {
  constructor(
    @InjectRepository(Embarcacion)
    private embarcRepository: Repository<Embarcacion>
  ) {}

  async createEmbarcacion(embarcacion: CreateEmbarcacionDto) {
    const nombre_embarcacion = await this.embarcRepository.findOne({
      where: {
        nombre: embarcacion.nombre,
      },
    });

    if (nombre_embarcacion) {
      //Si el nombre de la embarcacion existe, entonces genera un error
      return new HttpException(
        'el nombre de la embarcacion ya existe!!',
        HttpStatus.CONFLICT
      );
    }

    const newEmbarcacion = this.embarcRepository.create(embarcacion);
    return this.embarcRepository.save(newEmbarcacion);
  }

  getEmbarcaciones() {
    return this.embarcRepository.find(); //Find es buscar un dato en la base de datos
  }

  async getEmbarcacionByUUID(uuid: string) {
    const embarc_encontrada = await this.embarcRepository.findOne({
      //Este busca por un UUID
      where: {
        Id: uuid,
      },
    });

    if (!embarc_encontrada) {
      //Si no se encuentra la embarcacion, entonces genera un error
      return new HttpException(
        'la embarcacion no existe!!',
        HttpStatus.NOT_FOUND
      );
    }
    return embarc_encontrada; //De lo contrario, retorna la embarcacion
  }

  async deleteEmbarcacion(uuid: string) {
    //eliminar embarcacion por un UUID
    const embarc_encontrada = await this.embarcRepository.findOne({
      where: {
        Id: uuid,
      },
    });

    if (!embarc_encontrada) { //Si no exsite la embarcacion
      return new HttpException(
        'la embarcacion no existe!!',
        HttpStatus.NOT_FOUND
      );
    }
    return this.embarcRepository.delete({ Id: uuid });
  }

  async updateEmbarcacion(uuid: string, embarcacion: UpdateEmbarcacionDto) {
    const embarc_encontrada = await this.embarcRepository.findOne({
      where: {
        Id: uuid,
      },
    });

    if (!embarc_encontrada) {
      return new HttpException(
        'la embarcacion no existe!!',
        HttpStatus.NOT_FOUND
      );
    }

    const embarc_actualizada = Object.assign(embarc_encontrada, embarcacion);
    return this.embarcRepository.save(embarc_actualizada);
  }
}
