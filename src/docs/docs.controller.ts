import { Controller, Get, Header } from '@nestjs/common';
import { DocsService } from './docs.service';
import {
  ApiOkResponse,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';

@ApiTags('docs')
@Controller('docs')
export class DocsController {
  constructor(private readonly docsService: DocsService) {}

  @ApiOperation({ description: 'Get the HTML document for Rapidoc' })
  @ApiOkResponse({ content: { 'text/html': { schema: { type: 'string' } } } })
  @Get()
  @Header('content-type', 'text/html')
  getRapidocHtml(): string {
    return this.docsService.getRapiDocHtml();
  }

  @ApiOperation({ description: 'Get the OpenAPI JSON' })
  @Get('json')
  getOpenApiJson(): any {
    return this.docsService.getOpenApiJson();
  }
}
