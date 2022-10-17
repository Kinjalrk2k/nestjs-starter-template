require('dotenv').config();
import * as path from 'path';
import { DataSourceOptions } from 'typeorm';
import { DataSource } from 'typeorm';

export const ormconfig: DataSourceOptions = {
  type: 'postgres',
  host: process.env.DB_HOST,
  port: 5432,
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  entities: [path.join(__dirname, '..', '/**/*.entity{.ts,.js}')],
  synchronize: false,
  migrations: [path.join(__dirname, '..', '/migrations/**/*{.ts,.js}')],
};

export default new DataSource(ormconfig);
