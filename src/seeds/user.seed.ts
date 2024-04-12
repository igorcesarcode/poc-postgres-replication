import { DataSource } from 'typeorm';
import { Seeder, SeederFactoryManager } from 'typeorm-extension';
import { User } from '../users/entities/user.entity';

export class UserSeed implements Seeder {
  track?: boolean;
  async run(
    dataSource: DataSource,
    factoryManager: SeederFactoryManager,
  ): Promise<any> {
    const userRepository = dataSource.getRepository(User);

    const userData: Omit<User, 'id' | 'isActive'> = {
      firstName: 'igor',
      lastName: 'cesar',
    };

    const newUser = userRepository.create(userData);
    await userRepository.save(newUser);

    const userFactory = await factoryManager.get(User);
    // save 1 factory generated entity, to the database
    await userFactory.save();

    // save 5 factory generated entities, to the database
    await userFactory.saveMany(100);
  }
}
