import { DataSourceOptions } from 'typeorm';
import { SeederOptions } from 'typeorm-extension';

export const dataSourceOptions: DataSourceOptions & SeederOptions = {
  type: 'postgres',
  replication: {
    master: {
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'postgres',
      database: 'development_database',
    },
    slaves: [
      {
        host: 'localhost',
        port: 5433,
        username: 'postgres',
        password: 'postgres',
        database: 'development_database',
      },
    ],
  },
  logging: true,
  logger: 'advanced-console',
  entities: ['dist/**/*.entity.js'],
  seeds: ['dist/db/seeds/*.seed.js'],
  migrations: ['dist/db/migrations/*.js'],
  factories: ['dist/db/factories/*.factory.js'],

  synchronize: process.env.NODE_ENV === 'development',
};
