import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Alerta } from './alerta.entity';
import { Repository } from 'typeorm';
import { Embarcacion } from '../embarcacion/embarcacion.entity';
import { CreateAlertDto } from './dto/create-alert.dto';

@Injectable()
export class AlertaService {
    constructor (
        @InjectRepository(Alerta) private alertRepository: Repository<Alerta>,
        @InjectRepository(Embarcacion) private embarcRepository: Repository<Embarcacion>

    ) {}

    //Listar todas las alertas
    getAlerts() {
        return this.alertRepository.find({
            relations: ['embarcacion']
        });
    }

    async crearAlerta(uuid: string, alerta: CreateAlertDto) {
        const embarc_encontrada = await this.embarcRepository.findOne({
            where: {
                Id: uuid,
            }
        });

        if (!embarc_encontrada) {
            return new HttpException('la embarcacion no existe!!', HttpStatus.NOT_FOUND)
        }

        const newAlert = this.alertRepository.create(alerta)
        newAlert.embarcacion = embarc_encontrada

        return this.alertRepository.save(newAlert)

    }

}
