import { Body, Controller, Delete, Get, Param, ParseUUIDPipe, Patch, Post } from '@nestjs/common';
import { EmbarcacionService } from './embarcacion.service';
import { Embarcacion } from './embarcacion.entity';
import { CreateEmbarcacionDto } from './dto/create-embarcacion.dto';
import { UpdateEmbarcacionDto } from './dto/update-embarcacion.dto';

@Controller('embarcacion')
export class EmbarcacionController {
    constructor (private embarcService: EmbarcacionService) {}

    @Post()
    createEmbarcacion(@Body() newEmbarcacion: CreateEmbarcacionDto) {
        return this.embarcService.createEmbarcacion(newEmbarcacion);

    }

    @Get()
    getEmbarcaciones(): Promise<Embarcacion[]> {
        return this.embarcService.getEmbarcaciones();

    }

    @Get(':uuid')
    getEmbarcacionByUUID(@Param('uuid',ParseUUIDPipe) uuid: string ) {
        return this.embarcService.getEmbarcacionByUUID(uuid);

    }

    @Delete(':uuid')
    deleteEmbarcacion(@Param('uuid', ParseUUIDPipe) uuid: string) {
        return this.embarcService.deleteEmbarcacion(uuid);

    }

    //Actualizar
    @Patch(':uuid')
    updateEmbarcacion(@Param('uuid', ParseUUIDPipe) uuid: string, @Body() embarcacion: UpdateEmbarcacionDto) {
        return this.embarcService.updateEmbarcacion(uuid,embarcacion);

    }

}
