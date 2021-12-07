import { Injectable } from '@nestjs/common';

@Injectable()
export class RobbotService {
  action(): string {
    return 'Robbot action';
  }
}
