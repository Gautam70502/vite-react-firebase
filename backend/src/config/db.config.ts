import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import * as dotenv from 'dotenv';
dotenv.config();
import { join } from 'path';
import { DataSource, DataSourceOptions } from 'typeorm';
import { SnakeNamingStrategy } from 'typeorm-naming-strategies';
// import { SnakeNamingStrategy } from 'typeorm-naming-strategies';

const baseDir = join(__dirname, '..');

export const dbConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  entities: [baseDir + '/**/*.entity{.ts,.js}'],
  migrations: [baseDir + '/migrations/**/*{.ts,.js}'],
  migrationsTableName: 'bniMigrations',
  namingStrategy: new SnakeNamingStrategy(),
  synchronize: false,
};

const AppDataSource = new DataSource(dbConfig as DataSourceOptions);

AppDataSource.initialize()
  .then(() => {
    console.log('Data Source has been initialized!');
  })
  .catch((err) => {
    console.error('Error during Data Source initialization', err);
  });
export default AppDataSource;
