import { Body, Controller, Get, Param, ParseUUIDPipe, Post } from '@nestjs/common';
import { AlertaService } from './alerta.service';
import { Alerta } from './alerta.entity';
import { CreateEmbarcacionDto } from '../embarcacion/dto/create-embarcacion.dto';
import { CreateAlertDto } from './dto/create-alert.dto';

@Controller('alerta')
export class AlertaController {
    constructor (private alertService: AlertaService) {}

    @Get()
    getAlerts(): Promise<Alerta[]> {
        return this.alertService.getAlerts()
    }

    @Post(':uuid/embarcacion')
    createAlert(
        @Param('uuid', ParseUUIDPipe) uuid: string,
        @Body() alerta: CreateAlertDto

    ) {
        return this.alertService.crearAlerta(uuid, alerta)
    }



}
