// src/app.service.ts
import { Injectable } from '@nestjs/common';
import { ConfigService } from './config/config.service';

@Injectable()
export class AppService {
  private userName: string;

  constructor(private readonly configService: ConfigService) {
    this.userName = configService.get<string>('DB_USERNAME');
  }

  getHello(): string {
    console.log(this.configService.trace());
    return `Hello ${this.userName}`;
  }
}
