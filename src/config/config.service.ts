import { Injectable } from '@nestjs/common';
import { ConfigManager } from 'nestjs-config-manager';
import * as Joi from '@hapi/joi';

@Injectable()
export class ConfigService extends ConfigManager {
  provideConfigSpec() {
    return {
      DB_HOST: {
        validate: Joi.string(),
        default: 'localhost',
      },
      DB_PORT: {
        validate: Joi.number()
          .min(5000)
          .max(65535),
        default: 5432,
      },
      DB_USERNAME: {
        validate: Joi.string(),
        required: true,
      },
      DB_PASSWORD: {
        validate: Joi.string(),
        required: true,
      },
      DB_NAME: {
        validate: Joi.string(),
        required: true,
      },
    };
  }
}
