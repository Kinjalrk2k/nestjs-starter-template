import { IndexResponse } from './types/IndexResponse';
import { Injectable } from '@nestjs/common';
import packageFile from '../package.json';
@Injectable()
export class AppService {
  getIndex(): IndexResponse {
    return {
      app: 'NestJS API',
      developer: 'Kinjal Raykarmakar',
      version: packageFile.version,
    };
  }
}
