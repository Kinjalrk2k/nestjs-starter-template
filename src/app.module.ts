import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DocsModule } from './docs/docs.module';
import { MinioModule } from './minio/minio.module';
import { WarmupModule } from './warmup/warmup.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ormconfig } from 'src/config/typeormDataSource.config';

@Module({
  imports: [
    TypeOrmModule.forRoot(ormconfig),
    DocsModule,
    MinioModule,
    WarmupModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
