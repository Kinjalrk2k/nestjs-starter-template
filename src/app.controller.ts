import { IndexResponse } from './types/IndexResponse';
import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  /**
   * Index route
   */
  @Get()
  getIndex(): IndexResponse {
    return this.appService.getIndex();
  }
}
