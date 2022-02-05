import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Tabun!';
  }

  getHello2(): number {
    return 22;
  }
}
