import * as Minio from 'minio';
import { Injectable } from '@nestjs/common';
import { Readable } from 'stream';

@Injectable()
export class MinioService {
  private minio: Minio.Client = null;

  constructor() {
    this.minio = new Minio.Client({
      endPoint: process.env.MINIO_ENDPOINT,
      port: parseInt(process.env.MINIO_PORT),
      useSSL: false,
      accessKey: process.env.MINIO_ROOT_USER,
      secretKey: process.env.MINIO_ROOT_PASSWORD,
    });
  }

  async bucketExists(): Promise<boolean> {
    return await this.minio.bucketExists(process.env.MINIO_BUCKET_NAME);
  }

  async createBucket(): Promise<void> {
    await this.minio.makeBucket(
      process.env.MINIO_BUCKET_NAME,
      process.env.MINIO_BUCKET_REGION,
    );
  }

  async putObject(
    filename: string,
    fileBuffer: Buffer,
  ): Promise<Minio.UploadedObjectInfo> {
    return await this.minio.putObject(
      process.env.MINIO_BUCKET_NAME,
      filename,
      fileBuffer,
    );
  }

  async getPresignedUrl(filename: string): Promise<string> {
    return await this.minio.presignedGetObject(
      process.env.MINIO_BUCKET_NAME,
      filename,
    );
  }

  async getObject(filename: string): Promise<Readable> {
    return await this.minio.getObject(process.env.MINIO_BUCKET_NAME, filename);
  }
}
