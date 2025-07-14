// src/config/config.module.ts
import { Module, Global } from '@nestjs/common';
import { ConfigService } from './config.service';
import { ConfigManagerModule } from '@nestjsplus/config';

@Global()
@Module({
  imports: [
    ConfigManagerModule.register({
      useFile: 'config/development.env',
      allowExtras: true,
    }),
  ],
  providers: [ConfigService],
  exports: [ConfigService],
})
export class ConfigModule {}
