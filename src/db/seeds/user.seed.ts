import { User } from 'src/users/entities/user.entity';
import { DataSource } from 'typeorm';
import { Seeder, SeederFactoryManager } from 'typeorm-extension';

export default class UserSeeder implements Seeder {
  public async run(
    dataSource: DataSource,
    factoryManager: SeederFactoryManager,
  ): Promise<any> {
    await dataSource.query('TRUNCATE "user" RESTART IDENTITY;');

    // const repository = dataSource.getRepository(User);
    // await repository.insert([
    //   {
    //     firstName: 'igor',
    //     lastName: 'cesar',
    //   },
    // ]);

    const userFactory = factoryManager.get(User);
    // save 1 factory generated entity, to the database
    await userFactory.save();

    // save 5 factory generated entities, to the database
    await userFactory.saveMany(100);
  }
}
