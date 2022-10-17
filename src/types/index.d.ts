declare global {
  namespace NodeJS {
    interface ProcessEnv {
      PORT?: string;
      NODE_ENV?: string;
      DB_HOST: string;
      DB_USER: string;
      DB_PASSWORD: string;
      DB_NAME: string;
      MINIO_ENDPOINT: string;
      MINIO_PORT: string;
      MINIO_ROOT_USER: string;
      MINIO_ROOT_PASSWORD: string;
      MINIO_BUCKET_NAME: string;
      MINIO_BUCKET_REGION: string;
    }
  }
}

export {};
