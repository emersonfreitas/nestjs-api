import { Test, TestingModule } from '@nestjs/testing';
import { RobbotController } from './robbot.controller';

describe('RobbotController', () => {
  let controller: RobbotController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RobbotController],
    }).compile();

    controller = module.get<RobbotController>(RobbotController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
