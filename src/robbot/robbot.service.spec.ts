import { Test, TestingModule } from '@nestjs/testing';
import { RobbotService } from './robbot.service';

describe('RobbotService', () => {
  let service: RobbotService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RobbotService],
    }).compile();

    service = module.get<RobbotService>(RobbotService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
