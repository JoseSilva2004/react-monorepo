import { Test, TestingModule } from '@nestjs/testing';
import { EmbarcacionController } from './embarcacion.controller';

describe('EmbarcacionController', () => {
  let controller: EmbarcacionController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EmbarcacionController],
    }).compile();

    controller = module.get<EmbarcacionController>(EmbarcacionController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
