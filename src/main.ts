require('dotenv').config();
import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import openApiConfig from './config/openapi.config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  openApiConfig(app);

  const PORT = parseInt(process.env.PORT) || 5000;
  await app.listen(PORT);
  Logger.log(`Server started on PORT ${PORT} 🚀`, 'Server');
}

bootstrap();
