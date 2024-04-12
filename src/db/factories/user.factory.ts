// src/db/factories/user.factory.ts
import { User } from 'src/users/entities/user.entity';
import { setSeederFactory } from 'typeorm-extension';

export default setSeederFactory(User, (faker) => {
  const user = new User();

  const sexFlag = faker.number.int(1);
  const sex: 'male' | 'female' = sexFlag ? 'male' : 'female';

  user.firstName = faker.person.firstName(sex);
  user.lastName = faker.person.lastName(sex);

  return user;
});
