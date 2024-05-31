import { Test, TestingModule } from '@nestjs/testing';
import { EmbarcacionService } from './embarcacion.service';

describe('EmbarcacionService', () => {
  let service: EmbarcacionService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EmbarcacionService],
    }).compile();

    service = module.get<EmbarcacionService>(EmbarcacionService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
