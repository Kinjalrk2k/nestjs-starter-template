import { Injectable, Logger, OnApplicationBootstrap } from '@nestjs/common';
import { MinioService } from 'src/minio/minio.service';

@Injectable()
export class WarmupService implements OnApplicationBootstrap {
  private logger: Logger = null;

  constructor(private readonly minio: MinioService) {
    this.logger = new Logger('Warmup');
  }

  private async createNewBucket() {
    const bucketName = process.env.MINIO_BUCKET_NAME;
    const bucketExists = await this.minio.bucketExists();

    if (!bucketExists) {
      this.logger.warn(`Bucket '${bucketName}' does not exists`);
      this.minio.createBucket();
      this.logger.log(`Bucket '${bucketName}' created`);
    } else {
      this.logger.log(`Bucket '${bucketName}' already exists`);
    }
  }

  async onApplicationBootstrap() {
    await this.createNewBucket();
  }
}
