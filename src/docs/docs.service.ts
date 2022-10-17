import { Injectable } from '@nestjs/common';
import fs from 'fs';
import path from 'path';

@Injectable()
export class DocsService {
  getOpenApiJson() {
    const openApiJsonFile = path.join(__dirname, 'public', 'openapi.json');
    const openApiJson = fs.readFileSync(openApiJsonFile).toString('utf-8');

    return openApiJson;
  }

  getRapiDocHtml() {
    const rapidocHtmlFile = path.join(__dirname, 'public', 'rapidoc.html');
    const html = fs.readFileSync(rapidocHtmlFile).toString('utf-8');
    return html;
  }
}
