import { Controller, Get, Param } from '@nestjs/common';
import { RobbotService } from './robbot.service';

@Controller('robbot')
export class RobbotController {
  constructor(private readonly robbotService: RobbotService) {}

  @Get(':id')
  index(@Param('id') id: string): string {
    console.log(id);
    return this.robbotService.action();
  }
}
