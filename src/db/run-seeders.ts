import { DataSource } from 'typeorm';
import { runSeeders } from 'typeorm-extension';

import { dataSourceOptions } from './data-source';

const dataSource = new DataSource({
  ...dataSourceOptions,
  logging: true,
  logger: 'advanced-console',
});
dataSource.logger;

dataSource.initialize().then(async () => {
  console.log('SEEDING STARTED 🌱');

  await dataSource.synchronize(true);
  await runSeeders(dataSource);

  console.log('SEEDING COMPLETE 🌱');

  process.exit();
});
