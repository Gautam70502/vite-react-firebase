import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): any {
    return {
      status: true,
      message: 'Hello World!',
    };
  }
}
