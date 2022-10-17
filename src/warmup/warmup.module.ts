import { Module } from '@nestjs/common';
import { MinioModule } from 'src/minio/minio.module';
import { WarmupService } from './warmup.service';

@Module({
  imports: [MinioModule],
  providers: [WarmupService],
})
export class WarmupModule {}
