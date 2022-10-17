import { ApiProperty } from '@nestjs/swagger';

export class IndexResponse {
  @ApiProperty({ description: 'The application name', readOnly: true })
  app: string;

  @ApiProperty({ description: 'The name of the developer', readOnly: true })
  developer: string;

  @ApiProperty({
    description: 'The names of all the developers',
    readOnly: true,
  })
  developers?: string[];

  @ApiProperty({
    description:
      'The current version of the API (reads from the package.json file)',
    readOnly: true,
  })
  version: string;
}
