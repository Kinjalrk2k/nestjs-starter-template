import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import packageFile from '../../package.json';
import fs from 'fs';
import path from 'path';
import { INestApplication } from '@nestjs/common';

const openApiConfig = (app: INestApplication) => {
  const openApiOptions = new DocumentBuilder()
    .setTitle('NestJS API Documentation')
    .setDescription('Public and Internal APIs')
    .setVersion(packageFile.version)
    .addServer('http://localhost:5000', 'Development')
    .addBearerAuth({ type: 'http', scheme: 'bearer', bearerFormat: 'JWT' })
    .build();

  const openApiDocument = SwaggerModule.createDocument(app, openApiOptions);
  const openApiJsonFile = path.join(
    __dirname,
    '..',
    'docs',
    'public',
    'openapi.json',
  );

  const openApiDir = path.dirname(openApiJsonFile);
  if (!fs.existsSync(openApiDir)) fs.mkdirSync(openApiDir, { recursive: true });
  fs.writeFileSync(openApiJsonFile, JSON.stringify(openApiDocument));
};

export default openApiConfig;
